(function () {
    const SPECIAL_CASES = {
        // TODO: these commented links might break when 2to3 is removed
        // https://docs.python.org/library/2to3.html#2to3fixer-apply
        'library/functions.html#apply': 'tutorial/controlflow.html#tut-unpacking-arguments',

        // https://docs.python.org/library/2to3.html#2to3fixer-asserts
        'library/unittest.html#unittest.TestCase.failUnlessEqual': 'library/unittest.html#unittest.TestCase.assertEqual',
        // 'library/unittest.html#unittest.TestCase.assertEquals': 'library/unittest.html#unittest.TestCase.assertEqual',
        'library/unittest.html#unittest.TestCase.failIfEqual': 'library/unittest.html#unittest.TestCase.assertNotEqual',
        // 'library/unittest.html#unittest.TestCase.assertNotEquals': 'library/unittest.html#unittest.TestCase.assertNotEqual',
        'library/unittest.html#unittest.TestCase.failUnless': 'library/unittest.html#unittest.TestCase.assertTrue',
        'library/unittest.html#unittest.TestCase.assert_': 'library/unittest.html#unittest.TestCase.assertTrue',
        'library/unittest.html#unittest.TestCase.failIf': 'library/unittest.html#unittest.TestCase.assertFalse',
        'library/unittest.html#unittest.TestCase.failUnlessRaises': 'library/unittest.html#unittest.TestCase.assertRaises',
        'library/unittest.html#unittest.TestCase.failUnlessAlmostEqual': 'library/unittest.html#unittest.TestCase.assertAlmostEqual',
        // 'library/unittest.html#unittest.TestCase.assertAlmostEquals': 'library/unittest.html#unittest.TestCase.assertAlmostEqual',
        'library/unittest.html#unittest.TestCase.failIfAlmostEqual': 'library/unittest.html#unittest.TestCase.assertNotAlmostEqual',
        // 'library/unittest.html#unittest.TestCase.assertNotAlmostEquals': 'library/unittest.html#unittest.TestCase.assertNotAlmostEqual',

        // https://docs.python.org/library/2to3.html#2to3fixer-basestring
        'library/functions.html#basestring': 'library/functions.html#func-str',

        // https://docs.python.org/library/2to3.html#2to3fixer-buffer
        // maybe this shouldn't redirect, the memoryview API is similar but not exactly the same as that of buffer
        'library/functions.html#buffer': 'library/functions.html#func-memoryview',

        // https://docs.python.org/library/2to3.html#2to3fixer-dict
        'library/stdtypes.html#dict.iteritems': 'library/stdtypes.html#dict.items',
        'library/stdtypes.html#dict.iterkeys': 'library/stdtypes.html#dict.keys',
        'library/stdtypes.html#dict.itervalues': 'library/stdtypes.html#dict.values',
        'library/stdtypes.html#dict.viewitems': 'library/stdtypes.html#dict.items',
        'library/stdtypes.html#dict.viewkeys': 'library/stdtypes.html#dict.keys',
        'library/stdtypes.html#dict.viewvalues': 'library/stdtypes.html#dict.values',

        // https://docs.python.org/library/2to3.html#2to3fixer-exec
        'reference/simple_stmts.html#exec': 'library/functions.html#exec',

        // https://docs.python.org/library/2to3.html#2to3fixer-execfile
        // Redirecting could be confusing. It's replaced by exec(open(fn).read())
        // 'library/functions.html#execfile': 'library/functions.html#exec',
        // https://docs.python.org/whatsnew/3.0.html#builtins
        // 'library/functions.html#execfile': 'whatsnew/3.0.html#builtins',
        'library/functions.html#execfile': null,

        // https://docs.python.org/library/2to3.html#2to3fixer-exitfunc
        'library/sys.html#sys.exitfunc': 'library/atexit.html#module-atexit',

        // https://docs.python.org/library/2to3.html#2to3fixer-filter
        // https://docs.python.org/library/2to3.html#2to3fixer-funcattrs
        // https://docs.python.org/library/2to3.html#2to3fixer-future

        // https://docs.python.org/library/2to3.html#2to3fixer-getcwdu
        'library/os.html#os.getcwdu': 'library/os.html#os.getcwd',

        // https://docs.python.org/library/2to3.html#2to3fixer-has_key
        'library/stdtypes.html#dict.has_key': 'library/stdtypes.html#dict',

        // https://docs.python.org/library/2to3.html#2to3fixer-idioms
        // https://docs.python.org/library/2to3.html#2to3fixer-import

        // https://docs.python.org/library/2to3.html#2to3fixer-imports
        // https://github.com/python/cpython/blob/531d1e541284bfd7944f8c66a5e8c3c3234afaff/Lib/lib2to3/fixes/fix_imports.py#L8-L58
        'library/stringio.html': 'library/io.html#io.StringIO',
        'library/stringio.html#module-cStringIO': 'library/io.html#io.StringIO',

        'library/pickle.html#module-cPickle': 'library/pickle.html',

        'library/__builtin__.html': 'library/builtins.html',

        'library/copy_reg.html': 'library/copyreg.html',

        'library/repr.html': 'library/reprlib.html',

        'library/scrolledtext.html#module-ScrolledText': 'library/tkinter.scrolledtext.html#module-tkinter.scrolledtext',

        'library/tix.html': 'library/tkinter.tix.html',
        'library/ttk.html': 'library/tkinter.ttk.html',
        'library/tkinter.html#Tkinter.Tk': 'library/tkinter.html#tkinter.Tk',
        'library/tkinter.html#Tkinter.Tcl': 'library/tkinter.html#tkinter.Tcl',
        'library/tkinter.html#Tkinter.Widget.tk.createfilehandler': 'library/tkinter.html#tkinter.Widget.tk.createfilehandler',
        'library/tkinter.html#Tkinter.Widget.tk.deletefilehandler': 'library/tkinter.html#tkinter.Widget.tk.deletefilehandler',
        'library/tkinter.html#Tkinter.READABLE': 'library/tkinter.html#tkinter.READABLE',
        'library/tkinter.html#Tkinter.WRITABLE': 'library/tkinter.html#tkinter.WRITABLE',
        'library/tkinter.html#Tkinter.EXCEPTION': 'library/tkinter.html#tkinter.EXCEPTION',

        'library/_winreg.html': 'library/winreg.html',

        'library/thread.html': 'library/_thread.html',
        'library/dummy_thread.html': 'library/_dummy_thread.html',

        'library/dumbdbm.html': 'library/dbm.html#module-dbm.dumb',
        'library/dbm.html': 'library/dbm.html#module-dbm.ndbm',
        'library/gdbm.html': 'library/dbm.html#module-dbm.gnu',

        'library/xmlrpclib.html': 'library/xmlrpc.client.html',
        'library/docxmlrpcserver.html': 'library/xmlrpc.server.html',
        'library/simplexmlrpcserver.html': 'library/xmlrpc.server.html',

        'library/httplib.html': 'library/http.client.html',
        'library/htmllib.html#module-htmlentitydefs': 'library/html.entities.html',
        'library/htmlparser.html': 'library/html.parser.html',
        'library/cookie.html': 'library/http.cookies.html',
        'library/cookielib.html': 'library/http.cookiejar.html',
        'library/basehttpserver.html': 'library/http.server.html',
        'library/simplehttpserver.html': 'library/http.server.html',
        'library/cgihttpserver.html': 'library/http.server.html',

        // This is commented out in Lib/lib2to3/fixes/fix_imports.py
        'library/test.html#module-test.test_support': 'library/test.html#module-test.support',

        // TODO: link all functions to subprocess.run specifically?
        // 'library/commands.html': 'library/subprocess.html',
        'library/commands.html': null,

        'library/userdict.html': 'library/collections.html#userdict-objects',
        'library/userdict.html#module-UserDict': 'library/collections.html#userdict-objects',
        'library/userdict.html#module-UserList': 'library/collections.html#userlist-objects',
        'library/userdict.html#module-UserString': 'library/collections.html#userstring-objects',

        'library/urlparse.html': 'library/urllib.parse.html',

        'library/robotparser.html': 'library/urllib.robotparser.html',

        // https://docs.python.org/library/2to3.html#2to3fixer-imports2
        'library/whichdb.html': 'library/dbm.html#dbm.whichdb',
        'library/anydbm.html': 'library/dbm.html',

        // https://docs.python.org/library/2to3.html#2to3fixer-input

        // https://docs.python.org/library/2to3.html#2to3fixer-intern
        'library/functions.html#intern': 'library/sys.html#sys.intern',

        // https://docs.python.org/library/2to3.html#2to3fixer-itertools
        'library/itertools.html#itertools.ifilter': 'library/functions.html#filter',
        'library/itertools.html#itertools.izip': 'library/functions.html#zip',
        'library/itertools.html#itertools.imap': 'library/functions.html#map',
        'library/itertools.html#itertools.ifilterfalse': 'library/itertools.html#itertools.filterfalse',

        // https://docs.python.org/library/2to3.html#2to3fixer-long
        'library/functions.html#long': 'library/functions.html#int',

        // https://docs.python.org/library/2to3.html#2to3fixer-metaclass
        'reference/datamodel.html#__metaclass__': 'reference/datamodel.html#metaclasses',

        // https://docs.python.org/library/2to3.html#2to3fixer-next
        'library/stdtypes.html#iterator.next': 'library/stdtypes.html#iterator.__next__',
        'reference/expressions.html#generator.next': 'reference/expressions.html#generator.__next__',
        // 'library/stdtypes.html#file.next': 'tutorial/inputoutput.html#methods-of-file-objects',
        // 'library/stdtypes.html#file.next': 'library/io.html#io.IOBase.readlines',
        'library/stdtypes.html#file.next': null,
        'library/csv.html#csv.csvreader.next': 'library/csv.html#csv.csvreader.__next__',


        // https://docs.python.org/library/2to3.html#2to3fixer-nonzero
        'reference/datamodel.html#object.__nonzero__': 'reference/datamodel.html#object.__bool__',

        // https://docs.python.org/library/2to3.html#2to3fixer-numliterals

        // https://docs.python.org/library/2to3.html#2to3fixer-operator
        'library/operator.html#operator.delslice': 'library/operator.html#operator.delitem',
        'library/operator.html#operator.__delslice__': 'library/operator.html#operator.__delitem__',
        'library/operator.html#operator.getslice': 'library/operator.html#operator.getitem',
        'library/operator.html#operator.__getslice__': 'library/operator.html#operator.__getitem__',
        'library/operator.html#operator.setslice': 'library/operator.html#operator.setitem',
        'library/operator.html#operator.__setslice__': 'library/operator.html#operator.__setitem__',
        'library/operator.html#operator.repeat': 'library/operator.html#operator.mul',
        'library/operator.html#operator.__repeat__': 'library/operator.html#operator.__mul__',
        'library/operator.html#operator.irepeat': 'library/operator.html#operator.imul',
        'library/operator.html#operator.__irepeat__': 'library/operator.html#operator.__imul__',
        'library/operator.html#operator.isCallable': 'library/functions.html#callable',
        'library/operator.html#operator.sequenceIncludes': 'library/operator.html#operator.contains',

        // https://docs.python.org/library/2to3.html#2to3fixer-print
        'reference/simple_stmts.html#print': 'library/functions.html#print',

        // https://docs.python.org/library/2to3.html#2to3fixer-raw_input
        'library/functions.html#raw_input': 'library/functions.html#input',

        // https://docs.python.org/library/2to3.html#2to3fixer-reduce
        'library/functions.html#reduce': 'library/functools.html#functools.reduce',

        // https://docs.python.org/library/2to3.html#2to3fixer-reload
        'library/functions.html#reload': 'library/importlib.html#importlib.reload',

        // https://docs.python.org/library/2to3.html#2to3fixer-renames
        'library/sys.html#sys.maxint': 'library/sys.html#sys.maxsize',

        // https://docs.python.org/library/2to3.html#2to3fixer-repr

        // https://docs.python.org/library/2to3.html#2to3fixer-standarderror
        'library/exceptions.html#exceptions.StandardError': 'library/exceptions.html#Exception',

        // https://docs.python.org/library/2to3.html#2to3fixer-sys_exc
        'library/sys.html#sys.exc_value': 'library/sys.html#sys.exc_info',
        'library/sys.html#sys.exc_type': 'library/sys.html#sys.exc_info',
        'library/sys.html#sys.exc_traceback': 'library/sys.html#sys.exc_info',

        // https://docs.python.org/library/2to3.html#2to3fixer-throw
        // https://docs.python.org/library/2to3.html#2to3fixer-tuple_params
        // https://docs.python.org/library/2to3.html#2to3fixer-types

        // https://docs.python.org/library/2to3.html#2to3fixer-unicode
        'library/functions.html#unicode': 'library/functions.html#func-str',

        // https://docs.python.org/library/2to3.html#2to3fixer-urllib
        // https://github.com/python/cpython/blob/master/Lib/lib2to3/fixes/fix_urllib.py#L12-L45
        // https://github.com/python/cpython/blob/531d1e541284bfd7944f8c66a5e8c3c3234afaff/Lib/lib2to3/fixes/fix_urllib.py#L12-L45
        'library/urllib.html#urllib.URLopener': 'library/urllib.request.html#urllib.request.URLopener',
        'library/urllib.html#urllib.FancyURLopener': 'library/urllib.request.html#urllib.request.FancyURLopener',
        'library/urllib.html#urllib.urlretrieve': 'library/urllib.request.html#urllib.request.urlretrieve',
        'library/urllib.html#urllib._urlopener': null,
        'library/urllib.html#urllib.urlopen': 'library/urllib.request.html#urllib.request.urlopen',
        'library/urllib.html#urllib.urlcleanup': 'library/urllib.request.html#urllib.request.urlcleanup',
        'library/urllib.html#urllib.pathname2url': 'library/urllib.request.html#urllib.request.pathname2url',
        'library/urllib.html#urllib.url2pathname': 'library/urllib.request.html#urllib.request.url2pathname',
        'library/urllib.html#urllib.getproxies': 'library/urllib.request.html#urllib.request.getproxies',
        'library/urllib.html#urllib.quote': 'library/urllib.parse.html#urllib.parse.quote',
        'library/urllib.html#urllib.quote_plus': 'library/urllib.parse.html#urllib.parse.quote_plus',
        'library/urllib.html#urllib.unquote': 'library/urllib.parse.html#urllib.parse.unquote',
        'library/urllib.html#urllib.unquote_plus': 'library/urllib.parse.html#urllib.parse.unquote_plus',
        'library/urllib.html#urllib.urlencode': 'library/urllib.parse.html#urllib.parse.urlencode',
        'library/urllib.html#urllib.ContentTooShortError': 'library/urllib.error.html#urllib.error.ContentTooShortError',
        'library/urllib2.html#urllib2.urlopen': 'library/urllib.request.html#urllib.request.urlopen',
        'library/urllib2.html#urllib2.install_opener': 'library/urllib.request.html#urllib.request.install_opener',
        'library/urllib2.html#urllib2.build_opener': 'library/urllib.request.html#urllib.request.build_opener',
        'library/urllib2.html#urllib2.Request': 'library/urllib.request.html#urllib.request.Request',
        'library/urllib2.html#urllib2.OpenerDirector': 'library/urllib.request.html#urllib.request.OpenerDirector',
        'library/urllib2.html#urllib2.BaseHandler': 'library/urllib.request.html#urllib.request.BaseHandler',
        'library/urllib2.html#urllib2.HTTPDefaultErrorHandler': 'library/urllib.request.html#urllib.request.HTTPDefaultErrorHandler',
        'library/urllib2.html#urllib2.HTTPRedirectHandler': 'library/urllib.request.html#urllib.request.HTTPRedirectHandler',
        'library/urllib2.html#urllib2.HTTPCookieProcessor': 'library/urllib.request.html#urllib.request.HTTPCookieProcessor',
        'library/urllib2.html#urllib2.ProxyHandler': 'library/urllib.request.html#urllib.request.ProxyHandler',
        'library/urllib2.html#urllib2.HTTPPasswordMgr': 'library/urllib.request.html#urllib.request.HTTPPasswordMgr',
        'library/urllib2.html#urllib2.HTTPPasswordMgrWithDefaultRealm': 'library/urllib.request.html#urllib.request.HTTPPasswordMgrWithDefaultRealm',
        'library/urllib2.html#urllib2.AbstractBasicAuthHandler': 'library/urllib.request.html#urllib.request.AbstractBasicAuthHandler',
        'library/urllib2.html#urllib2.HTTPBasicAuthHandler': 'library/urllib.request.html#urllib.request.HTTPBasicAuthHandler',
        'library/urllib2.html#urllib2.ProxyBasicAuthHandler': 'library/urllib.request.html#urllib.request.ProxyBasicAuthHandler',
        'library/urllib2.html#urllib2.AbstractDigestAuthHandler': 'library/urllib.request.html#urllib.request.AbstractDigestAuthHandler',
        'library/urllib2.html#urllib2.HTTPDigestAuthHandler': 'library/urllib.request.html#urllib.request.HTTPDigestAuthHandler',
        'library/urllib2.html#urllib2.ProxyDigestAuthHandler': 'library/urllib.request.html#urllib.request.ProxyDigestAuthHandler',
        'library/urllib2.html#urllib2.HTTPHandler': 'library/urllib.request.html#urllib.request.HTTPHandler',
        'library/urllib2.html#urllib2.HTTPSHandler': 'library/urllib.request.html#urllib.request.HTTPSHandler',
        'library/urllib2.html#urllib2.FileHandler': 'library/urllib.request.html#urllib.request.FileHandler',
        'library/urllib2.html#urllib2.FTPHandler': 'library/urllib.request.html#urllib.request.FTPHandler',
        'library/urllib2.html#urllib2.CacheFTPHandler': 'library/urllib.request.html#urllib.request.CacheFTPHandler',
        'library/urllib2.html#urllib2.UnknownHandler': 'library/urllib.request.html#urllib.request.UnknownHandler',
        'library/urllib2.html#urllib2.URLError': 'library/urllib.error.html#urllib.error.URLError',
        'library/urllib2.html#urllib2.HTTPError': 'library/urllib.error.html#urllib.error.HTTPError',

        // https://docs.python.org/library/2to3.html#2to3fixer-xrange
        'library/functions.html#xrange': 'library/functions.html#func-range',

        // https://docs.python.org/library/2to3.html#2to3fixer-xreadlines
        'library/stdtypes.html#file.xreadlines': null,


        // Not part of 2to3

        // All other html files removed from Python 2
        // 'c-api/class.html': '',
        // 'c-api/cobject.html': '',
        // 'c-api/int.html': 'c-api/long.html',
        // 'c-api/string.html': '',
        // 'howto/doanddont.html': '',
        // 'howto/webservers.html': '',
        // 'library/aepack.html': '',
        // 'library/aetools.html': '',
        // 'library/aetypes.html': '',
        // 'library/al.html': '',
        // 'library/autogil.html': '',
        // 'library/bastion.html': '',
        // 'library/bsddb.html': '',
        // 'library/carbon.html': '',
        // 'library/cd.html': '',
        // 'library/colorpicker.html': '',
        // 'library/compiler.html': '',
        // 'library/dbhash.html': '',
        // 'library/dircache.html': '',
        // 'library/dl.html': 'library/ctypes.html',
        // 'library/easydialogs.html': '',
        'library/email-examples.html': 'library/email.examples.html',
        // 'library/fl.html': '',
        // 'library/fm.html': '',
        // 'library/fpectl.html': '',
        // 'library/fpformat.html': '',
        // 'library/framework.html': '',
        // 'library/future_builtins.html': '',
        // 'library/gensuitemodule.html': '',
        // 'library/gl.html': '',
        // 'library/hotshot.html': 'library/profile.html',
        // 'library/ic.html': '',
        // 'library/imageop.html': '',
        // 'library/imgfile.html': '',
        // 'library/imputil.html': '',
        // 'library/jpeg.html': '',
        // 'library/mac.html': '',
        // 'library/macos.html': '',
        // 'library/macosa.html': '',
        // 'library/macostools.html': '',
        // 'library/macpath.html': '',
        'library/md5.html': 'library/hashlib.html',
        // 'library/mhlib.html': 'library/mailbox.html',
        // 'library/mimetools.html': 'library/email.html',
        // 'library/mimewriter.html': 'library/email.html',
        // 'library/mimify.html': 'library/email.html',
        // 'library/miniaeframe.html': 'library/email.html',
        // Redirect to library/email.html ?
        'library/multifile.html': null,
        // 'library/mutex.html': '',
        // 'library/new.html': '',
        // 'library/popen2.html': 'library/subprocess.html',
        // 'library/posixfile.html': '',
        // 'library/restricted.html': '',
        // 'library/rexec.html': '',
        // 'library/rfc822.html': 'library/email.html',
        // https://docs.python.org/whatsnew/3.0.html#library-changes
        'library/sets.html': 'library/stdtypes.html#set',
        // 'library/sgi.html': '',
        // 'library/sgmllib.html': '',
        'library/sha.html': 'library/hashlib.html',
        // 'library/someos.html': 'library/index.html',
        // 'library/statvfs.html': '',
        // This page is a list of links of related libraries
        'library/strings.html': 'library/text.html',
        // 'library/sun.html': '',
        // 'library/sunaudio.html': '',
        // 'library/user.html': '',

        'library/collections.html#collections-abstract-base-classes': 'library/collections.abc.html#collections-abstract-base-classes',
        'library/collections.html#collections-high-performance-container-datatypes': 'library/collections.html#collections-container-datatypes',
        'library/collections.html#collections.Callable': 'library/collections.abc.html#collections.abc.Callable',
        'library/collections.html#collections.Container': 'library/collections.abc.html#collections.abc.Container',
        'library/collections.html#collections.Hashable': 'library/collections.abc.html#collections.abc.Hashable',
        'library/collections.html#collections.ItemsView': 'library/collections.abc.html#collections.abc.ItemsView',
        'library/collections.html#collections.Iterable': 'library/collections.abc.html#collections.abc.Iterable',
        'library/collections.html#collections.Iterator': 'library/collections.abc.html#collections.abc.Iterator',
        'library/collections.html#collections.KeysView': 'library/collections.abc.html#collections.abc.KeysView',
        'library/collections.html#collections.Mapping': 'library/collections.abc.html#collections.abc.Mapping',
        'library/collections.html#collections.MappingView': 'library/collections.abc.html#collections.abc.MappingView',
        'library/collections.html#collections.MutableMapping': 'library/collections.abc.html#collections.abc.MutableMapping',
        'library/collections.html#collections.MutableSequence': 'library/collections.abc.html#collections.abc.MutableSequence',
        'library/collections.html#collections.MutableSet': 'library/collections.abc.html#collections.abc.MutableSet',
        'library/collections.html#collections.Sequence': 'library/collections.abc.html#collections.abc.Sequence',
        'library/collections.html#collections.Set': 'library/collections.abc.html#collections.abc.Set',
        'library/collections.html#collections.Sized': 'library/collections.abc.html#collections.abc.Sized',
        'library/collections.html#collections.ValuesView': 'library/collections.abc.html#collections.abc.ValuesView',

        'library/exceptions.html#exceptions.ArithmeticError': 'library/exceptions.html#ArithmeticError',
        'library/exceptions.html#exceptions.AssertionError': 'library/exceptions.html#AssertionError',
        'library/exceptions.html#exceptions.AttributeError': 'library/exceptions.html#AttributeError',
        'library/exceptions.html#exceptions.BaseException': 'library/exceptions.html#BaseException',
        'library/exceptions.html#exceptions.BaseException.args': 'library/exceptions.html#BaseException.args',
        'library/exceptions.html#exceptions.BufferError': 'library/exceptions.html#BufferError',
        'library/exceptions.html#exceptions.BytesWarning': 'library/exceptions.html#BytesWarning',
        'library/exceptions.html#exceptions.DeprecationWarning': 'library/exceptions.html#DeprecationWarning',
        'library/exceptions.html#exceptions.EOFError': 'library/exceptions.html#EOFError',
        'library/exceptions.html#exceptions.EnvironmentError': 'library/exceptions.html#EnvironmentError',
        'library/exceptions.html#exceptions.Exception': 'library/exceptions.html#Exception',
        'library/exceptions.html#exceptions.FloatingPointError': 'library/exceptions.html#FloatingPointError',
        'library/exceptions.html#exceptions.FutureWarning': 'library/exceptions.html#FutureWarning',
        'library/exceptions.html#exceptions.GeneratorExit': 'library/exceptions.html#GeneratorExit',
        'library/exceptions.html#exceptions.IOError': 'library/exceptions.html#IOError',
        'library/exceptions.html#exceptions.ImportError': 'library/exceptions.html#ImportError',
        'library/exceptions.html#exceptions.ImportWarning': 'library/exceptions.html#ImportWarning',
        'library/exceptions.html#exceptions.IndentationError': 'library/exceptions.html#IndentationError',
        'library/exceptions.html#exceptions.IndexError': 'library/exceptions.html#IndexError',
        'library/exceptions.html#exceptions.KeyError': 'library/exceptions.html#KeyError',
        'library/exceptions.html#exceptions.KeyboardInterrupt': 'library/exceptions.html#KeyboardInterrupt',
        'library/exceptions.html#exceptions.LookupError': 'library/exceptions.html#LookupError',
        'library/exceptions.html#exceptions.MemoryError': 'library/exceptions.html#MemoryError',
        'library/exceptions.html#exceptions.NameError': 'library/exceptions.html#NameError',
        'library/exceptions.html#exceptions.NotImplementedError': 'library/exceptions.html#NotImplementedError',
        'library/exceptions.html#exceptions.OSError': 'library/exceptions.html#OSError',
        'library/exceptions.html#exceptions.OverflowError': 'library/exceptions.html#OverflowError',
        'library/exceptions.html#exceptions.PendingDeprecationWarning': 'library/exceptions.html#PendingDeprecationWarning',
        'library/exceptions.html#exceptions.ReferenceError': 'library/exceptions.html#ReferenceError',
        'library/exceptions.html#exceptions.RuntimeError': 'library/exceptions.html#RuntimeError',
        'library/exceptions.html#exceptions.RuntimeWarning': 'library/exceptions.html#RuntimeWarning',
        'library/exceptions.html#exceptions.StandardError': null,
        'library/exceptions.html#exceptions.StopIteration': 'library/exceptions.html#StopIteration',
        'library/exceptions.html#exceptions.SyntaxError': 'library/exceptions.html#SyntaxError',
        'library/exceptions.html#exceptions.SyntaxWarning': 'library/exceptions.html#SyntaxWarning',
        'library/exceptions.html#exceptions.SystemError': 'library/exceptions.html#SystemError',
        'library/exceptions.html#exceptions.SystemExit': 'library/exceptions.html#SystemExit',
        'library/exceptions.html#exceptions.TabError': 'library/exceptions.html#TabError',
        'library/exceptions.html#exceptions.TypeError': 'library/exceptions.html#TypeError',
        'library/exceptions.html#exceptions.UnboundLocalError': 'library/exceptions.html#UnboundLocalError',
        'library/exceptions.html#exceptions.UnicodeDecodeError': 'library/exceptions.html#UnicodeDecodeError',
        'library/exceptions.html#exceptions.UnicodeEncodeError': 'library/exceptions.html#UnicodeEncodeError',
        'library/exceptions.html#exceptions.UnicodeError': 'library/exceptions.html#UnicodeError',
        'library/exceptions.html#exceptions.UnicodeError.encoding': 'library/exceptions.html#UnicodeError.encoding',
        'library/exceptions.html#exceptions.UnicodeError.end': 'library/exceptions.html#UnicodeError.end',
        'library/exceptions.html#exceptions.UnicodeError.object': 'library/exceptions.html#UnicodeError.object',
        'library/exceptions.html#exceptions.UnicodeError.reason': 'library/exceptions.html#UnicodeError.reason',
        'library/exceptions.html#exceptions.UnicodeError.start': 'library/exceptions.html#UnicodeError.start',
        'library/exceptions.html#exceptions.UnicodeTranslateError': 'library/exceptions.html#UnicodeTranslateError',
        'library/exceptions.html#exceptions.UnicodeWarning': 'library/exceptions.html#UnicodeWarning',
        'library/exceptions.html#exceptions.UserWarning': 'library/exceptions.html#UserWarning',
        'library/exceptions.html#exceptions.VMSError': null,
        'library/exceptions.html#exceptions.ValueError': 'library/exceptions.html#ValueError',
        'library/exceptions.html#exceptions.Warning': 'library/exceptions.html#Warning',
        'library/exceptions.html#exceptions.WindowsError': 'library/exceptions.html#WindowsError',
        'library/exceptions.html#exceptions.ZeroDivisionError': 'library/exceptions.html#ZeroDivisionError',
        'library/exceptions.html#module-exceptions': 'library/exceptions.html#built-in-exceptions',


        'library/functions.html#bytearray': 'library/functions.html#func-bytearray',
        'library/functions.html#cmp': null,
        'library/functions.html#coerce': null,
        'library/functions.html#file': null,
        'library/functions.html#func-repr': 'library/functions.html#repr',
        'library/functions.html#range': 'library/functions.html#func-range',
        'library/functions.html#str': 'library/functions.html#func-str',
        'library/functions.html#tuple': 'library/functions.html#func-tuple',
        'library/functions.html#unichr': 'library/functions.html#chr',
        'library/functions.html#non-essential-built-in-funcs': null,
        'library/functions.html#non-essential-built-in-functions': null,

        'library/itertools.html#itertools.izip_longest': 'library/itertools.html#itertools.zip_longest',
        'library/itertools.html#recipes': 'library/itertools.html#itertools-recipes',

        'library/multiprocessing.html#Connection': 'library/multiprocessing.html#multiprocessing.connection.Connection',
        'library/multiprocessing.html#Connection.close': 'library/multiprocessing.html#multiprocessing.connection.Connection.close',
        'library/multiprocessing.html#Connection.fileno': 'library/multiprocessing.html#multiprocessing.connection.Connection.fileno',
        'library/multiprocessing.html#Connection.poll': 'library/multiprocessing.html#multiprocessing.connection.Connection.poll',
        'library/multiprocessing.html#Connection.recv': 'library/multiprocessing.html#multiprocessing.connection.Connection.recv',
        'library/multiprocessing.html#Connection.recv_bytes': 'library/multiprocessing.html#multiprocessing.connection.Connection.recv_bytes',
        'library/multiprocessing.html#Connection.recv_bytes_into': 'library/multiprocessing.html#multiprocessing.connection.Connection.recv_bytes_into',
        'library/multiprocessing.html#Connection.send': 'library/multiprocessing.html#multiprocessing.connection.Connection.send',
        'library/multiprocessing.html#Connection.send_bytes': 'library/multiprocessing.html#multiprocessing.connection.Connection.send_bytes',
        'library/multiprocessing.html#all-platforms': 'library/multiprocessing.html#all-start-methods',
        'library/multiprocessing.html#multiprocessing-process-based-threading-interface': 'library/multiprocessing.html#multiprocessing-process-based-parallelism',
        'library/multiprocessing.html#multiprocessing.connection.AuthenticationError': 'library/multiprocessing.html#multiprocessing.AuthenticationError',
        'library/multiprocessing.html#multiprocessing.connection.BufferTooShort': 'library/multiprocessing.html#multiprocessing.BufferTooShort',
        'library/multiprocessing.html#multiprocessing.connection.ProcessError': 'library/multiprocessing.html#multiprocessing.ProcessError',
        'library/multiprocessing.html#multiprocessing.connection.TimeoutError': 'library/multiprocessing.html#multiprocessing.TimeoutError',
        'library/multiprocessing.html#multiprocessing.multiprocessing.queues.SimpleQueue': 'library/multiprocessing.html#multiprocessing.SimpleQueue',
        'library/multiprocessing.html#multiprocessing.multiprocessing.queues.SimpleQueue.empty': 'library/multiprocessing.html#multiprocessing.SimpleQueue.empty',
        'library/multiprocessing.html#multiprocessing.multiprocessing.queues.SimpleQueue.get': 'library/multiprocessing.html#multiprocessing.SimpleQueue.get',
        'library/multiprocessing.html#multiprocessing.multiprocessing.queues.SimpleQueue.put': 'library/multiprocessing.html#multiprocessing.SimpleQueue.put',
        'library/multiprocessing.html#multiprocessing.pool.multiprocessing.Pool': 'library/multiprocessing.html#multiprocessing.pool.Pool',
        'library/multiprocessing.html#multiprocessing.pool.multiprocessing.Pool.apply': 'library/multiprocessing.html#multiprocessing.pool.Pool.apply',
        'library/multiprocessing.html#multiprocessing.pool.multiprocessing.Pool.apply_async': 'library/multiprocessing.html#multiprocessing.pool.Pool.apply_async',
        'library/multiprocessing.html#multiprocessing.pool.multiprocessing.Pool.close': 'library/multiprocessing.html#multiprocessing.pool.Pool.close',
        'library/multiprocessing.html#multiprocessing.pool.multiprocessing.Pool.imap': 'library/multiprocessing.html#multiprocessing.pool.Pool.imap',
        'library/multiprocessing.html#multiprocessing.pool.multiprocessing.Pool.imap_unordered': 'library/multiprocessing.html#multiprocessing.pool.Pool.imap_unordered',
        'library/multiprocessing.html#multiprocessing.pool.multiprocessing.Pool.join': 'library/multiprocessing.html#multiprocessing.pool.Pool.join',
        'library/multiprocessing.html#multiprocessing.pool.multiprocessing.Pool.map': 'library/multiprocessing.html#multiprocessing.pool.Pool.map',
        'library/multiprocessing.html#multiprocessing.pool.multiprocessing.Pool.map_async': 'library/multiprocessing.html#multiprocessing.pool.Pool.map_async',
        'library/multiprocessing.html#multiprocessing.pool.multiprocessing.Pool.terminate': 'library/multiprocessing.html#multiprocessing.pool.Pool.terminate',
        'library/multiprocessing.html#windows': null,

        'library/_winreg.html#_winreg.CloseKey': 'library/winreg.html#winreg.CloseKey',
        'library/_winreg.html#_winreg.ConnectRegistry': 'library/winreg.html#winreg.ConnectRegistry',
        'library/_winreg.html#_winreg.CreateKey': 'library/winreg.html#winreg.CreateKey',
        'library/_winreg.html#_winreg.CreateKeyEx': 'library/winreg.html#winreg.CreateKeyEx',
        'library/_winreg.html#_winreg.DeleteKey': 'library/winreg.html#winreg.DeleteKey',
        'library/_winreg.html#_winreg.DeleteKeyEx': 'library/winreg.html#winreg.DeleteKeyEx',
        'library/_winreg.html#_winreg.DeleteValue': 'library/winreg.html#winreg.DeleteValue',
        'library/_winreg.html#_winreg.DisableReflectionKey': 'library/winreg.html#winreg.DisableReflectionKey',
        'library/_winreg.html#_winreg.EnableReflectionKey': 'library/winreg.html#winreg.EnableReflectionKey',
        'library/_winreg.html#_winreg.EnumKey': 'library/winreg.html#winreg.EnumKey',
        'library/_winreg.html#_winreg.EnumValue': 'library/winreg.html#winreg.EnumValue',
        'library/_winreg.html#_winreg.ExpandEnvironmentStrings': 'library/winreg.html#winreg.ExpandEnvironmentStrings',
        'library/_winreg.html#_winreg.FlushKey': 'library/winreg.html#winreg.FlushKey',
        'library/_winreg.html#_winreg.HKEY_CLASSES_ROOT': 'library/winreg.html#winreg.HKEY_CLASSES_ROOT',
        'library/_winreg.html#_winreg.HKEY_CURRENT_CONFIG': 'library/winreg.html#winreg.HKEY_CURRENT_CONFIG',
        'library/_winreg.html#_winreg.HKEY_CURRENT_USER': 'library/winreg.html#winreg.HKEY_CURRENT_USER',
        'library/_winreg.html#_winreg.HKEY_DYN_DATA': 'library/winreg.html#winreg.HKEY_DYN_DATA',
        'library/_winreg.html#_winreg.HKEY_LOCAL_MACHINE': 'library/winreg.html#winreg.HKEY_LOCAL_MACHINE',
        'library/_winreg.html#_winreg.HKEY_PERFORMANCE_DATA': 'library/winreg.html#winreg.HKEY_PERFORMANCE_DATA',
        'library/_winreg.html#_winreg.HKEY_USERS': 'library/winreg.html#winreg.HKEY_USERS',
        'library/_winreg.html#_winreg.KEY_ALL_ACCESS': 'library/winreg.html#winreg.KEY_ALL_ACCESS',
        'library/_winreg.html#_winreg.KEY_CREATE_LINK': 'library/winreg.html#winreg.KEY_CREATE_LINK',
        'library/_winreg.html#_winreg.KEY_CREATE_SUB_KEY': 'library/winreg.html#winreg.KEY_CREATE_SUB_KEY',
        'library/_winreg.html#_winreg.KEY_ENUMERATE_SUB_KEYS': 'library/winreg.html#winreg.KEY_ENUMERATE_SUB_KEYS',
        'library/_winreg.html#_winreg.KEY_EXECUTE': 'library/winreg.html#winreg.KEY_EXECUTE',
        'library/_winreg.html#_winreg.KEY_NOTIFY': 'library/winreg.html#winreg.KEY_NOTIFY',
        'library/_winreg.html#_winreg.KEY_QUERY_VALUE': 'library/winreg.html#winreg.KEY_QUERY_VALUE',
        'library/_winreg.html#_winreg.KEY_READ': 'library/winreg.html#winreg.KEY_READ',
        'library/_winreg.html#_winreg.KEY_SET_VALUE': 'library/winreg.html#winreg.KEY_SET_VALUE',
        'library/_winreg.html#_winreg.KEY_WOW64_32KEY': 'library/winreg.html#winreg.KEY_WOW64_32KEY',
        'library/_winreg.html#_winreg.KEY_WOW64_64KEY': 'library/winreg.html#winreg.KEY_WOW64_64KEY',
        'library/_winreg.html#_winreg.KEY_WRITE': 'library/winreg.html#winreg.KEY_WRITE',
        'library/_winreg.html#_winreg.LoadKey': 'library/winreg.html#winreg.LoadKey',
        'library/_winreg.html#_winreg.OpenKey': 'library/winreg.html#winreg.OpenKey',
        'library/_winreg.html#_winreg.OpenKeyEx': 'library/winreg.html#winreg.OpenKeyEx',
        'library/_winreg.html#_winreg.PyHKEY.Close': 'library/winreg.html#winreg.PyHKEY.Close',
        'library/_winreg.html#_winreg.PyHKEY.Detach': 'library/winreg.html#winreg.PyHKEY.Detach',
        'library/_winreg.html#_winreg.PyHKEY.__enter__': 'library/winreg.html#winreg.PyHKEY.__enter__',
        'library/_winreg.html#_winreg.PyHKEY.__exit__': 'library/winreg.html#winreg.PyHKEY.__exit__',
        'library/_winreg.html#_winreg.QueryInfoKey': 'library/winreg.html#winreg.QueryInfoKey',
        'library/_winreg.html#_winreg.QueryReflectionKey': 'library/winreg.html#winreg.QueryReflectionKey',
        'library/_winreg.html#_winreg.QueryValue': 'library/winreg.html#winreg.QueryValue',
        'library/_winreg.html#_winreg.QueryValueEx': 'library/winreg.html#winreg.QueryValueEx',
        'library/_winreg.html#_winreg.REG_BINARY': 'library/winreg.html#winreg.REG_BINARY',
        'library/_winreg.html#_winreg.REG_DWORD': 'library/winreg.html#winreg.REG_DWORD',
        'library/_winreg.html#_winreg.REG_DWORD_BIG_ENDIAN': 'library/winreg.html#winreg.REG_DWORD_BIG_ENDIAN',
        'library/_winreg.html#_winreg.REG_DWORD_LITTLE_ENDIAN': 'library/winreg.html#winreg.REG_DWORD_LITTLE_ENDIAN',
        'library/_winreg.html#_winreg.REG_EXPAND_SZ': 'library/winreg.html#winreg.REG_EXPAND_SZ',
        'library/_winreg.html#_winreg.REG_FULL_RESOURCE_DESCRIPTOR': 'library/winreg.html#winreg.REG_FULL_RESOURCE_DESCRIPTOR',
        'library/_winreg.html#_winreg.REG_LINK': 'library/winreg.html#winreg.REG_LINK',
        'library/_winreg.html#_winreg.REG_MULTI_SZ': 'library/winreg.html#winreg.REG_MULTI_SZ',
        'library/_winreg.html#_winreg.REG_NONE': 'library/winreg.html#winreg.REG_NONE',
        'library/_winreg.html#_winreg.REG_RESOURCE_LIST': 'library/winreg.html#winreg.REG_RESOURCE_LIST',
        'library/_winreg.html#_winreg.REG_RESOURCE_REQUIREMENTS_LIST': 'library/winreg.html#winreg.REG_RESOURCE_REQUIREMENTS_LIST',
        'library/_winreg.html#_winreg.REG_SZ': 'library/winreg.html#winreg.REG_SZ',
        'library/_winreg.html#_winreg.SaveKey': 'library/winreg.html#winreg.SaveKey',
        'library/_winreg.html#_winreg.SetValue': 'library/winreg.html#winreg.SetValue',
        'library/_winreg.html#_winreg.SetValueEx': 'library/winreg.html#winreg.SetValueEx',
        'library/_winreg.html#module-_winreg': 'library/winreg.html#module-winreg',


        'library/bz2.html#bz2.BZ2File.close': 'library/bz2.html#bz2.BZ2File',
        'library/bz2.html#bz2.BZ2File.read': 'library/bz2.html#bz2.BZ2File',
        'library/bz2.html#bz2.BZ2File.readline': 'library/bz2.html#bz2.BZ2File',
        'library/bz2.html#bz2.BZ2File.readlines': 'library/bz2.html#bz2.BZ2File',
        'library/bz2.html#bz2.BZ2File.seek': 'library/bz2.html#bz2.BZ2File',
        'library/bz2.html#bz2.BZ2File.tell': 'library/bz2.html#bz2.BZ2File',
        'library/bz2.html#bz2.BZ2File.write': 'library/bz2.html#bz2.BZ2File',
        'library/bz2.html#bz2.BZ2File.writelines': 'library/bz2.html#bz2.BZ2File',
        'library/bz2.html#bz2.BZ2File.xreadlines': 'library/bz2.html#bz2.BZ2File',

        'library/configparser.html#module-ConfigParser': 'library/configparser.html#module-configparser',
        'library/configparser.html#ConfigParser.ConfigParser': 'library/configparser.html#configparser.ConfigParser',
        'library/configparser.html#ConfigParser.ConfigParser.get': 'library/configparser.html#configparser.ConfigParser.get',
        'library/configparser.html#ConfigParser.ConfigParser.items': 'library/configparser.html#configparser.ConfigParser.items',
        'library/configparser.html#ConfigParser.DuplicateSectionError': 'library/configparser.html#configparser.DuplicateSectionError',
        'library/configparser.html#ConfigParser.Error': 'library/configparser.html#configparser.Error',
        'library/configparser.html#ConfigParser.InterpolationDepthError': 'library/configparser.html#configparser.InterpolationDepthError',
        'library/configparser.html#ConfigParser.InterpolationError': 'library/configparser.html#configparser.InterpolationError',
        'library/configparser.html#ConfigParser.InterpolationMissingOptionError': 'library/configparser.html#configparser.InterpolationMissingOptionError',
        'library/configparser.html#ConfigParser.InterpolationSyntaxError': 'library/configparser.html#configparser.InterpolationSyntaxError',
        'library/configparser.html#ConfigParser.MAX_INTERPOLATION_DEPTH': 'library/configparser.html#configparser.MAX_INTERPOLATION_DEPTH',
        'library/configparser.html#ConfigParser.MissingSectionHeaderError': 'library/configparser.html#configparser.MissingSectionHeaderError',
        'library/configparser.html#ConfigParser.NoOptionError': 'library/configparser.html#configparser.NoOptionError',
        'library/configparser.html#ConfigParser.NoSectionError': 'library/configparser.html#configparser.NoSectionError',
        'library/configparser.html#ConfigParser.ParsingError': 'library/configparser.html#configparser.ParsingError',
        'library/configparser.html#ConfigParser.RawConfigParser': 'library/configparser.html#configparser.ConfigParser',
        'library/configparser.html#ConfigParser.RawConfigParser.defaults': 'library/configparser.html#configparser.ConfigParser.defaults',
        'library/configparser.html#ConfigParser.RawConfigParser.get': 'library/configparser.html#configparser.ConfigParser.get',
        'library/configparser.html#ConfigParser.RawConfigParser.getboolean': 'library/configparser.html#configparser.ConfigParser.getboolean',
        'library/configparser.html#ConfigParser.RawConfigParser.getfloat': 'library/configparser.html#configparser.ConfigParser.getfloat',
        'library/configparser.html#ConfigParser.RawConfigParser.getint': 'library/configparser.html#configparser.ConfigParser.getint',
        'library/configparser.html#ConfigParser.RawConfigParser.has_option': 'library/configparser.html#configparser.ConfigParser.has_option',
        'library/configparser.html#ConfigParser.RawConfigParser.has_section': 'library/configparser.html#configparser.ConfigParser.has_section',
        'library/configparser.html#ConfigParser.RawConfigParser.items': 'library/configparser.html#configparser.ConfigParser.items',
        'library/configparser.html#ConfigParser.RawConfigParser.options': 'library/configparser.html#configparser.ConfigParser.options',
        'library/configparser.html#ConfigParser.RawConfigParser.optionxform': 'library/configparser.html#configparser.ConfigParser.optionxform',
        'library/configparser.html#ConfigParser.RawConfigParser.read': 'library/configparser.html#configparser.ConfigParser.read',
        'library/configparser.html#ConfigParser.RawConfigParser.readfp': 'library/configparser.html#configparser.ConfigParser.readfp',
        'library/configparser.html#ConfigParser.RawConfigParser.remove_option': 'library/configparser.html#configparser.ConfigParser.remove_option',
        'library/configparser.html#ConfigParser.RawConfigParser.remove_section': 'library/configparser.html#configparser.ConfigParser.remove_section',
        'library/configparser.html#ConfigParser.RawConfigParser.sections': 'library/configparser.html#configparser.ConfigParser.sections',
        'library/configparser.html#ConfigParser.RawConfigParser.write': 'library/configparser.html#configparser.ConfigParser.write',
        // These two methods could be redirected to RawConfigParser still
        'library/configparser.html#ConfigParser.RawConfigParser.add_section': 'library/configparser.html#configparser.ConfigParser.add_section',
        'library/configparser.html#ConfigParser.RawConfigParser.set': 'library/configparser.html#configparser.ConfigParser.set',
        // SafeConfigParser became the default ConfigParser
        'library/configparser.html#ConfigParser.SafeConfigParser': 'library/configparser.html#configparser.ConfigParser',
        'library/configparser.html#ConfigParser.SafeConfigParser.set': 'library/configparser.html#configparser.ConfigParser.set',
        'library/configparser.html#safeconfigparser-objects': 'library/configparser.html#configparser-objects',
        'library/configparser.html#examples': 'library/configparser.html#legacy-api-examples',

        // These shouldn't be redirected
        // TODO: check that all of these shouldn't be redirected
        'library/dis.html#opcode-BINARY_DIVIDE': null,
        'library/dis.html#opcode-BREAK_LOOP': null,
        'library/dis.html#opcode-BUILD_CLASS': null,
        'library/dis.html#opcode-CALL_FUNCTION_VAR': null,
        'library/dis.html#opcode-CALL_FUNCTION_VAR_KW': null,
        'library/dis.html#opcode-CONTINUE_LOOP': null,
        'library/dis.html#opcode-DELETE_SLICE+0': null,
        'library/dis.html#opcode-DELETE_SLICE+1': null,
        'library/dis.html#opcode-DELETE_SLICE+2': null,
        'library/dis.html#opcode-DELETE_SLICE+3': null,
        'library/dis.html#opcode-DUP_TOPX': null,
        'library/dis.html#opcode-EXEC_STMT': null,
        'library/dis.html#opcode-INPLACE_DIVIDE': null,
        'library/dis.html#opcode-LOAD_LOCALS': null,
        'library/dis.html#opcode-MAKE_CLOSURE': null,
        'library/dis.html#opcode-PRINT_ITEM': null,
        'library/dis.html#opcode-PRINT_ITEM_TO': null,
        'library/dis.html#opcode-PRINT_NEWLINE': null,
        'library/dis.html#opcode-PRINT_NEWLINE_TO': null,
        'library/dis.html#opcode-SETUP_EXCEPT': null,
        'library/dis.html#opcode-SETUP_LOOP': null,
        'library/dis.html#opcode-SET_LINENO': null,
        'library/dis.html#opcode-SLICE+0': null,
        'library/dis.html#opcode-SLICE+1': null,
        'library/dis.html#opcode-SLICE+2': null,
        'library/dis.html#opcode-SLICE+3': null,
        'library/dis.html#opcode-STOP_CODE': null,
        'library/dis.html#opcode-STORE_MAP': null,
        'library/dis.html#opcode-STORE_SLICE+0': null,
        'library/dis.html#opcode-STORE_SLICE+1': null,
        'library/dis.html#opcode-STORE_SLICE+2': null,
        'library/dis.html#opcode-STORE_SLICE+3': null,
        'library/dis.html#opcode-UNARY_CONVERT': null,
        'library/dis.html#opcode-WITH_CLEANUP': null,


        'library/string.html#deprecated-string-functions': null,
        'library/string.html#new-string-formatting': 'library/string.html#formatstrings',
        'library/string.html#string-functions': 'library/stdtypes.html#string-methods',
        'library/string.html#string.atof': 'library/functions.html#float',
        'library/string.html#string.atoi': 'library/functions.html#int',
        'library/string.html#string.atol': 'library/functions.html#int',
        'library/string.html#string.capitalize': 'library/stdtypes.html#str.capitalize',
        'library/string.html#string.center': 'library/stdtypes.html#str.center',
        'library/string.html#string.count': 'library/stdtypes.html#str.count',
        'library/string.html#string.expandtabs': 'library/stdtypes.html#str.expandtabs',
        'library/string.html#string.find': 'library/stdtypes.html#str.find',
        'library/string.html#string.index': 'library/stdtypes.html#str.index',
        'library/string.html#string.join': 'library/stdtypes.html#str.join',
        'library/string.html#string.ljust': 'library/stdtypes.html#str.ljust',
        'library/string.html#string.lower': 'library/stdtypes.html#str.lower',
        'library/string.html#string.lstrip': 'library/stdtypes.html#str.lstrip',
        'library/string.html#string.maketrans': 'library/stdtypes.html#str.maketrans',
        'library/string.html#string.replace': 'library/stdtypes.html#str.replace',
        'library/string.html#string.rfind': 'library/stdtypes.html#str.rfind',
        'library/string.html#string.rindex': 'library/stdtypes.html#str.rindex',
        'library/string.html#string.rjust': 'library/stdtypes.html#str.rjust',
        'library/string.html#string.rsplit': 'library/stdtypes.html#str.rsplit',
        'library/string.html#string.rstrip': 'library/stdtypes.html#str.rstrip',
        'library/string.html#string.split': 'library/stdtypes.html#str.split',
        'library/string.html#string.strip': 'library/stdtypes.html#str.strip',
        'library/string.html#string.swapcase': 'library/stdtypes.html#str.swapcase',
        'library/string.html#string.translate': 'library/stdtypes.html#str.translate',
        'library/string.html#string.upper': 'library/stdtypes.html#str.upper',
        'library/string.html#string.zfill': 'library/stdtypes.html#str.zfill',
        // Use join() instead of joinfields()
        'library/string.html#string.joinfields': 'library/stdtypes.html#str.join',
        'library/string.html#string.splitfields': 'library/stdtypes.html#str.split',
        // These locale-dependent constants were removed
        'library/string.html#string.letters': 'library/string.html#string.ascii_letters',
        'library/string.html#string.lowercase': 'library/string.html#string.ascii_lowercase',
        'library/string.html#string.uppercase': 'library/string.html#string.ascii_uppercase',


        'library/ttk.html#module-ttk': 'library/tkinter.ttk.html#module-tkinter.ttk',
        // 'library/ttk.html#ttk-tk-themed-widgets': 'library/tkinter.ttk.html#tkinter.ttk-tk-themed-widgets',
        'library/ttk.html#ttk.Combobox': 'library/tkinter.ttk.html#tkinter.ttk.Combobox',
        'library/ttk.html#ttk.Combobox.current': 'library/tkinter.ttk.html#tkinter.ttk.Combobox.current',
        'library/ttk.html#ttk.Combobox.get': 'library/tkinter.ttk.html#tkinter.ttk.Combobox.get',
        'library/ttk.html#ttk.Combobox.set': 'library/tkinter.ttk.html#tkinter.ttk.Combobox.set',
        'library/ttk.html#ttk.Notebook': 'library/tkinter.ttk.html#tkinter.ttk.Notebook',
        'library/ttk.html#ttk.Notebook.add': 'library/tkinter.ttk.html#tkinter.ttk.Notebook.add',
        'library/ttk.html#ttk.Notebook.enable_traversal': 'library/tkinter.ttk.html#tkinter.ttk.Notebook.enable_traversal',
        'library/ttk.html#ttk.Notebook.forget': 'library/tkinter.ttk.html#tkinter.ttk.Notebook.forget',
        'library/ttk.html#ttk.Notebook.hide': 'library/tkinter.ttk.html#tkinter.ttk.Notebook.hide',
        'library/ttk.html#ttk.Notebook.identify': 'library/tkinter.ttk.html#tkinter.ttk.Notebook.identify',
        'library/ttk.html#ttk.Notebook.index': 'library/tkinter.ttk.html#tkinter.ttk.Notebook.index',
        'library/ttk.html#ttk.Notebook.insert': 'library/tkinter.ttk.html#tkinter.ttk.Notebook.insert',
        'library/ttk.html#ttk.Notebook.select': 'library/tkinter.ttk.html#tkinter.ttk.Notebook.select',
        'library/ttk.html#ttk.Notebook.tab': 'library/tkinter.ttk.html#tkinter.ttk.Notebook.tab',
        'library/ttk.html#ttk.Notebook.tabs': 'library/tkinter.ttk.html#tkinter.ttk.Notebook.tabs',
        'library/ttk.html#ttk.Progressbar': 'library/tkinter.ttk.html#tkinter.ttk.Progressbar',
        'library/ttk.html#ttk.Progressbar.start': 'library/tkinter.ttk.html#tkinter.ttk.Progressbar.start',
        'library/ttk.html#ttk.Progressbar.step': 'library/tkinter.ttk.html#tkinter.ttk.Progressbar.step',
        'library/ttk.html#ttk.Progressbar.stop': 'library/tkinter.ttk.html#tkinter.ttk.Progressbar.stop',
        'library/ttk.html#ttk.Style': 'library/tkinter.ttk.html#tkinter.ttk.Style',
        'library/ttk.html#ttk.Style.configure': 'library/tkinter.ttk.html#tkinter.ttk.Style.configure',
        'library/ttk.html#ttk.Style.element_create': 'library/tkinter.ttk.html#tkinter.ttk.Style.element_create',
        'library/ttk.html#ttk.Style.element_names': 'library/tkinter.ttk.html#tkinter.ttk.Style.element_names',
        'library/ttk.html#ttk.Style.element_options': 'library/tkinter.ttk.html#tkinter.ttk.Style.element_options',
        'library/ttk.html#ttk.Style.layout': 'library/tkinter.ttk.html#tkinter.ttk.Style.layout',
        'library/ttk.html#ttk.Style.lookup': 'library/tkinter.ttk.html#tkinter.ttk.Style.lookup',
        'library/ttk.html#ttk.Style.map': 'library/tkinter.ttk.html#tkinter.ttk.Style.map',
        'library/ttk.html#ttk.Style.theme_create': 'library/tkinter.ttk.html#tkinter.ttk.Style.theme_create',
        'library/ttk.html#ttk.Style.theme_names': 'library/tkinter.ttk.html#tkinter.ttk.Style.theme_names',
        'library/ttk.html#ttk.Style.theme_settings': 'library/tkinter.ttk.html#tkinter.ttk.Style.theme_settings',
        'library/ttk.html#ttk.Style.theme_use': 'library/tkinter.ttk.html#tkinter.ttk.Style.theme_use',
        'library/ttk.html#ttk.Treeview': 'library/tkinter.ttk.html#tkinter.ttk.Treeview',
        'library/ttk.html#ttk.Treeview.bbox': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.bbox',
        'library/ttk.html#ttk.Treeview.column': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.column',
        'library/ttk.html#ttk.Treeview.delete': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.delete',
        'library/ttk.html#ttk.Treeview.detach': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.detach',
        'library/ttk.html#ttk.Treeview.exists': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.exists',
        'library/ttk.html#ttk.Treeview.focus': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.focus',
        'library/ttk.html#ttk.Treeview.get_children': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.get_children',
        'library/ttk.html#ttk.Treeview.heading': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.heading',
        'library/ttk.html#ttk.Treeview.identify': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.identify',
        'library/ttk.html#ttk.Treeview.identify_column': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.identify_column',
        'library/ttk.html#ttk.Treeview.identify_element': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.identify_element',
        'library/ttk.html#ttk.Treeview.identify_region': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.identify_region',
        'library/ttk.html#ttk.Treeview.identify_row': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.identify_row',
        'library/ttk.html#ttk.Treeview.index': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.index',
        'library/ttk.html#ttk.Treeview.insert': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.insert',
        'library/ttk.html#ttk.Treeview.item': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.item',
        'library/ttk.html#ttk.Treeview.move': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.move',
        'library/ttk.html#ttk.Treeview.next': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.next',
        'library/ttk.html#ttk.Treeview.parent': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.parent',
        'library/ttk.html#ttk.Treeview.prev': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.prev',
        'library/ttk.html#ttk.Treeview.reattach': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.reattach',
        'library/ttk.html#ttk.Treeview.see': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.see',
        'library/ttk.html#ttk.Treeview.selection': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.selection',
        'library/ttk.html#ttk.Treeview.selection_add': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.selection_add',
        'library/ttk.html#ttk.Treeview.selection_remove': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.selection_remove',
        'library/ttk.html#ttk.Treeview.selection_set': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.selection_set',
        'library/ttk.html#ttk.Treeview.selection_toggle': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.selection_toggle',
        'library/ttk.html#ttk.Treeview.set': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.set',
        'library/ttk.html#ttk.Treeview.set_children': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.set_children',
        'library/ttk.html#ttk.Treeview.tag_bind': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.tag_bind',
        'library/ttk.html#ttk.Treeview.tag_configure': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.tag_configure',
        'library/ttk.html#ttk.Treeview.tag_has': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.tag_has',
        'library/ttk.html#ttk.Treeview.xview': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.xview',
        'library/ttk.html#ttk.Treeview.yview': 'library/tkinter.ttk.html#tkinter.ttk.Treeview.yview',
        'library/ttk.html#ttk.Widget': 'library/tkinter.ttk.html#tkinter.ttk.Widget',
        'library/ttk.html#ttk.Widget.identify': 'library/tkinter.ttk.html#tkinter.ttk.Widget.identify',
        'library/ttk.html#ttk.Widget.instate': 'library/tkinter.ttk.html#tkinter.ttk.Widget.instate',
        'library/ttk.html#ttk.Widget.state': 'library/tkinter.ttk.html#tkinter.ttk.Widget.state',

        'library/tix.html#Tix.Balloon': 'library/tkinter.tix.html#tkinter.tix.Balloon',
        'library/tix.html#Tix.ButtonBox': 'library/tkinter.tix.html#tkinter.tix.ButtonBox',
        'library/tix.html#Tix.CheckList': 'library/tkinter.tix.html#tkinter.tix.CheckList',
        'library/tix.html#Tix.ComboBox': 'library/tkinter.tix.html#tkinter.tix.ComboBox',
        'library/tix.html#Tix.Control': 'library/tkinter.tix.html#tkinter.tix.Control',
        'library/tix.html#Tix.DirList': 'library/tkinter.tix.html#tkinter.tix.DirList',
        'library/tix.html#Tix.DirSelectBox': 'library/tkinter.tix.html#tkinter.tix.DirSelectBox',
        'library/tix.html#Tix.DirSelectDialog': 'library/tkinter.tix.html#tkinter.tix.DirSelectDialog',
        'library/tix.html#Tix.DirTree': 'library/tkinter.tix.html#tkinter.tix.DirTree',
        'library/tix.html#Tix.ExFileSelectBox': 'library/tkinter.tix.html#tkinter.tix.ExFileSelectBox',
        'library/tix.html#Tix.FileEntry': 'library/tkinter.tix.html#tkinter.tix.FileEntry',
        'library/tix.html#Tix.FileSelectBox': 'library/tkinter.tix.html#tkinter.tix.FileSelectBox',
        'library/tix.html#Tix.Form': 'library/tkinter.tix.html#tkinter.tix.Form',
        'library/tix.html#Tix.HList': 'library/tkinter.tix.html#tkinter.tix.HList',
        'library/tix.html#Tix.InputOnly': 'library/tkinter.tix.html#tkinter.tix.InputOnly',
        'library/tix.html#Tix.LabelEntry': 'library/tkinter.tix.html#tkinter.tix.LabelEntry',
        'library/tix.html#Tix.LabelFrame': 'library/tkinter.tix.html#tkinter.tix.LabelFrame',
        'library/tix.html#Tix.ListNoteBook': 'library/tkinter.tix.html#tkinter.tix.ListNoteBook',
        'library/tix.html#Tix.Meter': 'library/tkinter.tix.html#tkinter.tix.Meter',
        'library/tix.html#Tix.NoteBook': 'library/tkinter.tix.html#tkinter.tix.NoteBook',
        'library/tix.html#Tix.OptionMenu': 'library/tkinter.tix.html#tkinter.tix.OptionMenu',
        'library/tix.html#Tix.PanedWindow': 'library/tkinter.tix.html#tkinter.tix.PanedWindow',
        'library/tix.html#Tix.PopupMenu': 'library/tkinter.tix.html#tkinter.tix.PopupMenu',
        'library/tix.html#Tix.Select': 'library/tkinter.tix.html#tkinter.tix.Select',
        'library/tix.html#Tix.StdButtonBox': 'library/tkinter.tix.html#tkinter.tix.StdButtonBox',
        'library/tix.html#Tix.TList': 'library/tkinter.tix.html#tkinter.tix.TList',
        // Renamed class
        'library/tix.html#Tix.Tix': 'library/tkinter.tix.html#tkinter.tix.Tk',
        'library/tix.html#Tix.Tree': 'library/tkinter.tix.html#tkinter.tix.Tree',
        'library/tix.html#Tix.tixCommand': 'library/tkinter.tix.html#tkinter.tix.tixCommand',
        'library/tix.html#Tix.tixCommand.tix_addbitmapdir': 'library/tkinter.tix.html#tkinter.tix.tixCommand.tix_addbitmapdir',
        'library/tix.html#Tix.tixCommand.tix_cget': 'library/tkinter.tix.html#tkinter.tix.tixCommand.tix_cget',
        'library/tix.html#Tix.tixCommand.tix_configure': 'library/tkinter.tix.html#tkinter.tix.tixCommand.tix_configure',
        'library/tix.html#Tix.tixCommand.tix_filedialog': 'library/tkinter.tix.html#tkinter.tix.tixCommand.tix_filedialog',
        'library/tix.html#Tix.tixCommand.tix_getbitmap': 'library/tkinter.tix.html#tkinter.tix.tixCommand.tix_getbitmap',
        'library/tix.html#Tix.tixCommand.tix_getimage': 'library/tkinter.tix.html#tkinter.tix.tixCommand.tix_getimage',
        'library/tix.html#Tix.tixCommand.tix_option_get': 'library/tkinter.tix.html#tkinter.tix.tixCommand.tix_option_get',
        'library/tix.html#Tix.tixCommand.tix_resetoptions': 'library/tkinter.tix.html#tkinter.tix.tixCommand.tix_resetoptions',
        'library/tix.html#module-Tix': 'library/tkinter.tix.html#module-tkinter.tix',
        // 'library/tix.html#tix-extension-widgets-for-tk': '',

        'library/thread.html#module-thread': 'library/_thread.html#module-_thread',
        // 'library/thread.html#thread-multiple-threads-of-control': '',
        'library/thread.html#thread.LockType': 'library/_thread.html#_thread.LockType',
        'library/thread.html#thread.allocate_lock': 'library/_thread.html#_thread.allocate_lock',
        'library/thread.html#thread.error': 'library/_thread.html#_thread.error',
        'library/thread.html#thread.exit': 'library/_thread.html#_thread.exit',
        'library/thread.html#thread.get_ident': 'library/_thread.html#_thread.get_ident',
        'library/thread.html#thread.interrupt_main': 'library/_thread.html#_thread.interrupt_main',
        'library/thread.html#thread.lock.acquire': 'library/_thread.html#_thread.lock.acquire',
        'library/thread.html#thread.lock.locked': 'library/_thread.html#_thread.lock.locked',
        'library/thread.html#thread.lock.release': 'library/_thread.html#_thread.lock.release',
        'library/thread.html#thread.stack_size': 'library/_thread.html#_thread.stack_size',
        'library/thread.html#thread.start_new_thread': 'library/_thread.html#_thread.start_new_thread',


        'library/unittest.html#unittest.TestCase.assertDictContainsSubset': null,
        'library/unittest.html#unittest.TestCase.assertItemsEqual': 'library/unittest.html#unittest.TestCase.assertCountEqual',
        'library/unittest.html#unittest.TestCase.assertRegexpMatches': 'library/unittest.html#unittest.TestCase.assertRegex',
        'library/unittest.html#unittest.TestCase.assertNotRegexpMatches': 'library/unittest.html#unittest.TestCase.assertNotRegex',
        'library/unittest.html#unittest.TestCase.assertRaisesRegexp': 'library/unittest.html#unittest.TestCase.assertRaisesRegex',


        'library/urlparse.html#module-urlparse': 'library/urllib.parse.html#module-urllib.parse',
        'library/urlparse.html#results-of-urlparse-and-urlsplit': 'library/urllib.parse.html#structured-parse-results',
        // 'library/urlparse.html#urlparse-parse-urls-into-components': 'library/urllib.parse.html#urllib.parse-parse-urls-into-components',
        'library/urlparse.html#urlparse.ParseResult': 'library/urllib.parse.html#urllib.parse.ParseResult',
        // This might look wrong, but it's not.
        'library/urlparse.html#urlparse.ParseResult.geturl': 'library/urllib.parse.html#urllib.parse.urllib.parse.SplitResult.geturl',
        'library/urlparse.html#urlparse.SplitResult': 'library/urllib.parse.html#urllib.parse.SplitResult',
        'library/urlparse.html#urlparse.parse_qs': 'library/urllib.parse.html#urllib.parse.parse_qs',
        'library/urlparse.html#urlparse.parse_qsl': 'library/urllib.parse.html#urllib.parse.parse_qsl',
        'library/urlparse.html#urlparse.urldefrag': 'library/urllib.parse.html#urllib.parse.urldefrag',
        'library/urlparse.html#urlparse.urljoin': 'library/urllib.parse.html#urllib.parse.urljoin',
        'library/urlparse.html#urlparse.urlparse': 'library/urllib.parse.html#urllib.parse.urlparse',
        'library/urlparse.html#urlparse.urlsplit': 'library/urllib.parse.html#urllib.parse.urlsplit',
        'library/urlparse.html#urlparse.urlunparse': 'library/urllib.parse.html#urllib.parse.urlunparse',
        'library/urlparse.html#urlparse.urlunsplit': 'library/urllib.parse.html#urllib.parse.urlunsplit',

        'library/urllib.html#examples': 'library/urllib.request.html#examples',
        // 'library/urllib.html#high-level-interface': 'library/urllib.request.html#high-level-interface',
        'library/urllib.html#url-opener-objects': 'library/urllib.request.html#urllib.request.URLopener',
        'library/urllib.html#urllib-examples': 'library/urllib.request.html#urllib-examples',
        'library/urllib.html#urllib-open-arbitrary-resources-by-url': 'library/urllib.request.html#module-urllib.request',
        'library/urllib.html#urllib-restrictions': 'library/urllib.request.html#urllib-request-restrictions',
        'library/urllib.html#urllib.FancyURLopener.prompt_user_passwd': 'library/urllib.request.html#urllib.request.FancyURLopener.prompt_user_passwd',
        'library/urllib.html#urllib.URLopener.open': 'library/urllib.request.html#urllib.request.URLopener.open',
        'library/urllib.html#urllib.URLopener.open_unknown': 'library/urllib.request.html#urllib.request.URLopener.open_unknown',
        'library/urllib.html#urllib.URLopener.retrieve': 'library/urllib.request.html#urllib.request.URLopener.retrieve',
        'library/urllib.html#urllib.URLopener.version': 'library/urllib.request.html#urllib.request.URLopener.version',
        'library/urllib.html#urllib._urlopener': null,
        // The last 3 functions aren't under this heading, just library/urllib.parse.html
        'library/urllib.html#utility-functions': 'library/urllib.parse.html#url-quoting',
           
        // TODO: this module was also split into library/urllib.error.html
        'library/urllib2.html': 'library/urllib.request.html',
        'library/urllib2.html#module-urllib2': 'library/urllib.request.html#module-urllib.request',
        'library/urllib2.html#urllib2-examples': 'library/urllib.request.html#examples',
        'library/urllib2.html#urllib2-extensible-library-for-opening-urls': 'library/urllib.request.html#urllib.request-extensible-library-for-opening-urls',
        'library/urllib2.html#urllib2.AbstractBasicAuthHandler.http_error_auth_reqed': 'library/urllib.request.html#urllib.request.AbstractBasicAuthHandler.http_error_auth_reqed',
        'library/urllib2.html#urllib2.AbstractDigestAuthHandler.http_error_auth_reqed': 'library/urllib.request.html#urllib.request.AbstractDigestAuthHandler.http_error_auth_reqed',
        'library/urllib2.html#urllib2.BaseHandler.add_parent': 'library/urllib.request.html#urllib.request.BaseHandler.add_parent',
        'library/urllib2.html#urllib2.BaseHandler.close': 'library/urllib.request.html#urllib.request.BaseHandler.close',
        'library/urllib2.html#urllib2.BaseHandler.default_open': 'library/urllib.request.html#urllib.request.BaseHandler.default_open',
        'library/urllib2.html#urllib2.BaseHandler.http_error_default': 'library/urllib.request.html#urllib.request.BaseHandler.http_error_default',
        // Element doesn't have a linkable id in the Python 3 documentation
        // 'library/urllib2.html#urllib2.BaseHandler.http_error_nnn': 'library/urllib.request.html#urllib.request.BaseHandler.http_error_nnn',
        'library/urllib2.html#urllib2.BaseHandler.http_error_nnn': 'library/urllib.request.html#urllib.request.BaseHandler',
        'library/urllib2.html#urllib2.BaseHandler.parent': 'library/urllib.request.html#urllib.request.BaseHandler.parent',
        'library/urllib2.html#urllib2.BaseHandler.unknown_open': 'library/urllib.request.html#urllib.request.BaseHandler.unknown_open',
        'library/urllib2.html#urllib2.CacheFTPHandler.setMaxConns': 'library/urllib.request.html#urllib.request.CacheFTPHandler.setMaxConns',
        'library/urllib2.html#urllib2.CacheFTPHandler.setTimeout': 'library/urllib.request.html#urllib.request.CacheFTPHandler.setTimeout',
        'library/urllib2.html#urllib2.FTPHandler.ftp_open': 'library/urllib.request.html#urllib.request.FTPHandler.ftp_open',
        'library/urllib2.html#urllib2.FileHandler.file_open': 'library/urllib.request.html#urllib.request.FileHandler.file_open',
        'library/urllib2.html#urllib2.HTTPBasicAuthHandler.http_error_401': 'library/urllib.request.html#urllib.request.HTTPBasicAuthHandler.http_error_401',
        'library/urllib2.html#urllib2.HTTPCookieProcessor.cookiejar': 'library/urllib.request.html#urllib.request.HTTPCookieProcessor.cookiejar',
        'library/urllib2.html#urllib2.HTTPDigestAuthHandler.http_error_401': 'library/urllib.request.html#urllib.request.HTTPDigestAuthHandler.http_error_401',
        'library/urllib2.html#urllib2.HTTPError.code': 'library/urllib.error.html#urllib.error.HTTPError.code',
        'library/urllib2.html#urllib2.HTTPError.reason': 'library/urllib.error.html#urllib.error.HTTPError.reason',
        'library/urllib2.html#urllib2.HTTPErrorProcessor': 'library/urllib.request.html#urllib.request.HTTPErrorProcessor',
        'library/urllib2.html#urllib2.HTTPErrorProcessor.http_response': 'library/urllib.request.html#urllib.request.HTTPErrorProcessor.http_response',
        'library/urllib2.html#urllib2.HTTPErrorProcessor.https_response': 'library/urllib.request.html#urllib.request.HTTPErrorProcessor.https_response',
        'library/urllib2.html#urllib2.HTTPHandler.http_open': 'library/urllib.request.html#urllib.request.HTTPHandler.http_open',
        'library/urllib2.html#urllib2.HTTPPasswordMgr.add_password': 'library/urllib.request.html#urllib.request.HTTPPasswordMgr.add_password',
        'library/urllib2.html#urllib2.HTTPPasswordMgr.find_user_password': 'library/urllib.request.html#urllib.request.HTTPPasswordMgr.find_user_password',
        'library/urllib2.html#urllib2.HTTPRedirectHandler.http_error_301': 'library/urllib.request.html#urllib.request.HTTPRedirectHandler.http_error_301',
        'library/urllib2.html#urllib2.HTTPRedirectHandler.http_error_302': 'library/urllib.request.html#urllib.request.HTTPRedirectHandler.http_error_302',
        'library/urllib2.html#urllib2.HTTPRedirectHandler.http_error_303': 'library/urllib.request.html#urllib.request.HTTPRedirectHandler.http_error_303',
        'library/urllib2.html#urllib2.HTTPRedirectHandler.http_error_307': 'library/urllib.request.html#urllib.request.HTTPRedirectHandler.http_error_307',
        'library/urllib2.html#urllib2.HTTPRedirectHandler.redirect_request': 'library/urllib.request.html#urllib.request.HTTPRedirectHandler.redirect_request',
        'library/urllib2.html#urllib2.HTTPSHandler.https_open': 'library/urllib.request.html#urllib.request.HTTPSHandler.https_open',
        'library/urllib2.html#urllib2.OpenerDirector.add_handler': 'library/urllib.request.html#urllib.request.OpenerDirector.add_handler',
        'library/urllib2.html#urllib2.OpenerDirector.error': 'library/urllib.request.html#urllib.request.OpenerDirector.error',
        'library/urllib2.html#urllib2.OpenerDirector.open': 'library/urllib.request.html#urllib.request.OpenerDirector.open',
        'library/urllib2.html#urllib2.ProxyBasicAuthHandler.http_error_407': 'library/urllib.request.html#urllib.request.ProxyBasicAuthHandler.http_error_407',
        'library/urllib2.html#urllib2.ProxyDigestAuthHandler.http_error_407': 'library/urllib.request.html#urllib.request.ProxyDigestAuthHandler.http_error_407',
        'library/urllib2.html#urllib2.Request.add_data': null,
        'library/urllib2.html#urllib2.Request.add_header': 'library/urllib.request.html#urllib.request.Request.add_header',
        'library/urllib2.html#urllib2.Request.add_unredirected_header': 'library/urllib.request.html#urllib.request.Request.add_unredirected_header',
        'library/urllib2.html#urllib2.Request.get_data': null,
        'library/urllib2.html#urllib2.Request.get_full_url': 'library/urllib.request.html#urllib.request.Request.get_full_url',
        'library/urllib2.html#urllib2.Request.get_header': 'library/urllib.request.html#urllib.request.Request.get_header',
        'library/urllib2.html#urllib2.Request.get_host': null,
        'library/urllib2.html#urllib2.Request.get_method': 'library/urllib.request.html#urllib.request.Request.get_method',
        'library/urllib2.html#urllib2.Request.get_origin_req_host': null,
        'library/urllib2.html#urllib2.Request.get_selector': null,
        'library/urllib2.html#urllib2.Request.get_type': null,
        'library/urllib2.html#urllib2.Request.has_data': null,
        'library/urllib2.html#urllib2.Request.has_header': 'library/urllib.request.html#urllib.request.Request.has_header',
        'library/urllib2.html#urllib2.Request.header_items': 'library/urllib.request.html#urllib.request.Request.header_items',
        'library/urllib2.html#urllib2.Request.is_unverifiable': null,
        'library/urllib2.html#urllib2.Request.set_proxy': 'library/urllib.request.html#urllib.request.Request.set_proxy',
        'library/urllib2.html#urllib2.URLError.reason': 'library/urllib.error.html#urllib.error.URLError.reason',
        'library/urllib2.html#urllib2.UnknownHandler.unknown_open': 'library/urllib.request.html#urllib.request.UnknownHandler.unknown_open',


        'library/robotparser.html#module-robotparser': 'library/urllib.robotparser.html#module-urllib.robotparser',
        'library/robotparser.html#robotparser-parser-for-robots-txt': 'library/urllib.robotparser.html#urllib.robotparser-parser-for-robots-txt',
        'library/robotparser.html#robotparser.RobotFileParser': 'library/urllib.robotparser.html#urllib.robotparser.RobotFileParser',
        'library/robotparser.html#robotparser.RobotFileParser.can_fetch': 'library/urllib.robotparser.html#urllib.robotparser.RobotFileParser.can_fetch',
        'library/robotparser.html#robotparser.RobotFileParser.modified': 'library/urllib.robotparser.html#urllib.robotparser.RobotFileParser.modified',
        'library/robotparser.html#robotparser.RobotFileParser.mtime': 'library/urllib.robotparser.html#urllib.robotparser.RobotFileParser.mtime',
        'library/robotparser.html#robotparser.RobotFileParser.parse': 'library/urllib.robotparser.html#urllib.robotparser.RobotFileParser.parse',
        'library/robotparser.html#robotparser.RobotFileParser.read': 'library/urllib.robotparser.html#urllib.robotparser.RobotFileParser.read',
        'library/robotparser.html#robotparser.RobotFileParser.set_url': 'library/urllib.robotparser.html#urllib.robotparser.RobotFileParser.set_url',


        'library/xmlrpclib.html#module-xmlrpclib': 'library/xmlrpc.client.html#module-xmlrpc.client',
        'library/xmlrpclib.html#xmlrpclib.dumps': 'library/xmlrpc.client.html#xmlrpc.client.dumps',
        'library/xmlrpclib.html#xmlrpclib.loads': 'library/xmlrpc.client.html#xmlrpc.client.loads',
        // 'library/xmlrpclib.html#xmlrpclib-xml-rpc-client-access': 'library/xmlrpc.client.html#xmlrpc.client-xml-rpc-client-access',
        'library/xmlrpclib.html#xmlrpclib.Binary': 'library/xmlrpc.client.html#xmlrpc.client.Binary',
        'library/xmlrpclib.html#xmlrpclib.Binary.data': 'library/xmlrpc.client.html#xmlrpc.client.Binary.data',
        'library/xmlrpclib.html#xmlrpclib.Binary.decode': 'library/xmlrpc.client.html#xmlrpc.client.Binary.decode',
        'library/xmlrpclib.html#xmlrpclib.Binary.encode': 'library/xmlrpc.client.html#xmlrpc.client.Binary.encode',
        'library/xmlrpclib.html#xmlrpclib.DateTime': 'library/xmlrpc.client.html#xmlrpc.client.DateTime',
        'library/xmlrpclib.html#xmlrpclib.DateTime.decode': 'library/xmlrpc.client.html#xmlrpc.client.DateTime.decode',
        'library/xmlrpclib.html#xmlrpclib.DateTime.encode': 'library/xmlrpc.client.html#xmlrpc.client.DateTime.encode',
        'library/xmlrpclib.html#xmlrpclib.Fault': 'library/xmlrpc.client.html#xmlrpc.client.Fault',
        'library/xmlrpclib.html#xmlrpclib.Fault.faultCode': 'library/xmlrpc.client.html#xmlrpc.client.Fault.faultCode',
        'library/xmlrpclib.html#xmlrpclib.Fault.faultString': 'library/xmlrpc.client.html#xmlrpc.client.Fault.faultString',
        'library/xmlrpclib.html#xmlrpclib.MultiCall': 'library/xmlrpc.client.html#xmlrpc.client.MultiCall',
        'library/xmlrpclib.html#xmlrpclib.ProtocolError': 'library/xmlrpc.client.html#xmlrpc.client.ProtocolError',
        'library/xmlrpclib.html#xmlrpclib.ProtocolError.errcode': 'library/xmlrpc.client.html#xmlrpc.client.ProtocolError.errcode',
        'library/xmlrpclib.html#xmlrpclib.ProtocolError.errmsg': 'library/xmlrpc.client.html#xmlrpc.client.ProtocolError.errmsg',
        'library/xmlrpclib.html#xmlrpclib.ProtocolError.headers': 'library/xmlrpc.client.html#xmlrpc.client.ProtocolError.headers',
        'library/xmlrpclib.html#xmlrpclib.ProtocolError.url': 'library/xmlrpc.client.html#xmlrpc.client.ProtocolError.url',
        'library/xmlrpclib.html#xmlrpclib.ServerProxy': 'library/xmlrpc.client.html#xmlrpc.client.ServerProxy',
        'library/xmlrpclib.html#xmlrpclib.ServerProxy.system.listMethods': 'library/xmlrpc.client.html#xmlrpc.client.ServerProxy.system.listMethods',
        'library/xmlrpclib.html#xmlrpclib.ServerProxy.system.methodHelp': 'library/xmlrpc.client.html#xmlrpc.client.ServerProxy.system.methodHelp',
        'library/xmlrpclib.html#xmlrpclib.ServerProxy.system.methodSignature': 'library/xmlrpc.client.html#xmlrpc.client.ServerProxy.system.methodSignature',
        // TODO: no longer documented
        'library/xmlrpclib.html#boolean-objects': null,
        'library/xmlrpclib.html#xmlrpclib.Boolean.encode': null,
        'library/xmlrpclib.html#xmlrpclib.boolean': null,

        'library/simplexmlrpcserver.html#SimpleXMLRPCServer.CGIXMLRPCRequestHandler': 'library/xmlrpc.server.html#xmlrpc.server.CGIXMLRPCRequestHandler',
        'library/simplexmlrpcserver.html#SimpleXMLRPCServer.CGIXMLRPCRequestHandler.handle_request': 'library/xmlrpc.server.html#xmlrpc.server.CGIXMLRPCRequestHandler.handle_request',
        'library/simplexmlrpcserver.html#SimpleXMLRPCServer.CGIXMLRPCRequestHandler.register_function': 'library/xmlrpc.server.html#xmlrpc.server.CGIXMLRPCRequestHandler.register_function',
        'library/simplexmlrpcserver.html#SimpleXMLRPCServer.CGIXMLRPCRequestHandler.register_instance': 'library/xmlrpc.server.html#xmlrpc.server.CGIXMLRPCRequestHandler.register_instance',
        'library/simplexmlrpcserver.html#SimpleXMLRPCServer.CGIXMLRPCRequestHandler.register_introspection_functions': 'library/xmlrpc.server.html#xmlrpc.server.CGIXMLRPCRequestHandler.register_introspection_functions',
        'library/simplexmlrpcserver.html#SimpleXMLRPCServer.CGIXMLRPCRequestHandler.register_multicall_functions': 'library/xmlrpc.server.html#xmlrpc.server.CGIXMLRPCRequestHandler.register_multicall_functions',
        'library/simplexmlrpcserver.html#SimpleXMLRPCServer.SimpleXMLRPCRequestHandler': 'library/xmlrpc.server.html#xmlrpc.server.SimpleXMLRPCRequestHandler',
        // Added in Python 2.7 but not in Python 3
        'library/simplexmlrpcserver.html#SimpleXMLRPCServer.SimpleXMLRPCRequestHandler.encode_threshold': null,
        'library/simplexmlrpcserver.html#SimpleXMLRPCServer.SimpleXMLRPCRequestHandler.rpc_paths': 'library/xmlrpc.server.html#xmlrpc.server.SimpleXMLRPCRequestHandler.rpc_paths',
        'library/simplexmlrpcserver.html#SimpleXMLRPCServer.SimpleXMLRPCServer': 'library/xmlrpc.server.html#xmlrpc.server.SimpleXMLRPCServer',
        'library/simplexmlrpcserver.html#SimpleXMLRPCServer.SimpleXMLRPCServer.register_function': 'library/xmlrpc.server.html#xmlrpc.server.SimpleXMLRPCServer.register_function',
        'library/simplexmlrpcserver.html#SimpleXMLRPCServer.SimpleXMLRPCServer.register_instance': 'library/xmlrpc.server.html#xmlrpc.server.SimpleXMLRPCServer.register_instance',
        'library/simplexmlrpcserver.html#SimpleXMLRPCServer.SimpleXMLRPCServer.register_introspection_functions': 'library/xmlrpc.server.html#xmlrpc.server.SimpleXMLRPCServer.register_introspection_functions',
        'library/simplexmlrpcserver.html#SimpleXMLRPCServer.SimpleXMLRPCServer.register_multicall_functions': 'library/xmlrpc.server.html#xmlrpc.server.SimpleXMLRPCServer.register_multicall_functions',
        'library/simplexmlrpcserver.html#module-SimpleXMLRPCServer': 'library/xmlrpc.server.html#module-xmlrpc.server',

        'library/docxmlrpcserver.html#DocXMLRPCServer.DocCGIXMLRPCRequestHandler': 'library/xmlrpc.server.html#xmlrpc.server.DocCGIXMLRPCRequestHandler',
        'library/docxmlrpcserver.html#DocXMLRPCServer.DocCGIXMLRPCRequestHandler.set_server_documentation': 'library/xmlrpc.server.html#xmlrpc.server.DocCGIXMLRPCRequestHandler.set_server_documentation',
        'library/docxmlrpcserver.html#DocXMLRPCServer.DocCGIXMLRPCRequestHandler.set_server_name': 'library/xmlrpc.server.html#xmlrpc.server.DocCGIXMLRPCRequestHandler.set_server_name',
        'library/docxmlrpcserver.html#DocXMLRPCServer.DocCGIXMLRPCRequestHandler.set_server_title': 'library/xmlrpc.server.html#xmlrpc.server.DocCGIXMLRPCRequestHandler.set_server_title',
        'library/docxmlrpcserver.html#DocXMLRPCServer.DocXMLRPCRequestHandler': 'library/xmlrpc.server.html#xmlrpc.server.DocXMLRPCRequestHandler',
        'library/docxmlrpcserver.html#DocXMLRPCServer.DocXMLRPCServer': 'library/xmlrpc.server.html#xmlrpc.server.DocXMLRPCServer',
        'library/docxmlrpcserver.html#DocXMLRPCServer.DocXMLRPCServer.set_server_documentation': 'library/xmlrpc.server.html#xmlrpc.server.DocXMLRPCServer.set_server_documentation',
        'library/docxmlrpcserver.html#DocXMLRPCServer.DocXMLRPCServer.set_server_name': 'library/xmlrpc.server.html#xmlrpc.server.DocXMLRPCServer.set_server_name',
        'library/docxmlrpcserver.html#DocXMLRPCServer.DocXMLRPCServer.set_server_title': 'library/xmlrpc.server.html#xmlrpc.server.DocXMLRPCServer.set_server_title',
        // 'library/docxmlrpcserver.html#docxmlrpcserver-self-documenting-xml-rpc-server': 'library/xmlrpc.server.html#docxmlrpcserver-self-documenting-xml-rpc-server',
        'library/docxmlrpcserver.html#module-DocXMLRPCServer': 'library/xmlrpc.server.html#documenting-xmlrpc-server',

        'library/threading.html#threading.Condition.notifyAll': 'library/threading.html#threading.Condition.notify_all',
        'library/threading.html#threading.Event.isSet': 'library/threading.html#threading.Event.is_set',
        'library/threading.html#threading.Thread.isAlive': 'library/threading.html#threading.Thread.is_alive',
        'library/threading.html#threading.ThreadError': null,
        'library/threading.html#threading.activeCount': 'library/threading.html#threading.active_count',
        'library/threading.html#threading.currentThread': 'library/threading.html#threading.current_thread',

        'library/repr.html#repr-alternate-repr-implementation': 'library/reprlib.html#reprlib-alternate-repr-implementation',
        'library/repr.html#repr.Repr': 'library/reprlib.html#reprlib.Repr',
        'library/repr.html#repr.Repr.maxarray': 'library/reprlib.html#reprlib.Repr.maxarray',
        'library/repr.html#repr.Repr.maxdeque': 'library/reprlib.html#reprlib.Repr.maxdeque',
        'library/repr.html#repr.Repr.maxdict': 'library/reprlib.html#reprlib.Repr.maxdict',
        'library/repr.html#repr.Repr.maxfrozenset': 'library/reprlib.html#reprlib.Repr.maxfrozenset',
        'library/repr.html#repr.Repr.maxlevel': 'library/reprlib.html#reprlib.Repr.maxlevel',
        'library/repr.html#repr.Repr.maxlist': 'library/reprlib.html#reprlib.Repr.maxlist',
        'library/repr.html#repr.Repr.maxlong': 'library/reprlib.html#reprlib.Repr.maxlong',
        'library/repr.html#repr.Repr.maxother': 'library/reprlib.html#reprlib.Repr.maxother',
        'library/repr.html#repr.Repr.maxset': 'library/reprlib.html#reprlib.Repr.maxset',
        'library/repr.html#repr.Repr.maxstring': 'library/reprlib.html#reprlib.Repr.maxstring',
        'library/repr.html#repr.Repr.maxtuple': 'library/reprlib.html#reprlib.Repr.maxtuple',
        'library/repr.html#repr.Repr.repr': 'library/reprlib.html#reprlib.Repr.repr',
        'library/repr.html#repr.Repr.repr1': 'library/reprlib.html#reprlib.Repr.repr1',
        'library/repr.html#repr.aRepr': 'library/reprlib.html#reprlib.aRepr',
        'library/repr.html#repr.repr': 'library/reprlib.html#reprlib.repr',

        'library/queue.html#Queue.Empty': 'library/queue.html#queue.Empty',
        'library/queue.html#Queue.Full': 'library/queue.html#queue.Full',
        'library/queue.html#Queue.LifoQueue': 'library/queue.html#queue.LifoQueue',
        'library/queue.html#Queue.PriorityQueue': 'library/queue.html#queue.PriorityQueue',
        'library/queue.html#Queue.Queue': 'library/queue.html#queue.Queue',
        'library/queue.html#Queue.Queue.empty': 'library/queue.html#queue.Queue.empty',
        'library/queue.html#Queue.Queue.full': 'library/queue.html#queue.Queue.full',
        'library/queue.html#Queue.Queue.get': 'library/queue.html#queue.Queue.get',
        'library/queue.html#Queue.Queue.get_nowait': 'library/queue.html#queue.Queue.get_nowait',
        'library/queue.html#Queue.Queue.join': 'library/queue.html#queue.Queue.join',
        'library/queue.html#Queue.Queue.put': 'library/queue.html#queue.Queue.put',
        'library/queue.html#Queue.Queue.put_nowait': 'library/queue.html#queue.Queue.put_nowait',
        'library/queue.html#Queue.Queue.qsize': 'library/queue.html#queue.Queue.qsize',
        'library/queue.html#Queue.Queue.task_done': 'library/queue.html#queue.Queue.task_done',
        'library/queue.html#module-Queue': 'library/queue.html#module-queue',


        'library/re.html#examples': 'library/re.html#regular-expression-examples',
        'library/re.html#re.MatchObject': 'library/re.html#match-objects',
        'library/re.html#re.MatchObject.end': 'library/re.html#re.Match.end',
        'library/re.html#re.MatchObject.endpos': 'library/re.html#re.Match.endpos',
        'library/re.html#re.MatchObject.expand': 'library/re.html#re.Match.expand',
        'library/re.html#re.MatchObject.group': 'library/re.html#re.Match.group',
        'library/re.html#re.MatchObject.groupdict': 'library/re.html#re.Match.groupdict',
        'library/re.html#re.MatchObject.groups': 'library/re.html#re.Match.groups',
        'library/re.html#re.MatchObject.lastgroup': 'library/re.html#re.Match.lastgroup',
        'library/re.html#re.MatchObject.lastindex': 'library/re.html#re.Match.lastindex',
        'library/re.html#re.MatchObject.pos': 'library/re.html#re.Match.pos',
        'library/re.html#re.MatchObject.re': 'library/re.html#re.Match.re',
        'library/re.html#re.MatchObject.span': 'library/re.html#re.Match.span',
        'library/re.html#re.MatchObject.start': 'library/re.html#re.Match.start',
        'library/re.html#re.MatchObject.string': 'library/re.html#re.Match.string',
        'library/re.html#re.RegexObject': 'library/re.html#regular-expression-objects',
        'library/re.html#re.RegexObject.findall': 'library/re.html#re.Pattern.findall',
        'library/re.html#re.RegexObject.finditer': 'library/re.html#re.Pattern.finditer',
        'library/re.html#re.RegexObject.flags': 'library/re.html#re.Pattern.flags',
        'library/re.html#re.RegexObject.groupindex': 'library/re.html#re.Pattern.groupindex',
        'library/re.html#re.RegexObject.groups': 'library/re.html#re.Pattern.groups',
        'library/re.html#re.RegexObject.match': 'library/re.html#re.Pattern.match',
        'library/re.html#re.RegexObject.pattern': 'library/re.html#re.Pattern.pattern',
        'library/re.html#re.RegexObject.search': 'library/re.html#re.Pattern.search',
        'library/re.html#re.RegexObject.split': 'library/re.html#re.Pattern.split',
        'library/re.html#re.RegexObject.sub': 'library/re.html#re.Pattern.sub',
        'library/re.html#re.RegexObject.subn': 'library/re.html#re.Pattern.subn',
        // This flag is redundant on Python 3 and the documentation for the ASCII explains that
        // but redirecting there could be confusing
        // 'library/re.html#re.U': 'library/re.html#re.A',
        // 'library/re.html#re.UNICODE': 'library/re.html#re.ASCII',
        'library/re.html#re.U': null,
        'library/re.html#re.UNICODE': null,


        'library/htmlparser.html#HTMLParser.HTMLParseError': null,
        'library/htmlparser.html#HTMLParser.HTMLParser': 'library/html.parser.html#html.parser.HTMLParser',
        'library/htmlparser.html#HTMLParser.HTMLParser.close': 'library/html.parser.html#html.parser.HTMLParser.close',
        'library/htmlparser.html#HTMLParser.HTMLParser.feed': 'library/html.parser.html#html.parser.HTMLParser.feed',
        'library/htmlparser.html#HTMLParser.HTMLParser.get_starttag_text': 'library/html.parser.html#html.parser.HTMLParser.get_starttag_text',
        'library/htmlparser.html#HTMLParser.HTMLParser.getpos': 'library/html.parser.html#html.parser.HTMLParser.getpos',
        'library/htmlparser.html#HTMLParser.HTMLParser.handle_charref': 'library/html.parser.html#html.parser.HTMLParser.handle_charref',
        'library/htmlparser.html#HTMLParser.HTMLParser.handle_comment': 'library/html.parser.html#html.parser.HTMLParser.handle_comment',
        'library/htmlparser.html#HTMLParser.HTMLParser.handle_data': 'library/html.parser.html#html.parser.HTMLParser.handle_data',
        'library/htmlparser.html#HTMLParser.HTMLParser.handle_decl': 'library/html.parser.html#html.parser.HTMLParser.handle_decl',
        'library/htmlparser.html#HTMLParser.HTMLParser.handle_endtag': 'library/html.parser.html#html.parser.HTMLParser.handle_endtag',
        'library/htmlparser.html#HTMLParser.HTMLParser.handle_entityref': 'library/html.parser.html#html.parser.HTMLParser.handle_entityref',
        'library/htmlparser.html#HTMLParser.HTMLParser.handle_pi': 'library/html.parser.html#html.parser.HTMLParser.handle_pi',
        'library/htmlparser.html#HTMLParser.HTMLParser.handle_startendtag': 'library/html.parser.html#html.parser.HTMLParser.handle_startendtag',
        'library/htmlparser.html#HTMLParser.HTMLParser.handle_starttag': 'library/html.parser.html#html.parser.HTMLParser.handle_starttag',
        'library/htmlparser.html#HTMLParser.HTMLParser.reset': 'library/html.parser.html#html.parser.HTMLParser.reset',
        'library/htmlparser.html#HTMLParser.HTMLParser.unknown_decl': 'library/html.parser.html#html.parser.HTMLParser.unknown_decl',
        'library/htmlparser.html#htmlparser-simple-html-and-xhtml-parser': 'library/html.parser.html#html.parser-simple-html-and-xhtml-parser',
        'library/htmlparser.html#module-HTMLParser': 'library/html.parser.html#module-html.parser',


        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler': 'library/http.server.html#http.server.BaseHTTPRequestHandler',
        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.MessageClass': 'library/http.server.html#http.server.BaseHTTPRequestHandler.MessageClass',
        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.address_string': 'library/http.server.html#http.server.BaseHTTPRequestHandler.address_string',
        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.client_address': 'library/http.server.html#http.server.BaseHTTPRequestHandler.client_address',
        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.command': 'library/http.server.html#http.server.BaseHTTPRequestHandler.command',
        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.date_time_string': 'library/http.server.html#http.server.BaseHTTPRequestHandler.date_time_string',
        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.end_headers': 'library/http.server.html#http.server.BaseHTTPRequestHandler.end_headers',
        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.error_content_type': 'library/http.server.html#http.server.BaseHTTPRequestHandler.error_content_type',
        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.error_message_format': 'library/http.server.html#http.server.BaseHTTPRequestHandler.error_message_format',
        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.handle': 'library/http.server.html#http.server.BaseHTTPRequestHandler.handle',
        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.handle_one_request': 'library/http.server.html#http.server.BaseHTTPRequestHandler.handle_one_request',
        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.headers': 'library/http.server.html#http.server.BaseHTTPRequestHandler.headers',
        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.log_date_time_string': 'library/http.server.html#http.server.BaseHTTPRequestHandler.log_date_time_string',
        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.log_error': 'library/http.server.html#http.server.BaseHTTPRequestHandler.log_error',
        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.log_message': 'library/http.server.html#http.server.BaseHTTPRequestHandler.log_message',
        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.log_request': 'library/http.server.html#http.server.BaseHTTPRequestHandler.log_request',
        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.path': 'library/http.server.html#http.server.BaseHTTPRequestHandler.path',
        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.protocol_version': 'library/http.server.html#http.server.BaseHTTPRequestHandler.protocol_version',
        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.request_version': 'library/http.server.html#http.server.BaseHTTPRequestHandler.request_version',
        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.responses': 'library/http.server.html#http.server.BaseHTTPRequestHandler.responses',
        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.rfile': 'library/http.server.html#http.server.BaseHTTPRequestHandler.rfile',
        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.send_error': 'library/http.server.html#http.server.BaseHTTPRequestHandler.send_error',
        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.send_header': 'library/http.server.html#http.server.BaseHTTPRequestHandler.send_header',
        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.send_response': 'library/http.server.html#http.server.BaseHTTPRequestHandler.send_response',
        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.server': 'library/http.server.html#http.server.BaseHTTPRequestHandler.server',
        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.server_version': 'library/http.server.html#http.server.BaseHTTPRequestHandler.server_version',
        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.sys_version': 'library/http.server.html#http.server.BaseHTTPRequestHandler.sys_version',
        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.version_string': 'library/http.server.html#http.server.BaseHTTPRequestHandler.version_string',
        'library/basehttpserver.html#BaseHTTPServer.BaseHTTPRequestHandler.wfile': 'library/http.server.html#http.server.BaseHTTPRequestHandler.wfile',
        'library/basehttpserver.html#BaseHTTPServer.HTTPServer': 'library/http.server.html#http.server.HTTPServer',

        'library/simplehttpserver.html#SimpleHTTPServer.SimpleHTTPRequestHandler': 'library/http.server.html#http.server.SimpleHTTPRequestHandler',
        'library/simplehttpserver.html#SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET': 'library/http.server.html#http.server.SimpleHTTPRequestHandler.do_GET',
        'library/simplehttpserver.html#SimpleHTTPServer.SimpleHTTPRequestHandler.do_HEAD': 'library/http.server.html#http.server.SimpleHTTPRequestHandler.do_HEAD',
        'library/simplehttpserver.html#SimpleHTTPServer.SimpleHTTPRequestHandler.extensions_map': 'library/http.server.html#http.server.SimpleHTTPRequestHandler.extensions_map',
        'library/simplehttpserver.html#SimpleHTTPServer.SimpleHTTPRequestHandler.server_version': 'library/http.server.html#http.server.SimpleHTTPRequestHandler.server_version',
        'library/simplehttpserver.html#module-SimpleHTTPServer': 'library/http.server.html#module-http.server',
        // 'library/simplehttpserver.html#simplehttpserver-simple-http-request-handler': 'library/http.server.html#http.server.SimpleHTTPRequestHandler',

        'library/cgihttpserver.html#CGIHTTPServer.CGIHTTPRequestHandler': 'library/http.server.html#http.server.CGIHTTPRequestHandler',
        'library/cgihttpserver.html#CGIHTTPServer.CGIHTTPRequestHandler.cgi_directories': 'library/http.server.html#http.server.CGIHTTPRequestHandler.cgi_directories',
        'library/cgihttpserver.html#CGIHTTPServer.CGIHTTPRequestHandler.do_POST': 'library/http.server.html#http.server.CGIHTTPRequestHandler.do_POST',
        'library/cgihttpserver.html#cgihttpserver-cgi-capable-http-request-handler': 'library/http.server.html#http.server-cgi-capable-http-request-handler',
        'library/cgihttpserver.html#module-CGIHTTPServer': 'library/http.server.html#http.server.CGIHTTPRequestHandler',


        'library/httplib.html#httplib-examples': 'library/http.client.html#examples',
        'library/httplib.html#httplib-http-protocol-client': 'library/http.client.html#http.client-http-protocol-client',
        'library/httplib.html#httplib.BadStatusLine': 'library/http.client.html#http.client.BadStatusLine',
        'library/httplib.html#httplib.CannotSendHeader': 'library/http.client.html#http.client.CannotSendHeader',
        'library/httplib.html#httplib.CannotSendRequest': 'library/http.client.html#http.client.CannotSendRequest',
        'library/httplib.html#httplib.HTTPConnection': 'library/http.client.html#http.client.HTTPConnection',
        'library/httplib.html#httplib.HTTPConnection.close': 'library/http.client.html#http.client.HTTPConnection.close',
        'library/httplib.html#httplib.HTTPConnection.connect': 'library/http.client.html#http.client.HTTPConnection.connect',
        'library/httplib.html#httplib.HTTPConnection.endheaders': 'library/http.client.html#http.client.HTTPConnection.endheaders',
        'library/httplib.html#httplib.HTTPConnection.getresponse': 'library/http.client.html#http.client.HTTPConnection.getresponse',
        'library/httplib.html#httplib.HTTPConnection.putheader': 'library/http.client.html#http.client.HTTPConnection.putheader',
        'library/httplib.html#httplib.HTTPConnection.putrequest': 'library/http.client.html#http.client.HTTPConnection.putrequest',
        'library/httplib.html#httplib.HTTPConnection.request': 'library/http.client.html#http.client.HTTPConnection.request',
        'library/httplib.html#httplib.HTTPConnection.send': 'library/http.client.html#http.client.HTTPConnection.send',
        'library/httplib.html#httplib.HTTPConnection.set_debuglevel': 'library/http.client.html#http.client.HTTPConnection.set_debuglevel',
        'library/httplib.html#httplib.HTTPConnection.set_tunnel': 'library/http.client.html#http.client.HTTPConnection.set_tunnel',
        'library/httplib.html#httplib.HTTPException': 'library/http.client.html#http.client.HTTPException',
        'library/httplib.html#httplib.HTTPResponse': 'library/http.client.html#http.client.HTTPResponse',
        'library/httplib.html#httplib.HTTPResponse.fileno': 'library/http.client.html#http.client.HTTPResponse.fileno',
        'library/httplib.html#httplib.HTTPResponse.getheader': 'library/http.client.html#http.client.HTTPResponse.getheader',
        'library/httplib.html#httplib.HTTPResponse.getheaders': 'library/http.client.html#http.client.HTTPResponse.getheaders',
        'library/httplib.html#httplib.HTTPResponse.msg': 'library/http.client.html#http.client.HTTPResponse.msg',
        'library/httplib.html#httplib.HTTPResponse.read': 'library/http.client.html#http.client.HTTPResponse.read',
        'library/httplib.html#httplib.HTTPResponse.reason': 'library/http.client.html#http.client.HTTPResponse.reason',
        'library/httplib.html#httplib.HTTPResponse.status': 'library/http.client.html#http.client.HTTPResponse.status',
        'library/httplib.html#httplib.HTTPResponse.version': 'library/http.client.html#http.client.HTTPResponse.version',
        'library/httplib.html#httplib.HTTPSConnection': 'library/http.client.html#http.client.HTTPSConnection',
        'library/httplib.html#httplib.HTTPS_PORT': 'library/http.client.html#http.client.HTTPS_PORT',
        'library/httplib.html#httplib.HTTP_PORT': 'library/http.client.html#http.client.HTTP_PORT',
        'library/httplib.html#httplib.ImproperConnectionState': 'library/http.client.html#http.client.ImproperConnectionState',
        'library/httplib.html#httplib.IncompleteRead': 'library/http.client.html#http.client.IncompleteRead',
        'library/httplib.html#httplib.InvalidURL': 'library/http.client.html#http.client.InvalidURL',
        'library/httplib.html#httplib.NotConnected': 'library/http.client.html#http.client.NotConnected',
        'library/httplib.html#httplib.ResponseNotReady': 'library/http.client.html#http.client.ResponseNotReady',
        'library/httplib.html#httplib.UnimplementedFileMode': 'library/http.client.html#http.client.UnimplementedFileMode',
        'library/httplib.html#httplib.UnknownProtocol': 'library/http.client.html#http.client.UnknownProtocol',
        'library/httplib.html#httplib.UnknownTransferEncoding': 'library/http.client.html#http.client.UnknownTransferEncoding',
        'library/httplib.html#httplib.responses': 'library/http.client.html#http.client.responses',
        'library/httplib.html#httplib.HTTPMessage': 'library/http.client.html#httpmessage-objects',
        'library/httplib.html#module-httplib': 'library/http.client.html#module-http.client',

        'library/cookie.html#Cookie.BaseCookie': 'library/http.cookies.html#http.cookies.BaseCookie',
        'library/cookie.html#Cookie.BaseCookie.js_output': 'library/http.cookies.html#http.cookies.BaseCookie.js_output',
        'library/cookie.html#Cookie.BaseCookie.load': 'library/http.cookies.html#http.cookies.BaseCookie.load',
        'library/cookie.html#Cookie.BaseCookie.output': 'library/http.cookies.html#http.cookies.BaseCookie.output',
        'library/cookie.html#Cookie.BaseCookie.value_decode': 'library/http.cookies.html#http.cookies.BaseCookie.value_decode',
        'library/cookie.html#Cookie.BaseCookie.value_encode': 'library/http.cookies.html#http.cookies.BaseCookie.value_encode',
        'library/cookie.html#Cookie.CookieError': 'library/http.cookies.html#http.cookies.CookieError',
        'library/cookie.html#Cookie.Morsel': 'library/http.cookies.html#http.cookies.Morsel',
        'library/cookie.html#Cookie.Morsel.OutputString': 'library/http.cookies.html#http.cookies.Morsel.OutputString',
        'library/cookie.html#Cookie.Morsel.coded_value': 'library/http.cookies.html#http.cookies.Morsel.coded_value',
        'library/cookie.html#Cookie.Morsel.isReservedKey': 'library/http.cookies.html#http.cookies.Morsel.isReservedKey',
        'library/cookie.html#Cookie.Morsel.js_output': 'library/http.cookies.html#http.cookies.Morsel.js_output',
        'library/cookie.html#Cookie.Morsel.key': 'library/http.cookies.html#http.cookies.Morsel.key',
        'library/cookie.html#Cookie.Morsel.output': 'library/http.cookies.html#http.cookies.Morsel.output',
        'library/cookie.html#Cookie.Morsel.set': 'library/http.cookies.html#http.cookies.Morsel.set',
        'library/cookie.html#Cookie.Morsel.value': 'library/http.cookies.html#http.cookies.Morsel.value',
        'library/cookie.html#Cookie.SerialCookie': null,
        'library/cookie.html#Cookie.SimpleCookie': 'library/http.cookies.html#http.cookies.SimpleCookie',
        'library/cookie.html#Cookie.SmartCookie': null,
        // 'library/cookie.html#cookie-http-state-management': '',
        'library/cookie.html#module-Cookie': 'library/http.cookies.html#module-http.cookies',
        // 'library/cookielib.html#cookielib-cookie-handling-for-http-clients': '',
        'library/cookielib.html#cookielib-cookie-objects': 'library/http.cookiejar.html#cookie-objects',
        'library/cookielib.html#cookielib-examples': 'library/http.cookiejar.html#examples',
        'library/cookielib.html#cookielib.Cookie': 'library/http.cookiejar.html#http.cookiejar.Cookie',
        'library/cookielib.html#cookielib.Cookie.comment': 'library/http.cookiejar.html#http.cookiejar.Cookie.comment',
        'library/cookielib.html#cookielib.Cookie.comment_url': 'library/http.cookiejar.html#http.cookiejar.Cookie.comment_url',
        'library/cookielib.html#cookielib.Cookie.discard': 'library/http.cookiejar.html#http.cookiejar.Cookie.discard',
        'library/cookielib.html#cookielib.Cookie.domain_initial_dot': 'library/http.cookiejar.html#http.cookiejar.Cookie.domain_initial_dot',
        'library/cookielib.html#cookielib.Cookie.domain_specified': 'library/http.cookiejar.html#http.cookiejar.Cookie.domain_specified',
        'library/cookielib.html#cookielib.Cookie.expires': 'library/http.cookiejar.html#http.cookiejar.Cookie.expires',
        'library/cookielib.html#cookielib.Cookie.get_nonstandard_attr': 'library/http.cookiejar.html#http.cookiejar.Cookie.get_nonstandard_attr',
        'library/cookielib.html#cookielib.Cookie.has_nonstandard_attr': 'library/http.cookiejar.html#http.cookiejar.Cookie.has_nonstandard_attr',
        'library/cookielib.html#cookielib.Cookie.is_expired': 'library/http.cookiejar.html#http.cookiejar.Cookie.is_expired',
        'library/cookielib.html#cookielib.Cookie.name': 'library/http.cookiejar.html#http.cookiejar.Cookie.name',
        'library/cookielib.html#cookielib.Cookie.path': 'library/http.cookiejar.html#http.cookiejar.Cookie.path',
        'library/cookielib.html#cookielib.Cookie.port': 'library/http.cookiejar.html#http.cookiejar.Cookie.port',
        'library/cookielib.html#cookielib.Cookie.port_specified': 'library/http.cookiejar.html#http.cookiejar.Cookie.port_specified',
        'library/cookielib.html#cookielib.Cookie.rfc2109': 'library/http.cookiejar.html#http.cookiejar.Cookie.rfc2109',
        'library/cookielib.html#cookielib.Cookie.secure': 'library/http.cookiejar.html#http.cookiejar.Cookie.secure',
        'library/cookielib.html#cookielib.Cookie.set_nonstandard_attr': 'library/http.cookiejar.html#http.cookiejar.Cookie.set_nonstandard_attr',
        'library/cookielib.html#cookielib.Cookie.value': 'library/http.cookiejar.html#http.cookiejar.Cookie.value',
        'library/cookielib.html#cookielib.Cookie.version': 'library/http.cookiejar.html#http.cookiejar.Cookie.version',
        'library/cookielib.html#cookielib.CookieJar': 'library/http.cookiejar.html#http.cookiejar.CookieJar',
        'library/cookielib.html#cookielib.CookieJar.add_cookie_header': 'library/http.cookiejar.html#http.cookiejar.CookieJar.add_cookie_header',
        'library/cookielib.html#cookielib.CookieJar.clear': 'library/http.cookiejar.html#http.cookiejar.CookieJar.clear',
        'library/cookielib.html#cookielib.CookieJar.clear_session_cookies': 'library/http.cookiejar.html#http.cookiejar.CookieJar.clear_session_cookies',
        'library/cookielib.html#cookielib.CookieJar.extract_cookies': 'library/http.cookiejar.html#http.cookiejar.CookieJar.extract_cookies',
        'library/cookielib.html#cookielib.CookieJar.make_cookies': 'library/http.cookiejar.html#http.cookiejar.CookieJar.make_cookies',
        'library/cookielib.html#cookielib.CookieJar.set_cookie': 'library/http.cookiejar.html#http.cookiejar.CookieJar.set_cookie',
        'library/cookielib.html#cookielib.CookieJar.set_cookie_if_ok': 'library/http.cookiejar.html#http.cookiejar.CookieJar.set_cookie_if_ok',
        'library/cookielib.html#cookielib.CookieJar.set_policy': 'library/http.cookiejar.html#http.cookiejar.CookieJar.set_policy',
        'library/cookielib.html#cookielib.CookiePolicy': 'library/http.cookiejar.html#http.cookiejar.CookiePolicy',
        'library/cookielib.html#cookielib.CookiePolicy.domain_return_ok': 'library/http.cookiejar.html#http.cookiejar.CookiePolicy.domain_return_ok',
        'library/cookielib.html#cookielib.CookiePolicy.hide_cookie2': 'library/http.cookiejar.html#http.cookiejar.CookiePolicy.hide_cookie2',
        'library/cookielib.html#cookielib.CookiePolicy.netscape': 'library/http.cookiejar.html#http.cookiejar.CookiePolicy.netscape',
        'library/cookielib.html#cookielib.CookiePolicy.path_return_ok': 'library/http.cookiejar.html#http.cookiejar.CookiePolicy.path_return_ok',
        'library/cookielib.html#cookielib.CookiePolicy.return_ok': 'library/http.cookiejar.html#http.cookiejar.CookiePolicy.return_ok',
        'library/cookielib.html#cookielib.CookiePolicy.rfc2965': 'library/http.cookiejar.html#http.cookiejar.CookiePolicy.rfc2965',
        'library/cookielib.html#cookielib.CookiePolicy.set_ok': 'library/http.cookiejar.html#http.cookiejar.CookiePolicy.set_ok',
        'library/cookielib.html#cookielib.DefaultCookiePolicy': 'library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy',
        'library/cookielib.html#cookielib.DefaultCookiePolicy.DomainLiberal': 'library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.DomainLiberal',
        'library/cookielib.html#cookielib.DefaultCookiePolicy.DomainRFC2965Match': 'library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.DomainRFC2965Match',
        'library/cookielib.html#cookielib.DefaultCookiePolicy.DomainStrict': 'library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.DomainStrict',
        'library/cookielib.html#cookielib.DefaultCookiePolicy.DomainStrictNoDots': 'library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.DomainStrictNoDots',
        'library/cookielib.html#cookielib.DefaultCookiePolicy.DomainStrictNonDomain': 'library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.DomainStrictNonDomain',
        'library/cookielib.html#cookielib.DefaultCookiePolicy.allowed_domains': 'library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.allowed_domains',
        'library/cookielib.html#cookielib.DefaultCookiePolicy.blocked_domains': 'library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.blocked_domains',
        'library/cookielib.html#cookielib.DefaultCookiePolicy.is_blocked': 'library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.is_blocked',
        'library/cookielib.html#cookielib.DefaultCookiePolicy.is_not_allowed': 'library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.is_not_allowed',
        'library/cookielib.html#cookielib.DefaultCookiePolicy.rfc2109_as_netscape': 'library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.rfc2109_as_netscape',
        'library/cookielib.html#cookielib.DefaultCookiePolicy.set_allowed_domains': 'library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.set_allowed_domains',
        'library/cookielib.html#cookielib.DefaultCookiePolicy.set_blocked_domains': 'library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.set_blocked_domains',
        'library/cookielib.html#cookielib.DefaultCookiePolicy.strict_domain': 'library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.strict_domain',
        'library/cookielib.html#cookielib.DefaultCookiePolicy.strict_ns_domain': 'library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.strict_ns_domain',
        'library/cookielib.html#cookielib.DefaultCookiePolicy.strict_ns_set_initial_dollar': 'library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.strict_ns_set_initial_dollar',
        'library/cookielib.html#cookielib.DefaultCookiePolicy.strict_ns_set_path': 'library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.strict_ns_set_path',
        'library/cookielib.html#cookielib.DefaultCookiePolicy.strict_ns_unverifiable': 'library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.strict_ns_unverifiable',
        'library/cookielib.html#cookielib.DefaultCookiePolicy.strict_rfc2965_unverifiable': 'library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.strict_rfc2965_unverifiable',
        'library/cookielib.html#cookielib.FileCookieJar': 'library/http.cookiejar.html#http.cookiejar.FileCookieJar',
        'library/cookielib.html#cookielib.FileCookieJar.delayload': 'library/http.cookiejar.html#http.cookiejar.FileCookieJar.delayload',
        'library/cookielib.html#cookielib.FileCookieJar.filename': 'library/http.cookiejar.html#http.cookiejar.FileCookieJar.filename',
        'library/cookielib.html#cookielib.FileCookieJar.load': 'library/http.cookiejar.html#http.cookiejar.FileCookieJar.load',
        'library/cookielib.html#cookielib.FileCookieJar.revert': 'library/http.cookiejar.html#http.cookiejar.FileCookieJar.revert',
        'library/cookielib.html#cookielib.FileCookieJar.save': 'library/http.cookiejar.html#http.cookiejar.FileCookieJar.save',
        'library/cookielib.html#cookielib.LWPCookieJar': 'library/http.cookiejar.html#http.cookiejar.LWPCookieJar',
        'library/cookielib.html#cookielib.LoadError': 'library/http.cookiejar.html#http.cookiejar.LoadError',
        'library/cookielib.html#cookielib.MozillaCookieJar': 'library/http.cookiejar.html#http.cookiejar.MozillaCookieJar',
        'library/cookielib.html#module-cookielib': 'library/http.cookiejar.html#module-http.cookiejar',

        // This isn't a very good redirect
        'library/stdtypes.html#bltin-file-objects': 'library/io.html#overview',
        'library/stdtypes.html#file-objects': 'library/io.html#overview',
        'library/stdtypes.html#file.close': 'library/io.html#io.IOBase.close',
        'library/stdtypes.html#file.closed': 'library/io.html#io.IOBase.closed',
        'library/stdtypes.html#file.encoding': 'library/io.html#io.TextIOBase.encoding',
        'library/stdtypes.html#file.errors': 'library/io.html#io.TextIOBase.errors',
        'library/stdtypes.html#file.fileno': 'library/io.html#io.IOBase.fileno',
        'library/stdtypes.html#file.flush': 'library/io.html#io.IOBase.flush',
        'library/stdtypes.html#file.isatty': 'library/io.html#io.IOBase.isatty',
        'library/stdtypes.html#file.mode': 'library/io.html#io.FileIO.mode',
        'library/stdtypes.html#file.name': 'library/io.html#io.FileIO.name',
        'library/stdtypes.html#file.newlines': 'library/io.html#io.TextIOBase.newlines',
        'library/stdtypes.html#file.read': 'library/io.html#io.RawIOBase.read',
        'library/stdtypes.html#file.readline': 'library/io.html#io.IOBase.readline',
        'library/stdtypes.html#file.readlines': 'library/io.html#io.IOBase.readlines',
        'library/stdtypes.html#file.seek': 'library/io.html#io.IOBase.seek',
        'library/stdtypes.html#file.softspace': null,
        'library/stdtypes.html#file.tell': 'library/io.html#io.IOBase.tell',
        'library/stdtypes.html#file.truncate': 'library/io.html#io.IOBase.truncate',
        // There are 4 different write() methods
        'library/stdtypes.html#file.write': 'library/io.html#io.TextIOBase.write',
        'library/stdtypes.html#file.writelines': 'library/io.html#io.IOBase.writelines',
        'library/stdtypes.html#long.bit_length': 'library/stdtypes.html#int.bit_length',
        'library/stdtypes.html#memoryview-type': 'library/stdtypes.html#memory-views',
        'library/stdtypes.html#numeric-types-int-float-long-complex': 'library/stdtypes.html#numeric-types-int-float-complex',
        // Could redirect these to dir()
        'library/stdtypes.html#object.__members__': null,
        'library/stdtypes.html#object.__methods__': null,
        'library/stdtypes.html#sequence-types-str-unicode-list-tuple-bytearray-buffer-xrange': 'library/stdtypes.html#sequence-types-list-tuple-range',
        'library/stdtypes.html#str.decode': null,
        'library/stdtypes.html#string-formatting': 'library/stdtypes.html#printf-style-string-formatting',
        'library/stdtypes.html#string-formatting-operations': 'library/stdtypes.html#printf-style-string-formatting',
        'library/stdtypes.html#typesseq-xrange': 'library/stdtypes.html#ranges',
        'library/stdtypes.html#unicode.isdecimal': 'library/stdtypes.html#str.isdecimal',
        'library/stdtypes.html#unicode.isnumeric': 'library/stdtypes.html#str.isnumeric',
        'library/stdtypes.html#unicode.splitlines': 'library/stdtypes.html#str.splitlines',
        'library/stdtypes.html#xrange-type': 'library/stdtypes.html#ranges',


        'library/userdict.html#UserDict.DictMixin': 'library/collections.html#collections.UserDict',
        'library/userdict.html#UserDict.IterableUserDict': 'library/collections.html#collections.UserDict',
        'library/userdict.html#UserDict.IterableUserDict.data': 'library/collections.html#collections.UserDict.data',
        'library/userdict.html#UserDict.UserDict': 'library/collections.html#collections.UserDict',
        'library/userdict.html#UserList.UserList': 'library/collections.html#collections.UserList',
        'library/userdict.html#UserList.UserList.data': 'library/collections.html#collections.UserList.data',
        'library/userdict.html#UserString.MutableString': null,
        // Mutable string doesn't exist but this property also documents .data for UserString
        'library/userdict.html#UserString.MutableString.data': null,
        'library/userdict.html#UserString.UserString': 'library/collections.html#collections.UserString',
        'library/userdict.html#userdict-class-wrapper-for-dictionary-objects': 'library/collections.html#collections.UserDict',
        'library/userdict.html#userlist-class-wrapper-for-list-objects': 'library/collections.html#collections.UserList',
        'library/userdict.html#userstring-class-wrapper-for-string-objects': 'library/collections.html#collections.UserString',

        'library/traceback.html#traceback.tb_lineno': null,

        // 'library/token.html#token.BACKQUOTE': 'whatsnew/3.0.html#removed-syntax',
        'library/token.html#token.BACKQUOTE': null,

        'library/tokenize.html#tokenize.COMMENT': 'library/token.html#token.COMMENT',
        'library/tokenize.html#tokenize.NL': 'library/token.html#token.NL',

        'library/stringio.html#StringIO.StringIO.getvalue': 'library/io.html#io.StringIO.getvalue',

        'library/socketserver.html#SocketServer.BaseRequestHandler': 'library/socketserver.html#socketserver.BaseRequestHandler',
        'library/socketserver.html#SocketServer.BaseRequestHandler.finish': 'library/socketserver.html#socketserver.BaseRequestHandler.finish',
        'library/socketserver.html#SocketServer.BaseRequestHandler.handle': 'library/socketserver.html#socketserver.BaseRequestHandler.handle',
        'library/socketserver.html#SocketServer.BaseRequestHandler.setup': 'library/socketserver.html#socketserver.BaseRequestHandler.setup',
        'library/socketserver.html#SocketServer.BaseServer': 'library/socketserver.html#socketserver.BaseServer',
        'library/socketserver.html#SocketServer.BaseServer.RequestHandlerClass': 'library/socketserver.html#socketserver.BaseServer.RequestHandlerClass',
        'library/socketserver.html#SocketServer.BaseServer.address_family': 'library/socketserver.html#socketserver.BaseServer.address_family',
        'library/socketserver.html#SocketServer.BaseServer.allow_reuse_address': 'library/socketserver.html#socketserver.BaseServer.allow_reuse_address',
        'library/socketserver.html#SocketServer.BaseServer.fileno': 'library/socketserver.html#socketserver.BaseServer.fileno',
        'library/socketserver.html#SocketServer.BaseServer.finish_request': 'library/socketserver.html#socketserver.BaseServer.finish_request',
        'library/socketserver.html#SocketServer.BaseServer.get_request': 'library/socketserver.html#socketserver.BaseServer.get_request',
        'library/socketserver.html#SocketServer.BaseServer.handle_error': 'library/socketserver.html#socketserver.BaseServer.handle_error',
        'library/socketserver.html#SocketServer.BaseServer.handle_request': 'library/socketserver.html#socketserver.BaseServer.handle_request',
        'library/socketserver.html#SocketServer.BaseServer.handle_timeout': 'library/socketserver.html#socketserver.BaseServer.handle_timeout',
        'library/socketserver.html#SocketServer.BaseServer.process_request': 'library/socketserver.html#socketserver.BaseServer.process_request',
        'library/socketserver.html#SocketServer.BaseServer.request_queue_size': 'library/socketserver.html#socketserver.BaseServer.request_queue_size',
        'library/socketserver.html#SocketServer.BaseServer.serve_forever': 'library/socketserver.html#socketserver.BaseServer.serve_forever',
        'library/socketserver.html#SocketServer.BaseServer.server_activate': 'library/socketserver.html#socketserver.BaseServer.server_activate',
        'library/socketserver.html#SocketServer.BaseServer.server_address': 'library/socketserver.html#socketserver.BaseServer.server_address',
        'library/socketserver.html#SocketServer.BaseServer.server_bind': 'library/socketserver.html#socketserver.BaseServer.server_bind',
        'library/socketserver.html#SocketServer.BaseServer.server_close': 'library/socketserver.html#socketserver.BaseServer.server_close',
        'library/socketserver.html#SocketServer.BaseServer.shutdown': 'library/socketserver.html#socketserver.BaseServer.shutdown',
        'library/socketserver.html#SocketServer.BaseServer.socket': 'library/socketserver.html#socketserver.BaseServer.socket',
        'library/socketserver.html#SocketServer.BaseServer.socket_type': 'library/socketserver.html#socketserver.BaseServer.socket_type',
        'library/socketserver.html#SocketServer.BaseServer.timeout': 'library/socketserver.html#socketserver.BaseServer.timeout',
        'library/socketserver.html#SocketServer.BaseServer.verify_request': 'library/socketserver.html#socketserver.BaseServer.verify_request',
        'library/socketserver.html#SocketServer.DatagramRequestHandler': 'library/socketserver.html#socketserver.DatagramRequestHandler',
        'library/socketserver.html#SocketServer.ForkingMixIn': 'library/socketserver.html#socketserver.ForkingMixIn',
        'library/socketserver.html#SocketServer.ForkingTCPServer': 'library/socketserver.html#socketserver.ForkingTCPServer',
        'library/socketserver.html#SocketServer.ForkingUDPServer': 'library/socketserver.html#socketserver.ForkingUDPServer',
        'library/socketserver.html#SocketServer.StreamRequestHandler': 'library/socketserver.html#socketserver.StreamRequestHandler',
        'library/socketserver.html#SocketServer.TCPServer': 'library/socketserver.html#socketserver.TCPServer',
        'library/socketserver.html#SocketServer.ThreadingMixIn': 'library/socketserver.html#socketserver.ThreadingMixIn',
        'library/socketserver.html#SocketServer.ThreadingTCPServer': 'library/socketserver.html#socketserver.ThreadingTCPServer',
        'library/socketserver.html#SocketServer.ThreadingUDPServer': 'library/socketserver.html#socketserver.ThreadingUDPServer',
        'library/socketserver.html#SocketServer.UDPServer': 'library/socketserver.html#socketserver.UDPServer',
        'library/socketserver.html#SocketServer.UnixDatagramServer': 'library/socketserver.html#socketserver.UnixDatagramServer',
        'library/socketserver.html#SocketServer.UnixStreamServer': 'library/socketserver.html#socketserver.UnixStreamServer',
        'library/socketserver.html#module-SocketServer': 'library/socketserver.html#module-socketserver',

        'library/md5.html#module-md5': 'library/hashlib.html#hash-algorithms',
        'library/sha.html#module-sha': 'library/hashlib.html#hash-algorithms',
        'library/md5.html#md5-md5-message-digest-algorithm': 'library/hashlib.html#hash-algorithms',
        'library/sha.html#sha-sha-1-message-digest-algorithm': 'library/hashlib.html#hash-algorithms',
        'library/md5.html#md5.digest_size': 'library/hashlib.html#hashlib.hash.digest_size',
        'library/sha.html#sha.digest_size': 'library/hashlib.html#hashlib.hash.digest_size',
        'library/md5.html#md5.md5.copy': 'library/hashlib.html#hashlib.hash.copy',
        'library/sha.html#sha.sha.copy': 'library/hashlib.html#hashlib.hash.copy',
        'library/md5.html#md5.md5.digest': 'library/hashlib.html#hashlib.hash.digest',
        'library/sha.html#sha.sha.digest': 'library/hashlib.html#hashlib.hash.digest',
        'library/md5.html#md5.md5.hexdigest': 'library/hashlib.html#hashlib.hash.hexdigest',
        'library/sha.html#sha.sha.hexdigest': 'library/hashlib.html#hashlib.hash.hexdigest',
        'library/md5.html#md5.md5.update': 'library/hashlib.html#hashlib.hash.update',
        'library/sha.html#sha.sha.update': 'library/hashlib.html#hashlib.hash.update',
        // hashlib.new() takes the name of the hash as a mandatory first parameter
        // 'library/md5.html#md5.md5': 'library/hashlib.html#hashlib.new',
        // 'library/md5.html#md5.new': 'library/hashlib.html#hashlib.new',
        // 'library/sha.html#sha.new': 'library/hashlib.html#hashlib.new',
        'library/md5.html#md5.md5': null,
        'library/md5.html#md5.new': null,
        'library/sha.html#sha.new': null,
        'library/sha.html#sha.blocksize': null,

        // Or redirect to algorithms_available
        'library/hashlib.html#hashlib.hashlib.algorithms': null,

        'library/argparse.html#argparse-from-optparse': 'library/argparse.html#upgrading-optparse-code',


        'library/gdbm.html#gdbm.close': 'library/dbm.html#dbm.gnu.gdbm.close',
        'library/gdbm.html#gdbm.error': 'library/dbm.html#dbm.gnu.error',
        'library/gdbm.html#gdbm.firstkey': 'library/dbm.html#dbm.gnu.gdbm.firstkey',
        'library/gdbm.html#gdbm.nextkey': 'library/dbm.html#dbm.gnu.gdbm.nextkey',
        'library/gdbm.html#gdbm.open': 'library/dbm.html#dbm.gnu.open',
        'library/gdbm.html#gdbm.reorganize': 'library/dbm.html#dbm.gnu.gdbm.reorganize',
        'library/gdbm.html#gdbm.sync': 'library/dbm.html#dbm.gnu.gdbm.sync',
        'library/gdbm.html#module-gdbm': 'library/dbm.html#module-dbm.gnu',
        'library/gdbm.html#gdbm-gnu-s-reinterpretation-of-dbm': 'library/dbm.html#module-dbm.gnu',

        'library/anydbm.html#anydbm-generic-access-to-dbm-style-databases': 'library/dbm.html#module-dbm',
        // TODO: or redirect to library/dbm.html#module-dbm ? dbm.close doesn't exist in Python 3
        'library/anydbm.html#anydbm.close': null,
        'library/anydbm.html#anydbm.error': 'library/dbm.html#dbm.error',
        'library/anydbm.html#anydbm.open': 'library/dbm.html#dbm.open',
        'library/anydbm.html#module-anydbm': 'library/dbm.html#module-dbm',

        'library/dbm.html#dbm-simple-database-interface': 'library/dbm.html#module-dbm.ndbm',
        'library/dbm.html#dbm.close': 'library/dbm.html#dbm.ndbm.ndbm.close',
        'library/dbm.html#dbm.library': 'library/dbm.html#dbm.ndbm.library',

        // The id was removed but the docs are here.
        'library/dumbdbm.html#dumbdbm-objects': 'library/dbm.html#dbm.dumb.dumbdbm.sync',
        'library/dumbdbm.html#dumbdbm-portable-dbm-implementation': 'library/dbm.html#module-dbm.dumb',
        'library/dumbdbm.html#dumbdbm.close': 'library/dbm.html#dbm.dumb.dumbdbm.close',
        'library/dumbdbm.html#dumbdbm.dumbdbm.sync': 'library/dbm.html#dbm.dumb.dumbdbm.sync',
        'library/dumbdbm.html#dumbdbm.error': 'library/dbm.html#dbm.dumb.error',
        'library/dumbdbm.html#dumbdbm.open': 'library/dbm.html#dbm.dumb.open',
        'library/dumbdbm.html#module-dumbdbm': 'library/dbm.html#module-dbm.dumb',

        'library/whichdb.html#module-whichdb': 'library/dbm.html#dbm.whichdb',
        'library/whichdb.html#whichdb-guess-which-dbm-module-created-a-database': 'library/dbm.html#dbm.whichdb',
        'library/whichdb.html#whichdb.whichdb': 'library/dbm.html#dbm.whichdb',


        'library/xml.dom.minidom.html#xml.dom.minidom.Node.cloneNode': null,
        'library/xml.dom.pulldom.html#xml.dom.pulldom.PullDOM': 'library/xml.dom.pulldom.html#xml.dom.pulldom.PullDom',
        'library/xml.etree.elementtree.html#xml.etree.ElementTree.XMLParser.doctype': null,


        'library/email.charset.html#email.charset.Charset.convert': null,
        'library/email.charset.html#email.charset.Charset.encoded_header_len': null,
        'library/email.charset.html#email.charset.Charset.from_splittable': null,
        'library/email.charset.html#email.charset.Charset.to_splittable': null,
        'library/email.header.html#email.header.Header.__unicode__': 'library/email.header.html#email.header.Header.__str__',
        'library/email.html#differences-from-mimelib': null,
        'library/email.html#email-pkg-history': null,
        'library/email.html#package-history': null,
        'library/email.message.html#email.message.Message': 'library/email.message.html#email.message.EmailMessage',
        'library/email.message.html#email.message.Message.__contains__': 'library/email.message.html#email.message.EmailMessage.__contains__',
        'library/email.message.html#email.message.Message.__delitem__': 'library/email.message.html#email.message.EmailMessage.__delitem__',
        'library/email.message.html#email.message.Message.__getitem__': 'library/email.message.html#email.message.EmailMessage.__getitem__',
        'library/email.message.html#email.message.Message.__len__': 'library/email.message.html#email.message.EmailMessage.__len__',
        'library/email.message.html#email.message.Message.__setitem__': 'library/email.message.html#email.message.EmailMessage.__setitem__',
        'library/email.message.html#email.message.Message.__str__': 'library/email.message.html#email.message.EmailMessage.__str__',
        'library/email.message.html#email.message.Message.add_header': 'library/email.message.html#email.message.EmailMessage.add_header',
        'library/email.message.html#email.message.Message.as_string': 'library/email.message.html#email.message.EmailMessage.as_string',
        'library/email.message.html#email.message.Message.defects': 'library/email.message.html#email.message.EmailMessage.defects',
        'library/email.message.html#email.message.Message.del_param': 'library/email.message.html#email.message.EmailMessage.del_param',
        'library/email.message.html#email.message.Message.epilogue': 'library/email.message.html#email.message.EmailMessage.epilogue',
        'library/email.message.html#email.message.Message.get': 'library/email.message.html#email.message.EmailMessage.get',
        'library/email.message.html#email.message.Message.get_all': 'library/email.message.html#email.message.EmailMessage.get_all',
        'library/email.message.html#email.message.Message.get_boundary': 'library/email.message.html#email.message.EmailMessage.get_boundary',
        'library/email.message.html#email.message.Message.get_charsets': 'library/email.message.html#email.message.EmailMessage.get_charsets',
        'library/email.message.html#email.message.Message.get_content_charset': 'library/email.message.html#email.message.EmailMessage.get_content_charset',
        'library/email.message.html#email.message.Message.get_content_maintype': 'library/email.message.html#email.message.EmailMessage.get_content_maintype',
        'library/email.message.html#email.message.Message.get_content_subtype': 'library/email.message.html#email.message.EmailMessage.get_content_subtype',
        'library/email.message.html#email.message.Message.get_content_type': 'library/email.message.html#email.message.EmailMessage.get_content_type',
        'library/email.message.html#email.message.Message.get_default_type': 'library/email.message.html#email.message.EmailMessage.get_default_type',
        'library/email.message.html#email.message.Message.get_filename': 'library/email.message.html#email.message.EmailMessage.get_filename',
        'library/email.message.html#email.message.Message.get_unixfrom': 'library/email.message.html#email.message.EmailMessage.get_unixfrom',
        'library/email.message.html#email.message.Message.is_multipart': 'library/email.message.html#email.message.EmailMessage.is_multipart',
        'library/email.message.html#email.message.Message.items': 'library/email.message.html#email.message.EmailMessage.items',
        'library/email.message.html#email.message.Message.keys': 'library/email.message.html#email.message.EmailMessage.keys',
        'library/email.message.html#email.message.Message.preamble': 'library/email.message.html#email.message.EmailMessage.preamble',
        'library/email.message.html#email.message.Message.replace_header': 'library/email.message.html#email.message.EmailMessage.replace_header',
        'library/email.message.html#email.message.Message.set_boundary': 'library/email.message.html#email.message.EmailMessage.set_boundary',
        'library/email.message.html#email.message.Message.set_default_type': 'library/email.message.html#email.message.EmailMessage.set_default_type',
        'library/email.message.html#email.message.Message.set_param': 'library/email.message.html#email.message.EmailMessage.set_param',
        'library/email.message.html#email.message.Message.set_unixfrom': 'library/email.message.html#email.message.EmailMessage.set_unixfrom',
        'library/email.message.html#email.message.Message.values': 'library/email.message.html#email.message.EmailMessage.values',
        'library/email.message.html#email.message.Message.walk': 'library/email.message.html#email.message.EmailMessage.walk',
        // The class name was changed to EmailMessage in Python 3, but the old Message class was
        // kept for backwards compatibility. It still defines all the above methods and the following
        // deprecated methods that EmailMessage doesn't:
        // TODO: link to the legacy Message class above as well?
        'library/email.message.html#email.message.Message.attach': 'library/email.compat32-message.html#email.message.Message.attach',
        'library/email.message.html#email.message.Message.get_charset': 'library/email.compat32-message.html#email.message.Message.get_charset',
        'library/email.message.html#email.message.Message.get_param': 'library/email.compat32-message.html#email.message.Message.get_param',
        'library/email.message.html#email.message.Message.get_params': 'library/email.compat32-message.html#email.message.Message.get_params',
        'library/email.message.html#email.message.Message.get_payload': 'library/email.compat32-message.html#email.message.Message.get_payload',
        'library/email.message.html#email.message.Message.set_charset': 'library/email.compat32-message.html#email.message.Message.set_charset',
        'library/email.message.html#email.message.Message.set_payload': 'library/email.compat32-message.html#email.message.Message.set_payload',
        'library/email.message.html#email.message.Message.set_type': 'library/email.compat32-message.html#email.message.Message.set_type',
        // Removed dictionary method, use `in`
        'library/email.message.html#email.message.Message.has_key': null,
        'library/email.parser.html#email.parser.FeedParser.close': 'library/email.parser.html#email.parser.BytesFeedParser.close',
        'library/email.parser.html#email.parser.FeedParser.feed': 'library/email.parser.html#email.parser.BytesFeedParser.feed',
        'library/email.parser.html#parser-class-api': 'library/email.parser.html#parser-api',


        'library/sys.html#sys.long_info': 'library/sys.html#sys.int_info',
        'library/sys.html#sys.exc_clear': null,
        'library/sys.html#sys.py3kwarning': null,
        'library/sys.html#sys.setdefaultencoding': null,
        'library/sys.html#sys.settscdump': null,
        'library/sys.html#sys.subversion': null,


        'library/subprocess.html#constants': 'library/subprocess.html#windows-constants',
        'library/subprocess.html#replacing-bin-sh-shell-backquote': 'library/subprocess.html#replacing-bin-sh-shell-command-substitution',
        'library/subprocess.html#security': 'library/subprocess.html#security-considerations',


        'library/select.html#select.select.PIPE_BUF': 'library/select.html#select.PIPE_BUF',


        'library/inspect.html#inspect.getmoduleinfo': null,

        // This error is now a builtin and the one in io is an alias
        // 'library/io.html#io.BlockingIOError': 'library/exceptions.html#BlockingIOError',
        // 'library/io.html#io.BlockingIOError.characters_written': 'library/exceptions.html#BlockingIOError.characters_written',
        'library/io.html#io.BlockingIOError.characters_written': 'library/io.html#io.BlockingIOError',


        'library/operator.html#operator.__div__': null,
        'library/operator.html#operator.__idiv__': null,
        'library/operator.html#operator.div': null,
        'library/operator.html#operator.idiv': null,
        'library/operator.html#operator.isMappingType': null,
        'library/operator.html#operator.isNumberType': null,
        'library/operator.html#operator.isSequenceType': null,


        'howto/urllib2.html#howto-fetch-internet-resources-using-urllib2': 'howto/urllib2.html#urllib-howto',
        // This page was effectively deleted
        'howto/cporting.html': null,
        // This section is deleted, don't redirect
        'howto/sockets.html#performance': null,
        // This section is deleted, don't redirect
        'howto/unicode.html#history-of-character-codes': null,
        'howto/unicode.html#python-2-x-s-unicode-support': 'howto/unicode.html#python-s-unicode-support',
        'howto/unicode.html#revision-history-and-acknowledgements': 'howto/unicode.html#acknowledgements',
        'howto/unicode.html#the-unicode-type': 'howto/unicode.html#the-string-type',
    };

    let pyVersion, isEnabled;

    browserAPI.getStorageData(
        {pyVersion: "3", isEnabled: true},
        data => {
            pyVersion = data.pyVersion;
            isEnabled = data.isEnabled;
        }
    );

    function getRedirectURL(oldUrl) {
        let parsedUrl = new URL(oldUrl);
        let pathComponents = parsedUrl.pathname.substr(1).split('/');
        if (parsedUrl.hostname !== "docs.python.org" || pathComponents.length < 2 ||
            !(pathComponents[0].startsWith('2') || pathComponents[0].startsWith('3'))) {
            return oldUrl;
        }

        const versionNumber = pathComponents[0];
        if (versionNumber === pyVersion) {
            return oldUrl;
        }
        // The path without the version number
        const lookupWithoutFragment = pathComponents.slice(1).join('/');
        const lookupWithFragment = lookupWithoutFragment + parsedUrl.hash;

        if (versionNumber.startsWith("3")) {
            // Don't perform any substitutions when redirecting from Python 3
            return 'https://docs.python.org/'+ pyVersion + '/' + lookupWithoutFragment + parsedUrl.search + parsedUrl.hash;
        }

        if (SPECIAL_CASES[lookupWithFragment] === null || SPECIAL_CASES[lookupWithoutFragment] === null) {
            return oldUrl
        }
        if (lookupWithFragment !== lookupWithoutFragment && lookupWithFragment in SPECIAL_CASES) {
            const newUrl = new URL('https://docs.python.org/'+ pyVersion + '/' + SPECIAL_CASES[lookupWithFragment])
            newUrl.search = newUrl.search || parsedUrl.search;
            return newUrl.toString()
        }
        if (lookupWithoutFragment in SPECIAL_CASES && !SPECIAL_CASES[lookupWithoutFragment].includes('#')) {
            const newUrl = new URL('https://docs.python.org/'+ pyVersion + '/' + SPECIAL_CASES[lookupWithoutFragment])
            newUrl.search = newUrl.search || parsedUrl.search;
            newUrl.hash = newUrl.hash || parsedUrl.hash;
            return newUrl.toString()
        }
        return 'https://docs.python.org/'+ pyVersion + '/' + lookupWithoutFragment + parsedUrl.search + parsedUrl.hash;
    }

    /**
     * Check whether given URL returns 200 HTTP status code and redirects
     * to it if so.
     *
     * Also, save the new URL in the localStorage so the onBeforeRequest
     * listener can redirect immediately next time visiting the same page.
     *
     * @param {string} url New URL
     * @param {number} tabId current tab ID
     * @param {function} redirectFunc function that will redirect
     */
    function redirectIfExists(url, tabId, redirectFunc) {
        browserAPI.api.pageAction.setTitle({
            tabId: tabId,
            title: "Redirecting..."
        });

        let request = new XMLHttpRequest();

        request.onreadystatechange = function () {
            if (request.readyState === 4) { // DONE
                if (request.status === 200) {
                    localStorage.setItem(url, true);
                    browserAPI.api.pageAction.show(tabId);
                    redirectFunc(url);
                } else {
                    browserAPI.api.pageAction.setTitle({
                        tabId: tabId,
                        title: "Could not redirect (HTTP status code: " +
                        request.status + ")"
                    });
                }
            }
        };
        request.open("HEAD", url, true);
        request.send();
    }

    /**
     * Redirect to right docs immediately if the page to redirect to has been
     * visited before (using localStorage cache)
     */
    browserAPI.api.webRequest.onBeforeRequest.addListener(
        function (details) {
            let newUrl = getRedirectURL(details.url);

            return isEnabled && (details.url != newUrl) && localStorage.getItem(newUrl)
                ? {redirectUrl: newUrl}
                : {};
        },
        {
            urls: ["*://docs.python.org/*"],
            types: ["main_frame"]
        },
        ["blocking"]
    );

    browserAPI.api.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.action === "checkForRedirect") {
            browserAPI.api.pageAction.show(sender.tab.id);

            if (isEnabled) {
                let newUrl = getRedirectURL(sender.url);

                if (sender.url !== newUrl) {
                    redirectIfExists(newUrl, sender.tab.id, sendResponse);
                    return true;
                }
            }
        } else if (request.action === "toggleEnabled") {
            isEnabled = !isEnabled;
            browserAPI.api.storage.local.set({isEnabled: isEnabled});
            sendResponse(isEnabled);
        } else if (request.action === "setPyVersion") {
            pyVersion = request.pyVersion;
            browserAPI.api.storage.local.set({pyVersion: pyVersion});
        }
    });
})();
