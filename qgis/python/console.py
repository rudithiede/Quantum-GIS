# -*- coding: utf-8 -*-

# This program is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation; either version 2 of the License, or
# (at your option) any later version.

# Some portions of code were taken from managerR plugin.

"""
Implementation of interactive Python console widget for QGIS.

Has +- the same behaviour as command-line interactive console:
- runs commands one by one
- supports expressions that span through more lines
- has command history, accessible using up/down keys
- supports pasting of commands

TODO:
- configuration - init commands, font, ...
- syntax highlighting

"""

from PyQt4.QtCore import *
from PyQt4.QtGui import *
import sys
import traceback
import code


_init_commands = ["from qgis.core import *", "import qgis.utils"]


_console = None

def show_console():
  """ called from QGIS to open the console """
  global _console
  if _console is None:
    _console = PythonConsole()
  _console.show()
  _console.raise_()
  _console.setWindowState( _console.windowState() & ~Qt.WindowMinimized )
  _console.activateWindow()
 


_old_stdout = sys.stdout
_console_output = None

# hook for python console so all output will be redirected
# and then shown in console
def console_displayhook(obj):
  global _console_output
  _console_output = obj

class QgisOutputCatcher:
  def __init__(self):
    self.data = ''
  def write(self, stuff):
    self.data += stuff
  def get_and_clean_data(self):
    tmp = self.data
    self.data = ''
    return tmp
  def flush(self):
    pass

sys.stdout = QgisOutputCatcher()


class PythonConsole(QWidget):
  def __init__(self, parent=None):
    QWidget.__init__(self, parent)

    self.edit = PythonEdit()
    self.l = QVBoxLayout()
    self.l.addWidget(self.edit)
    self.setLayout(self.l)
    self.setWindowTitle("Python console")

    s = QSettings()
    self.restoreGeometry(s.value("/python/console/geometry").toByteArray())

  def sizeHint(self):
    return QSize(500,300)

  def closeEvent(self, event):
    s = QSettings()
    s.setValue("/python/console/geometry", QVariant(self.saveGeometry()))
    QWidget.closeEvent(self, event)


class PythonEdit(QTextEdit, code.InteractiveInterpreter):

  def __init__(self,parent=None):
    QTextEdit.__init__(self, parent)
    code.InteractiveInterpreter.__init__(self, locals=None)

    self.setTextInteractionFlags(Qt.TextEditorInteraction)
    self.setAcceptDrops(False)
    self.setMinimumSize(30, 30)
    self.setUndoRedoEnabled(False)
    self.setAcceptRichText(False)
    monofont = QFont("Bitstream Vera Sans Mono", 10)
    self.setFont(monofont)

    self.buffer = []

    self.insertPlainText("To access Quantum GIS environment from this console\n"
                         "use qgis.utils.iface object (instance of QgisInterface class).\n"
			 "\n")

    for line in _init_commands:
      self.runsource(line)

    self.displayPrompt(False)

    self.history = QStringList()
    self.historyIndex = 0

    #from pythonhigh import PythonHighlighter
    #self.high = PythonHighlighter(self)

  def displayPrompt(self, more=False):
    self.currentPrompt = "... " if more else ">>> "
    self.currentPromptLength = len(self.currentPrompt)
    self.insertPlainText(self.currentPrompt)
    self.moveCursor(QTextCursor.End, QTextCursor.MoveAnchor)

  def isCursorInEditionZone(self):
    cursor = self.textCursor()
    pos = cursor.position()
    block = self.document().lastBlock()
    last = block.position() + self.currentPromptLength
    return pos >= last

  def currentCommand(self):
    block = self.cursor.block()
    text = block.text()
    return text.right(text.length()-self.currentPromptLength)

  def showPrevious(self):
        if self.historyIndex < len(self.history) and not self.history.isEmpty():
            self.cursor.movePosition(QTextCursor.EndOfBlock, QTextCursor.MoveAnchor)
            self.cursor.movePosition(QTextCursor.StartOfBlock, QTextCursor.KeepAnchor)
            self.cursor.removeSelectedText()
            self.cursor.insertText(self.currentPrompt)
            self.historyIndex += 1
            if self.historyIndex == len(self.history):
                self.insertPlainText("")
            else:
                self.insertPlainText(self.history[self.historyIndex])

  def showNext(self):
        if  self.historyIndex > 0 and not self.history.isEmpty():
            self.cursor.movePosition(QTextCursor.EndOfBlock, QTextCursor.MoveAnchor)
            self.cursor.movePosition(QTextCursor.StartOfBlock, QTextCursor.KeepAnchor)
            self.cursor.removeSelectedText()
            self.cursor.insertText(self.currentPrompt)
            self.historyIndex -= 1
            if self.historyIndex == len(self.history):
                self.insertPlainText("")
            else:
                self.insertPlainText(self.history[self.historyIndex])

  def updateHistory(self, command):
        if isinstance(command, QStringList):
            for line in command:
                self.history.append(line)
        elif not command == "":
            if len(self.history) <= 0 or \
            not command == self.history[-1]:
                self.history.append(command)
        self.historyIndex = len(self.history)

  def keyPressEvent(self, e):
        self.cursor = self.textCursor()
        # if the cursor isn't in the edition zone, don't do anything except Ctrl+C
        if not self.isCursorInEditionZone():
            if e.modifiers() == Qt.ControlModifier or e.modifiers() == Qt.MetaModifier:
                if e.key() == Qt.Key_C or e.key() == Qt.Key_A:
                    QTextEdit.keyPressEvent(self, e)
            else:
                # all other keystrokes get sent to the input line
                self.cursor.movePosition(QTextCursor.End, QTextCursor.MoveAnchor)
        else:
            # if Return is pressed, then perform the commands
            if e.key() == Qt.Key_Return:
                self.entered()
            # if Up or Down is pressed
            elif e.key() == Qt.Key_Down:
                self.showPrevious()
            elif e.key() == Qt.Key_Up:
                self.showNext()
            # if backspace is pressed, delete until we get to the prompt
            elif e.key() == Qt.Key_Backspace:
                if not self.cursor.hasSelection() and self.cursor.columnNumber() == self.currentPromptLength:
                    return
                QTextEdit.keyPressEvent(self, e)
            # if the left key is pressed, move left until we get to the prompt
            elif e.key() == Qt.Key_Left and self.cursor.position() > self.document().lastBlock().position() + self.currentPromptLength:
                if e.modifiers() == Qt.ShiftModifier:
                    anchor = QTextCursor.KeepAnchor
                else:
                    anchor = QTextCursor.MoveAnchor
                if (e.modifiers() == Qt.ControlModifier or e.modifiers() == Qt.MetaModifier):
                    self.cursor.movePosition(QTextCursor.WordLeft, anchor)
                else:
                    self.cursor.movePosition(QTextCursor.Left, anchor)
            # use normal operation for right key
            elif e.key() == Qt.Key_Right:
                if e.modifiers() == Qt.ShiftModifier:
                    anchor = QTextCursor.KeepAnchor
                else:
                    anchor = QTextCursor.MoveAnchor
                if (e.modifiers() == Qt.ControlModifier or e.modifiers() == Qt.MetaModifier):
                    self.cursor.movePosition(QTextCursor.WordRight, anchor)
                else:
                    self.cursor.movePosition(QTextCursor.Right, anchor)
            # if home is pressed, move cursor to right of prompt
            elif e.key() == Qt.Key_Home:
                if e.modifiers() == Qt.ShiftModifier:
                    anchor = QTextCursor.KeepAnchor
                else:
                    anchor = QTextCursor.MoveAnchor
                self.cursor.movePosition(QTextCursor.StartOfBlock, anchor, 1)
                self.cursor.movePosition(QTextCursor.Right, anchor, self.currentPromptLength)
            # use normal operation for end key
            elif e.key() == Qt.Key_End:
                if e.modifiers() == Qt.ShiftModifier:
                    anchor = QTextCursor.KeepAnchor
                else:
                    anchor = QTextCursor.MoveAnchor
                self.cursor.movePosition(QTextCursor.EndOfBlock, anchor, 1)
            # use normal operation for all remaining keys
            else:
                QTextEdit.keyPressEvent(self, e)
        self.setTextCursor(self.cursor)
        self.ensureCursorVisible()

  def insertFromMimeData(self, source):
        self.cursor = self.textCursor()
        self.cursor.movePosition(QTextCursor.End, QTextCursor.MoveAnchor, 1)
        self.setTextCursor(self.cursor)
        if source.hasText():
            pasteList = QStringList()
            pasteList = source.text().split("\n")
            for line in pasteList:
		self.insertPlainText(line)
		self.runCommand(unicode(line))

  def entered(self):
    self.cursor.movePosition(QTextCursor.End, QTextCursor.MoveAnchor)
    self.runCommand( unicode(self.currentCommand()) )

  def runCommand(self, cmd):

    self.updateHistory(cmd)

    self.insertPlainText("\n")

    self.buffer.append(cmd)
    src = "\n".join(self.buffer)
    more = self.runsource(src, "<input>")
    if not more:
      self.buffer = []

    output = sys.stdout.get_and_clean_data()
    if output:
      self.insertPlainText(output)
    self.displayPrompt(more)

  def write(self, txt):
    """ reimplementation from code.InteractiveInterpreter """
    self.insertPlainText(txt)


if __name__ == '__main__':
  a = QApplication(sys.argv)
  show_console()
  a.exec_()
