#############################################################################
# Makefile for building: qgis
# Generated by qmake (1.03a) on: Sun Aug 11 18:37:20 2002
# Project:  qgis.pro
# Template: subdirs
# Command: $(QMAKE) qgis.pro
#############################################################################

MAKEFILE =	Makefile
QMAKE    =	qmake
SUBDIRS  =	src
DEL_FILE =    rm -f
SUBTARGETS =	 \
		sub-src

first: all

all: Makefile $(SUBTARGETS)

src/$(MAKEFILE): 
	cd src && $(QMAKE) -o $(MAKEFILE)
sub-src: src/$(MAKEFILE) FORCE
	cd src && $(MAKE) -f $(MAKEFILE)

Makefile: qgis.pro  $(QTDIR)/mkspecs/default/qmake.conf 
	$(QMAKE) qgis.pro
qmake: qmake_all
	@$(QMAKE) qgis.pro

qmake_all: src/$(MAKEFILE)
	for i in $(SUBDIRS); do ( if [ -d $$i ]; then cd $$i ; grep "^qmake_all:" $(MAKEFILE) 2>/dev/null >/dev/null && $(MAKE) -f $(MAKEFILE) qmake_all || true; fi; ) ; done

clean: qmake_all FORCE
	for i in $(SUBDIRS); do ( if [ -d $$i ]; then cd $$i ; $(MAKE) -f $(MAKEFILE) clean; fi; ) ; done
uninstall install uiclean mocclean: qmake_all FORCE
	for i in $(SUBDIRS); do ( if [ -d $$i ]; then cd $$i ; $(MAKE) -f $(MAKEFILE) $@; fi; ) ; done
distclean: qmake_all FORCE
	for i in $(SUBDIRS); do ( if [ -d $$i ]; then cd $$i ; $(MAKE) -f $(MAKEFILE) $@ ; $(DEL_FILE) $(MAKEFILE) ; fi; ) ; done

FORCE:

