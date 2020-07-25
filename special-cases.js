const SPECIAL_CASES = {
    // Python 2.7

    // Files that were removed
    "library/fpformat.html": null,

    "library/mutex.html": null,
    "library/new.html": null,

    "library/statvfs.html": null,
    "library/dircache.html": null,
    "library/macpath.html": null,

    "library/dbhash.html": null,
    "library/bsddb.html": null,

    // Contents page - 16. Optional Operating System Services
    // The modules in this list were moved to many sections
    // Better to not redirect, then clicking on one of the modules will redirect if it still exists.
    // "library/someos.html": "library/index.html",
    "library/someos.html": null,

    // "library/popen2.html": "library/subprocess.html",
    "library/popen2.html": null,

    // "library/mhlib.html": "library/mailbox.html",
    "library/mhlib.html": null,
    // "library/mimetools.html": "library/email.html",
    "library/mimetools.html": null,
    // "library/mimewriter.html": "library/email.html",
    "library/mimewriter.html": null,
    // "library/mimify.html": "library/email.html",
    "library/mimify.html": null,
    // "library/multifile.html": "library/email.html",
    "library/multifile.html": null,

    "library/sgmllib.html": null,

    "library/imageop.html": null,

    // "library/hotshot.html": "library/profile.html",
    "library/hotshot.html": null,

    "library/future_builtins.html": null,
    "library/user.html": null,
    "library/fpectl.html": null,

    // Contents page - 30. Restricted Execution
    "library/restricted.html": null,
    "library/rexec.html": null,
    "library/bastion.html": null,

    "library/imputil.html": null,

    // Contents page - 33. Python compiler package
    "library/compiler.html": null,

    // "The dl module has been removed in Python 3. Use the ctypes module instead"
    "library/dl.html": null,
    "library/posixfile.html": null,

    // TODO: link all functions to subprocess.run specifically?
    // "library/commands.html": "library/subprocess.html",
    // "library/commands.html#module-commands": "library/subprocess.html#module-subprocess",
    // "library/commands.html#commands-utilities-for-running-commands": "library/subprocess.html#subprocess-subprocess-management",
    // "library/commands.html#commands.getstatusoutput": "library/subprocess.html#subprocess.run",
    // "library/commands.html#commands.getoutput": "library/subprocess.html#subprocess.run",
    // "library/commands.html#commands.getstatus": "library/subprocess.html#subprocess.run",
    "library/commands.html": null,

    // Contents page - 37. Mac OS X specific services
    "library/mac.html": null,
    "library/ic.html": null,
    "library/macos.html": null,
    "library/macostools.html": null,
    "library/easydialogs.html": null,
    "library/framework.html": null,
    "library/autogil.html": null,
    "library/carbon.html": null,
    "library/colorpicker.html": null,

    // Contents page - 38. MacPython OSA Modules
    "library/macosa.html": null,
    "library/gensuitemodule.html": null,
    "library/aetools.html": null,
    "library/aepack.html": null,
    "library/aetypes.html": null,
    "library/miniaeframe.html": null,

    // Contents page - 39. SGI IRIX Specific Services
    "library/sgi.html": null,
    "library/al.html": null,
    "library/cd.html": null,
    "library/fl.html": null,
    "library/fm.html": null,
    "library/gl.html": null,
    "library/imgfile.html": null,
    "library/jpeg.html": null,

    // Contents page - 40. SunOS Specific Services
    "library/sun.html": null,
    "library/sunaudio.html": null,

    // Plain Integer Objects
    // "c-api/int.html": "c-api/long.html",
    "c-api/int.html": null,
    // String/Bytes Objects
    "c-api/string.html": null,
    // Class and Instance Objects
    "c-api/class.html": null,
    // CObjects
    "c-api/cobject.html": null,

    // Idioms and Anti-Idioms in Python
    "howto/doanddont.html": null,
    // HOWTO Use Python in the web
    "howto/webservers.html": null,



    // https://docs.python.org/library/2to3.html#2to3fixer-basestring
    "library/functions.html#basestring": "library/functions.html#func-str",

    "library/functions.html#bytearray": "library/functions.html#func-bytearray",

    "library/functions.html#cmp": null,

    // https://docs.python.org/library/2to3.html#2to3fixer-execfile
    // Redirecting could be confusing. It's replaced by exec(open(fn).read())
    // "library/functions.html#execfile": "library/functions.html#exec",
    // https://docs.python.org/whatsnew/3.0.html#builtins
    // "library/functions.html#execfile": "whatsnew/3.0.html#builtins",
    "library/functions.html#execfile": null,

    "library/functions.html#file": null,

    // https://docs.python.org/library/2to3.html#2to3fixer-long
    // long and int were unified
    // TODO: don't redirect?
    // "library/functions.html#long": null,
    "library/functions.html#long": "library/functions.html#int",

    "library/functions.html#range": "library/functions.html#func-range",

    // https://docs.python.org/library/2to3.html#2to3fixer-raw_input
    "library/functions.html#raw_input": "library/functions.html#input",

    // https://docs.python.org/library/2to3.html#2to3fixer-reduce
    "library/functions.html#reduce": "library/functools.html#functools.reduce",

    // https://docs.python.org/library/2to3.html#2to3fixer-reload
    "library/functions.html#reload": "library/importlib.html#importlib.reload",

    "library/functions.html#func-repr": "library/functions.html#repr",
    "library/functions.html#str": "library/functions.html#func-str",
    "library/functions.html#tuple": "library/functions.html#func-tuple",
    "library/functions.html#unichr": "library/functions.html#chr",

    // https://docs.python.org/library/2to3.html#2to3fixer-unicode
    "library/functions.html#unicode": "library/functions.html#func-str",

    // https://docs.python.org/library/2to3.html#2to3fixer-xrange
    "library/functions.html#xrange": "library/functions.html#func-range",

    "library/functions.html#non-essential-built-in-functions": null,
    "library/functions.html#non-essential-built-in-funcs": null,

    // https://docs.python.org/library/2to3.html#2to3fixer-apply
    // "library/functions.html#apply": "tutorial/controlflow.html#tut-unpacking-arguments",
    "library/functions.html#apply": null,

    // https://docs.python.org/library/2to3.html#2to3fixer-buffer
    // TODO: redirect? The memoryview API is similar but not exactly the same as buffer
    // "library/functions.html#buffer": "library/functions.html#func-memoryview",
    "library/functions.html#buffer": null,

    "library/functions.html#coerce": null,

    // https://docs.python.org/library/2to3.html#2to3fixer-intern
    "library/functions.html#intern": "library/sys.html#sys.intern",


    "library/stdtypes.html#numeric-types-int-float-long-complex": "library/stdtypes.html#numeric-types-int-float-complex",
    "library/stdtypes.html#long.bit_length": "library/stdtypes.html#int.bit_length",


    // https://docs.python.org/library/2to3.html#2to3fixer-next
    // x.next() became next(x)
    "library/stdtypes.html#iterator.next": "library/stdtypes.html#iterator.__next__",
    "reference/expressions.html#generator.next": "reference/expressions.html#generator.__next__",
    // TODO
    // "library/stdtypes.html#file.next": "tutorial/inputoutput.html#methods-of-file-objects",
    // "library/stdtypes.html#file.next": "library/io.html#io.IOBase.readlines",
    "library/stdtypes.html#file.next": null,
    "library/csv.html#csv.csvreader.next": "library/csv.html#csv.csvreader.__next__",


    "library/stdtypes.html#sequence-types-str-unicode-list-tuple-bytearray-buffer-xrange": "library/stdtypes.html#sequence-types-list-tuple-range",
    // TODO: redirect this?
    // "library/stdtypes.html#str.decode": "library/stdtypes.html#bytes.decode",
    "library/stdtypes.html#str.decode": null,
    "library/stdtypes.html#unicode.splitlines": "library/stdtypes.html#str.splitlines",
    "library/stdtypes.html#unicode.isnumeric": "library/stdtypes.html#str.isnumeric",
    "library/stdtypes.html#unicode.isdecimal": "library/stdtypes.html#str.isdecimal",
    "library/stdtypes.html#string-formatting-operations": "library/stdtypes.html#printf-style-string-formatting",
    "library/stdtypes.html#string-formatting": "library/stdtypes.html#printf-style-string-formatting",

    "library/stdtypes.html#xrange-type": "library/stdtypes.html#ranges",
    "library/stdtypes.html#typesseq-xrange": "library/stdtypes.html#ranges",

    // https://docs.python.org/library/2to3.html#2to3fixer-has_key
    // Can't link to the "key in d" section
    // "library/stdtypes.html#dict.has_key": "library/stdtypes.html#dict",
    "library/stdtypes.html#dict.has_key": null,

    // https://docs.python.org/library/2to3.html#2to3fixer-dict
    "library/stdtypes.html#dict.iteritems": "library/stdtypes.html#dict.items",
    "library/stdtypes.html#dict.iterkeys": "library/stdtypes.html#dict.keys",
    "library/stdtypes.html#dict.itervalues": "library/stdtypes.html#dict.values",
    "library/stdtypes.html#dict.viewitems": "library/stdtypes.html#dict.items",
    "library/stdtypes.html#dict.viewkeys": "library/stdtypes.html#dict.keys",
    "library/stdtypes.html#dict.viewvalues": "library/stdtypes.html#dict.values",

    // TODO: check these redirects.
    "library/stdtypes.html#file-objects": "library/io.html#overview",
    "library/stdtypes.html#bltin-file-objects": "library/io.html#overview",
    "library/stdtypes.html#file.close": "library/io.html#io.IOBase.close",
    "library/stdtypes.html#file.flush": "library/io.html#io.IOBase.flush",
    "library/stdtypes.html#file.fileno": "library/io.html#io.IOBase.fileno",
    "library/stdtypes.html#file.isatty": "library/io.html#io.IOBase.isatty",
    "library/stdtypes.html#file.read": "library/io.html#io.RawIOBase.read",
    "library/stdtypes.html#file.readline": "library/io.html#io.IOBase.readline",
    "library/stdtypes.html#file.readlines": "library/io.html#io.IOBase.readlines",
    // https://docs.python.org/library/2to3.html#2to3fixer-xreadlines
    // "Deprecated since version 2.3: Use for line in file instead."
    "library/stdtypes.html#file.xreadlines": null,
    "library/stdtypes.html#file.seek": "library/io.html#io.IOBase.seek",
    "library/stdtypes.html#file.tell": "library/io.html#io.IOBase.tell",
    "library/stdtypes.html#file.truncate": "library/io.html#io.IOBase.truncate",
    // TODO: there are 4 different write() methods
    "library/stdtypes.html#file.write": "library/io.html#io.TextIOBase.write",
    "library/stdtypes.html#file.writelines": "library/io.html#io.IOBase.writelines",

    "library/stdtypes.html#file.closed": "library/io.html#io.IOBase.closed",
    "library/stdtypes.html#file.encoding": "library/io.html#io.TextIOBase.encoding",
    // TODO: is this right?
    "library/stdtypes.html#file.errors": "library/io.html#io.TextIOBase.errors",
    "library/stdtypes.html#file.mode": "library/io.html#io.FileIO.mode",
    "library/stdtypes.html#file.name": "library/io.html#io.FileIO.name",
    "library/stdtypes.html#file.newlines": "library/io.html#io.TextIOBase.newlines",
    "library/stdtypes.html#file.softspace": null,

    "library/stdtypes.html#memoryview-type": "library/stdtypes.html#memory-views",

    // "Deprecated since version 2.2: Use the built-in function dir() to get a list of an object’s attributes"
    "library/stdtypes.html#object.__methods__": null,
    "library/stdtypes.html#object.__members__": null,

    "library/exceptions.html#module-exceptions": "library/exceptions.html#built-in-exceptions",
    "library/exceptions.html#exceptions.BaseException": "library/exceptions.html#BaseException",
    "library/exceptions.html#exceptions.BaseException.args": "library/exceptions.html#BaseException.args",
    "library/exceptions.html#exceptions.Exception": "library/exceptions.html#Exception",
    // https://docs.python.org/library/2to3.html#2to3fixer-standarderror
    // "library/exceptions.html#exceptions.StandardError": null,
    "library/exceptions.html#exceptions.StandardError": "library/exceptions.html#Exception",
    "library/exceptions.html#exceptions.ArithmeticError": "library/exceptions.html#ArithmeticError",
    "library/exceptions.html#exceptions.BufferError": "library/exceptions.html#BufferError",
    "library/exceptions.html#exceptions.LookupError": "library/exceptions.html#LookupError",
    "library/exceptions.html#exceptions.EnvironmentError": "library/exceptions.html#EnvironmentError",
    "library/exceptions.html#exceptions.AssertionError": "library/exceptions.html#AssertionError",
    "library/exceptions.html#exceptions.AttributeError": "library/exceptions.html#AttributeError",
    "library/exceptions.html#exceptions.EOFError": "library/exceptions.html#EOFError",
    "library/exceptions.html#exceptions.FloatingPointError": "library/exceptions.html#FloatingPointError",
    "library/exceptions.html#exceptions.GeneratorExit": "library/exceptions.html#GeneratorExit",
    "library/exceptions.html#exceptions.IOError": "library/exceptions.html#IOError",
    "library/exceptions.html#exceptions.ImportError": "library/exceptions.html#ImportError",
    "library/exceptions.html#exceptions.IndexError": "library/exceptions.html#IndexError",
    "library/exceptions.html#exceptions.KeyError": "library/exceptions.html#KeyError",
    "library/exceptions.html#exceptions.KeyboardInterrupt": "library/exceptions.html#KeyboardInterrupt",
    "library/exceptions.html#exceptions.MemoryError": "library/exceptions.html#MemoryError",
    "library/exceptions.html#exceptions.NameError": "library/exceptions.html#NameError",
    "library/exceptions.html#exceptions.NotImplementedError": "library/exceptions.html#NotImplementedError",
    "library/exceptions.html#exceptions.OSError": "library/exceptions.html#OSError",
    "library/exceptions.html#exceptions.OverflowError": "library/exceptions.html#OverflowError",
    "library/exceptions.html#exceptions.ReferenceError": "library/exceptions.html#ReferenceError",
    "library/exceptions.html#exceptions.RuntimeError": "library/exceptions.html#RuntimeError",
    "library/exceptions.html#exceptions.StopIteration": "library/exceptions.html#StopIteration",
    "library/exceptions.html#exceptions.SyntaxError": "library/exceptions.html#SyntaxError",
    "library/exceptions.html#exceptions.IndentationError": "library/exceptions.html#IndentationError",
    "library/exceptions.html#exceptions.TabError": "library/exceptions.html#TabError",
    "library/exceptions.html#exceptions.SystemError": "library/exceptions.html#SystemError",
    "library/exceptions.html#exceptions.SystemExit": "library/exceptions.html#SystemExit",
    "library/exceptions.html#exceptions.TypeError": "library/exceptions.html#TypeError",
    "library/exceptions.html#exceptions.UnboundLocalError": "library/exceptions.html#UnboundLocalError",
    "library/exceptions.html#exceptions.UnicodeError": "library/exceptions.html#UnicodeError",
    "library/exceptions.html#exceptions.UnicodeError.encoding": "library/exceptions.html#UnicodeError.encoding",
    "library/exceptions.html#exceptions.UnicodeError.reason": "library/exceptions.html#UnicodeError.reason",
    "library/exceptions.html#exceptions.UnicodeError.object": "library/exceptions.html#UnicodeError.object",
    "library/exceptions.html#exceptions.UnicodeError.start": "library/exceptions.html#UnicodeError.start",
    "library/exceptions.html#exceptions.UnicodeError.end": "library/exceptions.html#UnicodeError.end",
    "library/exceptions.html#exceptions.UnicodeEncodeError": "library/exceptions.html#UnicodeEncodeError",
    "library/exceptions.html#exceptions.UnicodeDecodeError": "library/exceptions.html#UnicodeDecodeError",
    "library/exceptions.html#exceptions.UnicodeTranslateError": "library/exceptions.html#UnicodeTranslateError",
    "library/exceptions.html#exceptions.ValueError": "library/exceptions.html#ValueError",
    // "Only available on VMS"
    "library/exceptions.html#exceptions.VMSError": null,
    "library/exceptions.html#exceptions.WindowsError": "library/exceptions.html#WindowsError",
    "library/exceptions.html#exceptions.ZeroDivisionError": "library/exceptions.html#ZeroDivisionError",
    "library/exceptions.html#exceptions.Warning": "library/exceptions.html#Warning",
    "library/exceptions.html#exceptions.UserWarning": "library/exceptions.html#UserWarning",
    "library/exceptions.html#exceptions.DeprecationWarning": "library/exceptions.html#DeprecationWarning",
    "library/exceptions.html#exceptions.PendingDeprecationWarning": "library/exceptions.html#PendingDeprecationWarning",
    "library/exceptions.html#exceptions.SyntaxWarning": "library/exceptions.html#SyntaxWarning",
    "library/exceptions.html#exceptions.RuntimeWarning": "library/exceptions.html#RuntimeWarning",
    "library/exceptions.html#exceptions.FutureWarning": "library/exceptions.html#FutureWarning",
    "library/exceptions.html#exceptions.ImportWarning": "library/exceptions.html#ImportWarning",
    "library/exceptions.html#exceptions.UnicodeWarning": "library/exceptions.html#UnicodeWarning",
    "library/exceptions.html#exceptions.BytesWarning": "library/exceptions.html#BytesWarning",


    // This is a list of links to related libraries
    // TODO: Don't redirect?
    // "library/strings.html": null,
    "library/strings.html": "library/text.html",
    "library/strings.html#string-services": "library/text.html#text-processing-services",


    // These locale-dependent constants were removed
    // TODO: don't redirect?
    // "library/string.html#string.letters": null,
    // "library/string.html#string.lowercase": null,
    // "library/string.html#string.uppercase": null,
    "library/string.html#string.letters": "library/string.html#string.ascii_letters",
    "library/string.html#string.lowercase": "library/string.html#string.ascii_lowercase",
    "library/string.html#string.uppercase": "library/string.html#string.ascii_uppercase",

    "library/string.html#new-string-formatting": "library/string.html#custom-string-formatting",
    "library/string.html#string-functions": "library/stdtypes.html#string-methods",
    "library/string.html#string.maketrans": "library/stdtypes.html#str.maketrans",
    // TODO: Only the first three of these were removed from Python 3. Redirect to "String methods"?
    // "library/string.html#deprecated-string-functions": "library/stdtypes.html#string-methods",
    "library/string.html#deprecated-string-functions": null,
    "library/string.html#string.atof": "library/functions.html#float",
    "library/string.html#string.atoi": "library/functions.html#int",
    "library/string.html#string.atol": "library/functions.html#int",

    "library/string.html#string.capitalize": "library/stdtypes.html#str.capitalize",
    "library/string.html#string.expandtabs": "library/stdtypes.html#str.expandtabs",
    "library/string.html#string.find": "library/stdtypes.html#str.find",
    "library/string.html#string.rfind": "library/stdtypes.html#str.rfind",
    "library/string.html#string.index": "library/stdtypes.html#str.index",
    "library/string.html#string.rindex": "library/stdtypes.html#str.rindex",
    "library/string.html#string.count": "library/stdtypes.html#str.count",
    "library/string.html#string.lower": "library/stdtypes.html#str.lower",
    "library/string.html#string.split": "library/stdtypes.html#str.split",
    "library/string.html#string.rsplit": "library/stdtypes.html#str.rsplit",
    // "This function behaves identically to split()"
    // "library/string.html#string.splitfields": "library/stdtypes.html#str.split",
    "library/string.html#string.splitfields": null,
    "library/string.html#string.join": "library/stdtypes.html#str.join",
    // "This function behaves identically to join()"
    // "library/string.html#string.joinfields": "library/stdtypes.html#str.join",
    "library/string.html#string.joinfields": null,
    "library/string.html#string.lstrip": "library/stdtypes.html#str.lstrip",
    "library/string.html#string.rstrip": "library/stdtypes.html#str.rstrip",
    "library/string.html#string.strip": "library/stdtypes.html#str.strip",
    "library/string.html#string.swapcase": "library/stdtypes.html#str.swapcase",
    "library/string.html#string.translate": "library/stdtypes.html#str.translate",
    "library/string.html#string.upper": "library/stdtypes.html#str.upper",
    "library/string.html#string.ljust": "library/stdtypes.html#str.ljust",
    "library/string.html#string.rjust": "library/stdtypes.html#str.rjust",
    "library/string.html#string.center": "library/stdtypes.html#str.center",
    "library/string.html#string.zfill": "library/stdtypes.html#str.zfill",
    "library/string.html#string.replace": "library/stdtypes.html#str.replace",


    // This flag is redundant on Python 3 and the documentation for the ASCII explains that
    // but redirecting there could be confusing
    // "library/re.html#re.U": "library/re.html#re.A",
    // "library/re.html#re.UNICODE": "library/re.html#re.ASCII",
    "library/re.html#re.U": null,
    "library/re.html#re.UNICODE": null,

    "library/re.html#re.RegexObject": "library/re.html#regular-expression-objects",
    "library/re.html#re.RegexObject.search": "library/re.html#re.Pattern.search",
    "library/re.html#re.RegexObject.match": "library/re.html#re.Pattern.match",
    "library/re.html#re.RegexObject.split": "library/re.html#re.Pattern.split",
    "library/re.html#re.RegexObject.findall": "library/re.html#re.Pattern.findall",
    "library/re.html#re.RegexObject.finditer": "library/re.html#re.Pattern.finditer",
    "library/re.html#re.RegexObject.sub": "library/re.html#re.Pattern.sub",
    "library/re.html#re.RegexObject.subn": "library/re.html#re.Pattern.subn",
    "library/re.html#re.RegexObject.flags": "library/re.html#re.Pattern.flags",
    "library/re.html#re.RegexObject.groups": "library/re.html#re.Pattern.groups",
    "library/re.html#re.RegexObject.groupindex": "library/re.html#re.Pattern.groupindex",
    "library/re.html#re.RegexObject.pattern": "library/re.html#re.Pattern.pattern",
    "library/re.html#re.MatchObject": "library/re.html#match-objects",
    "library/re.html#re.MatchObject.expand": "library/re.html#re.Match.expand",
    "library/re.html#re.MatchObject.group": "library/re.html#re.Match.group",
    "library/re.html#re.MatchObject.groups": "library/re.html#re.Match.groups",
    "library/re.html#re.MatchObject.groupdict": "library/re.html#re.Match.groupdict",
    "library/re.html#re.MatchObject.start": "library/re.html#re.Match.start",
    "library/re.html#re.MatchObject.end": "library/re.html#re.Match.end",
    "library/re.html#re.MatchObject.span": "library/re.html#re.Match.span",
    "library/re.html#re.MatchObject.pos": "library/re.html#re.Match.pos",
    "library/re.html#re.MatchObject.endpos": "library/re.html#re.Match.endpos",
    "library/re.html#re.MatchObject.lastindex": "library/re.html#re.Match.lastindex",
    "library/re.html#re.MatchObject.lastgroup": "library/re.html#re.Match.lastgroup",
    "library/re.html#re.MatchObject.re": "library/re.html#re.Match.re",
    "library/re.html#re.MatchObject.string": "library/re.html#re.Match.string",
    "library/re.html#examples": "library/re.html#regular-expression-examples",


    "library/struct.html#struct-interpret-strings-as-packed-binary-data": "library/struct.html#struct-interpret-bytes-as-packed-binary-data",


    "library/stringio.html": "library/io.html#io.StringIO",
    "library/stringio.html#module-StringIO": "library/io.html#io.StringIO",
    "library/stringio.html#stringio-read-and-write-strings-as-files": "library/io.html#io.StringIO",
    "library/stringio.html#StringIO.StringIO": "library/io.html#io.StringIO",
    "library/stringio.html#StringIO.StringIO.getvalue": "library/io.html#io.StringIO.getvalue",
    // TODO: link to the function it inherits from?
    // "library/stringio.html#StringIO.StringIO.close": "library/io.html#io.IOBase.close",
    "library/stringio.html#StringIO.StringIO.close": "library/io.html#io.StringIO",
    "library/stringio.html#module-cStringIO": "library/io.html#io.StringIO",
    "library/stringio.html#cstringio-faster-version-of-stringio": "library/io.html#io.StringIO",
    "library/stringio.html#cStringIO.StringIO": "library/io.html#io.StringIO",
    // TODO: classes don't exist, link to the module anyway?
    "library/stringio.html#cStringIO.InputType": null,
    "library/stringio.html#cStringIO.OutputType": null,


    // Footnotes
    "library/codecs.html#encoding-note": null,
    "library/codecs.html#decoding-note": null,


    "library/collections.html#collections-high-performance-container-datatypes": "library/collections.html#collections-container-datatypes",
    "library/collections.html#collections-abstract-base-classes": "library/collections.abc.html#collections-abstract-base-classes",
    "library/collections.html#collections.Container": "library/collections.abc.html#collections.abc.Container",
    "library/collections.html#collections.Hashable": "library/collections.abc.html#collections.abc.Hashable",
    "library/collections.html#collections.Sized": "library/collections.abc.html#collections.abc.Sized",
    "library/collections.html#collections.Callable": "library/collections.abc.html#collections.abc.Callable",
    "library/collections.html#collections.Iterable": "library/collections.abc.html#collections.abc.Iterable",
    "library/collections.html#collections.Iterator": "library/collections.abc.html#collections.abc.Iterator",
    "library/collections.html#collections.Sequence": "library/collections.abc.html#collections.abc.Sequence",
    "library/collections.html#collections.MutableSequence": "library/collections.abc.html#collections.abc.MutableSequence",
    "library/collections.html#collections.Set": "library/collections.abc.html#collections.abc.Set",
    "library/collections.html#collections.MutableSet": "library/collections.abc.html#collections.abc.MutableSet",
    "library/collections.html#collections.Mapping": "library/collections.abc.html#collections.abc.Mapping",
    "library/collections.html#collections.MutableMapping": "library/collections.abc.html#collections.abc.MutableMapping",
    "library/collections.html#collections.MappingView": "library/collections.abc.html#collections.abc.MappingView",
    "library/collections.html#collections.ItemsView": "library/collections.abc.html#collections.abc.ItemsView",
    "library/collections.html#collections.KeysView": "library/collections.abc.html#collections.abc.KeysView",
    "library/collections.html#collections.ValuesView": "library/collections.abc.html#collections.abc.ValuesView",


    // Deprecated aliases and methods
    "library/array.html#array.ArrayType": null,
    "library/array.html#array.array.read": null,
    "library/array.html#array.array.write": null,


    // https://docs.python.org/whatsnew/3.0.html#library-changes
    "library/sets.html": "library/stdtypes.html#set",
    "library/sets.html#module-sets": "library/stdtypes.html#set",
    "library/sets.html#sets-unordered-collections-of-unique-elements": "library/stdtypes.html#set",
    "library/sets.html#sets.Set": "library/stdtypes.html#set",
    "library/sets.html#sets.ImmutableSet": "library/stdtypes.html#frozenset",
    "library/sets.html#set-objects": "library/stdtypes.html#set",
    // TODO: linking to the tutorial is not great
    "library/sets.html#example": "tutorial/datastructures.html#sets",
    "library/sets.html#set-example": "tutorial/datastructures.html#sets",
    // TODO: don't redirect this?
    "library/sets.html#protocol-for-automatic-conversion-to-immutable": "library/stdtypes.html#frozenset",
    // TODO: don't redirect this?
    "library/sets.html#immutable-transforms": "library/stdtypes.html#frozenset",
    "library/sets.html#comparison-to-the-built-in-set-types": null,
    "library/sets.html#comparison-to-builtin-set": null,


    "library/queue.html#module-Queue": "library/queue.html#module-queue",
    "library/queue.html#Queue.Queue": "library/queue.html#queue.Queue",
    "library/queue.html#Queue.LifoQueue": "library/queue.html#queue.LifoQueue",
    "library/queue.html#Queue.PriorityQueue": "library/queue.html#queue.PriorityQueue",
    "library/queue.html#Queue.Empty": "library/queue.html#queue.Empty",
    "library/queue.html#Queue.Full": "library/queue.html#queue.Full",
    "library/queue.html#Queue.Queue.qsize": "library/queue.html#queue.Queue.qsize",
    "library/queue.html#Queue.Queue.empty": "library/queue.html#queue.Queue.empty",
    "library/queue.html#Queue.Queue.full": "library/queue.html#queue.Queue.full",
    "library/queue.html#Queue.Queue.put": "library/queue.html#queue.Queue.put",
    "library/queue.html#Queue.Queue.put_nowait": "library/queue.html#queue.Queue.put_nowait",
    "library/queue.html#Queue.Queue.get": "library/queue.html#queue.Queue.get",
    "library/queue.html#Queue.Queue.get_nowait": "library/queue.html#queue.Queue.get_nowait",
    "library/queue.html#Queue.Queue.task_done": "library/queue.html#queue.Queue.task_done",
    "library/queue.html#Queue.Queue.join": "library/queue.html#queue.Queue.join",

    "library/weakref.html#weakref.WeakKeyDictionary.iterkeyrefs": "library/weakref.html#weakref.WeakKeyDictionary.keyrefs",
    "library/weakref.html#weakref.WeakValueDictionary.itervaluerefs": "library/weakref.html#weakref.WeakValueDictionary.valuerefs",
    // The same as the standard ReferenceError exception.
    // "library/weakref.html#weakref.ReferenceError": "library/exceptions.html#ReferenceError",
    "library/weakref.html#weakref.ReferenceError": null,


    "library/userdict.html": "library/collections.html#userdict-objects",
    "library/userdict.html#module-UserDict": "library/collections.html#userdict-objects",
    "library/userdict.html#userdict-class-wrapper-for-dictionary-objects": "library/collections.html#userdict-objects",
    "library/userdict.html#UserDict.UserDict": "library/collections.html#collections.UserDict",

    // "Subclass of UserDict that supports direct iteration"
    // "For backward compatibility, instances of UserDict [in Python 2] are not iterable"
    // "library/userdict.html#UserDict.IterableUserDict": null,
    "library/userdict.html#UserDict.IterableUserDict": "library/collections.html#collections.UserDict",
    "library/userdict.html#UserDict.IterableUserDict.data": "library/collections.html#collections.UserDict.data",

    // "This mixin should be used as a superclass"
    // "Starting with Python version 2.6, it is recommended to use collections.MutableMapping instead of DictMixin"
    // "library/userdict.html#UserDict.DictMixin": "library/collections.abc.html#collections.abc.MutableMapping",
    // "library/userdict.html#UserDict.DictMixin": "library/collections.html#collections.UserDict",
    "library/userdict.html#UserDict.DictMixin": null,

    "library/userdict.html#module-UserList": "library/collections.html#userlist-objects",
    "library/userdict.html#userlist-class-wrapper-for-list-objects": "library/collections.html#userlist-objects",
    "library/userdict.html#UserList.UserList": "library/collections.html#collections.UserList",
    "library/userdict.html#UserList.UserList.data": "library/collections.html#collections.UserList.data",

    "library/userdict.html#module-UserString": "library/collections.html#userstring-objects",
    "library/userdict.html#userstring-class-wrapper-for-string-objects": "library/collections.html#userstring-objects",
    "library/userdict.html#UserString.UserString": "library/collections.html#collections.UserString",
    // "The MutableString class has been removed in Python 3"
    "library/userdict.html#UserString.MutableString": null,
    // TODO: MutableString doesn't exist but this property also documents .data for UserString. Redirect?
    // "library/userdict.html#UserString.MutableString.data": "library/collections.html#collections.UserString.data",
    "library/userdict.html#UserString.MutableString.data": null,


    "library/types.html#types-names-for-built-in-types": "library/types.html#types-dynamic-type-creation-and-names-for-built-in-types",
    // TODO: redirect these to the builtins? Or typing?
    "library/types.html#types.NoneType": null,
    "library/types.html#types.TypeType": null,
    "library/types.html#types.BooleanType": null,
    "library/types.html#types.IntType": null,
    "library/types.html#types.LongType": null,
    "library/types.html#types.FloatType": null,
    "library/types.html#types.ComplexType": null,
    "library/types.html#types.StringType": null,
    "library/types.html#types.UnicodeType": null,
    "library/types.html#types.TupleType": null,
    "library/types.html#types.ListType": null,
    "library/types.html#types.DictType": null,
    "library/types.html#types.DictionaryType": null,
    "library/types.html#types.ClassType": null,
    "library/types.html#types.InstanceType": null,
    "library/types.html#types.UnboundMethodType": null,
    "library/types.html#types.FileType": null,
    "library/types.html#types.XRangeType": null,
    "library/types.html#types.SliceType": null,
    "library/types.html#types.EllipsisType": null,
    "library/types.html#types.BufferType": null,
    "library/types.html#types.DictProxyType": null,
    "library/types.html#types.NotImplementedType": null,
    "library/types.html#types.StringTypes": null,


    "library/repr.html": "library/reprlib.html",
    "library/repr.html#module-repr": "library/reprlib.html#module-reprlib",
    "library/repr.html#repr-alternate-repr-implementation": "library/reprlib.html#reprlib-alternate-repr-implementation",
    "library/repr.html#repr.Repr": "library/reprlib.html#reprlib.Repr",
    "library/repr.html#repr.aRepr": "library/reprlib.html#reprlib.aRepr",
    "library/repr.html#repr.repr": "library/reprlib.html#reprlib.repr",
    "library/repr.html#repr.Repr.maxlevel": "library/reprlib.html#reprlib.Repr.maxlevel",
    "library/repr.html#repr.Repr.maxdict": "library/reprlib.html#reprlib.Repr.maxdict",
    "library/repr.html#repr.Repr.maxlist": "library/reprlib.html#reprlib.Repr.maxlist",
    "library/repr.html#repr.Repr.maxtuple": "library/reprlib.html#reprlib.Repr.maxtuple",
    "library/repr.html#repr.Repr.maxset": "library/reprlib.html#reprlib.Repr.maxset",
    "library/repr.html#repr.Repr.maxfrozenset": "library/reprlib.html#reprlib.Repr.maxfrozenset",
    "library/repr.html#repr.Repr.maxdeque": "library/reprlib.html#reprlib.Repr.maxdeque",
    "library/repr.html#repr.Repr.maxarray": "library/reprlib.html#reprlib.Repr.maxarray",
    "library/repr.html#repr.Repr.maxlong": "library/reprlib.html#reprlib.Repr.maxlong",
    "library/repr.html#repr.Repr.maxstring": "library/reprlib.html#reprlib.Repr.maxstring",
    "library/repr.html#repr.Repr.maxother": "library/reprlib.html#reprlib.Repr.maxother",
    "library/repr.html#repr.Repr.repr": "library/reprlib.html#reprlib.Repr.repr",
    "library/repr.html#repr.Repr.repr1": "library/reprlib.html#reprlib.Repr.repr1",


    "library/random.html#random.jumpahead": null,
    "library/random.html#random.WichmannHill": null,
    "library/random.html#random.whseed": null,


    // https://docs.python.org/library/2to3.html#2to3fixer-itertools
    "library/itertools.html#itertools.ifilter": "library/functions.html#filter",
    "library/itertools.html#itertools.ifilterfalse": "library/itertools.html#itertools.filterfalse",
    "library/itertools.html#itertools.imap": "library/functions.html#map",
    "library/itertools.html#itertools.izip": "library/functions.html#zip",
    "library/itertools.html#itertools.izip_longest": "library/itertools.html#itertools.zip_longest",
    "library/itertools.html#recipes": "library/itertools.html#itertools-recipes",


    // The / changed to only be true division (ie. return a float)
    // "library/operator.html#operator.div": "library/operator.html#operator.truediv",
    // "library/operator.html#operator.div": "library/operator.html#operator.__truediv__",
    // "library/operator.html#operator.div": "library/operator.html#operator.itruediv",
    // "library/operator.html#operator.div": "library/operator.html#operator.__itruediv__",
    "library/operator.html#operator.div": null,
    "library/operator.html#operator.__div__": null,
    "library/operator.html#operator.idiv": null,
    "library/operator.html#operator.__idiv__": null,

    // "Deprecated since <x> use <some other function in this module> instead"
    "library/operator.html#operator.delslice": null,
    "library/operator.html#operator.__delslice__": null,
    "library/operator.html#operator.getslice": null,
    "library/operator.html#operator.__getslice__": null,
    "library/operator.html#operator.setslice": null,
    "library/operator.html#operator.__setslice__": null,
    "library/operator.html#operator.repeat": null,
    "library/operator.html#operator.__repeat__": null,
    "library/operator.html#operator.irepeat": null,
    "library/operator.html#operator.__irepeat__": null,

    // https://docs.python.org/library/2to3.html#2to3fixer-operator
    "library/operator.html#operator.isCallable": "library/functions.html#callable",
    // "Deprecated since version 2.0: Use contains() instead."
    // "library/operator.html#operator.sequenceIncludes": "library/operator.html#operator.contains",
    "library/operator.html#operator.sequenceIncludes": null,
    // isinstance(obj, collections.abc.Mapping)
    "library/operator.html#operator.isMappingType": null,
    // isinstance(obj, numbers.Number)
    "library/operator.html#operator.isNumberType": null,
    // isinstance(obj, collections.abc.Sequence)
    "library/operator.html#operator.isSequenceType": null,


    // TODO: what happened to this? splitdrive()?
    "library/os.path.html#os.path.splitunc": null,
    // Function has a different signature
    // "library/os.path.html#os.path.walk": "library/os.html#os.walk",
    "library/os.path.html#os.path.walk": null,


    "library/tempfile.html#tempfile.template": null,


    "library/pickle.html#usage": "library/pickle.html#module-interface",
    "library/pickle.html#pickle.Pickler.clear_memo": null,
    "library/pickle.html#pickle.Unpickler.noload": null,
    "library/pickle.html#the-pickle-protocol": "library/pickle.html#pickling-class-instances",
    "library/pickle.html#pickle-protocol": "library/pickle.html#pickling-class-instances",
    "library/pickle.html#pickling-and-unpickling-normal-class-instances": "library/pickle.html#pickling-class-instances",
    // TODO: this method was removed. Figure out where to redirect.
    "library/pickle.html#object.__getinitargs__": null,
    "library/pickle.html#pickling-and-unpickling-extension-types": "library/pickle.html#object.__reduce__",
    "library/pickle.html#pickling-and-unpickling-external-objects": "library/pickle.html#persistence-of-external-objects",
    "library/pickle.html#subclassing-unpicklers": "library/pickle.html#restricting-globals",
    "library/pickle.html#pickle-sub": "library/pickle.html#restricting-globals",
    // pickle tries to use cPickle and falls back to the Python implementation transparently
    // TODO: don't redirect?
    // "library/pickle.html#module-cPickle": null,
    // "library/pickle.html#cpickle-a-faster-pickle": null,
    "library/pickle.html#module-cPickle": "library/pickle.html",
    "library/pickle.html#cpickle-a-faster-pickle": "library/pickle.html",


    "library/copy_reg.html": "library/copyreg.html",
    "library/copy_reg.html#module-copy_reg": "library/copyreg.html#module-copyreg",
    "library/copy_reg.html#copy-reg-register-pickle-support-functions": "library/copyreg.html#copyreg-register-pickle-support-functions",
    "library/copy_reg.html#copy_reg.constructor": "library/copyreg.html#copyreg.constructor",
    "library/copy_reg.html#copy_reg.pickle": "library/copyreg.html#copyreg.pickle",


    // https://docs.python.org/library/2to3.html#2to3fixer-imports2
    "library/anydbm.html": "library/dbm.html",
    "library/anydbm.html#module-anydbm": "library/dbm.html#module-dbm",
    "library/anydbm.html#anydbm-generic-access-to-dbm-style-databases": "library/dbm.html#dbm-interfaces-to-unix-databases",
    "library/anydbm.html#anydbm.open": "library/dbm.html#dbm.open",
    "library/anydbm.html#anydbm.error": "library/dbm.html#dbm.error",
    // TODO: dbm.close doesn't exist in Python 3. Redirect to module anyway?
    // "library/anydbm.html#anydbm.close": "library/dbm.html#module-dbm",
    "library/anydbm.html#anydbm.close": null,

    "library/whichdb.html": "library/dbm.html#dbm.whichdb",
    "library/whichdb.html#module-whichdb": "library/dbm.html#dbm.whichdb",
    "library/whichdb.html#whichdb-guess-which-dbm-module-created-a-database": "library/dbm.html#dbm.whichdb",
    "library/whichdb.html#whichdb.whichdb": "library/dbm.html#dbm.whichdb",


    "library/dumbdbm.html": "library/dbm.html#module-dbm.dumb",
    "library/dumbdbm.html#module-dumbdbm": "library/dbm.html#module-dbm.dumb",
    "library/dumbdbm.html#dumbdbm-portable-dbm-implementation": "library/dbm.html#dbm-dumb-portable-dbm-implementation",
    "library/dumbdbm.html#dumbdbm.error": "library/dbm.html#dbm.dumb.error",
    "library/dumbdbm.html#dumbdbm.open": "library/dbm.html#dbm.dumb.open",
    "library/dumbdbm.html#dumbdbm.close": "library/dbm.html#dbm.dumb.dumbdbm.close",
    // The id was removed but the docs are here.
    "library/dumbdbm.html#dumbdbm-objects": "library/dbm.html#dbm.dumb.dumbdbm.sync",
    "library/dumbdbm.html#dumbdbm.dumbdbm.sync": "library/dbm.html#dbm.dumb.dumbdbm.sync",

    "library/dbm.html": "library/dbm.html#module-dbm.ndbm",
    "library/dbm.html#dbm-simple-database-interface": "library/dbm.html#dbm-ndbm-interface-based-on-ndbm",
    "library/dbm.html#dbm.library": "library/dbm.html#dbm.ndbm.library",
    "library/dbm.html#dbm.close": "library/dbm.html#dbm.ndbm.ndbm.close",

    "library/gdbm.html": "library/dbm.html#module-dbm.gnu",
    "library/gdbm.html#module-gdbm": "library/dbm.html#module-dbm.gnu",
    "library/gdbm.html#gdbm-gnu-s-reinterpretation-of-dbm": "library/dbm.html#dbm-gnu-gnu-s-reinterpretation-of-dbm",
    "library/gdbm.html#gdbm.error": "library/dbm.html#dbm.gnu.error",
    "library/gdbm.html#gdbm.open": "library/dbm.html#dbm.gnu.open",
    "library/gdbm.html#gdbm.firstkey": "library/dbm.html#dbm.gnu.gdbm.firstkey",
    "library/gdbm.html#gdbm.nextkey": "library/dbm.html#dbm.gnu.gdbm.nextkey",
    "library/gdbm.html#gdbm.reorganize": "library/dbm.html#dbm.gnu.gdbm.reorganize",
    "library/gdbm.html#gdbm.sync": "library/dbm.html#dbm.gnu.gdbm.sync",
    "library/gdbm.html#gdbm.close": "library/dbm.html#dbm.gnu.gdbm.close",


    "library/bz2.html#bz2-compression-compatible-with-bzip2": "library/bz2.html#bz2-support-for-bzip2-compression",

    // None of these methods are documented anymore because they're inherited
    "library/bz2.html#bz2.BZ2File.close": "library/bz2.html#bz2.BZ2File",
    "library/bz2.html#bz2.BZ2File.read": "library/bz2.html#bz2.BZ2File",
    "library/bz2.html#bz2.BZ2File.readline": "library/bz2.html#bz2.BZ2File",
    "library/bz2.html#bz2.BZ2File.readlines": "library/bz2.html#bz2.BZ2File",
    // TODO: method no longer exists, don't redirect?
    // "library/bz2.html#bz2.BZ2File.xreadlines": null,
    "library/bz2.html#bz2.BZ2File.xreadlines": "library/bz2.html#bz2.BZ2File",
    "library/bz2.html#bz2.BZ2File.seek": "library/bz2.html#bz2.BZ2File",
    "library/bz2.html#bz2.BZ2File.tell": "library/bz2.html#bz2.BZ2File",
    "library/bz2.html#bz2.BZ2File.write": "library/bz2.html#bz2.BZ2File",
    "library/bz2.html#bz2.BZ2File.writelines": "library/bz2.html#bz2.BZ2File",

    "library/bz2.html#sequential-de-compression": "library/bz2.html#incremental-de-compression",


    // "The TarFileCompat class has been removed in Python 3"
    "library/tarfile.html#tarfile.TarFileCompat": null,
    "library/tarfile.html#tarfile.TarFileCompat.TAR_PLAIN": null,
    "library/tarfile.html#tarfile.TarFileCompat.TAR_GZIPPED": null,
    // "Use the format attribute instead"
    "library/tarfile.html#tarfile.TarFile.posix": null,


    "library/configparser.html#module-ConfigParser": "library/configparser.html#module-configparser",
    // TODO: "Legacy variant of the ConfigParser". Redirect to ConfigParser?
    "library/configparser.html#ConfigParser.RawConfigParser": "library/configparser.html#configparser.RawConfigParser",
    "library/configparser.html#ConfigParser.ConfigParser": "library/configparser.html#configparser.ConfigParser",
    // SafeConfigParser became the default ConfigParser
    "library/configparser.html#ConfigParser.SafeConfigParser": "library/configparser.html#configparser.ConfigParser",
    "library/configparser.html#ConfigParser.Error": "library/configparser.html#configparser.Error",
    "library/configparser.html#ConfigParser.NoSectionError": "library/configparser.html#configparser.NoSectionError",
    "library/configparser.html#ConfigParser.DuplicateSectionError": "library/configparser.html#configparser.DuplicateSectionError",
    "library/configparser.html#ConfigParser.NoOptionError": "library/configparser.html#configparser.NoOptionError",
    "library/configparser.html#ConfigParser.InterpolationError": "library/configparser.html#configparser.InterpolationError",
    "library/configparser.html#ConfigParser.InterpolationDepthError": "library/configparser.html#configparser.InterpolationDepthError",
    "library/configparser.html#ConfigParser.InterpolationMissingOptionError": "library/configparser.html#configparser.InterpolationMissingOptionError",
    "library/configparser.html#ConfigParser.InterpolationSyntaxError": "library/configparser.html#configparser.InterpolationSyntaxError",
    "library/configparser.html#ConfigParser.MissingSectionHeaderError": "library/configparser.html#configparser.MissingSectionHeaderError",
    "library/configparser.html#ConfigParser.ParsingError": "library/configparser.html#configparser.ParsingError",
    "library/configparser.html#ConfigParser.MAX_INTERPOLATION_DEPTH": "library/configparser.html#configparser.MAX_INTERPOLATION_DEPTH",
    "library/configparser.html#ConfigParser.RawConfigParser.defaults": "library/configparser.html#configparser.ConfigParser.defaults",
    "library/configparser.html#ConfigParser.RawConfigParser.sections": "library/configparser.html#configparser.ConfigParser.sections",
    // TODO: this method could be redirected to RawConfigParser still
    "library/configparser.html#ConfigParser.RawConfigParser.add_section": "library/configparser.html#configparser.ConfigParser.add_section",
    "library/configparser.html#ConfigParser.RawConfigParser.has_section": "library/configparser.html#configparser.ConfigParser.has_section",
    "library/configparser.html#ConfigParser.RawConfigParser.options": "library/configparser.html#configparser.ConfigParser.options",
    "library/configparser.html#ConfigParser.RawConfigParser.has_option": "library/configparser.html#configparser.ConfigParser.has_option",
    "library/configparser.html#ConfigParser.RawConfigParser.read": "library/configparser.html#configparser.ConfigParser.read",
    "library/configparser.html#ConfigParser.RawConfigParser.readfp": "library/configparser.html#configparser.ConfigParser.readfp",
    "library/configparser.html#ConfigParser.RawConfigParser.get": "library/configparser.html#configparser.ConfigParser.get",
    "library/configparser.html#ConfigParser.RawConfigParser.getint": "library/configparser.html#configparser.ConfigParser.getint",
    "library/configparser.html#ConfigParser.RawConfigParser.getfloat": "library/configparser.html#configparser.ConfigParser.getfloat",
    "library/configparser.html#ConfigParser.RawConfigParser.getboolean": "library/configparser.html#configparser.ConfigParser.getboolean",
    "library/configparser.html#ConfigParser.RawConfigParser.items": "library/configparser.html#configparser.ConfigParser.items",
    // TODO: this method could be redirected to RawConfigParser still
    "library/configparser.html#ConfigParser.RawConfigParser.set": "library/configparser.html#configparser.ConfigParser.set",
    "library/configparser.html#ConfigParser.RawConfigParser.write": "library/configparser.html#configparser.ConfigParser.write",
    "library/configparser.html#ConfigParser.RawConfigParser.remove_option": "library/configparser.html#configparser.ConfigParser.remove_option",
    "library/configparser.html#ConfigParser.RawConfigParser.remove_section": "library/configparser.html#configparser.ConfigParser.remove_section",
    "library/configparser.html#ConfigParser.RawConfigParser.optionxform": "library/configparser.html#configparser.ConfigParser.optionxform",
    "library/configparser.html#ConfigParser.ConfigParser.get": "library/configparser.html#configparser.ConfigParser.get",
    "library/configparser.html#ConfigParser.ConfigParser.items": "library/configparser.html#configparser.ConfigParser.items",

    // SafeConfigParser became the default ConfigParser
    "library/configparser.html#safeconfigparser-objects": "library/configparser.html#configparser-objects",
    "library/configparser.html#ConfigParser.SafeConfigParser.set": "library/configparser.html#configparser.ConfigParser.set",

    "library/configparser.html#examples": "library/configparser.html#legacy-api-examples",


    "library/robotparser.html": "library/urllib.robotparser.html",
    "library/robotparser.html#module-robotparser": "library/urllib.robotparser.html#module-urllib.robotparser",
    "library/robotparser.html#robotparser-parser-for-robots-txt": "library/urllib.robotparser.html#urllib-robotparser-parser-for-robots-txt",
    "library/robotparser.html#robotparser.RobotFileParser": "library/urllib.robotparser.html#urllib.robotparser.RobotFileParser",
    "library/robotparser.html#robotparser.RobotFileParser.set_url": "library/urllib.robotparser.html#urllib.robotparser.RobotFileParser.set_url",
    "library/robotparser.html#robotparser.RobotFileParser.read": "library/urllib.robotparser.html#urllib.robotparser.RobotFileParser.read",
    "library/robotparser.html#robotparser.RobotFileParser.parse": "library/urllib.robotparser.html#urllib.robotparser.RobotFileParser.parse",
    "library/robotparser.html#robotparser.RobotFileParser.can_fetch": "library/urllib.robotparser.html#urllib.robotparser.RobotFileParser.can_fetch",
    "library/robotparser.html#robotparser.RobotFileParser.mtime": "library/urllib.robotparser.html#urllib.robotparser.RobotFileParser.mtime",
    "library/robotparser.html#robotparser.RobotFileParser.modified": "library/urllib.robotparser.html#urllib.robotparser.RobotFileParser.modified",


    "library/plistlib.html#plistlib.readPlistFromString": "library/plistlib.html#plistlib.readPlistFromBytes",
    "library/plistlib.html#plistlib.writePlistToString": "library/plistlib.html#plistlib.writePlistToBytes",
    // "In Python 3.x, this function has been removed"
    "library/plistlib.html#plistlib.readPlistFromResource": null,
    // "In Python 3.x, this function has been removed"
    "library/plistlib.html#plistlib.writePlistToResource": null,


    // TODO: or this?
    // "library/hashlib.html#hashlib.hashlib.algorithms": "library/hashlib.html#hashlib.algorithms_available",
    "library/hashlib.html#hashlib.hashlib.algorithms": null,

    // "Deprecated since version 2.5: Use the hashlib module instead."
    // TODO: don't redirect?
    "library/md5.html": "library/hashlib.html",
    "library/md5.html#module-md5": "library/hashlib.html#hash-algorithms",
    "library/md5.html#md5-md5-message-digest-algorithm": "library/hashlib.html#hash-algorithms",
    "library/md5.html#md5.digest_size": "library/hashlib.html#hashlib.hash.digest_size",
    // hashlib.new() takes the name of the hash as a mandatory first parameter
    // "library/md5.html#md5.new": "library/hashlib.html#hashlib.new",
    "library/md5.html#md5.new": null,
    // "library/md5.html#md5.md5": "library/hashlib.html#hashlib.new",
    "library/md5.html#md5.md5": null,
    "library/md5.html#md5.md5.update": "library/hashlib.html#hashlib.hash.update",
    "library/md5.html#md5.md5.digest": "library/hashlib.html#hashlib.hash.digest",
    "library/md5.html#md5.md5.hexdigest": "library/hashlib.html#hashlib.hash.hexdigest",
    "library/md5.html#md5.md5.copy": "library/hashlib.html#hashlib.hash.copy",

    "library/sha.html": "library/hashlib.html",
    "library/sha.html#module-sha": "library/hashlib.html#hash-algorithms",
    "library/sha.html#sha-sha-1-message-digest-algorithm": "library/hashlib.html#hash-algorithms",
    // hashlib.new() takes the name of the hash as a mandatory first parameter
    // "library/sha.html#sha.new": "library/hashlib.html#hashlib.new",
    "library/sha.html#sha.new": null,
    "library/sha.html#sha.blocksize": null,
    "library/sha.html#sha.digest_size": "library/hashlib.html#hashlib.hash.digest_size",
    "library/sha.html#sha.sha.update": "library/hashlib.html#hashlib.hash.update",
    "library/sha.html#sha.sha.digest": "library/hashlib.html#hashlib.hash.digest",
    "library/sha.html#sha.sha.hexdigest": "library/hashlib.html#hashlib.hash.hexdigest",
    "library/sha.html#sha.sha.copy": "library/hashlib.html#hashlib.hash.copy",


    // "library/os.html#os.tmpfile": "library/tempfile.html",
    "library/os.html#os.tmpfile": null,

    "library/os.html#os.popen2": null,
    "library/os.html#os.popen3": null,
    "library/os.html#os.popen4": null,
    // Have to scroll down
    "library/os.html#open-flag-constants": "library/os.html#os.open",
    "library/os.html#open-constants": "library/os.html#os.open",

    // https://docs.python.org/library/2to3.html#2to3fixer-getcwdu
    "library/os.html#os.getcwdu": "library/os.html#os.getcwd",

    // TODO: figure this out.
    "library/os.html#os.stat_float_times": null,

    "library/os.html#os.tempnam": null,
    "library/os.html#os.tmpnam": null,
    "library/os.html#os.TMP_MAX": null,

    "library/os.html#miscellaneous-functions": "library/os.html#random-numbers",
    "library/os.html#os-miscfunc": "library/os.html#random-numbers",


    "library/io.html#module-interface": "library/io.html#high-level-module-interface",

    // This error is now a builtin and the one in io is an alias
    // "library/io.html#io.BlockingIOError": "library/exceptions.html#BlockingIOError",
    // "library/io.html#io.BlockingIOError.characters_written": "library/exceptions.html#BlockingIOError.characters_written",
    "library/io.html#io.BlockingIOError.characters_written": "library/io.html#io.BlockingIOError",

    "library/io.html#advanced-topics": "library/io.html#performance",


    "library/time.html#time-y2kissues": null,
    "library/time.html#time.accept2dyear": null,

    // Removed function, two suggested alternatives.
    // "library/time.html#time.clock": "library/time.html#time.process_time",
    // "library/time.html#time.clock": "library/time.html#time.perf_counter",
    "library/time.html#time.clock": null,


    "library/argparse.html#argparse-from-optparse": "library/argparse.html#upgrading-optparse-code",


    "library/platform.html#win95-98-specific": null,
    "library/platform.html#platform.popen": null,
    "library/platform.html#platform.dist": null,
    "library/platform.html#platform.linux_distribution": null,


    // TODO: what happened to this?
    "library/ctypes.html#ctypes.set_conversion_mode": null,


    "library/select.html#select.select.PIPE_BUF": "library/select.html#select.PIPE_BUF",


    "library/threading.html#threading-higher-level-threading-interface": "library/threading.html#threading-thread-based-parallelism",
    "library/threading.html#threading.activeCount": "library/threading.html#threading.active_count",
    "library/threading.html#threading.currentThread": "library/threading.html#threading.current_thread",
    "library/threading.html#threading.ThreadError": null,
    "library/threading.html#threading.Thread.isAlive": "library/threading.html#threading.Thread.is_alive",
    "library/threading.html#threading.Condition.notifyAll": "library/threading.html#threading.Condition.notify_all",
    "library/threading.html#threading.Event.isSet": "library/threading.html#threading.Event.is_set",
    // Removed section. TODO: maybe it was moved?
    "library/threading.html#importing-in-threaded-code": null,
    "library/threading.html#threaded-imports": null,


    "library/thread.html": "library/_thread.html",
    "library/thread.html#module-thread": "library/_thread.html#module-_thread",
    "library/thread.html#thread-multiple-threads-of-control": "library/_thread.html#thread-low-level-threading-api",
    "library/thread.html#thread.error": "library/_thread.html#_thread.error",
    "library/thread.html#thread.LockType": "library/_thread.html#_thread.LockType",
    "library/thread.html#thread.start_new_thread": "library/_thread.html#_thread.start_new_thread",
    "library/thread.html#thread.interrupt_main": "library/_thread.html#_thread.interrupt_main",
    "library/thread.html#thread.exit": "library/_thread.html#_thread.exit",
    "library/thread.html#thread.allocate_lock": "library/_thread.html#_thread.allocate_lock",
    "library/thread.html#thread.get_ident": "library/_thread.html#_thread.get_ident",
    "library/thread.html#thread.stack_size": "library/_thread.html#_thread.stack_size",
    "library/thread.html#thread.lock.acquire": "library/_thread.html#_thread.lock.acquire",
    "library/thread.html#thread.lock.release": "library/_thread.html#_thread.lock.release",
    "library/thread.html#thread.lock.locked": "library/_thread.html#_thread.lock.locked",

    "library/dummy_thread.html": "library/_dummy_thread.html",
    "library/dummy_thread.html#module-dummy_thread": "library/_dummy_thread.html#module-_dummy_thread",


    "library/multiprocessing.html#multiprocessing-process-based-threading-interface": "library/multiprocessing.html#multiprocessing-process-based-parallelism",
    "library/multiprocessing.html#multiprocessing.multiprocessing.queues.SimpleQueue": "library/multiprocessing.html#multiprocessing.SimpleQueue",
    "library/multiprocessing.html#multiprocessing.multiprocessing.queues.SimpleQueue.empty": "library/multiprocessing.html#multiprocessing.SimpleQueue.empty",
    "library/multiprocessing.html#multiprocessing.multiprocessing.queues.SimpleQueue.get": "library/multiprocessing.html#multiprocessing.SimpleQueue.get",
    "library/multiprocessing.html#multiprocessing.multiprocessing.queues.SimpleQueue.put": "library/multiprocessing.html#multiprocessing.SimpleQueue.put",
    "library/multiprocessing.html#Connection": "library/multiprocessing.html#multiprocessing.connection.Connection",
    "library/multiprocessing.html#Connection.send": "library/multiprocessing.html#multiprocessing.connection.Connection.send",
    "library/multiprocessing.html#Connection.recv": "library/multiprocessing.html#multiprocessing.connection.Connection.recv",
    "library/multiprocessing.html#Connection.fileno": "library/multiprocessing.html#multiprocessing.connection.Connection.fileno",
    "library/multiprocessing.html#Connection.close": "library/multiprocessing.html#multiprocessing.connection.Connection.close",
    "library/multiprocessing.html#Connection.poll": "library/multiprocessing.html#multiprocessing.connection.Connection.poll",
    "library/multiprocessing.html#Connection.send_bytes": "library/multiprocessing.html#multiprocessing.connection.Connection.send_bytes",
    "library/multiprocessing.html#Connection.recv_bytes": "library/multiprocessing.html#multiprocessing.connection.Connection.recv_bytes",
    "library/multiprocessing.html#Connection.recv_bytes_into": "library/multiprocessing.html#multiprocessing.connection.Connection.recv_bytes_into",
    "library/multiprocessing.html#multiprocessing.pool.multiprocessing.Pool": "library/multiprocessing.html#multiprocessing.pool.Pool",
    "library/multiprocessing.html#multiprocessing.pool.multiprocessing.Pool.apply": "library/multiprocessing.html#multiprocessing.pool.Pool.apply",
    "library/multiprocessing.html#multiprocessing.pool.multiprocessing.Pool.apply_async": "library/multiprocessing.html#multiprocessing.pool.Pool.apply_async",
    "library/multiprocessing.html#multiprocessing.pool.multiprocessing.Pool.map": "library/multiprocessing.html#multiprocessing.pool.Pool.map",
    "library/multiprocessing.html#multiprocessing.pool.multiprocessing.Pool.map_async": "library/multiprocessing.html#multiprocessing.pool.Pool.map_async",
    "library/multiprocessing.html#multiprocessing.pool.multiprocessing.Pool.imap": "library/multiprocessing.html#multiprocessing.pool.Pool.imap",
    "library/multiprocessing.html#multiprocessing.pool.multiprocessing.Pool.imap_unordered": "library/multiprocessing.html#multiprocessing.pool.Pool.imap_unordered",
    "library/multiprocessing.html#multiprocessing.pool.multiprocessing.Pool.close": "library/multiprocessing.html#multiprocessing.pool.Pool.close",
    "library/multiprocessing.html#multiprocessing.pool.multiprocessing.Pool.terminate": "library/multiprocessing.html#multiprocessing.pool.Pool.terminate",
    "library/multiprocessing.html#multiprocessing.pool.multiprocessing.Pool.join": "library/multiprocessing.html#multiprocessing.pool.Pool.join",
    "library/multiprocessing.html#multiprocessing.connection.ProcessError": "library/multiprocessing.html#multiprocessing.ProcessError",
    "library/multiprocessing.html#multiprocessing.connection.BufferTooShort": "library/multiprocessing.html#multiprocessing.BufferTooShort",
    "library/multiprocessing.html#multiprocessing.connection.AuthenticationError": "library/multiprocessing.html#multiprocessing.AuthenticationError",
    "library/multiprocessing.html#multiprocessing.connection.TimeoutError": "library/multiprocessing.html#multiprocessing.TimeoutError",
    "library/multiprocessing.html#all-platforms": "library/multiprocessing.html#all-start-methods",
    "library/multiprocessing.html#windows": "library/multiprocessing.html#the-spawn-and-forkserver-start-methods",


    "library/ipc.html#interprocess-communication-and-networking": "library/ipc.html#networking-and-interprocess-communication",


    "library/subprocess.html#security": "library/subprocess.html#security-considerations",
    "library/subprocess.html#constants": "library/subprocess.html#windows-constants",
    "library/subprocess.html#replacing-bin-sh-shell-backquote": "library/subprocess.html#replacing-bin-sh-shell-command-substitution",


    // "intentionally does not exist in any implementation of Python 3"
    "library/ssl.html#ssl._https_verify_certificates": null,


    // TODO: was this moved or just deleted?
    "library/asynchat.html#asynchat-auxiliary-classes": null,
    "library/asynchat.html#asynchat.fifo": null,
    "library/asynchat.html#asynchat.fifo.is_empty": null,
    "library/asynchat.html#asynchat.fifo.first": null,
    "library/asynchat.html#asynchat.fifo.push": null,
    "library/asynchat.html#asynchat.fifo.pop": null,


    "library/email.html#package-history": null,
    "library/email.html#email-pkg-history": null,
    "library/email.html#differences-from-mimelib": null,

    "library/email.message.html#email.message.Message": "library/email.message.html#email.message.EmailMessage",
    "library/email.message.html#email.message.Message.as_string": "library/email.message.html#email.message.EmailMessage.as_string",
    "library/email.message.html#email.message.Message.__str__": "library/email.message.html#email.message.EmailMessage.__str__",
    "library/email.message.html#email.message.Message.is_multipart": "library/email.message.html#email.message.EmailMessage.is_multipart",
    "library/email.message.html#email.message.Message.set_unixfrom": "library/email.message.html#email.message.EmailMessage.set_unixfrom",
    "library/email.message.html#email.message.Message.get_unixfrom": "library/email.message.html#email.message.EmailMessage.get_unixfrom",
    "library/email.message.html#email.message.Message.__len__": "library/email.message.html#email.message.EmailMessage.__len__",
    "library/email.message.html#email.message.Message.__contains__": "library/email.message.html#email.message.EmailMessage.__contains__",
    "library/email.message.html#email.message.Message.__getitem__": "library/email.message.html#email.message.EmailMessage.__getitem__",
    "library/email.message.html#email.message.Message.__setitem__": "library/email.message.html#email.message.EmailMessage.__setitem__",
    "library/email.message.html#email.message.Message.__delitem__": "library/email.message.html#email.message.EmailMessage.__delitem__",
    // Removed dictionary method, use `in`
    "library/email.message.html#email.message.Message.has_key": null,
    "library/email.message.html#email.message.Message.keys": "library/email.message.html#email.message.EmailMessage.keys",
    "library/email.message.html#email.message.Message.values": "library/email.message.html#email.message.EmailMessage.values",
    "library/email.message.html#email.message.Message.items": "library/email.message.html#email.message.EmailMessage.items",
    "library/email.message.html#email.message.Message.get": "library/email.message.html#email.message.EmailMessage.get",
    "library/email.message.html#email.message.Message.get_all": "library/email.message.html#email.message.EmailMessage.get_all",
    "library/email.message.html#email.message.Message.add_header": "library/email.message.html#email.message.EmailMessage.add_header",
    "library/email.message.html#email.message.Message.replace_header": "library/email.message.html#email.message.EmailMessage.replace_header",
    "library/email.message.html#email.message.Message.get_content_type": "library/email.message.html#email.message.EmailMessage.get_content_type",
    "library/email.message.html#email.message.Message.get_content_maintype": "library/email.message.html#email.message.EmailMessage.get_content_maintype",
    "library/email.message.html#email.message.Message.get_content_subtype": "library/email.message.html#email.message.EmailMessage.get_content_subtype",
    "library/email.message.html#email.message.Message.get_default_type": "library/email.message.html#email.message.EmailMessage.get_default_type",
    "library/email.message.html#email.message.Message.set_default_type": "library/email.message.html#email.message.EmailMessage.set_default_type",
    "library/email.message.html#email.message.Message.set_param": "library/email.message.html#email.message.EmailMessage.set_param",
    "library/email.message.html#email.message.Message.del_param": "library/email.message.html#email.message.EmailMessage.del_param",
    "library/email.message.html#email.message.Message.set_type": "library/email.compat32-message.html#email.message.Message.set_type",
    "library/email.message.html#email.message.Message.get_filename": "library/email.message.html#email.message.EmailMessage.get_filename",
    "library/email.message.html#email.message.Message.get_boundary": "library/email.message.html#email.message.EmailMessage.get_boundary",
    "library/email.message.html#email.message.Message.set_boundary": "library/email.message.html#email.message.EmailMessage.set_boundary",
    "library/email.message.html#email.message.Message.get_content_charset": "library/email.message.html#email.message.EmailMessage.get_content_charset",
    "library/email.message.html#email.message.Message.get_charsets": "library/email.message.html#email.message.EmailMessage.get_charsets",
    "library/email.message.html#email.message.Message.walk": "library/email.message.html#email.message.EmailMessage.walk",
    "library/email.message.html#email.message.Message.preamble": "library/email.message.html#email.message.EmailMessage.preamble",
    "library/email.message.html#email.message.Message.epilogue": "library/email.message.html#email.message.EmailMessage.epilogue",
    "library/email.message.html#email.message.Message.defects": "library/email.message.html#email.message.EmailMessage.defects",
    // The class name was changed to EmailMessage in Python 3, but the old Message class was
    // kept for backwards compatibility. It still defines all the above methods and the following
    // deprecated methods that EmailMessage doesn't:
    // TODO: link to the legacy Message class above as well?
    "library/email.message.html#email.message.Message.attach": "library/email.compat32-message.html#email.message.Message.attach",
    "library/email.message.html#email.message.Message.get_payload": "library/email.compat32-message.html#email.message.Message.get_payload",
    "library/email.message.html#email.message.Message.set_payload": "library/email.compat32-message.html#email.message.Message.set_payload",
    "library/email.message.html#email.message.Message.set_charset": "library/email.compat32-message.html#email.message.Message.set_charset",
    "library/email.message.html#email.message.Message.get_charset": "library/email.compat32-message.html#email.message.Message.get_charset",
    "library/email.message.html#email.message.Message.get_params": "library/email.compat32-message.html#email.message.Message.get_params",
    "library/email.message.html#email.message.Message.get_param": "library/email.compat32-message.html#email.message.Message.get_param",

    "library/email.parser.html#email.parser.FeedParser.feed": "library/email.parser.html#email.parser.BytesFeedParser.feed",
    "library/email.parser.html#email.parser.FeedParser.close": "library/email.parser.html#email.parser.BytesFeedParser.close",
    "library/email.parser.html#parser-class-api": "library/email.parser.html#parser-api",

    "library/email.header.html#email.header.Header.__unicode__": "library/email.header.html#email.header.Header.__str__",

    "library/email.charset.html#email.charset.Charset.convert": null,
    "library/email.charset.html#email.charset.Charset.to_splittable": null,
    "library/email.charset.html#email.charset.Charset.from_splittable": null,
    "library/email.charset.html#email.charset.Charset.encoded_header_len": null,

    "library/email-examples.html": "library/email.examples.html",


    // Use `in Mailbox.keys`
    "library/mailbox.html#mailbox.Mailbox.has_key": null,
    "library/mailbox.html#deprecated-classes-and-methods": null,
    "library/mailbox.html#mailbox-deprecated": null,
    "library/mailbox.html#mailbox.oldmailbox.next": null,
    "library/mailbox.html#mailbox.UnixMailbox": null,
    "library/mailbox.html#mailbox.PortableUnixMailbox": null,
    "library/mailbox.html#mailbox.MmdfMailbox": null,
    "library/mailbox.html#mailbox.MHMailbox": null,
    "library/mailbox.html#mailbox.BabylMailbox": null,

    // "The email package should be used in preference to the rfc822 module"
    // TODO: redirect?
    "library/rfc822.html": null,
    "library/rfc822.html#module-rfc822": null,
    "library/rfc822.html#rfc822-parse-rfc-2822-mail-headers": null,
    "library/rfc822.html#rfc822.Message": null,
    "library/rfc822.html#rfc822.AddressList": null,
    "library/rfc822.html#rfc822.quote": "library/email.utils.html#email.utils.quote",
    "library/rfc822.html#rfc822.unquote": "library/email.utils.html#email.utils.unquote",
    "library/rfc822.html#rfc822.parseaddr": "library/email.utils.html#email.utils.parseaddr",
    "library/rfc822.html#rfc822.dump_address_pair": null,
    "library/rfc822.html#rfc822.parsedate": "library/email.utils.html#email.utils.parsedate",
    "library/rfc822.html#rfc822.parsedate_tz": "library/email.utils.html#email.utils.parsedate_tz",
    "library/rfc822.html#rfc822.mktime_tz": "library/email.utils.html#email.utils.mktime_tz",
    "library/rfc822.html#message-objects": null,
    "library/rfc822.html#rfc822.Message.rewindbody": null,
    "library/rfc822.html#rfc822.Message.isheader": null,
    "library/rfc822.html#rfc822.Message.islast": null,
    "library/rfc822.html#rfc822.Message.iscomment": null,
    "library/rfc822.html#rfc822.Message.getallmatchingheaders": null,
    "library/rfc822.html#rfc822.Message.getfirstmatchingheader": null,
    "library/rfc822.html#rfc822.Message.getrawheader": null,
    "library/rfc822.html#rfc822.Message.getheader": null,
    "library/rfc822.html#rfc822.Message.get": null,
    "library/rfc822.html#rfc822.Message.getaddr": null,
    "library/rfc822.html#rfc822.Message.getaddrlist": null,
    "library/rfc822.html#rfc822.Message.getdate": null,
    "library/rfc822.html#rfc822.Message.getdate_tz": null,
    "library/rfc822.html#rfc822.Message.headers": null,
    "library/rfc822.html#rfc822.Message.fp": null,
    "library/rfc822.html#rfc822.Message.unixfrom": null,
    // Looks like AddressList objects no longer exist
    "library/rfc822.html#addresslist-objects": null,
    "library/rfc822.html#rfc822.AddressList.__len__": null,
    "library/rfc822.html#rfc822.AddressList.__str__": null,
    "library/rfc822.html#rfc822.AddressList.__add__": null,
    "library/rfc822.html#rfc822.AddressList.__iadd__": null,
    "library/rfc822.html#rfc822.AddressList.__sub__": null,
    "library/rfc822.html#rfc822.AddressList.__isub__": null,
    "library/rfc822.html#rfc822.AddressList.addresslist": null,


    "library/base64.html#base64-rfc-3548-base16-base32-base64-data-encodings": "library/base64.html#base64-base16-base32-base64-base85-data-encodings",


    "library/htmlparser.html": "library/html.parser.html",
    "library/htmlparser.html#module-HTMLParser": "library/html.parser.html#module-html.parser",
    "library/htmlparser.html#htmlparser-simple-html-and-xhtml-parser": "library/html.parser.html#html-parser-simple-html-and-xhtml-parser",
    "library/htmlparser.html#HTMLParser.HTMLParser": "library/html.parser.html#html.parser.HTMLParser",
    // "the HTMLParseError exception [is] now deprecated"
    // https://docs.python.org/3/whatsnew/3.3.html#html
    "library/htmlparser.html#HTMLParser.HTMLParseError": null,
    "library/htmlparser.html#HTMLParser.HTMLParser.feed": "library/html.parser.html#html.parser.HTMLParser.feed",
    "library/htmlparser.html#HTMLParser.HTMLParser.close": "library/html.parser.html#html.parser.HTMLParser.close",
    "library/htmlparser.html#HTMLParser.HTMLParser.reset": "library/html.parser.html#html.parser.HTMLParser.reset",
    "library/htmlparser.html#HTMLParser.HTMLParser.getpos": "library/html.parser.html#html.parser.HTMLParser.getpos",
    "library/htmlparser.html#HTMLParser.HTMLParser.get_starttag_text": "library/html.parser.html#html.parser.HTMLParser.get_starttag_text",
    "library/htmlparser.html#HTMLParser.HTMLParser.handle_starttag": "library/html.parser.html#html.parser.HTMLParser.handle_starttag",
    "library/htmlparser.html#HTMLParser.HTMLParser.handle_endtag": "library/html.parser.html#html.parser.HTMLParser.handle_endtag",
    "library/htmlparser.html#HTMLParser.HTMLParser.handle_startendtag": "library/html.parser.html#html.parser.HTMLParser.handle_startendtag",
    "library/htmlparser.html#HTMLParser.HTMLParser.handle_data": "library/html.parser.html#html.parser.HTMLParser.handle_data",
    "library/htmlparser.html#HTMLParser.HTMLParser.handle_entityref": "library/html.parser.html#html.parser.HTMLParser.handle_entityref",
    "library/htmlparser.html#HTMLParser.HTMLParser.handle_charref": "library/html.parser.html#html.parser.HTMLParser.handle_charref",
    "library/htmlparser.html#HTMLParser.HTMLParser.handle_comment": "library/html.parser.html#html.parser.HTMLParser.handle_comment",
    "library/htmlparser.html#HTMLParser.HTMLParser.handle_decl": "library/html.parser.html#html.parser.HTMLParser.handle_decl",
    "library/htmlparser.html#HTMLParser.HTMLParser.handle_pi": "library/html.parser.html#html.parser.HTMLParser.handle_pi",
    "library/htmlparser.html#HTMLParser.HTMLParser.unknown_decl": "library/html.parser.html#html.parser.HTMLParser.unknown_decl",


    // This module was removed in favor of HTMLParser/html.parser on Python 3
    "library/htmllib.html": null,
    // But this part of it was moved.
    "library/htmllib.html#module-htmlentitydefs": "library/html.entities.html",
    "library/htmllib.html#htmlentitydefs-definitions-of-html-general-entities": "library/html.entities.html#html-entities-definitions-of-html-general-entities",
    "library/htmllib.html#htmlentitydefs.entitydefs": "library/html.entities.html#html.entities.entitydefs",
    "library/htmllib.html#htmlentitydefs.name2codepoint": "library/html.entities.html#html.entities.name2codepoint",
    "library/htmllib.html#htmlentitydefs.codepoint2name": "library/html.entities.html#html.entities.codepoint2name",


    // "Deprecated since version 2.7: Define the TreeBuilder.doctype() method on a custom TreeBuilder target"
    "library/xml.etree.elementtree.html#xml.etree.ElementTree.XMLParser.doctype": null,
    "library/xml.dom.minidom.html#xml.dom.minidom.Node.cloneNode": null,
    "library/xml.dom.pulldom.html#xml.dom.pulldom.PullDOM": "library/xml.dom.pulldom.html#xml.dom.pulldom.PullDom",

    "library/pyexpat.html#xml.parsers.expat.xmlparser.returns_unicode": null,


    "library/cgi.html#old-classes": null,

    // "This function is deprecated in this module. Use urlparse.parse_qs() instead"
    // "library/cgi.html#cgi.parse_qs": "library/urllib.parse.html#urllib.parse.parse_qs",
    "library/cgi.html#cgi.parse_qs": null,
    // "This function is deprecated in this module. Use urlparse.parse_qsl() instead"
    // "library/cgi.html#cgi.parse_qsl": "library/urllib.parse.html#urllib.parse.parse_qsl",
    "library/cgi.html#cgi.parse_qsl": null,
    // cgi.escape has quote=False and this has quote=True, could be confusing
    "library/cgi.html#cgi.escape": "library/html.html#html.escape",

    // TODO: re-order these two sections
    "library/urllib.html#urllib.urlopen": "library/urllib.request.html#urllib.request.urlopen",
    "library/urllib.html#urllib.urlretrieve": "library/urllib.request.html#urllib.request.urlretrieve",
    // TODO: explain this missing redirect
    "library/urllib.html#urllib._urlopener": null,
    "library/urllib.html#urllib.urlcleanup": "library/urllib.request.html#urllib.request.urlcleanup",
    "library/urllib.html#urllib.quote": "library/urllib.parse.html#urllib.parse.quote",
    "library/urllib.html#urllib.quote_plus": "library/urllib.parse.html#urllib.parse.quote_plus",
    "library/urllib.html#urllib.unquote": "library/urllib.parse.html#urllib.parse.unquote",
    "library/urllib.html#urllib.unquote_plus": "library/urllib.parse.html#urllib.parse.unquote_plus",
    "library/urllib.html#urllib.urlencode": "library/urllib.parse.html#urllib.parse.urlencode",
    "library/urllib.html#urllib.pathname2url": "library/urllib.request.html#urllib.request.pathname2url",
    "library/urllib.html#urllib.url2pathname": "library/urllib.request.html#urllib.request.url2pathname",
    "library/urllib.html#urllib.getproxies": "library/urllib.request.html#urllib.request.getproxies",
    "library/urllib.html#urllib.URLopener": "library/urllib.request.html#urllib.request.URLopener",
    "library/urllib.html#urllib.FancyURLopener": "library/urllib.request.html#urllib.request.FancyURLopener",
    "library/urllib.html#urllib.ContentTooShortError": "library/urllib.error.html#urllib.error.ContentTooShortError",

    // TODO: explain this
    "library/urllib.html#high-level-interface": "library/urllib.request.html",
    // The first 5 functions under this heading: "quote", "quote_plus", "unquote", "unquote_plus" and "urlencode"
    // went to library/urllib.parse.html#url-quoting
    // The last 3: "pathname2url", "url2pathname" and "getproxies"
    // went to library/urllib.request.html
    // "library/urllib.html#utility-functions": "library/urllib.parse.html#url-quoting",
    // "library/urllib.html#utility-functions": "library/urllib.request.html",
    "library/urllib.html#utility-functions": null,

    "library/urllib.html#examples": "library/urllib.request.html#examples",
    "library/urllib.html#url-opener-objects": "library/urllib.request.html#urllib.request.URLopener",
    "library/urllib.html#urllib-examples": "library/urllib.request.html#urllib-examples",
    "library/urllib.html#urllib-open-arbitrary-resources-by-url": "library/urllib.request.html#urllib-request-extensible-library-for-opening-urls",
    "library/urllib.html#urllib-restrictions": "library/urllib.request.html#urllib-request-restrictions",
    "library/urllib.html#urllib.FancyURLopener.prompt_user_passwd": "library/urllib.request.html#urllib.request.FancyURLopener.prompt_user_passwd",
    "library/urllib.html#urllib.URLopener.open": "library/urllib.request.html#urllib.request.URLopener.open",
    "library/urllib.html#urllib.URLopener.open_unknown": "library/urllib.request.html#urllib.request.URLopener.open_unknown",
    "library/urllib.html#urllib.URLopener.retrieve": "library/urllib.request.html#urllib.request.URLopener.retrieve",
    "library/urllib.html#urllib.URLopener.version": "library/urllib.request.html#urllib.request.URLopener.version",

    "library/urllib2.html#urllib2.urlopen": "library/urllib.request.html#urllib.request.urlopen",
    "library/urllib2.html#urllib2.install_opener": "library/urllib.request.html#urllib.request.install_opener",
    "library/urllib2.html#urllib2.build_opener": "library/urllib.request.html#urllib.request.build_opener",
    "library/urllib2.html#urllib2.URLError": "library/urllib.error.html#urllib.error.URLError",
    "library/urllib2.html#urllib2.HTTPError": "library/urllib.error.html#urllib.error.HTTPError",
    "library/urllib2.html#urllib2.Request": "library/urllib.request.html#urllib.request.Request",
    "library/urllib2.html#urllib2.OpenerDirector": "library/urllib.request.html#urllib.request.OpenerDirector",
    "library/urllib2.html#urllib2.BaseHandler": "library/urllib.request.html#urllib.request.BaseHandler",
    "library/urllib2.html#urllib2.HTTPDefaultErrorHandler": "library/urllib.request.html#urllib.request.HTTPDefaultErrorHandler",
    "library/urllib2.html#urllib2.HTTPRedirectHandler": "library/urllib.request.html#urllib.request.HTTPRedirectHandler",
    "library/urllib2.html#urllib2.HTTPCookieProcessor": "library/urllib.request.html#urllib.request.HTTPCookieProcessor",
    "library/urllib2.html#urllib2.ProxyHandler": "library/urllib.request.html#urllib.request.ProxyHandler",
    "library/urllib2.html#urllib2.HTTPPasswordMgr": "library/urllib.request.html#urllib.request.HTTPPasswordMgr",
    "library/urllib2.html#urllib2.HTTPPasswordMgrWithDefaultRealm": "library/urllib.request.html#urllib.request.HTTPPasswordMgrWithDefaultRealm",
    "library/urllib2.html#urllib2.AbstractBasicAuthHandler": "library/urllib.request.html#urllib.request.AbstractBasicAuthHandler",
    "library/urllib2.html#urllib2.HTTPBasicAuthHandler": "library/urllib.request.html#urllib.request.HTTPBasicAuthHandler",
    "library/urllib2.html#urllib2.ProxyBasicAuthHandler": "library/urllib.request.html#urllib.request.ProxyBasicAuthHandler",
    "library/urllib2.html#urllib2.AbstractDigestAuthHandler": "library/urllib.request.html#urllib.request.AbstractDigestAuthHandler",
    "library/urllib2.html#urllib2.HTTPDigestAuthHandler": "library/urllib.request.html#urllib.request.HTTPDigestAuthHandler",
    "library/urllib2.html#urllib2.ProxyDigestAuthHandler": "library/urllib.request.html#urllib.request.ProxyDigestAuthHandler",
    "library/urllib2.html#urllib2.HTTPHandler": "library/urllib.request.html#urllib.request.HTTPHandler",
    "library/urllib2.html#urllib2.HTTPSHandler": "library/urllib.request.html#urllib.request.HTTPSHandler",
    "library/urllib2.html#urllib2.FileHandler": "library/urllib.request.html#urllib.request.FileHandler",
    "library/urllib2.html#urllib2.FTPHandler": "library/urllib.request.html#urllib.request.FTPHandler",
    "library/urllib2.html#urllib2.CacheFTPHandler": "library/urllib.request.html#urllib.request.CacheFTPHandler",
    "library/urllib2.html#urllib2.UnknownHandler": "library/urllib.request.html#urllib.request.UnknownHandler",

    "library/urllib2.html": "library/urllib.request.html",
    "library/urllib2.html#module-urllib2": "library/urllib.request.html#module-urllib.request",
    "library/urllib2.html#urllib2-examples": "library/urllib.request.html#examples",
    "library/urllib2.html#urllib2-extensible-library-for-opening-urls": "library/urllib.request.html#urllib-request-extensible-library-for-opening-urls",
    "library/urllib2.html#urllib2.AbstractBasicAuthHandler.http_error_auth_reqed": "library/urllib.request.html#urllib.request.AbstractBasicAuthHandler.http_error_auth_reqed",
    "library/urllib2.html#urllib2.AbstractDigestAuthHandler.http_error_auth_reqed": "library/urllib.request.html#urllib.request.AbstractDigestAuthHandler.http_error_auth_reqed",
    "library/urllib2.html#urllib2.BaseHandler.add_parent": "library/urllib.request.html#urllib.request.BaseHandler.add_parent",
    "library/urllib2.html#urllib2.BaseHandler.close": "library/urllib.request.html#urllib.request.BaseHandler.close",
    "library/urllib2.html#urllib2.BaseHandler.default_open": "library/urllib.request.html#urllib.request.BaseHandler.default_open",
    "library/urllib2.html#urllib2.BaseHandler.http_error_default": "library/urllib.request.html#urllib.request.BaseHandler.http_error_default",
    // This link is different because it has "<" and ">"
    "library/urllib2.html#urllib2.BaseHandler.http_error_nnn": "library/urllib.request.html#http-error-nnn",
    "library/urllib2.html#urllib2.BaseHandler.parent": "library/urllib.request.html#urllib.request.BaseHandler.parent",
    "library/urllib2.html#urllib2.BaseHandler.unknown_open": "library/urllib.request.html#urllib.request.BaseHandler.unknown_open",
    "library/urllib2.html#urllib2.CacheFTPHandler.setMaxConns": "library/urllib.request.html#urllib.request.CacheFTPHandler.setMaxConns",
    "library/urllib2.html#urllib2.CacheFTPHandler.setTimeout": "library/urllib.request.html#urllib.request.CacheFTPHandler.setTimeout",
    "library/urllib2.html#urllib2.FTPHandler.ftp_open": "library/urllib.request.html#urllib.request.FTPHandler.ftp_open",
    "library/urllib2.html#urllib2.FileHandler.file_open": "library/urllib.request.html#urllib.request.FileHandler.file_open",
    "library/urllib2.html#urllib2.HTTPBasicAuthHandler.http_error_401": "library/urllib.request.html#urllib.request.HTTPBasicAuthHandler.http_error_401",
    "library/urllib2.html#urllib2.HTTPCookieProcessor.cookiejar": "library/urllib.request.html#urllib.request.HTTPCookieProcessor.cookiejar",
    "library/urllib2.html#urllib2.HTTPDigestAuthHandler.http_error_401": "library/urllib.request.html#urllib.request.HTTPDigestAuthHandler.http_error_401",
    "library/urllib2.html#urllib2.HTTPError.code": "library/urllib.error.html#urllib.error.HTTPError.code",
    "library/urllib2.html#urllib2.HTTPError.reason": "library/urllib.error.html#urllib.error.HTTPError.reason",
    "library/urllib2.html#urllib2.HTTPErrorProcessor": "library/urllib.request.html#urllib.request.HTTPErrorProcessor",
    "library/urllib2.html#urllib2.HTTPErrorProcessor.http_response": "library/urllib.request.html#urllib.request.HTTPErrorProcessor.http_response",
    "library/urllib2.html#urllib2.HTTPErrorProcessor.https_response": "library/urllib.request.html#urllib.request.HTTPErrorProcessor.https_response",
    "library/urllib2.html#urllib2.HTTPHandler.http_open": "library/urllib.request.html#urllib.request.HTTPHandler.http_open",
    "library/urllib2.html#urllib2.HTTPPasswordMgr.add_password": "library/urllib.request.html#urllib.request.HTTPPasswordMgr.add_password",
    "library/urllib2.html#urllib2.HTTPPasswordMgr.find_user_password": "library/urllib.request.html#urllib.request.HTTPPasswordMgr.find_user_password",
    "library/urllib2.html#urllib2.HTTPRedirectHandler.http_error_301": "library/urllib.request.html#urllib.request.HTTPRedirectHandler.http_error_301",
    "library/urllib2.html#urllib2.HTTPRedirectHandler.http_error_302": "library/urllib.request.html#urllib.request.HTTPRedirectHandler.http_error_302",
    "library/urllib2.html#urllib2.HTTPRedirectHandler.http_error_303": "library/urllib.request.html#urllib.request.HTTPRedirectHandler.http_error_303",
    "library/urllib2.html#urllib2.HTTPRedirectHandler.http_error_307": "library/urllib.request.html#urllib.request.HTTPRedirectHandler.http_error_307",
    "library/urllib2.html#urllib2.HTTPRedirectHandler.redirect_request": "library/urllib.request.html#urllib.request.HTTPRedirectHandler.redirect_request",
    "library/urllib2.html#urllib2.HTTPSHandler.https_open": "library/urllib.request.html#urllib.request.HTTPSHandler.https_open",
    "library/urllib2.html#urllib2.OpenerDirector.add_handler": "library/urllib.request.html#urllib.request.OpenerDirector.add_handler",
    "library/urllib2.html#urllib2.OpenerDirector.error": "library/urllib.request.html#urllib.request.OpenerDirector.error",
    "library/urllib2.html#urllib2.OpenerDirector.open": "library/urllib.request.html#urllib.request.OpenerDirector.open",
    "library/urllib2.html#urllib2.ProxyBasicAuthHandler.http_error_407": "library/urllib.request.html#urllib.request.ProxyBasicAuthHandler.http_error_407",
    "library/urllib2.html#urllib2.ProxyDigestAuthHandler.http_error_407": "library/urllib.request.html#urllib.request.ProxyDigestAuthHandler.http_error_407",
    // TODO: redirect some of these to the properties?
    "library/urllib2.html#urllib2.Request.add_data": null,
    "library/urllib2.html#urllib2.Request.add_header": "library/urllib.request.html#urllib.request.Request.add_header",
    "library/urllib2.html#urllib2.Request.add_unredirected_header": "library/urllib.request.html#urllib.request.Request.add_unredirected_header",
    "library/urllib2.html#urllib2.Request.get_data": null,
    "library/urllib2.html#urllib2.Request.get_full_url": "library/urllib.request.html#urllib.request.Request.get_full_url",
    "library/urllib2.html#urllib2.Request.get_header": "library/urllib.request.html#urllib.request.Request.get_header",
    "library/urllib2.html#urllib2.Request.get_host": null,
    "library/urllib2.html#urllib2.Request.get_method": "library/urllib.request.html#urllib.request.Request.get_method",
    "library/urllib2.html#urllib2.Request.get_origin_req_host": null,
    "library/urllib2.html#urllib2.Request.get_selector": null,
    "library/urllib2.html#urllib2.Request.get_type": null,
    "library/urllib2.html#urllib2.Request.has_data": null,
    "library/urllib2.html#urllib2.Request.has_header": "library/urllib.request.html#urllib.request.Request.has_header",
    "library/urllib2.html#urllib2.Request.header_items": "library/urllib.request.html#urllib.request.Request.header_items",
    "library/urllib2.html#urllib2.Request.is_unverifiable": null,
    "library/urllib2.html#urllib2.Request.set_proxy": "library/urllib.request.html#urllib.request.Request.set_proxy",
    "library/urllib2.html#urllib2.URLError.reason": "library/urllib.error.html#urllib.error.URLError.reason",
    "library/urllib2.html#urllib2.UnknownHandler.unknown_open": "library/urllib.request.html#urllib.request.UnknownHandler.unknown_open",


    "library/httplib.html": "library/http.client.html",
    "library/httplib.html#module-httplib": "library/http.client.html#module-http.client",
    "library/httplib.html#httplib-http-protocol-client": "library/http.client.html#http-client-http-protocol-client",
    "library/httplib.html#httplib.HTTPConnection": "library/http.client.html#http.client.HTTPConnection",
    "library/httplib.html#httplib.HTTPSConnection": "library/http.client.html#http.client.HTTPSConnection",
    "library/httplib.html#httplib.HTTPResponse": "library/http.client.html#http.client.HTTPResponse",
    "library/httplib.html#httplib.HTTPMessage": "library/http.client.html#httpmessage-objects",
    "library/httplib.html#httplib.HTTPException": "library/http.client.html#http.client.HTTPException",
    "library/httplib.html#httplib.NotConnected": "library/http.client.html#http.client.NotConnected",
    "library/httplib.html#httplib.InvalidURL": "library/http.client.html#http.client.InvalidURL",
    "library/httplib.html#httplib.UnknownProtocol": "library/http.client.html#http.client.UnknownProtocol",
    "library/httplib.html#httplib.UnknownTransferEncoding": "library/http.client.html#http.client.UnknownTransferEncoding",
    "library/httplib.html#httplib.UnimplementedFileMode": "library/http.client.html#http.client.UnimplementedFileMode",
    "library/httplib.html#httplib.IncompleteRead": "library/http.client.html#http.client.IncompleteRead",
    "library/httplib.html#httplib.ImproperConnectionState": "library/http.client.html#http.client.ImproperConnectionState",
    "library/httplib.html#httplib.CannotSendRequest": "library/http.client.html#http.client.CannotSendRequest",
    "library/httplib.html#httplib.CannotSendHeader": "library/http.client.html#http.client.CannotSendHeader",
    "library/httplib.html#httplib.ResponseNotReady": "library/http.client.html#http.client.ResponseNotReady",
    "library/httplib.html#httplib.BadStatusLine": "library/http.client.html#http.client.BadStatusLine",
    "library/httplib.html#httplib.HTTP_PORT": "library/http.client.html#http.client.HTTP_PORT",
    "library/httplib.html#httplib.HTTPS_PORT": "library/http.client.html#http.client.HTTPS_PORT",
    "library/httplib.html#httplib.responses": "library/http.client.html#http.client.responses",
    "library/httplib.html#httplib.HTTPConnection.request": "library/http.client.html#http.client.HTTPConnection.request",
    "library/httplib.html#httplib.HTTPConnection.getresponse": "library/http.client.html#http.client.HTTPConnection.getresponse",
    "library/httplib.html#httplib.HTTPConnection.set_debuglevel": "library/http.client.html#http.client.HTTPConnection.set_debuglevel",
    "library/httplib.html#httplib.HTTPConnection.set_tunnel": "library/http.client.html#http.client.HTTPConnection.set_tunnel",
    "library/httplib.html#httplib.HTTPConnection.connect": "library/http.client.html#http.client.HTTPConnection.connect",
    "library/httplib.html#httplib.HTTPConnection.close": "library/http.client.html#http.client.HTTPConnection.close",
    "library/httplib.html#httplib.HTTPConnection.putrequest": "library/http.client.html#http.client.HTTPConnection.putrequest",
    "library/httplib.html#httplib.HTTPConnection.putheader": "library/http.client.html#http.client.HTTPConnection.putheader",
    "library/httplib.html#httplib.HTTPConnection.endheaders": "library/http.client.html#http.client.HTTPConnection.endheaders",
    "library/httplib.html#httplib.HTTPConnection.send": "library/http.client.html#http.client.HTTPConnection.send",
    "library/httplib.html#httplib.HTTPResponse.read": "library/http.client.html#http.client.HTTPResponse.read",
    "library/httplib.html#httplib.HTTPResponse.getheader": "library/http.client.html#http.client.HTTPResponse.getheader",
    "library/httplib.html#httplib.HTTPResponse.getheaders": "library/http.client.html#http.client.HTTPResponse.getheaders",
    "library/httplib.html#httplib.HTTPResponse.fileno": "library/http.client.html#http.client.HTTPResponse.fileno",
    "library/httplib.html#httplib.HTTPResponse.msg": "library/http.client.html#http.client.HTTPResponse.msg",
    "library/httplib.html#httplib.HTTPResponse.version": "library/http.client.html#http.client.HTTPResponse.version",
    "library/httplib.html#httplib.HTTPResponse.status": "library/http.client.html#http.client.HTTPResponse.status",
    "library/httplib.html#httplib.HTTPResponse.reason": "library/http.client.html#http.client.HTTPResponse.reason",
    "library/httplib.html#httplib-examples": "library/http.client.html#examples",


    // TODO: what happened to this?
    "library/imaplib.html#imaplib.IMAP4_SSL.ssl": null,


    // "library/nntplib.html#nntplib.NNTP.xgtitle": "library/nntplib.html#nntplib.NNTP.description",
    // "library/nntplib.html#nntplib.NNTP.xgtitle": "library/nntplib.html#nntplib.NNTP.descriptions",
    "library/nntplib.html#nntplib.NNTP.xgtitle": null,


    "library/urlparse.html": "library/urllib.parse.html",
    "library/urlparse.html#module-urlparse": "library/urllib.parse.html#module-urllib.parse",
    "library/urlparse.html#urlparse-parse-urls-into-components": "library/urllib.parse.html#urllib-parse-parse-urls-into-components",
    "library/urlparse.html#urlparse.urlparse": "library/urllib.parse.html#urllib.parse.urlparse",
    "library/urlparse.html#urlparse.parse_qs": "library/urllib.parse.html#urllib.parse.parse_qs",
    "library/urlparse.html#urlparse.parse_qsl": "library/urllib.parse.html#urllib.parse.parse_qsl",
    "library/urlparse.html#urlparse.urlunparse": "library/urllib.parse.html#urllib.parse.urlunparse",
    "library/urlparse.html#urlparse.urlsplit": "library/urllib.parse.html#urllib.parse.urlsplit",
    "library/urlparse.html#urlparse.urlunsplit": "library/urllib.parse.html#urllib.parse.urlunsplit",
    "library/urlparse.html#urlparse.urljoin": "library/urllib.parse.html#urllib.parse.urljoin",
    "library/urlparse.html#urlparse.urldefrag": "library/urllib.parse.html#urllib.parse.urldefrag",
    "library/urlparse.html#results-of-urlparse-and-urlsplit": "library/urllib.parse.html#structured-parse-results",
    // This might look wrong, but it's not.
    "library/urlparse.html#urlparse.ParseResult.geturl": "library/urllib.parse.html#urllib.parse.urllib.parse.SplitResult.geturl",
    "library/urlparse.html#urlparse.ParseResult": "library/urllib.parse.html#urllib.parse.ParseResult",
    "library/urlparse.html#urlparse.SplitResult": "library/urllib.parse.html#urllib.parse.SplitResult",


    "library/socketserver.html#module-SocketServer": "library/socketserver.html#module-socketserver",
    "library/socketserver.html#SocketServer.TCPServer": "library/socketserver.html#socketserver.TCPServer",
    "library/socketserver.html#SocketServer.UDPServer": "library/socketserver.html#socketserver.UDPServer",
    "library/socketserver.html#SocketServer.UnixStreamServer": "library/socketserver.html#socketserver.UnixStreamServer",
    "library/socketserver.html#SocketServer.UnixDatagramServer": "library/socketserver.html#socketserver.UnixDatagramServer",
    "library/socketserver.html#SocketServer.ForkingMixIn": "library/socketserver.html#socketserver.ForkingMixIn",
    "library/socketserver.html#SocketServer.ThreadingMixIn": "library/socketserver.html#socketserver.ThreadingMixIn",
    "library/socketserver.html#SocketServer.ForkingTCPServer": "library/socketserver.html#socketserver.ForkingTCPServer",
    "library/socketserver.html#SocketServer.ForkingUDPServer": "library/socketserver.html#socketserver.ForkingUDPServer",
    "library/socketserver.html#SocketServer.ThreadingTCPServer": "library/socketserver.html#socketserver.ThreadingTCPServer",
    "library/socketserver.html#SocketServer.ThreadingUDPServer": "library/socketserver.html#socketserver.ThreadingUDPServer",
    "library/socketserver.html#SocketServer.BaseServer": "library/socketserver.html#socketserver.BaseServer",
    "library/socketserver.html#SocketServer.BaseServer.fileno": "library/socketserver.html#socketserver.BaseServer.fileno",
    "library/socketserver.html#SocketServer.BaseServer.handle_request": "library/socketserver.html#socketserver.BaseServer.handle_request",
    "library/socketserver.html#SocketServer.BaseServer.serve_forever": "library/socketserver.html#socketserver.BaseServer.serve_forever",
    "library/socketserver.html#SocketServer.BaseServer.shutdown": "library/socketserver.html#socketserver.BaseServer.shutdown",
    "library/socketserver.html#SocketServer.BaseServer.server_close": "library/socketserver.html#socketserver.BaseServer.server_close",
    "library/socketserver.html#SocketServer.BaseServer.address_family": "library/socketserver.html#socketserver.BaseServer.address_family",
    "library/socketserver.html#SocketServer.BaseServer.RequestHandlerClass": "library/socketserver.html#socketserver.BaseServer.RequestHandlerClass",
    "library/socketserver.html#SocketServer.BaseServer.server_address": "library/socketserver.html#socketserver.BaseServer.server_address",
    "library/socketserver.html#SocketServer.BaseServer.socket": "library/socketserver.html#socketserver.BaseServer.socket",
    "library/socketserver.html#SocketServer.BaseServer.allow_reuse_address": "library/socketserver.html#socketserver.BaseServer.allow_reuse_address",
    "library/socketserver.html#SocketServer.BaseServer.request_queue_size": "library/socketserver.html#socketserver.BaseServer.request_queue_size",
    "library/socketserver.html#SocketServer.BaseServer.socket_type": "library/socketserver.html#socketserver.BaseServer.socket_type",
    "library/socketserver.html#SocketServer.BaseServer.timeout": "library/socketserver.html#socketserver.BaseServer.timeout",
    "library/socketserver.html#SocketServer.BaseServer.finish_request": "library/socketserver.html#socketserver.BaseServer.finish_request",
    "library/socketserver.html#SocketServer.BaseServer.get_request": "library/socketserver.html#socketserver.BaseServer.get_request",
    "library/socketserver.html#SocketServer.BaseServer.handle_error": "library/socketserver.html#socketserver.BaseServer.handle_error",
    "library/socketserver.html#SocketServer.BaseServer.handle_timeout": "library/socketserver.html#socketserver.BaseServer.handle_timeout",
    "library/socketserver.html#SocketServer.BaseServer.process_request": "library/socketserver.html#socketserver.BaseServer.process_request",
    "library/socketserver.html#SocketServer.BaseServer.server_activate": "library/socketserver.html#socketserver.BaseServer.server_activate",
    "library/socketserver.html#SocketServer.BaseServer.server_bind": "library/socketserver.html#socketserver.BaseServer.server_bind",
    "library/socketserver.html#SocketServer.BaseServer.verify_request": "library/socketserver.html#socketserver.BaseServer.verify_request",
    "library/socketserver.html#SocketServer.BaseRequestHandler": "library/socketserver.html#socketserver.BaseRequestHandler",
    "library/socketserver.html#SocketServer.BaseRequestHandler.setup": "library/socketserver.html#socketserver.BaseRequestHandler.setup",
    "library/socketserver.html#SocketServer.BaseRequestHandler.handle": "library/socketserver.html#socketserver.BaseRequestHandler.handle",
    "library/socketserver.html#SocketServer.BaseRequestHandler.finish": "library/socketserver.html#socketserver.BaseRequestHandler.finish",
    "library/socketserver.html#SocketServer.StreamRequestHandler": "library/socketserver.html#socketserver.StreamRequestHandler",
    "library/socketserver.html#SocketServer.DatagramRequestHandler": "library/socketserver.html#socketserver.DatagramRequestHandler",


    "library/basehttpserver.html": "library/http.server.html",
    "library/basehttpserver.html#module-BaseHTTPServer": "library/http.server.html#module-http.server",
    "library/basehttpserver.html#basehttpserver-basic-http-server": "library/http.server.html#http-server-http-servers",
    "library/basehttpserver.html#BaseHTTPServer.HTTPServer": "library/http.server.html#http.server.HTTPServer",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler": "library/http.server.html#http.server.BaseHTTPRequestHandler",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.client_address": "library/http.server.html#http.server.BaseHTTPRequestHandler.client_address",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.server": "library/http.server.html#http.server.BaseHTTPRequestHandler.server",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.command": "library/http.server.html#http.server.BaseHTTPRequestHandler.command",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.path": "library/http.server.html#http.server.BaseHTTPRequestHandler.path",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.request_version": "library/http.server.html#http.server.BaseHTTPRequestHandler.request_version",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.headers": "library/http.server.html#http.server.BaseHTTPRequestHandler.headers",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.rfile": "library/http.server.html#http.server.BaseHTTPRequestHandler.rfile",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.wfile": "library/http.server.html#http.server.BaseHTTPRequestHandler.wfile",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.server_version": "library/http.server.html#http.server.BaseHTTPRequestHandler.server_version",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.sys_version": "library/http.server.html#http.server.BaseHTTPRequestHandler.sys_version",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.error_message_format": "library/http.server.html#http.server.BaseHTTPRequestHandler.error_message_format",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.error_content_type": "library/http.server.html#http.server.BaseHTTPRequestHandler.error_content_type",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.protocol_version": "library/http.server.html#http.server.BaseHTTPRequestHandler.protocol_version",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.MessageClass": "library/http.server.html#http.server.BaseHTTPRequestHandler.MessageClass",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.responses": "library/http.server.html#http.server.BaseHTTPRequestHandler.responses",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.handle": "library/http.server.html#http.server.BaseHTTPRequestHandler.handle",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.handle_one_request": "library/http.server.html#http.server.BaseHTTPRequestHandler.handle_one_request",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.send_error": "library/http.server.html#http.server.BaseHTTPRequestHandler.send_error",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.send_response": "library/http.server.html#http.server.BaseHTTPRequestHandler.send_response",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.send_header": "library/http.server.html#http.server.BaseHTTPRequestHandler.send_header",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.end_headers": "library/http.server.html#http.server.BaseHTTPRequestHandler.end_headers",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.log_request": "library/http.server.html#http.server.BaseHTTPRequestHandler.log_request",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.log_error": "library/http.server.html#http.server.BaseHTTPRequestHandler.log_error",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.log_message": "library/http.server.html#http.server.BaseHTTPRequestHandler.log_message",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.version_string": "library/http.server.html#http.server.BaseHTTPRequestHandler.version_string",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.date_time_string": "library/http.server.html#http.server.BaseHTTPRequestHandler.date_time_string",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.log_date_time_string": "library/http.server.html#http.server.BaseHTTPRequestHandler.log_date_time_string",
    "library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.address_string": "library/http.server.html#http.server.BaseHTTPRequestHandler.address_string",
    // Example was deleted. TODO: redirect to module anyway?
    // "library/basehttpserver.html#more-examples": "library/http.server.html",
    "library/basehttpserver.html#more-examples": null,

    "library/simplehttpserver.html": "library/http.server.html",
    "library/simplehttpserver.html#module-SimpleHTTPServer": "library/http.server.html#module-http.server",
    "library/simplehttpserver.html#simplehttpserver-simple-http-request-handler": "library/http.server.html#http.server.SimpleHTTPRequestHandler",
    "library/simplehttpserver.html#SimpleHTTPServer.SimpleHTTPRequestHandler": "library/http.server.html#http.server.SimpleHTTPRequestHandler",
    "library/simplehttpserver.html#SimpleHTTPServer.SimpleHTTPRequestHandler.server_version": "library/http.server.html#http.server.SimpleHTTPRequestHandler.server_version",
    "library/simplehttpserver.html#SimpleHTTPServer.SimpleHTTPRequestHandler.extensions_map": "library/http.server.html#http.server.SimpleHTTPRequestHandler.extensions_map",
    "library/simplehttpserver.html#SimpleHTTPServer.SimpleHTTPRequestHandler.do_HEAD": "library/http.server.html#http.server.SimpleHTTPRequestHandler.do_HEAD",
    "library/simplehttpserver.html#SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET": "library/http.server.html#http.server.SimpleHTTPRequestHandler.do_GET",

    "library/cgihttpserver.html": "library/http.server.html#http.server.CGIHTTPRequestHandler",
    "library/cgihttpserver.html#module-CGIHTTPServer": "library/http.server.html#http.server.CGIHTTPRequestHandler",
    "library/cgihttpserver.html#cgihttpserver-cgi-capable-http-request-handler": "library/http.server.html#http.server.CGIHTTPRequestHandler",
    "library/cgihttpserver.html#CGIHTTPServer.CGIHTTPRequestHandler": "library/http.server.html#http.server.CGIHTTPRequestHandler",
    "library/cgihttpserver.html#CGIHTTPServer.CGIHTTPRequestHandler.cgi_directories": "library/http.server.html#http.server.CGIHTTPRequestHandler.cgi_directories",
    "library/cgihttpserver.html#CGIHTTPServer.CGIHTTPRequestHandler.do_POST": "library/http.server.html#http.server.CGIHTTPRequestHandler.do_POST",


    "library/cookielib.html": "library/http.cookiejar.html",
    "library/cookielib.html#module-cookielib": "library/http.cookiejar.html#module-http.cookiejar",
    "library/cookielib.html#cookielib-cookie-handling-for-http-clients": "library/http.cookiejar.html#http-cookiejar-cookie-handling-for-http-clients",
    "library/cookielib.html#cookielib.LoadError": "library/http.cookiejar.html#http.cookiejar.LoadError",
    "library/cookielib.html#cookielib.CookieJar": "library/http.cookiejar.html#http.cookiejar.CookieJar",
    "library/cookielib.html#cookielib.FileCookieJar": "library/http.cookiejar.html#http.cookiejar.FileCookieJar",
    "library/cookielib.html#cookielib.CookiePolicy": "library/http.cookiejar.html#http.cookiejar.CookiePolicy",
    "library/cookielib.html#cookielib.DefaultCookiePolicy": "library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy",
    "library/cookielib.html#cookielib.Cookie": "library/http.cookiejar.html#http.cookiejar.Cookie",
    "library/cookielib.html#cookielib.CookieJar.add_cookie_header": "library/http.cookiejar.html#http.cookiejar.CookieJar.add_cookie_header",
    "library/cookielib.html#cookielib.CookieJar.extract_cookies": "library/http.cookiejar.html#http.cookiejar.CookieJar.extract_cookies",
    "library/cookielib.html#cookielib.CookieJar.set_policy": "library/http.cookiejar.html#http.cookiejar.CookieJar.set_policy",
    "library/cookielib.html#cookielib.CookieJar.make_cookies": "library/http.cookiejar.html#http.cookiejar.CookieJar.make_cookies",
    "library/cookielib.html#cookielib.CookieJar.set_cookie_if_ok": "library/http.cookiejar.html#http.cookiejar.CookieJar.set_cookie_if_ok",
    "library/cookielib.html#cookielib.CookieJar.set_cookie": "library/http.cookiejar.html#http.cookiejar.CookieJar.set_cookie",
    "library/cookielib.html#cookielib.CookieJar.clear": "library/http.cookiejar.html#http.cookiejar.CookieJar.clear",
    "library/cookielib.html#cookielib.CookieJar.clear_session_cookies": "library/http.cookiejar.html#http.cookiejar.CookieJar.clear_session_cookies",
    "library/cookielib.html#cookielib.FileCookieJar.save": "library/http.cookiejar.html#http.cookiejar.FileCookieJar.save",
    "library/cookielib.html#cookielib.FileCookieJar.load": "library/http.cookiejar.html#http.cookiejar.FileCookieJar.load",
    "library/cookielib.html#cookielib.FileCookieJar.revert": "library/http.cookiejar.html#http.cookiejar.FileCookieJar.revert",
    "library/cookielib.html#cookielib.FileCookieJar.filename": "library/http.cookiejar.html#http.cookiejar.FileCookieJar.filename",
    "library/cookielib.html#cookielib.FileCookieJar.delayload": "library/http.cookiejar.html#http.cookiejar.FileCookieJar.delayload",
    "library/cookielib.html#cookielib.MozillaCookieJar": "library/http.cookiejar.html#http.cookiejar.MozillaCookieJar",
    "library/cookielib.html#cookielib.LWPCookieJar": "library/http.cookiejar.html#http.cookiejar.LWPCookieJar",
    "library/cookielib.html#cookielib.CookiePolicy.set_ok": "library/http.cookiejar.html#http.cookiejar.CookiePolicy.set_ok",
    "library/cookielib.html#cookielib.CookiePolicy.return_ok": "library/http.cookiejar.html#http.cookiejar.CookiePolicy.return_ok",
    "library/cookielib.html#cookielib.CookiePolicy.domain_return_ok": "library/http.cookiejar.html#http.cookiejar.CookiePolicy.domain_return_ok",
    "library/cookielib.html#cookielib.CookiePolicy.path_return_ok": "library/http.cookiejar.html#http.cookiejar.CookiePolicy.path_return_ok",
    "library/cookielib.html#cookielib.CookiePolicy.netscape": "library/http.cookiejar.html#http.cookiejar.CookiePolicy.netscape",
    "library/cookielib.html#cookielib.CookiePolicy.rfc2965": "library/http.cookiejar.html#http.cookiejar.CookiePolicy.rfc2965",
    "library/cookielib.html#cookielib.CookiePolicy.hide_cookie2": "library/http.cookiejar.html#http.cookiejar.CookiePolicy.hide_cookie2",
    "library/cookielib.html#cookielib.DefaultCookiePolicy.blocked_domains": "library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.blocked_domains",
    "library/cookielib.html#cookielib.DefaultCookiePolicy.set_blocked_domains": "library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.set_blocked_domains",
    "library/cookielib.html#cookielib.DefaultCookiePolicy.is_blocked": "library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.is_blocked",
    "library/cookielib.html#cookielib.DefaultCookiePolicy.allowed_domains": "library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.allowed_domains",
    "library/cookielib.html#cookielib.DefaultCookiePolicy.set_allowed_domains": "library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.set_allowed_domains",
    "library/cookielib.html#cookielib.DefaultCookiePolicy.is_not_allowed": "library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.is_not_allowed",
    "library/cookielib.html#cookielib.DefaultCookiePolicy.rfc2109_as_netscape": "library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.rfc2109_as_netscape",
    "library/cookielib.html#cookielib.DefaultCookiePolicy.strict_domain": "library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.strict_domain",
    "library/cookielib.html#cookielib.DefaultCookiePolicy.strict_rfc2965_unverifiable": "library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.strict_rfc2965_unverifiable",
    "library/cookielib.html#cookielib.DefaultCookiePolicy.strict_ns_unverifiable": "library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.strict_ns_unverifiable",
    "library/cookielib.html#cookielib.DefaultCookiePolicy.strict_ns_domain": "library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.strict_ns_domain",
    "library/cookielib.html#cookielib.DefaultCookiePolicy.strict_ns_set_initial_dollar": "library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.strict_ns_set_initial_dollar",
    "library/cookielib.html#cookielib.DefaultCookiePolicy.strict_ns_set_path": "library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.strict_ns_set_path",
    "library/cookielib.html#cookielib.DefaultCookiePolicy.DomainStrictNoDots": "library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.DomainStrictNoDots",
    "library/cookielib.html#cookielib.DefaultCookiePolicy.DomainStrictNonDomain": "library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.DomainStrictNonDomain",
    "library/cookielib.html#cookielib.DefaultCookiePolicy.DomainRFC2965Match": "library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.DomainRFC2965Match",
    "library/cookielib.html#cookielib.DefaultCookiePolicy.DomainLiberal": "library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.DomainLiberal",
    "library/cookielib.html#cookielib.DefaultCookiePolicy.DomainStrict": "library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.DomainStrict",
    "library/cookielib.html#cookielib-cookie-objects": "library/http.cookiejar.html#cookie-objects",
    "library/cookielib.html#cookielib.Cookie.version": "library/http.cookiejar.html#http.cookiejar.Cookie.version",
    "library/cookielib.html#cookielib.Cookie.name": "library/http.cookiejar.html#http.cookiejar.Cookie.name",
    "library/cookielib.html#cookielib.Cookie.value": "library/http.cookiejar.html#http.cookiejar.Cookie.value",
    "library/cookielib.html#cookielib.Cookie.port": "library/http.cookiejar.html#http.cookiejar.Cookie.port",
    "library/cookielib.html#cookielib.Cookie.path": "library/http.cookiejar.html#http.cookiejar.Cookie.path",
    "library/cookielib.html#cookielib.Cookie.secure": "library/http.cookiejar.html#http.cookiejar.Cookie.secure",
    "library/cookielib.html#cookielib.Cookie.expires": "library/http.cookiejar.html#http.cookiejar.Cookie.expires",
    "library/cookielib.html#cookielib.Cookie.discard": "library/http.cookiejar.html#http.cookiejar.Cookie.discard",
    "library/cookielib.html#cookielib.Cookie.comment": "library/http.cookiejar.html#http.cookiejar.Cookie.comment",
    "library/cookielib.html#cookielib.Cookie.comment_url": "library/http.cookiejar.html#http.cookiejar.Cookie.comment_url",
    "library/cookielib.html#cookielib.Cookie.rfc2109": "library/http.cookiejar.html#http.cookiejar.Cookie.rfc2109",
    "library/cookielib.html#cookielib.Cookie.port_specified": "library/http.cookiejar.html#http.cookiejar.Cookie.port_specified",
    "library/cookielib.html#cookielib.Cookie.domain_specified": "library/http.cookiejar.html#http.cookiejar.Cookie.domain_specified",
    "library/cookielib.html#cookielib.Cookie.domain_initial_dot": "library/http.cookiejar.html#http.cookiejar.Cookie.domain_initial_dot",
    "library/cookielib.html#cookielib.Cookie.has_nonstandard_attr": "library/http.cookiejar.html#http.cookiejar.Cookie.has_nonstandard_attr",
    "library/cookielib.html#cookielib.Cookie.get_nonstandard_attr": "library/http.cookiejar.html#http.cookiejar.Cookie.get_nonstandard_attr",
    "library/cookielib.html#cookielib.Cookie.set_nonstandard_attr": "library/http.cookiejar.html#http.cookiejar.Cookie.set_nonstandard_attr",
    "library/cookielib.html#cookielib.Cookie.is_expired": "library/http.cookiejar.html#http.cookiejar.Cookie.is_expired",
    "library/cookielib.html#cookielib-examples": "library/http.cookiejar.html#examples",

    "library/cookie.html": "library/http.cookies.html",
    "library/cookie.html#module-Cookie": "library/http.cookies.html#module-http.cookies",
    "library/cookie.html#cookie-http-state-management": "library/http.cookies.html#http-cookies-http-state-management",
    "library/cookie.html#Cookie.CookieError": "library/http.cookies.html#http.cookies.CookieError",
    "library/cookie.html#Cookie.BaseCookie": "library/http.cookies.html#http.cookies.BaseCookie",
    "library/cookie.html#Cookie.SimpleCookie": "library/http.cookies.html#http.cookies.SimpleCookie",
    // "Deprecated since version 2.3"
    "library/cookie.html#Cookie.SerialCookie": null,
    "library/cookie.html#Cookie.SmartCookie": null,
    "library/cookie.html#Cookie.BaseCookie.value_decode": "library/http.cookies.html#http.cookies.BaseCookie.value_decode",
    "library/cookie.html#Cookie.BaseCookie.value_encode": "library/http.cookies.html#http.cookies.BaseCookie.value_encode",
    "library/cookie.html#Cookie.BaseCookie.output": "library/http.cookies.html#http.cookies.BaseCookie.output",
    "library/cookie.html#Cookie.BaseCookie.js_output": "library/http.cookies.html#http.cookies.BaseCookie.js_output",
    "library/cookie.html#Cookie.BaseCookie.load": "library/http.cookies.html#http.cookies.BaseCookie.load",
    "library/cookie.html#Cookie.Morsel": "library/http.cookies.html#http.cookies.Morsel",
    "library/cookie.html#Cookie.Morsel.value": "library/http.cookies.html#http.cookies.Morsel.value",
    "library/cookie.html#Cookie.Morsel.coded_value": "library/http.cookies.html#http.cookies.Morsel.coded_value",
    "library/cookie.html#Cookie.Morsel.key": "library/http.cookies.html#http.cookies.Morsel.key",
    "library/cookie.html#Cookie.Morsel.set": "library/http.cookies.html#http.cookies.Morsel.set",
    "library/cookie.html#Cookie.Morsel.isReservedKey": "library/http.cookies.html#http.cookies.Morsel.isReservedKey",
    "library/cookie.html#Cookie.Morsel.output": "library/http.cookies.html#http.cookies.Morsel.output",
    "library/cookie.html#Cookie.Morsel.js_output": "library/http.cookies.html#http.cookies.Morsel.js_output",
    "library/cookie.html#Cookie.Morsel.OutputString": "library/http.cookies.html#http.cookies.Morsel.OutputString",



    "library/xmlrpclib.html": "library/xmlrpc.client.html",
    "library/xmlrpclib.html#module-xmlrpclib": "library/xmlrpc.client.html#module-xmlrpc.client",
    "library/xmlrpclib.html#xmlrpclib-xml-rpc-client-access": "library/xmlrpc.client.html#xmlrpc-client-xml-rpc-client-access",
    "library/xmlrpclib.html#xmlrpclib.ServerProxy": "library/xmlrpc.client.html#xmlrpc.client.ServerProxy",
    "library/xmlrpclib.html#xmlrpclib.ServerProxy.system.listMethods": "library/xmlrpc.client.html#xmlrpc.client.ServerProxy.system.listMethods",
    "library/xmlrpclib.html#xmlrpclib.ServerProxy.system.methodSignature": "library/xmlrpc.client.html#xmlrpc.client.ServerProxy.system.methodSignature",
    "library/xmlrpclib.html#xmlrpclib.ServerProxy.system.methodHelp": "library/xmlrpc.client.html#xmlrpc.client.ServerProxy.system.methodHelp",
    // No longer documented
    "library/xmlrpclib.html#boolean-objects": null,
    "library/xmlrpclib.html#xmlrpclib.Boolean.encode": null,
    "library/xmlrpclib.html#xmlrpclib.DateTime": "library/xmlrpc.client.html#xmlrpc.client.DateTime",
    "library/xmlrpclib.html#xmlrpclib.DateTime.decode": "library/xmlrpc.client.html#xmlrpc.client.DateTime.decode",
    "library/xmlrpclib.html#xmlrpclib.DateTime.encode": "library/xmlrpc.client.html#xmlrpc.client.DateTime.encode",
    "library/xmlrpclib.html#xmlrpclib.Binary": "library/xmlrpc.client.html#xmlrpc.client.Binary",
    "library/xmlrpclib.html#xmlrpclib.Binary.data": "library/xmlrpc.client.html#xmlrpc.client.Binary.data",
    "library/xmlrpclib.html#xmlrpclib.Binary.decode": "library/xmlrpc.client.html#xmlrpc.client.Binary.decode",
    "library/xmlrpclib.html#xmlrpclib.Binary.encode": "library/xmlrpc.client.html#xmlrpc.client.Binary.encode",
    "library/xmlrpclib.html#xmlrpclib.Fault": "library/xmlrpc.client.html#xmlrpc.client.Fault",
    "library/xmlrpclib.html#xmlrpclib.Fault.faultCode": "library/xmlrpc.client.html#xmlrpc.client.Fault.faultCode",
    "library/xmlrpclib.html#xmlrpclib.Fault.faultString": "library/xmlrpc.client.html#xmlrpc.client.Fault.faultString",
    "library/xmlrpclib.html#xmlrpclib.ProtocolError": "library/xmlrpc.client.html#xmlrpc.client.ProtocolError",
    "library/xmlrpclib.html#xmlrpclib.ProtocolError.url": "library/xmlrpc.client.html#xmlrpc.client.ProtocolError.url",
    "library/xmlrpclib.html#xmlrpclib.ProtocolError.errcode": "library/xmlrpc.client.html#xmlrpc.client.ProtocolError.errcode",
    "library/xmlrpclib.html#xmlrpclib.ProtocolError.errmsg": "library/xmlrpc.client.html#xmlrpc.client.ProtocolError.errmsg",
    "library/xmlrpclib.html#xmlrpclib.ProtocolError.headers": "library/xmlrpc.client.html#xmlrpc.client.ProtocolError.headers",
    "library/xmlrpclib.html#xmlrpclib.MultiCall": "library/xmlrpc.client.html#xmlrpc.client.MultiCall",
    // No longer documented
    "library/xmlrpclib.html#xmlrpclib.boolean": null,
    "library/xmlrpclib.html#xmlrpclib.dumps": "library/xmlrpc.client.html#xmlrpc.client.dumps",
    "library/xmlrpclib.html#xmlrpclib.loads": "library/xmlrpc.client.html#xmlrpc.client.loads",

    "library/simplexmlrpcserver.html": "library/xmlrpc.server.html",
    "library/simplexmlrpcserver.html#module-SimpleXMLRPCServer": "library/xmlrpc.server.html#module-xmlrpc.server",
    "library/simplexmlrpcserver.html#simplexmlrpcserver-basic-xml-rpc-server": "library/xmlrpc.server.html#simple-xmlrpc-servers",
    "library/simplexmlrpcserver.html#SimpleXMLRPCServer.SimpleXMLRPCServer": "library/xmlrpc.server.html#xmlrpc.server.SimpleXMLRPCServer",
    "library/simplexmlrpcserver.html#SimpleXMLRPCServer.CGIXMLRPCRequestHandler": "library/xmlrpc.server.html#xmlrpc.server.CGIXMLRPCRequestHandler",
    "library/simplexmlrpcserver.html#SimpleXMLRPCServer.SimpleXMLRPCRequestHandler": "library/xmlrpc.server.html#xmlrpc.server.SimpleXMLRPCRequestHandler",
    "library/simplexmlrpcserver.html#SimpleXMLRPCServer.SimpleXMLRPCServer.register_function": "library/xmlrpc.server.html#xmlrpc.server.SimpleXMLRPCServer.register_function",
    "library/simplexmlrpcserver.html#SimpleXMLRPCServer.SimpleXMLRPCServer.register_instance": "library/xmlrpc.server.html#xmlrpc.server.SimpleXMLRPCServer.register_instance",
    "library/simplexmlrpcserver.html#SimpleXMLRPCServer.SimpleXMLRPCServer.register_introspection_functions": "library/xmlrpc.server.html#xmlrpc.server.SimpleXMLRPCServer.register_introspection_functions",
    "library/simplexmlrpcserver.html#SimpleXMLRPCServer.SimpleXMLRPCServer.register_multicall_functions": "library/xmlrpc.server.html#xmlrpc.server.SimpleXMLRPCServer.register_multicall_functions",
    "library/simplexmlrpcserver.html#SimpleXMLRPCServer.SimpleXMLRPCRequestHandler.rpc_paths": "library/xmlrpc.server.html#xmlrpc.server.SimpleXMLRPCRequestHandler.rpc_paths",
    // Added in Python 2.7 but not documented in the Python 3 documentation
    "library/simplexmlrpcserver.html#SimpleXMLRPCServer.SimpleXMLRPCRequestHandler.encode_threshold": null,
    "library/simplexmlrpcserver.html#SimpleXMLRPCServer.CGIXMLRPCRequestHandler.register_function": "library/xmlrpc.server.html#xmlrpc.server.CGIXMLRPCRequestHandler.register_function",
    "library/simplexmlrpcserver.html#SimpleXMLRPCServer.CGIXMLRPCRequestHandler.register_instance": "library/xmlrpc.server.html#xmlrpc.server.CGIXMLRPCRequestHandler.register_instance",
    "library/simplexmlrpcserver.html#SimpleXMLRPCServer.CGIXMLRPCRequestHandler.register_introspection_functions": "library/xmlrpc.server.html#xmlrpc.server.CGIXMLRPCRequestHandler.register_introspection_functions",
    "library/simplexmlrpcserver.html#SimpleXMLRPCServer.CGIXMLRPCRequestHandler.register_multicall_functions": "library/xmlrpc.server.html#xmlrpc.server.CGIXMLRPCRequestHandler.register_multicall_functions",
    "library/simplexmlrpcserver.html#SimpleXMLRPCServer.CGIXMLRPCRequestHandler.handle_request": "library/xmlrpc.server.html#xmlrpc.server.CGIXMLRPCRequestHandler.handle_request",

    "library/docxmlrpcserver.html": "library/xmlrpc.server.html",
    "library/docxmlrpcserver.html#module-DocXMLRPCServer": "library/xmlrpc.server.html#documenting-xmlrpc-server",
    "library/docxmlrpcserver.html#docxmlrpcserver-self-documenting-xml-rpc-server": "library/xmlrpc.server.html#documenting-xmlrpc-server",
    "library/docxmlrpcserver.html#DocXMLRPCServer.DocXMLRPCServer": "library/xmlrpc.server.html#xmlrpc.server.DocXMLRPCServer",
    "library/docxmlrpcserver.html#DocXMLRPCServer.DocCGIXMLRPCRequestHandler": "library/xmlrpc.server.html#xmlrpc.server.DocCGIXMLRPCRequestHandler",
    "library/docxmlrpcserver.html#DocXMLRPCServer.DocXMLRPCRequestHandler": "library/xmlrpc.server.html#xmlrpc.server.DocXMLRPCRequestHandler",
    "library/docxmlrpcserver.html#DocXMLRPCServer.DocXMLRPCServer.set_server_title": "library/xmlrpc.server.html#xmlrpc.server.DocXMLRPCServer.set_server_title",
    "library/docxmlrpcserver.html#DocXMLRPCServer.DocXMLRPCServer.set_server_name": "library/xmlrpc.server.html#xmlrpc.server.DocXMLRPCServer.set_server_name",
    "library/docxmlrpcserver.html#DocXMLRPCServer.DocXMLRPCServer.set_server_documentation": "library/xmlrpc.server.html#xmlrpc.server.DocXMLRPCServer.set_server_documentation",
    "library/docxmlrpcserver.html#DocXMLRPCServer.DocCGIXMLRPCRequestHandler.set_server_title": "library/xmlrpc.server.html#xmlrpc.server.DocCGIXMLRPCRequestHandler.set_server_title",
    "library/docxmlrpcserver.html#DocXMLRPCServer.DocCGIXMLRPCRequestHandler.set_server_name": "library/xmlrpc.server.html#xmlrpc.server.DocCGIXMLRPCRequestHandler.set_server_name",
    "library/docxmlrpcserver.html#DocXMLRPCServer.DocCGIXMLRPCRequestHandler.set_server_documentation": "library/xmlrpc.server.html#xmlrpc.server.DocCGIXMLRPCRequestHandler.set_server_documentation",


    "library/gettext.html#gettext.NullTranslations.ugettext": "library/gettext.html#gettext.NullTranslations.gettext",
    "library/gettext.html#gettext.NullTranslations.ungettext": "library/gettext.html#gettext.NullTranslations.ngettext",
    "library/gettext.html#gettext.GNUTranslations.ugettext": "library/gettext.html#gettext.GNUTranslations.gettext",
    "library/gettext.html#gettext.GNUTranslations.ungettext": "library/gettext.html#gettext.GNUTranslations.ngettext",
    // 4 deprecated functions, will be removed in 3.10
    "library/gettext.html#gettext-vs-lgettext": null,


    "library/tkinter.html#module-Tkinter": "library/tkinter.html#module-tkinter",
    "library/tkinter.html#Tkinter.Tk": "library/tkinter.html#tkinter.Tk",
    "library/tkinter.html#Tkinter.Tcl": "library/tkinter.html#tkinter.Tcl",
    "library/tkinter.html#Tkinter.Widget.tk.createfilehandler": "library/tkinter.html#tkinter.Widget.tk.createfilehandler",
    "library/tkinter.html#Tkinter.Widget.tk.deletefilehandler": "library/tkinter.html#tkinter.Widget.tk.deletefilehandler",
    "library/tkinter.html#Tkinter.READABLE": "library/tkinter.html#tkinter.READABLE",
    "library/tkinter.html#Tkinter.WRITABLE": "library/tkinter.html#tkinter.WRITABLE",
    "library/tkinter.html#Tkinter.EXCEPTION": "library/tkinter.html#tkinter.EXCEPTION",

    "library/ttk.html": "library/tkinter.ttk.html",
    "library/ttk.html#module-ttk": "library/tkinter.ttk.html#module-tkinter.ttk",
    "library/ttk.html#ttk-tk-themed-widgets": "library/tkinter.ttk.html#tkinter-ttk-tk-themed-widgets",
    "library/ttk.html#ttk.Widget": "library/tkinter.ttk.html#tkinter.ttk.Widget",
    "library/ttk.html#ttk.Widget.identify": "library/tkinter.ttk.html#tkinter.ttk.Widget.identify",
    "library/ttk.html#ttk.Widget.instate": "library/tkinter.ttk.html#tkinter.ttk.Widget.instate",
    "library/ttk.html#ttk.Widget.state": "library/tkinter.ttk.html#tkinter.ttk.Widget.state",
    "library/ttk.html#ttk.Combobox": "library/tkinter.ttk.html#tkinter.ttk.Combobox",
    "library/ttk.html#ttk.Combobox.current": "library/tkinter.ttk.html#tkinter.ttk.Combobox.current",
    "library/ttk.html#ttk.Combobox.get": "library/tkinter.ttk.html#tkinter.ttk.Combobox.get",
    "library/ttk.html#ttk.Combobox.set": "library/tkinter.ttk.html#tkinter.ttk.Combobox.set",
    "library/ttk.html#ttk.Notebook": "library/tkinter.ttk.html#tkinter.ttk.Notebook",
    "library/ttk.html#ttk.Notebook.add": "library/tkinter.ttk.html#tkinter.ttk.Notebook.add",
    "library/ttk.html#ttk.Notebook.forget": "library/tkinter.ttk.html#tkinter.ttk.Notebook.forget",
    "library/ttk.html#ttk.Notebook.hide": "library/tkinter.ttk.html#tkinter.ttk.Notebook.hide",
    "library/ttk.html#ttk.Notebook.identify": "library/tkinter.ttk.html#tkinter.ttk.Notebook.identify",
    "library/ttk.html#ttk.Notebook.index": "library/tkinter.ttk.html#tkinter.ttk.Notebook.index",
    "library/ttk.html#ttk.Notebook.insert": "library/tkinter.ttk.html#tkinter.ttk.Notebook.insert",
    "library/ttk.html#ttk.Notebook.select": "library/tkinter.ttk.html#tkinter.ttk.Notebook.select",
    "library/ttk.html#ttk.Notebook.tab": "library/tkinter.ttk.html#tkinter.ttk.Notebook.tab",
    "library/ttk.html#ttk.Notebook.tabs": "library/tkinter.ttk.html#tkinter.ttk.Notebook.tabs",
    "library/ttk.html#ttk.Notebook.enable_traversal": "library/tkinter.ttk.html#tkinter.ttk.Notebook.enable_traversal",
    "library/ttk.html#ttk.Progressbar": "library/tkinter.ttk.html#tkinter.ttk.Progressbar",
    "library/ttk.html#ttk.Progressbar.start": "library/tkinter.ttk.html#tkinter.ttk.Progressbar.start",
    "library/ttk.html#ttk.Progressbar.step": "library/tkinter.ttk.html#tkinter.ttk.Progressbar.step",
    "library/ttk.html#ttk.Progressbar.stop": "library/tkinter.ttk.html#tkinter.ttk.Progressbar.stop",
    "library/ttk.html#ttk.Treeview": "library/tkinter.ttk.html#tkinter.ttk.Treeview",
    "library/ttk.html#ttk.Treeview.bbox": "library/tkinter.ttk.html#tkinter.ttk.Treeview.bbox",
    "library/ttk.html#ttk.Treeview.get_children": "library/tkinter.ttk.html#tkinter.ttk.Treeview.get_children",
    "library/ttk.html#ttk.Treeview.set_children": "library/tkinter.ttk.html#tkinter.ttk.Treeview.set_children",
    "library/ttk.html#ttk.Treeview.column": "library/tkinter.ttk.html#tkinter.ttk.Treeview.column",
    "library/ttk.html#ttk.Treeview.delete": "library/tkinter.ttk.html#tkinter.ttk.Treeview.delete",
    "library/ttk.html#ttk.Treeview.detach": "library/tkinter.ttk.html#tkinter.ttk.Treeview.detach",
    "library/ttk.html#ttk.Treeview.exists": "library/tkinter.ttk.html#tkinter.ttk.Treeview.exists",
    "library/ttk.html#ttk.Treeview.focus": "library/tkinter.ttk.html#tkinter.ttk.Treeview.focus",
    "library/ttk.html#ttk.Treeview.heading": "library/tkinter.ttk.html#tkinter.ttk.Treeview.heading",
    "library/ttk.html#ttk.Treeview.identify": "library/tkinter.ttk.html#tkinter.ttk.Treeview.identify",
    "library/ttk.html#ttk.Treeview.identify_row": "library/tkinter.ttk.html#tkinter.ttk.Treeview.identify_row",
    "library/ttk.html#ttk.Treeview.identify_column": "library/tkinter.ttk.html#tkinter.ttk.Treeview.identify_column",
    "library/ttk.html#ttk.Treeview.identify_region": "library/tkinter.ttk.html#tkinter.ttk.Treeview.identify_region",
    "library/ttk.html#ttk.Treeview.identify_element": "library/tkinter.ttk.html#tkinter.ttk.Treeview.identify_element",
    "library/ttk.html#ttk.Treeview.index": "library/tkinter.ttk.html#tkinter.ttk.Treeview.index",
    "library/ttk.html#ttk.Treeview.insert": "library/tkinter.ttk.html#tkinter.ttk.Treeview.insert",
    "library/ttk.html#ttk.Treeview.item": "library/tkinter.ttk.html#tkinter.ttk.Treeview.item",
    "library/ttk.html#ttk.Treeview.move": "library/tkinter.ttk.html#tkinter.ttk.Treeview.move",
    "library/ttk.html#ttk.Treeview.next": "library/tkinter.ttk.html#tkinter.ttk.Treeview.next",
    "library/ttk.html#ttk.Treeview.parent": "library/tkinter.ttk.html#tkinter.ttk.Treeview.parent",
    "library/ttk.html#ttk.Treeview.prev": "library/tkinter.ttk.html#tkinter.ttk.Treeview.prev",
    "library/ttk.html#ttk.Treeview.reattach": "library/tkinter.ttk.html#tkinter.ttk.Treeview.reattach",
    "library/ttk.html#ttk.Treeview.see": "library/tkinter.ttk.html#tkinter.ttk.Treeview.see",
    "library/ttk.html#ttk.Treeview.selection": "library/tkinter.ttk.html#tkinter.ttk.Treeview.selection",
    "library/ttk.html#ttk.Treeview.selection_set": "library/tkinter.ttk.html#tkinter.ttk.Treeview.selection_set",
    "library/ttk.html#ttk.Treeview.selection_add": "library/tkinter.ttk.html#tkinter.ttk.Treeview.selection_add",
    "library/ttk.html#ttk.Treeview.selection_remove": "library/tkinter.ttk.html#tkinter.ttk.Treeview.selection_remove",
    "library/ttk.html#ttk.Treeview.selection_toggle": "library/tkinter.ttk.html#tkinter.ttk.Treeview.selection_toggle",
    "library/ttk.html#ttk.Treeview.set": "library/tkinter.ttk.html#tkinter.ttk.Treeview.set",
    "library/ttk.html#ttk.Treeview.tag_bind": "library/tkinter.ttk.html#tkinter.ttk.Treeview.tag_bind",
    "library/ttk.html#ttk.Treeview.tag_configure": "library/tkinter.ttk.html#tkinter.ttk.Treeview.tag_configure",
    "library/ttk.html#ttk.Treeview.tag_has": "library/tkinter.ttk.html#tkinter.ttk.Treeview.tag_has",
    "library/ttk.html#ttk.Treeview.xview": "library/tkinter.ttk.html#tkinter.ttk.Treeview.xview",
    "library/ttk.html#ttk.Treeview.yview": "library/tkinter.ttk.html#tkinter.ttk.Treeview.yview",
    "library/ttk.html#ttk.Style": "library/tkinter.ttk.html#tkinter.ttk.Style",
    "library/ttk.html#ttk.Style.configure": "library/tkinter.ttk.html#tkinter.ttk.Style.configure",
    "library/ttk.html#ttk.Style.map": "library/tkinter.ttk.html#tkinter.ttk.Style.map",
    "library/ttk.html#ttk.Style.lookup": "library/tkinter.ttk.html#tkinter.ttk.Style.lookup",
    "library/ttk.html#ttk.Style.layout": "library/tkinter.ttk.html#tkinter.ttk.Style.layout",
    "library/ttk.html#ttk.Style.element_create": "library/tkinter.ttk.html#tkinter.ttk.Style.element_create",
    "library/ttk.html#ttk.Style.element_names": "library/tkinter.ttk.html#tkinter.ttk.Style.element_names",
    "library/ttk.html#ttk.Style.element_options": "library/tkinter.ttk.html#tkinter.ttk.Style.element_options",
    "library/ttk.html#ttk.Style.theme_create": "library/tkinter.ttk.html#tkinter.ttk.Style.theme_create",
    "library/ttk.html#ttk.Style.theme_settings": "library/tkinter.ttk.html#tkinter.ttk.Style.theme_settings",
    "library/ttk.html#ttk.Style.theme_names": "library/tkinter.ttk.html#tkinter.ttk.Style.theme_names",
    "library/ttk.html#ttk.Style.theme_use": "library/tkinter.ttk.html#tkinter.ttk.Style.theme_use",

    "library/tix.html": "library/tkinter.tix.html",
    "library/tix.html#module-Tix": "library/tkinter.tix.html#module-tkinter.tix",
    "library/tix.html#tix-extension-widgets-for-tk": "library/tkinter.tix.html#tkinter-tix-extension-widgets-for-tk",
    // This one is different because "import Tix; Tix.Tk()" became "from tkinter import tix; tix.Tk()"
    "library/tix.html#Tix.Tix": "library/tkinter.tix.html#tkinter.tix.Tk",
    "library/tix.html#Tix.Balloon": "library/tkinter.tix.html#tkinter.tix.Balloon",
    "library/tix.html#Tix.ButtonBox": "library/tkinter.tix.html#tkinter.tix.ButtonBox",
    "library/tix.html#Tix.ComboBox": "library/tkinter.tix.html#tkinter.tix.ComboBox",
    "library/tix.html#Tix.Control": "library/tkinter.tix.html#tkinter.tix.Control",
    "library/tix.html#Tix.LabelEntry": "library/tkinter.tix.html#tkinter.tix.LabelEntry",
    "library/tix.html#Tix.LabelFrame": "library/tkinter.tix.html#tkinter.tix.LabelFrame",
    "library/tix.html#Tix.Meter": "library/tkinter.tix.html#tkinter.tix.Meter",
    "library/tix.html#Tix.OptionMenu": "library/tkinter.tix.html#tkinter.tix.OptionMenu",
    "library/tix.html#Tix.PopupMenu": "library/tkinter.tix.html#tkinter.tix.PopupMenu",
    "library/tix.html#Tix.Select": "library/tkinter.tix.html#tkinter.tix.Select",
    "library/tix.html#Tix.StdButtonBox": "library/tkinter.tix.html#tkinter.tix.StdButtonBox",
    "library/tix.html#Tix.DirList": "library/tkinter.tix.html#tkinter.tix.DirList",
    "library/tix.html#Tix.DirTree": "library/tkinter.tix.html#tkinter.tix.DirTree",
    "library/tix.html#Tix.DirSelectDialog": "library/tkinter.tix.html#tkinter.tix.DirSelectDialog",
    "library/tix.html#Tix.DirSelectBox": "library/tkinter.tix.html#tkinter.tix.DirSelectBox",
    "library/tix.html#Tix.ExFileSelectBox": "library/tkinter.tix.html#tkinter.tix.ExFileSelectBox",
    "library/tix.html#Tix.FileSelectBox": "library/tkinter.tix.html#tkinter.tix.FileSelectBox",
    "library/tix.html#Tix.FileEntry": "library/tkinter.tix.html#tkinter.tix.FileEntry",
    "library/tix.html#Tix.HList": "library/tkinter.tix.html#tkinter.tix.HList",
    "library/tix.html#Tix.CheckList": "library/tkinter.tix.html#tkinter.tix.CheckList",
    "library/tix.html#Tix.Tree": "library/tkinter.tix.html#tkinter.tix.Tree",
    "library/tix.html#Tix.TList": "library/tkinter.tix.html#tkinter.tix.TList",
    "library/tix.html#Tix.PanedWindow": "library/tkinter.tix.html#tkinter.tix.PanedWindow",
    "library/tix.html#Tix.ListNoteBook": "library/tkinter.tix.html#tkinter.tix.ListNoteBook",
    "library/tix.html#Tix.NoteBook": "library/tkinter.tix.html#tkinter.tix.NoteBook",
    "library/tix.html#Tix.InputOnly": "library/tkinter.tix.html#tkinter.tix.InputOnly",
    "library/tix.html#Tix.Form": "library/tkinter.tix.html#tkinter.tix.Form",
    "library/tix.html#Tix.tixCommand": "library/tkinter.tix.html#tkinter.tix.tixCommand",
    "library/tix.html#Tix.tixCommand.tix_configure": "library/tkinter.tix.html#tkinter.tix.tixCommand.tix_configure",
    "library/tix.html#Tix.tixCommand.tix_cget": "library/tkinter.tix.html#tkinter.tix.tixCommand.tix_cget",
    "library/tix.html#Tix.tixCommand.tix_getbitmap": "library/tkinter.tix.html#tkinter.tix.tixCommand.tix_getbitmap",
    "library/tix.html#Tix.tixCommand.tix_addbitmapdir": "library/tkinter.tix.html#tkinter.tix.tixCommand.tix_addbitmapdir",
    "library/tix.html#Tix.tixCommand.tix_filedialog": "library/tkinter.tix.html#tkinter.tix.tixCommand.tix_filedialog",
    "library/tix.html#Tix.tixCommand.tix_getimage": "library/tkinter.tix.html#tkinter.tix.tixCommand.tix_getimage",
    "library/tix.html#Tix.tixCommand.tix_option_get": "library/tkinter.tix.html#tkinter.tix.tixCommand.tix_option_get",
    "library/tix.html#Tix.tixCommand.tix_resetoptions": "library/tkinter.tix.html#tkinter.tix.tixCommand.tix_resetoptions",

    "library/scrolledtext.html": "library/tkinter.scrolledtext.html",
    "library/scrolledtext.html#module-ScrolledText": "library/tkinter.scrolledtext.html#module-tkinter.scrolledtext",
    "library/scrolledtext.html#scrolledtext-scrolled-text-widget": "library/tkinter.scrolledtext.html#tkinter-scrolledtext-scrolled-text-widget",
    "library/scrolledtext.html#ScrolledText.ScrolledText.frame": "library/tkinter.scrolledtext.html#tkinter.scrolledtext.ScrolledText.frame",
    "library/scrolledtext.html#ScrolledText.ScrolledText.vbar": "library/tkinter.scrolledtext.html#tkinter.scrolledtext.ScrolledText.vbar",


    "library/turtle.html#turtle-turtle-graphics-for-tk": "library/turtle.html#turtle-turtle-graphics",
    "library/turtle.html#overview-over-available-turtle-and-screen-methods": "library/turtle.html#overview-of-available-turtle-and-screen-methods",
    // Removed method, use `begin_fill` and `end_fill` instead
    "library/turtle.html#turtle.fill": null,
    "library/turtle.html#excursus-about-the-use-of-compound-shapes": "library/turtle.html#compound-shapes",
    "library/turtle.html#the-public-classes-of-the-module-turtle": "library/turtle.html#public-classes",
    "library/turtle.html#demo-scripts": "library/turtle.html#turtledemo-demo-scripts",


    // Most text was moved to running-user-code but the last paragraph was moved to python-shell-window
    // "library/idle.html#idle-console-differences": "library/idle.html#python-shell-window",
    // "library/idle.html#idle-console-differences": "library/idle.html#running-user-code",
    "library/idle.html#idle-console-differences": null,

    "library/idle.html#additional-help-sources": "library/idle.html#help-sources",


    // https://docs.python.org/library/2to3.html#2to3fixer-asserts
    "library/unittest.html#unittest.TestCase.assertRaisesRegexp": "library/unittest.html#unittest.TestCase.assertRaisesRegex",
    "library/unittest.html#unittest.TestCase.assertRegexpMatches": "library/unittest.html#unittest.TestCase.assertRegex",
    "library/unittest.html#unittest.TestCase.assertNotRegexpMatches": "library/unittest.html#unittest.TestCase.assertNotRegex",
    "library/unittest.html#unittest.TestCase.assertItemsEqual": "library/unittest.html#unittest.TestCase.assertCountEqual",

    "library/unittest.html#unittest.TestCase.assertDictContainsSubset": null,


    "library/test.html#module-test.test_support": "library/test.html#module-test.support",
    "library/test.html#test-support-utility-functions-for-tests": "library/test.html#test-support-utilities-for-the-python-test-suite",
    "library/test.html#test.support.have_unicode": null,
    "library/test.html#test.support.check_py3k_warnings": null,


    "library/bdb.html#bdb.Breakpoint.pprint": "library/bdb.html#bdb.Breakpoint.bpprint",


    // Use time.time() or time.clock(), the latter was removed
    "library/timeit.html#cmdoption-timeit-t": null,
    "library/timeit.html#cmdoption-timeit-c": null,


    // https://docs.python.org/library/2to3.html#2to3fixer-exitfunc
    // "library/sys.html#sys.exitfunc": "library/atexit.html#module-atexit",
    "library/sys.html#sys.exitfunc": null,

    // https://docs.python.org/library/2to3.html#2to3fixer-renames
    // "Changes sys.maxint to sys.maxsize."
    "library/sys.html#sys.maxint": "library/sys.html#sys.maxsize",

    // https://docs.python.org/library/2to3.html#2to3fixer-sys_exc
    // "Deprecated since version 1.5: Use exc_info() instead"
    // "library/sys.html#sys.exc_type": "library/sys.html#sys.exc_info",
    // "library/sys.html#sys.exc_value": "library/sys.html#sys.exc_info",
    // "library/sys.html#sys.exc_traceback": "library/sys.html#sys.exc_info",
    "library/sys.html#sys.exc_type": null,
    "library/sys.html#sys.exc_value": null,
    "library/sys.html#sys.exc_traceback": null,

    "library/sys.html#sys.exc_clear": null,
    "library/sys.html#sys.long_info": "library/sys.html#sys.int_info",
    "library/sys.html#sys.py3kwarning": null,
    "library/sys.html#sys.setdefaultencoding": null,
    "library/sys.html#sys.settscdump": null,
    "library/sys.html#sys.subversion": null,


    "library/__builtin__.html": "library/builtins.html",
    "library/__builtin__.html#module-__builtin__": "library/builtins.html#module-builtins",
    "library/__builtin__.html#builtin-built-in-objects": "library/builtins.html#builtins-built-in-objects",


    "library/warnings.html#default-warning-filters": "library/warnings.html#default-warning-filter",

    "library/warnings.html#updating-code-for-new-versions-of-python": "library/warnings.html#updating-code-for-new-versions-of-dependencies",
    "library/warnings.html#warnings.warnpy3k": null,


    // Deprecated, the with-statement now supports this functionality directly
    "library/contextlib.html#contextlib.nested": null,


    "library/traceback.html#traceback.tb_lineno": null,


    // TODO: what happened to these?
    "library/gc.html#gc.DEBUG_INSTANCES": null,
    "library/gc.html#gc.DEBUG_OBJECTS": null,

    "library/inspect.html#inspect.getmoduleinfo": null,


    "library/imp.html#imp.SEARCH_ERROR": null,
    "library/imp.html#imp.init_builtin": null,
    "library/imp.html#imp.init_frozen": null,
    "library/imp.html#imp.is_builtin": null,
    "library/imp.html#imp.is_frozen": null,
    "library/imp.html#imp.load_compiled": null,
    "library/imp.html#imp.load_dynamic": null,
    "library/imp.html#imp.load_source": null,


    "library/importlib.html#importlib-convenience-wrappers-for-import": "library/importlib.html#importlib-the-implementation-of-import",


    "library/symtable.html#symtable.SymbolTable.has_import_star": null,


    // "library/token.html#token.BACKQUOTE": "whatsnew/3.0.html#removed-syntax",
    "library/token.html#token.BACKQUOTE": null,


    "library/tokenize.html#tokenize.COMMENT": "library/token.html#token.COMMENT",
    "library/tokenize.html#tokenize.NL": "library/token.html#token.NL",


    "library/pyclbr.html#pyclbr-python-class-browser-support": "library/pyclbr.html#pyclbr-python-module-browser-support",


    // These shouldn't be redirected
    // TODO: check that all of these shouldn't be redirected
    "library/dis.html#opcode-STOP_CODE": null,
    "library/dis.html#opcode-UNARY_CONVERT": null,
    "library/dis.html#opcode-BINARY_DIVIDE": null,
    "library/dis.html#opcode-INPLACE_DIVIDE": null,
    "library/dis.html#opcode-SLICE+0": null,
    "library/dis.html#opcode-SLICE+1": null,
    "library/dis.html#opcode-SLICE+2": null,
    "library/dis.html#opcode-SLICE+3": null,
    "library/dis.html#opcode-STORE_SLICE+0": null,
    "library/dis.html#opcode-STORE_SLICE+1": null,
    "library/dis.html#opcode-STORE_SLICE+2": null,
    "library/dis.html#opcode-STORE_SLICE+3": null,
    "library/dis.html#opcode-DELETE_SLICE+0": null,
    "library/dis.html#opcode-DELETE_SLICE+1": null,
    "library/dis.html#opcode-DELETE_SLICE+2": null,
    "library/dis.html#opcode-DELETE_SLICE+3": null,
    "library/dis.html#opcode-PRINT_ITEM": null,
    "library/dis.html#opcode-PRINT_ITEM_TO": null,
    "library/dis.html#opcode-PRINT_NEWLINE": null,
    "library/dis.html#opcode-PRINT_NEWLINE_TO": null,
    "library/dis.html#opcode-BREAK_LOOP": null,
    "library/dis.html#opcode-CONTINUE_LOOP": null,
    "library/dis.html#opcode-LOAD_LOCALS": null,
    "library/dis.html#opcode-EXEC_STMT": null,
    "library/dis.html#opcode-BUILD_CLASS": null,
    "library/dis.html#opcode-WITH_CLEANUP": null,
    "library/dis.html#opcode-DUP_TOPX": null,
    "library/dis.html#opcode-SETUP_LOOP": null,
    "library/dis.html#opcode-SETUP_EXCEPT": null,
    "library/dis.html#opcode-STORE_MAP": null,
    "library/dis.html#opcode-SET_LINENO": null,
    "library/dis.html#opcode-MAKE_CLOSURE": null,
    "library/dis.html#opcode-CALL_FUNCTION_VAR": null,
    "library/dis.html#opcode-CALL_FUNCTION_VAR_KW": null,


    "library/_winreg.html": "library/winreg.html",
    "library/_winreg.html#module-_winreg": "library/winreg.html#module-winreg",
    "library/_winreg.html#_winreg.CloseKey": "library/winreg.html#winreg.CloseKey",
    "library/_winreg.html#_winreg.ConnectRegistry": "library/winreg.html#winreg.ConnectRegistry",
    "library/_winreg.html#_winreg.CreateKey": "library/winreg.html#winreg.CreateKey",
    "library/_winreg.html#_winreg.CreateKeyEx": "library/winreg.html#winreg.CreateKeyEx",
    "library/_winreg.html#_winreg.DeleteKey": "library/winreg.html#winreg.DeleteKey",
    "library/_winreg.html#_winreg.DeleteKeyEx": "library/winreg.html#winreg.DeleteKeyEx",
    "library/_winreg.html#_winreg.DeleteValue": "library/winreg.html#winreg.DeleteValue",
    "library/_winreg.html#_winreg.EnumKey": "library/winreg.html#winreg.EnumKey",
    "library/_winreg.html#_winreg.EnumValue": "library/winreg.html#winreg.EnumValue",
    "library/_winreg.html#_winreg.ExpandEnvironmentStrings": "library/winreg.html#winreg.ExpandEnvironmentStrings",
    "library/_winreg.html#_winreg.FlushKey": "library/winreg.html#winreg.FlushKey",
    "library/_winreg.html#_winreg.LoadKey": "library/winreg.html#winreg.LoadKey",
    "library/_winreg.html#_winreg.OpenKey": "library/winreg.html#winreg.OpenKey",
    "library/_winreg.html#_winreg.OpenKeyEx": "library/winreg.html#winreg.OpenKeyEx",
    "library/_winreg.html#_winreg.QueryInfoKey": "library/winreg.html#winreg.QueryInfoKey",
    "library/_winreg.html#_winreg.QueryValue": "library/winreg.html#winreg.QueryValue",
    "library/_winreg.html#_winreg.QueryValueEx": "library/winreg.html#winreg.QueryValueEx",
    "library/_winreg.html#_winreg.SaveKey": "library/winreg.html#winreg.SaveKey",
    "library/_winreg.html#_winreg.SetValue": "library/winreg.html#winreg.SetValue",
    "library/_winreg.html#_winreg.SetValueEx": "library/winreg.html#winreg.SetValueEx",
    "library/_winreg.html#_winreg.DisableReflectionKey": "library/winreg.html#winreg.DisableReflectionKey",
    "library/_winreg.html#_winreg.EnableReflectionKey": "library/winreg.html#winreg.EnableReflectionKey",
    "library/_winreg.html#_winreg.QueryReflectionKey": "library/winreg.html#winreg.QueryReflectionKey",
    "library/_winreg.html#_winreg.HKEY_CLASSES_ROOT": "library/winreg.html#winreg.HKEY_CLASSES_ROOT",
    "library/_winreg.html#_winreg.HKEY_CURRENT_USER": "library/winreg.html#winreg.HKEY_CURRENT_USER",
    "library/_winreg.html#_winreg.HKEY_LOCAL_MACHINE": "library/winreg.html#winreg.HKEY_LOCAL_MACHINE",
    "library/_winreg.html#_winreg.HKEY_USERS": "library/winreg.html#winreg.HKEY_USERS",
    "library/_winreg.html#_winreg.HKEY_PERFORMANCE_DATA": "library/winreg.html#winreg.HKEY_PERFORMANCE_DATA",
    "library/_winreg.html#_winreg.HKEY_CURRENT_CONFIG": "library/winreg.html#winreg.HKEY_CURRENT_CONFIG",
    "library/_winreg.html#_winreg.HKEY_DYN_DATA": "library/winreg.html#winreg.HKEY_DYN_DATA",
    "library/_winreg.html#_winreg.KEY_ALL_ACCESS": "library/winreg.html#winreg.KEY_ALL_ACCESS",
    "library/_winreg.html#_winreg.KEY_WRITE": "library/winreg.html#winreg.KEY_WRITE",
    "library/_winreg.html#_winreg.KEY_READ": "library/winreg.html#winreg.KEY_READ",
    "library/_winreg.html#_winreg.KEY_EXECUTE": "library/winreg.html#winreg.KEY_EXECUTE",
    "library/_winreg.html#_winreg.KEY_QUERY_VALUE": "library/winreg.html#winreg.KEY_QUERY_VALUE",
    "library/_winreg.html#_winreg.KEY_SET_VALUE": "library/winreg.html#winreg.KEY_SET_VALUE",
    "library/_winreg.html#_winreg.KEY_CREATE_SUB_KEY": "library/winreg.html#winreg.KEY_CREATE_SUB_KEY",
    "library/_winreg.html#_winreg.KEY_ENUMERATE_SUB_KEYS": "library/winreg.html#winreg.KEY_ENUMERATE_SUB_KEYS",
    "library/_winreg.html#_winreg.KEY_NOTIFY": "library/winreg.html#winreg.KEY_NOTIFY",
    "library/_winreg.html#_winreg.KEY_CREATE_LINK": "library/winreg.html#winreg.KEY_CREATE_LINK",
    "library/_winreg.html#_winreg.KEY_WOW64_64KEY": "library/winreg.html#winreg.KEY_WOW64_64KEY",
    "library/_winreg.html#_winreg.KEY_WOW64_32KEY": "library/winreg.html#winreg.KEY_WOW64_32KEY",
    "library/_winreg.html#_winreg.REG_BINARY": "library/winreg.html#winreg.REG_BINARY",
    "library/_winreg.html#_winreg.REG_DWORD": "library/winreg.html#winreg.REG_DWORD",
    "library/_winreg.html#_winreg.REG_DWORD_LITTLE_ENDIAN": "library/winreg.html#winreg.REG_DWORD_LITTLE_ENDIAN",
    "library/_winreg.html#_winreg.REG_DWORD_BIG_ENDIAN": "library/winreg.html#winreg.REG_DWORD_BIG_ENDIAN",
    "library/_winreg.html#_winreg.REG_EXPAND_SZ": "library/winreg.html#winreg.REG_EXPAND_SZ",
    "library/_winreg.html#_winreg.REG_LINK": "library/winreg.html#winreg.REG_LINK",
    "library/_winreg.html#_winreg.REG_MULTI_SZ": "library/winreg.html#winreg.REG_MULTI_SZ",
    "library/_winreg.html#_winreg.REG_NONE": "library/winreg.html#winreg.REG_NONE",
    "library/_winreg.html#_winreg.REG_RESOURCE_LIST": "library/winreg.html#winreg.REG_RESOURCE_LIST",
    "library/_winreg.html#_winreg.REG_FULL_RESOURCE_DESCRIPTOR": "library/winreg.html#winreg.REG_FULL_RESOURCE_DESCRIPTOR",
    "library/_winreg.html#_winreg.REG_RESOURCE_REQUIREMENTS_LIST": "library/winreg.html#winreg.REG_RESOURCE_REQUIREMENTS_LIST",
    "library/_winreg.html#_winreg.REG_SZ": "library/winreg.html#winreg.REG_SZ",
    "library/_winreg.html#_winreg.PyHKEY.Close": "library/winreg.html#winreg.PyHKEY.Close",
    "library/_winreg.html#_winreg.PyHKEY.Detach": "library/winreg.html#winreg.PyHKEY.Detach",
    "library/_winreg.html#_winreg.PyHKEY.__enter__": "library/winreg.html#winreg.PyHKEY.__enter__",
    "library/_winreg.html#_winreg.PyHKEY.__exit__": "library/winreg.html#winreg.PyHKEY.__exit__",


    "library/pipes.html#pipes.quote": "library/shlex.html#shlex.quote",


    // List of undocumented modules, basically empty on Python 3
    "library/undoc.html#miscellaneous-useful-utilities": null,
    "library/undoc.html#multimedia": null,
    "library/undoc.html#undocumented-mac-os-modules": null,
    "library/undoc.html#undoc-mac-modules": null,
    "library/undoc.html#module-applesingle": null,
    "library/undoc.html#applesingle-applesingle-decoder": null,
    "library/undoc.html#module-buildtools": null,
    "library/undoc.html#buildtools-helper-module-for-buildapplet-and-friends": null,
    "library/undoc.html#module-cfmfile": null,
    "library/undoc.html#cfmfile-code-fragment-resource-module": null,
    "library/undoc.html#module-icopen": null,
    "library/undoc.html#icopen-internet-config-replacement-for-open": null,
    "library/undoc.html#module-macerrors": null,
    "library/undoc.html#macerrors-mac-os-errors": null,
    "library/undoc.html#module-macresource": null,
    "library/undoc.html#macresource-locate-script-resources": null,
    "library/undoc.html#module-Nav": null,
    "library/undoc.html#nav-navservices-calls": null,
    "library/undoc.html#module-PixMapWrapper": null,
    "library/undoc.html#pixmapwrapper-wrapper-for-pixmap-objects": null,
    "library/undoc.html#module-videoreader": null,
    "library/undoc.html#videoreader-read-quicktime-movies": null,
    "library/undoc.html#module-W": null,
    "library/undoc.html#w-widgets-built-on-framework": null,
    "library/undoc.html#obsolete": null,
    "library/undoc.html#obsolete-modules": null,
    "library/undoc.html#sgi-specific-extension-modules": null,



    // The first part of this page was moved to another page
    "extending/newtypes.html#defining-new-types": "extending/newtypes_tutorial.html#defining-new-types",
    "extending/newtypes.html#the-basics": "extending/newtypes_tutorial.html#the-basics",
    "extending/newtypes.html#dnt-basics": "extending/newtypes_tutorial.html#dnt-basics",
    "extending/newtypes.html#adding-data-and-methods-to-the-basic-example": "extending/newtypes_tutorial.html#adding-data-and-methods-to-the-basic-example",
    "extending/newtypes.html#providing-finer-control-over-data-attributes": "extending/newtypes_tutorial.html#providing-finer-control-over-data-attributes",
    "extending/newtypes.html#supporting-cyclic-garbage-collection": "extending/newtypes_tutorial.html#supporting-cyclic-garbage-collection",
    "extending/newtypes.html#subclassing-other-types": "extending/newtypes_tutorial.html#subclassing-other-types",
    // newtypes.html now begins with this section
    "extending/newtypes.html#type-methods": "extending/newtypes.html#defining-extension-types-assorted-topics",

    "extending/embedding.html#link-reqs": "extending/embedding.html#compiling",

    // Old-style classes are removed in Python 3
    "reference/datamodel.html#new-style-and-classic-classes": null,
    "reference/datamodel.html#newstyle": null,

    // Removed in Python 3
    "reference/datamodel.html#object.__cmp__": null,
    "reference/datamodel.html#object.__rcmp__": null,

    // https://docs.python.org/library/2to3.html#2to3fixer-nonzero
    "reference/datamodel.html#object.__nonzero__": "reference/datamodel.html#object.__bool__",

    "reference/datamodel.html#object.__unicode__": "reference/datamodel.html#object.__str__",

    "reference/datamodel.html#more-attribute-access-for-new-style-classes": "reference/datamodel.html#customizing-attribute-access",
    "reference/datamodel.html#new-style-attribute-access": "reference/datamodel.html#customizing-attribute-access",

    "reference/datamodel.html#__slots__": "reference/datamodel.html#object.__slots__",

    // https://docs.python.org/library/2to3.html#2to3fixer-metaclass
    // "old metaclass syntax (__metaclass__ = Meta in the class body) to the new (class X(metaclass=Meta))"
    // TODO: don't redirect? It's different, and might be unexpected/confusing if you click
    // on a link in an old blog post.
    // "reference/datamodel.html#__metaclass__": null,
    "reference/datamodel.html#__metaclass__": "reference/datamodel.html#metaclasses",

    "reference/datamodel.html#additional-methods-for-emulation-of-sequence-types": null,
    "reference/datamodel.html#sequence-methods": null,
    "reference/datamodel.html#object.__getslice__": null,
    "reference/datamodel.html#object.__setslice__": null,
    "reference/datamodel.html#object.__delslice__": null,

    // "reference/datamodel.html#object.__div__": "reference/datamodel.html#object.__truediv__",
    // "reference/datamodel.html#object.__rdiv__": "reference/datamodel.html#object.__rtruediv__",
    // "reference/datamodel.html#object.__idiv__": "reference/datamodel.html#object.__itruediv__",
    "reference/datamodel.html#object.__div__": null,
    "reference/datamodel.html#object.__rdiv__": null,
    "reference/datamodel.html#object.__idiv__": null,

    "reference/datamodel.html#object.__long__": "reference/datamodel.html#object.__int__",

    // The documentation doesn't explain that these are replaced by __index__ in Python 3
    // "reference/datamodel.html#object.__oct__": "reference/datamodel.html#object.__index__",
    // "reference/datamodel.html#object.__hex__": "reference/datamodel.html#object.__index__",
    "reference/datamodel.html#object.__oct__": null,
    "reference/datamodel.html#object.__hex__": null,

    "reference/datamodel.html#object.__coerce__": null,
    "reference/datamodel.html#coercion-rules": null,

    "reference/datamodel.html#special-method-lookup-for-old-style-classes": null,
    "reference/datamodel.html#old-style-special-lookup": null,

    "reference/datamodel.html#special-method-lookup-for-new-style-classes": "reference/datamodel.html#special-lookup",
    "reference/datamodel.html#new-style-special-lookup": "reference/datamodel.html#special-lookup",



    // decorated ::= decorators (classdef | funcdef)
    // this grouping is saying both classes and functions can have decorators, and is used in
    // the definition of a compound statement
    // In Python 3, the classdef definition says that it can have decorators instead
    "reference/compound_stmts.html#grammar-token-decorated": "reference/compound_stmts.html#function-definitions",
    // TODO: explain
    "reference/compound_stmts.html#grammar-token-sublist": "reference/compound_stmts.html#function-definitions",

    "reference/expressions.html#grammar-token-list-comprehension": "reference/expressions.html#grammar-token-comprehension",
    "reference/expressions.html#grammar-token-list-for": "reference/expressions.html#grammar-token-comp-for",
    // TODO
    "reference/expressions.html#grammar-token-old-expression-list": "reference/expressions.html#displays-for-lists-sets-and-dictionaries",
    // TODO
    "reference/expressions.html#grammar-token-old-expression": "reference/expressions.html#grammar-token-expression-nocond",
    "reference/expressions.html#grammar-token-list-iter": "reference/expressions.html#grammar-token-comp-iter",
    "reference/expressions.html#grammar-token-list-if": "reference/expressions.html#grammar-token-comp-if",

    "reference/expressions.html#displays-for-sets-and-dictionaries": "reference/expressions.html#displays-for-lists-sets-and-dictionaries",

    // https://docs.python.org/library/2to3.html#2to3fixer-repr
    // Backtick removed in Python 3. You have to use the repr() builtin
    // "reference/expressions.html#string-conversions": "library/functions.html#repr",
    // "reference/expressions.html#grammar-token-string-conversion": "library/functions.html#repr",
    "reference/expressions.html#string-conversions": null,
    "reference/expressions.html#grammar-token-string-conversion": null,

    "reference/expressions.html#grammar-token-simple-slicing": "reference/expressions.html#grammar-token-slicing",
    "reference/expressions.html#grammar-token-extended-slicing": "reference/expressions.html#grammar-token-slicing",
    "reference/expressions.html#grammar-token-short-slice": "reference/expressions.html#grammar-token-proper-slice",
    "reference/expressions.html#grammar-token-long-slice": "reference/expressions.html#grammar-token-proper-slice",
    // TODO: the ... isn't allowed in slices anymore? No clue what it meant before
    "reference/expressions.html#grammar-token-ellipsis": null,

    "reference/expressions.html#grammar-token-keyword-arguments": "reference/expressions.html#grammar-token-keywords-arguments",

    "reference/expressions.html#grammar-token-old-lambda-expr": "reference/expressions.html#grammar-token-lambda-expr-nocond",


    "reference/lexical_analysis.html#logical": "reference/lexical_analysis.html#logical-lines",
    "reference/lexical_analysis.html#physical": "reference/lexical_analysis.html#physical-lines",

    // Python identifiers can now contain non-ASCII characters so this is more complicated
    "reference/lexical_analysis.html#grammar-token-letter": "reference/lexical_analysis.html#identifiers",
    "reference/lexical_analysis.html#grammar-token-lowercase": "reference/lexical_analysis.html#identifiers",
    "reference/lexical_analysis.html#grammar-token-uppercase": "reference/lexical_analysis.html#identifiers",

    "reference/lexical_analysis.html#string-literals": "reference/lexical_analysis.html#string-and-bytes-literals",

    // "reference/lexical_analysis.html#grammar-token-escapeseq": "reference/lexical_analysis.html#grammar-token-bytesescapeseq",
    "reference/lexical_analysis.html#grammar-token-escapeseq": "reference/lexical_analysis.html#grammar-token-stringescapeseq",

    "reference/lexical_analysis.html#string-catenation": "reference/lexical_analysis.html#string-concatenation",

    "reference/lexical_analysis.html#integer-and-long-integer-literals": "reference/lexical_analysis.html#integer-literals",

    "reference/lexical_analysis.html#grammar-token-longinteger": "reference/lexical_analysis.html#grammar-token-integer",
    "reference/lexical_analysis.html#grammar-token-decimalinteger": "reference/lexical_analysis.html#grammar-token-decinteger",

    "reference/lexical_analysis.html#grammar-token-intpart": "reference/lexical_analysis.html#grammar-token-digitpart",


    // https://docs.python.org/library/2to3.html#2to3fixer-print
    // print became a function.
    "reference/simple_stmts.html#the-print-statement": "library/functions.html#print",
    "reference/simple_stmts.html#print": "library/functions.html#print",
    "reference/simple_stmts.html#grammar-token-print-stmt": "library/functions.html#print",

    // Just an alias for identifier
    // "reference/simple_stmts.html#grammar-token-name": "reference/lexical_analysis.html#grammar-token-identifier",
    "reference/simple_stmts.html#grammar-token-name": "reference/simple_stmts.html#the-import-statement",

    "reference/simple_stmts.html#grammar-token-future-statement": "reference/simple_stmts.html#grammar-token-future-stmt",

    // https://docs.python.org/library/2to3.html#2to3fixer-exec
    // exec became a function.
    "reference/simple_stmts.html#the-exec-statement": "library/functions.html#exec",
    "reference/simple_stmts.html#exec": "library/functions.html#exec",
    "reference/simple_stmts.html#grammar-token-exec-stmt": "library/functions.html#exec",


    // This is saying the line returned by the old input() function must be a valid
    // Python expression followed by a newline.
    // The input() function was replaced with the raw_input() function.
    "reference/toplevel_components.html#grammar-token-input-input": null,



    "tutorial/introduction.html#unicode-strings": "tutorial/introduction.html#strings",
    "tutorial/introduction.html#tut-unicodestrings": "tutorial/introduction.html#tut-strings",

    // Section removed because list comprehensions (the next section) are preferred
    "tutorial/datastructures.html#functional-programming-tools": null,
    "tutorial/datastructures.html#tut-functional": null,

    "tutorial/classes.html#private-variables-and-class-local-references": "tutorial/classes.html#private-variables",
    "tutorial/classes.html#exceptions-are-classes-too": "tutorial/errors.html#handling-exceptions",
    "tutorial/classes.html#tut-exceptionclasses": "tutorial/errors.html#handling-exceptions",

    // Sections were removed in favor of linking to the GNU-Readline docs
    "tutorial/interactive.html#line-editing": null,
    "tutorial/interactive.html#tut-lineediting": null,
    "tutorial/interactive.html#history-substitution": null,
    "tutorial/interactive.html#tut-history": null,
    "tutorial/interactive.html#key-bindings": null,


    "using/cmdline.html#using-on-optimizations": "using/cmdline.html#cmdoption-o",
    "using/cmdline.html#cmdoption-t": null,
    "using/cmdline.html#cmdoption-3": null,
    "using/cmdline.html#envvar-PYTHONY2K": null,
    "using/cmdline.html#envvar-PYTHONHTTPSVERIFY": null,
    // This option is specified (or at least documented) by passing "-X showalloccount"
    // "using/cmdline.html#envvar-PYTHONSHOWALLOCCOUNT": "using/cmdline.html#id5",
    "using/cmdline.html#envvar-PYTHONSHOWALLOCCOUNT": null,
    // This option is specified (or at least documented) by passing "-X showrefcount"
    // "using/cmdline.html#envvar-PYTHONSHOWREFCOUNT": "using/cmdline.html#id5",
    "using/cmdline.html#envvar-PYTHONSHOWREFCOUNT": null,


    "using/unix.html#editors-and-ides": null,


    "using/windows.html#installing-python": "using/windows.html#the-full-installer",
    // TODO: this redirect is not exactly the same content.
    "using/windows.html#executing-scripts": "using/windows.html#getting-started",
    "using/windows.html#py2exe": null,
    "using/windows.html#other-resources": null,


    // TODO: I've never used the C API, check all these.
    // Renamed section on a Contents page
    "c-api/concrete.html#mapping-objects": "c-api/concrete.html#container-objects",

    "c-api/allocation.html#c._PyObject_Del": null,
    "c-api/allocation.html#c.Py_InitModule": null,
    "c-api/allocation.html#c.Py_InitModule3": null,
    "c-api/allocation.html#c.Py_InitModule4": null,


    "c-api/buffer.html#buffers-and-memoryview-objects": "c-api/buffer.html#buffer-protocol",
    "c-api/buffer.html#the-new-style-py-buffer-struct": "c-api/buffer.html#buffer-structure",

    // Section moved to its own file
    "c-api/buffer.html#memoryview-objects": "c-api/memoryview.html",
    "c-api/buffer.html#c.PyMemoryView_FromObject": "c-api/memoryview.html#c.PyMemoryView_FromObject",
    "c-api/buffer.html#c.PyMemoryView_FromBuffer": "c-api/memoryview.html#c.PyMemoryView_FromBuffer",
    "c-api/buffer.html#c.PyMemoryView_GetContiguous": "c-api/memoryview.html#c.PyMemoryView_GetContiguous",
    "c-api/buffer.html#c.PyMemoryView_Check": "c-api/memoryview.html#c.PyMemoryView_Check",
    "c-api/buffer.html#c.PyMemoryView_GET_BUFFER": "c-api/memoryview.html#c.PyMemoryView_GET_BUFFER",

    // Removed
    "c-api/buffer.html#old-style-buffer-objects": null,
    "c-api/buffer.html#c.PyBufferObject": null,
    "c-api/buffer.html#c.PyBuffer_Type": null,
    "c-api/buffer.html#c.Py_END_OF_BUFFER": null,
    "c-api/buffer.html#c.PyBuffer_Check": null,
    "c-api/buffer.html#c.PyBuffer_FromObject": null,
    "c-api/buffer.html#c.PyBuffer_FromReadWriteObject": null,
    "c-api/buffer.html#c.PyBuffer_FromMemory": null,
    "c-api/buffer.html#c.PyBuffer_FromReadWriteMemory": null,
    "c-api/buffer.html#c.PyBuffer_New": null,

    // Deprecated functions
    "c-api/conversion.html#c.PyOS_ascii_strtod": null,
    "c-api/conversion.html#c.PyOS_ascii_formatd": null,
    "c-api/conversion.html#c.PyOS_ascii_atof": null,


    // TODO: what happened to this function? Two other functions in the Python 3 docs reference
    // it but it's missing
    "c-api/exceptions.html#c.PyErr_SetFromWindowsErrWithFilenameObject": null,
    // "use PyErr_WarnEx() instead"
    "c-api/exceptions.html#c.PyErr_Warn": null,
    "c-api/exceptions.html#c.PyErr_WarnPy3k": null,
    "c-api/exceptions.html#string-exceptions": null,


    "c-api/float.html#c.PyFloat_AsString": null,
    "c-api/float.html#c.PyFloat_AsReprString": null,


    // "These APIs are a minimal emulation of the Python 2 C API for built-in file objects,
    // which used to rely on the buffered I/O (FILE*) support from the C standard library"
    "c-api/file.html#c.PyFileObject": null,
    "c-api/file.html#c.PyFile_Type": null,
    "c-api/file.html#c.PyFile_Check": null,
    "c-api/file.html#c.PyFile_CheckExact": null,
    "c-api/file.html#c.PyFile_FromString": null,
    "c-api/file.html#c.PyFile_FromFile": null,
    "c-api/file.html#c.PyFile_AsFile": null,
    "c-api/file.html#c.PyFile_IncUseCount": null,
    "c-api/file.html#c.PyFile_DecUseCount": null,
    "c-api/file.html#c.PyFile_Name": null,
    "c-api/file.html#c.PyFile_SetBufSize": null,
    "c-api/file.html#c.PyFile_SetEncoding": null,
    "c-api/file.html#c.PyFile_SetEncodingAndErrors": null,
    "c-api/file.html#c.PyFile_SoftSpace": null,


    // Macros
    "c-api/gcsupport.html#c._PyObject_GC_TRACK": null,
    "c-api/gcsupport.html#c._PyObject_GC_UNTRACK": null,


    // Both are "for internal use only"
    "c-api/import.html#c._PyImport_FindExtension": null,
    "c-api/import.html#c._PyImport_FixupExtension": null,


    "c-api/init.html#c.PyEval_ReInitThreads": null,
    "c-api/init.html#c.PyEval_GetCallStats": null,


    "c-api/long.html#long-integer-objects": "c-api/long.html#integer-objects",


    "c-api/method.html#c.PyMethod_Class": null,
    "c-api/method.html#c.PyMethod_GET_CLASS": null,


    "c-api/number.html#c.PyNumber_Divide": "c-api/number.html#c.PyNumber_TrueDivide",
    "c-api/number.html#c.PyNumber_InPlaceDivide": "c-api/number.html#c.PyNumber_InPlaceTrueDivide",

    "c-api/number.html#c.PyNumber_Coerce": null,
    "c-api/number.html#c.PyNumber_CoerceEx": null,

    "c-api/number.html#c.PyNumber_Int": "c-api/number.html#c.PyNumber_Long",


    "c-api/objbuffer.html#abstract-buffer": "c-api/objbuffer.html#old-buffer-protocol",


    "c-api/object.html#c.PyObject_Cmp": null,
    "c-api/object.html#c.PyObject_Compare": null,

    "c-api/object.html#c.PyObject_Unicode": "c-api/object.html#c.PyObject_Str",

    "c-api/object.html#c.PyObject_AsFileDescriptor": "c-api/file.html#c.PyObject_AsFileDescriptor",


    "c-api/reflection.html#c.PyEval_GetRestricted": null,


    // Documented just below this section
    "c-api/structures.html#METH_KEYWORDS": "c-api/structures.html#METH_VARARGS",
    // "This calling convention is deprecated"
    "c-api/structures.html#METH_OLDARGS": null,

    "c-api/structures.html#c.Py_FindMethod": null,


    "c-api/typeobj.html#c.PyTypeObject.tp_compare": "c-api/typeobj.html#c.PyTypeObject.tp_as_async",

    "c-api/typeobj.html#c.PyNumberMethods.nb_coerce": null,


    "c-api/unicode.html#plain-py-unicode": "c-api/unicode.html#deprecated-py-unicode-apis",


    "c-api/veryhigh.html#c.PyRun_SimpleFileFlags": null,


    "c-api/sys.html#c.PySys_GetFile": null,

    // TODO: these
    // "It is possible that the tp_print field will be deprecated"
    // "instead [...] rely on tp_repr and tp_str for printing"
    // "c-api/typeobj.html#c.PyTypeObject.tp_print": "c-api/typeobj.html#c.PyTypeObject.tp_vectorcall_offset",
    "c-api/typeobj.html#c.PyTypeObject.tp_print": null,

    "c-api/typeobj.html#c.tp_as_number": "c-api/typeobj.html#c.PyTypeObject.tp_as_number",
    "c-api/typeobj.html#c.tp_as_sequence": "c-api/typeobj.html#c.PyTypeObject.tp_as_sequence",
    "c-api/typeobj.html#c.tp_as_mapping": "c-api/typeobj.html#c.PyTypeObject.tp_as_mapping",

    "c-api/typeobj.html#Py_TPFLAGS_HAVE_GETCHARBUFFER": null,
    "c-api/typeobj.html#Py_TPFLAGS_HAVE_SEQUENCE_IN": null,
    // "This bit is obsolete"
    "c-api/typeobj.html#Py_TPFLAGS_GC": null,

    "c-api/typeobj.html#Py_TPFLAGS_HAVE_INPLACEOPS": null,
    "c-api/typeobj.html#Py_TPFLAGS_CHECKTYPES": null,
    "c-api/typeobj.html#Py_TPFLAGS_HAVE_RICHCOMPARE": null,
    "c-api/typeobj.html#Py_TPFLAGS_HAVE_WEAKREFS": null,
    "c-api/typeobj.html#Py_TPFLAGS_HAVE_ITER": null,
    "c-api/typeobj.html#Py_TPFLAGS_HAVE_CLASS": null,

    "c-api/typeobj.html#c.readbufferproc": null,
    "c-api/typeobj.html#c.writebufferproc": null,
    "c-api/typeobj.html#c.segcountproc": null,
    "c-api/typeobj.html#c.charbufferproc": null,


    "distributing/index.html#reading-the-guide": "distributing/index.html#reading-the-python-packaging-user-guide",


    "installing/index.html#install-pip-in-versions-of-python-prior-to-python-2-7-9": "installing/index.html#install-pip-in-versions-of-python-prior-to-python-3-4",


    // This page was effectively deleted
    "howto/cporting.html": null,
    // All of these have been removed
    // "howto/cporting.html#conditional-compilation": null,
    // "howto/cporting.html#changes-to-object-apis": null,
    // "howto/cporting.html#str-unicode-unification": null,
    // "howto/cporting.html#long-int-unification": null,
    // "howto/cporting.html#module-initialization-and-state": null,
    // "howto/cporting.html#cobject-replaced-with-capsule": null,
    // "howto/cporting.html#other-options": null,

    // This section is deleted, don't redirect
    "howto/sockets.html#performance": null,

    // The section explaining the history was deleted, but this is where it starts
    // if someone is linking to the section, maybe they want to read the old paragraphs
    // that were there.
    // "howto/unicode.html#history-of-character-codes": "howto/unicode.html#definitions",
    "howto/unicode.html#history-of-character-codes": null,

    "howto/unicode.html#python-2-x-s-unicode-support": "howto/unicode.html#python-s-unicode-support",
    "howto/unicode.html#the-unicode-type": "howto/unicode.html#the-string-type",
    "howto/unicode.html#revision-history-and-acknowledgements": "howto/unicode.html#acknowledgements",
    // This file should be renamed to urllib.html
    "howto/urllib2.html#howto-fetch-internet-resources-using-urllib2": "howto/urllib2.html#howto-fetch-internet-resources-using-the-urllib-package",


    "faq/general.html#upgrading-python": null,
    "faq/general.html#what-is-this-bsddb185-module-my-application-keeps-complaining-about": null,

    // This section became a link to the Unicode HOWTO
    // "faq/programming.html#what-does-unicodeerror-ascii-decoding-encoding-error-ordinal-not-in-range-128-mean": null,
    "faq/programming.html#what-does-unicodeerror-ascii-decoding-encoding-error-ordinal-not-in-range-128-mean": "faq/programming.html#what-does-unicodedecodeerror-or-unicodeencodeerror-error-mean",
    // This section had three questions but only the first was actually about dictionaries.
    // That first question was removed along with the section header.
    // "faq/programming.html#dictionaries": "faq/programming.html#i-want-to-do-a-complicated-sort-can-you-do-a-schwartzian-transform-in-python",
    "faq/programming.html#dictionaries": null,
    // Dictionaries are now ordered by insertion, question is meaningless.
    "faq/programming.html#how-can-i-get-a-dictionary-to-display-its-keys-in-a-consistent-order": null,

    "faq/design.html#why-isn-t-all-memory-freed-when-python-exits": "faq/design.html#why-isn-t-all-memory-freed-when-cpython-exits",

    "faq/library.html#how-do-i-run-a-subprocess-with-pipes-connected-to-both-input-and-output": null,
    "faq/library.html#why-is-cpickle-so-slow": null,
    "faq/library.html#if-my-program-crashes-with-a-bsddb-or-anydbm-database-open-it-gets-corrupted-how-come": null,
    "faq/library.html#i-tried-to-open-berkeley-db-file-but-bsddb-produces-bsddb-error-22-invalid-argument-help-how-can-i-restore-my-data": null,

    "faq/extending.html#what-does-systemerror-pyimport-fixupextension-module-yourmodule-not-loaded-mean": null,
    "faq/extending.html#when-importing-module-x-why-do-i-get-undefined-symbol-pyunicodeucs2": null,

    // You just use os.kill in modern versions of Python
    "faq/windows.html#how-do-i-emulate-os-kill-in-windows": null,

    "faq/windows.html#how-do-i-extract-the-downloaded-documentation-on-windows": null,


    "glossary.html#term-classic-class": null,
    "glossary.html#term-integer-division": null,
    // These are similar to named tuples but defined in C and unlike collections.namedtuple,
    // don't have ._make and ._asdict methods, which is still true for the two examples the Python 2
    // documentation gives: sys.float_info and the return value of os.stat()
    // "glossary.html#term-struct-sequence": "glossary.html#term-named-tuple",
    "glossary.html#term-struct-sequence": null,


    // Licenses for removed code
    "license.html#floating-point-exception-control": null,
    "license.html#md5-message-digest-algorithm": null,


    "distutils/apiref.html#module-distutils.emxccompiler": null,
    "distutils/apiref.html#distutils-emxccompiler-os-2-emx-compiler": null,

    // Empty section
    "distutils/builtdist.html#creating-dumb-built-distributions": null,
    "distutils/builtdist.html#creating-dumb": null,

    "distutils/examples.html#examples": "distutils/examples.html#distutils-examples",

    "distutils/sourcedist.html#the-manifest-in-template": null,
    "distutils/sourcedist.html#manifest-template": null,
    "distutils/sourcedist.html#principle": null,
    "distutils/sourcedist.html#commands": null,


    "install/index.html#best-case-trivial-installation": null,
    "install/index.html#inst-trivial-install": null,
    "install/index.html#the-new-standard-distutils": "install/index.html#inst-new-standard",


    "whatsnew/2.6.html#module-contextlib": "whatsnew/2.6.html#new-module-contextlib",



    // Python 2.6
    // ----------
    "modindex.html": "py-modindex.html",


    "library/functions.html#list": "library/functions.html#func-list",


    "library/stdtypes.html#bit-string-operations-on-integer-types": "library/stdtypes.html#bitwise-operations-on-integer-types",

    "library/stdtypes.html#sequence-types-str-unicode-list-tuple-buffer-xrange": "library/stdtypes.html#sequence-types-list-tuple-range",

    "library/stdtypes.html#set.isdisjoint": "library/stdtypes.html#frozenset.isdisjoint",
    "library/stdtypes.html#set.issubset": "library/stdtypes.html#frozenset.issubset",
    "library/stdtypes.html#set.issuperset": "library/stdtypes.html#frozenset.issuperset",
    "library/stdtypes.html#set.union": "library/stdtypes.html#frozenset.union",
    "library/stdtypes.html#set.intersection": "library/stdtypes.html#frozenset.intersection",
    "library/stdtypes.html#set.difference": "library/stdtypes.html#frozenset.difference",
    "library/stdtypes.html#set.symmetric_difference": "library/stdtypes.html#frozenset.symmetric_difference",
    "library/stdtypes.html#set.copy": "library/stdtypes.html#frozenset.copy",
    "library/stdtypes.html#set.update": "library/stdtypes.html#frozenset.update",
    "library/stdtypes.html#set.intersection_update": "library/stdtypes.html#frozenset.intersection_update",
    "library/stdtypes.html#set.difference_update": "library/stdtypes.html#frozenset.difference_update",
    "library/stdtypes.html#set.symmetric_difference_update": "library/stdtypes.html#frozenset.symmetric_difference_update",
    "library/stdtypes.html#set.add": "library/stdtypes.html#frozenset.add",
    "library/stdtypes.html#set.remove": "library/stdtypes.html#frozenset.remove",
    "library/stdtypes.html#set.discard": "library/stdtypes.html#frozenset.discard",
    "library/stdtypes.html#set.pop": "library/stdtypes.html#frozenset.pop",
    "library/stdtypes.html#set.clear": "library/stdtypes.html#frozenset.clear",

    "library/stdtypes.html#class.__name__": "library/stdtypes.html#definition.__name__",


    "library/string.html#grammar-token-replacement_field": "library/string.html#grammar-token-replacement-field",
    "library/string.html#grammar-token-field_name": "library/string.html#grammar-token-field-name",
    "library/string.html#grammar-token-attribute_name": "library/string.html#grammar-token-attribute-name",
    "library/string.html#grammar-token-element_index": "library/string.html#grammar-token-element-index",
    "library/string.html#grammar-token-index_string": "library/string.html#grammar-token-index-string",
    "library/string.html#grammar-token-format_spec": "library/string.html#grammar-token-format-spec",


    "library/re.html#matching-vs-searching": "library/re.html#search-vs-match",
    "library/re.html#matching-searching": "library/re.html#search-vs-match",
    // Removed section, I think because re no longer does recursion.
    "library/re.html#avoiding-recursion": null,


    "library/collections.html#abcs-abstract-base-classes": "library/collections.abc.html#collections-abstract-base-classes",


    "library/bisect.html#examples": "library/bisect.html#other-examples",


    // Deleted
    "library/itertools.html#examples": null,
    "library/itertools.html#itertools-example": null,


    "library/hmac.html#hmac.hmac.update": "library/hmac.html#hmac.HMAC.update",
    "library/hmac.html#hmac.hmac.digest": "library/hmac.html#hmac.HMAC.digest",
    "library/hmac.html#hmac.hmac.hexdigest": "library/hmac.html#hmac.HMAC.hexdigest",
    "library/hmac.html#hmac.hmac.copy": "library/hmac.html#hmac.HMAC.copy",


    // These methods are now inherited from (and documented in) the base classes
    "library/io.html#io.FileIO.read": "library/io.html#io.RawIOBase.read",
    "library/io.html#io.FileIO.readall": "library/io.html#io.RawIOBase.readall",
    "library/io.html#io.FileIO.write": "library/io.html#io.RawIOBase.write",
    "library/io.html#io.TextIOWrapper.errors": "library/io.html#io.TextIOBase.errors",



    "library/tarfile.html#tarfile-mod": "library/tarfile.html#module-tarfile",

    "library/shutil.html#example": "library/shutil.html#shutil-copytree-example",
    "library/shutil.html#shutil-example": "library/shutil.html#shutil-copytree-example",


    "library/logging.html#logging-tutorial": "library/logging.html",
    "library/logging.html#loggers": "library/logging.html#logger-objects",
    "library/logging.html#handlers": "library/logging.html#handler-objects",
    "library/logging.html#formatters": "library/logging.html#formatter-objects",

    "library/logging.html#simple-examples": "howto/logging.html#a-simple-example",
    "library/logging.html#configuring-logging": "howto/logging.html#configuring-logging",
    "library/logging.html#configuring-logging-for-a-library": "howto/logging.html#configuring-logging-for-a-library",
    "library/logging.html#library-config": "howto/logging.html#configuring-logging-for-a-library",
    "library/logging.html#useful-handlers": "howto/logging.html#useful-handlers",
    "library/logging.html#basic-example": "howto/logging.html#a-simple-example",
    "library/logging.html#minimal-example": "howto/logging.html#a-simple-example",

    "library/logging.html#logging-to-multiple-destinations": "howto/logging-cookbook.html#logging-to-multiple-destinations",
    "library/logging.html#multiple-destinations": "howto/logging-cookbook.html#logging-to-multiple-destinations",
    "library/logging.html#exceptions-raised-during-logging": "howto/logging.html#exceptions-raised-during-logging",
    "library/logging.html#logging-exceptions": "howto/logging.html#exceptions-raised-during-logging",
    "library/logging.html#adding-contextual-information-to-your-logging-output": "howto/logging-cookbook.html#adding-contextual-information-to-your-logging-output",
    "library/logging.html#context-info": "howto/logging-cookbook.html#adding-contextual-information-to-your-logging-output",
    "library/logging.html#logging-to-a-single-file-from-multiple-processes": "howto/logging-cookbook.html#logging-to-a-single-file-from-multiple-processes",
    "library/logging.html#multiple-processes": "howto/logging-cookbook.html#logging-to-a-single-file-from-multiple-processes",
    "library/logging.html#sending-and-receiving-logging-events-across-a-network": "howto/logging-cookbook.html#sending-and-receiving-logging-events-across-a-network",
    "library/logging.html#network-logging": "howto/logging-cookbook.html#sending-and-receiving-logging-events-across-a-network",
    // Missing short name for this section
    "library/logging.html#using-arbitrary-objects-as-messages": "howto/logging.html#using-arbitrary-objects-as-messages",
    "library/logging.html#optimization": "howto/logging.html#optimization",

    "library/logging.html#streamhandler": "library/logging.handlers.html#streamhandler",
    "library/logging.html#stream-handler": "library/logging.handlers.html#stream-handler",
    "library/logging.html#logging.StreamHandler": "library/logging.handlers.html#logging.StreamHandler",
    "library/logging.html#logging.StreamHandler.emit": "library/logging.handlers.html#logging.StreamHandler.emit",
    "library/logging.html#logging.StreamHandler.flush": "library/logging.handlers.html#logging.StreamHandler.flush",
    "library/logging.html#filehandler": "library/logging.handlers.html#filehandler",
    "library/logging.html#file-handler": "library/logging.handlers.html#file-handler",
    "library/logging.html#logging.FileHandler": "library/logging.handlers.html#logging.FileHandler",
    "library/logging.html#logging.FileHandler.close": "library/logging.handlers.html#logging.FileHandler.close",
    "library/logging.html#logging.FileHandler.emit": "library/logging.handlers.html#logging.FileHandler.emit",
    "library/logging.html#null-handler": "library/logging.handlers.html#null-handler",
    "library/logging.html#watchedfilehandler": "library/logging.handlers.html#watchedfilehandler",
    "library/logging.html#watched-file-handler": "library/logging.handlers.html#watched-file-handler",
    "library/logging.html#logging.WatchedFileHandler": "library/logging.handlers.html#logging.handlers.WatchedFileHandler",
    "library/logging.html#logging.WatchedFileHandler.emit": "library/logging.handlers.html#logging.handlers.WatchedFileHandler.emit",
    "library/logging.html#rotatingfilehandler": "library/logging.handlers.html#rotatingfilehandler",
    "library/logging.html#rotating-file-handler": "library/logging.handlers.html#rotating-file-handler",
    "library/logging.html#logging.RotatingFileHandler": "library/logging.handlers.html#logging.handlers.RotatingFileHandler",
    "library/logging.html#logging.RotatingFileHandler.doRollover": "library/logging.handlers.html#logging.handlers.RotatingFileHandler.doRollover",
    "library/logging.html#logging.RotatingFileHandler.emit": "library/logging.handlers.html#logging.handlers.RotatingFileHandler.emit",
    "library/logging.html#timedrotatingfilehandler": "library/logging.handlers.html#timedrotatingfilehandler",
    "library/logging.html#timed-rotating-file-handler": "library/logging.handlers.html#timed-rotating-file-handler",
    "library/logging.html#logging.TimedRotatingFileHandler": "library/logging.handlers.html#logging.handlers.TimedRotatingFileHandler",
    "library/logging.html#logging.TimedRotatingFileHandler.doRollover": "library/logging.handlers.html#logging.handlers.TimedRotatingFileHandler.doRollover",
    "library/logging.html#logging.TimedRotatingFileHandler.emit": "library/logging.handlers.html#logging.handlers.TimedRotatingFileHandler.emit",
    "library/logging.html#sockethandler": "library/logging.handlers.html#sockethandler",
    "library/logging.html#socket-handler": "library/logging.handlers.html#socket-handler",
    "library/logging.html#logging.SocketHandler": "library/logging.handlers.html#logging.handlers.SocketHandler",
    "library/logging.html#logging.SocketHandler.close": "library/logging.handlers.html#logging.handlers.SocketHandler.close",
    "library/logging.html#logging.SocketHandler.emit": "library/logging.handlers.html#logging.handlers.SocketHandler.emit",
    "library/logging.html#logging.SocketHandler.handleError": "library/logging.handlers.html#logging.handlers.SocketHandler.handleError",
    "library/logging.html#logging.SocketHandler.makeSocket": "library/logging.handlers.html#logging.handlers.SocketHandler.makeSocket",
    "library/logging.html#logging.SocketHandler.makePickle": "library/logging.handlers.html#logging.handlers.SocketHandler.makePickle",
    "library/logging.html#logging.SocketHandler.send": "library/logging.handlers.html#logging.handlers.SocketHandler.send",
    "library/logging.html#datagramhandler": "library/logging.handlers.html#datagramhandler",
    "library/logging.html#datagram-handler": "library/logging.handlers.html#datagram-handler",
    "library/logging.html#logging.DatagramHandler": "library/logging.handlers.html#logging.handlers.DatagramHandler",
    "library/logging.html#logging.DatagramHandler.emit": "library/logging.handlers.html#logging.handlers.DatagramHandler.emit",
    "library/logging.html#logging.DatagramHandler.makeSocket": "library/logging.handlers.html#logging.handlers.DatagramHandler.makeSocket",
    "library/logging.html#logging.DatagramHandler.send": "library/logging.handlers.html#logging.handlers.DatagramHandler.send",
    "library/logging.html#sysloghandler": "library/logging.handlers.html#sysloghandler",
    "library/logging.html#syslog-handler": "library/logging.handlers.html#syslog-handler",
    "library/logging.html#logging.SysLogHandler": "library/logging.handlers.html#logging.handlers.SysLogHandler",
    "library/logging.html#logging.SysLogHandler.close": "library/logging.handlers.html#logging.handlers.SysLogHandler.close",
    "library/logging.html#logging.SysLogHandler.emit": "library/logging.handlers.html#logging.handlers.SysLogHandler.emit",
    "library/logging.html#logging.SysLogHandler.encodePriority": "library/logging.handlers.html#logging.handlers.SysLogHandler.encodePriority",
    "library/logging.html#logging.SysLogHandler.mapPriority": "library/logging.handlers.html#logging.handlers.SysLogHandler.mapPriority",
    "library/logging.html#nteventloghandler": "library/logging.handlers.html#nteventloghandler",
    "library/logging.html#nt-eventlog-handler": "library/logging.handlers.html#nt-eventlog-handler",
    "library/logging.html#logging.NTEventLogHandler": "library/logging.handlers.html#logging.handlers.NTEventLogHandler",
    "library/logging.html#logging.NTEventLogHandler.close": "library/logging.handlers.html#logging.handlers.NTEventLogHandler.close",
    "library/logging.html#logging.NTEventLogHandler.emit": "library/logging.handlers.html#logging.handlers.NTEventLogHandler.emit",
    "library/logging.html#logging.NTEventLogHandler.getEventCategory": "library/logging.handlers.html#logging.handlers.NTEventLogHandler.getEventCategory",
    "library/logging.html#logging.NTEventLogHandler.getEventType": "library/logging.handlers.html#logging.handlers.NTEventLogHandler.getEventType",
    "library/logging.html#logging.NTEventLogHandler.getMessageID": "library/logging.handlers.html#logging.handlers.NTEventLogHandler.getMessageID",
    "library/logging.html#smtphandler": "library/logging.handlers.html#smtphandler",
    "library/logging.html#smtp-handler": "library/logging.handlers.html#smtp-handler",
    "library/logging.html#logging.SMTPHandler": "library/logging.handlers.html#logging.handlers.SMTPHandler",
    "library/logging.html#logging.SMTPHandler.emit": "library/logging.handlers.html#logging.handlers.SMTPHandler.emit",
    "library/logging.html#logging.SMTPHandler.getSubject": "library/logging.handlers.html#logging.handlers.SMTPHandler.getSubject",
    "library/logging.html#memoryhandler": "library/logging.handlers.html#memoryhandler",
    "library/logging.html#memory-handler": "library/logging.handlers.html#memory-handler",
    "library/logging.html#logging.BufferingHandler": "library/logging.handlers.html#logging.handlers.BufferingHandler",
    "library/logging.html#logging.BufferingHandler.emit": "library/logging.handlers.html#logging.handlers.BufferingHandler.emit",
    "library/logging.html#logging.BufferingHandler.flush": "library/logging.handlers.html#logging.handlers.BufferingHandler.flush",
    "library/logging.html#logging.BufferingHandler.shouldFlush": "library/logging.handlers.html#logging.handlers.BufferingHandler.shouldFlush",
    "library/logging.html#logging.MemoryHandler": "library/logging.handlers.html#logging.handlers.MemoryHandler",
    "library/logging.html#logging.MemoryHandler.close": "library/logging.handlers.html#logging.handlers.MemoryHandler.close",
    "library/logging.html#logging.MemoryHandler.flush": "library/logging.handlers.html#logging.handlers.MemoryHandler.flush",
    "library/logging.html#logging.MemoryHandler.setTarget": "library/logging.handlers.html#logging.handlers.MemoryHandler.setTarget",
    "library/logging.html#logging.MemoryHandler.shouldFlush": "library/logging.handlers.html#logging.handlers.MemoryHandler.shouldFlush",
    "library/logging.html#httphandler": "library/logging.handlers.html#httphandler",
    "library/logging.html#http-handler": "library/logging.handlers.html#http-handler",
    "library/logging.html#logging.HTTPHandler": "library/logging.handlers.html#logging.handlers.HTTPHandler",
    "library/logging.html#logging.HTTPHandler.emit": "library/logging.handlers.html#logging.handlers.HTTPHandler.emit",
    "library/logging.html#formatter": "library/logging.html#formatter-objects",

    "library/logging.html#configuration": "library/logging.config.html",
    "library/logging.html#configuration-functions": "library/logging.config.html#configuration-functions",
    "library/logging.html#logging-config-api": "library/logging.config.html#logging-config-api",
    "library/logging.html#logging.fileConfig": "library/logging.config.html#logging.config.fileConfig",
    "library/logging.html#logging.listen": "library/logging.config.html#logging.config.listen",
    "library/logging.html#logging.stopListening": "library/logging.config.html#logging.config.stopListening",
    "library/logging.html#configuration-file-format": "library/logging.config.html#configuration-file-format",
    "library/logging.html#logging-config-fileformat": "library/logging.config.html#logging-config-fileformat",

    "library/logging.html#configuration-server-example": "howto/logging-cookbook.html#configuration-server-example",
    "library/logging.html#more-examples": "howto/logging-cookbook.html",
    "library/logging.html#multiple-handlers-and-formatters": "howto/logging-cookbook.html#multiple-handlers-and-formatters",
    "library/logging.html#using-logging-in-multiple-modules": "howto/logging-cookbook.html#using-logging-in-multiple-modules",


    "library/curses.html#module-curses.wrapper": "library/curses.html#curses.wrapper",
    "library/curses.html#curses.wrapper.wrapper": "library/curses.html#curses.wrapper",


    "library/multiprocessing.html#multiprocessing.Queue.get_no_wait": "library/multiprocessing.html#multiprocessing.Queue.get_nowait",

    "library/multiprocessing.html#multiprocessing.Connection": "library/multiprocessing.html#multiprocessing.connection.Connection",
    "library/multiprocessing.html#multiprocessing.Connection.send": "library/multiprocessing.html#multiprocessing.connection.Connection.send",
    "library/multiprocessing.html#multiprocessing.Connection.recv": "library/multiprocessing.html#multiprocessing.connection.Connection.recv",
    "library/multiprocessing.html#multiprocessing.Connection.fileno": "library/multiprocessing.html#multiprocessing.connection.Connection.fileno",
    "library/multiprocessing.html#multiprocessing.Connection.close": "library/multiprocessing.html#multiprocessing.connection.Connection.close",
    "library/multiprocessing.html#multiprocessing.Connection.poll": "library/multiprocessing.html#multiprocessing.connection.Connection.poll",
    "library/multiprocessing.html#multiprocessing.Connection.send_bytes": "library/multiprocessing.html#multiprocessing.connection.Connection.send_bytes",
    "library/multiprocessing.html#multiprocessing.Connection.recv_bytes": "library/multiprocessing.html#multiprocessing.connection.Connection.recv_bytes",
    "library/multiprocessing.html#multiprocessing.Connection.recv_bytes_into": "library/multiprocessing.html#multiprocessing.connection.Connection.recv_bytes_into",

    "library/multiprocessing.html#namespace-objects": "library/multiprocessing.html#multiprocessing.managers.Namespace",
    "library/multiprocessing.html#multiprocessing.connection.answerChallenge": "library/multiprocessing.html#multiprocessing.connection.answer_challenge",


    "library/mmap.html#mmap.close": "library/mmap.html#mmap.mmap.close",
    "library/mmap.html#mmap.find": "library/mmap.html#mmap.mmap.find",
    "library/mmap.html#mmap.flush": "library/mmap.html#mmap.mmap.flush",
    "library/mmap.html#mmap.move": "library/mmap.html#mmap.mmap.move",
    "library/mmap.html#mmap.read": "library/mmap.html#mmap.mmap.read",
    "library/mmap.html#mmap.read_byte": "library/mmap.html#mmap.mmap.read_byte",
    "library/mmap.html#mmap.readline": "library/mmap.html#mmap.mmap.readline",
    "library/mmap.html#mmap.resize": "library/mmap.html#mmap.mmap.resize",
    "library/mmap.html#mmap.rfind": "library/mmap.html#mmap.mmap.rfind",
    "library/mmap.html#mmap.seek": "library/mmap.html#mmap.mmap.seek",
    "library/mmap.html#mmap.size": "library/mmap.html#mmap.mmap.size",
    "library/mmap.html#mmap.tell": "library/mmap.html#mmap.mmap.tell",
    "library/mmap.html#mmap.write": "library/mmap.html#mmap.mmap.write",
    "library/mmap.html#mmap.write_byte": "library/mmap.html#mmap.mmap.write_byte",


    "library/subprocess.html#convenience-functions": "library/subprocess.html#older-high-level-api",


    "library/ssl.html#sslsocket-objects": "library/ssl.html#ssl-sockets",


    "library/asyncore.html#asyncore-example": "library/asyncore.html#asyncore-example-1",


    "library/mimetypes.html#mimetypes.MimeTypes.common_types": "library/mimetypes.html#mimetypes.common_types",

    "library/email.util.html": "library/email.utils.html",
    // TODO: what happened to this method?
    "library/email.util.html#email.utils.make_msgid": null,


    "library/htmlparser.html#htmlparser-example": "library/html.parser.html#htmlparser-examples",


    // https://docs.python.org/3/library/xml.etree.elementtree.html
    "library/xml.etree.elementtree.html#the-element-interface": "library/xml.etree.elementtree.html#element-objects",
    "library/xml.etree.elementtree.html#elementtree-element-interface": "library/xml.etree.elementtree.html#element-objects",

    // TODO: class name changed and has no .feed() method
    "library/xml.etree.elementtree.html#xmltreebuilder-objects": "library/xml.etree.elementtree.html#treebuilder-objects",
    "library/xml.etree.elementtree.html#elementtree-xmltreebuilder-objects": "library/xml.etree.elementtree.html#elementtree-treebuilder-objects",
    "library/xml.etree.elementtree.html#xml.etree.ElementTree.XMLTreeBuilder": "library/xml.etree.elementtree.html#xml.etree.ElementTree.TreeBuilder",
    "library/xml.etree.elementtree.html#xml.etree.ElementTree.XMLTreeBuilder.close": "library/xml.etree.elementtree.html#xml.etree.ElementTree.TreeBuilder.close",
    "library/xml.etree.elementtree.html#xml.etree.ElementTree.XMLTreeBuilder.doctype": "library/xml.etree.elementtree.html#xml.etree.ElementTree.TreeBuilder.doctype",
    "library/xml.etree.elementtree.html#xml.etree.ElementTree.XMLTreeBuilder.feed": "library/xml.etree.elementtree.html#xml.etree.ElementTree.TreeBuilder",
    // "library/xml.etree.elementtree.html#xmltreebuilder-objects": null,
    // "library/xml.etree.elementtree.html#elementtree-xmltreebuilder-objects": null,
    // "library/xml.etree.elementtree.html#xml.etree.ElementTree.XMLTreeBuilder": null,
    // "library/xml.etree.elementtree.html#xml.etree.ElementTree.XMLTreeBuilder.close": null,
    // "library/xml.etree.elementtree.html#xml.etree.ElementTree.XMLTreeBuilder.doctype": null,
    // "library/xml.etree.elementtree.html#xml.etree.ElementTree.XMLTreeBuilder.feed": null,


    // https://docs.python.org/2.6/library/urllib2.html#urllib2.HTTPErrorProcessor.unknown_open
    // TODO: first one is probably right
    // "library/urllib2.html#urllib2.HTTPErrorProcessor.unknown_open": "library/urllib.request.html#urllib.request.HTTPErrorProcessor.http_response",
    // "library/urllib2.html#urllib2.HTTPErrorProcessor.unknown_open": "library/urllib.request.html#urllib.request.BaseHandler.unknown_open",
    "library/urllib2.html#urllib2.HTTPErrorProcessor.unknown_open": null,


    // TODO: base class was removed. it's just a namedtuple
    // https://github.com/python/cpython/blob/364b5ead1584583db91ef7f9d9f87f01bfbb5774/Lib/urllib/parse.py#L248-L249
    "library/urlparse.html#urlparse.BaseResult": null,


    "library/socketserver.html#requesthandler-objects": "library/socketserver.html#request-handler-objects",
    "library/socketserver.html#SocketServer.RequestHandler.finish": "library/socketserver.html#socketserver.BaseRequestHandler.finish",
    "library/socketserver.html#SocketServer.RequestHandler.handle": "library/socketserver.html#socketserver.BaseRequestHandler.handle",
    "library/socketserver.html#SocketServer.RequestHandler.setup": "library/socketserver.html#socketserver.BaseRequestHandler.setup",


    "library/idle.html#file-menu": "library/idle.html#file-menu-shell-and-editor",
    "library/idle.html#edit-menu": "library/idle.html#edit-menu-shell-and-editor",
    // "library/idle.html#windows-menu": "library/idle.html#options-menu-shell-and-editor",
    "library/idle.html#windows-menu": "library/idle.html#window-menu-shell-and-editor",
    "library/idle.html#debug-menu-in-the-python-shell-window-only": "library/idle.html#debug-menu-shell-window-only",
    "library/idle.html#basic-editing-and-navigation": "library/idle.html#editing-and-navigation",
    "library/idle.html#syntax-colors": "library/idle.html#text-colors",
    "library/idle.html#startup": "library/idle.html#startup-and-code-execution",


    "library/doctest.html#grammar-token-directive_options": "library/doctest.html#grammar-token-directive-options",
    "library/doctest.html#grammar-token-directive_option": "library/doctest.html#grammar-token-directive-option",
    "library/doctest.html#grammar-token-on_or_off": "library/doctest.html#grammar-token-on-or-off",
    "library/doctest.html#grammar-token-directive_option_name": "library/doctest.html#grammar-token-directive-option-name",


    // https://docs.python.org/library/2to3.html#2to3fixer-asserts
    "library/unittest.html#unittest.TestCase.failUnlessEqual": "library/unittest.html#unittest.TestCase.assertEqual",
    "library/unittest.html#unittest.TestCase.failIfEqual": "library/unittest.html#unittest.TestCase.assertNotEqual",
    "library/unittest.html#unittest.TestCase.failUnless": "library/unittest.html#unittest.TestCase.assertTrue",
    "library/unittest.html#unittest.TestCase.assert_": "library/unittest.html#unittest.TestCase.assertTrue",
    "library/unittest.html#unittest.TestCase.failIf": "library/unittest.html#unittest.TestCase.assertFalse",
    "library/unittest.html#unittest.TestCase.failUnlessRaises": "library/unittest.html#unittest.TestCase.assertRaises",
    "library/unittest.html#unittest.TestCase.failUnlessAlmostEqual": "library/unittest.html#unittest.TestCase.assertAlmostEqual",
    "library/unittest.html#unittest.TestCase.failIfAlmostEqual": "library/unittest.html#unittest.TestCase.assertNotAlmostEqual",

    "library/unittest.html#testresult-objects": "library/unittest.html#unittest.TestResult",
    "library/unittest.html#testloader-objects": "library/unittest.html#unittest.TestLoader",


    // callable() was removed in Python 3.0 but re-introduced in 3.2
    "library/2to3.html#2to3fixer-callable": null,
    "library/2to3.html#2to3fixer-standard_error": "library/2to3.html#2to3fixer-standarderror",


    "library/test.html#running-tests-using-test-regrtest": "library/test.html#running-tests-using-the-command-line-interface",
    "library/test.html#test.test_support.TestFailed": "library/test.html#test.support.TestFailed",
    // TODO: subclass of TestFailed, removed. Still redirect?
    "library/test.html#test.test_support.TestSkipped": null,
    "library/test.html#test.test_support.ResourceDenied": "library/test.html#test.support.ResourceDenied",
    "library/test.html#test.test_support.verbose": "library/test.html#test.support.verbose",
    "library/test.html#test.test_support.have_unicode": null,
    "library/test.html#test.test_support.is_jython": "library/test.html#test.support.is_jython",
    "library/test.html#test.test_support.TESTFN": "library/test.html#test.support.TESTFN",
    "library/test.html#test.test_support.forget": "library/test.html#test.support.forget",
    "library/test.html#test.test_support.is_resource_enabled": "library/test.html#test.support.is_resource_enabled",
    "library/test.html#test.test_support.requires": "library/test.html#test.support.requires",
    "library/test.html#test.test_support.findfile": "library/test.html#test.support.findfile",
    "library/test.html#test.test_support.run_unittest": "library/test.html#test.support.run_unittest",
    "library/test.html#test.test_support.check_warnings": "library/test.html#test.support.check_warnings",
    "library/test.html#test.test_support.captured_stdout": "library/test.html#test.support.captured_stdout",
    "library/test.html#test.test_support.TransientResource": "library/test.html#test.support.TransientResource",
    "library/test.html#test.test_support.EnvironmentVarGuard": "library/test.html#test.support.EnvironmentVarGuard",
    "library/test.html#test.test_support.EnvironmentVarGuard.set": "library/test.html#test.support.EnvironmentVarGuard.set",
    "library/test.html#test.test_support.EnvironmentVarGuard.unset": "library/test.html#test.support.EnvironmentVarGuard.unset",
    "library/test.html#test.test_support.WarningsRecorder": "library/test.html#test.support.WarningsRecorder",


    "library/profile.html#cProfile.run": "library/profile.html#profile.run",
    "library/profile.html#cProfile.runctx": "library/profile.html#profile.runctx",
    "library/profile.html#profile-limits": "library/profile.html#profile-limitations",
    "library/profile.html#extensions-deriving-better-profilers": "library/profile.html#using-a-custom-timer",
    "library/profile.html#profiler-extensions": "library/profile.html#using-a-custom-timer",


    // Section header deleted
    "library/trace.html#meta-options": "library/trace.html#command-line-usage",
    "library/trace.html#programming-interface": "library/trace.html#programmatic-interface",


    "library/site.html#envvar-PYTHONNOUSERSITE": "using/cmdline.html#envvar-PYTHONNOUSERSITE",
    "library/site.html#envvar-PYTHONUSERBASE": "using/cmdline.html#envvar-PYTHONUSERBASE",


    // There were two "examples", the second one was removed
    "library/parser.html#examples": "library/parser.html#example-emulation-of-compile",
    "library/parser.html#st-examples": "library/parser.html#example-emulation-of-compile",
    "library/parser.html#emulation-of-compile": "library/parser.html#example-emulation-of-compile",
    "library/parser.html#information-discovery": null,


    "library/ast.html#ast": "library/ast.html#module-ast",


    // Removed function
    "library/tabnanny.html#tabnanny.tokeneater": null,


    // TODO: check this
    "library/dis.html#opcode-JUMP_IF_TRUE": null,
    "library/dis.html#opcode-JUMP_IF_FALSE": null,



    // Add "c." to a bunch of ids in c-api
    "c-api/veryhigh.html#Py_Main": "c-api/veryhigh.html#c.Py_Main",
    "c-api/veryhigh.html#PyRun_AnyFile": "c-api/veryhigh.html#c.PyRun_AnyFile",
    "c-api/veryhigh.html#PyRun_AnyFileFlags": "c-api/veryhigh.html#c.PyRun_AnyFileFlags",
    "c-api/veryhigh.html#PyRun_AnyFileEx": "c-api/veryhigh.html#c.PyRun_AnyFileEx",
    "c-api/veryhigh.html#PyRun_AnyFileExFlags": "c-api/veryhigh.html#c.PyRun_AnyFileExFlags",
    "c-api/veryhigh.html#PyRun_SimpleString": "c-api/veryhigh.html#c.PyRun_SimpleString",
    "c-api/veryhigh.html#PyRun_SimpleStringFlags": "c-api/veryhigh.html#c.PyRun_SimpleStringFlags",
    "c-api/veryhigh.html#PyRun_SimpleFile": "c-api/veryhigh.html#c.PyRun_SimpleFile",
    "c-api/veryhigh.html#PyRun_SimpleFileEx": "c-api/veryhigh.html#c.PyRun_SimpleFileEx",
    "c-api/veryhigh.html#PyRun_SimpleFileExFlags": "c-api/veryhigh.html#c.PyRun_SimpleFileExFlags",
    "c-api/veryhigh.html#PyRun_InteractiveOne": "c-api/veryhigh.html#c.PyRun_InteractiveOne",
    "c-api/veryhigh.html#PyRun_InteractiveOneFlags": "c-api/veryhigh.html#c.PyRun_InteractiveOneFlags",
    "c-api/veryhigh.html#PyRun_InteractiveLoop": "c-api/veryhigh.html#c.PyRun_InteractiveLoop",
    "c-api/veryhigh.html#PyRun_InteractiveLoopFlags": "c-api/veryhigh.html#c.PyRun_InteractiveLoopFlags",
    "c-api/veryhigh.html#PyParser_SimpleParseString": "c-api/veryhigh.html#c.PyParser_SimpleParseString",
    "c-api/veryhigh.html#PyParser_SimpleParseStringFlags": "c-api/veryhigh.html#c.PyParser_SimpleParseStringFlags",
    "c-api/veryhigh.html#PyParser_SimpleParseStringFlagsFilename": "c-api/veryhigh.html#c.PyParser_SimpleParseStringFlagsFilename",
    "c-api/veryhigh.html#PyParser_SimpleParseFile": "c-api/veryhigh.html#c.PyParser_SimpleParseFile",
    "c-api/veryhigh.html#PyParser_SimpleParseFileFlags": "c-api/veryhigh.html#c.PyParser_SimpleParseFileFlags",
    "c-api/veryhigh.html#PyRun_String": "c-api/veryhigh.html#c.PyRun_String",
    "c-api/veryhigh.html#PyRun_StringFlags": "c-api/veryhigh.html#c.PyRun_StringFlags",
    "c-api/veryhigh.html#PyRun_File": "c-api/veryhigh.html#c.PyRun_File",
    "c-api/veryhigh.html#PyRun_FileEx": "c-api/veryhigh.html#c.PyRun_FileEx",
    "c-api/veryhigh.html#PyRun_FileFlags": "c-api/veryhigh.html#c.PyRun_FileFlags",
    "c-api/veryhigh.html#PyRun_FileExFlags": "c-api/veryhigh.html#c.PyRun_FileExFlags",
    "c-api/veryhigh.html#Py_CompileString": "c-api/veryhigh.html#c.Py_CompileString",
    "c-api/veryhigh.html#Py_CompileStringFlags": "c-api/veryhigh.html#c.Py_CompileStringFlags",
    "c-api/veryhigh.html#PyEval_EvalCode": "c-api/veryhigh.html#c.PyEval_EvalCode",
    "c-api/veryhigh.html#PyEval_EvalCodeEx": "c-api/veryhigh.html#c.PyEval_EvalCodeEx",
    "c-api/veryhigh.html#PyEval_EvalFrame": "c-api/veryhigh.html#c.PyEval_EvalFrame",
    "c-api/veryhigh.html#PyEval_EvalFrameEx": "c-api/veryhigh.html#c.PyEval_EvalFrameEx",
    "c-api/veryhigh.html#PyEval_MergeCompilerFlags": "c-api/veryhigh.html#c.PyEval_MergeCompilerFlags",
    "c-api/veryhigh.html#Py_eval_input": "c-api/veryhigh.html#c.Py_eval_input",
    "c-api/veryhigh.html#Py_file_input": "c-api/veryhigh.html#c.Py_file_input",
    "c-api/veryhigh.html#Py_single_input": "c-api/veryhigh.html#c.Py_single_input",
    "c-api/veryhigh.html#PyCompilerFlags": "c-api/veryhigh.html#c.PyCompilerFlags",
    "c-api/veryhigh.html#CO_FUTURE_DIVISION": "c-api/veryhigh.html#c.CO_FUTURE_DIVISION",

    "c-api/refcounting.html#Py_INCREF": "c-api/refcounting.html#c.Py_INCREF",
    "c-api/refcounting.html#Py_XINCREF": "c-api/refcounting.html#c.Py_XINCREF",
    "c-api/refcounting.html#Py_DECREF": "c-api/refcounting.html#c.Py_DECREF",
    "c-api/refcounting.html#Py_XDECREF": "c-api/refcounting.html#c.Py_XDECREF",
    "c-api/refcounting.html#Py_CLEAR": "c-api/refcounting.html#c.Py_CLEAR",

    "c-api/exceptions.html#PyErr_PrintEx": "c-api/exceptions.html#c.PyErr_PrintEx",
    "c-api/exceptions.html#PyErr_Print": "c-api/exceptions.html#c.PyErr_Print",
    "c-api/exceptions.html#PyErr_Occurred": "c-api/exceptions.html#c.PyErr_Occurred",
    "c-api/exceptions.html#PyErr_ExceptionMatches": "c-api/exceptions.html#c.PyErr_ExceptionMatches",
    "c-api/exceptions.html#PyErr_GivenExceptionMatches": "c-api/exceptions.html#c.PyErr_GivenExceptionMatches",
    "c-api/exceptions.html#PyErr_NormalizeException": "c-api/exceptions.html#c.PyErr_NormalizeException",
    "c-api/exceptions.html#PyErr_Clear": "c-api/exceptions.html#c.PyErr_Clear",
    "c-api/exceptions.html#PyErr_Fetch": "c-api/exceptions.html#c.PyErr_Fetch",
    "c-api/exceptions.html#PyErr_Restore": "c-api/exceptions.html#c.PyErr_Restore",
    "c-api/exceptions.html#PyErr_SetString": "c-api/exceptions.html#c.PyErr_SetString",
    "c-api/exceptions.html#PyErr_SetObject": "c-api/exceptions.html#c.PyErr_SetObject",
    "c-api/exceptions.html#PyErr_Format": "c-api/exceptions.html#c.PyErr_Format",
    "c-api/exceptions.html#PyErr_SetNone": "c-api/exceptions.html#c.PyErr_SetNone",
    "c-api/exceptions.html#PyErr_BadArgument": "c-api/exceptions.html#c.PyErr_BadArgument",
    "c-api/exceptions.html#PyErr_NoMemory": "c-api/exceptions.html#c.PyErr_NoMemory",
    "c-api/exceptions.html#PyErr_SetFromErrno": "c-api/exceptions.html#c.PyErr_SetFromErrno",
    "c-api/exceptions.html#PyErr_SetFromErrnoWithFilename": "c-api/exceptions.html#c.PyErr_SetFromErrnoWithFilename",
    "c-api/exceptions.html#PyErr_SetFromWindowsErr": "c-api/exceptions.html#c.PyErr_SetFromWindowsErr",
    "c-api/exceptions.html#PyErr_SetExcFromWindowsErr": "c-api/exceptions.html#c.PyErr_SetExcFromWindowsErr",
    "c-api/exceptions.html#PyErr_SetFromWindowsErrWithFilename": "c-api/exceptions.html#c.PyErr_SetFromWindowsErrWithFilename",
    "c-api/exceptions.html#PyErr_SetExcFromWindowsErrWithFilename": "c-api/exceptions.html#c.PyErr_SetExcFromWindowsErrWithFilename",
    "c-api/exceptions.html#PyErr_BadInternalCall": "c-api/exceptions.html#c.PyErr_BadInternalCall",
    "c-api/exceptions.html#PyErr_WarnEx": "c-api/exceptions.html#c.PyErr_WarnEx",
    "c-api/exceptions.html#PyErr_WarnExplicit": "c-api/exceptions.html#c.PyErr_WarnExplicit",
    "c-api/exceptions.html#PyErr_CheckSignals": "c-api/exceptions.html#c.PyErr_CheckSignals",
    "c-api/exceptions.html#PyErr_SetInterrupt": "c-api/exceptions.html#c.PyErr_SetInterrupt",
    "c-api/exceptions.html#PySignal_SetWakeupFd": "c-api/exceptions.html#c.PySignal_SetWakeupFd",
    "c-api/exceptions.html#PyErr_NewException": "c-api/exceptions.html#c.PyErr_NewException",
    "c-api/exceptions.html#PyErr_WriteUnraisable": "c-api/exceptions.html#c.PyErr_WriteUnraisable",
    "c-api/exceptions.html#Py_EnterRecursiveCall": "c-api/exceptions.html#c.Py_EnterRecursiveCall",
    "c-api/exceptions.html#Py_LeaveRecursiveCall": "c-api/exceptions.html#c.Py_LeaveRecursiveCall",

    "c-api/sys.html#Py_FdIsInteractive": "c-api/sys.html#c.Py_FdIsInteractive",
    "c-api/sys.html#PyOS_AfterFork": "c-api/sys.html#c.PyOS_AfterFork",
    "c-api/sys.html#PyOS_CheckStack": "c-api/sys.html#c.PyOS_CheckStack",
    "c-api/sys.html#PyOS_getsig": "c-api/sys.html#c.PyOS_getsig",
    "c-api/sys.html#PyOS_setsig": "c-api/sys.html#c.PyOS_setsig",
    "c-api/sys.html#PySys_GetObject": "c-api/sys.html#c.PySys_GetObject",
    "c-api/sys.html#PySys_SetObject": "c-api/sys.html#c.PySys_SetObject",
    "c-api/sys.html#PySys_ResetWarnOptions": "c-api/sys.html#c.PySys_ResetWarnOptions",
    "c-api/sys.html#PySys_AddWarnOption": "c-api/sys.html#c.PySys_AddWarnOption",
    "c-api/sys.html#PySys_SetPath": "c-api/sys.html#c.PySys_SetPath",
    "c-api/sys.html#PySys_WriteStdout": "c-api/sys.html#c.PySys_WriteStdout",
    "c-api/sys.html#PySys_WriteStderr": "c-api/sys.html#c.PySys_WriteStderr",
    "c-api/sys.html#Py_FatalError": "c-api/sys.html#c.Py_FatalError",
    "c-api/sys.html#Py_Exit": "c-api/sys.html#c.Py_Exit",
    "c-api/sys.html#Py_AtExit": "c-api/sys.html#c.Py_AtExit",

    "c-api/import.html#PyImport_ImportModule": "c-api/import.html#c.PyImport_ImportModule",
    "c-api/import.html#PyImport_ImportModuleNoBlock": "c-api/import.html#c.PyImport_ImportModuleNoBlock",
    "c-api/import.html#PyImport_ImportModuleEx": "c-api/import.html#c.PyImport_ImportModuleEx",
    "c-api/import.html#PyImport_ImportModuleLevel": "c-api/import.html#c.PyImport_ImportModuleLevel",
    "c-api/import.html#PyImport_Import": "c-api/import.html#c.PyImport_Import",
    "c-api/import.html#PyImport_ReloadModule": "c-api/import.html#c.PyImport_ReloadModule",
    "c-api/import.html#PyImport_AddModule": "c-api/import.html#c.PyImport_AddModule",
    "c-api/import.html#PyImport_ExecCodeModule": "c-api/import.html#c.PyImport_ExecCodeModule",
    "c-api/import.html#PyImport_ExecCodeModuleEx": "c-api/import.html#c.PyImport_ExecCodeModuleEx",
    "c-api/import.html#PyImport_GetMagicNumber": "c-api/import.html#c.PyImport_GetMagicNumber",
    "c-api/import.html#PyImport_GetModuleDict": "c-api/import.html#c.PyImport_GetModuleDict",
    "c-api/import.html#PyImport_GetImporter": "c-api/import.html#c.PyImport_GetImporter",
    "c-api/import.html#_PyImport_Init": "c-api/import.html#c._PyImport_Init",
    "c-api/import.html#PyImport_Cleanup": "c-api/import.html#c.PyImport_Cleanup",
    "c-api/import.html#_PyImport_Fini": "c-api/import.html#c._PyImport_Fini",
    "c-api/import.html#PyImport_ImportFrozenModule": "c-api/import.html#c.PyImport_ImportFrozenModule",
    "c-api/import.html#_frozen": "c-api/import.html#c._frozen",
    "c-api/import.html#PyImport_FrozenModules": "c-api/import.html#c.PyImport_FrozenModules",
    "c-api/import.html#PyImport_AppendInittab": "c-api/import.html#c.PyImport_AppendInittab",
    "c-api/import.html#_inittab": "c-api/import.html#c._inittab",
    "c-api/import.html#PyImport_ExtendInittab": "c-api/import.html#c.PyImport_ExtendInittab",

    "c-api/marshal.html#PyMarshal_WriteLongToFile": "c-api/marshal.html#c.PyMarshal_WriteLongToFile",
    "c-api/marshal.html#PyMarshal_WriteObjectToFile": "c-api/marshal.html#c.PyMarshal_WriteObjectToFile",
    "c-api/marshal.html#PyMarshal_WriteObjectToString": "c-api/marshal.html#c.PyMarshal_WriteObjectToString",
    "c-api/marshal.html#PyMarshal_ReadLongFromFile": "c-api/marshal.html#c.PyMarshal_ReadLongFromFile",
    "c-api/marshal.html#PyMarshal_ReadShortFromFile": "c-api/marshal.html#c.PyMarshal_ReadShortFromFile",
    "c-api/marshal.html#PyMarshal_ReadObjectFromFile": "c-api/marshal.html#c.PyMarshal_ReadObjectFromFile",
    "c-api/marshal.html#PyMarshal_ReadLastObjectFromFile": "c-api/marshal.html#c.PyMarshal_ReadLastObjectFromFile",
    "c-api/marshal.html#PyMarshal_ReadObjectFromString": "c-api/marshal.html#c.PyMarshal_ReadObjectFromString",

    "c-api/arg.html#PyArg_ParseTuple": "c-api/arg.html#c.PyArg_ParseTuple",
    "c-api/arg.html#PyArg_VaParse": "c-api/arg.html#c.PyArg_VaParse",
    "c-api/arg.html#PyArg_ParseTupleAndKeywords": "c-api/arg.html#c.PyArg_ParseTupleAndKeywords",
    "c-api/arg.html#PyArg_VaParseTupleAndKeywords": "c-api/arg.html#c.PyArg_VaParseTupleAndKeywords",
    "c-api/arg.html#PyArg_Parse": "c-api/arg.html#c.PyArg_Parse",
    "c-api/arg.html#PyArg_UnpackTuple": "c-api/arg.html#c.PyArg_UnpackTuple",
    "c-api/arg.html#Py_BuildValue": "c-api/arg.html#c.Py_BuildValue",
    "c-api/arg.html#Py_VaBuildValue": "c-api/arg.html#c.Py_VaBuildValue",

    "c-api/conversion.html#PyOS_snprintf": "c-api/conversion.html#c.PyOS_snprintf",
    "c-api/conversion.html#PyOS_vsnprintf": "c-api/conversion.html#c.PyOS_vsnprintf",
    "c-api/conversion.html#PyOS_stricmp": "c-api/conversion.html#c.PyOS_stricmp",
    "c-api/conversion.html#PyOS_strnicmp": "c-api/conversion.html#c.PyOS_strnicmp",

    "c-api/reflection.html#PyEval_GetBuiltins": "c-api/reflection.html#c.PyEval_GetBuiltins",
    "c-api/reflection.html#PyEval_GetLocals": "c-api/reflection.html#c.PyEval_GetLocals",
    "c-api/reflection.html#PyEval_GetGlobals": "c-api/reflection.html#c.PyEval_GetGlobals",
    "c-api/reflection.html#PyEval_GetFrame": "c-api/reflection.html#c.PyEval_GetFrame",
    "c-api/reflection.html#PyEval_GetFuncName": "c-api/reflection.html#c.PyEval_GetFuncName",
    "c-api/reflection.html#PyEval_GetFuncDesc": "c-api/reflection.html#c.PyEval_GetFuncDesc",

    "c-api/object.html#PyObject_Print": "c-api/object.html#c.PyObject_Print",
    "c-api/object.html#PyObject_HasAttr": "c-api/object.html#c.PyObject_HasAttr",
    "c-api/object.html#PyObject_HasAttrString": "c-api/object.html#c.PyObject_HasAttrString",
    "c-api/object.html#PyObject_GetAttr": "c-api/object.html#c.PyObject_GetAttr",
    "c-api/object.html#PyObject_GetAttrString": "c-api/object.html#c.PyObject_GetAttrString",
    "c-api/object.html#PyObject_GenericGetAttr": "c-api/object.html#c.PyObject_GenericGetAttr",
    "c-api/object.html#PyObject_SetAttr": "c-api/object.html#c.PyObject_SetAttr",
    "c-api/object.html#PyObject_SetAttrString": "c-api/object.html#c.PyObject_SetAttrString",
    "c-api/object.html#PyObject_GenericSetAttr": "c-api/object.html#c.PyObject_GenericSetAttr",
    "c-api/object.html#PyObject_DelAttr": "c-api/object.html#c.PyObject_DelAttr",
    "c-api/object.html#PyObject_DelAttrString": "c-api/object.html#c.PyObject_DelAttrString",
    "c-api/object.html#PyObject_RichCompare": "c-api/object.html#c.PyObject_RichCompare",
    "c-api/object.html#PyObject_RichCompareBool": "c-api/object.html#c.PyObject_RichCompareBool",
    "c-api/object.html#PyObject_Repr": "c-api/object.html#c.PyObject_Repr",
    "c-api/object.html#PyObject_Str": "c-api/object.html#c.PyObject_Str",
    "c-api/object.html#PyObject_Bytes": "c-api/object.html#c.PyObject_Bytes",
    "c-api/object.html#PyObject_IsInstance": "c-api/object.html#c.PyObject_IsInstance",
    "c-api/object.html#PyObject_IsSubclass": "c-api/object.html#c.PyObject_IsSubclass",
    "c-api/object.html#PyCallable_Check": "c-api/object.html#c.PyCallable_Check",
    "c-api/object.html#PyObject_Call": "c-api/object.html#c.PyObject_Call",
    "c-api/object.html#PyObject_CallObject": "c-api/object.html#c.PyObject_CallObject",
    "c-api/object.html#PyObject_CallFunction": "c-api/object.html#c.PyObject_CallFunction",
    "c-api/object.html#PyObject_CallMethod": "c-api/object.html#c.PyObject_CallMethod",
    "c-api/object.html#PyObject_CallFunctionObjArgs": "c-api/object.html#c.PyObject_CallFunctionObjArgs",
    "c-api/object.html#PyObject_CallMethodObjArgs": "c-api/object.html#c.PyObject_CallMethodObjArgs",
    "c-api/object.html#PyObject_Hash": "c-api/object.html#c.PyObject_Hash",
    "c-api/object.html#PyObject_HashNotImplemented": "c-api/object.html#c.PyObject_HashNotImplemented",
    "c-api/object.html#PyObject_IsTrue": "c-api/object.html#c.PyObject_IsTrue",
    "c-api/object.html#PyObject_Not": "c-api/object.html#c.PyObject_Not",
    "c-api/object.html#PyObject_Type": "c-api/object.html#c.PyObject_Type",
    "c-api/object.html#PyObject_TypeCheck": "c-api/object.html#c.PyObject_TypeCheck",
    "c-api/object.html#PyObject_Length": "c-api/object.html#c.PyObject_Length",
    "c-api/object.html#PyObject_Size": "c-api/object.html#c.PyObject_Size",
    "c-api/object.html#PyObject_GetItem": "c-api/object.html#c.PyObject_GetItem",
    "c-api/object.html#PyObject_SetItem": "c-api/object.html#c.PyObject_SetItem",
    "c-api/object.html#PyObject_DelItem": "c-api/object.html#c.PyObject_DelItem",
    "c-api/object.html#PyObject_Dir": "c-api/object.html#c.PyObject_Dir",
    "c-api/object.html#PyObject_GetIter": "c-api/object.html#c.PyObject_GetIter",

    "c-api/number.html#PyNumber_Check": "c-api/number.html#c.PyNumber_Check",
    "c-api/number.html#PyNumber_Add": "c-api/number.html#c.PyNumber_Add",
    "c-api/number.html#PyNumber_Subtract": "c-api/number.html#c.PyNumber_Subtract",
    "c-api/number.html#PyNumber_Multiply": "c-api/number.html#c.PyNumber_Multiply",
    "c-api/number.html#PyNumber_FloorDivide": "c-api/number.html#c.PyNumber_FloorDivide",
    "c-api/number.html#PyNumber_TrueDivide": "c-api/number.html#c.PyNumber_TrueDivide",
    "c-api/number.html#PyNumber_Remainder": "c-api/number.html#c.PyNumber_Remainder",
    "c-api/number.html#PyNumber_Divmod": "c-api/number.html#c.PyNumber_Divmod",
    "c-api/number.html#PyNumber_Power": "c-api/number.html#c.PyNumber_Power",
    "c-api/number.html#PyNumber_Negative": "c-api/number.html#c.PyNumber_Negative",
    "c-api/number.html#PyNumber_Positive": "c-api/number.html#c.PyNumber_Positive",
    "c-api/number.html#PyNumber_Absolute": "c-api/number.html#c.PyNumber_Absolute",
    "c-api/number.html#PyNumber_Invert": "c-api/number.html#c.PyNumber_Invert",
    "c-api/number.html#PyNumber_Lshift": "c-api/number.html#c.PyNumber_Lshift",
    "c-api/number.html#PyNumber_Rshift": "c-api/number.html#c.PyNumber_Rshift",
    "c-api/number.html#PyNumber_And": "c-api/number.html#c.PyNumber_And",
    "c-api/number.html#PyNumber_Xor": "c-api/number.html#c.PyNumber_Xor",
    "c-api/number.html#PyNumber_Or": "c-api/number.html#c.PyNumber_Or",
    "c-api/number.html#PyNumber_InPlaceAdd": "c-api/number.html#c.PyNumber_InPlaceAdd",
    "c-api/number.html#PyNumber_InPlaceSubtract": "c-api/number.html#c.PyNumber_InPlaceSubtract",
    "c-api/number.html#PyNumber_InPlaceMultiply": "c-api/number.html#c.PyNumber_InPlaceMultiply",
    "c-api/number.html#PyNumber_InPlaceFloorDivide": "c-api/number.html#c.PyNumber_InPlaceFloorDivide",
    "c-api/number.html#PyNumber_InPlaceTrueDivide": "c-api/number.html#c.PyNumber_InPlaceTrueDivide",
    "c-api/number.html#PyNumber_InPlaceRemainder": "c-api/number.html#c.PyNumber_InPlaceRemainder",
    "c-api/number.html#PyNumber_InPlacePower": "c-api/number.html#c.PyNumber_InPlacePower",
    "c-api/number.html#PyNumber_InPlaceLshift": "c-api/number.html#c.PyNumber_InPlaceLshift",
    "c-api/number.html#PyNumber_InPlaceRshift": "c-api/number.html#c.PyNumber_InPlaceRshift",
    "c-api/number.html#PyNumber_InPlaceAnd": "c-api/number.html#c.PyNumber_InPlaceAnd",
    "c-api/number.html#PyNumber_InPlaceXor": "c-api/number.html#c.PyNumber_InPlaceXor",
    "c-api/number.html#PyNumber_InPlaceOr": "c-api/number.html#c.PyNumber_InPlaceOr",
    "c-api/number.html#PyNumber_Long": "c-api/number.html#c.PyNumber_Long",
    "c-api/number.html#PyNumber_Float": "c-api/number.html#c.PyNumber_Float",
    "c-api/number.html#PyNumber_Index": "c-api/number.html#c.PyNumber_Index",
    "c-api/number.html#PyNumber_ToBase": "c-api/number.html#c.PyNumber_ToBase",
    "c-api/number.html#PyNumber_AsSsize_t": "c-api/number.html#c.PyNumber_AsSsize_t",
    "c-api/number.html#PyIndex_Check": "c-api/number.html#c.PyIndex_Check",

    "c-api/sequence.html#PySequence_Check": "c-api/sequence.html#c.PySequence_Check",
    "c-api/sequence.html#PySequence_Size": "c-api/sequence.html#c.PySequence_Size",
    "c-api/sequence.html#PySequence_Length": "c-api/sequence.html#c.PySequence_Length",
    "c-api/sequence.html#PySequence_Concat": "c-api/sequence.html#c.PySequence_Concat",
    "c-api/sequence.html#PySequence_Repeat": "c-api/sequence.html#c.PySequence_Repeat",
    "c-api/sequence.html#PySequence_InPlaceConcat": "c-api/sequence.html#c.PySequence_InPlaceConcat",
    "c-api/sequence.html#PySequence_InPlaceRepeat": "c-api/sequence.html#c.PySequence_InPlaceRepeat",
    "c-api/sequence.html#PySequence_GetItem": "c-api/sequence.html#c.PySequence_GetItem",
    "c-api/sequence.html#PySequence_GetSlice": "c-api/sequence.html#c.PySequence_GetSlice",
    "c-api/sequence.html#PySequence_SetItem": "c-api/sequence.html#c.PySequence_SetItem",
    "c-api/sequence.html#PySequence_DelItem": "c-api/sequence.html#c.PySequence_DelItem",
    "c-api/sequence.html#PySequence_SetSlice": "c-api/sequence.html#c.PySequence_SetSlice",
    "c-api/sequence.html#PySequence_DelSlice": "c-api/sequence.html#c.PySequence_DelSlice",
    "c-api/sequence.html#PySequence_Count": "c-api/sequence.html#c.PySequence_Count",
    "c-api/sequence.html#PySequence_Contains": "c-api/sequence.html#c.PySequence_Contains",
    "c-api/sequence.html#PySequence_Index": "c-api/sequence.html#c.PySequence_Index",
    "c-api/sequence.html#PySequence_List": "c-api/sequence.html#c.PySequence_List",
    "c-api/sequence.html#PySequence_Tuple": "c-api/sequence.html#c.PySequence_Tuple",
    "c-api/sequence.html#PySequence_Fast": "c-api/sequence.html#c.PySequence_Fast",
    "c-api/sequence.html#PySequence_Fast_GET_ITEM": "c-api/sequence.html#c.PySequence_Fast_GET_ITEM",
    "c-api/sequence.html#PySequence_Fast_ITEMS": "c-api/sequence.html#c.PySequence_Fast_ITEMS",
    "c-api/sequence.html#PySequence_ITEM": "c-api/sequence.html#c.PySequence_ITEM",
    "c-api/sequence.html#PySequence_Fast_GET_SIZE": "c-api/sequence.html#c.PySequence_Fast_GET_SIZE",

    "c-api/mapping.html#PyMapping_Check": "c-api/mapping.html#c.PyMapping_Check",
    "c-api/mapping.html#PyMapping_Size": "c-api/mapping.html#c.PyMapping_Size",
    "c-api/mapping.html#PyMapping_Length": "c-api/mapping.html#c.PyMapping_Length",
    "c-api/mapping.html#PyMapping_DelItemString": "c-api/mapping.html#c.PyMapping_DelItemString",
    "c-api/mapping.html#PyMapping_DelItem": "c-api/mapping.html#c.PyMapping_DelItem",
    "c-api/mapping.html#PyMapping_HasKeyString": "c-api/mapping.html#c.PyMapping_HasKeyString",
    "c-api/mapping.html#PyMapping_HasKey": "c-api/mapping.html#c.PyMapping_HasKey",
    "c-api/mapping.html#PyMapping_Keys": "c-api/mapping.html#c.PyMapping_Keys",
    "c-api/mapping.html#PyMapping_Values": "c-api/mapping.html#c.PyMapping_Values",
    "c-api/mapping.html#PyMapping_Items": "c-api/mapping.html#c.PyMapping_Items",
    "c-api/mapping.html#PyMapping_GetItemString": "c-api/mapping.html#c.PyMapping_GetItemString",
    "c-api/mapping.html#PyMapping_SetItemString": "c-api/mapping.html#c.PyMapping_SetItemString",

    "c-api/iter.html#PyIter_Check": "c-api/iter.html#c.PyIter_Check",
    "c-api/iter.html#PyIter_Next": "c-api/iter.html#c.PyIter_Next",

    "c-api/objbuffer.html#PyObject_AsCharBuffer": "c-api/objbuffer.html#c.PyObject_AsCharBuffer",
    "c-api/objbuffer.html#PyObject_AsReadBuffer": "c-api/objbuffer.html#c.PyObject_AsReadBuffer",
    "c-api/objbuffer.html#PyObject_CheckReadBuffer": "c-api/objbuffer.html#c.PyObject_CheckReadBuffer",
    "c-api/objbuffer.html#PyObject_AsWriteBuffer": "c-api/objbuffer.html#c.PyObject_AsWriteBuffer",

    "c-api/type.html#PyTypeObject": "c-api/type.html#c.PyTypeObject",
    "c-api/type.html#PyType_Type": "c-api/type.html#c.PyType_Type",
    "c-api/type.html#PyType_Check": "c-api/type.html#c.PyType_Check",
    "c-api/type.html#PyType_CheckExact": "c-api/type.html#c.PyType_CheckExact",
    "c-api/type.html#PyType_ClearCache": "c-api/type.html#c.PyType_ClearCache",
    "c-api/type.html#PyType_Modified": "c-api/type.html#c.PyType_Modified",
    "c-api/type.html#PyType_HasFeature": "c-api/type.html#c.PyType_HasFeature",
    "c-api/type.html#PyType_IS_GC": "c-api/type.html#c.PyType_IS_GC",
    "c-api/type.html#PyType_IsSubtype": "c-api/type.html#c.PyType_IsSubtype",
    "c-api/type.html#PyType_GenericAlloc": "c-api/type.html#c.PyType_GenericAlloc",
    "c-api/type.html#PyType_GenericNew": "c-api/type.html#c.PyType_GenericNew",
    "c-api/type.html#PyType_Ready": "c-api/type.html#c.PyType_Ready",

    "c-api/none.html#Py_None": "c-api/none.html#c.Py_None",
    "c-api/none.html#Py_RETURN_NONE": "c-api/none.html#c.Py_RETURN_NONE",

    "c-api/bool.html#PyBool_Check": "c-api/bool.html#c.PyBool_Check",
    "c-api/bool.html#Py_False": "c-api/bool.html#c.Py_False",
    "c-api/bool.html#Py_True": "c-api/bool.html#c.Py_True",
    "c-api/bool.html#Py_RETURN_FALSE": "c-api/bool.html#c.Py_RETURN_FALSE",
    "c-api/bool.html#Py_RETURN_TRUE": "c-api/bool.html#c.Py_RETURN_TRUE",
    "c-api/bool.html#PyBool_FromLong": "c-api/bool.html#c.PyBool_FromLong",

    "c-api/long.html#PyLongObject": "c-api/long.html#c.PyLongObject",
    "c-api/long.html#PyLong_Type": "c-api/long.html#c.PyLong_Type",
    "c-api/long.html#PyLong_Check": "c-api/long.html#c.PyLong_Check",
    "c-api/long.html#PyLong_CheckExact": "c-api/long.html#c.PyLong_CheckExact",
    "c-api/long.html#PyLong_FromLong": "c-api/long.html#c.PyLong_FromLong",
    "c-api/long.html#PyLong_FromUnsignedLong": "c-api/long.html#c.PyLong_FromUnsignedLong",
    "c-api/long.html#PyLong_FromSsize_t": "c-api/long.html#c.PyLong_FromSsize_t",
    "c-api/long.html#PyLong_FromSize_t": "c-api/long.html#c.PyLong_FromSize_t",
    "c-api/long.html#PyLong_FromLongLong": "c-api/long.html#c.PyLong_FromLongLong",
    "c-api/long.html#PyLong_FromUnsignedLongLong": "c-api/long.html#c.PyLong_FromUnsignedLongLong",
    "c-api/long.html#PyLong_FromDouble": "c-api/long.html#c.PyLong_FromDouble",
    "c-api/long.html#PyLong_FromString": "c-api/long.html#c.PyLong_FromString",
    "c-api/long.html#PyLong_FromUnicode": "c-api/long.html#c.PyLong_FromUnicode",
    "c-api/long.html#PyLong_FromVoidPtr": "c-api/long.html#c.PyLong_FromVoidPtr",
    "c-api/long.html#PyLong_AsLong": "c-api/long.html#c.PyLong_AsLong",
    "c-api/long.html#PyLong_AsSsize_t": "c-api/long.html#c.PyLong_AsSsize_t",
    "c-api/long.html#PyLong_AsUnsignedLong": "c-api/long.html#c.PyLong_AsUnsignedLong",
    "c-api/long.html#PyLong_AsLongLong": "c-api/long.html#c.PyLong_AsLongLong",
    "c-api/long.html#PyLong_AsUnsignedLongLong": "c-api/long.html#c.PyLong_AsUnsignedLongLong",
    "c-api/long.html#PyLong_AsUnsignedLongMask": "c-api/long.html#c.PyLong_AsUnsignedLongMask",
    "c-api/long.html#PyLong_AsUnsignedLongLongMask": "c-api/long.html#c.PyLong_AsUnsignedLongLongMask",
    "c-api/long.html#PyLong_AsDouble": "c-api/long.html#c.PyLong_AsDouble",
    "c-api/long.html#PyLong_AsVoidPtr": "c-api/long.html#c.PyLong_AsVoidPtr",

    "c-api/float.html#PyFloatObject": "c-api/float.html#c.PyFloatObject",
    "c-api/float.html#PyFloat_Type": "c-api/float.html#c.PyFloat_Type",
    "c-api/float.html#PyFloat_Check": "c-api/float.html#c.PyFloat_Check",
    "c-api/float.html#PyFloat_CheckExact": "c-api/float.html#c.PyFloat_CheckExact",
    "c-api/float.html#PyFloat_FromString": "c-api/float.html#c.PyFloat_FromString",
    "c-api/float.html#PyFloat_FromDouble": "c-api/float.html#c.PyFloat_FromDouble",
    "c-api/float.html#PyFloat_AsDouble": "c-api/float.html#c.PyFloat_AsDouble",
    "c-api/float.html#PyFloat_AS_DOUBLE": "c-api/float.html#c.PyFloat_AS_DOUBLE",
    "c-api/float.html#PyFloat_GetInfo": "c-api/float.html#c.PyFloat_GetInfo",
    "c-api/float.html#PyFloat_GetMax": "c-api/float.html#c.PyFloat_GetMax",
    "c-api/float.html#PyFloat_GetMin": "c-api/float.html#c.PyFloat_GetMin",
    "c-api/float.html#PyFloat_ClearFreeList": "c-api/float.html#c.PyFloat_ClearFreeList",

    "c-api/complex.html#Py_complex": "c-api/complex.html#c.Py_complex",
    "c-api/complex.html#_Py_c_sum": "c-api/complex.html#c._Py_c_sum",
    "c-api/complex.html#_Py_c_diff": "c-api/complex.html#c._Py_c_diff",
    "c-api/complex.html#_Py_c_neg": "c-api/complex.html#c._Py_c_neg",
    "c-api/complex.html#_Py_c_prod": "c-api/complex.html#c._Py_c_prod",
    "c-api/complex.html#_Py_c_quot": "c-api/complex.html#c._Py_c_quot",
    "c-api/complex.html#_Py_c_pow": "c-api/complex.html#c._Py_c_pow",
    "c-api/complex.html#PyComplexObject": "c-api/complex.html#c.PyComplexObject",
    "c-api/complex.html#PyComplex_Type": "c-api/complex.html#c.PyComplex_Type",
    "c-api/complex.html#PyComplex_Check": "c-api/complex.html#c.PyComplex_Check",
    "c-api/complex.html#PyComplex_CheckExact": "c-api/complex.html#c.PyComplex_CheckExact",
    "c-api/complex.html#PyComplex_FromCComplex": "c-api/complex.html#c.PyComplex_FromCComplex",
    "c-api/complex.html#PyComplex_FromDoubles": "c-api/complex.html#c.PyComplex_FromDoubles",
    "c-api/complex.html#PyComplex_RealAsDouble": "c-api/complex.html#c.PyComplex_RealAsDouble",
    "c-api/complex.html#PyComplex_ImagAsDouble": "c-api/complex.html#c.PyComplex_ImagAsDouble",
    "c-api/complex.html#PyComplex_AsCComplex": "c-api/complex.html#c.PyComplex_AsCComplex",

    "c-api/bytearray.html#PyByteArrayObject": "c-api/bytearray.html#c.PyByteArrayObject",
    "c-api/bytearray.html#PyByteArray_Type": "c-api/bytearray.html#c.PyByteArray_Type",
    "c-api/bytearray.html#PyByteArray_Check": "c-api/bytearray.html#c.PyByteArray_Check",
    "c-api/bytearray.html#PyByteArray_CheckExact": "c-api/bytearray.html#c.PyByteArray_CheckExact",
    "c-api/bytearray.html#PyByteArray_FromObject": "c-api/bytearray.html#c.PyByteArray_FromObject",
    "c-api/bytearray.html#PyByteArray_FromStringAndSize": "c-api/bytearray.html#c.PyByteArray_FromStringAndSize",
    "c-api/bytearray.html#PyByteArray_Concat": "c-api/bytearray.html#c.PyByteArray_Concat",
    "c-api/bytearray.html#PyByteArray_Size": "c-api/bytearray.html#c.PyByteArray_Size",
    "c-api/bytearray.html#PyByteArray_AsString": "c-api/bytearray.html#c.PyByteArray_AsString",
    "c-api/bytearray.html#PyByteArray_Resize": "c-api/bytearray.html#c.PyByteArray_Resize",
    "c-api/bytearray.html#PyByteArray_AS_STRING": "c-api/bytearray.html#c.PyByteArray_AS_STRING",
    "c-api/bytearray.html#PyByteArray_GET_SIZE": "c-api/bytearray.html#c.PyByteArray_GET_SIZE",

    "c-api/unicode.html#Py_UNICODE": "c-api/unicode.html#c.Py_UNICODE",
    "c-api/unicode.html#PyUnicodeObject": "c-api/unicode.html#c.PyUnicodeObject",
    "c-api/unicode.html#PyUnicode_Type": "c-api/unicode.html#c.PyUnicode_Type",
    "c-api/unicode.html#PyUnicode_Check": "c-api/unicode.html#c.PyUnicode_Check",
    "c-api/unicode.html#PyUnicode_CheckExact": "c-api/unicode.html#c.PyUnicode_CheckExact",
    "c-api/unicode.html#PyUnicode_GET_SIZE": "c-api/unicode.html#c.PyUnicode_GET_SIZE",
    "c-api/unicode.html#PyUnicode_GET_DATA_SIZE": "c-api/unicode.html#c.PyUnicode_GET_DATA_SIZE",
    "c-api/unicode.html#PyUnicode_AS_UNICODE": "c-api/unicode.html#c.PyUnicode_AS_UNICODE",
    "c-api/unicode.html#PyUnicode_AS_DATA": "c-api/unicode.html#c.PyUnicode_AS_DATA",
    "c-api/unicode.html#PyUnicode_ClearFreeList": "c-api/unicode.html#c.PyUnicode_ClearFreeList",
    "c-api/unicode.html#Py_UNICODE_ISSPACE": "c-api/unicode.html#c.Py_UNICODE_ISSPACE",
    "c-api/unicode.html#Py_UNICODE_ISLOWER": "c-api/unicode.html#c.Py_UNICODE_ISLOWER",
    "c-api/unicode.html#Py_UNICODE_ISUPPER": "c-api/unicode.html#c.Py_UNICODE_ISUPPER",
    "c-api/unicode.html#Py_UNICODE_ISTITLE": "c-api/unicode.html#c.Py_UNICODE_ISTITLE",
    "c-api/unicode.html#Py_UNICODE_ISLINEBREAK": "c-api/unicode.html#c.Py_UNICODE_ISLINEBREAK",
    "c-api/unicode.html#Py_UNICODE_ISDECIMAL": "c-api/unicode.html#c.Py_UNICODE_ISDECIMAL",
    "c-api/unicode.html#Py_UNICODE_ISDIGIT": "c-api/unicode.html#c.Py_UNICODE_ISDIGIT",
    "c-api/unicode.html#Py_UNICODE_ISNUMERIC": "c-api/unicode.html#c.Py_UNICODE_ISNUMERIC",
    "c-api/unicode.html#Py_UNICODE_ISALPHA": "c-api/unicode.html#c.Py_UNICODE_ISALPHA",
    "c-api/unicode.html#Py_UNICODE_ISALNUM": "c-api/unicode.html#c.Py_UNICODE_ISALNUM",
    "c-api/unicode.html#Py_UNICODE_TOLOWER": "c-api/unicode.html#c.Py_UNICODE_TOLOWER",
    "c-api/unicode.html#Py_UNICODE_TOUPPER": "c-api/unicode.html#c.Py_UNICODE_TOUPPER",
    "c-api/unicode.html#Py_UNICODE_TOTITLE": "c-api/unicode.html#c.Py_UNICODE_TOTITLE",
    "c-api/unicode.html#Py_UNICODE_TODECIMAL": "c-api/unicode.html#c.Py_UNICODE_TODECIMAL",
    "c-api/unicode.html#Py_UNICODE_TODIGIT": "c-api/unicode.html#c.Py_UNICODE_TODIGIT",
    "c-api/unicode.html#Py_UNICODE_TONUMERIC": "c-api/unicode.html#c.Py_UNICODE_TONUMERIC",
    "c-api/unicode.html#PyUnicode_FromUnicode": "c-api/unicode.html#c.PyUnicode_FromUnicode",
    "c-api/unicode.html#PyUnicode_AsUnicode": "c-api/unicode.html#c.PyUnicode_AsUnicode",
    "c-api/unicode.html#PyUnicode_GetSize": "c-api/unicode.html#c.PyUnicode_GetSize",
    "c-api/unicode.html#PyUnicode_FromEncodedObject": "c-api/unicode.html#c.PyUnicode_FromEncodedObject",
    "c-api/unicode.html#PyUnicode_FromObject": "c-api/unicode.html#c.PyUnicode_FromObject",
    "c-api/unicode.html#PyUnicode_FromWideChar": "c-api/unicode.html#c.PyUnicode_FromWideChar",
    "c-api/unicode.html#PyUnicode_AsWideChar": "c-api/unicode.html#c.PyUnicode_AsWideChar",
    "c-api/unicode.html#PyUnicode_Decode": "c-api/unicode.html#c.PyUnicode_Decode",
    "c-api/unicode.html#PyUnicode_Encode": "c-api/unicode.html#c.PyUnicode_Encode",
    "c-api/unicode.html#PyUnicode_AsEncodedString": "c-api/unicode.html#c.PyUnicode_AsEncodedString",
    "c-api/unicode.html#PyUnicode_DecodeUTF8": "c-api/unicode.html#c.PyUnicode_DecodeUTF8",
    "c-api/unicode.html#PyUnicode_DecodeUTF8Stateful": "c-api/unicode.html#c.PyUnicode_DecodeUTF8Stateful",
    "c-api/unicode.html#PyUnicode_EncodeUTF8": "c-api/unicode.html#c.PyUnicode_EncodeUTF8",
    "c-api/unicode.html#PyUnicode_AsUTF8String": "c-api/unicode.html#c.PyUnicode_AsUTF8String",
    "c-api/unicode.html#PyUnicode_DecodeUTF32": "c-api/unicode.html#c.PyUnicode_DecodeUTF32",
    "c-api/unicode.html#PyUnicode_DecodeUTF32Stateful": "c-api/unicode.html#c.PyUnicode_DecodeUTF32Stateful",
    "c-api/unicode.html#PyUnicode_EncodeUTF32": "c-api/unicode.html#c.PyUnicode_EncodeUTF32",
    "c-api/unicode.html#PyUnicode_AsUTF32String": "c-api/unicode.html#c.PyUnicode_AsUTF32String",
    "c-api/unicode.html#PyUnicode_DecodeUTF16": "c-api/unicode.html#c.PyUnicode_DecodeUTF16",
    "c-api/unicode.html#PyUnicode_DecodeUTF16Stateful": "c-api/unicode.html#c.PyUnicode_DecodeUTF16Stateful",
    "c-api/unicode.html#PyUnicode_EncodeUTF16": "c-api/unicode.html#c.PyUnicode_EncodeUTF16",
    "c-api/unicode.html#PyUnicode_AsUTF16String": "c-api/unicode.html#c.PyUnicode_AsUTF16String",
    "c-api/unicode.html#PyUnicode_DecodeUTF7": "c-api/unicode.html#c.PyUnicode_DecodeUTF7",
    "c-api/unicode.html#PyUnicode_EncodeUTF7": "c-api/unicode.html#c.PyUnicode_EncodeUTF7",
    "c-api/unicode.html#PyUnicode_DecodeUnicodeEscape": "c-api/unicode.html#c.PyUnicode_DecodeUnicodeEscape",
    "c-api/unicode.html#PyUnicode_EncodeUnicodeEscape": "c-api/unicode.html#c.PyUnicode_EncodeUnicodeEscape",
    "c-api/unicode.html#PyUnicode_AsUnicodeEscapeString": "c-api/unicode.html#c.PyUnicode_AsUnicodeEscapeString",
    "c-api/unicode.html#PyUnicode_DecodeRawUnicodeEscape": "c-api/unicode.html#c.PyUnicode_DecodeRawUnicodeEscape",
    "c-api/unicode.html#PyUnicode_EncodeRawUnicodeEscape": "c-api/unicode.html#c.PyUnicode_EncodeRawUnicodeEscape",
    "c-api/unicode.html#PyUnicode_AsRawUnicodeEscapeString": "c-api/unicode.html#c.PyUnicode_AsRawUnicodeEscapeString",
    "c-api/unicode.html#PyUnicode_DecodeLatin1": "c-api/unicode.html#c.PyUnicode_DecodeLatin1",
    "c-api/unicode.html#PyUnicode_EncodeLatin1": "c-api/unicode.html#c.PyUnicode_EncodeLatin1",
    "c-api/unicode.html#PyUnicode_AsLatin1String": "c-api/unicode.html#c.PyUnicode_AsLatin1String",
    "c-api/unicode.html#PyUnicode_DecodeASCII": "c-api/unicode.html#c.PyUnicode_DecodeASCII",
    "c-api/unicode.html#PyUnicode_EncodeASCII": "c-api/unicode.html#c.PyUnicode_EncodeASCII",
    "c-api/unicode.html#PyUnicode_AsASCIIString": "c-api/unicode.html#c.PyUnicode_AsASCIIString",
    "c-api/unicode.html#PyUnicode_DecodeCharmap": "c-api/unicode.html#c.PyUnicode_DecodeCharmap",
    "c-api/unicode.html#PyUnicode_EncodeCharmap": "c-api/unicode.html#c.PyUnicode_EncodeCharmap",
    "c-api/unicode.html#PyUnicode_AsCharmapString": "c-api/unicode.html#c.PyUnicode_AsCharmapString",
    "c-api/unicode.html#PyUnicode_TranslateCharmap": "c-api/unicode.html#c.PyUnicode_TranslateCharmap",
    "c-api/unicode.html#PyUnicode_DecodeMBCS": "c-api/unicode.html#c.PyUnicode_DecodeMBCS",
    "c-api/unicode.html#PyUnicode_DecodeMBCSStateful": "c-api/unicode.html#c.PyUnicode_DecodeMBCSStateful",
    "c-api/unicode.html#PyUnicode_EncodeMBCS": "c-api/unicode.html#c.PyUnicode_EncodeMBCS",
    "c-api/unicode.html#PyUnicode_AsMBCSString": "c-api/unicode.html#c.PyUnicode_AsMBCSString",
    "c-api/unicode.html#PyUnicode_Concat": "c-api/unicode.html#c.PyUnicode_Concat",
    "c-api/unicode.html#PyUnicode_Split": "c-api/unicode.html#c.PyUnicode_Split",
    "c-api/unicode.html#PyUnicode_Splitlines": "c-api/unicode.html#c.PyUnicode_Splitlines",
    "c-api/unicode.html#PyUnicode_Translate": "c-api/unicode.html#c.PyUnicode_Translate",
    "c-api/unicode.html#PyUnicode_Join": "c-api/unicode.html#c.PyUnicode_Join",
    "c-api/unicode.html#PyUnicode_Tailmatch": "c-api/unicode.html#c.PyUnicode_Tailmatch",
    "c-api/unicode.html#PyUnicode_Find": "c-api/unicode.html#c.PyUnicode_Find",
    "c-api/unicode.html#PyUnicode_Count": "c-api/unicode.html#c.PyUnicode_Count",
    "c-api/unicode.html#PyUnicode_Replace": "c-api/unicode.html#c.PyUnicode_Replace",
    "c-api/unicode.html#PyUnicode_Compare": "c-api/unicode.html#c.PyUnicode_Compare",
    "c-api/unicode.html#PyUnicode_RichCompare": "c-api/unicode.html#c.PyUnicode_RichCompare",
    "c-api/unicode.html#PyUnicode_Format": "c-api/unicode.html#c.PyUnicode_Format",
    "c-api/unicode.html#PyUnicode_Contains": "c-api/unicode.html#c.PyUnicode_Contains",

    "c-api/buffer.html#Py_buffer": "c-api/buffer.html#c.Py_buffer",
    "c-api/buffer.html#buf": "c-api/buffer.html#c.Py_buffer.buf",
    "c-api/buffer.html#readonly": "c-api/buffer.html#c.Py_buffer.readonly",
    "c-api/buffer.html#ndim": "c-api/buffer.html#c.Py_buffer.ndim",
    "c-api/buffer.html#shape": "c-api/buffer.html#c.Py_buffer.shape",
    "c-api/buffer.html#strides": "c-api/buffer.html#c.Py_buffer.strides",
    "c-api/buffer.html#suboffsets": "c-api/buffer.html#c.Py_buffer.suboffsets",
    "c-api/buffer.html#itemsize": "c-api/buffer.html#c.Py_buffer.itemsize",
    "c-api/buffer.html#internal": "c-api/buffer.html#c.Py_buffer.internal",
    "c-api/buffer.html#PyObject_CheckBuffer": "c-api/buffer.html#c.PyObject_CheckBuffer",
    "c-api/buffer.html#PyObject_GetBuffer": "c-api/buffer.html#c.PyObject_GetBuffer",
    "c-api/buffer.html#PyBuffer_Release": "c-api/buffer.html#c.PyBuffer_Release",
    "c-api/buffer.html#PyBuffer_SizeFromFormat": "c-api/buffer.html#c.PyBuffer_SizeFromFormat",
    "c-api/buffer.html#PyBuffer_IsContiguous": "c-api/buffer.html#c.PyBuffer_IsContiguous",
    "c-api/buffer.html#PyBuffer_FillContiguousStrides": "c-api/buffer.html#c.PyBuffer_FillContiguousStrides",
    "c-api/buffer.html#PyBuffer_FillInfo": "c-api/buffer.html#c.PyBuffer_FillInfo",

    "c-api/tuple.html#PyTupleObject": "c-api/tuple.html#c.PyTupleObject",
    "c-api/tuple.html#PyTuple_Type": "c-api/tuple.html#c.PyTuple_Type",
    "c-api/tuple.html#PyTuple_Check": "c-api/tuple.html#c.PyTuple_Check",
    "c-api/tuple.html#PyTuple_CheckExact": "c-api/tuple.html#c.PyTuple_CheckExact",
    "c-api/tuple.html#PyTuple_New": "c-api/tuple.html#c.PyTuple_New",
    "c-api/tuple.html#PyTuple_Pack": "c-api/tuple.html#c.PyTuple_Pack",
    "c-api/tuple.html#PyTuple_Size": "c-api/tuple.html#c.PyTuple_Size",
    "c-api/tuple.html#PyTuple_GET_SIZE": "c-api/tuple.html#c.PyTuple_GET_SIZE",
    "c-api/tuple.html#PyTuple_GetItem": "c-api/tuple.html#c.PyTuple_GetItem",
    "c-api/tuple.html#PyTuple_GET_ITEM": "c-api/tuple.html#c.PyTuple_GET_ITEM",
    "c-api/tuple.html#PyTuple_GetSlice": "c-api/tuple.html#c.PyTuple_GetSlice",
    "c-api/tuple.html#PyTuple_SetItem": "c-api/tuple.html#c.PyTuple_SetItem",
    "c-api/tuple.html#PyTuple_SET_ITEM": "c-api/tuple.html#c.PyTuple_SET_ITEM",
    "c-api/tuple.html#_PyTuple_Resize": "c-api/tuple.html#c._PyTuple_Resize",
    "c-api/tuple.html#PyTuple_ClearFreeList": "c-api/tuple.html#c.PyTuple_ClearFreeList",

    "c-api/list.html#PyListObject": "c-api/list.html#c.PyListObject",
    "c-api/list.html#PyList_Type": "c-api/list.html#c.PyList_Type",
    "c-api/list.html#PyList_Check": "c-api/list.html#c.PyList_Check",
    "c-api/list.html#PyList_CheckExact": "c-api/list.html#c.PyList_CheckExact",
    "c-api/list.html#PyList_New": "c-api/list.html#c.PyList_New",
    "c-api/list.html#PyList_Size": "c-api/list.html#c.PyList_Size",
    "c-api/list.html#PyList_GET_SIZE": "c-api/list.html#c.PyList_GET_SIZE",
    "c-api/list.html#PyList_GetItem": "c-api/list.html#c.PyList_GetItem",
    "c-api/list.html#PyList_GET_ITEM": "c-api/list.html#c.PyList_GET_ITEM",
    "c-api/list.html#PyList_SetItem": "c-api/list.html#c.PyList_SetItem",
    "c-api/list.html#PyList_SET_ITEM": "c-api/list.html#c.PyList_SET_ITEM",
    "c-api/list.html#PyList_Insert": "c-api/list.html#c.PyList_Insert",
    "c-api/list.html#PyList_Append": "c-api/list.html#c.PyList_Append",
    "c-api/list.html#PyList_GetSlice": "c-api/list.html#c.PyList_GetSlice",
    "c-api/list.html#PyList_SetSlice": "c-api/list.html#c.PyList_SetSlice",
    "c-api/list.html#PyList_Sort": "c-api/list.html#c.PyList_Sort",
    "c-api/list.html#PyList_Reverse": "c-api/list.html#c.PyList_Reverse",
    "c-api/list.html#PyList_AsTuple": "c-api/list.html#c.PyList_AsTuple",

    "c-api/dict.html#PyDictObject": "c-api/dict.html#c.PyDictObject",
    "c-api/dict.html#PyDict_Type": "c-api/dict.html#c.PyDict_Type",
    "c-api/dict.html#PyDict_Check": "c-api/dict.html#c.PyDict_Check",
    "c-api/dict.html#PyDict_CheckExact": "c-api/dict.html#c.PyDict_CheckExact",
    "c-api/dict.html#PyDict_New": "c-api/dict.html#c.PyDict_New",
    "c-api/dict.html#PyDictProxy_New": "c-api/dict.html#c.PyDictProxy_New",
    "c-api/dict.html#PyDict_Clear": "c-api/dict.html#c.PyDict_Clear",
    "c-api/dict.html#PyDict_Contains": "c-api/dict.html#c.PyDict_Contains",
    "c-api/dict.html#PyDict_Copy": "c-api/dict.html#c.PyDict_Copy",
    "c-api/dict.html#PyDict_SetItem": "c-api/dict.html#c.PyDict_SetItem",
    "c-api/dict.html#PyDict_SetItemString": "c-api/dict.html#c.PyDict_SetItemString",
    "c-api/dict.html#PyDict_DelItem": "c-api/dict.html#c.PyDict_DelItem",
    "c-api/dict.html#PyDict_DelItemString": "c-api/dict.html#c.PyDict_DelItemString",
    "c-api/dict.html#PyDict_GetItem": "c-api/dict.html#c.PyDict_GetItem",
    "c-api/dict.html#PyDict_GetItemString": "c-api/dict.html#c.PyDict_GetItemString",
    "c-api/dict.html#PyDict_Items": "c-api/dict.html#c.PyDict_Items",
    "c-api/dict.html#PyDict_Keys": "c-api/dict.html#c.PyDict_Keys",
    "c-api/dict.html#PyDict_Values": "c-api/dict.html#c.PyDict_Values",
    "c-api/dict.html#PyDict_Size": "c-api/dict.html#c.PyDict_Size",
    "c-api/dict.html#PyDict_Next": "c-api/dict.html#c.PyDict_Next",
    "c-api/dict.html#PyDict_Merge": "c-api/dict.html#c.PyDict_Merge",
    "c-api/dict.html#PyDict_Update": "c-api/dict.html#c.PyDict_Update",
    "c-api/dict.html#PyDict_MergeFromSeq2": "c-api/dict.html#c.PyDict_MergeFromSeq2",

    "c-api/function.html#PyFunctionObject": "c-api/function.html#c.PyFunctionObject",
    "c-api/function.html#PyFunction_Type": "c-api/function.html#c.PyFunction_Type",
    "c-api/function.html#PyFunction_Check": "c-api/function.html#c.PyFunction_Check",
    "c-api/function.html#PyFunction_New": "c-api/function.html#c.PyFunction_New",
    "c-api/function.html#PyFunction_GetCode": "c-api/function.html#c.PyFunction_GetCode",
    "c-api/function.html#PyFunction_GetGlobals": "c-api/function.html#c.PyFunction_GetGlobals",
    "c-api/function.html#PyFunction_GetModule": "c-api/function.html#c.PyFunction_GetModule",
    "c-api/function.html#PyFunction_GetDefaults": "c-api/function.html#c.PyFunction_GetDefaults",
    "c-api/function.html#PyFunction_SetDefaults": "c-api/function.html#c.PyFunction_SetDefaults",
    "c-api/function.html#PyFunction_GetClosure": "c-api/function.html#c.PyFunction_GetClosure",
    "c-api/function.html#PyFunction_SetClosure": "c-api/function.html#c.PyFunction_SetClosure",

    "c-api/method.html#PyMethod_Type": "c-api/method.html#c.PyMethod_Type",
    "c-api/method.html#PyMethod_Check": "c-api/method.html#c.PyMethod_Check",
    "c-api/method.html#PyMethod_New": "c-api/method.html#c.PyMethod_New",
    "c-api/method.html#PyMethod_Function": "c-api/method.html#c.PyMethod_Function",
    "c-api/method.html#PyMethod_GET_FUNCTION": "c-api/method.html#c.PyMethod_GET_FUNCTION",
    "c-api/method.html#PyMethod_Self": "c-api/method.html#c.PyMethod_Self",
    "c-api/method.html#PyMethod_GET_SELF": "c-api/method.html#c.PyMethod_GET_SELF",
    "c-api/method.html#PyMethod_ClearFreeList": "c-api/method.html#c.PyMethod_ClearFreeList",

    "c-api/file.html#PyFile_GetLine": "c-api/file.html#c.PyFile_GetLine",
    "c-api/file.html#PyFile_WriteObject": "c-api/file.html#c.PyFile_WriteObject",
    "c-api/file.html#PyFile_WriteString": "c-api/file.html#c.PyFile_WriteString",

    "c-api/module.html#PyModule_Type": "c-api/module.html#c.PyModule_Type",
    "c-api/module.html#PyModule_Check": "c-api/module.html#c.PyModule_Check",
    "c-api/module.html#PyModule_CheckExact": "c-api/module.html#c.PyModule_CheckExact",
    "c-api/module.html#PyModule_New": "c-api/module.html#c.PyModule_New",
    "c-api/module.html#PyModule_GetDict": "c-api/module.html#c.PyModule_GetDict",
    "c-api/module.html#PyModule_GetName": "c-api/module.html#c.PyModule_GetName",
    "c-api/module.html#PyModule_GetFilename": "c-api/module.html#c.PyModule_GetFilename",
    "c-api/module.html#PyModule_AddObject": "c-api/module.html#c.PyModule_AddObject",
    "c-api/module.html#PyModule_AddIntConstant": "c-api/module.html#c.PyModule_AddIntConstant",
    "c-api/module.html#PyModule_AddStringConstant": "c-api/module.html#c.PyModule_AddStringConstant",
    "c-api/module.html#PyModule_AddIntMacro": "c-api/module.html#c.PyModule_AddIntMacro",
    "c-api/module.html#PyModule_AddStringMacro": "c-api/module.html#c.PyModule_AddStringMacro",

    "c-api/iterator.html#PySeqIter_Type": "c-api/iterator.html#c.PySeqIter_Type",
    "c-api/iterator.html#PySeqIter_Check": "c-api/iterator.html#c.PySeqIter_Check",
    "c-api/iterator.html#PySeqIter_New": "c-api/iterator.html#c.PySeqIter_New",
    "c-api/iterator.html#PyCallIter_Type": "c-api/iterator.html#c.PyCallIter_Type",
    "c-api/iterator.html#PyCallIter_Check": "c-api/iterator.html#c.PyCallIter_Check",
    "c-api/iterator.html#PyCallIter_New": "c-api/iterator.html#c.PyCallIter_New",

    "c-api/descriptor.html#PyProperty_Type": "c-api/descriptor.html#c.PyProperty_Type",
    "c-api/descriptor.html#PyDescr_NewGetSet": "c-api/descriptor.html#c.PyDescr_NewGetSet",
    "c-api/descriptor.html#PyDescr_NewMember": "c-api/descriptor.html#c.PyDescr_NewMember",
    "c-api/descriptor.html#PyDescr_NewMethod": "c-api/descriptor.html#c.PyDescr_NewMethod",
    "c-api/descriptor.html#PyDescr_NewWrapper": "c-api/descriptor.html#c.PyDescr_NewWrapper",
    "c-api/descriptor.html#PyDescr_NewClassMethod": "c-api/descriptor.html#c.PyDescr_NewClassMethod",
    "c-api/descriptor.html#PyDescr_IsData": "c-api/descriptor.html#c.PyDescr_IsData",
    "c-api/descriptor.html#PyWrapper_New": "c-api/descriptor.html#c.PyWrapper_New",

    "c-api/slice.html#PySlice_Type": "c-api/slice.html#c.PySlice_Type",
    "c-api/slice.html#PySlice_Check": "c-api/slice.html#c.PySlice_Check",
    "c-api/slice.html#PySlice_New": "c-api/slice.html#c.PySlice_New",
    "c-api/slice.html#PySlice_GetIndices": "c-api/slice.html#c.PySlice_GetIndices",
    "c-api/slice.html#PySlice_GetIndicesEx": "c-api/slice.html#c.PySlice_GetIndicesEx",

    "c-api/weakref.html#PyWeakref_Check": "c-api/weakref.html#c.PyWeakref_Check",
    "c-api/weakref.html#PyWeakref_CheckRef": "c-api/weakref.html#c.PyWeakref_CheckRef",
    "c-api/weakref.html#PyWeakref_CheckProxy": "c-api/weakref.html#c.PyWeakref_CheckProxy",
    "c-api/weakref.html#PyWeakref_NewRef": "c-api/weakref.html#c.PyWeakref_NewRef",
    "c-api/weakref.html#PyWeakref_NewProxy": "c-api/weakref.html#c.PyWeakref_NewProxy",
    "c-api/weakref.html#PyWeakref_GetObject": "c-api/weakref.html#c.PyWeakref_GetObject",
    "c-api/weakref.html#PyWeakref_GET_OBJECT": "c-api/weakref.html#c.PyWeakref_GET_OBJECT",

    "c-api/cell.html#PyCellObject": "c-api/cell.html#c.PyCellObject",
    "c-api/cell.html#PyCell_Type": "c-api/cell.html#c.PyCell_Type",
    "c-api/cell.html#PyCell_Check": "c-api/cell.html#c.PyCell_Check",
    "c-api/cell.html#PyCell_New": "c-api/cell.html#c.PyCell_New",
    "c-api/cell.html#PyCell_Get": "c-api/cell.html#c.PyCell_Get",
    "c-api/cell.html#PyCell_GET": "c-api/cell.html#c.PyCell_GET",
    "c-api/cell.html#PyCell_Set": "c-api/cell.html#c.PyCell_Set",
    "c-api/cell.html#PyCell_SET": "c-api/cell.html#c.PyCell_SET",

    "c-api/gen.html#PyGenObject": "c-api/gen.html#c.PyGenObject",
    "c-api/gen.html#PyGen_Type": "c-api/gen.html#c.PyGen_Type",
    "c-api/gen.html#PyGen_Check": "c-api/gen.html#c.PyGen_Check",
    "c-api/gen.html#PyGen_CheckExact": "c-api/gen.html#c.PyGen_CheckExact",
    "c-api/gen.html#PyGen_New": "c-api/gen.html#c.PyGen_New",

    "c-api/datetime.html#PyDate_Check": "c-api/datetime.html#c.PyDate_Check",
    "c-api/datetime.html#PyDate_CheckExact": "c-api/datetime.html#c.PyDate_CheckExact",
    "c-api/datetime.html#PyDateTime_Check": "c-api/datetime.html#c.PyDateTime_Check",
    "c-api/datetime.html#PyDateTime_CheckExact": "c-api/datetime.html#c.PyDateTime_CheckExact",
    "c-api/datetime.html#PyTime_Check": "c-api/datetime.html#c.PyTime_Check",
    "c-api/datetime.html#PyTime_CheckExact": "c-api/datetime.html#c.PyTime_CheckExact",
    "c-api/datetime.html#PyDelta_Check": "c-api/datetime.html#c.PyDelta_Check",
    "c-api/datetime.html#PyDelta_CheckExact": "c-api/datetime.html#c.PyDelta_CheckExact",
    "c-api/datetime.html#PyTZInfo_Check": "c-api/datetime.html#c.PyTZInfo_Check",
    "c-api/datetime.html#PyTZInfo_CheckExact": "c-api/datetime.html#c.PyTZInfo_CheckExact",
    "c-api/datetime.html#PyDate_FromDate": "c-api/datetime.html#c.PyDate_FromDate",
    "c-api/datetime.html#PyDateTime_FromDateAndTime": "c-api/datetime.html#c.PyDateTime_FromDateAndTime",
    "c-api/datetime.html#PyTime_FromTime": "c-api/datetime.html#c.PyTime_FromTime",
    "c-api/datetime.html#PyDelta_FromDSU": "c-api/datetime.html#c.PyDelta_FromDSU",
    "c-api/datetime.html#PyDateTime_GET_YEAR": "c-api/datetime.html#c.PyDateTime_GET_YEAR",
    "c-api/datetime.html#PyDateTime_GET_MONTH": "c-api/datetime.html#c.PyDateTime_GET_MONTH",
    "c-api/datetime.html#PyDateTime_GET_DAY": "c-api/datetime.html#c.PyDateTime_GET_DAY",
    "c-api/datetime.html#PyDateTime_DATE_GET_HOUR": "c-api/datetime.html#c.PyDateTime_DATE_GET_HOUR",
    "c-api/datetime.html#PyDateTime_DATE_GET_MINUTE": "c-api/datetime.html#c.PyDateTime_DATE_GET_MINUTE",
    "c-api/datetime.html#PyDateTime_DATE_GET_SECOND": "c-api/datetime.html#c.PyDateTime_DATE_GET_SECOND",
    "c-api/datetime.html#PyDateTime_DATE_GET_MICROSECOND": "c-api/datetime.html#c.PyDateTime_DATE_GET_MICROSECOND",
    "c-api/datetime.html#PyDateTime_TIME_GET_HOUR": "c-api/datetime.html#c.PyDateTime_TIME_GET_HOUR",
    "c-api/datetime.html#PyDateTime_TIME_GET_MINUTE": "c-api/datetime.html#c.PyDateTime_TIME_GET_MINUTE",
    "c-api/datetime.html#PyDateTime_TIME_GET_SECOND": "c-api/datetime.html#c.PyDateTime_TIME_GET_SECOND",
    "c-api/datetime.html#PyDateTime_TIME_GET_MICROSECOND": "c-api/datetime.html#c.PyDateTime_TIME_GET_MICROSECOND",
    "c-api/datetime.html#PyDateTime_FromTimestamp": "c-api/datetime.html#c.PyDateTime_FromTimestamp",
    "c-api/datetime.html#PyDate_FromTimestamp": "c-api/datetime.html#c.PyDate_FromTimestamp",

    "c-api/set.html#PySetObject": "c-api/set.html#c.PySetObject",
    "c-api/set.html#PySet_Type": "c-api/set.html#c.PySet_Type",
    "c-api/set.html#PyFrozenSet_Type": "c-api/set.html#c.PyFrozenSet_Type",
    "c-api/set.html#PySet_Check": "c-api/set.html#c.PySet_Check",
    "c-api/set.html#PyFrozenSet_Check": "c-api/set.html#c.PyFrozenSet_Check",
    "c-api/set.html#PyAnySet_Check": "c-api/set.html#c.PyAnySet_Check",
    "c-api/set.html#PyAnySet_CheckExact": "c-api/set.html#c.PyAnySet_CheckExact",
    "c-api/set.html#PyFrozenSet_CheckExact": "c-api/set.html#c.PyFrozenSet_CheckExact",
    "c-api/set.html#PySet_New": "c-api/set.html#c.PySet_New",
    "c-api/set.html#PyFrozenSet_New": "c-api/set.html#c.PyFrozenSet_New",
    "c-api/set.html#PySet_Size": "c-api/set.html#c.PySet_Size",
    "c-api/set.html#PySet_GET_SIZE": "c-api/set.html#c.PySet_GET_SIZE",
    "c-api/set.html#PySet_Contains": "c-api/set.html#c.PySet_Contains",
    "c-api/set.html#PySet_Add": "c-api/set.html#c.PySet_Add",
    "c-api/set.html#PySet_Discard": "c-api/set.html#c.PySet_Discard",
    "c-api/set.html#PySet_Pop": "c-api/set.html#c.PySet_Pop",
    "c-api/set.html#PySet_Clear": "c-api/set.html#c.PySet_Clear",

    "c-api/init.html#Py_Initialize": "c-api/init.html#c.Py_Initialize",
    "c-api/init.html#Py_InitializeEx": "c-api/init.html#c.Py_InitializeEx",
    "c-api/init.html#Py_IsInitialized": "c-api/init.html#c.Py_IsInitialized",
    "c-api/init.html#Py_Finalize": "c-api/init.html#c.Py_Finalize",
    "c-api/init.html#Py_NewInterpreter": "c-api/init.html#c.Py_NewInterpreter",
    "c-api/init.html#Py_EndInterpreter": "c-api/init.html#c.Py_EndInterpreter",
    "c-api/init.html#Py_SetProgramName": "c-api/init.html#c.Py_SetProgramName",
    "c-api/init.html#Py_GetProgramName": "c-api/init.html#c.Py_GetProgramName",
    "c-api/init.html#Py_GetPrefix": "c-api/init.html#c.Py_GetPrefix",
    "c-api/init.html#Py_GetExecPrefix": "c-api/init.html#c.Py_GetExecPrefix",
    "c-api/init.html#Py_GetProgramFullPath": "c-api/init.html#c.Py_GetProgramFullPath",
    "c-api/init.html#Py_GetPath": "c-api/init.html#c.Py_GetPath",
    "c-api/init.html#Py_GetVersion": "c-api/init.html#c.Py_GetVersion",
    "c-api/init.html#Py_GetPlatform": "c-api/init.html#c.Py_GetPlatform",
    "c-api/init.html#Py_GetCopyright": "c-api/init.html#c.Py_GetCopyright",
    "c-api/init.html#Py_GetCompiler": "c-api/init.html#c.Py_GetCompiler",
    "c-api/init.html#Py_GetBuildInfo": "c-api/init.html#c.Py_GetBuildInfo",
    "c-api/init.html#PySys_SetArgvEx": "c-api/init.html#c.PySys_SetArgvEx",
    "c-api/init.html#PySys_SetArgv": "c-api/init.html#c.PySys_SetArgv",
    "c-api/init.html#Py_SetPythonHome": "c-api/init.html#c.Py_SetPythonHome",
    "c-api/init.html#Py_GetPythonHome": "c-api/init.html#c.Py_GetPythonHome",
    "c-api/init.html#PyInterpreterState": "c-api/init.html#c.PyInterpreterState",
    "c-api/init.html#PyThreadState": "c-api/init.html#c.PyThreadState",
    "c-api/init.html#PyEval_InitThreads": "c-api/init.html#c.PyEval_InitThreads",
    "c-api/init.html#PyEval_ThreadsInitialized": "c-api/init.html#c.PyEval_ThreadsInitialized",
    "c-api/init.html#PyEval_AcquireLock": "c-api/init.html#c.PyEval_AcquireLock",
    "c-api/init.html#PyEval_ReleaseLock": "c-api/init.html#c.PyEval_ReleaseLock",
    "c-api/init.html#PyEval_AcquireThread": "c-api/init.html#c.PyEval_AcquireThread",
    "c-api/init.html#PyEval_ReleaseThread": "c-api/init.html#c.PyEval_ReleaseThread",
    "c-api/init.html#PyEval_SaveThread": "c-api/init.html#c.PyEval_SaveThread",
    "c-api/init.html#PyEval_RestoreThread": "c-api/init.html#c.PyEval_RestoreThread",
    "c-api/init.html#Py_BEGIN_ALLOW_THREADS": "c-api/init.html#c.Py_BEGIN_ALLOW_THREADS",
    "c-api/init.html#Py_END_ALLOW_THREADS": "c-api/init.html#c.Py_END_ALLOW_THREADS",
    "c-api/init.html#Py_BLOCK_THREADS": "c-api/init.html#c.Py_BLOCK_THREADS",
    "c-api/init.html#Py_UNBLOCK_THREADS": "c-api/init.html#c.Py_UNBLOCK_THREADS",
    "c-api/init.html#PyInterpreterState_New": "c-api/init.html#c.PyInterpreterState_New",
    "c-api/init.html#PyInterpreterState_Clear": "c-api/init.html#c.PyInterpreterState_Clear",
    "c-api/init.html#PyInterpreterState_Delete": "c-api/init.html#c.PyInterpreterState_Delete",
    "c-api/init.html#PyThreadState_New": "c-api/init.html#c.PyThreadState_New",
    "c-api/init.html#PyThreadState_Clear": "c-api/init.html#c.PyThreadState_Clear",
    "c-api/init.html#PyThreadState_Delete": "c-api/init.html#c.PyThreadState_Delete",
    "c-api/init.html#PyThreadState_Get": "c-api/init.html#c.PyThreadState_Get",
    "c-api/init.html#PyThreadState_Swap": "c-api/init.html#c.PyThreadState_Swap",
    "c-api/init.html#PyThreadState_GetDict": "c-api/init.html#c.PyThreadState_GetDict",
    "c-api/init.html#PyThreadState_SetAsyncExc": "c-api/init.html#c.PyThreadState_SetAsyncExc",
    "c-api/init.html#PyGILState_Ensure": "c-api/init.html#c.PyGILState_Ensure",
    "c-api/init.html#PyGILState_Release": "c-api/init.html#c.PyGILState_Release",
    "c-api/init.html#Py_tracefunc": "c-api/init.html#c.Py_tracefunc",
    "c-api/init.html#PyTrace_CALL": "c-api/init.html#c.PyTrace_CALL",
    "c-api/init.html#PyTrace_EXCEPTION": "c-api/init.html#c.PyTrace_EXCEPTION",
    "c-api/init.html#PyTrace_LINE": "c-api/init.html#c.PyTrace_LINE",
    "c-api/init.html#PyTrace_RETURN": "c-api/init.html#c.PyTrace_RETURN",
    "c-api/init.html#PyTrace_C_CALL": "c-api/init.html#c.PyTrace_C_CALL",
    "c-api/init.html#PyTrace_C_EXCEPTION": "c-api/init.html#c.PyTrace_C_EXCEPTION",
    "c-api/init.html#PyTrace_C_RETURN": "c-api/init.html#c.PyTrace_C_RETURN",
    "c-api/init.html#PyEval_SetProfile": "c-api/init.html#c.PyEval_SetProfile",
    "c-api/init.html#PyEval_SetTrace": "c-api/init.html#c.PyEval_SetTrace",
    "c-api/init.html#PyInterpreterState_Head": "c-api/init.html#c.PyInterpreterState_Head",
    "c-api/init.html#PyInterpreterState_Next": "c-api/init.html#c.PyInterpreterState_Next",
    "c-api/init.html#PyInterpreterState_ThreadHead": "c-api/init.html#c.PyInterpreterState_ThreadHead",
    "c-api/init.html#PyThreadState_Next": "c-api/init.html#c.PyThreadState_Next",

    "c-api/memory.html#PyMem_Malloc": "c-api/memory.html#c.PyMem_Malloc",
    "c-api/memory.html#PyMem_Realloc": "c-api/memory.html#c.PyMem_Realloc",
    "c-api/memory.html#PyMem_Free": "c-api/memory.html#c.PyMem_Free",
    "c-api/memory.html#PyMem_New": "c-api/memory.html#c.PyMem_New",
    "c-api/memory.html#PyMem_Resize": "c-api/memory.html#c.PyMem_Resize",
    "c-api/memory.html#PyMem_Del": "c-api/memory.html#c.PyMem_Del",

    "c-api/allocation.html#_PyObject_New": "c-api/allocation.html#c._PyObject_New",
    "c-api/allocation.html#_PyObject_NewVar": "c-api/allocation.html#c._PyObject_NewVar",
    "c-api/allocation.html#PyObject_Init": "c-api/allocation.html#c.PyObject_Init",
    "c-api/allocation.html#PyObject_InitVar": "c-api/allocation.html#c.PyObject_InitVar",
    "c-api/allocation.html#PyObject_New": "c-api/allocation.html#c.PyObject_New",
    "c-api/allocation.html#PyObject_NewVar": "c-api/allocation.html#c.PyObject_NewVar",
    "c-api/allocation.html#PyObject_Del": "c-api/allocation.html#c.PyObject_Del",
    "c-api/allocation.html#_Py_NoneStruct": "c-api/allocation.html#c._Py_NoneStruct",

    "c-api/structures.html#PyObject": "c-api/structures.html#c.PyObject",
    "c-api/structures.html#PyVarObject": "c-api/structures.html#c.PyVarObject",
    "c-api/structures.html#PyObject_HEAD": "c-api/structures.html#c.PyObject_HEAD",
    "c-api/structures.html#PyObject_VAR_HEAD": "c-api/structures.html#c.PyObject_VAR_HEAD",
    "c-api/structures.html#PyObject_HEAD_INIT": "c-api/structures.html#c.PyObject_HEAD_INIT",
    "c-api/structures.html#PyVarObject_HEAD_INIT": "c-api/structures.html#c.PyVarObject_HEAD_INIT",
    "c-api/structures.html#PyCFunction": "c-api/structures.html#c.PyCFunction",
    "c-api/structures.html#PyMethodDef": "c-api/structures.html#c.PyMethodDef",
    "c-api/structures.html#PyMemberDef": "c-api/structures.html#c.PyMemberDef",

    "c-api/typeobj.html#PyNumberMethods": "c-api/typeobj.html#c.PyNumberMethods",
    "c-api/typeobj.html#PyMappingMethods": "c-api/typeobj.html#c.PyMappingMethods",
    "c-api/typeobj.html#PySequenceMethods": "c-api/typeobj.html#c.PySequenceMethods",
    "c-api/typeobj.html#PyBufferProcs": "c-api/typeobj.html#c.PyBufferProcs",

    "c-api/gcsupport.html#PyObject_GC_New": "c-api/gcsupport.html#c.PyObject_GC_New",
    "c-api/gcsupport.html#PyObject_GC_NewVar": "c-api/gcsupport.html#c.PyObject_GC_NewVar",
    "c-api/gcsupport.html#PyObject_GC_Resize": "c-api/gcsupport.html#c.PyObject_GC_Resize",
    "c-api/gcsupport.html#PyObject_GC_Track": "c-api/gcsupport.html#c.PyObject_GC_Track",
    "c-api/gcsupport.html#PyObject_GC_Del": "c-api/gcsupport.html#c.PyObject_GC_Del",
    "c-api/gcsupport.html#PyObject_GC_UnTrack": "c-api/gcsupport.html#c.PyObject_GC_UnTrack",
    "c-api/gcsupport.html#visitproc": "c-api/gcsupport.html#c.visitproc",
    "c-api/gcsupport.html#traverseproc": "c-api/gcsupport.html#c.traverseproc",
    "c-api/gcsupport.html#Py_VISIT": "c-api/gcsupport.html#c.Py_VISIT",
    "c-api/gcsupport.html#inquiry": "c-api/gcsupport.html#c.inquiry",
};

// Make file importable from nodejs for processing
if (typeof module !== 'undefined') {
    module.exports = SPECIAL_CASES;
}
