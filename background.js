(function () {
    const SPECIAL_CASES = {
        // TODO: these commented links might break when 2to3 is removed
        // https://docs.python.org/library/2to3.html#2to3fixer-apply
        'library/functions.html#apply': 'tutorial/controlflow.html#tut-unpacking-arguments',

        // https://docs.python.org/library/2to3.html#2to3fixer-asserts
        'library/unittest.html#unittest.TestCase.failUnlessEqual': 'library/unittest.html#unittest.TestCase.assertEqual',
        'library/unittest.html#unittest.TestCase.assertEquals': 'library/unittest.html#unittest.TestCase.assertEqual',
        'library/unittest.html#unittest.TestCase.failIfEqual': 'library/unittest.html#unittest.TestCase.assertNotEqual',
        'library/unittest.html#unittest.TestCase.assertNotEquals': 'library/unittest.html#unittest.TestCase.assertNotEqual',
        'library/unittest.html#unittest.TestCase.failUnless': 'library/unittest.html#unittest.TestCase.assertTrue',
        'library/unittest.html#unittest.TestCase.assert_': 'library/unittest.html#unittest.TestCase.assertTrue',
        'library/unittest.html#unittest.TestCase.failIf': 'library/unittest.html#unittest.TestCase.assertFalse',
        'library/unittest.html#unittest.TestCase.failUnlessRaises': 'library/unittest.html#unittest.TestCase.assertRaises',
        'library/unittest.html#unittest.TestCase.failUnlessAlmostEqual': 'library/unittest.html#unittest.TestCase.assertAlmostEqual',
        'library/unittest.html#unittest.TestCase.assertAlmostEquals': 'library/unittest.html#unittest.TestCase.assertAlmostEqual',
        'library/unittest.html#unittest.TestCase.failIfAlmostEqual': 'library/unittest.html#unittest.TestCase.assertNotAlmostEqual',
        'library/unittest.html#unittest.TestCase.assertNotAlmostEquals': 'library/unittest.html#unittest.TestCase.assertNotAlmostEqual',

        // https://docs.python.org/library/2to3.html#2to3fixer-basestring
        'library/functions.html#basestring': 'library/functions.html#str',

        // https://docs.python.org/library/2to3.html#2to3fixer-buffer
        'library/functions.html#buffer': 'library/stdtypes.html#memoryview',

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

        'library/stringio.html#module-cStringIO': 'library/io.html',

        'library/pickle.html#module-cPickle': 'library/pickle.html',

        'library/__builtin__.html': 'library/builtins.html',

        'library/copy_reg.html': 'library/copyreg.html',

        // TODO all of these # need to be lower case
        // https://docs.python.org/3/library/queue.html
        // https://docs.python.org/3/library/socketserver.html
        // https://docs.python.org/3/library/configparser.html

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
        'library/dbm.html': 'library/dbm.ndbm.html',
        'library/gdbm.html': 'library/dbm.html#module-dbm.gnu',

        'library/xmlrpclib.html': 'library/xmlrpc.client.html',
        // TODO: all these
        'library/docxmlrpcserver.html': 'library/xmlrpc.server.html',
        'library/simplexmlrpcserver.html': 'library/xmlrpc.server.html',

        'library/httplib.html': 'library/http.client.html',
        'library/htmllib.html#module-htmlentitydefs': 'library/html.entities.html',
        'library/htmlparser.html': 'library/html.parser.html',
        'library/cookie.html': 'library/http.cookies.html',
        'library/cookielib.html': 'library/http.cookiejar.html',
        // TODO: all these
        'library/basehttpserver.html': 'library/http.server.html',
        'library/simplehttpserver.html': 'library/http.server.html',
        'library/cgihttpserver.html': 'library/http.server.html',

        // This is commented out in Lib/lib2to3/fixes/fix_imports.py
        'library/test.html#module-test.test_support': 'library/test.html#module-test.support',

        // TODO: link all 3 functions to subprocess.run specifically?
        'library/commands.html': 'library/subprocess.html',

        'library/userdict.html': 'library/collections.html#collections.UserDict',
        'library/userdict.html#module-UserList': 'library/collections.html#collections.UserList',
        'library/userdict.html#module-UserString': 'library/collections.html#collections.UserString',

        'library/urlparse.html': 'library/urllib.parse.html',

        'library/robotparser.html': 'library/urllib.robotparser.html',

        // https://docs.python.org/library/2to3.html#2to3fixer-imports2
        'library/whichdb.html': 'library/dbm.html',
        'library/anydbm.html': 'library/dbm.html',

        // https://docs.python.org/library/2to3.html#2to3fixer-input

        // https://docs.python.org/library/2to3.html#2to3fixer-intern
        'library/functions.html#intern': 'library/sys.html#sys.intern',

        // https://docs.python.org/library/2to3.html#2to3fixer-itertools
        'library/itertools.html#itertools.ifilter': 'library/itertools.html#itertools.filter',
        'library/itertools.html#itertools.izip': 'library/itertools.html#itertools.zip',
        'library/itertools.html#itertools.imap': 'library/itertools.html#itertools.map',
        'library/itertools.html#itertools.ifilterfalse': 'library/itertools.html#itertools.filterfalse',

        // https://docs.python.org/library/2to3.html#2to3fixer-long
        'library/functions.html#long': 'library/functions.html#int',

        // https://docs.python.org/library/2to3.html#2to3fixer-metaclass
        'reference/datamodel.html#__metaclass__': 'reference/datamodel.html#metaclasses',

        // https://docs.python.org/library/2to3.html#2to3fixer-next
        // TODO: check I didn't miss any https://docs.python.org/2.7/search.html?q=next
        'library/stdtypes.html#iterator.next': 'library/stdtypes.html#iterator.__next__',
        'reference/expressions.html#generator.next': 'reference/expressions.html#generator.__next__',
        // TODO: redirect all file.*
        'library/stdtypes.html#file.next': 'library/io.html',
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
        // TODO
        // operator.isSequenceType(obj)
        // isinstance(obj, collections.abc.Sequence)
        // operator.isMappingType(obj)
        // isinstance(obj, collections.abc.Mapping)
        // operator.isNumberType(obj)
        // isinstance(obj, numbers.Number)

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
        'library/exceptions.html#exceptions.StandardError': 'library/exceptions.html#exceptions.Exception',

        // https://docs.python.org/library/2to3.html#2to3fixer-sys_exc
        'library/sys.html#sys.exc_value': 'library/sys.html#sys.exc_info',
        'library/sys.html#sys.exc_type': 'library/sys.html#sys.exc_info',
        'library/sys.html#sys.exc_traceback': 'library/sys.html#sys.exc_info',

        // https://docs.python.org/library/2to3.html#2to3fixer-throw
        // https://docs.python.org/library/2to3.html#2to3fixer-tuple_params
        // https://docs.python.org/library/2to3.html#2to3fixer-types

        // https://docs.python.org/library/2to3.html#2to3fixer-unicode
        'library/functions.html#unicode': 'library/functions.html#str',

        // https://docs.python.org/library/2to3.html#2to3fixer-urllib
        // https://github.com/python/cpython/blob/master/Lib/lib2to3/fixes/fix_urllib.py#L12-L45
        // https://github.com/python/cpython/blob/531d1e541284bfd7944f8c66a5e8c3c3234afaff/Lib/lib2to3/fixes/fix_urllib.py#L12-L45
        'library/urllib.html#urllib.URLopener': 'library/urllib.request.html#urllib.request.URLopener',
        'library/urllib.html#urllib.FancyURLopener': 'library/urllib.request.html#urllib.request.FancyURLopener',
        'library/urllib.html#urllib.urlretrieve': 'library/urllib.request.html#urllib.request.urlretrieve',
        'library/urllib.html#urllib._urlopener': 'library/urllib.request.html#urllib.request._urlopener',
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
        'library/urllib.html#urllib.splitattr': 'library/urllib.parse.html#urllib.parse.splitattr',
        'library/urllib.html#urllib.splithost': 'library/urllib.parse.html#urllib.parse.splithost',
        'library/urllib.html#urllib.splitnport': 'library/urllib.parse.html#urllib.parse.splitnport',
        'library/urllib.html#urllib.splitpasswd': 'library/urllib.parse.html#urllib.parse.splitpasswd',
        'library/urllib.html#urllib.splitport': 'library/urllib.parse.html#urllib.parse.splitport',
        'library/urllib.html#urllib.splitquery': 'library/urllib.parse.html#urllib.parse.splitquery',
        'library/urllib.html#urllib.splittag': 'library/urllib.parse.html#urllib.parse.splittag',
        'library/urllib.html#urllib.splittype': 'library/urllib.parse.html#urllib.parse.splittype',
        'library/urllib.html#urllib.splituser': 'library/urllib.parse.html#urllib.parse.splituser',
        'library/urllib.html#urllib.splitvalue': 'library/urllib.parse.html#urllib.parse.splitvalue',
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
        'library/urllib2.html#urllib2.quote': 'library/urllib.parse.html#urllib.parse.quote',
        'library/urllib2.html#urllib2.quote_plus': 'library/urllib.parse.html#urllib.parse.quote_plus',
        'library/urllib2.html#urllib2.unquote': 'library/urllib.parse.html#urllib.parse.unquote',
        'library/urllib2.html#urllib2.unquote_plus': 'library/urllib.parse.html#urllib.parse.unquote_plus',
        'library/urllib2.html#urllib2.urlencode': 'library/urllib.parse.html#urllib.parse.urlencode',
        'library/urllib2.html#urllib2.splitattr': 'library/urllib.parse.html#urllib.parse.splitattr',
        'library/urllib2.html#urllib2.splithost': 'library/urllib.parse.html#urllib.parse.splithost',
        'library/urllib2.html#urllib2.splitnport': 'library/urllib.parse.html#urllib.parse.splitnport',
        'library/urllib2.html#urllib2.splitpasswd': 'library/urllib.parse.html#urllib.parse.splitpasswd',
        'library/urllib2.html#urllib2.splitport': 'library/urllib.parse.html#urllib.parse.splitport',
        'library/urllib2.html#urllib2.splitquery': 'library/urllib.parse.html#urllib.parse.splitquery',
        'library/urllib2.html#urllib2.splittag': 'library/urllib.parse.html#urllib.parse.splittag',
        'library/urllib2.html#urllib2.splittype': 'library/urllib.parse.html#urllib.parse.splittype',
        'library/urllib2.html#urllib2.splituser': 'library/urllib.parse.html#urllib.parse.splituser',
        'library/urllib2.html#urllib2.splitvalue': 'library/urllib.parse.html#urllib.parse.splitvalue',
        'library/urllib2.html#urllib2.URLError': 'library/urllib.error.html#urllib.error.URLError',
        'library/urllib2.html#urllib2.HTTPError': 'library/urllib.error.html#urllib.error.HTTPError',

        // https://docs.python.org/library/2to3.html#2to3fixer-xrange
        'library/functions.html#xrange': 'library/functions.html#range',

        // https://docs.python.org/library/2to3.html#2to3fixer-xreadlines
        // TODO
        'library/stdtypes.html#file.xreadlines': 'tutorial/inputoutput.html#methods-of-file-objects',


        // Not part of 2to3

        // https://docs.python.org/whatsnew/3.0.html#library-changes
        'library/sets.html': 'library/stdtypes.html#set',
        'library/multifile.html': 'library/email.html',
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

        if (lookupWithFragment !== lookupWithoutFragment && lookupWithFragment in SPECIAL_CASES) {
            const newUrl = new URL('https://docs.python.org/'+ pyVersion + '/' + SPECIAL_CASES[lookupWithFragment])
            newUrl.search = newUrl.search || parsedUrl.search;
            return newUrl.toString()
        }
        if (lookupWithoutFragment in SPECIAL_CASES) {
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
