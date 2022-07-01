import { w as window_1, d as dedent, n as useMemo, u as useEffect } from "./iframe.js";
var clearStyles = function clearStyles2(selector) {
  var selectors = Array.isArray(selector) ? selector : [selector];
  selectors.forEach(clearStyle);
};
var clearStyle = function clearStyle2(selector) {
  var element = window_1.document.getElementById(selector);
  if (element && element.parentElement) {
    element.parentElement.removeChild(element);
  }
};
var addOutlineStyles = function addOutlineStyles2(selector, css) {
  var existingStyle = window_1.document.getElementById(selector);
  if (existingStyle) {
    if (existingStyle.innerHTML !== css) {
      existingStyle.innerHTML = css;
    }
  } else {
    var style = window_1.document.createElement("style");
    style.setAttribute("id", selector);
    style.innerHTML = css;
    window_1.document.head.appendChild(style);
  }
};
var PARAM_KEY = "outline";
var _templateObject;
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function outlineCSS(selector) {
  return dedent(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", " body {\n      outline: 1px solid #2980b9 !important;\n    }\n\n    ", " article {\n      outline: 1px solid #3498db !important;\n    }\n\n    ", " nav {\n      outline: 1px solid #0088c3 !important;\n    }\n\n    ", " aside {\n      outline: 1px solid #33a0ce !important;\n    }\n\n    ", " section {\n      outline: 1px solid #66b8da !important;\n    }\n\n    ", " header {\n      outline: 1px solid #99cfe7 !important;\n    }\n\n    ", " footer {\n      outline: 1px solid #cce7f3 !important;\n    }\n\n    ", " h1 {\n      outline: 1px solid #162544 !important;\n    }\n\n    ", " h2 {\n      outline: 1px solid #314e6e !important;\n    }\n\n    ", " h3 {\n      outline: 1px solid #3e5e85 !important;\n    }\n\n    ", " h4 {\n      outline: 1px solid #449baf !important;\n    }\n\n    ", " h5 {\n      outline: 1px solid #c7d1cb !important;\n    }\n\n    ", " h6 {\n      outline: 1px solid #4371d0 !important;\n    }\n\n    ", " main {\n      outline: 1px solid #2f4f90 !important;\n    }\n\n    ", " address {\n      outline: 1px solid #1a2c51 !important;\n    }\n\n    ", " div {\n      outline: 1px solid #036cdb !important;\n    }\n\n    ", " p {\n      outline: 1px solid #ac050b !important;\n    }\n\n    ", " hr {\n      outline: 1px solid #ff063f !important;\n    }\n\n    ", " pre {\n      outline: 1px solid #850440 !important;\n    }\n\n    ", " blockquote {\n      outline: 1px solid #f1b8e7 !important;\n    }\n\n    ", " ol {\n      outline: 1px solid #ff050c !important;\n    }\n\n    ", " ul {\n      outline: 1px solid #d90416 !important;\n    }\n\n    ", " li {\n      outline: 1px solid #d90416 !important;\n    }\n\n    ", " dl {\n      outline: 1px solid #fd3427 !important;\n    }\n\n    ", " dt {\n      outline: 1px solid #ff0043 !important;\n    }\n\n    ", " dd {\n      outline: 1px solid #e80174 !important;\n    }\n\n    ", " figure {\n      outline: 1px solid #ff00bb !important;\n    }\n\n    ", " figcaption {\n      outline: 1px solid #bf0032 !important;\n    }\n\n    ", " table {\n      outline: 1px solid #00cc99 !important;\n    }\n\n    ", " caption {\n      outline: 1px solid #37ffc4 !important;\n    }\n\n    ", " thead {\n      outline: 1px solid #98daca !important;\n    }\n\n    ", " tbody {\n      outline: 1px solid #64a7a0 !important;\n    }\n\n    ", " tfoot {\n      outline: 1px solid #22746b !important;\n    }\n\n    ", " tr {\n      outline: 1px solid #86c0b2 !important;\n    }\n\n    ", " th {\n      outline: 1px solid #a1e7d6 !important;\n    }\n\n    ", " td {\n      outline: 1px solid #3f5a54 !important;\n    }\n\n    ", " col {\n      outline: 1px solid #6c9a8f !important;\n    }\n\n    ", " colgroup {\n      outline: 1px solid #6c9a9d !important;\n    }\n\n    ", " button {\n      outline: 1px solid #da8301 !important;\n    }\n\n    ", " datalist {\n      outline: 1px solid #c06000 !important;\n    }\n\n    ", " fieldset {\n      outline: 1px solid #d95100 !important;\n    }\n\n    ", " form {\n      outline: 1px solid #d23600 !important;\n    }\n\n    ", " input {\n      outline: 1px solid #fca600 !important;\n    }\n\n    ", " keygen {\n      outline: 1px solid #b31e00 !important;\n    }\n\n    ", " label {\n      outline: 1px solid #ee8900 !important;\n    }\n\n    ", " legend {\n      outline: 1px solid #de6d00 !important;\n    }\n\n    ", " meter {\n      outline: 1px solid #e8630c !important;\n    }\n\n    ", " optgroup {\n      outline: 1px solid #b33600 !important;\n    }\n\n    ", " option {\n      outline: 1px solid #ff8a00 !important;\n    }\n\n    ", " output {\n      outline: 1px solid #ff9619 !important;\n    }\n\n    ", " progress {\n      outline: 1px solid #e57c00 !important;\n    }\n\n    ", " select {\n      outline: 1px solid #e26e0f !important;\n    }\n\n    ", " textarea {\n      outline: 1px solid #cc5400 !important;\n    }\n\n    ", " details {\n      outline: 1px solid #33848f !important;\n    }\n\n    ", " summary {\n      outline: 1px solid #60a1a6 !important;\n    }\n\n    ", " command {\n      outline: 1px solid #438da1 !important;\n    }\n\n    ", " menu {\n      outline: 1px solid #449da6 !important;\n    }\n\n    ", " del {\n      outline: 1px solid #bf0000 !important;\n    }\n\n    ", " ins {\n      outline: 1px solid #400000 !important;\n    }\n\n    ", " img {\n      outline: 1px solid #22746b !important;\n    }\n\n    ", " iframe {\n      outline: 1px solid #64a7a0 !important;\n    }\n\n    ", " embed {\n      outline: 1px solid #98daca !important;\n    }\n\n    ", " object {\n      outline: 1px solid #00cc99 !important;\n    }\n\n    ", " param {\n      outline: 1px solid #37ffc4 !important;\n    }\n\n    ", " video {\n      outline: 1px solid #6ee866 !important;\n    }\n\n    ", " audio {\n      outline: 1px solid #027353 !important;\n    }\n\n    ", " source {\n      outline: 1px solid #012426 !important;\n    }\n\n    ", " canvas {\n      outline: 1px solid #a2f570 !important;\n    }\n\n    ", " track {\n      outline: 1px solid #59a600 !important;\n    }\n\n    ", " map {\n      outline: 1px solid #7be500 !important;\n    }\n\n    ", " area {\n      outline: 1px solid #305900 !important;\n    }\n\n    ", " a {\n      outline: 1px solid #ff62ab !important;\n    }\n\n    ", " em {\n      outline: 1px solid #800b41 !important;\n    }\n\n    ", " strong {\n      outline: 1px solid #ff1583 !important;\n    }\n\n    ", " i {\n      outline: 1px solid #803156 !important;\n    }\n\n    ", " b {\n      outline: 1px solid #cc1169 !important;\n    }\n\n    ", " u {\n      outline: 1px solid #ff0430 !important;\n    }\n\n    ", " s {\n      outline: 1px solid #f805e3 !important;\n    }\n\n    ", " small {\n      outline: 1px solid #d107b2 !important;\n    }\n\n    ", " abbr {\n      outline: 1px solid #4a0263 !important;\n    }\n\n    ", " q {\n      outline: 1px solid #240018 !important;\n    }\n\n    ", " cite {\n      outline: 1px solid #64003c !important;\n    }\n\n    ", " dfn {\n      outline: 1px solid #b4005a !important;\n    }\n\n    ", " sub {\n      outline: 1px solid #dba0c8 !important;\n    }\n\n    ", " sup {\n      outline: 1px solid #cc0256 !important;\n    }\n\n    ", " time {\n      outline: 1px solid #d6606d !important;\n    }\n\n    ", " code {\n      outline: 1px solid #e04251 !important;\n    }\n\n    ", " kbd {\n      outline: 1px solid #5e001f !important;\n    }\n\n    ", " samp {\n      outline: 1px solid #9c0033 !important;\n    }\n\n    ", " var {\n      outline: 1px solid #d90047 !important;\n    }\n\n    ", " mark {\n      outline: 1px solid #ff0053 !important;\n    }\n\n    ", " bdi {\n      outline: 1px solid #bf3668 !important;\n    }\n\n    ", " bdo {\n      outline: 1px solid #6f1400 !important;\n    }\n\n    ", " ruby {\n      outline: 1px solid #ff7b93 !important;\n    }\n\n    ", " rt {\n      outline: 1px solid #ff2f54 !important;\n    }\n\n    ", " rp {\n      outline: 1px solid #803e49 !important;\n    }\n\n    ", " span {\n      outline: 1px solid #cc2643 !important;\n    }\n\n    ", " br {\n      outline: 1px solid #db687d !important;\n    }\n\n    ", " wbr {\n      outline: 1px solid #db175b !important;\n    }"])), selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector, selector);
}
var withOutline = function withOutline2(StoryFn, context) {
  var globals2 = context.globals;
  var isActive = globals2[PARAM_KEY] === true;
  var isInDocs = context.viewMode === "docs";
  var outlineStyles = useMemo(function() {
    var selector = isInDocs ? "#anchor--".concat(context.id, " .docs-story") : ".sb-show-main";
    return outlineCSS(selector);
  }, [context]);
  useEffect(function() {
    var selectorId = isInDocs ? "addon-outline-docs-".concat(context.id) : "addon-outline";
    if (!isActive) {
      clearStyles(selectorId);
    } else {
      addOutlineStyles(selectorId, outlineStyles);
    }
    return function() {
      clearStyles(selectorId);
    };
  }, [isActive, outlineStyles, context]);
  return StoryFn();
};
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var decorators = [withOutline];
var globals = _defineProperty({}, PARAM_KEY, false);
export { decorators, globals };
//# sourceMappingURL=preview6.js.map
