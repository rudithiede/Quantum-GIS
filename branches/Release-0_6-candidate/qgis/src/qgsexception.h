/***************************************************************************
                          qgsproject.cpp -  description
                             -------------------
  begin                : August 31, 2004
  copyright            : (C) 2004 by Mark Coletti
  email                : mcoletti at gmail.com
***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
/* $Id$ */
#ifndef QGSEXCEPTION_H
#define QGSEXCEPTION_H

#include <exception>
#include <string>

#include <qstring.h>

/**
   Defines a qgis exception class
 */
class QgsException : public std::exception
{
public:

    QgsException( std::string const & what )
        : what_( what )
        {}

    QgsException( QString const & what )
        : what_( (const char *)what )
        {}

    virtual ~QgsException() throw()
        {}

    const char* what() const throw()
    {
        return what_.c_str();
    }
    
private:

    /// description of exception
    std::string what_;

}; // class QgsException


/** for Qgis I/O related exceptions 

  @note usually thrown for opening file's that don't exist, and the like.

*/
class QgsIOException : public QgsException
{
public:

    QgsIOException( std::string const & what )
        : QgsException( what )
        {}

    QgsIOException( QString const & what )
        : QgsException( what )
        {}

}; // class QgsIOException

#endif
