import { w as window_1, o as once, h as addons, F as FORCE_REMOUNT, p as STORY_RENDER_PHASE_CHANGED, q as SET_CURRENT_STORY, I as IGNORED_EXCEPTION, c as commonjsGlobal } from "./iframe.js";
var CallStates;
(function(CallStates2) {
  CallStates2["DONE"] = "done";
  CallStates2["ERROR"] = "error";
  CallStates2["ACTIVE"] = "active";
  CallStates2["WAITING"] = "waiting";
})(CallStates || (CallStates = {}));
var _global$FEATURES;
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
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
    return _arrayLikeToArray$1(arr);
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
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
function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr))
    return arr;
}
var EVENTS = {
  CALL: "instrumenter/call",
  SYNC: "instrumenter/sync",
  START: "instrumenter/start",
  BACK: "instrumenter/back",
  GOTO: "instrumenter/goto",
  NEXT: "instrumenter/next",
  END: "instrumenter/end"
};
var debuggerDisabled = ((_global$FEATURES = window_1.FEATURES) === null || _global$FEATURES === void 0 ? void 0 : _global$FEATURES.interactionsDebugger) !== true;
var controlsDisabled = {
  debugger: !debuggerDisabled,
  start: false,
  back: false,
  goto: false,
  next: false,
  end: false
};
var alreadyCompletedException = new Error("This function ran after the play function completed. Did you forget to `await` it?");
var isObject = function isObject2(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
};
var isModule = function isModule2(o) {
  return Object.prototype.toString.call(o) === "[object Module]";
};
var isInstrumentable = function isInstrumentable2(o) {
  if (!isObject(o) && !isModule(o))
    return false;
  if (o.constructor === void 0)
    return true;
  var proto = o.constructor.prototype;
  if (!isObject(proto))
    return false;
  if (Object.prototype.hasOwnProperty.call(proto, "isPrototypeOf") === false)
    return false;
  return true;
};
var construct = function construct2(obj) {
  try {
    return new obj.constructor();
  } catch (e) {
    return {};
  }
};
var getInitialState = function getInitialState2() {
  return {
    renderPhase: void 0,
    isDebugging: false,
    isPlaying: false,
    isLocked: false,
    cursor: 0,
    calls: [],
    shadowCalls: [],
    callRefsByResult: /* @__PURE__ */ new Map(),
    chainedCallIds: /* @__PURE__ */ new Set(),
    parentId: void 0,
    playUntil: void 0,
    resolvers: {},
    syncTimeout: void 0,
    forwardedException: void 0
  };
};
var getRetainedState = function getRetainedState2(state) {
  var isDebugging = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var calls = (isDebugging ? state.shadowCalls : state.calls).filter(function(call) {
    return call.retain;
  });
  if (!calls.length)
    return void 0;
  var callRefsByResult = new Map(Array.from(state.callRefsByResult.entries()).filter(function(_ref) {
    var _ref2 = _slicedToArray$1(_ref, 2), ref = _ref2[1];
    return ref.retain;
  }));
  return {
    cursor: calls.length,
    calls,
    callRefsByResult
  };
};
var Instrumenter = /* @__PURE__ */ function() {
  function Instrumenter2() {
    var _this = this;
    _classCallCheck(this, Instrumenter2);
    this.channel = void 0;
    this.initialized = false;
    this.state = void 0;
    this.channel = addons.getChannel();
    this.state = window_1.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ || {};
    var resetState = function resetState2(_ref3) {
      var storyId = _ref3.storyId, _ref3$isPlaying = _ref3.isPlaying, isPlaying = _ref3$isPlaying === void 0 ? true : _ref3$isPlaying, _ref3$isDebugging = _ref3.isDebugging, isDebugging = _ref3$isDebugging === void 0 ? false : _ref3$isDebugging;
      var state = _this.getState(storyId);
      _this.setState(storyId, Object.assign({}, getInitialState(), getRetainedState(state, isDebugging), {
        shadowCalls: isDebugging ? state.shadowCalls : [],
        chainedCallIds: isDebugging ? state.chainedCallIds : /* @__PURE__ */ new Set(),
        playUntil: isDebugging ? state.playUntil : void 0,
        isPlaying,
        isDebugging
      }));
      if (!isDebugging)
        _this.sync(storyId);
    };
    this.channel.on(FORCE_REMOUNT, resetState);
    this.channel.on(STORY_RENDER_PHASE_CHANGED, function(_ref4) {
      var storyId = _ref4.storyId, newPhase = _ref4.newPhase;
      var _this$getState = _this.getState(storyId), isDebugging = _this$getState.isDebugging, forwardedException = _this$getState.forwardedException;
      _this.setState(storyId, {
        renderPhase: newPhase
      });
      if (newPhase === "playing") {
        resetState({
          storyId,
          isDebugging
        });
      }
      if (newPhase === "played") {
        _this.setState(storyId, {
          isLocked: false,
          isPlaying: false,
          isDebugging: false,
          forwardedException: void 0
        });
        if (forwardedException)
          throw forwardedException;
      }
    });
    this.channel.on(SET_CURRENT_STORY, function() {
      if (_this.initialized)
        _this.cleanup();
      else
        _this.initialized = true;
    });
    var start = function start2(_ref5) {
      var storyId = _ref5.storyId, playUntil = _ref5.playUntil;
      if (!_this.getState(storyId).isDebugging) {
        _this.setState(storyId, function(_ref6) {
          var calls = _ref6.calls;
          return {
            calls: [],
            shadowCalls: calls.map(function(call) {
              return Object.assign({}, call, {
                status: CallStates.WAITING
              });
            }),
            isDebugging: true
          };
        });
      }
      var log = _this.getLog(storyId);
      _this.setState(storyId, function(_ref7) {
        var _shadowCalls$slice$fi;
        var shadowCalls = _ref7.shadowCalls;
        var firstRowIndex = shadowCalls.findIndex(function(call) {
          return call.id === log[0].callId;
        });
        return {
          playUntil: playUntil || ((_shadowCalls$slice$fi = shadowCalls.slice(0, firstRowIndex).filter(function(call) {
            return call.interceptable;
          }).slice(-1)[0]) === null || _shadowCalls$slice$fi === void 0 ? void 0 : _shadowCalls$slice$fi.id)
        };
      });
      _this.channel.emit(FORCE_REMOUNT, {
        storyId,
        isDebugging: true
      });
    };
    var back = function back2(_ref8) {
      var _log;
      var storyId = _ref8.storyId;
      var _this$getState2 = _this.getState(storyId), isDebugging = _this$getState2.isDebugging;
      var log = _this.getLog(storyId);
      var next2 = isDebugging ? log.findIndex(function(_ref9) {
        var status = _ref9.status;
        return status === CallStates.WAITING;
      }) : log.length;
      start({
        storyId,
        playUntil: (_log = log[next2 - 2]) === null || _log === void 0 ? void 0 : _log.callId
      });
    };
    var goto = function goto2(_ref10) {
      var storyId = _ref10.storyId, callId = _ref10.callId;
      var _this$getState3 = _this.getState(storyId), calls = _this$getState3.calls, shadowCalls = _this$getState3.shadowCalls, resolvers = _this$getState3.resolvers;
      var call = calls.find(function(_ref11) {
        var id = _ref11.id;
        return id === callId;
      });
      var shadowCall = shadowCalls.find(function(_ref12) {
        var id = _ref12.id;
        return id === callId;
      });
      if (!call && shadowCall && Object.values(resolvers).length > 0) {
        var _this$getLog$find;
        var nextId = (_this$getLog$find = _this.getLog(storyId).find(function(c) {
          return c.status === CallStates.WAITING;
        })) === null || _this$getLog$find === void 0 ? void 0 : _this$getLog$find.callId;
        if (shadowCall.id !== nextId)
          _this.setState(storyId, {
            playUntil: shadowCall.id
          });
        Object.values(resolvers).forEach(function(resolve) {
          return resolve();
        });
      } else {
        start({
          storyId,
          playUntil: callId
        });
      }
    };
    var next = function next2(_ref13) {
      var storyId = _ref13.storyId;
      var _this$getState4 = _this.getState(storyId), resolvers = _this$getState4.resolvers;
      if (Object.values(resolvers).length > 0) {
        Object.values(resolvers).forEach(function(resolve) {
          return resolve();
        });
      } else {
        var _this$getLog$find2;
        var nextId = (_this$getLog$find2 = _this.getLog(storyId).find(function(c) {
          return c.status === CallStates.WAITING;
        })) === null || _this$getLog$find2 === void 0 ? void 0 : _this$getLog$find2.callId;
        if (nextId)
          start({
            storyId,
            playUntil: nextId
          });
        else
          end({
            storyId
          });
      }
    };
    var end = function end2(_ref14) {
      var storyId = _ref14.storyId;
      _this.setState(storyId, {
        playUntil: void 0,
        isDebugging: false
      });
      Object.values(_this.getState(storyId).resolvers).forEach(function(resolve) {
        return resolve();
      });
    };
    this.channel.on(EVENTS.START, start);
    this.channel.on(EVENTS.BACK, back);
    this.channel.on(EVENTS.GOTO, goto);
    this.channel.on(EVENTS.NEXT, next);
    this.channel.on(EVENTS.END, end);
  }
  _createClass(Instrumenter2, [{
    key: "getState",
    value: function getState(storyId) {
      return this.state[storyId] || getInitialState();
    }
  }, {
    key: "setState",
    value: function setState(storyId, update) {
      var state = this.getState(storyId);
      var patch = typeof update === "function" ? update(state) : update;
      this.state = Object.assign({}, this.state, _defineProperty$1({}, storyId, Object.assign({}, state, patch)));
      window_1.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state;
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      this.state = Object.entries(this.state).reduce(function(acc, _ref15) {
        var _ref16 = _slicedToArray$1(_ref15, 2), storyId = _ref16[0], state = _ref16[1];
        var retainedState = getRetainedState(state);
        if (!retainedState)
          return acc;
        acc[storyId] = Object.assign(getInitialState(), retainedState);
        return acc;
      }, {});
      this.channel.emit(EVENTS.SYNC, {
        controlStates: controlsDisabled,
        logItems: []
      });
      window_1.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state;
    }
  }, {
    key: "getLog",
    value: function getLog(storyId) {
      var _this$getState5 = this.getState(storyId), calls = _this$getState5.calls, shadowCalls = _this$getState5.shadowCalls;
      var merged = _toConsumableArray(shadowCalls);
      calls.forEach(function(call, index) {
        merged[index] = call;
      });
      var seen = /* @__PURE__ */ new Set();
      return merged.reduceRight(function(acc, call) {
        call.args.forEach(function(arg) {
          if (arg !== null && arg !== void 0 && arg.__callId__) {
            seen.add(arg.__callId__);
          }
        });
        call.path.forEach(function(node) {
          if (node.__callId__) {
            seen.add(node.__callId__);
          }
        });
        if (call.interceptable && !seen.has(call.id)) {
          acc.unshift({
            callId: call.id,
            status: call.status
          });
          seen.add(call.id);
        }
        return acc;
      }, []);
    }
  }, {
    key: "instrument",
    value: function instrument2(obj, options) {
      var _this2 = this;
      if (!isInstrumentable(obj))
        return obj;
      var _options$mutate = options.mutate, mutate = _options$mutate === void 0 ? false : _options$mutate, _options$path = options.path, path = _options$path === void 0 ? [] : _options$path;
      return Object.keys(obj).reduce(function(acc, key) {
        var value = obj[key];
        if (typeof value !== "function") {
          acc[key] = _this2.instrument(value, Object.assign({}, options, {
            path: path.concat(key)
          }));
          return acc;
        }
        if (typeof value.__originalFn__ === "function") {
          acc[key] = value;
          return acc;
        }
        acc[key] = function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _this2.track(key, value, args, options);
        };
        acc[key].__originalFn__ = value;
        Object.defineProperty(acc[key], "name", {
          value: key,
          writable: false
        });
        if (Object.keys(value).length > 0) {
          Object.assign(acc[key], _this2.instrument(Object.assign({}, value), Object.assign({}, options, {
            path: path.concat(key)
          })));
        }
        return acc;
      }, mutate ? obj : construct(obj));
    }
  }, {
    key: "track",
    value: function track(method, fn2, args, options) {
      var _args$, _global$window$__STOR, _global$window$__STOR2, _global$window$__STOR3;
      var storyId = (args === null || args === void 0 ? void 0 : (_args$ = args[0]) === null || _args$ === void 0 ? void 0 : _args$.__storyId__) || ((_global$window$__STOR = window_1.window.__STORYBOOK_PREVIEW__) === null || _global$window$__STOR === void 0 ? void 0 : (_global$window$__STOR2 = _global$window$__STOR.urlStore) === null || _global$window$__STOR2 === void 0 ? void 0 : (_global$window$__STOR3 = _global$window$__STOR2.selection) === null || _global$window$__STOR3 === void 0 ? void 0 : _global$window$__STOR3.storyId);
      var _this$getState6 = this.getState(storyId), cursor = _this$getState6.cursor, parentId = _this$getState6.parentId;
      this.setState(storyId, {
        cursor: cursor + 1
      });
      var id = "".concat(parentId || storyId, " [").concat(cursor, "] ").concat(method);
      var _options$path2 = options.path, path = _options$path2 === void 0 ? [] : _options$path2, _options$intercept = options.intercept, intercept = _options$intercept === void 0 ? false : _options$intercept, _options$retain = options.retain, retain = _options$retain === void 0 ? false : _options$retain;
      var interceptable = typeof intercept === "function" ? intercept(method, path) : intercept;
      var call = {
        id,
        parentId,
        storyId,
        cursor,
        path,
        method,
        args,
        interceptable,
        retain
      };
      var result = (interceptable ? this.intercept : this.invoke).call(this, fn2, call, options);
      return this.instrument(result, Object.assign({}, options, {
        mutate: true,
        path: [{
          __callId__: call.id
        }]
      }));
    }
  }, {
    key: "intercept",
    value: function intercept(fn2, call, options) {
      var _this3 = this;
      var _this$getState7 = this.getState(call.storyId), chainedCallIds = _this$getState7.chainedCallIds, isDebugging = _this$getState7.isDebugging, playUntil = _this$getState7.playUntil;
      var isChainedUpon = chainedCallIds.has(call.id);
      if (!isDebugging || isChainedUpon || playUntil) {
        if (playUntil === call.id) {
          this.setState(call.storyId, {
            playUntil: void 0
          });
        }
        return this.invoke(fn2, call, options);
      }
      return new Promise(function(resolve) {
        _this3.setState(call.storyId, function(_ref17) {
          var resolvers = _ref17.resolvers;
          return {
            isLocked: false,
            resolvers: Object.assign({}, resolvers, _defineProperty$1({}, call.id, resolve))
          };
        });
      }).then(function() {
        _this3.setState(call.storyId, function(state) {
          var _state$resolvers = state.resolvers, _call$id = call.id;
          _state$resolvers[_call$id];
          var resolvers = _objectWithoutProperties(_state$resolvers, [_call$id].map(_toPropertyKey));
          return {
            isLocked: true,
            resolvers
          };
        });
        return _this3.invoke(fn2, call, options);
      });
    }
  }, {
    key: "invoke",
    value: function invoke(fn2, call, options) {
      var _this4 = this;
      var _this$getState8 = this.getState(call.storyId), callRefsByResult = _this$getState8.callRefsByResult, forwardedException = _this$getState8.forwardedException, renderPhase = _this$getState8.renderPhase;
      var info = Object.assign({}, call, {
        args: call.args.map(function(arg) {
          if (callRefsByResult.has(arg)) {
            return callRefsByResult.get(arg);
          }
          if (arg instanceof window_1.window.HTMLElement) {
            var prefix = arg.prefix, localName = arg.localName, id = arg.id, classList = arg.classList, innerText = arg.innerText;
            var classNames = Array.from(classList);
            return {
              __element__: {
                prefix,
                localName,
                id,
                classNames,
                innerText
              }
            };
          }
          return arg;
        })
      });
      call.path.forEach(function(ref) {
        if (ref !== null && ref !== void 0 && ref.__callId__) {
          _this4.setState(call.storyId, function(_ref18) {
            var chainedCallIds = _ref18.chainedCallIds;
            return {
              chainedCallIds: new Set(Array.from(chainedCallIds).concat(ref.__callId__))
            };
          });
        }
      });
      var handleException = function handleException2(e) {
        if (e instanceof Error) {
          var name = e.name, message = e.message, stack = e.stack;
          var exception = {
            name,
            message,
            stack
          };
          _this4.update(Object.assign({}, info, {
            status: CallStates.ERROR,
            exception
          }));
          _this4.setState(call.storyId, function(state) {
            return {
              callRefsByResult: new Map([].concat(_toConsumableArray(Array.from(state.callRefsByResult.entries())), [[e, {
                __callId__: call.id,
                retain: call.retain
              }]]))
            };
          });
          if (call.interceptable && e !== alreadyCompletedException) {
            throw IGNORED_EXCEPTION;
          }
          _this4.setState(call.storyId, {
            forwardedException: e
          });
          return e;
        }
        throw e;
      };
      try {
        if (forwardedException) {
          this.setState(call.storyId, {
            forwardedException: void 0
          });
          throw forwardedException;
        }
        if (renderPhase === "played" && !call.retain) {
          throw alreadyCompletedException;
        }
        var finalArgs = options.getArgs ? options.getArgs(call, this.getState(call.storyId)) : call.args;
        var result = fn2.apply(void 0, _toConsumableArray(finalArgs.map(function(arg) {
          if (typeof arg !== "function" || Object.keys(arg).length)
            return arg;
          return function() {
            var _this4$getState = _this4.getState(call.storyId), cursor = _this4$getState.cursor, parentId = _this4$getState.parentId;
            _this4.setState(call.storyId, {
              cursor: 0,
              parentId: call.id
            });
            var restore = function restore2() {
              return _this4.setState(call.storyId, {
                cursor,
                parentId
              });
            };
            var res = arg.apply(void 0, arguments);
            if (res instanceof Promise)
              res.then(restore, restore);
            else
              restore();
            return res;
          };
        })));
        if (result && ["object", "function", "symbol"].includes(_typeof(result))) {
          this.setState(call.storyId, function(state) {
            return {
              callRefsByResult: new Map([].concat(_toConsumableArray(Array.from(state.callRefsByResult.entries())), [[result, {
                __callId__: call.id,
                retain: call.retain
              }]]))
            };
          });
        }
        this.update(Object.assign({}, info, {
          status: result instanceof Promise ? CallStates.ACTIVE : CallStates.DONE
        }));
        if (result instanceof Promise) {
          return result.then(function(value) {
            _this4.update(Object.assign({}, info, {
              status: CallStates.DONE
            }));
            return value;
          }, handleException);
        }
        return result;
      } catch (e) {
        return handleException(e);
      }
    }
  }, {
    key: "update",
    value: function update(call) {
      var _this5 = this;
      clearTimeout(this.getState(call.storyId).syncTimeout);
      this.channel.emit(EVENTS.CALL, call);
      this.setState(call.storyId, function(_ref19) {
        var calls = _ref19.calls;
        var callsById = calls.concat(call).reduce(function(a, c) {
          return Object.assign(a, _defineProperty$1({}, c.id, c));
        }, {});
        return {
          calls: Object.values(callsById).sort(function(a, b) {
            return a.id.localeCompare(b.id, void 0, {
              numeric: true
            });
          }),
          syncTimeout: setTimeout(function() {
            return _this5.sync(call.storyId);
          }, 0)
        };
      });
    }
  }, {
    key: "sync",
    value: function sync(storyId) {
      var _this$getState9 = this.getState(storyId), isLocked = _this$getState9.isLocked, isPlaying = _this$getState9.isPlaying;
      var logItems = this.getLog(storyId);
      var hasActive = logItems.some(function(item) {
        return item.status === CallStates.ACTIVE;
      });
      if (debuggerDisabled || isLocked || hasActive || logItems.length === 0) {
        this.channel.emit(EVENTS.SYNC, {
          controlStates: controlsDisabled,
          logItems
        });
        return;
      }
      var hasPrevious = logItems.some(function(item) {
        return [CallStates.DONE, CallStates.ERROR].includes(item.status);
      });
      var controlStates = {
        debugger: true,
        start: hasPrevious,
        back: hasPrevious,
        goto: true,
        next: isPlaying,
        end: isPlaying
      };
      this.channel.emit(EVENTS.SYNC, {
        controlStates,
        logItems
      });
    }
  }]);
  return Instrumenter2;
}();
function instrument(obj) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  try {
    if (window_1.window.parent === window_1.window)
      return obj;
    if (!window_1.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__) {
      window_1.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ = new Instrumenter();
    }
    var instrumenter = window_1.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__;
    return instrumenter.instrument(obj, options);
  } catch (e) {
    once.warn(e);
    return obj;
  }
}
var build = {};
Object.defineProperty(build, "__esModule", {
  value: true
});
build.spyOn = build.mocked = build.fn = ModuleMocker_1 = build.ModuleMocker = void 0;
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
const MOCK_CONSTRUCTOR_NAME = "mockConstructor";
const FUNCTION_NAME_RESERVED_PATTERN = /[\s!-\/:-@\[-`{-~]/;
const FUNCTION_NAME_RESERVED_REPLACE = new RegExp(FUNCTION_NAME_RESERVED_PATTERN.source, "g");
const RESERVED_KEYWORDS = /* @__PURE__ */ new Set([
  "arguments",
  "await",
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "eval",
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "function",
  "if",
  "implements",
  "import",
  "in",
  "instanceof",
  "interface",
  "let",
  "new",
  "null",
  "package",
  "private",
  "protected",
  "public",
  "return",
  "static",
  "super",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield"
]);
function matchArity(fn2, length) {
  let mockConstructor;
  switch (length) {
    case 1:
      mockConstructor = function(_a) {
        return fn2.apply(this, arguments);
      };
      break;
    case 2:
      mockConstructor = function(_a, _b) {
        return fn2.apply(this, arguments);
      };
      break;
    case 3:
      mockConstructor = function(_a, _b, _c) {
        return fn2.apply(this, arguments);
      };
      break;
    case 4:
      mockConstructor = function(_a, _b, _c, _d) {
        return fn2.apply(this, arguments);
      };
      break;
    case 5:
      mockConstructor = function(_a, _b, _c, _d, _e) {
        return fn2.apply(this, arguments);
      };
      break;
    case 6:
      mockConstructor = function(_a, _b, _c, _d, _e, _f) {
        return fn2.apply(this, arguments);
      };
      break;
    case 7:
      mockConstructor = function(_a, _b, _c, _d, _e, _f, _g) {
        return fn2.apply(this, arguments);
      };
      break;
    case 8:
      mockConstructor = function(_a, _b, _c, _d, _e, _f, _g, _h) {
        return fn2.apply(this, arguments);
      };
      break;
    case 9:
      mockConstructor = function(_a, _b, _c, _d, _e, _f, _g, _h, _i) {
        return fn2.apply(this, arguments);
      };
      break;
    default:
      mockConstructor = function() {
        return fn2.apply(this, arguments);
      };
      break;
  }
  return mockConstructor;
}
function getObjectType(value) {
  return Object.prototype.toString.apply(value).slice(8, -1);
}
function getType(ref) {
  const typeName = getObjectType(ref);
  if (typeName === "Function" || typeName === "AsyncFunction" || typeName === "GeneratorFunction") {
    return "function";
  } else if (Array.isArray(ref)) {
    return "array";
  } else if (typeName === "Object") {
    return "object";
  } else if (typeName === "Number" || typeName === "String" || typeName === "Boolean" || typeName === "Symbol") {
    return "constant";
  } else if (typeName === "Map" || typeName === "WeakMap" || typeName === "Set") {
    return "collection";
  } else if (typeName === "RegExp") {
    return "regexp";
  } else if (ref === void 0) {
    return "undefined";
  } else if (ref === null) {
    return "null";
  } else {
    return null;
  }
}
function isReadonlyProp(object, prop) {
  if (prop === "arguments" || prop === "caller" || prop === "callee" || prop === "name" || prop === "length") {
    const typeName = getObjectType(object);
    return typeName === "Function" || typeName === "AsyncFunction" || typeName === "GeneratorFunction";
  }
  if (prop === "source" || prop === "global" || prop === "ignoreCase" || prop === "multiline") {
    return getObjectType(object) === "RegExp";
  }
  return false;
}
class ModuleMocker {
  constructor(global2) {
    _defineProperty(this, "_environmentGlobal", void 0);
    _defineProperty(this, "_mockState", void 0);
    _defineProperty(this, "_mockConfigRegistry", void 0);
    _defineProperty(this, "_spyState", void 0);
    _defineProperty(this, "_invocationCallCounter", void 0);
    this._environmentGlobal = global2;
    this._mockState = /* @__PURE__ */ new WeakMap();
    this._mockConfigRegistry = /* @__PURE__ */ new WeakMap();
    this._spyState = /* @__PURE__ */ new Set();
    this._invocationCallCounter = 1;
  }
  _getSlots(object) {
    if (!object) {
      return [];
    }
    const slots = /* @__PURE__ */ new Set();
    const EnvObjectProto = this._environmentGlobal.Object.prototype;
    const EnvFunctionProto = this._environmentGlobal.Function.prototype;
    const EnvRegExpProto = this._environmentGlobal.RegExp.prototype;
    const ObjectProto = Object.prototype;
    const FunctionProto = Function.prototype;
    const RegExpProto = RegExp.prototype;
    while (object != null && object !== EnvObjectProto && object !== EnvFunctionProto && object !== EnvRegExpProto && object !== ObjectProto && object !== FunctionProto && object !== RegExpProto) {
      const ownNames = Object.getOwnPropertyNames(object);
      for (let i = 0; i < ownNames.length; i++) {
        const prop = ownNames[i];
        if (!isReadonlyProp(object, prop)) {
          const propDesc = Object.getOwnPropertyDescriptor(object, prop);
          if (propDesc !== void 0 && !propDesc.get || object.__esModule) {
            slots.add(prop);
          }
        }
      }
      object = Object.getPrototypeOf(object);
    }
    return Array.from(slots);
  }
  _ensureMockConfig(f) {
    let config = this._mockConfigRegistry.get(f);
    if (!config) {
      config = this._defaultMockConfig();
      this._mockConfigRegistry.set(f, config);
    }
    return config;
  }
  _ensureMockState(f) {
    let state = this._mockState.get(f);
    if (!state) {
      state = this._defaultMockState();
      this._mockState.set(f, state);
    }
    if (state.calls.length > 0) {
      state.lastCall = state.calls[state.calls.length - 1];
    }
    return state;
  }
  _defaultMockConfig() {
    return {
      mockImpl: void 0,
      mockName: "jest.fn()",
      specificMockImpls: [],
      specificReturnValues: []
    };
  }
  _defaultMockState() {
    return {
      calls: [],
      instances: [],
      invocationCallOrder: [],
      results: []
    };
  }
  _makeComponent(metadata, restore) {
    if (metadata.type === "object") {
      return new this._environmentGlobal.Object();
    } else if (metadata.type === "array") {
      return new this._environmentGlobal.Array();
    } else if (metadata.type === "regexp") {
      return new this._environmentGlobal.RegExp("");
    } else if (metadata.type === "constant" || metadata.type === "collection" || metadata.type === "null" || metadata.type === "undefined") {
      return metadata.value;
    } else if (metadata.type === "function") {
      const prototype = metadata.members && metadata.members.prototype && metadata.members.prototype.members || {};
      const prototypeSlots = this._getSlots(prototype);
      const mocker = this;
      const mockConstructor = matchArity(function(...args) {
        const mockState = mocker._ensureMockState(f);
        const mockConfig = mocker._ensureMockConfig(f);
        mockState.instances.push(this);
        mockState.calls.push(args);
        const mockResult = {
          type: "incomplete",
          value: void 0
        };
        mockState.results.push(mockResult);
        mockState.invocationCallOrder.push(mocker._invocationCallCounter++);
        let finalReturnValue;
        let thrownError;
        let callDidThrowError = false;
        try {
          finalReturnValue = (() => {
            if (this instanceof f) {
              prototypeSlots.forEach((slot) => {
                if (prototype[slot].type === "function") {
                  const protoImpl = this[slot];
                  this[slot] = mocker.generateFromMetadata(prototype[slot]);
                  this[slot]._protoImpl = protoImpl;
                }
              });
              const mockImpl = mockConfig.specificMockImpls.length ? mockConfig.specificMockImpls.shift() : mockConfig.mockImpl;
              return mockImpl && mockImpl.apply(this, arguments);
            }
            let specificMockImpl = mockConfig.specificMockImpls.shift();
            if (specificMockImpl === void 0) {
              specificMockImpl = mockConfig.mockImpl;
            }
            if (specificMockImpl) {
              return specificMockImpl.apply(this, arguments);
            }
            if (f._protoImpl) {
              return f._protoImpl.apply(this, arguments);
            }
            return void 0;
          })();
        } catch (error) {
          thrownError = error;
          callDidThrowError = true;
          throw error;
        } finally {
          mockResult.type = callDidThrowError ? "throw" : "return";
          mockResult.value = callDidThrowError ? thrownError : finalReturnValue;
        }
        return finalReturnValue;
      }, metadata.length || 0);
      const f = this._createMockFunction(metadata, mockConstructor);
      f._isMockFunction = true;
      f.getMockImplementation = () => this._ensureMockConfig(f).mockImpl;
      if (typeof restore === "function") {
        this._spyState.add(restore);
      }
      this._mockState.set(f, this._defaultMockState());
      this._mockConfigRegistry.set(f, this._defaultMockConfig());
      Object.defineProperty(f, "mock", {
        configurable: false,
        enumerable: true,
        get: () => this._ensureMockState(f),
        set: (val) => this._mockState.set(f, val)
      });
      f.mockClear = () => {
        this._mockState.delete(f);
        return f;
      };
      f.mockReset = () => {
        f.mockClear();
        this._mockConfigRegistry.delete(f);
        return f;
      };
      f.mockRestore = () => {
        f.mockReset();
        return restore ? restore() : void 0;
      };
      f.mockReturnValueOnce = (value) => f.mockImplementationOnce(() => value);
      f.mockResolvedValueOnce = (value) => f.mockImplementationOnce(() => Promise.resolve(value));
      f.mockRejectedValueOnce = (value) => f.mockImplementationOnce(() => Promise.reject(value));
      f.mockReturnValue = (value) => f.mockImplementation(() => value);
      f.mockResolvedValue = (value) => f.mockImplementation(() => Promise.resolve(value));
      f.mockRejectedValue = (value) => f.mockImplementation(() => Promise.reject(value));
      f.mockImplementationOnce = (fn2) => {
        const mockConfig = this._ensureMockConfig(f);
        mockConfig.specificMockImpls.push(fn2);
        return f;
      };
      f.mockImplementation = (fn2) => {
        const mockConfig = this._ensureMockConfig(f);
        mockConfig.mockImpl = fn2;
        return f;
      };
      f.mockReturnThis = () => f.mockImplementation(function() {
        return this;
      });
      f.mockName = (name) => {
        if (name) {
          const mockConfig = this._ensureMockConfig(f);
          mockConfig.mockName = name;
        }
        return f;
      };
      f.getMockName = () => {
        const mockConfig = this._ensureMockConfig(f);
        return mockConfig.mockName || "jest.fn()";
      };
      if (metadata.mockImpl) {
        f.mockImplementation(metadata.mockImpl);
      }
      return f;
    } else {
      const unknownType = metadata.type || "undefined type";
      throw new Error("Unrecognized type " + unknownType);
    }
  }
  _createMockFunction(metadata, mockConstructor) {
    let name = metadata.name;
    if (!name) {
      return mockConstructor;
    }
    const boundFunctionPrefix = "bound ";
    let bindCall = "";
    if (name && name.startsWith(boundFunctionPrefix)) {
      do {
        name = name.substring(boundFunctionPrefix.length);
        bindCall = ".bind(null)";
      } while (name && name.startsWith(boundFunctionPrefix));
    }
    if (name === MOCK_CONSTRUCTOR_NAME) {
      return mockConstructor;
    }
    if (RESERVED_KEYWORDS.has(name) || /^\d/.test(name)) {
      name = "$" + name;
    }
    if (FUNCTION_NAME_RESERVED_PATTERN.test(name)) {
      name = name.replace(FUNCTION_NAME_RESERVED_REPLACE, "$");
    }
    const body = "return function " + name + "() {return " + MOCK_CONSTRUCTOR_NAME + ".apply(this,arguments);}" + bindCall;
    const createConstructor = new this._environmentGlobal.Function(MOCK_CONSTRUCTOR_NAME, body);
    return createConstructor(mockConstructor);
  }
  _generateMock(metadata, callbacks, refs) {
    const mock = this._makeComponent(metadata);
    if (metadata.refID != null) {
      refs[metadata.refID] = mock;
    }
    this._getSlots(metadata.members).forEach((slot) => {
      const slotMetadata = metadata.members && metadata.members[slot] || {};
      if (slotMetadata.ref != null) {
        callbacks.push(function(ref) {
          return () => mock[slot] = refs[ref];
        }(slotMetadata.ref));
      } else {
        mock[slot] = this._generateMock(slotMetadata, callbacks, refs);
      }
    });
    if (metadata.type !== "undefined" && metadata.type !== "null" && mock.prototype && typeof mock.prototype === "object") {
      mock.prototype.constructor = mock;
    }
    return mock;
  }
  generateFromMetadata(_metadata) {
    const callbacks = [];
    const refs = {};
    const mock = this._generateMock(_metadata, callbacks, refs);
    callbacks.forEach((setter) => setter());
    return mock;
  }
  getMetadata(component, _refs) {
    const refs = _refs || /* @__PURE__ */ new Map();
    const ref = refs.get(component);
    if (ref != null) {
      return {
        ref
      };
    }
    const type = getType(component);
    if (!type) {
      return null;
    }
    const metadata = {
      type
    };
    if (type === "constant" || type === "collection" || type === "undefined" || type === "null") {
      metadata.value = component;
      return metadata;
    } else if (type === "function") {
      metadata.name = component.name;
      if (component._isMockFunction === true) {
        metadata.mockImpl = component.getMockImplementation();
      }
    }
    metadata.refID = refs.size;
    refs.set(component, metadata.refID);
    let members = null;
    if (type !== "array") {
      this._getSlots(component).forEach((slot) => {
        if (type === "function" && component._isMockFunction === true && slot.match(/^mock/)) {
          return;
        }
        const slotMetadata = this.getMetadata(component[slot], refs);
        if (slotMetadata) {
          if (!members) {
            members = {};
          }
          members[slot] = slotMetadata;
        }
      });
    }
    if (members) {
      metadata.members = members;
    }
    return metadata;
  }
  isMockFunction(fn2) {
    return !!fn2 && fn2._isMockFunction === true;
  }
  fn(implementation) {
    const length = implementation ? implementation.length : 0;
    const fn2 = this._makeComponent({
      length,
      type: "function"
    });
    if (implementation) {
      fn2.mockImplementation(implementation);
    }
    return fn2;
  }
  spyOn(object, methodName, accessType) {
    if (accessType) {
      return this._spyOnProperty(object, methodName, accessType);
    }
    if (typeof object !== "object" && typeof object !== "function") {
      throw new Error("Cannot spyOn on a primitive value; " + this._typeOf(object) + " given");
    }
    const original = object[methodName];
    if (!this.isMockFunction(original)) {
      if (typeof original !== "function") {
        throw new Error("Cannot spy the " + methodName + " property because it is not a function; " + this._typeOf(original) + " given instead");
      }
      const isMethodOwner = Object.prototype.hasOwnProperty.call(object, methodName);
      let descriptor = Object.getOwnPropertyDescriptor(object, methodName);
      let proto = Object.getPrototypeOf(object);
      while (!descriptor && proto !== null) {
        descriptor = Object.getOwnPropertyDescriptor(proto, methodName);
        proto = Object.getPrototypeOf(proto);
      }
      let mock;
      if (descriptor && descriptor.get) {
        const originalGet = descriptor.get;
        mock = this._makeComponent({
          type: "function"
        }, () => {
          descriptor.get = originalGet;
          Object.defineProperty(object, methodName, descriptor);
        });
        descriptor.get = () => mock;
        Object.defineProperty(object, methodName, descriptor);
      } else {
        mock = this._makeComponent({
          type: "function"
        }, () => {
          if (isMethodOwner) {
            object[methodName] = original;
          } else {
            delete object[methodName];
          }
        });
        object[methodName] = mock;
      }
      mock.mockImplementation(function() {
        return original.apply(this, arguments);
      });
    }
    return object[methodName];
  }
  _spyOnProperty(obj, propertyName, accessType = "get") {
    if (typeof obj !== "object" && typeof obj !== "function") {
      throw new Error("Cannot spyOn on a primitive value; " + this._typeOf(obj) + " given");
    }
    if (!obj) {
      throw new Error("spyOn could not find an object to spy upon for " + propertyName);
    }
    if (!propertyName) {
      throw new Error("No property name supplied");
    }
    let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
    let proto = Object.getPrototypeOf(obj);
    while (!descriptor && proto !== null) {
      descriptor = Object.getOwnPropertyDescriptor(proto, propertyName);
      proto = Object.getPrototypeOf(proto);
    }
    if (!descriptor) {
      throw new Error(propertyName + " property does not exist");
    }
    if (!descriptor.configurable) {
      throw new Error(propertyName + " is not declared configurable");
    }
    if (!descriptor[accessType]) {
      throw new Error("Property " + propertyName + " does not have access type " + accessType);
    }
    const original = descriptor[accessType];
    if (!this.isMockFunction(original)) {
      if (typeof original !== "function") {
        throw new Error("Cannot spy the " + propertyName + " property because it is not a function; " + this._typeOf(original) + " given instead");
      }
      descriptor[accessType] = this._makeComponent({
        type: "function"
      }, () => {
        descriptor[accessType] = original;
        Object.defineProperty(obj, propertyName, descriptor);
      });
      descriptor[accessType].mockImplementation(function() {
        return original.apply(this, arguments);
      });
    }
    Object.defineProperty(obj, propertyName, descriptor);
    return descriptor[accessType];
  }
  clearAllMocks() {
    this._mockState = /* @__PURE__ */ new WeakMap();
  }
  resetAllMocks() {
    this._mockConfigRegistry = /* @__PURE__ */ new WeakMap();
    this._mockState = /* @__PURE__ */ new WeakMap();
  }
  restoreAllMocks() {
    this._spyState.forEach((restore) => restore());
    this._spyState = /* @__PURE__ */ new Set();
  }
  _typeOf(value) {
    return value == null ? "" + value : typeof value;
  }
  mocked(item, _deep = false) {
    return item;
  }
}
var ModuleMocker_1 = build.ModuleMocker = ModuleMocker;
const JestMock$1 = new ModuleMocker(commonjsGlobal);
const fn$1 = JestMock$1.fn.bind(JestMock$1);
build.fn = fn$1;
const spyOn = JestMock$1.spyOn.bind(JestMock$1);
build.spyOn = spyOn;
const mocked = JestMock$1.mocked.bind(JestMock$1);
build.mocked = mocked;
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
var JestMock = new ModuleMocker_1(global);
var fn = JestMock.fn.bind(JestMock);
var _instrument = instrument({
  action: fn
}, {
  retain: true
}), action = _instrument.action;
var channel = addons.getChannel();
var spies = [];
channel.on(FORCE_REMOUNT, function() {
  return spies.forEach(function(mock) {
    var _mock$mockClear;
    return mock === null || mock === void 0 ? void 0 : (_mock$mockClear = mock.mockClear) === null || _mock$mockClear === void 0 ? void 0 : _mock$mockClear.call(mock);
  });
});
channel.on(STORY_RENDER_PHASE_CHANGED, function(_ref) {
  var newPhase = _ref.newPhase;
  if (newPhase === "loading")
    spies.forEach(function(mock) {
      var _mock$mockClear2;
      return mock === null || mock === void 0 ? void 0 : (_mock$mockClear2 = mock.mockClear) === null || _mock$mockClear2 === void 0 ? void 0 : _mock$mockClear2.call(mock);
    });
});
var addActionsFromArgTypes = function addActionsFromArgTypes2(_ref2) {
  var id = _ref2.id, initialArgs = _ref2.initialArgs;
  return Object.entries(initialArgs).reduce(function(acc, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2), key = _ref4[0], val = _ref4[1];
    if (typeof val === "function" && val.name === "actionHandler") {
      Object.defineProperty(val, "name", {
        value: key,
        writable: false
      });
      Object.defineProperty(val, "__storyId__", {
        value: id,
        writable: false
      });
      acc[key] = action(val);
      spies.push(acc[key]);
      return acc;
    }
    acc[key] = val;
    return acc;
  }, {});
};
var argsEnhancers = [addActionsFromArgTypes];
export { argsEnhancers };
//# sourceMappingURL=preview7.js.map
