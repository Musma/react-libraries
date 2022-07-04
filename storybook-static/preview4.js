import { w as window_1, l as logger, d as dedent, n as useMemo, u as useEffect, j as browser } from "./iframe.js";
var PARAM_KEY = "backgrounds";
var _templateObject$1;
function _taggedTemplateLiteral$1(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var document = window_1.document, window = window_1.window;
var isReduceMotionEnabled = function isReduceMotionEnabled2() {
  var prefersReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  return prefersReduceMotion.matches;
};
var getBackgroundColorByName = function getBackgroundColorByName2(currentSelectedValue) {
  var backgrounds = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var defaultName = arguments.length > 2 ? arguments[2] : void 0;
  if (currentSelectedValue === "transparent") {
    return "transparent";
  }
  if (backgrounds.find(function(background) {
    return background.value === currentSelectedValue;
  })) {
    return currentSelectedValue;
  }
  var defaultBackground = backgrounds.find(function(background) {
    return background.name === defaultName;
  });
  if (defaultBackground) {
    return defaultBackground.value;
  }
  if (defaultName) {
    var availableColors = backgrounds.map(function(background) {
      return background.name;
    }).join(", ");
    logger.warn(dedent(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral$1(['\n        Backgrounds Addon: could not find the default color "', '".\n        These are the available colors for your story based on your configuration:\n        ', ".\n      "])), defaultName, availableColors));
  }
  return "transparent";
};
var clearStyles = function clearStyles2(selector) {
  var selectors = Array.isArray(selector) ? selector : [selector];
  selectors.forEach(clearStyle);
};
var clearStyle = function clearStyle2(selector) {
  var element = document.getElementById(selector);
  if (element) {
    element.parentElement.removeChild(element);
  }
};
var addGridStyle = function addGridStyle2(selector, css) {
  var existingStyle = document.getElementById(selector);
  if (existingStyle) {
    if (existingStyle.innerHTML !== css) {
      existingStyle.innerHTML = css;
    }
  } else {
    var style = document.createElement("style");
    style.setAttribute("id", selector);
    style.innerHTML = css;
    document.head.appendChild(style);
  }
};
var addBackgroundStyle = function addBackgroundStyle2(selector, css, storyId) {
  var existingStyle = document.getElementById(selector);
  if (existingStyle) {
    if (existingStyle.innerHTML !== css) {
      existingStyle.innerHTML = css;
    }
  } else {
    var style = document.createElement("style");
    style.setAttribute("id", selector);
    style.innerHTML = css;
    var gridStyleSelector = "addon-backgrounds-grid".concat(storyId ? "-docs-".concat(storyId) : "");
    var existingGridStyle = document.getElementById(gridStyleSelector);
    if (existingGridStyle) {
      existingGridStyle.parentElement.insertBefore(style, existingGridStyle);
    } else {
      document.head.appendChild(style);
    }
  }
};
var withBackground = function withBackground2(StoryFn, context) {
  var _globals$BACKGROUNDS_;
  var globals = context.globals, parameters2 = context.parameters;
  var globalsBackgroundColor = (_globals$BACKGROUNDS_ = globals[PARAM_KEY]) === null || _globals$BACKGROUNDS_ === void 0 ? void 0 : _globals$BACKGROUNDS_.value;
  var backgroundsConfig = parameters2[PARAM_KEY];
  var selectedBackgroundColor = useMemo(function() {
    if (backgroundsConfig.disable) {
      return "transparent";
    }
    return getBackgroundColorByName(globalsBackgroundColor, backgroundsConfig.values, backgroundsConfig.default);
  }, [backgroundsConfig, globalsBackgroundColor]);
  var isActive = useMemo(function() {
    return selectedBackgroundColor && selectedBackgroundColor !== "transparent";
  }, [selectedBackgroundColor]);
  var selector = context.viewMode === "docs" ? "#anchor--".concat(context.id, " .docs-story") : ".sb-show-main";
  var backgroundStyles = useMemo(function() {
    var transitionStyle = "transition: background-color 0.3s;";
    return "\n      ".concat(selector, " {\n        background: ").concat(selectedBackgroundColor, " !important;\n        ").concat(isReduceMotionEnabled() ? "" : transitionStyle, "\n      }\n    ");
  }, [selectedBackgroundColor, selector]);
  useEffect(function() {
    var selectorId = context.viewMode === "docs" ? "addon-backgrounds-docs-".concat(context.id) : "addon-backgrounds-color";
    if (!isActive) {
      clearStyles(selectorId);
      return;
    }
    addBackgroundStyle(selectorId, backgroundStyles, context.viewMode === "docs" ? context.id : null);
  }, [isActive, backgroundStyles, context]);
  return StoryFn();
};
var _templateObject;
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var deprecatedCellSizeWarning = browser(function() {
}, dedent(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    Backgrounds Addon: The cell size parameter has been changed.\n\n    - parameters.grid.cellSize should now be parameters.backgrounds.grid.cellSize\n    See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-grid-parameter\n  "]))));
var withGrid = function withGrid2(StoryFn, context) {
  var _globals$BACKGROUNDS_, _parameters$grid, _gridParameters$offse, _gridParameters$offse2;
  var globals = context.globals, parameters2 = context.parameters;
  var gridParameters = parameters2[PARAM_KEY].grid;
  var isActive = ((_globals$BACKGROUNDS_ = globals[PARAM_KEY]) === null || _globals$BACKGROUNDS_ === void 0 ? void 0 : _globals$BACKGROUNDS_.grid) === true && gridParameters.disable !== true;
  var cellAmount = gridParameters.cellAmount, cellSize = gridParameters.cellSize, opacity = gridParameters.opacity;
  var isInDocs = context.viewMode === "docs";
  var gridSize;
  if ((_parameters$grid = parameters2.grid) !== null && _parameters$grid !== void 0 && _parameters$grid.cellSize) {
    gridSize = parameters2.grid.cellSize;
    deprecatedCellSizeWarning();
  } else {
    gridSize = cellSize;
  }
  var isLayoutPadded = parameters2.layout === void 0 || parameters2.layout === "padded";
  var defaultOffset = isLayoutPadded ? 16 : 0;
  var offsetX = (_gridParameters$offse = gridParameters.offsetX) !== null && _gridParameters$offse !== void 0 ? _gridParameters$offse : isInDocs ? 20 : defaultOffset;
  var offsetY = (_gridParameters$offse2 = gridParameters.offsetY) !== null && _gridParameters$offse2 !== void 0 ? _gridParameters$offse2 : isInDocs ? 20 : defaultOffset;
  var gridStyles = useMemo(function() {
    var selector = context.viewMode === "docs" ? "#anchor--".concat(context.id, " .docs-story") : ".sb-show-main";
    var backgroundSize = ["".concat(gridSize * cellAmount, "px ").concat(gridSize * cellAmount, "px"), "".concat(gridSize * cellAmount, "px ").concat(gridSize * cellAmount, "px"), "".concat(gridSize, "px ").concat(gridSize, "px"), "".concat(gridSize, "px ").concat(gridSize, "px")].join(", ");
    return "\n      ".concat(selector, " {\n        background-size: ").concat(backgroundSize, " !important;\n        background-position: ").concat(offsetX, "px ").concat(offsetY, "px, ").concat(offsetX, "px ").concat(offsetY, "px, ").concat(offsetX, "px ").concat(offsetY, "px, ").concat(offsetX, "px ").concat(offsetY, "px !important;\n        background-blend-mode: difference !important;\n        background-image: linear-gradient(rgba(130, 130, 130, ").concat(opacity, ") 1px, transparent 1px),\n         linear-gradient(90deg, rgba(130, 130, 130, ").concat(opacity, ") 1px, transparent 1px),\n         linear-gradient(rgba(130, 130, 130, ").concat(opacity / 2, ") 1px, transparent 1px),\n         linear-gradient(90deg, rgba(130, 130, 130, ").concat(opacity / 2, ") 1px, transparent 1px) !important;\n      }\n    ");
  }, [gridSize]);
  useEffect(function() {
    var selectorId = context.viewMode === "docs" ? "addon-backgrounds-grid-docs-".concat(context.id) : "addon-backgrounds-grid";
    if (!isActive) {
      clearStyles(selectorId);
      return;
    }
    addGridStyle(selectorId, gridStyles);
  }, [isActive, gridStyles, context]);
  return StoryFn();
};
var decorators = [withGrid, withBackground];
var parameters = {
  backgrounds: {
    grid: {
      cellSize: 20,
      opacity: 0.5,
      cellAmount: 5
    },
    values: [{
      name: "light",
      value: "#F8F8F8"
    }, {
      name: "dark",
      value: "#333333"
    }]
  }
};
export { decorators, parameters };
//# sourceMappingURL=preview4.js.map
