var makeDecorator = function makeDecorator2(_ref) {
  var name = _ref.name, parameterName = _ref.parameterName, wrapper = _ref.wrapper, _ref$skipIfNoParamete = _ref.skipIfNoParametersOrOptions, skipIfNoParametersOrOptions = _ref$skipIfNoParamete === void 0 ? false : _ref$skipIfNoParamete;
  var decorator = function decorator2(options) {
    return function(storyFn, context) {
      var parameters = context.parameters && context.parameters[parameterName];
      if (parameters && parameters.disable) {
        return storyFn(context);
      }
      if (skipIfNoParametersOrOptions && !options && !parameters) {
        return storyFn(context);
      }
      return wrapper(storyFn, context, {
        options,
        parameters
      });
    };
  };
  return function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (typeof args[0] === "function") {
      return decorator().apply(void 0, args);
    }
    return function() {
      if (arguments.length > 1) {
        if (args.length > 1) {
          return decorator(args).apply(void 0, arguments);
        }
        return decorator.apply(void 0, args).apply(void 0, arguments);
      }
      throw new Error("Passing stories directly into ".concat(name, "() is not allowed,\n        instead use addDecorator(").concat(name, ") and pass options with the '").concat(parameterName, "' parameter"));
    };
  };
};
export { makeDecorator as m };
//# sourceMappingURL=make-decorator.js.map
