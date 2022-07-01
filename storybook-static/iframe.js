const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getAugmentedNamespace(n) {
  if (n.__esModule)
    return n;
  var a = Object.defineProperty({}, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var runtime = { exports: {} };
(function(module) {
  var runtime2 = function(exports) {
    var Op = Object.prototype;
    var hasOwn2 = Op.hasOwnProperty;
    var undefined$12;
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key2, value2) {
      Object.defineProperty(obj, key2, {
        value: value2,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key2];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function(obj, key2, value2) {
        return obj[key2] = value2;
      };
    }
    function wrap(innerFn, outerFn, self2, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);
      generator._invoke = makeInvokeMethod(innerFn, self2, context);
      return generator;
    }
    exports.wrap = wrap;
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    var ContinueSentinel = {};
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
      return this;
    });
    var getProto2 = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto2 && getProto2(getProto2(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn2.call(NativeIteratorPrototype, iteratorSymbol)) {
      IteratorPrototype = NativeIteratorPrototype;
    }
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    define(Gp, "constructor", GeneratorFunctionPrototype);
    define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        define(prototype, method, function(arg) {
          return this._invoke(method, arg);
        });
      });
    }
    exports.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };
    exports.awrap = function(arg) {
      return { __await: arg };
    };
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result2 = record.arg;
          var value2 = result2.value;
          if (value2 && typeof value2 === "object" && hasOwn2.call(value2, "__await")) {
            return PromiseImpl.resolve(value2.__await).then(function(value3) {
              invoke("next", value3, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            });
          }
          return PromiseImpl.resolve(value2).then(function(unwrapped) {
            result2.value = unwrapped;
            resolve(result2);
          }, function(error2) {
            return invoke("throw", error2, resolve, reject);
          });
        }
      }
      var previousPromise;
      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
      this._invoke = enqueue;
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
      return this;
    });
    exports.AsyncIterator = AsyncIterator;
    exports.async = function(innerFn, outerFn, self2, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0)
        PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self2, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result2) {
        return result2.done ? result2.value : iter.next();
      });
    };
    function makeInvokeMethod(innerFn, self2, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }
        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }
          return doneResult();
        }
        context.method = method;
        context.arg = arg;
        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel)
                continue;
              return delegateResult;
            }
          }
          if (context.method === "next") {
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }
            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }
          state = GenStateExecuting;
          var record = tryCatch(innerFn, self2, context);
          if (record.type === "normal") {
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;
            if (record.arg === ContinueSentinel) {
              continue;
            }
            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted;
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined$12) {
        context.delegate = null;
        if (context.method === "throw") {
          if (delegate.iterator["return"]) {
            context.method = "return";
            context.arg = undefined$12;
            maybeInvokeDelegate(delegate, context);
            if (context.method === "throw") {
              return ContinueSentinel;
            }
          }
          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return ContinueSentinel;
      }
      var record = tryCatch(method, delegate.iterator, context.arg);
      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }
      var info2 = record.arg;
      if (!info2) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }
      if (info2.done) {
        context[delegate.resultName] = info2.value;
        context.next = delegate.nextLoc;
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$12;
        }
      } else {
        return info2;
      }
      context.delegate = null;
      return ContinueSentinel;
    }
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    define(Gp, iteratorSymbol, function() {
      return this;
    });
    define(Gp, "toString", function() {
      return "[object Generator]";
    });
    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };
      if (1 in locs) {
        entry.catchLoc = locs[1];
      }
      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }
      this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }
    exports.keys = function(object) {
      var keys2 = [];
      for (var key2 in object) {
        keys2.push(key2);
      }
      keys2.reverse();
      return function next() {
        while (keys2.length) {
          var key3 = keys2.pop();
          if (key3 in object) {
            next.value = key3;
            next.done = false;
            return next;
          }
        }
        next.done = true;
        return next;
      };
    };
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }
        if (typeof iterable.next === "function") {
          return iterable;
        }
        if (!isNaN(iterable.length)) {
          var i = -1, next = function next2() {
            while (++i < iterable.length) {
              if (hasOwn2.call(iterable, i)) {
                next2.value = iterable[i];
                next2.done = false;
                return next2;
              }
            }
            next2.value = undefined$12;
            next2.done = true;
            return next2;
          };
          return next.next = next;
        }
      }
      return { next: doneResult };
    }
    exports.values = values;
    function doneResult() {
      return { value: undefined$12, done: true };
    }
    Context.prototype = {
      constructor: Context,
      reset: function(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        this.sent = this._sent = undefined$12;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$12;
        this.tryEntries.forEach(resetTryEntry);
        if (!skipTempReset) {
          for (var name2 in this) {
            if (name2.charAt(0) === "t" && hasOwn2.call(this, name2) && !isNaN(+name2.slice(1))) {
              this[name2] = undefined$12;
            }
          }
        }
      },
      stop: function() {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }
        return this.rval;
      },
      dispatchException: function(exception) {
        if (this.done) {
          throw exception;
        }
        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;
          if (caught) {
            context.method = "next";
            context.arg = undefined$12;
          }
          return !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;
          if (entry.tryLoc === "root") {
            return handle("end");
          }
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn2.call(entry, "catchLoc");
            var hasFinally = hasOwn2.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn2.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          finallyEntry = null;
        }
        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;
        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }
        return this.complete(record);
      },
      complete: function(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }
        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }
        return ContinueSentinel;
      },
      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName,
          nextLoc
        };
        if (this.method === "next") {
          this.arg = undefined$12;
        }
        return ContinueSentinel;
      }
    };
    return exports;
  }(module.exports);
  try {
    regeneratorRuntime = runtime2;
  } catch (accidentalStrictMode) {
    if (typeof globalThis === "object") {
      globalThis.regeneratorRuntime = runtime2;
    } else {
      Function("r", "regeneratorRuntime = r")(runtime2);
    }
  }
})(runtime);
var memoizerific = { exports: {} };
(function(module, exports) {
  (function(f2) {
    {
      module.exports = f2();
    }
  })(function() {
    return function e(t, n, r) {
      function s(o2, u) {
        if (!n[o2]) {
          if (!t[o2]) {
            var a = typeof commonjsRequire == "function" && commonjsRequire;
            if (!u && a)
              return a(o2, true);
            if (i)
              return i(o2, true);
            var f2 = new Error("Cannot find module '" + o2 + "'");
            throw f2.code = "MODULE_NOT_FOUND", f2;
          }
          var l = n[o2] = { exports: {} };
          t[o2][0].call(l.exports, function(e2) {
            var n2 = t[o2][1][e2];
            return s(n2 ? n2 : e2);
          }, l, l.exports, e, t, n, r);
        }
        return n[o2].exports;
      }
      var i = typeof commonjsRequire == "function" && commonjsRequire;
      for (var o = 0; o < r.length; o++)
        s(r[o]);
      return s;
    }({ 1: [function(_dereq_, module2, exports2) {
      module2.exports = function(forceSimilar) {
        if (typeof Map !== "function" || forceSimilar) {
          var Similar = _dereq_("./similar");
          return new Similar();
        } else {
          return /* @__PURE__ */ new Map();
        }
      };
    }, { "./similar": 2 }], 2: [function(_dereq_, module2, exports2) {
      function Similar() {
        this.list = [];
        this.lastItem = void 0;
        this.size = 0;
        return this;
      }
      Similar.prototype.get = function(key2) {
        var index;
        if (this.lastItem && this.isEqual(this.lastItem.key, key2)) {
          return this.lastItem.val;
        }
        index = this.indexOf(key2);
        if (index >= 0) {
          this.lastItem = this.list[index];
          return this.list[index].val;
        }
        return void 0;
      };
      Similar.prototype.set = function(key2, val) {
        var index;
        if (this.lastItem && this.isEqual(this.lastItem.key, key2)) {
          this.lastItem.val = val;
          return this;
        }
        index = this.indexOf(key2);
        if (index >= 0) {
          this.lastItem = this.list[index];
          this.list[index].val = val;
          return this;
        }
        this.lastItem = { key: key2, val };
        this.list.push(this.lastItem);
        this.size++;
        return this;
      };
      Similar.prototype.delete = function(key2) {
        var index;
        if (this.lastItem && this.isEqual(this.lastItem.key, key2)) {
          this.lastItem = void 0;
        }
        index = this.indexOf(key2);
        if (index >= 0) {
          this.size--;
          return this.list.splice(index, 1)[0];
        }
        return void 0;
      };
      Similar.prototype.has = function(key2) {
        var index;
        if (this.lastItem && this.isEqual(this.lastItem.key, key2)) {
          return true;
        }
        index = this.indexOf(key2);
        if (index >= 0) {
          this.lastItem = this.list[index];
          return true;
        }
        return false;
      };
      Similar.prototype.forEach = function(callback, thisArg) {
        var i;
        for (i = 0; i < this.size; i++) {
          callback.call(thisArg || this, this.list[i].val, this.list[i].key, this);
        }
      };
      Similar.prototype.indexOf = function(key2) {
        var i;
        for (i = 0; i < this.size; i++) {
          if (this.isEqual(this.list[i].key, key2)) {
            return i;
          }
        }
        return -1;
      };
      Similar.prototype.isEqual = function(val1, val2) {
        return val1 === val2 || val1 !== val1 && val2 !== val2;
      };
      module2.exports = Similar;
    }, {}], 3: [function(_dereq_, module2, exports2) {
      var MapOrSimilar = _dereq_("map-or-similar");
      module2.exports = function(limit) {
        var cache = new MapOrSimilar(void 0 === "true"), lru = [];
        return function(fn) {
          var memoizerific2 = function() {
            var currentCache = cache, newMap, fnResult, argsLengthMinusOne = arguments.length - 1, lruPath = Array(argsLengthMinusOne + 1), isMemoized = true, i;
            if ((memoizerific2.numArgs || memoizerific2.numArgs === 0) && memoizerific2.numArgs !== argsLengthMinusOne + 1) {
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            }
            for (i = 0; i < argsLengthMinusOne; i++) {
              lruPath[i] = {
                cacheItem: currentCache,
                arg: arguments[i]
              };
              if (currentCache.has(arguments[i])) {
                currentCache = currentCache.get(arguments[i]);
                continue;
              }
              isMemoized = false;
              newMap = new MapOrSimilar(void 0 === "true");
              currentCache.set(arguments[i], newMap);
              currentCache = newMap;
            }
            if (isMemoized) {
              if (currentCache.has(arguments[argsLengthMinusOne])) {
                fnResult = currentCache.get(arguments[argsLengthMinusOne]);
              } else {
                isMemoized = false;
              }
            }
            if (!isMemoized) {
              fnResult = fn.apply(null, arguments);
              currentCache.set(arguments[argsLengthMinusOne], fnResult);
            }
            if (limit > 0) {
              lruPath[argsLengthMinusOne] = {
                cacheItem: currentCache,
                arg: arguments[argsLengthMinusOne]
              };
              if (isMemoized) {
                moveToMostRecentLru(lru, lruPath);
              } else {
                lru.push(lruPath);
              }
              if (lru.length > limit) {
                removeCachedResult(lru.shift());
              }
            }
            memoizerific2.wasMemoized = isMemoized;
            memoizerific2.numArgs = argsLengthMinusOne + 1;
            return fnResult;
          };
          memoizerific2.limit = limit;
          memoizerific2.wasMemoized = false;
          memoizerific2.cache = cache;
          memoizerific2.lru = lru;
          return memoizerific2;
        };
      };
      function moveToMostRecentLru(lru, lruPath) {
        var lruLen = lru.length, lruPathLen = lruPath.length, isMatch, i, ii2;
        for (i = 0; i < lruLen; i++) {
          isMatch = true;
          for (ii2 = 0; ii2 < lruPathLen; ii2++) {
            if (!isEqual2(lru[i][ii2].arg, lruPath[ii2].arg)) {
              isMatch = false;
              break;
            }
          }
          if (isMatch) {
            break;
          }
        }
        lru.push(lru.splice(i, 1)[0]);
      }
      function removeCachedResult(removedLru) {
        var removedLruLen = removedLru.length, currentLru = removedLru[removedLruLen - 1], tmp, i;
        currentLru.cacheItem.delete(currentLru.arg);
        for (i = removedLruLen - 2; i >= 0; i--) {
          currentLru = removedLru[i];
          tmp = currentLru.cacheItem.get(currentLru.arg);
          if (!tmp || !tmp.size) {
            currentLru.cacheItem.delete(currentLru.arg);
          } else {
            break;
          }
        }
      }
      function isEqual2(val1, val2) {
        return val1 === val2 || val1 !== val1 && val2 !== val2;
      }
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
})(memoizerific);
var memoize$2 = memoizerific.exports;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$8 = freeGlobal || freeSelf || Function("return this")();
var _root = root$8;
var root$7 = _root;
var Symbol$6 = root$7.Symbol;
var _Symbol = Symbol$6;
var Symbol$5 = _Symbol;
var objectProto$e = Object.prototype;
var hasOwnProperty$b = objectProto$e.hasOwnProperty;
var nativeObjectToString$1 = objectProto$e.toString;
var symToStringTag$1 = Symbol$5 ? Symbol$5.toStringTag : void 0;
function getRawTag$1(value2) {
  var isOwn = hasOwnProperty$b.call(value2, symToStringTag$1), tag = value2[symToStringTag$1];
  try {
    value2[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result2 = nativeObjectToString$1.call(value2);
  if (unmasked) {
    if (isOwn) {
      value2[symToStringTag$1] = tag;
    } else {
      delete value2[symToStringTag$1];
    }
  }
  return result2;
}
var _getRawTag = getRawTag$1;
var objectProto$d = Object.prototype;
var nativeObjectToString = objectProto$d.toString;
function objectToString$2(value2) {
  return nativeObjectToString.call(value2);
}
var _objectToString = objectToString$2;
var Symbol$4 = _Symbol, getRawTag = _getRawTag, objectToString$1 = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$4 ? Symbol$4.toStringTag : void 0;
function baseGetTag$6(value2) {
  if (value2 == null) {
    return value2 === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value2) ? getRawTag(value2) : objectToString$1(value2);
}
var _baseGetTag = baseGetTag$6;
function isObject$8(value2) {
  var type = typeof value2;
  return value2 != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$8;
var baseGetTag$5 = _baseGetTag, isObject$7 = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$3(value2) {
  if (!isObject$7(value2)) {
    return false;
  }
  var tag = baseGetTag$5(value2);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_1$1 = isFunction$3;
var root$6 = _root;
var coreJsData$1 = root$6["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$2;
var isFunction$2 = isFunction_1$1, isMasked = _isMasked, isObject$6 = isObject_1, toSource$1 = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$c = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$a = objectProto$c.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString$1.call(hasOwnProperty$a).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$1(value2) {
  if (!isObject$6(value2) || isMasked(value2)) {
    return false;
  }
  var pattern = isFunction$2(value2) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value2));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object, key2) {
  return object == null ? void 0 : object[key2];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$7(object, key2) {
  var value2 = getValue(object, key2);
  return baseIsNative(value2) ? value2 : void 0;
}
var _getNative = getNative$7;
var getNative$6 = _getNative;
var defineProperty$2 = function() {
  try {
    var func = getNative$6(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty$5 = defineProperty$2;
var defineProperty$1 = _defineProperty$5;
function baseAssignValue$2(object, key2, value2) {
  if (key2 == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key2, {
      "configurable": true,
      "enumerable": true,
      "value": value2,
      "writable": true
    });
  } else {
    object[key2] = value2;
  }
}
var _baseAssignValue = baseAssignValue$2;
function createBaseFor$1(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key2 = props[fromRight ? length : ++index];
      if (iteratee(iterable[key2], key2, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var _createBaseFor = createBaseFor$1;
var createBaseFor = _createBaseFor;
var baseFor$1 = createBaseFor();
var _baseFor = baseFor$1;
function baseTimes$1(n, iteratee) {
  var index = -1, result2 = Array(n);
  while (++index < n) {
    result2[index] = iteratee(index);
  }
  return result2;
}
var _baseTimes = baseTimes$1;
function isObjectLike$6(value2) {
  return value2 != null && typeof value2 == "object";
}
var isObjectLike_1 = isObjectLike$6;
var baseGetTag$4 = _baseGetTag, isObjectLike$5 = isObjectLike_1;
var argsTag$2 = "[object Arguments]";
function baseIsArguments$1(value2) {
  return isObjectLike$5(value2) && baseGetTag$4(value2) == argsTag$2;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$4 = isObjectLike_1;
var objectProto$b = Object.prototype;
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$b.propertyIsEnumerable;
var isArguments$3 = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value2) {
  return isObjectLike$4(value2) && hasOwnProperty$9.call(value2, "callee") && !propertyIsEnumerable$1.call(value2, "callee");
};
var isArguments_1 = isArguments$3;
var isArray$d = Array.isArray;
var isArray_1 = isArray$d;
var isBuffer$3 = { exports: {} };
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
(function(module, exports) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer = moduleExports ? root2.Buffer : void 0;
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
  var isBuffer3 = nativeIsBuffer || stubFalse2;
  module.exports = isBuffer3;
})(isBuffer$3, isBuffer$3.exports);
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$3(value2, length) {
  var type = typeof value2;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value2)) && (value2 > -1 && value2 % 1 == 0 && value2 < length);
}
var _isIndex = isIndex$3;
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength$3(value2) {
  return typeof value2 == "number" && value2 > -1 && value2 % 1 == 0 && value2 <= MAX_SAFE_INTEGER;
}
var isLength_1 = isLength$3;
var baseGetTag$3 = _baseGetTag, isLength$2 = isLength_1, isObjectLike$3 = isObjectLike_1;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", objectTag$3 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag] = typedArrayTags[mapTag$2] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$1] = typedArrayTags[setTag$2] = typedArrayTags[stringTag$1] = typedArrayTags[weakMapTag$1] = false;
function baseIsTypedArray$1(value2) {
  return isObjectLike$3(value2) && isLength$2(value2.length) && !!typedArrayTags[baseGetTag$3(value2)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
function baseUnary$1(func) {
  return function(value2) {
    return func(value2);
  };
}
var _baseUnary = baseUnary$1;
var _nodeUtil = { exports: {} };
(function(module, exports) {
  var freeGlobal2 = _freeGlobal;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types2 = freeModule && freeModule.require && freeModule.require("util").types;
      if (types2) {
        return types2;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var baseIsTypedArray = _baseIsTypedArray, baseUnary = _baseUnary, nodeUtil = _nodeUtil.exports;
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray$2 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$2;
var baseTimes = _baseTimes, isArguments$2 = isArguments_1, isArray$c = isArray_1, isBuffer$2 = isBuffer$3.exports, isIndex$2 = _isIndex, isTypedArray$1 = isTypedArray_1;
var objectProto$a = Object.prototype;
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
function arrayLikeKeys$2(value2, inherited) {
  var isArr = isArray$c(value2), isArg = !isArr && isArguments$2(value2), isBuff = !isArr && !isArg && isBuffer$2(value2), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value2), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value2.length, String) : [], length = result2.length;
  for (var key2 in value2) {
    if ((inherited || hasOwnProperty$8.call(value2, key2)) && !(skipIndexes && (key2 == "length" || isBuff && (key2 == "offset" || key2 == "parent") || isType && (key2 == "buffer" || key2 == "byteLength" || key2 == "byteOffset") || isIndex$2(key2, length)))) {
      result2.push(key2);
    }
  }
  return result2;
}
var _arrayLikeKeys = arrayLikeKeys$2;
var objectProto$9 = Object.prototype;
function isPrototype$2(value2) {
  var Ctor = value2 && value2.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$9;
  return value2 === proto;
}
var _isPrototype = isPrototype$2;
function overArg$2(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$2;
var overArg$1 = _overArg;
var nativeKeys$1 = overArg$1(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype$1 = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$8 = Object.prototype;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
function baseKeys$1(object) {
  if (!isPrototype$1(object)) {
    return nativeKeys(object);
  }
  var result2 = [];
  for (var key2 in Object(object)) {
    if (hasOwnProperty$7.call(object, key2) && key2 != "constructor") {
      result2.push(key2);
    }
  }
  return result2;
}
var _baseKeys = baseKeys$1;
var isFunction$1 = isFunction_1$1, isLength$1 = isLength_1;
function isArrayLike$2(value2) {
  return value2 != null && isLength$1(value2.length) && !isFunction$1(value2);
}
var isArrayLike_1 = isArrayLike$2;
var arrayLikeKeys$1 = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike$1 = isArrayLike_1;
function keys$3(object) {
  return isArrayLike$1(object) ? arrayLikeKeys$1(object) : baseKeys(object);
}
var keys_1 = keys$3;
var baseFor = _baseFor, keys$2 = keys_1;
function baseForOwn$1(object, iteratee) {
  return object && baseFor(object, iteratee, keys$2);
}
var _baseForOwn = baseForOwn$1;
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;
function eq$3(value2, other) {
  return value2 === other || value2 !== value2 && other !== other;
}
var eq_1 = eq$3;
var eq$2 = eq_1;
function assocIndexOf$4(array, key2) {
  var length = array.length;
  while (length--) {
    if (eq$2(array[length][0], key2)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete$1(key2) {
  var data = this.__data__, index = assocIndexOf$3(data, key2);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key2) {
  var data = this.__data__, index = assocIndexOf$2(data, key2);
  return index < 0 ? void 0 : data[index][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key2) {
  return assocIndexOf$1(this.__data__, key2) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key2, value2) {
  var data = this.__data__, index = assocIndexOf(data, key2);
  if (index < 0) {
    ++this.size;
    data.push([key2, value2]);
  } else {
    data[index][1] = value2;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$4(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype["delete"] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;
var _ListCache = ListCache$4;
var ListCache$3 = _ListCache;
function stackClear$1() {
  this.__data__ = new ListCache$3();
  this.size = 0;
}
var _stackClear = stackClear$1;
function stackDelete$1(key2) {
  var data = this.__data__, result2 = data["delete"](key2);
  this.size = data.size;
  return result2;
}
var _stackDelete = stackDelete$1;
function stackGet$1(key2) {
  return this.__data__.get(key2);
}
var _stackGet = stackGet$1;
function stackHas$1(key2) {
  return this.__data__.has(key2);
}
var _stackHas = stackHas$1;
var getNative$5 = _getNative, root$5 = _root;
var Map$4 = getNative$5(root$5, "Map");
var _Map = Map$4;
var getNative$4 = _getNative;
var nativeCreate$4 = getNative$4(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key2) {
  var result2 = this.has(key2) && delete this.__data__[key2];
  this.size -= result2 ? 1 : 0;
  return result2;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
function hashGet$1(key2) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result2 = data[key2];
    return result2 === HASH_UNDEFINED$2 ? void 0 : result2;
  }
  return hasOwnProperty$6.call(data, key2) ? data[key2] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function hashHas$1(key2) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key2] !== void 0 : hasOwnProperty$5.call(data, key2);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet$1(key2, value2) {
  var data = this.__data__;
  this.size += this.has(key2) ? 0 : 1;
  data[key2] = nativeCreate && value2 === void 0 ? HASH_UNDEFINED$1 : value2;
  return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
function Hash$1(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype["delete"] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
var Hash = _Hash, ListCache$2 = _ListCache, Map$3 = _Map;
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$3 || ListCache$2)(),
    "string": new Hash()
  };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value2) {
  var type = typeof value2;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value2 !== "__proto__" : value2 === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map3, key2) {
  var data = map3.__data__;
  return isKeyable(key2) ? data[typeof key2 == "string" ? "string" : "hash"] : data.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key2) {
  var result2 = getMapData$3(this, key2)["delete"](key2);
  this.size -= result2 ? 1 : 0;
  return result2;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key2) {
  return getMapData$2(this, key2).get(key2);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key2) {
  return getMapData$1(this, key2).has(key2);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key2, value2) {
  var data = getMapData(this, key2), size = data.size;
  data.set(key2, value2);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$3(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache$3.prototype.clear = mapCacheClear;
MapCache$3.prototype["delete"] = mapCacheDelete;
MapCache$3.prototype.get = mapCacheGet;
MapCache$3.prototype.has = mapCacheHas;
MapCache$3.prototype.set = mapCacheSet;
var _MapCache = MapCache$3;
var ListCache$1 = _ListCache, Map$2 = _Map, MapCache$2 = _MapCache;
var LARGE_ARRAY_SIZE = 200;
function stackSet$1(key2, value2) {
  var data = this.__data__;
  if (data instanceof ListCache$1) {
    var pairs = data.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key2, value2]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$2(pairs);
  }
  data.set(key2, value2);
  this.size = data.size;
  return this;
}
var _stackSet = stackSet$1;
var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
function Stack$2(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack$2.prototype.clear = stackClear;
Stack$2.prototype["delete"] = stackDelete;
Stack$2.prototype.get = stackGet;
Stack$2.prototype.has = stackHas;
Stack$2.prototype.set = stackSet;
var _Stack = Stack$2;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd$1(value2) {
  this.__data__.set(value2, HASH_UNDEFINED);
  return this;
}
var _setCacheAdd = setCacheAdd$1;
function setCacheHas$1(value2) {
  return this.__data__.has(value2);
}
var _setCacheHas = setCacheHas$1;
var MapCache$1 = _MapCache, setCacheAdd = _setCacheAdd, setCacheHas = _setCacheHas;
function SetCache$1(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache$1();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;
var _SetCache = SetCache$1;
function arraySome$1(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
var _arraySome = arraySome$1;
function cacheHas$1(cache, key2) {
  return cache.has(key2);
}
var _cacheHas = cacheHas$1;
var SetCache = _SetCache, arraySome = _arraySome, cacheHas = _cacheHas;
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result2 = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result2 = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result2 = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result2;
}
var _equalArrays = equalArrays$2;
var root$4 = _root;
var Uint8Array$2 = root$4.Uint8Array;
var _Uint8Array = Uint8Array$2;
function mapToArray$1(map3) {
  var index = -1, result2 = Array(map3.size);
  map3.forEach(function(value2, key2) {
    result2[++index] = [key2, value2];
  });
  return result2;
}
var _mapToArray = mapToArray$1;
function setToArray$1(set) {
  var index = -1, result2 = Array(set.size);
  set.forEach(function(value2) {
    result2[++index] = value2;
  });
  return result2;
}
var _setToArray = setToArray$1;
var Symbol$3 = _Symbol, Uint8Array$1 = _Uint8Array, eq$1 = eq_1, equalArrays$1 = _equalArrays, mapToArray = _mapToArray, setToArray = _setToArray;
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag$1 = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag$1 = "[object Set]", stringTag = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]";
var symbolProto$1 = Symbol$3 ? Symbol$3.prototype : void 0, symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$1:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq$1(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == other + "";
    case mapTag$1:
      var convert = mapToArray;
    case setTag$1:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object, other);
      var result2 = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result2;
    case symbolTag$1:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var _equalByTag = equalByTag$1;
function arrayPush$3(array, values) {
  var index = -1, length = values.length, offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
var _arrayPush = arrayPush$3;
var arrayPush$2 = _arrayPush, isArray$b = isArray_1;
function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
  var result2 = keysFunc(object);
  return isArray$b(object) ? result2 : arrayPush$2(result2, symbolsFunc(object));
}
var _baseGetAllKeys = baseGetAllKeys$2;
function arrayFilter$1(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
  while (++index < length) {
    var value2 = array[index];
    if (predicate(value2, index, array)) {
      result2[resIndex++] = value2;
    }
  }
  return result2;
}
var _arrayFilter = arrayFilter$1;
function stubArray$2() {
  return [];
}
var stubArray_1 = stubArray$2;
var arrayFilter = _arrayFilter, stubArray$1 = stubArray_1;
var objectProto$5 = Object.prototype;
var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols$2 = !nativeGetSymbols$1 ? stubArray$1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var _getSymbols = getSymbols$2;
var baseGetAllKeys$1 = _baseGetAllKeys, getSymbols$1 = _getSymbols, keys$1 = keys_1;
function getAllKeys$1(object) {
  return baseGetAllKeys$1(object, keys$1, getSymbols$1);
}
var _getAllKeys = getAllKeys$1;
var getAllKeys = _getAllKeys;
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$4 = Object.prototype;
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key2 = objProps[index];
    if (!(isPartial ? key2 in other : hasOwnProperty$4.call(other, key2))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result2 = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key2 = objProps[index];
    var objValue = object[key2], othValue = other[key2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key2, other, object, stack) : customizer(objValue, othValue, key2, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result2 = false;
      break;
    }
    skipCtor || (skipCtor = key2 == "constructor");
  }
  if (result2 && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result2 = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result2;
}
var _equalObjects = equalObjects$1;
var getNative$3 = _getNative, root$3 = _root;
var DataView$2 = getNative$3(root$3, "DataView");
var _DataView = DataView$2;
var getNative$2 = _getNative, root$2 = _root;
var Promise$2 = getNative$2(root$2, "Promise");
var _Promise = Promise$2;
var getNative$1 = _getNative, root$1 = _root;
var Set$2 = getNative$1(root$1, "Set");
var _Set = Set$2;
var getNative = _getNative, root = _root;
var WeakMap$2 = getNative(root, "WeakMap");
var _WeakMap = WeakMap$2;
var DataView$1 = _DataView, Map$1 = _Map, Promise$1 = _Promise, Set$1 = _Set, WeakMap$1 = _WeakMap, baseGetTag$2 = _baseGetTag, toSource = _toSource;
var mapTag = "[object Map]", objectTag$2 = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$1);
var getTag$1 = baseGetTag$2;
if (DataView$1 && getTag$1(new DataView$1(new ArrayBuffer(1))) != dataViewTag || Map$1 && getTag$1(new Map$1()) != mapTag || Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag || Set$1 && getTag$1(new Set$1()) != setTag || WeakMap$1 && getTag$1(new WeakMap$1()) != weakMapTag) {
  getTag$1 = function(value2) {
    var result2 = baseGetTag$2(value2), Ctor = result2 == objectTag$2 ? value2.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result2;
  };
}
var _getTag = getTag$1;
var Stack$1 = _Stack, equalArrays = _equalArrays, equalByTag = _equalByTag, equalObjects = _equalObjects, getTag = _getTag, isArray$a = isArray_1, isBuffer$1 = isBuffer$3.exports, isTypedArray = isTypedArray_1;
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag$1 = "[object Object]";
var objectProto$3 = Object.prototype;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$a(object), othIsArr = isArray$a(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag$1 : objTag;
  othTag = othTag == argsTag ? objectTag$1 : othTag;
  var objIsObj = objTag == objectTag$1, othIsObj = othTag == objectTag$1, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$1(object)) {
    if (!isBuffer$1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$1());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty$3.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$3.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack$1());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$1());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
var _baseIsEqualDeep = baseIsEqualDeep$1;
var baseIsEqualDeep = _baseIsEqualDeep, isObjectLike$2 = isObjectLike_1;
function baseIsEqual$3(value2, other, bitmask, customizer, stack) {
  if (value2 === other) {
    return true;
  }
  if (value2 == null || other == null || !isObjectLike$2(value2) && !isObjectLike$2(other)) {
    return value2 !== value2 && other !== other;
  }
  return baseIsEqualDeep(value2, other, bitmask, customizer, baseIsEqual$3, stack);
}
var _baseIsEqual = baseIsEqual$3;
var Stack = _Stack, baseIsEqual$2 = _baseIsEqual;
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch$1(object, source2, matchData, customizer) {
  var index = matchData.length, length = index, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key2 = data[0], objValue = object[key2], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key2 in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result2 = customizer(objValue, srcValue, key2, object, source2, stack);
      }
      if (!(result2 === void 0 ? baseIsEqual$2(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result2)) {
        return false;
      }
    }
  }
  return true;
}
var _baseIsMatch = baseIsMatch$1;
var isObject$5 = isObject_1;
function isStrictComparable$2(value2) {
  return value2 === value2 && !isObject$5(value2);
}
var _isStrictComparable = isStrictComparable$2;
var isStrictComparable$1 = _isStrictComparable, keys = keys_1;
function getMatchData$1(object) {
  var result2 = keys(object), length = result2.length;
  while (length--) {
    var key2 = result2[length], value2 = object[key2];
    result2[length] = [key2, value2, isStrictComparable$1(value2)];
  }
  return result2;
}
var _getMatchData = getMatchData$1;
function matchesStrictComparable$2(key2, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key2] === srcValue && (srcValue !== void 0 || key2 in Object(object));
  };
}
var _matchesStrictComparable = matchesStrictComparable$2;
var baseIsMatch = _baseIsMatch, getMatchData = _getMatchData, matchesStrictComparable$1 = _matchesStrictComparable;
function baseMatches$1(source2) {
  var matchData = getMatchData(source2);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source2 || baseIsMatch(object, source2, matchData);
  };
}
var _baseMatches = baseMatches$1;
var baseGetTag$1 = _baseGetTag, isObjectLike$1 = isObjectLike_1;
var symbolTag = "[object Symbol]";
function isSymbol$6(value2) {
  return typeof value2 == "symbol" || isObjectLike$1(value2) && baseGetTag$1(value2) == symbolTag;
}
var isSymbol_1 = isSymbol$6;
var isArray$9 = isArray_1, isSymbol$5 = isSymbol_1;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey$3(value2, object) {
  if (isArray$9(value2)) {
    return false;
  }
  var type = typeof value2;
  if (type == "number" || type == "symbol" || type == "boolean" || value2 == null || isSymbol$5(value2)) {
    return true;
  }
  return reIsPlainProp.test(value2) || !reIsDeepProp.test(value2) || object != null && value2 in Object(object);
}
var _isKey = isKey$3;
var MapCache = _MapCache;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize$1(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key2 = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key2)) {
      return cache.get(key2);
    }
    var result2 = func.apply(this, args);
    memoized.cache = cache.set(key2, result2) || cache;
    return result2;
  };
  memoized.cache = new (memoize$1.Cache || MapCache)();
  return memoized;
}
memoize$1.Cache = MapCache;
var memoize_1 = memoize$1;
var memoize = memoize_1;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped$1(func) {
  var result2 = memoize(func, function(key2) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key2;
  });
  var cache = result2.cache;
  return result2;
}
var _memoizeCapped = memoizeCapped$1;
var memoizeCapped = _memoizeCapped;
var rePropName$1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar$1 = /\\(\\)?/g;
var stringToPath$2 = memoizeCapped(function(string) {
  var result2 = [];
  if (string.charCodeAt(0) === 46) {
    result2.push("");
  }
  string.replace(rePropName$1, function(match, number, quote2, subString) {
    result2.push(quote2 ? subString.replace(reEscapeChar$1, "$1") : number || match);
  });
  return result2;
});
var _stringToPath = stringToPath$2;
function arrayMap$2(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result2 = Array(length);
  while (++index < length) {
    result2[index] = iteratee(array[index], index, array);
  }
  return result2;
}
var _arrayMap = arrayMap$2;
var Symbol$2 = _Symbol, arrayMap$1 = _arrayMap, isArray$8 = isArray_1, isSymbol$4 = isSymbol_1;
var INFINITY$1 = 1 / 0;
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString$1(value2) {
  if (typeof value2 == "string") {
    return value2;
  }
  if (isArray$8(value2)) {
    return arrayMap$1(value2, baseToString$1) + "";
  }
  if (isSymbol$4(value2)) {
    return symbolToString ? symbolToString.call(value2) : "";
  }
  var result2 = value2 + "";
  return result2 == "0" && 1 / value2 == -INFINITY$1 ? "-0" : result2;
}
var _baseToString = baseToString$1;
var baseToString = _baseToString;
function toString$5(value2) {
  return value2 == null ? "" : baseToString(value2);
}
var toString_1 = toString$5;
var isArray$7 = isArray_1, isKey$2 = _isKey, stringToPath$1 = _stringToPath, toString$4 = toString_1;
function castPath$4(value2, object) {
  if (isArray$7(value2)) {
    return value2;
  }
  return isKey$2(value2, object) ? [value2] : stringToPath$1(toString$4(value2));
}
var _castPath = castPath$4;
var isSymbol$3 = isSymbol_1;
var INFINITY = 1 / 0;
function toKey$5(value2) {
  if (typeof value2 == "string" || isSymbol$3(value2)) {
    return value2;
  }
  var result2 = value2 + "";
  return result2 == "0" && 1 / value2 == -INFINITY ? "-0" : result2;
}
var _toKey = toKey$5;
var castPath$3 = _castPath, toKey$4 = _toKey;
function baseGet$3(object, path) {
  path = castPath$3(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey$4(path[index++])];
  }
  return index && index == length ? object : void 0;
}
var _baseGet = baseGet$3;
var baseGet$2 = _baseGet;
function get$1(object, path, defaultValue) {
  var result2 = object == null ? void 0 : baseGet$2(object, path);
  return result2 === void 0 ? defaultValue : result2;
}
var get_1 = get$1;
function baseHasIn$1(object, key2) {
  return object != null && key2 in Object(object);
}
var _baseHasIn = baseHasIn$1;
var castPath$2 = _castPath, isArguments$1 = isArguments_1, isArray$6 = isArray_1, isIndex$1 = _isIndex, isLength = isLength_1, toKey$3 = _toKey;
function hasPath$1(object, path, hasFunc) {
  path = castPath$2(path, object);
  var index = -1, length = path.length, result2 = false;
  while (++index < length) {
    var key2 = toKey$3(path[index]);
    if (!(result2 = object != null && hasFunc(object, key2))) {
      break;
    }
    object = object[key2];
  }
  if (result2 || ++index != length) {
    return result2;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex$1(key2, length) && (isArray$6(object) || isArguments$1(object));
}
var _hasPath = hasPath$1;
var baseHasIn = _baseHasIn, hasPath = _hasPath;
function hasIn$2(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}
var hasIn_1 = hasIn$2;
var baseIsEqual$1 = _baseIsEqual, get = get_1, hasIn$1 = hasIn_1, isKey$1 = _isKey, isStrictComparable = _isStrictComparable, matchesStrictComparable = _matchesStrictComparable, toKey$2 = _toKey;
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty$1(path, srcValue) {
  if (isKey$1(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey$2(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn$1(object, path) : baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
var _baseMatchesProperty = baseMatchesProperty$1;
function identity$2(value2) {
  return value2;
}
var identity_1 = identity$2;
function baseProperty$1(key2) {
  return function(object) {
    return object == null ? void 0 : object[key2];
  };
}
var _baseProperty = baseProperty$1;
var baseGet$1 = _baseGet;
function basePropertyDeep$1(path) {
  return function(object) {
    return baseGet$1(object, path);
  };
}
var _basePropertyDeep = basePropertyDeep$1;
var baseProperty = _baseProperty, basePropertyDeep = _basePropertyDeep, isKey = _isKey, toKey$1 = _toKey;
function property$1(path) {
  return isKey(path) ? baseProperty(toKey$1(path)) : basePropertyDeep(path);
}
var property_1 = property$1;
var baseMatches = _baseMatches, baseMatchesProperty = _baseMatchesProperty, identity$1 = identity_1, isArray$5 = isArray_1, property = property_1;
function baseIteratee$2(value2) {
  if (typeof value2 == "function") {
    return value2;
  }
  if (value2 == null) {
    return identity$1;
  }
  if (typeof value2 == "object") {
    return isArray$5(value2) ? baseMatchesProperty(value2[0], value2[1]) : baseMatches(value2);
  }
  return property(value2);
}
var _baseIteratee = baseIteratee$2;
var baseAssignValue$1 = _baseAssignValue, baseForOwn = _baseForOwn, baseIteratee$1 = _baseIteratee;
function mapValues(object, iteratee) {
  var result2 = {};
  iteratee = baseIteratee$1(iteratee);
  baseForOwn(object, function(value2, key2, object2) {
    baseAssignValue$1(result2, key2, iteratee(value2, key2, object2));
  });
  return result2;
}
var mapValues_1 = mapValues;
var baseAssignValue = _baseAssignValue, eq = eq_1;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function assignValue$1(object, key2, value2) {
  var objValue = object[key2];
  if (!(hasOwnProperty$2.call(object, key2) && eq(objValue, value2)) || value2 === void 0 && !(key2 in object)) {
    baseAssignValue(object, key2, value2);
  }
}
var _assignValue = assignValue$1;
var assignValue = _assignValue, castPath$1 = _castPath, isIndex = _isIndex, isObject$4 = isObject_1, toKey = _toKey;
function baseSet$1(object, path, value2, customizer) {
  if (!isObject$4(object)) {
    return object;
  }
  path = castPath$1(path, object);
  var index = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index < length) {
    var key2 = toKey(path[index]), newValue = value2;
    if (key2 === "__proto__" || key2 === "constructor" || key2 === "prototype") {
      return object;
    }
    if (index != lastIndex) {
      var objValue = nested[key2];
      newValue = customizer ? customizer(objValue, key2, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject$4(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }
    assignValue(nested, key2, newValue);
    nested = nested[key2];
  }
  return object;
}
var _baseSet = baseSet$1;
var baseGet = _baseGet, baseSet = _baseSet, castPath = _castPath;
function basePickBy$2(object, paths, predicate) {
  var index = -1, length = paths.length, result2 = {};
  while (++index < length) {
    var path = paths[index], value2 = baseGet(object, path);
    if (predicate(value2, path)) {
      baseSet(result2, castPath(path, object), value2);
    }
  }
  return result2;
}
var _basePickBy = basePickBy$2;
var basePickBy$1 = _basePickBy, hasIn = hasIn_1;
function basePick$1(object, paths) {
  return basePickBy$1(object, paths, function(value2, path) {
    return hasIn(object, path);
  });
}
var _basePick = basePick$1;
var Symbol$1 = _Symbol, isArguments = isArguments_1, isArray$4 = isArray_1;
var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : void 0;
function isFlattenable$1(value2) {
  return isArray$4(value2) || isArguments(value2) || !!(spreadableSymbol && value2 && value2[spreadableSymbol]);
}
var _isFlattenable = isFlattenable$1;
var arrayPush$1 = _arrayPush, isFlattenable = _isFlattenable;
function baseFlatten$1(array, depth, predicate, isStrict, result2) {
  var index = -1, length = array.length;
  predicate || (predicate = isFlattenable);
  result2 || (result2 = []);
  while (++index < length) {
    var value2 = array[index];
    if (depth > 0 && predicate(value2)) {
      if (depth > 1) {
        baseFlatten$1(value2, depth - 1, predicate, isStrict, result2);
      } else {
        arrayPush$1(result2, value2);
      }
    } else if (!isStrict) {
      result2[result2.length] = value2;
    }
  }
  return result2;
}
var _baseFlatten = baseFlatten$1;
var baseFlatten = _baseFlatten;
function flatten$1(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}
var flatten_1 = flatten$1;
function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var _apply = apply$1;
var apply = _apply;
var nativeMax = Math.max;
function overRest$1(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
var _overRest = overRest$1;
function constant$1(value2) {
  return function() {
    return value2;
  };
}
var constant_1 = constant$1;
var constant = constant_1, defineProperty = _defineProperty$5, identity = identity_1;
var baseSetToString$1 = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var _baseSetToString = baseSetToString$1;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut$1(func) {
  var count3 = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count3 >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count3 = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var _shortOut = shortOut$1;
var baseSetToString = _baseSetToString, shortOut = _shortOut;
var setToString$1 = shortOut(baseSetToString);
var _setToString = setToString$1;
var flatten = flatten_1, overRest = _overRest, setToString = _setToString;
function flatRest$1(func) {
  return setToString(overRest(func, void 0, flatten), func + "");
}
var _flatRest = flatRest$1;
var basePick = _basePick, flatRest = _flatRest;
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});
var pick_1 = pick;
var win;
if (typeof window !== "undefined") {
  win = window;
} else if (typeof commonjsGlobal !== "undefined") {
  win = commonjsGlobal;
} else if (typeof self !== "undefined") {
  win = self;
} else {
  win = {};
}
var window_1 = win;
function makeArrayFrom(obj) {
  return Array.prototype.slice.apply(obj);
}
var PENDING = "pending", RESOLVED = "resolved", REJECTED = "rejected";
function SynchronousPromise(handler) {
  this.status = PENDING;
  this._continuations = [];
  this._parent = null;
  this._paused = false;
  if (handler) {
    handler.call(this, this._continueWith.bind(this), this._failWith.bind(this));
  }
}
function looksLikeAPromise(obj) {
  return obj && typeof obj.then === "function";
}
function passThrough(value2) {
  return value2;
}
SynchronousPromise.prototype = {
  then: function(nextFn, catchFn) {
    var next = SynchronousPromise.unresolved()._setParent(this);
    if (this._isRejected()) {
      if (this._paused) {
        this._continuations.push({
          promise: next,
          nextFn,
          catchFn
        });
        return next;
      }
      if (catchFn) {
        try {
          var catchResult = catchFn(this._error);
          if (looksLikeAPromise(catchResult)) {
            this._chainPromiseData(catchResult, next);
            return next;
          } else {
            return SynchronousPromise.resolve(catchResult)._setParent(this);
          }
        } catch (e) {
          return SynchronousPromise.reject(e)._setParent(this);
        }
      }
      return SynchronousPromise.reject(this._error)._setParent(this);
    }
    this._continuations.push({
      promise: next,
      nextFn,
      catchFn
    });
    this._runResolutions();
    return next;
  },
  catch: function(handler) {
    if (this._isResolved()) {
      return SynchronousPromise.resolve(this._data)._setParent(this);
    }
    var next = SynchronousPromise.unresolved()._setParent(this);
    this._continuations.push({
      promise: next,
      catchFn: handler
    });
    this._runRejections();
    return next;
  },
  finally: function(callback) {
    var ran = false;
    function runFinally(result2, err) {
      if (!ran) {
        ran = true;
        if (!callback) {
          callback = passThrough;
        }
        var callbackResult = callback(result2);
        if (looksLikeAPromise(callbackResult)) {
          return callbackResult.then(function() {
            if (err) {
              throw err;
            }
            return result2;
          });
        } else {
          return result2;
        }
      }
    }
    return this.then(function(result2) {
      return runFinally(result2);
    }).catch(function(err) {
      return runFinally(null, err);
    });
  },
  pause: function() {
    this._paused = true;
    return this;
  },
  resume: function() {
    var firstPaused = this._findFirstPaused();
    if (firstPaused) {
      firstPaused._paused = false;
      firstPaused._runResolutions();
      firstPaused._runRejections();
    }
    return this;
  },
  _findAncestry: function() {
    return this._continuations.reduce(function(acc, cur) {
      if (cur.promise) {
        var node = {
          promise: cur.promise,
          children: cur.promise._findAncestry()
        };
        acc.push(node);
      }
      return acc;
    }, []);
  },
  _setParent: function(parent) {
    if (this._parent) {
      throw new Error("parent already set");
    }
    this._parent = parent;
    return this;
  },
  _continueWith: function(data) {
    var firstPending = this._findFirstPending();
    if (firstPending) {
      firstPending._data = data;
      firstPending._setResolved();
    }
  },
  _findFirstPending: function() {
    return this._findFirstAncestor(function(test) {
      return test._isPending && test._isPending();
    });
  },
  _findFirstPaused: function() {
    return this._findFirstAncestor(function(test) {
      return test._paused;
    });
  },
  _findFirstAncestor: function(matching) {
    var test = this;
    var result2;
    while (test) {
      if (matching(test)) {
        result2 = test;
      }
      test = test._parent;
    }
    return result2;
  },
  _failWith: function(error2) {
    var firstRejected = this._findFirstPending();
    if (firstRejected) {
      firstRejected._error = error2;
      firstRejected._setRejected();
    }
  },
  _takeContinuations: function() {
    return this._continuations.splice(0, this._continuations.length);
  },
  _runRejections: function() {
    if (this._paused || !this._isRejected()) {
      return;
    }
    var error2 = this._error, continuations = this._takeContinuations(), self2 = this;
    continuations.forEach(function(cont) {
      if (cont.catchFn) {
        try {
          var catchResult = cont.catchFn(error2);
          self2._handleUserFunctionResult(catchResult, cont.promise);
        } catch (e) {
          cont.promise.reject(e);
        }
      } else {
        cont.promise.reject(error2);
      }
    });
  },
  _runResolutions: function() {
    if (this._paused || !this._isResolved() || this._isPending()) {
      return;
    }
    var continuations = this._takeContinuations();
    if (looksLikeAPromise(this._data)) {
      return this._handleWhenResolvedDataIsPromise(this._data);
    }
    var data = this._data;
    var self2 = this;
    continuations.forEach(function(cont) {
      if (cont.nextFn) {
        try {
          var result2 = cont.nextFn(data);
          self2._handleUserFunctionResult(result2, cont.promise);
        } catch (e) {
          self2._handleResolutionError(e, cont);
        }
      } else if (cont.promise) {
        cont.promise.resolve(data);
      }
    });
  },
  _handleResolutionError: function(e, continuation) {
    this._setRejected();
    if (continuation.catchFn) {
      try {
        continuation.catchFn(e);
        return;
      } catch (e2) {
        e = e2;
      }
    }
    if (continuation.promise) {
      continuation.promise.reject(e);
    }
  },
  _handleWhenResolvedDataIsPromise: function(data) {
    var self2 = this;
    return data.then(function(result2) {
      self2._data = result2;
      self2._runResolutions();
    }).catch(function(error2) {
      self2._error = error2;
      self2._setRejected();
      self2._runRejections();
    });
  },
  _handleUserFunctionResult: function(data, nextSynchronousPromise) {
    if (looksLikeAPromise(data)) {
      this._chainPromiseData(data, nextSynchronousPromise);
    } else {
      nextSynchronousPromise.resolve(data);
    }
  },
  _chainPromiseData: function(promiseData, nextSynchronousPromise) {
    promiseData.then(function(newData) {
      nextSynchronousPromise.resolve(newData);
    }).catch(function(newError) {
      nextSynchronousPromise.reject(newError);
    });
  },
  _setResolved: function() {
    this.status = RESOLVED;
    if (!this._paused) {
      this._runResolutions();
    }
  },
  _setRejected: function() {
    this.status = REJECTED;
    if (!this._paused) {
      this._runRejections();
    }
  },
  _isPending: function() {
    return this.status === PENDING;
  },
  _isResolved: function() {
    return this.status === RESOLVED;
  },
  _isRejected: function() {
    return this.status === REJECTED;
  }
};
SynchronousPromise.resolve = function(result2) {
  return new SynchronousPromise(function(resolve, reject) {
    if (looksLikeAPromise(result2)) {
      result2.then(function(newResult) {
        resolve(newResult);
      }).catch(function(error2) {
        reject(error2);
      });
    } else {
      resolve(result2);
    }
  });
};
SynchronousPromise.reject = function(result2) {
  return new SynchronousPromise(function(resolve, reject) {
    reject(result2);
  });
};
SynchronousPromise.unresolved = function() {
  return new SynchronousPromise(function(resolve, reject) {
    this.resolve = resolve;
    this.reject = reject;
  });
};
SynchronousPromise.all = function() {
  var args = makeArrayFrom(arguments);
  if (Array.isArray(args[0])) {
    args = args[0];
  }
  if (!args.length) {
    return SynchronousPromise.resolve([]);
  }
  return new SynchronousPromise(function(resolve, reject) {
    var allData = [], numResolved = 0, doResolve = function() {
      if (numResolved === args.length) {
        resolve(allData);
      }
    }, rejected = false, doReject = function(err) {
      if (rejected) {
        return;
      }
      rejected = true;
      reject(err);
    };
    args.forEach(function(arg, idx) {
      SynchronousPromise.resolve(arg).then(function(thisResult) {
        allData[idx] = thisResult;
        numResolved += 1;
        doResolve();
      }).catch(function(err) {
        doReject(err);
      });
    });
  });
};
function createAggregateErrorFrom(errors) {
  if (typeof window !== "undefined" && "AggregateError" in window) {
    return new window.AggregateError(errors);
  }
  return { errors };
}
SynchronousPromise.any = function() {
  var args = makeArrayFrom(arguments);
  if (Array.isArray(args[0])) {
    args = args[0];
  }
  if (!args.length) {
    return SynchronousPromise.reject(createAggregateErrorFrom([]));
  }
  return new SynchronousPromise(function(resolve, reject) {
    var allErrors = [], numRejected = 0, doReject = function() {
      if (numRejected === args.length) {
        reject(createAggregateErrorFrom(allErrors));
      }
    }, resolved = false, doResolve = function(result2) {
      if (resolved) {
        return;
      }
      resolved = true;
      resolve(result2);
    };
    args.forEach(function(arg, idx) {
      SynchronousPromise.resolve(arg).then(function(thisResult) {
        doResolve(thisResult);
      }).catch(function(err) {
        allErrors[idx] = err;
        numRejected += 1;
        doReject();
      });
    });
  });
};
SynchronousPromise.allSettled = function() {
  var args = makeArrayFrom(arguments);
  if (Array.isArray(args[0])) {
    args = args[0];
  }
  if (!args.length) {
    return SynchronousPromise.resolve([]);
  }
  return new SynchronousPromise(function(resolve) {
    var allData = [], numSettled = 0, doSettled = function() {
      numSettled += 1;
      if (numSettled === args.length) {
        resolve(allData);
      }
    };
    args.forEach(function(arg, idx) {
      SynchronousPromise.resolve(arg).then(function(thisResult) {
        allData[idx] = {
          status: "fulfilled",
          value: thisResult
        };
        doSettled();
      }).catch(function(err) {
        allData[idx] = {
          status: "rejected",
          reason: err
        };
        doSettled();
      });
    });
  });
};
if (Promise === SynchronousPromise) {
  throw new Error("Please use SynchronousPromise.installGlobally() to install globally");
}
var RealPromise = Promise;
SynchronousPromise.installGlobally = function(__awaiter) {
  if (Promise === SynchronousPromise) {
    return __awaiter;
  }
  var result2 = patchAwaiterIfRequired(__awaiter);
  Promise = SynchronousPromise;
  return result2;
};
SynchronousPromise.uninstallGlobally = function() {
  if (Promise === SynchronousPromise) {
    Promise = RealPromise;
  }
};
function patchAwaiterIfRequired(__awaiter) {
  if (typeof __awaiter === "undefined" || __awaiter.__patched) {
    return __awaiter;
  }
  var originalAwaiter = __awaiter;
  __awaiter = function() {
    originalAwaiter.apply(this, makeArrayFrom(arguments));
  };
  __awaiter.__patched = true;
  return __awaiter;
}
var synchronousPromise = {
  SynchronousPromise
};
function dedent(templ) {
  var values = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    values[_i - 1] = arguments[_i];
  }
  var strings = Array.from(typeof templ === "string" ? [templ] : templ);
  strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var indentLengths = strings.reduce(function(arr, str) {
    var matches3 = str.match(/\n([\t ]+|(?!\s).)/g);
    if (matches3) {
      return arr.concat(matches3.map(function(match) {
        var _a, _b;
        return (_b = (_a = match.match(/[\t ]/g)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
      }));
    }
    return arr;
  }, []);
  if (indentLengths.length) {
    var pattern_1 = new RegExp("\n[	 ]{" + Math.min.apply(Math, indentLengths) + "}", "g");
    strings = strings.map(function(str) {
      return str.replace(pattern_1, "\n");
    });
  }
  strings[0] = strings[0].replace(/^\r?\n/, "");
  var string = strings[0];
  values.forEach(function(value2, i) {
    var endentations = string.match(/(?:^|\n)( *)$/);
    var endentation = endentations ? endentations[1] : "";
    var indentedValue = value2;
    if (typeof value2 === "string" && value2.includes("\n")) {
      indentedValue = String(value2).split("\n").map(function(str, i2) {
        return i2 === 0 ? str : "" + endentation + str;
      }).join("\n");
    }
    string += indentedValue + strings[i + 1];
  });
  return string;
}
var _templateObject$d;
function _taggedTemplateLiteral$d(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _slicedToArray$c(arr, i) {
  return _arrayWithHoles$d(arr) || _iterableToArrayLimit$c(arr, i) || _unsupportedIterableToArray$j(arr, i) || _nonIterableRest$d();
}
function _nonIterableRest$d() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$j(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$j(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$j(o, minLen);
}
function _arrayLikeToArray$j(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$c(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$d(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classCallCheck$h(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$h(target2, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target2, descriptor.key, descriptor);
  }
}
function _createClass$h(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$h(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$h(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var StoryIndexStore = /* @__PURE__ */ function() {
  function StoryIndexStore2() {
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      v: 3,
      stories: {}
    }, stories = _ref.stories;
    _classCallCheck$h(this, StoryIndexStore2);
    this.channel = void 0;
    this.stories = void 0;
    this.stories = stories;
  }
  _createClass$h(StoryIndexStore2, [{
    key: "storyIdFromSpecifier",
    value: function storyIdFromSpecifier(specifier) {
      var storyIds = Object.keys(this.stories);
      if (specifier === "*") {
        return storyIds[0];
      }
      if (typeof specifier === "string") {
        if (storyIds.indexOf(specifier) >= 0) {
          return specifier;
        }
        return storyIds.find(function(storyId) {
          return storyId.startsWith(specifier);
        });
      }
      var name2 = specifier.name, title = specifier.title;
      var match = Object.entries(this.stories).find(function(_ref22) {
        var _ref32 = _slicedToArray$c(_ref22, 2);
        _ref32[0];
        var story2 = _ref32[1];
        return story2.name === name2 && story2.title === title;
      });
      return match && match[0];
    }
  }, {
    key: "storyIdToEntry",
    value: function storyIdToEntry(storyId) {
      var storyEntry = this.stories[storyId];
      if (!storyEntry) {
        throw new Error(dedent(_templateObject$d || (_templateObject$d = _taggedTemplateLiteral$d(["Couldn't find story matching '", "' after HMR.\n      - Did you remove it from your CSF file?\n      - Are you sure a story with that id exists?\n      - Please check your stories field of your main.js config.\n      - Also check the browser console and terminal for error messages."])), storyId));
      }
      return storyEntry;
    }
  }]);
  return StoryIndexStore2;
}();
var fastDeepEqual = function equal(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a == "object" && typeof b == "object") {
    if (a.constructor !== b.constructor)
      return false;
    var length, i, keys2;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!equal(a[i], b[i]))
          return false;
      return true;
    }
    if (a.constructor === RegExp)
      return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();
    keys2 = Object.keys(a);
    length = keys2.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys2[i]))
        return false;
    for (i = length; i-- !== 0; ) {
      var key2 = keys2[i];
      if (!equal(a[key2], b[key2]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
};
var LOGLEVEL = window_1.LOGLEVEL, console$1 = window_1.console;
var levels = {
  trace: 1,
  debug: 2,
  info: 3,
  warn: 4,
  error: 5,
  silent: 10
};
var currentLogLevelString = LOGLEVEL;
var currentLogLevelNumber = levels[currentLogLevelString] || levels.info;
var logger = {
  trace: function trace(message) {
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }
    return currentLogLevelNumber <= levels.trace && console$1.trace.apply(console$1, [message].concat(rest));
  },
  debug: function debug(message) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      rest[_key2 - 1] = arguments[_key2];
    }
    return currentLogLevelNumber <= levels.debug && console$1.debug.apply(console$1, [message].concat(rest));
  },
  info: function info(message) {
    for (var _len3 = arguments.length, rest = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      rest[_key3 - 1] = arguments[_key3];
    }
    return currentLogLevelNumber <= levels.info && console$1.info.apply(console$1, [message].concat(rest));
  },
  warn: function warn(message) {
    for (var _len4 = arguments.length, rest = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      rest[_key4 - 1] = arguments[_key4];
    }
    return currentLogLevelNumber <= levels.warn && console$1.warn.apply(console$1, [message].concat(rest));
  },
  error: function error(message) {
    for (var _len5 = arguments.length, rest = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
      rest[_key5 - 1] = arguments[_key5];
    }
    return currentLogLevelNumber <= levels.error && console$1.error.apply(console$1, [message].concat(rest));
  },
  log: function log(message) {
    for (var _len6 = arguments.length, rest = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
      rest[_key6 - 1] = arguments[_key6];
    }
    return currentLogLevelNumber < levels.silent && console$1.log.apply(console$1, [message].concat(rest));
  }
};
var logged = /* @__PURE__ */ new Set();
var once = function once2(type) {
  return function(message) {
    if (logged.has(message))
      return void 0;
    logged.add(message);
    for (var _len7 = arguments.length, rest = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
      rest[_key7 - 1] = arguments[_key7];
    }
    return logger[type].apply(logger, [message].concat(rest));
  };
};
once.clear = function() {
  return logged.clear();
};
once.trace = once("trace");
once.debug = once("debug");
once.info = once("info");
once.warn = once("warn");
once.error = once("error");
once.log = once("log");
var pretty = function pretty2(type) {
  return function() {
    var argArray = [];
    for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      args[_key8] = arguments[_key8];
    }
    if (args.length) {
      var startTagRe = /<span\s+style=(['"])([^'"]*)\1\s*>/gi;
      var endTagRe = /<\/span>/gi;
      var reResultArray;
      argArray.push(args[0].replace(startTagRe, "%c").replace(endTagRe, "%c"));
      while (reResultArray = startTagRe.exec(args[0])) {
        argArray.push(reResultArray[2]);
        argArray.push("");
      }
      for (var j = 1; j < args.length; j++) {
        argArray.push(args[j]);
      }
    }
    logger[type].apply(logger, argArray);
  };
};
pretty.trace = pretty("trace");
pretty.debug = pretty("debug");
pretty.info = pretty("info");
pretty.warn = pretty("warn");
pretty.error = pretty("error");
var overArg = _overArg;
var getPrototype$2 = overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$2;
var baseGetTag = _baseGetTag, getPrototype$1 = _getPrototype, isObjectLike = isObjectLike_1;
var objectTag = "[object Object]";
var funcProto = Function.prototype, objectProto$1 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject(value2) {
  if (!isObjectLike(value2) || baseGetTag(value2) != objectTag) {
    return false;
  }
  var proto = getPrototype$1(value2);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$1.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var isPlainObject_1 = isPlainObject;
var _templateObject$c, _templateObject2$2;
function _taggedTemplateLiteral$c(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _toConsumableArray$a(arr) {
  return _arrayWithoutHoles$a(arr) || _iterableToArray$a(arr) || _unsupportedIterableToArray$i(arr) || _nonIterableSpread$a();
}
function _nonIterableSpread$a() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray$a(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles$a(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$i(arr);
}
function _defineProperty$4(obj, key2, value2) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, { value: value2, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key2] = value2;
  }
  return obj;
}
function _slicedToArray$b(arr, i) {
  return _arrayWithHoles$c(arr) || _iterableToArrayLimit$b(arr, i) || _unsupportedIterableToArray$i(arr, i) || _nonIterableRest$c();
}
function _nonIterableRest$c() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$i(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$i(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$i(o, minLen);
}
function _arrayLikeToArray$i(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$b(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$c(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _typeof$4(obj) {
  "@babel/helpers - typeof";
  return _typeof$4 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$4(obj);
}
var INCOMPATIBLE = Symbol("incompatible");
var map$1 = function map2(arg, argType) {
  var type = argType.type;
  if (arg === void 0 || arg === null || !type)
    return arg;
  if (argType.mapping) {
    return arg;
  }
  switch (type.name) {
    case "string":
      return String(arg);
    case "enum":
      return arg;
    case "number":
      return Number(arg);
    case "boolean":
      return arg === "true";
    case "array":
      if (!type.value || !Array.isArray(arg))
        return INCOMPATIBLE;
      return arg.reduce(function(acc, item, index) {
        var mapped = map2(item, {
          type: type.value
        });
        if (mapped !== INCOMPATIBLE)
          acc[index] = mapped;
        return acc;
      }, new Array(arg.length));
    case "object":
      if (typeof arg === "string" || typeof arg === "number")
        return arg;
      if (!type.value || _typeof$4(arg) !== "object")
        return INCOMPATIBLE;
      return Object.entries(arg).reduce(function(acc, _ref) {
        var _ref22 = _slicedToArray$b(_ref, 2), key2 = _ref22[0], val = _ref22[1];
        var mapped = map2(val, {
          type: type.value[key2]
        });
        return mapped === INCOMPATIBLE ? acc : Object.assign(acc, _defineProperty$4({}, key2, mapped));
      }, {});
    default:
      return INCOMPATIBLE;
  }
};
var mapArgsToTypes = function mapArgsToTypes2(args, argTypes) {
  return Object.entries(args).reduce(function(acc, _ref32) {
    var _ref42 = _slicedToArray$b(_ref32, 2), key2 = _ref42[0], value2 = _ref42[1];
    if (!argTypes[key2])
      return acc;
    var mapped = map$1(value2, argTypes[key2]);
    return mapped === INCOMPATIBLE ? acc : Object.assign(acc, _defineProperty$4({}, key2, mapped));
  }, {});
};
var combineArgs = function combineArgs2(value2, update) {
  if (Array.isArray(value2) && Array.isArray(update)) {
    return update.reduce(function(acc, upd, index) {
      acc[index] = combineArgs2(value2[index], update[index]);
      return acc;
    }, _toConsumableArray$a(value2)).filter(function(v) {
      return v !== void 0;
    });
  }
  if (!isPlainObject_1(value2) || !isPlainObject_1(update))
    return update;
  return Object.keys(Object.assign({}, value2, update)).reduce(function(acc, key2) {
    if (key2 in update) {
      var combined = combineArgs2(value2[key2], update[key2]);
      if (combined !== void 0)
        acc[key2] = combined;
    } else {
      acc[key2] = value2[key2];
    }
    return acc;
  }, {});
};
var validateOptions = function validateOptions2(args, argTypes) {
  return Object.entries(argTypes).reduce(function(acc, _ref52) {
    var _ref6 = _slicedToArray$b(_ref52, 2), key2 = _ref6[0], options2 = _ref6[1].options;
    function allowArg() {
      if (key2 in args) {
        acc[key2] = args[key2];
      }
      return acc;
    }
    if (!options2)
      return allowArg();
    if (!Array.isArray(options2)) {
      once.error(dedent(_templateObject$c || (_templateObject$c = _taggedTemplateLiteral$c(["\n        Invalid argType: '", ".options' should be an array.\n\n        More info: https://storybook.js.org/docs/react/api/argtypes\n      "])), key2));
      return allowArg();
    }
    if (options2.some(function(opt) {
      return opt && ["object", "function"].includes(_typeof$4(opt));
    })) {
      once.error(dedent(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral$c(["\n        Invalid argType: '", ".options' should only contain primitives. Use a 'mapping' for complex values.\n\n        More info: https://storybook.js.org/docs/react/writing-stories/args#mapping-to-complex-arg-values\n      "])), key2));
      return allowArg();
    }
    var isArray2 = Array.isArray(args[key2]);
    var invalidIndex = isArray2 && args[key2].findIndex(function(val) {
      return !options2.includes(val);
    });
    var isValidArray = isArray2 && invalidIndex === -1;
    if (args[key2] === void 0 || options2.includes(args[key2]) || isValidArray) {
      return allowArg();
    }
    var field = isArray2 ? "".concat(key2, "[").concat(invalidIndex, "]") : key2;
    var supportedOptions = options2.map(function(opt) {
      return typeof opt === "string" ? "'".concat(opt, "'") : String(opt);
    }).join(", ");
    once.warn("Received illegal value for '".concat(field, "'. Supported options: ").concat(supportedOptions));
    return acc;
  }, {});
};
var DEEPLY_EQUAL = Symbol("Deeply equal");
var deepDiff = function deepDiff2(value2, update) {
  if (_typeof$4(value2) !== _typeof$4(update))
    return update;
  if (fastDeepEqual(value2, update))
    return DEEPLY_EQUAL;
  if (Array.isArray(value2) && Array.isArray(update)) {
    var res = update.reduce(function(acc, upd, index) {
      var diff = deepDiff2(value2[index], upd);
      if (diff !== DEEPLY_EQUAL)
        acc[index] = diff;
      return acc;
    }, new Array(update.length));
    if (update.length >= value2.length)
      return res;
    return res.concat(new Array(value2.length - update.length).fill(void 0));
  }
  if (isPlainObject_1(value2) && isPlainObject_1(update)) {
    return Object.keys(Object.assign({}, value2, update)).reduce(function(acc, key2) {
      var diff = deepDiff2(value2 === null || value2 === void 0 ? void 0 : value2[key2], update === null || update === void 0 ? void 0 : update[key2]);
      return diff === DEEPLY_EQUAL ? acc : Object.assign(acc, _defineProperty$4({}, key2, diff));
    }, {});
  }
  return update;
};
var NO_TARGET_NAME = "";
function groupArgsByTarget(_ref7) {
  var args = _ref7.args, argTypes = _ref7.argTypes;
  var groupedArgs = {};
  Object.entries(args).forEach(function(_ref8) {
    var _ref9 = _slicedToArray$b(_ref8, 2), name2 = _ref9[0], value2 = _ref9[1];
    var _ref10 = argTypes[name2] || {}, _ref10$target = _ref10.target, target2 = _ref10$target === void 0 ? NO_TARGET_NAME : _ref10$target;
    groupedArgs[target2] = groupedArgs[target2] || {};
    groupedArgs[target2][name2] = value2;
  });
  return groupedArgs;
}
function _classCallCheck$g(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$g(target2, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target2, descriptor.key, descriptor);
  }
}
function _createClass$g(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$g(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$g(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function deleteUndefined(obj) {
  Object.keys(obj).forEach(function(key2) {
    return obj[key2] === void 0 && delete obj[key2];
  });
  return obj;
}
var ArgsStore = /* @__PURE__ */ function() {
  function ArgsStore2() {
    _classCallCheck$g(this, ArgsStore2);
    this.initialArgsByStoryId = {};
    this.argsByStoryId = {};
  }
  _createClass$g(ArgsStore2, [{
    key: "get",
    value: function get2(storyId) {
      if (!(storyId in this.argsByStoryId)) {
        throw new Error("No args known for ".concat(storyId, " -- has it been rendered yet?"));
      }
      return this.argsByStoryId[storyId];
    }
  }, {
    key: "setInitial",
    value: function setInitial(story2) {
      if (!this.initialArgsByStoryId[story2.id]) {
        this.initialArgsByStoryId[story2.id] = story2.initialArgs;
        this.argsByStoryId[story2.id] = story2.initialArgs;
      } else if (this.initialArgsByStoryId[story2.id] !== story2.initialArgs) {
        var delta2 = deepDiff(this.initialArgsByStoryId[story2.id], this.argsByStoryId[story2.id]);
        this.initialArgsByStoryId[story2.id] = story2.initialArgs;
        this.argsByStoryId[story2.id] = story2.initialArgs;
        if (delta2 !== DEEPLY_EQUAL) {
          this.updateFromDelta(story2, delta2);
        }
      }
    }
  }, {
    key: "updateFromDelta",
    value: function updateFromDelta(story2, delta2) {
      var validatedDelta = validateOptions(delta2, story2.argTypes);
      this.argsByStoryId[story2.id] = combineArgs(this.argsByStoryId[story2.id], validatedDelta);
    }
  }, {
    key: "updateFromPersisted",
    value: function updateFromPersisted(story2, persisted) {
      var mappedPersisted = mapArgsToTypes(persisted, story2.argTypes);
      return this.updateFromDelta(story2, mappedPersisted);
    }
  }, {
    key: "update",
    value: function update(storyId, argsUpdate) {
      if (!(storyId in this.argsByStoryId)) {
        throw new Error("No args known for ".concat(storyId, " -- has it been rendered yet?"));
      }
      this.argsByStoryId[storyId] = deleteUndefined(Object.assign({}, this.argsByStoryId[storyId], argsUpdate));
    }
  }]);
  return ArgsStore2;
}();
var browser = deprecate;
function deprecate(fn, msg) {
  if (config("noDeprecation")) {
    return fn;
  }
  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config("throwDeprecation")) {
        throw new Error(msg);
      } else if (config("traceDeprecation")) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }
  return deprecated;
}
function config(name2) {
  try {
    if (!commonjsGlobal.localStorage)
      return false;
  } catch (_) {
    return false;
  }
  var val = commonjsGlobal.localStorage[name2];
  if (val == null)
    return false;
  return String(val).toLowerCase() === "true";
}
function _slicedToArray$a(arr, i) {
  return _arrayWithHoles$b(arr) || _iterableToArrayLimit$a(arr, i) || _unsupportedIterableToArray$h(arr, i) || _nonIterableRest$b();
}
function _nonIterableRest$b() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$h(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$h(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$h(o, minLen);
}
function _arrayLikeToArray$h(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$a(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$b(arr) {
  if (Array.isArray(arr))
    return arr;
}
var getValuesFromArgTypes = function getValuesFromArgTypes2() {
  var argTypes = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.entries(argTypes).reduce(function(acc, _ref) {
    var _ref22 = _slicedToArray$a(_ref, 2), arg = _ref22[0], defaultValue = _ref22[1].defaultValue;
    if (typeof defaultValue !== "undefined") {
      acc[arg] = defaultValue;
    }
    return acc;
  }, {});
};
var _templateObject$b;
function _slicedToArray$9(arr, i) {
  return _arrayWithHoles$a(arr) || _iterableToArrayLimit$9(arr, i) || _unsupportedIterableToArray$g(arr, i) || _nonIterableRest$a();
}
function _nonIterableRest$a() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit$9(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$a(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _toConsumableArray$9(arr) {
  return _arrayWithoutHoles$9(arr) || _iterableToArray$9(arr) || _unsupportedIterableToArray$g(arr) || _nonIterableSpread$9();
}
function _nonIterableSpread$9() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$g(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$g(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$g(o, minLen);
}
function _iterableToArray$9(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles$9(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$g(arr);
}
function _arrayLikeToArray$g(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _classCallCheck$f(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$f(target2, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target2, descriptor.key, descriptor);
  }
}
function _createClass$f(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$f(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$f(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _taggedTemplateLiteral$b(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var setUndeclaredWarning = browser(function() {
}, dedent(_templateObject$b || (_templateObject$b = _taggedTemplateLiteral$b(["\n    Setting a global value that is undeclared (i.e. not in the user's initial set of globals\n    or globalTypes) is deprecated and will have no effect in 7.0.\n  "]))));
var GlobalsStore = /* @__PURE__ */ function() {
  function GlobalsStore2() {
    _classCallCheck$f(this, GlobalsStore2);
    this.allowedGlobalNames = void 0;
    this.initialGlobals = void 0;
    this.globals = {};
  }
  _createClass$f(GlobalsStore2, [{
    key: "set",
    value: function set(_ref) {
      var _ref$globals = _ref.globals, globals = _ref$globals === void 0 ? {} : _ref$globals, _ref$globalTypes = _ref.globalTypes, globalTypes = _ref$globalTypes === void 0 ? {} : _ref$globalTypes;
      var delta2 = this.initialGlobals && deepDiff(this.initialGlobals, this.globals);
      this.allowedGlobalNames = new Set([].concat(_toConsumableArray$9(Object.keys(globals)), _toConsumableArray$9(Object.keys(globalTypes))));
      var defaultGlobals = getValuesFromArgTypes(globalTypes);
      this.initialGlobals = Object.assign({}, defaultGlobals, globals);
      this.globals = this.initialGlobals;
      if (delta2 && delta2 !== DEEPLY_EQUAL) {
        this.updateFromPersisted(delta2);
      }
    }
  }, {
    key: "filterAllowedGlobals",
    value: function filterAllowedGlobals(globals) {
      var _this = this;
      return Object.entries(globals).reduce(function(acc, _ref22) {
        var _ref32 = _slicedToArray$9(_ref22, 2), key2 = _ref32[0], value2 = _ref32[1];
        if (_this.allowedGlobalNames.has(key2))
          acc[key2] = value2;
        return acc;
      }, {});
    }
  }, {
    key: "updateFromPersisted",
    value: function updateFromPersisted(persisted) {
      var allowedUrlGlobals = this.filterAllowedGlobals(persisted);
      this.globals = Object.assign({}, this.globals, allowedUrlGlobals);
    }
  }, {
    key: "get",
    value: function get2() {
      return this.globals;
    }
  }, {
    key: "update",
    value: function update(newGlobals) {
      var _this2 = this;
      Object.keys(newGlobals).forEach(function(key2) {
        if (!_this2.allowedGlobalNames.has(key2)) {
          setUndeclaredWarning();
        }
      });
      this.globals = Object.assign({}, this.globals, newGlobals);
    }
  }]);
  return GlobalsStore2;
}();
var _excluded$6 = ["type", "control"];
function _objectWithoutProperties$6(source2, excluded) {
  if (source2 == null)
    return {};
  var target2 = _objectWithoutPropertiesLoose$6(source2, excluded);
  var key2, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source2);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key2 = sourceSymbolKeys[i];
      if (excluded.indexOf(key2) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source2, key2))
        continue;
      target2[key2] = source2[key2];
    }
  }
  return target2;
}
function _objectWithoutPropertiesLoose$6(source2, excluded) {
  if (source2 == null)
    return {};
  var target2 = {};
  var sourceKeys = Object.keys(source2);
  var key2, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key2 = sourceKeys[i];
    if (excluded.indexOf(key2) >= 0)
      continue;
    target2[key2] = source2[key2];
  }
  return target2;
}
var normalizeType = function normalizeType2(type) {
  return typeof type === "string" ? {
    name: type
  } : type;
};
var normalizeControl = function normalizeControl2(control) {
  return typeof control === "string" ? {
    type: control
  } : control;
};
var normalizeInputType = function normalizeInputType2(inputType, key2) {
  var type = inputType.type, control = inputType.control, rest = _objectWithoutProperties$6(inputType, _excluded$6);
  var normalized = Object.assign({
    name: key2
  }, rest);
  if (type)
    normalized.type = normalizeType(type);
  if (control) {
    normalized.control = normalizeControl(control);
  } else if (control === false) {
    normalized.control = {
      disable: true
    };
  }
  return normalized;
};
var normalizeInputTypes = function normalizeInputTypes2(inputTypes) {
  return mapValues_1(inputTypes, normalizeInputType);
};
var dist = {};
function arrayReduce$1(array, iteratee, accumulator, initAccum) {
  var index = -1, length = array == null ? 0 : array.length;
  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}
var _arrayReduce = arrayReduce$1;
function basePropertyOf$1(object) {
  return function(key2) {
    return object == null ? void 0 : object[key2];
  };
}
var _basePropertyOf = basePropertyOf$1;
var basePropertyOf = _basePropertyOf;
var deburredLetters = {
  "\xC0": "A",
  "\xC1": "A",
  "\xC2": "A",
  "\xC3": "A",
  "\xC4": "A",
  "\xC5": "A",
  "\xE0": "a",
  "\xE1": "a",
  "\xE2": "a",
  "\xE3": "a",
  "\xE4": "a",
  "\xE5": "a",
  "\xC7": "C",
  "\xE7": "c",
  "\xD0": "D",
  "\xF0": "d",
  "\xC8": "E",
  "\xC9": "E",
  "\xCA": "E",
  "\xCB": "E",
  "\xE8": "e",
  "\xE9": "e",
  "\xEA": "e",
  "\xEB": "e",
  "\xCC": "I",
  "\xCD": "I",
  "\xCE": "I",
  "\xCF": "I",
  "\xEC": "i",
  "\xED": "i",
  "\xEE": "i",
  "\xEF": "i",
  "\xD1": "N",
  "\xF1": "n",
  "\xD2": "O",
  "\xD3": "O",
  "\xD4": "O",
  "\xD5": "O",
  "\xD6": "O",
  "\xD8": "O",
  "\xF2": "o",
  "\xF3": "o",
  "\xF4": "o",
  "\xF5": "o",
  "\xF6": "o",
  "\xF8": "o",
  "\xD9": "U",
  "\xDA": "U",
  "\xDB": "U",
  "\xDC": "U",
  "\xF9": "u",
  "\xFA": "u",
  "\xFB": "u",
  "\xFC": "u",
  "\xDD": "Y",
  "\xFD": "y",
  "\xFF": "y",
  "\xC6": "Ae",
  "\xE6": "ae",
  "\xDE": "Th",
  "\xFE": "th",
  "\xDF": "ss",
  "\u0100": "A",
  "\u0102": "A",
  "\u0104": "A",
  "\u0101": "a",
  "\u0103": "a",
  "\u0105": "a",
  "\u0106": "C",
  "\u0108": "C",
  "\u010A": "C",
  "\u010C": "C",
  "\u0107": "c",
  "\u0109": "c",
  "\u010B": "c",
  "\u010D": "c",
  "\u010E": "D",
  "\u0110": "D",
  "\u010F": "d",
  "\u0111": "d",
  "\u0112": "E",
  "\u0114": "E",
  "\u0116": "E",
  "\u0118": "E",
  "\u011A": "E",
  "\u0113": "e",
  "\u0115": "e",
  "\u0117": "e",
  "\u0119": "e",
  "\u011B": "e",
  "\u011C": "G",
  "\u011E": "G",
  "\u0120": "G",
  "\u0122": "G",
  "\u011D": "g",
  "\u011F": "g",
  "\u0121": "g",
  "\u0123": "g",
  "\u0124": "H",
  "\u0126": "H",
  "\u0125": "h",
  "\u0127": "h",
  "\u0128": "I",
  "\u012A": "I",
  "\u012C": "I",
  "\u012E": "I",
  "\u0130": "I",
  "\u0129": "i",
  "\u012B": "i",
  "\u012D": "i",
  "\u012F": "i",
  "\u0131": "i",
  "\u0134": "J",
  "\u0135": "j",
  "\u0136": "K",
  "\u0137": "k",
  "\u0138": "k",
  "\u0139": "L",
  "\u013B": "L",
  "\u013D": "L",
  "\u013F": "L",
  "\u0141": "L",
  "\u013A": "l",
  "\u013C": "l",
  "\u013E": "l",
  "\u0140": "l",
  "\u0142": "l",
  "\u0143": "N",
  "\u0145": "N",
  "\u0147": "N",
  "\u014A": "N",
  "\u0144": "n",
  "\u0146": "n",
  "\u0148": "n",
  "\u014B": "n",
  "\u014C": "O",
  "\u014E": "O",
  "\u0150": "O",
  "\u014D": "o",
  "\u014F": "o",
  "\u0151": "o",
  "\u0154": "R",
  "\u0156": "R",
  "\u0158": "R",
  "\u0155": "r",
  "\u0157": "r",
  "\u0159": "r",
  "\u015A": "S",
  "\u015C": "S",
  "\u015E": "S",
  "\u0160": "S",
  "\u015B": "s",
  "\u015D": "s",
  "\u015F": "s",
  "\u0161": "s",
  "\u0162": "T",
  "\u0164": "T",
  "\u0166": "T",
  "\u0163": "t",
  "\u0165": "t",
  "\u0167": "t",
  "\u0168": "U",
  "\u016A": "U",
  "\u016C": "U",
  "\u016E": "U",
  "\u0170": "U",
  "\u0172": "U",
  "\u0169": "u",
  "\u016B": "u",
  "\u016D": "u",
  "\u016F": "u",
  "\u0171": "u",
  "\u0173": "u",
  "\u0174": "W",
  "\u0175": "w",
  "\u0176": "Y",
  "\u0177": "y",
  "\u0178": "Y",
  "\u0179": "Z",
  "\u017B": "Z",
  "\u017D": "Z",
  "\u017A": "z",
  "\u017C": "z",
  "\u017E": "z",
  "\u0132": "IJ",
  "\u0133": "ij",
  "\u0152": "Oe",
  "\u0153": "oe",
  "\u0149": "'n",
  "\u017F": "s"
};
var deburrLetter$1 = basePropertyOf(deburredLetters);
var _deburrLetter = deburrLetter$1;
var deburrLetter = _deburrLetter, toString$3 = toString_1;
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
var rsComboMarksRange$3 = "\\u0300-\\u036f", reComboHalfMarksRange$3 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$3 = "\\u20d0-\\u20ff", rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3;
var rsCombo$2 = "[" + rsComboRange$3 + "]";
var reComboMark = RegExp(rsCombo$2, "g");
function deburr$1(string) {
  string = toString$3(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
}
var deburr_1 = deburr$1;
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function asciiWords$1(string) {
  return string.match(reAsciiWord) || [];
}
var _asciiWords = asciiWords$1;
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function hasUnicodeWord$1(string) {
  return reHasUnicodeWord.test(string);
}
var _hasUnicodeWord = hasUnicodeWord$1;
var rsAstralRange$2 = "\\ud800-\\udfff", rsComboMarksRange$2 = "\\u0300-\\u036f", reComboHalfMarksRange$2 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$2 = "\\u20d0-\\u20ff", rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange$2 = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
var rsApos$1 = "['\u2019]", rsBreak = "[" + rsBreakRange + "]", rsCombo$1 = "[" + rsComboRange$2 + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange$2 + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz$1 = "\\ud83c[\\udffb-\\udfff]", rsModifier$1 = "(?:" + rsCombo$1 + "|" + rsFitz$1 + ")", rsNonAstral$1 = "[^" + rsAstralRange$2 + "]", rsRegional$1 = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair$1 = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ$2 = "\\u200d";
var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos$1 + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos$1 + "(?:D|LL|M|RE|S|T|VE))?", reOptMod$1 = rsModifier$1 + "?", rsOptVar$1 = "[" + rsVarRange$2 + "]?", rsOptJoin$1 = "(?:" + rsZWJ$2 + "(?:" + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join("|") + ")" + rsOptVar$1 + reOptMod$1 + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1, rsEmoji = "(?:" + [rsDingbat, rsRegional$1, rsSurrPair$1].join("|") + ")" + rsSeq$1;
var reUnicodeWord = RegExp([
  rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
  rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
  rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
  rsUpper + "+" + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join("|"), "g");
function unicodeWords$1(string) {
  return string.match(reUnicodeWord) || [];
}
var _unicodeWords = unicodeWords$1;
var asciiWords = _asciiWords, hasUnicodeWord = _hasUnicodeWord, toString$2 = toString_1, unicodeWords = _unicodeWords;
function words$1(string, pattern, guard) {
  string = toString$2(string);
  pattern = guard ? void 0 : pattern;
  if (pattern === void 0) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}
var words_1 = words$1;
var arrayReduce = _arrayReduce, deburr = deburr_1, words = words_1;
var rsApos = "['\u2019]";
var reApos = RegExp(rsApos, "g");
function createCompounder$1(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
  };
}
var _createCompounder = createCompounder$1;
function baseSlice$1(array, start, end) {
  var index = -1, length = array.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result2 = Array(length);
  while (++index < length) {
    result2[index] = array[index + start];
  }
  return result2;
}
var _baseSlice = baseSlice$1;
var baseSlice = _baseSlice;
function castSlice$1(array, start, end) {
  var length = array.length;
  end = end === void 0 ? length : end;
  return !start && end >= length ? array : baseSlice(array, start, end);
}
var _castSlice = castSlice$1;
var rsAstralRange$1 = "\\ud800-\\udfff", rsComboMarksRange$1 = "\\u0300-\\u036f", reComboHalfMarksRange$1 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$1 = "\\u20d0-\\u20ff", rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1, rsVarRange$1 = "\\ufe0e\\ufe0f";
var rsZWJ$1 = "\\u200d";
var reHasUnicode = RegExp("[" + rsZWJ$1 + rsAstralRange$1 + rsComboRange$1 + rsVarRange$1 + "]");
function hasUnicode$2(string) {
  return reHasUnicode.test(string);
}
var _hasUnicode = hasUnicode$2;
function asciiToArray$1(string) {
  return string.split("");
}
var _asciiToArray = asciiToArray$1;
var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = "\\ufe0e\\ufe0f";
var rsAstral = "[" + rsAstralRange + "]", rsCombo = "[" + rsComboRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ = "\\u200d";
var reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
function unicodeToArray$1(string) {
  return string.match(reUnicode) || [];
}
var _unicodeToArray = unicodeToArray$1;
var asciiToArray = _asciiToArray, hasUnicode$1 = _hasUnicode, unicodeToArray = _unicodeToArray;
function stringToArray$1(string) {
  return hasUnicode$1(string) ? unicodeToArray(string) : asciiToArray(string);
}
var _stringToArray = stringToArray$1;
var castSlice = _castSlice, hasUnicode = _hasUnicode, stringToArray = _stringToArray, toString$1 = toString_1;
function createCaseFirst$1(methodName) {
  return function(string) {
    string = toString$1(string);
    var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
    var chr = strSymbols ? strSymbols[0] : string.charAt(0);
    var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
    return chr[methodName]() + trailing;
  };
}
var _createCaseFirst = createCaseFirst$1;
var createCaseFirst = _createCaseFirst;
var upperFirst$1 = createCaseFirst("toUpperCase");
var upperFirst_1 = upperFirst$1;
var createCompounder = _createCompounder, upperFirst = upperFirst_1;
var startCase = createCompounder(function(result2, word, index) {
  return result2 + (index ? " " : "") + upperFirst(word);
});
var startCase_1 = startCase;
var includeConditionalArg$1 = {};
var baseIsEqual = _baseIsEqual;
function isEqual(value2, other) {
  return baseIsEqual(value2, other);
}
var isEqual_1 = isEqual;
Object.defineProperty(includeConditionalArg$1, "__esModule", {
  value: true
});
includeConditionalArg$1.includeConditionalArg = includeConditionalArg$1.testValue = void 0;
var _isEqual = _interopRequireDefault(isEqual_1);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
var count = function count2(vals) {
  return vals.map(function(v) {
    return typeof v !== "undefined";
  }).filter(Boolean).length;
};
var testValue = function testValue2(cond, value2) {
  var _ref = cond, exists = _ref.exists, eq2 = _ref.eq, neq = _ref.neq, truthy = _ref.truthy;
  if (count([exists, eq2, neq, truthy]) > 1) {
    throw new Error("Invalid conditional test ".concat(JSON.stringify({
      exists,
      eq: eq2,
      neq
    })));
  }
  if (typeof eq2 !== "undefined") {
    return (0, _isEqual["default"])(value2, eq2);
  }
  if (typeof neq !== "undefined") {
    return !(0, _isEqual["default"])(value2, neq);
  }
  if (typeof exists !== "undefined") {
    var valueExists = typeof value2 !== "undefined";
    return exists ? valueExists : !valueExists;
  }
  var shouldBeTruthy = typeof truthy === "undefined" ? true : truthy;
  return shouldBeTruthy ? !!value2 : !value2;
};
includeConditionalArg$1.testValue = testValue;
var includeConditionalArg = function includeConditionalArg2(argType, args, globals) {
  if (!argType["if"])
    return true;
  var _ref22 = argType["if"], arg = _ref22.arg, global2 = _ref22.global;
  if (count([arg, global2]) !== 1) {
    throw new Error("Invalid conditional value ".concat(JSON.stringify({
      arg,
      global: global2
    })));
  }
  var value2 = arg ? args[arg] : globals[global2];
  return testValue(argType["if"], value2);
};
includeConditionalArg$1.includeConditionalArg = includeConditionalArg;
var story = {};
var SBType = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
var require$$0$3 = /* @__PURE__ */ getAugmentedNamespace(SBType);
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _SBType = require$$0$3;
  Object.keys(_SBType).forEach(function(key2) {
    if (key2 === "default" || key2 === "__esModule")
      return;
    Object.defineProperty(exports, key2, {
      enumerable: true,
      get: function get2() {
        return _SBType[key2];
      }
    });
  });
})(story);
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _exportNames = {
    sanitize: true,
    toId: true,
    storyNameFromExport: true,
    isExportStory: true,
    parseKind: true,
    includeConditionalArg: true
  };
  exports.isExportStory = isExportStory;
  Object.defineProperty(exports, "includeConditionalArg", {
    enumerable: true,
    get: function get2() {
      return _includeConditionalArg.includeConditionalArg;
    }
  });
  exports.parseKind = exports.storyNameFromExport = exports.toId = exports.sanitize = void 0;
  var _startCase = _interopRequireDefault2(startCase_1);
  var _includeConditionalArg = includeConditionalArg$1;
  var _story = story;
  Object.keys(_story).forEach(function(key2) {
    if (key2 === "default" || key2 === "__esModule")
      return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key2))
      return;
    Object.defineProperty(exports, key2, {
      enumerable: true,
      get: function get2() {
        return _story[key2];
      }
    });
  });
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  function _slicedToArray2(arr, i) {
    return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2();
  }
  function _nonIterableRest2() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray2(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray2(o, minLen);
  }
  function _arrayLikeToArray2(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _iterableToArrayLimit2(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles2(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  var sanitize = function sanitize2(string) {
    return string.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "-").replace(/-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
  };
  exports.sanitize = sanitize;
  var sanitizeSafe = function sanitizeSafe2(string, part2) {
    var sanitized = sanitize(string);
    if (sanitized === "") {
      throw new Error("Invalid ".concat(part2, " '").concat(string, "', must include alphanumeric characters"));
    }
    return sanitized;
  };
  var toId = function toId2(kind, name2) {
    return "".concat(sanitizeSafe(kind, "kind")).concat(name2 ? "--".concat(sanitizeSafe(name2, "name")) : "");
  };
  exports.toId = toId;
  var storyNameFromExport = function storyNameFromExport2(key2) {
    return (0, _startCase["default"])(key2);
  };
  exports.storyNameFromExport = storyNameFromExport;
  function matches3(storyKey, arrayOrRegex) {
    if (Array.isArray(arrayOrRegex)) {
      return arrayOrRegex.includes(storyKey);
    }
    return storyKey.match(arrayOrRegex);
  }
  function isExportStory(key2, _ref) {
    var includeStories = _ref.includeStories, excludeStories = _ref.excludeStories;
    return key2 !== "__esModule" && (!includeStories || matches3(key2, includeStories)) && (!excludeStories || !matches3(key2, excludeStories));
  }
  var parseKind = function parseKind2(kind, _ref22) {
    var rootSeparator = _ref22.rootSeparator, groupSeparator = _ref22.groupSeparator;
    var _kind$split = kind.split(rootSeparator, 2), _kind$split2 = _slicedToArray2(_kind$split, 2), root2 = _kind$split2[0], remainder = _kind$split2[1];
    var groups = (remainder || kind).split(groupSeparator).filter(function(i) {
      return !!i;
    });
    return {
      root: remainder ? root2 : null,
      groups
    };
  };
  exports.parseKind = parseKind;
})(dist);
var _templateObject$a;
function _toConsumableArray$8(arr) {
  return _arrayWithoutHoles$8(arr) || _iterableToArray$8(arr) || _unsupportedIterableToArray$f(arr) || _nonIterableSpread$8();
}
function _nonIterableSpread$8() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$f(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$f(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$f(o, minLen);
}
function _iterableToArray$8(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles$8(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$f(arr);
}
function _arrayLikeToArray$f(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _taggedTemplateLiteral$a(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var deprecatedStoryAnnotation = dedent(_templateObject$a || (_templateObject$a = _taggedTemplateLiteral$a(["\nCSF .story annotations deprecated; annotate story functions directly:\n- StoryFn.story.name => StoryFn.storyName\n- StoryFn.story.(parameters|decorators) => StoryFn.(parameters|decorators)\nSee https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations for details and codemod.\n"])));
var deprecatedStoryAnnotationWarning = browser(function() {
}, deprecatedStoryAnnotation);
function normalizeStory(key2, storyAnnotations, meta) {
  var userStoryFn;
  var storyObject;
  if (typeof storyAnnotations === "function") {
    userStoryFn = storyAnnotations;
    storyObject = storyAnnotations;
  } else {
    storyObject = storyAnnotations;
  }
  var _storyObject = storyObject, story2 = _storyObject.story;
  if (story2) {
    logger.debug("deprecated story", story2);
    deprecatedStoryAnnotationWarning();
  }
  var exportName = dist.storyNameFromExport(key2);
  var name2 = typeof storyObject !== "function" && storyObject.name || storyObject.storyName || (story2 === null || story2 === void 0 ? void 0 : story2.name) || exportName;
  var decorators = [].concat(_toConsumableArray$8(storyObject.decorators || []), _toConsumableArray$8((story2 === null || story2 === void 0 ? void 0 : story2.decorators) || []));
  var parameters = Object.assign({}, story2 === null || story2 === void 0 ? void 0 : story2.parameters, storyObject.parameters);
  var args = Object.assign({}, story2 === null || story2 === void 0 ? void 0 : story2.args, storyObject.args);
  var argTypes = Object.assign({}, story2 === null || story2 === void 0 ? void 0 : story2.argTypes, storyObject.argTypes);
  var loaders = [].concat(_toConsumableArray$8(storyObject.loaders || []), _toConsumableArray$8((story2 === null || story2 === void 0 ? void 0 : story2.loaders) || []));
  var _storyObject2 = storyObject, render = _storyObject2.render, play = _storyObject2.play;
  var id = parameters.__id || dist.toId(meta.id || meta.title, exportName);
  return Object.assign({
    id,
    name: name2,
    decorators,
    parameters,
    args,
    argTypes: normalizeInputTypes(argTypes),
    loaders
  }, render && {
    render
  }, userStoryFn && {
    userStoryFn
  }, play && {
    play
  });
}
function normalizeComponentAnnotations(defaultExport) {
  var title = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultExport.title;
  var importPath = arguments.length > 2 ? arguments[2] : void 0;
  var id = defaultExport.id, argTypes = defaultExport.argTypes;
  return Object.assign({
    id: dist.sanitize(id || title)
  }, defaultExport, {
    title
  }, argTypes && {
    argTypes: normalizeInputTypes(argTypes)
  }, {
    parameters: Object.assign({
      fileName: importPath
    }, defaultExport.parameters)
  });
}
var _excluded$5 = ["default", "__namedExportsOrder"];
function _objectWithoutProperties$5(source2, excluded) {
  if (source2 == null)
    return {};
  var target2 = _objectWithoutPropertiesLoose$5(source2, excluded);
  var key2, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source2);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key2 = sourceSymbolKeys[i];
      if (excluded.indexOf(key2) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source2, key2))
        continue;
      target2[key2] = source2[key2];
    }
  }
  return target2;
}
function _objectWithoutPropertiesLoose$5(source2, excluded) {
  if (source2 == null)
    return {};
  var target2 = {};
  var sourceKeys = Object.keys(source2);
  var key2, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key2 = sourceKeys[i];
    if (excluded.indexOf(key2) >= 0)
      continue;
    target2[key2] = source2[key2];
  }
  return target2;
}
var checkGlobals = function checkGlobals2(parameters) {
  var globals = parameters.globals, globalTypes = parameters.globalTypes;
  if (globals || globalTypes) {
    logger.error("Global args/argTypes can only be set globally", JSON.stringify({
      globals,
      globalTypes
    }));
  }
};
var checkStorySort = function checkStorySort2(parameters) {
  var options2 = parameters.options;
  if (options2 !== null && options2 !== void 0 && options2.storySort)
    logger.error("The storySort option parameter can only be set globally");
};
var checkDisallowedParameters = function checkDisallowedParameters2(parameters) {
  if (!parameters) {
    return;
  }
  checkGlobals(parameters);
  checkStorySort(parameters);
};
function processCSFFile(moduleExports, importPath, title) {
  var defaultExport = moduleExports.default;
  moduleExports.__namedExportsOrder;
  var namedExports = _objectWithoutProperties$5(moduleExports, _excluded$5);
  var meta = normalizeComponentAnnotations(defaultExport, title, importPath);
  checkDisallowedParameters(meta.parameters);
  var csfFile = {
    meta,
    stories: {}
  };
  Object.keys(namedExports).forEach(function(key2) {
    if (dist.isExportStory(key2, meta)) {
      var storyMeta = normalizeStory(key2, namedExports[key2], meta);
      checkDisallowedParameters(storyMeta.parameters);
      csfFile.stories[storyMeta.id] = storyMeta;
    }
  });
  return csfFile;
}
function _toConsumableArray$7(arr) {
  return _arrayWithoutHoles$7(arr) || _iterableToArray$7(arr) || _unsupportedIterableToArray$e(arr) || _nonIterableSpread$7();
}
function _nonIterableSpread$7() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray$7(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles$7(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$e(arr);
}
function _slicedToArray$8(arr, i) {
  return _arrayWithHoles$9(arr) || _iterableToArrayLimit$8(arr, i) || _unsupportedIterableToArray$e(arr, i) || _nonIterableRest$9();
}
function _nonIterableRest$9() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$e(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$e(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$e(o, minLen);
}
function _arrayLikeToArray$e(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$8(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$9(arr) {
  if (Array.isArray(arr))
    return arr;
}
var combineParameters = function combineParameters2() {
  for (var _len = arguments.length, parameterSets = new Array(_len), _key = 0; _key < _len; _key++) {
    parameterSets[_key] = arguments[_key];
  }
  var mergeKeys = {};
  var combined = parameterSets.filter(Boolean).reduce(function(acc, p2) {
    Object.entries(p2).forEach(function(_ref) {
      var _ref22 = _slicedToArray$8(_ref, 2), key2 = _ref22[0], value2 = _ref22[1];
      var existing = acc[key2];
      if (Array.isArray(value2) || typeof existing === "undefined") {
        acc[key2] = value2;
      } else if (isPlainObject_1(value2) && isPlainObject_1(existing)) {
        mergeKeys[key2] = true;
      } else if (typeof value2 !== "undefined") {
        acc[key2] = value2;
      }
    });
    return acc;
  }, {});
  Object.keys(mergeKeys).forEach(function(key2) {
    var mergeValues = parameterSets.filter(Boolean).map(function(p2) {
      return p2[key2];
    }).filter(function(value2) {
      return typeof value2 !== "undefined";
    });
    if (mergeValues.every(function(value2) {
      return isPlainObject_1(value2);
    })) {
      combined[key2] = combineParameters2.apply(void 0, _toConsumableArray$7(mergeValues));
    } else {
      combined[key2] = mergeValues[mergeValues.length - 1];
    }
  });
  return combined;
};
var events;
(function(events2) {
  events2["CHANNEL_CREATED"] = "channelCreated";
  events2["CONFIG_ERROR"] = "configError";
  events2["STORY_INDEX_INVALIDATED"] = "storyIndexInvalidated";
  events2["STORY_SPECIFIED"] = "storySpecified";
  events2["SET_STORIES"] = "setStories";
  events2["SET_CURRENT_STORY"] = "setCurrentStory";
  events2["CURRENT_STORY_WAS_SET"] = "currentStoryWasSet";
  events2["FORCE_RE_RENDER"] = "forceReRender";
  events2["FORCE_REMOUNT"] = "forceRemount";
  events2["PRELOAD_STORIES"] = "preloadStories";
  events2["STORY_PREPARED"] = "storyPrepared";
  events2["STORY_CHANGED"] = "storyChanged";
  events2["STORY_UNCHANGED"] = "storyUnchanged";
  events2["STORY_RENDERED"] = "storyRendered";
  events2["STORY_MISSING"] = "storyMissing";
  events2["STORY_ERRORED"] = "storyErrored";
  events2["STORY_THREW_EXCEPTION"] = "storyThrewException";
  events2["STORY_RENDER_PHASE_CHANGED"] = "storyRenderPhaseChanged";
  events2["UPDATE_STORY_ARGS"] = "updateStoryArgs";
  events2["STORY_ARGS_UPDATED"] = "storyArgsUpdated";
  events2["RESET_STORY_ARGS"] = "resetStoryArgs";
  events2["SET_GLOBALS"] = "setGlobals";
  events2["UPDATE_GLOBALS"] = "updateGlobals";
  events2["GLOBALS_UPDATED"] = "globalsUpdated";
  events2["REGISTER_SUBSCRIPTION"] = "registerSubscription";
  events2["PREVIEW_KEYDOWN"] = "previewKeydown";
  events2["SELECT_STORY"] = "selectStory";
  events2["STORIES_COLLAPSE_ALL"] = "storiesCollapseAll";
  events2["STORIES_EXPAND_ALL"] = "storiesExpandAll";
  events2["DOCS_RENDERED"] = "docsRendered";
  events2["SHARED_STATE_CHANGED"] = "sharedStateChanged";
  events2["SHARED_STATE_SET"] = "sharedStateSet";
  events2["NAVIGATE_URL"] = "navigateUrl";
  events2["UPDATE_QUERY_PARAMS"] = "updateQueryParams";
})(events || (events = {}));
var Events = events;
var CHANNEL_CREATED = events.CHANNEL_CREATED, CONFIG_ERROR = events.CONFIG_ERROR, STORY_INDEX_INVALIDATED = events.STORY_INDEX_INVALIDATED, STORY_SPECIFIED = events.STORY_SPECIFIED, SET_STORIES = events.SET_STORIES, SET_CURRENT_STORY = events.SET_CURRENT_STORY, CURRENT_STORY_WAS_SET = events.CURRENT_STORY_WAS_SET, FORCE_RE_RENDER = events.FORCE_RE_RENDER, FORCE_REMOUNT = events.FORCE_REMOUNT, STORY_PREPARED = events.STORY_PREPARED, STORY_CHANGED = events.STORY_CHANGED, STORY_UNCHANGED = events.STORY_UNCHANGED, PRELOAD_STORIES = events.PRELOAD_STORIES, STORY_RENDERED = events.STORY_RENDERED, STORY_MISSING = events.STORY_MISSING, STORY_ERRORED = events.STORY_ERRORED, STORY_THREW_EXCEPTION = events.STORY_THREW_EXCEPTION, STORY_RENDER_PHASE_CHANGED = events.STORY_RENDER_PHASE_CHANGED, UPDATE_STORY_ARGS = events.UPDATE_STORY_ARGS, STORY_ARGS_UPDATED = events.STORY_ARGS_UPDATED, RESET_STORY_ARGS = events.RESET_STORY_ARGS, SET_GLOBALS = events.SET_GLOBALS, UPDATE_GLOBALS = events.UPDATE_GLOBALS, GLOBALS_UPDATED = events.GLOBALS_UPDATED, REGISTER_SUBSCRIPTION = events.REGISTER_SUBSCRIPTION, PREVIEW_KEYDOWN = events.PREVIEW_KEYDOWN, SELECT_STORY = events.SELECT_STORY, STORIES_COLLAPSE_ALL = events.STORIES_COLLAPSE_ALL, STORIES_EXPAND_ALL = events.STORIES_EXPAND_ALL, DOCS_RENDERED = events.DOCS_RENDERED, SHARED_STATE_CHANGED = events.SHARED_STATE_CHANGED, SHARED_STATE_SET = events.SHARED_STATE_SET, NAVIGATE_URL = events.NAVIGATE_URL, UPDATE_QUERY_PARAMS = events.UPDATE_QUERY_PARAMS;
var IGNORED_EXCEPTION = new Error("ignoredException");
var EVENTS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Events,
  CHANNEL_CREATED,
  CONFIG_ERROR,
  STORY_INDEX_INVALIDATED,
  STORY_SPECIFIED,
  SET_STORIES,
  SET_CURRENT_STORY,
  CURRENT_STORY_WAS_SET,
  FORCE_RE_RENDER,
  FORCE_REMOUNT,
  STORY_PREPARED,
  STORY_CHANGED,
  STORY_UNCHANGED,
  PRELOAD_STORIES,
  STORY_RENDERED,
  STORY_MISSING,
  STORY_ERRORED,
  STORY_THREW_EXCEPTION,
  STORY_RENDER_PHASE_CHANGED,
  UPDATE_STORY_ARGS,
  STORY_ARGS_UPDATED,
  RESET_STORY_ARGS,
  SET_GLOBALS,
  UPDATE_GLOBALS,
  GLOBALS_UPDATED,
  REGISTER_SUBSCRIPTION,
  PREVIEW_KEYDOWN,
  SELECT_STORY,
  STORIES_COLLAPSE_ALL,
  STORIES_EXPAND_ALL,
  DOCS_RENDERED,
  SHARED_STATE_CHANGED,
  SHARED_STATE_SET,
  NAVIGATE_URL,
  UPDATE_QUERY_PARAMS,
  IGNORED_EXCEPTION
}, Symbol.toStringTag, { value: "Module" }));
var _templateObject$9;
function _taggedTemplateLiteral$9(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _classCallCheck$e(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$e(target2, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target2, descriptor.key, descriptor);
  }
}
function _createClass$e(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$e(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$e(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var generateRandomId = function generateRandomId2() {
  return Math.random().toString(16).slice(2);
};
var Channel = /* @__PURE__ */ function() {
  function Channel2() {
    var _this = this;
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, transport = _ref.transport, _ref$async = _ref.async, async = _ref$async === void 0 ? false : _ref$async;
    _classCallCheck$e(this, Channel2);
    this.isAsync = void 0;
    this.sender = generateRandomId();
    this.events = {};
    this.data = {};
    this.transport = void 0;
    this.addPeerListener = browser(function(eventName, listener) {
      _this.addListener(eventName, listener);
    }, dedent(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteral$9(["\n      channel.addPeerListener is deprecated\n    "]))));
    this.isAsync = async;
    if (transport) {
      this.transport = transport;
      this.transport.setHandler(function(event) {
        return _this.handleEvent(event);
      });
    }
  }
  _createClass$e(Channel2, [{
    key: "hasTransport",
    get: function get2() {
      return !!this.transport;
    }
  }, {
    key: "addListener",
    value: function addListener(eventName, listener) {
      this.events[eventName] = this.events[eventName] || [];
      this.events[eventName].push(listener);
    }
  }, {
    key: "emit",
    value: function emit(eventName) {
      var _this2 = this;
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var event = {
        type: eventName,
        args,
        from: this.sender
      };
      var options2 = {};
      if (args.length >= 1 && args[0] && args[0].options) {
        options2 = args[0].options;
      }
      var handler = function handler2() {
        if (_this2.transport) {
          _this2.transport.send(event, options2);
        }
        _this2.handleEvent(event);
      };
      if (this.isAsync) {
        setImmediate(handler);
      } else {
        handler();
      }
    }
  }, {
    key: "last",
    value: function last(eventName) {
      return this.data[eventName];
    }
  }, {
    key: "eventNames",
    value: function eventNames() {
      return Object.keys(this.events);
    }
  }, {
    key: "listenerCount",
    value: function listenerCount(eventName) {
      var listeners = this.listeners(eventName);
      return listeners ? listeners.length : 0;
    }
  }, {
    key: "listeners",
    value: function listeners(eventName) {
      var listeners2 = this.events[eventName];
      return listeners2 || void 0;
    }
  }, {
    key: "once",
    value: function once3(eventName, listener) {
      var onceListener = this.onceListener(eventName, listener);
      this.addListener(eventName, onceListener);
    }
  }, {
    key: "removeAllListeners",
    value: function removeAllListeners(eventName) {
      if (!eventName) {
        this.events = {};
      } else if (this.events[eventName]) {
        delete this.events[eventName];
      }
    }
  }, {
    key: "removeListener",
    value: function removeListener(eventName, listener) {
      var listeners = this.listeners(eventName);
      if (listeners) {
        this.events[eventName] = listeners.filter(function(l) {
          return l !== listener;
        });
      }
    }
  }, {
    key: "on",
    value: function on(eventName, listener) {
      this.addListener(eventName, listener);
    }
  }, {
    key: "off",
    value: function off(eventName, listener) {
      this.removeListener(eventName, listener);
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      var listeners = this.listeners(event.type);
      if (listeners && listeners.length) {
        listeners.forEach(function(fn) {
          fn.apply(event, event.args);
        });
      }
      this.data[event.type] = event.args;
    }
  }, {
    key: "onceListener",
    value: function onceListener(eventName, listener) {
      var _this3 = this;
      var onceListener2 = function onceListener3() {
        _this3.removeListener(eventName, onceListener3);
        return listener.apply(void 0, arguments);
      };
      return onceListener2;
    }
  }]);
  return Channel2;
}();
var Channel$1 = Channel;
function mockChannel() {
  var transport = {
    setHandler: function setHandler() {
    },
    send: function send() {
    }
  };
  return new Channel$1({
    transport
  });
}
var types;
(function(types2) {
  types2["TAB"] = "tab";
  types2["PANEL"] = "panel";
  types2["TOOL"] = "tool";
  types2["TOOLEXTRA"] = "toolextra";
  types2["PREVIEW"] = "preview";
  types2["NOTES_ELEMENT"] = "notes-element";
})(types || (types = {}));
function _defineProperties$d(target2, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target2, descriptor.key, descriptor);
  }
}
function _createClass$d(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$d(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$d(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _classCallCheck$d(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var AddonStore = /* @__PURE__ */ _createClass$d(function AddonStore2() {
  var _this = this;
  _classCallCheck$d(this, AddonStore2);
  this.loaders = {};
  this.elements = {};
  this.config = {};
  this.channel = void 0;
  this.serverChannel = void 0;
  this.promise = void 0;
  this.resolve = void 0;
  this.getChannel = function() {
    if (!_this.channel) {
      _this.setChannel(mockChannel());
    }
    return _this.channel;
  };
  this.getServerChannel = function() {
    if (!_this.serverChannel) {
      throw new Error("Accessing non-existent serverChannel");
    }
    return _this.serverChannel;
  };
  this.ready = function() {
    return _this.promise;
  };
  this.hasChannel = function() {
    return !!_this.channel;
  };
  this.hasServerChannel = function() {
    return !!_this.serverChannel;
  };
  this.setChannel = function(channel2) {
    _this.channel = channel2;
    _this.resolve();
  };
  this.setServerChannel = function(channel2) {
    _this.serverChannel = channel2;
  };
  this.getElements = function(type) {
    if (!_this.elements[type]) {
      _this.elements[type] = {};
    }
    return _this.elements[type];
  };
  this.addPanel = function(name2, options2) {
    _this.add(name2, Object.assign({
      type: types.PANEL
    }, options2));
  };
  this.add = function(name2, addon) {
    var type = addon.type;
    var collection = _this.getElements(type);
    collection[name2] = Object.assign({
      id: name2
    }, addon);
  };
  this.setConfig = function(value2) {
    Object.assign(_this.config, value2);
  };
  this.getConfig = function() {
    return _this.config;
  };
  this.register = function(name2, registerCallback) {
    if (_this.loaders[name2]) {
      logger.warn("".concat(name2, " was loaded twice, this could have bad side-effects"));
    }
    _this.loaders[name2] = registerCallback;
  };
  this.loadAddons = function(api) {
    Object.values(_this.loaders).forEach(function(value2) {
      return value2(api);
    });
  };
  this.promise = new Promise(function(res) {
    _this.resolve = function() {
      return res(_this.getChannel());
    };
  });
});
var KEY$1 = "__STORYBOOK_ADDONS";
function getAddonsStore() {
  if (!window_1[KEY$1]) {
    window_1[KEY$1] = new AddonStore();
  }
  return window_1[KEY$1];
}
var addons = getAddonsStore();
function _toConsumableArray$6(arr) {
  return _arrayWithoutHoles$6(arr) || _iterableToArray$6(arr) || _unsupportedIterableToArray$d(arr) || _nonIterableSpread$6();
}
function _nonIterableSpread$6() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$d(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$d(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$d(o, minLen);
}
function _iterableToArray$6(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles$6(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$d(arr);
}
function _arrayLikeToArray$d(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _classCallCheck$c(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$c(target2, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target2, descriptor.key, descriptor);
  }
}
function _createClass$c(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$c(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$c(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var globalWindow$2 = window_1.window;
var HooksContext = /* @__PURE__ */ function() {
  function HooksContext2() {
    var _this = this;
    _classCallCheck$c(this, HooksContext2);
    this.hookListsMap = void 0;
    this.mountedDecorators = void 0;
    this.prevMountedDecorators = void 0;
    this.currentHooks = void 0;
    this.nextHookIndex = void 0;
    this.currentPhase = void 0;
    this.currentEffects = void 0;
    this.prevEffects = void 0;
    this.currentDecoratorName = void 0;
    this.hasUpdates = void 0;
    this.currentContext = void 0;
    this.renderListener = function(storyId) {
      if (storyId !== _this.currentContext.id)
        return;
      _this.triggerEffects();
      _this.currentContext = null;
      _this.removeRenderListeners();
    };
    this.init();
  }
  _createClass$c(HooksContext2, [{
    key: "init",
    value: function init() {
      this.hookListsMap = /* @__PURE__ */ new WeakMap();
      this.mountedDecorators = /* @__PURE__ */ new Set();
      this.prevMountedDecorators = this.mountedDecorators;
      this.currentHooks = [];
      this.nextHookIndex = 0;
      this.currentPhase = "NONE";
      this.currentEffects = [];
      this.prevEffects = [];
      this.currentDecoratorName = null;
      this.hasUpdates = false;
      this.currentContext = null;
    }
  }, {
    key: "clean",
    value: function clean() {
      this.prevEffects.forEach(function(effect) {
        if (effect.destroy) {
          effect.destroy();
        }
      });
      this.init();
      this.removeRenderListeners();
    }
  }, {
    key: "getNextHook",
    value: function getNextHook() {
      var hook = this.currentHooks[this.nextHookIndex];
      this.nextHookIndex += 1;
      return hook;
    }
  }, {
    key: "triggerEffects",
    value: function triggerEffects() {
      var _this2 = this;
      this.prevEffects.forEach(function(effect) {
        if (!_this2.currentEffects.includes(effect) && effect.destroy) {
          effect.destroy();
        }
      });
      this.currentEffects.forEach(function(effect) {
        if (!_this2.prevEffects.includes(effect)) {
          effect.destroy = effect.create();
        }
      });
      this.prevEffects = this.currentEffects;
      this.currentEffects = [];
    }
  }, {
    key: "addRenderListeners",
    value: function addRenderListeners() {
      this.removeRenderListeners();
      var channel2 = addons.getChannel();
      channel2.on(STORY_RENDERED, this.renderListener);
    }
  }, {
    key: "removeRenderListeners",
    value: function removeRenderListeners() {
      var channel2 = addons.getChannel();
      channel2.removeListener(STORY_RENDERED, this.renderListener);
    }
  }]);
  return HooksContext2;
}();
function hookify(fn) {
  return function() {
    var _ref = typeof (arguments.length <= 0 ? void 0 : arguments[0]) === "function" ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 0 ? void 0 : arguments[0], hooks = _ref.hooks;
    var prevPhase = hooks.currentPhase;
    var prevHooks = hooks.currentHooks;
    var prevNextHookIndex = hooks.nextHookIndex;
    var prevDecoratorName = hooks.currentDecoratorName;
    hooks.currentDecoratorName = fn.name;
    if (hooks.prevMountedDecorators.has(fn)) {
      hooks.currentPhase = "UPDATE";
      hooks.currentHooks = hooks.hookListsMap.get(fn) || [];
    } else {
      hooks.currentPhase = "MOUNT";
      hooks.currentHooks = [];
      hooks.hookListsMap.set(fn, hooks.currentHooks);
      hooks.prevMountedDecorators.add(fn);
    }
    hooks.nextHookIndex = 0;
    var prevContext = globalWindow$2.STORYBOOK_HOOKS_CONTEXT;
    globalWindow$2.STORYBOOK_HOOKS_CONTEXT = hooks;
    var result2 = fn.apply(void 0, arguments);
    globalWindow$2.STORYBOOK_HOOKS_CONTEXT = prevContext;
    if (hooks.currentPhase === "UPDATE" && hooks.getNextHook() != null) {
      throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
    }
    hooks.currentPhase = prevPhase;
    hooks.currentHooks = prevHooks;
    hooks.nextHookIndex = prevNextHookIndex;
    hooks.currentDecoratorName = prevDecoratorName;
    return result2;
  };
}
var numberOfRenders = 0;
var RENDER_LIMIT = 25;
var applyHooks = function applyHooks2(applyDecorators) {
  return function(storyFn, decorators) {
    var decorated = applyDecorators(hookify(storyFn), decorators.map(function(decorator) {
      return hookify(decorator);
    }));
    return function(context) {
      var _ref22 = context, hooks = _ref22.hooks;
      hooks.prevMountedDecorators = hooks.mountedDecorators;
      hooks.mountedDecorators = new Set([storyFn].concat(_toConsumableArray$6(decorators)));
      hooks.currentContext = context;
      hooks.hasUpdates = false;
      var result2 = decorated(context);
      numberOfRenders = 1;
      while (hooks.hasUpdates) {
        hooks.hasUpdates = false;
        hooks.currentEffects = [];
        result2 = decorated(context);
        numberOfRenders += 1;
        if (numberOfRenders > RENDER_LIMIT) {
          throw new Error("Too many re-renders. Storybook limits the number of renders to prevent an infinite loop.");
        }
      }
      hooks.addRenderListeners();
      return result2;
    };
  };
};
var areDepsEqual = function areDepsEqual2(deps, nextDeps) {
  return deps.length === nextDeps.length && deps.every(function(dep, i) {
    return dep === nextDeps[i];
  });
};
var invalidHooksError = function invalidHooksError2() {
  return new Error("Storybook preview hooks can only be called inside decorators and story functions.");
};
function getHooksContextOrNull() {
  return globalWindow$2.STORYBOOK_HOOKS_CONTEXT || null;
}
function getHooksContextOrThrow() {
  var hooks = getHooksContextOrNull();
  if (hooks == null) {
    throw invalidHooksError();
  }
  return hooks;
}
function useHook(name2, callback, deps) {
  var hooks = getHooksContextOrThrow();
  if (hooks.currentPhase === "MOUNT") {
    if (deps != null && !Array.isArray(deps)) {
      logger.warn("".concat(name2, " received a final argument that is not an array (instead, received ").concat(deps, "). When specified, the final argument must be an array."));
    }
    var _hook = {
      name: name2,
      deps
    };
    hooks.currentHooks.push(_hook);
    callback(_hook);
    return _hook;
  }
  if (hooks.currentPhase === "UPDATE") {
    var _hook2 = hooks.getNextHook();
    if (_hook2 == null) {
      throw new Error("Rendered more hooks than during the previous render.");
    }
    if (_hook2.name !== name2) {
      logger.warn("Storybook has detected a change in the order of Hooks".concat(hooks.currentDecoratorName ? " called by ".concat(hooks.currentDecoratorName) : "", ". This will lead to bugs and errors if not fixed."));
    }
    if (deps != null && _hook2.deps == null) {
      logger.warn("".concat(name2, " received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders."));
    }
    if (deps != null && _hook2.deps != null && deps.length !== _hook2.deps.length) {
      logger.warn("The final argument passed to ".concat(name2, " changed size between renders. The order and size of this array must remain constant.\nPrevious: ").concat(_hook2.deps, "\nIncoming: ").concat(deps));
    }
    if (deps == null || _hook2.deps == null || !areDepsEqual(deps, _hook2.deps)) {
      callback(_hook2);
      _hook2.deps = deps;
    }
    return _hook2;
  }
  throw invalidHooksError();
}
function useMemoLike(name2, nextCreate, deps) {
  var _useHook = useHook(name2, function(hook) {
    hook.memoizedState = nextCreate();
  }, deps), memoizedState = _useHook.memoizedState;
  return memoizedState;
}
function useMemo(nextCreate, deps) {
  return useMemoLike("useMemo", nextCreate, deps);
}
function useEffect(create, deps) {
  var hooks = getHooksContextOrThrow();
  var effect = useMemoLike("useEffect", function() {
    return {
      create
    };
  }, deps);
  if (!hooks.currentEffects.includes(effect)) {
    hooks.currentEffects.push(effect);
  }
}
var _excluded$4 = ["componentId", "title", "kind", "id", "name", "story", "parameters", "initialArgs", "argTypes"];
function _objectWithoutProperties$4(source2, excluded) {
  if (source2 == null)
    return {};
  var target2 = _objectWithoutPropertiesLoose$4(source2, excluded);
  var key2, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source2);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key2 = sourceSymbolKeys[i];
      if (excluded.indexOf(key2) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source2, key2))
        continue;
      target2[key2] = source2[key2];
    }
  }
  return target2;
}
function _objectWithoutPropertiesLoose$4(source2, excluded) {
  if (source2 == null)
    return {};
  var target2 = {};
  var sourceKeys = Object.keys(source2);
  var key2, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key2 = sourceKeys[i];
    if (excluded.indexOf(key2) >= 0)
      continue;
    target2[key2] = source2[key2];
  }
  return target2;
}
function decorateStory(storyFn, decorator, bindWithContext) {
  var boundStoryFunction = bindWithContext(storyFn);
  return function(context) {
    return decorator(boundStoryFunction, context);
  };
}
function sanitizeStoryContextUpdate() {
  var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  _ref.componentId;
  _ref.title;
  _ref.kind;
  _ref.id;
  _ref.name;
  _ref.story;
  _ref.parameters;
  _ref.initialArgs;
  _ref.argTypes;
  var update = _objectWithoutProperties$4(_ref, _excluded$4);
  return update;
}
function defaultDecorateStory(storyFn, decorators) {
  var contextStore = {};
  var bindWithContext = function bindWithContext2(decoratedStoryFn) {
    return function(update) {
      contextStore.value = Object.assign({}, contextStore.value, sanitizeStoryContextUpdate(update));
      return decoratedStoryFn(contextStore.value);
    };
  };
  var decoratedWithContextStore = decorators.reduce(function(story2, decorator) {
    return decorateStory(story2, decorator, bindWithContext);
  }, storyFn);
  return function(context) {
    contextStore.value = context;
    return decoratedWithContextStore(context);
  };
}
var _templateObject$8;
function _slicedToArray$7(arr, i) {
  return _arrayWithHoles$8(arr) || _iterableToArrayLimit$7(arr, i) || _unsupportedIterableToArray$c(arr, i) || _nonIterableRest$8();
}
function _nonIterableRest$8() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit$7(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$8(arr) {
  if (Array.isArray(arr))
    return arr;
}
function asyncGeneratorStep$5(gen, resolve, reject, _next, _throw, key2, arg) {
  try {
    var info2 = gen[key2](arg);
    var value2 = info2.value;
  } catch (error2) {
    reject(error2);
    return;
  }
  if (info2.done) {
    resolve(value2);
  } else {
    Promise.resolve(value2).then(_next, _throw);
  }
}
function _asyncToGenerator$5(fn) {
  return function() {
    var self2 = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self2, args);
      function _next(value2) {
        asyncGeneratorStep$5(gen, resolve, reject, _next, _throw, "next", value2);
      }
      function _throw(err) {
        asyncGeneratorStep$5(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function _toConsumableArray$5(arr) {
  return _arrayWithoutHoles$5(arr) || _iterableToArray$5(arr) || _unsupportedIterableToArray$c(arr) || _nonIterableSpread$5();
}
function _nonIterableSpread$5() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$c(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$c(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$c(o, minLen);
}
function _iterableToArray$5(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles$5(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$c(arr);
}
function _arrayLikeToArray$c(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _taggedTemplateLiteral$8(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var argTypeDefaultValueWarning = browser(function() {
}, dedent(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral$8(["\n  `argType.defaultValue` is deprecated and will be removed in Storybook 7.0.\n\n  https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#no-longer-inferring-default-values-of-args"], ["\n  \\`argType.defaultValue\\` is deprecated and will be removed in Storybook 7.0.\n\n  https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#no-longer-inferring-default-values-of-args"]))));
function prepareStory(storyAnnotations, componentAnnotations, projectAnnotations) {
  var _global$FEATURES;
  var id = storyAnnotations.id, name2 = storyAnnotations.name;
  var title = componentAnnotations.title;
  var parameters = combineParameters(projectAnnotations.parameters, componentAnnotations.parameters, storyAnnotations.parameters);
  var decorators = [].concat(_toConsumableArray$5(storyAnnotations.decorators || []), _toConsumableArray$5(componentAnnotations.decorators || []), _toConsumableArray$5(projectAnnotations.decorators || []));
  var _projectAnnotations$a = projectAnnotations.applyDecorators, applyDecorators = _projectAnnotations$a === void 0 ? defaultDecorateStory : _projectAnnotations$a, _projectAnnotations$a2 = projectAnnotations.argTypesEnhancers, argTypesEnhancers = _projectAnnotations$a2 === void 0 ? [] : _projectAnnotations$a2, _projectAnnotations$a3 = projectAnnotations.argsEnhancers, argsEnhancers = _projectAnnotations$a3 === void 0 ? [] : _projectAnnotations$a3;
  var loaders = [].concat(_toConsumableArray$5(projectAnnotations.loaders || []), _toConsumableArray$5(componentAnnotations.loaders || []), _toConsumableArray$5(storyAnnotations.loaders || []));
  var render = storyAnnotations.userStoryFn || storyAnnotations.render || componentAnnotations.render || projectAnnotations.render;
  var passedArgTypes = combineParameters(projectAnnotations.argTypes, componentAnnotations.argTypes, storyAnnotations.argTypes);
  var _parameters$passArgsF = parameters.passArgsFirst, passArgsFirst = _parameters$passArgsF === void 0 ? true : _parameters$passArgsF;
  parameters.__isArgsStory = passArgsFirst && render.length > 0;
  var passedArgs = Object.assign({}, projectAnnotations.args, componentAnnotations.args, storyAnnotations.args);
  var contextForEnhancers = {
    componentId: componentAnnotations.id,
    title,
    kind: title,
    id,
    name: name2,
    story: name2,
    component: componentAnnotations.component,
    subcomponents: componentAnnotations.subcomponents,
    parameters,
    initialArgs: passedArgs,
    argTypes: passedArgTypes
  };
  contextForEnhancers.argTypes = argTypesEnhancers.reduce(function(accumulatedArgTypes, enhancer) {
    return enhancer(Object.assign({}, contextForEnhancers, {
      argTypes: accumulatedArgTypes
    }));
  }, contextForEnhancers.argTypes);
  var defaultArgs = getValuesFromArgTypes(contextForEnhancers.argTypes);
  if (Object.keys(defaultArgs).length > 0) {
    argTypeDefaultValueWarning();
  }
  var initialArgsBeforeEnhancers = Object.assign({}, defaultArgs, passedArgs);
  contextForEnhancers.initialArgs = argsEnhancers.reduce(function(accumulatedArgs, enhancer) {
    return Object.assign({}, accumulatedArgs, enhancer(Object.assign({}, contextForEnhancers, {
      initialArgs: accumulatedArgs
    })));
  }, initialArgsBeforeEnhancers);
  if (!((_global$FEATURES = window_1.FEATURES) !== null && _global$FEATURES !== void 0 && _global$FEATURES.breakingChangesV7)) {
    contextForEnhancers.parameters = Object.assign({}, contextForEnhancers.parameters, {
      __id: id,
      globals: projectAnnotations.globals,
      globalTypes: projectAnnotations.globalTypes,
      args: contextForEnhancers.initialArgs,
      argTypes: contextForEnhancers.argTypes
    });
  }
  var applyLoaders = /* @__PURE__ */ function() {
    var _ref = _asyncToGenerator$5(/* @__PURE__ */ regeneratorRuntime.mark(function _callee(context) {
      var loadResults, loaded;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.all(loaders.map(function(loader) {
                return loader(context);
              }));
            case 2:
              loadResults = _context.sent;
              loaded = Object.assign.apply(Object, [{}].concat(_toConsumableArray$5(loadResults)));
              return _context.abrupt("return", Object.assign({}, context, {
                loaded
              }));
            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function applyLoaders2(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var undecoratedStoryFn = function undecoratedStoryFn2(context) {
    var mappedArgs = Object.entries(context.args).reduce(function(acc, _ref22) {
      var _context$argTypes$key;
      var _ref32 = _slicedToArray$7(_ref22, 2), key2 = _ref32[0], val = _ref32[1];
      var mapping = (_context$argTypes$key = context.argTypes[key2]) === null || _context$argTypes$key === void 0 ? void 0 : _context$argTypes$key.mapping;
      acc[key2] = mapping && val in mapping ? mapping[val] : val;
      return acc;
    }, {});
    var includedArgs = Object.entries(mappedArgs).reduce(function(acc, _ref42) {
      var _ref52 = _slicedToArray$7(_ref42, 2), key2 = _ref52[0], val = _ref52[1];
      var argType = context.argTypes[key2] || {};
      if (dist.includeConditionalArg(argType, mappedArgs, context.globals))
        acc[key2] = val;
      return acc;
    }, {});
    var includedContext = Object.assign({}, context, {
      args: includedArgs
    });
    var _context$parameters$p = context.parameters.passArgsFirst, renderTimePassArgsFirst = _context$parameters$p === void 0 ? true : _context$parameters$p;
    return renderTimePassArgsFirst ? render(includedContext.args, includedContext) : render(includedContext);
  };
  var decoratedStoryFn = applyHooks(applyDecorators)(undecoratedStoryFn, decorators);
  var unboundStoryFn = function unboundStoryFn2(context) {
    var _global$FEATURES2;
    var finalContext = context;
    if ((_global$FEATURES2 = window_1.FEATURES) !== null && _global$FEATURES2 !== void 0 && _global$FEATURES2.argTypeTargetsV7) {
      var argsByTarget = groupArgsByTarget(Object.assign({
        args: context.args
      }, context));
      finalContext = Object.assign({}, context, {
        allArgs: context.args,
        argsByTarget,
        args: argsByTarget[NO_TARGET_NAME] || {}
      });
    }
    return decoratedStoryFn(finalContext);
  };
  var playFunction = storyAnnotations.play;
  return Object.freeze(Object.assign({}, contextForEnhancers, {
    originalStoryFn: render,
    undecoratedStoryFn,
    unboundStoryFn,
    applyLoaders,
    playFunction
  }));
}
var _templateObject$7;
function _taggedTemplateLiteral$7(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _typeof$3(obj) {
  "@babel/helpers - typeof";
  return _typeof$3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$3(obj);
}
var inferType = function inferType2(value2, name2, visited) {
  var type = _typeof$3(value2);
  switch (type) {
    case "boolean":
    case "string":
    case "number":
    case "function":
    case "symbol":
      return {
        name: type
      };
  }
  if (value2) {
    if (visited.has(value2)) {
      logger.warn(dedent(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral$7(["\n        We've detected a cycle in arg '", "'. Args should be JSON-serializable.\n\n        Consider using the mapping feature or fully custom args:\n        - Mapping: https://storybook.js.org/docs/react/writing-stories/args#mapping-to-complex-arg-values\n        - Custom args: https://storybook.js.org/docs/react/essentials/controls#fully-custom-args\n      "])), name2));
      return {
        name: "other",
        value: "cyclic object"
      };
    }
    visited.add(value2);
    if (Array.isArray(value2)) {
      var childType = value2.length > 0 ? inferType2(value2[0], name2, new Set(visited)) : {
        name: "other",
        value: "unknown"
      };
      return {
        name: "array",
        value: childType
      };
    }
    var fieldTypes = mapValues_1(value2, function(field) {
      return inferType2(field, name2, new Set(visited));
    });
    return {
      name: "object",
      value: fieldTypes
    };
  }
  return {
    name: "object",
    value: {}
  };
};
var inferArgTypes = function inferArgTypes2(context) {
  var id = context.id, _context$argTypes = context.argTypes, userArgTypes = _context$argTypes === void 0 ? {} : _context$argTypes, _context$initialArgs = context.initialArgs, initialArgs = _context$initialArgs === void 0 ? {} : _context$initialArgs;
  var argTypes = mapValues_1(initialArgs, function(arg, key2) {
    return {
      name: key2,
      type: inferType(arg, "".concat(id, ".").concat(key2), /* @__PURE__ */ new Set())
    };
  });
  var userArgTypesNames = mapValues_1(userArgTypes, function(argType, key2) {
    return {
      name: key2
    };
  });
  return combineParameters(argTypes, userArgTypesNames, userArgTypes);
};
inferArgTypes.secondPass = true;
var arrayPush = _arrayPush, getPrototype = _getPrototype, getSymbols = _getSymbols, stubArray = stubArray_1;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn$1 = !nativeGetSymbols ? stubArray : function(object) {
  var result2 = [];
  while (object) {
    arrayPush(result2, getSymbols(object));
    object = getPrototype(object);
  }
  return result2;
};
var _getSymbolsIn = getSymbolsIn$1;
function nativeKeysIn$1(object) {
  var result2 = [];
  if (object != null) {
    for (var key2 in Object(object)) {
      result2.push(key2);
    }
  }
  return result2;
}
var _nativeKeysIn = nativeKeysIn$1;
var isObject$3 = isObject_1, isPrototype = _isPrototype, nativeKeysIn = _nativeKeysIn;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseKeysIn$1(object) {
  if (!isObject$3(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result2 = [];
  for (var key2 in object) {
    if (!(key2 == "constructor" && (isProto || !hasOwnProperty.call(object, key2)))) {
      result2.push(key2);
    }
  }
  return result2;
}
var _baseKeysIn = baseKeysIn$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike = isArrayLike_1;
function keysIn$1(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var keysIn_1 = keysIn$1;
var baseGetAllKeys = _baseGetAllKeys, getSymbolsIn = _getSymbolsIn, keysIn = keysIn_1;
function getAllKeysIn$1(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}
var _getAllKeysIn = getAllKeysIn$1;
var arrayMap = _arrayMap, baseIteratee = _baseIteratee, basePickBy = _basePickBy, getAllKeysIn = _getAllKeysIn;
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn(object), function(prop2) {
    return [prop2];
  });
  predicate = baseIteratee(predicate);
  return basePickBy(object, props, function(value2, path) {
    return predicate(value2, path[0]);
  });
}
var pickBy_1 = pickBy;
var matches = function matches2(name2, descriptor) {
  return Array.isArray(descriptor) ? descriptor.includes(name2) : name2.match(descriptor);
};
var filterArgTypes = function filterArgTypes2(argTypes, include, exclude) {
  if (!include && !exclude) {
    return argTypes;
  }
  return argTypes && pickBy_1(argTypes, function(argType, key2) {
    var name2 = argType.name || key2;
    return (!include || matches(name2, include)) && (!exclude || !matches(name2, exclude));
  });
};
var inferControl = function inferControl2(argType, name2, matchers) {
  var type = argType.type, options2 = argType.options;
  if (!type && !options2) {
    return void 0;
  }
  if (matchers.color && matchers.color.test(name2)) {
    var controlType = argType.type.name;
    if (controlType === "string") {
      return {
        control: {
          type: "color"
        }
      };
    }
    logger.warn('Addon controls: Control of type color only supports string, received "'.concat(controlType, '" instead'));
  }
  if (matchers.date && matchers.date.test(name2)) {
    return {
      control: {
        type: "date"
      }
    };
  }
  switch (type.name) {
    case "array":
      return {
        control: {
          type: "object"
        }
      };
    case "boolean":
      return {
        control: {
          type: "boolean"
        }
      };
    case "string":
      return {
        control: {
          type: "text"
        }
      };
    case "number":
      return {
        control: {
          type: "number"
        }
      };
    case "enum": {
      var _ref = type, value2 = _ref.value;
      return {
        control: {
          type: (value2 === null || value2 === void 0 ? void 0 : value2.length) <= 5 ? "radio" : "select"
        },
        options: value2
      };
    }
    case "function":
    case "symbol":
      return null;
    default:
      return {
        control: {
          type: options2 ? "select" : "object"
        }
      };
  }
};
var inferControls = function inferControls2(context) {
  var argTypes = context.argTypes, _context$parameters = context.parameters, __isArgsStory = _context$parameters.__isArgsStory, _context$parameters$c = _context$parameters.controls;
  _context$parameters$c = _context$parameters$c === void 0 ? {} : _context$parameters$c;
  var _context$parameters$c2 = _context$parameters$c.include, include = _context$parameters$c2 === void 0 ? null : _context$parameters$c2, _context$parameters$c3 = _context$parameters$c.exclude, exclude = _context$parameters$c3 === void 0 ? null : _context$parameters$c3, _context$parameters$c4 = _context$parameters$c.matchers, matchers = _context$parameters$c4 === void 0 ? {} : _context$parameters$c4;
  if (!__isArgsStory)
    return argTypes;
  var filteredArgTypes = filterArgTypes(argTypes, include, exclude);
  var withControls = mapValues_1(filteredArgTypes, function(argType, name2) {
    return (argType === null || argType === void 0 ? void 0 : argType.type) && inferControl(argType, name2, matchers);
  });
  return combineParameters(withControls, filteredArgTypes);
};
inferControls.secondPass = true;
var _excluded$3 = ["argTypes", "globalTypes", "argTypesEnhancers"];
function _toConsumableArray$4(arr) {
  return _arrayWithoutHoles$4(arr) || _iterableToArray$4(arr) || _unsupportedIterableToArray$b(arr) || _nonIterableSpread$4();
}
function _nonIterableSpread$4() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$b(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$b(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$b(o, minLen);
}
function _iterableToArray$4(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles$4(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$b(arr);
}
function _arrayLikeToArray$b(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _objectWithoutProperties$3(source2, excluded) {
  if (source2 == null)
    return {};
  var target2 = _objectWithoutPropertiesLoose$3(source2, excluded);
  var key2, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source2);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key2 = sourceSymbolKeys[i];
      if (excluded.indexOf(key2) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source2, key2))
        continue;
      target2[key2] = source2[key2];
    }
  }
  return target2;
}
function _objectWithoutPropertiesLoose$3(source2, excluded) {
  if (source2 == null)
    return {};
  var target2 = {};
  var sourceKeys = Object.keys(source2);
  var key2, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key2 = sourceKeys[i];
    if (excluded.indexOf(key2) >= 0)
      continue;
    target2[key2] = source2[key2];
  }
  return target2;
}
function normalizeProjectAnnotations(_ref) {
  var argTypes = _ref.argTypes, globalTypes = _ref.globalTypes, argTypesEnhancers = _ref.argTypesEnhancers, annotations = _objectWithoutProperties$3(_ref, _excluded$3);
  return Object.assign({}, argTypes && {
    argTypes: normalizeInputTypes(argTypes)
  }, globalTypes && {
    globalTypes: normalizeInputTypes(globalTypes)
  }, {
    argTypesEnhancers: [].concat(_toConsumableArray$4(argTypesEnhancers || []), [
      inferArgTypes,
      inferControls
    ])
  }, annotations);
}
function _toConsumableArray$3(arr) {
  return _arrayWithoutHoles$3(arr) || _iterableToArray$3(arr) || _unsupportedIterableToArray$a(arr) || _nonIterableSpread$3();
}
function _nonIterableSpread$3() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$a(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$a(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$a(o, minLen);
}
function _iterableToArray$3(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles$3(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$a(arr);
}
function _arrayLikeToArray$a(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function getField(moduleExportList, field) {
  return moduleExportList.map(function(xs) {
    return xs[field];
  }).filter(Boolean);
}
function getArrayField(moduleExportList, field) {
  return getField(moduleExportList, field).reduce(function(a, b) {
    return [].concat(_toConsumableArray$3(a), _toConsumableArray$3(b));
  }, []);
}
function getObjectField(moduleExportList, field) {
  return Object.assign.apply(Object, [{}].concat(_toConsumableArray$3(getField(moduleExportList, field))));
}
function getSingletonField(moduleExportList, field) {
  return getField(moduleExportList, field).pop();
}
function composeConfigs(moduleExportList) {
  var allArgTypeEnhancers = getArrayField(moduleExportList, "argTypesEnhancers");
  return {
    parameters: combineParameters.apply(void 0, _toConsumableArray$3(getField(moduleExportList, "parameters"))),
    decorators: getArrayField(moduleExportList, "decorators"),
    args: getObjectField(moduleExportList, "args"),
    argsEnhancers: getArrayField(moduleExportList, "argsEnhancers"),
    argTypes: getObjectField(moduleExportList, "argTypes"),
    argTypesEnhancers: [].concat(_toConsumableArray$3(allArgTypeEnhancers.filter(function(e) {
      return !e.secondPass;
    })), _toConsumableArray$3(allArgTypeEnhancers.filter(function(e) {
      return e.secondPass;
    }))),
    globals: getObjectField(moduleExportList, "globals"),
    globalTypes: getObjectField(moduleExportList, "globalTypes"),
    loaders: getArrayField(moduleExportList, "loaders"),
    render: getSingletonField(moduleExportList, "render"),
    renderToDOM: getSingletonField(moduleExportList, "renderToDOM"),
    applyDecorators: getSingletonField(moduleExportList, "applyDecorators")
  };
}
function _defineProperty$3(obj, key2, value2) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, { value: value2, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key2] = value2;
  }
  return obj;
}
function _slicedToArray$6(arr, i) {
  return _arrayWithHoles$7(arr) || _iterableToArrayLimit$6(arr, i) || _unsupportedIterableToArray$9(arr, i) || _nonIterableRest$7();
}
function _nonIterableRest$7() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$9(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$9(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$9(o, minLen);
}
function _arrayLikeToArray$9(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$6(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$7(arr) {
  if (Array.isArray(arr))
    return arr;
}
function asyncGeneratorStep$4(gen, resolve, reject, _next, _throw, key2, arg) {
  try {
    var info2 = gen[key2](arg);
    var value2 = info2.value;
  } catch (error2) {
    reject(error2);
    return;
  }
  if (info2.done) {
    resolve(value2);
  } else {
    Promise.resolve(value2).then(_next, _throw);
  }
}
function _asyncToGenerator$4(fn) {
  return function() {
    var self2 = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self2, args);
      function _next(value2) {
        asyncGeneratorStep$4(gen, resolve, reject, _next, _throw, "next", value2);
      }
      function _throw(err) {
        asyncGeneratorStep$4(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function _classCallCheck$b(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$b(target2, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target2, descriptor.key, descriptor);
  }
}
function _createClass$b(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$b(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$b(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var CSF_CACHE_SIZE = 1e3;
var STORY_CACHE_SIZE = 1e4;
var StoryStore = /* @__PURE__ */ function() {
  function StoryStore2() {
    var _this = this;
    _classCallCheck$b(this, StoryStore2);
    this.storyIndex = void 0;
    this.importFn = void 0;
    this.projectAnnotations = void 0;
    this.globals = void 0;
    this.args = void 0;
    this.hooks = void 0;
    this.cachedCSFFiles = void 0;
    this.processCSFFileWithCache = void 0;
    this.prepareStoryWithCache = void 0;
    this.initializationPromise = void 0;
    this.resolveInitializationPromise = void 0;
    this.getStoriesJsonData = function() {
      var value2 = _this.getSetStoriesPayload();
      var allowedParameters = ["fileName", "docsOnly", "framework", "__id", "__isArgsStory"];
      var stories = mapValues_1(value2.stories, function(story2) {
        var _global$FEATURES;
        return Object.assign({}, pick_1(story2, ["id", "name", "title"]), {
          importPath: _this.storyIndex.stories[story2.id].importPath
        }, !((_global$FEATURES = window_1.FEATURES) !== null && _global$FEATURES !== void 0 && _global$FEATURES.breakingChangesV7) && {
          kind: story2.title,
          story: story2.name,
          parameters: Object.assign({}, pick_1(story2.parameters, allowedParameters), {
            fileName: _this.storyIndex.stories[story2.id].importPath
          })
        });
      });
      return {
        v: 3,
        stories
      };
    };
    this.globals = new GlobalsStore();
    this.args = new ArgsStore();
    this.hooks = {};
    this.processCSFFileWithCache = memoize$2(CSF_CACHE_SIZE)(processCSFFile);
    this.prepareStoryWithCache = memoize$2(STORY_CACHE_SIZE)(prepareStory);
    this.initializationPromise = new synchronousPromise.SynchronousPromise(function(resolve) {
      _this.resolveInitializationPromise = resolve;
    });
  }
  _createClass$b(StoryStore2, [{
    key: "setProjectAnnotations",
    value: function setProjectAnnotations(projectAnnotations) {
      this.projectAnnotations = normalizeProjectAnnotations(projectAnnotations);
      var globals = projectAnnotations.globals, globalTypes = projectAnnotations.globalTypes;
      this.globals.set({
        globals,
        globalTypes
      });
    }
  }, {
    key: "initialize",
    value: function initialize(_ref) {
      var storyIndex = _ref.storyIndex, importFn2 = _ref.importFn, _ref$cache = _ref.cache, cache = _ref$cache === void 0 ? false : _ref$cache;
      this.storyIndex = new StoryIndexStore(storyIndex);
      this.importFn = importFn2;
      this.resolveInitializationPromise();
      return cache ? this.cacheAllCSFFiles() : synchronousPromise.SynchronousPromise.resolve();
    }
  }, {
    key: "onStoriesChanged",
    value: function() {
      var _onStoriesChanged = _asyncToGenerator$4(/* @__PURE__ */ regeneratorRuntime.mark(function _callee(_ref22) {
        var importFn2, storyIndex;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                importFn2 = _ref22.importFn, storyIndex = _ref22.storyIndex;
                if (importFn2)
                  this.importFn = importFn2;
                if (storyIndex)
                  this.storyIndex.stories = storyIndex.stories;
                if (!this.cachedCSFFiles) {
                  _context.next = 6;
                  break;
                }
                _context.next = 6;
                return this.cacheAllCSFFiles();
              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function onStoriesChanged(_x) {
        return _onStoriesChanged.apply(this, arguments);
      }
      return onStoriesChanged;
    }()
  }, {
    key: "loadCSFFileByStoryId",
    value: function loadCSFFileByStoryId(storyId) {
      var _this2 = this;
      var _this$storyIndex$stor = this.storyIndex.storyIdToEntry(storyId), importPath = _this$storyIndex$stor.importPath, title = _this$storyIndex$stor.title;
      return this.importFn(importPath).then(function(moduleExports) {
        return _this2.processCSFFileWithCache(moduleExports, importPath, title);
      });
    }
  }, {
    key: "loadAllCSFFiles",
    value: function loadAllCSFFiles() {
      var _this3 = this;
      var importPaths = {};
      Object.entries(this.storyIndex.stories).forEach(function(_ref32) {
        var _ref42 = _slicedToArray$6(_ref32, 2), storyId = _ref42[0], importPath = _ref42[1].importPath;
        importPaths[importPath] = storyId;
      });
      var csfFilePromiseList = Object.entries(importPaths).map(function(_ref52) {
        var _ref6 = _slicedToArray$6(_ref52, 2), importPath = _ref6[0], storyId = _ref6[1];
        return _this3.loadCSFFileByStoryId(storyId).then(function(csfFile) {
          return {
            importPath,
            csfFile
          };
        });
      });
      return synchronousPromise.SynchronousPromise.all(csfFilePromiseList).then(function(list) {
        return list.reduce(function(acc, _ref7) {
          var importPath = _ref7.importPath, csfFile = _ref7.csfFile;
          acc[importPath] = csfFile;
          return acc;
        }, {});
      });
    }
  }, {
    key: "cacheAllCSFFiles",
    value: function cacheAllCSFFiles() {
      var _this4 = this;
      return this.initializationPromise.then(function() {
        return _this4.loadAllCSFFiles().then(function(csfFiles) {
          _this4.cachedCSFFiles = csfFiles;
        });
      });
    }
  }, {
    key: "loadStory",
    value: function() {
      var _loadStory = _asyncToGenerator$4(/* @__PURE__ */ regeneratorRuntime.mark(function _callee2(_ref8) {
        var storyId, csfFile;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                storyId = _ref8.storyId;
                _context2.next = 3;
                return this.initializationPromise;
              case 3:
                _context2.next = 5;
                return this.loadCSFFileByStoryId(storyId);
              case 5:
                csfFile = _context2.sent;
                return _context2.abrupt("return", this.storyFromCSFFile({
                  storyId,
                  csfFile
                }));
              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function loadStory(_x2) {
        return _loadStory.apply(this, arguments);
      }
      return loadStory;
    }()
  }, {
    key: "storyFromCSFFile",
    value: function storyFromCSFFile(_ref9) {
      var storyId = _ref9.storyId, csfFile = _ref9.csfFile;
      var storyAnnotations = csfFile.stories[storyId];
      if (!storyAnnotations) {
        throw new Error("Didn't find '".concat(storyId, "' in CSF file, this is unexpected"));
      }
      var componentAnnotations = csfFile.meta;
      var story2 = this.prepareStoryWithCache(storyAnnotations, componentAnnotations, this.projectAnnotations);
      this.args.setInitial(story2);
      this.hooks[story2.id] = this.hooks[story2.id] || new HooksContext();
      return story2;
    }
  }, {
    key: "componentStoriesFromCSFFile",
    value: function componentStoriesFromCSFFile(_ref10) {
      var _this5 = this;
      var csfFile = _ref10.csfFile;
      return Object.keys(this.storyIndex.stories).filter(function(storyId) {
        return !!csfFile.stories[storyId];
      }).map(function(storyId) {
        return _this5.storyFromCSFFile({
          storyId,
          csfFile
        });
      });
    }
  }, {
    key: "getStoryContext",
    value: function getStoryContext(story2) {
      return Object.assign({}, story2, {
        args: this.args.get(story2.id),
        globals: this.globals.get(),
        hooks: this.hooks[story2.id]
      });
    }
  }, {
    key: "cleanupStory",
    value: function cleanupStory(story2) {
      this.hooks[story2.id].clean();
    }
  }, {
    key: "extract",
    value: function extract() {
      var _this6 = this;
      var options2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        includeDocsOnly: false
      };
      if (!this.cachedCSFFiles) {
        throw new Error("Cannot call extract() unless you call cacheAllCSFFiles() first.");
      }
      return Object.entries(this.storyIndex.stories).reduce(function(acc, _ref11) {
        var _ref12 = _slicedToArray$6(_ref11, 2), storyId = _ref12[0], importPath = _ref12[1].importPath;
        var csfFile = _this6.cachedCSFFiles[importPath];
        var story2 = _this6.storyFromCSFFile({
          storyId,
          csfFile
        });
        if (!options2.includeDocsOnly && story2.parameters.docsOnly) {
          return acc;
        }
        acc[storyId] = Object.entries(story2).reduce(function(storyAcc, _ref13) {
          var _ref14 = _slicedToArray$6(_ref13, 2), key2 = _ref14[0], value2 = _ref14[1];
          if (typeof value2 === "function") {
            return storyAcc;
          }
          if (Array.isArray(value2)) {
            return Object.assign(storyAcc, _defineProperty$3({}, key2, value2.slice().sort()));
          }
          return Object.assign(storyAcc, _defineProperty$3({}, key2, value2));
        }, {
          args: story2.initialArgs
        });
        return acc;
      }, {});
    }
  }, {
    key: "getSetStoriesPayload",
    value: function getSetStoriesPayload() {
      var stories = this.extract({
        includeDocsOnly: true
      });
      var kindParameters = Object.values(stories).reduce(function(acc, _ref15) {
        var title = _ref15.title;
        acc[title] = {};
        return acc;
      }, {});
      return {
        v: 2,
        globals: this.globals.get(),
        globalParameters: {},
        kindParameters,
        stories
      };
    }
  }, {
    key: "raw",
    value: function raw() {
      var _this7 = this;
      return Object.values(this.extract()).map(function(_ref16) {
        var id = _ref16.id;
        return _this7.fromId(id);
      });
    }
  }, {
    key: "fromId",
    value: function fromId(storyId) {
      var _this8 = this;
      if (!this.cachedCSFFiles) {
        throw new Error("Cannot call fromId/raw() unless you call cacheAllCSFFiles() first.");
      }
      var importPath;
      try {
        var _this$storyIndex$stor2 = this.storyIndex.storyIdToEntry(storyId);
        importPath = _this$storyIndex$stor2.importPath;
      } catch (err) {
        return null;
      }
      var csfFile = this.cachedCSFFiles[importPath];
      var story2 = this.storyFromCSFFile({
        storyId,
        csfFile
      });
      return Object.assign({}, story2, {
        storyFn: function storyFn(update) {
          var context = Object.assign({}, _this8.getStoryContext(story2), {
            viewMode: "story"
          });
          return story2.unboundStoryFn(Object.assign({}, context, update));
        }
      });
    }
  }]);
  return StoryStore2;
}();
var slash = (path) => {
  const isExtendedLengthPath = /^\\\\\?\\/.test(path);
  const hasNonAscii = /[^\u0000-\u0080]+/.test(path);
  if (isExtendedLengthPath || hasNonAscii) {
    return path;
  }
  return path.replace(/\\/g, "/");
};
var _templateObject$6;
function _taggedTemplateLiteral$6(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _toArray$1(arr) {
  return _arrayWithHoles$6(arr) || _iterableToArray$2(arr) || _unsupportedIterableToArray$8(arr) || _nonIterableRest$6();
}
function _nonIterableRest$6() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _arrayWithHoles$6(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _toConsumableArray$2(arr) {
  return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) || _unsupportedIterableToArray$8(arr) || _nonIterableSpread$2();
}
function _nonIterableSpread$2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$8(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$8(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$8(o, minLen);
}
function _iterableToArray$2(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles$2(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$8(arr);
}
function _arrayLikeToArray$8(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var stripExtension = function stripExtension2(path) {
  var parts = _toConsumableArray$2(path);
  var last = parts[parts.length - 1];
  var dotIndex = last.indexOf(".");
  var stripped = dotIndex > 0 ? last.substr(0, dotIndex) : last;
  parts[parts.length - 1] = stripped;
  var _parts = parts, _parts2 = _toArray$1(_parts), first = _parts2[0], rest = _parts2.slice(1);
  if (first === "") {
    parts = rest;
  }
  return parts;
};
var indexRe = /^index$/i;
var removeRedundantFilename = function removeRedundantFilename2(paths) {
  var prevVal;
  return paths.filter(function(val, index) {
    if (index === paths.length - 1 && (val === prevVal || indexRe.test(val))) {
      return false;
    }
    prevVal = val;
    return true;
  });
};
function pathJoin(paths) {
  var slashes = new RegExp("/{1,}", "g");
  return paths.join("/").replace(slashes, "/");
}
var userOrAutoTitleFromSpecifier = function userOrAutoTitleFromSpecifier2(fileName, entry, userTitle) {
  var _ref = entry || {}, directory = _ref.directory, importPathMatcher = _ref.importPathMatcher, _ref$titlePrefix = _ref.titlePrefix, titlePrefix = _ref$titlePrefix === void 0 ? "" : _ref$titlePrefix;
  if (typeof fileName === "number") {
    once.warn(dedent(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral$6(['\n      CSF Auto-title received a numeric fileName. This typically happens when\n      webpack is mis-configured in production mode. To force webpack to produce\n      filenames, set optimization.moduleIds = "named" in your webpack config.\n    ']))));
  }
  var normalizedFileName = slash(String(fileName));
  if (importPathMatcher.exec(normalizedFileName)) {
    if (!userTitle) {
      var suffix = normalizedFileName.replace(directory, "");
      var titleAndSuffix = slash(pathJoin([titlePrefix, suffix]));
      var path = titleAndSuffix.split("/");
      path = stripExtension(path);
      path = removeRedundantFilename(path);
      return path.join("/");
    }
    if (!titlePrefix) {
      return userTitle;
    }
    return slash(pathJoin([titlePrefix, userTitle]));
  }
  return void 0;
};
var userOrAutoTitle = function userOrAutoTitle2(fileName, storiesEntries, userTitle) {
  for (var i = 0; i < storiesEntries.length; i += 1) {
    var title = userOrAutoTitleFromSpecifier(fileName, storiesEntries[i], userTitle);
    if (title)
      return title;
  }
  return userTitle || void 0;
};
var stable$1 = { exports: {} };
(function(module, exports) {
  //! stable.js 0.1.8, https://github.com/Two-Screen/stable
  //! © 2018 Angry Bytes and contributors. MIT licensed.
  (function(global2, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    var stable2 = function(arr, comp2) {
      return exec(arr.slice(), comp2);
    };
    stable2.inplace = function(arr, comp2) {
      var result2 = exec(arr, comp2);
      if (result2 !== arr) {
        pass(result2, null, arr.length, arr);
      }
      return arr;
    };
    function exec(arr, comp2) {
      if (typeof comp2 !== "function") {
        comp2 = function(a, b) {
          return String(a).localeCompare(b);
        };
      }
      var len = arr.length;
      if (len <= 1) {
        return arr;
      }
      var buffer = new Array(len);
      for (var chk = 1; chk < len; chk *= 2) {
        pass(arr, comp2, chk, buffer);
        var tmp = arr;
        arr = buffer;
        buffer = tmp;
      }
      return arr;
    }
    var pass = function(arr, comp2, chk, result2) {
      var len = arr.length;
      var i = 0;
      var dbl = chk * 2;
      var l, r, e;
      var li, ri;
      for (l = 0; l < len; l += dbl) {
        r = l + chk;
        e = r + chk;
        if (r > len)
          r = len;
        if (e > len)
          e = len;
        li = l;
        ri = r;
        while (true) {
          if (li < r && ri < e) {
            if (comp2(arr[li], arr[ri]) <= 0) {
              result2[i++] = arr[li++];
            } else {
              result2[i++] = arr[ri++];
            }
          } else if (li < r) {
            result2[i++] = arr[li++];
          } else if (ri < e) {
            result2[i++] = arr[ri++];
          } else {
            break;
          }
        }
      }
    };
    return stable2;
  });
})(stable$1);
var stable = stable$1.exports;
var STORY_KIND_PATH_SEPARATOR = /\s*\/\s*/;
var storySort = function storySort2() {
  var options2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return function(a, b) {
    if (a.title === b.title && !options2.includeNames) {
      return 0;
    }
    var method = options2.method || "configure";
    var order2 = options2.order || [];
    var storyTitleA = a.title.trim().split(STORY_KIND_PATH_SEPARATOR);
    var storyTitleB = b.title.trim().split(STORY_KIND_PATH_SEPARATOR);
    if (options2.includeNames) {
      storyTitleA.push(a.name);
      storyTitleB.push(b.name);
    }
    var depth = 0;
    while (storyTitleA[depth] || storyTitleB[depth]) {
      if (!storyTitleA[depth]) {
        return -1;
      }
      if (!storyTitleB[depth]) {
        return 1;
      }
      var nameA = storyTitleA[depth];
      var nameB = storyTitleB[depth];
      if (nameA !== nameB) {
        var indexA = order2.indexOf(nameA);
        var indexB = order2.indexOf(nameB);
        var indexWildcard = order2.indexOf("*");
        if (indexA !== -1 || indexB !== -1) {
          if (indexA === -1) {
            if (indexWildcard !== -1) {
              indexA = indexWildcard;
            } else {
              indexA = order2.length;
            }
          }
          if (indexB === -1) {
            if (indexWildcard !== -1) {
              indexB = indexWildcard;
            } else {
              indexB = order2.length;
            }
          }
          return indexA - indexB;
        }
        if (method === "configure") {
          return 0;
        }
        return nameA.localeCompare(nameB, options2.locales ? options2.locales : void 0, {
          numeric: true,
          sensitivity: "accent"
        });
      }
      var index = order2.indexOf(nameA);
      order2 = index !== -1 && Array.isArray(order2[index + 1]) ? order2[index + 1] : [];
      depth += 1;
    }
    return 0;
  };
};
var sortStoriesCommon = function sortStoriesCommon2(stories, storySortParameter, fileNameOrder) {
  if (storySortParameter) {
    var sortFn;
    if (typeof storySortParameter === "function") {
      sortFn = storySortParameter;
    } else {
      sortFn = storySort(storySortParameter);
    }
    stable.inplace(stories, sortFn);
  } else {
    stable.inplace(stories, function(s1, s2) {
      return fileNameOrder.indexOf(s1.importPath) - fileNameOrder.indexOf(s2.importPath);
    });
  }
  return stories;
};
var toIndexEntry = function toIndexEntry2(story2) {
  var id = story2.id, title = story2.title, name2 = story2.name, parameters = story2.parameters;
  return {
    id,
    title,
    name: name2,
    importPath: parameters.fileName
  };
};
var sortStoriesV6 = function sortStoriesV62(stories, storySortParameter, fileNameOrder) {
  if (storySortParameter && typeof storySortParameter === "function") {
    stable.inplace(stories, storySortParameter);
    return stories.map(function(s) {
      return toIndexEntry(s[1]);
    });
  }
  var storiesV7 = stories.map(function(s) {
    return toIndexEntry(s[1]);
  });
  return sortStoriesCommon(storiesV7, storySortParameter, fileNameOrder);
};
function asyncGeneratorStep$3(gen, resolve, reject, _next, _throw, key2, arg) {
  try {
    var info2 = gen[key2](arg);
    var value2 = info2.value;
  } catch (error2) {
    reject(error2);
    return;
  }
  if (info2.done) {
    resolve(value2);
  } else {
    Promise.resolve(value2).then(_next, _throw);
  }
}
function _asyncToGenerator$3(fn) {
  return function() {
    var self2 = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self2, args);
      function _next(value2) {
        asyncGeneratorStep$3(gen, resolve, reject, _next, _throw, "next", value2);
      }
      function _throw(err) {
        asyncGeneratorStep$3(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function _classCallCheck$a(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$a(target2, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target2, descriptor.key, descriptor);
  }
}
function _createClass$a(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$a(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$a(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var AbortController = window_1.AbortController;
function createController() {
  if (AbortController)
    return new AbortController();
  return {
    signal: {
      aborted: false
    },
    abort: function abort() {
      this.signal.aborted = true;
    }
  };
}
var PREPARE_ABORTED = new Error("prepareAborted");
var StoryRender = /* @__PURE__ */ function() {
  function StoryRender2(channel2, store, renderToScreen, callbacks, id, viewMode, story2) {
    _classCallCheck$a(this, StoryRender2);
    this.channel = channel2;
    this.store = store;
    this.renderToScreen = renderToScreen;
    this.callbacks = callbacks;
    this.id = id;
    this.viewMode = viewMode;
    this.story = void 0;
    this.phase = void 0;
    this.abortController = void 0;
    this.canvasElement = void 0;
    this.notYetRendered = true;
    this.disableKeyListeners = false;
    this.abortController = createController();
    if (story2) {
      this.story = story2;
      this.phase = "preparing";
    }
  }
  _createClass$a(StoryRender2, [{
    key: "runPhase",
    value: function() {
      var _runPhase = _asyncToGenerator$3(/* @__PURE__ */ regeneratorRuntime.mark(function _callee(signal, phase, phaseFn) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.phase = phase;
                this.channel.emit(STORY_RENDER_PHASE_CHANGED, {
                  newPhase: this.phase,
                  storyId: this.id
                });
                if (!phaseFn) {
                  _context.next = 5;
                  break;
                }
                _context.next = 5;
                return phaseFn();
              case 5:
                if (signal.aborted) {
                  this.phase = "aborted";
                  this.channel.emit(STORY_RENDER_PHASE_CHANGED, {
                    newPhase: this.phase,
                    storyId: this.id
                  });
                }
              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function runPhase(_x, _x2, _x3) {
        return _runPhase.apply(this, arguments);
      }
      return runPhase;
    }()
  }, {
    key: "prepare",
    value: function() {
      var _prepare = _asyncToGenerator$3(/* @__PURE__ */ regeneratorRuntime.mark(function _callee3() {
        var _this = this;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.runPhase(this.abortController.signal, "preparing", /* @__PURE__ */ _asyncToGenerator$3(/* @__PURE__ */ regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return _this.store.loadStory({
                            storyId: _this.id
                          });
                        case 2:
                          _this.story = _context2.sent;
                        case 3:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                })));
              case 2:
                if (!this.abortController.signal.aborted) {
                  _context3.next = 5;
                  break;
                }
                this.store.cleanupStory(this.story);
                throw PREPARE_ABORTED;
              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function prepare() {
        return _prepare.apply(this, arguments);
      }
      return prepare;
    }()
  }, {
    key: "isEqual",
    value: function isEqual2(other) {
      return other && this.id === other.id && this.story && this.story === other.story;
    }
  }, {
    key: "isPreparing",
    value: function isPreparing() {
      return ["preparing"].includes(this.phase);
    }
  }, {
    key: "isPending",
    value: function isPending() {
      return ["rendering", "playing"].includes(this.phase);
    }
  }, {
    key: "context",
    value: function context() {
      return this.store.getStoryContext(this.story);
    }
  }, {
    key: "renderToElement",
    value: function() {
      var _renderToElement = _asyncToGenerator$3(/* @__PURE__ */ regeneratorRuntime.mark(function _callee4(canvasElement) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.canvasElement = canvasElement;
                return _context4.abrupt("return", this.render({
                  initial: true,
                  forceRemount: true
                }));
              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function renderToElement(_x4) {
        return _renderToElement.apply(this, arguments);
      }
      return renderToElement;
    }()
  }, {
    key: "render",
    value: function() {
      var _render = _asyncToGenerator$3(/* @__PURE__ */ regeneratorRuntime.mark(function _callee9() {
        var _this2 = this;
        var _ref22, _ref2$initial, initial, _ref2$forceRemount, forceRemount, _this$story, id, componentId, title, name2, applyLoaders, unboundStoryFn, playFunction, abortSignal, loadedContext, renderStoryContext, _renderContext, _args9 = arguments;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _ref22 = _args9.length > 0 && _args9[0] !== void 0 ? _args9[0] : {}, _ref2$initial = _ref22.initial, initial = _ref2$initial === void 0 ? false : _ref2$initial, _ref2$forceRemount = _ref22.forceRemount, forceRemount = _ref2$forceRemount === void 0 ? false : _ref2$forceRemount;
                if (this.story) {
                  _context9.next = 3;
                  break;
                }
                throw new Error("cannot render when not prepared");
              case 3:
                _this$story = this.story, id = _this$story.id, componentId = _this$story.componentId, title = _this$story.title, name2 = _this$story.name, applyLoaders = _this$story.applyLoaders, unboundStoryFn = _this$story.unboundStoryFn, playFunction = _this$story.playFunction;
                if (forceRemount && !initial) {
                  this.cancelRender();
                  this.abortController = createController();
                }
                abortSignal = this.abortController.signal;
                _context9.prev = 6;
                _context9.next = 9;
                return this.runPhase(abortSignal, "loading", /* @__PURE__ */ _asyncToGenerator$3(/* @__PURE__ */ regeneratorRuntime.mark(function _callee5() {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return applyLoaders(Object.assign({}, _this2.context(), {
                            viewMode: _this2.viewMode
                          }));
                        case 2:
                          loadedContext = _context5.sent;
                        case 3:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                })));
              case 9:
                if (!abortSignal.aborted) {
                  _context9.next = 11;
                  break;
                }
                return _context9.abrupt("return");
              case 11:
                renderStoryContext = Object.assign({}, loadedContext, this.context(), {
                  abortSignal,
                  canvasElement: this.canvasElement
                });
                _renderContext = Object.assign({
                  componentId,
                  title,
                  kind: title,
                  id,
                  name: name2,
                  story: name2
                }, this.callbacks, {
                  forceRemount: forceRemount || this.notYetRendered,
                  storyContext: renderStoryContext,
                  storyFn: function storyFn() {
                    return unboundStoryFn(renderStoryContext);
                  },
                  unboundStoryFn
                });
                _context9.next = 15;
                return this.runPhase(abortSignal, "rendering", /* @__PURE__ */ _asyncToGenerator$3(/* @__PURE__ */ regeneratorRuntime.mark(function _callee6() {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          return _context6.abrupt("return", _this2.renderToScreen(_renderContext, _this2.canvasElement));
                        case 1:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                })));
              case 15:
                this.notYetRendered = false;
                if (!abortSignal.aborted) {
                  _context9.next = 18;
                  break;
                }
                return _context9.abrupt("return");
              case 18:
                if (!(forceRemount && playFunction)) {
                  _context9.next = 27;
                  break;
                }
                this.disableKeyListeners = true;
                _context9.next = 22;
                return this.runPhase(abortSignal, "playing", /* @__PURE__ */ _asyncToGenerator$3(/* @__PURE__ */ regeneratorRuntime.mark(function _callee7() {
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          return _context7.abrupt("return", playFunction(_renderContext.storyContext));
                        case 1:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                })));
              case 22:
                _context9.next = 24;
                return this.runPhase(abortSignal, "played");
              case 24:
                this.disableKeyListeners = false;
                if (!abortSignal.aborted) {
                  _context9.next = 27;
                  break;
                }
                return _context9.abrupt("return");
              case 27:
                _context9.next = 29;
                return this.runPhase(abortSignal, "completed", /* @__PURE__ */ _asyncToGenerator$3(/* @__PURE__ */ regeneratorRuntime.mark(function _callee8() {
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          return _context8.abrupt("return", _this2.channel.emit(STORY_RENDERED, id));
                        case 1:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee8);
                })));
              case 29:
                _context9.next = 34;
                break;
              case 31:
                _context9.prev = 31;
                _context9.t0 = _context9["catch"](6);
                this.callbacks.showException(_context9.t0);
              case 34:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[6, 31]]);
      }));
      function render() {
        return _render.apply(this, arguments);
      }
      return render;
    }()
  }, {
    key: "rerender",
    value: function() {
      var _rerender = _asyncToGenerator$3(/* @__PURE__ */ regeneratorRuntime.mark(function _callee10() {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", this.render());
              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
      function rerender() {
        return _rerender.apply(this, arguments);
      }
      return rerender;
    }()
  }, {
    key: "remount",
    value: function() {
      var _remount = _asyncToGenerator$3(/* @__PURE__ */ regeneratorRuntime.mark(function _callee11() {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                return _context11.abrupt("return", this.render({
                  forceRemount: true
                }));
              case 1:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));
      function remount() {
        return _remount.apply(this, arguments);
      }
      return remount;
    }()
  }, {
    key: "cancelRender",
    value: function cancelRender() {
      this.abortController.abort();
    }
  }, {
    key: "teardown",
    value: function() {
      var _teardown = _asyncToGenerator$3(/* @__PURE__ */ regeneratorRuntime.mark(function _callee12() {
        var i;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this.cancelRender();
                if (this.story)
                  this.store.cleanupStory(this.story);
                i = 0;
              case 4:
                if (!(i < 3)) {
                  _context12.next = 12;
                  break;
                }
                if (this.isPending()) {
                  _context12.next = 7;
                  break;
                }
                return _context12.abrupt("return");
              case 7:
                _context12.next = 9;
                return new Promise(function(resolve) {
                  return setTimeout(resolve, 0);
                });
              case 9:
                i += 1;
                _context12.next = 4;
                break;
              case 12:
                window_1.window.location.reload();
                _context12.next = 15;
                return new Promise(function() {
                });
              case 15:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));
      function teardown() {
        return _teardown.apply(this, arguments);
      }
      return teardown;
    }()
  }]);
  return StoryRender2;
}();
StoryRender.displayName = "StoryRender";
var _templateObject$5, _templateObject2$1;
function _toConsumableArray$1(arr) {
  return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$7(arr) || _nonIterableSpread$1();
}
function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$7(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$7(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$7(o, minLen);
}
function _iterableToArray$1(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$7(arr);
}
function _arrayLikeToArray$7(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function asyncGeneratorStep$2(gen, resolve, reject, _next, _throw, key2, arg) {
  try {
    var info2 = gen[key2](arg);
    var value2 = info2.value;
  } catch (error2) {
    reject(error2);
    return;
  }
  if (info2.done) {
    resolve(value2);
  } else {
    Promise.resolve(value2).then(_next, _throw);
  }
}
function _asyncToGenerator$2(fn) {
  return function() {
    var self2 = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self2, args);
      function _next(value2) {
        asyncGeneratorStep$2(gen, resolve, reject, _next, _throw, "next", value2);
      }
      function _throw(err) {
        asyncGeneratorStep$2(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function _taggedTemplateLiteral$5(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _classCallCheck$9(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$9(target2, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target2, descriptor.key, descriptor);
  }
}
function _createClass$9(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$9(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$9(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var fetch$1 = window_1.fetch;
var STORY_INDEX_PATH = "./stories.json";
var Preview = /* @__PURE__ */ function() {
  function Preview2() {
    var _global$FEATURES;
    _classCallCheck$9(this, Preview2);
    this.channel = void 0;
    this.serverChannel = void 0;
    this.storyStore = void 0;
    this.getStoryIndex = void 0;
    this.importFn = void 0;
    this.renderToDOM = void 0;
    this.storyRenders = [];
    this.previewEntryError = void 0;
    this.channel = addons.getChannel();
    if ((_global$FEATURES = window_1.FEATURES) !== null && _global$FEATURES !== void 0 && _global$FEATURES.storyStoreV7 && addons.hasServerChannel()) {
      this.serverChannel = addons.getServerChannel();
    }
    this.storyStore = new StoryStore();
  }
  _createClass$9(Preview2, [{
    key: "initialize",
    value: function initialize(_ref) {
      var _this = this;
      var getStoryIndex = _ref.getStoryIndex, importFn2 = _ref.importFn, getProjectAnnotations2 = _ref.getProjectAnnotations;
      this.getStoryIndex = getStoryIndex;
      this.importFn = importFn2;
      this.setupListeners();
      return this.getProjectAnnotationsOrRenderError(getProjectAnnotations2).then(function(projectAnnotations) {
        return _this.initializeWithProjectAnnotations(projectAnnotations);
      });
    }
  }, {
    key: "setupListeners",
    value: function setupListeners() {
      var _this$serverChannel;
      (_this$serverChannel = this.serverChannel) === null || _this$serverChannel === void 0 ? void 0 : _this$serverChannel.on(STORY_INDEX_INVALIDATED, this.onStoryIndexChanged.bind(this));
      this.channel.on(UPDATE_GLOBALS, this.onUpdateGlobals.bind(this));
      this.channel.on(UPDATE_STORY_ARGS, this.onUpdateArgs.bind(this));
      this.channel.on(RESET_STORY_ARGS, this.onResetArgs.bind(this));
      this.channel.on(FORCE_RE_RENDER, this.onForceReRender.bind(this));
      this.channel.on(FORCE_REMOUNT, this.onForceRemount.bind(this));
    }
  }, {
    key: "getProjectAnnotationsOrRenderError",
    value: function getProjectAnnotationsOrRenderError(getProjectAnnotations2) {
      var _this2 = this;
      return synchronousPromise.SynchronousPromise.resolve().then(getProjectAnnotations2).then(function(projectAnnotations) {
        _this2.renderToDOM = projectAnnotations.renderToDOM;
        if (!_this2.renderToDOM) {
          throw new Error(dedent(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral$5(["\n            Expected your framework's preset to export a `renderToDOM` field.\n\n            Perhaps it needs to be upgraded for Storybook 6.4?\n\n            More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#mainjs-framework-field          \n          "], ["\n            Expected your framework's preset to export a \\`renderToDOM\\` field.\n\n            Perhaps it needs to be upgraded for Storybook 6.4?\n\n            More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#mainjs-framework-field          \n          "]))));
        }
        return projectAnnotations;
      }).catch(function(err) {
        _this2.renderPreviewEntryError("Error reading preview.js:", err);
        throw err;
      });
    }
  }, {
    key: "initializeWithProjectAnnotations",
    value: function initializeWithProjectAnnotations(projectAnnotations) {
      var _global$FEATURES2, _this3 = this;
      this.storyStore.setProjectAnnotations(projectAnnotations);
      this.setInitialGlobals();
      var storyIndexPromise;
      if ((_global$FEATURES2 = window_1.FEATURES) !== null && _global$FEATURES2 !== void 0 && _global$FEATURES2.storyStoreV7) {
        storyIndexPromise = this.getStoryIndexFromServer();
      } else {
        if (!this.getStoryIndex) {
          throw new Error("No `getStoryIndex` passed defined in v6 mode");
        }
        storyIndexPromise = synchronousPromise.SynchronousPromise.resolve().then(this.getStoryIndex);
      }
      return storyIndexPromise.then(function(storyIndex) {
        return _this3.initializeWithStoryIndex(storyIndex);
      }).catch(function(err) {
        _this3.renderPreviewEntryError("Error loading story index:", err);
        throw err;
      });
    }
  }, {
    key: "setInitialGlobals",
    value: function() {
      var _setInitialGlobals = _asyncToGenerator$2(/* @__PURE__ */ regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.emitGlobals();
              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function setInitialGlobals() {
        return _setInitialGlobals.apply(this, arguments);
      }
      return setInitialGlobals;
    }()
  }, {
    key: "emitGlobals",
    value: function emitGlobals() {
      this.channel.emit(SET_GLOBALS, {
        globals: this.storyStore.globals.get() || {},
        globalTypes: this.storyStore.projectAnnotations.globalTypes || {}
      });
    }
  }, {
    key: "getStoryIndexFromServer",
    value: function() {
      var _getStoryIndexFromServer = _asyncToGenerator$2(/* @__PURE__ */ regeneratorRuntime.mark(function _callee2() {
        var result2;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch$1(STORY_INDEX_PATH);
              case 2:
                result2 = _context2.sent;
                if (!(result2.status === 200)) {
                  _context2.next = 5;
                  break;
                }
                return _context2.abrupt("return", result2.json());
              case 5:
                _context2.t0 = Error;
                _context2.next = 8;
                return result2.text();
              case 8:
                _context2.t1 = _context2.sent;
                throw new _context2.t0(_context2.t1);
              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      function getStoryIndexFromServer() {
        return _getStoryIndexFromServer.apply(this, arguments);
      }
      return getStoryIndexFromServer;
    }()
  }, {
    key: "initializeWithStoryIndex",
    value: function initializeWithStoryIndex(storyIndex) {
      var _global$FEATURES3;
      return this.storyStore.initialize({
        storyIndex,
        importFn: this.importFn,
        cache: !((_global$FEATURES3 = window_1.FEATURES) !== null && _global$FEATURES3 !== void 0 && _global$FEATURES3.storyStoreV7)
      });
    }
  }, {
    key: "onGetProjectAnnotationsChanged",
    value: function() {
      var _onGetProjectAnnotationsChanged = _asyncToGenerator$2(/* @__PURE__ */ regeneratorRuntime.mark(function _callee3(_ref22) {
        var getProjectAnnotations2, projectAnnotations;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                getProjectAnnotations2 = _ref22.getProjectAnnotations;
                delete this.previewEntryError;
                _context3.next = 4;
                return this.getProjectAnnotationsOrRenderError(getProjectAnnotations2);
              case 4:
                projectAnnotations = _context3.sent;
                if (this.storyStore.projectAnnotations) {
                  _context3.next = 9;
                  break;
                }
                _context3.next = 8;
                return this.initializeWithProjectAnnotations(projectAnnotations);
              case 8:
                return _context3.abrupt("return");
              case 9:
                _context3.next = 11;
                return this.storyStore.setProjectAnnotations(projectAnnotations);
              case 11:
                this.emitGlobals();
              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function onGetProjectAnnotationsChanged(_x) {
        return _onGetProjectAnnotationsChanged.apply(this, arguments);
      }
      return onGetProjectAnnotationsChanged;
    }()
  }, {
    key: "onStoryIndexChanged",
    value: function() {
      var _onStoryIndexChanged = _asyncToGenerator$2(/* @__PURE__ */ regeneratorRuntime.mark(function _callee4() {
        var storyIndex;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                delete this.previewEntryError;
                if (this.storyStore.projectAnnotations) {
                  _context4.next = 3;
                  break;
                }
                return _context4.abrupt("return");
              case 3:
                _context4.prev = 3;
                _context4.next = 6;
                return this.getStoryIndexFromServer();
              case 6:
                storyIndex = _context4.sent;
                if (this.storyStore.storyIndex) {
                  _context4.next = 10;
                  break;
                }
                _context4.next = 10;
                return this.initializeWithStoryIndex(storyIndex);
              case 10:
                _context4.next = 12;
                return this.onStoriesChanged({
                  storyIndex
                });
              case 12:
                _context4.next = 18;
                break;
              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4["catch"](3);
                this.renderPreviewEntryError("Error loading story index:", _context4.t0);
                throw _context4.t0;
              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[3, 14]]);
      }));
      function onStoryIndexChanged() {
        return _onStoryIndexChanged.apply(this, arguments);
      }
      return onStoryIndexChanged;
    }()
  }, {
    key: "onStoriesChanged",
    value: function() {
      var _onStoriesChanged = _asyncToGenerator$2(/* @__PURE__ */ regeneratorRuntime.mark(function _callee5(_ref32) {
        var importFn2, storyIndex;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                importFn2 = _ref32.importFn, storyIndex = _ref32.storyIndex;
                _context5.next = 3;
                return this.storyStore.onStoriesChanged({
                  importFn: importFn2,
                  storyIndex
                });
              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function onStoriesChanged(_x2) {
        return _onStoriesChanged.apply(this, arguments);
      }
      return onStoriesChanged;
    }()
  }, {
    key: "onUpdateGlobals",
    value: function() {
      var _onUpdateGlobals = _asyncToGenerator$2(/* @__PURE__ */ regeneratorRuntime.mark(function _callee6(_ref42) {
        var globals;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                globals = _ref42.globals;
                this.storyStore.globals.update(globals);
                _context6.next = 4;
                return Promise.all(this.storyRenders.map(function(r) {
                  return r.rerender();
                }));
              case 4:
                this.channel.emit(GLOBALS_UPDATED, {
                  globals: this.storyStore.globals.get(),
                  initialGlobals: this.storyStore.globals.initialGlobals
                });
              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
      function onUpdateGlobals(_x3) {
        return _onUpdateGlobals.apply(this, arguments);
      }
      return onUpdateGlobals;
    }()
  }, {
    key: "onUpdateArgs",
    value: function() {
      var _onUpdateArgs = _asyncToGenerator$2(/* @__PURE__ */ regeneratorRuntime.mark(function _callee7(_ref52) {
        var storyId, updatedArgs;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                storyId = _ref52.storyId, updatedArgs = _ref52.updatedArgs;
                this.storyStore.args.update(storyId, updatedArgs);
                _context7.next = 4;
                return Promise.all(this.storyRenders.filter(function(r) {
                  return r.id === storyId;
                }).map(function(r) {
                  return r.rerender();
                }));
              case 4:
                this.channel.emit(STORY_ARGS_UPDATED, {
                  storyId,
                  args: this.storyStore.args.get(storyId)
                });
              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
      function onUpdateArgs(_x4) {
        return _onUpdateArgs.apply(this, arguments);
      }
      return onUpdateArgs;
    }()
  }, {
    key: "onResetArgs",
    value: function() {
      var _onResetArgs = _asyncToGenerator$2(/* @__PURE__ */ regeneratorRuntime.mark(function _callee8(_ref6) {
        var storyId, argNames, render, story2, argNamesToReset, updatedArgs;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                storyId = _ref6.storyId, argNames = _ref6.argNames;
                render = this.storyRenders.find(function(r) {
                  return r.id === storyId;
                });
                _context8.t0 = render === null || render === void 0 ? void 0 : render.story;
                if (_context8.t0) {
                  _context8.next = 7;
                  break;
                }
                _context8.next = 6;
                return this.storyStore.loadStory({
                  storyId
                });
              case 6:
                _context8.t0 = _context8.sent;
              case 7:
                story2 = _context8.t0;
                argNamesToReset = argNames || _toConsumableArray$1(new Set([].concat(_toConsumableArray$1(Object.keys(story2.initialArgs)), _toConsumableArray$1(Object.keys(this.storyStore.args.get(storyId))))));
                updatedArgs = argNamesToReset.reduce(function(acc, argName) {
                  acc[argName] = story2.initialArgs[argName];
                  return acc;
                }, {});
                _context8.next = 12;
                return this.onUpdateArgs({
                  storyId,
                  updatedArgs
                });
              case 12:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
      function onResetArgs(_x5) {
        return _onResetArgs.apply(this, arguments);
      }
      return onResetArgs;
    }()
  }, {
    key: "onForceReRender",
    value: function() {
      var _onForceReRender = _asyncToGenerator$2(/* @__PURE__ */ regeneratorRuntime.mark(function _callee9() {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return Promise.all(this.storyRenders.map(function(r) {
                  return r.rerender();
                }));
              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
      function onForceReRender() {
        return _onForceReRender.apply(this, arguments);
      }
      return onForceReRender;
    }()
  }, {
    key: "onForceRemount",
    value: function() {
      var _onForceRemount = _asyncToGenerator$2(/* @__PURE__ */ regeneratorRuntime.mark(function _callee10(_ref7) {
        var storyId;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                storyId = _ref7.storyId;
                _context10.next = 3;
                return Promise.all(this.storyRenders.filter(function(r) {
                  return r.id === storyId;
                }).map(function(r) {
                  return r.remount();
                }));
              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
      function onForceRemount(_x6) {
        return _onForceRemount.apply(this, arguments);
      }
      return onForceRemount;
    }()
  }, {
    key: "renderStoryToElement",
    value: function renderStoryToElement(story2, element) {
      var _this4 = this;
      var render = new StoryRender(this.channel, this.storyStore, this.renderToDOM, this.inlineStoryCallbacks(story2.id), story2.id, "docs", story2);
      render.renderToElement(element);
      this.storyRenders.push(render);
      return /* @__PURE__ */ _asyncToGenerator$2(/* @__PURE__ */ regeneratorRuntime.mark(function _callee11() {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return _this4.teardownRender(render);
              case 2:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));
    }
  }, {
    key: "teardownRender",
    value: function() {
      var _teardownRender = _asyncToGenerator$2(/* @__PURE__ */ regeneratorRuntime.mark(function _callee12(render) {
        var _ref9, viewModeChanged, _args12 = arguments;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _ref9 = _args12.length > 1 && _args12[1] !== void 0 ? _args12[1] : {}, viewModeChanged = _ref9.viewModeChanged;
                this.storyRenders = this.storyRenders.filter(function(r) {
                  return r !== render;
                });
                _context12.next = 4;
                return render === null || render === void 0 ? void 0 : render.teardown({
                  viewModeChanged
                });
              case 4:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));
      function teardownRender(_x7) {
        return _teardownRender.apply(this, arguments);
      }
      return teardownRender;
    }()
  }, {
    key: "extract",
    value: function() {
      var _extract = _asyncToGenerator$2(/* @__PURE__ */ regeneratorRuntime.mark(function _callee13(options2) {
        var _global$FEATURES4;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                if (!this.previewEntryError) {
                  _context13.next = 2;
                  break;
                }
                throw this.previewEntryError;
              case 2:
                if (this.storyStore.projectAnnotations) {
                  _context13.next = 4;
                  break;
                }
                throw new Error(dedent(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral$5(["Failed to initialize Storybook.\n      \n      Do you have an error in your `preview.js`? Check your Storybook's browser console for errors."], ["Failed to initialize Storybook.\n      \n      Do you have an error in your \\`preview.js\\`? Check your Storybook's browser console for errors."]))));
              case 4:
                if (!((_global$FEATURES4 = window_1.FEATURES) !== null && _global$FEATURES4 !== void 0 && _global$FEATURES4.storyStoreV7)) {
                  _context13.next = 7;
                  break;
                }
                _context13.next = 7;
                return this.storyStore.cacheAllCSFFiles();
              case 7:
                return _context13.abrupt("return", this.storyStore.extract(options2));
              case 8:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));
      function extract(_x8) {
        return _extract.apply(this, arguments);
      }
      return extract;
    }()
  }, {
    key: "inlineStoryCallbacks",
    value: function inlineStoryCallbacks(storyId) {
      return {
        showMain: function showMain() {
        },
        showError: function showError(err) {
          return logger.error("Error rendering docs story (".concat(storyId, ")"), err);
        },
        showException: function showException(err) {
          return logger.error("Error rendering docs story (".concat(storyId, ")"), err);
        }
      };
    }
  }, {
    key: "renderPreviewEntryError",
    value: function renderPreviewEntryError(reason, err) {
      this.previewEntryError = err;
      logger.error(reason);
      logger.error(err);
      this.channel.emit(CONFIG_ERROR, err);
    }
  }]);
  return Preview2;
}();
var shams$1 = function hasSymbols2() {
  if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
    return false;
  }
  if (typeof Symbol.iterator === "symbol") {
    return true;
  }
  var obj = {};
  var sym = Symbol("test");
  var symObj = Object(sym);
  if (typeof sym === "string") {
    return false;
  }
  if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
    return false;
  }
  if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
    return false;
  }
  var symVal = 42;
  obj[sym] = symVal;
  for (sym in obj) {
    return false;
  }
  if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
    return false;
  }
  if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
    return false;
  }
  var syms = Object.getOwnPropertySymbols(obj);
  if (syms.length !== 1 || syms[0] !== sym) {
    return false;
  }
  if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
    return false;
  }
  if (typeof Object.getOwnPropertyDescriptor === "function") {
    var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
    if (descriptor.value !== symVal || descriptor.enumerable !== true) {
      return false;
    }
  }
  return true;
};
var origSymbol = typeof Symbol !== "undefined" && Symbol;
var hasSymbolSham = shams$1;
var hasSymbols$3 = function hasNativeSymbols() {
  if (typeof origSymbol !== "function") {
    return false;
  }
  if (typeof Symbol !== "function") {
    return false;
  }
  if (typeof origSymbol("foo") !== "symbol") {
    return false;
  }
  if (typeof Symbol("bar") !== "symbol") {
    return false;
  }
  return hasSymbolSham();
};
var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
var slice = Array.prototype.slice;
var toStr$2 = Object.prototype.toString;
var funcType = "[object Function]";
var implementation$1 = function bind2(that) {
  var target2 = this;
  if (typeof target2 !== "function" || toStr$2.call(target2) !== funcType) {
    throw new TypeError(ERROR_MESSAGE + target2);
  }
  var args = slice.call(arguments, 1);
  var bound;
  var binder = function() {
    if (this instanceof bound) {
      var result2 = target2.apply(this, args.concat(slice.call(arguments)));
      if (Object(result2) === result2) {
        return result2;
      }
      return this;
    } else {
      return target2.apply(that, args.concat(slice.call(arguments)));
    }
  };
  var boundLength = Math.max(0, target2.length - args.length);
  var boundArgs = [];
  for (var i = 0; i < boundLength; i++) {
    boundArgs.push("$" + i);
  }
  bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
  if (target2.prototype) {
    var Empty = function Empty2() {
    };
    Empty.prototype = target2.prototype;
    bound.prototype = new Empty();
    Empty.prototype = null;
  }
  return bound;
};
var implementation = implementation$1;
var functionBind = Function.prototype.bind || implementation;
var bind$1 = functionBind;
var src = bind$1.call(Function.call, Object.prototype.hasOwnProperty);
var undefined$1;
var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError$1 = TypeError;
var getEvalledConstructor = function(expressionSyntax) {
  try {
    return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
  } catch (e) {
  }
};
var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
  try {
    $gOPD({}, "");
  } catch (e) {
    $gOPD = null;
  }
}
var throwTypeError = function() {
  throw new $TypeError$1();
};
var ThrowTypeError = $gOPD ? function() {
  try {
    arguments.callee;
    return throwTypeError;
  } catch (calleeThrows) {
    try {
      return $gOPD(arguments, "callee").get;
    } catch (gOPDthrows) {
      return throwTypeError;
    }
  }
}() : throwTypeError;
var hasSymbols$2 = hasSymbols$3();
var getProto = Object.getPrototypeOf || function(x) {
  return x.__proto__;
};
var needsEval = {};
var TypedArray = typeof Uint8Array === "undefined" ? undefined$1 : getProto(Uint8Array);
var INTRINSICS = {
  "%AggregateError%": typeof AggregateError === "undefined" ? undefined$1 : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined$1 : ArrayBuffer,
  "%ArrayIteratorPrototype%": hasSymbols$2 ? getProto([][Symbol.iterator]()) : undefined$1,
  "%AsyncFromSyncIteratorPrototype%": undefined$1,
  "%AsyncFunction%": needsEval,
  "%AsyncGenerator%": needsEval,
  "%AsyncGeneratorFunction%": needsEval,
  "%AsyncIteratorPrototype%": needsEval,
  "%Atomics%": typeof Atomics === "undefined" ? undefined$1 : Atomics,
  "%BigInt%": typeof BigInt === "undefined" ? undefined$1 : BigInt,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView === "undefined" ? undefined$1 : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array === "undefined" ? undefined$1 : Float32Array,
  "%Float64Array%": typeof Float64Array === "undefined" ? undefined$1 : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined$1 : FinalizationRegistry,
  "%Function%": $Function,
  "%GeneratorFunction%": needsEval,
  "%Int8Array%": typeof Int8Array === "undefined" ? undefined$1 : Int8Array,
  "%Int16Array%": typeof Int16Array === "undefined" ? undefined$1 : Int16Array,
  "%Int32Array%": typeof Int32Array === "undefined" ? undefined$1 : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": hasSymbols$2 ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
  "%JSON%": typeof JSON === "object" ? JSON : undefined$1,
  "%Map%": typeof Map === "undefined" ? undefined$1 : Map,
  "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols$2 ? undefined$1 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise === "undefined" ? undefined$1 : Promise,
  "%Proxy%": typeof Proxy === "undefined" ? undefined$1 : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect === "undefined" ? undefined$1 : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set === "undefined" ? undefined$1 : Set,
  "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols$2 ? undefined$1 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined$1 : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": hasSymbols$2 ? getProto(""[Symbol.iterator]()) : undefined$1,
  "%Symbol%": hasSymbols$2 ? Symbol : undefined$1,
  "%SyntaxError%": $SyntaxError,
  "%ThrowTypeError%": ThrowTypeError,
  "%TypedArray%": TypedArray,
  "%TypeError%": $TypeError$1,
  "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined$1 : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined$1 : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined$1 : Uint16Array,
  "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined$1 : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap === "undefined" ? undefined$1 : WeakMap,
  "%WeakRef%": typeof WeakRef === "undefined" ? undefined$1 : WeakRef,
  "%WeakSet%": typeof WeakSet === "undefined" ? undefined$1 : WeakSet
};
var doEval = function doEval2(name2) {
  var value2;
  if (name2 === "%AsyncFunction%") {
    value2 = getEvalledConstructor("async function () {}");
  } else if (name2 === "%GeneratorFunction%") {
    value2 = getEvalledConstructor("function* () {}");
  } else if (name2 === "%AsyncGeneratorFunction%") {
    value2 = getEvalledConstructor("async function* () {}");
  } else if (name2 === "%AsyncGenerator%") {
    var fn = doEval2("%AsyncGeneratorFunction%");
    if (fn) {
      value2 = fn.prototype;
    }
  } else if (name2 === "%AsyncIteratorPrototype%") {
    var gen = doEval2("%AsyncGenerator%");
    if (gen) {
      value2 = getProto(gen.prototype);
    }
  }
  INTRINSICS[name2] = value2;
  return value2;
};
var LEGACY_ALIASES = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
};
var bind = functionBind;
var hasOwn$1 = src;
var $concat$1 = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace$1 = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
var $exec$1 = bind.call(Function.call, RegExp.prototype.exec);
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = function stringToPath2(string) {
  var first = $strSlice(string, 0, 1);
  var last = $strSlice(string, -1);
  if (first === "%" && last !== "%") {
    throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
  } else if (last === "%" && first !== "%") {
    throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
  }
  var result2 = [];
  $replace$1(string, rePropName, function(match, number, quote2, subString) {
    result2[result2.length] = quote2 ? $replace$1(subString, reEscapeChar, "$1") : number || match;
  });
  return result2;
};
var getBaseIntrinsic = function getBaseIntrinsic2(name2, allowMissing) {
  var intrinsicName = name2;
  var alias;
  if (hasOwn$1(LEGACY_ALIASES, intrinsicName)) {
    alias = LEGACY_ALIASES[intrinsicName];
    intrinsicName = "%" + alias[0] + "%";
  }
  if (hasOwn$1(INTRINSICS, intrinsicName)) {
    var value2 = INTRINSICS[intrinsicName];
    if (value2 === needsEval) {
      value2 = doEval(intrinsicName);
    }
    if (typeof value2 === "undefined" && !allowMissing) {
      throw new $TypeError$1("intrinsic " + name2 + " exists, but is not available. Please file an issue!");
    }
    return {
      alias,
      name: intrinsicName,
      value: value2
    };
  }
  throw new $SyntaxError("intrinsic " + name2 + " does not exist!");
};
var getIntrinsic = function GetIntrinsic2(name2, allowMissing) {
  if (typeof name2 !== "string" || name2.length === 0) {
    throw new $TypeError$1("intrinsic name must be a non-empty string");
  }
  if (arguments.length > 1 && typeof allowMissing !== "boolean") {
    throw new $TypeError$1('"allowMissing" argument must be a boolean');
  }
  if ($exec$1(/^%?[^%]*%?$/g, name2) === null) {
    throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  }
  var parts = stringToPath(name2);
  var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
  var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
  var intrinsicRealName = intrinsic.name;
  var value2 = intrinsic.value;
  var skipFurtherCaching = false;
  var alias = intrinsic.alias;
  if (alias) {
    intrinsicBaseName = alias[0];
    $spliceApply(parts, $concat$1([0, 1], alias));
  }
  for (var i = 1, isOwn = true; i < parts.length; i += 1) {
    var part2 = parts[i];
    var first = $strSlice(part2, 0, 1);
    var last = $strSlice(part2, -1);
    if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
      throw new $SyntaxError("property names with quotes must have matching quotes");
    }
    if (part2 === "constructor" || !isOwn) {
      skipFurtherCaching = true;
    }
    intrinsicBaseName += "." + part2;
    intrinsicRealName = "%" + intrinsicBaseName + "%";
    if (hasOwn$1(INTRINSICS, intrinsicRealName)) {
      value2 = INTRINSICS[intrinsicRealName];
    } else if (value2 != null) {
      if (!(part2 in value2)) {
        if (!allowMissing) {
          throw new $TypeError$1("base intrinsic for " + name2 + " exists, but the property is not available.");
        }
        return void 0;
      }
      if ($gOPD && i + 1 >= parts.length) {
        var desc = $gOPD(value2, part2);
        isOwn = !!desc;
        if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
          value2 = desc.get;
        } else {
          value2 = value2[part2];
        }
      } else {
        isOwn = hasOwn$1(value2, part2);
        value2 = value2[part2];
      }
      if (isOwn && !skipFurtherCaching) {
        INTRINSICS[intrinsicRealName] = value2;
      }
    }
  }
  return value2;
};
var callBind$1 = { exports: {} };
(function(module) {
  var bind3 = functionBind;
  var GetIntrinsic3 = getIntrinsic;
  var $apply = GetIntrinsic3("%Function.prototype.apply%");
  var $call = GetIntrinsic3("%Function.prototype.call%");
  var $reflectApply = GetIntrinsic3("%Reflect.apply%", true) || bind3.call($call, $apply);
  var $gOPD2 = GetIntrinsic3("%Object.getOwnPropertyDescriptor%", true);
  var $defineProperty = GetIntrinsic3("%Object.defineProperty%", true);
  var $max = GetIntrinsic3("%Math.max%");
  if ($defineProperty) {
    try {
      $defineProperty({}, "a", { value: 1 });
    } catch (e) {
      $defineProperty = null;
    }
  }
  module.exports = function callBind2(originalFunction) {
    var func = $reflectApply(bind3, $call, arguments);
    if ($gOPD2 && $defineProperty) {
      var desc = $gOPD2(func, "length");
      if (desc.configurable) {
        $defineProperty(func, "length", { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) });
      }
    }
    return func;
  };
  var applyBind = function applyBind2() {
    return $reflectApply(bind3, $apply, arguments);
  };
  if ($defineProperty) {
    $defineProperty(module.exports, "apply", { value: applyBind });
  } else {
    module.exports.apply = applyBind;
  }
})(callBind$1);
var GetIntrinsic$1 = getIntrinsic;
var callBind = callBind$1.exports;
var $indexOf = callBind(GetIntrinsic$1("String.prototype.indexOf"));
var callBound$2 = function callBoundIntrinsic(name2, allowMissing) {
  var intrinsic = GetIntrinsic$1(name2, !!allowMissing);
  if (typeof intrinsic === "function" && $indexOf(name2, ".prototype.") > -1) {
    return callBind(intrinsic);
  }
  return intrinsic;
};
var __viteBrowserExternal = {};
var __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
var require$$0$2 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var hasMap = typeof Map === "function" && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === "function" && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;
var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
  return O.__proto__;
} : null);
function addNumericSeparator(num2, str) {
  if (num2 === Infinity || num2 === -Infinity || num2 !== num2 || num2 && num2 > -1e3 && num2 < 1e3 || $test.call(/e/, str)) {
    return str;
  }
  var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof num2 === "number") {
    var int2 = num2 < 0 ? -$floor(-num2) : $floor(num2);
    if (int2 !== num2) {
      var intStr = String(int2);
      var dec = $slice.call(str, intStr.length + 1);
      return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return $replace.call(str, sepRegex, "$&_");
}
var utilInspect = require$$0$2;
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol$2(inspectCustom) ? inspectCustom : null;
var objectInspect = function inspect_(obj, options2, depth, seen) {
  var opts = options2 || {};
  if (has$4(opts, "quoteStyle") && (opts.quoteStyle !== "single" && opts.quoteStyle !== "double")) {
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  }
  if (has$4(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  }
  var customInspect = has$4(opts, "customInspect") ? opts.customInspect : true;
  if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  }
  if (has$4(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  }
  if (has$4(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  }
  var numericSeparator = opts.numericSeparator;
  if (typeof obj === "undefined") {
    return "undefined";
  }
  if (obj === null) {
    return "null";
  }
  if (typeof obj === "boolean") {
    return obj ? "true" : "false";
  }
  if (typeof obj === "string") {
    return inspectString(obj, opts);
  }
  if (typeof obj === "number") {
    if (obj === 0) {
      return Infinity / obj > 0 ? "0" : "-0";
    }
    var str = String(obj);
    return numericSeparator ? addNumericSeparator(obj, str) : str;
  }
  if (typeof obj === "bigint") {
    var bigIntStr = String(obj) + "n";
    return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
  }
  var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
  if (typeof depth === "undefined") {
    depth = 0;
  }
  if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
    return isArray$3(obj) ? "[Array]" : "[Object]";
  }
  var indent = getIndent(opts, depth);
  if (typeof seen === "undefined") {
    seen = [];
  } else if (indexOf(seen, obj) >= 0) {
    return "[Circular]";
  }
  function inspect2(value2, from, noIndent) {
    if (from) {
      seen = $arrSlice.call(seen);
      seen.push(from);
    }
    if (noIndent) {
      var newOpts = {
        depth: opts.depth
      };
      if (has$4(opts, "quoteStyle")) {
        newOpts.quoteStyle = opts.quoteStyle;
      }
      return inspect_(value2, newOpts, depth + 1, seen);
    }
    return inspect_(value2, opts, depth + 1, seen);
  }
  if (typeof obj === "function" && !isRegExp$1(obj)) {
    var name2 = nameOf(obj);
    var keys2 = arrObjKeys(obj, inspect2);
    return "[Function" + (name2 ? ": " + name2 : " (anonymous)") + "]" + (keys2.length > 0 ? " { " + $join.call(keys2, ", ") + " }" : "");
  }
  if (isSymbol$2(obj)) {
    var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
    return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
  }
  if (isElement(obj)) {
    var s = "<" + $toLowerCase.call(String(obj.nodeName));
    var attrs = obj.attributes || [];
    for (var i = 0; i < attrs.length; i++) {
      s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
    }
    s += ">";
    if (obj.childNodes && obj.childNodes.length) {
      s += "...";
    }
    s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
    return s;
  }
  if (isArray$3(obj)) {
    if (obj.length === 0) {
      return "[]";
    }
    var xs = arrObjKeys(obj, inspect2);
    if (indent && !singleLineValues(xs)) {
      return "[" + indentedJoin(xs, indent) + "]";
    }
    return "[ " + $join.call(xs, ", ") + " ]";
  }
  if (isError(obj)) {
    var parts = arrObjKeys(obj, inspect2);
    if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
      return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect2(obj.cause), parts), ", ") + " }";
    }
    if (parts.length === 0) {
      return "[" + String(obj) + "]";
    }
    return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
  }
  if (typeof obj === "object" && customInspect) {
    if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
      return utilInspect(obj, { depth: maxDepth - depth });
    } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
      return obj.inspect();
    }
  }
  if (isMap(obj)) {
    var mapParts = [];
    mapForEach.call(obj, function(value2, key2) {
      mapParts.push(inspect2(key2, obj, true) + " => " + inspect2(value2, obj));
    });
    return collectionOf("Map", mapSize.call(obj), mapParts, indent);
  }
  if (isSet(obj)) {
    var setParts = [];
    setForEach.call(obj, function(value2) {
      setParts.push(inspect2(value2, obj));
    });
    return collectionOf("Set", setSize.call(obj), setParts, indent);
  }
  if (isWeakMap(obj)) {
    return weakCollectionOf("WeakMap");
  }
  if (isWeakSet(obj)) {
    return weakCollectionOf("WeakSet");
  }
  if (isWeakRef(obj)) {
    return weakCollectionOf("WeakRef");
  }
  if (isNumber(obj)) {
    return markBoxed(inspect2(Number(obj)));
  }
  if (isBigInt(obj)) {
    return markBoxed(inspect2(bigIntValueOf.call(obj)));
  }
  if (isBoolean(obj)) {
    return markBoxed(booleanValueOf.call(obj));
  }
  if (isString(obj)) {
    return markBoxed(inspect2(String(obj)));
  }
  if (!isDate(obj) && !isRegExp$1(obj)) {
    var ys = arrObjKeys(obj, inspect2);
    var isPlainObject2 = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
    var protoTag = obj instanceof Object ? "" : "null prototype";
    var stringTag2 = !isPlainObject2 && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr$1(obj), 8, -1) : protoTag ? "Object" : "";
    var constructorTag = isPlainObject2 || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
    var tag = constructorTag + (stringTag2 || protoTag ? "[" + $join.call($concat.call([], stringTag2 || [], protoTag || []), ": ") + "] " : "");
    if (ys.length === 0) {
      return tag + "{}";
    }
    if (indent) {
      return tag + "{" + indentedJoin(ys, indent) + "}";
    }
    return tag + "{ " + $join.call(ys, ", ") + " }";
  }
  return String(obj);
};
function wrapQuotes(s, defaultStyle, opts) {
  var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
  return quoteChar + s + quoteChar;
}
function quote(s) {
  return $replace.call(String(s), /"/g, "&quot;");
}
function isArray$3(obj) {
  return toStr$1(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isDate(obj) {
  return toStr$1(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isRegExp$1(obj) {
  return toStr$1(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isError(obj) {
  return toStr$1(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isString(obj) {
  return toStr$1(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isNumber(obj) {
  return toStr$1(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isBoolean(obj) {
  return toStr$1(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isSymbol$2(obj) {
  if (hasShammedSymbols) {
    return obj && typeof obj === "object" && obj instanceof Symbol;
  }
  if (typeof obj === "symbol") {
    return true;
  }
  if (!obj || typeof obj !== "object" || !symToString) {
    return false;
  }
  try {
    symToString.call(obj);
    return true;
  } catch (e) {
  }
  return false;
}
function isBigInt(obj) {
  if (!obj || typeof obj !== "object" || !bigIntValueOf) {
    return false;
  }
  try {
    bigIntValueOf.call(obj);
    return true;
  } catch (e) {
  }
  return false;
}
var hasOwn = Object.prototype.hasOwnProperty || function(key2) {
  return key2 in this;
};
function has$4(obj, key2) {
  return hasOwn.call(obj, key2);
}
function toStr$1(obj) {
  return objectToString.call(obj);
}
function nameOf(f2) {
  if (f2.name) {
    return f2.name;
  }
  var m = $match.call(functionToString.call(f2), /^function\s*([\w$]+)/);
  if (m) {
    return m[1];
  }
  return null;
}
function indexOf(xs, x) {
  if (xs.indexOf) {
    return xs.indexOf(x);
  }
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) {
      return i;
    }
  }
  return -1;
}
function isMap(x) {
  if (!mapSize || !x || typeof x !== "object") {
    return false;
  }
  try {
    mapSize.call(x);
    try {
      setSize.call(x);
    } catch (s) {
      return true;
    }
    return x instanceof Map;
  } catch (e) {
  }
  return false;
}
function isWeakMap(x) {
  if (!weakMapHas || !x || typeof x !== "object") {
    return false;
  }
  try {
    weakMapHas.call(x, weakMapHas);
    try {
      weakSetHas.call(x, weakSetHas);
    } catch (s) {
      return true;
    }
    return x instanceof WeakMap;
  } catch (e) {
  }
  return false;
}
function isWeakRef(x) {
  if (!weakRefDeref || !x || typeof x !== "object") {
    return false;
  }
  try {
    weakRefDeref.call(x);
    return true;
  } catch (e) {
  }
  return false;
}
function isSet(x) {
  if (!setSize || !x || typeof x !== "object") {
    return false;
  }
  try {
    setSize.call(x);
    try {
      mapSize.call(x);
    } catch (m) {
      return true;
    }
    return x instanceof Set;
  } catch (e) {
  }
  return false;
}
function isWeakSet(x) {
  if (!weakSetHas || !x || typeof x !== "object") {
    return false;
  }
  try {
    weakSetHas.call(x, weakSetHas);
    try {
      weakMapHas.call(x, weakMapHas);
    } catch (s) {
      return true;
    }
    return x instanceof WeakSet;
  } catch (e) {
  }
  return false;
}
function isElement(x) {
  if (!x || typeof x !== "object") {
    return false;
  }
  if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
    return true;
  }
  return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
}
function inspectString(str, opts) {
  if (str.length > opts.maxStringLength) {
    var remaining = str.length - opts.maxStringLength;
    var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
    return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
  }
  var s = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
  return wrapQuotes(s, "single", opts);
}
function lowbyte(c) {
  var n = c.charCodeAt(0);
  var x = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[n];
  if (x) {
    return "\\" + x;
  }
  return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
}
function markBoxed(str) {
  return "Object(" + str + ")";
}
function weakCollectionOf(type) {
  return type + " { ? }";
}
function collectionOf(type, size, entries, indent) {
  var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
  return type + " (" + size + ") {" + joinedEntries + "}";
}
function singleLineValues(xs) {
  for (var i = 0; i < xs.length; i++) {
    if (indexOf(xs[i], "\n") >= 0) {
      return false;
    }
  }
  return true;
}
function getIndent(opts, depth) {
  var baseIndent;
  if (opts.indent === "	") {
    baseIndent = "	";
  } else if (typeof opts.indent === "number" && opts.indent > 0) {
    baseIndent = $join.call(Array(opts.indent + 1), " ");
  } else {
    return null;
  }
  return {
    base: baseIndent,
    prev: $join.call(Array(depth + 1), baseIndent)
  };
}
function indentedJoin(xs, indent) {
  if (xs.length === 0) {
    return "";
  }
  var lineJoiner = "\n" + indent.prev + indent.base;
  return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
}
function arrObjKeys(obj, inspect2) {
  var isArr = isArray$3(obj);
  var xs = [];
  if (isArr) {
    xs.length = obj.length;
    for (var i = 0; i < obj.length; i++) {
      xs[i] = has$4(obj, i) ? inspect2(obj[i], obj) : "";
    }
  }
  var syms = typeof gOPS === "function" ? gOPS(obj) : [];
  var symMap;
  if (hasShammedSymbols) {
    symMap = {};
    for (var k = 0; k < syms.length; k++) {
      symMap["$" + syms[k]] = syms[k];
    }
  }
  for (var key2 in obj) {
    if (!has$4(obj, key2)) {
      continue;
    }
    if (isArr && String(Number(key2)) === key2 && key2 < obj.length) {
      continue;
    }
    if (hasShammedSymbols && symMap["$" + key2] instanceof Symbol) {
      continue;
    } else if ($test.call(/[^\w$]/, key2)) {
      xs.push(inspect2(key2, obj) + ": " + inspect2(obj[key2], obj));
    } else {
      xs.push(key2 + ": " + inspect2(obj[key2], obj));
    }
  }
  if (typeof gOPS === "function") {
    for (var j = 0; j < syms.length; j++) {
      if (isEnumerable.call(obj, syms[j])) {
        xs.push("[" + inspect2(syms[j]) + "]: " + inspect2(obj[syms[j]], obj));
      }
    }
  }
  return xs;
}
var GetIntrinsic = getIntrinsic;
var callBound$1 = callBound$2;
var inspect = objectInspect;
var $TypeError = GetIntrinsic("%TypeError%");
var $WeakMap = GetIntrinsic("%WeakMap%", true);
var $Map = GetIntrinsic("%Map%", true);
var $weakMapGet = callBound$1("WeakMap.prototype.get", true);
var $weakMapSet = callBound$1("WeakMap.prototype.set", true);
var $weakMapHas = callBound$1("WeakMap.prototype.has", true);
var $mapGet = callBound$1("Map.prototype.get", true);
var $mapSet = callBound$1("Map.prototype.set", true);
var $mapHas = callBound$1("Map.prototype.has", true);
var listGetNode = function(list, key2) {
  for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
    if (curr.key === key2) {
      prev.next = curr.next;
      curr.next = list.next;
      list.next = curr;
      return curr;
    }
  }
};
var listGet = function(objects, key2) {
  var node = listGetNode(objects, key2);
  return node && node.value;
};
var listSet = function(objects, key2, value2) {
  var node = listGetNode(objects, key2);
  if (node) {
    node.value = value2;
  } else {
    objects.next = {
      key: key2,
      next: objects.next,
      value: value2
    };
  }
};
var listHas = function(objects, key2) {
  return !!listGetNode(objects, key2);
};
var sideChannel = function getSideChannel2() {
  var $wm;
  var $m;
  var $o;
  var channel2 = {
    assert: function(key2) {
      if (!channel2.has(key2)) {
        throw new $TypeError("Side channel does not contain " + inspect(key2));
      }
    },
    get: function(key2) {
      if ($WeakMap && key2 && (typeof key2 === "object" || typeof key2 === "function")) {
        if ($wm) {
          return $weakMapGet($wm, key2);
        }
      } else if ($Map) {
        if ($m) {
          return $mapGet($m, key2);
        }
      } else {
        if ($o) {
          return listGet($o, key2);
        }
      }
    },
    has: function(key2) {
      if ($WeakMap && key2 && (typeof key2 === "object" || typeof key2 === "function")) {
        if ($wm) {
          return $weakMapHas($wm, key2);
        }
      } else if ($Map) {
        if ($m) {
          return $mapHas($m, key2);
        }
      } else {
        if ($o) {
          return listHas($o, key2);
        }
      }
      return false;
    },
    set: function(key2, value2) {
      if ($WeakMap && key2 && (typeof key2 === "object" || typeof key2 === "function")) {
        if (!$wm) {
          $wm = new $WeakMap();
        }
        $weakMapSet($wm, key2, value2);
      } else if ($Map) {
        if (!$m) {
          $m = new $Map();
        }
        $mapSet($m, key2, value2);
      } else {
        if (!$o) {
          $o = { key: {}, next: null };
        }
        listSet($o, key2, value2);
      }
    }
  };
  return channel2;
};
var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var Format = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
};
var formats$3 = {
  "default": Format.RFC3986,
  formatters: {
    RFC1738: function(value2) {
      return replace.call(value2, percentTwenties, "+");
    },
    RFC3986: function(value2) {
      return String(value2);
    }
  },
  RFC1738: Format.RFC1738,
  RFC3986: Format.RFC3986
};
var formats$2 = formats$3;
var has$3 = Object.prototype.hasOwnProperty;
var isArray$2 = Array.isArray;
var hexTable = function() {
  var array = [];
  for (var i = 0; i < 256; ++i) {
    array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
  }
  return array;
}();
var compactQueue = function compactQueue2(queue) {
  while (queue.length > 1) {
    var item = queue.pop();
    var obj = item.obj[item.prop];
    if (isArray$2(obj)) {
      var compacted = [];
      for (var j = 0; j < obj.length; ++j) {
        if (typeof obj[j] !== "undefined") {
          compacted.push(obj[j]);
        }
      }
      item.obj[item.prop] = compacted;
    }
  }
};
var arrayToObject = function arrayToObject2(source2, options2) {
  var obj = options2 && options2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var i = 0; i < source2.length; ++i) {
    if (typeof source2[i] !== "undefined") {
      obj[i] = source2[i];
    }
  }
  return obj;
};
var merge = function merge2(target2, source2, options2) {
  if (!source2) {
    return target2;
  }
  if (typeof source2 !== "object") {
    if (isArray$2(target2)) {
      target2.push(source2);
    } else if (target2 && typeof target2 === "object") {
      if (options2 && (options2.plainObjects || options2.allowPrototypes) || !has$3.call(Object.prototype, source2)) {
        target2[source2] = true;
      }
    } else {
      return [target2, source2];
    }
    return target2;
  }
  if (!target2 || typeof target2 !== "object") {
    return [target2].concat(source2);
  }
  var mergeTarget = target2;
  if (isArray$2(target2) && !isArray$2(source2)) {
    mergeTarget = arrayToObject(target2, options2);
  }
  if (isArray$2(target2) && isArray$2(source2)) {
    source2.forEach(function(item, i) {
      if (has$3.call(target2, i)) {
        var targetItem = target2[i];
        if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
          target2[i] = merge2(targetItem, item, options2);
        } else {
          target2.push(item);
        }
      } else {
        target2[i] = item;
      }
    });
    return target2;
  }
  return Object.keys(source2).reduce(function(acc, key2) {
    var value2 = source2[key2];
    if (has$3.call(acc, key2)) {
      acc[key2] = merge2(acc[key2], value2, options2);
    } else {
      acc[key2] = value2;
    }
    return acc;
  }, mergeTarget);
};
var assign = function assignSingleSource(target2, source2) {
  return Object.keys(source2).reduce(function(acc, key2) {
    acc[key2] = source2[key2];
    return acc;
  }, target2);
};
var decode$1 = function(str, decoder, charset) {
  var strWithoutPlus = str.replace(/\+/g, " ");
  if (charset === "iso-8859-1") {
    return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
  }
  try {
    return decodeURIComponent(strWithoutPlus);
  } catch (e) {
    return strWithoutPlus;
  }
};
var encode$1 = function encode2(str, defaultEncoder, charset, kind, format) {
  if (str.length === 0) {
    return str;
  }
  var string = str;
  if (typeof str === "symbol") {
    string = Symbol.prototype.toString.call(str);
  } else if (typeof str !== "string") {
    string = String(str);
  }
  if (charset === "iso-8859-1") {
    return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
      return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
    });
  }
  var out = "";
  for (var i = 0; i < string.length; ++i) {
    var c = string.charCodeAt(i);
    if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats$2.RFC1738 && (c === 40 || c === 41)) {
      out += string.charAt(i);
      continue;
    }
    if (c < 128) {
      out = out + hexTable[c];
      continue;
    }
    if (c < 2048) {
      out = out + (hexTable[192 | c >> 6] + hexTable[128 | c & 63]);
      continue;
    }
    if (c < 55296 || c >= 57344) {
      out = out + (hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63]);
      continue;
    }
    i += 1;
    c = 65536 + ((c & 1023) << 10 | string.charCodeAt(i) & 1023);
    out += hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
  }
  return out;
};
var compact = function compact2(value2) {
  var queue = [{ obj: { o: value2 }, prop: "o" }];
  var refs2 = [];
  for (var i = 0; i < queue.length; ++i) {
    var item = queue[i];
    var obj = item.obj[item.prop];
    var keys2 = Object.keys(obj);
    for (var j = 0; j < keys2.length; ++j) {
      var key2 = keys2[j];
      var val = obj[key2];
      if (typeof val === "object" && val !== null && refs2.indexOf(val) === -1) {
        queue.push({ obj, prop: key2 });
        refs2.push(val);
      }
    }
  }
  compactQueue(queue);
  return value2;
};
var isRegExp = function isRegExp2(obj) {
  return Object.prototype.toString.call(obj) === "[object RegExp]";
};
var isBuffer = function isBuffer2(obj) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
var combine = function combine2(a, b) {
  return [].concat(a, b);
};
var maybeMap = function maybeMap2(val, fn) {
  if (isArray$2(val)) {
    var mapped = [];
    for (var i = 0; i < val.length; i += 1) {
      mapped.push(fn(val[i]));
    }
    return mapped;
  }
  return fn(val);
};
var utils$2 = {
  arrayToObject,
  assign,
  combine,
  compact,
  decode: decode$1,
  encode: encode$1,
  isBuffer,
  isRegExp,
  maybeMap,
  merge
};
var getSideChannel = sideChannel;
var utils$1 = utils$2;
var formats$1 = formats$3;
var has$2 = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = {
  brackets: function brackets(prefix) {
    return prefix + "[]";
  },
  comma: "comma",
  indices: function indices(prefix, key2) {
    return prefix + "[" + key2 + "]";
  },
  repeat: function repeat(prefix) {
    return prefix;
  }
};
var isArray$1 = Array.isArray;
var split = String.prototype.split;
var push = Array.prototype.push;
var pushToArray = function(arr, valueOrArray) {
  push.apply(arr, isArray$1(valueOrArray) ? valueOrArray : [valueOrArray]);
};
var toISO = Date.prototype.toISOString;
var defaultFormat = formats$1["default"];
var defaults$2 = {
  addQueryPrefix: false,
  allowDots: false,
  charset: "utf-8",
  charsetSentinel: false,
  delimiter: "&",
  encode: true,
  encoder: utils$1.encode,
  encodeValuesOnly: false,
  format: defaultFormat,
  formatter: formats$1.formatters[defaultFormat],
  indices: false,
  serializeDate: function serializeDate(date) {
    return toISO.call(date);
  },
  skipNulls: false,
  strictNullHandling: false
};
var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
  return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
};
var sentinel = {};
var stringify$2 = function stringify2(object, prefix, generateArrayPrefix, commaRoundTrip, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate2, format, formatter, encodeValuesOnly, charset, sideChannel2) {
  var obj = object;
  var tmpSc = sideChannel2;
  var step = 0;
  var findFlag = false;
  while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
    var pos = tmpSc.get(object);
    step += 1;
    if (typeof pos !== "undefined") {
      if (pos === step) {
        throw new RangeError("Cyclic object value");
      } else {
        findFlag = true;
      }
    }
    if (typeof tmpSc.get(sentinel) === "undefined") {
      step = 0;
    }
  }
  if (typeof filter === "function") {
    obj = filter(prefix, obj);
  } else if (obj instanceof Date) {
    obj = serializeDate2(obj);
  } else if (generateArrayPrefix === "comma" && isArray$1(obj)) {
    obj = utils$1.maybeMap(obj, function(value3) {
      if (value3 instanceof Date) {
        return serializeDate2(value3);
      }
      return value3;
    });
  }
  if (obj === null) {
    if (strictNullHandling) {
      return encoder && !encodeValuesOnly ? encoder(prefix, defaults$2.encoder, charset, "key", format) : prefix;
    }
    obj = "";
  }
  if (isNonNullishPrimitive(obj) || utils$1.isBuffer(obj)) {
    if (encoder) {
      var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults$2.encoder, charset, "key", format);
      if (generateArrayPrefix === "comma" && encodeValuesOnly) {
        var valuesArray = split.call(String(obj), ",");
        var valuesJoined = "";
        for (var i = 0; i < valuesArray.length; ++i) {
          valuesJoined += (i === 0 ? "" : ",") + formatter(encoder(valuesArray[i], defaults$2.encoder, charset, "value", format));
        }
        return [formatter(keyValue) + (commaRoundTrip && isArray$1(obj) && valuesArray.length === 1 ? "[]" : "") + "=" + valuesJoined];
      }
      return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults$2.encoder, charset, "value", format))];
    }
    return [formatter(prefix) + "=" + formatter(String(obj))];
  }
  var values = [];
  if (typeof obj === "undefined") {
    return values;
  }
  var objKeys;
  if (generateArrayPrefix === "comma" && isArray$1(obj)) {
    objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
  } else if (isArray$1(filter)) {
    objKeys = filter;
  } else {
    var keys2 = Object.keys(obj);
    objKeys = sort ? keys2.sort(sort) : keys2;
  }
  var adjustedPrefix = commaRoundTrip && isArray$1(obj) && obj.length === 1 ? prefix + "[]" : prefix;
  for (var j = 0; j < objKeys.length; ++j) {
    var key2 = objKeys[j];
    var value2 = typeof key2 === "object" && typeof key2.value !== "undefined" ? key2.value : obj[key2];
    if (skipNulls && value2 === null) {
      continue;
    }
    var keyPrefix = isArray$1(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, key2) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + key2 : "[" + key2 + "]");
    sideChannel2.set(object, step);
    var valueSideChannel = getSideChannel();
    valueSideChannel.set(sentinel, sideChannel2);
    pushToArray(values, stringify2(value2, keyPrefix, generateArrayPrefix, commaRoundTrip, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate2, format, formatter, encodeValuesOnly, charset, valueSideChannel));
  }
  return values;
};
var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
  if (!opts) {
    return defaults$2;
  }
  if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
    throw new TypeError("Encoder has to be a function.");
  }
  var charset = opts.charset || defaults$2.charset;
  if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  }
  var format = formats$1["default"];
  if (typeof opts.format !== "undefined") {
    if (!has$2.call(formats$1.formatters, opts.format)) {
      throw new TypeError("Unknown format option provided.");
    }
    format = opts.format;
  }
  var formatter = formats$1.formatters[format];
  var filter = defaults$2.filter;
  if (typeof opts.filter === "function" || isArray$1(opts.filter)) {
    filter = opts.filter;
  }
  return {
    addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults$2.addQueryPrefix,
    allowDots: typeof opts.allowDots === "undefined" ? defaults$2.allowDots : !!opts.allowDots,
    charset,
    charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults$2.charsetSentinel,
    delimiter: typeof opts.delimiter === "undefined" ? defaults$2.delimiter : opts.delimiter,
    encode: typeof opts.encode === "boolean" ? opts.encode : defaults$2.encode,
    encoder: typeof opts.encoder === "function" ? opts.encoder : defaults$2.encoder,
    encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults$2.encodeValuesOnly,
    filter,
    format,
    formatter,
    serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults$2.serializeDate,
    skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults$2.skipNulls,
    sort: typeof opts.sort === "function" ? opts.sort : null,
    strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults$2.strictNullHandling
  };
};
var stringify_1 = function(object, opts) {
  var obj = object;
  var options2 = normalizeStringifyOptions(opts);
  var objKeys;
  var filter;
  if (typeof options2.filter === "function") {
    filter = options2.filter;
    obj = filter("", obj);
  } else if (isArray$1(options2.filter)) {
    filter = options2.filter;
    objKeys = filter;
  }
  var keys2 = [];
  if (typeof obj !== "object" || obj === null) {
    return "";
  }
  var arrayFormat;
  if (opts && opts.arrayFormat in arrayPrefixGenerators) {
    arrayFormat = opts.arrayFormat;
  } else if (opts && "indices" in opts) {
    arrayFormat = opts.indices ? "indices" : "repeat";
  } else {
    arrayFormat = "indices";
  }
  var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
  if (opts && "commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  }
  var commaRoundTrip = generateArrayPrefix === "comma" && opts && opts.commaRoundTrip;
  if (!objKeys) {
    objKeys = Object.keys(obj);
  }
  if (options2.sort) {
    objKeys.sort(options2.sort);
  }
  var sideChannel2 = getSideChannel();
  for (var i = 0; i < objKeys.length; ++i) {
    var key2 = objKeys[i];
    if (options2.skipNulls && obj[key2] === null) {
      continue;
    }
    pushToArray(keys2, stringify$2(obj[key2], key2, generateArrayPrefix, commaRoundTrip, options2.strictNullHandling, options2.skipNulls, options2.encode ? options2.encoder : null, options2.filter, options2.sort, options2.allowDots, options2.serializeDate, options2.format, options2.formatter, options2.encodeValuesOnly, options2.charset, sideChannel2));
  }
  var joined = keys2.join(options2.delimiter);
  var prefix = options2.addQueryPrefix === true ? "?" : "";
  if (options2.charsetSentinel) {
    if (options2.charset === "iso-8859-1") {
      prefix += "utf8=%26%2310003%3B&";
    } else {
      prefix += "utf8=%E2%9C%93&";
    }
  }
  return joined.length > 0 ? prefix + joined : "";
};
var utils = utils$2;
var has$1 = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var defaults$1 = {
  allowDots: false,
  allowPrototypes: false,
  allowSparse: false,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: false,
  comma: false,
  decoder: utils.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: false,
  interpretNumericEntities: false,
  parameterLimit: 1e3,
  parseArrays: true,
  plainObjects: false,
  strictNullHandling: false
};
var interpretNumericEntities = function(str) {
  return str.replace(/&#(\d+);/g, function($0, numberStr) {
    return String.fromCharCode(parseInt(numberStr, 10));
  });
};
var parseArrayValue = function(val, options2) {
  if (val && typeof val === "string" && options2.comma && val.indexOf(",") > -1) {
    return val.split(",");
  }
  return val;
};
var isoSentinel = "utf8=%26%2310003%3B";
var charsetSentinel = "utf8=%E2%9C%93";
var parseValues = function parseQueryStringValues(str, options2) {
  var obj = {};
  var cleanStr = options2.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
  var limit = options2.parameterLimit === Infinity ? void 0 : options2.parameterLimit;
  var parts = cleanStr.split(options2.delimiter, limit);
  var skipIndex = -1;
  var i;
  var charset = options2.charset;
  if (options2.charsetSentinel) {
    for (i = 0; i < parts.length; ++i) {
      if (parts[i].indexOf("utf8=") === 0) {
        if (parts[i] === charsetSentinel) {
          charset = "utf-8";
        } else if (parts[i] === isoSentinel) {
          charset = "iso-8859-1";
        }
        skipIndex = i;
        i = parts.length;
      }
    }
  }
  for (i = 0; i < parts.length; ++i) {
    if (i === skipIndex) {
      continue;
    }
    var part2 = parts[i];
    var bracketEqualsPos = part2.indexOf("]=");
    var pos = bracketEqualsPos === -1 ? part2.indexOf("=") : bracketEqualsPos + 1;
    var key2, val;
    if (pos === -1) {
      key2 = options2.decoder(part2, defaults$1.decoder, charset, "key");
      val = options2.strictNullHandling ? null : "";
    } else {
      key2 = options2.decoder(part2.slice(0, pos), defaults$1.decoder, charset, "key");
      val = utils.maybeMap(parseArrayValue(part2.slice(pos + 1), options2), function(encodedVal) {
        return options2.decoder(encodedVal, defaults$1.decoder, charset, "value");
      });
    }
    if (val && options2.interpretNumericEntities && charset === "iso-8859-1") {
      val = interpretNumericEntities(val);
    }
    if (part2.indexOf("[]=") > -1) {
      val = isArray(val) ? [val] : val;
    }
    if (has$1.call(obj, key2)) {
      obj[key2] = utils.combine(obj[key2], val);
    } else {
      obj[key2] = val;
    }
  }
  return obj;
};
var parseObject = function(chain, val, options2, valuesParsed) {
  var leaf = valuesParsed ? val : parseArrayValue(val, options2);
  for (var i = chain.length - 1; i >= 0; --i) {
    var obj;
    var root2 = chain[i];
    if (root2 === "[]" && options2.parseArrays) {
      obj = [].concat(leaf);
    } else {
      obj = options2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var cleanRoot = root2.charAt(0) === "[" && root2.charAt(root2.length - 1) === "]" ? root2.slice(1, -1) : root2;
      var index = parseInt(cleanRoot, 10);
      if (!options2.parseArrays && cleanRoot === "") {
        obj = { 0: leaf };
      } else if (!isNaN(index) && root2 !== cleanRoot && String(index) === cleanRoot && index >= 0 && (options2.parseArrays && index <= options2.arrayLimit)) {
        obj = [];
        obj[index] = leaf;
      } else if (cleanRoot !== "__proto__") {
        obj[cleanRoot] = leaf;
      }
    }
    leaf = obj;
  }
  return leaf;
};
var parseKeys = function parseQueryStringKeys(givenKey, val, options2, valuesParsed) {
  if (!givenKey) {
    return;
  }
  var key2 = options2.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
  var brackets2 = /(\[[^[\]]*])/;
  var child = /(\[[^[\]]*])/g;
  var segment = options2.depth > 0 && brackets2.exec(key2);
  var parent = segment ? key2.slice(0, segment.index) : key2;
  var keys2 = [];
  if (parent) {
    if (!options2.plainObjects && has$1.call(Object.prototype, parent)) {
      if (!options2.allowPrototypes) {
        return;
      }
    }
    keys2.push(parent);
  }
  var i = 0;
  while (options2.depth > 0 && (segment = child.exec(key2)) !== null && i < options2.depth) {
    i += 1;
    if (!options2.plainObjects && has$1.call(Object.prototype, segment[1].slice(1, -1))) {
      if (!options2.allowPrototypes) {
        return;
      }
    }
    keys2.push(segment[1]);
  }
  if (segment) {
    keys2.push("[" + key2.slice(segment.index) + "]");
  }
  return parseObject(keys2, val, options2, valuesParsed);
};
var normalizeParseOptions = function normalizeParseOptions2(opts) {
  if (!opts) {
    return defaults$1;
  }
  if (opts.decoder !== null && opts.decoder !== void 0 && typeof opts.decoder !== "function") {
    throw new TypeError("Decoder has to be a function.");
  }
  if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  }
  var charset = typeof opts.charset === "undefined" ? defaults$1.charset : opts.charset;
  return {
    allowDots: typeof opts.allowDots === "undefined" ? defaults$1.allowDots : !!opts.allowDots,
    allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults$1.allowPrototypes,
    allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults$1.allowSparse,
    arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults$1.arrayLimit,
    charset,
    charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults$1.charsetSentinel,
    comma: typeof opts.comma === "boolean" ? opts.comma : defaults$1.comma,
    decoder: typeof opts.decoder === "function" ? opts.decoder : defaults$1.decoder,
    delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults$1.delimiter,
    depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults$1.depth,
    ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
    interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults$1.interpretNumericEntities,
    parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults$1.parameterLimit,
    parseArrays: opts.parseArrays !== false,
    plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults$1.plainObjects,
    strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults$1.strictNullHandling
  };
};
var parse$2 = function(str, opts) {
  var options2 = normalizeParseOptions(opts);
  if (str === "" || str === null || typeof str === "undefined") {
    return options2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  }
  var tempObj = typeof str === "string" ? parseValues(str, options2) : str;
  var obj = options2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  var keys2 = Object.keys(tempObj);
  for (var i = 0; i < keys2.length; ++i) {
    var key2 = keys2[i];
    var newObj = parseKeys(key2, tempObj[key2], options2, typeof str === "string");
    obj = utils.merge(obj, newObj, options2);
  }
  if (options2.allowSparse === true) {
    return obj;
  }
  return utils.compact(obj);
};
var stringify$1 = stringify_1;
var parse$1 = parse$2;
var formats = formats$3;
var lib$1 = {
  formats,
  parse: parse$1,
  stringify: stringify$1
};
var _templateObject$4;
function _taggedTemplateLiteral$4(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _defineProperty$2(obj, key2, value2) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, { value: value2, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key2] = value2;
  }
  return obj;
}
function _slicedToArray$5(arr, i) {
  return _arrayWithHoles$5(arr) || _iterableToArrayLimit$5(arr, i) || _unsupportedIterableToArray$6(arr, i) || _nonIterableRest$5();
}
function _nonIterableRest$5() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$6(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$6(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$6(o, minLen);
}
function _arrayLikeToArray$6(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$5(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$5(arr) {
  if (Array.isArray(arr))
    return arr;
}
var VALIDATION_REGEXP = /^[a-zA-Z0-9 _-]*$/;
var NUMBER_REGEXP = /^-?[0-9]+(\.[0-9]+)?$/;
var HEX_REGEXP = /^#([a-f0-9]{3,4}|[a-f0-9]{6}|[a-f0-9]{8})$/i;
var COLOR_REGEXP = /^(rgba?|hsla?)\(([0-9]{1,3}),\s?([0-9]{1,3})%?,\s?([0-9]{1,3})%?,?\s?([0-9](\.[0-9]{1,2})?)?\)$/i;
var validateArgs = function validateArgs2() {
  var key2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  var value2 = arguments.length > 1 ? arguments[1] : void 0;
  if (key2 === null)
    return false;
  if (key2 === "" || !VALIDATION_REGEXP.test(key2))
    return false;
  if (value2 === null || value2 === void 0)
    return true;
  if (value2 instanceof Date)
    return true;
  if (typeof value2 === "number" || typeof value2 === "boolean")
    return true;
  if (typeof value2 === "string") {
    return VALIDATION_REGEXP.test(value2) || NUMBER_REGEXP.test(value2) || HEX_REGEXP.test(value2) || COLOR_REGEXP.test(value2);
  }
  if (Array.isArray(value2))
    return value2.every(function(v) {
      return validateArgs2(key2, v);
    });
  if (isPlainObject_1(value2))
    return Object.entries(value2).every(function(_ref) {
      var _ref22 = _slicedToArray$5(_ref, 2), k = _ref22[0], v = _ref22[1];
      return validateArgs2(k, v);
    });
  return false;
};
var QS_OPTIONS = {
  delimiter: ";",
  allowDots: true,
  allowSparse: true,
  decoder: function(_decoder) {
    function decoder(_x, _x2, _x3, _x4) {
      return _decoder.apply(this, arguments);
    }
    decoder.toString = function() {
      return _decoder.toString();
    };
    return decoder;
  }(function(str, defaultDecoder, charset, type) {
    if (type === "value" && str.startsWith("!")) {
      if (str === "!undefined")
        return void 0;
      if (str === "!null")
        return null;
      if (str.startsWith("!date(") && str.endsWith(")"))
        return new Date(str.slice(6, -1));
      if (str.startsWith("!hex(") && str.endsWith(")"))
        return "#".concat(str.slice(5, -1));
      var color = str.slice(1).match(COLOR_REGEXP);
      if (color) {
        if (str.startsWith("!rgba"))
          return "".concat(color[1], "(").concat(color[2], ", ").concat(color[3], ", ").concat(color[4], ", ").concat(color[5], ")");
        if (str.startsWith("!hsla"))
          return "".concat(color[1], "(").concat(color[2], ", ").concat(color[3], "%, ").concat(color[4], "%, ").concat(color[5], ")");
        return str.startsWith("!rgb") ? "".concat(color[1], "(").concat(color[2], ", ").concat(color[3], ", ").concat(color[4], ")") : "".concat(color[1], "(").concat(color[2], ", ").concat(color[3], "%, ").concat(color[4], "%)");
      }
    }
    if (type === "value" && NUMBER_REGEXP.test(str))
      return Number(str);
    return defaultDecoder(str, defaultDecoder, charset);
  })
};
var parseArgsParam = function parseArgsParam2(argsString) {
  var parts = argsString.split(";").map(function(part2) {
    return part2.replace("=", "~").replace(":", "=");
  });
  return Object.entries(lib$1.parse(parts.join(";"), QS_OPTIONS)).reduce(function(acc, _ref32) {
    var _ref42 = _slicedToArray$5(_ref32, 2), key2 = _ref42[0], value2 = _ref42[1];
    if (validateArgs(key2, value2))
      return Object.assign(acc, _defineProperty$2({}, key2, value2));
    once.warn(dedent(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral$4(["\n      Omitted potentially unsafe URL args.\n\n      More info: https://storybook.js.org/docs/react/writing-stories/args#setting-args-through-the-url\n    "]))));
    return acc;
  }, {});
};
var _excluded$2 = ["path", "selectedKind", "selectedStory"];
function _classCallCheck$8(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$8(target2, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target2, descriptor.key, descriptor);
  }
}
function _createClass$8(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$8(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$8(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _typeof$2(obj) {
  "@babel/helpers - typeof";
  return _typeof$2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$2(obj);
}
function _objectWithoutProperties$2(source2, excluded) {
  if (source2 == null)
    return {};
  var target2 = _objectWithoutPropertiesLoose$2(source2, excluded);
  var key2, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source2);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key2 = sourceSymbolKeys[i];
      if (excluded.indexOf(key2) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source2, key2))
        continue;
      target2[key2] = source2[key2];
    }
  }
  return target2;
}
function _objectWithoutPropertiesLoose$2(source2, excluded) {
  if (source2 == null)
    return {};
  var target2 = {};
  var sourceKeys = Object.keys(source2);
  var key2, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key2 = sourceKeys[i];
    if (excluded.indexOf(key2) >= 0)
      continue;
    target2[key2] = source2[key2];
  }
  return target2;
}
var history = window_1.history, document$3 = window_1.document;
function pathToId(path) {
  var match = (path || "").match(/^\/story\/(.+)/);
  if (!match) {
    throw new Error("Invalid path '".concat(path, "',  must start with '/story/'"));
  }
  return match[1];
}
var getQueryString = function getQueryString2(_ref) {
  var selection = _ref.selection, extraParams = _ref.extraParams;
  var _document$location$se = document$3.location.search, search = _document$location$se === void 0 ? "" : _document$location$se;
  var _qs$parse = lib$1.parse(search, {
    ignoreQueryPrefix: true
  });
  _qs$parse.path;
  _qs$parse.selectedKind;
  _qs$parse.selectedStory;
  var rest = _objectWithoutProperties$2(_qs$parse, _excluded$2);
  return lib$1.stringify(Object.assign({}, rest, extraParams, selection && {
    id: selection.storyId,
    viewMode: selection.viewMode
  }), {
    encode: false,
    addQueryPrefix: true
  });
};
var setPath = function setPath2(selection) {
  if (!selection)
    return;
  var query = getQueryString({
    selection
  });
  var _document$location$ha = document$3.location.hash, hash = _document$location$ha === void 0 ? "" : _document$location$ha;
  document$3.title = selection.storyId;
  history.replaceState({}, "", "".concat(document$3.location.pathname).concat(query).concat(hash));
};
var isObject$2 = function isObject2(val) {
  return val != null && _typeof$2(val) === "object" && Array.isArray(val) === false;
};
var getFirstString = function getFirstString2(v) {
  if (typeof v === "string") {
    return v;
  }
  if (Array.isArray(v)) {
    return getFirstString2(v[0]);
  }
  if (isObject$2(v)) {
    return getFirstString2(Object.values(v));
  }
  return void 0;
};
var deprecatedLegacyQuery = browser(function() {
  return 0;
}, "URL formats with `selectedKind` and `selectedName` query parameters are deprecated.\nUse `id=$storyId` instead.\nSee https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#new-url-structure");
var getSelectionSpecifierFromPath = function getSelectionSpecifierFromPath2() {
  var query = lib$1.parse(document$3.location.search, {
    ignoreQueryPrefix: true
  });
  var args = typeof query.args === "string" ? parseArgsParam(query.args) : void 0;
  var globals = typeof query.globals === "string" ? parseArgsParam(query.globals) : void 0;
  var viewMode = getFirstString(query.viewMode);
  if (typeof viewMode !== "string" || !viewMode.match(/docs|story/)) {
    viewMode = "story";
  }
  var path = getFirstString(query.path);
  var storyId = path ? pathToId(path) : getFirstString(query.id);
  if (storyId) {
    return {
      storySpecifier: storyId,
      args,
      globals,
      viewMode
    };
  }
  var title = getFirstString(query.selectedKind);
  var name2 = getFirstString(query.selectedStory);
  if (title && name2) {
    deprecatedLegacyQuery();
    return {
      storySpecifier: {
        title,
        name: name2
      },
      args,
      globals,
      viewMode
    };
  }
  return null;
};
var UrlStore = /* @__PURE__ */ function() {
  function UrlStore2() {
    _classCallCheck$8(this, UrlStore2);
    this.selectionSpecifier = void 0;
    this.selection = void 0;
    this.selectionSpecifier = getSelectionSpecifierFromPath();
  }
  _createClass$8(UrlStore2, [{
    key: "setSelection",
    value: function setSelection(selection) {
      this.selection = selection;
      setPath(this.selection);
    }
  }, {
    key: "setQueryParams",
    value: function setQueryParams(queryParams) {
      var query = getQueryString({
        extraParams: queryParams
      });
      var _document$location$ha2 = document$3.location.hash, hash = _document$location$ha2 === void 0 ? "" : _document$location$ha2;
      history.replaceState({}, "", "".concat(document$3.location.pathname).concat(query).concat(hash));
    }
  }]);
  return UrlStore2;
}();
var lib = {};
var decode = {};
const Aacute$1 = "\xC1";
const aacute$1 = "\xE1";
const Abreve = "\u0102";
const abreve = "\u0103";
const ac = "\u223E";
const acd = "\u223F";
const acE = "\u223E\u0333";
const Acirc$1 = "\xC2";
const acirc$1 = "\xE2";
const acute$1 = "\xB4";
const Acy = "\u0410";
const acy = "\u0430";
const AElig$1 = "\xC6";
const aelig$1 = "\xE6";
const af = "\u2061";
const Afr = "\u{1D504}";
const afr = "\u{1D51E}";
const Agrave$1 = "\xC0";
const agrave$1 = "\xE0";
const alefsym = "\u2135";
const aleph = "\u2135";
const Alpha = "\u0391";
const alpha = "\u03B1";
const Amacr = "\u0100";
const amacr = "\u0101";
const amalg = "\u2A3F";
const amp$2 = "&";
const AMP$1 = "&";
const andand = "\u2A55";
const And = "\u2A53";
const and = "\u2227";
const andd = "\u2A5C";
const andslope = "\u2A58";
const andv = "\u2A5A";
const ang = "\u2220";
const ange = "\u29A4";
const angle = "\u2220";
const angmsdaa = "\u29A8";
const angmsdab = "\u29A9";
const angmsdac = "\u29AA";
const angmsdad = "\u29AB";
const angmsdae = "\u29AC";
const angmsdaf = "\u29AD";
const angmsdag = "\u29AE";
const angmsdah = "\u29AF";
const angmsd = "\u2221";
const angrt = "\u221F";
const angrtvb = "\u22BE";
const angrtvbd = "\u299D";
const angsph = "\u2222";
const angst = "\xC5";
const angzarr = "\u237C";
const Aogon = "\u0104";
const aogon = "\u0105";
const Aopf = "\u{1D538}";
const aopf = "\u{1D552}";
const apacir = "\u2A6F";
const ap = "\u2248";
const apE = "\u2A70";
const ape = "\u224A";
const apid = "\u224B";
const apos$1 = "'";
const ApplyFunction = "\u2061";
const approx = "\u2248";
const approxeq = "\u224A";
const Aring$1 = "\xC5";
const aring$1 = "\xE5";
const Ascr = "\u{1D49C}";
const ascr = "\u{1D4B6}";
const Assign = "\u2254";
const ast = "*";
const asymp = "\u2248";
const asympeq = "\u224D";
const Atilde$1 = "\xC3";
const atilde$1 = "\xE3";
const Auml$1 = "\xC4";
const auml$1 = "\xE4";
const awconint = "\u2233";
const awint = "\u2A11";
const backcong = "\u224C";
const backepsilon = "\u03F6";
const backprime = "\u2035";
const backsim = "\u223D";
const backsimeq = "\u22CD";
const Backslash = "\u2216";
const Barv = "\u2AE7";
const barvee = "\u22BD";
const barwed = "\u2305";
const Barwed = "\u2306";
const barwedge = "\u2305";
const bbrk = "\u23B5";
const bbrktbrk = "\u23B6";
const bcong = "\u224C";
const Bcy = "\u0411";
const bcy = "\u0431";
const bdquo = "\u201E";
const becaus = "\u2235";
const because = "\u2235";
const Because = "\u2235";
const bemptyv = "\u29B0";
const bepsi = "\u03F6";
const bernou = "\u212C";
const Bernoullis = "\u212C";
const Beta = "\u0392";
const beta = "\u03B2";
const beth = "\u2136";
const between = "\u226C";
const Bfr = "\u{1D505}";
const bfr = "\u{1D51F}";
const bigcap = "\u22C2";
const bigcirc = "\u25EF";
const bigcup = "\u22C3";
const bigodot = "\u2A00";
const bigoplus = "\u2A01";
const bigotimes = "\u2A02";
const bigsqcup = "\u2A06";
const bigstar = "\u2605";
const bigtriangledown = "\u25BD";
const bigtriangleup = "\u25B3";
const biguplus = "\u2A04";
const bigvee = "\u22C1";
const bigwedge = "\u22C0";
const bkarow = "\u290D";
const blacklozenge = "\u29EB";
const blacksquare = "\u25AA";
const blacktriangle = "\u25B4";
const blacktriangledown = "\u25BE";
const blacktriangleleft = "\u25C2";
const blacktriangleright = "\u25B8";
const blank = "\u2423";
const blk12 = "\u2592";
const blk14 = "\u2591";
const blk34 = "\u2593";
const block = "\u2588";
const bne = "=\u20E5";
const bnequiv = "\u2261\u20E5";
const bNot = "\u2AED";
const bnot = "\u2310";
const Bopf = "\u{1D539}";
const bopf = "\u{1D553}";
const bot = "\u22A5";
const bottom = "\u22A5";
const bowtie = "\u22C8";
const boxbox = "\u29C9";
const boxdl = "\u2510";
const boxdL = "\u2555";
const boxDl = "\u2556";
const boxDL = "\u2557";
const boxdr = "\u250C";
const boxdR = "\u2552";
const boxDr = "\u2553";
const boxDR = "\u2554";
const boxh = "\u2500";
const boxH = "\u2550";
const boxhd = "\u252C";
const boxHd = "\u2564";
const boxhD = "\u2565";
const boxHD = "\u2566";
const boxhu = "\u2534";
const boxHu = "\u2567";
const boxhU = "\u2568";
const boxHU = "\u2569";
const boxminus = "\u229F";
const boxplus = "\u229E";
const boxtimes = "\u22A0";
const boxul = "\u2518";
const boxuL = "\u255B";
const boxUl = "\u255C";
const boxUL = "\u255D";
const boxur = "\u2514";
const boxuR = "\u2558";
const boxUr = "\u2559";
const boxUR = "\u255A";
const boxv = "\u2502";
const boxV = "\u2551";
const boxvh = "\u253C";
const boxvH = "\u256A";
const boxVh = "\u256B";
const boxVH = "\u256C";
const boxvl = "\u2524";
const boxvL = "\u2561";
const boxVl = "\u2562";
const boxVL = "\u2563";
const boxvr = "\u251C";
const boxvR = "\u255E";
const boxVr = "\u255F";
const boxVR = "\u2560";
const bprime = "\u2035";
const breve = "\u02D8";
const Breve = "\u02D8";
const brvbar$1 = "\xA6";
const bscr = "\u{1D4B7}";
const Bscr = "\u212C";
const bsemi = "\u204F";
const bsim = "\u223D";
const bsime = "\u22CD";
const bsolb = "\u29C5";
const bsol = "\\";
const bsolhsub = "\u27C8";
const bull = "\u2022";
const bullet = "\u2022";
const bump = "\u224E";
const bumpE = "\u2AAE";
const bumpe = "\u224F";
const Bumpeq = "\u224E";
const bumpeq = "\u224F";
const Cacute = "\u0106";
const cacute = "\u0107";
const capand = "\u2A44";
const capbrcup = "\u2A49";
const capcap = "\u2A4B";
const cap = "\u2229";
const Cap = "\u22D2";
const capcup = "\u2A47";
const capdot = "\u2A40";
const CapitalDifferentialD = "\u2145";
const caps = "\u2229\uFE00";
const caret = "\u2041";
const caron = "\u02C7";
const Cayleys = "\u212D";
const ccaps = "\u2A4D";
const Ccaron = "\u010C";
const ccaron = "\u010D";
const Ccedil$1 = "\xC7";
const ccedil$1 = "\xE7";
const Ccirc = "\u0108";
const ccirc = "\u0109";
const Cconint = "\u2230";
const ccups = "\u2A4C";
const ccupssm = "\u2A50";
const Cdot = "\u010A";
const cdot = "\u010B";
const cedil$1 = "\xB8";
const Cedilla = "\xB8";
const cemptyv = "\u29B2";
const cent$1 = "\xA2";
const centerdot = "\xB7";
const CenterDot = "\xB7";
const cfr = "\u{1D520}";
const Cfr = "\u212D";
const CHcy = "\u0427";
const chcy = "\u0447";
const check = "\u2713";
const checkmark = "\u2713";
const Chi = "\u03A7";
const chi = "\u03C7";
const circ = "\u02C6";
const circeq = "\u2257";
const circlearrowleft = "\u21BA";
const circlearrowright = "\u21BB";
const circledast = "\u229B";
const circledcirc = "\u229A";
const circleddash = "\u229D";
const CircleDot = "\u2299";
const circledR = "\xAE";
const circledS = "\u24C8";
const CircleMinus = "\u2296";
const CirclePlus = "\u2295";
const CircleTimes = "\u2297";
const cir = "\u25CB";
const cirE = "\u29C3";
const cire = "\u2257";
const cirfnint = "\u2A10";
const cirmid = "\u2AEF";
const cirscir = "\u29C2";
const ClockwiseContourIntegral = "\u2232";
const CloseCurlyDoubleQuote = "\u201D";
const CloseCurlyQuote = "\u2019";
const clubs = "\u2663";
const clubsuit = "\u2663";
const colon = ":";
const Colon = "\u2237";
const Colone = "\u2A74";
const colone = "\u2254";
const coloneq = "\u2254";
const comma = ",";
const commat = "@";
const comp = "\u2201";
const compfn = "\u2218";
const complement = "\u2201";
const complexes = "\u2102";
const cong = "\u2245";
const congdot = "\u2A6D";
const Congruent = "\u2261";
const conint = "\u222E";
const Conint = "\u222F";
const ContourIntegral = "\u222E";
const copf = "\u{1D554}";
const Copf = "\u2102";
const coprod = "\u2210";
const Coproduct = "\u2210";
const copy$1 = "\xA9";
const COPY$1 = "\xA9";
const copysr = "\u2117";
const CounterClockwiseContourIntegral = "\u2233";
const crarr = "\u21B5";
const cross = "\u2717";
const Cross = "\u2A2F";
const Cscr = "\u{1D49E}";
const cscr = "\u{1D4B8}";
const csub = "\u2ACF";
const csube = "\u2AD1";
const csup = "\u2AD0";
const csupe = "\u2AD2";
const ctdot = "\u22EF";
const cudarrl = "\u2938";
const cudarrr = "\u2935";
const cuepr = "\u22DE";
const cuesc = "\u22DF";
const cularr = "\u21B6";
const cularrp = "\u293D";
const cupbrcap = "\u2A48";
const cupcap = "\u2A46";
const CupCap = "\u224D";
const cup = "\u222A";
const Cup = "\u22D3";
const cupcup = "\u2A4A";
const cupdot = "\u228D";
const cupor = "\u2A45";
const cups = "\u222A\uFE00";
const curarr = "\u21B7";
const curarrm = "\u293C";
const curlyeqprec = "\u22DE";
const curlyeqsucc = "\u22DF";
const curlyvee = "\u22CE";
const curlywedge = "\u22CF";
const curren$1 = "\xA4";
const curvearrowleft = "\u21B6";
const curvearrowright = "\u21B7";
const cuvee = "\u22CE";
const cuwed = "\u22CF";
const cwconint = "\u2232";
const cwint = "\u2231";
const cylcty = "\u232D";
const dagger = "\u2020";
const Dagger = "\u2021";
const daleth = "\u2138";
const darr = "\u2193";
const Darr = "\u21A1";
const dArr = "\u21D3";
const dash = "\u2010";
const Dashv = "\u2AE4";
const dashv = "\u22A3";
const dbkarow = "\u290F";
const dblac = "\u02DD";
const Dcaron = "\u010E";
const dcaron = "\u010F";
const Dcy = "\u0414";
const dcy = "\u0434";
const ddagger = "\u2021";
const ddarr = "\u21CA";
const DD = "\u2145";
const dd = "\u2146";
const DDotrahd = "\u2911";
const ddotseq = "\u2A77";
const deg$1 = "\xB0";
const Del = "\u2207";
const Delta = "\u0394";
const delta = "\u03B4";
const demptyv = "\u29B1";
const dfisht = "\u297F";
const Dfr = "\u{1D507}";
const dfr = "\u{1D521}";
const dHar = "\u2965";
const dharl = "\u21C3";
const dharr = "\u21C2";
const DiacriticalAcute = "\xB4";
const DiacriticalDot = "\u02D9";
const DiacriticalDoubleAcute = "\u02DD";
const DiacriticalGrave = "`";
const DiacriticalTilde = "\u02DC";
const diam = "\u22C4";
const diamond = "\u22C4";
const Diamond = "\u22C4";
const diamondsuit = "\u2666";
const diams = "\u2666";
const die = "\xA8";
const DifferentialD = "\u2146";
const digamma = "\u03DD";
const disin = "\u22F2";
const div = "\xF7";
const divide$1 = "\xF7";
const divideontimes = "\u22C7";
const divonx = "\u22C7";
const DJcy = "\u0402";
const djcy = "\u0452";
const dlcorn = "\u231E";
const dlcrop = "\u230D";
const dollar = "$";
const Dopf = "\u{1D53B}";
const dopf = "\u{1D555}";
const Dot = "\xA8";
const dot = "\u02D9";
const DotDot = "\u20DC";
const doteq = "\u2250";
const doteqdot = "\u2251";
const DotEqual = "\u2250";
const dotminus = "\u2238";
const dotplus = "\u2214";
const dotsquare = "\u22A1";
const doublebarwedge = "\u2306";
const DoubleContourIntegral = "\u222F";
const DoubleDot = "\xA8";
const DoubleDownArrow = "\u21D3";
const DoubleLeftArrow = "\u21D0";
const DoubleLeftRightArrow = "\u21D4";
const DoubleLeftTee = "\u2AE4";
const DoubleLongLeftArrow = "\u27F8";
const DoubleLongLeftRightArrow = "\u27FA";
const DoubleLongRightArrow = "\u27F9";
const DoubleRightArrow = "\u21D2";
const DoubleRightTee = "\u22A8";
const DoubleUpArrow = "\u21D1";
const DoubleUpDownArrow = "\u21D5";
const DoubleVerticalBar = "\u2225";
const DownArrowBar = "\u2913";
const downarrow = "\u2193";
const DownArrow = "\u2193";
const Downarrow = "\u21D3";
const DownArrowUpArrow = "\u21F5";
const DownBreve = "\u0311";
const downdownarrows = "\u21CA";
const downharpoonleft = "\u21C3";
const downharpoonright = "\u21C2";
const DownLeftRightVector = "\u2950";
const DownLeftTeeVector = "\u295E";
const DownLeftVectorBar = "\u2956";
const DownLeftVector = "\u21BD";
const DownRightTeeVector = "\u295F";
const DownRightVectorBar = "\u2957";
const DownRightVector = "\u21C1";
const DownTeeArrow = "\u21A7";
const DownTee = "\u22A4";
const drbkarow = "\u2910";
const drcorn = "\u231F";
const drcrop = "\u230C";
const Dscr = "\u{1D49F}";
const dscr = "\u{1D4B9}";
const DScy = "\u0405";
const dscy = "\u0455";
const dsol = "\u29F6";
const Dstrok = "\u0110";
const dstrok = "\u0111";
const dtdot = "\u22F1";
const dtri = "\u25BF";
const dtrif = "\u25BE";
const duarr = "\u21F5";
const duhar = "\u296F";
const dwangle = "\u29A6";
const DZcy = "\u040F";
const dzcy = "\u045F";
const dzigrarr = "\u27FF";
const Eacute$1 = "\xC9";
const eacute$1 = "\xE9";
const easter = "\u2A6E";
const Ecaron = "\u011A";
const ecaron = "\u011B";
const Ecirc$1 = "\xCA";
const ecirc$1 = "\xEA";
const ecir = "\u2256";
const ecolon = "\u2255";
const Ecy = "\u042D";
const ecy = "\u044D";
const eDDot = "\u2A77";
const Edot = "\u0116";
const edot = "\u0117";
const eDot = "\u2251";
const ee = "\u2147";
const efDot = "\u2252";
const Efr = "\u{1D508}";
const efr = "\u{1D522}";
const eg = "\u2A9A";
const Egrave$1 = "\xC8";
const egrave$1 = "\xE8";
const egs = "\u2A96";
const egsdot = "\u2A98";
const el = "\u2A99";
const Element = "\u2208";
const elinters = "\u23E7";
const ell = "\u2113";
const els = "\u2A95";
const elsdot = "\u2A97";
const Emacr = "\u0112";
const emacr = "\u0113";
const empty = "\u2205";
const emptyset = "\u2205";
const EmptySmallSquare = "\u25FB";
const emptyv = "\u2205";
const EmptyVerySmallSquare = "\u25AB";
const emsp13 = "\u2004";
const emsp14 = "\u2005";
const emsp = "\u2003";
const ENG = "\u014A";
const eng = "\u014B";
const ensp = "\u2002";
const Eogon = "\u0118";
const eogon = "\u0119";
const Eopf = "\u{1D53C}";
const eopf = "\u{1D556}";
const epar = "\u22D5";
const eparsl = "\u29E3";
const eplus = "\u2A71";
const epsi = "\u03B5";
const Epsilon = "\u0395";
const epsilon = "\u03B5";
const epsiv = "\u03F5";
const eqcirc = "\u2256";
const eqcolon = "\u2255";
const eqsim = "\u2242";
const eqslantgtr = "\u2A96";
const eqslantless = "\u2A95";
const Equal = "\u2A75";
const equals = "=";
const EqualTilde = "\u2242";
const equest = "\u225F";
const Equilibrium = "\u21CC";
const equiv = "\u2261";
const equivDD = "\u2A78";
const eqvparsl = "\u29E5";
const erarr = "\u2971";
const erDot = "\u2253";
const escr = "\u212F";
const Escr = "\u2130";
const esdot = "\u2250";
const Esim = "\u2A73";
const esim = "\u2242";
const Eta = "\u0397";
const eta = "\u03B7";
const ETH$1 = "\xD0";
const eth$1 = "\xF0";
const Euml$1 = "\xCB";
const euml$1 = "\xEB";
const euro = "\u20AC";
const excl = "!";
const exist = "\u2203";
const Exists = "\u2203";
const expectation = "\u2130";
const exponentiale = "\u2147";
const ExponentialE = "\u2147";
const fallingdotseq = "\u2252";
const Fcy = "\u0424";
const fcy = "\u0444";
const female = "\u2640";
const ffilig = "\uFB03";
const fflig = "\uFB00";
const ffllig = "\uFB04";
const Ffr = "\u{1D509}";
const ffr = "\u{1D523}";
const filig = "\uFB01";
const FilledSmallSquare = "\u25FC";
const FilledVerySmallSquare = "\u25AA";
const fjlig = "fj";
const flat = "\u266D";
const fllig = "\uFB02";
const fltns = "\u25B1";
const fnof = "\u0192";
const Fopf = "\u{1D53D}";
const fopf = "\u{1D557}";
const forall = "\u2200";
const ForAll = "\u2200";
const fork = "\u22D4";
const forkv = "\u2AD9";
const Fouriertrf = "\u2131";
const fpartint = "\u2A0D";
const frac12$1 = "\xBD";
const frac13 = "\u2153";
const frac14$1 = "\xBC";
const frac15 = "\u2155";
const frac16 = "\u2159";
const frac18 = "\u215B";
const frac23 = "\u2154";
const frac25 = "\u2156";
const frac34$1 = "\xBE";
const frac35 = "\u2157";
const frac38 = "\u215C";
const frac45 = "\u2158";
const frac56 = "\u215A";
const frac58 = "\u215D";
const frac78 = "\u215E";
const frasl = "\u2044";
const frown = "\u2322";
const fscr = "\u{1D4BB}";
const Fscr = "\u2131";
const gacute = "\u01F5";
const Gamma = "\u0393";
const gamma = "\u03B3";
const Gammad = "\u03DC";
const gammad = "\u03DD";
const gap = "\u2A86";
const Gbreve = "\u011E";
const gbreve = "\u011F";
const Gcedil = "\u0122";
const Gcirc = "\u011C";
const gcirc = "\u011D";
const Gcy = "\u0413";
const gcy = "\u0433";
const Gdot = "\u0120";
const gdot = "\u0121";
const ge = "\u2265";
const gE = "\u2267";
const gEl = "\u2A8C";
const gel = "\u22DB";
const geq = "\u2265";
const geqq = "\u2267";
const geqslant = "\u2A7E";
const gescc = "\u2AA9";
const ges = "\u2A7E";
const gesdot = "\u2A80";
const gesdoto = "\u2A82";
const gesdotol = "\u2A84";
const gesl = "\u22DB\uFE00";
const gesles = "\u2A94";
const Gfr = "\u{1D50A}";
const gfr = "\u{1D524}";
const gg = "\u226B";
const Gg = "\u22D9";
const ggg = "\u22D9";
const gimel = "\u2137";
const GJcy = "\u0403";
const gjcy = "\u0453";
const gla = "\u2AA5";
const gl = "\u2277";
const glE = "\u2A92";
const glj = "\u2AA4";
const gnap = "\u2A8A";
const gnapprox = "\u2A8A";
const gne = "\u2A88";
const gnE = "\u2269";
const gneq = "\u2A88";
const gneqq = "\u2269";
const gnsim = "\u22E7";
const Gopf = "\u{1D53E}";
const gopf = "\u{1D558}";
const grave = "`";
const GreaterEqual = "\u2265";
const GreaterEqualLess = "\u22DB";
const GreaterFullEqual = "\u2267";
const GreaterGreater = "\u2AA2";
const GreaterLess = "\u2277";
const GreaterSlantEqual = "\u2A7E";
const GreaterTilde = "\u2273";
const Gscr = "\u{1D4A2}";
const gscr = "\u210A";
const gsim = "\u2273";
const gsime = "\u2A8E";
const gsiml = "\u2A90";
const gtcc = "\u2AA7";
const gtcir = "\u2A7A";
const gt$2 = ">";
const GT$1 = ">";
const Gt = "\u226B";
const gtdot = "\u22D7";
const gtlPar = "\u2995";
const gtquest = "\u2A7C";
const gtrapprox = "\u2A86";
const gtrarr = "\u2978";
const gtrdot = "\u22D7";
const gtreqless = "\u22DB";
const gtreqqless = "\u2A8C";
const gtrless = "\u2277";
const gtrsim = "\u2273";
const gvertneqq = "\u2269\uFE00";
const gvnE = "\u2269\uFE00";
const Hacek = "\u02C7";
const hairsp = "\u200A";
const half = "\xBD";
const hamilt = "\u210B";
const HARDcy = "\u042A";
const hardcy = "\u044A";
const harrcir = "\u2948";
const harr = "\u2194";
const hArr = "\u21D4";
const harrw = "\u21AD";
const Hat = "^";
const hbar = "\u210F";
const Hcirc = "\u0124";
const hcirc = "\u0125";
const hearts = "\u2665";
const heartsuit = "\u2665";
const hellip = "\u2026";
const hercon = "\u22B9";
const hfr = "\u{1D525}";
const Hfr = "\u210C";
const HilbertSpace = "\u210B";
const hksearow = "\u2925";
const hkswarow = "\u2926";
const hoarr = "\u21FF";
const homtht = "\u223B";
const hookleftarrow = "\u21A9";
const hookrightarrow = "\u21AA";
const hopf = "\u{1D559}";
const Hopf = "\u210D";
const horbar = "\u2015";
const HorizontalLine = "\u2500";
const hscr = "\u{1D4BD}";
const Hscr = "\u210B";
const hslash = "\u210F";
const Hstrok = "\u0126";
const hstrok = "\u0127";
const HumpDownHump = "\u224E";
const HumpEqual = "\u224F";
const hybull = "\u2043";
const hyphen = "\u2010";
const Iacute$1 = "\xCD";
const iacute$1 = "\xED";
const ic = "\u2063";
const Icirc$1 = "\xCE";
const icirc$1 = "\xEE";
const Icy = "\u0418";
const icy = "\u0438";
const Idot = "\u0130";
const IEcy = "\u0415";
const iecy = "\u0435";
const iexcl$1 = "\xA1";
const iff = "\u21D4";
const ifr = "\u{1D526}";
const Ifr = "\u2111";
const Igrave$1 = "\xCC";
const igrave$1 = "\xEC";
const ii = "\u2148";
const iiiint = "\u2A0C";
const iiint = "\u222D";
const iinfin = "\u29DC";
const iiota = "\u2129";
const IJlig = "\u0132";
const ijlig = "\u0133";
const Imacr = "\u012A";
const imacr = "\u012B";
const image = "\u2111";
const ImaginaryI = "\u2148";
const imagline = "\u2110";
const imagpart = "\u2111";
const imath = "\u0131";
const Im = "\u2111";
const imof = "\u22B7";
const imped = "\u01B5";
const Implies = "\u21D2";
const incare = "\u2105";
const infin = "\u221E";
const infintie = "\u29DD";
const inodot = "\u0131";
const intcal = "\u22BA";
const int = "\u222B";
const Int = "\u222C";
const integers = "\u2124";
const Integral = "\u222B";
const intercal = "\u22BA";
const Intersection = "\u22C2";
const intlarhk = "\u2A17";
const intprod = "\u2A3C";
const InvisibleComma = "\u2063";
const InvisibleTimes = "\u2062";
const IOcy = "\u0401";
const iocy = "\u0451";
const Iogon = "\u012E";
const iogon = "\u012F";
const Iopf = "\u{1D540}";
const iopf = "\u{1D55A}";
const Iota = "\u0399";
const iota = "\u03B9";
const iprod = "\u2A3C";
const iquest$1 = "\xBF";
const iscr = "\u{1D4BE}";
const Iscr = "\u2110";
const isin = "\u2208";
const isindot = "\u22F5";
const isinE = "\u22F9";
const isins = "\u22F4";
const isinsv = "\u22F3";
const isinv = "\u2208";
const it = "\u2062";
const Itilde = "\u0128";
const itilde = "\u0129";
const Iukcy = "\u0406";
const iukcy = "\u0456";
const Iuml$1 = "\xCF";
const iuml$1 = "\xEF";
const Jcirc = "\u0134";
const jcirc = "\u0135";
const Jcy = "\u0419";
const jcy = "\u0439";
const Jfr = "\u{1D50D}";
const jfr = "\u{1D527}";
const jmath = "\u0237";
const Jopf = "\u{1D541}";
const jopf = "\u{1D55B}";
const Jscr = "\u{1D4A5}";
const jscr = "\u{1D4BF}";
const Jsercy = "\u0408";
const jsercy = "\u0458";
const Jukcy = "\u0404";
const jukcy = "\u0454";
const Kappa = "\u039A";
const kappa = "\u03BA";
const kappav = "\u03F0";
const Kcedil = "\u0136";
const kcedil = "\u0137";
const Kcy = "\u041A";
const kcy = "\u043A";
const Kfr = "\u{1D50E}";
const kfr = "\u{1D528}";
const kgreen = "\u0138";
const KHcy = "\u0425";
const khcy = "\u0445";
const KJcy = "\u040C";
const kjcy = "\u045C";
const Kopf = "\u{1D542}";
const kopf = "\u{1D55C}";
const Kscr = "\u{1D4A6}";
const kscr = "\u{1D4C0}";
const lAarr = "\u21DA";
const Lacute = "\u0139";
const lacute = "\u013A";
const laemptyv = "\u29B4";
const lagran = "\u2112";
const Lambda = "\u039B";
const lambda = "\u03BB";
const lang = "\u27E8";
const Lang = "\u27EA";
const langd = "\u2991";
const langle = "\u27E8";
const lap = "\u2A85";
const Laplacetrf = "\u2112";
const laquo$1 = "\xAB";
const larrb = "\u21E4";
const larrbfs = "\u291F";
const larr = "\u2190";
const Larr = "\u219E";
const lArr = "\u21D0";
const larrfs = "\u291D";
const larrhk = "\u21A9";
const larrlp = "\u21AB";
const larrpl = "\u2939";
const larrsim = "\u2973";
const larrtl = "\u21A2";
const latail = "\u2919";
const lAtail = "\u291B";
const lat = "\u2AAB";
const late = "\u2AAD";
const lates = "\u2AAD\uFE00";
const lbarr = "\u290C";
const lBarr = "\u290E";
const lbbrk = "\u2772";
const lbrace = "{";
const lbrack = "[";
const lbrke = "\u298B";
const lbrksld = "\u298F";
const lbrkslu = "\u298D";
const Lcaron = "\u013D";
const lcaron = "\u013E";
const Lcedil = "\u013B";
const lcedil = "\u013C";
const lceil = "\u2308";
const lcub = "{";
const Lcy = "\u041B";
const lcy = "\u043B";
const ldca = "\u2936";
const ldquo = "\u201C";
const ldquor = "\u201E";
const ldrdhar = "\u2967";
const ldrushar = "\u294B";
const ldsh = "\u21B2";
const le = "\u2264";
const lE = "\u2266";
const LeftAngleBracket = "\u27E8";
const LeftArrowBar = "\u21E4";
const leftarrow = "\u2190";
const LeftArrow = "\u2190";
const Leftarrow = "\u21D0";
const LeftArrowRightArrow = "\u21C6";
const leftarrowtail = "\u21A2";
const LeftCeiling = "\u2308";
const LeftDoubleBracket = "\u27E6";
const LeftDownTeeVector = "\u2961";
const LeftDownVectorBar = "\u2959";
const LeftDownVector = "\u21C3";
const LeftFloor = "\u230A";
const leftharpoondown = "\u21BD";
const leftharpoonup = "\u21BC";
const leftleftarrows = "\u21C7";
const leftrightarrow = "\u2194";
const LeftRightArrow = "\u2194";
const Leftrightarrow = "\u21D4";
const leftrightarrows = "\u21C6";
const leftrightharpoons = "\u21CB";
const leftrightsquigarrow = "\u21AD";
const LeftRightVector = "\u294E";
const LeftTeeArrow = "\u21A4";
const LeftTee = "\u22A3";
const LeftTeeVector = "\u295A";
const leftthreetimes = "\u22CB";
const LeftTriangleBar = "\u29CF";
const LeftTriangle = "\u22B2";
const LeftTriangleEqual = "\u22B4";
const LeftUpDownVector = "\u2951";
const LeftUpTeeVector = "\u2960";
const LeftUpVectorBar = "\u2958";
const LeftUpVector = "\u21BF";
const LeftVectorBar = "\u2952";
const LeftVector = "\u21BC";
const lEg = "\u2A8B";
const leg = "\u22DA";
const leq = "\u2264";
const leqq = "\u2266";
const leqslant = "\u2A7D";
const lescc = "\u2AA8";
const les = "\u2A7D";
const lesdot = "\u2A7F";
const lesdoto = "\u2A81";
const lesdotor = "\u2A83";
const lesg = "\u22DA\uFE00";
const lesges = "\u2A93";
const lessapprox = "\u2A85";
const lessdot = "\u22D6";
const lesseqgtr = "\u22DA";
const lesseqqgtr = "\u2A8B";
const LessEqualGreater = "\u22DA";
const LessFullEqual = "\u2266";
const LessGreater = "\u2276";
const lessgtr = "\u2276";
const LessLess = "\u2AA1";
const lesssim = "\u2272";
const LessSlantEqual = "\u2A7D";
const LessTilde = "\u2272";
const lfisht = "\u297C";
const lfloor = "\u230A";
const Lfr = "\u{1D50F}";
const lfr = "\u{1D529}";
const lg = "\u2276";
const lgE = "\u2A91";
const lHar = "\u2962";
const lhard = "\u21BD";
const lharu = "\u21BC";
const lharul = "\u296A";
const lhblk = "\u2584";
const LJcy = "\u0409";
const ljcy = "\u0459";
const llarr = "\u21C7";
const ll = "\u226A";
const Ll = "\u22D8";
const llcorner = "\u231E";
const Lleftarrow = "\u21DA";
const llhard = "\u296B";
const lltri = "\u25FA";
const Lmidot = "\u013F";
const lmidot = "\u0140";
const lmoustache = "\u23B0";
const lmoust = "\u23B0";
const lnap = "\u2A89";
const lnapprox = "\u2A89";
const lne = "\u2A87";
const lnE = "\u2268";
const lneq = "\u2A87";
const lneqq = "\u2268";
const lnsim = "\u22E6";
const loang = "\u27EC";
const loarr = "\u21FD";
const lobrk = "\u27E6";
const longleftarrow = "\u27F5";
const LongLeftArrow = "\u27F5";
const Longleftarrow = "\u27F8";
const longleftrightarrow = "\u27F7";
const LongLeftRightArrow = "\u27F7";
const Longleftrightarrow = "\u27FA";
const longmapsto = "\u27FC";
const longrightarrow = "\u27F6";
const LongRightArrow = "\u27F6";
const Longrightarrow = "\u27F9";
const looparrowleft = "\u21AB";
const looparrowright = "\u21AC";
const lopar = "\u2985";
const Lopf = "\u{1D543}";
const lopf = "\u{1D55D}";
const loplus = "\u2A2D";
const lotimes = "\u2A34";
const lowast = "\u2217";
const lowbar = "_";
const LowerLeftArrow = "\u2199";
const LowerRightArrow = "\u2198";
const loz = "\u25CA";
const lozenge = "\u25CA";
const lozf = "\u29EB";
const lpar = "(";
const lparlt = "\u2993";
const lrarr = "\u21C6";
const lrcorner = "\u231F";
const lrhar = "\u21CB";
const lrhard = "\u296D";
const lrm = "\u200E";
const lrtri = "\u22BF";
const lsaquo = "\u2039";
const lscr = "\u{1D4C1}";
const Lscr = "\u2112";
const lsh = "\u21B0";
const Lsh = "\u21B0";
const lsim = "\u2272";
const lsime = "\u2A8D";
const lsimg = "\u2A8F";
const lsqb = "[";
const lsquo = "\u2018";
const lsquor = "\u201A";
const Lstrok = "\u0141";
const lstrok = "\u0142";
const ltcc = "\u2AA6";
const ltcir = "\u2A79";
const lt$2 = "<";
const LT$1 = "<";
const Lt = "\u226A";
const ltdot = "\u22D6";
const lthree = "\u22CB";
const ltimes = "\u22C9";
const ltlarr = "\u2976";
const ltquest = "\u2A7B";
const ltri = "\u25C3";
const ltrie = "\u22B4";
const ltrif = "\u25C2";
const ltrPar = "\u2996";
const lurdshar = "\u294A";
const luruhar = "\u2966";
const lvertneqq = "\u2268\uFE00";
const lvnE = "\u2268\uFE00";
const macr$1 = "\xAF";
const male = "\u2642";
const malt = "\u2720";
const maltese = "\u2720";
const map = "\u21A6";
const mapsto = "\u21A6";
const mapstodown = "\u21A7";
const mapstoleft = "\u21A4";
const mapstoup = "\u21A5";
const marker = "\u25AE";
const mcomma = "\u2A29";
const Mcy = "\u041C";
const mcy = "\u043C";
const mdash = "\u2014";
const mDDot = "\u223A";
const measuredangle = "\u2221";
const MediumSpace = "\u205F";
const Mellintrf = "\u2133";
const Mfr = "\u{1D510}";
const mfr = "\u{1D52A}";
const mho = "\u2127";
const micro$1 = "\xB5";
const midast = "*";
const midcir = "\u2AF0";
const mid = "\u2223";
const middot$1 = "\xB7";
const minusb = "\u229F";
const minus = "\u2212";
const minusd = "\u2238";
const minusdu = "\u2A2A";
const MinusPlus = "\u2213";
const mlcp = "\u2ADB";
const mldr = "\u2026";
const mnplus = "\u2213";
const models = "\u22A7";
const Mopf = "\u{1D544}";
const mopf = "\u{1D55E}";
const mp = "\u2213";
const mscr = "\u{1D4C2}";
const Mscr = "\u2133";
const mstpos = "\u223E";
const Mu = "\u039C";
const mu = "\u03BC";
const multimap = "\u22B8";
const mumap = "\u22B8";
const nabla = "\u2207";
const Nacute = "\u0143";
const nacute = "\u0144";
const nang = "\u2220\u20D2";
const nap = "\u2249";
const napE = "\u2A70\u0338";
const napid = "\u224B\u0338";
const napos = "\u0149";
const napprox = "\u2249";
const natural = "\u266E";
const naturals = "\u2115";
const natur = "\u266E";
const nbsp$1 = "\xA0";
const nbump = "\u224E\u0338";
const nbumpe = "\u224F\u0338";
const ncap = "\u2A43";
const Ncaron = "\u0147";
const ncaron = "\u0148";
const Ncedil = "\u0145";
const ncedil = "\u0146";
const ncong = "\u2247";
const ncongdot = "\u2A6D\u0338";
const ncup = "\u2A42";
const Ncy = "\u041D";
const ncy = "\u043D";
const ndash = "\u2013";
const nearhk = "\u2924";
const nearr = "\u2197";
const neArr = "\u21D7";
const nearrow = "\u2197";
const ne = "\u2260";
const nedot = "\u2250\u0338";
const NegativeMediumSpace = "\u200B";
const NegativeThickSpace = "\u200B";
const NegativeThinSpace = "\u200B";
const NegativeVeryThinSpace = "\u200B";
const nequiv = "\u2262";
const nesear = "\u2928";
const nesim = "\u2242\u0338";
const NestedGreaterGreater = "\u226B";
const NestedLessLess = "\u226A";
const NewLine = "\n";
const nexist = "\u2204";
const nexists = "\u2204";
const Nfr = "\u{1D511}";
const nfr = "\u{1D52B}";
const ngE = "\u2267\u0338";
const nge = "\u2271";
const ngeq = "\u2271";
const ngeqq = "\u2267\u0338";
const ngeqslant = "\u2A7E\u0338";
const nges = "\u2A7E\u0338";
const nGg = "\u22D9\u0338";
const ngsim = "\u2275";
const nGt = "\u226B\u20D2";
const ngt = "\u226F";
const ngtr = "\u226F";
const nGtv = "\u226B\u0338";
const nharr = "\u21AE";
const nhArr = "\u21CE";
const nhpar = "\u2AF2";
const ni = "\u220B";
const nis = "\u22FC";
const nisd = "\u22FA";
const niv = "\u220B";
const NJcy = "\u040A";
const njcy = "\u045A";
const nlarr = "\u219A";
const nlArr = "\u21CD";
const nldr = "\u2025";
const nlE = "\u2266\u0338";
const nle = "\u2270";
const nleftarrow = "\u219A";
const nLeftarrow = "\u21CD";
const nleftrightarrow = "\u21AE";
const nLeftrightarrow = "\u21CE";
const nleq = "\u2270";
const nleqq = "\u2266\u0338";
const nleqslant = "\u2A7D\u0338";
const nles = "\u2A7D\u0338";
const nless = "\u226E";
const nLl = "\u22D8\u0338";
const nlsim = "\u2274";
const nLt = "\u226A\u20D2";
const nlt = "\u226E";
const nltri = "\u22EA";
const nltrie = "\u22EC";
const nLtv = "\u226A\u0338";
const nmid = "\u2224";
const NoBreak = "\u2060";
const NonBreakingSpace = "\xA0";
const nopf = "\u{1D55F}";
const Nopf = "\u2115";
const Not = "\u2AEC";
const not$1 = "\xAC";
const NotCongruent = "\u2262";
const NotCupCap = "\u226D";
const NotDoubleVerticalBar = "\u2226";
const NotElement = "\u2209";
const NotEqual = "\u2260";
const NotEqualTilde = "\u2242\u0338";
const NotExists = "\u2204";
const NotGreater = "\u226F";
const NotGreaterEqual = "\u2271";
const NotGreaterFullEqual = "\u2267\u0338";
const NotGreaterGreater = "\u226B\u0338";
const NotGreaterLess = "\u2279";
const NotGreaterSlantEqual = "\u2A7E\u0338";
const NotGreaterTilde = "\u2275";
const NotHumpDownHump = "\u224E\u0338";
const NotHumpEqual = "\u224F\u0338";
const notin = "\u2209";
const notindot = "\u22F5\u0338";
const notinE = "\u22F9\u0338";
const notinva = "\u2209";
const notinvb = "\u22F7";
const notinvc = "\u22F6";
const NotLeftTriangleBar = "\u29CF\u0338";
const NotLeftTriangle = "\u22EA";
const NotLeftTriangleEqual = "\u22EC";
const NotLess = "\u226E";
const NotLessEqual = "\u2270";
const NotLessGreater = "\u2278";
const NotLessLess = "\u226A\u0338";
const NotLessSlantEqual = "\u2A7D\u0338";
const NotLessTilde = "\u2274";
const NotNestedGreaterGreater = "\u2AA2\u0338";
const NotNestedLessLess = "\u2AA1\u0338";
const notni = "\u220C";
const notniva = "\u220C";
const notnivb = "\u22FE";
const notnivc = "\u22FD";
const NotPrecedes = "\u2280";
const NotPrecedesEqual = "\u2AAF\u0338";
const NotPrecedesSlantEqual = "\u22E0";
const NotReverseElement = "\u220C";
const NotRightTriangleBar = "\u29D0\u0338";
const NotRightTriangle = "\u22EB";
const NotRightTriangleEqual = "\u22ED";
const NotSquareSubset = "\u228F\u0338";
const NotSquareSubsetEqual = "\u22E2";
const NotSquareSuperset = "\u2290\u0338";
const NotSquareSupersetEqual = "\u22E3";
const NotSubset = "\u2282\u20D2";
const NotSubsetEqual = "\u2288";
const NotSucceeds = "\u2281";
const NotSucceedsEqual = "\u2AB0\u0338";
const NotSucceedsSlantEqual = "\u22E1";
const NotSucceedsTilde = "\u227F\u0338";
const NotSuperset = "\u2283\u20D2";
const NotSupersetEqual = "\u2289";
const NotTilde = "\u2241";
const NotTildeEqual = "\u2244";
const NotTildeFullEqual = "\u2247";
const NotTildeTilde = "\u2249";
const NotVerticalBar = "\u2224";
const nparallel = "\u2226";
const npar = "\u2226";
const nparsl = "\u2AFD\u20E5";
const npart = "\u2202\u0338";
const npolint = "\u2A14";
const npr = "\u2280";
const nprcue = "\u22E0";
const nprec = "\u2280";
const npreceq = "\u2AAF\u0338";
const npre = "\u2AAF\u0338";
const nrarrc = "\u2933\u0338";
const nrarr = "\u219B";
const nrArr = "\u21CF";
const nrarrw = "\u219D\u0338";
const nrightarrow = "\u219B";
const nRightarrow = "\u21CF";
const nrtri = "\u22EB";
const nrtrie = "\u22ED";
const nsc = "\u2281";
const nsccue = "\u22E1";
const nsce = "\u2AB0\u0338";
const Nscr = "\u{1D4A9}";
const nscr = "\u{1D4C3}";
const nshortmid = "\u2224";
const nshortparallel = "\u2226";
const nsim = "\u2241";
const nsime = "\u2244";
const nsimeq = "\u2244";
const nsmid = "\u2224";
const nspar = "\u2226";
const nsqsube = "\u22E2";
const nsqsupe = "\u22E3";
const nsub = "\u2284";
const nsubE = "\u2AC5\u0338";
const nsube = "\u2288";
const nsubset = "\u2282\u20D2";
const nsubseteq = "\u2288";
const nsubseteqq = "\u2AC5\u0338";
const nsucc = "\u2281";
const nsucceq = "\u2AB0\u0338";
const nsup = "\u2285";
const nsupE = "\u2AC6\u0338";
const nsupe = "\u2289";
const nsupset = "\u2283\u20D2";
const nsupseteq = "\u2289";
const nsupseteqq = "\u2AC6\u0338";
const ntgl = "\u2279";
const Ntilde$1 = "\xD1";
const ntilde$1 = "\xF1";
const ntlg = "\u2278";
const ntriangleleft = "\u22EA";
const ntrianglelefteq = "\u22EC";
const ntriangleright = "\u22EB";
const ntrianglerighteq = "\u22ED";
const Nu = "\u039D";
const nu = "\u03BD";
const num = "#";
const numero = "\u2116";
const numsp = "\u2007";
const nvap = "\u224D\u20D2";
const nvdash = "\u22AC";
const nvDash = "\u22AD";
const nVdash = "\u22AE";
const nVDash = "\u22AF";
const nvge = "\u2265\u20D2";
const nvgt = ">\u20D2";
const nvHarr = "\u2904";
const nvinfin = "\u29DE";
const nvlArr = "\u2902";
const nvle = "\u2264\u20D2";
const nvlt = "<\u20D2";
const nvltrie = "\u22B4\u20D2";
const nvrArr = "\u2903";
const nvrtrie = "\u22B5\u20D2";
const nvsim = "\u223C\u20D2";
const nwarhk = "\u2923";
const nwarr = "\u2196";
const nwArr = "\u21D6";
const nwarrow = "\u2196";
const nwnear = "\u2927";
const Oacute$1 = "\xD3";
const oacute$1 = "\xF3";
const oast = "\u229B";
const Ocirc$1 = "\xD4";
const ocirc$1 = "\xF4";
const ocir = "\u229A";
const Ocy = "\u041E";
const ocy = "\u043E";
const odash = "\u229D";
const Odblac = "\u0150";
const odblac = "\u0151";
const odiv = "\u2A38";
const odot = "\u2299";
const odsold = "\u29BC";
const OElig = "\u0152";
const oelig = "\u0153";
const ofcir = "\u29BF";
const Ofr = "\u{1D512}";
const ofr = "\u{1D52C}";
const ogon = "\u02DB";
const Ograve$1 = "\xD2";
const ograve$1 = "\xF2";
const ogt = "\u29C1";
const ohbar = "\u29B5";
const ohm = "\u03A9";
const oint = "\u222E";
const olarr = "\u21BA";
const olcir = "\u29BE";
const olcross = "\u29BB";
const oline = "\u203E";
const olt = "\u29C0";
const Omacr = "\u014C";
const omacr = "\u014D";
const Omega = "\u03A9";
const omega = "\u03C9";
const Omicron = "\u039F";
const omicron = "\u03BF";
const omid = "\u29B6";
const ominus = "\u2296";
const Oopf = "\u{1D546}";
const oopf = "\u{1D560}";
const opar = "\u29B7";
const OpenCurlyDoubleQuote = "\u201C";
const OpenCurlyQuote = "\u2018";
const operp = "\u29B9";
const oplus = "\u2295";
const orarr = "\u21BB";
const Or = "\u2A54";
const or = "\u2228";
const ord = "\u2A5D";
const order = "\u2134";
const orderof = "\u2134";
const ordf$1 = "\xAA";
const ordm$1 = "\xBA";
const origof = "\u22B6";
const oror = "\u2A56";
const orslope = "\u2A57";
const orv = "\u2A5B";
const oS = "\u24C8";
const Oscr = "\u{1D4AA}";
const oscr = "\u2134";
const Oslash$1 = "\xD8";
const oslash$1 = "\xF8";
const osol = "\u2298";
const Otilde$1 = "\xD5";
const otilde$1 = "\xF5";
const otimesas = "\u2A36";
const Otimes = "\u2A37";
const otimes = "\u2297";
const Ouml$1 = "\xD6";
const ouml$1 = "\xF6";
const ovbar = "\u233D";
const OverBar = "\u203E";
const OverBrace = "\u23DE";
const OverBracket = "\u23B4";
const OverParenthesis = "\u23DC";
const para$1 = "\xB6";
const parallel = "\u2225";
const par = "\u2225";
const parsim = "\u2AF3";
const parsl = "\u2AFD";
const part = "\u2202";
const PartialD = "\u2202";
const Pcy = "\u041F";
const pcy = "\u043F";
const percnt = "%";
const period = ".";
const permil = "\u2030";
const perp = "\u22A5";
const pertenk = "\u2031";
const Pfr = "\u{1D513}";
const pfr = "\u{1D52D}";
const Phi = "\u03A6";
const phi = "\u03C6";
const phiv = "\u03D5";
const phmmat = "\u2133";
const phone = "\u260E";
const Pi = "\u03A0";
const pi = "\u03C0";
const pitchfork = "\u22D4";
const piv = "\u03D6";
const planck = "\u210F";
const planckh = "\u210E";
const plankv = "\u210F";
const plusacir = "\u2A23";
const plusb = "\u229E";
const pluscir = "\u2A22";
const plus = "+";
const plusdo = "\u2214";
const plusdu = "\u2A25";
const pluse = "\u2A72";
const PlusMinus = "\xB1";
const plusmn$1 = "\xB1";
const plussim = "\u2A26";
const plustwo = "\u2A27";
const pm = "\xB1";
const Poincareplane = "\u210C";
const pointint = "\u2A15";
const popf = "\u{1D561}";
const Popf = "\u2119";
const pound$1 = "\xA3";
const prap = "\u2AB7";
const Pr = "\u2ABB";
const pr = "\u227A";
const prcue = "\u227C";
const precapprox = "\u2AB7";
const prec = "\u227A";
const preccurlyeq = "\u227C";
const Precedes = "\u227A";
const PrecedesEqual = "\u2AAF";
const PrecedesSlantEqual = "\u227C";
const PrecedesTilde = "\u227E";
const preceq = "\u2AAF";
const precnapprox = "\u2AB9";
const precneqq = "\u2AB5";
const precnsim = "\u22E8";
const pre = "\u2AAF";
const prE = "\u2AB3";
const precsim = "\u227E";
const prime = "\u2032";
const Prime = "\u2033";
const primes = "\u2119";
const prnap = "\u2AB9";
const prnE = "\u2AB5";
const prnsim = "\u22E8";
const prod = "\u220F";
const Product = "\u220F";
const profalar = "\u232E";
const profline = "\u2312";
const profsurf = "\u2313";
const prop = "\u221D";
const Proportional = "\u221D";
const Proportion = "\u2237";
const propto = "\u221D";
const prsim = "\u227E";
const prurel = "\u22B0";
const Pscr = "\u{1D4AB}";
const pscr = "\u{1D4C5}";
const Psi = "\u03A8";
const psi = "\u03C8";
const puncsp = "\u2008";
const Qfr = "\u{1D514}";
const qfr = "\u{1D52E}";
const qint = "\u2A0C";
const qopf = "\u{1D562}";
const Qopf = "\u211A";
const qprime = "\u2057";
const Qscr = "\u{1D4AC}";
const qscr = "\u{1D4C6}";
const quaternions = "\u210D";
const quatint = "\u2A16";
const quest = "?";
const questeq = "\u225F";
const quot$2 = '"';
const QUOT$1 = '"';
const rAarr = "\u21DB";
const race = "\u223D\u0331";
const Racute = "\u0154";
const racute = "\u0155";
const radic = "\u221A";
const raemptyv = "\u29B3";
const rang = "\u27E9";
const Rang = "\u27EB";
const rangd = "\u2992";
const range$1 = "\u29A5";
const rangle = "\u27E9";
const raquo$1 = "\xBB";
const rarrap = "\u2975";
const rarrb = "\u21E5";
const rarrbfs = "\u2920";
const rarrc = "\u2933";
const rarr = "\u2192";
const Rarr = "\u21A0";
const rArr = "\u21D2";
const rarrfs = "\u291E";
const rarrhk = "\u21AA";
const rarrlp = "\u21AC";
const rarrpl = "\u2945";
const rarrsim = "\u2974";
const Rarrtl = "\u2916";
const rarrtl = "\u21A3";
const rarrw = "\u219D";
const ratail = "\u291A";
const rAtail = "\u291C";
const ratio = "\u2236";
const rationals = "\u211A";
const rbarr = "\u290D";
const rBarr = "\u290F";
const RBarr = "\u2910";
const rbbrk = "\u2773";
const rbrace = "}";
const rbrack = "]";
const rbrke = "\u298C";
const rbrksld = "\u298E";
const rbrkslu = "\u2990";
const Rcaron = "\u0158";
const rcaron = "\u0159";
const Rcedil = "\u0156";
const rcedil = "\u0157";
const rceil = "\u2309";
const rcub = "}";
const Rcy = "\u0420";
const rcy = "\u0440";
const rdca = "\u2937";
const rdldhar = "\u2969";
const rdquo = "\u201D";
const rdquor = "\u201D";
const rdsh = "\u21B3";
const real = "\u211C";
const realine = "\u211B";
const realpart = "\u211C";
const reals = "\u211D";
const Re = "\u211C";
const rect = "\u25AD";
const reg$1 = "\xAE";
const REG$1 = "\xAE";
const ReverseElement = "\u220B";
const ReverseEquilibrium = "\u21CB";
const ReverseUpEquilibrium = "\u296F";
const rfisht = "\u297D";
const rfloor = "\u230B";
const rfr = "\u{1D52F}";
const Rfr = "\u211C";
const rHar = "\u2964";
const rhard = "\u21C1";
const rharu = "\u21C0";
const rharul = "\u296C";
const Rho = "\u03A1";
const rho = "\u03C1";
const rhov = "\u03F1";
const RightAngleBracket = "\u27E9";
const RightArrowBar = "\u21E5";
const rightarrow = "\u2192";
const RightArrow = "\u2192";
const Rightarrow = "\u21D2";
const RightArrowLeftArrow = "\u21C4";
const rightarrowtail = "\u21A3";
const RightCeiling = "\u2309";
const RightDoubleBracket = "\u27E7";
const RightDownTeeVector = "\u295D";
const RightDownVectorBar = "\u2955";
const RightDownVector = "\u21C2";
const RightFloor = "\u230B";
const rightharpoondown = "\u21C1";
const rightharpoonup = "\u21C0";
const rightleftarrows = "\u21C4";
const rightleftharpoons = "\u21CC";
const rightrightarrows = "\u21C9";
const rightsquigarrow = "\u219D";
const RightTeeArrow = "\u21A6";
const RightTee = "\u22A2";
const RightTeeVector = "\u295B";
const rightthreetimes = "\u22CC";
const RightTriangleBar = "\u29D0";
const RightTriangle = "\u22B3";
const RightTriangleEqual = "\u22B5";
const RightUpDownVector = "\u294F";
const RightUpTeeVector = "\u295C";
const RightUpVectorBar = "\u2954";
const RightUpVector = "\u21BE";
const RightVectorBar = "\u2953";
const RightVector = "\u21C0";
const ring = "\u02DA";
const risingdotseq = "\u2253";
const rlarr = "\u21C4";
const rlhar = "\u21CC";
const rlm = "\u200F";
const rmoustache = "\u23B1";
const rmoust = "\u23B1";
const rnmid = "\u2AEE";
const roang = "\u27ED";
const roarr = "\u21FE";
const robrk = "\u27E7";
const ropar = "\u2986";
const ropf = "\u{1D563}";
const Ropf = "\u211D";
const roplus = "\u2A2E";
const rotimes = "\u2A35";
const RoundImplies = "\u2970";
const rpar = ")";
const rpargt = "\u2994";
const rppolint = "\u2A12";
const rrarr = "\u21C9";
const Rrightarrow = "\u21DB";
const rsaquo = "\u203A";
const rscr = "\u{1D4C7}";
const Rscr = "\u211B";
const rsh = "\u21B1";
const Rsh = "\u21B1";
const rsqb = "]";
const rsquo = "\u2019";
const rsquor = "\u2019";
const rthree = "\u22CC";
const rtimes = "\u22CA";
const rtri = "\u25B9";
const rtrie = "\u22B5";
const rtrif = "\u25B8";
const rtriltri = "\u29CE";
const RuleDelayed = "\u29F4";
const ruluhar = "\u2968";
const rx = "\u211E";
const Sacute = "\u015A";
const sacute = "\u015B";
const sbquo = "\u201A";
const scap = "\u2AB8";
const Scaron = "\u0160";
const scaron = "\u0161";
const Sc = "\u2ABC";
const sc = "\u227B";
const sccue = "\u227D";
const sce = "\u2AB0";
const scE = "\u2AB4";
const Scedil = "\u015E";
const scedil = "\u015F";
const Scirc = "\u015C";
const scirc = "\u015D";
const scnap = "\u2ABA";
const scnE = "\u2AB6";
const scnsim = "\u22E9";
const scpolint = "\u2A13";
const scsim = "\u227F";
const Scy = "\u0421";
const scy = "\u0441";
const sdotb = "\u22A1";
const sdot = "\u22C5";
const sdote = "\u2A66";
const searhk = "\u2925";
const searr = "\u2198";
const seArr = "\u21D8";
const searrow = "\u2198";
const sect$1 = "\xA7";
const semi = ";";
const seswar = "\u2929";
const setminus = "\u2216";
const setmn = "\u2216";
const sext = "\u2736";
const Sfr = "\u{1D516}";
const sfr = "\u{1D530}";
const sfrown = "\u2322";
const sharp = "\u266F";
const SHCHcy = "\u0429";
const shchcy = "\u0449";
const SHcy = "\u0428";
const shcy = "\u0448";
const ShortDownArrow = "\u2193";
const ShortLeftArrow = "\u2190";
const shortmid = "\u2223";
const shortparallel = "\u2225";
const ShortRightArrow = "\u2192";
const ShortUpArrow = "\u2191";
const shy$1 = "\xAD";
const Sigma = "\u03A3";
const sigma = "\u03C3";
const sigmaf = "\u03C2";
const sigmav = "\u03C2";
const sim = "\u223C";
const simdot = "\u2A6A";
const sime = "\u2243";
const simeq = "\u2243";
const simg = "\u2A9E";
const simgE = "\u2AA0";
const siml = "\u2A9D";
const simlE = "\u2A9F";
const simne = "\u2246";
const simplus = "\u2A24";
const simrarr = "\u2972";
const slarr = "\u2190";
const SmallCircle = "\u2218";
const smallsetminus = "\u2216";
const smashp = "\u2A33";
const smeparsl = "\u29E4";
const smid = "\u2223";
const smile = "\u2323";
const smt = "\u2AAA";
const smte = "\u2AAC";
const smtes = "\u2AAC\uFE00";
const SOFTcy = "\u042C";
const softcy = "\u044C";
const solbar = "\u233F";
const solb = "\u29C4";
const sol = "/";
const Sopf = "\u{1D54A}";
const sopf = "\u{1D564}";
const spades = "\u2660";
const spadesuit = "\u2660";
const spar = "\u2225";
const sqcap = "\u2293";
const sqcaps = "\u2293\uFE00";
const sqcup = "\u2294";
const sqcups = "\u2294\uFE00";
const Sqrt = "\u221A";
const sqsub = "\u228F";
const sqsube = "\u2291";
const sqsubset = "\u228F";
const sqsubseteq = "\u2291";
const sqsup = "\u2290";
const sqsupe = "\u2292";
const sqsupset = "\u2290";
const sqsupseteq = "\u2292";
const square = "\u25A1";
const Square = "\u25A1";
const SquareIntersection = "\u2293";
const SquareSubset = "\u228F";
const SquareSubsetEqual = "\u2291";
const SquareSuperset = "\u2290";
const SquareSupersetEqual = "\u2292";
const SquareUnion = "\u2294";
const squarf = "\u25AA";
const squ = "\u25A1";
const squf = "\u25AA";
const srarr = "\u2192";
const Sscr = "\u{1D4AE}";
const sscr = "\u{1D4C8}";
const ssetmn = "\u2216";
const ssmile = "\u2323";
const sstarf = "\u22C6";
const Star = "\u22C6";
const star = "\u2606";
const starf = "\u2605";
const straightepsilon = "\u03F5";
const straightphi = "\u03D5";
const strns = "\xAF";
const sub = "\u2282";
const Sub = "\u22D0";
const subdot = "\u2ABD";
const subE = "\u2AC5";
const sube = "\u2286";
const subedot = "\u2AC3";
const submult = "\u2AC1";
const subnE = "\u2ACB";
const subne = "\u228A";
const subplus = "\u2ABF";
const subrarr = "\u2979";
const subset = "\u2282";
const Subset = "\u22D0";
const subseteq = "\u2286";
const subseteqq = "\u2AC5";
const SubsetEqual = "\u2286";
const subsetneq = "\u228A";
const subsetneqq = "\u2ACB";
const subsim = "\u2AC7";
const subsub = "\u2AD5";
const subsup = "\u2AD3";
const succapprox = "\u2AB8";
const succ = "\u227B";
const succcurlyeq = "\u227D";
const Succeeds = "\u227B";
const SucceedsEqual = "\u2AB0";
const SucceedsSlantEqual = "\u227D";
const SucceedsTilde = "\u227F";
const succeq = "\u2AB0";
const succnapprox = "\u2ABA";
const succneqq = "\u2AB6";
const succnsim = "\u22E9";
const succsim = "\u227F";
const SuchThat = "\u220B";
const sum = "\u2211";
const Sum = "\u2211";
const sung = "\u266A";
const sup1$1 = "\xB9";
const sup2$1 = "\xB2";
const sup3$1 = "\xB3";
const sup = "\u2283";
const Sup = "\u22D1";
const supdot = "\u2ABE";
const supdsub = "\u2AD8";
const supE = "\u2AC6";
const supe = "\u2287";
const supedot = "\u2AC4";
const Superset = "\u2283";
const SupersetEqual = "\u2287";
const suphsol = "\u27C9";
const suphsub = "\u2AD7";
const suplarr = "\u297B";
const supmult = "\u2AC2";
const supnE = "\u2ACC";
const supne = "\u228B";
const supplus = "\u2AC0";
const supset = "\u2283";
const Supset = "\u22D1";
const supseteq = "\u2287";
const supseteqq = "\u2AC6";
const supsetneq = "\u228B";
const supsetneqq = "\u2ACC";
const supsim = "\u2AC8";
const supsub = "\u2AD4";
const supsup = "\u2AD6";
const swarhk = "\u2926";
const swarr = "\u2199";
const swArr = "\u21D9";
const swarrow = "\u2199";
const swnwar = "\u292A";
const szlig$1 = "\xDF";
const Tab = "	";
const target = "\u2316";
const Tau = "\u03A4";
const tau = "\u03C4";
const tbrk = "\u23B4";
const Tcaron = "\u0164";
const tcaron = "\u0165";
const Tcedil = "\u0162";
const tcedil = "\u0163";
const Tcy = "\u0422";
const tcy = "\u0442";
const tdot = "\u20DB";
const telrec = "\u2315";
const Tfr = "\u{1D517}";
const tfr = "\u{1D531}";
const there4 = "\u2234";
const therefore = "\u2234";
const Therefore = "\u2234";
const Theta = "\u0398";
const theta = "\u03B8";
const thetasym = "\u03D1";
const thetav = "\u03D1";
const thickapprox = "\u2248";
const thicksim = "\u223C";
const ThickSpace = "\u205F\u200A";
const ThinSpace = "\u2009";
const thinsp = "\u2009";
const thkap = "\u2248";
const thksim = "\u223C";
const THORN$1 = "\xDE";
const thorn$1 = "\xFE";
const tilde = "\u02DC";
const Tilde = "\u223C";
const TildeEqual = "\u2243";
const TildeFullEqual = "\u2245";
const TildeTilde = "\u2248";
const timesbar = "\u2A31";
const timesb = "\u22A0";
const times$1 = "\xD7";
const timesd = "\u2A30";
const tint = "\u222D";
const toea = "\u2928";
const topbot = "\u2336";
const topcir = "\u2AF1";
const top = "\u22A4";
const Topf = "\u{1D54B}";
const topf = "\u{1D565}";
const topfork = "\u2ADA";
const tosa = "\u2929";
const tprime = "\u2034";
const trade = "\u2122";
const TRADE = "\u2122";
const triangle = "\u25B5";
const triangledown = "\u25BF";
const triangleleft = "\u25C3";
const trianglelefteq = "\u22B4";
const triangleq = "\u225C";
const triangleright = "\u25B9";
const trianglerighteq = "\u22B5";
const tridot = "\u25EC";
const trie = "\u225C";
const triminus = "\u2A3A";
const TripleDot = "\u20DB";
const triplus = "\u2A39";
const trisb = "\u29CD";
const tritime = "\u2A3B";
const trpezium = "\u23E2";
const Tscr = "\u{1D4AF}";
const tscr = "\u{1D4C9}";
const TScy = "\u0426";
const tscy = "\u0446";
const TSHcy = "\u040B";
const tshcy = "\u045B";
const Tstrok = "\u0166";
const tstrok = "\u0167";
const twixt = "\u226C";
const twoheadleftarrow = "\u219E";
const twoheadrightarrow = "\u21A0";
const Uacute$1 = "\xDA";
const uacute$1 = "\xFA";
const uarr = "\u2191";
const Uarr = "\u219F";
const uArr = "\u21D1";
const Uarrocir = "\u2949";
const Ubrcy = "\u040E";
const ubrcy = "\u045E";
const Ubreve = "\u016C";
const ubreve = "\u016D";
const Ucirc$1 = "\xDB";
const ucirc$1 = "\xFB";
const Ucy = "\u0423";
const ucy = "\u0443";
const udarr = "\u21C5";
const Udblac = "\u0170";
const udblac = "\u0171";
const udhar = "\u296E";
const ufisht = "\u297E";
const Ufr = "\u{1D518}";
const ufr = "\u{1D532}";
const Ugrave$1 = "\xD9";
const ugrave$1 = "\xF9";
const uHar = "\u2963";
const uharl = "\u21BF";
const uharr = "\u21BE";
const uhblk = "\u2580";
const ulcorn = "\u231C";
const ulcorner = "\u231C";
const ulcrop = "\u230F";
const ultri = "\u25F8";
const Umacr = "\u016A";
const umacr = "\u016B";
const uml$1 = "\xA8";
const UnderBar = "_";
const UnderBrace = "\u23DF";
const UnderBracket = "\u23B5";
const UnderParenthesis = "\u23DD";
const Union = "\u22C3";
const UnionPlus = "\u228E";
const Uogon = "\u0172";
const uogon = "\u0173";
const Uopf = "\u{1D54C}";
const uopf = "\u{1D566}";
const UpArrowBar = "\u2912";
const uparrow = "\u2191";
const UpArrow = "\u2191";
const Uparrow = "\u21D1";
const UpArrowDownArrow = "\u21C5";
const updownarrow = "\u2195";
const UpDownArrow = "\u2195";
const Updownarrow = "\u21D5";
const UpEquilibrium = "\u296E";
const upharpoonleft = "\u21BF";
const upharpoonright = "\u21BE";
const uplus = "\u228E";
const UpperLeftArrow = "\u2196";
const UpperRightArrow = "\u2197";
const upsi = "\u03C5";
const Upsi = "\u03D2";
const upsih = "\u03D2";
const Upsilon = "\u03A5";
const upsilon = "\u03C5";
const UpTeeArrow = "\u21A5";
const UpTee = "\u22A5";
const upuparrows = "\u21C8";
const urcorn = "\u231D";
const urcorner = "\u231D";
const urcrop = "\u230E";
const Uring = "\u016E";
const uring = "\u016F";
const urtri = "\u25F9";
const Uscr = "\u{1D4B0}";
const uscr = "\u{1D4CA}";
const utdot = "\u22F0";
const Utilde = "\u0168";
const utilde = "\u0169";
const utri = "\u25B5";
const utrif = "\u25B4";
const uuarr = "\u21C8";
const Uuml$1 = "\xDC";
const uuml$1 = "\xFC";
const uwangle = "\u29A7";
const vangrt = "\u299C";
const varepsilon = "\u03F5";
const varkappa = "\u03F0";
const varnothing = "\u2205";
const varphi = "\u03D5";
const varpi = "\u03D6";
const varpropto = "\u221D";
const varr = "\u2195";
const vArr = "\u21D5";
const varrho = "\u03F1";
const varsigma = "\u03C2";
const varsubsetneq = "\u228A\uFE00";
const varsubsetneqq = "\u2ACB\uFE00";
const varsupsetneq = "\u228B\uFE00";
const varsupsetneqq = "\u2ACC\uFE00";
const vartheta = "\u03D1";
const vartriangleleft = "\u22B2";
const vartriangleright = "\u22B3";
const vBar = "\u2AE8";
const Vbar = "\u2AEB";
const vBarv = "\u2AE9";
const Vcy = "\u0412";
const vcy = "\u0432";
const vdash = "\u22A2";
const vDash = "\u22A8";
const Vdash = "\u22A9";
const VDash = "\u22AB";
const Vdashl = "\u2AE6";
const veebar = "\u22BB";
const vee = "\u2228";
const Vee = "\u22C1";
const veeeq = "\u225A";
const vellip = "\u22EE";
const verbar = "|";
const Verbar = "\u2016";
const vert = "|";
const Vert = "\u2016";
const VerticalBar = "\u2223";
const VerticalLine = "|";
const VerticalSeparator = "\u2758";
const VerticalTilde = "\u2240";
const VeryThinSpace = "\u200A";
const Vfr = "\u{1D519}";
const vfr = "\u{1D533}";
const vltri = "\u22B2";
const vnsub = "\u2282\u20D2";
const vnsup = "\u2283\u20D2";
const Vopf = "\u{1D54D}";
const vopf = "\u{1D567}";
const vprop = "\u221D";
const vrtri = "\u22B3";
const Vscr = "\u{1D4B1}";
const vscr = "\u{1D4CB}";
const vsubnE = "\u2ACB\uFE00";
const vsubne = "\u228A\uFE00";
const vsupnE = "\u2ACC\uFE00";
const vsupne = "\u228B\uFE00";
const Vvdash = "\u22AA";
const vzigzag = "\u299A";
const Wcirc = "\u0174";
const wcirc = "\u0175";
const wedbar = "\u2A5F";
const wedge = "\u2227";
const Wedge = "\u22C0";
const wedgeq = "\u2259";
const weierp = "\u2118";
const Wfr = "\u{1D51A}";
const wfr = "\u{1D534}";
const Wopf = "\u{1D54E}";
const wopf = "\u{1D568}";
const wp = "\u2118";
const wr = "\u2240";
const wreath = "\u2240";
const Wscr = "\u{1D4B2}";
const wscr = "\u{1D4CC}";
const xcap = "\u22C2";
const xcirc = "\u25EF";
const xcup = "\u22C3";
const xdtri = "\u25BD";
const Xfr = "\u{1D51B}";
const xfr = "\u{1D535}";
const xharr = "\u27F7";
const xhArr = "\u27FA";
const Xi = "\u039E";
const xi = "\u03BE";
const xlarr = "\u27F5";
const xlArr = "\u27F8";
const xmap = "\u27FC";
const xnis = "\u22FB";
const xodot = "\u2A00";
const Xopf = "\u{1D54F}";
const xopf = "\u{1D569}";
const xoplus = "\u2A01";
const xotime = "\u2A02";
const xrarr = "\u27F6";
const xrArr = "\u27F9";
const Xscr = "\u{1D4B3}";
const xscr = "\u{1D4CD}";
const xsqcup = "\u2A06";
const xuplus = "\u2A04";
const xutri = "\u25B3";
const xvee = "\u22C1";
const xwedge = "\u22C0";
const Yacute$1 = "\xDD";
const yacute$1 = "\xFD";
const YAcy = "\u042F";
const yacy = "\u044F";
const Ycirc = "\u0176";
const ycirc = "\u0177";
const Ycy = "\u042B";
const ycy = "\u044B";
const yen$1 = "\xA5";
const Yfr = "\u{1D51C}";
const yfr = "\u{1D536}";
const YIcy = "\u0407";
const yicy = "\u0457";
const Yopf = "\u{1D550}";
const yopf = "\u{1D56A}";
const Yscr = "\u{1D4B4}";
const yscr = "\u{1D4CE}";
const YUcy = "\u042E";
const yucy = "\u044E";
const yuml$1 = "\xFF";
const Yuml = "\u0178";
const Zacute = "\u0179";
const zacute = "\u017A";
const Zcaron = "\u017D";
const zcaron = "\u017E";
const Zcy = "\u0417";
const zcy = "\u0437";
const Zdot = "\u017B";
const zdot = "\u017C";
const zeetrf = "\u2128";
const ZeroWidthSpace = "\u200B";
const Zeta = "\u0396";
const zeta = "\u03B6";
const zfr = "\u{1D537}";
const Zfr = "\u2128";
const ZHcy = "\u0416";
const zhcy = "\u0436";
const zigrarr = "\u21DD";
const zopf = "\u{1D56B}";
const Zopf = "\u2124";
const Zscr = "\u{1D4B5}";
const zscr = "\u{1D4CF}";
const zwj = "\u200D";
const zwnj = "\u200C";
var require$$1$1 = {
  Aacute: Aacute$1,
  aacute: aacute$1,
  Abreve,
  abreve,
  ac,
  acd,
  acE,
  Acirc: Acirc$1,
  acirc: acirc$1,
  acute: acute$1,
  Acy,
  acy,
  AElig: AElig$1,
  aelig: aelig$1,
  af,
  Afr,
  afr,
  Agrave: Agrave$1,
  agrave: agrave$1,
  alefsym,
  aleph,
  Alpha,
  alpha,
  Amacr,
  amacr,
  amalg,
  amp: amp$2,
  AMP: AMP$1,
  andand,
  And,
  and,
  andd,
  andslope,
  andv,
  ang,
  ange,
  angle,
  angmsdaa,
  angmsdab,
  angmsdac,
  angmsdad,
  angmsdae,
  angmsdaf,
  angmsdag,
  angmsdah,
  angmsd,
  angrt,
  angrtvb,
  angrtvbd,
  angsph,
  angst,
  angzarr,
  Aogon,
  aogon,
  Aopf,
  aopf,
  apacir,
  ap,
  apE,
  ape,
  apid,
  apos: apos$1,
  ApplyFunction,
  approx,
  approxeq,
  Aring: Aring$1,
  aring: aring$1,
  Ascr,
  ascr,
  Assign,
  ast,
  asymp,
  asympeq,
  Atilde: Atilde$1,
  atilde: atilde$1,
  Auml: Auml$1,
  auml: auml$1,
  awconint,
  awint,
  backcong,
  backepsilon,
  backprime,
  backsim,
  backsimeq,
  Backslash,
  Barv,
  barvee,
  barwed,
  Barwed,
  barwedge,
  bbrk,
  bbrktbrk,
  bcong,
  Bcy,
  bcy,
  bdquo,
  becaus,
  because,
  Because,
  bemptyv,
  bepsi,
  bernou,
  Bernoullis,
  Beta,
  beta,
  beth,
  between,
  Bfr,
  bfr,
  bigcap,
  bigcirc,
  bigcup,
  bigodot,
  bigoplus,
  bigotimes,
  bigsqcup,
  bigstar,
  bigtriangledown,
  bigtriangleup,
  biguplus,
  bigvee,
  bigwedge,
  bkarow,
  blacklozenge,
  blacksquare,
  blacktriangle,
  blacktriangledown,
  blacktriangleleft,
  blacktriangleright,
  blank,
  blk12,
  blk14,
  blk34,
  block,
  bne,
  bnequiv,
  bNot,
  bnot,
  Bopf,
  bopf,
  bot,
  bottom,
  bowtie,
  boxbox,
  boxdl,
  boxdL,
  boxDl,
  boxDL,
  boxdr,
  boxdR,
  boxDr,
  boxDR,
  boxh,
  boxH,
  boxhd,
  boxHd,
  boxhD,
  boxHD,
  boxhu,
  boxHu,
  boxhU,
  boxHU,
  boxminus,
  boxplus,
  boxtimes,
  boxul,
  boxuL,
  boxUl,
  boxUL,
  boxur,
  boxuR,
  boxUr,
  boxUR,
  boxv,
  boxV,
  boxvh,
  boxvH,
  boxVh,
  boxVH,
  boxvl,
  boxvL,
  boxVl,
  boxVL,
  boxvr,
  boxvR,
  boxVr,
  boxVR,
  bprime,
  breve,
  Breve,
  brvbar: brvbar$1,
  bscr,
  Bscr,
  bsemi,
  bsim,
  bsime,
  bsolb,
  bsol,
  bsolhsub,
  bull,
  bullet,
  bump,
  bumpE,
  bumpe,
  Bumpeq,
  bumpeq,
  Cacute,
  cacute,
  capand,
  capbrcup,
  capcap,
  cap,
  Cap,
  capcup,
  capdot,
  CapitalDifferentialD,
  caps,
  caret,
  caron,
  Cayleys,
  ccaps,
  Ccaron,
  ccaron,
  Ccedil: Ccedil$1,
  ccedil: ccedil$1,
  Ccirc,
  ccirc,
  Cconint,
  ccups,
  ccupssm,
  Cdot,
  cdot,
  cedil: cedil$1,
  Cedilla,
  cemptyv,
  cent: cent$1,
  centerdot,
  CenterDot,
  cfr,
  Cfr,
  CHcy,
  chcy,
  check,
  checkmark,
  Chi,
  chi,
  circ,
  circeq,
  circlearrowleft,
  circlearrowright,
  circledast,
  circledcirc,
  circleddash,
  CircleDot,
  circledR,
  circledS,
  CircleMinus,
  CirclePlus,
  CircleTimes,
  cir,
  cirE,
  cire,
  cirfnint,
  cirmid,
  cirscir,
  ClockwiseContourIntegral,
  CloseCurlyDoubleQuote,
  CloseCurlyQuote,
  clubs,
  clubsuit,
  colon,
  Colon,
  Colone,
  colone,
  coloneq,
  comma,
  commat,
  comp,
  compfn,
  complement,
  complexes,
  cong,
  congdot,
  Congruent,
  conint,
  Conint,
  ContourIntegral,
  copf,
  Copf,
  coprod,
  Coproduct,
  copy: copy$1,
  COPY: COPY$1,
  copysr,
  CounterClockwiseContourIntegral,
  crarr,
  cross,
  Cross,
  Cscr,
  cscr,
  csub,
  csube,
  csup,
  csupe,
  ctdot,
  cudarrl,
  cudarrr,
  cuepr,
  cuesc,
  cularr,
  cularrp,
  cupbrcap,
  cupcap,
  CupCap,
  cup,
  Cup,
  cupcup,
  cupdot,
  cupor,
  cups,
  curarr,
  curarrm,
  curlyeqprec,
  curlyeqsucc,
  curlyvee,
  curlywedge,
  curren: curren$1,
  curvearrowleft,
  curvearrowright,
  cuvee,
  cuwed,
  cwconint,
  cwint,
  cylcty,
  dagger,
  Dagger,
  daleth,
  darr,
  Darr,
  dArr,
  dash,
  Dashv,
  dashv,
  dbkarow,
  dblac,
  Dcaron,
  dcaron,
  Dcy,
  dcy,
  ddagger,
  ddarr,
  DD,
  dd,
  DDotrahd,
  ddotseq,
  deg: deg$1,
  Del,
  Delta,
  delta,
  demptyv,
  dfisht,
  Dfr,
  dfr,
  dHar,
  dharl,
  dharr,
  DiacriticalAcute,
  DiacriticalDot,
  DiacriticalDoubleAcute,
  DiacriticalGrave,
  DiacriticalTilde,
  diam,
  diamond,
  Diamond,
  diamondsuit,
  diams,
  die,
  DifferentialD,
  digamma,
  disin,
  div,
  divide: divide$1,
  divideontimes,
  divonx,
  DJcy,
  djcy,
  dlcorn,
  dlcrop,
  dollar,
  Dopf,
  dopf,
  Dot,
  dot,
  DotDot,
  doteq,
  doteqdot,
  DotEqual,
  dotminus,
  dotplus,
  dotsquare,
  doublebarwedge,
  DoubleContourIntegral,
  DoubleDot,
  DoubleDownArrow,
  DoubleLeftArrow,
  DoubleLeftRightArrow,
  DoubleLeftTee,
  DoubleLongLeftArrow,
  DoubleLongLeftRightArrow,
  DoubleLongRightArrow,
  DoubleRightArrow,
  DoubleRightTee,
  DoubleUpArrow,
  DoubleUpDownArrow,
  DoubleVerticalBar,
  DownArrowBar,
  downarrow,
  DownArrow,
  Downarrow,
  DownArrowUpArrow,
  DownBreve,
  downdownarrows,
  downharpoonleft,
  downharpoonright,
  DownLeftRightVector,
  DownLeftTeeVector,
  DownLeftVectorBar,
  DownLeftVector,
  DownRightTeeVector,
  DownRightVectorBar,
  DownRightVector,
  DownTeeArrow,
  DownTee,
  drbkarow,
  drcorn,
  drcrop,
  Dscr,
  dscr,
  DScy,
  dscy,
  dsol,
  Dstrok,
  dstrok,
  dtdot,
  dtri,
  dtrif,
  duarr,
  duhar,
  dwangle,
  DZcy,
  dzcy,
  dzigrarr,
  Eacute: Eacute$1,
  eacute: eacute$1,
  easter,
  Ecaron,
  ecaron,
  Ecirc: Ecirc$1,
  ecirc: ecirc$1,
  ecir,
  ecolon,
  Ecy,
  ecy,
  eDDot,
  Edot,
  edot,
  eDot,
  ee,
  efDot,
  Efr,
  efr,
  eg,
  Egrave: Egrave$1,
  egrave: egrave$1,
  egs,
  egsdot,
  el,
  Element,
  elinters,
  ell,
  els,
  elsdot,
  Emacr,
  emacr,
  empty,
  emptyset,
  EmptySmallSquare,
  emptyv,
  EmptyVerySmallSquare,
  emsp13,
  emsp14,
  emsp,
  ENG,
  eng,
  ensp,
  Eogon,
  eogon,
  Eopf,
  eopf,
  epar,
  eparsl,
  eplus,
  epsi,
  Epsilon,
  epsilon,
  epsiv,
  eqcirc,
  eqcolon,
  eqsim,
  eqslantgtr,
  eqslantless,
  Equal,
  equals,
  EqualTilde,
  equest,
  Equilibrium,
  equiv,
  equivDD,
  eqvparsl,
  erarr,
  erDot,
  escr,
  Escr,
  esdot,
  Esim,
  esim,
  Eta,
  eta,
  ETH: ETH$1,
  eth: eth$1,
  Euml: Euml$1,
  euml: euml$1,
  euro,
  excl,
  exist,
  Exists,
  expectation,
  exponentiale,
  ExponentialE,
  fallingdotseq,
  Fcy,
  fcy,
  female,
  ffilig,
  fflig,
  ffllig,
  Ffr,
  ffr,
  filig,
  FilledSmallSquare,
  FilledVerySmallSquare,
  fjlig,
  flat,
  fllig,
  fltns,
  fnof,
  Fopf,
  fopf,
  forall,
  ForAll,
  fork,
  forkv,
  Fouriertrf,
  fpartint,
  frac12: frac12$1,
  frac13,
  frac14: frac14$1,
  frac15,
  frac16,
  frac18,
  frac23,
  frac25,
  frac34: frac34$1,
  frac35,
  frac38,
  frac45,
  frac56,
  frac58,
  frac78,
  frasl,
  frown,
  fscr,
  Fscr,
  gacute,
  Gamma,
  gamma,
  Gammad,
  gammad,
  gap,
  Gbreve,
  gbreve,
  Gcedil,
  Gcirc,
  gcirc,
  Gcy,
  gcy,
  Gdot,
  gdot,
  ge,
  gE,
  gEl,
  gel,
  geq,
  geqq,
  geqslant,
  gescc,
  ges,
  gesdot,
  gesdoto,
  gesdotol,
  gesl,
  gesles,
  Gfr,
  gfr,
  gg,
  Gg,
  ggg,
  gimel,
  GJcy,
  gjcy,
  gla,
  gl,
  glE,
  glj,
  gnap,
  gnapprox,
  gne,
  gnE,
  gneq,
  gneqq,
  gnsim,
  Gopf,
  gopf,
  grave,
  GreaterEqual,
  GreaterEqualLess,
  GreaterFullEqual,
  GreaterGreater,
  GreaterLess,
  GreaterSlantEqual,
  GreaterTilde,
  Gscr,
  gscr,
  gsim,
  gsime,
  gsiml,
  gtcc,
  gtcir,
  gt: gt$2,
  GT: GT$1,
  Gt,
  gtdot,
  gtlPar,
  gtquest,
  gtrapprox,
  gtrarr,
  gtrdot,
  gtreqless,
  gtreqqless,
  gtrless,
  gtrsim,
  gvertneqq,
  gvnE,
  Hacek,
  hairsp,
  half,
  hamilt,
  HARDcy,
  hardcy,
  harrcir,
  harr,
  hArr,
  harrw,
  Hat,
  hbar,
  Hcirc,
  hcirc,
  hearts,
  heartsuit,
  hellip,
  hercon,
  hfr,
  Hfr,
  HilbertSpace,
  hksearow,
  hkswarow,
  hoarr,
  homtht,
  hookleftarrow,
  hookrightarrow,
  hopf,
  Hopf,
  horbar,
  HorizontalLine,
  hscr,
  Hscr,
  hslash,
  Hstrok,
  hstrok,
  HumpDownHump,
  HumpEqual,
  hybull,
  hyphen,
  Iacute: Iacute$1,
  iacute: iacute$1,
  ic,
  Icirc: Icirc$1,
  icirc: icirc$1,
  Icy,
  icy,
  Idot,
  IEcy,
  iecy,
  iexcl: iexcl$1,
  iff,
  ifr,
  Ifr,
  Igrave: Igrave$1,
  igrave: igrave$1,
  ii,
  iiiint,
  iiint,
  iinfin,
  iiota,
  IJlig,
  ijlig,
  Imacr,
  imacr,
  image,
  ImaginaryI,
  imagline,
  imagpart,
  imath,
  Im,
  imof,
  imped,
  Implies,
  incare,
  "in": "\u2208",
  infin,
  infintie,
  inodot,
  intcal,
  int,
  Int,
  integers,
  Integral,
  intercal,
  Intersection,
  intlarhk,
  intprod,
  InvisibleComma,
  InvisibleTimes,
  IOcy,
  iocy,
  Iogon,
  iogon,
  Iopf,
  iopf,
  Iota,
  iota,
  iprod,
  iquest: iquest$1,
  iscr,
  Iscr,
  isin,
  isindot,
  isinE,
  isins,
  isinsv,
  isinv,
  it,
  Itilde,
  itilde,
  Iukcy,
  iukcy,
  Iuml: Iuml$1,
  iuml: iuml$1,
  Jcirc,
  jcirc,
  Jcy,
  jcy,
  Jfr,
  jfr,
  jmath,
  Jopf,
  jopf,
  Jscr,
  jscr,
  Jsercy,
  jsercy,
  Jukcy,
  jukcy,
  Kappa,
  kappa,
  kappav,
  Kcedil,
  kcedil,
  Kcy,
  kcy,
  Kfr,
  kfr,
  kgreen,
  KHcy,
  khcy,
  KJcy,
  kjcy,
  Kopf,
  kopf,
  Kscr,
  kscr,
  lAarr,
  Lacute,
  lacute,
  laemptyv,
  lagran,
  Lambda,
  lambda,
  lang,
  Lang,
  langd,
  langle,
  lap,
  Laplacetrf,
  laquo: laquo$1,
  larrb,
  larrbfs,
  larr,
  Larr,
  lArr,
  larrfs,
  larrhk,
  larrlp,
  larrpl,
  larrsim,
  larrtl,
  latail,
  lAtail,
  lat,
  late,
  lates,
  lbarr,
  lBarr,
  lbbrk,
  lbrace,
  lbrack,
  lbrke,
  lbrksld,
  lbrkslu,
  Lcaron,
  lcaron,
  Lcedil,
  lcedil,
  lceil,
  lcub,
  Lcy,
  lcy,
  ldca,
  ldquo,
  ldquor,
  ldrdhar,
  ldrushar,
  ldsh,
  le,
  lE,
  LeftAngleBracket,
  LeftArrowBar,
  leftarrow,
  LeftArrow,
  Leftarrow,
  LeftArrowRightArrow,
  leftarrowtail,
  LeftCeiling,
  LeftDoubleBracket,
  LeftDownTeeVector,
  LeftDownVectorBar,
  LeftDownVector,
  LeftFloor,
  leftharpoondown,
  leftharpoonup,
  leftleftarrows,
  leftrightarrow,
  LeftRightArrow,
  Leftrightarrow,
  leftrightarrows,
  leftrightharpoons,
  leftrightsquigarrow,
  LeftRightVector,
  LeftTeeArrow,
  LeftTee,
  LeftTeeVector,
  leftthreetimes,
  LeftTriangleBar,
  LeftTriangle,
  LeftTriangleEqual,
  LeftUpDownVector,
  LeftUpTeeVector,
  LeftUpVectorBar,
  LeftUpVector,
  LeftVectorBar,
  LeftVector,
  lEg,
  leg,
  leq,
  leqq,
  leqslant,
  lescc,
  les,
  lesdot,
  lesdoto,
  lesdotor,
  lesg,
  lesges,
  lessapprox,
  lessdot,
  lesseqgtr,
  lesseqqgtr,
  LessEqualGreater,
  LessFullEqual,
  LessGreater,
  lessgtr,
  LessLess,
  lesssim,
  LessSlantEqual,
  LessTilde,
  lfisht,
  lfloor,
  Lfr,
  lfr,
  lg,
  lgE,
  lHar,
  lhard,
  lharu,
  lharul,
  lhblk,
  LJcy,
  ljcy,
  llarr,
  ll,
  Ll,
  llcorner,
  Lleftarrow,
  llhard,
  lltri,
  Lmidot,
  lmidot,
  lmoustache,
  lmoust,
  lnap,
  lnapprox,
  lne,
  lnE,
  lneq,
  lneqq,
  lnsim,
  loang,
  loarr,
  lobrk,
  longleftarrow,
  LongLeftArrow,
  Longleftarrow,
  longleftrightarrow,
  LongLeftRightArrow,
  Longleftrightarrow,
  longmapsto,
  longrightarrow,
  LongRightArrow,
  Longrightarrow,
  looparrowleft,
  looparrowright,
  lopar,
  Lopf,
  lopf,
  loplus,
  lotimes,
  lowast,
  lowbar,
  LowerLeftArrow,
  LowerRightArrow,
  loz,
  lozenge,
  lozf,
  lpar,
  lparlt,
  lrarr,
  lrcorner,
  lrhar,
  lrhard,
  lrm,
  lrtri,
  lsaquo,
  lscr,
  Lscr,
  lsh,
  Lsh,
  lsim,
  lsime,
  lsimg,
  lsqb,
  lsquo,
  lsquor,
  Lstrok,
  lstrok,
  ltcc,
  ltcir,
  lt: lt$2,
  LT: LT$1,
  Lt,
  ltdot,
  lthree,
  ltimes,
  ltlarr,
  ltquest,
  ltri,
  ltrie,
  ltrif,
  ltrPar,
  lurdshar,
  luruhar,
  lvertneqq,
  lvnE,
  macr: macr$1,
  male,
  malt,
  maltese,
  "Map": "\u2905",
  map,
  mapsto,
  mapstodown,
  mapstoleft,
  mapstoup,
  marker,
  mcomma,
  Mcy,
  mcy,
  mdash,
  mDDot,
  measuredangle,
  MediumSpace,
  Mellintrf,
  Mfr,
  mfr,
  mho,
  micro: micro$1,
  midast,
  midcir,
  mid,
  middot: middot$1,
  minusb,
  minus,
  minusd,
  minusdu,
  MinusPlus,
  mlcp,
  mldr,
  mnplus,
  models,
  Mopf,
  mopf,
  mp,
  mscr,
  Mscr,
  mstpos,
  Mu,
  mu,
  multimap,
  mumap,
  nabla,
  Nacute,
  nacute,
  nang,
  nap,
  napE,
  napid,
  napos,
  napprox,
  natural,
  naturals,
  natur,
  nbsp: nbsp$1,
  nbump,
  nbumpe,
  ncap,
  Ncaron,
  ncaron,
  Ncedil,
  ncedil,
  ncong,
  ncongdot,
  ncup,
  Ncy,
  ncy,
  ndash,
  nearhk,
  nearr,
  neArr,
  nearrow,
  ne,
  nedot,
  NegativeMediumSpace,
  NegativeThickSpace,
  NegativeThinSpace,
  NegativeVeryThinSpace,
  nequiv,
  nesear,
  nesim,
  NestedGreaterGreater,
  NestedLessLess,
  NewLine,
  nexist,
  nexists,
  Nfr,
  nfr,
  ngE,
  nge,
  ngeq,
  ngeqq,
  ngeqslant,
  nges,
  nGg,
  ngsim,
  nGt,
  ngt,
  ngtr,
  nGtv,
  nharr,
  nhArr,
  nhpar,
  ni,
  nis,
  nisd,
  niv,
  NJcy,
  njcy,
  nlarr,
  nlArr,
  nldr,
  nlE,
  nle,
  nleftarrow,
  nLeftarrow,
  nleftrightarrow,
  nLeftrightarrow,
  nleq,
  nleqq,
  nleqslant,
  nles,
  nless,
  nLl,
  nlsim,
  nLt,
  nlt,
  nltri,
  nltrie,
  nLtv,
  nmid,
  NoBreak,
  NonBreakingSpace,
  nopf,
  Nopf,
  Not,
  not: not$1,
  NotCongruent,
  NotCupCap,
  NotDoubleVerticalBar,
  NotElement,
  NotEqual,
  NotEqualTilde,
  NotExists,
  NotGreater,
  NotGreaterEqual,
  NotGreaterFullEqual,
  NotGreaterGreater,
  NotGreaterLess,
  NotGreaterSlantEqual,
  NotGreaterTilde,
  NotHumpDownHump,
  NotHumpEqual,
  notin,
  notindot,
  notinE,
  notinva,
  notinvb,
  notinvc,
  NotLeftTriangleBar,
  NotLeftTriangle,
  NotLeftTriangleEqual,
  NotLess,
  NotLessEqual,
  NotLessGreater,
  NotLessLess,
  NotLessSlantEqual,
  NotLessTilde,
  NotNestedGreaterGreater,
  NotNestedLessLess,
  notni,
  notniva,
  notnivb,
  notnivc,
  NotPrecedes,
  NotPrecedesEqual,
  NotPrecedesSlantEqual,
  NotReverseElement,
  NotRightTriangleBar,
  NotRightTriangle,
  NotRightTriangleEqual,
  NotSquareSubset,
  NotSquareSubsetEqual,
  NotSquareSuperset,
  NotSquareSupersetEqual,
  NotSubset,
  NotSubsetEqual,
  NotSucceeds,
  NotSucceedsEqual,
  NotSucceedsSlantEqual,
  NotSucceedsTilde,
  NotSuperset,
  NotSupersetEqual,
  NotTilde,
  NotTildeEqual,
  NotTildeFullEqual,
  NotTildeTilde,
  NotVerticalBar,
  nparallel,
  npar,
  nparsl,
  npart,
  npolint,
  npr,
  nprcue,
  nprec,
  npreceq,
  npre,
  nrarrc,
  nrarr,
  nrArr,
  nrarrw,
  nrightarrow,
  nRightarrow,
  nrtri,
  nrtrie,
  nsc,
  nsccue,
  nsce,
  Nscr,
  nscr,
  nshortmid,
  nshortparallel,
  nsim,
  nsime,
  nsimeq,
  nsmid,
  nspar,
  nsqsube,
  nsqsupe,
  nsub,
  nsubE,
  nsube,
  nsubset,
  nsubseteq,
  nsubseteqq,
  nsucc,
  nsucceq,
  nsup,
  nsupE,
  nsupe,
  nsupset,
  nsupseteq,
  nsupseteqq,
  ntgl,
  Ntilde: Ntilde$1,
  ntilde: ntilde$1,
  ntlg,
  ntriangleleft,
  ntrianglelefteq,
  ntriangleright,
  ntrianglerighteq,
  Nu,
  nu,
  num,
  numero,
  numsp,
  nvap,
  nvdash,
  nvDash,
  nVdash,
  nVDash,
  nvge,
  nvgt,
  nvHarr,
  nvinfin,
  nvlArr,
  nvle,
  nvlt,
  nvltrie,
  nvrArr,
  nvrtrie,
  nvsim,
  nwarhk,
  nwarr,
  nwArr,
  nwarrow,
  nwnear,
  Oacute: Oacute$1,
  oacute: oacute$1,
  oast,
  Ocirc: Ocirc$1,
  ocirc: ocirc$1,
  ocir,
  Ocy,
  ocy,
  odash,
  Odblac,
  odblac,
  odiv,
  odot,
  odsold,
  OElig,
  oelig,
  ofcir,
  Ofr,
  ofr,
  ogon,
  Ograve: Ograve$1,
  ograve: ograve$1,
  ogt,
  ohbar,
  ohm,
  oint,
  olarr,
  olcir,
  olcross,
  oline,
  olt,
  Omacr,
  omacr,
  Omega,
  omega,
  Omicron,
  omicron,
  omid,
  ominus,
  Oopf,
  oopf,
  opar,
  OpenCurlyDoubleQuote,
  OpenCurlyQuote,
  operp,
  oplus,
  orarr,
  Or,
  or,
  ord,
  order,
  orderof,
  ordf: ordf$1,
  ordm: ordm$1,
  origof,
  oror,
  orslope,
  orv,
  oS,
  Oscr,
  oscr,
  Oslash: Oslash$1,
  oslash: oslash$1,
  osol,
  Otilde: Otilde$1,
  otilde: otilde$1,
  otimesas,
  Otimes,
  otimes,
  Ouml: Ouml$1,
  ouml: ouml$1,
  ovbar,
  OverBar,
  OverBrace,
  OverBracket,
  OverParenthesis,
  para: para$1,
  parallel,
  par,
  parsim,
  parsl,
  part,
  PartialD,
  Pcy,
  pcy,
  percnt,
  period,
  permil,
  perp,
  pertenk,
  Pfr,
  pfr,
  Phi,
  phi,
  phiv,
  phmmat,
  phone,
  Pi,
  pi,
  pitchfork,
  piv,
  planck,
  planckh,
  plankv,
  plusacir,
  plusb,
  pluscir,
  plus,
  plusdo,
  plusdu,
  pluse,
  PlusMinus,
  plusmn: plusmn$1,
  plussim,
  plustwo,
  pm,
  Poincareplane,
  pointint,
  popf,
  Popf,
  pound: pound$1,
  prap,
  Pr,
  pr,
  prcue,
  precapprox,
  prec,
  preccurlyeq,
  Precedes,
  PrecedesEqual,
  PrecedesSlantEqual,
  PrecedesTilde,
  preceq,
  precnapprox,
  precneqq,
  precnsim,
  pre,
  prE,
  precsim,
  prime,
  Prime,
  primes,
  prnap,
  prnE,
  prnsim,
  prod,
  Product,
  profalar,
  profline,
  profsurf,
  prop,
  Proportional,
  Proportion,
  propto,
  prsim,
  prurel,
  Pscr,
  pscr,
  Psi,
  psi,
  puncsp,
  Qfr,
  qfr,
  qint,
  qopf,
  Qopf,
  qprime,
  Qscr,
  qscr,
  quaternions,
  quatint,
  quest,
  questeq,
  quot: quot$2,
  QUOT: QUOT$1,
  rAarr,
  race,
  Racute,
  racute,
  radic,
  raemptyv,
  rang,
  Rang,
  rangd,
  range: range$1,
  rangle,
  raquo: raquo$1,
  rarrap,
  rarrb,
  rarrbfs,
  rarrc,
  rarr,
  Rarr,
  rArr,
  rarrfs,
  rarrhk,
  rarrlp,
  rarrpl,
  rarrsim,
  Rarrtl,
  rarrtl,
  rarrw,
  ratail,
  rAtail,
  ratio,
  rationals,
  rbarr,
  rBarr,
  RBarr,
  rbbrk,
  rbrace,
  rbrack,
  rbrke,
  rbrksld,
  rbrkslu,
  Rcaron,
  rcaron,
  Rcedil,
  rcedil,
  rceil,
  rcub,
  Rcy,
  rcy,
  rdca,
  rdldhar,
  rdquo,
  rdquor,
  rdsh,
  real,
  realine,
  realpart,
  reals,
  Re,
  rect,
  reg: reg$1,
  REG: REG$1,
  ReverseElement,
  ReverseEquilibrium,
  ReverseUpEquilibrium,
  rfisht,
  rfloor,
  rfr,
  Rfr,
  rHar,
  rhard,
  rharu,
  rharul,
  Rho,
  rho,
  rhov,
  RightAngleBracket,
  RightArrowBar,
  rightarrow,
  RightArrow,
  Rightarrow,
  RightArrowLeftArrow,
  rightarrowtail,
  RightCeiling,
  RightDoubleBracket,
  RightDownTeeVector,
  RightDownVectorBar,
  RightDownVector,
  RightFloor,
  rightharpoondown,
  rightharpoonup,
  rightleftarrows,
  rightleftharpoons,
  rightrightarrows,
  rightsquigarrow,
  RightTeeArrow,
  RightTee,
  RightTeeVector,
  rightthreetimes,
  RightTriangleBar,
  RightTriangle,
  RightTriangleEqual,
  RightUpDownVector,
  RightUpTeeVector,
  RightUpVectorBar,
  RightUpVector,
  RightVectorBar,
  RightVector,
  ring,
  risingdotseq,
  rlarr,
  rlhar,
  rlm,
  rmoustache,
  rmoust,
  rnmid,
  roang,
  roarr,
  robrk,
  ropar,
  ropf,
  Ropf,
  roplus,
  rotimes,
  RoundImplies,
  rpar,
  rpargt,
  rppolint,
  rrarr,
  Rrightarrow,
  rsaquo,
  rscr,
  Rscr,
  rsh,
  Rsh,
  rsqb,
  rsquo,
  rsquor,
  rthree,
  rtimes,
  rtri,
  rtrie,
  rtrif,
  rtriltri,
  RuleDelayed,
  ruluhar,
  rx,
  Sacute,
  sacute,
  sbquo,
  scap,
  Scaron,
  scaron,
  Sc,
  sc,
  sccue,
  sce,
  scE,
  Scedil,
  scedil,
  Scirc,
  scirc,
  scnap,
  scnE,
  scnsim,
  scpolint,
  scsim,
  Scy,
  scy,
  sdotb,
  sdot,
  sdote,
  searhk,
  searr,
  seArr,
  searrow,
  sect: sect$1,
  semi,
  seswar,
  setminus,
  setmn,
  sext,
  Sfr,
  sfr,
  sfrown,
  sharp,
  SHCHcy,
  shchcy,
  SHcy,
  shcy,
  ShortDownArrow,
  ShortLeftArrow,
  shortmid,
  shortparallel,
  ShortRightArrow,
  ShortUpArrow,
  shy: shy$1,
  Sigma,
  sigma,
  sigmaf,
  sigmav,
  sim,
  simdot,
  sime,
  simeq,
  simg,
  simgE,
  siml,
  simlE,
  simne,
  simplus,
  simrarr,
  slarr,
  SmallCircle,
  smallsetminus,
  smashp,
  smeparsl,
  smid,
  smile,
  smt,
  smte,
  smtes,
  SOFTcy,
  softcy,
  solbar,
  solb,
  sol,
  Sopf,
  sopf,
  spades,
  spadesuit,
  spar,
  sqcap,
  sqcaps,
  sqcup,
  sqcups,
  Sqrt,
  sqsub,
  sqsube,
  sqsubset,
  sqsubseteq,
  sqsup,
  sqsupe,
  sqsupset,
  sqsupseteq,
  square,
  Square,
  SquareIntersection,
  SquareSubset,
  SquareSubsetEqual,
  SquareSuperset,
  SquareSupersetEqual,
  SquareUnion,
  squarf,
  squ,
  squf,
  srarr,
  Sscr,
  sscr,
  ssetmn,
  ssmile,
  sstarf,
  Star,
  star,
  starf,
  straightepsilon,
  straightphi,
  strns,
  sub,
  Sub,
  subdot,
  subE,
  sube,
  subedot,
  submult,
  subnE,
  subne,
  subplus,
  subrarr,
  subset,
  Subset,
  subseteq,
  subseteqq,
  SubsetEqual,
  subsetneq,
  subsetneqq,
  subsim,
  subsub,
  subsup,
  succapprox,
  succ,
  succcurlyeq,
  Succeeds,
  SucceedsEqual,
  SucceedsSlantEqual,
  SucceedsTilde,
  succeq,
  succnapprox,
  succneqq,
  succnsim,
  succsim,
  SuchThat,
  sum,
  Sum,
  sung,
  sup1: sup1$1,
  sup2: sup2$1,
  sup3: sup3$1,
  sup,
  Sup,
  supdot,
  supdsub,
  supE,
  supe,
  supedot,
  Superset,
  SupersetEqual,
  suphsol,
  suphsub,
  suplarr,
  supmult,
  supnE,
  supne,
  supplus,
  supset,
  Supset,
  supseteq,
  supseteqq,
  supsetneq,
  supsetneqq,
  supsim,
  supsub,
  supsup,
  swarhk,
  swarr,
  swArr,
  swarrow,
  swnwar,
  szlig: szlig$1,
  Tab,
  target,
  Tau,
  tau,
  tbrk,
  Tcaron,
  tcaron,
  Tcedil,
  tcedil,
  Tcy,
  tcy,
  tdot,
  telrec,
  Tfr,
  tfr,
  there4,
  therefore,
  Therefore,
  Theta,
  theta,
  thetasym,
  thetav,
  thickapprox,
  thicksim,
  ThickSpace,
  ThinSpace,
  thinsp,
  thkap,
  thksim,
  THORN: THORN$1,
  thorn: thorn$1,
  tilde,
  Tilde,
  TildeEqual,
  TildeFullEqual,
  TildeTilde,
  timesbar,
  timesb,
  times: times$1,
  timesd,
  tint,
  toea,
  topbot,
  topcir,
  top,
  Topf,
  topf,
  topfork,
  tosa,
  tprime,
  trade,
  TRADE,
  triangle,
  triangledown,
  triangleleft,
  trianglelefteq,
  triangleq,
  triangleright,
  trianglerighteq,
  tridot,
  trie,
  triminus,
  TripleDot,
  triplus,
  trisb,
  tritime,
  trpezium,
  Tscr,
  tscr,
  TScy,
  tscy,
  TSHcy,
  tshcy,
  Tstrok,
  tstrok,
  twixt,
  twoheadleftarrow,
  twoheadrightarrow,
  Uacute: Uacute$1,
  uacute: uacute$1,
  uarr,
  Uarr,
  uArr,
  Uarrocir,
  Ubrcy,
  ubrcy,
  Ubreve,
  ubreve,
  Ucirc: Ucirc$1,
  ucirc: ucirc$1,
  Ucy,
  ucy,
  udarr,
  Udblac,
  udblac,
  udhar,
  ufisht,
  Ufr,
  ufr,
  Ugrave: Ugrave$1,
  ugrave: ugrave$1,
  uHar,
  uharl,
  uharr,
  uhblk,
  ulcorn,
  ulcorner,
  ulcrop,
  ultri,
  Umacr,
  umacr,
  uml: uml$1,
  UnderBar,
  UnderBrace,
  UnderBracket,
  UnderParenthesis,
  Union,
  UnionPlus,
  Uogon,
  uogon,
  Uopf,
  uopf,
  UpArrowBar,
  uparrow,
  UpArrow,
  Uparrow,
  UpArrowDownArrow,
  updownarrow,
  UpDownArrow,
  Updownarrow,
  UpEquilibrium,
  upharpoonleft,
  upharpoonright,
  uplus,
  UpperLeftArrow,
  UpperRightArrow,
  upsi,
  Upsi,
  upsih,
  Upsilon,
  upsilon,
  UpTeeArrow,
  UpTee,
  upuparrows,
  urcorn,
  urcorner,
  urcrop,
  Uring,
  uring,
  urtri,
  Uscr,
  uscr,
  utdot,
  Utilde,
  utilde,
  utri,
  utrif,
  uuarr,
  Uuml: Uuml$1,
  uuml: uuml$1,
  uwangle,
  vangrt,
  varepsilon,
  varkappa,
  varnothing,
  varphi,
  varpi,
  varpropto,
  varr,
  vArr,
  varrho,
  varsigma,
  varsubsetneq,
  varsubsetneqq,
  varsupsetneq,
  varsupsetneqq,
  vartheta,
  vartriangleleft,
  vartriangleright,
  vBar,
  Vbar,
  vBarv,
  Vcy,
  vcy,
  vdash,
  vDash,
  Vdash,
  VDash,
  Vdashl,
  veebar,
  vee,
  Vee,
  veeeq,
  vellip,
  verbar,
  Verbar,
  vert,
  Vert,
  VerticalBar,
  VerticalLine,
  VerticalSeparator,
  VerticalTilde,
  VeryThinSpace,
  Vfr,
  vfr,
  vltri,
  vnsub,
  vnsup,
  Vopf,
  vopf,
  vprop,
  vrtri,
  Vscr,
  vscr,
  vsubnE,
  vsubne,
  vsupnE,
  vsupne,
  Vvdash,
  vzigzag,
  Wcirc,
  wcirc,
  wedbar,
  wedge,
  Wedge,
  wedgeq,
  weierp,
  Wfr,
  wfr,
  Wopf,
  wopf,
  wp,
  wr,
  wreath,
  Wscr,
  wscr,
  xcap,
  xcirc,
  xcup,
  xdtri,
  Xfr,
  xfr,
  xharr,
  xhArr,
  Xi,
  xi,
  xlarr,
  xlArr,
  xmap,
  xnis,
  xodot,
  Xopf,
  xopf,
  xoplus,
  xotime,
  xrarr,
  xrArr,
  Xscr,
  xscr,
  xsqcup,
  xuplus,
  xutri,
  xvee,
  xwedge,
  Yacute: Yacute$1,
  yacute: yacute$1,
  YAcy,
  yacy,
  Ycirc,
  ycirc,
  Ycy,
  ycy,
  yen: yen$1,
  Yfr,
  yfr,
  YIcy,
  yicy,
  Yopf,
  yopf,
  Yscr,
  yscr,
  YUcy,
  yucy,
  yuml: yuml$1,
  Yuml,
  Zacute,
  zacute,
  Zcaron,
  zcaron,
  Zcy,
  zcy,
  Zdot,
  zdot,
  zeetrf,
  ZeroWidthSpace,
  Zeta,
  zeta,
  zfr,
  Zfr,
  ZHcy,
  zhcy,
  zigrarr,
  zopf,
  Zopf,
  Zscr,
  zscr,
  zwj,
  zwnj
};
const Aacute = "\xC1";
const aacute = "\xE1";
const Acirc = "\xC2";
const acirc = "\xE2";
const acute = "\xB4";
const AElig = "\xC6";
const aelig = "\xE6";
const Agrave = "\xC0";
const agrave = "\xE0";
const amp$1 = "&";
const AMP = "&";
const Aring = "\xC5";
const aring = "\xE5";
const Atilde = "\xC3";
const atilde = "\xE3";
const Auml = "\xC4";
const auml = "\xE4";
const brvbar = "\xA6";
const Ccedil = "\xC7";
const ccedil = "\xE7";
const cedil = "\xB8";
const cent = "\xA2";
const copy = "\xA9";
const COPY = "\xA9";
const curren = "\xA4";
const deg = "\xB0";
const divide = "\xF7";
const Eacute = "\xC9";
const eacute = "\xE9";
const Ecirc = "\xCA";
const ecirc = "\xEA";
const Egrave = "\xC8";
const egrave = "\xE8";
const ETH = "\xD0";
const eth = "\xF0";
const Euml = "\xCB";
const euml = "\xEB";
const frac12 = "\xBD";
const frac14 = "\xBC";
const frac34 = "\xBE";
const gt$1 = ">";
const GT = ">";
const Iacute = "\xCD";
const iacute = "\xED";
const Icirc = "\xCE";
const icirc = "\xEE";
const iexcl = "\xA1";
const Igrave = "\xCC";
const igrave = "\xEC";
const iquest = "\xBF";
const Iuml = "\xCF";
const iuml = "\xEF";
const laquo = "\xAB";
const lt$1 = "<";
const LT = "<";
const macr = "\xAF";
const micro = "\xB5";
const middot = "\xB7";
const nbsp = "\xA0";
const not = "\xAC";
const Ntilde = "\xD1";
const ntilde = "\xF1";
const Oacute = "\xD3";
const oacute = "\xF3";
const Ocirc = "\xD4";
const ocirc = "\xF4";
const Ograve = "\xD2";
const ograve = "\xF2";
const ordf = "\xAA";
const ordm = "\xBA";
const Oslash = "\xD8";
const oslash = "\xF8";
const Otilde = "\xD5";
const otilde = "\xF5";
const Ouml = "\xD6";
const ouml = "\xF6";
const para = "\xB6";
const plusmn = "\xB1";
const pound = "\xA3";
const quot$1 = '"';
const QUOT = '"';
const raquo = "\xBB";
const reg = "\xAE";
const REG = "\xAE";
const sect = "\xA7";
const shy = "\xAD";
const sup1 = "\xB9";
const sup2 = "\xB2";
const sup3 = "\xB3";
const szlig = "\xDF";
const THORN = "\xDE";
const thorn = "\xFE";
const times = "\xD7";
const Uacute = "\xDA";
const uacute = "\xFA";
const Ucirc = "\xDB";
const ucirc = "\xFB";
const Ugrave = "\xD9";
const ugrave = "\xF9";
const uml = "\xA8";
const Uuml = "\xDC";
const uuml = "\xFC";
const Yacute = "\xDD";
const yacute = "\xFD";
const yen = "\xA5";
const yuml = "\xFF";
var require$$1 = {
  Aacute,
  aacute,
  Acirc,
  acirc,
  acute,
  AElig,
  aelig,
  Agrave,
  agrave,
  amp: amp$1,
  AMP,
  Aring,
  aring,
  Atilde,
  atilde,
  Auml,
  auml,
  brvbar,
  Ccedil,
  ccedil,
  cedil,
  cent,
  copy,
  COPY,
  curren,
  deg,
  divide,
  Eacute,
  eacute,
  Ecirc,
  ecirc,
  Egrave,
  egrave,
  ETH,
  eth,
  Euml,
  euml,
  frac12,
  frac14,
  frac34,
  gt: gt$1,
  GT,
  Iacute,
  iacute,
  Icirc,
  icirc,
  iexcl,
  Igrave,
  igrave,
  iquest,
  Iuml,
  iuml,
  laquo,
  lt: lt$1,
  LT,
  macr,
  micro,
  middot,
  nbsp,
  not,
  Ntilde,
  ntilde,
  Oacute,
  oacute,
  Ocirc,
  ocirc,
  Ograve,
  ograve,
  ordf,
  ordm,
  Oslash,
  oslash,
  Otilde,
  otilde,
  Ouml,
  ouml,
  para,
  plusmn,
  pound,
  quot: quot$1,
  QUOT,
  raquo,
  reg,
  REG,
  sect,
  shy,
  sup1,
  sup2,
  sup3,
  szlig,
  THORN,
  thorn,
  times,
  Uacute,
  uacute,
  Ucirc,
  ucirc,
  Ugrave,
  ugrave,
  uml,
  Uuml,
  uuml,
  Yacute,
  yacute,
  yen,
  yuml
};
const amp = "&";
const apos = "'";
const gt = ">";
const lt = "<";
const quot = '"';
var require$$0$1 = {
  amp,
  apos,
  gt,
  lt,
  quot
};
var decode_codepoint = {};
var require$$0 = {
  "0": 65533,
  "128": 8364,
  "130": 8218,
  "131": 402,
  "132": 8222,
  "133": 8230,
  "134": 8224,
  "135": 8225,
  "136": 710,
  "137": 8240,
  "138": 352,
  "139": 8249,
  "140": 338,
  "142": 381,
  "145": 8216,
  "146": 8217,
  "147": 8220,
  "148": 8221,
  "149": 8226,
  "150": 8211,
  "151": 8212,
  "152": 732,
  "153": 8482,
  "154": 353,
  "155": 8250,
  "156": 339,
  "158": 382,
  "159": 376
};
var __importDefault$2 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(decode_codepoint, "__esModule", { value: true });
var decode_json_1 = __importDefault$2(require$$0);
var fromCodePoint = String.fromCodePoint || function(codePoint) {
  var output = "";
  if (codePoint > 65535) {
    codePoint -= 65536;
    output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
    codePoint = 56320 | codePoint & 1023;
  }
  output += String.fromCharCode(codePoint);
  return output;
};
function decodeCodePoint(codePoint) {
  if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
    return "\uFFFD";
  }
  if (codePoint in decode_json_1.default) {
    codePoint = decode_json_1.default[codePoint];
  }
  return fromCodePoint(codePoint);
}
decode_codepoint.default = decodeCodePoint;
var __importDefault$1 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(decode, "__esModule", { value: true });
decode.decodeHTML = decode.decodeHTMLStrict = decode.decodeXML = void 0;
var entities_json_1$1 = __importDefault$1(require$$1$1);
var legacy_json_1 = __importDefault$1(require$$1);
var xml_json_1$1 = __importDefault$1(require$$0$1);
var decode_codepoint_1 = __importDefault$1(decode_codepoint);
var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
decode.decodeXML = getStrictDecoder(xml_json_1$1.default);
decode.decodeHTMLStrict = getStrictDecoder(entities_json_1$1.default);
function getStrictDecoder(map3) {
  var replace2 = getReplacer(map3);
  return function(str) {
    return String(str).replace(strictEntityRe, replace2);
  };
}
var sorter = function(a, b) {
  return a < b ? 1 : -1;
};
decode.decodeHTML = function() {
  var legacy = Object.keys(legacy_json_1.default).sort(sorter);
  var keys2 = Object.keys(entities_json_1$1.default).sort(sorter);
  for (var i = 0, j = 0; i < keys2.length; i++) {
    if (legacy[j] === keys2[i]) {
      keys2[i] += ";?";
      j++;
    } else {
      keys2[i] += ";";
    }
  }
  var re = new RegExp("&(?:" + keys2.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
  var replace2 = getReplacer(entities_json_1$1.default);
  function replacer3(str) {
    if (str.substr(-1) !== ";")
      str += ";";
    return replace2(str);
  }
  return function(str) {
    return String(str).replace(re, replacer3);
  };
}();
function getReplacer(map3) {
  return function replace2(str) {
    if (str.charAt(1) === "#") {
      var secondChar = str.charAt(2);
      if (secondChar === "X" || secondChar === "x") {
        return decode_codepoint_1.default(parseInt(str.substr(3), 16));
      }
      return decode_codepoint_1.default(parseInt(str.substr(2), 10));
    }
    return map3[str.slice(1, -1)] || str;
  };
}
var encode = {};
var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(encode, "__esModule", { value: true });
encode.escapeUTF8 = encode.escape = encode.encodeNonAsciiHTML = encode.encodeHTML = encode.encodeXML = void 0;
var xml_json_1 = __importDefault(require$$0$1);
var inverseXML = getInverseObj(xml_json_1.default);
var xmlReplacer = getInverseReplacer(inverseXML);
encode.encodeXML = getASCIIEncoder(inverseXML);
var entities_json_1 = __importDefault(require$$1$1);
var inverseHTML = getInverseObj(entities_json_1.default);
var htmlReplacer = getInverseReplacer(inverseHTML);
encode.encodeHTML = getInverse(inverseHTML, htmlReplacer);
encode.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
function getInverseObj(obj) {
  return Object.keys(obj).sort().reduce(function(inverse, name2) {
    inverse[obj[name2]] = "&" + name2 + ";";
    return inverse;
  }, {});
}
function getInverseReplacer(inverse) {
  var single = [];
  var multiple = [];
  for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
    var k = _a[_i];
    if (k.length === 1) {
      single.push("\\" + k);
    } else {
      multiple.push(k);
    }
  }
  single.sort();
  for (var start = 0; start < single.length - 1; start++) {
    var end = start;
    while (end < single.length - 1 && single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) {
      end += 1;
    }
    var count3 = 1 + end - start;
    if (count3 < 3)
      continue;
    single.splice(start, count3, single[start] + "-" + single[end]);
  }
  multiple.unshift("[" + single.join("") + "]");
  return new RegExp(multiple.join("|"), "g");
}
var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
var getCodePoint = String.prototype.codePointAt != null ? function(str) {
  return str.codePointAt(0);
} : function(c) {
  return (c.charCodeAt(0) - 55296) * 1024 + c.charCodeAt(1) - 56320 + 65536;
};
function singleCharReplacer(c) {
  return "&#x" + (c.length > 1 ? getCodePoint(c) : c.charCodeAt(0)).toString(16).toUpperCase() + ";";
}
function getInverse(inverse, re) {
  return function(data) {
    return data.replace(re, function(name2) {
      return inverse[name2];
    }).replace(reNonASCII, singleCharReplacer);
  };
}
var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
function escape$1(data) {
  return data.replace(reEscapeChars, singleCharReplacer);
}
encode.escape = escape$1;
function escapeUTF8(data) {
  return data.replace(xmlReplacer, singleCharReplacer);
}
encode.escapeUTF8 = escapeUTF8;
function getASCIIEncoder(obj) {
  return function(data) {
    return data.replace(reEscapeChars, function(c) {
      return obj[c] || singleCharReplacer(c);
    });
  };
}
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;
  var decode_1 = decode;
  var encode_1 = encode;
  function decode$12(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
  }
  exports.decode = decode$12;
  function decodeStrict(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
  }
  exports.decodeStrict = decodeStrict;
  function encode$12(data, level) {
    return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
  }
  exports.encode = encode$12;
  var encode_2 = encode;
  Object.defineProperty(exports, "encodeXML", { enumerable: true, get: function() {
    return encode_2.encodeXML;
  } });
  Object.defineProperty(exports, "encodeHTML", { enumerable: true, get: function() {
    return encode_2.encodeHTML;
  } });
  Object.defineProperty(exports, "encodeNonAsciiHTML", { enumerable: true, get: function() {
    return encode_2.encodeNonAsciiHTML;
  } });
  Object.defineProperty(exports, "escape", { enumerable: true, get: function() {
    return encode_2.escape;
  } });
  Object.defineProperty(exports, "escapeUTF8", { enumerable: true, get: function() {
    return encode_2.escapeUTF8;
  } });
  Object.defineProperty(exports, "encodeHTML4", { enumerable: true, get: function() {
    return encode_2.encodeHTML;
  } });
  Object.defineProperty(exports, "encodeHTML5", { enumerable: true, get: function() {
    return encode_2.encodeHTML;
  } });
  var decode_2 = decode;
  Object.defineProperty(exports, "decodeXML", { enumerable: true, get: function() {
    return decode_2.decodeXML;
  } });
  Object.defineProperty(exports, "decodeHTML", { enumerable: true, get: function() {
    return decode_2.decodeHTML;
  } });
  Object.defineProperty(exports, "decodeHTMLStrict", { enumerable: true, get: function() {
    return decode_2.decodeHTMLStrict;
  } });
  Object.defineProperty(exports, "decodeHTML4", { enumerable: true, get: function() {
    return decode_2.decodeHTML;
  } });
  Object.defineProperty(exports, "decodeHTML5", { enumerable: true, get: function() {
    return decode_2.decodeHTML;
  } });
  Object.defineProperty(exports, "decodeHTML4Strict", { enumerable: true, get: function() {
    return decode_2.decodeHTMLStrict;
  } });
  Object.defineProperty(exports, "decodeHTML5Strict", { enumerable: true, get: function() {
    return decode_2.decodeHTMLStrict;
  } });
  Object.defineProperty(exports, "decodeXMLStrict", { enumerable: true, get: function() {
    return decode_2.decodeXML;
  } });
})(lib);
function _classCallCheck$7(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$7(target2, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target2, descriptor.key, descriptor);
  }
}
function _createClass$7(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$7(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$7(Constructor, staticProps);
  return Constructor;
}
function _createForOfIteratorHelper(o) {
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = _unsupportedIterableToArray$5(o))) {
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var it2, normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it2 = o[Symbol.iterator]();
  }, n: function n() {
    var step = it2.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f2() {
    try {
      if (!normalCompletion && it2["return"] != null)
        it2["return"]();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray$5(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$5(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$5(o, minLen);
}
function _arrayLikeToArray$5(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var entities = lib;
var defaults = {
  fg: "#FFF",
  bg: "#000",
  newline: false,
  escapeXML: false,
  stream: false,
  colors: getDefaultColors()
};
function getDefaultColors() {
  var colors = {
    0: "#000",
    1: "#A00",
    2: "#0A0",
    3: "#A50",
    4: "#00A",
    5: "#A0A",
    6: "#0AA",
    7: "#AAA",
    8: "#555",
    9: "#F55",
    10: "#5F5",
    11: "#FF5",
    12: "#55F",
    13: "#F5F",
    14: "#5FF",
    15: "#FFF"
  };
  range(0, 5).forEach(function(red) {
    range(0, 5).forEach(function(green) {
      range(0, 5).forEach(function(blue) {
        return setStyleColor(red, green, blue, colors);
      });
    });
  });
  range(0, 23).forEach(function(gray) {
    var c = gray + 232;
    var l = toHexString(gray * 10 + 8);
    colors[c] = "#" + l + l + l;
  });
  return colors;
}
function setStyleColor(red, green, blue, colors) {
  var c = 16 + red * 36 + green * 6 + blue;
  var r = red > 0 ? red * 40 + 55 : 0;
  var g = green > 0 ? green * 40 + 55 : 0;
  var b = blue > 0 ? blue * 40 + 55 : 0;
  colors[c] = toColorHexString([r, g, b]);
}
function toHexString(num2) {
  var str = num2.toString(16);
  while (str.length < 2) {
    str = "0" + str;
  }
  return str;
}
function toColorHexString(ref) {
  var results = [];
  var _iterator = _createForOfIteratorHelper(ref), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var r = _step.value;
      results.push(toHexString(r));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return "#" + results.join("");
}
function generateOutput(stack, token, data, options2) {
  var result2;
  if (token === "text") {
    result2 = pushText(data, options2);
  } else if (token === "display") {
    result2 = handleDisplay(stack, data, options2);
  } else if (token === "xterm256") {
    result2 = pushForegroundColor(stack, options2.colors[data]);
  } else if (token === "rgb") {
    result2 = handleRgb(stack, data);
  }
  return result2;
}
function handleRgb(stack, data) {
  data = data.substring(2).slice(0, -1);
  var operation = +data.substr(0, 2);
  var color = data.substring(5).split(";");
  var rgb = color.map(function(value2) {
    return ("0" + Number(value2).toString(16)).substr(-2);
  }).join("");
  return pushStyle(stack, (operation === 38 ? "color:#" : "background-color:#") + rgb);
}
function handleDisplay(stack, code, options2) {
  code = parseInt(code, 10);
  var codeMap = {
    "-1": function _() {
      return "<br/>";
    },
    0: function _() {
      return stack.length && resetStyles(stack);
    },
    1: function _() {
      return pushTag(stack, "b");
    },
    3: function _() {
      return pushTag(stack, "i");
    },
    4: function _() {
      return pushTag(stack, "u");
    },
    8: function _() {
      return pushStyle(stack, "display:none");
    },
    9: function _() {
      return pushTag(stack, "strike");
    },
    22: function _() {
      return pushStyle(stack, "font-weight:normal;text-decoration:none;font-style:normal");
    },
    23: function _() {
      return closeTag(stack, "i");
    },
    24: function _() {
      return closeTag(stack, "u");
    },
    39: function _() {
      return pushForegroundColor(stack, options2.fg);
    },
    49: function _() {
      return pushBackgroundColor(stack, options2.bg);
    },
    53: function _() {
      return pushStyle(stack, "text-decoration:overline");
    }
  };
  var result2;
  if (codeMap[code]) {
    result2 = codeMap[code]();
  } else if (4 < code && code < 7) {
    result2 = pushTag(stack, "blink");
  } else if (29 < code && code < 38) {
    result2 = pushForegroundColor(stack, options2.colors[code - 30]);
  } else if (39 < code && code < 48) {
    result2 = pushBackgroundColor(stack, options2.colors[code - 40]);
  } else if (89 < code && code < 98) {
    result2 = pushForegroundColor(stack, options2.colors[8 + (code - 90)]);
  } else if (99 < code && code < 108) {
    result2 = pushBackgroundColor(stack, options2.colors[8 + (code - 100)]);
  }
  return result2;
}
function resetStyles(stack) {
  var stackClone = stack.slice(0);
  stack.length = 0;
  return stackClone.reverse().map(function(tag) {
    return "</" + tag + ">";
  }).join("");
}
function range(low, high) {
  var results = [];
  for (var j = low; j <= high; j++) {
    results.push(j);
  }
  return results;
}
function notCategory(category) {
  return function(e) {
    return (category === null || e.category !== category) && category !== "all";
  };
}
function categoryForCode(code) {
  code = parseInt(code, 10);
  var result2 = null;
  if (code === 0) {
    result2 = "all";
  } else if (code === 1) {
    result2 = "bold";
  } else if (2 < code && code < 5) {
    result2 = "underline";
  } else if (4 < code && code < 7) {
    result2 = "blink";
  } else if (code === 8) {
    result2 = "hide";
  } else if (code === 9) {
    result2 = "strike";
  } else if (29 < code && code < 38 || code === 39 || 89 < code && code < 98) {
    result2 = "foreground-color";
  } else if (39 < code && code < 48 || code === 49 || 99 < code && code < 108) {
    result2 = "background-color";
  }
  return result2;
}
function pushText(text, options2) {
  if (options2.escapeXML) {
    return entities.encodeXML(text);
  }
  return text;
}
function pushTag(stack, tag, style) {
  if (!style) {
    style = "";
  }
  stack.push(tag);
  return "<".concat(tag).concat(style ? ' style="'.concat(style, '"') : "", ">");
}
function pushStyle(stack, style) {
  return pushTag(stack, "span", style);
}
function pushForegroundColor(stack, color) {
  return pushTag(stack, "span", "color:" + color);
}
function pushBackgroundColor(stack, color) {
  return pushTag(stack, "span", "background-color:" + color);
}
function closeTag(stack, style) {
  var last;
  if (stack.slice(-1)[0] === style) {
    last = stack.pop();
  }
  if (last) {
    return "</" + style + ">";
  }
}
function tokenize(text, options2, callback) {
  var ansiMatch = false;
  var ansiHandler = 3;
  function remove() {
    return "";
  }
  function removeXterm256(m, g1) {
    callback("xterm256", g1);
    return "";
  }
  function newline(m) {
    if (options2.newline) {
      callback("display", -1);
    } else {
      callback("text", m);
    }
    return "";
  }
  function ansiMess(m, g1) {
    ansiMatch = true;
    if (g1.trim().length === 0) {
      g1 = "0";
    }
    g1 = g1.trimRight(";").split(";");
    var _iterator2 = _createForOfIteratorHelper(g1), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var g = _step2.value;
        callback("display", g);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return "";
  }
  function realText(m) {
    callback("text", m);
    return "";
  }
  function rgb(m) {
    callback("rgb", m);
    return "";
  }
  var tokens = [{
    pattern: /^\x08+/,
    sub: remove
  }, {
    pattern: /^\x1b\[[012]?K/,
    sub: remove
  }, {
    pattern: /^\x1b\[\(B/,
    sub: remove
  }, {
    pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/,
    sub: rgb
  }, {
    pattern: /^\x1b\[38;5;(\d+)m/,
    sub: removeXterm256
  }, {
    pattern: /^\n/,
    sub: newline
  }, {
    pattern: /^\r+\n/,
    sub: newline
  }, {
    pattern: /^\x1b\[((?:\d{1,3};?)+|)m/,
    sub: ansiMess
  }, {
    pattern: /^\x1b\[\d?J/,
    sub: remove
  }, {
    pattern: /^\x1b\[\d{0,3};\d{0,3}f/,
    sub: remove
  }, {
    pattern: /^\x1b\[?[\d;]{0,3}/,
    sub: remove
  }, {
    pattern: /^(([^\x1b\x08\r\n])+)/,
    sub: realText
  }];
  function process(handler2, i2) {
    if (i2 > ansiHandler && ansiMatch) {
      return;
    }
    ansiMatch = false;
    text = text.replace(handler2.pattern, handler2.sub);
  }
  var results1 = [];
  var _text = text, length = _text.length;
  outer:
    while (length > 0) {
      for (var i = 0, o = 0, len = tokens.length; o < len; i = ++o) {
        var handler = tokens[i];
        process(handler, i);
        if (text.length !== length) {
          length = text.length;
          continue outer;
        }
      }
      if (text.length === length) {
        break;
      }
      results1.push(0);
      length = text.length;
    }
  return results1;
}
function updateStickyStack(stickyStack, token, data) {
  if (token !== "text") {
    stickyStack = stickyStack.filter(notCategory(categoryForCode(data)));
    stickyStack.push({
      token,
      data,
      category: categoryForCode(data)
    });
  }
  return stickyStack;
}
var Filter = /* @__PURE__ */ function() {
  function Filter2(options2) {
    _classCallCheck$7(this, Filter2);
    options2 = options2 || {};
    if (options2.colors) {
      options2.colors = Object.assign({}, defaults.colors, options2.colors);
    }
    this.options = Object.assign({}, defaults, options2);
    this.stack = [];
    this.stickyStack = [];
  }
  _createClass$7(Filter2, [{
    key: "toHtml",
    value: function toHtml(input) {
      var _this = this;
      input = typeof input === "string" ? [input] : input;
      var stack = this.stack, options2 = this.options;
      var buf = [];
      this.stickyStack.forEach(function(element) {
        var output = generateOutput(stack, element.token, element.data, options2);
        if (output) {
          buf.push(output);
        }
      });
      tokenize(input.join(""), options2, function(token, data) {
        var output = generateOutput(stack, token, data, options2);
        if (output) {
          buf.push(output);
        }
        if (options2.stream) {
          _this.stickyStack = updateStickyStack(_this.stickyStack, token, data);
        }
      });
      if (stack.length) {
        buf.push(resetStyles(stack));
      }
      return buf.join("");
    }
  }]);
  return Filter2;
}();
var ansi_to_html = Filter;
var _templateObject$3;
function _slicedToArray$4(arr, i) {
  return _arrayWithHoles$4(arr) || _iterableToArrayLimit$4(arr, i) || _unsupportedIterableToArray$4(arr, i) || _nonIterableRest$4();
}
function _nonIterableRest$4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$4(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$4(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$4(o, minLen);
}
function _arrayLikeToArray$4(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$4(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$4(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _taggedTemplateLiteral$3(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _classCallCheck$6(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$6(target2, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target2, descriptor.key, descriptor);
  }
}
function _createClass$6(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$6(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$6(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var document$2 = window_1.document;
var PREPARING_DELAY = 100;
var layoutClassMap = {
  centered: "sb-main-centered",
  fullscreen: "sb-main-fullscreen",
  padded: "sb-main-padded"
};
var Mode;
(function(Mode2) {
  Mode2["MAIN"] = "MAIN";
  Mode2["NOPREVIEW"] = "NOPREVIEW";
  Mode2["PREPARING_STORY"] = "PREPARING_STORY";
  Mode2["PREPARING_DOCS"] = "PREPARING_DOCS";
  Mode2["ERROR"] = "ERROR";
})(Mode || (Mode = {}));
var classes = {
  PREPARING_STORY: "sb-show-preparing-story",
  PREPARING_DOCS: "sb-show-preparing-docs",
  MAIN: "sb-show-main",
  NOPREVIEW: "sb-show-nopreview",
  ERROR: "sb-show-errordisplay"
};
var ansiConverter = new ansi_to_html({
  escapeXML: true
});
var WebView = /* @__PURE__ */ function() {
  function WebView2() {
    _classCallCheck$6(this, WebView2);
    this.currentLayoutClass = void 0;
    this.testing = false;
    this.preparingTimeout = null;
    var _qs$parse = lib$1.parse(document$2.location.search, {
      ignoreQueryPrefix: true
    }), __SPECIAL_TEST_PARAMETER__ = _qs$parse.__SPECIAL_TEST_PARAMETER__;
    switch (__SPECIAL_TEST_PARAMETER__) {
      case "preparing-story": {
        this.showPreparingStory();
        this.testing = true;
        break;
      }
      case "preparing-docs": {
        this.showPreparingDocs();
        this.testing = true;
        break;
      }
    }
  }
  _createClass$6(WebView2, [{
    key: "prepareForStory",
    value: function prepareForStory(story2) {
      this.showStory();
      this.applyLayout(story2.parameters.layout);
      document$2.documentElement.scrollTop = 0;
      document$2.documentElement.scrollLeft = 0;
      return this.storyRoot();
    }
  }, {
    key: "storyRoot",
    value: function storyRoot() {
      return document$2.getElementById("root");
    }
  }, {
    key: "prepareForDocs",
    value: function prepareForDocs() {
      this.showMain();
      this.showDocs();
      this.applyLayout("fullscreen");
      return this.docsRoot();
    }
  }, {
    key: "docsRoot",
    value: function docsRoot() {
      return document$2.getElementById("docs-root");
    }
  }, {
    key: "applyLayout",
    value: function applyLayout() {
      var layout = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "padded";
      if (layout === "none") {
        document$2.body.classList.remove(this.currentLayoutClass);
        this.currentLayoutClass = null;
        return;
      }
      this.checkIfLayoutExists(layout);
      var layoutClass = layoutClassMap[layout];
      document$2.body.classList.remove(this.currentLayoutClass);
      document$2.body.classList.add(layoutClass);
      this.currentLayoutClass = layoutClass;
    }
  }, {
    key: "checkIfLayoutExists",
    value: function checkIfLayoutExists(layout) {
      if (!layoutClassMap[layout]) {
        logger.warn(dedent(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral$3(["The desired layout: ", " is not a valid option.\n         The possible options are: ", ", none."])), layout, Object.keys(layoutClassMap).join(", ")));
      }
    }
  }, {
    key: "showMode",
    value: function showMode(mode) {
      clearTimeout(this.preparingTimeout);
      Object.keys(Mode).forEach(function(otherMode) {
        if (otherMode === mode) {
          document$2.body.classList.add(classes[otherMode]);
        } else {
          document$2.body.classList.remove(classes[otherMode]);
        }
      });
    }
  }, {
    key: "showErrorDisplay",
    value: function showErrorDisplay(_ref) {
      var _ref$message = _ref.message, message = _ref$message === void 0 ? "" : _ref$message, _ref$stack = _ref.stack, stack = _ref$stack === void 0 ? "" : _ref$stack;
      var header = message;
      var detail = stack;
      var parts = message.split("\n");
      if (parts.length > 1) {
        var _parts = _slicedToArray$4(parts, 1);
        header = _parts[0];
        detail = parts.slice(1).join("\n");
      }
      document$2.getElementById("error-message").innerHTML = ansiConverter.toHtml(header);
      document$2.getElementById("error-stack").innerHTML = ansiConverter.toHtml(detail);
      this.showMode(Mode.ERROR);
    }
  }, {
    key: "showNoPreview",
    value: function showNoPreview() {
      var _this$storyRoot, _this$docsRoot;
      if (this.testing)
        return;
      this.showMode(Mode.NOPREVIEW);
      (_this$storyRoot = this.storyRoot()) === null || _this$storyRoot === void 0 ? void 0 : _this$storyRoot.setAttribute("hidden", "true");
      (_this$docsRoot = this.docsRoot()) === null || _this$docsRoot === void 0 ? void 0 : _this$docsRoot.setAttribute("hidden", "true");
    }
  }, {
    key: "showPreparingStory",
    value: function showPreparingStory() {
      var _this = this;
      var _ref22 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref2$immediate = _ref22.immediate, immediate = _ref2$immediate === void 0 ? false : _ref2$immediate;
      clearTimeout(this.preparingTimeout);
      if (immediate) {
        this.showMode(Mode.PREPARING_STORY);
      } else {
        this.preparingTimeout = setTimeout(function() {
          return _this.showMode(Mode.PREPARING_STORY);
        }, PREPARING_DELAY);
      }
    }
  }, {
    key: "showPreparingDocs",
    value: function showPreparingDocs() {
      var _this2 = this;
      clearTimeout(this.preparingTimeout);
      this.preparingTimeout = setTimeout(function() {
        return _this2.showMode(Mode.PREPARING_DOCS);
      }, PREPARING_DELAY);
    }
  }, {
    key: "showMain",
    value: function showMain() {
      this.showMode(Mode.MAIN);
    }
  }, {
    key: "showDocs",
    value: function showDocs() {
      this.storyRoot().setAttribute("hidden", "true");
      this.docsRoot().removeAttribute("hidden");
    }
  }, {
    key: "showStory",
    value: function showStory() {
      this.docsRoot().setAttribute("hidden", "true");
      this.storyRoot().removeAttribute("hidden");
    }
  }, {
    key: "showStoryDuringRender",
    value: function showStoryDuringRender() {
      document$2.body.classList.add(classes.MAIN);
    }
  }]);
  return WebView2;
}();
function asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, key2, arg) {
  try {
    var info2 = gen[key2](arg);
    var value2 = info2.value;
  } catch (error2) {
    reject(error2);
    return;
  }
  if (info2.done) {
    resolve(value2);
  } else {
    Promise.resolve(value2).then(_next, _throw);
  }
}
function _asyncToGenerator$1(fn) {
  return function() {
    var self2 = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self2, args);
      function _next(value2) {
        asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "next", value2);
      }
      function _throw(err) {
        asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function _classCallCheck$5(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$5(target2, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target2, descriptor.key, descriptor);
  }
}
function _createClass$5(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$5(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$5(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var DocsRender = /* @__PURE__ */ function() {
  function DocsRender2(channel2, store, id, story2) {
    _classCallCheck$5(this, DocsRender2);
    this.channel = channel2;
    this.store = store;
    this.id = id;
    this.story = story2;
    this.canvasElement = void 0;
    this.context = void 0;
    this.disableKeyListeners = false;
  }
  _createClass$5(DocsRender2, [{
    key: "isPreparing",
    value: function isPreparing() {
      return false;
    }
  }, {
    key: "renderToElement",
    value: function() {
      var _renderToElement = _asyncToGenerator$1(/* @__PURE__ */ regeneratorRuntime.mark(function _callee(canvasElement, renderStoryToElement) {
        var _this = this, _global$FEATURES;
        var _this$story, id, title, name2, csfFile;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.canvasElement = canvasElement;
                _this$story = this.story, id = _this$story.id, title = _this$story.title, name2 = _this$story.name;
                _context.next = 4;
                return this.store.loadCSFFileByStoryId(this.id);
              case 4:
                csfFile = _context.sent;
                this.context = Object.assign({
                  id,
                  title,
                  name: name2,
                  storyById: function storyById(storyId) {
                    return _this.store.storyFromCSFFile({
                      storyId,
                      csfFile
                    });
                  },
                  componentStories: function componentStories() {
                    return _this.store.componentStoriesFromCSFFile({
                      csfFile
                    });
                  },
                  loadStory: function loadStory(storyId) {
                    return _this.store.loadStory({
                      storyId
                    });
                  },
                  renderStoryToElement,
                  getStoryContext: function getStoryContext(renderedStory) {
                    return Object.assign({}, _this.store.getStoryContext(renderedStory), {
                      viewMode: "docs"
                    });
                  }
                }, !((_global$FEATURES = window_1.FEATURES) !== null && _global$FEATURES !== void 0 && _global$FEATURES.breakingChangesV7) && this.store.getStoryContext(this.story));
                return _context.abrupt("return", this.render());
              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function renderToElement(_x, _x2) {
        return _renderToElement.apply(this, arguments);
      }
      return renderToElement;
    }()
  }, {
    key: "render",
    value: function() {
      var _render = _asyncToGenerator$1(/* @__PURE__ */ regeneratorRuntime.mark(function _callee2() {
        var _this2 = this;
        var renderer;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(!this.story || !this.context || !this.canvasElement)) {
                  _context2.next = 2;
                  break;
                }
                throw new Error("DocsRender not ready to render");
              case 2:
                _context2.next = 4;
                return import("./renderDocs.js");
              case 4:
                renderer = _context2.sent;
                renderer.renderDocs(this.story, this.context, this.canvasElement, function() {
                  return _this2.channel.emit(DOCS_RENDERED, _this2.id);
                });
              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function render() {
        return _render.apply(this, arguments);
      }
      return render;
    }()
  }, {
    key: "rerender",
    value: function() {
      var _rerender = _asyncToGenerator$1(/* @__PURE__ */ regeneratorRuntime.mark(function _callee3() {
        var _global$FEATURES2;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if ((_global$FEATURES2 = window_1.FEATURES) !== null && _global$FEATURES2 !== void 0 && _global$FEATURES2.modernInlineRender) {
                  _context3.next = 3;
                  break;
                }
                _context3.next = 3;
                return this.render();
              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function rerender() {
        return _rerender.apply(this, arguments);
      }
      return rerender;
    }()
  }, {
    key: "teardown",
    value: function() {
      var _teardown = _asyncToGenerator$1(/* @__PURE__ */ regeneratorRuntime.mark(function _callee4() {
        var _ref, viewModeChanged, renderer, _args4 = arguments;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _ref = _args4.length > 0 && _args4[0] !== void 0 ? _args4[0] : {}, viewModeChanged = _ref.viewModeChanged;
                if (!(!viewModeChanged || !this.canvasElement)) {
                  _context4.next = 3;
                  break;
                }
                return _context4.abrupt("return");
              case 3:
                _context4.next = 5;
                return import("./renderDocs.js");
              case 5:
                renderer = _context4.sent;
                renderer.unmountDocs(this.canvasElement);
              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function teardown() {
        return _teardown.apply(this, arguments);
      }
      return teardown;
    }()
  }], [{
    key: "fromStoryRender",
    value: function fromStoryRender(storyRender) {
      var channel2 = storyRender.channel, store = storyRender.store, id = storyRender.id, story2 = storyRender.story;
      return new DocsRender2(channel2, store, id, story2);
    }
  }]);
  return DocsRender2;
}();
DocsRender.displayName = "DocsRender";
function _typeof$1(obj) {
  "@babel/helpers - typeof";
  return _typeof$1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$1(obj);
}
var _templateObject$2, _templateObject2, _templateObject3$1, _templateObject4$1;
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key2, arg) {
  try {
    var info2 = gen[key2](arg);
    var value2 = info2.value;
  } catch (error2) {
    reject(error2);
    return;
  }
  if (info2.done) {
    resolve(value2);
  } else {
    Promise.resolve(value2).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self2 = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self2, args);
      function _next(value2) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value2);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function _taggedTemplateLiteral$2(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _classCallCheck$4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$4(target2, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target2, descriptor.key, descriptor);
  }
}
function _createClass$4(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$4(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$4(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get2(target2, property2, receiver) {
      var base = _superPropBase(target2, property2);
      if (!base)
        return;
      var desc = Object.getOwnPropertyDescriptor(base, property2);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target2 : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
}
function _superPropBase(object, property2) {
  while (!Object.prototype.hasOwnProperty.call(object, property2)) {
    object = _getPrototypeOf(object);
    if (object === null)
      break;
  }
  return object;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result2;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result2 = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result2 = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result2);
  };
}
function _possibleConstructorReturn(self2, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self2);
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
var globalWindow$1 = window_1.window;
function focusInInput(event) {
  var target2 = event.target;
  return /input|textarea/i.test(target2.tagName) || target2.getAttribute("contenteditable") !== null;
}
var PreviewWeb = /* @__PURE__ */ function(_Preview) {
  _inherits(PreviewWeb2, _Preview);
  var _super = _createSuper(PreviewWeb2);
  function PreviewWeb2() {
    var _this;
    _classCallCheck$4(this, PreviewWeb2);
    _this = _super.call(this);
    _this.urlStore = void 0;
    _this.view = void 0;
    _this.previewEntryError = void 0;
    _this.currentSelection = void 0;
    _this.currentRender = void 0;
    _this.view = new WebView();
    _this.urlStore = new UrlStore();
    _this.storyStore.getSelection = browser(function() {
      return _this.urlStore.selection;
    }, dedent(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral$2(["\n        `__STORYBOOK_STORY_STORE__.getSelection()` is deprecated and will be removed in 7.0.\n  \n        To get the current selection, use the `useStoryContext()` hook from `@storybook/addons`.\n      "], ["\n        \\`__STORYBOOK_STORY_STORE__.getSelection()\\` is deprecated and will be removed in 7.0.\n  \n        To get the current selection, use the \\`useStoryContext()\\` hook from \\`@storybook/addons\\`.\n      "]))));
    return _this;
  }
  _createClass$4(PreviewWeb2, [{
    key: "setupListeners",
    value: function setupListeners() {
      _get(_getPrototypeOf(PreviewWeb2.prototype), "setupListeners", this).call(this);
      globalWindow$1.onkeydown = this.onKeydown.bind(this);
      this.channel.on(SET_CURRENT_STORY, this.onSetCurrentStory.bind(this));
      this.channel.on(UPDATE_QUERY_PARAMS, this.onUpdateQueryParams.bind(this));
      this.channel.on(PRELOAD_STORIES, this.onPreloadStories.bind(this));
    }
  }, {
    key: "initializeWithProjectAnnotations",
    value: function initializeWithProjectAnnotations(projectAnnotations) {
      var _this2 = this;
      return _get(_getPrototypeOf(PreviewWeb2.prototype), "initializeWithProjectAnnotations", this).call(this, projectAnnotations).then(function() {
        return _this2.setInitialGlobals();
      });
    }
  }, {
    key: "setInitialGlobals",
    value: function() {
      var _setInitialGlobals = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee() {
        var _ref, globals;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref = this.urlStore.selectionSpecifier || {}, globals = _ref.globals;
                if (globals) {
                  this.storyStore.globals.updateFromPersisted(globals);
                }
                this.emitGlobals();
              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function setInitialGlobals() {
        return _setInitialGlobals.apply(this, arguments);
      }
      return setInitialGlobals;
    }()
  }, {
    key: "initializeWithStoryIndex",
    value: function initializeWithStoryIndex(storyIndex) {
      var _this3 = this;
      return _get(_getPrototypeOf(PreviewWeb2.prototype), "initializeWithStoryIndex", this).call(this, storyIndex).then(function() {
        var _global$FEATURES;
        if (!((_global$FEATURES = window_1.FEATURES) !== null && _global$FEATURES !== void 0 && _global$FEATURES.storyStoreV7)) {
          _this3.channel.emit(SET_STORIES, _this3.storyStore.getSetStoriesPayload());
        }
        return _this3.selectSpecifiedStory();
      });
    }
  }, {
    key: "selectSpecifiedStory",
    value: function() {
      var _selectSpecifiedStory = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee2() {
        var _this$urlStore$select, storySpecifier, viewMode, args, storyId;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.urlStore.selectionSpecifier) {
                  _context2.next = 3;
                  break;
                }
                this.renderMissingStory();
                return _context2.abrupt("return");
              case 3:
                _this$urlStore$select = this.urlStore.selectionSpecifier, storySpecifier = _this$urlStore$select.storySpecifier, viewMode = _this$urlStore$select.viewMode, args = _this$urlStore$select.args;
                storyId = this.storyStore.storyIndex.storyIdFromSpecifier(storySpecifier);
                if (storyId) {
                  _context2.next = 8;
                  break;
                }
                if (storySpecifier === "*") {
                  this.renderStoryLoadingException(storySpecifier, new Error(dedent(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral$2(["\n            Couldn't find any stories in your Storybook.\n            - Please check your stories field of your main.js config.\n            - Also check the browser console and terminal for error messages.\n          "])))));
                } else {
                  this.renderStoryLoadingException(storySpecifier, new Error(dedent(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral$2(["\n            Couldn't find story matching '", "'.\n            - Are you sure a story with that id exists?\n            - Please check your stories field of your main.js config.\n            - Also check the browser console and terminal for error messages.\n          "])), storySpecifier)));
                }
                return _context2.abrupt("return");
              case 8:
                this.urlStore.setSelection({
                  storyId,
                  viewMode
                });
                this.channel.emit(STORY_SPECIFIED, this.urlStore.selection);
                this.channel.emit(CURRENT_STORY_WAS_SET, this.urlStore.selection);
                _context2.next = 13;
                return this.renderSelection({
                  persistedArgs: args
                });
              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function selectSpecifiedStory() {
        return _selectSpecifiedStory.apply(this, arguments);
      }
      return selectSpecifiedStory;
    }()
  }, {
    key: "onGetProjectAnnotationsChanged",
    value: function() {
      var _onGetProjectAnnotationsChanged = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee3(_ref22) {
        var getProjectAnnotations2;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                getProjectAnnotations2 = _ref22.getProjectAnnotations;
                _context3.next = 3;
                return _get(_getPrototypeOf(PreviewWeb2.prototype), "onGetProjectAnnotationsChanged", this).call(this, {
                  getProjectAnnotations: getProjectAnnotations2
                });
              case 3:
                this.renderSelection();
              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function onGetProjectAnnotationsChanged(_x) {
        return _onGetProjectAnnotationsChanged.apply(this, arguments);
      }
      return onGetProjectAnnotationsChanged;
    }()
  }, {
    key: "onStoriesChanged",
    value: function() {
      var _onStoriesChanged = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee4(_ref32) {
        var _global$FEATURES2;
        var importFn2, storyIndex;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                importFn2 = _ref32.importFn, storyIndex = _ref32.storyIndex;
                _get(_getPrototypeOf(PreviewWeb2.prototype), "onStoriesChanged", this).call(this, {
                  importFn: importFn2,
                  storyIndex
                });
                if ((_global$FEATURES2 = window_1.FEATURES) !== null && _global$FEATURES2 !== void 0 && _global$FEATURES2.storyStoreV7) {
                  _context4.next = 9;
                  break;
                }
                _context4.t0 = this.channel;
                _context4.t1 = SET_STORIES;
                _context4.next = 7;
                return this.storyStore.getSetStoriesPayload();
              case 7:
                _context4.t2 = _context4.sent;
                _context4.t0.emit.call(_context4.t0, _context4.t1, _context4.t2);
              case 9:
                if (!this.urlStore.selection) {
                  _context4.next = 14;
                  break;
                }
                _context4.next = 12;
                return this.renderSelection();
              case 12:
                _context4.next = 16;
                break;
              case 14:
                _context4.next = 16;
                return this.selectSpecifiedStory();
              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function onStoriesChanged(_x2) {
        return _onStoriesChanged.apply(this, arguments);
      }
      return onStoriesChanged;
    }()
  }, {
    key: "onKeydown",
    value: function onKeydown(event) {
      var _this$currentRender;
      if (!((_this$currentRender = this.currentRender) !== null && _this$currentRender !== void 0 && _this$currentRender.disableKeyListeners) && !focusInInput(event)) {
        var altKey = event.altKey, ctrlKey = event.ctrlKey, metaKey = event.metaKey, shiftKey = event.shiftKey, key2 = event.key, code = event.code, keyCode = event.keyCode;
        this.channel.emit(PREVIEW_KEYDOWN, {
          event: {
            altKey,
            ctrlKey,
            metaKey,
            shiftKey,
            key: key2,
            code,
            keyCode
          }
        });
      }
    }
  }, {
    key: "onSetCurrentStory",
    value: function onSetCurrentStory(selection) {
      this.urlStore.setSelection(Object.assign({
        viewMode: "story"
      }, selection));
      this.channel.emit(CURRENT_STORY_WAS_SET, this.urlStore.selection);
      this.renderSelection();
    }
  }, {
    key: "onUpdateQueryParams",
    value: function onUpdateQueryParams(queryParams) {
      this.urlStore.setQueryParams(queryParams);
    }
  }, {
    key: "onUpdateGlobals",
    value: function() {
      var _onUpdateGlobals = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee5(_ref42) {
        var globals;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                globals = _ref42.globals;
                _get(_getPrototypeOf(PreviewWeb2.prototype), "onUpdateGlobals", this).call(this, {
                  globals
                });
                if (!(this.currentRender instanceof DocsRender)) {
                  _context5.next = 5;
                  break;
                }
                _context5.next = 5;
                return this.currentRender.rerender();
              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function onUpdateGlobals(_x3) {
        return _onUpdateGlobals.apply(this, arguments);
      }
      return onUpdateGlobals;
    }()
  }, {
    key: "onUpdateArgs",
    value: function() {
      var _onUpdateArgs = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee6(_ref52) {
        var storyId, updatedArgs;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                storyId = _ref52.storyId, updatedArgs = _ref52.updatedArgs;
                _get(_getPrototypeOf(PreviewWeb2.prototype), "onUpdateArgs", this).call(this, {
                  storyId,
                  updatedArgs
                });
                if (!(this.currentRender instanceof DocsRender)) {
                  _context6.next = 5;
                  break;
                }
                _context6.next = 5;
                return this.currentRender.rerender();
              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
      function onUpdateArgs(_x4) {
        return _onUpdateArgs.apply(this, arguments);
      }
      return onUpdateArgs;
    }()
  }, {
    key: "onPreloadStories",
    value: function() {
      var _onPreloadStories = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee7(ids) {
        var _this4 = this;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return Promise.all(ids.map(function(id) {
                  return _this4.storyStore.loadStory({
                    storyId: id
                  });
                }));
              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));
      function onPreloadStories(_x5) {
        return _onPreloadStories.apply(this, arguments);
      }
      return onPreloadStories;
    }()
  }, {
    key: "renderSelection",
    value: function() {
      var _renderSelection = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee8() {
        var _this$currentSelectio, _this$currentSelectio2, _lastRender, _this5 = this, _global$FEATURES3;
        var _ref6, persistedArgs, selection, storyId, storyIdChanged, viewModeChanged, lastSelection, lastRender, storyRender, implementationChanged, _storyRender$context, parameters, initialArgs, argTypes, args, _args8 = arguments;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _ref6 = _args8.length > 0 && _args8[0] !== void 0 ? _args8[0] : {}, persistedArgs = _ref6.persistedArgs;
                selection = this.urlStore.selection;
                if (selection) {
                  _context8.next = 4;
                  break;
                }
                throw new Error("Cannot render story as no selection was made");
              case 4:
                storyId = selection.storyId;
                storyIdChanged = ((_this$currentSelectio = this.currentSelection) === null || _this$currentSelectio === void 0 ? void 0 : _this$currentSelectio.storyId) !== storyId;
                viewModeChanged = ((_this$currentSelectio2 = this.currentSelection) === null || _this$currentSelectio2 === void 0 ? void 0 : _this$currentSelectio2.viewMode) !== selection.viewMode;
                if (selection.viewMode === "story") {
                  this.view.showPreparingStory({
                    immediate: viewModeChanged
                  });
                } else {
                  this.view.showPreparingDocs();
                }
                lastSelection = this.currentSelection;
                lastRender = this.currentRender;
                if (!((_lastRender = lastRender) !== null && _lastRender !== void 0 && _lastRender.isPreparing())) {
                  _context8.next = 14;
                  break;
                }
                _context8.next = 13;
                return this.teardownRender(lastRender);
              case 13:
                lastRender = null;
              case 14:
                storyRender = new StoryRender(this.channel, this.storyStore, function() {
                  _this5.view.showStoryDuringRender();
                  return _this5.renderToDOM.apply(_this5, arguments);
                }, this.mainStoryCallbacks(storyId), storyId, "story");
                this.currentSelection = selection;
                this.currentRender = storyRender;
                _context8.prev = 17;
                _context8.next = 20;
                return storyRender.prepare();
              case 20:
                _context8.next = 29;
                break;
              case 22:
                _context8.prev = 22;
                _context8.t0 = _context8["catch"](17);
                if (!(_context8.t0 !== PREPARE_ABORTED)) {
                  _context8.next = 28;
                  break;
                }
                _context8.next = 27;
                return this.teardownRender(lastRender);
              case 27:
                this.renderStoryLoadingException(storyId, _context8.t0);
              case 28:
                return _context8.abrupt("return");
              case 29:
                implementationChanged = !storyIdChanged && !storyRender.isEqual(lastRender);
                if (persistedArgs)
                  this.storyStore.args.updateFromPersisted(storyRender.story, persistedArgs);
                _storyRender$context = storyRender.context(), parameters = _storyRender$context.parameters, initialArgs = _storyRender$context.initialArgs, argTypes = _storyRender$context.argTypes, args = _storyRender$context.args;
                if (!(lastRender && !storyIdChanged && !implementationChanged && !viewModeChanged)) {
                  _context8.next = 37;
                  break;
                }
                this.currentRender = lastRender;
                this.channel.emit(STORY_UNCHANGED, storyId);
                this.view.showMain();
                return _context8.abrupt("return");
              case 37:
                _context8.next = 39;
                return this.teardownRender(lastRender, {
                  viewModeChanged
                });
              case 39:
                if (lastSelection && (storyIdChanged || viewModeChanged)) {
                  this.channel.emit(STORY_CHANGED, storyId);
                }
                if ((_global$FEATURES3 = window_1.FEATURES) !== null && _global$FEATURES3 !== void 0 && _global$FEATURES3.storyStoreV7) {
                  this.channel.emit(STORY_PREPARED, {
                    id: storyId,
                    parameters,
                    initialArgs,
                    argTypes,
                    args
                  });
                }
                if (implementationChanged || persistedArgs) {
                  this.channel.emit(STORY_ARGS_UPDATED, {
                    storyId,
                    args
                  });
                }
                if (selection.viewMode === "docs" || parameters.docsOnly) {
                  this.currentRender = DocsRender.fromStoryRender(storyRender);
                  this.currentRender.renderToElement(this.view.prepareForDocs(), this.renderStoryToElement.bind(this));
                } else {
                  this.storyRenders.push(storyRender);
                  this.currentRender.renderToElement(this.view.prepareForStory(storyRender.story));
                }
              case 43:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[17, 22]]);
      }));
      function renderSelection() {
        return _renderSelection.apply(this, arguments);
      }
      return renderSelection;
    }()
  }, {
    key: "renderStoryToElement",
    value: function renderStoryToElement(story2, element) {
      var _this6 = this;
      var render = new StoryRender(this.channel, this.storyStore, this.renderToDOM, this.inlineStoryCallbacks(story2.id), story2.id, "docs", story2);
      render.renderToElement(element);
      this.storyRenders.push(render);
      return /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee9() {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _this6.teardownRender(render);
              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));
    }
  }, {
    key: "teardownRender",
    value: function() {
      var _teardownRender = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee10(render) {
        var _ref8, viewModeChanged, _args10 = arguments;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _ref8 = _args10.length > 1 && _args10[1] !== void 0 ? _args10[1] : {}, viewModeChanged = _ref8.viewModeChanged;
                this.storyRenders = this.storyRenders.filter(function(r) {
                  return r !== render;
                });
                _context10.next = 4;
                return render === null || render === void 0 ? void 0 : render.teardown({
                  viewModeChanged
                });
              case 4:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
      function teardownRender(_x6) {
        return _teardownRender.apply(this, arguments);
      }
      return teardownRender;
    }()
  }, {
    key: "extract",
    value: function() {
      var _extract = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee11(options2) {
        var _global$FEATURES4;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (!this.previewEntryError) {
                  _context11.next = 2;
                  break;
                }
                throw this.previewEntryError;
              case 2:
                if (this.storyStore.projectAnnotations) {
                  _context11.next = 4;
                  break;
                }
                throw new Error(dedent(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral$2(["Failed to initialize Storybook.\n      \n      Do you have an error in your `preview.js`? Check your Storybook's browser console for errors."], ["Failed to initialize Storybook.\n      \n      Do you have an error in your \\`preview.js\\`? Check your Storybook's browser console for errors."]))));
              case 4:
                if (!((_global$FEATURES4 = window_1.FEATURES) !== null && _global$FEATURES4 !== void 0 && _global$FEATURES4.storyStoreV7)) {
                  _context11.next = 7;
                  break;
                }
                _context11.next = 7;
                return this.storyStore.cacheAllCSFFiles();
              case 7:
                return _context11.abrupt("return", this.storyStore.extract(options2));
              case 8:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));
      function extract(_x7) {
        return _extract.apply(this, arguments);
      }
      return extract;
    }()
  }, {
    key: "mainStoryCallbacks",
    value: function mainStoryCallbacks(storyId) {
      var _this7 = this;
      return {
        showMain: function showMain() {
          return _this7.view.showMain();
        },
        showError: function showError(err) {
          return _this7.renderError(storyId, err);
        },
        showException: function showException(err) {
          return _this7.renderException(storyId, err);
        }
      };
    }
  }, {
    key: "inlineStoryCallbacks",
    value: function inlineStoryCallbacks(storyId) {
      return {
        showMain: function showMain() {
        },
        showError: function showError(err) {
          return logger.error("Error rendering docs story (".concat(storyId, ")"), err);
        },
        showException: function showException(err) {
          return logger.error("Error rendering docs story (".concat(storyId, ")"), err);
        }
      };
    }
  }, {
    key: "renderPreviewEntryError",
    value: function renderPreviewEntryError(reason, err) {
      _get(_getPrototypeOf(PreviewWeb2.prototype), "renderPreviewEntryError", this).call(this, reason, err);
      this.view.showErrorDisplay(err);
    }
  }, {
    key: "renderMissingStory",
    value: function renderMissingStory() {
      this.view.showNoPreview();
      this.channel.emit(STORY_MISSING);
    }
  }, {
    key: "renderStoryLoadingException",
    value: function renderStoryLoadingException(storySpecifier, err) {
      logger.error("Unable to load story '".concat(storySpecifier, "':"));
      logger.error(err);
      this.view.showErrorDisplay(err);
      this.channel.emit(STORY_MISSING, storySpecifier);
    }
  }, {
    key: "renderException",
    value: function renderException(storyId, err) {
      this.channel.emit(STORY_THREW_EXCEPTION, err);
      this.channel.emit(STORY_RENDER_PHASE_CHANGED, {
        newPhase: "errored",
        storyId
      });
      if (err !== IGNORED_EXCEPTION) {
        this.view.showErrorDisplay(err);
        logger.error("Error rendering story '".concat(storyId, "':"));
        logger.error(err);
      }
    }
  }, {
    key: "renderError",
    value: function renderError(storyId, _ref9) {
      var title = _ref9.title, description = _ref9.description;
      logger.error("Error rendering story ".concat(title, ": ").concat(description));
      this.channel.emit(STORY_ERRORED, {
        title,
        description
      });
      this.channel.emit(STORY_RENDER_PHASE_CHANGED, {
        newPhase: "errored",
        storyId
      });
      this.view.showErrorDisplay({
        message: title,
        stack: description
      });
    }
  }]);
  return PreviewWeb2;
}(Preview);
var _excluded$1 = ["default", "__namedExportsOrder"];
var _templateObject$1;
function _objectWithoutProperties$1(source2, excluded) {
  if (source2 == null)
    return {};
  var target2 = _objectWithoutPropertiesLoose$1(source2, excluded);
  var key2, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source2);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key2 = sourceSymbolKeys[i];
      if (excluded.indexOf(key2) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source2, key2))
        continue;
      target2[key2] = source2[key2];
    }
  }
  return target2;
}
function _objectWithoutPropertiesLoose$1(source2, excluded) {
  if (source2 == null)
    return {};
  var target2 = {};
  var sourceKeys = Object.keys(source2);
  var key2, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key2 = sourceKeys[i];
    if (excluded.indexOf(key2) >= 0)
      continue;
    target2[key2] = source2[key2];
  }
  return target2;
}
function _taggedTemplateLiteral$1(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _slicedToArray$3(arr, i) {
  return _arrayWithHoles$3(arr) || _iterableToArrayLimit$3(arr, i) || _unsupportedIterableToArray$3(arr, i) || _nonIterableRest$3();
}
function _nonIterableRest$3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$3(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$3(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$3(o, minLen);
}
function _arrayLikeToArray$3(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$3(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$3(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classCallCheck$3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$3(target2, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target2, descriptor.key, descriptor);
  }
}
function _createClass$3(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$3(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$3(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var StoryStoreFacade = /* @__PURE__ */ function() {
  function StoryStoreFacade2() {
    _classCallCheck$3(this, StoryStoreFacade2);
    this.projectAnnotations = void 0;
    this.stories = void 0;
    this.csfExports = void 0;
    this.projectAnnotations = {
      loaders: [],
      decorators: [],
      parameters: {},
      argsEnhancers: [],
      argTypesEnhancers: [],
      args: {},
      argTypes: {}
    };
    this.stories = {};
    this.csfExports = {};
  }
  _createClass$3(StoryStoreFacade2, [{
    key: "importFn",
    value: function importFn2(path) {
      var _this = this;
      return synchronousPromise.SynchronousPromise.resolve().then(function() {
        var moduleExports = _this.csfExports[path];
        if (!moduleExports)
          throw new Error("Unknown path: ".concat(path));
        return moduleExports;
      });
    }
  }, {
    key: "getStoryIndex",
    value: function getStoryIndex(store) {
      var _this$projectAnnotati, _this$projectAnnotati2, _this2 = this;
      var fileNameOrder = Object.keys(this.csfExports);
      var storySortParameter = (_this$projectAnnotati = this.projectAnnotations.parameters) === null || _this$projectAnnotati === void 0 ? void 0 : (_this$projectAnnotati2 = _this$projectAnnotati.options) === null || _this$projectAnnotati2 === void 0 ? void 0 : _this$projectAnnotati2.storySort;
      var storyEntries = Object.entries(this.stories);
      var sortableV6 = storyEntries.map(function(_ref) {
        var _ref22 = _slicedToArray$3(_ref, 2), storyId = _ref22[0], importPath = _ref22[1].importPath;
        var exports = _this2.csfExports[importPath];
        var csfFile = store.processCSFFileWithCache(exports, importPath, exports.default.title);
        return [storyId, store.storyFromCSFFile({
          storyId,
          csfFile
        }), csfFile.meta.parameters, _this2.projectAnnotations.parameters];
      });
      var sortedV7;
      try {
        sortedV7 = sortStoriesV6(sortableV6, storySortParameter, fileNameOrder);
      } catch (err) {
        if (typeof storySortParameter === "function") {
          throw new Error(dedent(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral$1(["\n          Error sorting stories with sort parameter ", ":\n\n          > ", "\n          \n          Are you using a V7-style sort function in V6 compatibility mode?\n          \n          More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#v7-style-story-sort\n        "])), storySortParameter, err.message));
        }
        throw err;
      }
      var stories = sortedV7.reduce(function(acc, s) {
        acc[s.id] = _this2.stories[s.id];
        return acc;
      }, {});
      return {
        v: 3,
        stories
      };
    }
  }, {
    key: "clearFilenameExports",
    value: function clearFilenameExports(fileName) {
      var _this3 = this;
      if (!this.csfExports[fileName]) {
        return;
      }
      Object.entries(this.stories).forEach(function(_ref32) {
        var _ref42 = _slicedToArray$3(_ref32, 2), id = _ref42[0], importPath = _ref42[1].importPath;
        if (importPath === fileName) {
          delete _this3.stories[id];
        }
      });
      this.csfExports[fileName] = {};
    }
  }, {
    key: "addStoriesFromExports",
    value: function addStoriesFromExports(fileName, fileExports) {
      var _this4 = this;
      if (this.csfExports[fileName] === fileExports) {
        return;
      }
      this.clearFilenameExports(fileName);
      var defaultExport = fileExports.default, __namedExportsOrder = fileExports.__namedExportsOrder, namedExports = _objectWithoutProperties$1(fileExports, _excluded$1);
      var _ref52 = defaultExport || {}, componentId = _ref52.id, title = _ref52.title;
      var specifiers = (window_1.STORIES || []).map(function(specifier) {
        return Object.assign({}, specifier, {
          importPathMatcher: new RegExp(specifier.importPathMatcher)
        });
      });
      title = userOrAutoTitle(fileName, specifiers, title);
      if (!title) {
        logger.info("Unexpected default export without title in '".concat(fileName, "': ").concat(JSON.stringify(fileExports.default)));
        return;
      }
      this.csfExports[fileName] = Object.assign({}, fileExports, {
        default: Object.assign({}, defaultExport, {
          title
        })
      });
      var sortedExports = namedExports;
      if (Array.isArray(__namedExportsOrder)) {
        sortedExports = {};
        __namedExportsOrder.forEach(function(name2) {
          var namedExport = namedExports[name2];
          if (namedExport)
            sortedExports[name2] = namedExport;
        });
      }
      Object.entries(sortedExports).filter(function(_ref6) {
        var _ref7 = _slicedToArray$3(_ref6, 1), key2 = _ref7[0];
        return dist.isExportStory(key2, defaultExport);
      }).forEach(function(_ref8) {
        var _storyExport$paramete, _storyExport$story;
        var _ref9 = _slicedToArray$3(_ref8, 2), key2 = _ref9[0], storyExport = _ref9[1];
        var exportName = dist.storyNameFromExport(key2);
        var id = ((_storyExport$paramete = storyExport.parameters) === null || _storyExport$paramete === void 0 ? void 0 : _storyExport$paramete.__id) || dist.toId(componentId || title, exportName);
        var name2 = typeof storyExport !== "function" && storyExport.name || storyExport.storyName || ((_storyExport$story = storyExport.story) === null || _storyExport$story === void 0 ? void 0 : _storyExport$story.name) || exportName;
        _this4.stories[id] = {
          id,
          name: name2,
          title,
          importPath: fileName
        };
      });
    }
  }]);
  return StoryStoreFacade2;
}();
var _excluded = ["globals", "globalTypes"], _excluded2 = ["decorators", "loaders", "component", "args", "argTypes"], _excluded3 = ["component", "args", "argTypes"];
var _templateObject, _templateObject3, _templateObject4;
function _slicedToArray$2(arr, i) {
  return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$2();
}
function _nonIterableRest$2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$2(o, minLen);
}
function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$2(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _objectWithoutProperties(source2, excluded) {
  if (source2 == null)
    return {};
  var target2 = _objectWithoutPropertiesLoose(source2, excluded);
  var key2, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source2);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key2 = sourceSymbolKeys[i];
      if (excluded.indexOf(key2) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source2, key2))
        continue;
      target2[key2] = source2[key2];
    }
  }
  return target2;
}
function _objectWithoutPropertiesLoose(source2, excluded) {
  if (source2 == null)
    return {};
  var target2 = {};
  var sourceKeys = Object.keys(source2);
  var key2, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key2 = sourceKeys[i];
    if (excluded.indexOf(key2) >= 0)
      continue;
    target2[key2] = source2[key2];
  }
  return target2;
}
function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$2(target2, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target2, descriptor.key, descriptor);
  }
}
function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$2(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$2(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var warningAlternatives = {
  addDecorator: "Instead, use `export const decorators = [];` in your `preview.js`.",
  addParameters: "Instead, use `export const parameters = {};` in your `preview.js`.",
  addLoaders: "Instead, use `export const loaders = [];` in your `preview.js`."
};
var warningMessage = function warningMessage2(method) {
  return browser(function() {
  }, dedent(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  `", "` is deprecated, and will be removed in Storybook 7.0.\n\n  ", "\n\n  Read more at https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-addparameters-and-adddecorator)."], ["\n  \\`", "\\` is deprecated, and will be removed in Storybook 7.0.\n\n  ", "\n\n  Read more at https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-addparameters-and-adddecorator)."])), method, warningAlternatives[method]));
};
({
  addDecorator: warningMessage("addDecorator"),
  addParameters: warningMessage("addParameters"),
  addLoaders: warningMessage("addLoaders")
});
var invalidStoryTypes = /* @__PURE__ */ new Set(["string", "number", "boolean", "symbol"]);
var ClientApi = /* @__PURE__ */ function() {
  function ClientApi2() {
    var _this = this;
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, storyStore = _ref.storyStore;
    _classCallCheck$2(this, ClientApi2);
    this.facade = void 0;
    this.storyStore = void 0;
    this.addons = void 0;
    this.onImportFnChanged = void 0;
    this.lastFileName = 0;
    this.setAddon = browser(function(addon) {
      _this.addons = Object.assign({}, _this.addons, addon);
    }, dedent(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      `setAddon` is deprecated and will be removed in Storybook 7.0.\n\n      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-setaddon\n    "], ["\n      \\`setAddon\\` is deprecated and will be removed in Storybook 7.0.\n\n      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-setaddon\n    "]))));
    this.addDecorator = function(decorator) {
      _this.facade.projectAnnotations.decorators.push(decorator);
    };
    this.clearDecorators = browser(function() {
      _this.facade.projectAnnotations.decorators = [];
    }, dedent(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      `clearDecorators` is deprecated and will be removed in Storybook 7.0.\n\n      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-cleardecorators\n    "], ["\n      \\`clearDecorators\\` is deprecated and will be removed in Storybook 7.0.\n\n      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-cleardecorators\n    "]))));
    this.addParameters = function(_ref22) {
      var globals = _ref22.globals, globalTypes = _ref22.globalTypes, parameters = _objectWithoutProperties(_ref22, _excluded);
      _this.facade.projectAnnotations.parameters = combineParameters(_this.facade.projectAnnotations.parameters, parameters);
      if (globals) {
        _this.facade.projectAnnotations.globals = Object.assign({}, _this.facade.projectAnnotations.globals, globals);
      }
      if (globalTypes) {
        _this.facade.projectAnnotations.globalTypes = Object.assign({}, _this.facade.projectAnnotations.globalTypes, normalizeInputTypes(globalTypes));
      }
    };
    this.addLoader = function(loader) {
      _this.facade.projectAnnotations.loaders.push(loader);
    };
    this.addArgs = function(args) {
      _this.facade.projectAnnotations.args = Object.assign({}, _this.facade.projectAnnotations.args, args);
    };
    this.addArgTypes = function(argTypes) {
      _this.facade.projectAnnotations.argTypes = Object.assign({}, _this.facade.projectAnnotations.argTypes, normalizeInputTypes(argTypes));
    };
    this.addArgsEnhancer = function(enhancer) {
      _this.facade.projectAnnotations.argsEnhancers.push(enhancer);
    };
    this.addArgTypesEnhancer = function(enhancer) {
      _this.facade.projectAnnotations.argTypesEnhancers.push(enhancer);
    };
    this.storiesOf = function(kind, m) {
      if (!kind && typeof kind !== "string") {
        throw new Error("Invalid or missing kind provided for stories, should be a string");
      }
      if (!m) {
        logger.warn("Missing 'module' parameter for story with a kind of '".concat(kind, "'. It will break your HMR"));
      }
      if (m) {
        var proto = Object.getPrototypeOf(m);
        if (proto.exports && proto.exports.default) {
          logger.error("Illegal mix of CSF default export and storiesOf calls in a single file: ".concat(proto.i));
        }
      }
      var baseFilename = m && m.id ? "".concat(m.id) : (_this.lastFileName++).toString();
      var fileName = baseFilename;
      var i = 1;
      while (_this.facade.csfExports[fileName] && Object.keys(_this.facade.csfExports[fileName]).length > 0) {
        i += 1;
        fileName = "".concat(baseFilename, "-").concat(i);
      }
      if (m && m.hot && m.hot.accept) {
        m.hot.accept();
        m.hot.dispose(function() {
          _this.facade.clearFilenameExports(fileName);
          setTimeout(function() {
            var _this$onImportFnChang;
            (_this$onImportFnChang = _this.onImportFnChanged) === null || _this$onImportFnChang === void 0 ? void 0 : _this$onImportFnChang.call(_this, {
              importFn: _this.importFn.bind(_this)
            });
          }, 0);
        });
      }
      var hasAdded = false;
      var api = {
        kind: kind.toString(),
        add: function add() {
          return api;
        },
        addDecorator: function addDecorator() {
          return api;
        },
        addLoader: function addLoader() {
          return api;
        },
        addParameters: function addParameters() {
          return api;
        }
      };
      Object.keys(_this.addons).forEach(function(name2) {
        var addon = _this.addons[name2];
        api[name2] = function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          addon.apply(api, args);
          return api;
        };
      });
      var meta = {
        id: dist.sanitize(kind),
        title: kind,
        decorators: [],
        loaders: [],
        parameters: {}
      };
      _this.facade.csfExports[fileName] = {
        default: meta
      };
      var counter = 0;
      api.add = function(storyName, storyFn) {
        var parameters = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        hasAdded = true;
        if (typeof storyName !== "string") {
          throw new Error('Invalid or missing storyName provided for a "'.concat(kind, '" story.'));
        }
        if (!storyFn || Array.isArray(storyFn) || invalidStoryTypes.has(_typeof(storyFn))) {
          throw new Error('Cannot load story "'.concat(storyName, '" in "').concat(kind, '" due to invalid format. Storybook expected a function/object but received ').concat(_typeof(storyFn), " instead."));
        }
        var decorators = parameters.decorators, loaders = parameters.loaders, component = parameters.component, args = parameters.args, argTypes = parameters.argTypes, storyParameters = _objectWithoutProperties(parameters, _excluded2);
        var storyId = parameters.__id || dist.toId(kind, storyName);
        var csfExports = _this.facade.csfExports[fileName];
        csfExports["story".concat(counter)] = {
          name: storyName,
          parameters: Object.assign({
            fileName,
            __id: storyId
          }, storyParameters),
          decorators,
          loaders,
          args,
          argTypes,
          component,
          render: storyFn
        };
        counter += 1;
        _this.facade.stories[storyId] = {
          id: storyId,
          title: csfExports.default.title,
          name: storyName,
          importPath: fileName
        };
        return api;
      };
      api.addDecorator = function(decorator) {
        if (hasAdded)
          throw new Error("You cannot add a decorator after the first story for a kind.\nRead more here: https://github.com/storybookjs/storybook/blob/master/MIGRATION.md#can-no-longer-add-decoratorsparameters-after-stories");
        meta.decorators.push(decorator);
        return api;
      };
      api.addLoader = function(loader) {
        if (hasAdded)
          throw new Error("You cannot add a loader after the first story for a kind.");
        meta.loaders.push(loader);
        return api;
      };
      api.addParameters = function(_ref32) {
        var component = _ref32.component, args = _ref32.args, argTypes = _ref32.argTypes, parameters = _objectWithoutProperties(_ref32, _excluded3);
        if (hasAdded)
          throw new Error("You cannot add parameters after the first story for a kind.\nRead more here: https://github.com/storybookjs/storybook/blob/master/MIGRATION.md#can-no-longer-add-decoratorsparameters-after-stories");
        meta.parameters = combineParameters(meta.parameters, parameters);
        if (component)
          meta.component = component;
        if (args)
          meta.args = Object.assign({}, meta.args, args);
        if (argTypes)
          meta.argTypes = Object.assign({}, meta.argTypes, argTypes);
        return api;
      };
      return api;
    };
    this.getStorybook = function() {
      var stories = _this.storyStore.storyIndex.stories;
      var kinds = {};
      Object.entries(stories).forEach(function(_ref42) {
        var _ref52 = _slicedToArray$2(_ref42, 2), storyId = _ref52[0], _ref5$ = _ref52[1], title = _ref5$.title, name2 = _ref5$.name, importPath = _ref5$.importPath;
        if (!kinds[title]) {
          kinds[title] = {
            kind: title,
            fileName: importPath,
            stories: []
          };
        }
        var _this$storyStore$from = _this.storyStore.fromId(storyId), storyFn = _this$storyStore$from.storyFn;
        kinds[title].stories.push({
          name: name2,
          render: storyFn
        });
      });
      return Object.values(kinds);
    };
    this.raw = function() {
      return _this.storyStore.raw();
    };
    this.facade = new StoryStoreFacade();
    this.addons = {};
    this.storyStore = storyStore;
  }
  _createClass$2(ClientApi2, [{
    key: "importFn",
    value: function importFn2(path) {
      return this.facade.importFn(path);
    }
  }, {
    key: "getStoryIndex",
    value: function getStoryIndex() {
      if (!this.storyStore) {
        throw new Error("Cannot get story index before setting storyStore");
      }
      return this.facade.getStoryIndex(this.storyStore);
    }
  }, {
    key: "_storyStore",
    get: function get2() {
      return this.storyStore;
    }
  }]);
  return ClientApi2;
}();
var hasSymbols$1 = shams$1;
var shams = function hasToStringTagShams() {
  return hasSymbols$1() && !!Symbol.toStringTag;
};
var callBound = callBound$2;
var hasToStringTag = shams();
var has;
var $exec;
var isRegexMarker;
var badStringifier;
if (hasToStringTag) {
  has = callBound("Object.prototype.hasOwnProperty");
  $exec = callBound("RegExp.prototype.exec");
  isRegexMarker = {};
  var throwRegexMarker = function() {
    throw isRegexMarker;
  };
  badStringifier = {
    toString: throwRegexMarker,
    valueOf: throwRegexMarker
  };
  if (typeof Symbol.toPrimitive === "symbol") {
    badStringifier[Symbol.toPrimitive] = throwRegexMarker;
  }
}
var $toString = callBound("Object.prototype.toString");
var gOPD = Object.getOwnPropertyDescriptor;
var regexClass = "[object RegExp]";
var isRegex = hasToStringTag ? function isRegex2(value2) {
  if (!value2 || typeof value2 !== "object") {
    return false;
  }
  var descriptor = gOPD(value2, "lastIndex");
  var hasLastIndexDataProperty = descriptor && has(descriptor, "value");
  if (!hasLastIndexDataProperty) {
    return false;
  }
  try {
    $exec(value2, badStringifier);
  } catch (e) {
    return e === isRegexMarker;
  }
} : function isRegex3(value2) {
  if (!value2 || typeof value2 !== "object" && typeof value2 !== "function") {
    return false;
  }
  return $toString(value2) === regexClass;
};
var isFunction_1 = isFunction;
var toString = Object.prototype.toString;
function isFunction(fn) {
  if (!fn) {
    return false;
  }
  var string = toString.call(fn);
  return string === "[object Function]" || typeof fn === "function" && string !== "[object RegExp]" || typeof window !== "undefined" && (fn === window.setTimeout || fn === window.alert || fn === window.confirm || fn === window.prompt);
}
var isSymbol$1 = { exports: {} };
var toStr = Object.prototype.toString;
var hasSymbols = hasSymbols$3();
if (hasSymbols) {
  var symToStr = Symbol.prototype.toString;
  var symStringRegex = /^Symbol\(.*\)$/;
  var isSymbolObject = function isRealSymbolObject(value2) {
    if (typeof value2.valueOf() !== "symbol") {
      return false;
    }
    return symStringRegex.test(symToStr.call(value2));
  };
  isSymbol$1.exports = function isSymbol2(value2) {
    if (typeof value2 === "symbol") {
      return true;
    }
    if (toStr.call(value2) !== "[object Symbol]") {
      return false;
    }
    try {
      return isSymbolObject(value2);
    } catch (e) {
      return false;
    }
  };
} else {
  isSymbol$1.exports = function isSymbol2(value2) {
    return false;
  };
}
var isSymbol = isSymbol$1.exports;
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function isObject$1(val) {
  return val != null && typeof val === "object" && Array.isArray(val) === false;
}
function ownKeys$1(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$1(target2) {
  for (var i = 1; i < arguments.length; i++) {
    var source2 = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$1(Object(source2), true).forEach(function(key2) {
        _defineProperty$1(target2, key2, source2[key2]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source2));
    } else {
      ownKeys$1(Object(source2)).forEach(function(key2) {
        Object.defineProperty(target2, key2, Object.getOwnPropertyDescriptor(source2, key2));
      });
    }
  }
  return target2;
}
function _defineProperty$1(obj, key2, value2) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, { value: value2, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key2] = value2;
  }
  return obj;
}
var eventProperties = ["bubbles", "cancelBubble", "cancelable", "composed", "currentTarget", "defaultPrevented", "eventPhase", "isTrusted", "returnValue", "srcElement", "target", "timeStamp", "type"];
var customEventSpecificProperties = ["detail"];
function extractEventHiddenProperties(event) {
  var rebuildEvent = eventProperties.filter(function(value2) {
    return event[value2] !== void 0;
  }).reduce(function(acc, value2) {
    return _objectSpread$1(_objectSpread$1({}, acc), {}, _defineProperty$1({}, value2, event[value2]));
  }, {});
  if (event instanceof CustomEvent) {
    customEventSpecificProperties.filter(function(value2) {
      return event[value2] !== void 0;
    }).forEach(function(value2) {
      rebuildEvent[value2] = event[value2];
    });
  }
  return rebuildEvent;
}
function ownKeys(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread(target2) {
  for (var i = 1; i < arguments.length; i++) {
    var source2 = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source2), true).forEach(function(key2) {
        _defineProperty(target2, key2, source2[key2]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source2));
    } else {
      ownKeys(Object(source2)).forEach(function(key2) {
        Object.defineProperty(target2, key2, Object.getOwnPropertyDescriptor(source2, key2));
      });
    }
  }
  return target2;
}
function _defineProperty(obj, key2, value2) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, { value: value2, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key2] = value2;
  }
  return obj;
}
function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
}
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$1(o, minLen);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$1(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr))
    return arr;
}
var isRunningInBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
var isObject = isObject$1;
var removeCodeComments = function removeCodeComments2(code) {
  var inQuoteChar = null;
  var inBlockComment = false;
  var inLineComment = false;
  var inRegexLiteral = false;
  var newCode = "";
  if (code.indexOf("//") >= 0 || code.indexOf("/*") >= 0) {
    for (var i = 0; i < code.length; i += 1) {
      if (!inQuoteChar && !inBlockComment && !inLineComment && !inRegexLiteral) {
        if (code[i] === '"' || code[i] === "'" || code[i] === "`") {
          inQuoteChar = code[i];
        } else if (code[i] === "/" && code[i + 1] === "*") {
          inBlockComment = true;
        } else if (code[i] === "/" && code[i + 1] === "/") {
          inLineComment = true;
        } else if (code[i] === "/" && code[i + 1] !== "/") {
          inRegexLiteral = true;
        }
      } else {
        if (inQuoteChar && (code[i] === inQuoteChar && code[i - 1] !== "\\" || code[i] === "\n" && inQuoteChar !== "`")) {
          inQuoteChar = null;
        }
        if (inRegexLiteral && (code[i] === "/" && code[i - 1] !== "\\" || code[i] === "\n")) {
          inRegexLiteral = false;
        }
        if (inBlockComment && code[i - 1] === "/" && code[i - 2] === "*") {
          inBlockComment = false;
        }
        if (inLineComment && code[i] === "\n") {
          inLineComment = false;
        }
      }
      if (!inBlockComment && !inLineComment) {
        newCode += code[i];
      }
    }
  } else {
    newCode = code;
  }
  return newCode;
};
var cleanCode = memoize$2(1e4)(function(code) {
  return removeCodeComments(code).replace(/\n\s*/g, "").trim();
});
var convertShorthandMethods = function convertShorthandMethods2(key2, stringified) {
  var fnHead = stringified.slice(0, stringified.indexOf("{"));
  var fnBody = stringified.slice(stringified.indexOf("{"));
  if (fnHead.includes("=>")) {
    return stringified;
  }
  if (fnHead.includes("function")) {
    return stringified;
  }
  var modifiedHead = fnHead;
  modifiedHead = modifiedHead.replace(key2, "function");
  return modifiedHead + fnBody;
};
var dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
var isJSON = function isJSON2(input) {
  return input.match(/^[\[\{\"\}].*[\]\}\"]$/);
};
function convertUnconventionalData(data) {
  if (!isObject(data)) {
    return data;
  }
  var result2 = data;
  var wasMutated = false;
  if (isRunningInBrowser && data instanceof Event) {
    result2 = extractEventHiddenProperties(result2);
    wasMutated = true;
  }
  result2 = Object.keys(result2).reduce(function(acc, key2) {
    try {
      var _result$key;
      (_result$key = result2[key2]) === null || _result$key === void 0 ? void 0 : _result$key.toJSON;
      acc[key2] = result2[key2];
    } catch (err) {
      wasMutated = true;
    }
    return acc;
  }, {});
  return wasMutated ? result2 : data;
}
var replacer = function replacer2(options2) {
  var objects;
  var map3;
  var stack;
  var keys2;
  return function replace2(key2, value2) {
    try {
      if (key2 === "") {
        keys2 = [];
        objects = /* @__PURE__ */ new Map([[value2, "[]"]]);
        map3 = /* @__PURE__ */ new Map();
        stack = [];
        return value2;
      }
      var origin = map3.get(this) || this;
      while (stack.length && origin !== stack[0]) {
        stack.shift();
        keys2.pop();
      }
      if (typeof value2 === "boolean") {
        return value2;
      }
      if (value2 === void 0) {
        if (!options2.allowUndefined) {
          return void 0;
        }
        return "_undefined_";
      }
      if (value2 === null) {
        return null;
      }
      if (typeof value2 === "number") {
        if (value2 === -Infinity) {
          return "_-Infinity_";
        }
        if (value2 === Infinity) {
          return "_Infinity_";
        }
        if (Number.isNaN(value2)) {
          return "_NaN_";
        }
        return value2;
      }
      if (typeof value2 === "bigint") {
        return "_bigint_".concat(value2.toString());
      }
      if (typeof value2 === "string") {
        if (dateFormat.test(value2)) {
          if (!options2.allowDate) {
            return void 0;
          }
          return "_date_".concat(value2);
        }
        return value2;
      }
      if (isRegex(value2)) {
        if (!options2.allowRegExp) {
          return void 0;
        }
        return "_regexp_".concat(value2.flags, "|").concat(value2.source);
      }
      if (isFunction_1(value2)) {
        if (!options2.allowFunction) {
          return void 0;
        }
        var name2 = value2.name;
        var stringified = value2.toString();
        if (!stringified.match(/(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/)) {
          return "_function_".concat(name2, "|").concat(cleanCode(convertShorthandMethods(key2, stringified)));
        }
        return "_function_".concat(name2, "|").concat(function() {
        }.toString());
      }
      if (isSymbol(value2)) {
        if (!options2.allowSymbol) {
          return void 0;
        }
        var globalRegistryKey = Symbol.keyFor(value2);
        if (globalRegistryKey !== void 0) {
          return "_gsymbol_".concat(globalRegistryKey);
        }
        return "_symbol_".concat(value2.toString().slice(7, -1));
      }
      if (stack.length >= options2.maxDepth) {
        if (Array.isArray(value2)) {
          return "[Array(".concat(value2.length, ")]");
        }
        return "[Object]";
      }
      if (value2 === this) {
        return "_duplicate_".concat(JSON.stringify(keys2));
      }
      if (value2.constructor && value2.constructor.name && value2.constructor.name !== "Object" && !Array.isArray(value2) && !options2.allowClass) {
        return void 0;
      }
      var found = objects.get(value2);
      if (!found) {
        var converted = Array.isArray(value2) ? value2 : convertUnconventionalData(value2);
        if (value2.constructor && value2.constructor.name && value2.constructor.name !== "Object" && !Array.isArray(value2) && options2.allowClass) {
          try {
            Object.assign(converted, {
              "_constructor-name_": value2.constructor.name
            });
          } catch (e) {
          }
        }
        keys2.push(key2);
        stack.unshift(converted);
        objects.set(value2, JSON.stringify(keys2));
        if (value2 !== converted) {
          map3.set(value2, converted);
        }
        return converted;
      }
      return "_duplicate_".concat(found);
    } catch (e) {
      return void 0;
    }
  };
};
var reviver = function reviver(options) {
  var refs = [];
  var root;
  return function revive(key, value) {
    if (key === "") {
      root = value;
      refs.forEach(function(_ref) {
        var target2 = _ref.target, container = _ref.container, replacement = _ref.replacement;
        var replacementArr = isJSON(replacement) ? JSON.parse(replacement) : replacement.split(".");
        if (replacementArr.length === 0) {
          container[target2] = root;
        } else {
          container[target2] = get_1(root, replacementArr);
        }
      });
    }
    if (key === "_constructor-name_") {
      return value;
    }
    if (isObject(value) && value["_constructor-name_"] && options.allowFunction) {
      var name = value["_constructor-name_"];
      if (name !== "Object") {
        var Fn = new Function("return function ".concat(name.replace(/[\W_]+/g, ""), "(){}"))();
        Object.setPrototypeOf(value, new Fn());
      }
      delete value["_constructor-name_"];
      return value;
    }
    if (typeof value === "string" && value.startsWith("_function_") && options.allowFunction) {
      var _ref2 = value.match(/_function_([^|]*)\|(.*)/) || [], _ref3 = _slicedToArray$1(_ref2, 3), _name = _ref3[1], source = _ref3[2];
      var sourceSanitized = source.replace(/[(\(\))|\\| |\]|`]*$/, "");
      if (!options.lazyEval) {
        return eval("(".concat(sourceSanitized, ")"));
      }
      var result = function result() {
        var f = eval("(".concat(sourceSanitized, ")"));
        return f.apply(void 0, arguments);
      };
      Object.defineProperty(result, "toString", {
        value: function value2() {
          return sourceSanitized;
        }
      });
      Object.defineProperty(result, "name", {
        value: _name
      });
      return result;
    }
    if (typeof value === "string" && value.startsWith("_regexp_") && options.allowRegExp) {
      var _ref4 = value.match(/_regexp_([^|]*)\|(.*)/) || [], _ref5 = _slicedToArray$1(_ref4, 3), flags = _ref5[1], _source = _ref5[2];
      return new RegExp(_source, flags);
    }
    if (typeof value === "string" && value.startsWith("_date_") && options.allowDate) {
      return new Date(value.replace("_date_", ""));
    }
    if (typeof value === "string" && value.startsWith("_duplicate_")) {
      refs.push({
        target: key,
        container: this,
        replacement: value.replace(/^_duplicate_/, "")
      });
      return null;
    }
    if (typeof value === "string" && value.startsWith("_symbol_") && options.allowSymbol) {
      return Symbol(value.replace("_symbol_", ""));
    }
    if (typeof value === "string" && value.startsWith("_gsymbol_") && options.allowSymbol) {
      return Symbol["for"](value.replace("_gsymbol_", ""));
    }
    if (typeof value === "string" && value === "_-Infinity_") {
      return -Infinity;
    }
    if (typeof value === "string" && value === "_Infinity_") {
      return Infinity;
    }
    if (typeof value === "string" && value === "_NaN_") {
      return NaN;
    }
    if (typeof value === "string" && value.startsWith("_bigint_") && typeof BigInt === "function") {
      return BigInt(value.replace("_bigint_", ""));
    }
    return value;
  };
};
var defaultOptions = {
  maxDepth: 10,
  space: void 0,
  allowFunction: true,
  allowRegExp: true,
  allowDate: true,
  allowClass: true,
  allowUndefined: true,
  allowSymbol: true,
  lazyEval: true
};
var stringify = function stringify3(data) {
  var options2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var mergedOptions = _objectSpread(_objectSpread({}, defaultOptions), options2);
  return JSON.stringify(convertUnconventionalData(data), replacer(mergedOptions), options2.space);
};
var mutator = function mutator2() {
  var mutated = /* @__PURE__ */ new Map();
  return function mutateUndefined(value2) {
    if (isObject(value2)) {
      Object.entries(value2).forEach(function(_ref6) {
        var _ref7 = _slicedToArray$1(_ref6, 2), k = _ref7[0], v = _ref7[1];
        if (v === "_undefined_") {
          value2[k] = void 0;
        } else if (!mutated.get(v)) {
          mutated.set(v, true);
          mutateUndefined(v);
        }
      });
    }
    if (Array.isArray(value2)) {
      value2.forEach(function(v, index) {
        if (v === "_undefined_") {
          mutated.set(v, true);
          value2[index] = void 0;
        } else if (!mutated.get(v)) {
          mutated.set(v, true);
          mutateUndefined(v);
        }
      });
    }
  };
};
var parse = function parse2(data) {
  var options2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var mergedOptions = _objectSpread(_objectSpread({}, defaultOptions), options2);
  var result2 = JSON.parse(data, reviver(mergedOptions));
  mutator()(result2);
  return result2;
};
function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1(target2, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target2, descriptor.key, descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$1(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var globalWindow = window_1.window, document$1 = window_1.document, location = window_1.location;
var KEY = "storybook-channel";
var defaultEventOptions = {
  allowFunction: true,
  maxDepth: 25
};
var PostmsgTransport = /* @__PURE__ */ function() {
  function PostmsgTransport2(config2) {
    _classCallCheck$1(this, PostmsgTransport2);
    this.config = config2;
    this.buffer = void 0;
    this.handler = void 0;
    this.connected = void 0;
    this.buffer = [];
    this.handler = null;
    globalWindow.addEventListener("message", this.handleEvent.bind(this), false);
    if (config2.page !== "manager" && config2.page !== "preview") {
      throw new Error('postmsg-channel: "config.page" cannot be "'.concat(config2.page, '"'));
    }
  }
  _createClass$1(PostmsgTransport2, [{
    key: "setHandler",
    value: function setHandler(handler) {
      var _this = this;
      this.handler = function() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        handler.apply(_this, args);
        if (!_this.connected && _this.getLocalFrame().length) {
          _this.flush();
          _this.connected = true;
        }
      };
    }
  }, {
    key: "send",
    value: function send(event, options2) {
      var _this2 = this;
      var _ref = options2 || {}, target2 = _ref.target, allowRegExp = _ref.allowRegExp, allowFunction = _ref.allowFunction, allowSymbol = _ref.allowSymbol, allowDate = _ref.allowDate, allowUndefined = _ref.allowUndefined, allowClass = _ref.allowClass, maxDepth = _ref.maxDepth, space = _ref.space, lazyEval = _ref.lazyEval;
      var eventOptions = Object.fromEntries(Object.entries({
        allowRegExp,
        allowFunction,
        allowSymbol,
        allowDate,
        allowUndefined,
        allowClass,
        maxDepth,
        space,
        lazyEval
      }).filter(function(_ref22) {
        var _ref32 = _slicedToArray(_ref22, 2);
        _ref32[0];
        var v = _ref32[1];
        return typeof v !== "undefined";
      }));
      var stringifyOptions = Object.assign({}, defaultEventOptions, window_1.CHANNEL_OPTIONS || {}, eventOptions);
      if (options2 && Number.isInteger(options2.depth)) {
        stringifyOptions.maxDepth = options2.depth;
      }
      var frames = this.getFrames(target2);
      var query = lib$1.parse(location.search, {
        ignoreQueryPrefix: true
      });
      var data = stringify({
        key: KEY,
        event,
        refId: query.refId
      }, stringifyOptions);
      if (!frames.length) {
        return new Promise(function(resolve, reject) {
          _this2.buffer.push({
            event,
            resolve,
            reject
          });
        });
      }
      if (this.buffer.length) {
        this.flush();
      }
      frames.forEach(function(f2) {
        try {
          f2.postMessage(data, "*");
        } catch (e) {
          console.error("sending over postmessage fail");
        }
      });
      return Promise.resolve(null);
    }
  }, {
    key: "flush",
    value: function flush() {
      var _this3 = this;
      var buffer = this.buffer;
      this.buffer = [];
      buffer.forEach(function(item) {
        _this3.send(item.event).then(item.resolve).catch(item.reject);
      });
    }
  }, {
    key: "getFrames",
    value: function getFrames(target2) {
      if (this.config.page === "manager") {
        var nodes = _toConsumableArray(document$1.querySelectorAll("iframe[data-is-storybook][data-is-loaded]"));
        var list = nodes.filter(function(e) {
          try {
            return !!e.contentWindow && e.dataset.isStorybook !== void 0 && e.id === target2;
          } catch (er) {
            return false;
          }
        }).map(function(e) {
          return e.contentWindow;
        });
        return list.length ? list : this.getCurrentFrames();
      }
      if (globalWindow && globalWindow.parent && globalWindow.parent !== globalWindow) {
        return [globalWindow.parent];
      }
      return [];
    }
  }, {
    key: "getCurrentFrames",
    value: function getCurrentFrames() {
      if (this.config.page === "manager") {
        var list = _toConsumableArray(document$1.querySelectorAll('[data-is-storybook="true"]'));
        return list.map(function(e) {
          return e.contentWindow;
        });
      }
      if (globalWindow && globalWindow.parent) {
        return [globalWindow.parent];
      }
      return [];
    }
  }, {
    key: "getLocalFrame",
    value: function getLocalFrame() {
      if (this.config.page === "manager") {
        var list = _toConsumableArray(document$1.querySelectorAll("#storybook-preview-iframe"));
        return list.map(function(e) {
          return e.contentWindow;
        });
      }
      if (globalWindow && globalWindow.parent) {
        return [globalWindow.parent];
      }
      return [];
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(rawEvent) {
      try {
        var data = rawEvent.data;
        var _ref42 = typeof data === "string" && isJSON(data) ? parse(data, window_1.CHANNEL_OPTIONS || {}) : data, key2 = _ref42.key, event = _ref42.event, refId = _ref42.refId;
        if (key2 === KEY) {
          var pageString = this.config.page === "manager" ? '<span style="color: #37D5D3; background: black"> manager </span>' : '<span style="color: #1EA7FD; background: black"> preview </span>';
          var eventString = Object.values(EVENTS).includes(event.type) ? '<span style="color: #FF4785">'.concat(event.type, "</span>") : '<span style="color: #FFAE00">'.concat(event.type, "</span>");
          if (refId) {
            event.refId = refId;
          }
          event.source = this.config.page === "preview" ? rawEvent.origin : getEventSourceUrl(rawEvent);
          if (!event.source) {
            pretty.error("".concat(pageString, " received ").concat(eventString, " but was unable to determine the source of the event"));
            return;
          }
          var message = "".concat(pageString, " received ").concat(eventString, " (").concat(data.length, ")");
          pretty.debug.apply(pretty, [location.origin !== event.source ? message : "".concat(message, ' <span style="color: gray">(on ').concat(location.origin, " from ").concat(event.source, ")</span>")].concat(_toConsumableArray(event.args)));
          this.handler(event);
        }
      } catch (error2) {
        logger.error(error2);
      }
    }
  }]);
  return PostmsgTransport2;
}();
var getEventSourceUrl = function getEventSourceUrl2(event) {
  var frames = _toConsumableArray(document$1.querySelectorAll("iframe[data-is-storybook]"));
  var _frames$filter = frames.filter(function(element) {
    try {
      return element.contentWindow === event.source;
    } catch (err) {
    }
    var src3 = element.getAttribute("src");
    var origin;
    try {
      var _URL = new URL(src3, document$1.location);
      origin = _URL.origin;
    } catch (err) {
      return false;
    }
    return origin === event.origin;
  }), _frames$filter2 = _toArray(_frames$filter), frame = _frames$filter2[0], remainder = _frames$filter2.slice(1);
  if (frame && remainder.length === 0) {
    var src2 = frame.getAttribute("src");
    var _URL2 = new URL(src2, document$1.location), protocol = _URL2.protocol, host = _URL2.host, pathname = _URL2.pathname;
    return "".concat(protocol, "//").concat(host).concat(pathname);
  }
  if (remainder.length > 0) {
    logger.error("found multiple candidates for event source");
  }
  return null;
};
function createChannel$1(_ref52) {
  var page = _ref52.page;
  var transport = new PostmsgTransport({
    page
  });
  return new Channel$1({
    transport
  });
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target2, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target2, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var WebSocket = window_1.WebSocket;
var WebsocketTransport = /* @__PURE__ */ function() {
  function WebsocketTransport2(_ref) {
    var url = _ref.url, onError = _ref.onError;
    _classCallCheck(this, WebsocketTransport2);
    this.socket = void 0;
    this.handler = void 0;
    this.buffer = [];
    this.isReady = false;
    this.connect(url, onError);
  }
  _createClass(WebsocketTransport2, [{
    key: "setHandler",
    value: function setHandler(handler) {
      this.handler = handler;
    }
  }, {
    key: "send",
    value: function send(event) {
      if (!this.isReady) {
        this.sendLater(event);
      } else {
        this.sendNow(event);
      }
    }
  }, {
    key: "sendLater",
    value: function sendLater(event) {
      this.buffer.push(event);
    }
  }, {
    key: "sendNow",
    value: function sendNow(event) {
      var data = stringify(event, {
        maxDepth: 15,
        allowFunction: true
      });
      this.socket.send(data);
    }
  }, {
    key: "flush",
    value: function flush() {
      var _this = this;
      var buffer = this.buffer;
      this.buffer = [];
      buffer.forEach(function(event) {
        return _this.send(event);
      });
    }
  }, {
    key: "connect",
    value: function connect(url, onError) {
      var _this2 = this;
      this.socket = new WebSocket(url);
      this.socket.onopen = function() {
        _this2.isReady = true;
        _this2.flush();
      };
      this.socket.onmessage = function(_ref22) {
        var data = _ref22.data;
        var event = typeof data === "string" && isJSON(data) ? parse(data) : data;
        _this2.handler(event);
      };
      this.socket.onerror = function(e) {
        if (onError) {
          onError(e);
        }
      };
    }
  }]);
  return WebsocketTransport2;
}();
function createChannel(_ref32) {
  var url = _ref32.url, _ref3$async = _ref32.async, async = _ref3$async === void 0 ? false : _ref3$async, _ref3$onError = _ref32.onError, onError = _ref3$onError === void 0 ? function(err) {
    return logger.warn(err);
  } : _ref3$onError;
  var transport = new WebsocketTransport({
    url,
    onError
  });
  return new Channel({
    transport,
    async
  });
}
const channel = createChannel$1({ page: "preview" });
addons.setChannel(channel);
window.__STORYBOOK_ADDONS_CHANNEL__ = channel;
const { SERVER_CHANNEL_URL } = globalThis;
if (SERVER_CHANNEL_URL) {
  const serverChannel = createChannel({ url: SERVER_CHANNEL_URL });
  addons.setServerChannel(serverChannel);
  window.__STORYBOOK_SERVER_CHANNEL__ = serverChannel;
}
const importers = {
  "./src/stories/Button.stories.tsx": async () => import("./Button.stories.js"),
  "./src/stories/Tooltip.stories.tsx": async () => import("./Tooltip.stories.js"),
  "./src/stories/Typography.stories.tsx": async () => import("./Typography.stories.js")
};
async function importFn(path) {
  return importers[path]();
}
const getProjectAnnotations = async () => composeConfigs(await Promise.all([
  import("./config.js"),
  import("./config2.js"),
  import("./preview.js"),
  import("./preview2.js"),
  import("./preview3.js"),
  import("./preview4.js"),
  import("./preview5.js"),
  import("./preview6.js"),
  import("./preview7.js"),
  import("./preview8.js")
]));
const preview = new PreviewWeb();
window.__STORYBOOK_PREVIEW__ = preview;
window.__STORYBOOK_STORY_STORE__ = preview.storyStore;
window.__STORYBOOK_CLIENT_API__ = new ClientApi({ storyStore: preview.storyStore });
preview.initialize({ importFn, getProjectAnnotations });
export { Events as E, FORCE_REMOUNT as F, IGNORED_EXCEPTION as I, NAVIGATE_URL as N, STORY_CHANGED as S, _baseGetTag as _, combineParameters as a, isObjectLike_1 as b, commonjsGlobal as c, dedent as d, isPlainObject_1 as e, isFunction_1$1 as f, getAugmentedNamespace as g, addons as h, isArray_1 as i, browser as j, SELECT_STORY as k, logger as l, mapValues_1 as m, useMemo as n, once as o, STORY_RENDER_PHASE_CHANGED as p, SET_CURRENT_STORY as q, memoize$2 as r, dist as s, lib$1 as t, useEffect as u, filterArgTypes as v, window_1 as w, fastDeepEqual as x };
//# sourceMappingURL=iframe.js.map
