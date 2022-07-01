import * as React__default from "react";
import React__default__default, { useContext, createElement, createContext, useRef, Fragment, forwardRef, useLayoutEffect, lazy, memo, Children, Suspense, useState, useCallback, useEffect, Component, useMemo, cloneElement } from "react";
import { r as memoize$3, l as logger, s as dist, t as lib, o as once, w as window_1$2, h as addons, E as Events, v as filterArgTypes, m as mapValues_1, x as fastDeepEqual, a as combineParameters, N as NAVIGATE_URL, j as browser, d as dedent$2 } from "./iframe.js";
import { j as jsx, a as jsxs, F as Fragment$1 } from "./jsx-runtime.js";
import { s as str } from "./string.js";
var _templateObject$5, _templateObject2$1, _templateObject3$1, _templateObject4$1, _templateObject5, _templateObject6, _templateObject7;
function _defineProperty$6(obj, key, value2) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value2, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value2;
  }
  return obj;
}
function _slicedToArray$5(arr, i2) {
  return _arrayWithHoles$5(arr) || _iterableToArrayLimit$5(arr, i2) || _unsupportedIterableToArray$6(arr, i2) || _nonIterableRest$5();
}
function _nonIterableRest$5() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$6(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray$6(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$6(o2, minLen);
}
function _arrayLikeToArray$6(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function _iterableToArrayLimit$5(arr, i2) {
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
      if (i2 && _arr.length === i2)
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
function _taggedTemplateLiteral$5(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _typeof$1(obj) {
  "@babel/helpers - typeof";
  return _typeof$1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$1(obj);
}
function _extends$1$1() {
  _extends$1$1 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1$1.apply(this, arguments);
}
function memoize$2(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize$2(function(prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
function sheetForTag$1(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i2 = 0; i2 < document.styleSheets.length; i2++) {
    if (document.styleSheets[i2].ownerNode === tag) {
      return document.styleSheets[i2];
    }
  }
}
function createStyleElement$1(options) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options.key);
  if (options.nonce !== void 0) {
    tag.setAttribute("nonce", options.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet$1 = /* @__PURE__ */ function() {
  function StyleSheet2(options) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement$1(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag$1(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e2) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet2;
}();
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value2, length2) {
  return (((length2 << 2 ^ charat(value2, 0)) << 2 ^ charat(value2, 1)) << 2 ^ charat(value2, 2)) << 2 ^ charat(value2, 3);
}
function trim(value2) {
  return value2.trim();
}
function match(value2, pattern) {
  return (value2 = pattern.exec(value2)) ? value2[0] : value2;
}
function replace(value2, pattern, replacement) {
  return value2.replace(pattern, replacement);
}
function indexof(value2, search) {
  return value2.indexOf(search);
}
function charat(value2, index2) {
  return value2.charCodeAt(index2) | 0;
}
function substr(value2, begin, end2) {
  return value2.slice(begin, end2);
}
function strlen(value2) {
  return value2.length;
}
function sizeof(value2) {
  return value2.length;
}
function append(value2, array2) {
  return array2.push(value2), value2;
}
function combine(array2, callback) {
  return array2.map(callback).join("");
}
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value2, root2, parent, type, props, children, length2) {
  return {
    value: value2,
    root: root2,
    parent,
    type,
    props,
    children,
    line,
    column,
    length: length2,
    return: ""
  };
}
function copy(root2, props) {
  return assign(node("", null, null, "", null, null, 0), root2, {
    length: -root2.length
  }, props);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end2) {
  return substr(characters, begin, end2);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value2) {
  return line = column = 1, length = strlen(characters = value2), position = 0, [];
}
function dealloc(value2) {
  return characters = "", value2;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek()) {
    if (character < 33)
      next();
    else
      break;
  }
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index2, count) {
  while (--count && next()) {
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  }
  return slice(index2, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next()) {
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  }
  return position;
}
function commenter(type, index2) {
  while (next()) {
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  }
  return "/*" + slice(index2, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index2) {
  while (!token(peek())) {
    next();
  }
  return slice(index2, position);
}
function compile(value2) {
  return dealloc(parse$3("", null, null, null, [""], value2 = alloc(value2), 0, [0], value2));
}
function parse$3(value2, root2, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index2 = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property2 = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference2 = rule;
  var characters2 = type;
  while (scanning) {
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && characters2.charCodeAt(length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root2, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index2++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (property2 > 0 && strlen(characters2) - length2)
              append(property2 > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference2 = ruleset(characters2, root2, parent, index2, offset, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse$3(characters2, root2, reference2, reference2, props, rulesets, length2, points, children);
              else
                switch (atrule) {
                  case 100:
                  case 109:
                  case 115:
                    parse$3(value2, reference2, reference2, rule && append(ruleset(value2, reference2, reference2, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse$3(characters2, reference2, reference2, reference2, [""], children, 0, points, children);
                }
        }
        index2 = offset = property2 = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property2 = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index2++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  }
  return rulesets;
}
function ruleset(value2, root2, parent, index2, offset, rules, points, type, props, children, length2) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i2 = 0, j2 = 0, k2 = 0; i2 < index2; ++i2) {
    for (var x2 = 0, y2 = substr(value2, post + 1, post = abs(j2 = points[i2])), z2 = value2; x2 < size; ++x2) {
      if (z2 = trim(j2 > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
        props[k2++] = z2;
    }
  }
  return node(value2, root2, parent, offset === 0 ? RULESET : type, props, children, length2);
}
function comment(value2, root2, parent) {
  return node(value2, root2, parent, COMMENT, from(char()), substr(value2, 2, -2), 0);
}
function declaration(value2, root2, parent, length2) {
  return node(value2, root2, parent, DECLARATION, substr(value2, 0, length2), substr(value2, length2 + 1, -1), length2);
}
function prefix(value2, length2) {
  switch (hash(value2, length2)) {
    case 5103:
      return WEBKIT + "print-" + value2 + value2;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value2 + value2;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value2 + MOZ + value2 + MS + value2 + value2;
    case 6828:
    case 4268:
      return WEBKIT + value2 + MS + value2 + value2;
    case 6165:
      return WEBKIT + value2 + MS + "flex-" + value2 + value2;
    case 5187:
      return WEBKIT + value2 + replace(value2, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value2;
    case 5443:
      return WEBKIT + value2 + MS + "flex-item-" + replace(value2, /flex-|-self/, "") + value2;
    case 4675:
      return WEBKIT + value2 + MS + "flex-line-pack" + replace(value2, /align-content|flex-|-self/, "") + value2;
    case 5548:
      return WEBKIT + value2 + MS + replace(value2, "shrink", "negative") + value2;
    case 5292:
      return WEBKIT + value2 + MS + replace(value2, "basis", "preferred-size") + value2;
    case 6060:
      return WEBKIT + "box-" + replace(value2, "-grow", "") + WEBKIT + value2 + MS + replace(value2, "grow", "positive") + value2;
    case 4554:
      return WEBKIT + replace(value2, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value2;
    case 6187:
      return replace(replace(replace(value2, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value2, "") + value2;
    case 5495:
    case 3959:
      return replace(value2, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(value2, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value2 + value2;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value2, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value2;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value2) - 1 - length2 > 6)
        switch (charat(value2, length2 + 1)) {
          case 109:
            if (charat(value2, length2 + 4) !== 45)
              break;
          case 102:
            return replace(value2, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value2, length2 + 3) == 108 ? "$3" : "$2-$3")) + value2;
          case 115:
            return ~indexof(value2, "stretch") ? prefix(replace(value2, "stretch", "fill-available"), length2) + value2 : value2;
        }
      break;
    case 4949:
      if (charat(value2, length2 + 1) !== 115)
        break;
    case 6444:
      switch (charat(value2, strlen(value2) - 3 - (~indexof(value2, "!important") && 10))) {
        case 107:
          return replace(value2, ":", ":" + WEBKIT) + value2;
        case 101:
          return replace(value2, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value2, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value2;
      }
      break;
    case 5936:
      switch (charat(value2, length2 + 11)) {
        case 114:
          return WEBKIT + value2 + MS + replace(value2, /[svh]\w+-[tblr]{2}/, "tb") + value2;
        case 108:
          return WEBKIT + value2 + MS + replace(value2, /[svh]\w+-[tblr]{2}/, "tb-rl") + value2;
        case 45:
          return WEBKIT + value2 + MS + replace(value2, /[svh]\w+-[tblr]{2}/, "lr") + value2;
      }
      return WEBKIT + value2 + MS + value2 + value2;
  }
  return value2;
}
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i2 = 0; i2 < length2; i2++) {
    output += callback(children[i2], i2, children, callback) || "";
  }
  return output;
}
function stringify(element, index2, children, callback) {
  switch (element.type) {
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index2, children, callback) {
    var output = "";
    for (var i2 = 0; i2 < length2; i2++) {
      output += collection[i2](element, index2, children, callback) || "";
    }
    return output;
  };
}
function rulesheet(callback) {
  return function(element) {
    if (!element.root) {
      if (element = element.return)
        callback(element);
    }
  };
}
function prefixer(element, index2, children, callback) {
  if (element.length > -1) {
    if (!element.return)
      switch (element.type) {
        case DECLARATION:
          element.return = prefix(element.value, element.length);
          break;
        case KEYFRAMES:
          return serialize([copy(element, {
            value: replace(element.value, "@", "@" + WEBKIT)
          })], callback);
        case RULESET:
          if (element.length)
            return combine(element.props, function(value2) {
              switch (match(value2, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return serialize([copy(element, {
                    props: [replace(value2, /:(read-\w+)/, ":" + MOZ + "$1")]
                  })], callback);
                case "::placeholder":
                  return serialize([copy(element, {
                    props: [replace(value2, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
                  }), copy(element, {
                    props: [replace(value2, /:(plac\w+)/, ":" + MOZ + "$1")]
                  }), copy(element, {
                    props: [replace(value2, /:(plac\w+)/, MS + "input-$1")]
                  })], callback);
              }
              return "";
            });
      }
  }
}
var weakMemoize = function weakMemoize2(func) {
  var cache = /* @__PURE__ */ new WeakMap();
  return function(arg) {
    if (cache.has(arg)) {
      return cache.get(arg);
    }
    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};
var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index2) {
  var previous = 0;
  var character2 = 0;
  while (true) {
    previous = character2;
    character2 = peek();
    if (previous === 38 && character2 === 12) {
      points[index2] = 1;
    }
    if (token(character2)) {
      break;
    }
    next();
  }
  return slice(begin, position);
};
var toRules = function toRules2(parsed, points) {
  var index2 = -1;
  var character2 = 44;
  do {
    switch (token(character2)) {
      case 0:
        if (character2 === 38 && peek() === 12) {
          points[index2] = 1;
        }
        parsed[index2] += identifierWithPointTracking(position - 1, points, index2);
        break;
      case 2:
        parsed[index2] += delimit(character2);
        break;
      case 4:
        if (character2 === 44) {
          parsed[++index2] = peek() === 58 ? "&\f" : "";
          points[index2] = parsed[index2].length;
          break;
        }
      default:
        parsed[index2] += from(character2);
    }
  } while (character2 = next());
  return parsed;
};
var getRules = function getRules2(value2, points) {
  return dealloc(toRules(alloc(value2), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || element.length < 1) {
    return;
  }
  var value2 = element.value, parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent)
      return;
  }
  if (element.props.length === 1 && value2.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value2, points);
  var parentRules = parent.props;
  for (var i2 = 0, k2 = 0; i2 < rules.length; i2++) {
    for (var j2 = 0; j2 < parentRules.length; j2++, k2++) {
      element.props[k2] = points[i2] ? rules[i2].replace(/&\f/g, parentRules[j2]) : parentRules[j2] + " " + rules[i2];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value2 = element.value;
    if (value2.charCodeAt(0) === 108 && value2.charCodeAt(2) === 98) {
      element["return"] = "";
      element.value = "";
    }
  }
};
var isBrowser$6 = typeof document !== "undefined";
var getServerStylisCache = isBrowser$6 ? void 0 : weakMemoize(function() {
  return memoize$2(function() {
    var cache = {};
    return function(name) {
      return cache[name];
    };
  });
});
var defaultStylisPlugins = [prefixer];
var createCache = function createCache2(options) {
  var key = options.key;
  if (isBrowser$6 && key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node2) {
      var dataEmotionAttribute = node2.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node2);
      node2.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  if (isBrowser$6) {
    container = options.container || document.head;
    Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + key + ' "]'), function(node2) {
      var attrib = node2.getAttribute("data-emotion").split(" ");
      for (var i2 = 1; i2 < attrib.length; i2++) {
        inserted[attrib[i2]] = true;
      }
      nodesToHydrate.push(node2);
    });
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  if (isBrowser$6) {
    var currentSheet;
    var finalizingPlugins = [stringify, rulesheet(function(rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles3) {
      return serialize(compile(styles3), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  } else {
    var _finalizingPlugins = [stringify];
    var _serializer = middleware(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));
    var _stylis = function _stylis2(styles3) {
      return serialize(compile(styles3), _serializer);
    };
    var serverStylisCache = getServerStylisCache(stylisPlugins)(key);
    var getRules3 = function getRules4(selector, serialized) {
      var name = serialized.name;
      if (serverStylisCache[name] === void 0) {
        serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      }
      return serverStylisCache[name];
    };
    _insert = function _insert2(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules3(selector, serialized);
      if (cache.compat === void 0) {
        if (shouldCache) {
          cache.inserted[name] = true;
        }
        return rules;
      } else {
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }
  var cache = {
    key,
    sheet: new StyleSheet$1({
      key,
      container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};
var commonjsGlobal$1 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var reactIs$1 = {
  exports: {}
};
var reactIs_production_min = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1 = typeof Symbol === "function" && Symbol.for, c$1 = b$1 ? Symbol.for("react.element") : 60103, d$1 = b$1 ? Symbol.for("react.portal") : 60106, e$1 = b$1 ? Symbol.for("react.fragment") : 60107, f$1 = b$1 ? Symbol.for("react.strict_mode") : 60108, g$1 = b$1 ? Symbol.for("react.profiler") : 60114, h$1 = b$1 ? Symbol.for("react.provider") : 60109, k$1 = b$1 ? Symbol.for("react.context") : 60110, l$1 = b$1 ? Symbol.for("react.async_mode") : 60111, m$1 = b$1 ? Symbol.for("react.concurrent_mode") : 60111, n$1 = b$1 ? Symbol.for("react.forward_ref") : 60112, p$1 = b$1 ? Symbol.for("react.suspense") : 60113, q$1 = b$1 ? Symbol.for("react.suspense_list") : 60120, r$1 = b$1 ? Symbol.for("react.memo") : 60115, t = b$1 ? Symbol.for("react.lazy") : 60116, v$1 = b$1 ? Symbol.for("react.block") : 60121, w$1 = b$1 ? Symbol.for("react.fundamental") : 60117, x$1 = b$1 ? Symbol.for("react.responder") : 60118, y$1 = b$1 ? Symbol.for("react.scope") : 60119;
function z$1(a3) {
  if (_typeof$1(a3) === "object" && a3 !== null) {
    var u2 = a3.$$typeof;
    switch (u2) {
      case c$1:
        switch (a3 = a3.type, a3) {
          case l$1:
          case m$1:
          case e$1:
          case g$1:
          case f$1:
          case p$1:
            return a3;
          default:
            switch (a3 = a3 && a3.$$typeof, a3) {
              case k$1:
              case n$1:
              case t:
              case r$1:
              case h$1:
                return a3;
              default:
                return u2;
            }
        }
      case d$1:
        return u2;
    }
  }
}
function A$4(a3) {
  return z$1(a3) === m$1;
}
reactIs_production_min.AsyncMode = l$1;
reactIs_production_min.ConcurrentMode = m$1;
reactIs_production_min.ContextConsumer = k$1;
reactIs_production_min.ContextProvider = h$1;
reactIs_production_min.Element = c$1;
reactIs_production_min.ForwardRef = n$1;
reactIs_production_min.Fragment = e$1;
reactIs_production_min.Lazy = t;
reactIs_production_min.Memo = r$1;
reactIs_production_min.Portal = d$1;
reactIs_production_min.Profiler = g$1;
reactIs_production_min.StrictMode = f$1;
reactIs_production_min.Suspense = p$1;
reactIs_production_min.isAsyncMode = function(a3) {
  return A$4(a3) || z$1(a3) === l$1;
};
reactIs_production_min.isConcurrentMode = A$4;
reactIs_production_min.isContextConsumer = function(a3) {
  return z$1(a3) === k$1;
};
reactIs_production_min.isContextProvider = function(a3) {
  return z$1(a3) === h$1;
};
reactIs_production_min.isElement = function(a3) {
  return _typeof$1(a3) === "object" && a3 !== null && a3.$$typeof === c$1;
};
reactIs_production_min.isForwardRef = function(a3) {
  return z$1(a3) === n$1;
};
reactIs_production_min.isFragment = function(a3) {
  return z$1(a3) === e$1;
};
reactIs_production_min.isLazy = function(a3) {
  return z$1(a3) === t;
};
reactIs_production_min.isMemo = function(a3) {
  return z$1(a3) === r$1;
};
reactIs_production_min.isPortal = function(a3) {
  return z$1(a3) === d$1;
};
reactIs_production_min.isProfiler = function(a3) {
  return z$1(a3) === g$1;
};
reactIs_production_min.isStrictMode = function(a3) {
  return z$1(a3) === f$1;
};
reactIs_production_min.isSuspense = function(a3) {
  return z$1(a3) === p$1;
};
reactIs_production_min.isValidElementType = function(a3) {
  return typeof a3 === "string" || typeof a3 === "function" || a3 === e$1 || a3 === m$1 || a3 === g$1 || a3 === f$1 || a3 === p$1 || a3 === q$1 || _typeof$1(a3) === "object" && a3 !== null && (a3.$$typeof === t || a3.$$typeof === r$1 || a3.$$typeof === h$1 || a3.$$typeof === k$1 || a3.$$typeof === n$1 || a3.$$typeof === w$1 || a3.$$typeof === x$1 || a3.$$typeof === y$1 || a3.$$typeof === v$1);
};
reactIs_production_min.typeOf = z$1;
{
  reactIs$1.exports = reactIs_production_min;
}
var reactIs = reactIs$1.exports;
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
var isBrowser$5 = typeof document !== "undefined";
var registerStyles$1 = function registerStyles2(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if ((isStringTag === false || isBrowser$5 === false && cache.compat !== void 0) && cache.registered[className] === void 0) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles$1 = function insertStyles2(cache, serialized, isStringTag) {
  registerStyles$1(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === void 0) {
    var stylesForSSR = "";
    var current = serialized;
    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
      if (!isBrowser$5 && maybeStyles !== void 0) {
        stylesForSSR += maybeStyles;
      }
      current = current.next;
    } while (current !== void 0);
    if (!isBrowser$5 && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};
function murmur2(str2) {
  var h7 = 0;
  var k2, i2 = 0, len = str2.length;
  for (; len >= 4; ++i2, len -= 4) {
    k2 = str2.charCodeAt(i2) & 255 | (str2.charCodeAt(++i2) & 255) << 8 | (str2.charCodeAt(++i2) & 255) << 16 | (str2.charCodeAt(++i2) & 255) << 24;
    k2 = (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
    k2 ^= k2 >>> 24;
    h7 = (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ (h7 & 65535) * 1540483477 + ((h7 >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h7 ^= (str2.charCodeAt(i2 + 2) & 255) << 16;
    case 2:
      h7 ^= (str2.charCodeAt(i2 + 1) & 255) << 8;
    case 1:
      h7 ^= str2.charCodeAt(i2) & 255;
      h7 = (h7 & 65535) * 1540483477 + ((h7 >>> 16) * 59797 << 16);
  }
  h7 ^= h7 >>> 13;
  h7 = (h7 & 65535) * 1540483477 + ((h7 >>> 16) * 59797 << 16);
  return ((h7 ^ h7 >>> 15) >>> 0).toString(36);
}
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var hyphenateRegex$1 = /[A-Z]|^ms/g;
var animationRegex$1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty$1 = function isCustomProperty2(property2) {
  return property2.charCodeAt(1) === 45;
};
var isProcessableValue$1 = function isProcessableValue2(value2) {
  return value2 != null && typeof value2 !== "boolean";
};
var processStyleName$1 = /* @__PURE__ */ memoize$2(function(styleName) {
  return isCustomProperty$1(styleName) ? styleName : styleName.replace(hyphenateRegex$1, "-$&").toLowerCase();
});
var processStyleValue$1 = function processStyleValue2(key, value2) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value2 === "string") {
        return value2.replace(animationRegex$1, function(match2, p1, p22) {
          cursor$1 = {
            name: p1,
            styles: p22,
            next: cursor$1
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty$1(key) && typeof value2 === "number" && value2 !== 0) {
    return value2 + "px";
  }
  return value2;
};
function handleInterpolation$1(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  if (interpolation.__emotion_styles !== void 0) {
    return interpolation;
  }
  switch (_typeof$1(interpolation)) {
    case "boolean": {
      return "";
    }
    case "object": {
      if (interpolation.anim === 1) {
        cursor$1 = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor$1
        };
        return interpolation.name;
      }
      if (interpolation.styles !== void 0) {
        var next2 = interpolation.next;
        if (next2 !== void 0) {
          while (next2 !== void 0) {
            cursor$1 = {
              name: next2.name,
              styles: next2.styles,
              next: cursor$1
            };
            next2 = next2.next;
          }
        }
        var styles3 = interpolation.styles + ";";
        return styles3;
      }
      return createStringFromObject$1(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor$1;
        var result2 = interpolation(mergedProps);
        cursor$1 = previousCursor;
        return handleInterpolation$1(mergedProps, registered, result2);
      }
      break;
    }
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject$1(mergedProps, registered, obj) {
  var string2 = "";
  if (Array.isArray(obj)) {
    for (var i2 = 0; i2 < obj.length; i2++) {
      string2 += handleInterpolation$1(mergedProps, registered, obj[i2]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value2 = obj[_key];
      if (_typeof$1(value2) !== "object") {
        if (registered != null && registered[value2] !== void 0) {
          string2 += _key + "{" + registered[value2] + "}";
        } else if (isProcessableValue$1(value2)) {
          string2 += processStyleName$1(_key) + ":" + processStyleValue$1(_key, value2) + ";";
        }
      } else {
        if (_key === "NO_COMPONENT_SELECTOR" && false) {
          throw new Error("Component selectors can only be used in conjunction with @emotion/babel-plugin.");
        }
        if (Array.isArray(value2) && typeof value2[0] === "string" && (registered == null || registered[value2[0]] === void 0)) {
          for (var _i = 0; _i < value2.length; _i++) {
            if (isProcessableValue$1(value2[_i])) {
              string2 += processStyleName$1(_key) + ":" + processStyleValue$1(_key, value2[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation$1(mergedProps, registered, value2);
          switch (_key) {
            case "animation":
            case "animationName": {
              string2 += processStyleName$1(_key) + ":" + interpolated + ";";
              break;
            }
            default: {
              string2 += _key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string2;
}
var labelPattern$1 = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var cursor$1;
var serializeStyles$1 = function serializeStyles2(args, registered, mergedProps) {
  if (args.length === 1 && _typeof$1(args[0]) === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles3 = "";
  cursor$1 = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles3 += handleInterpolation$1(mergedProps, registered, strings);
  } else {
    styles3 += strings[0];
  }
  for (var i2 = 1; i2 < args.length; i2++) {
    styles3 += handleInterpolation$1(mergedProps, registered, args[i2]);
    if (stringMode) {
      styles3 += strings[i2];
    }
  }
  labelPattern$1.lastIndex = 0;
  var identifierName = "";
  var match2;
  while ((match2 = labelPattern$1.exec(styles3)) !== null) {
    identifierName += "-" + match2[1];
  }
  var name = murmur2(styles3) + identifierName;
  return {
    name,
    styles: styles3,
    next: cursor$1
  };
};
var isBrowser$4 = typeof document !== "undefined";
var EmotionCacheContext = /* @__PURE__ */ createContext(typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
  key: "css"
}) : null);
EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache2(func) {
  return /* @__PURE__ */ forwardRef(function(props, ref) {
    var cache = useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
if (!isBrowser$4) {
  withEmotionCache = function withEmotionCache3(func) {
    return function(props) {
      var cache = useContext(EmotionCacheContext);
      if (cache === null) {
        cache = createCache({
          key: "css"
        });
        return /* @__PURE__ */ createElement(EmotionCacheContext.Provider, {
          value: cache
        }, func(props, cache));
      } else {
        return func(props, cache);
      }
    };
  };
}
var ThemeContext = /* @__PURE__ */ createContext({});
var useTheme$1 = function useTheme2() {
  return useContext(ThemeContext);
};
var getTheme = function getTheme2(outerTheme, theme2) {
  if (typeof theme2 === "function") {
    var mergedTheme = theme2(outerTheme);
    return mergedTheme;
  }
  return _extends$1$1({}, outerTheme, theme2);
};
var createCacheWithTheme = /* @__PURE__ */ weakMemoize(function(outerTheme) {
  return weakMemoize(function(theme2) {
    return getTheme(outerTheme, theme2);
  });
});
var ThemeProvider = function ThemeProvider2(props) {
  var theme2 = useContext(ThemeContext);
  if (props.theme !== theme2) {
    theme2 = createCacheWithTheme(theme2)(props.theme);
  }
  return /* @__PURE__ */ createElement(ThemeContext.Provider, {
    value: theme2
  }, props.children);
};
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i2 = 0; i2 < document.styleSheets.length; i2++) {
    if (document.styleSheets[i2].ownerNode === tag) {
      return document.styleSheets[i2];
    }
  }
}
function createStyleElement(options) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options.key);
  if (options.nonce !== void 0) {
    tag.setAttribute("nonce", options.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(options) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e2) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet2;
}();
var useInsertionEffect$1 = React__default["useInsertionEffect"] ? React__default["useInsertionEffect"] : useLayoutEffect;
var Global$1 = /* @__PURE__ */ withEmotionCache(function(props, cache) {
  var styles3 = props.styles;
  var serialized = serializeStyles$1([styles3], void 0, useContext(ThemeContext));
  if (!isBrowser$4) {
    var _ref;
    var serializedNames = serialized.name;
    var serializedStyles = serialized.styles;
    var next2 = serialized.next;
    while (next2 !== void 0) {
      serializedNames += " " + next2.name;
      serializedStyles += next2.styles;
      next2 = next2.next;
    }
    var shouldCache = cache.compat === true;
    var rules = cache.insert("", {
      name: serializedNames,
      styles: serializedStyles
    }, cache.sheet, shouldCache);
    if (shouldCache) {
      return null;
    }
    return /* @__PURE__ */ createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + "-global " + serializedNames, _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref));
  }
  var sheetRef = useRef();
  useInsertionEffect$1(function() {
    var key = cache.key + "-global";
    var sheet = new StyleSheet({
      key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false;
    var node2 = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }
    if (node2 !== null) {
      rehydrating = true;
      node2.setAttribute("data-emotion", key);
      sheet.hydrate([node2]);
    }
    sheetRef.current = [sheet, rehydrating];
    return function() {
      sheet.flush();
    };
  }, [cache]);
  useInsertionEffect$1(function() {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }
    if (serialized.next !== void 0) {
      insertStyles$1(cache, serialized.next, true);
    }
    if (sheet.tags.length) {
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }
    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});
function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return serializeStyles$1(args);
}
var keyframes = function keyframes2() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name;
  return {
    name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString2() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
var isBrowser$2 = typeof document !== "undefined";
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = "";
  classNames.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles3(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if ((isStringTag === false || isBrowser$2 === false && cache.compat !== void 0) && cache.registered[className] === void 0) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles3(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === void 0) {
    var stylesForSSR = "";
    var current = serialized;
    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
      if (!isBrowser$2 && maybeStyles !== void 0) {
        stylesForSSR += maybeStyles;
      }
      current = current.next;
    } while (current !== void 0);
    if (!isBrowser$2 && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty3(property2) {
  return property2.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue3(value2) {
  return value2 != null && typeof value2 !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize$2(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue3(key, value2) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value2 === "string") {
        return value2.replace(animationRegex, function(match2, p1, p22) {
          cursor = {
            name: p1,
            styles: p22,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value2 === "number" && value2 !== 0) {
    return value2 + "px";
  }
  return value2;
};
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  if (interpolation.__emotion_styles !== void 0) {
    return interpolation;
  }
  switch (_typeof$1(interpolation)) {
    case "boolean": {
      return "";
    }
    case "object": {
      if (interpolation.anim === 1) {
        cursor = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor
        };
        return interpolation.name;
      }
      if (interpolation.styles !== void 0) {
        var next2 = interpolation.next;
        if (next2 !== void 0) {
          while (next2 !== void 0) {
            cursor = {
              name: next2.name,
              styles: next2.styles,
              next: cursor
            };
            next2 = next2.next;
          }
        }
        var styles3 = interpolation.styles + ";";
        return styles3;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result2 = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result2);
      }
      break;
    }
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string2 = "";
  if (Array.isArray(obj)) {
    for (var i2 = 0; i2 < obj.length; i2++) {
      string2 += handleInterpolation(mergedProps, registered, obj[i2]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value2 = obj[_key];
      if (_typeof$1(value2) !== "object") {
        if (registered != null && registered[value2] !== void 0) {
          string2 += _key + "{" + registered[value2] + "}";
        } else if (isProcessableValue(value2)) {
          string2 += processStyleName(_key) + ":" + processStyleValue(_key, value2) + ";";
        }
      } else {
        if (_key === "NO_COMPONENT_SELECTOR" && false) {
          throw new Error("Component selectors can only be used in conjunction with @emotion/babel-plugin.");
        }
        if (Array.isArray(value2) && typeof value2[0] === "string" && (registered == null || registered[value2[0]] === void 0)) {
          for (var _i = 0; _i < value2.length; _i++) {
            if (isProcessableValue(value2[_i])) {
              string2 += processStyleName(_key) + ":" + processStyleValue(_key, value2[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value2);
          switch (_key) {
            case "animation":
            case "animationName": {
              string2 += processStyleName(_key) + ":" + interpolated + ";";
              break;
            }
            default: {
              string2 += _key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string2;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var cursor;
var serializeStyles = function serializeStyles3(args, registered, mergedProps) {
  if (args.length === 1 && _typeof$1(args[0]) === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles3 = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles3 += handleInterpolation(mergedProps, registered, strings);
  } else {
    styles3 += strings[0];
  }
  for (var i2 = 1; i2 < args.length; i2++) {
    styles3 += handleInterpolation(mergedProps, registered, args[i2]);
    if (stringMode) {
      styles3 += strings[i2];
    }
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match2;
  while ((match2 = labelPattern.exec(styles3)) !== null) {
    identifierName += "-" + match2[1];
  }
  var name = murmur2(styles3) + identifierName;
  return {
    name,
    styles: styles3,
    next: cursor
  };
};
var testOmitPropsOnStringTag = isPropValid;
var testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
  return key !== "theme";
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag) {
  return typeof tag === "string" && tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps2(tag, options, isReal) {
  var shouldForwardProp;
  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }
  if (typeof shouldForwardProp !== "function" && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }
  return shouldForwardProp;
};
var isBrowser = typeof document !== "undefined";
var useInsertionEffect = React__default["useInsertionEffect"] ? React__default["useInsertionEffect"] : function useInsertionEffect2(create3) {
  create3();
};
function useInsertionEffectMaybe(create3) {
  if (!isBrowser) {
    return create3();
  }
  useInsertionEffect(create3);
}
var isBrowser$1 = typeof document !== "undefined";
var Insertion = function Insertion2(_ref) {
  var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectMaybe(function() {
    return insertStyles(cache, serialized, isStringTag);
  });
  if (!isBrowser$1 && rules !== void 0) {
    var _ref2;
    var serializedNames = serialized.name;
    var next2 = serialized.next;
    while (next2 !== void 0) {
      serializedNames += " " + next2.name;
      next2 = next2.next;
    }
    return /* @__PURE__ */ createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }
  return null;
};
var createStyled = function createStyled2(tag, options) {
  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;
  if (options !== void 0) {
    identifierName = options.label;
    targetClassName = options.target;
  }
  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp("as");
  return function() {
    var args = arguments;
    var styles3 = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
    if (identifierName !== void 0) {
      styles3.push("label:" + identifierName + ";");
    }
    if (args[0] == null || args[0].raw === void 0) {
      styles3.push.apply(styles3, args);
    } else {
      styles3.push(args[0][0]);
      var len = args.length;
      var i2 = 1;
      for (; i2 < len; i2++) {
        styles3.push(args[i2], args[0][i2]);
      }
    }
    var Styled = withEmotionCache(function(props, cache, ref) {
      var FinalTag = shouldUseAs && props.as || baseTag;
      var className = "";
      var classInterpolations = [];
      var mergedProps = props;
      if (props.theme == null) {
        mergedProps = {};
        for (var key in props) {
          mergedProps[key] = props[key];
        }
        mergedProps.theme = useContext(ThemeContext);
      }
      if (typeof props.className === "string") {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }
      var serialized = serializeStyles(styles3.concat(classInterpolations), cache.registered, mergedProps);
      className += cache.key + "-" + serialized.name;
      if (targetClassName !== void 0) {
        className += " " + targetClassName;
      }
      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
      var newProps = {};
      for (var _key in props) {
        if (shouldUseAs && _key === "as")
          continue;
        if (finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }
      newProps.className = className;
      newProps.ref = ref;
      return /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement(Insertion, {
        cache,
        serialized,
        isStringTag: typeof FinalTag === "string"
      }), /* @__PURE__ */ createElement(FinalTag, newProps));
    });
    Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles3;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, "toString", {
      value: function value2() {
        if (targetClassName === void 0 && false) {
          return "NO_COMPONENT_SELECTOR";
        }
        return "." + targetClassName;
      }
    });
    Styled.withComponent = function(nextTag, nextOptions) {
      return createStyled2(nextTag, _extends$1$1({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles3);
    };
    return Styled;
  };
};
var tags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
var newStyled = createStyled.bind();
tags.forEach(function(tagName) {
  newStyled[tagName] = newStyled(tagName);
});
function _extends$3() {
  _extends$3 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
function _assertThisInitialized$1(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _setPrototypeOf$1(o2, p3) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf3(o3, p4) {
    o3.__proto__ = p4;
    return o3;
  };
  return _setPrototypeOf$1(o2, p3);
}
function _inheritsLoose$1(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf$1(subClass, superClass);
}
function _getPrototypeOf$1(o2) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o3) {
    return o3.__proto__ || Object.getPrototypeOf(o3);
  };
  return _getPrototypeOf$1(o2);
}
function _isNativeFunction$1(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _isNativeReflectConstruct$1() {
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
  } catch (e2) {
    return false;
  }
}
function _construct$1(Parent, args, Class) {
  if (_isNativeReflectConstruct$1()) {
    _construct$1 = Reflect.construct;
  } else {
    _construct$1 = function _construct2(Parent2, args2, Class2) {
      var a3 = [null];
      a3.push.apply(a3, args2);
      var Constructor = Function.bind.apply(Parent2, a3);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf$1(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct$1.apply(null, arguments);
}
function _wrapNativeSuper$1(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper$1 = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction$1(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper3);
    }
    function Wrapper3() {
      return _construct$1(Class2, arguments, _getPrototypeOf$1(this).constructor);
    }
    Wrapper3.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper3,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf$1(Wrapper3, Class2);
  };
  return _wrapNativeSuper$1(Class);
}
var PolishedError$1 = /* @__PURE__ */ function(_Error) {
  _inheritsLoose$1(PolishedError2, _Error);
  function PolishedError2(code2) {
    var _this;
    {
      _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + code2 + " for more information.") || this;
    }
    return _assertThisInitialized$1(_this);
  }
  return PolishedError2;
}(/* @__PURE__ */ _wrapNativeSuper$1(Error));
function colorToInt$1(color2) {
  return Math.round(color2 * 255);
}
function convertToInt$1(red, green, blue) {
  return colorToInt$1(red) + "," + colorToInt$1(green) + "," + colorToInt$1(blue);
}
function hslToRgb$1(hue, saturation, lightness, convert3) {
  if (convert3 === void 0) {
    convert3 = convertToInt$1;
  }
  if (saturation === 0) {
    return convert3(lightness, lightness, lightness);
  }
  var huePrime = (hue % 360 + 360) % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;
  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }
  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert3(finalRed, finalGreen, finalBlue);
}
var namedColorMap$1 = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function nameToHex$1(color2) {
  if (typeof color2 !== "string")
    return color2;
  var normalizedColorName = color2.toLowerCase();
  return namedColorMap$1[normalizedColorName] ? "#" + namedColorMap$1[normalizedColorName] : color2;
}
var hexRegex$1 = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex$1 = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex$1 = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex$1 = /^#[a-fA-F0-9]{4}$/;
var rgbRegex$1 = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;
var rgbaRegex$1 = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
var hslRegex$1 = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex$1 = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function parseToRgb$1(color2) {
  if (typeof color2 !== "string") {
    throw new PolishedError$1(3);
  }
  var normalizedColor = nameToHex$1(color2);
  if (normalizedColor.match(hexRegex$1)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }
  if (normalizedColor.match(hexRgbaRegex$1)) {
    var alpha2 = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha: alpha2
    };
  }
  if (normalizedColor.match(reducedHexRegex$1)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }
  if (normalizedColor.match(reducedRgbaHexRegex$1)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }
  var rgbMatched = rgbRegex$1.exec(normalizedColor);
  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }
  var rgbaMatched = rgbaRegex$1.exec(normalizedColor.substring(0, 50));
  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4]) > 1 ? parseFloat("" + rgbaMatched[4]) / 100 : parseFloat("" + rgbaMatched[4])
    };
  }
  var hslMatched = hslRegex$1.exec(normalizedColor);
  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb$1(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex$1.exec(rgbColorString);
    if (!hslRgbMatched) {
      throw new PolishedError$1(4, normalizedColor, rgbColorString);
    }
    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }
  var hslaMatched = hslaRegex$1.exec(normalizedColor.substring(0, 50));
  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);
    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;
    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;
    var _rgbColorString = "rgb(" + hslToRgb$1(_hue, _saturation, _lightness) + ")";
    var _hslRgbMatched = rgbRegex$1.exec(_rgbColorString);
    if (!_hslRgbMatched) {
      throw new PolishedError$1(4, normalizedColor, _rgbColorString);
    }
    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4]) > 1 ? parseFloat("" + hslaMatched[4]) / 100 : parseFloat("" + hslaMatched[4])
    };
  }
  throw new PolishedError$1(5);
}
function rgbToHsl$1(color2) {
  var red = color2.red / 255;
  var green = color2.green / 255;
  var blue = color2.blue / 255;
  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;
  if (max === min) {
    if (color2.alpha !== void 0) {
      return {
        hue: 0,
        saturation: 0,
        lightness,
        alpha: color2.alpha
      };
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness
      };
    }
  }
  var hue;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;
    case green:
      hue = (blue - red) / delta + 2;
      break;
    default:
      hue = (red - green) / delta + 4;
      break;
  }
  hue *= 60;
  if (color2.alpha !== void 0) {
    return {
      hue,
      saturation,
      lightness,
      alpha: color2.alpha
    };
  }
  return {
    hue,
    saturation,
    lightness
  };
}
function parseToHsl$1(color2) {
  return rgbToHsl$1(parseToRgb$1(color2));
}
var reduceHexValue$2 = function reduceHexValue2(value2) {
  if (value2.length === 7 && value2[1] === value2[2] && value2[3] === value2[4] && value2[5] === value2[6]) {
    return "#" + value2[1] + value2[3] + value2[5];
  }
  return value2;
};
var reduceHexValue$1$1 = reduceHexValue$2;
function numberToHex$1(value2) {
  var hex = value2.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
function colorToHex$1(color2) {
  return numberToHex$1(Math.round(color2 * 255));
}
function convertToHex$1(red, green, blue) {
  return reduceHexValue$1$1("#" + colorToHex$1(red) + colorToHex$1(green) + colorToHex$1(blue));
}
function hslToHex$1(hue, saturation, lightness) {
  return hslToRgb$1(hue, saturation, lightness, convertToHex$1);
}
function hsl$1(value2, saturation, lightness) {
  if (typeof value2 === "number" && typeof saturation === "number" && typeof lightness === "number") {
    return hslToHex$1(value2, saturation, lightness);
  } else if (_typeof$1(value2) === "object" && saturation === void 0 && lightness === void 0) {
    return hslToHex$1(value2.hue, value2.saturation, value2.lightness);
  }
  throw new PolishedError$1(1);
}
function hsla$1(value2, saturation, lightness, alpha2) {
  if (typeof value2 === "number" && typeof saturation === "number" && typeof lightness === "number" && typeof alpha2 === "number") {
    return alpha2 >= 1 ? hslToHex$1(value2, saturation, lightness) : "rgba(" + hslToRgb$1(value2, saturation, lightness) + "," + alpha2 + ")";
  } else if (_typeof$1(value2) === "object" && saturation === void 0 && lightness === void 0 && alpha2 === void 0) {
    return value2.alpha >= 1 ? hslToHex$1(value2.hue, value2.saturation, value2.lightness) : "rgba(" + hslToRgb$1(value2.hue, value2.saturation, value2.lightness) + "," + value2.alpha + ")";
  }
  throw new PolishedError$1(2);
}
function rgb$1(value2, green, blue) {
  if (typeof value2 === "number" && typeof green === "number" && typeof blue === "number") {
    return reduceHexValue$1$1("#" + numberToHex$1(value2) + numberToHex$1(green) + numberToHex$1(blue));
  } else if (_typeof$1(value2) === "object" && green === void 0 && blue === void 0) {
    return reduceHexValue$1$1("#" + numberToHex$1(value2.red) + numberToHex$1(value2.green) + numberToHex$1(value2.blue));
  }
  throw new PolishedError$1(6);
}
function rgba$1(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === "string" && typeof secondValue === "number") {
    var rgbValue = parseToRgb$1(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === "number" && typeof secondValue === "number" && typeof thirdValue === "number" && typeof fourthValue === "number") {
    return fourthValue >= 1 ? rgb$1(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (_typeof$1(firstValue) === "object" && secondValue === void 0 && thirdValue === void 0 && fourthValue === void 0) {
    return firstValue.alpha >= 1 ? rgb$1(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }
  throw new PolishedError$1(7);
}
var isRgb$1 = function isRgb2(color2) {
  return typeof color2.red === "number" && typeof color2.green === "number" && typeof color2.blue === "number" && (typeof color2.alpha !== "number" || typeof color2.alpha === "undefined");
};
var isRgba$1 = function isRgba2(color2) {
  return typeof color2.red === "number" && typeof color2.green === "number" && typeof color2.blue === "number" && typeof color2.alpha === "number";
};
var isHsl$1 = function isHsl2(color2) {
  return typeof color2.hue === "number" && typeof color2.saturation === "number" && typeof color2.lightness === "number" && (typeof color2.alpha !== "number" || typeof color2.alpha === "undefined");
};
var isHsla$1 = function isHsla2(color2) {
  return typeof color2.hue === "number" && typeof color2.saturation === "number" && typeof color2.lightness === "number" && typeof color2.alpha === "number";
};
function toColorString$1(color2) {
  if (_typeof$1(color2) !== "object")
    throw new PolishedError$1(8);
  if (isRgba$1(color2))
    return rgba$1(color2);
  if (isRgb$1(color2))
    return rgb$1(color2);
  if (isHsla$1(color2))
    return hsla$1(color2);
  if (isHsl$1(color2))
    return hsl$1(color2);
  throw new PolishedError$1(8);
}
function curried$1(f2, length2, acc) {
  return function fn() {
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length2 ? f2.apply(this, combined) : curried$1(f2, length2, combined);
  };
}
function curry$1(f2) {
  return curried$1(f2, f2.length, []);
}
function guard$1(lowerBoundary, upperBoundary, value2) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value2));
}
function darken$1(amount, color2) {
  if (color2 === "transparent")
    return color2;
  var hslColor = parseToHsl$1(color2);
  return toColorString$1(_extends$3({}, hslColor, {
    lightness: guard$1(0, 1, hslColor.lightness - parseFloat(amount))
  }));
}
var curriedDarken$2 = /* @__PURE__ */ curry$1(darken$1);
var curriedDarken$1$1 = curriedDarken$2;
function lighten$1(amount, color2) {
  if (color2 === "transparent")
    return color2;
  var hslColor = parseToHsl$1(color2);
  return toColorString$1(_extends$3({}, hslColor, {
    lightness: guard$1(0, 1, hslColor.lightness + parseFloat(amount))
  }));
}
var curriedLighten$2 = /* @__PURE__ */ curry$1(lighten$1);
var curriedLighten$1$1 = curriedLighten$2;
function opacify$1(amount, color2) {
  if (color2 === "transparent")
    return color2;
  var parsedColor = parseToRgb$1(color2);
  var alpha2 = typeof parsedColor.alpha === "number" ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends$3({}, parsedColor, {
    alpha: guard$1(0, 1, (alpha2 * 100 + parseFloat(amount) * 100) / 100)
  });
  return rgba$1(colorWithAlpha);
}
var curriedOpacify$2 = /* @__PURE__ */ curry$1(opacify$1);
var curriedOpacify$1$1 = curriedOpacify$2;
function transparentize$1(amount, color2) {
  if (color2 === "transparent")
    return color2;
  var parsedColor = parseToRgb$1(color2);
  var alpha2 = typeof parsedColor.alpha === "number" ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends$3({}, parsedColor, {
    alpha: guard$1(0, 1, +(alpha2 * 100 - parseFloat(amount) * 100).toFixed(2) / 100)
  });
  return rgba$1(colorWithAlpha);
}
var curriedTransparentize$2 = /* @__PURE__ */ curry$1(transparentize$1);
var curriedTransparentize$1$1 = curriedTransparentize$2;
var color = {
  primary: "#FF4785",
  secondary: "#1EA7FD",
  tertiary: "#FAFBFC",
  ancillary: "#22a699",
  orange: "#FC521F",
  gold: "#FFAE00",
  green: "#66BF3C",
  seafoam: "#37D5D3",
  purple: "#6F2CAC",
  ultraviolet: "#2A0481",
  lightest: "#FFFFFF",
  lighter: "#F8F8F8",
  light: "#F3F3F3",
  mediumlight: "#EEEEEE",
  medium: "#DDDDDD",
  mediumdark: "#999999",
  dark: "#666666",
  darker: "#444444",
  darkest: "#333333",
  border: "rgba(0,0,0,.1)",
  positive: "#66BF3C",
  negative: "#FF4400",
  warning: "#E69D00",
  critical: "#FFFFFF",
  defaultText: "#333333",
  inverseText: "#FFFFFF"
};
var background = {
  app: "#F6F9FC",
  bar: "#FFFFFF",
  content: color.lightest,
  gridCellSize: 10,
  hoverable: curriedTransparentize$1$1(0.93, color.secondary),
  positive: "#E1FFD4",
  negative: "#FEDED2",
  warning: "#FFF5CF",
  critical: "#FF4400"
};
var typography = {
  fonts: {
    base: ['"Nunito Sans"', "-apple-system", '".SFNSText-Regular"', '"San Francisco"', "BlinkMacSystemFont", '"Segoe UI"', '"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"].join(", "),
    mono: ["ui-monospace", "Menlo", "Monaco", '"Roboto Mono"', '"Oxygen Mono"', '"Ubuntu Monospace"', '"Source Code Pro"', '"Droid Sans Mono"', '"Courier New"', "monospace"].join(", ")
  },
  weight: {
    regular: 400,
    bold: 700,
    black: 900
  },
  size: {
    s1: 12,
    s2: 14,
    s3: 16,
    m1: 20,
    m2: 24,
    m3: 28,
    l1: 32,
    l2: 40,
    l3: 48,
    code: 90
  }
};
var createReset = memoize$3(1)(function(_ref3) {
  var typography2 = _ref3.typography;
  return {
    body: {
      fontFamily: typography2.fonts.base,
      fontSize: typography2.size.s3,
      margin: 0,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      WebkitOverflowScrolling: "touch"
    },
    "*": {
      boxSizing: "border-box"
    },
    "h1, h2, h3, h4, h5, h6": {
      fontWeight: typography2.weight.regular,
      margin: 0,
      padding: 0
    },
    "button, input, textarea, select": {
      fontFamily: "inherit",
      fontSize: "inherit",
      boxSizing: "border-box"
    },
    sub: {
      fontSize: "0.8em",
      bottom: "-0.2em"
    },
    sup: {
      fontSize: "0.8em",
      top: "-0.2em"
    },
    "b, strong": {
      fontWeight: typography2.weight.bold
    },
    hr: {
      border: "none",
      borderTop: "1px solid silver",
      clear: "both",
      marginBottom: "1.25rem"
    },
    code: {
      fontFamily: typography2.fonts.mono,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      display: "inline-block",
      paddingLeft: 2,
      paddingRight: 2,
      verticalAlign: "baseline",
      color: "inherit"
    },
    pre: {
      fontFamily: typography2.fonts.mono,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      lineHeight: "18px",
      padding: "11px 1rem",
      whiteSpace: "pre-wrap",
      color: "inherit",
      borderRadius: 3,
      margin: "1rem 0"
    }
  };
});
memoize$3(1)(function(_ref4) {
  var color2 = _ref4.color, background2 = _ref4.background, typography2 = _ref4.typography;
  var resetStyles = createReset({
    typography: typography2
  });
  return Object.assign(Object.assign({}, resetStyles), {
    body: Object.assign(Object.assign({}, resetStyles.body), {
      color: color2.defaultText,
      background: background2.app,
      overflow: "hidden"
    }),
    hr: Object.assign(Object.assign({}, resetStyles.hr), {
      borderTop: "1px solid ".concat(color2.border)
    })
  });
});
var theme$1 = {
  base: "light",
  colorPrimary: "#FF4785",
  colorSecondary: "#1EA7FD",
  appBg: background.app,
  appContentBg: color.lightest,
  appBorderColor: color.border,
  appBorderRadius: 4,
  fontBase: typography.fonts.base,
  fontCode: typography.fonts.mono,
  textColor: color.darkest,
  textInverseColor: color.lightest,
  textMutedColor: color.dark,
  barTextColor: color.mediumdark,
  barSelectedColor: color.secondary,
  barBg: color.lightest,
  inputBg: color.lightest,
  inputBorder: color.border,
  inputTextColor: color.darkest,
  inputBorderRadius: 4
};
var theme = {
  base: "dark",
  colorPrimary: "#FF4785",
  colorSecondary: "#1EA7FD",
  appBg: "#2f2f2f",
  appContentBg: color.darkest,
  appBorderColor: "rgba(255,255,255,.1)",
  appBorderRadius: 4,
  fontBase: typography.fonts.base,
  fontCode: typography.fonts.mono,
  textColor: color.lightest,
  textInverseColor: color.darkest,
  textMutedColor: color.mediumdark,
  barTextColor: "#999999",
  barSelectedColor: color.secondary,
  barBg: color.darkest,
  inputBg: "#3f3f3f",
  inputBorder: "rgba(0,0,0,.3)",
  inputTextColor: color.lightest,
  inputBorderRadius: 4
};
var win$1;
if (typeof window !== "undefined") {
  win$1 = window;
} else if (typeof commonjsGlobal$1 !== "undefined") {
  win$1 = commonjsGlobal$1;
} else if (typeof self !== "undefined") {
  win$1 = self;
} else {
  win$1 = {};
}
var window_1$1 = win$1;
var globalWindow$4 = window_1$1.window;
var mkColor = function mkColor2(color2) {
  return {
    color: color2
  };
};
var isColorString = function isColorString2(color2) {
  if (typeof color2 !== "string") {
    logger.warn("Color passed to theme object should be a string. Instead " + "".concat(color2, "(").concat(_typeof$1(color2), ") was passed."));
    return false;
  }
  return true;
};
var isValidColorForPolished = function isValidColorForPolished2(color2) {
  return !/(gradient|var|calc)/.test(color2);
};
var applyPolished = function applyPolished2(type, color2) {
  if (type === "darken") {
    return rgba$1("".concat(curriedDarken$1$1(1, color2)), 0.95);
  }
  if (type === "lighten") {
    return rgba$1("".concat(curriedLighten$1$1(1, color2)), 0.95);
  }
  return color2;
};
var colorFactory = function colorFactory2(type) {
  return function(color2) {
    if (!isColorString(color2)) {
      return color2;
    }
    if (!isValidColorForPolished(color2)) {
      return color2;
    }
    try {
      return applyPolished(type, color2);
    } catch (error2) {
      return color2;
    }
  };
};
var lightenColor = colorFactory("lighten");
var darkenColor = colorFactory("darken");
var getPreferredColorScheme = function getPreferredColorScheme2() {
  if (!globalWindow$4 || !globalWindow$4.matchMedia)
    return "light";
  var isDarkThemePreferred = globalWindow$4.matchMedia("(prefers-color-scheme: dark)").matches;
  if (isDarkThemePreferred)
    return "dark";
  return "light";
};
var themes = {
  light: theme$1,
  dark: theme,
  normal: theme$1
};
getPreferredColorScheme();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __rest$1(s2, e2) {
  var t2 = {};
  for (var p3 in s2) {
    if (Object.prototype.hasOwnProperty.call(s2, p3) && e2.indexOf(p3) < 0)
      t2[p3] = s2[p3];
  }
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p3 = Object.getOwnPropertySymbols(s2); i2 < p3.length; i2++) {
      if (e2.indexOf(p3[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p3[i2]))
        t2[p3[i2]] = s2[p3[i2]];
    }
  return t2;
}
var easing = {
  rubber: "cubic-bezier(0.175, 0.885, 0.335, 1.05)"
};
var rotate360$1 = keyframes(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral$5(["\n	from {\n		transform: rotate(0deg);\n	}\n	to {\n		transform: rotate(360deg);\n	}\n"])));
var glow = keyframes(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral$5(["\n  0%, 100% { opacity: 1; }\n  50% { opacity: .4; }\n"])));
var float = keyframes(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral$5(["\n  0% { transform: translateY(1px); }\n  25% { transform: translateY(0px); }\n  50% { transform: translateY(-3px); }\n  100% { transform: translateY(1px); }\n"])));
var jiggle = keyframes(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral$5(["\n  0%, 100% { transform:translate3d(0,0,0); }\n  12.5%, 62.5% { transform:translate3d(-4px,0,0); }\n  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }\n"])));
var inlineGlow = css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral$5(["\n  animation: ", " 1.5s ease-in-out infinite;\n  color: transparent;\n  cursor: progress;\n"])), glow);
var hoverable = css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral$5(["\n  transition: all 150ms ease-out;\n  transform: translate3d(0, 0, 0);\n\n  &:hover {\n    transform: translate3d(0, -2px, 0);\n  }\n\n  &:active {\n    transform: translate3d(0, 0, 0);\n  }\n"])));
var animation = {
  rotate360: rotate360$1,
  glow,
  float,
  jiggle,
  inlineGlow,
  hoverable
};
var chromeDark = {
  BASE_FONT_FAMILY: "Menlo, monospace",
  BASE_FONT_SIZE: "11px",
  BASE_LINE_HEIGHT: 1.2,
  BASE_BACKGROUND_COLOR: "rgb(36, 36, 36)",
  BASE_COLOR: "rgb(213, 213, 213)",
  OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
  OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
  OBJECT_NAME_COLOR: "rgb(227, 110, 236)",
  OBJECT_VALUE_NULL_COLOR: "rgb(127, 127, 127)",
  OBJECT_VALUE_UNDEFINED_COLOR: "rgb(127, 127, 127)",
  OBJECT_VALUE_REGEXP_COLOR: "rgb(233, 63, 59)",
  OBJECT_VALUE_STRING_COLOR: "rgb(233, 63, 59)",
  OBJECT_VALUE_SYMBOL_COLOR: "rgb(233, 63, 59)",
  OBJECT_VALUE_NUMBER_COLOR: "hsl(252, 100%, 75%)",
  OBJECT_VALUE_BOOLEAN_COLOR: "hsl(252, 100%, 75%)",
  OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(85, 106, 242)",
  HTML_TAG_COLOR: "rgb(93, 176, 215)",
  HTML_TAGNAME_COLOR: "rgb(93, 176, 215)",
  HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
  HTML_ATTRIBUTE_NAME_COLOR: "rgb(155, 187, 220)",
  HTML_ATTRIBUTE_VALUE_COLOR: "rgb(242, 151, 102)",
  HTML_COMMENT_COLOR: "rgb(137, 137, 137)",
  HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
  ARROW_COLOR: "rgb(145, 145, 145)",
  ARROW_MARGIN_RIGHT: 3,
  ARROW_FONT_SIZE: 12,
  ARROW_ANIMATION_DURATION: "0",
  TREENODE_FONT_FAMILY: "Menlo, monospace",
  TREENODE_FONT_SIZE: "11px",
  TREENODE_LINE_HEIGHT: 1.2,
  TREENODE_PADDING_LEFT: 12,
  TABLE_BORDER_COLOR: "rgb(85, 85, 85)",
  TABLE_TH_BACKGROUND_COLOR: "rgb(44, 44, 44)",
  TABLE_TH_HOVER_COLOR: "rgb(48, 48, 48)",
  TABLE_SORT_ICON_COLOR: "black",
  TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))",
  TABLE_DATA_BACKGROUND_SIZE: "128px 32px"
};
var chromeLight = {
  BASE_FONT_FAMILY: "Menlo, monospace",
  BASE_FONT_SIZE: "11px",
  BASE_LINE_HEIGHT: 1.2,
  BASE_BACKGROUND_COLOR: "white",
  BASE_COLOR: "black",
  OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
  OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
  OBJECT_NAME_COLOR: "rgb(136, 19, 145)",
  OBJECT_VALUE_NULL_COLOR: "rgb(128, 128, 128)",
  OBJECT_VALUE_UNDEFINED_COLOR: "rgb(128, 128, 128)",
  OBJECT_VALUE_REGEXP_COLOR: "rgb(196, 26, 22)",
  OBJECT_VALUE_STRING_COLOR: "rgb(196, 26, 22)",
  OBJECT_VALUE_SYMBOL_COLOR: "rgb(196, 26, 22)",
  OBJECT_VALUE_NUMBER_COLOR: "rgb(28, 0, 207)",
  OBJECT_VALUE_BOOLEAN_COLOR: "rgb(28, 0, 207)",
  OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(13, 34, 170)",
  HTML_TAG_COLOR: "rgb(168, 148, 166)",
  HTML_TAGNAME_COLOR: "rgb(136, 18, 128)",
  HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
  HTML_ATTRIBUTE_NAME_COLOR: "rgb(153, 69, 0)",
  HTML_ATTRIBUTE_VALUE_COLOR: "rgb(26, 26, 166)",
  HTML_COMMENT_COLOR: "rgb(35, 110, 37)",
  HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
  ARROW_COLOR: "#6e6e6e",
  ARROW_MARGIN_RIGHT: 3,
  ARROW_FONT_SIZE: 12,
  ARROW_ANIMATION_DURATION: "0",
  TREENODE_FONT_FAMILY: "Menlo, monospace",
  TREENODE_FONT_SIZE: "11px",
  TREENODE_LINE_HEIGHT: 1.2,
  TREENODE_PADDING_LEFT: 12,
  TABLE_BORDER_COLOR: "#aaa",
  TABLE_TH_BACKGROUND_COLOR: "#eee",
  TABLE_TH_HOVER_COLOR: "hsla(0, 0%, 90%, 1)",
  TABLE_SORT_ICON_COLOR: "#6e6e6e",
  TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))",
  TABLE_DATA_BACKGROUND_SIZE: "128px 32px"
};
var convertColors = function convertColors2(colors) {
  return Object.entries(colors).reduce(function(acc, _ref5) {
    var _ref6 = _slicedToArray$5(_ref5, 2), k2 = _ref6[0], v2 = _ref6[1];
    return Object.assign(Object.assign({}, acc), _defineProperty$6({}, k2, mkColor(v2)));
  }, {});
};
var create = function create2(_ref7) {
  var colors = _ref7.colors, mono = _ref7.mono;
  var colorsObjs = convertColors(colors);
  return {
    token: {
      fontFamily: mono,
      WebkitFontSmoothing: "antialiased",
      "&.tag": colorsObjs.red3,
      "&.comment": Object.assign(Object.assign({}, colorsObjs.green1), {
        fontStyle: "italic"
      }),
      "&.prolog": Object.assign(Object.assign({}, colorsObjs.green1), {
        fontStyle: "italic"
      }),
      "&.doctype": Object.assign(Object.assign({}, colorsObjs.green1), {
        fontStyle: "italic"
      }),
      "&.cdata": Object.assign(Object.assign({}, colorsObjs.green1), {
        fontStyle: "italic"
      }),
      "&.string": colorsObjs.red1,
      "&.url": colorsObjs.cyan1,
      "&.symbol": colorsObjs.cyan1,
      "&.number": colorsObjs.cyan1,
      "&.boolean": colorsObjs.cyan1,
      "&.variable": colorsObjs.cyan1,
      "&.constant": colorsObjs.cyan1,
      "&.inserted": colorsObjs.cyan1,
      "&.atrule": colorsObjs.blue1,
      "&.keyword": colorsObjs.blue1,
      "&.attr-value": colorsObjs.blue1,
      "&.punctuation": colorsObjs.gray1,
      "&.operator": colorsObjs.gray1,
      "&.function": colorsObjs.gray1,
      "&.deleted": colorsObjs.red2,
      "&.important": {
        fontWeight: "bold"
      },
      "&.bold": {
        fontWeight: "bold"
      },
      "&.italic": {
        fontStyle: "italic"
      },
      "&.class-name": colorsObjs.cyan2,
      "&.selector": colorsObjs.red3,
      "&.attr-name": colorsObjs.red4,
      "&.property": colorsObjs.red4,
      "&.regex": colorsObjs.red4,
      "&.entity": colorsObjs.red4,
      "&.directive.tag .tag": Object.assign({
        background: "#ffff00"
      }, colorsObjs.gray1)
    },
    "language-json .token.boolean": colorsObjs.blue1,
    "language-json .token.number": colorsObjs.blue1,
    "language-json .token.property": colorsObjs.cyan2,
    namespace: {
      opacity: 0.7
    }
  };
};
var lightSyntaxColors = {
  green1: "#008000",
  red1: "#A31515",
  red2: "#9a050f",
  red3: "#800000",
  red4: "#ff0000",
  gray1: "#393A34",
  cyan1: "#36acaa",
  cyan2: "#2B91AF",
  blue1: "#0000ff",
  blue2: "#00009f"
};
var darkSyntaxColors = {
  green1: "#7C7C7C",
  red1: "#92C379",
  red2: "#9a050f",
  red3: "#A8FF60",
  red4: "#96CBFE",
  gray1: "#EDEDED",
  cyan1: "#C6C5FE",
  cyan2: "#FFFFB6",
  blue1: "#B474DD",
  blue2: "#00009f"
};
var createColors = function createColors2(vars) {
  return {
    primary: vars.colorPrimary,
    secondary: vars.colorSecondary,
    tertiary: color.tertiary,
    ancillary: color.ancillary,
    orange: color.orange,
    gold: color.gold,
    green: color.green,
    seafoam: color.seafoam,
    purple: color.purple,
    ultraviolet: color.ultraviolet,
    lightest: color.lightest,
    lighter: color.lighter,
    light: color.light,
    mediumlight: color.mediumlight,
    medium: color.medium,
    mediumdark: color.mediumdark,
    dark: color.dark,
    darker: color.darker,
    darkest: color.darkest,
    border: color.border,
    positive: color.positive,
    negative: color.negative,
    warning: color.warning,
    critical: color.critical,
    defaultText: vars.textColor || color.darkest,
    inverseText: vars.textInverseColor || color.lightest
  };
};
var convert = function convert2() {
  var inherit = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : themes[getPreferredColorScheme()];
  var base = inherit.base;
  inherit.colorPrimary;
  var colorSecondary = inherit.colorSecondary, appBg = inherit.appBg, appContentBg = inherit.appContentBg, appBorderColor = inherit.appBorderColor, appBorderRadius = inherit.appBorderRadius, fontBase = inherit.fontBase, fontCode = inherit.fontCode, textColor = inherit.textColor;
  inherit.textInverseColor;
  var barTextColor = inherit.barTextColor, barSelectedColor = inherit.barSelectedColor, barBg = inherit.barBg, inputBg = inherit.inputBg, inputBorder = inherit.inputBorder, inputTextColor = inherit.inputTextColor, inputBorderRadius = inherit.inputBorderRadius, brandTitle = inherit.brandTitle, brandUrl = inherit.brandUrl, brandImage = inherit.brandImage, brandTarget = inherit.brandTarget, gridCellSize = inherit.gridCellSize, rest = __rest$1(inherit, ["base", "colorPrimary", "colorSecondary", "appBg", "appContentBg", "appBorderColor", "appBorderRadius", "fontBase", "fontCode", "textColor", "textInverseColor", "barTextColor", "barSelectedColor", "barBg", "inputBg", "inputBorder", "inputTextColor", "inputBorderRadius", "brandTitle", "brandUrl", "brandImage", "brandTarget", "gridCellSize"]);
  return Object.assign(Object.assign({}, rest || {}), {
    base,
    color: createColors(inherit),
    background: {
      app: appBg,
      bar: barBg,
      content: appContentBg,
      gridCellSize: gridCellSize || background.gridCellSize,
      hoverable: background.hoverable,
      positive: background.positive,
      negative: background.negative,
      warning: background.warning,
      critical: background.critical
    },
    typography: {
      fonts: {
        base: fontBase,
        mono: fontCode
      },
      weight: typography.weight,
      size: typography.size
    },
    animation,
    easing,
    input: {
      border: inputBorder,
      background: inputBg,
      color: inputTextColor,
      borderRadius: inputBorderRadius
    },
    layoutMargin: 10,
    appBorderColor,
    appBorderRadius,
    barTextColor,
    barSelectedColor: barSelectedColor || colorSecondary,
    barBg,
    brand: {
      title: brandTitle,
      url: brandUrl,
      image: brandImage || (brandTitle ? null : void 0),
      target: brandTarget
    },
    code: create({
      colors: base === "light" ? lightSyntaxColors : darkSyntaxColors,
      mono: fontCode
    }),
    addonActionsTheme: Object.assign(Object.assign({}, base === "light" ? chromeLight : chromeDark), {
      BASE_FONT_FAMILY: fontCode,
      BASE_FONT_SIZE: typography.size.s2 - 1,
      BASE_LINE_HEIGHT: "18px",
      BASE_BACKGROUND_COLOR: "transparent",
      BASE_COLOR: textColor,
      ARROW_COLOR: curriedOpacify$1$1(0.2, appBorderColor),
      ARROW_MARGIN_RIGHT: 4,
      ARROW_FONT_SIZE: 8,
      TREENODE_FONT_FAMILY: fontCode,
      TREENODE_FONT_SIZE: typography.size.s2 - 1,
      TREENODE_LINE_HEIGHT: "18px",
      TREENODE_PADDING_LEFT: 12
    })
  });
};
var isEmpty = function isEmpty2(o2) {
  return Object.keys(o2).length === 0;
};
var isObject$8 = function isObject2(o2) {
  return o2 != null && _typeof$1(o2) === "object";
};
var hasOwnProperty$c = function hasOwnProperty2(o2) {
  var _Object$prototype$has;
  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }
  return (_Object$prototype$has = Object.prototype.hasOwnProperty).call.apply(_Object$prototype$has, [o2].concat(args));
};
var deletedDiff = function deletedDiff2(lhs, rhs) {
  if (lhs === rhs || !isObject$8(lhs) || !isObject$8(rhs))
    return {};
  var l2 = lhs;
  var r2 = rhs;
  return Object.keys(l2).reduce(function(acc, key) {
    if (hasOwnProperty$c(r2, key)) {
      var difference = deletedDiff2(l2[key], r2[key]);
      if (isObject$8(difference) && isEmpty(difference))
        return acc;
      acc[key] = difference;
      return acc;
    }
    acc[key] = void 0;
    return acc;
  }, {});
};
function dedent$1(templ) {
  var values = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    values[_i - 1] = arguments[_i];
  }
  var strings = Array.from(typeof templ === "string" ? [templ] : templ);
  strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var indentLengths = strings.reduce(function(arr, str2) {
    var matches = str2.match(/\n([\t ]+|(?!\s).)/g);
    if (matches) {
      return arr.concat(matches.map(function(match2) {
        var _a, _b;
        return (_b = (_a = match2.match(/[\t ]/g)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
      }));
    }
    return arr;
  }, []);
  if (indentLengths.length) {
    var pattern_1 = new RegExp("\n[	 ]{" + Math.min.apply(Math, indentLengths) + "}", "g");
    strings = strings.map(function(str2) {
      return str2.replace(pattern_1, "\n");
    });
  }
  strings[0] = strings[0].replace(/^\r?\n/, "");
  var string2 = strings[0];
  values.forEach(function(value2, i2) {
    var endentations = string2.match(/(?:^|\n)( *)$/);
    var endentation = endentations ? endentations[1] : "";
    var indentedValue = value2;
    if (typeof value2 === "string" && value2.includes("\n")) {
      indentedValue = String(value2).split("\n").map(function(str2, i3) {
        return i3 === 0 ? str2 : "" + endentation + str2;
      }).join("\n");
    }
    string2 += indentedValue + strings[i2 + 1];
  });
  return string2;
}
var ensure = function ensure2(input) {
  if (!input) {
    return convert(theme$1);
  }
  var missing = deletedDiff(theme$1, input);
  if (Object.keys(missing).length) {
    logger.warn(dedent$1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral$5(["\n          Your theme is missing properties, you should update your theme!\n\n          theme-data missing:\n        "]))), missing);
  }
  return convert(input);
};
var useTheme = useTheme$1;
var Global = Global$1;
var styled = newStyled;
var _templateObject$4, _templateObject2, _templateObject3, _templateObject4;
function _toConsumableArray$1(arr) {
  return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$5(arr) || _nonIterableSpread$1();
}
function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray$1(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$5(arr);
}
function _taggedTemplateLiteral$4(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
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
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf2(subClass, superClass);
}
function _setPrototypeOf2(o2, p3) {
  _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf3(o3, p4) {
    o3.__proto__ = p4;
    return o3;
  };
  return _setPrototypeOf2(o2, p3);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct2();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf2(Derived), result2;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf2(this).constructor;
      result2 = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result2 = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result2);
  };
}
function _possibleConstructorReturn(self2, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized2(self2);
}
function _assertThisInitialized2(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct2() {
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
  } catch (e2) {
    return false;
  }
}
function _getPrototypeOf2(o2) {
  _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o3) {
    return o3.__proto__ || Object.getPrototypeOf(o3);
  };
  return _getPrototypeOf2(o2);
}
function _defineProperty2(obj, key, value2) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value2, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value2;
  }
  return obj;
}
function _slicedToArray$4(arr, i2) {
  return _arrayWithHoles$4(arr) || _iterableToArrayLimit$4(arr, i2) || _unsupportedIterableToArray$5(arr, i2) || _nonIterableRest$4();
}
function _nonIterableRest$4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$5(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray$5(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$5(o2, minLen);
}
function _arrayLikeToArray$5(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function _iterableToArrayLimit$4(arr, i2) {
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
      if (i2 && _arr.length === i2)
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
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __rest(s2, e2) {
  var t2 = {};
  for (var p3 in s2) {
    if (Object.prototype.hasOwnProperty.call(s2, p3) && e2.indexOf(p3) < 0)
      t2[p3] = s2[p3];
  }
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p3 = Object.getOwnPropertySymbols(s2); i2 < p3.length; i2++) {
      if (e2.indexOf(p3[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p3[i2]))
        t2[p3[i2]] = s2[p3[i2]];
    }
  return t2;
}
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value2) {
    return value2 instanceof P2 ? value2 : new P2(function(resolve) {
      resolve(value2);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value2) {
      try {
        step(generator.next(value2));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value2) {
      try {
        step(generator["throw"](value2));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result2) {
      result2.done ? resolve(result2.value) : adopt(result2.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
var nameSpaceClassNames = function nameSpaceClassNames2(_a, key) {
  var props = __rest(_a, []);
  var classes = [props.class, props.className];
  delete props.class;
  props.className = ["sbdocs", "sbdocs-".concat(key)].concat(classes).filter(Boolean).join(" ");
  return props;
};
function _extends$1() {
  _extends$1 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _setPrototypeOf(o2, p3) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf3(o3, p4) {
    o3.__proto__ = p4;
    return o3;
  };
  return _setPrototypeOf(o2, p3);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o2) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf3(o3) {
    return o3.__proto__ || Object.getPrototypeOf(o3);
  };
  return _getPrototypeOf(o2);
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
  } catch (e2) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a3 = [null];
      a3.push.apply(a3, args2);
      var Constructor = Function.bind.apply(Parent2, a3);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper3);
    }
    function Wrapper3() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper3.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper3, enumerable: false, writable: true, configurable: true } });
    return _setPrototypeOf(Wrapper3, Class2);
  };
  return _wrapNativeSuper(Class);
}
var PolishedError = /* @__PURE__ */ function(_Error) {
  _inheritsLoose(PolishedError2, _Error);
  function PolishedError2(code2) {
    var _this;
    {
      _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + code2 + " for more information.") || this;
    }
    return _assertThisInitialized(_this);
  }
  return PolishedError2;
}(/* @__PURE__ */ _wrapNativeSuper(Error));
function colorToInt(color2) {
  return Math.round(color2 * 255);
}
function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}
function hslToRgb(hue, saturation, lightness, convert3) {
  if (convert3 === void 0) {
    convert3 = convertToInt;
  }
  if (saturation === 0) {
    return convert3(lightness, lightness, lightness);
  }
  var huePrime = (hue % 360 + 360) % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;
  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }
  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert3(finalRed, finalGreen, finalBlue);
}
var namedColorMap = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "639", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" };
function nameToHex(color2) {
  if (typeof color2 !== "string")
    return color2;
  var normalizedColorName = color2.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color2;
}
var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function parseToRgb(color2) {
  if (typeof color2 !== "string") {
    throw new PolishedError(3);
  }
  var normalizedColor = nameToHex(color2);
  if (normalizedColor.match(hexRegex)) {
    return { red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16), green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16), blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16) };
  }
  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha2 = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return { red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16), green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16), blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16), alpha: alpha2 };
  }
  if (normalizedColor.match(reducedHexRegex)) {
    return { red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16), green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16), blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16) };
  }
  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));
    return { red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16), green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16), blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16), alpha: _alpha };
  }
  var rgbMatched = rgbRegex.exec(normalizedColor);
  if (rgbMatched) {
    return { red: parseInt("" + rgbMatched[1], 10), green: parseInt("" + rgbMatched[2], 10), blue: parseInt("" + rgbMatched[3], 10) };
  }
  var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50));
  if (rgbaMatched) {
    return { red: parseInt("" + rgbaMatched[1], 10), green: parseInt("" + rgbaMatched[2], 10), blue: parseInt("" + rgbaMatched[3], 10), alpha: parseFloat("" + rgbaMatched[4]) > 1 ? parseFloat("" + rgbaMatched[4]) / 100 : parseFloat("" + rgbaMatched[4]) };
  }
  var hslMatched = hslRegex.exec(normalizedColor);
  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);
    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString);
    }
    return { red: parseInt("" + hslRgbMatched[1], 10), green: parseInt("" + hslRgbMatched[2], 10), blue: parseInt("" + hslRgbMatched[3], 10) };
  }
  var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50));
  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);
    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;
    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;
    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";
    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);
    if (!_hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, _rgbColorString);
    }
    return { red: parseInt("" + _hslRgbMatched[1], 10), green: parseInt("" + _hslRgbMatched[2], 10), blue: parseInt("" + _hslRgbMatched[3], 10), alpha: parseFloat("" + hslaMatched[4]) > 1 ? parseFloat("" + hslaMatched[4]) / 100 : parseFloat("" + hslaMatched[4]) };
  }
  throw new PolishedError(5);
}
function rgbToHsl(color2) {
  var red = color2.red / 255;
  var green = color2.green / 255;
  var blue = color2.blue / 255;
  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;
  if (max === min) {
    if (color2.alpha !== void 0) {
      return { hue: 0, saturation: 0, lightness, alpha: color2.alpha };
    } else {
      return { hue: 0, saturation: 0, lightness };
    }
  }
  var hue;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;
    case green:
      hue = (blue - red) / delta + 2;
      break;
    default:
      hue = (red - green) / delta + 4;
      break;
  }
  hue *= 60;
  if (color2.alpha !== void 0) {
    return { hue, saturation, lightness, alpha: color2.alpha };
  }
  return { hue, saturation, lightness };
}
function parseToHsl(color2) {
  return rgbToHsl(parseToRgb(color2));
}
var reduceHexValue = function reduceHexValue3(value2) {
  if (value2.length === 7 && value2[1] === value2[2] && value2[3] === value2[4] && value2[5] === value2[6]) {
    return "#" + value2[1] + value2[3] + value2[5];
  }
  return value2;
};
var reduceHexValue$1 = reduceHexValue;
function numberToHex(value2) {
  var hex = value2.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
function colorToHex(color2) {
  return numberToHex(Math.round(color2 * 255));
}
function convertToHex(red, green, blue) {
  return reduceHexValue$1("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}
function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}
function hsl(value2, saturation, lightness) {
  if (typeof value2 === "number" && typeof saturation === "number" && typeof lightness === "number") {
    return hslToHex(value2, saturation, lightness);
  } else if (_typeof(value2) === "object" && saturation === void 0 && lightness === void 0) {
    return hslToHex(value2.hue, value2.saturation, value2.lightness);
  }
  throw new PolishedError(1);
}
function hsla(value2, saturation, lightness, alpha2) {
  if (typeof value2 === "number" && typeof saturation === "number" && typeof lightness === "number" && typeof alpha2 === "number") {
    return alpha2 >= 1 ? hslToHex(value2, saturation, lightness) : "rgba(" + hslToRgb(value2, saturation, lightness) + "," + alpha2 + ")";
  } else if (_typeof(value2) === "object" && saturation === void 0 && lightness === void 0 && alpha2 === void 0) {
    return value2.alpha >= 1 ? hslToHex(value2.hue, value2.saturation, value2.lightness) : "rgba(" + hslToRgb(value2.hue, value2.saturation, value2.lightness) + "," + value2.alpha + ")";
  }
  throw new PolishedError(2);
}
function rgb(value2, green, blue) {
  if (typeof value2 === "number" && typeof green === "number" && typeof blue === "number") {
    return reduceHexValue$1("#" + numberToHex(value2) + numberToHex(green) + numberToHex(blue));
  } else if (_typeof(value2) === "object" && green === void 0 && blue === void 0) {
    return reduceHexValue$1("#" + numberToHex(value2.red) + numberToHex(value2.green) + numberToHex(value2.blue));
  }
  throw new PolishedError(6);
}
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === "string" && typeof secondValue === "number") {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === "number" && typeof secondValue === "number" && typeof thirdValue === "number" && typeof fourthValue === "number") {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (_typeof(firstValue) === "object" && secondValue === void 0 && thirdValue === void 0 && fourthValue === void 0) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }
  throw new PolishedError(7);
}
var isRgb = function isRgb3(color2) {
  return typeof color2.red === "number" && typeof color2.green === "number" && typeof color2.blue === "number" && (typeof color2.alpha !== "number" || typeof color2.alpha === "undefined");
};
var isRgba = function isRgba3(color2) {
  return typeof color2.red === "number" && typeof color2.green === "number" && typeof color2.blue === "number" && typeof color2.alpha === "number";
};
var isHsl = function isHsl3(color2) {
  return typeof color2.hue === "number" && typeof color2.saturation === "number" && typeof color2.lightness === "number" && (typeof color2.alpha !== "number" || typeof color2.alpha === "undefined");
};
var isHsla = function isHsla3(color2) {
  return typeof color2.hue === "number" && typeof color2.saturation === "number" && typeof color2.lightness === "number" && typeof color2.alpha === "number";
};
function toColorString(color2) {
  if (_typeof(color2) !== "object")
    throw new PolishedError(8);
  if (isRgba(color2))
    return rgba(color2);
  if (isRgb(color2))
    return rgb(color2);
  if (isHsla(color2))
    return hsla(color2);
  if (isHsl(color2))
    return hsl(color2);
  throw new PolishedError(8);
}
function curried(f2, length2, acc) {
  return function fn() {
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length2 ? f2.apply(this, combined) : curried(f2, length2, combined);
  };
}
function curry(f2) {
  return curried(f2, f2.length, []);
}
function guard(lowerBoundary, upperBoundary, value2) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value2));
}
function darken(amount, color2) {
  if (color2 === "transparent")
    return color2;
  var hslColor = parseToHsl(color2);
  return toColorString(_extends$1({}, hslColor, { lightness: guard(0, 1, hslColor.lightness - parseFloat(amount)) }));
}
var curriedDarken = /* @__PURE__ */ curry(darken);
var curriedDarken$1 = curriedDarken;
function lighten(amount, color2) {
  if (color2 === "transparent")
    return color2;
  var hslColor = parseToHsl(color2);
  return toColorString(_extends$1({}, hslColor, { lightness: guard(0, 1, hslColor.lightness + parseFloat(amount)) }));
}
var curriedLighten = /* @__PURE__ */ curry(lighten);
var curriedLighten$1 = curriedLighten;
function opacify(amount, color2) {
  if (color2 === "transparent")
    return color2;
  var parsedColor = parseToRgb(color2);
  var alpha2 = typeof parsedColor.alpha === "number" ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends$1({}, parsedColor, { alpha: guard(0, 1, (alpha2 * 100 + parseFloat(amount) * 100) / 100) });
  return rgba(colorWithAlpha);
}
var curriedOpacify = /* @__PURE__ */ curry(opacify);
var curriedOpacify$1 = curriedOpacify;
function transparentize(amount, color2) {
  if (color2 === "transparent")
    return color2;
  var parsedColor = parseToRgb(color2);
  var alpha2 = typeof parsedColor.alpha === "number" ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends$1({}, parsedColor, { alpha: guard(0, 1, +(alpha2 * 100 - parseFloat(amount) * 100).toFixed(2) / 100) });
  return rgba(colorWithAlpha);
}
var curriedTransparentize = /* @__PURE__ */ curry(transparentize);
var curriedTransparentize$1 = curriedTransparentize;
var headerCommon = function headerCommon2(_ref2) {
  var theme2 = _ref2.theme;
  return { margin: "20px 0 8px", padding: 0, cursor: "text", position: "relative", color: theme2.color.defaultText, "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& tt, & code": { fontSize: "inherit" } };
};
var codeCommon = function codeCommon2(_ref3) {
  var theme2 = _ref3.theme;
  return { lineHeight: 1, margin: "0 2px", padding: "3px 5px", whiteSpace: "nowrap", borderRadius: 3, fontSize: theme2.typography.size.s2 - 1, border: theme2.base === "light" ? "1px solid ".concat(theme2.color.mediumlight) : "1px solid ".concat(theme2.color.darker), color: theme2.base === "light" ? curriedTransparentize$1(0.1, theme2.color.defaultText) : curriedTransparentize$1(0.3, theme2.color.defaultText), backgroundColor: theme2.base === "light" ? theme2.color.lighter : theme2.color.border };
};
var withReset = function withReset2(_ref4) {
  var theme2 = _ref4.theme;
  return { fontFamily: theme2.typography.fonts.base, fontSize: theme2.typography.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" };
};
var withMargin = { margin: "16px 0" };
var Link$1 = function Link$12(_a) {
  var input = _a.href, children = _a.children, props = __rest(_a, ["href", "children"]);
  var isStorybookPath = /^\//.test(input);
  var isAnchorUrl = /^#.*/.test(input);
  var href = isStorybookPath ? "?path=".concat(input) : input;
  var target = isAnchorUrl ? "_self" : "_top";
  return React__default__default.createElement("a", Object.assign({ href, target }, props), children);
};
var A$2 = styled(Link$1)(withReset, function(_ref5) {
  var theme2 = _ref5.theme;
  return { fontSize: "inherit", lineHeight: "24px", color: theme2.color.secondary, textDecoration: "none", "&.absent": { color: "#cc0000" }, "&.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 } };
});
var Blockquote = styled.blockquote(withReset, withMargin, function(_ref6) {
  var theme2 = _ref6.theme;
  return { borderLeft: "4px solid ".concat(theme2.color.medium), padding: "0 15px", color: theme2.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } };
});
var Wrapper$8 = styled.div(withReset, function(_ref7) {
  var theme2 = _ref7.theme;
  return { backgroundColor: theme2.base === "light" ? "rgba(0,0,0,.01)" : "rgba(255,255,255,.01)", borderRadius: theme2.appBorderRadius, border: "1px dashed ".concat(theme2.appBorderColor), display: "flex", alignItems: "center", justifyContent: "center", padding: 20, margin: "25px 0 40px", color: curriedTransparentize$1(0.3, theme2.color.defaultText), fontSize: theme2.typography.size.s2 };
});
var EmptyBlock = function EmptyBlock2(props) {
  return React__default__default.createElement(Wrapper$8, Object.assign({}, props, { className: "docblock-emptyblock" }));
};
var LazySyntaxHighlighter = lazy(function() {
  return import("./syntaxhighlighter-82dea71a.js");
});
var LazySyntaxHighlighterWithFormatter = lazy(function() {
  return __awaiter(void 0, void 0, void 0, /* @__PURE__ */ regeneratorRuntime.mark(function _callee() {
    var _yield$Promise$all, _yield$Promise$all2, SyntaxHighlighter3, formatter;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.all([import("./syntaxhighlighter-82dea71a.js"), import("./formatter-9dc562d4.js")]);
          case 2:
            _yield$Promise$all = _context.sent;
            _yield$Promise$all2 = _slicedToArray$4(_yield$Promise$all, 2);
            SyntaxHighlighter3 = _yield$Promise$all2[0].SyntaxHighlighter;
            formatter = _yield$Promise$all2[1].formatter;
            return _context.abrupt("return", { default: function _default(props) {
              return React__default__default.createElement(SyntaxHighlighter3, Object.assign({}, props, { formatter }));
            } });
          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
});
var SyntaxHighlighter = function SyntaxHighlighter2(props) {
  return React__default__default.createElement(Suspense, { fallback: React__default__default.createElement("div", null) }, props.format !== false ? React__default__default.createElement(LazySyntaxHighlighterWithFormatter, Object.assign({}, props)) : React__default__default.createElement(LazySyntaxHighlighter, Object.assign({}, props)));
};
var StyledSyntaxHighlighter = styled(SyntaxHighlighter)(function(_ref8) {
  var theme2 = _ref8.theme;
  return {
    fontSize: "".concat(theme2.typography.size.s2 - 1, "px"),
    lineHeight: "19px",
    margin: "25px 0 40px",
    borderRadius: theme2.appBorderRadius,
    boxShadow: theme2.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
    "pre.prismjs": { padding: 20, background: "inherit" }
  };
});
var SourceError;
(function(SourceError2) {
  SourceError2["NO_STORY"] = "There\u2019s no story here.";
  SourceError2["SOURCE_UNAVAILABLE"] = "Oh no! The source is not available.";
})(SourceError || (SourceError = {}));
var SourceSkeletonWrapper = styled.div(function(_ref9) {
  var theme2 = _ref9.theme;
  return { background: theme2.background.content, borderRadius: theme2.appBorderRadius, border: "1px solid ".concat(theme2.appBorderColor), boxShadow: theme2.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", margin: "25px 0 40px", padding: "20px 20px 20px 22px" };
});
var SourceSkeletonPlaceholder = styled.div(function(_ref10) {
  var theme2 = _ref10.theme;
  return _defineProperty2({ animation: "".concat(theme2.animation.glow, " 1.5s ease-in-out infinite"), background: theme2.appBorderColor, height: 17, marginTop: 1, width: "60%" }, "&:first-child", { margin: 0 });
});
var SourceSkeleton = function SourceSkeleton2() {
  return React__default__default.createElement(SourceSkeletonWrapper, null, React__default__default.createElement(SourceSkeletonPlaceholder, null), React__default__default.createElement(SourceSkeletonPlaceholder, { style: { width: "80%" } }), React__default__default.createElement(SourceSkeletonPlaceholder, { style: { width: "30%" } }), React__default__default.createElement(SourceSkeletonPlaceholder, { style: { width: "80%" } }));
};
var Source$1 = function Source2(props) {
  var isLoading = props.isLoading, error2 = props.error;
  if (isLoading) {
    return React__default__default.createElement(SourceSkeleton, null);
  }
  if (error2) {
    return React__default__default.createElement(EmptyBlock, null, error2);
  }
  var _a = props, language = _a.language, code2 = _a.code, dark = _a.dark, format = _a.format, rest = __rest(_a, ["language", "code", "dark", "format"]);
  var syntaxHighlighter = React__default__default.createElement(StyledSyntaxHighlighter, Object.assign({ bordered: true, copyable: true, format, language, className: "docblock-source" }, rest), code2);
  if (typeof dark === "undefined") {
    return syntaxHighlighter;
  }
  var overrideTheme = dark ? themes.dark : themes.light;
  return React__default__default.createElement(ThemeProvider, { theme: convert(overrideTheme) }, syntaxHighlighter);
};
Source$1.defaultProps = { format: false };
var isReactChildString = function isReactChildString2(child) {
  return typeof child === "string";
};
var isInlineCodeRegex = /[\n\r]/g;
var DefaultCodeBlock = styled.code(function(_ref12) {
  var theme2 = _ref12.theme;
  return {
    fontFamily: theme2.typography.fonts.mono,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    display: "inline-block",
    paddingLeft: 2,
    paddingRight: 2,
    verticalAlign: "baseline",
    color: "inherit"
  };
}, codeCommon);
var Code = function Code2(_a) {
  var _b;
  var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
  var language = (className || "").match(/lang-(\S+)/);
  var childrenArray = Children.toArray(children);
  var isInlineCode = !childrenArray.filter(isReactChildString).some(function(child) {
    return child.match(isInlineCodeRegex);
  });
  if (isInlineCode) {
    return React__default__default.createElement(DefaultCodeBlock, Object.assign({}, props, { className }), childrenArray);
  }
  return React__default__default.createElement(StyledSyntaxHighlighter, Object.assign({ bordered: true, copyable: true, language: (_b = language === null || language === void 0 ? void 0 : language[1]) !== null && _b !== void 0 ? _b : "plaintext", format: false }, props), children);
};
var Div = styled.div(withReset);
var DL = styled.dl(withReset, Object.assign(Object.assign({}, withMargin), { padding: 0, "& dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", padding: 0, margin: "16px 0 4px" }, "& dt:first-of-type": { padding: 0 }, "& dt > :first-of-type": { marginTop: 0 }, "& dt > :last-child": { marginBottom: 0 }, "& dd": { margin: "0 0 16px", padding: "0 15px" }, "& dd > :first-of-type": { marginTop: 0 }, "& dd > :last-child": { marginBottom: 0 } }));
var H1 = styled.h1(withReset, headerCommon, function(_ref13) {
  var theme2 = _ref13.theme;
  return { fontSize: "".concat(theme2.typography.size.l1, "px"), fontWeight: theme2.typography.weight.black };
});
var H2 = styled.h2(withReset, headerCommon, function(_ref14) {
  var theme2 = _ref14.theme;
  return { fontSize: "".concat(theme2.typography.size.m2, "px"), paddingBottom: 4, borderBottom: "1px solid ".concat(theme2.appBorderColor) };
});
var H3 = styled.h3(withReset, headerCommon, function(_ref15) {
  var theme2 = _ref15.theme;
  return { fontSize: "".concat(theme2.typography.size.m1, "px") };
});
var H4 = styled.h4(withReset, headerCommon, function(_ref16) {
  var theme2 = _ref16.theme;
  return { fontSize: "".concat(theme2.typography.size.s3, "px") };
});
var H5 = styled.h5(withReset, headerCommon, function(_ref17) {
  var theme2 = _ref17.theme;
  return { fontSize: "".concat(theme2.typography.size.s2, "px") };
});
var H6 = styled.h6(withReset, headerCommon, function(_ref18) {
  var theme2 = _ref18.theme;
  return { fontSize: "".concat(theme2.typography.size.s2, "px"), color: theme2.color.dark };
});
var HR = styled.hr(function(_ref19) {
  var theme2 = _ref19.theme;
  return { border: "0 none", borderTop: "1px solid ".concat(theme2.appBorderColor), height: 4, padding: 0 };
});
var Img = styled.img({ maxWidth: "100%" });
var LI = styled.li(withReset, function(_ref20) {
  var theme2 = _ref20.theme;
  return { fontSize: theme2.typography.size.s2, color: theme2.color.defaultText, lineHeight: "24px", "& + li": { marginTop: ".25em" }, "& ul, & ol": { marginTop: ".25em", marginBottom: 0 }, "& code": codeCommon({ theme: theme2 }) };
});
var listCommon$1 = { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } };
var OL = styled.ol(withReset, withMargin, Object.assign(Object.assign({}, listCommon$1), { listStyle: "decimal" }));
var P$1 = styled.p(withReset, withMargin, function(_ref21) {
  var theme2 = _ref21.theme;
  return { fontSize: theme2.typography.size.s2, lineHeight: "24px", color: theme2.color.defaultText, "& code": codeCommon({ theme: theme2 }) };
});
var Pre = styled.pre(withReset, withMargin, function(_ref22) {
  var theme2 = _ref22.theme;
  return {
    fontFamily: theme2.typography.fonts.mono,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    lineHeight: "18px",
    padding: "11px 1rem",
    whiteSpace: "pre-wrap",
    color: "inherit",
    borderRadius: 3,
    margin: "1rem 0",
    "&:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 },
    "& pre, &.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px", code: { color: "inherit", fontSize: "inherit" } },
    "& code": { whiteSpace: "pre" },
    "& code, & tt": { border: "none" }
  };
});
var Span = styled.span(withReset, function(_ref23) {
  var theme2 = _ref23.theme;
  return { "&.frame": { display: "block", overflow: "hidden", "& > span": { border: "1px solid ".concat(theme2.color.medium), display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: theme2.color.darkest, display: "block", padding: "5px 0 0" } }, "&.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "&.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "&.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "&.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } } };
});
var Table$1 = styled.table(withReset, withMargin, function(_ref24) {
  var theme2 = _ref24.theme;
  return { fontSize: theme2.typography.size.s2, lineHeight: "24px", padding: 0, borderCollapse: "collapse", "& tr": { borderTop: "1px solid ".concat(theme2.appBorderColor), backgroundColor: theme2.appContentBg, margin: 0, padding: 0 }, "& tr:nth-of-type(2n)": { backgroundColor: theme2.base === "dark" ? theme2.color.darker : theme2.color.lighter }, "& tr th": { fontWeight: "bold", color: theme2.color.defaultText, border: "1px solid ".concat(theme2.appBorderColor), margin: 0, padding: "6px 13px" }, "& tr td": { border: "1px solid ".concat(theme2.appBorderColor), color: theme2.color.defaultText, margin: 0, padding: "6px 13px" }, "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 }, "& tr th :last-child, & tr td :last-child": { marginBottom: 0 } };
});
var TT = styled.title(codeCommon);
var listCommon = { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } };
var UL = styled.ul(withReset, withMargin, Object.assign(Object.assign({}, listCommon), { listStyle: "disc" }));
var ResetWrapper = styled.div(withReset);
var components$1 = { h1: function h1(props) {
  return React__default__default.createElement(H1, Object.assign({}, nameSpaceClassNames(props, "h1")));
}, h2: function h2(props) {
  return React__default__default.createElement(H2, Object.assign({}, nameSpaceClassNames(props, "h2")));
}, h3: function h3(props) {
  return React__default__default.createElement(H3, Object.assign({}, nameSpaceClassNames(props, "h3")));
}, h4: function h4(props) {
  return React__default__default.createElement(H4, Object.assign({}, nameSpaceClassNames(props, "h4")));
}, h5: function h5(props) {
  return React__default__default.createElement(H5, Object.assign({}, nameSpaceClassNames(props, "h5")));
}, h6: function h6(props) {
  return React__default__default.createElement(H6, Object.assign({}, nameSpaceClassNames(props, "h6")));
}, pre: function pre(props) {
  return React__default__default.createElement(Pre, Object.assign({}, nameSpaceClassNames(props, "pre")));
}, a: function a2(props) {
  return React__default__default.createElement(A$2, Object.assign({}, nameSpaceClassNames(props, "a")));
}, hr: function hr(props) {
  return React__default__default.createElement(HR, Object.assign({}, nameSpaceClassNames(props, "hr")));
}, dl: function dl(props) {
  return React__default__default.createElement(DL, Object.assign({}, nameSpaceClassNames(props, "dl")));
}, blockquote: function blockquote(props) {
  return React__default__default.createElement(Blockquote, Object.assign({}, nameSpaceClassNames(props, "blockquote")));
}, table: function table(props) {
  return React__default__default.createElement(Table$1, Object.assign({}, nameSpaceClassNames(props, "table")));
}, img: function img(props) {
  return React__default__default.createElement(Img, Object.assign({}, nameSpaceClassNames(props, "img")));
}, div: function div(props) {
  return React__default__default.createElement(Div, Object.assign({}, nameSpaceClassNames(props, "div")));
}, span: function span(props) {
  return React__default__default.createElement(Span, Object.assign({}, nameSpaceClassNames(props, "span")));
}, li: function li(props) {
  return React__default__default.createElement(LI, Object.assign({}, nameSpaceClassNames(props, "li")));
}, ul: function ul(props) {
  return React__default__default.createElement(UL, Object.assign({}, nameSpaceClassNames(props, "ul")));
}, ol: function ol(props) {
  return React__default__default.createElement(OL, Object.assign({}, nameSpaceClassNames(props, "ol")));
}, p: function p2(props) {
  return React__default__default.createElement(P$1, Object.assign({}, nameSpaceClassNames(props, "p")));
}, code: function code(props) {
  return React__default__default.createElement(Code, Object.assign({}, nameSpaceClassNames(props, "code")));
}, tt: function tt2(props) {
  return React__default__default.createElement(TT, Object.assign({}, nameSpaceClassNames(props, "tt")));
}, resetwrapper: function resetwrapper(props) {
  return React__default__default.createElement(ResetWrapper, Object.assign({}, nameSpaceClassNames(props, "resetwrapper")));
} };
styled.div(function(_ref25) {
  var theme2 = _ref25.theme;
  return { display: "inline-block", fontSize: 11, lineHeight: "12px", alignSelf: "center", padding: "4px 12px", borderRadius: "3em", fontWeight: theme2.typography.weight.bold };
}, { svg: { height: 12, width: 12, marginRight: 4, marginTop: -2, path: { fill: "currentColor" } } }, function(_ref26) {
  var theme2 = _ref26.theme, status = _ref26.status;
  switch (status) {
    case "critical": {
      return { color: theme2.color.critical, background: theme2.background.critical };
    }
    case "negative": {
      return { color: theme2.color.negative, background: theme2.background.negative };
    }
    case "warning": {
      return { color: theme2.color.warning, background: theme2.background.warning };
    }
    case "neutral": {
      return { color: theme2.color.dark, background: theme2.color.mediumlight };
    }
    case "positive": {
      return { color: theme2.color.positive, background: theme2.background.positive };
    }
    default: {
      return {};
    }
  }
});
var icons = { mobile: "M648 64h-272c-66.274 0-120 53.726-120 120v656c0 66.274 53.726 120 120 120h272c66.274 0 120-53.726 120-120v-656c0-66.274-53.726-120-120-120zM376 144h272c22.056 0 40 17.944 40 40v495.968h-352v-495.968c0-22.056 17.946-40 40-40zM648 880h-272c-22.054 0-40-17.944-40-40v-80.032h352v80.032c0 22.056-17.944 40-40 40zM544.034 819.962c0 17.676-14.33 32.002-32.004 32.002-17.67 0-32-14.326-32-32.002 0-17.672 14.33-31.998 32-31.998 17.674-0 32.004 14.326 32.004 31.998z", watch: "M736.172 108.030c0-11.044-8.956-20-20-20h-408.282c-11.044 0-20 8.956-20 20 0 11.046 8.956 20 20 20h408.282c11.044 0 20-8.954 20-20zM736.172 50.37c0-11.044-8.956-20-20-20h-408.282c-11.044 0-20 8.956-20 20s8.956 20 20 20h408.282c11.044 0 20-8.956 20-20zM736.172 973.692c0-11.044-8.956-20-20-20h-408.282c-11.044 0-20 8.956-20 20s8.956 20 20 20h408.282c11.044 0 20-8.956 20-20zM736.172 916.030c0-11.044-8.956-20-20-20h-408.282c-11.044 0-20 8.956-20 20 0 11.046 8.956 20 20 20h408.282c11.044 0 20-8.954 20-20zM717.53 228c18.904 0 34.286 15.14 34.286 33.75v500.502c0 18.61-15.38 33.75-34.286 33.75h-411.43c-18.904 0-34.286-15.14-34.286-33.75v-500.502c0-18.61 15.38-33.75 34.286-33.75h411.43zM717.53 148h-411.43c-63.118 0-114.286 50.928-114.286 113.75v500.502c0 62.822 51.166 113.75 114.286 113.75h411.43c63.118 0 114.286-50.926 114.286-113.75v-500.502c-0.002-62.822-51.168-113.75-114.286-113.75v0zM680.036 511.53c0 22.090-17.91 40-40 40h-128.004c-5.384 0-10.508-1.078-15.196-3.006-0.124-0.048-0.254-0.086-0.376-0.132-0.61-0.262-1.188-0.57-1.782-0.86-0.572-0.276-1.16-0.528-1.718-0.828-0.204-0.112-0.39-0.246-0.594-0.364-0.918-0.514-1.832-1.050-2.704-1.64-0.086-0.058-0.164-0.128-0.254-0.188-10.492-7.21-17.382-19.284-17.382-32.98v-151.5c0-22.094 17.91-40 40.004-40 22.088 0 40 17.906 40 40v111.498h88c22.094-0.002 40.002 17.91 40.006 40z", tablet: "M200.022 927.988h624.018c1.38 0 2.746-0.072 4.090-0.208 20.168-2.050 35.91-19.080 35.91-39.792v-751.916c0-22.092-17.91-40-40-40h-624.018c-22.098 0-40 17.908-40 40v751.916c0 22.094 17.906 40 40 40zM512.002 878.206c-17.674 0-32.004-14.328-32.004-31.998 0-17.678 14.33-32.002 32.004-32.002 17.67 0 32 14.324 32 32.002 0 17.67-14.33 31.998-32 31.998zM240.022 176.078h544.018v591.902h-544.018v-591.902z", browser: "M920.004 128h-816.008c-1.38 0-2.746 0.070-4.090 0.208-20.168 2.048-35.91 19.080-35.91 39.792v688c0 22.090 17.91 40 40 40h816.008c22.098 0 40-17.91 40-40v-688c-0-22.094-17.906-40-40-40zM368 177.78c17.674 0 32.004 14.328 32.004 31.998 0 17.676-14.33 32.002-32.004 32.002-17.67 0-32-14.326-32-32.002 0-17.67 14.33-31.998 32-31.998zM272 177.78c17.674 0 32.004 14.328 32.004 31.998 0 17.676-14.33 32.002-32.004 32.002-17.67 0-32-14.326-32-32.002 0-17.67 14.33-31.998 32-31.998zM176 177.78c17.674 0 32.004 14.328 32.004 31.998 0 17.676-14.33 32.002-32.004 32.002-17.67 0-32-14.326-32-32.002 0-17.67 14.33-31.998 32-31.998zM880.004 815.996h-736.008v-527.988h736.008v527.988z", sidebar: "M920.032 127.858h-816c-22.092 0-40 17.908-40 40v688c0 22.092 17.908 40 40 40h316.578c1.13 0.096 2.266 0.172 3.422 0.172s2.292-0.078 3.424-0.172h492.576c22.092 0 40-17.908 40-40v-688c0-22.092-17.908-40-40-40zM144.032 207.858h240v608h-240v-608zM880.032 815.858h-416v-608h416v608zM198.734 288.030c0-17.674 14.328-32 32.002-32h66.396c17.672 0 32 14.326 32 32 0 17.676-14.324 32-32 32h-66.398c-17.674 0-32-14.326-32-32zM198.734 416.030c0-17.674 14.328-32 32.002-32h66.396c17.672 0 32 14.326 32 32 0 17.676-14.324 32-32 32h-66.398c-17.674 0-32-14.326-32-32zM198.734 544.030c0-17.674 14.328-32 32.002-32h66.396c17.672 0 32 14.326 32 32 0 17.676-14.324 32-32 32h-66.398c-17.674 0-32-14.326-32-32z", sidebaralt: "M64 167.944v688c0 22.092 17.908 40 40 40h816c22.092 0 40-17.908 40-40v-688c0-22.092-17.908-40-40-40h-816c-22.092 0-40 17.908-40 40zM880 815.944h-240v-608h240v608zM144 207.944h416v608h-416v-608zM793.296 320.118h-66.398c-17.676 0-32-14.324-32-32 0-17.674 14.328-32 32-32h66.396c17.674 0 32.002 14.326 32.002 32 0 17.672-14.324 32-32 32zM793.296 448.118h-66.398c-17.676 0-32-14.324-32-32 0-17.674 14.328-32 32-32h66.396c17.674 0 32.002 14.326 32.002 32 0 17.672-14.324 32-32 32zM793.296 576.118h-66.398c-17.676 0-32-14.324-32-32 0-17.674 14.328-32 32-32h66.396c17.674 0 32.002 14.326 32.002 32 0 17.672-14.324 32-32 32z", bottombar: "M85 121h854c24 0 42 18 42 41v700c0 23-18 41-42 41H608a44 44 0 0 1-7 0H85c-24 0-42-18-42-41V162c0-23 18-41 42-41zm41 535v165h772V656H126zm0-82h772V202H126v372zm185 197h-69c-19 0-34-14-34-32s15-33 34-33h69c19 0 34 15 34 33s-15 32-34 32zm236 0h-70c-18 0-33-14-33-32s15-33 33-33h70c18 0 33 15 33 33s-15 32-33 32zm235 0h-70c-18 0-33-14-33-32s15-33 33-33h70c18 0 33 15 33 33s-15 32-33 32z", useralt: "M533 960a850 850 0 0 0 386-92v-19c0-117-242-223-306-234-20-3-21-58-21-58s59-58 72-137c35 0 56-84 21-113 2-31 45-243-173-243S337 276 338 307c-34 29-13 113 22 113 13 79 72 137 72 137s-1 55-21 58c-64 11-301 115-306 231a855 855 0 0 0 428 114z", user: "M814 805a525 525 0 00-217-116c-17-3-17-50-17-50s50-49 61-116c29 0 48-71 18-96 1-26 38-206-147-206S364 401 365 427c-30 25-11 96 18 96 11 67 61 116 61 116s0 47-17 50c-39 6-154 53-217 116a418 418 0 015-590 418 418 0 01594 0 418 418 0 015 590M512 0a512 512 0 100 1024A512 512 0 00512 0", useradd: "M87 859c-30-12-59-27-87-43 5-105 221-200 279-210 19-3 19-53 19-53s-54-53-65-125c-32 0-51-76-20-103-1-28-40-221 158-221 199 0 160 193 158 221 32 27 12 103-19 103-12 72-66 125-66 125s1 50 19 53c59 10 279 107 279 213v18a781 781 0 0 1-655 22zm892-565h-91v-90a45 45 0 1 0-91 0v90h-91a45 45 0 1 0 0 91h91v91a45 45 0 1 0 91 0v-91h91a45 45 0 1 0 0-91z", users: "M360 128c193 0 155 182 154 208 31 25 12 97-19 97-11 67-64 118-64 118s1 47 19 50c57 9 271 100 271 200v16a771 771 0 0 1-637 21c-29-11-57-25-84-40 4-99 215-189 271-197 18-3 18-50 18-50s-52-51-63-118c-31 0-50-72-19-97-1-26-40-208 153-208zm416 66c133 0 107 125 106 144 21 17 8 66-13 66-8 47-44 81-44 81s0 33 12 34c40 6 187 69 187 138v46c-80 27-163 41-249 41l-9-1c-16-31-44-61-83-90a546 546 0 0 0-111-64c47-38 117-66 143-70 12-1 12-34 12-34s-36-34-43-81c-21 0-34-49-13-66-1-19-27-144 105-144z", profile: "M761 631c0-13-10-23-22-23H285c-12 0-22 10-22 23 0 12 10 23 22 23h454c12 0 22-11 22-23zm0 100c0-12-10-22-22-22H285c-12 0-22 10-22 22 0 13 10 23 22 23h454c12 0 22-10 22-23zm0 101c0-13-10-23-22-23H285c-12 0-22 10-22 23s10 23 22 23h454c12 0 22-10 22-23zM832 0c59 0 107 49 107 109v807c-1 60-49 108-107 108H130c-25 0-45-20-45-46V46a45 45 0 0 1 45-46h702zm0 91H174v842h658c10 0 18-9 18-18V110c0-10-8-19-18-19zM384 532l-39-20c2-49 100-93 126-97 8-1 8-25 8-25s-24-24-29-57c-14 0-23-35-9-48-1-13-18-102 71-102s72 89 71 102c14 13 5 48-9 48-5 33-29 57-29 57s0 24 8 25c27 4 126 49 126 98v8a346 346 0 0 1-295 11z", bookmark: "M772 1012L511 761l-260 251a49 49 0 0 1-52 10c-18-7-29-24-29-43V132c0-25 21-46 47-46h588c26 0 47 21 47 46v847c0 19-11 36-29 43a49 49 0 0 1-51-10z", bookmarkhollow: "M772 1012L511 761l-260 251a49 49 0 0 1-52 10c-18-7-29-24-29-43V132c0-25 21-46 47-46h588c26 0 47 21 47 46v847c0 19-11 36-29 43a49 49 0 0 1-51-10zM545 664l213 205V181H265v688l213-205c9-9 21-14 33-14s24 5 34 14z", book: "M896.054 159.774c-0.122-52.914-43.048-95.774-95.992-95.774h-632.004c-1.754 0-3.468 0.154-5.164 0.372-19.644 2.54-34.836 19.292-34.836 39.628v816c0 22.094 17.91 40 40 40h632.004c52.642 0 95.368-42.378 95.968-94.88h0.036v-705.332l-0.012-0.014zM368.062 144h80v271.922l-11.728-11.718c-15.62-15.606-40.924-15.606-56.542 0l-11.728 11.718v-271.922zM816.036 864.204c-0.1 8.712-7.268 15.796-15.972 15.796h-592.004v-736h80.004v368.426c0 16.176 9.742 30.758 24.684 36.954 14.944 6.192 32.146 2.778 43.586-8.656l51.728-51.68 51.728 51.68c7.652 7.644 17.876 11.708 28.28 11.708 5.156 0 10.356-1 15.306-3.050 14.944-6.196 24.684-20.778 24.684-36.954v-368.428h272c8.796 0 15.972 7.16 15.992 15.958l-0.016 704.246z", repository: "M856.020 159.804c-0.122-52.916-43.048-95.774-95.992-95.774h-591.968c-1.754 0-3.468 0.154-5.164 0.37-19.644 2.54-34.836 19.292-34.836 39.63v784.584c0 22.094 17.91 40 40 40h151.972v63.594c0 10.876 6.548 20.682 16.598 24.844 10.046 4.164 21.612 1.87 29.304-5.818l34.78-34.748 34.78 34.748c5.144 5.14 12.020 7.87 19.014 7.87 3.466 0 6.962-0.672 10.292-2.052 10.048-4.164 16.598-13.968 16.598-24.844v-63.594h278.63c52.642 0 95.368-42.38 95.968-94.882h0.036v-673.916l-0.012-0.012zM776.020 159.988l-0.014 504.628h-519.974v-520.584h503.996c8.796-0 15.972 7.158 15.992 15.956zM760.028 848.616h-278.63v-56h-161.366v56h-111.972v-104h567.944l-0.002 88.204c-0.102 8.71-7.27 15.796-15.974 15.796zM320.032 240.396c0-17.67 14.328-31.998 31.998-31.998s32.002 14.326 32.002 31.998c0 17.674-14.332 32-32.002 32-17.672-0.002-31.998-14.326-31.998-32zM320.032 349.79c0-17.67 14.328-31.998 31.998-31.998s32.002 14.328 32.002 31.998c0 17.676-14.332 32-32.002 32-17.672 0-31.998-14.324-31.998-32zM320.032 459.188c0-17.67 14.328-32 31.998-32s32.002 14.328 32.002 32c0 17.674-14.332 31.998-32.002 31.998-17.672 0-31.998-14.324-31.998-31.998zM384.032 568.582c0 17.674-14.332 31.998-32.002 31.998s-31.998-14.324-31.998-31.998c0-17.67 14.328-32 31.998-32 17.67 0.002 32.002 14.33 32.002 32z", star: "M763.972 919.5c-6.368 0-12.758-1.518-18.61-4.596l-233.358-122.688-233.37 122.688c-13.476 7.090-29.808 5.904-42.124-3.042-12.318-8.95-18.486-24.118-15.912-39.124l44.57-259.856-188.792-184.028c-10.904-10.626-14.828-26.524-10.124-41.004s17.222-25.034 32.292-27.222l260.906-37.912 116.686-236.42c6.738-13.652 20.644-22.296 35.87-22.296v0c15.226 0 29.13 8.644 35.87 22.298l116.674 236.418 260.906 37.912c15.068 2.19 27.586 12.742 32.292 27.222s0.782 30.376-10.124 41.004l-188.792 184.028 44.24 257.93c0.62 2.796 0.946 5.704 0.946 8.688 0 22.054-17.848 39.942-39.888 40-0.054 0-0.106 0-0.158 0z", starhollow: "M763.972 919.5c-6.368 0-12.758-1.518-18.61-4.596l-233.358-122.688-233.37 122.688c-13.476 7.090-29.808 5.904-42.124-3.042-12.318-8.95-18.486-24.118-15.912-39.124l44.57-259.856-188.792-184.028c-10.904-10.626-14.828-26.524-10.124-41.004s17.222-25.034 32.292-27.222l260.906-37.912 116.686-236.42c6.738-13.652 20.644-22.296 35.87-22.296v0c15.226 0 29.13 8.644 35.87 22.298l116.674 236.418 260.906 37.912c15.068 2.19 27.586 12.742 32.292 27.222s0.782 30.376-10.124 41.004l-188.792 184.028 44.24 257.93c0.62 2.796 0.946 5.704 0.946 8.688 0 22.054-17.848 39.942-39.888 40-0.054 0-0.106 0-0.158 0zM190.256 428.144l145.812 142.13c9.428 9.192 13.73 22.432 11.504 35.406l-34.424 200.7 180.244-94.758c11.654-6.13 25.576-6.126 37.226 0l180.232 94.756-34.422-200.698c-2.226-12.974 2.076-26.214 11.504-35.406l145.812-142.13-201.51-29.282c-13.030-1.892-24.292-10.076-30.118-21.882l-90.114-182.596-90.122 182.598c-5.826 11.804-17.090 19.988-30.118 21.88l-201.506 29.282z", circle: "M1024 512A512 512 0 110 512a512 512 0 011024 0z", circlehollow: "M1024 512A512 512 0 100 512a512 512 0 001024 0zM215 809a418 418 0 010-594 418 418 0 01594 0 418 418 0 010 594 418 418 0 01-594 0z", heart: "M895.032 194.328c-20.906-21.070-46.492-37.316-76.682-48.938-30.104-11.71-63.986-17.39-101.474-17.39-19.55 0-38.744 2.882-57.584 9.094-18.472 6.062-36.584 14.242-54.072 24.246-17.476 9.828-34.056 21.276-49.916 33.898-16.038 12.8-30.456 25.572-43.346 38.664-13.52-13.092-28.026-25.864-43.616-38.664-15.684-12.624-32.080-24.070-49.382-33.898-17.214-10.004-35.414-18.184-54.704-24.246-19.104-6.21-38.568-9.094-58.034-9.094-37.126 0-70.56 5.68-100.48 17.39-29.732 11.622-55.328 27.868-76.328 48.938-20.994 21.094-37.214 46.962-48.478 77.328-11.174 30.544-16.942 64.5-16.942 101.812 0 21.628 3.068 43.078 9.19 64.53 6.308 21.096 14.416 41.986 24.876 61.642 10.446 19.656 22.702 38.488 36.584 56.59 13.88 18.124 28.388 34.516 43.344 49.58l305.766 305.112c8.466 7.558 18.11 11.444 28.204 11.444 10.726 0 19.914-3.884 27.308-11.444l305.934-304.226c14.78-14.772 29.382-31.368 43.166-49.378 14.058-18.212 26.314-37.222 37.042-57.23 10.9-19.924 19.192-40.638 25.406-62 6.218-21.188 9.198-42.61 9.198-64.618 0-37.312-5.592-71.268-16.582-101.812-11.264-30.366-27.22-56.236-48.398-77.33z", hearthollow: "M716.876 208c27.708 0 52.092 4.020 72.47 11.948l0.132 0.052 0.13 0.050c19.866 7.644 35.774 17.664 48.632 30.624l0.166 0.168 0.17 0.168c12.586 12.536 22.304 28.27 29.706 48.094 7.782 21.786 11.726 46.798 11.726 74.364 0 14.658-1.95 28.426-5.958 42.086l-0.028 0.092-0.026 0.092c-4.866 16.72-11.006 31.752-18.776 45.952l-0.162 0.298-0.16 0.296c-8.81 16.434-18.58 31.532-29.864 46.148l-0.204 0.264c-11.316 14.786-23.48 28.708-36.154 41.378l-277.122 275.574-276.94-276.35c-13.32-13.43-25.248-27.074-36.488-41.75-11.386-14.848-21.284-30.136-29.444-45.49-7.206-13.54-13.494-29.17-18.7-46.472-4.030-14.264-5.988-28.044-5.988-42.116 0-27.36 4.042-52.314 12.016-74.176 7.214-19.378 17.344-35.708 30.066-48.492 12.998-13.042 28.958-23.148 48.826-30.914 20.436-8 43.764-11.886 71.32-11.886 11.536 0 22.738 1.742 33.298 5.174l0.374 0.122 0.376 0.12c13.116 4.122 26.066 9.874 38.494 17.094l0.34 0.2 0.344 0.196c12.736 7.234 25.308 15.876 38.43 26.412 14.486 11.906 27.060 23.048 38.428 34.056l56.994 55.192 55.662-56.532c10.324-10.484 22.18-21.040 36.242-32.264 13.382-10.646 26.216-19.38 39.228-26.698l0.256-0.144 0.254-0.144c13.008-7.442 26.228-13.386 39.294-17.676l0.050-0.016 0.050-0.018c10.354-3.414 20.998-5.076 32.54-5.076zM716.876 128c-19.55 0-38.744 2.882-57.584 9.094-18.472 6.062-36.584 14.242-54.072 24.246-17.476 9.828-34.056 21.276-49.916 33.898-16.038 12.8-30.456 25.572-43.346 38.664-13.52-13.092-28.026-25.864-43.616-38.664-15.684-12.624-32.080-24.070-49.382-33.898-17.214-10.004-35.414-18.184-54.704-24.246-19.104-6.21-38.568-9.094-58.034-9.094-37.126 0-70.56 5.68-100.48 17.39-29.732 11.622-55.328 27.868-76.328 48.938-20.994 21.094-37.214 46.962-48.478 77.328-11.174 30.544-16.942 64.5-16.942 101.812 0 21.628 3.068 43.078 9.19 64.53 6.308 21.096 14.416 41.986 24.876 61.642 10.446 19.656 22.702 38.488 36.584 56.59 13.88 18.124 28.388 34.516 43.344 49.58l305.766 305.112c8.466 7.558 18.11 11.444 28.204 11.444 10.726 0 19.914-3.884 27.308-11.444l305.934-304.226c14.78-14.772 29.382-31.368 43.166-49.378 14.058-18.212 26.314-37.222 37.042-57.23 10.9-19.924 19.192-40.638 25.406-62 6.218-21.188 9.198-42.61 9.198-64.618 0-37.312-5.592-71.268-16.582-101.812-11.262-30.366-27.216-56.234-48.396-77.328-20.906-21.070-46.492-37.316-76.682-48.938-30.106-11.712-63.988-17.392-101.476-17.392v0z", facehappy: "M512 0a512 512 0 110 1024A512 512 0 01512 0zm0 91.4c-112.3 0-218 43.8-297.4 123.2A417.8 417.8 0 0091.4 512c0 112.3 43.8 218 123.2 297.4A417.8 417.8 0 00512 932.6c112.3 0 218-43.8 297.4-123.2A417.8 417.8 0 00932.6 512c0-112.3-43.8-218-123.2-297.4A417.8 417.8 0 00512 91.4zm248 493.7c15.2 0 28.7 7.5 37 19l2.6 3.9a46 46 0 015.8 18l.3 4.9c0 6.6-1.4 13-4 18.7l-2.1 4.1A329 329 0 01232 663l-5.5-9.3a46 46 0 01-2-41.2l2-4.2v-.2a45.6 45.6 0 0176.7-4l2.5 4a237.9 237.9 0 00410 7.7l4.5-7.7a46 46 0 0139.7-22.9zM329.7 292.6a73.1 73.1 0 110 146.2 73.1 73.1 0 010-146.2zm365.2 0a73.1 73.1 0 110 146.2 73.1 73.1 0 010-146.2z", facesad: "M512 0a512 512 0 110 1024A512 512 0 01512 0zm0 91.4c-112.3 0-218 43.8-297.4 123.2A417.8 417.8 0 0091.4 512c0 112.3 43.8 218 123.2 297.4A417.8 417.8 0 00512 932.6c112.3 0 218-43.8 297.4-123.2A417.8 417.8 0 00932.6 512c0-112.3-43.8-218-123.2-297.4A417.8 417.8 0 00512 91.4zm1.1 449.2a329 329 0 01281.1 157.7l5.5 9.2a46 46 0 012 41.3l-2 4.1v.3a45.6 45.6 0 01-76.7 4l-2.6-4a238 238 0 00-410-7.7l-4.5 7.7a46 46 0 01-76.6 4l-2.6-4a46 46 0 01-5.9-18l-.2-5c0-6.6 1.4-12.9 4-18.6l2.1-4.2a329 329 0 01286.4-166.8zm-183.4-248a73.1 73.1 0 110 146.2 73.1 73.1 0 010-146.2zm365.2 0a73.1 73.1 0 110 146.2 73.1 73.1 0 010-146.2z", faceneutral: "M512 0a512 512 0 110 1024A512 512 0 01512 0zm0 91.4c-112.3 0-218 43.8-297.4 123.2A417.8 417.8 0 0091.4 512c0 112.3 43.8 218 123.2 297.4A417.8 417.8 0 00512 932.6c112.3 0 218-43.8 297.4-123.2A417.8 417.8 0 00932.6 512c0-112.3-43.8-218-123.2-297.4A417.8 417.8 0 00512 91.4zm248 521.2a45.7 45.7 0 014.7 91.2l-4.7.2H266.3a45.7 45.7 0 01-4.7-91.2l4.7-.2H760zm-430.3-320a73.1 73.1 0 110 146.2 73.1 73.1 0 010-146.2zm365.2 0a73.1 73.1 0 110 146.2 73.1 73.1 0 010-146.2z", lock: "M896.032 915.53v-467.498c0-19.102-13.402-35.052-31.31-39.026-0.21-0.046-0.414-0.12-0.628-0.162-0.444-0.090-0.904-0.13-1.354-0.208-2.186-0.37-4.416-0.606-6.708-0.606h-55.902l0.002-55.85h0.020c0-159.14-129.010-288.15-288.15-288.15-159.128 0-288.13 128.992-288.15 288.118v55.884h-54.852c-20.71 0-37.746 15.742-39.792 35.91-0.136 1.344-0.208 2.708-0.208 4.090v463.332c-0.618 2.792-0.968 5.688-0.968 8.668 0 22.094 17.91 40 40 40h688.27c22.092 0 40-17.91 40-40-0.002-1.524-0.104-3.024-0.27-4.502zM209 488.032h607.032v392h-607.032v-392zM303.85 352.182c0-114.776 93.376-208.15 208.15-208.15 114.59 0 207.842 93.074 208.142 207.596 0 0.084-0.012 0.164-0.012 0.248v56.156h-416.284l0.004-55.85zM552.164 691.858l-0.002 58.188c0.004 22.088-17.906 39.996-39.996 39.998-22.094 0.002-40.004-17.906-40-40v-57.974c-14.704-11.726-24.134-29.782-24.134-50.048 0-35.346 28.654-64 64-64s64 28.654 64 64c0 20.142-9.318 38.104-23.868 49.836z", unlock: "M896.032 915.53v-467.498c0-1.988-0.194-3.926-0.472-5.834-0.11-0.744-0.192-1.498-0.34-2.226-1.524-7.44-5.136-14.1-10.164-19.408-0.252-0.266-0.48-0.554-0.738-0.814-0.496-0.494-1.036-0.944-1.554-1.412-0.43-0.386-0.84-0.8-1.288-1.17-0.292-0.24-0.608-0.446-0.904-0.676-2.506-1.954-5.244-3.616-8.176-4.934-0.744-0.334-1.504-0.632-2.27-0.922-4.39-1.656-9.124-2.604-14.094-2.604h-552.184l0.002-55.85c0-114.776 93.376-208.15 208.15-208.15 86.038 0 160.034 52.474 191.7 127.096 0.012 0.028 0.030 0.044 0.042 0.072 5.978 14.566 20.284 24.832 37.006 24.832 22.090 0 40-17.906 40-40 0-4.71-0.86-9.21-2.354-13.41-0.182-0.694-0.42-1.438-0.782-2.292-43.666-103.582-146.14-176.296-265.612-176.296-159.128 0-288.13 128.994-288.15 288.12v55.882h-54.85c-20.71 0-37.746 15.742-39.792 35.91-0.136 1.344-0.208 2.708-0.208 4.090v463.332c-0.618 2.794-0.968 5.688-0.968 8.668 0 22.094 17.91 40 40 40h688.27c22.092 0 40-17.91 40-40-0.002-1.528-0.104-3.028-0.27-4.506zM209 488.032h607.032v392h-607.032v-392zM552.164 691.86l-0.002 58.186c0.004 22.088-17.906 39.996-39.996 40-22.094 0-40.004-17.908-40-40v-57.976c-14.702-11.726-24.134-29.782-24.134-50.048 0-35.346 28.654-64 64-64s64 28.654 64 64c0 20.142-9.318 38.102-23.868 49.838z", key: "M768.032 320.032c0 35.346-28.654 64-64 64s-64-28.654-64-64 28.654-64 64-64 64 28.654 64 64zM960.032 353.092c0 159.062-128.946 288.010-288.008 288.010-35.306 0-69.124-6.368-100.38-17.996l-27.736 27.738-0.002 54.464c0 0.016 0.002 0.028 0.002 0.040 0 11.046-4.478 21.046-11.716 28.29-6.334 6.332-14.784 10.55-24.196 11.508-1.346 0.136-2.708 0.208-4.090 0.208h-71.748l-0.002 71.96c0 0.012 0.002 0.040 0.002 0.040 0 11.046-4.478 21.046-11.716 28.286-6.334 6.336-14.784 10.554-24.196 11.508-1.346 0.136-2.708 0.208-4.090 0.208h-71.996l-0.002 62.684c0 22.094-17.908 40-40 40-0.022 0-0.042 0-0.062 0-0.022 0-0.042 0-0.064 0h-175.996c-13.76 0-25.888-6.95-33.086-17.524-4.362-6.406-6.916-14.14-6.916-22.476v-112c0-0.664 0.066-1.308 0.1-1.964 0.032-0.618 0.034-1.234 0.092-1.852 0.11-1.148 0.288-2.278 0.492-3.398 0.024-0.128 0.034-0.258 0.058-0.386 1.614-8.378 5.848-15.808 11.808-21.446l325.456-325.458c-11.642-31.274-18.020-65.11-18.020-100.44 0-159.060 128.946-288.006 288.006-288.006 159.060-0.004 288.006 128.942 288.006 288.002zM880.032 353.092c0-114.696-93.312-208.006-208.008-208.006s-208.006 93.31-208.006 208.006c0 43.208 13.246 83.376 35.884 116.668l-57.36 57.362c-0.136-0.184-0.27-0.368-0.408-0.546l-298.102 298.106-0.002 55.356h96.124v-62.684c0-0.708 0.070-1.394 0.106-2.094 0.036-0.664 0.036-1.336 0.102-1.992 0.132-1.316 0.334-2.61 0.592-3.882 0.006-0.028 0.008-0.058 0.014-0.090 0.258-1.262 0.58-2.5 0.956-3.714 0.012-0.040 0.018-0.078 0.030-0.118 4.676-15.032 17.976-26.262 34.114-27.902 1.344-0.136 2.708-0.208 4.090-0.208h71.998v-67.64c-0.156-1.434-0.248-2.882-0.248-4.36 0-22.094 17.908-40 40-40h71.998v-30.692c0-0.148 0.020-0.29 0.022-0.438 0.008-10.226 3.912-20.45 11.714-28.254l55.99-55.988c1.982-1.984 4.124-3.71 6.38-5.188l18.68-18.684c33.030 22.090 72.702 34.992 115.332 34.992 114.694-0 208.008-93.314 208.008-208.010z", arrowleftalt: "M107.854 539.924l282.834 283.272c15.594 15.65 40.92 15.692 56.568 0.1 15.648-15.594 15.694-40.92 0.1-56.568l-214.838-215.040h655.412c22.092 0 40-17.908 40-40s-17.908-40-40-40h-655l214.75-214.61c15.64-15.602 15.672-40.928 0.070-56.568-7.814-7.834-18.066-11.752-28.32-11.75-10.22 0-20.442 3.892-28.25 11.68l-283.242 282.93c-15.634 15.594-15.672 40.91-0.084 56.554z", arrowrightalt: "M916.266 483.792l-282.834-283.272c-15.594-15.65-40.92-15.692-56.568-0.1-15.648 15.594-15.694 40.92-0.1 56.568l214.838 215.040h-655.412c-22.092 0-40 17.908-40 40s17.908 40 40 40h655l-214.748 214.61c-15.64 15.602-15.672 40.928-0.070 56.568 7.814 7.834 18.066 11.752 28.32 11.75 10.22 0 20.442-3.892 28.25-11.68l283.242-282.93c15.632-15.596 15.67-40.91 0.082-56.554z", sync: "M135.6 442.5a41 41 0 0130 12l94.9 94.6c16 16 16 42 0 58s-42.1 16-58.2 0l-30.1-30a341.9 341.9 0 0095 178.6c65.3 65 152 101 244.3 101 92.3 0 179-36 244.3-101a345 345 0 0066.8-93.6 41.1 41.1 0 0174.3 35v.2l-.1.2-5.2 10.3a427.8 427.8 0 01-380 230.9A427.5 427.5 0 0190.1 585.8l-20 20c-16 16-42 16-58.2 0a41 41 0 010-58l93.6-93.3a41 41 0 0130-12zm376-357.2c208.9 0 382.8 149.5 420.1 347.1l22-22c16.1-16 42.2-16 58.2 0s16 42 0 58l-93.5 93.4a41 41 0 01-30 12 41 41 0 01-30-12L763.5 467a41 41 0 010-58c16-16 42.1-16 58.2 0l26.8 26.8a342 342 0 00-92.7-167.6c-65.3-65-152-101-244.3-101-92.3 0-179 36-244.2 101a345.2 345.2 0 00-66.9 93.6 41.1 41.1 0 01-74.3-35v-.2l.2-.2c.7-1.7.2-.8 5.1-10.3A427.8 427.8 0 01511.5 85.3z", reply: "M679.496 431.738c-0.414-0.062-0.834-0.102-1.266-0.102h-477.482l171.506-171.504c15.622-15.622 15.622-40.95-0.002-56.57-15.62-15.624-40.948-15.624-56.568 0l-239.734 239.732c-0.958 0.956-1.868 1.958-2.724 3.006-0.328 0.402-1.884 2.482-2.324 3.138-0.36 0.54-1.696 2.77-2.008 3.352-0.308 0.58-1.424 2.936-1.676 3.544-0.036 0.086-0.468 1.268-0.648 1.774-0.23 0.636-0.474 1.266-0.672 1.918-0.186 0.612-0.818 3.13-0.95 3.788-0.148 0.748-0.522 3.318-0.574 3.862-0.262 2.642-0.262 5.3 0 7.942 0.044 0.448 0.412 3.032 0.58 3.874 0.112 0.556 0.74 3.088 0.958 3.808 0.158 0.524 1.036 2.992 1.328 3.7 0.192 0.458 1.298 2.828 1.688 3.552 0.208 0.386 0.446 0.75 0.666 1.126 0.436 0.752 1.844 2.888 2.084 3.224 0.52 0.724 4.262 5.074 4.29 5.098l239.718 239.72c15.62 15.618 40.948 15.618 56.57 0 15.62-15.624 15.622-40.948 0-56.57l-171.516-171.514h471.296c114.52 0.084 207.688 93.124 207.988 207.594 0 0.084-0.012 0.164-0.012 0.248v95.876c-0.004 22.094 17.906 40.002 40 40 22.090-0.002 40-17.91 39.996-39.998l0.004-95.57h0.020c0-156.594-124.914-284.012-280.536-288.048z", undo: "M230 301h480a240 240 0 1 1 0 481H235c-23 0-42-20-42-43 0-24 19-43 42-43h475a155 155 0 0 0 0-310H228l3 3 65 65a45 45 0 0 1-65 64L90 376a45 45 0 0 1 0-64l142-142a45 45 0 1 1 64 65l-63 62-3 4z", transfer: "M916.25 348.726l-125 124.688c-7.808 7.79-18.032 11.68-28.25 11.68-10.254 0.002-20.506-3.918-28.32-11.75-15.602-15.64-15.57-40.966 0.070-56.568l56.508-56.368h-655.258c-22.092 0-40-17.908-40-40s17.908-40 40-40h655.672l-57.006-57.206c-15.594-15.646-15.548-40.972 0.1-56.566s40.972-15.55 56.568 0.098l125 125.438c15.588 15.644 15.548 40.958-0.084 56.554zM107.666 731.892l125 125.438c15.596 15.648 40.92 15.692 56.568 0.098s15.694-40.92 0.1-56.566l-57.006-57.206h655.672c22.092 0 40-17.908 40-40s-17.908-40-40-40h-655.258l56.508-56.368c15.64-15.602 15.672-40.928 0.070-56.568-7.814-7.832-18.066-11.752-28.32-11.75-10.218 0-20.442 3.89-28.25 11.68l-125 124.688c-15.632 15.596-15.672 40.91-0.084 56.554z", redirect: "M913.852 702.796c-15.594-15.648-40.922-15.694-56.57-0.1l-57.204 57.006v-451.424c0-0.372-0.028-0.736-0.074-1.098-0.458-99.016-80.86-179.15-179.988-179.15-99.412 0-180 80.592-180 180 0 0.084 0.004 0.166 0.004 0.248h-0.004v343.504h-0.006c0 0.082 0.006 0.164 0.006 0.248 0 55.14-44.86 100-100 100s-100-44.86-100-100c0-0.084 0.006-0.166 0.006-0.248h-0.002v-483.752c0-22.092-17.91-40-40-40s-40.004 17.908-40.004 40v483.752c0 0.018 0.002 0.036 0.002 0.054 0 0.064-0.002 0.128-0.002 0.194 0 99.408 80.59 180 180 180 99.412 0 180-80.592 180-180 0-0.084-0.004-0.166-0.004-0.248h0.004v-343.504h0.008c0-0.082-0.008-0.164-0.008-0.248 0-55.138 44.86-100 100-100s100 44.862 100 100c0 0.084-0.008 0.166-0.008 0.248h0.070v451.008l-56.368-56.506c-15.602-15.642-40.93-15.67-56.566-0.070-7.836 7.814-11.754 18.066-11.754 28.32 0 10.218 3.894 20.442 11.68 28.252l124.692 125c15.594 15.632 40.91 15.67 56.554 0.084l125.434-125c15.652-15.598 15.692-40.92 0.102-56.57z", expand: "M433.4 578.8l6.2 5.2a44.8 44.8 0 010 63.3L238.4 849.1h100.3a44.8 44.8 0 018 88.8l-8 .8H130l-6.2-.5 2.7.3h-.3a44.7 44.7 0 01-24.8-10.2l-.3-.3-.3-.2-.3-.4-.3-.2-.3-.2v-.2h-.1l-.2-.1a45.7 45.7 0 01-13.5-24.8l-.3-1.7a45 45 0 01-.5-5.3V685.7a44.8 44.8 0 0189-8.1l.6 8 .1 100L376.3 584a44.8 44.8 0 0157.1-5.2zm157.2 0a44.8 44.8 0 0157.1 5.2L849 785.7v-100l.8-8.1a44.8 44.8 0 0188.9 8V895a45 45 0 01-.5 5.3l-.3 1.7a38.6 38.6 0 01-2.8 9.4 43.4 43.4 0 01-9.6 14.2l-4.7 4.2 2-1.7.7-.6-.3.4a44.1 44.1 0 01-4.4 3.3l-.6.4a45.8 45.8 0 01-20.4 7h-.3.9l1.8-.3-6.2.5H685.3l-8-.8a44.8 44.8 0 018-88.8h100.3L584.4 647.3a44.8 44.8 0 010-63.3zM98.5 925.5l1.3 1.3.1.2.6.4a45 45 0 002 1.7l.7.6-4.7-4.2zM893.9 85.3h.9-.8l6.2.5a45 45 0 00-1.8-.2l-.9-.1h-1l-.5-.1h-1.2 2.7l.3.1a44.7 44.7 0 0125.4 10.7l.3.3v.1l.3.2.3.2v.2h.1l.2.1.6.6.5.6A45.6 45.6 0 01938 122l.3 1.7c.3 1.8.4 3.6.5 5.3v209.2a44.8 44.8 0 01-89 8.1l-.6-8-.1-100L647.7 440a44.8 44.8 0 01-57.1 5.2l-6.2-5.2a44.8 44.8 0 010-63.3l201.2-201.8H685.3a44.8 44.8 0 01-8-88.8l8-.8H894h-.1zm-555.2 0l8 .8a44.8 44.8 0 01-8 88.8H238.4l201.2 201.8a44.8 44.8 0 010 63.3l-6.2 5.2a44.8 44.8 0 01-57.1-5.2L175 238.3v100l-.8 8.1a44.8 44.8 0 01-88.9-8V129c0-1.7.2-3.5.5-5.3l.3-1.7a38.6 38.6 0 012.8-9.4 43.4 43.4 0 019.6-14.2l4.7-4.2-2 1.7.2-.3a43.7 43.7 0 0124.8-10.2h1.3l.3-.1h2.3-.1 208.7zm582 9l4.8 4.2-1.3-1.3-.1-.2-.5-.4h-.1l-.6-.6-1.4-1.1-.7-.6zm-790.7-9h-2l-.5.1h-1l-.9.2c-.6 0-1.2 0-1.8.2l6.2-.5z", expandalt: "M479.7 13.4L205.4 287.6a45.7 45.7 0 1064.7 64.7l242-242 241.8 241.9a45.7 45.7 0 1064.7-64.7L544.4 13.4a45.6 45.6 0 00-64.7 0M512 1024a45.6 45.6 0 01-32.3-13.4L205.4 736.5a45.7 45.7 0 1164.7-64.7l241.8 241.8 242-241.9a45.7 45.7 0 1164.7 64.7l-274.3 274.2c-9 9-20.7 13.4-32.4 13.4", collapse: "M479.7 411L205.4 136.6a45.7 45.7 0 1164.7-64.6L512 314 753.9 72.2a45.7 45.7 0 1164.7 64.6L544.4 411a45.6 45.6 0 01-64.7 0M512 598.3a45.6 45.6 0 00-32.3 13.4L205.4 885.8a45.7 45.7 0 1064.7 64.7l241.8-241.8 242 242a45.7 45.7 0 1064.7-64.7L544.3 611.7c-9-8.9-20.7-13.4-32.4-13.4", grow: "M541.146 448.384c-1.694-0.216-3.408-0.37-5.162-0.37h-367.968c-1.754 0-3.468 0.152-5.162 0.37-19.646 2.538-34.838 19.292-34.838 39.63v368.032c0 22.094 17.91 40 40 40h367.968c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 0.184-0.308 0.282-0.458 0.612-0.924 1.2-1.862 1.722-2.838 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.61 4.704-12.008 4.704-18.808v-368.036c0-20.34-15.192-37.094-34.838-39.632zM208.016 816.046v-288.032h287.968v288.032h-287.968zM736.032 856.046c0 22.090-17.908 40-40 40-22.090 0-40-17.908-40-40v-487.902l-488.016 0.002c-22.090 0-40-17.91-40-40s17.908-40.002 40-40.002h528.016c1.754 0 3.468 0.152 5.162 0.37 19.646 2.538 34.838 19.292 34.838 39.63v527.902zM896.032 168.030v688.004c-0.002 22.088-17.91 39.996-40 39.996s-40.002-17.908-40.002-40c0 0 0.002-304.026 0.002-304.040v-343.96h-343.96c-0.014 0-304.040 0.002-304.040 0.002-22.090 0-40-17.91-40-40s17.908-40.002 40-40.002h688c1.754 0 3.468 0.152 5.162 0.37 19.646 2.536 34.838 19.29 34.838 39.63z", arrowleft: "M257.93 511.976c0-10.236 3.902-20.47 11.71-28.282l344.098-344.158c15.622-15.624 40.946-15.624 56.57-0.006 15.622 15.622 15.624 40.948 0.004 56.568l-315.82 315.876 315.868 315.922c15.618 15.624 15.618 40.952-0.004 56.568-15.622 15.62-40.95 15.618-56.57-0.006l-344.146-344.202c-7.808-7.81-11.71-18.044-11.71-28.28z", arrowup: "M512.024 256c10.236 0 20.47 3.904 28.282 11.712l344.154 344.098c15.624 15.62 15.624 40.946 0.006 56.57-15.622 15.622-40.948 15.624-56.568 0.004l-315.876-315.82-315.922 315.868c-15.624 15.618-40.952 15.618-56.568-0.004-15.62-15.624-15.618-40.95 0.006-56.57l344.204-344.144c7.81-7.81 18.046-11.714 28.282-11.714z", arrowdown: "M511.976 768.002c-10.236 0-20.47-3.904-28.282-11.712l-344.154-344.098c-15.624-15.62-15.624-40.946-0.006-56.57 15.622-15.622 40.948-15.624 56.568-0.004l315.876 315.82 315.922-315.868c15.624-15.618 40.952-15.616 56.568 0.004 15.62 15.624 15.618 40.95-0.006 56.57l-344.204 344.144c-7.81 7.81-18.046 11.714-28.282 11.714z", arrowright: "M768.072 514.022c0 10.236-3.904 20.47-11.712 28.282l-344.098 344.156c-15.62 15.624-40.946 15.624-56.568 0.006-15.622-15.622-15.624-40.948-0.006-56.568l315.82-315.876-315.868-315.922c-15.618-15.624-15.618-40.952 0.004-56.568 15.624-15.62 40.95-15.618 56.57 0.006l344.144 344.204c7.81 7.81 11.714 18.044 11.714 28.28z", chevrondown: "M511.976 833c-10.236 0-20.47-3.904-28.282-11.712l-471.934-471.874c-15.624-15.62-15.624-40.946-0.006-56.57 15.622-15.622 40.948-15.624 56.568-0.004l443.652 443.598 443.61-443.556c15.624-15.618 40.952-15.616 56.568 0.004 15.62 15.624 15.618 40.95-0.006 56.57l-471.89 471.832c-7.808 7.808-18.044 11.712-28.28 11.712z", back: "M512 932.6c-112.3 0-218-43.8-297.4-123.2A417.8 417.8 0 0191.4 512c0-112.3 43.8-218 123.2-297.4A417.8 417.8 0 01512 91.4c112.3 0 218 43.8 297.4 123.2A417.8 417.8 0 01932.6 512c0 112.3-43.8 218-123.2 297.4A417.8 417.8 0 01512 932.6zm0 91.4A512 512 0 10512 0a512 512 0 000 1024zM232.7 542.5l142.8 143.3a45.7 45.7 0 0064.8-64.5L375 555.9h383.7a45.7 45.7 0 000-91.4H375.6l64.6-64.4a45.7 45.7 0 10-64.6-64.8L232.8 477.8a45.7 45.7 0 00-.1 64.6z", download: "M543.8 791.3a45.7 45.7 0 01-64.6 0l-142.5-143a45.6 45.6 0 010-64.6 45.7 45.7 0 0164.7 0l64.5 64.7V265.2a45.7 45.7 0 1191.4 0v383.6l65.4-65.1a45.7 45.7 0 1164.5 64.8L543.8 791.3zM1024 512A512 512 0 110 512a512 512 0 011024 0zm-91.4 0c0-112.3-43.8-218-123.2-297.4A417.8 417.8 0 00512 91.4c-112.3 0-218 43.8-297.4 123.2A417.8 417.8 0 0091.4 512c0 112.3 43.8 218 123.2 297.4A417.8 417.8 0 00512 932.6c112.3 0 218-43.8 297.4-123.2A417.8 417.8 0 00932.6 512z", upload: "M480.2 232.7a45.7 45.7 0 0164.6 0l142.5 143a45.6 45.6 0 010 64.6 45.7 45.7 0 01-64.7 0L558 375.5v383.2a45.7 45.7 0 11-91.4 0V375.2l-65.4 65.1a45.7 45.7 0 11-64.5-64.8l143.4-142.8zM0 512a512 512 0 111024 0A512 512 0 010 512zm91.4 0c0 112.3 43.8 218 123.2 297.4A417.8 417.8 0 00512 932.6c112.3 0 218-43.8 297.4-123.2A417.8 417.8 0 00932.6 512c0-112.3-43.8-218-123.2-297.4A417.8 417.8 0 00512 91.4c-112.3 0-218 43.8-297.4 123.2A417.8 417.8 0 0091.4 512z", proceed: "M791.3 480.2L648.5 336.8a45.7 45.7 0 10-64.8 64.5l65.1 65.4H265.2a45.7 45.7 0 100 91.4h383.2l-64.6 64.5a45.7 45.7 0 0064.6 64.7l142.8-142.5a45.7 45.7 0 00.1-64.6M512 0a512 512 0 100 1024A512 512 0 00512 0m0 91.4c112.3 0 218 43.8 297.4 123.2A417.8 417.8 0 01932.6 512c0 112.3-43.8 218-123.2 297.4A417.8 417.8 0 01512 932.6c-112.3 0-218-43.8-297.4-123.2A417.8 417.8 0 0191.4 512c0-112.3 43.8-218 123.2-297.4A417.8 417.8 0 01512 91.4", info: "M874.04 149.96c199.95 199.95 199.95 524.14 0 724.08-199.95 199.95-524.13 199.95-724.08 0-199.95-199.95-199.95-524.13 0-724.08 199.95-199.95 524.13-199.95 724.08 0zM512 91.43c-112.34 0-217.95 43.75-297.39 123.18-79.43 79.44-123.18 185.05-123.18 297.4 0 112.33 43.75 217.94 123.18 297.38 79.44 79.43 185.05 123.18 297.4 123.18 112.33 0 217.94-43.75 297.38-123.18C888.82 729.95 932.57 624.34 932.57 512c0-112.34-43.75-217.95-123.18-297.39C729.95 135.18 624.34 91.43 512 91.43zm1.14 318.96a45.73 45.73 0 00-45.11 38.3l-.6 7.42v274.28a45.71 45.71 0 0090.83 7.42l.6-7.42V456.11a45.72 45.72 0 00-45.72-45.72zm0-162.25a45.72 45.72 0 100 91.44 45.72 45.72 0 000-91.44z", question: "M874.04 149.96c199.95 199.95 199.95 524.13 0 724.08-199.95 199.95-524.13 199.95-724.08 0-199.95-199.95-199.95-524.13 0-724.08 199.95-199.95 524.13-199.95 724.08 0zM512 91.43c-112.34 0-217.95 43.75-297.39 123.18-79.43 79.44-123.18 185.05-123.18 297.4 0 112.33 43.75 217.95 123.18 297.38 79.44 79.43 185.05 123.18 297.4 123.18 112.33 0 217.94-43.75 297.38-123.18C888.82 729.96 932.57 624.34 932.57 512c0-112.34-43.75-217.95-123.18-297.39C729.95 135.18 624.34 91.43 512 91.43zm1.14 640.9a45.72 45.72 0 100 91.43 45.72 45.72 0 000-91.44zm-1.14-549c-111.3 0-201.52 90.22-201.52 201.52a45.71 45.71 0 0090.84 7.41l.6-7.47c.03-60.68 49.4-110.03 110.08-110.03 60.7 0 110.1 49.38 110.1 110.09 0 60.7-49.4 110.09-110.1 110.09v.17a45.68 45.68 0 00-44.57 45.65v100.58a45.7 45.7 0 1091.42 0v-60.46c88.7-21.12 154.67-100.87 154.67-196.03 0-111.3-90.22-201.52-201.52-201.52z", support: "M512 932.57c-87.57 0-171.05-26.59-241.23-75.93l106-106a273.98 273.98 0 00135.26 35.62c46.7 0 93.41-11.88 135.22-35.6l105.98 105.98c-70.19 49.34-153.66 75.93-241.23 75.93m-344.64-661.8l105.97 105.98c-47.44 83.63-47.43 186.86.02 270.49L167.36 753.22C118.02 683.04 91.43 599.56 91.43 512c0-87.57 26.59-171.05 75.93-241.23m585.87-103.41L647.29 273.3a273.95 273.95 0 00-135.26-35.61c-46.74 0-93.47 11.9-135.3 35.63L270.77 167.36C340.96 118.02 424.43 91.43 512 91.43s171.05 26.59 241.23 75.93m-370.5 473.91c-71.3-71.3-71.3-187.3 0-258.6a181.7 181.7 0 01129.3-53.55h.02c48.83 0 94.74 19.02 129.28 53.56 71.29 71.29 71.29 187.3 0 258.6a181.66 181.66 0 01-129.3 53.55 181.67 181.67 0 01-129.3-53.56m473.91 111.95L750.68 647.27c47.48-83.65 47.48-186.91.02-270.56l105.94-105.94c49.34 70.18 75.93 153.66 75.93 241.23s-26.59 171.04-75.93 241.22m17.4-603.26c-199.95-199.95-524.13-199.95-724.08 0-199.95 199.95-199.95 524.13 0 724.08 199.95 199.95 524.13 199.95 724.08 0 199.95-199.95 199.95-524.13 0-724.08", alert: "M511.998 623.846c-22.090 0-40-17.906-40-40v-208c0-22.090 17.91-40 40-40v0c22.090 0 40.004 17.91 40.004 40v208c0 22.094-17.914 40-40.004 40v0zM511.998 743.846c22.090 0 40.004-17.906 40.004-40v0c0-22.090-17.914-40-40.004-40v0c-22.090 0-40 17.91-40 40v0c0 22.094 17.91 40 40 40v0zM512.142 211.808l-340.074 589.028h680.148l-340.074-589.028zM512.142 92.51c14.5 0 29 9.526 40 28.58l398.638 690.462c22 38.106 4 69.282-40 69.282h-797.278c-44 0-62-31.176-40-69.282l398.638-690.462c11.002-19.052 25.502-28.58 40.002-28.58v0z", bell: "M901.344 760.018l-57.644-77.648c-7.906-7.906-11.77-38.284-11.71-48.646h0.042v-200.588h-0.364c-6.878-148.106-114.428-269.902-255.792-298.528 0.208-2.1 0.318-4.228 0.318-6.384 0-35.452-28.738-64.194-64.194-64.194-35.458 0-64.194 28.742-64.194 64.194 0 2.19 0.112 4.352 0.326 6.486-141.128 28.802-248.446 150.488-255.316 298.426h-0.364v200.588h0.042c0.058 10.362-3.804 40.74-11.71 48.646l-57.644 77.648c-8.802 8.802-16.35 18.978-16.35 32.208 0 22.092 17.908 40 40 40h255.876c-0.814 5.412-1.28 10.936-1.28 16.576 0 61.43 49.794 111.23 111.23 111.23 61.432 0 111.228-49.8 111.228-111.23 0-5.638-0.464-11.164-1.282-16.576h255.128c22.092 0 40-17.908 40-40 0.004-13.23-7.542-23.404-16.346-32.208zM272.732 436.848c2.862-61.602 29.032-119.104 73.69-161.91 44.786-42.93 103.628-66.62 165.692-66.706h0.26c62.062 0.086 120.906 23.776 165.692 66.706 44.658 42.806 70.828 100.308 73.69 161.91l0.278 5.962v149.384h-479.58v-149.384l0.278-5.962zM543.846 848.8c0 17.22-14.010 31.23-31.228 31.23-17.22 0-31.23-14.010-31.23-31.23 0-6.096 1.784-11.768 4.82-16.576h52.818c3.038 4.81 4.82 10.482 4.82 16.576zM512.484 752.226h-283.922l14.572-19.63c12.064-14.542 20.078-33.27 24.982-58.158 0.146-0.742 0.276-1.496 0.416-2.244h487.42c0.138 0.748 0.268 1.5 0.414 2.244 4.904 24.888 12.918 43.616 24.982 58.158l14.572 19.63h-283.436z", rss: "M256.094 865.048c0 53.020-42.972 96-96 96-53.020 0-96-42.98-96-96 0-53.016 42.98-96 96-96s96 42.984 96 96zM510.020 918.352c-0.018-0.172-0.042-0.344-0.050-0.52-0.054-0.676-0.124-1.34-0.214-2.004-10.582-105.644-57.866-200.46-128.894-271.536v0c-71.074-71.054-165.906-118.352-271.564-128.934-0.664-0.090-1.33-0.16-2.006-0.214-0.174-0.016-0.348-0.040-0.52-0.054-0.254-0.024-0.5-0.024-0.742-0.008-0.64-0.032-1.278-0.098-1.922-0.098-22.098 0-40 17.908-40 40 0 20.582 15.542 37.516 35.536 39.738 0.042 0.004 0.066 0.036 0.106 0.040 84.82 8.098 163.514 45.024 224.542 106.042v0c61.036 61.036 97.964 139.738 106.070 224.574 0.004 0.040 0.036 0.070 0.042 0.106 2.222 19.988 19.156 35.536 39.736 35.536 22.092 0 40-17.902 40-40 0-0.644-0.066-1.282-0.098-1.922 0-0.246 0-0.492-0.022-0.746zM734.688 918.45c-0.004-0.090-0.018-0.186-0.024-0.276-0.040-0.544-0.058-1.102-0.124-1.638-10.972-167.816-83.558-318.804-195.33-430.616h0.002c-111.812-111.788-262.81-184.384-430.644-195.36-0.542-0.060-1.094-0.084-1.642-0.122-0.092-0.008-0.182-0.016-0.272-0.022-0.020-0.002-0.042 0.004-0.054 0.004-0.836-0.052-1.664-0.124-2.512-0.124-22.092 0-40 17.908-40 40 0 21.036 16.246 38.24 36.874 39.842 0.046 0.008 0.078 0.038 0.128 0.042 66.876 4.086 131.786 19.292 193.406 45.358 70.472 29.81 133.78 72.494 188.166 126.874v0c54.394 54.396 97.090 117.71 126.902 188.204 26.064 61.624 41.274 126.532 45.362 193.408 0.004 0.052 0.036 0.080 0.042 0.13 1.604 20.624 18.802 36.87 39.844 36.87 22.090 0 40-17.904 40-40 0-0.85-0.074-1.678-0.126-2.514-0.002-0.024 0.006-0.040 0.002-0.060zM959.126 920.556c-0.002-0.094 0.008-0.164 0.004-0.262-10.342-231.204-108.314-439.604-261.486-592.796v-0.002c-153.2-153.19-361.61-251.174-592.828-261.518-0.096-0.004-0.168 0.006-0.262 0.004-0.176-0.004-0.348-0.030-0.524-0.030-22.098 0-40 17.91-40 40 0 20.988 16.168 38.164 36.716 39.834 0.184 0.042 0.356 0.086 0.566 0.098 97.040 4.314 191.186 25.538 280.376 63.258 97.14 41.090 184.406 99.928 259.368 174.876v0c74.96 74.964 133.81 162.24 174.908 259.398 37.718 89.19 58.946 183.336 63.26 280.376 0.010 0.208 0.052 0.38 0.096 0.562 1.67 20.552 18.848 36.72 39.834 36.72 22.092 0 40-17.906 40-40-0-0.17-0.024-0.342-0.028-0.518z", edit: "M948.56 263.376c12.704-12.708 15.072-31.836 7.11-46.936-1.84-3.524-4.232-6.832-7.192-9.792-0.286-0.286-0.594-0.528-0.886-0.8l-129.318-128.634c-0.048-0.048-0.088-0.106-0.138-0.154-7.812-7.812-18.050-11.716-28.292-11.714-10.242-0.004-20.484 3.902-28.296 11.714-0.064 0.066-0.12 0.136-0.184 0.204l-636.168 636.168c-5.868 5.134-10.21 11.958-12.298 19.748l-47.606 177.664c-3.7 13.804 0.248 28.534 10.352 38.638 7.602 7.6 17.816 11.714 28.288 11.714 3.452 0 6.93-0.446 10.352-1.364l177.664-47.606c7.296-1.956 13.732-5.904 18.74-11.216l521.486-521.484c1.126-0.904 2.222-1.87 3.268-2.914 1.042-1.044 2.006-2.138 2.91-3.264l107.75-107.748c0.836-0.71 1.668-1.432 2.458-2.224zM806.9 291.66l-73.592-73.202 56.61-56.61 73.594 73.2-56.612 56.612zM281.566 816.996l-73.4-73.4 468.572-468.568 73.594 73.202-468.766 468.766zM160.496 864.628l11.742-43.822 32.080 32.080-43.822 11.742z", paintbrush: "M946.58 293.66c12.704-12.708 15.072-31.836 7.108-46.938-1.838-3.524-4.23-6.83-7.19-9.79-0.282-0.282-0.588-0.52-0.876-0.792l-129.338-128.654c-0.046-0.046-0.084-0.098-0.13-0.144-7.814-7.812-18.056-11.718-28.296-11.714-10.24 0-20.48 3.906-28.292 11.714-0.064 0.066-0.12 0.138-0.184 0.206l-557.048 557.048c-2.194 2.192-4.042 4.59-5.622 7.11-70.624 87.486-17.922 195.43-174.738 239.554 0 0 64.758 18.11 144.33 18.11 74.374 0 161.678-15.824 221.23-77.020 0.394-0.364 0.808-0.696 1.192-1.078l1.734-1.734c0.852-0.798 1.678-1.578 2.504-2.426 0.348-0.356 0.668-0.728 1.010-1.086l168.756-168.756c1.126-0.906 2.224-1.872 3.272-2.918 1.044-1.044 2.008-2.14 2.914-3.266l375.212-375.212c0.834-0.706 1.664-1.424 2.452-2.214zM537.462 589.402l-73.594-73.206 324.068-324.064 73.594 73.2-324.068 324.070zM388.178 667.684c-13.288-13.632-28.584-23.974-44.78-31.016l63.902-63.902 73.596 73.204-64.246 64.248c-6.498-15.23-15.964-29.698-28.472-42.534zM229.848 791.928c8.294-30.346 14.852-54.332 32.416-73.862 0.83-0.864 2.664-2.702 4.26-4.286 8.030-6.792 17.534-8.246 24.198-8.246 14.386 0 29.026 6.554 40.162 17.98 19.592 20.106 21.934 49.238 5.596 66.874l-1.712 1.712c-0.798 0.752-1.612 1.524-2.462 2.354l-0.86 0.84-0.834 0.864c-30.666 31.79-75.914 45.424-118.104 50.542 7.53-18.888 12.598-37.426 17.34-54.772z", close: "M150 150a512 512 0 11724 724 512 512 0 01-724-724zm69.3 64.2A418.5 418.5 0 0095.9 512a418.5 418.5 0 00123.4 297.8A418.5 418.5 0 00517 933.2 418.5 418.5 0 00815 809.8 418.5 418.5 0 00938.4 512 418.5 418.5 0 00815 214.2 418.5 418.5 0 00517 90.8a418.5 418.5 0 00-297.8 123.4zM655 304a46 46 0 0165 65L577 512l143 143a46 46 0 11-65 65L512 577 369 720a46 46 0 11-65-65l143-143-143-143a46 46 0 0165-65l143 143 143-143z", closeAlt: "M586.7 512L936 861.4a52.8 52.8 0 0 1-74.6 74.7L512 586.7 162.6 936A52.8 52.8 0 0 1 88 861.4L437.3 512 88 162.6A52.8 52.8 0 1 1 162.6 88L512 437.3 861.4 88a52.8 52.8 0 1 1 74.7 74.7L586.7 512z", trash: "M919.5 225.208h-215.5v-120.080c0-20.344-15.192-37.096-34.836-39.632-1.696-0.216-3.41-0.372-5.164-0.372h-304.004c-1.754 0-3.468 0.152-5.164 0.372-19.644 2.54-34.836 19.292-34.836 39.628v120.084h-215.996c-22.090 0-40 17.912-40 40.002 0 22.092 17.91 40 40 40h27.216l53.916 615.914h0.214c0 22.092 17.91 40 40 40h573.372c22.094 0 40-17.91 40-40h0.148l53.916-615.914h26.716c22.090 0 40-17.91 40-40s-17.908-40.002-39.998-40.002zM399.996 145.126h224.004v80.082h-224.004v-80.082zM762.062 881.124h-500.124l-50.414-575.912h600.954l-50.416 575.912zM632.004 697.124v-240c-0.004-22.092 17.906-40.002 40-40.002 22.090 0.002 40 17.908 40 40.002l-0.004 240.002c0.004 22.088-17.906 39.996-39.996 39.998-22.094 0.002-40.004-17.906-40-40zM311.996 697.124v-240c-0.004-22.092 17.906-40.002 40-40.002 22.090 0.002 40 17.908 40 40.002l-0.004 240.002c0.004 22.088-17.906 39.996-39.996 39.998-22.094 0.002-40.004-17.906-40-40zM472 697.124v-240c-0.004-22.092 17.906-40.002 40-40.002 22.090 0.002 40 17.908 40 40.002l-0.004 240.002c0.004 22.088-17.906 39.996-39.996 39.998-22.094 0.002-40.004-17.906-40-40z", cross: "M1013.286 955.716l-443.72-443.716 443.718-443.718c15.622-15.622 15.62-40.948-0.004-56.566-15.618-15.622-40.942-15.622-56.562 0l-443.716 443.718-443.72-443.718c-15.62-15.624-40.946-15.622-56.566 0-15.622 15.62-15.622 40.944 0 56.566l443.722 443.718-443.722 443.722c-15.622 15.618-15.62 40.942 0 56.56s40.948 15.622 56.566 0l443.72-443.718 443.722 443.718c15.618 15.624 40.942 15.622 56.56 0 15.62-15.618 15.622-40.944 0.002-56.566z", delete: "M874 150A512 512 0 10150 874 512 512 0 00874 150zm-659.4 64.6A417.8 417.8 0 01512 91.4c97 0 188.9 32.6 263.3 92.6L184 775.3A417.4 417.4 0 0191.4 512c0-112.4 43.7-218 123.2-297.4zm594.8 594.8A417.8 417.8 0 01512 932.6c-97 0-189-32.7-263.3-92.6L840 248.7A417.4 417.4 0 01932.6 512c0 112.3-43.8 218-123.2 297.4z", add: "M512-.2a512 512 0 110 1024 512 512 0 010-1024zm0 91.4c-112.3 0-218 43.8-297.4 123.2A417.8 417.8 0 0091.4 511.8c0 112.4 43.8 218 123.2 297.4A417.8 417.8 0 00512 932.4c112.3 0 218-43.8 297.4-123.2a417.8 417.8 0 00123.2-297.4c0-112.3-43.8-218-123.2-297.4A417.8 417.8 0 00512 91.2zm1.1 129.2a45.7 45.7 0 0145.7 45.7v201.1H760a45.7 45.7 0 010 91.5H558.8v201.1a45.7 45.7 0 11-91.4 0V558.7H266.3a45.7 45.7 0 110-91.5h201.1V266.1a45.7 45.7 0 0145.7-45.7z", subtract: "M512 0a512 512 0 110 1024A512 512 0 01512 0zm4 94A418 418 0 0094 515a418 418 0 00422 422 418 418 0 00421-422A418 418 0 00516 94zm244 372a46 46 0 010 92H264a46 46 0 110-92z", plus: "M921.002 473h-368.008v-368.004c0.002-22.090-17.906-39.996-39.996-39.996-22.088 0-39.998 17.91-39.998 40v368h-368.002c-22.094 0-40 17.908-39.998 40-0.002 22.090 17.904 39.996 39.996 39.996l368.004-0.002v368.010c0 22.094 17.908 40 40 39.996 22.090 0.004 39.996-17.902 39.996-39.996v-368.010h368.010c22.090 0.002 39.994-17.906 39.994-39.996-0-22.088-17.908-39.998-39.998-39.998z", document: "M764 1c12 0 24 4 32 13l129 132c9 8 13 20 13 31v802c0 24-20 44-45 44H131c-25 0-45-20-45-44V45c0-24 20-44 45-44h633zm-48 89H175v844h674l-1-707h-87c-22 0-40-15-44-36v-8l-1-93zm-16 584a45 45 0 0 1 8 89H324a45 45 0 0 1-8-88l8-1h376zm0-187a45 45 0 0 1 8 89l-8 1H324a45 45 0 0 1-8-89l8-1h376zm0-186a45 45 0 0 1 8 88l-8 1H324a45 45 0 0 1-8-89h384z", folder: "M571 274h327c23 0 41 18 41 41v488c0 22-18 40-41 40H126c-23 0-41-18-41-40V242c0-34 27-61 61-61h317c18 0 35 7 47 21l61 72zm-119-8H170v492h684V359H531l-79-93z", component: "M171 469h298V171H246c-42 0-75 33-75 75v223zm0 86v223c0 42 33 75 75 75h223V555H171zm682-86V246c0-42-33-75-75-75H555v298h298zm0 86H555v298h223c42 0 75-33 75-75V555zM256 85h512c94 0 171 77 171 171v512c0 94-77 171-171 171H256c-94 0-171-77-171-171V256c0-94 77-171 171-171z", calendar: "M920.036 160.030h-112.004v-72c0-22.092-17.906-40.004-40-40.004-22.090 0-40 17.906-40 40v72.004h-432v-72c0-22.092-17.906-40.004-40-40.004-22.090 0-40 17.906-40 40v72.004h-112.004c-1.38 0-2.746 0.070-4.090 0.208-20.168 2.046-35.91 19.080-35.91 39.792v688c0 22.090 17.91 40 40 40h816.008c22.098 0 40-17.91 40-40v-688c0-22.094-17.908-40-40-40zM356.032 848.026h-212.004v-142.662h212.004v142.662zM356.032 665.364h-212.004v-162.664h212.004v162.664zM356.032 462.7h-212.004v-142.662h212.004v142.662zM628.032 848.026h-232v-142.662h232v142.662zM628.032 665.364h-232v-162.664h232v162.664zM628.032 462.7h-232v-142.662h232v142.662zM880.036 848.026h-212.004v-142.662h212.004v142.662zM880.036 665.364h-212.004v-162.664h212.004v162.664zM880.036 462.7h-212.004v-142.662h212.004v142.662z", graphline: "M820.536 489.23c-15.624 15.618-40.954 15.618-56.57 0l-42.006-42.002-169.898 169.9c-7.822 7.82-18.076 11.722-28.326 11.712-10.248 0.008-20.496-3.894-28.314-11.712l-96.178-96.182-140.67 140.674c-15.624 15.622-40.954 15.618-56.57-0.004-15.624-15.618-15.624-40.946 0-56.566l168.946-168.946c7.812-7.816 18.058-11.72 28.3-11.716 10.238-0.002 20.476 3.904 28.29 11.716l96.204 96.204 168.91-168.91c0.33-0.356 0.626-0.73 0.972-1.076 7.824-7.824 18.084-11.726 28.34-11.712 10.252-0.012 20.508 3.892 28.332 11.714 0.346 0.346 0.64 0.72 0.972 1.074l69.266 69.266c15.62 15.618 15.616 40.942 0 56.566zM880 144h-736v736h736v-736zM920 64c22.092 0 40 17.908 40 40v816c0 22.092-17.908 40-40 40h-816c-22.092 0-40-17.908-40-40v-816c0-22.092 17.908-40 40-40h816z", docchart: "M919.938 128h-816.008c-1.38 0-2.746 0.070-4.090 0.208-20.168 2.046-35.91 19.080-35.91 39.792v688c0 22.090 17.91 40 40 40h816.008c22.098 0 40-17.91 40-40v-688c0-22.094-17.906-40-40-40zM395.934 470.67h232v162.664h-232v-162.664zM355.934 633.334h-212.004v-162.664h212.004v162.664zM395.934 430.67v-142.662h232v142.662h-232zM667.934 470.67h212.004v162.664h-212.004v-162.664zM667.934 430.67v-142.662h212.004v142.662h-212.004zM355.934 288.008v142.662h-212.004v-142.662h212.004zM143.93 673.334h212.004v142.662h-212.004v-142.662zM395.934 673.334h232v142.662h-232v-142.662zM667.934 673.334h212.004v142.662h-212.004v-142.662z", doclist: "M919.938 128h-816.008c-1.38 0-2.746 0.070-4.090 0.208-20.168 2.046-35.91 19.080-35.91 39.792v688c0 22.090 17.91 40 40 40h816.008c22.098 0 40-17.91 40-40v-688c-0-22.094-17.906-40-40-40zM143.93 288.008h736.008v527.988h-736.008v-527.988zM248 400.004c0-22.090 17.91-40 40-40h448c22.094 0 40 17.906 40 40 0 22.090-17.906 40-40 40h-448c-22.090 0-40-17.91-40-40zM776 552.002c0 22.094-17.906 40-40 40h-448c-22.090 0-40-17.906-40-40 0-22.090 17.91-40 40-40h448c22.094 0 40 17.91 40 40zM776 704c0 22.094-17.906 40-40 40h-448c-22.090 0-40-17.906-40-40 0-22.090 17.91-40 40-40h448c22.094 0 40 17.91 40 40z", category: "M925.224 256.37c-1.694-0.216-3.408-0.37-5.162-0.37h-816c-1.754 0-3.468 0.152-5.162 0.37-19.646 2.538-34.838 19.292-34.838 39.63v624c0 22.094 17.91 40 40 40h816c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 0.184-0.308 0.282-0.458 0.612-0.924 1.2-1.862 1.722-2.838 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.61 4.704-12.008 4.704-18.808v-624.004c0-20.342-15.19-37.096-34.838-39.632zM144.062 880v-544h736v544h-736zM896.11 180c0 11.044-8.954 20-20 20h-728.032c-11.046 0-20-8.956-20-20v0c0-11.046 8.954-20 20-20h728.032c11.046 0 20 8.954 20 20v0zM832.094 84c0 11.044-8.954 20-20 20h-600c-11.046 0-20-8.956-20-20v0c0-11.046 8.954-20 20-20h600c11.046 0 20 8.954 20 20v0z", grid: "M437.162 552.368c-1.694-0.216-3.408-0.37-5.162-0.37h-263.978c-1.754 0-3.468 0.152-5.162 0.37-19.646 2.538-34.838 19.292-34.838 39.63v264.040c0 22.094 17.91 40 40 40h263.978c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 0.184-0.308 0.282-0.458 0.612-0.924 1.2-1.862 1.722-2.838 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.61 4.704-12.008 4.704-18.808v-264.044c0-20.34-15.19-37.094-34.838-39.632zM208.022 816.038v-184.040h183.978v184.040h-183.978zM437.162 128.4c-1.694-0.216-3.408-0.37-5.162-0.37h-263.978c-1.754 0-3.468 0.152-5.162 0.37-19.646 2.538-34.838 19.292-34.838 39.63v263.968c0 22.094 17.91 40 40 40h263.978c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 0.184-0.308 0.282-0.458 0.612-0.924 1.2-1.862 1.722-2.838 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.61 4.704-12.008 4.704-18.808v-263.972c0-20.342-15.19-37.096-34.838-39.632zM208.022 392v-183.968h183.978v183.968h-183.978zM861.212 552.368c-1.694-0.216-3.408-0.37-5.162-0.37h-264.050c-1.754 0-3.468 0.152-5.162 0.37-19.646 2.538-34.838 19.292-34.838 39.63v264.040c0 22.094 17.91 40 40 40h264.048c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 0.184-0.308 0.282-0.458 0.612-0.924 1.2-1.862 1.722-2.838 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.61 4.704-12.008 4.704-18.808v-264.044c0.002-20.34-15.19-37.094-34.836-39.632zM632 816.038v-184.040h184.048v184.040h-184.048zM861.212 128.4c-1.694-0.216-3.408-0.37-5.162-0.37h-264.050c-1.754 0-3.468 0.152-5.162 0.37-19.646 2.538-34.838 19.292-34.838 39.63v263.968c0 22.094 17.91 40 40 40h264.048c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 0.184-0.308 0.282-0.458 0.612-0.924 1.2-1.862 1.722-2.838 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.61 4.704-12.008 4.704-18.808v-263.972c0.002-20.342-15.19-37.096-34.836-39.632zM632 392v-183.968h184.048v183.968h-184.048z", copy: "M960.132 210.186c0-0.444-0.050-0.874-0.066-1.312-0.024-0.684-0.044-1.366-0.104-2.046-0.060-0.74-0.158-1.468-0.26-2.198-0.080-0.564-0.156-1.128-0.258-1.692-0.146-0.792-0.328-1.566-0.518-2.34-0.124-0.508-0.244-1.014-0.39-1.518-0.224-0.784-0.488-1.548-0.76-2.312-0.176-0.49-0.344-0.98-0.538-1.466-0.302-0.754-0.642-1.486-0.988-2.216-0.224-0.472-0.436-0.946-0.68-1.41-0.398-0.762-0.838-1.496-1.284-2.228-0.242-0.396-0.466-0.798-0.722-1.19-0.608-0.924-1.262-1.81-1.942-2.678-0.132-0.168-0.248-0.346-0.382-0.512-0.98-1.212-2.028-2.364-3.14-3.454l-104.020-104.9c-3.714-3.714-7.988-6.518-12.542-8.464-0.088-0.040-0.174-0.084-0.262-0.122-0.994-0.418-2.006-0.774-3.024-1.108-0.242-0.080-0.474-0.176-0.72-0.252-0.942-0.288-1.894-0.516-2.854-0.732-0.334-0.076-0.658-0.176-0.996-0.244-0.998-0.2-2.004-0.336-3.010-0.458-0.306-0.038-0.606-0.1-0.912-0.13-1.322-0.13-2.65-0.204-3.976-0.204h-391.784c-1.754 0-3.468 0.152-5.162 0.372-19.646 2.538-34.838 19.29-34.838 39.628v145.516h-279.874c-1.754 0-3.468 0.152-5.162 0.372-19.646 2.538-34.838 19.29-34.838 39.628v628.28c0 22.094 17.91 40 40 40h496.118c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 2.084-3.466 2.128-3.548 2.992-5.612 4.704-12.010 4.704-18.808 0 0 0 0 0-0.004v-145.518h279.874c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 2.084-3.466 2.128-3.548 2.992-5.612 4.704-12.010 4.704-18.808 0 0 0 0 0-0.004v-521.828c0.008-0.23-0.016-0.458-0.014-0.688 0.002-0.202 0.028-0.39 0.028-0.584zM144.124 878.792v-548.278h311.752v65.186c0 22.090 17.91 40 40 40h64.366v443.092h-416.118zM640.244 693.278v-296.31c0.006-0.23-0.018-0.458-0.014-0.688 0.004-0.196 0.030-0.382 0.030-0.578 0-0.444-0.052-0.874-0.066-1.312-0.024-0.684-0.044-1.366-0.104-2.046-0.062-0.74-0.16-1.468-0.262-2.198-0.078-0.564-0.152-1.128-0.258-1.692-0.144-0.792-0.324-1.566-0.516-2.34-0.124-0.508-0.246-1.014-0.39-1.518-0.226-0.784-0.488-1.548-0.76-2.312-0.174-0.49-0.342-0.98-0.538-1.466-0.302-0.754-0.64-1.486-0.988-2.216-0.222-0.472-0.438-0.946-0.68-1.41-0.398-0.762-0.838-1.496-1.284-2.228-0.242-0.396-0.466-0.798-0.724-1.19-0.606-0.924-1.262-1.81-1.942-2.678-0.13-0.168-0.246-0.346-0.382-0.512-0.978-1.212-2.028-2.364-3.138-3.454l-104.020-104.9c-3.714-3.714-7.988-6.518-12.542-8.464-0.088-0.040-0.172-0.084-0.262-0.122-0.994-0.418-2.004-0.774-3.024-1.108-0.242-0.080-0.476-0.176-0.72-0.252-0.942-0.288-1.896-0.516-2.854-0.732-0.334-0.076-0.658-0.176-0.996-0.244-0.998-0.2-2.004-0.336-3.012-0.458-0.304-0.038-0.602-0.1-0.91-0.13-1.322-0.13-2.648-0.204-3.976-0.204h-31.916v-105.516h311.752v65.186c0 22.090 17.91 40 40 40h64.366v443.092h-239.87z", certificate: "M832.032 384.032c0-176.728-143.266-320-320-320s-320 143.272-320 320c0 104.662 50.25 197.584 127.938 255.966v311.5c0 16.174 9.74 30.756 24.682 36.952 4.954 2.052 10.152 3.050 15.31 3.050 10.402 0 20.626-4.060 28.276-11.702l123.726-123.58 123.772 123.332c11.452 11.412 28.644 14.804 43.574 8.608 14.93-6.2 24.66-20.776 24.66-36.942v-311.124c77.756-58.376 128.062-151.342 128.062-256.060zM272.032 384.032c0-64.106 24.964-124.374 70.292-169.706 45.33-45.33 105.6-70.294 169.708-70.294s124.376 24.964 169.708 70.294c45.33 45.332 70.292 105.6 70.292 169.706s-24.964 124.376-70.292 169.704c-45.33 45.33-105.6 70.294-169.708 70.294s-124.376-24.964-169.708-70.294c-45.328-45.328-70.292-105.598-70.292-169.704zM623.968 854.89l-83.804-83.508c-15.622-15.564-40.898-15.552-56.502 0.034l-83.694 83.594v-171.17c34.878 13.042 72.632 20.192 112.062 20.192 39.382 0 77.094-7.13 111.938-20.142v171z", print: "M925.922 304.496c-1.698-0.218-3.41-0.37-5.166-0.37h-88.64v-93.548c0.006-0.21-0.016-0.422-0.014-0.634 0.004-0.212 0.036-0.416 0.036-0.63 0-0.478-0.054-0.942-0.074-1.416-0.024-0.636-0.042-1.27-0.094-1.906-0.066-0.776-0.168-1.54-0.276-2.302-0.074-0.534-0.146-1.066-0.242-1.596-0.15-0.82-0.338-1.624-0.538-2.424-0.12-0.48-0.23-0.958-0.37-1.436-0.234-0.812-0.506-1.608-0.792-2.398-0.164-0.462-0.322-0.924-0.504-1.38-0.318-0.788-0.668-1.552-1.036-2.316-0.208-0.436-0.406-0.88-0.628-1.312-0.424-0.802-0.88-1.574-1.352-2.344-0.218-0.358-0.422-0.724-0.656-1.078-0.636-0.972-1.324-1.91-2.042-2.82-0.098-0.124-0.182-0.252-0.282-0.376-0.988-1.224-2.048-2.388-3.172-3.488l-104.004-104.882c-3.696-3.696-7.948-6.486-12.466-8.432-0.122-0.050-0.224-0.11-0.344-0.16-0.974-0.41-1.966-0.756-2.962-1.084-0.262-0.086-0.512-0.19-0.78-0.272-0.926-0.284-1.87-0.506-2.812-0.722-0.346-0.080-0.684-0.182-1.034-0.252-0.988-0.198-1.988-0.334-2.988-0.456-0.31-0.040-0.618-0.102-0.93-0.134-1.324-0.132-2.652-0.204-3.978-0.204h-455.67c-1.754 0-3.468 0.152-5.162 0.37-19.646 2.538-34.838 19.29-34.838 39.63v200h-87.356c-1.754 0-3.468 0.152-5.164 0.37-19.644 2.538-34.836 19.29-34.836 39.63v320c0 22.094 17.91 40 40 40h87.368v216c0 22.094 17.91 40 40 40h560.006c13.81 0 25.982-6.996 33.17-17.636 0.102-0.146 0.184-0.306 0.282-0.458 0.612-0.922 1.2-1.86 1.722-2.836 0.046-0.082 0.080-0.17 0.124-0.254 2.994-5.612 4.704-12.008 4.704-18.808 0 0 0 0 0-0.004v-216h88.624c13.808 0 25.982-6.996 33.168-17.636 0.104-0.148 0.186-0.308 0.286-0.458 0.612-0.922 1.198-1.862 1.72-2.836 0.046-0.082 0.082-0.172 0.124-0.256 2.994-5.61 4.702-12.008 4.702-18.806 0 0 0 0 0-0.004v-320c0-20.344-15.186-37.096-34.834-39.636zM272.116 144.128h375.634v65.186c0 1.38 0.070 2.746 0.208 4.090 2.048 20.168 19.080 35.91 39.792 35.91h64.366v54.812h-480v-159.998zM272.124 880.126v-327.998h480.006v327.998zM880.756 384.128v239.998h-48.624v-111.998c0-20.34-15.19-37.092-34.836-39.63-1.694-0.218-565.17-0.372-565.17-0.372-1.754 0-3.468 0.152-5.162 0.372-19.646 2.538-34.838 19.29-34.838 39.628v112h-47.368v-239.998zM664.124 608.126c22.092 0 40 17.908 40 40s-17.908 40-40 40h-304c-22.092 0-40-17.908-40-40s17.908-40 40-40h304zM704.124 784.126c0 22.092-17.908 40-40 40h-304c-22.092 0-40-17.908-40-40s17.908-40 40-40h304c22.092 0 40 17.908 40 40z", listunordered: "M961 233c0 22.090-17.908 40-40 40h-607.996c-22.090 0-40-17.908-40-40v0c0-22.090 17.908-40.002 40-40.002h607.996c22.092 0 40 17.912 40 40.002v0zM961 793c0-22.090-17.908-40.002-40-40.002h-607.996c-22.092 0-40 17.912-40 40.002v0c0 22.092 17.91 40 40 40h607.996c22.092 0 40-17.91 40-40v0zM961 606.332c0-22.090-17.908-40-40-40h-607.996c-22.092 0-40 17.91-40 40v0c0 22.094 17.91 40 40 40h607.996c22.092 0 40-17.91 40-40v0zM961 419.668c0-22.090-17.908-40.004-40-40.004h-607.996c-22.092 0-40 17.914-40 40.004v0c0 22.090 17.91 40 40 40h607.996c22.092-0 40-17.91 40-40v0zM129 168.998c-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64-28.654-64-64-64zM129 728.998c-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64-28.654-64-64-64zM129 542.332c-35.346 0-64 28.652-64 64 0 35.344 28.654 64 64 64s64-28.656 64-64c0-35.348-28.654-64-64-64zM129 355.664c-35.346 0-64 28.656-64 64 0 35.348 28.654 64 64 64s64-28.652 64-64c0-35.344-28.654-64-64-64z", graphbar: "M324.832 513c22.090 0 40 17.91 40 40v304c0 22.090-17.906 40-40 40v0c-22.090 0-40-17.906-40-40v-304c0-22.090 17.91-40 40-40v0zM884.832 128.998c-22.090 0-40 17.906-40 40v688.002c0 22.094 17.91 40 40 40v0c22.094 0 40-17.91 40-40v-688.002c0-22.094-17.91-40-40-40v0zM698.164 256.998c-22.090 0-40 17.91-40 40v560.002c0 22.094 17.91 40 40 40v0c22.094 0 40-17.91 40-40v-560.002c0-22.090-17.91-40-40-40v0zM511.5 384.998c-22.090 0-40.004 17.91-40.004 40v432.002c0 22.094 17.914 40 40.004 40v0c22.090 0 40-17.91 40-40v-432.002c0-22.090-17.91-40-40-40v0zM139.168 641c-22.090 0-40 17.91-40 40v176c0 22.094 17.91 40 40 40v0c22.094 0 40-17.91 40-40v-176c0-22.090-17.91-40-40-40v0z", menu: "M960 232c0 22.092-17.908 40-40.002 40h-815.996c-22.092 0-40-17.908-40-40v0c0-22.090 17.908-40 40-40h815.998c22.092 0 40 17.91 40 40v0zM768 416c0 22.090-17.908 40-40 40h-624c-22.090 0-40-17.908-40-40v0c0-22.090 17.908-40.002 40-40.002h624c22.092 0.002 40 17.914 40 40.002v0zM832 608c0 22.092-17.906 40.002-40 40.002h-688c-22.090 0-40-17.91-40-40.002v0c0-22.090 17.908-40 40-40h688c22.094 0 40 17.912 40 40v0zM576 792c0 22.094-17.91 40-40.002 40h-431.998c-22.090 0-40-17.906-40-40v0c0-22.094 17.908-40.002 40-40.002h432c22.094 0.002 40 17.912 40 40.002v0z", filter: "M962.030 168.032c0 22.092-17.908 40-40.002 40h-815.996c-22.092 0-40-17.908-40-40v0c0-22.090 17.908-40 40-40h815.998c22.092 0 40 17.908 40 40v0zM770 544.034c0 22.090-17.908 40-40 40h-432c-22.090 0-40-17.908-40-40v0c0-22.090 17.908-40.002 40-40.002h432c22.090 0 40 17.912 40 40.002v0zM642.030 728.032c0 22.094-17.91 40-40.002 40h-175.998c-22.090 0-40-17.906-40-40v0c0-22.094 17.908-40.002 40-40.002h176c22.094 0.002 40 17.91 40 40.002v0zM866 352.030c0 22.092-17.906 40.002-40 40.002h-624c-22.090 0-40-17.91-40-40.002v0c0-22.090 17.908-40 40-40h624c22.092 0 40 17.91 40 40v0zM512.030 928.034c22.090 0 40.004-17.906 40.004-40v0c0-22.090-17.914-40-40.004-40v0c-22.090 0-40 17.91-40 40v0c0 22.092 17.91 40 40 40v0z", ellipsis: "M184 393c66.274 0 120 53.73 120 120s-53.726 120-120 120c-66.286 0-120-53.73-120-120s53.714-120 120-120zM512 393c66.272 0 120 53.73 120 120s-53.728 120-120 120c-66.286 0-120-53.73-120-120s53.714-120 120-120zM840 393c66.272 0 120 53.73 120 120s-53.728 120-120 120c-66.286 0-120-53.73-120-120s53.714-120 120-120z", cog: "M512 288a224 224 0 0 0 0 448h2a225 225 0 0 0 52-7 47 47 0 0 0-23-90 130 130 0 0 1-31 3 131 131 0 1 1 127-101v1a47 47 0 1 0 91 19 224 224 0 0 0-218-273zM409 0c-67 14-131 40-186 77v98c0 13-6 25-15 33-8 9-20 15-33 15H77C40 278 14 341 0 409l69 68c9 10 14 22 13 34 1 13-4 25-13 34L0 614c14 68 41 132 78 188h97c13 0 25 6 33 15 9 8 15 20 15 33v97c55 37 119 63 187 77l68-69a46 46 0 0 1 36-13c11 0 23 4 32 13l69 69c68-14 131-40 186-77v-98c0-13 6-25 15-34 8-8 20-14 33-14h98c37-56 63-119 77-186l-69-70c-10-9-14-21-14-34 0-12 4-24 14-34l69-69c-14-67-40-129-77-184h-98c-13 0-25-6-33-15-9-8-15-20-15-33V77C746 40 683 14 615 0l-69 69a46 46 0 0 1-35 14c-11 0-23-5-33-14L409 0zm-28 103l32 32c26 26 61 41 98 41h3c37 0 72-15 98-41l32-31c22 7 43 16 64 26v46c0 37 15 73 42 99 26 27 62 42 99 42h45c11 20 19 41 26 63l-31 31c-26 27-41 63-41 100 0 38 15 74 41 100l32 32c-8 22-17 44-27 65h-45c-37 0-73 15-99 42-27 26-42 62-42 99v44c-21 11-42 20-65 27l-31-31c-26-26-61-41-98-41h-3c-37 0-72 15-98 41l-32 32c-22-8-44-17-65-28v-43c0-37-15-73-42-99-26-27-62-42-99-42h-44c-11-21-20-44-28-67l32-31c26-26 41-62 40-100 1-37-14-73-40-100l-31-30c7-23 16-44 26-65h45c37 0 73-15 99-42 27-26 42-62 42-99v-45c21-10 43-19 65-27z", wrench: "M959.438 274.25c0-22.090-17.914-40-40.004-40-11.16 0-21.242 4.582-28.496 11.954l-60.152 60.148c-15.622 15.622-40.946 15.618-56.566-0.004l-56.57-56.566c-15.622-15.622-15.622-40.95 0-56.57l59.55-59.546c7.75-7.292 12.614-17.618 12.614-29.102 0-22.090-17.914-40-40.004-40-1.598 0-3.164 0.122-4.71 0.304-0.012 0-0.020-0.008-0.032-0.004-94.958 11.586-168.504 92.492-168.504 190.574 0 23.528 4.238 46.058 11.98 66.886l-503.078 503.074c-1.496 1.496-2.8 3.102-4.012 4.758-10.914 13.676-17.454 30.992-17.454 49.848 0 44.188 35.818 79.996 79.996 79.996 18.906 0 36.27-6.574 49.964-17.54 1.614-1.188 3.18-2.464 4.64-3.926l503.078-503.078c20.828 7.742 43.36 11.98 66.882 11.98 97.988 0 178.828-73.402 190.54-168.222v-0.012c0.2-1.628 0.338-3.272 0.338-4.952zM151.996 912c-22.090 0-40-17.906-40-40 0-22.090 17.91-40 40-40s40.004 17.91 40.004 40c0 22.094-17.914 40-40.004 40z", nut: "M512 286a229 229 0 0 0-233 226c0 124 104 225 233 225h2a240 240 0 0 0 54-7c21-5 35-24 35-45a48 48 0 0 0-59-45 139 139 0 0 1-32 3c-75 0-136-59-136-131 0-73 61-132 136-132a134 134 0 0 1 132 161v1l-2 9c0 26 22 47 49 47a48 48 0 0 0 47-37c4-16 6-33 6-49 0-125-104-226-232-226m0-286c-16 0-33 4-47 12L90 223a91 91 0 0 0-47 79v420c0 33 18 63 47 79l375 211a96 96 0 0 0 94 0l375-211c29-16 47-46 47-79V302c0-33-18-63-47-79L559 12c-14-8-31-12-47-12m0 91l375 211v420L512 933 137 722V302L512 91", camera: "M925.164 208.372c-1.694-0.218-3.408-0.372-5.162-0.372h-471.968v-39.962c0-20.344-15.192-37.096-34.836-39.63-1.696-0.218-3.41-0.374-5.164-0.374h-176.004c-1.754 0-3.468 0.152-5.164 0.374-19.644 2.538-34.836 19.29-34.836 39.626v39.966h-88.032c-1.754 0-3.468 0.152-5.162 0.372-19.646 2.536-34.838 19.29-34.838 39.628v528c0 22.094 17.91 40 40 40h816.004c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 0.184-0.308 0.282-0.46 0.612-0.922 1.2-1.86 1.722-2.836 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.61 4.704-12.008 4.704-18.808v-528.004c-0-20.342-15.192-37.096-34.838-39.63zM880.002 736h-736.004v-448h736.004v448zM512 402.522c60.368 0 109.478 49.112 109.478 109.478s-49.112 109.478-109.478 109.478-109.478-49.112-109.478-109.478 49.11-109.478 109.478-109.478zM512 322.522c-104.644 0-189.478 84.832-189.478 189.478 0 104.644 84.834 189.478 189.478 189.478 104.646 0 189.478-84.834 189.478-189.478 0-104.646-84.832-189.478-189.478-189.478v0z", eye: "M1008.714 490.522c-9.002-12.594-223.276-308.808-496.684-308.808-273.444 0-487.682 296.214-496.684 308.808l-15.316 21.49 15.316 21.466c9.002 12.618 223.24 308.808 496.684 308.808 273.408 0 487.682-296.19 496.684-308.808l15.316-21.466-15.316-21.49zM807.68 631.688c-46 39.142-92.558 70.064-138.382 91.904-53.874 25.676-106.786 38.694-157.266 38.694-50.49 0-103.406-13.018-157.282-38.696-45.826-21.838-92.382-52.758-138.378-91.902-53.708-45.706-94.302-92.122-116.61-119.672 22.36-27.602 63.028-74.094 116.612-119.696 45.996-39.146 92.554-70.068 138.378-91.908 53.876-25.678 106.792-38.698 157.28-38.698 50.48 0 103.39 13.020 157.264 38.696 45.824 21.842 92.382 52.764 138.382 91.91 53.602 45.614 94.264 92.098 116.624 119.696-22.306 27.544-62.898 73.954-116.622 119.672zM692.032 512.036c0 99.41-80.588 180-180 180s-180-80.59-180-180c0-99.406 80.588-179.998 180-179.998s180 80.59 180 179.998z", eyeclose: "M75.744 948.314c-15.62-15.62-15.62-40.948 0-56.564l816-816c15.626-15.624 40.95-15.624 56.57 0 15.624 15.62 15.626 40.946 0.004 56.57l-816 815.994c-15.62 15.62-40.95 15.62-56.572 0zM332.032 512.034c0 20.104 3.296 39.434 9.376 57.484l228.104-228.106c-18.050-6.080-37.38-9.376-57.48-9.376-99.412-0.004-180 80.588-180 179.996zM692.032 512.034c0-20.1-3.3-39.432-9.38-57.484l-228.106 228.11c18.052 6.080 37.384 9.376 57.488 9.376 99.412 0 180-80.59 180-180zM1008.716 490.522c-4.98-6.968-72.86-100.8-178.81-183.22l-57.040 57.040c11.624 8.8 23.24 18.128 34.814 27.98 53.6 45.614 94.264 92.1 116.624 119.696-22.304 27.544-62.896 73.954-116.62 119.672-46 39.14-92.56 70.064-138.384 91.904-53.872 25.676-106.786 38.694-157.266 38.694-37.448 0-76.234-7.18-115.76-21.36l-61.486 61.49c54.786 24.22 114.45 39.87 177.248 39.87 273.41 0 487.684-296.19 496.686-308.808l15.316-21.468-15.316-21.49zM216.372 631.69c-53.708-45.706-94.3-92.12-116.61-119.672 22.36-27.6 63.028-74.094 116.612-119.696 46-39.146 92.554-70.068 138.38-91.908 53.874-25.68 106.79-38.7 157.28-38.7 37.46 0 76.264 7.188 115.8 21.38l61.484-61.484c-54.796-24.236-114.474-39.896-177.286-39.896-273.446 0-487.684 296.214-496.686 308.808l-15.316 21.49 15.314 21.466c4.98 6.984 72.866 100.84 178.84 183.26l57.040-57.040c-11.64-8.806-23.264-18.144-34.854-28.008z", photo: "M920 64h-816c-22.092 0-40 17.91-40 40v816c0 22.094 17.908 40 40 40h816c22.092 0 40-17.906 40-40v-816c0-22.090-17.908-40-40-40zM880 144v449.782l-235.39-235.392c-7.502-7.5-17.676-11.714-28.286-11.714s-20.784 4.214-28.286 11.716l-169.804 169.804-40.958-40.958c-15.622-15.622-40.95-15.622-56.57 0l-176.708 176.708v-519.946h736.002zM144 880v-102.914l204.992-204.994 215.972 215.974c7.81 7.81 18.048 11.714 28.286 11.714s20.474-3.904 28.286-11.714c15.62-15.622 15.62-40.95 0-56.57l-146.732-146.73 141.522-141.524 263.676 263.68v173.078h-736.002zM356.174 400.542c52.466 0 95-42.536 95-95s-42.534-95-95-95-95 42.536-95 95 42.534 95 95 95zM356.174 250.542c30.326 0 55 24.672 55 55s-24.674 55-55 55-55-24.672-55-55 24.674-55 55-55z", video: "M926.050 273.364c-9.556 0-20.574 3.8-32.278 11.812l-189.738 129.894v-151.068c0-20.342-15.192-37.094-34.838-39.63-1.694-0.218-3.408-0.372-5.162-0.372h-560.002c-1.754 0-3.468 0.152-5.162 0.372-19.646 2.538-34.838 19.29-34.838 39.628v496.002c0 22.092 17.91 40 40 40h560.004c13.808 0 25.98-6.998 33.168-17.638 0.102-0.148 0.184-0.308 0.282-0.458 0.612-0.922 1.2-1.862 1.722-2.836 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.612 4.704-12.010 4.704-18.81v-151.066l189.738 129.886c11.706 8.012 22.718 11.812 32.278 11.812 20.092 0 33.736-16.806 33.736-46.622v-384.032c0-29.816-13.644-46.62-33.738-46.62zM624.036 720h-480.004v-415.998h480.004v415.998zM879.788 632.3l-175.728-120.296 175.728-120.302v240.598zM240.688 663.534c-22.090 0-40-17.906-40-40v0c0-22.090 17.91-40 40-40v0c22.090 0 40.004 17.91 40.004 40v0c0 22.092-17.914 40-40.004 40v0z", speaker: "M692.070 580.856c18.156-18.156 28.152-42.266 28.152-67.89-0.008-25.622-10.002-49.726-28.148-67.872-8.476-8.478-18.308-15.188-29-19.922-0.222-0.098-0.408-0.22-0.566-0.364-13.294-6.5-22.476-20.116-22.476-35.914 0-22.090 17.91-40 40-40 5.774 0 11.246 1.248 16.204 3.45 0.016 0.006 0.026 0.008 0.040 0.016 19.292 8.656 37.036 20.832 52.368 36.164 33.254 33.254 51.574 77.446 51.58 124.43 0.006 46.996-18.31 91.204-51.58 124.472-15.064 15.062-32.45 27.074-51.344 35.7-0.154 0.070-0.286 0.112-0.434 0.176-5.124 2.382-10.812 3.75-16.832 3.75-22.090 0-40-17.906-40-40 0-16.196 9.644-30.112 23.488-36.402 0.156-0.11 0.32-0.216 0.516-0.304 10.314-4.712 19.81-11.268 28.032-19.49zM861.778 275.386c-47.824-47.824-107.946-79.588-173.204-92.242-0.356-0.078-0.712-0.146-1.072-0.214-0.060-0.012-0.124-0.026-0.186-0.038-0.506-0.096-0.976-0.162-1.422-0.208-1.918-0.282-3.868-0.476-5.864-0.476-22.090 0-40 17.91-40 40 0 19.024 13.292 34.91 31.084 38.968 0.352 0.128 0.728 0.244 1.162 0.326 48.7 9.268 95.226 32.748 132.934 70.452 99.972 99.972 100.054 261.984-0.002 362.040-37.684 37.684-84.152 61.14-132.788 70.426-0.084 0.016-0.144 0.046-0.224 0.066-18.338 3.644-32.166 19.816-32.166 39.222 0 22.094 17.91 40 40 40 2.776 0 5.484-0.286 8.102-0.822 0.094-0.018 0.172-0.018 0.27-0.038 65.32-12.626 125.496-44.406 173.376-92.286 131.008-131.008 131.008-344.172 0-475.176zM525.988 159.516v704.968c0 22.090-17.906 40-40 40-12.73 0-24.046-5.966-31.374-15.234l-51.056-61.722v0.216l-122.14-147.666h-177.386c-22.090 0-40-17.906-40-40v0 0-256c0-5.22 1.030-10.194 2.85-14.766 0.104-0.266 0.184-0.542 0.294-0.804 0.39-0.924 0.844-1.812 1.3-2.702 0.134-0.26 0.242-0.538 0.382-0.794 0.246-0.456 0.54-0.878 0.804-1.324 6.972-11.726 19.734-19.61 34.368-19.61h177.386l173.13-209.238c7.324-9.316 18.67-15.324 31.44-15.324 22.092-0 40.002 17.91 40.002 40zM445.988 270.826l-126.708 153.252h-175.248v176h175.248l19.832 23.998h0.17l106.708 129.112v-482.362z", phone: "M742.52 960c-76.266 0-163.184-32.364-258.338-96.194-73.798-49.504-136.41-106.904-175.938-146.34-43.282-43.222-105.612-111.376-156.842-190.682-66.576-103.062-95.348-196.038-85.518-276.344 8.952-73.326 50.674-134.292 120.664-176.304 10.95-6.63 23.76-10.134 37.054-10.134 32.752 0 71.124 23.354 120.764 73.494 36.434 36.802 70.108 79.22 89.472 106.644 46.698 66.176 60.686 107.352 48.286 142.136-12.638 35.538-35.534 55.704-52.25 70.428-5.662 5.006-9.95 8.854-13.070 12.262 4.040 7.542 11.744 19.868 26.054 37.476 42.388 52.076 90.548 89.024 111.972 100.874 3.308-2.96 7.11-7.168 12.352-13.152 14.87-16.81 35.062-39.636 70.482-52.28 7.978-2.842 16.498-4.276 25.35-4.276 44.172 0 108.804 44.078 155.246 81.056 45.834 36.494 103.292 90.498 127.104 132.612 22.602 39.596 14.982 68.64 4.596 86.006-48.138 80.296-119.862 122.718-207.44 122.718zM224.758 144.53c-47.558 29.426-73.566 67.28-79.468 115.618-7.494 61.224 17.17 136.326 73.308 223.226 49.902 77.252 112.994 144.35 146.16 177.472 30.296 30.222 91.906 88.17 163.988 136.524 81.738 54.83 153.662 82.63 213.772 82.63 58.618 0 103.506-26.526 137.138-81.076-0.47-1.536-1.532-4.062-3.854-8.132-14.584-25.794-57.006-69.202-105.642-108.156-58.776-47.074-96.708-63.894-106.756-64.982-15.348 5.826-25.020 16.758-36.178 29.372-12.542 14.318-28.31 32.316-55.476 41.528l-6.25 2.12h-6.598c-8.704 0-31.826 0-86.73-43.378-32.196-25.438-64.65-57.534-91.38-90.374-35.712-43.942-51.41-77.764-46.674-100.548l0.55-2.642 0.9-2.546c9.19-26 26.284-41.118 41.364-54.458 12.726-11.208 23.698-20.874 29.494-36.378-0.606-4.398-5.076-23.488-37.948-70.072-15.882-22.494-45.746-60.376-77.614-93.084-39.93-40.986-60.106-50.546-66.106-52.664z", flag: "M168 960.060c-22.092 0-40-17.908-40-40v-816.36c0-22.092 17.908-40 40-40h687.698c16.178 0 30.764 9.746 36.956 24.694 6.192 14.946 2.77 32.15-8.67 43.59l-188.918 188.922 189.218 189.216c11.44 11.442 14.862 28.646 8.67 43.592-6.192 14.948-20.776 24.694-36.956 24.694h-647.998v341.654c0 22.090-17.908 39.998-40 39.998zM208 498.406h551.428l-149.218-149.216c-15.622-15.622-15.622-40.95 0-56.568l148.918-148.922h-551.128v354.706z", pin: "M512 959.916c-13.36 0-25.84-6.672-33.262-17.782l-242.080-362.324c-0.12-0.176-0.236-0.356-0.354-0.536-36.394-54.5-55.63-118.042-55.63-183.804 0-182.696 148.632-331.324 331.326-331.324 182.696 0 331.328 148.628 331.328 331.324 0 60.71-16.554 119.98-47.906 171.652-0.758 1.528-1.618 3.016-2.578 4.45l-5.786 8.664c-0.054 0.082-0.112 0.164-0.168 0.246-0.042 0.070-0.104 0.16-0.148 0.23l-241.484 361.426c-7.422 11.106-19.898 17.778-33.258 17.778zM303.458 535.784l0.026 0.040c0.038 0.054 0.158 0.238 0.194 0.292l208.324 311.796 212.374-317.86c0.376-0.696 0.778-1.382 1.198-2.062 24.7-39.708 37.758-85.532 37.758-132.52 0-138.582-112.746-251.324-251.328-251.324s-251.326 112.742-251.326 251.324c0 50.054 14.674 98.39 42.432 139.782 0.114 0.176 0.232 0.356 0.348 0.532zM512 304.4c49.98 0 90.64 40.66 90.64 90.64 0 49.976-40.66 90.636-90.64 90.636s-90.64-40.66-90.64-90.636c0-49.98 40.66-90.64 90.64-90.64zM512 224.4c-94.242 0-170.64 76.398-170.64 170.64s76.398 170.636 170.64 170.636 170.64-76.394 170.64-170.636-76.398-170.64-170.64-170.64v0z", compass: "M512 0a512 512 0 110 1024A512 512 0 01512 0zm0 91.4c-112.3 0-218 43.8-297.4 123.2A417.8 417.8 0 0091.4 512c0 112.3 43.8 218 123.2 297.4A417.8 417.8 0 00512 932.6c112.3 0 218-43.8 297.4-123.2A417.8 417.8 0 00932.6 512c0-112.3-43.8-218-123.2-297.4A417.8 417.8 0 00512 91.4zm242.4 178.1a22.9 22.9 0 012.9 28.9L574.9 571.7l-3.2 3.2-273.3 182.4a22.9 22.9 0 01-31.7-31.7l181-271.6c1.7-2.5 3.8-4.6 6.3-6.3l271.6-181c9-6 21.1-4.9 28.8 2.8zM483.2 483.3l-115 172.4 172.5-115-57.5-57.4z", globe: "M533.6 1.6a144.2 144.2 0 00-43.2 0A511.7 511.7 0 000 512.6 511.7 511.7 0 00512 1024c282.8 0 512-229 512-511.4a511.7 511.7 0 00-490.4-511zM930 467H749c-3.6-105.7-20-204.7-47.2-282.5a494.4 494.4 0 00-24.2-58.2 419.3 419.3 0 01131.8 89.3A416.7 416.7 0 01930.2 467zM512 931.5c-75.3 0-137.3-163.3-145.4-373.3h290.8c-8.1 210-70.1 373.3-145.4 373.3zM366.5 467c7.4-200.2 63.7-358.5 134-374.3a406.8 406.8 0 0123 0c70.3 15.9 126.6 174.1 134 374.3h-291zM214.6 215.5A420.7 420.7 0 01346.4 126c-8.7 17.7-16.9 37.1-24.2 58.2-27.1 78-43.6 177-47.2 282.5H94a416.7 416.7 0 01120.7-251.3zM93.9 558.2H275c3.8 104.8 20.2 203 47 280.3a488.6 488.6 0 0025.8 61 420.4 420.4 0 01-133.3-89.9A416.7 416.7 0 0193.9 558.2zm715.5 251.4a420.4 420.4 0 01-133.3 90c9.3-18.4 18-38.8 25.7-61.1 27-77.4 43.3-175.5 47-280.3h181.3a416.7 416.7 0 01-120.7 251.4z", location: "M1024 512a512 512 0 10-512.1 512C643 1024 774 974 874 874s150-231 150-362zM809.4 809.4a417.4 417.4 0 01-251.7 120.7v-153a45.7 45.7 0 00-91.5 0v153a417 417 0 01-251.6-120.7A417.7 417.7 0 0194 557.7h153a45.7 45.7 0 000-91.5h-153a417.3 417.3 0 01120.7-251.6A417.5 417.5 0 01466.2 93.8v153a45.7 45.7 0 0091.4 0v-153a417.4 417.4 0 01251.8 120.7A417.5 417.5 0 01930 466.2H777a45.7 45.7 0 000 91.4h153a417.3 417.3 0 01-120.7 251.7v.1z", search: "M218 670a318 318 0 0 1 0-451 316 316 0 0 1 451 0 318 318 0 0 1 0 451 316 316 0 0 1-451 0m750 240L756 698a402 402 0 1 0-59 60l212 212c16 16 42 16 59 0 16-17 16-43 0-60", zoom: "M220 670a316 316 0 0 1 0-450 316 316 0 0 1 450 0 316 316 0 0 1 0 450 316 316 0 0 1-450 0zm749 240L757 698a402 402 0 1 0-59 59l212 212a42 42 0 0 0 59-59zM487 604a42 42 0 0 1-84 0V487H286a42 42 0 1 1 0-84h117V286a42 42 0 1 1 84 0v117h117a42 42 0 0 1 0 84H487v117z", zoomout: "M757 698a402 402 0 1 0-59 59l212 212a42 42 0 0 0 59-59L757 698zM126 445a316 316 0 0 1 319-319 316 316 0 0 1 318 319 316 316 0 0 1-318 318 316 316 0 0 1-319-318zm160 42a42 42 0 1 1 0-84h318a42 42 0 0 1 0 84H286z", zoomreset: "M148 560a318 318 0 0 0 522 110 316 316 0 0 0 0-450 316 316 0 0 0-450 0c-11 11-21 22-30 34v4h47c25 0 46 21 46 46s-21 45-46 45H90c-13 0-25-6-33-14-9-9-14-20-14-33V156c0-25 20-45 45-45s45 20 45 45v32l1 1a401 401 0 0 1 623 509l212 212a42 42 0 0 1-59 59L698 757A401 401 0 0 1 65 570a42 42 0 0 1 83-10z", timer: "M571.5 0a42.7 42.7 0 010 85.3h-16.7l-.2 53.1a441.6 441.6 0 01221.2 84.9l44.7-44.6a42.7 42.7 0 0160.3 60.3l-41.5 41.5a443.8 443.8 0 11-370-142l.1-53.2H452A42.7 42.7 0 01452 0h119.5zM512 221.7a356 356 0 00-253.5 105 356 356 0 00-105 253.5 356 356 0 00105 253.5 356 356 0 00253.5 105 356 356 0 00253.5-105 356.2 356.2 0 00105-253.5 356 356 0 00-105-253.5 356 356 0 00-253.5-105zm-.1 52.7a42.7 42.7 0 0142.6 42.6v206.6a68.2 68.2 0 0125.3 47.3l.2 5.8a68.2 68.2 0 11-110.8-53.4V317a42.7 42.7 0 0142.7-42.6z", time: "M512 0a512 512 0 110 1024A512 512 0 01512 0zm0 91.4c-112.3 0-218 43.8-297.4 123.2A417.8 417.8 0 0091.4 512c0 112.3 43.8 218 123.2 297.4A417.8 417.8 0 00512 932.6c112.3 0 218-43.8 297.4-123.2A417.8 417.8 0 00932.6 512c0-112.3-43.8-218-123.2-297.4A417.8 417.8 0 00512 91.4zm0 54.9a45.7 45.7 0 0145.7 45.7v280H759a45.7 45.7 0 010 91.4H512c-6.1 0-12-1.2-17.4-3.4l-.4-.2-2-1c-.7-.3-1.4-.5-2-.9l-.7-.4-3-1.9-.4-.2c-12-8.2-19.8-22-19.8-37.7V192a45.7 45.7 0 0145.7-45.7z", lightning: "M320.022 1022.644c-7.408 0-14.852-2.052-21.44-6.238-15.292-9.714-22.144-28.494-16.706-45.774l115.186-365.908-214.552-52.57c-14.714-3.606-26.128-15.214-29.486-29.988-3.356-14.772 1.92-30.174 13.632-39.786l576-472.662c14.458-11.864 35.208-12.126 49.962-0.626 14.752 11.496 19.568 31.682 11.594 48.602l-171.202 363.256 208.648 51.756c14.29 3.544 25.476 14.652 29.124 28.914s-0.834 29.376-11.668 39.344l-512 471.112c-7.586 6.984-17.308 10.568-27.092 10.568zM279.236 493.49l178.314 43.69c10.74 2.632 19.912 9.59 25.336 19.226s6.62 21.086 3.298 31.636l-83.030 263.76 347.066-319.352-183.82-45.596c-11.63-2.884-21.356-10.832-26.498-21.656-5.144-10.822-5.164-23.382-0.054-34.22l116.31-246.788-376.922 309.3z", lightningoff: "M310 374L76 150a37 37 0 0 1 0-54c15-14 41-14 56 0l816 778c16 15 16 39 0 54a41 41 0 0 1-56 0L666 712l-57-54-242-230-57-54zm-32 28l57 54-44 38 115 29 78 76-75 254 169-165 57 54-279 271c-8 7-17 11-26 11-7 0-14-2-20-6a41 41 0 0 1-16-46l109-367-203-52c-14-4-25-16-28-30-4-15 1-31 13-40l93-81zm124-108L731 9c13-12 33-12 47-1 14 12 19 32 11 49L627 421l198 52c13 4 24 15 27 29 4 14-1 29-11 39l-89 87-56-54 42-41-118-31-80-76 109-242-190 165-57-55z", dashboard: "M512 85.3a512 512 0 01361 875c-99.5-44-225-70.4-361.6-70.4-136.1 0-261.4 26.2-360.8 70A512 512 0 01512 85.4zm0 91.5c-112.4 0-218 43.7-297.4 123.1A417.8 417.8 0 0091.4 597.3c0 93 30 181.5 85.5 254.2 101-34.8 215.3-53 334.5-53 119.6 0 234.2 18.3 335.5 53.4a417.3 417.3 0 0085.7-254.6c0-112.3-43.8-218-123.2-297.4a417.5 417.5 0 00-275-122.6l-22.4-.5zm219.7 115.7a45.7 45.7 0 0116.7 62.4L580.4 646c6.5 17.1 6.7 36.6-.6 54.3l-4.3 8.7A73.1 73.1 0 11501.3 600l168-291a45.7 45.7 0 0162.4-16.6z", hourglass: "M511.926 801.946c-22.090 0-40-17.906-40-40v0c0-22.090 17.91-40 40-40v0c22.090 0 40.004 17.91 40.004 40v0c0 22.094-17.914 40-40.004 40v0zM831.682 915.242c0.192 1.582 0.318 3.186 0.318 4.82 0 22.090-17.908 40-40 40h-560c-22.092 0-40-17.914-40-40 0-2.438 0.252-4.812 0.67-7.128 2.36-53.636 18.034-105.7 45.852-151.554 0.734-1.476 1.562-2.912 2.492-4.296l5.582-8.364c0.054-0.080 0.11-0.158 0.164-0.238 0.042-0.068 0.098-0.156 0.144-0.222l157.704-236.036-158.5-237.228c-0.116-0.17-0.23-0.342-0.34-0.516-32.842-49.178-51.11-105.994-53.368-165.044-0.238-1.762-0.402-3.546-0.402-5.374 0-22.090 17.908-40 40-40h560c22.092 0 40 17.914 40 40 0 2.056-0.204 4.064-0.504 6.038-2.194 54.020-17.886 106.48-45.894 152.648-0.734 1.472-1.562 2.91-2.492 4.294l-5.582 8.366c-0.054 0.078-0.11 0.156-0.164 0.236-0.042 0.068-0.098 0.154-0.144 0.222l-157.734 236.082 158.468 237.182c0.116 0.168 0.23 0.344 0.34 0.516 32.946 49.33 51.226 106.346 53.39 165.596zM749.958 144.060h-475.99c6.138 31.304 18.384 61.124 36.354 87.916 0.118 0.17 0.23 0.344 0.342 0.514l0.024 0.038c0.036 0.054 0.15 0.23 0.186 0.284l54.286 81.25h293.596l58.196-87.1c0.366-0.67 0.75-1.334 1.154-1.99 15.492-24.916 26.228-52.324 31.852-80.912zM497.528 512.178l-0.032 0.046 14.426 21.592 93.378-139.756h-186.692l78.92 118.118zM305.96 799.156c-15.498 24.91-26.234 52.318-31.856 80.906h476.052c-6.138-31.304-18.384-61.122-36.354-87.918-0.118-0.168-0.23-0.344-0.342-0.512l-0.024-0.040c-0.036-0.050-0.15-0.23-0.186-0.282l-140.242-209.902-28.98 43.374c-7.166 10.72-19.21 17.162-32.11 17.162-12.896 0-24.942-6.442-32.11-17.166l-28.76-43.044-143.938 215.428c-0.36 0.674-0.744 1.338-1.15 1.994z", play: "M878.78 477.856l-591.884-341.722c-9.464-5.464-18.426-8.050-26.386-8.048-19.516 0.002-33.002 15.546-33.002 42.338v683.446c0 26.792 13.482 42.338 33.002 42.338 7.96 0 16.924-2.586 26.386-8.048l591.884-341.722c32.664-18.864 32.664-49.724 0-68.582z", playnext: "M222 136l513 342 12 10V192a64 64 0 01128 0v640a64 64 0 01-128 0V536l-12 10-513 342c-8 5-16 8-23 8-17 0-28-16-28-42V170c0-26 11-42 28-42 7 0 15 3 23 8z", playback: "M823 136L311 478l-12 10V192a64 64 0 00-128 0v640a64 64 0 10128 0V536l12 10 512 342c8 5 16 8 23 8 17 0 29-16 29-42V170c0-26-12-42-29-42-7 0-15 3-23 8z", stop: "M1024 512A512 512 0 100 512a512 512 0 001024 0zM215 809a418 418 0 010-594 418 418 0 01594 0 418 418 0 010 594 418 418 0 01-594 0zm471-78H338c-25 0-45-20-45-45V338c0-25 20-45 45-45h348c25 0 45 20 45 45v348c0 25-20 45-45 45z", stopalt: "M894 85H130c-25 0-45 20-45 45v764c0 25 20 45 45 45h764c25 0 45-20 45-45V130c0-25-20-45-45-45z", rewind: "m631.8 642.6 345 245.4c7.7 5.4 15 8 21.4 8 15.9 0 26.8-15.5 26.8-42.3V170.3c0-26.8-11-42.3-26.8-42.3-6.4 0-13.7 2.6-21.4 8l-345 245.4v-211c0-26.9-10.9-42.4-26.8-42.4-6.4 0-13.7 2.6-21.4 8L129 459.4V192a64 64 0 0 0-128 0v640a64 64 0 0 0 128 0V564.6L583.6 888c7.7 5.4 15 8 21.4 8 15.9 0 26.8-15.5 26.8-42.3v-211Z", fastforward: "M398.2 386.4 53.2 141c-7.7-5.4-15-8-21.4-8C15.9 133 5 148.5 5 175.3v683.4C5 885.5 16 901 31.8 901c6.4 0 13.7-2.6 21.4-8l345-245.4v211c0 26.9 11 42.4 26.8 42.4 6.4 0 13.7-2.6 21.4-8L901 569.6V837a64 64 0 0 0 128 0V197a64 64 0 0 0-128 0v267.4L446.4 141c-7.7-5.4-15-8-21.4-8-15.9 0-26.8 15.5-26.8 42.3v211Z", email: "M960.032 268.004c0.748-10.040-2.246-20.364-9.226-28.684-5.984-7.132-13.938-11.62-22.394-13.394-0.13-0.026-0.268-0.066-0.396-0.092-1.082-0.22-2.172-0.376-3.272-0.5-0.25-0.032-0.492-0.080-0.742-0.102-1.028-0.096-2.052-0.136-3.090-0.156-0.292-0.002-0.582-0.042-0.876-0.042h-816.008c-21.416 0-38.848 16.844-39.898 38-0.034 0.628-0.092 1.256-0.096 1.89 0 0.034-0.006 0.074-0.006 0.114 0 0.050 0.008 0.102 0.008 0.152v495.692c0 0.054-0.008 0.106-0.008 0.156 0 22.090 17.91 40 40 40h816.004c13.808 0 25.98-6.996 33.17-17.636 0.1-0.148 0.182-0.312 0.28-0.458 0.606-0.93 1.196-1.868 1.722-2.84 0.046-0.082 0.080-0.172 0.124-0.258 2.992-5.604 4.704-12.008 4.704-18.804v0 0-493.038zM144.032 350.156l339.946 281.188c6.568 6.434 14.918 10.168 23.564 11.122 0.16 0.024 0.32 0.050 0.48 0.066 0.838 0.082 1.676 0.114 2.518 0.14 0.496 0.020 0.994 0.058 1.492 0.058s0.996-0.042 1.492-0.058c0.842-0.028 1.68-0.058 2.518-0.14 0.16-0.016 0.32-0.042 0.48-0.066 8.646-0.958 16.996-4.688 23.564-11.122l339.946-281.206v370.894h-736v-370.876zM215.066 305.030h593.91l-296.946 245.422-296.964-245.422z", link: "M743.52 529.234c5.616-5.616 83.048-83.046 88.462-88.46 30.944-32.778 47.97-75.636 47.97-120.792 0-47.048-18.304-91.26-51.542-124.484-33.228-33.22-77.43-51.516-124.458-51.516-45.024 0-87.792 16.94-120.536 47.72l-104.458 104.456c-30.792 32.738-47.734 75.512-47.734 120.548 0 41.916 14.576 81.544 41.248 113.196 3.264 3.876 6.666 7.664 10.292 11.29 4.258 4.258 8.704 8.262 13.304 12.022 0.054 0.080 0.096 0.152 0.148 0.232 9.572 7.308 15.778 18.804 15.778 31.776 0 22.094-17.914 40-40.004 40-8.542 0-16.442-2.696-22.938-7.26-2.746-1.93-20.622-17.43-30.35-28.050-0.008-0.010-0.018-0.018-0.026-0.028-4.992-5.432-13.234-15.23-18.552-22.65s-16.556-25.872-17.036-26.736c-0.7-1.262-2.974-5.526-3.422-6.39-0.69-1.334-6.118-12.67-6.114-12.67-14.342-31.96-22.332-67.4-22.332-104.728 0-60.826 21.198-116.648 56.58-160.544 0.252-0.314 4.61-5.594 6.594-7.866 0.304-0.35 5.038-5.636 7.16-7.874 0.252-0.268 105.86-105.874 106.128-106.126 45.902-43.584 107.958-70.314 176.264-70.314 141.382 0 255.998 114.5 255.998 256 0 68.516-26.882 130.688-70.652 176.61-0.144 0.148-109.854 109.546-112.090 111.528-0.958 0.848-5.072 4.352-5.072 4.352-6.448 5.434-13.132 10.592-20.1 15.378 0.412-6.836 0.644-13.702 0.644-20.6 0-26.46-3.108-52.206-8.918-76.918l-0.236-1.102zM616.144 767.82c35.382-43.896 56.58-99.718 56.58-160.544 0-37.328-7.99-72.768-22.332-104.728 0.004 0 0.006-0.002 0.010-0.004-0.258-0.576-0.538-1.14-0.8-1.714-0.686-1.498-2.894-6.112-3.296-6.93-0.668-1.344-2.952-5.732-3.386-6.604-3.48-6.982-8.708-15.126-9.49-16.366-0.498-0.792-0.996-1.58-1.502-2.364-0.834-1.29-15.364-22.066-26.656-34.466-0.008-0.010-0.018-0.018-0.026-0.028-7.056-8.448-24.932-24.198-30.35-28.050-6.47-4.602-14.396-7.26-22.938-7.26-22.090 0-40.004 17.906-40.004 40 0 12.97 6.206 24.466 15.778 31.776 0.052 0.080 0.094 0.152 0.148 0.232 4.602 3.76 20.334 19.434 23.598 23.31 26.672 31.65 41.248 71.28 41.248 113.196 0 45.038-16.944 87.81-47.734 120.548l-104.458 104.456c-32.742 30.782-75.512 47.72-120.536 47.72-47.028 0-91.228-18.294-124.458-51.516-33.236-33.224-51.542-77.436-51.542-124.484 0-45.154 17.028-88.014 47.97-120.792 5.414-5.414 40.812-40.812 68.958-68.958 7.176-7.176 13.888-13.886 19.504-19.502v-0.002c-0.356-1.562-0.246-1.096-0.246-1.096-5.81-24.712-8.918-50.458-8.918-76.918 0-6.898 0.232-13.764 0.644-20.6-6.966 4.788-20.1 15.33-20.1 15.33-0.734 0.62-9.518 8.388-11.68 10.45-0.16 0.154-105.338 105.33-105.482 105.478-43.77 45.922-70.652 108.094-70.652 176.61 0 141.5 114.616 256 255.998 256 68.306 0 130.362-26.73 176.264-70.314 0.27-0.254 105.876-105.86 106.128-106.126 0.004-0.002 13.506-15.426 13.758-15.74z", paperclip: "M824.25 369.354c68.146-70.452 67.478-182.784-2.094-252.354-70.296-70.296-184.266-70.296-254.558 0-0.014 0.012-0.028 0.026-0.042 0.042-0.004 0.002-0.006 0.004-0.010 0.008l-433.144 433.142c-0.036 0.036-0.074 0.068-0.11 0.106-0.054 0.052-0.106 0.11-0.16 0.162l-2.668 2.67c-0.286 0.286-0.528 0.596-0.8 0.888-43.028 44.88-66.664 103.616-66.664 165.986 0 64.106 24.962 124.376 70.292 169.704 45.328 45.33 105.598 70.292 169.706 70.292 50.612 0 98.822-15.57 139.186-44.428 4.932-1.952 9.556-4.906 13.544-8.894l16.802-16.802c0.056-0.056 0.116-0.112 0.172-0.168 0.038-0.038 0.074-0.076 0.112-0.116l289.010-289.014c15.622-15.618 15.62-40.942 0-56.56s-40.948-15.62-56.566 0l-289.124 289.122c-62.482 62.484-163.792 62.484-226.274 0-62.484-62.482-62.484-163.79 0-226.272h-0.002l433.134-433.12c0.058-0.060 0.112-0.122 0.172-0.18 38.99-38.99 102.43-38.99 141.42 0 38.992 38.99 38.99 102.432 0 141.422-0.058 0.060-0.122 0.114-0.18 0.17l0.006 0.006-280.536 280.534c-0.002-0.002-0.002-0.004-0.004-0.006l-79.978 79.98c-0.010 0.010-0.016 0.020-0.028 0.028-0.008 0.012-0.018 0.018-0.028 0.028l-0.064 0.062c-15.622 15.624-40.944 15.624-56.562 0-15.624-15.62-15.624-40.944-0.002-56.566l0.062-0.062c0.010-0.010 0.018-0.020 0.028-0.028 0.008-0.012 0.020-0.018 0.028-0.028l79.98-79.978c-0.002-0.002-0.004-0.002-0.006-0.004l136.508-136.512c15.622-15.62 15.62-40.944-0.002-56.562-15.618-15.62-40.946-15.62-56.564 0l-219.342 219.344c-1.284 1.284-2.42 2.652-3.494 4.052-40.4 47.148-38.316 118.184 6.322 162.824 44.64 44.638 115.674 46.722 162.82 6.324 1.402-1.072 2.772-2.21 4.054-3.494l2.83-2.832c0.002 0 0.002 0 0.002 0s0 0 0 0l360.54-360.54c0.058-0.056 0.12-0.114 0.18-0.172 0.050-0.050 0.098-0.106 0.15-0.158l0.994-0.994c0.34-0.338 0.63-0.702 0.952-1.052z", box: "M960.016 408.080c0-0.672-0.046-1.342-0.078-2.014-0.032-0.594-0.044-1.19-0.102-1.782-0.068-0.726-0.186-1.448-0.294-2.17-0.080-0.54-0.144-1.080-0.248-1.616-0.138-0.724-0.326-1.442-0.506-2.16-0.134-0.534-0.252-1.070-0.408-1.6-0.196-0.662-0.436-1.314-0.668-1.968-0.204-0.582-0.396-1.166-0.628-1.74-0.226-0.56-0.494-1.11-0.75-1.662-0.3-0.656-0.598-1.312-0.934-1.954-0.242-0.454-0.514-0.894-0.774-1.342-0.414-0.716-0.83-1.43-1.292-2.124-0.256-0.382-0.538-0.752-0.806-1.128-0.514-0.716-1.036-1.428-1.602-2.116-0.090-0.11-0.162-0.226-0.254-0.336-0.244-0.292-0.516-0.542-0.768-0.826-0.534-0.6-1.068-1.198-1.644-1.772-0.48-0.478-0.982-0.924-1.48-1.376-0.354-0.316-0.674-0.658-1.040-0.964l-405.788-335.666c-6.568-6.436-14.918-10.166-23.564-11.124-0.16-0.022-0.32-0.050-0.48-0.066-0.838-0.082-1.676-0.11-2.518-0.14-0.496-0.020-0.994-0.058-1.492-0.058s-0.996 0.040-1.492 0.058c-0.842 0.028-1.68 0.058-2.518 0.14-0.16 0.016-0.32 0.044-0.48 0.066-8.646 0.956-16.996 4.688-23.564 11.124l-405.662 335.542c-7.13 5.982-11.616 13.93-13.392 22.382-0.032 0.14-0.070 0.278-0.1 0.42-0.212 1.072-0.37 2.152-0.494 3.238-0.032 0.258-0.078 0.51-0.106 0.77-0.086 0.89-0.114 1.786-0.138 2.68-0.014 0.39-0.052 0.78-0.054 1.17 0 0.040-0.006 0.074-0.006 0.114v204.856c-0.958 12.434 3.854 25.128 14.134 33.754l405.662 335.54c6.568 6.438 14.918 10.168 23.564 11.124 0.16 0.020 0.32 0.050 0.48 0.066 0.838 0.082 1.676 0.114 2.518 0.14 0.496 0.020 0.994 0.058 1.492 0.058 0.054 0 0.11-0.008 0.162-0.008 0.042 0 0.084 0.008 0.126 0.008 0.342 0 0.672-0.042 1.012-0.050 0.062-0.004 0.126-0.008 0.192-0.008 0.134-0.004 0.27-0.020 0.402-0.024 10.602-0.422 20.136-4.938 27.054-12.046l404.526-334.624c0.084-0.066 0.166-0.136 0.248-0.204l0.12-0.098c0.17-0.144 0.314-0.304 0.48-0.45 0.814-0.704 1.614-1.43 2.37-2.2 0.296-0.3 0.562-0.624 0.85-0.934 0.602-0.652 1.2-1.308 1.756-2 0.3-0.372 0.566-0.758 0.852-1.136 0.504-0.672 1.002-1.344 1.462-2.046 0.242-0.368 0.458-0.75 0.686-1.124 0.458-0.754 0.908-1.508 1.316-2.292 0.164-0.312 0.304-0.636 0.46-0.954 0.426-0.872 0.832-1.746 1.196-2.652 0.092-0.23 0.168-0.464 0.256-0.696 0.376-0.996 0.728-2 1.026-3.032 0.042-0.148 0.074-0.296 0.114-0.442 0.306-1.102 0.578-2.218 0.79-3.356 0.016-0.082 0.024-0.164 0.038-0.246 0.212-1.184 0.382-2.378 0.49-3.598v0c0.1-1.156 0.176-2.32 0.176-3.5v-204.86c0.024-0.318 0.022-0.638 0.040-0.958 0.026-0.668 0.074-1.338 0.074-2.008zM143.89 493.202l328.14 271.42v103.902l-328.14-271.18v-104.142zM552.032 764.402l327.868-271.212v103.88l-327.868 270.972v-103.64zM511.898 122.66l345.348 285.42-345.348 285.42-345.374-285.42 345.374-285.42z", structure: "M954.324 833.3c0.208-0.558 0.388-1.128 0.586-1.692 0.3-0.868 0.608-1.734 0.882-2.61 0.234-0.746 0.444-1.5 0.66-2.25 0.212-0.734 0.432-1.464 0.624-2.204 0.204-0.766 0.378-1.54 0.562-2.308 0.18-0.766 0.366-1.528 0.528-2.292 0.146-0.692 0.272-1.386 0.402-2.082 0.168-0.89 0.332-1.778 0.476-2.668 0.090-0.566 0.164-1.136 0.244-1.704 0.148-1.058 0.29-2.118 0.404-3.18 0.042-0.422 0.080-0.852 0.12-1.274 0.118-1.23 0.212-2.46 0.282-3.696 0.018-0.304 0.030-0.606 0.042-0.906 0.062-1.36 0.098-2.718 0.104-4.082 0-0.114 0.008-0.226 0.008-0.34 0-0.128-0.010-0.258-0.010-0.39-0.006-1.368-0.042-2.734-0.104-4.102-0.014-0.296-0.030-0.594-0.044-0.89-0.070-1.246-0.166-2.492-0.284-3.738-0.042-0.434-0.084-0.864-0.128-1.292-0.116-1.050-0.25-2.098-0.4-3.144-0.088-0.628-0.18-1.258-0.282-1.882-0.13-0.8-0.276-1.598-0.428-2.394-0.162-0.868-0.332-1.73-0.518-2.594-0.116-0.524-0.24-1.046-0.364-1.57-0.264-1.128-0.542-2.25-0.846-3.36-0.070-0.254-0.144-0.504-0.214-0.754-11.38-40.382-48.464-69.996-92.488-69.996-3.066 0-6.096 0.16-9.088 0.442l-264.576-458.262c21.080-29.698 24.3-70.13 4.9-103.732-12.596-21.816-32.458-36.812-54.764-43.724-0.062-0.020-0.124-0.036-0.186-0.054-1.394-0.43-2.798-0.83-4.21-1.196-0.296-0.076-0.596-0.142-0.894-0.216-1.208-0.3-2.422-0.586-3.642-0.84-0.384-0.082-0.774-0.148-1.16-0.224-1.168-0.228-2.338-0.444-3.514-0.626-0.384-0.060-0.776-0.112-1.162-0.168-1.208-0.174-2.416-0.332-3.63-0.46-0.35-0.038-0.7-0.066-1.048-0.1-1.27-0.12-2.54-0.218-3.814-0.29-0.32-0.018-0.642-0.032-0.964-0.044-1.294-0.058-2.594-0.094-3.892-0.1-0.166 0-0.328-0.012-0.492-0.012-0.19 0-0.376 0.014-0.564 0.014-1.21 0.008-2.42 0.040-3.63 0.092-0.494 0.022-0.986 0.046-1.478 0.074-0.992 0.060-1.986 0.136-2.978 0.226-0.722 0.064-1.442 0.134-2.16 0.214-0.696 0.080-1.392 0.17-2.090 0.266-1.014 0.136-2.026 0.286-3.032 0.452-0.352 0.060-0.704 0.124-1.054 0.19-44.97 8.028-79.122 47.302-79.122 94.582 0 20.756 6.602 39.958 17.79 55.67l-264.58 458.26c-2.954-0.274-5.94-0.434-8.962-0.434-53.078 0-96.11 43.032-96.11 96.11 0 53.082 43.032 96.11 96.11 96.11 38.8 0 72.208-23.004 87.386-56.11l529.202-0.004c0.138 0.304 0.292 0.606 0.436 0.91 0.226 0.48 0.456 0.958 0.69 1.434 0.474 0.968 0.966 1.93 1.476 2.882 0.214 0.402 0.432 0.8 0.65 1.2 0.314 0.566 0.604 1.14 0.93 1.708 0.284 0.488 0.59 0.958 0.88 1.442 0.122 0.2 0.244 0.398 0.37 0.602 27.086 44.372 84.766 59.278 130.040 33.136 18.864-10.89 32.624-27.214 40.478-45.852 0.054-0.132 0.104-0.266 0.158-0.398 0.518-1.248 1.020-2.506 1.486-3.776zM238.414 744.282l264.542-458.204c0.424 0.042 0.85 0.064 1.276 0.098 0.668 0.056 1.334 0.112 2.004 0.152 0.652 0.040 1.306 0.066 1.96 0.092 1.122 0.046 2.244 0.076 3.368 0.084 0.146 0.002 0.292 0.012 0.438 0.012 0.168 0 0.334-0.012 0.502-0.014 1.436-0.004 2.874-0.040 4.31-0.108 0.088-0.006 0.176-0.010 0.262-0.014 1.376-0.070 2.75-0.168 4.124-0.296l264.596 458.298c-3.48 4.894-6.514 10.122-9.042 15.636h-529.226c-2.546-5.55-5.602-10.814-9.114-15.736z", cpu: "M392.016 672.016h240.032c22.092 0 40-17.908 40-40v-240.032c0-22.092-17.908-40-40-40h-240.032c-22.092 0-40 17.908-40 40v240.032c0 22.092 17.908 40 40 40zM432.016 431.984h160.032v160.032h-160.032v-160.032zM864.032 424h71.98c22.094 0 40.004-17.906 40.004-40 0-22.092-17.906-40-40-40h-71.984v-143.968c0-22.092-17.908-40-40-40h-144v-72.012c0-22.094-17.906-40.004-40-40.004-22.090 0-40 17.906-40 40v72.016h-176v-72.012c0-22.094-17.906-40.004-40-40.004-22.090 0-40 17.906-40 40v72.016h-144c-22.092 0-40 17.908-40 40v143.968h-71.984c-22.094 0-40 17.908-40 40s17.91 40 40 40h71.984v176h-71.984c-22.094 0-40 17.908-40 40s17.91 40 40 40h71.984v144.030c0 22.092 17.908 40 40 40h144v71.954c0 22.094 17.906 40 40 40s40-17.91 40-40v-71.954h176v71.954c0 22.094 17.906 40 40 40s40-17.91 40-40v-71.954h144c22.092 0 40-17.908 40-40v-144.030h71.98c22.094 0 40.004-17.906 40.004-40 0-22.092-17.906-40-40-40h-71.984v-176zM784.032 784.032h-143.692c-0.104 0-0.204-0.016-0.308-0.016s-0.206 0.016-0.308 0.016h-127.382c-0.104 0-0.204-0.016-0.308-0.016s-0.206 0.016-0.308 0.016h-127.382c-0.104 0-0.204-0.016-0.308-0.016s-0.206 0.016-0.308 0.016h-143.696v-544h544v544z", memory: "M320.032 416.032v-152.968c0-22.094 17.91-40 40-40 22.094 0 40 17.91 40 40.004v152.964c0 22.090-17.906 40-40 40s-40-17.908-40-40zM512 456.032c22.094 0 40-17.91 40-40v-152.964c0-22.094-17.906-40.004-40-40.004-22.090 0-40 17.906-40 40v152.968c0 22.092 17.908 40 40 40zM664.032 456.032c22.094 0 40-17.91 40-40v-82.996c0-22.094-17.906-40.004-40-40.004-22.090 0-40 17.906-40 40v83c0 22.092 17.906 40 40 40zM864.018 316.616v603.418c0 0.004 0 0.004 0 0.004 0 6.798-1.71 13.198-4.704 18.808-0.044 0.084-0.078 0.172-0.124 0.254-0.524 0.976-1.112 1.914-1.722 2.836-0.098 0.15-0.18 0.312-0.282 0.46-7.188 10.638-19.36 17.634-33.168 17.634h-623.99c-22.090 0-40-17.908-40-40v-343.574c-0.002-0.142-0.022-0.282-0.022-0.426 0-0.142 0.020-0.282 0.022-0.426v-471.574c0-20.34 15.192-37.092 34.838-39.63 1.694-0.216 3.408-0.37 5.162-0.37l411.254 0.052c10.594-0.286 21.282 3.58 29.368 11.668l211.672 212.206c7.906 7.908 11.792 18.298 11.696 28.66zM240.026 144.034v391.998h543.99v-203.27l-188.252-188.728h-355.738zM784.016 880.032v-264h-543.99v264h543.99z", database: "M895.95 221.364c-3.414-87.32-173.972-157.672-383.918-157.672s-380.504 70.352-383.918 157.672h-0.082v578.328c0 88.552 171.918 160.338 384 160.338s384-71.786 384-160.338v-578.328h-0.082zM798.412 430.578c-15.6 11.386-37.69 22.346-63.882 31.696-60.984 21.77-140.002 33.758-222.498 33.758s-161.514-11.988-222.498-33.758c-26.192-9.348-48.282-20.308-63.88-31.696-8.706-6.352-13.646-11.608-16.122-14.874v-92.9c70.29 37.478 179.654 61.566 302.5 61.566s232.21-24.088 302.5-61.566v92.9c-2.476 3.266-7.416 8.522-16.12 14.874zM814.532 514.464v93.24c-2.474 3.266-7.416 8.522-16.12 14.874-15.6 11.386-37.69 22.346-63.882 31.696-60.984 21.77-140.002 33.758-222.498 33.758s-161.514-11.988-222.498-33.758c-26.192-9.348-48.282-20.308-63.88-31.696-8.706-6.352-13.646-11.608-16.122-14.874v-93.24c70.29 37.48 179.654 61.566 302.5 61.566s232.21-24.086 302.5-61.566zM225.652 209.146c15.6-11.386 37.69-22.346 63.88-31.696 60.984-21.77 140.002-33.758 222.498-33.758s161.514 11.988 222.498 33.758c26.192 9.348 48.282 20.308 63.882 31.696 8.704 6.352 13.646 11.608 16.12 14.874v0.026c-2.474 3.266-7.416 8.522-16.12 14.874-15.6 11.386-37.69 22.346-63.882 31.696-60.984 21.77-140.002 33.758-222.498 33.758s-161.514-11.988-222.498-33.758c-26.192-9.348-48.282-20.308-63.88-31.696-8.706-6.352-13.646-11.608-16.122-14.874v-0.026c2.476-3.268 7.418-8.524 16.122-14.874zM798.412 814.578c-15.6 11.386-37.69 22.346-63.882 31.696-60.984 21.77-140.002 33.758-222.498 33.758s-161.514-11.988-222.498-33.758c-26.192-9.348-48.282-20.308-63.88-31.696-8.714-6.36-13.66-11.62-16.13-14.886h0.010v-93.228c70.29 37.48 179.654 61.566 302.5 61.566s232.21-24.086 302.5-61.566v93.228h0.010c-2.474 3.266-7.42 8.526-16.132 14.886z", power: "M320 118.3a45.7 45.7 0 0122.5 85.6 384.6 384.6 0 00-120.8 93.4A380.9 380.9 0 00128 548.6c0 102.5 39.9 199 112.4 271.5A381.5 381.5 0 00512 932.5c102.5 0 199-39.9 271.5-112.4a381.5 381.5 0 00112.4-271.5c0-98.1-36.5-190.6-103.1-262l-2-2-9.4-9.5a384.2 384.2 0 00-100-71.2 45.6 45.6 0 0139.6-82.2l.6.3h.2l.1.1h.1l2 1 4 2 1.9 1 3.5 1.9a480.6 480.6 0 0144.9 27l2 1.3v-.3.1a475.4 475.4 0 11-545.3 6.2l3.6-2.6v.1a471.4 471.4 0 0151.7-31.7l3.7-2 1.4-.7.3-.2 6.4-3.1.1-.1h.1l.7-.3c5.2-2.1 11-3.4 17-3.4zM511.8 0c25 0 45.3 20 45.7 45v421.3a45.7 45.7 0 01-91.4.7V45.7A45.7 45.7 0 01511.9 0z", outbox: "M960.062 616v304c0 1.382-0.070 2.746-0.208 4.090-2.046 20.172-19.080 35.91-39.792 35.91h-816c-22.090 0-40-17.906-40-40v-304c0-22.090 17.91-40 40-40s40 17.91 40 40v264h736v-264c0-22.090 17.91-40 40-40s40 17.912 40 40zM664.732 200.168l-124.41-124.41c-0.014-0.014-0.024-0.028-0.038-0.042-3.57-3.57-7.664-6.284-12.018-8.222-5.316-2.368-11.028-3.54-16.742-3.47-0.14-0.002-0.276-0.020-0.414-0.020-13.552 0-25.512 6.756-32.748 17.072l-119.1 119.092c-15.622 15.62-15.618 40.948 0.002 56.57 15.622 15.62 40.95 15.62 56.568 0l55.276-55.276v462.54c0 22.094 17.912 40 40.002 40 22.092 0 40-17.91 40-40v-464.314l57.052 57.052c15.622 15.624 40.948 15.62 56.568 0 15.628-15.624 15.628-40.952 0.002-56.572z", share: "M896.006 920c0 22.090-17.91 40-40 40h-688.006c-22.090 0-40-17.906-40-40v-549.922c-0.838-3.224-1.33-6.588-1.33-10.072 0-22.090 17.908-40.004 40-40.004h178.66c22.092 0.004 40 17.914 40 40.004 0 22.088-17.908 40-40 40h-137.33v479.996h607.998v-479.996h-138.658c-22.090 0-40-17.912-40-40 0-22.090 17.906-40.004 40-40.004h178.658c22.090 0 40 17.91 40 40v559.844c0 0.050 0.008 0.102 0.008 0.154zM665.622 200.168l-124.452-124.45c-8.042-8.042-18.65-11.912-29.186-11.674-1.612-0.034-3.222 0-4.828 0.16-0.558 0.054-1.098 0.16-1.648 0.238-0.742 0.104-1.484 0.192-2.218 0.338-0.656 0.13-1.29 0.31-1.934 0.472-0.622 0.154-1.244 0.292-1.86 0.476-0.64 0.196-1.258 0.436-1.886 0.66-0.602 0.216-1.208 0.414-1.802 0.66-0.598 0.248-1.17 0.54-1.754 0.814-0.598 0.282-1.202 0.546-1.788 0.86-0.578 0.312-1.13 0.664-1.694 1-0.552 0.332-1.116 0.644-1.654 1.006-0.67 0.448-1.3 0.942-1.942 1.426-0.394 0.302-0.806 0.576-1.196 0.894-1.046 0.858-2.052 1.768-3.008 2.726l-124.398 124.39c-15.622 15.62-15.618 40.948 0.002 56.57 15.622 15.62 40.95 15.62 56.568 0l56.164-56.166v439.426c0 22.094 17.912 40 40.002 40 22.092 0 40-17.91 40-40v-441.202l57.942 57.942c15.622 15.624 40.948 15.62 56.568 0 15.626-15.618 15.626-40.946 0.002-56.566z", button: "M644.634 802.32c-4.558 5.434-10.254 9.328-16.446 11.672l0.008 0.024-45.628 16.606 27.54 75.66c7.554 20.756-3.148 43.71-23.906 51.266s-43.714-3.146-51.27-23.906l-27.54-75.656-47.63 17.29c-6.020 1.956-12.586 2.518-19.254 1.342-21.75-3.836-36.282-24.582-32.45-46.34l30.57-173.328c2.55-14.476 12.61-25.714 25.458-30.508 0.292-0.118 0.586-0.23 0.878-0.34 0.238-0.084 0.476-0.168 0.718-0.246 12.942-4.624 27.91-2.492 39.196 6.98l134.824 113.13c16.932 14.2 19.144 39.432 4.932 56.354zM960.002 664v-368.082c0-22.092-17.908-40-40-40h-816c-22.092 0-40 17.908-40 40l-0.292 368.238c0 22.092 17.908 40 40 40h240.292c22.092 0 40-17.908 40-40s-17.908-40-40-40h-200.292l0.292-288.238h736v288.082h-200c-22.092 0-40 17.908-40 40s17.908 40 40 40h240c22.092 0 40-17.908 40-40z", form: "M948.362 178.828l-471.082 470.086c-0.24 0.25-0.45 0.52-0.698 0.77-7.82 7.82-18.070 11.722-28.32 11.712-10.25 0.010-20.504-3.892-28.324-11.712-0.262-0.262-0.48-0.546-0.734-0.812l-221.736-221.738c-15.624-15.622-15.624-40.95 0-56.566 15.618-15.622 40.946-15.624 56.57 0l194.224 194.222 443.53-442.528c15.622-15.618 40.95-15.618 56.57 0 15.62 15.62 15.62 40.946 0 56.566zM98.372 128.448c-18.926 0-34.266 15.342-34.266 34.268v699.032c0 18.926 15.34 34.266 34.266 34.266h699.032c18.926 0 34.266-15.34 34.266-34.266v-430.588c0 0 0.002-1.184 0.002-1.788 0-22.090-17.914-40-40.004-40s-40 17.91-40 40c0 0.288 0.002 386.64 0.002 386.64h-607.562v-607.564h600.002c22.090-0.002 40.002-17.906 40.002-40 0-22.090-17.914-40-40.004-40z", check: "M948.598 199.75c-15.622-15.618-40.95-15.618-56.57 0l-535.644 535.644-224.060-224.062c-15.624-15.624-40.954-15.62-56.57 0-15.624 15.62-15.624 40.948 0 56.568l251.574 251.574c0.252 0.266 0.472 0.55 0.734 0.812 7.82 7.82 18.072 11.724 28.322 11.714 10.25 0.010 20.502-3.894 28.322-11.714 0.248-0.248 0.456-0.518 0.698-0.77l563.196-563.202c15.618-15.618 15.618-40.94-0.002-56.564z", batchaccept: "M684 277L271 772l-1 1a40 40 0 0 1-56 5l-1-1L14 610a40 40 0 1 1 52-61l169 142 387-465a40 40 0 0 1 62 51zm340 234c0-22-18-40-40-40H808a40 40 0 0 0 0 80h176c22 0 40-18 40-40zm0-216c0-22-18-40-40-40H808a40 40 0 0 0 0 80h176c22 0 40-18 40-40zm0 432c0-22-18-40-40-40H808a40 40 0 0 0 0 80h176c22 0 40-18 40-40z", batchdeny: "M1024 512c0-22-18-40-40-40H808a40 40 0 0 0 0 80h176c22 0 40-18 40-40zm0-216c0-22-18-40-40-40H808a40 40 0 0 0 0 80h176c22 0 40-18 40-40zm0 432c0-22-18-40-40-40H808a40 40 0 0 0 0 80h176c22 0 40-18 40-40zM625 236c16 15 16 41 0 56L406 512l220 220a40 40 0 1 1-57 57L349 568 129 788a40 40 0 1 1-57-56l220-220L73 292a40 40 0 0 1 56-57l220 220 219-219c16-16 41-16 57 0z", home: "M948.12 483.624l-407.814-407.754c-7.812-7.808-18.046-11.712-28.282-11.712-10.238 0-20.472 3.904-28.282 11.712l-407.92 407.86c-15.624 15.622-15.624 40.948-0.006 56.57s40.944 15.622 56.568 0.004l19.616-19.612v366.708c0 22.090 17.91 40 40 40h190.696c0.416 0.014 0.82 0.062 1.238 0.062 11.054 0 21.060-4.484 28.3-11.734 7.266-7.244 11.766-17.262 11.766-28.332 0-0.418-0.050-0.822-0.062-1.238v-263.204h176.060v263.934c0 22.090 17.91 40 40 40l191.876 0.124c2.292 0 4.524-0.236 6.708-0.608 0.45-0.074 0.91-0.116 1.356-0.206 0.21-0.044 0.414-0.116 0.628-0.162 17.906-3.972 31.308-19.924 31.308-39.026v-366.492l19.682 19.68c15.622 15.62 40.948 15.616 56.568-0.006s15.618-40.948-0.004-56.568zM791.876 448.272v398.71l-111.874-0.074v-263.876c0-0.020-0.002-0.042-0.002-0.062 0-0.006 0-0.014 0-0.022 0-22.090-17.91-40-40-40h-254.002c-0.556 0-1.1 0.060-1.65 0.084-0.14-0.002-0.274-0.022-0.414-0.022-22.090 0-40 17.91-40 40v264.382h-111.934v-399.392c0-2.286-0.234-4.512-0.604-6.694l280.626-280.584 280.514 280.472c-0.412 2.302-0.66 4.658-0.66 7.078z", admin: "M919.596 847.534h-88.414v-467.716l88.75-0.044c13.688-0.132 26.958-7.25 34.294-19.96 11.044-19.13 4.49-43.596-14.642-54.64l-407.904-235.676c-0.44-0.254-0.894-0.45-1.34-0.684-0.542-0.29-1.084-0.578-1.638-0.84-0.696-0.328-1.4-0.62-2.108-0.904-0.478-0.194-0.954-0.388-1.44-0.56-0.78-0.282-1.564-0.524-2.352-0.754-0.442-0.126-0.878-0.256-1.324-0.37-0.808-0.206-1.618-0.376-2.43-0.528-0.468-0.088-0.934-0.174-1.404-0.246-0.768-0.116-1.534-0.204-2.302-0.274-0.554-0.052-1.108-0.096-1.664-0.124-0.672-0.034-1.34-0.044-2.012-0.044-0.67 0-1.338 0.012-2.010 0.044-0.556 0.030-1.11 0.072-1.664 0.124-0.77 0.070-1.536 0.158-2.302 0.274-0.468 0.072-0.938 0.158-1.402 0.246-0.814 0.152-1.624 0.322-2.432 0.528-0.444 0.114-0.882 0.242-1.322 0.37-0.79 0.23-1.574 0.472-2.356 0.754-0.484 0.172-0.958 0.368-1.438 0.56-0.708 0.286-1.41 0.576-2.11 0.904-0.554 0.262-1.094 0.55-1.636 0.84-0.446 0.234-0.9 0.43-1.34 0.684l-407.906 235.672c-19.128 11.044-25.686 35.51-14.64 54.64 7.34 12.71 20.606 19.828 34.292 19.96v0.044h89.842v467.716h-89.474c-22.090 0-40 17.91-40 40s17.91 40 40 40h128.276c0.402 0.012 0.794 0.060 1.2 0.060s0.796-0.048 1.2-0.060h183.602c0.402 0.012 0.794 0.060 1.2 0.060s0.796-0.048 1.2-0.060h183.602c0.402 0.012 0.794 0.060 1.2 0.060s0.796-0.048 1.2-0.060h313.154c22.098 0 40-17.91 40-40-0.006-22.090-17.914-39.996-40.006-39.996zM751.182 847.534h-105.94v-467.716h105.94v467.716zM252.93 299.816l258.736-149.486 258.738 149.486h-517.474zM565.242 379.816v467.716h-106v-467.716h106zM273.242 379.816h106v467.716h-106v-467.716z", paragraph: "M728.032 96.032h-116.98c-0.026 0-0.050-0.004-0.076-0.004s-0.050 0.004-0.076 0.004h-199.848c-0.026 0-0.050-0.004-0.076-0.004s-0.050 0.004-0.076 0.004h-31.924c-123.712 0-224 100.292-224 224 0 121.032 95.994 219.628 216 223.842v344.158c0 22.092 17.91 40 40 40 22.086 0 40-17.908 40-40v-712h120v712c0 22.092 17.91 40 40 40 22.086 0 40-17.908 40-40v-712h77.056c22.094 0 40-17.91 40-40 0-22.092-17.91-40-40-40z", basket: "M632.254 695.604v-112.016c-0.004-22.092 17.906-40.002 40-40.002 22.090 0.002 40 17.908 40 40.002l-0.004 112.018c0.004 22.088-17.906 39.996-39.996 39.998-22.094 0.002-40.004-17.904-40-40zM352.246 735.604c22.090-0.002 40-17.91 39.996-39.998l0.004-112.018c0-22.094-17.91-40-40-40.002-22.094 0-40.004 17.91-40 40.002v112.016c-0.004 22.096 17.906 40.002 40 40zM512.25 735.604c22.090-0.002 40-17.91 39.996-39.998l0.004-112.018c0-22.094-17.91-40-40-40.002-22.094 0-40.004 17.91-40 40.002v112.016c-0.004 22.096 17.906 40.002 40 40zM950.3 397.424c-7.596-8.686-18.574-13.67-30.114-13.67h-313.284c0.87 5.196 1.346 10.524 1.346 15.966 0 24.608-9.27 47.044-24.494 64.034h290.684l-47.318 351.376-629.908-0.030-47.502-351.346h291.034c-15.224-16.988-24.494-39.426-24.494-64.034 0-5.444 0.476-10.772 1.346-15.966h-313.66c-11.542 0-22.524 4.986-30.12 13.678-7.596 8.694-11.066 20.242-9.52 31.682l51.614 381.742 0.050 0.042c5.832 47.424 46.222 84.158 95.222 84.172l0.054 0.034 601.816-0.034c0.042 0 0.082 0.002 0.124 0.002 49.414 0 90.090-37.34 95.396-85.336l51.258-380.64c1.54-11.44-1.934-22.984-9.53-31.672zM805.492 105.34c-15.622-15.622-40.95-15.624-56.572 0.004l-230.684 230.684c-2.052-0.2-4.132-0.306-6.236-0.306-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64c0-2.652-0.18-5.262-0.494-7.83l229.986-229.98c15.622-15.624 15.616-40.95-0-56.572z", credit: "M376.188 672.062h-112.124c-22.092 0-40-17.908-40-40s17.908-40 40-40h112.124c22.092 0 40 17.908 40 40s-17.908 40-40 40zM960 232.002v560c0 6.8-1.708 13.2-4.704 18.81-0.044 0.082-0.078 0.172-0.124 0.254-0.524 0.974-1.112 1.914-1.722 2.836-0.098 0.15-0.18 0.31-0.282 0.458-7.188 10.64-19.36 17.638-33.168 17.638h-816c-22.090 0-40-17.908-40-40v-559.998c0-20.34 15.192-37.092 34.838-39.628 1.694-0.218 3.408-0.372 5.162-0.372h816c1.754 0 3.468 0.152 5.162 0.372 19.646 2.536 34.838 19.288 34.838 39.63zM144 272.002v80.030h736v-80.030h-736zM880 751.998v-239.966h-736v239.966h736z", shield: "M875.146 148.994c-0.064-0.040-0.116-0.094-0.184-0.132-92.714-52.39-221.036-84.83-362.846-84.83-138.512 0-270.346 34.356-362.51 84.618-0.606 0.33-1.138 0.658-1.608 0.986-11.954 6.918-20.016 19.81-20.016 34.614v451.4c0 12.7 5.938 23.996 15.166 31.32l340.538 281.676c6.568 6.434 14.918 10.168 23.564 11.122 0.16 0.024 0.32 0.050 0.48 0.066 0.838 0.082 1.676 0.114 2.518 0.14 0.496 0.020 0.994 0.058 1.492 0.058s0.996-0.040 1.492-0.058c0.842-0.032 1.68-0.058 2.518-0.14 0.16-0.016 0.32-0.042 0.48-0.066 8.646-0.958 16.996-4.688 23.564-11.122l339.36-280.718c10.326-7.23 17.094-19.2 17.094-32.762v-450.918c0.002-15.254-8.54-28.506-21.102-35.254zM207.984 208.212c36.292-18.168 77.668-32.854 123.356-43.722 57.062-13.576 117.884-20.458 180.778-20.458s123.714 6.882 180.778 20.458c30.186 7.182 58.474 16.040 84.674 26.456l-490.846 490.848-78.738-65.070v-408.512zM511.742 867.75l-163.078-134.77 467.586-467.584v350.69l-304.508 251.664z", beaker: "M848.64 790.56l-208.638-361.374v-252.062h24c22.092 0 40-17.908 40-40s-17.908-40-40-40h-304.002c-22.092 0-40 17.908-40 40s17.908 40 40 40h24v252.066l-208.636 361.37c-44 76.208-8 138.564 80 138.564h513.278c87.998 0 123.998-62.354 79.998-138.564zM464 177.124h96.002l-0.070 273.376 63.872 110.628h-223.678c35.932-62.268 63.872-110.684 63.876-110.692v-273.312zM768.64 849.124h-513.278c-8.28 0-14.186-0.976-17.968-2 1.004-3.792 3.112-9.394 7.25-16.564 0 0 54.598-94.614 109.316-189.436l316.026-0.002 109.374 189.44c4.138 7.168 6.246 12.77 7.25 16.562-3.784 1.024-9.69 2-17.97 2z", thumbsup: "M256.972 768.004c0-8.67-3.156-16.158-9.484-22.534-6.332-6.34-13.836-9.484-22.504-9.458-8.682 0-16.188 3.172-22.516 9.458-6.33 6.344-9.488 13.84-9.488 22.534 0 8.692 3.158 16.186 9.488 22.532 6.328 6.286 13.834 9.458 22.516 9.458 8.668 0.028 16.172-3.118 22.504-9.458 6.328-6.376 9.484-13.868 9.484-22.532zM832.948 480.010c0-17.004-6.478-31.908-19.468-44.734-13.014-12.82-27.834-19.25-44.512-19.276h-175.97c0-19.328 7.98-45.904 24.004-79.724 15.968-33.826 23.978-60.568 23.978-80.256 0-32.646-5.332-56.808-15.994-72.48-10.664-15.664-31.988-23.484-63.98-23.484-8.696 8.64-15.012 22.828-19.032 42.486-4.020 19.69-9.102 40.606-15.254 62.752-6.168 22.172-16.080 40.382-29.762 54.738-7.344 7.68-20.168 22.832-38.5 45.496-1.326 1.67-5.164 6.65-11.512 15.010-6.342 8.342-11.594 15.178-15.762 20.508-4.156 5.308-9.91 12.386-17.252 21.218-7.328 8.862-14 16.186-19.988 22.038-5.986 5.794-12.412 11.73-19.26 17.744-6.852 5.984-13.508 10.5-19.99 13.48-6.478 3.010-12.4 4.484-17.756 4.512h-15.982v320.010h15.982c4.332 0 9.596 0.492 15.774 1.504 6.168 1.012 11.676 2.080 16.488 3.258 4.812 1.144 11.154 2.98 19.002 5.466 7.862 2.512 13.702 4.424 17.502 5.74 3.812 1.31 9.732 3.422 17.756 6.238 8.026 2.842 12.866 4.586 14.506 5.272 70.324 24.334 127.304 36.504 170.996 36.504h60.482c64.006 0 96.024-27.836 96.024-83.478 0-8.664-0.848-18.016-2.514-27.996 10.004-5.334 17.936-14.084 23.758-26.276 5.824-12.172 8.724-24.416 8.778-36.746 0-12.366-3.008-23.844-9.024-34.51 17.664-16.682 26.524-36.496 26.524-59.496 0-8.308-1.696-17.554-5.032-27.72-3.336-10.202-7.492-18.104-12.468-23.762 10.636-0.328 19.55-8.15 26.714-23.486 7.192-15.34 10.744-28.82 10.744-40.496v-0.054zM896.984 479.516c0 29.638-8.204 56.816-24.5 81.506 2.98 10.994 4.484 22.476 4.484 34.482 0 25.674-6.344 49.68-19.004 71.99 1.012 7 1.506 14.164 1.506 21.488 0 33.688-10.008 63.354-29.968 89.026 0.326 46.32-13.834 82.904-42.518 109.756-28.682 26.848-66.522 40.246-113.496 40.246h-64.528c-31.99 0-63.542-3.746-94.742-11.268-31.168-7.492-67.246-18.402-108.23-32.758-38.662-13.312-61.656-19.956-68.984-19.956h-143.996c-17.664 0-32.742-6.292-45.252-18.784-12.508-12.5-18.756-27.588-18.756-45.254v-319.982c0-17.666 6.248-32.728 18.756-45.226 12.51-12.52 27.588-18.784 45.252-18.784h136.998c12.002-8.010 34.818-33.822 68.478-77.484 19.33-24.99 37.168-46.344 53.508-64.008 7.996-8.314 13.918-22.586 17.744-42.766 3.828-20.178 8.912-41.232 15.256-63.24 6.36-21.984 16.68-40.002 30.994-53.998 13.002-12.362 28.012-18.514 45.018-18.514 27.998 0 53.152 5.414 75.464 16.242 22.31 10.828 39.316 27.748 50.964 50.77 11.704 23.002 17.5 53.978 17.5 92.962 0 31.008-7.984 63-23.98 96.028h88.014c34.67 0 64.634 12.628 89.956 37.98 25.346 25.346 38.008 55.144 38.008 89.49l0.054 0.056z", mirror: "M857 127.778h-688c-22.092 0-40 17.91-40 40v688c0 22.090 17.908 40 40 40h688c22.094 0 40-17.91 40-40v-688c0-22.092-17.906-40-40-40zM817 815.778h-608v-1.086l606.914-606.914h1.086v608z", switchalt: "M923.946 63.418h-631.232c-20.268 0-36.7 16.432-36.7 36.7v155.286h-155.284c-20.268 0-36.7 16.432-36.7 36.7v631.23c0 20.268 16.43 36.7 36.7 36.7h631.23c20.272 0 36.7-16.432 36.7-36.7v-155.286h155.286c20.272 0 36.7-16.432 36.7-36.7v-631.23c-0.002-20.268-16.43-36.7-36.7-36.7zM688.66 880.032h-544.628v-544.628h111.984v395.946c0 20.268 16.43 36.7 36.7 36.7h395.944v111.982zM688.66 688.046h-352.644v-352.644h352.644v352.644zM880.644 688.046h-111.984v-395.946c0-20.268-16.428-36.7-36.7-36.7h-395.944v-111.984h544.628v544.63z", commit: "M984.032 472h-186.808c-19.474-140.12-139.74-248-285.222-248s-265.748 107.88-285.222 248h-186.746c-22.092 0-40 17.912-40 40.002 0 22.092 17.91 40 40 40h186.746c19.476 140.122 139.74 247.998 285.222 247.998s265.746-107.876 285.222-247.998h186.808c22.092 0 40-17.91 40-40s-17.908-40.002-40-40.002zM512 720c-114.692 0-208-93.308-208-208s93.308-208 208-208 208 93.308 208 208-93.308 208-208 208z", branch: "M861.968 312.032c0-66.168-53.832-120-120-120s-120 53.832-120 120c0 50.55 31.436 93.87 75.77 111.516-5.384 20.352-15.71 39.68-29.844 54.92-28.828 31.092-72.202 46.858-128.91 46.858-77.162 0-129.12 26.162-162.984 55.12V297.15c46.556-16.512 80-60.974 80-113.12 0-66.168-53.832-120-120-120s-120 53.832-120 120c0 52.146 33.444 96.608 80 113.12v429.762c-46.556 16.512-80 60.974-80 113.12 0 66.168 53.832 120 120 120s120-53.832 120-120c0-50.926-31.902-94.514-76.758-111.908 5.222-26.17 16.578-51.154 32.558-70.432 28.8-34.746 71.592-52.364 127.184-52.364 99.498 0 156.922-39.408 187.574-72.466 27.402-29.554 45.708-67.194 52.48-106.716 48.078-15.66 82.93-60.882 82.93-114.114zM336 144.032c22.056 0 40 17.944 40 40s-17.944 40-40 40-40-17.944-40-40 17.944-40 40-40zm0 736c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40zm405.968-528c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.942 40-40 40z", merge: "M776.306 456.032c-51.602 0-95.696 32.744-112.612 78.542-69.674-6.072-141.482-31.012-197.386-69.306-46.266-31.69-100.392-85.728-111.792-168.92 45.4-17.12 77.79-60.998 77.79-112.314 0-66.168-53.832-120-120-120s-120 53.832-120 120c0 52.146 33.444 96.608 80 113.12v429.762c-46.556 16.512-80 60.974-80 113.12 0 66.168 53.832 120 120 120s120-53.832 120-120c0-52.146-33.444-96.608-80-113.12V471.444c19.622 21.888 42.618 41.898 68.792 59.828 68.422 46.868 156.64 77.042 241.646 83.462 16.14 47.23 60.932 81.3 113.56 81.3 66.168 0 120-53.832 120-120s-53.83-120.002-119.998-120.002zm-464-312c22.056 0 40 17.944 40 40s-17.944 40-40 40-40-17.944-40-40 17.942-40 40-40zm0 736c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40zm464-264c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z", pullrequest: "M631 157c104 1 171 52 171 166v397a123 123 0 1 1-82 0V323c0-63-27-83-90-84h-24l22 23a41 41 0 1 1-58 58l-93-93a41 41 0 0 1 1-58l93-93a41 41 0 1 1 58 58l-23 23h25zM222 314a123 123 0 1 1 82 0v406a123 123 0 1 1-82 0V314zm41 564a41 41 0 1 0 0-82 41 41 0 0 0 0 82zm0-639a41 41 0 1 0 0-83 41 41 0 0 0 0 83zm498 639a41 41 0 1 0 0-82 41 41 0 0 0 0 82z", chromatic: "M512 0a512 512 0 110 1024A512 512 0 01512 0zM368 452v284a144 144 0 00274 59c-10-4-20-8-29-14l-111-64c-6-3-10-10-10-16V523l-124-71zm454 89c-8 7-17 13-26 18L551 701l81 46 1 1a144 144 0 00189-207zm-493-89l-81 47h-1a143 143 0 00-52 196 144 144 0 00137 71c-2-10-3-21-3-32V452zm375-195l-12 1c2 10 3 21 3 32v128c0 7-4 13-10 17l-154 88v144l245-142 2-1a144 144 0 00-74-267zm-384 0c-51 0-99 28-125 72-28 49-25 109 7 154 8-7 17-13 26-18l111-64a20 20 0 0120 0l153 88 124-71-244-141-1-1c-22-12-46-19-71-19zm192-111c-57 0-107 33-130 83 10 4 19 8 29 14l245 141v-96c-2-79-66-142-144-142z", twitter: "M960 233.114c-32.946 14.616-68.41 24.5-105.598 28.942 37.954-22.762 67.098-58.774 80.856-101.688-35.52 21.054-74.894 36.368-116.726 44.598-33.542-35.724-81.316-58.038-134.204-58.038-101.496 0-183.796 82.292-183.796 183.814 0 14.424 1.628 28.45 4.758 41.89-152.75-7.668-288.22-80.872-378.876-192.072-15.822 27.15-24.898 58.706-24.898 92.42 0 63.776 32.458 120.034 81.782 153.010-30.116-0.944-58.458-9.212-83.262-22.982-0.028 0.75-0.028 1.546-0.028 2.324 0 89.070 63.356 163.334 147.438 180.256-15.426 4.186-31.664 6.426-48.442 6.426-11.836 0-23.35-1.146-34.574-3.28 23.406 73.006 91.286 126.16 171.726 127.632-62.914 49.324-142.18 78.696-228.314 78.696-14.828 0-29.448-0.876-43.842-2.568 81.33 52.138 177.96 82.574 281.786 82.574 338.11 0 523-280.104 523-523.014 0-7.986-0.164-15.914-0.542-23.778 35.952-25.96 67.124-58.318 91.756-95.162z", google: "M799.094 79.996c0 0-200.938 0-267.936 0-120.126 0-233.188 91.004-233.188 196.434 0 107.692 81.904 194.624 204.124 194.624 8.496 0 16.75-0.148 24.812-0.74-7.942 15.186-13.594 32.286-13.594 50.022 0 29.974 16.094 54.226 36.466 74.042-15.376 0-30.248 0.438-46.438 0.438-148.782 0.036-263.312 94.784-263.312 193.056 0 96.758 125.534 157.312 274.312 157.312 169.656 0 263.312-96.25 263.312-193.024 0-77.6-22.908-124.062-93.686-174.156-24.216-17.128-70.534-58.812-70.534-83.32 0-28.69 8.19-42.868 51.406-76.624 44.346-34.63 75.688-83.302 75.688-139.944 0-67.372-30-133.058-86.374-154.746h85l59.942-43.374zM701.504 735.438c2.092 8.992 3.276 18.226 3.276 27.624 0 78.226-50.374 139.304-194.934 139.304-102.874 0-177.124-65.078-177.124-143.304 0-76.622 92.122-140.434 194.934-139.32 24.004 0.254 46.376 4.136 66.69 10.702 55.812 38.834 95.874 60.808 107.158 104.994zM536.844 443.782c-69-2.094-134.624-77.212-146.564-167.876-11.874-90.664 34.378-160.030 103.442-157.97 68.996 2.060 134.594 74.818 146.53 165.432 11.906 90.696-34.408 162.508-103.408 160.414z", gdrive: "M465.926 641.356l-149.328 258.708h494.074l149.328-258.708h-494.074zM917.704 567.988l-256.33-444.048h-298.686l256.356 444.048h298.66zM320.236 197.442l-256.236 443.914 149.36 258.708 256.23-443.914-149.354-258.708z", youtube: "M704.010 511.988c0-12.332-5.038-21.358-15.042-26.992l-255.982-159.99c-10.344-6.666-21.178-6.998-32.51-1.008-10.988 5.984-16.492 15.312-16.492 28.002v320c0 12.69 5.504 22.018 16.492 28.002 5.332 2.678 10.516 3.996 15.506 3.996 6.668 0 12.334-1.644 17.004-4.98l255.982-160.014c10.004-5.69 15.042-14.684 15.042-26.992v-0.024zM960 511.988c0 31.99-0.164 56.98-0.488 75.032-0.334 17.99-1.754 40.738-4.27 68.25-2.516 27.504-6.262 52.058-11.27 73.742-5.332 24.338-16.84 44.85-34.504 61.496-17.64 16.63-38.306 26.308-61.96 28.988-73.992 8.342-185.824 12.526-335.508 12.526-149.668 0-261.5-4.184-335.5-12.526-23.662-2.656-44.414-12.302-62.242-28.988-17.834-16.678-29.412-37.182-34.744-61.496-4.672-21.684-8.258-46.238-10.756-73.742-2.508-27.512-3.928-50.26-4.254-68.25-0.342-18.050-0.504-43.042-0.504-75.032 0-31.998 0.162-57.010 0.504-75.008 0.326-18.022 1.746-40.768 4.254-68.28 2.498-27.474 6.262-52.082 11.252-73.744 5.34-24.336 16.842-44.842 34.504-61.496 17.648-16.654 38.324-26.332 61.986-29.010 74-8.312 185.832-12.472 335.5-12.472 149.684 0 261.516 4.16 335.508 12.472 23.654 2.678 44.406 12.356 62.232 29.010 17.826 16.678 29.422 37.16 34.73 61.496 4.702 21.662 8.256 46.27 10.772 73.744 2.516 27.512 3.936 50.258 4.27 68.28 0.324 17.998 0.488 43.010 0.488 75.008z", facebook: "M582.52 960h-167.88v-448h-112v-154.396l112-0.052-0.166-90.948c-0.036-125.974 34.12-202.604 182.484-202.604h123.542v154.424h-77.19c-57.782 0-60.566 21.56-60.566 61.85l-0.218 77.278h138.854l-16.376 154.394-122.36 0.052-0.124 448.002z", medium: "M0 0v1024h1024v-1024h-1024zM850.708 242.614l-54.918 52.655c-3.858 2.965-6.321 7.581-6.321 12.772 0 0.933 0.080 1.847 0.232 2.736l-0.014-0.095v386.883c-0.139 0.794-0.219 1.708-0.219 2.641 0 5.191 2.462 9.807 6.283 12.744l0.038 0.028 53.637 52.655v11.558h-269.774v-11.558l55.559-53.936c5.461-5.456 5.461-7.068 5.461-15.413v-312.719l-154.477 392.344h-20.874l-179.851-392.344v262.947c-0.209 1.465-0.329 3.156-0.329 4.875 0 9.848 3.924 18.78 10.293 25.317l-0.008-0.008 72.258 87.649v11.558h-204.895v-11.558l72.263-87.649c6.070-6.284 9.81-14.852 9.81-24.293 0-2.081-0.182-4.12-0.53-6.101l0.031 0.21v-304.044c0.086-0.804 0.135-1.737 0.135-2.682 0-7.844-3.389-14.896-8.782-19.773l-0.023-0.021-64.234-77.378v-11.558h199.438l154.157 338.083 135.53-338.083h190.123v11.558z", graphql: "M576 849a85 85 0 0 0-125-2L253 733l1-3h517l2 5-197 114zM451 177l2 2-258 448-3-1V398a85 85 0 0 0 61-107l198-114zm321 114a85 85 0 0 0 61 107v228l-3 1-258-448 2-2 198 114zM254 689a85 85 0 0 0-24-42l259-447a86 86 0 0 0 47 0l259 448a85 85 0 0 0-24 41H254zm643-54c-7-4-15-7-23-9V398a86 86 0 1 0-82-142L595 142a85 85 0 1 0-165 0L233 256a85 85 0 1 0-82 142v228a85 85 0 1 0 82 142l197 114a85 85 0 1 0 164-2l196-114a86 86 0 1 0 107-131z", redux: "M359.016 943.608c-23.82 5.948-47.642 8.322-71.512 8.322-88.208 0-168.084-36.982-207.444-96.534-52.432-79.882-70.296-249.182 102.538-374.356 3.586 19.078 10.746 45.292 15.492 60.834-22.656 16.652-58.39 50.064-81.046 95.324-32.19 63.184-28.61 126.404 9.54 184.798 26.194 39.304 67.926 63.176 121.564 70.34 65.598 8.332 131.154-3.582 194.332-36.94 92.998-48.898 155.014-107.282 195.49-187.162-10.702-10.75-17.818-26.248-19.074-44.15-1.168-36.942 27.45-67.922 64.388-69.132h2.418c35.73 0 65.55 28.61 66.714 64.384 1.206 35.73-24.986 65.546-59.548 69.132-65.6 134.686-181.254 225.312-333.852 255.14zM902.646 540.622c-90.59-106.072-224.11-164.488-376.708-164.488h-19.072c-10.744-21.444-33.402-35.752-58.388-35.752h-2.418c-36.944 1.186-65.548 32.192-64.392 69.13 1.216 35.774 30.99 64.394 66.81 64.394h2.328c26.242-1.208 48.894-17.892 58.434-40.542h21.45c90.624 0 176.46 26.234 253.968 77.482 59.55 39.36 102.49 90.576 126.356 152.596 20.24 50.052 19.074 98.952-2.42 140.64-33.356 63.228-89.37 97.794-163.292 97.794-47.69 0-92.998-14.33-116.822-25.082-13.118 11.958-36.984 31.028-53.64 42.944 51.226 23.87 103.7 36.94 153.762 36.94 114.446 0 199.070-63.132 231.268-126.362 34.562-69.13 32.188-188.326-57.224-289.694zM297.046 708.706c1.21 35.828 30.984 64.394 66.764 64.394h2.368c36.992-1.168 65.556-32.15 64.39-69.132-1.162-35.732-30.984-64.394-66.758-64.394h-2.376c-2.418 0-5.958 0-8.332 1.208-48.89-81.090-69.132-169.27-62.014-264.648 4.792-71.528 28.616-133.516 70.346-184.766 34.568-44.106 101.326-65.57 146.598-66.758 126.402-2.396 180.044 154.968 183.576 218.144 15.542 3.584 41.734 11.936 59.644 17.892-14.328-193.118-133.526-293.266-247.97-293.266-107.28 0-206.236 77.484-245.552 191.932-54.848 152.596-19.070 299.212 47.644 414.826-5.912 8.374-9.494 21.498-8.328 34.568z", github: "M214.6 809.4A417.8 417.8 0 0191.4 512c0-112.3 43.8-218 123.2-297.4A417.8 417.8 0 01512 91.4c112.3 0 218 43.8 297.4 123.2A417.8 417.8 0 01932.6 512c0 112.3-43.8 218-123.2 297.4-49 49-108 84.3-172.2 104.3v-74.4c0-39.5-13.6-68.6-40.7-87.2a354 354 0 0091.9-19.6c15.8-5.6 30-12.2 42.6-19.9a177.8 177.8 0 0036.3-29.8 175 175 0 0029.1-41.7 228 228 0 0018.6-55.9c4.6-21.7 6.9-45.6 6.9-71.7 0-50.7-16.5-93.8-49.5-129.4 15-39.2 13.4-81.8-4.9-127.9l-12.2-1.4c-8.5-1-23.8 2.6-45.8 10.8-22 8.1-46.8 21.5-74.3 40.1a450.9 450.9 0 00-121-16.1 442 442 0 00-120.5 16.1 419.6 419.6 0 00-49.3-29.1c-15.5-7.7-27.9-13-37.2-15.7a127.6 127.6 0 00-41.4-5.6c-2.3.3-4 .6-4.9 1-18.3 46.3-20 89-4.9 127.8a183.5 183.5 0 00-49.5 129.4c0 26.1 2.3 50 6.9 71.7a228.3 228.3 0 0018.6 56 175 175 0 0029.1 41.6 177.9 177.9 0 0036.3 29.8 223.4 223.4 0 0042.6 19.9A353.2 353.2 0 00432 752c-26.8 18.3-40.2 47.3-40.2 87.2v75.9a418.4 418.4 0 01-177-105.8M512 0a512 512 0 100 1024A512 512 0 00512 0", bitbucket: "M362.3 395l53 276.5h195.4l34-198.4h283l-74.4 457a30 30 0 01-29.7 25.3H210.7a41 41 0 01-40-34.2l-127.6-775a30 30 0 0130-34.9l877.8.2a30 30 0 0130 34.8L940.5 395H362.3z", gitlab: "M186.9 75a18.7 18.7 0 0135.6 0l108.8 333.4h361.4L512 961.8 331.3 408.4H78.1zM78.1 408.5L512 961.8 36.8 618.2a37.1 37.1 0 01-13.6-41.6L78 408.4zm867.8 0l55 168.2c5 15.3-.5 32.1-13.7 41.6L512 961.8l434-553.4zM837.1 75l108.8 333.3H692.7L801.5 75a18.7 18.7 0 0135.6 0z", azuredevops: "M0,378.6 L95.8,252 L454.4,106.2 L454.4,1 L768.8,231 L126.6,355.8 L126.6,706.8 L0,670.2 L0,378.6 Z M1024,188.8 L1024,814 L778.6,1023 L381.8,892.6 L381.8,1023 L126.6,706.6 L769,783.2 L769,231 L1024,188.8 Z", discord: "M371 147c-14 0-126 3-245 91 0 0-126 227-126 507 0 0 74 126 268 132l58-71c-111-34-153-103-153-103l24 15 4 2 8 4a668 668 0 0 0 420 68 629 629 0 0 0 228-89s-44 71-159 103l58 71c194-7 268-133 268-132 0-280-126-507-126-507-126-94-246-91-246-91l-12 14a576 576 0 0 1 218 110 729 729 0 0 0-441-81l-15 1c-31 4-105 14-199 56-33 14-52 24-52 24s72-69 230-114l-9-10h-1zm-23 323c50 0 91 43 90 97 0 53-40 96-90 96-49 0-89-43-89-96 0-54 39-97 89-97zm321 0c49 0 89 43 89 97 0 53-39 96-89 96s-90-43-90-96c0-54 40-97 90-97z", contrast: "M368 713h79l266-266v-79L368 713zm192 0h153V560L560 713zm98-402h-79L311 579v79l347-347zm-192 0H311v155l155-155zm467 402V91H311v128h452c23 0 42 19 42 42v452h128zM713 933V805H261c-23 0-42-19-42-42V311H91v622h622zM982 0c23 0 42 19 42 42v721c0 23-19 42-42 42H805v177c0 23-19 42-42 42H42c-23 0-42-19-42-42V261c0-23 19-42 42-42h177V42c0-23 19-42 42-42h721z", unfold: "M512 645l8 1c21 4 37 22 37 44v181l52-52 6-6a45 45 0 0 1 58 69l-129 129-7 5a45 45 0 0 1-57-5L351 882l-5-6a45 45 0 0 1 5-57l7-6c17-12 41-10 57 6l52 52V690l1-8c4-21 22-37 44-37zM337 275a45 45 0 1 1 0 90H229l91 102h382l91-102H685a45 45 0 1 1 0-90h208c39 0 59 46 34 75L782 512l145 162c25 29 5 75-34 75H685a45 45 0 1 1 0-90h108l-91-102H320l-91 102h108a45 45 0 1 1 0 90H129c-38 0-59-46-33-75l144-162L96 350c-24-27-8-69 26-74l7-1h208zM537 8l7 6 129 129a45 45 0 0 1-58 68l-6-5-52-52v181c0 22-16 40-37 44h-8c-22 0-40-15-44-36l-1-8V153l-52 53a45 45 0 0 1-57 5l-7-5a45 45 0 0 1-5-57l5-6L480 14c16-16 40-18 57-6z", sharealt: "M130 85h332a45 45 0 0 1 8 89l-8 1H175v674h674V557a45 45 0 0 1 89-8l1 8v337c0 22-16 40-37 44l-8 1H130c-22 0-40-16-44-37l-1-8V130c0-22 16-40 37-44l8-1h332-332zm555 0h210l5 1-6-1a45 45 0 0 1 32 13l-5-4 3 3 2 1a46 46 0 0 1 12 24v2l1 5v209a45 45 0 0 1-89 8l-1-8V238L544 544a45 45 0 0 1-57 5l-7-5a45 45 0 0 1 0-64l306-305H685a45 45 0 0 1-8-89l8-1h209-209z", accessibility: "M512 0a512 512 0 110 1024A512 512 0 01512 0zm0 89.6a422.4 422.4 0 100 844.8 422.4 422.4 0 000-844.8zm262.2 250a40.9 40.9 0 01-27.5 49.3l-169.1 50.7c-8.2 2.7-15.1 11-13.7 20.5 1.3 27.4 1.5 76.5 7 98.4 12.9 59 82.4 214.4 91 233.6a56 56 0 014.9 19 40 40 0 01-40 40c-18 0-30.3-12.7-38.2-28.4A34096 34096 0 01510.9 664l-77.7 165.7-1.3 2.1a40 40 0 01-69.3-39.7c8.6-19 78-174.5 90.8-233.6 5.5-21.9 6-71 7.3-98.4a21 21 0 00-13.7-20.5l-169.1-50.7a40.7 40.7 0 01-27.5-50.7c6.9-20.5 30.2-30.1 50.9-24.6 0 0 154.6 49.3 209.6 49.3s213.8-50.7 213.8-50.7c20.6-5.5 44 6.8 49.5 27.4zm-264-171.2a76.7 76.7 0 110 153.4c-42.6 0-77-34.2-77-76.7 0-41 34.4-76.7 77-76.7z", accessibilityalt: "M512 0a512 512 0 110 1024A512 512 0 01512 0zm262.2 339.6c-5.5-20.6-28.9-32.9-49.5-27.4 0 0-158.8 50.7-213.8 50.7s-209.6-49.3-209.6-49.3c-20.7-5.5-44 4-51 24.6A40.7 40.7 0 00278 389l169 50.7a21 21 0 0113.8 20.5c-1.3 27.4-1.8 76.5-7.3 98.4-12.9 59.1-82.2 214.5-90.8 233.6a40 40 0 1070.6 37.5L511 664a34096 34096 0 0077.7 158.7c7.9 15.7 20.2 28.4 38.2 28.4a40 40 0 0040-40 56 56 0 00-4.8-19c-8.7-19.2-78.2-174.5-91.1-233.6-5.5-21.9-5.7-71-7-98.4-1.4-9.6 5.5-17.8 13.7-20.5l169.1-50.7a40.9 40.9 0 0027.5-49.3zm-264-171.2c-42.6 0-77 35.6-77 76.7a76.7 76.7 0 0077 76.7 76.7 76.7 0 100-153.4z", markup: "M1010.6 479.7L736.4 205.4a45.7 45.7 0 10-64.7 64.6l242 242L671.7 754a45.7 45.7 0 1064.7 64.6l274.1-274.2a45.6 45.6 0 000-64.6M0 511.9c0-11.7 4.5-23.4 13.4-32.3l274.1-274.2a45.7 45.7 0 1164.7 64.6L110.4 512l241.9 241.9a45.7 45.7 0 01-64.7 64.6L13.4 544.2C4.4 535.3 0 523.6 0 512", outline: "M180.1 714.3V844h129.6v94.8h-180c-24.2 0-44-19.5-44.4-43.7V714.3h94.8zM619.3 844v94.8H404.7v-94.8h214.6zm319.4-129.6v180c0 24.2-19.5 44-43.7 44.4H714.3v-94.8H844V714.3h94.8zm0-309.6v214.6h-94.8V404.7h94.8zm-758.6 0v214.6H85.3V404.7h94.8zm331.9 34a73.2 73.2 0 110 146.4 73.2 73.2 0 010-146.3zM894.2 85.4c24.3 0 44 19.5 44.5 43.7V309.7h-94.8V180H714.3V85.3h180zm-584.5 0v94.8H180v129.6H85.3v-180c0-24.2 19.5-44 43.7-44.4H309.7zm309.6 0v94.8H404.7V85.3h214.6z", verified: "M719 66l30 56c12 23 35 40 61 44l62 11c45 8 76 51 70 96l-9 63c-4 26 5 52 23 71l44 46c32 33 32 85 0 118l-44 46a85 85 0 00-23 71l9 63c6 45-25 88-70 96l-62 11c-26 4-49 21-61 44l-30 56a85 85 0 01-113 36l-57-27a85 85 0 00-74 0l-57 27c-42 21-92 4-113-36l-30-56a85 85 0 00-61-44l-62-11c-45-8-76-51-70-96l9-63c4-26-5-52-23-71l-44-46a85 85 0 010-118l44-46c18-19 27-45 23-71l-9-63c-6-45 25-88 70-96l62-11c26-4 49-21 61-44l30-56c21-40 71-57 113-36l57 27c23 12 51 12 74 0l57-27c42-21 92-4 113 36zm70 258a46 46 0 00-59 5L437 622 294 480l-6-5a46 46 0 00-59 69l175 175 6 5c18 13 43 11 59-5l326-325 4-6c13-18 12-43-4-59z", comment: "M936 85l6 1c22 3 39 21 39 44v709c0 8-2 15-5 21l-2 4c-9 12-23 20-38 20H427l-131 127c-9 9-21 13-34 13-25 0-46-20-46-45v-95H88c-25 0-45-20-45-45V130a45 45 0 0145-45zm-46 89H134v620h756V174zM768 544c25 0 46 20 46 44 0 25-21 45-46 45H256c-25 0-46-20-46-45 0-24 21-44 46-44zm0-208c25 0 46 20 46 44 0 25-21 45-46 45H256c-25 0-46-20-46-45 0-24 21-44 46-44z", commentadd: "M937 85l6 1c23 3 40 21 40 44v711c0 7-2 14-5 21l-3 4c-8 12-22 19-38 19H428l-131 128c-9 9-22 13-35 13-25 0-45-20-45-45v-96H89c-26 0-46-20-46-44V130a45 45 0 0146-45zm-45 90H134v621h758V175zm-379 97c22 0 40 18 40 40v134h132a40 40 0 010 81H553v132a40 40 0 11-80 0V527H341a40 40 0 110-81h132V312c0-22 18-40 40-40z", requestchange: "M937 85l6 1c23 3 40 21 40 44v711c0 7-2 14-5 21l-3 4c-8 12-22 19-38 19H428l-131 128c-9 9-22 13-35 13-25 0-45-20-45-45v-96H89c-26 0-46-20-46-44V130a45 45 0 0146-45zm-45 90H134v621h758V175zM585 310c18-18 47-18 65 0l143 144c18 17 18 46 0 64L650 661a46 46 0 01-65 0 46 46 0 010-65l65-64H266a46 46 0 110-92h384l-65-65a46 46 0 010-65z", comments: "M978.3 92.2a45 45 0 0145.7 44.6v535.6a45.2 45.2 0 01-45.7 44.6h-125v122c0 7.7-2 14.8-5.5 21.3l-2.3 3.7a46.1 46.1 0 01-38 19.6H298.8L168 1011a47 47 0 01-34.3 13.1c-25.2 0-45.7-20-45.7-44.6v-95.8H45.7c-25.2 0-45.7-20-45.7-44.5V303.4A45 45 0 0145.7 259h125v-122a45 45 0 0139.8-44.3c1.3-.1 257.2-.3 767.8-.4zM761.9 348H91.4v446.5H762V348zm-125 264c25.3 0 45.8 20 45.8 44.6A45.2 45.2 0 01637 701H216.4c-25.3 0-45.7-20-45.7-44.5a45.2 45.2 0 0145.7-44.6H637zm295.7-430.7H262V259h505.1l46.3.4a45 45 0 0139.8 44.2v324.3h79.3V181.3zM637 441.3c25.2 0 45.7 20 45.7 44.6a45.2 45.2 0 01-45.7 44.6H216.4c-25.3 0-45.7-20-45.7-44.6a45.2 45.2 0 0145.7-44.5H637z", ruler: "M83 110c-22 0-40 18-40 40v176a40 40 0 0080 0v-49h778v49a40 40 0 0080 0V150a40 40 0 10-80 0v49H123v-49c0-22-18-40-40-40zm40 458v266h778V568h-63v115a40 40 0 11-80 0V568h-63v46a40 40 0 11-80 0v-46h-63v115a40 40 0 11-80 0V568h-63v46a40 40 0 11-80 0v-46h-63v115a40 40 0 11-80 0V568h-63zm103-80h691c36 0 64 28 64 64v298c0 36-28 64-64 64H107c-36 0-64-28-64-64V552c0-36 28-64 64-64h119z" };
var Svg = styled.svg({
  shapeRendering: "inherit",
  transform: "translate3d(0,0,0)"
}, function(_ref27) {
  var inline = _ref27.inline;
  return inline ? { display: "inline-block" } : { display: "block" };
});
Svg.displayName = "Svg";
var Path = styled.path({ fill: "currentColor" });
var Icons = memo(function(_a) {
  var icon = _a.icon, symbol = _a.symbol, props = __rest(_a, ["icon", "symbol"]);
  return React__default__default.createElement(Svg, Object.assign({ viewBox: "0 0 1024 1024" }, props), symbol ? React__default__default.createElement("use", { xlinkHref: "#icon--".concat(symbol) }) : React__default__default.createElement(Path, { d: icons[icon] }));
});
memo(function(_ref28) {
  var _ref28$icons = _ref28.icons, keys2 = _ref28$icons === void 0 ? Object.keys(icons) : _ref28$icons;
  return React__default__default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", style: { position: "absolute", width: 0, height: 0 }, "data-chromatic": "ignore" }, keys2.map(function(key) {
    return React__default__default.createElement("symbol", { id: "icon--".concat(key), key }, React__default__default.createElement(Path, { d: icons[key] }));
  }));
});
var LEFT_BUTTON = 0;
var isPlainLeftClick = function isPlainLeftClick2(e2) {
  return e2.button === LEFT_BUTTON && !e2.altKey && !e2.ctrlKey && !e2.metaKey && !e2.shiftKey;
};
var cancelled = function cancelled2(e2, cb) {
  if (isPlainLeftClick(e2)) {
    e2.preventDefault();
    cb(e2);
  }
};
var LinkInner = styled.span(function(_ref29) {
  var withArrow = _ref29.withArrow;
  return withArrow ? { "> svg:last-of-type": { height: "0.7em", width: "0.7em", marginRight: 0, marginLeft: "0.25em", bottom: "auto", verticalAlign: "inherit" } } : {};
}, function(_ref30) {
  var containsIcon = _ref30.containsIcon;
  return containsIcon ? { svg: { height: "1em", width: "1em", verticalAlign: "middle", position: "relative", bottom: 0, marginRight: 0 } } : {};
});
var A$1 = styled.a(function(_ref31) {
  var theme2 = _ref31.theme;
  return { display: "inline-block", transition: "all 150ms ease-out", textDecoration: "none", color: theme2.color.secondary, "&:hover, &:focus": { cursor: "pointer", color: curriedDarken$1(0.07, theme2.color.secondary), "svg path": { fill: curriedDarken$1(0.07, theme2.color.secondary) } }, "&:active": { color: curriedDarken$1(0.1, theme2.color.secondary), "svg path": { fill: curriedDarken$1(0.1, theme2.color.secondary) } }, svg: { display: "inline-block", height: "1em", width: "1em", verticalAlign: "text-top", position: "relative", bottom: "-0.125em", marginRight: "0.4em", "& path": { fill: theme2.color.secondary } } };
}, function(_ref32) {
  var theme2 = _ref32.theme, secondary = _ref32.secondary, tertiary = _ref32.tertiary;
  var colors;
  if (secondary) {
    colors = [theme2.color.mediumdark, theme2.color.dark, theme2.color.darker];
  }
  if (tertiary) {
    colors = [theme2.color.dark, theme2.color.darkest, theme2.color.mediumdark];
  }
  return colors ? { color: colors[0], "svg path": { fill: colors[0] }, "&:hover": { color: colors[1], "svg path": { fill: colors[1] } }, "&:active": { color: colors[2], "svg path": { fill: colors[2] } } } : {};
}, function(_ref33) {
  var nochrome = _ref33.nochrome;
  return nochrome ? { color: "inherit", "&:hover, &:active": { color: "inherit", textDecoration: "underline" } } : {};
}, function(_ref34) {
  var theme2 = _ref34.theme, inverse = _ref34.inverse;
  return inverse ? { color: theme2.color.lightest, "svg path": { fill: theme2.color.lightest }, "&:hover": { color: theme2.color.lighter, "svg path": { fill: theme2.color.lighter } }, "&:active": { color: theme2.color.light, "svg path": { fill: theme2.color.light } } } : {};
}, function(_ref35) {
  var isButton = _ref35.isButton;
  return isButton ? { border: 0, borderRadius: 0, background: "none", padding: 0, fontSize: "inherit" } : {};
});
var Link = function Link2(_a) {
  var cancel = _a.cancel, children = _a.children, onClick = _a.onClick, withArrow = _a.withArrow, containsIcon = _a.containsIcon, className = _a.className, rest = __rest(_a, ["cancel", "children", "onClick", "withArrow", "containsIcon", "className"]);
  return React__default__default.createElement(A$1, Object.assign({}, rest, { onClick: onClick && cancel ? function(e2) {
    return cancelled(e2, onClick);
  } : onClick, className }), React__default__default.createElement(LinkInner, { withArrow, containsIcon }, children, withArrow && React__default__default.createElement(Icons, { icon: "arrowright" })));
};
Link.defaultProps = { cancel: true, className: void 0, style: void 0, onClick: void 0, withArrow: false, containsIcon: false };
styled.div(function(_ref36) {
  var theme2 = _ref36.theme;
  return { fontSize: "".concat(theme2.typography.size.s2, "px"), lineHeight: "1.6", h1: { fontSize: "".concat(theme2.typography.size.l1, "px"), fontWeight: theme2.typography.weight.black }, h2: { fontSize: "".concat(theme2.typography.size.m2, "px"), borderBottom: "1px solid ".concat(theme2.appBorderColor) }, h3: { fontSize: "".concat(theme2.typography.size.m1, "px") }, h4: { fontSize: "".concat(theme2.typography.size.s3, "px") }, h5: { fontSize: "".concat(theme2.typography.size.s2, "px") }, h6: { fontSize: "".concat(theme2.typography.size.s2, "px"), color: theme2.color.dark }, "pre:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "pre pre, pre.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px" }, "pre pre code, pre.prismjs code": { color: "inherit", fontSize: "inherit" }, "pre code": { margin: 0, padding: 0, whiteSpace: "pre", border: "none", background: "transparent" }, "pre code, pre tt": { backgroundColor: "transparent", border: "none" }, "body > *:first-of-type": { marginTop: "0 !important" }, "body > *:last-child": { marginBottom: "0 !important" }, a: { color: theme2.color.secondary, textDecoration: "none" }, "a.absent": { color: "#cc0000" }, "a.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 }, "h1, h2, h3, h4, h5, h6": { margin: "20px 0 10px", padding: 0, cursor: "text", position: "relative", "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& tt, & code": { fontSize: "inherit" } }, "h1:first-of-type + h2": { marginTop: 0, paddingTop: 0 }, "p, blockquote, ul, ol, dl, li, table, pre": { margin: "15px 0" }, hr: { border: "0 none", borderTop: "1px solid ".concat(theme2.appBorderColor), height: 4, padding: 0 }, "body > h1:first-of-type, body > h2:first-of-type, body > h3:first-of-type, body > h4:first-of-type, body > h5:first-of-type, body > h6:first-of-type": { marginTop: 0, paddingTop: 0 }, "body > h1:first-of-type + h2": { marginTop: 0, paddingTop: 0 }, "a:first-of-type h1, a:first-of-type h2, a:first-of-type h3, a:first-of-type h4, a:first-of-type h5, a:first-of-type h6": { marginTop: 0, paddingTop: 0 }, "h1 p, h2 p, h3 p, h4 p, h5 p, h6 p": { marginTop: 0 }, "li p.first": { display: "inline-block" }, "ul, ol": { paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, dl: { padding: 0 }, "dl dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", margin: "0 0 15px", padding: "0 15px", "&:first-of-type": { padding: 0 }, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, blockquote: { borderLeft: "4px solid ".concat(theme2.color.medium), padding: "0 15px", color: theme2.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, table: { padding: 0, borderCollapse: "collapse", "& tr": { borderTop: "1px solid ".concat(theme2.appBorderColor), backgroundColor: "white", margin: 0, padding: 0, "& th": { fontWeight: "bold", border: "1px solid ".concat(theme2.appBorderColor), textAlign: "left", margin: 0, padding: "6px 13px" }, "& td": { border: "1px solid ".concat(theme2.appBorderColor), textAlign: "left", margin: 0, padding: "6px 13px" }, "&:nth-of-type(2n)": { backgroundColor: theme2.color.lighter }, "& th :first-of-type, & td :first-of-type": { marginTop: 0 }, "& th :last-child, & td :last-child": { marginBottom: 0 } } }, img: { maxWidth: "100%" }, "span.frame": { display: "block", overflow: "hidden", "& > span": { border: "1px solid ".concat(theme2.color.medium), display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: theme2.color.darkest, display: "block", padding: "5px 0 0" } }, "span.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "span.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "span.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "span.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } }, "code, tt": { margin: "0 2px", padding: "0 5px", whiteSpace: "nowrap", border: "1px solid ".concat(theme2.color.mediumlight), backgroundColor: theme2.color.lighter, borderRadius: 3, color: theme2.base === "dark" && theme2.color.darkest } };
});
var Container$1 = styled.div(function(_ref37) {
  var theme2 = _ref37.theme;
  return { position: "absolute", bottom: 0, right: 0, maxWidth: "100%", display: "flex", background: theme2.background.content, zIndex: 1 };
});
var ActionButton = styled.button(function(_ref38) {
  var theme2 = _ref38.theme;
  return { margin: 0, border: "0 none", padding: "4px 10px", cursor: "pointer", display: "flex", alignItems: "center", color: theme2.color.defaultText, background: theme2.background.content, fontSize: 12, lineHeight: "16px", fontFamily: theme2.typography.fonts.base, fontWeight: theme2.typography.weight.bold, borderTop: "1px solid ".concat(theme2.appBorderColor), borderLeft: "1px solid ".concat(theme2.appBorderColor), marginLeft: -1, borderRadius: "4px 0 0 0", "&:not(:last-child)": { borderRight: "1px solid ".concat(theme2.appBorderColor) }, "& + *": { borderLeft: "1px solid ".concat(theme2.appBorderColor), borderRadius: 0 }, "&:focus": { boxShadow: "".concat(theme2.color.secondary, " 0 -3px 0 0 inset"), outline: "0 none" } };
}, function(_ref39) {
  var disabled = _ref39.disabled;
  return disabled && { cursor: "not-allowed", opacity: 0.5 };
});
ActionButton.displayName = "ActionButton";
var ActionBar = function ActionBar2(_a) {
  var actionItems = _a.actionItems, props = __rest(_a, ["actionItems"]);
  return React__default__default.createElement(Container$1, Object.assign({}, props), actionItems.map(function(_ref40, index2) {
    var title = _ref40.title, className = _ref40.className, onClick = _ref40.onClick, disabled = _ref40.disabled;
    return React__default__default.createElement(ActionButton, { key: index2, className, onClick, disabled }, title);
  }));
};
styled.div(function(_ref41) {
  var theme2 = _ref41.theme, col = _ref41.col, _ref41$row = _ref41.row, row = _ref41$row === void 0 ? 1 : _ref41$row;
  return col ? _defineProperty2({ display: "inline-block", verticalAlign: "inherit", "& > *": { marginLeft: col * theme2.layoutMargin, verticalAlign: "inherit" } }, "& > *:first-child", { marginLeft: 0 }) : _defineProperty2({ "& > *": { marginTop: row * theme2.layoutMargin } }, "& > *:first-child", { marginTop: 0 });
}, function(_ref44) {
  var theme2 = _ref44.theme, outer = _ref44.outer, col = _ref44.col, row = _ref44.row;
  switch (true) {
    case !!(outer && col): {
      return { marginLeft: outer * theme2.layoutMargin, marginRight: outer * theme2.layoutMargin };
    }
    case !!(outer && row): {
      return { marginTop: outer * theme2.layoutMargin, marginBottom: outer * theme2.layoutMargin };
    }
    default: {
      return {};
    }
  }
});
var Title$3 = styled.div(function(_ref45) {
  var theme2 = _ref45.theme;
  return { fontWeight: theme2.typography.weight.bold };
});
var Desc$1 = styled.div();
var Message$1 = styled.div(function(_ref46) {
  var theme2 = _ref46.theme;
  return { padding: 30, textAlign: "center", color: theme2.color.defaultText, fontSize: theme2.typography.size.s2 - 1 };
});
var Placeholder = function Placeholder2(_a) {
  var children = _a.children, props = __rest(_a, ["children"]);
  var _Children$toArray = Children.toArray(children), _Children$toArray2 = _slicedToArray$4(_Children$toArray, 2), title = _Children$toArray2[0], desc = _Children$toArray2[1];
  return React__default__default.createElement(Message$1, Object.assign({}, props), React__default__default.createElement(Title$3, null, title), desc && React__default__default.createElement(Desc$1, null, desc));
};
var GlobalScrollAreaStyles = lazy(function() {
  return import("./GlobalScrollAreaStyles-8793ce4a.js");
});
var OverlayScrollbars = lazy(function() {
  return import("./OverlayScrollbars-26c4a78d.js");
});
var Scroller = function Scroller2(_a) {
  var props = __rest(_a, ["horizontal", "vertical"]);
  return React__default__default.createElement(Suspense, { fallback: React__default__default.createElement("div", Object.assign({}, props)) }, React__default__default.createElement(GlobalScrollAreaStyles, null), React__default__default.createElement(OverlayScrollbars, Object.assign({ options: { scrollbars: { autoHide: "leave" } } }, props)));
};
var ScrollArea = styled(Scroller)(function(_ref47) {
  var vertical = _ref47.vertical;
  return !vertical ? { overflowY: "hidden" } : { overflowY: "auto", height: "100%" };
}, function(_ref48) {
  var horizontal = _ref48.horizontal;
  return !horizontal ? { overflowX: "hidden" } : { overflowX: "auto", width: "100%" };
});
ScrollArea.defaultProps = { horizontal: false, vertical: false };
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
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
var globalWindow$2 = window_1.window;
function browserSupportsCssZoom() {
  try {
    return globalWindow$2.document.implementation.createHTMLDocument("").body.style.zoom !== void 0;
  } catch (error2) {
    return false;
  }
}
var ZoomElementWrapper = styled.div(function(_ref49) {
  var _ref49$scale = _ref49.scale, scale = _ref49$scale === void 0 ? 1 : _ref49$scale, height = _ref49.height;
  return browserSupportsCssZoom() ? { "> *": { zoom: 1 / scale } } : { height: height + 50, transformOrigin: "top left", transform: "scale(".concat(1 / scale, ")") };
});
function ZoomElement(_ref50) {
  var scale = _ref50.scale, children = _ref50.children;
  var componentWrapperRef = useRef(null);
  var _useState = useState(0), _useState2 = _slicedToArray$4(_useState, 2), height = _useState2[0], setHeight = _useState2[1];
  useEffect(function() {
    if (componentWrapperRef.current) {
      setHeight(componentWrapperRef.current.getBoundingClientRect().height);
    }
  }, [scale, componentWrapperRef.current]);
  return React__default__default.createElement(ZoomElementWrapper, { scale, height }, React__default__default.createElement("div", { ref: componentWrapperRef, className: "innerZoomElementWrapper" }, children));
}
var ZoomIFrame = /* @__PURE__ */ function(_Component) {
  _inherits(ZoomIFrame2, _Component);
  var _super = _createSuper(ZoomIFrame2);
  function ZoomIFrame2() {
    var _this2;
    _classCallCheck(this, ZoomIFrame2);
    _this2 = _super.apply(this, arguments);
    _this2.iframe = null;
    return _this2;
  }
  _createClass(ZoomIFrame2, [{ key: "componentDidMount", value: function componentDidMount() {
    var iFrameRef = this.props.iFrameRef;
    this.iframe = iFrameRef.current;
  } }, { key: "shouldComponentUpdate", value: function shouldComponentUpdate(nextProps) {
    var _this$props = this.props, scale = _this$props.scale, active = _this$props.active;
    if (scale !== nextProps.scale) {
      this.setIframeInnerZoom(nextProps.scale);
    }
    if (active !== nextProps.active) {
      this.iframe.setAttribute("data-is-storybook", nextProps.active ? "true" : "false");
    }
    return nextProps.children.props.src !== this.props.children.props.src;
  } }, { key: "setIframeInnerZoom", value: function setIframeInnerZoom(scale) {
    try {
      if (browserSupportsCssZoom()) {
        Object.assign(this.iframe.contentDocument.body.style, { zoom: 1 / scale });
      } else {
        Object.assign(this.iframe.contentDocument.body.style, { width: "".concat(scale * 100, "%"), height: "".concat(scale * 100, "%"), transform: "scale(".concat(1 / scale, ")"), transformOrigin: "top left" });
      }
    } catch (e2) {
      this.setIframeZoom(scale);
    }
  } }, { key: "setIframeZoom", value: function setIframeZoom(scale) {
    Object.assign(this.iframe.style, { width: "".concat(scale * 100, "%"), height: "".concat(scale * 100, "%"), transform: "scale(".concat(1 / scale, ")"), transformOrigin: "top left" });
  } }, { key: "render", value: function render() {
    var children = this.props.children;
    return children;
  } }]);
  return ZoomIFrame2;
}(Component);
var Zoom$1 = { Element: ZoomElement, IFrame: ZoomIFrame };
var ButtonWrapper = styled.button(function(_ref51) {
  var small = _ref51.small, theme2 = _ref51.theme;
  return { border: 0, borderRadius: "3em", cursor: "pointer", display: "inline-block", overflow: "hidden", padding: small ? "8px 16px" : "13px 20px", position: "relative", textAlign: "center", textDecoration: "none", transition: "all 150ms ease-out", transform: "translate3d(0,0,0)", verticalAlign: "top", whiteSpace: "nowrap", userSelect: "none", opacity: 1, margin: 0, background: "transparent", fontSize: "".concat(small ? theme2.typography.size.s1 : theme2.typography.size.s2 - 1, "px"), fontWeight: theme2.typography.weight.bold, lineHeight: "1", svg: { display: "inline-block", height: small ? 14 : 16, width: small ? 14 : 16, verticalAlign: "top", marginRight: small ? 4 : 6, marginTop: small ? -1 : -2, marginBottom: small ? -1 : -2, pointerEvents: "none", path: { fill: "currentColor" } } };
}, function(_ref52) {
  var disabled = _ref52.disabled;
  return disabled ? { cursor: "not-allowed !important", opacity: 0.5, "&:hover": { transform: "none" } } : {};
}, function(_ref53) {
  var containsIcon = _ref53.containsIcon, small = _ref53.small;
  return containsIcon ? Object.assign({ svg: { display: "block", margin: 0 } }, small ? { padding: 9 } : { padding: 12 }) : {};
}, function(_ref54) {
  var theme2 = _ref54.theme, primary = _ref54.primary, secondary = _ref54.secondary, gray = _ref54.gray;
  var color2;
  if (gray) {
    color2 = theme2.color.medium;
  } else if (secondary) {
    color2 = theme2.color.secondary;
  } else if (primary) {
    color2 = theme2.color.primary;
  }
  return color2 ? { background: color2, color: gray ? theme2.color.darkest : theme2.color.lightest, "&:hover": { background: curriedDarken$1(0.05, color2) }, "&:active": { boxShadow: "rgba(0, 0, 0, 0.1) 0 0 0 3em inset" }, "&:focus": { boxShadow: "".concat(rgba(color2, 1), " 0 1px 9px 2px"), outline: "none" }, "&:focus:hover": { boxShadow: "".concat(rgba(color2, 0.2), " 0 8px 18px 0px") } } : {};
}, function(_ref55) {
  var theme2 = _ref55.theme, tertiary = _ref55.tertiary, inForm = _ref55.inForm, small = _ref55.small;
  return tertiary ? Object.assign(Object.assign({ background: theme2.base === "light" ? curriedDarken$1(0.02, theme2.input.background) : curriedLighten$1(0.02, theme2.input.background), color: theme2.input.color, boxShadow: "".concat(theme2.input.border, " 0 0 0 1px inset"), borderRadius: theme2.input.borderRadius }, inForm && small ? { padding: "10px 16px" } : {}), { "&:hover": Object.assign({ background: theme2.base === "light" ? curriedDarken$1(0.05, theme2.input.background) : curriedLighten$1(0.05, theme2.input.background) }, inForm ? {} : { boxShadow: "rgba(0,0,0,.2) 0 2px 6px 0, rgba(0,0,0,.1) 0 0 0 1px inset" }), "&:active": { background: theme2.input.background }, "&:focus": { boxShadow: "".concat(rgba(theme2.color.secondary, 1), " 0 0 0 1px inset"), outline: "none" } }) : {};
}, function(_ref56) {
  var theme2 = _ref56.theme, outline = _ref56.outline;
  return outline ? { boxShadow: "".concat(curriedTransparentize$1(0.8, theme2.color.defaultText), " 0 0 0 1px inset"), color: curriedTransparentize$1(0.3, theme2.color.defaultText), background: "transparent", "&:hover, &:focus": { boxShadow: "".concat(curriedTransparentize$1(0.5, theme2.color.defaultText), " 0 0 0 1px inset"), outline: "none" }, "&:active": { boxShadow: "".concat(curriedTransparentize$1(0.5, theme2.color.defaultText), " 0 0 0 2px inset"), color: curriedTransparentize$1(0, theme2.color.defaultText) } } : {};
}, function(_ref57) {
  var theme2 = _ref57.theme, outline = _ref57.outline, primary = _ref57.primary;
  var color2 = theme2.color.primary;
  return outline && primary ? { boxShadow: "".concat(color2, " 0 0 0 1px inset"), color: color2, "svg path": { fill: color2 }, "&:hover": { boxShadow: "".concat(color2, " 0 0 0 1px inset"), background: "transparent" }, "&:active": { background: color2, boxShadow: "".concat(color2, " 0 0 0 1px inset"), color: theme2.color.tertiary }, "&:focus": { boxShadow: "".concat(color2, " 0 0 0 1px inset, ").concat(rgba(color2, 0.4), " 0 1px 9px 2px"), outline: "none" }, "&:focus:hover": { boxShadow: "".concat(color2, " 0 0 0 1px inset, ").concat(rgba(color2, 0.2), " 0 8px 18px 0px") } } : {};
}, function(_ref58) {
  var theme2 = _ref58.theme, outline = _ref58.outline, primary = _ref58.primary, secondary = _ref58.secondary;
  var color2;
  if (secondary) {
    color2 = theme2.color.secondary;
  } else if (primary) {
    color2 = theme2.color.primary;
  }
  return outline && color2 ? { boxShadow: "".concat(color2, " 0 0 0 1px inset"), color: color2, "svg path": { fill: color2 }, "&:hover": { boxShadow: "".concat(color2, " 0 0 0 1px inset"), background: "transparent" }, "&:active": { background: color2, boxShadow: "".concat(color2, " 0 0 0 1px inset"), color: theme2.color.tertiary }, "&:focus": { boxShadow: "".concat(color2, " 0 0 0 1px inset, ").concat(rgba(color2, 0.4), " 0 1px 9px 2px"), outline: "none" }, "&:focus:hover": { boxShadow: "".concat(color2, " 0 0 0 1px inset, ").concat(rgba(color2, 0.2), " 0 8px 18px 0px") } } : {};
});
var ButtonLink = ButtonWrapper.withComponent("a");
var Button$2 = Object.assign(forwardRef(function(_a, ref) {
  var isLink = _a.isLink, children = _a.children, props = __rest(_a, ["isLink", "children"]);
  if (isLink) {
    return React__default__default.createElement(ButtonLink, Object.assign({}, props, { ref }), children);
  }
  return React__default__default.createElement(ButtonWrapper, Object.assign({}, props, { ref }), children);
}), { defaultProps: { isLink: false } });
var Wrapper$7 = styled.label(function(_ref59) {
  var theme2 = _ref59.theme;
  return { display: "flex", borderBottom: "1px solid ".concat(theme2.appBorderColor), margin: "0 15px", padding: "8px 0", "&:last-child": { marginBottom: "3rem" } };
});
var Label$4 = styled.span(function(_ref60) {
  var theme2 = _ref60.theme;
  return { minWidth: 100, fontWeight: theme2.typography.weight.bold, marginRight: 15, display: "flex", justifyContent: "flex-start", alignItems: "center", lineHeight: "16px" };
});
var Field = function Field2(_a) {
  var label = _a.label, children = _a.children, props = __rest(_a, ["label", "children"]);
  return React__default__default.createElement(Wrapper$7, Object.assign({}, props), label ? React__default__default.createElement(Label$4, null, React__default__default.createElement("span", null, label)) : null, children);
};
Field.defaultProps = { label: void 0 };
function _extends$2() {
  _extends$2 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$3(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var index$1 = typeof document !== "undefined" ? useLayoutEffect : useEffect;
var useLatest = function useLatest2(value2) {
  var ref = useRef(value2);
  index$1(function() {
    ref.current = value2;
  });
  return ref;
};
var updateRef = function updateRef2(ref, value2) {
  if (typeof ref === "function") {
    ref(value2);
    return;
  }
  ref.current = value2;
};
var useComposedRef = function useComposedRef2(libRef, userRef) {
  var prevUserRef = useRef();
  return useCallback(function(instance) {
    libRef.current = instance;
    if (prevUserRef.current) {
      updateRef(prevUserRef.current, null);
    }
    prevUserRef.current = userRef;
    if (!userRef) {
      return;
    }
    updateRef(userRef, instance);
  }, [userRef]);
};
var HIDDEN_TEXTAREA_STYLE = { "min-height": "0", "max-height": "none", height: "0", visibility: "hidden", overflow: "hidden", position: "absolute", "z-index": "-1000", top: "0", right: "0" };
var forceHiddenStyles = function forceHiddenStyles2(node2) {
  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function(key) {
    node2.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], "important");
  });
};
var hiddenTextarea = null;
var getHeight = function getHeight2(node2, sizingData) {
  var height = node2.scrollHeight;
  if (sizingData.sizingStyle.boxSizing === "border-box") {
    return height + sizingData.borderSize;
  }
  return height - sizingData.paddingSize;
};
function calculateNodeHeight(sizingData, value2, minRows, maxRows) {
  if (minRows === void 0) {
    minRows = 1;
  }
  if (maxRows === void 0) {
    maxRows = Infinity;
  }
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    hiddenTextarea.setAttribute("tabindex", "-1");
    hiddenTextarea.setAttribute("aria-hidden", "true");
    forceHiddenStyles(hiddenTextarea);
  }
  if (hiddenTextarea.parentNode === null) {
    document.body.appendChild(hiddenTextarea);
  }
  var paddingSize = sizingData.paddingSize, borderSize = sizingData.borderSize, sizingStyle = sizingData.sizingStyle;
  var boxSizing = sizingStyle.boxSizing;
  Object.keys(sizingStyle).forEach(function(_key) {
    var key = _key;
    hiddenTextarea.style[key] = sizingStyle[key];
  });
  forceHiddenStyles(hiddenTextarea);
  hiddenTextarea.value = value2;
  var height = getHeight(hiddenTextarea, sizingData);
  hiddenTextarea.value = "x";
  var rowHeight = hiddenTextarea.scrollHeight - paddingSize;
  var minHeight = rowHeight * minRows;
  if (boxSizing === "border-box") {
    minHeight = minHeight + paddingSize + borderSize;
  }
  height = Math.max(minHeight, height);
  var maxHeight = rowHeight * maxRows;
  if (boxSizing === "border-box") {
    maxHeight = maxHeight + paddingSize + borderSize;
  }
  height = Math.min(maxHeight, height);
  return [height, rowHeight];
}
var noop$2 = function noop2() {
};
var pick = function pick2(props, obj) {
  return props.reduce(function(acc, prop) {
    acc[prop] = obj[prop];
    return acc;
  }, {});
};
var SIZING_STYLE = [
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderTopWidth",
  "boxSizing",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  "tabSize",
  "textIndent",
  "textRendering",
  "textTransform",
  "width",
  "wordBreak"
];
var isIE = typeof document !== "undefined" ? !!document.documentElement.currentStyle : false;
var getSizingData = function getSizingData2(node2) {
  var style = window.getComputedStyle(node2);
  if (style === null) {
    return null;
  }
  var sizingStyle = pick(SIZING_STYLE, style);
  var boxSizing = sizingStyle.boxSizing;
  if (boxSizing === "") {
    return null;
  }
  if (isIE && boxSizing === "border-box") {
    sizingStyle.width = parseFloat(sizingStyle.width) + parseFloat(sizingStyle.borderRightWidth) + parseFloat(sizingStyle.borderLeftWidth) + parseFloat(sizingStyle.paddingRight) + parseFloat(sizingStyle.paddingLeft) + "px";
  }
  var paddingSize = parseFloat(sizingStyle.paddingBottom) + parseFloat(sizingStyle.paddingTop);
  var borderSize = parseFloat(sizingStyle.borderBottomWidth) + parseFloat(sizingStyle.borderTopWidth);
  return { sizingStyle, paddingSize, borderSize };
};
var useWindowResizeListener = function useWindowResizeListener2(listener) {
  var latestListener = useLatest(listener);
  useLayoutEffect(function() {
    var handler = function handler2(event) {
      latestListener.current(event);
    };
    window.addEventListener("resize", handler);
    return function() {
      window.removeEventListener("resize", handler);
    };
  }, []);
};
var TextareaAutosize = function TextareaAutosize2(_ref, userRef) {
  var cacheMeasurements = _ref.cacheMeasurements, maxRows = _ref.maxRows, minRows = _ref.minRows, _ref$onChange = _ref.onChange, onChange = _ref$onChange === void 0 ? noop$2 : _ref$onChange, _ref$onHeightChange = _ref.onHeightChange, onHeightChange = _ref$onHeightChange === void 0 ? noop$2 : _ref$onHeightChange, props = _objectWithoutPropertiesLoose$3(_ref, ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"]);
  var isControlled = props.value !== void 0;
  var libRef = useRef(null);
  var ref = useComposedRef(libRef, userRef);
  var heightRef = useRef(0);
  var measurementsCacheRef = useRef();
  var resizeTextarea = function resizeTextarea2() {
    var node2 = libRef.current;
    var nodeSizingData = cacheMeasurements && measurementsCacheRef.current ? measurementsCacheRef.current : getSizingData(node2);
    if (!nodeSizingData) {
      return;
    }
    measurementsCacheRef.current = nodeSizingData;
    var _calculateNodeHeight = calculateNodeHeight(nodeSizingData, node2.value || node2.placeholder || "x", minRows, maxRows), height = _calculateNodeHeight[0], rowHeight = _calculateNodeHeight[1];
    if (heightRef.current !== height) {
      heightRef.current = height;
      node2.style.setProperty("height", height + "px", "important");
      onHeightChange(height, { rowHeight });
    }
  };
  var handleChange = function handleChange2(event) {
    if (!isControlled) {
      resizeTextarea();
    }
    onChange(event);
  };
  if (typeof document !== "undefined") {
    useLayoutEffect(resizeTextarea);
    useWindowResizeListener(resizeTextarea);
  }
  return /* @__PURE__ */ createElement("textarea", _extends$2({}, props, { onChange: handleChange, ref }));
};
var index$2 = /* @__PURE__ */ forwardRef(TextareaAutosize);
var TextareaAutoResize = index$2;
var styleResets$1 = {
  appearance: "none",
  border: "0 none",
  boxSizing: "inherit",
  display: " block",
  margin: " 0",
  background: "transparent",
  padding: 0,
  fontSize: "inherit",
  position: "relative"
};
var styles = function styles2(_ref61) {
  var theme2 = _ref61.theme;
  return Object.assign(Object.assign({}, styleResets$1), { transition: "box-shadow 200ms ease-out, opacity 200ms ease-out", color: theme2.input.color || "inherit", background: theme2.input.background, boxShadow: "".concat(theme2.input.border, " 0 0 0 1px inset"), borderRadius: theme2.input.borderRadius, fontSize: theme2.typography.size.s2 - 1, lineHeight: "20px", padding: "6px 10px", "&:focus": { boxShadow: "".concat(theme2.color.secondary, " 0 0 0 1px inset"), outline: "none" }, "&[disabled]": { cursor: "not-allowed", opacity: 0.5 }, "&:-webkit-autofill": { WebkitBoxShadow: "0 0 0 3em ".concat(theme2.color.lightest, " inset") }, "::placeholder": { color: theme2.color.mediumdark } });
};
var sizes = function sizes2(_ref62) {
  var size = _ref62.size;
  switch (size) {
    case "100%": {
      return { width: "100%" };
    }
    case "flex": {
      return { flex: 1 };
    }
    case "auto":
    default: {
      return { display: "inline" };
    }
  }
};
var alignment = function alignment2(_ref63) {
  var align = _ref63.align;
  switch (align) {
    case "end": {
      return { textAlign: "right" };
    }
    case "center": {
      return { textAlign: "center" };
    }
    case "start":
    default: {
      return { textAlign: "left" };
    }
  }
};
var validation = function validation2(_ref64) {
  var valid = _ref64.valid, theme2 = _ref64.theme;
  switch (valid) {
    case "valid": {
      return { boxShadow: "".concat(theme2.color.positive, " 0 0 0 1px inset !important") };
    }
    case "error": {
      return { boxShadow: "".concat(theme2.color.negative, " 0 0 0 1px inset !important") };
    }
    case "warn": {
      return { boxShadow: "".concat(theme2.color.warning, " 0 0 0 1px inset") };
    }
    case void 0:
    case null:
    default: {
      return {};
    }
  }
};
var Input$1 = Object.assign(styled(forwardRef(function(_a, ref) {
  var props = __rest(_a, ["size", "valid", "align"]);
  return React__default__default.createElement("input", Object.assign({}, props, { ref }));
}))(styles, sizes, alignment, validation, { minHeight: 32 }), { displayName: "Input" });
var Select = Object.assign(styled(forwardRef(function(_a, ref) {
  var props = __rest(_a, ["size", "valid", "align"]);
  return React__default__default.createElement("select", Object.assign({}, props, { ref }));
}))(styles, sizes, validation, { height: 32, userSelect: "none", paddingRight: 20, appearance: "menulist" }), { displayName: "Select" });
var Textarea = Object.assign(styled(forwardRef(function(_a, ref) {
  var props = __rest(_a, ["size", "valid", "align"]);
  return React__default__default.createElement(TextareaAutoResize, Object.assign({}, props, { ref }));
}))(styles, sizes, alignment, validation, function(_ref65) {
  var _ref65$height = _ref65.height, height = _ref65$height === void 0 ? 400 : _ref65$height;
  return { overflow: "visible", maxHeight: height };
}), { displayName: "Textarea" });
var ButtonStyled = styled(forwardRef(function(_a, ref) {
  var props = __rest(_a, ["size", "valid", "align"]);
  return React__default__default.createElement(Button$2, Object.assign({}, props, { ref }));
}))(sizes, validation, {
  userSelect: "none",
  overflow: "visible",
  zIndex: 2,
  "&:hover": { transform: "none" }
});
var Button$1 = Object.assign(forwardRef(function(props, ref) {
  return React__default__default.createElement(ButtonStyled, Object.assign({}, props, { tertiary: true, small: true, inForm: true }, { ref }));
}), { displayName: "Button" });
var Form = Object.assign(styled.form({ boxSizing: "border-box", width: "100%" }), { Field, Input: Input$1, Select, Textarea, Button: Button$1 });
var LazyWithTooltip = lazy(function() {
  return import("./WithTooltip-508b8277.js").then(function(mod) {
    return { default: mod.WithTooltip };
  });
});
var WithTooltip = function WithTooltip2(props) {
  return React__default__default.createElement(Suspense, { fallback: React__default__default.createElement("div", null) }, React__default__default.createElement(LazyWithTooltip, Object.assign({}, props)));
};
var LazyWithTooltipPure = lazy(function() {
  return import("./WithTooltip-508b8277.js").then(function(mod) {
    return { default: mod.WithTooltipPure };
  });
});
var WithTooltipPure = function WithTooltipPure2(props) {
  return React__default__default.createElement(Suspense, { fallback: React__default__default.createElement("div", null) }, React__default__default.createElement(LazyWithTooltipPure, Object.assign({}, props)));
};
styled.div(function(_ref66) {
  var theme2 = _ref66.theme;
  return { fontWeight: theme2.typography.weight.black };
});
styled.span();
styled.div(function(_ref67) {
  var theme2 = _ref67.theme;
  return { marginTop: 8, textAlign: "center", "> *": { margin: "0 8px", fontWeight: theme2.typography.weight.black } };
});
styled.div(function(_ref68) {
  var theme2 = _ref68.theme;
  return { color: theme2.textColor, lineHeight: "18px" };
});
styled.div({ padding: 15, width: 280, boxSizing: "border-box" });
var Note = styled.div(function(_ref70) {
  var theme2 = _ref70.theme;
  return { padding: "2px 6px", lineHeight: "16px", fontSize: 10, fontWeight: theme2.typography.weight.bold, color: theme2.color.lightest, boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)", borderRadius: 4, whiteSpace: "nowrap", pointerEvents: "none", zIndex: -1, background: theme2.base === "light" ? "rgba(60, 60, 60, 0.9)" : "rgba(20, 20, 20, 0.85)", margin: 6 };
});
var TooltipNote = function TooltipNote2(_a) {
  var note = _a.note, props = __rest(_a, ["note"]);
  return React__default__default.createElement(Note, Object.assign({}, props), note);
};
var Title$1 = styled(function(_a) {
  var rest = __rest(_a, ["active", "loading", "disabled"]);
  return React__default__default.createElement("span", Object.assign({}, rest));
})(function(_ref71) {
  var theme2 = _ref71.theme;
  return {
    color: theme2.color.defaultText,
    fontWeight: theme2.typography.weight.regular
  };
}, function(_ref72) {
  var active = _ref72.active, theme2 = _ref72.theme;
  return active ? { color: theme2.color.primary, fontWeight: theme2.typography.weight.bold } : {};
}, function(_ref73) {
  var loading = _ref73.loading, theme2 = _ref73.theme;
  return loading ? Object.assign({ display: "inline-block", flex: "none" }, theme2.animation.inlineGlow) : {};
}, function(_ref74) {
  var disabled = _ref74.disabled, theme2 = _ref74.theme;
  return disabled ? { color: curriedTransparentize$1(0.7, theme2.color.defaultText) } : {};
});
var Right = styled.span({ "& svg": { transition: "all 200ms ease-out", opacity: 0, height: 12, width: 12, margin: "3px 0", verticalAlign: "top" }, "& path": { fill: "inherit" } }, function(_ref75) {
  var active = _ref75.active, theme2 = _ref75.theme;
  return active ? { "& svg": { opacity: 1 }, "& path": { fill: theme2.color.primary } } : {};
});
var Center = styled.span({ flex: 1, textAlign: "left", display: "inline-flex", "& > * + *": { paddingLeft: 10 } });
var CenterText = styled.span({ flex: 1, textAlign: "center" }, function(_ref76) {
  var active = _ref76.active, theme2 = _ref76.theme;
  return active ? { color: theme2.color.primary } : {};
}, function(_ref77) {
  var theme2 = _ref77.theme, disabled = _ref77.disabled;
  return disabled ? { color: theme2.color.mediumdark } : {};
});
var Left = styled.span(function(_ref78) {
  var active = _ref78.active, theme2 = _ref78.theme;
  return active ? { "& svg": { opacity: 1 }, "& path": { fill: theme2.color.primary } } : {};
});
var Item$3 = styled.a(function(_ref79) {
  var theme2 = _ref79.theme;
  return { fontSize: theme2.typography.size.s1, transition: "all 150ms ease-out", color: curriedTransparentize$1(0.5, theme2.color.defaultText), textDecoration: "none", cursor: "pointer", justifyContent: "space-between", lineHeight: "18px", padding: "7px 15px", display: "flex", alignItems: "center", "& > * + *": { paddingLeft: 10 }, "&:hover": { background: theme2.background.hoverable }, "&:hover svg": { opacity: 1 } };
}, function(_ref80) {
  var disabled = _ref80.disabled;
  return disabled ? { cursor: "not-allowed" } : {};
});
var getItemProps = memoize$3(100)(function(onClick, href, LinkWrapper) {
  var result2 = {};
  if (onClick) {
    Object.assign(result2, { onClick });
  }
  if (href) {
    Object.assign(result2, { href });
  }
  if (LinkWrapper && href) {
    Object.assign(result2, { to: href, as: LinkWrapper });
  }
  return result2;
});
var ListItem = function ListItem2(_a) {
  var loading = _a.loading, left2 = _a.left, title = _a.title, center = _a.center, right2 = _a.right, active = _a.active, disabled = _a.disabled, href = _a.href, onClick = _a.onClick, LinkWrapper = _a.LinkWrapper, rest = __rest(_a, ["loading", "left", "title", "center", "right", "active", "disabled", "href", "onClick", "LinkWrapper"]);
  var itemProps = getItemProps(onClick, href, LinkWrapper);
  var commonProps = { active, disabled };
  return React__default__default.createElement(Item$3, Object.assign({}, commonProps, rest, itemProps), left2 && React__default__default.createElement(Left, Object.assign({}, commonProps), left2), title || center ? React__default__default.createElement(Center, null, title && React__default__default.createElement(Title$1, Object.assign({}, commonProps, { loading }), title), center && React__default__default.createElement(CenterText, Object.assign({}, commonProps), center)) : null, right2 && React__default__default.createElement(Right, Object.assign({}, commonProps), right2));
};
ListItem.defaultProps = { loading: false, left: null, title: React__default__default.createElement("span", null, "Loading state"), center: null, right: null, active: false, disabled: false, href: null, LinkWrapper: null, onClick: null };
styled.div({ minWidth: 180, overflow: "hidden", overflowY: "auto", maxHeight: 13.5 * 32 }, function(_ref81) {
  var theme2 = _ref81.theme;
  return { borderRadius: theme2.appBorderRadius * 2 };
});
({ LinkWrapper: ListItem.defaultProps.LinkWrapper });
var Side = styled.div({ display: "flex", whiteSpace: "nowrap", flexBasis: "auto", flexShrink: 0, marginLeft: 3, marginRight: 3 }, function(_ref83) {
  var left2 = _ref83.left;
  return left2 ? { "& > *": { marginLeft: 4 } } : {};
}, function(_ref84) {
  var right2 = _ref84.right;
  return right2 ? { marginLeft: 30, "& > *": { marginRight: 4 } } : {};
});
Side.displayName = "Side";
var Bar$1 = styled(function(_ref85) {
  var children = _ref85.children, className = _ref85.className;
  return React__default__default.createElement(ScrollArea, { horizontal: true, vertical: false, className }, children);
})(function(_ref86) {
  var theme2 = _ref86.theme;
  return { color: theme2.barTextColor, width: "100%", height: 40, flexShrink: 0, overflow: "auto", overflowY: "hidden" };
}, function(_ref87) {
  var theme2 = _ref87.theme, border = _ref87.border;
  return border ? { boxShadow: "".concat(theme2.appBorderColor, "  0 -1px 0 0 inset"), background: theme2.barBg } : {};
});
Bar$1.displayName = "Bar";
var BarInner = styled.div(function(_ref88) {
  var bgColor = _ref88.bgColor;
  return { display: "flex", justifyContent: "space-between", position: "relative", flexWrap: "nowrap", flexShrink: 0, height: 40, backgroundColor: bgColor || "" };
});
var FlexBar = function FlexBar2(_a) {
  var children = _a.children, backgroundColor = _a.backgroundColor, rest = __rest(_a, ["children", "backgroundColor"]);
  var _Children$toArray3 = Children.toArray(children), _Children$toArray4 = _slicedToArray$4(_Children$toArray3, 2), left2 = _Children$toArray4[0], right2 = _Children$toArray4[1];
  return React__default__default.createElement(Bar$1, Object.assign({}, rest), React__default__default.createElement(BarInner, { bgColor: backgroundColor }, React__default__default.createElement(Side, { left: true }, left2), right2 ? React__default__default.createElement(Side, { right: true }, right2) : null));
};
FlexBar.displayName = "FlexBar";
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
var ButtonOrLink = function ButtonOrLink2(_a) {
  var children = _a.children, restProps = __rest(_a, ["children"]);
  return restProps.href != null ? React__default__default.createElement("a", Object.assign({}, restProps), children) : React__default__default.createElement("button", Object.assign({ type: "button" }, restProps), children);
};
var TabButton = styled(ButtonOrLink, { shouldForwardProp: isPropValid })({ whiteSpace: "normal", display: "inline-flex", overflow: "hidden", verticalAlign: "top", justifyContent: "center", alignItems: "center", textAlign: "center", textDecoration: "none", "&:empty": { display: "none" } }, function(_ref89) {
  var theme2 = _ref89.theme;
  return { padding: "0 15px", transition: "color 0.2s linear, border-bottom-color 0.2s linear", height: 40, lineHeight: "12px", cursor: "pointer", background: "transparent", border: "0 solid transparent", borderTop: "3px solid transparent", borderBottom: "3px solid transparent", fontWeight: "bold", fontSize: 13, "&:focus": { outline: "0 none", borderBottomColor: theme2.color.secondary } };
}, function(_ref90) {
  var active = _ref90.active, textColor = _ref90.textColor, theme2 = _ref90.theme;
  return active ? { color: textColor || theme2.barSelectedColor, borderBottomColor: theme2.barSelectedColor } : { color: textColor || theme2.barTextColor, borderBottomColor: "transparent" };
});
TabButton.displayName = "TabButton";
var IconButton = styled(ButtonOrLink, { shouldForwardProp: isPropValid })(function() {
  return { alignItems: "center", background: "transparent", border: "none", borderRadius: 4, color: "inherit", cursor: "pointer", display: "inline-flex", fontSize: 13, fontWeight: "bold", height: 28, justifyContent: "center", marginTop: 6, padding: "8px 7px", "& > svg": { width: 14 } };
}, function(_ref91) {
  var active = _ref91.active, theme2 = _ref91.theme;
  return active ? { backgroundColor: theme2.background.hoverable, color: theme2.color.secondary } : {};
}, function(_ref92) {
  var disabled = _ref92.disabled, theme2 = _ref92.theme;
  return disabled ? { opacity: 0.5, cursor: "not-allowed" } : { "&:hover, &:focus-visible": { background: curriedTransparentize$1(0.88, theme2.color.secondary), color: theme2.color.secondary }, "&:focus-visible": { outline: auto }, "&:focus:not(:focus-visible)": { outline: "none" } };
});
IconButton.displayName = "IconButton";
var IconPlaceholder = styled.div(function(_ref93) {
  var theme2 = _ref93.theme;
  return { width: 14, height: 14, backgroundColor: theme2.appBorderColor, animation: "".concat(theme2.animation.glow, " 1.5s ease-in-out infinite") };
});
var IconButtonSkeletonWrapper = styled.div(function() {
  return { marginTop: 6, padding: 7, height: 28 };
});
var IconButtonSkeleton = function IconButtonSkeleton2() {
  return React__default__default.createElement(IconButtonSkeletonWrapper, null, React__default__default.createElement(IconPlaceholder, null));
};
var Wrapper$6 = styled.div(function(_ref94) {
  var theme2 = _ref94.theme, bordered = _ref94.bordered;
  return bordered ? { backgroundClip: "padding-box", border: "1px solid ".concat(theme2.appBorderColor), borderRadius: theme2.appBorderRadius, overflow: "hidden", boxSizing: "border-box" } : {};
}, function(_ref95) {
  var absolute = _ref95.absolute;
  return absolute ? { width: "100%", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" } : { display: "block" };
});
var TabBar = styled.div({ overflow: "hidden", "&:first-of-type": { marginLeft: -3 } });
var Content = styled.div({ display: "block", position: "relative" }, function(_ref96) {
  var theme2 = _ref96.theme;
  return { fontSize: theme2.typography.size.s2 - 1, background: theme2.background.content };
}, function(_ref97) {
  var bordered = _ref97.bordered, theme2 = _ref97.theme;
  return bordered ? { borderRadius: "0 0 ".concat(theme2.appBorderRadius - 1, "px ").concat(theme2.appBorderRadius - 1, "px") } : {};
}, function(_ref98) {
  var absolute = _ref98.absolute, bordered = _ref98.bordered;
  return absolute ? _defineProperty2({ height: "calc(100% - ".concat(bordered ? 42 : 40, "px)"), position: "absolute", left: 0 + (bordered ? 1 : 0), right: 0 + (bordered ? 1 : 0), bottom: 0 + (bordered ? 1 : 0), top: 40 + (bordered ? 1 : 0), overflow: "auto" }, "& > *:first-child", { position: "absolute", left: 0 + (bordered ? 1 : 0), right: 0 + (bordered ? 1 : 0), bottom: 0 + (bordered ? 1 : 0), top: 0 + (bordered ? 1 : 0), height: "calc(100% - ".concat(bordered ? 2 : 0, "px)"), overflow: "auto" }) : {};
});
var VisuallyHidden = styled.div(function(_ref100) {
  var active = _ref100.active;
  return active ? { display: "block" } : { display: "none" };
});
var childrenToList = function childrenToList2(children, selected) {
  return Children.toArray(children).map(function(_ref102, index2) {
    var _ref102$props = _ref102.props, title = _ref102$props.title, id = _ref102$props.id, color2 = _ref102$props.color, childrenOfChild = _ref102$props.children;
    var content = Array.isArray(childrenOfChild) ? childrenOfChild[0] : childrenOfChild;
    return { active: selected ? id === selected : index2 === 0, title, id, color: color2, render: typeof content === "function" ? content : function(_ref103) {
      var active = _ref103.active, key = _ref103.key;
      return React__default__default.createElement(VisuallyHidden, { key, active, role: "tabpanel" }, content);
    } };
  });
};
var Tabs = memo(function(_ref104) {
  var children = _ref104.children, selected = _ref104.selected, actions = _ref104.actions, absolute = _ref104.absolute, bordered = _ref104.bordered, tools = _ref104.tools, backgroundColor = _ref104.backgroundColor, htmlId = _ref104.id;
  var list = childrenToList(children, selected);
  return list.length ? React__default__default.createElement(Wrapper$6, { absolute, bordered, id: htmlId }, React__default__default.createElement(FlexBar, { border: true, backgroundColor }, React__default__default.createElement(TabBar, { role: "tablist" }, list.map(function(_ref105) {
    var title = _ref105.title, id = _ref105.id, active = _ref105.active, color2 = _ref105.color;
    var tabTitle = typeof title === "function" ? title() : title;
    return React__default__default.createElement(TabButton, { id: "tabbutton-".concat(dist.sanitize(tabTitle)), className: "tabbutton ".concat(active ? "tabbutton-active" : ""), type: "button", key: id, active, textColor: color2, onClick: function onClick(e2) {
      e2.preventDefault();
      actions.onSelect(id);
    }, role: "tab" }, tabTitle);
  })), tools ? React__default__default.createElement(Fragment, null, tools) : null), React__default__default.createElement(Content, { id: "panel-tab-content", bordered, absolute }, list.map(function(_ref106) {
    var id = _ref106.id, active = _ref106.active, render = _ref106.render;
    return render({ key: id, active });
  }))) : React__default__default.createElement(Placeholder, null, React__default__default.createElement(Fragment, { key: "title" }, "Nothing found"));
});
Tabs.displayName = "Tabs";
Tabs.defaultProps = { id: null, children: null, tools: null, selected: null, absolute: false, bordered: false };
var TabsState = /* @__PURE__ */ function(_Component2) {
  _inherits(TabsState2, _Component2);
  var _super2 = _createSuper(TabsState2);
  function TabsState2(props) {
    var _this3;
    _classCallCheck(this, TabsState2);
    _this3 = _super2.call(this, props);
    _this3.handlers = { onSelect: function onSelect(id) {
      return _this3.setState({ selected: id });
    } };
    _this3.state = { selected: props.initial };
    return _this3;
  }
  _createClass(TabsState2, [{ key: "render", value: function render() {
    var _this$props2 = this.props, _this$props2$bordered = _this$props2.bordered, bordered = _this$props2$bordered === void 0 ? false : _this$props2$bordered, _this$props2$absolute = _this$props2.absolute, absolute = _this$props2$absolute === void 0 ? false : _this$props2$absolute, children = _this$props2.children, backgroundColor = _this$props2.backgroundColor;
    var selected = this.state.selected;
    return React__default__default.createElement(Tabs, { bordered, absolute, selected, backgroundColor, actions: this.handlers }, children);
  } }]);
  return TabsState2;
}(Component);
TabsState.defaultProps = { children: [], initial: null, absolute: false, bordered: false, backgroundColor: "" };
var Separator = styled.span(function(_ref107) {
  var theme2 = _ref107.theme;
  return { width: 1, height: 20, background: theme2.appBorderColor, marginTop: 10, marginLeft: 6, marginRight: 2 };
}, function(_ref108) {
  var force = _ref108.force;
  return force ? {} : { "& + &": { display: "none" } };
});
Separator.displayName = "Separator";
function e() {
  return (e = Object.assign || function(t2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var n2 = arguments[e2];
      for (var r2 in n2) {
        Object.prototype.hasOwnProperty.call(n2, r2) && (t2[r2] = n2[r2]);
      }
    }
    return t2;
  }).apply(this, arguments);
}
var n = /[\'\"]/;
var r = ["children", "options"], o = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce(function(t2, e2) {
  return t2[e2.toLowerCase()] = e2, t2;
}, { for: "htmlFor" }), c = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: "\xA0", quot: "\u201C" }, a = ["style", "script"], u = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, i = /mailto:/i, l = /\n{2,}$/, s = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/, _2 = /^ *> ?/gm, f = /^ {2,}\n/, d = /^(?:( *[-*_]) *){3,}(?:\n *)+\n/, p = /^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/, g = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, m = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/, y = /^(?:\n *)*\n/, h = /\r\n?/g, k = /^\[\^([^\]]+)](:.*)\n/, x = /^\[\^([^\]]+)]/, v = /\f/g, b = /^\s*?\[(x|\s)\]/, S = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, $ = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/, w = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i, z = /&([a-z]+);/g, E = /^<!--[\s\S]*?(?:-->)/, A$3 = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, R = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, I = /^\{.*\}$/, M = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, O = /^<([^ >]+@[^ >]+)>/, B = /^<([^ >]+:\/[^ >]+)>/, L = / *\n+$/, T = /(?:^|\n)( *)$/, j = /-([a-z])?/gi, C = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/, D = /^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/, N = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, Z = /^\[([^\]]*)\] ?\[([^\]]*)\]/, F = /(\[|\])/g, P = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, G = /\t/g, H = /^ *\| */, q = /(^ *\||\| *$)/g, U = / *$/, V = /^ *:-+: *$/, W = /^ *:-+ *$/, Q = /^ *-+: *$/, X = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/, J = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/, K = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/, Y = /^\\([^0-9A-Za-z\s])/, tt = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i, et = /^\n+/, nt = /^([ \t]*)/, rt = /\\([^0-9A-Z\s])/gi, ot = new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"), ct = new RegExp("^( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)", "gm"), at = new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"), ut = "(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*", it = new RegExp("^\\[(" + ut + `)\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`), lt = new RegExp("^!\\[(" + ut + `)\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`), st = [s, g, p, S, $, E, ct, at, C], _t = [].concat(st, [/^[^\n]+(?:  \n|\n{2,})/, w, R]);
function ft(t2) {
  return t2.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function dt(t2) {
  return Q.test(t2) ? "right" : V.test(t2) ? "center" : W.test(t2) ? "left" : null;
}
function pt(t2, e2, n2) {
  var r2 = n2.t;
  n2.t = true;
  var o2 = e2(t2.trim(), n2);
  n2.t = r2;
  var c2 = [[]];
  return o2.forEach(function(t3, e3) {
    t3.type === "tableSeparator" ? e3 !== 0 && e3 !== o2.length - 1 && c2.push([]) : (t3.type !== "text" || o2[e3 + 1] != null && o2[e3 + 1].type !== "tableSeparator" || (t3.content = t3.content.replace(U, "")), c2[c2.length - 1].push(t3));
  }), c2;
}
function gt(t2, e2, n2) {
  n2.o = true;
  var r2 = pt(t2[1], e2, n2), o2 = t2[2].replace(q, "").split("|").map(dt), c2 = function(t3, e3, n3) {
    return t3.trim().split("\n").map(function(t4) {
      return pt(t4, e3, n3);
    });
  }(t2[3], e2, n2);
  return n2.o = false, { align: o2, cells: c2, header: r2, type: "table" };
}
function mt(t2, e2) {
  return t2.align[e2] == null ? {} : { textAlign: t2.align[e2] };
}
function yt(t2) {
  return function(e2, n2) {
    return n2.o ? t2.exec(e2) : null;
  };
}
function ht(t2) {
  return function(e2, n2) {
    return n2.o || n2.u ? t2.exec(e2) : null;
  };
}
function kt(t2) {
  return function(e2, n2) {
    return n2.o || n2.u ? null : t2.exec(e2);
  };
}
function xt(t2) {
  return function(e2) {
    return t2.exec(e2);
  };
}
function vt(t2, e2, n2) {
  if (e2.o || e2.u)
    return null;
  if (n2 && !n2.endsWith("\n"))
    return null;
  var r2 = "";
  t2.split("\n").every(function(t3) {
    return !st.some(function(e3) {
      return e3.test(t3);
    }) && (r2 += t3 + "\n", t3.trim());
  });
  var o2 = r2.trimEnd();
  return o2 == "" ? null : [r2, o2];
}
function bt(t2) {
  try {
    if (decodeURIComponent(t2).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data):/i))
      return null;
  } catch (t3) {
    return null;
  }
  return t2;
}
function St(t2) {
  return t2.replace(rt, "$1");
}
function $t(t2, e2, n2) {
  var r2 = n2.o || false, o2 = n2.u || false;
  n2.o = true, n2.u = true;
  var c2 = t2(e2, n2);
  return n2.o = r2, n2.u = o2, c2;
}
function wt(t2, e2, n2) {
  var r2 = n2.o || false, o2 = n2.u || false;
  n2.o = false, n2.u = true;
  var c2 = t2(e2, n2);
  return n2.o = r2, n2.u = o2, c2;
}
function zt(t2, e2, n2) {
  return n2.o = false, t2(e2 + "\n\n", n2);
}
var Et = function Et2(t2, e2, n2) {
  return { content: $t(e2, t2[1], n2) };
};
function At() {
  return {};
}
function Rt() {
  return null;
}
function It() {
  for (var _len3 = arguments.length, t2 = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    t2[_key3] = arguments[_key3];
  }
  return t2.filter(Boolean).join(" ");
}
function Mt(t2, e2, n2) {
  var r2 = t2;
  var o2 = e2.split(".");
  for (; o2.length && (r2 = r2[o2[0]], r2 !== void 0); ) {
    o2.shift();
  }
  return r2 || n2;
}
var Ot;
function Bt(r2) {
  var q2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  q2.overrides = q2.overrides || {}, q2.slugify = q2.slugify || ft, q2.namedCodesToUnicode = q2.namedCodesToUnicode ? e({}, c, q2.namedCodesToUnicode) : c;
  var U2 = q2.createElement || React__default__default.createElement;
  function V2(t2, n2) {
    var o2 = Mt(q2.overrides, "".concat(t2, ".props"), {});
    for (var _len4 = arguments.length, r3 = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
      r3[_key4 - 2] = arguments[_key4];
    }
    return U2.apply(void 0, [function(t3, e2) {
      var n3 = Mt(e2, t3);
      return n3 ? typeof n3 == "function" || _typeof(n3) == "object" && "render" in n3 ? n3 : Mt(e2, "".concat(t3, ".component"), t3) : t3;
    }(t2, q2.overrides), e({}, n2, o2, { className: It(n2 == null ? void 0 : n2.className, o2.className) || void 0 })].concat(r3));
  }
  function W2(e2) {
    var n2 = false;
    q2.forceInline ? n2 = true : q2.forceBlock || (n2 = P.test(e2) === false);
    var r3 = pt2(dt2(n2 ? e2 : "".concat(e2.trimEnd().replace(et, ""), "\n\n"), { o: n2 }));
    for (; typeof r3[r3.length - 1] == "string" && !r3[r3.length - 1].trim(); ) {
      r3.pop();
    }
    if (q2.wrapper === null)
      return r3;
    var o2 = q2.wrapper || (n2 ? "span" : "div");
    var c2;
    if (r3.length > 1 || q2.forceWrapper)
      c2 = r3;
    else {
      if (r3.length === 1)
        return c2 = r3[0], typeof c2 == "string" ? V2("span", { key: "outer" }, c2) : c2;
      c2 = null;
    }
    return React__default__default.createElement(o2, { key: "outer" }, c2);
  }
  function Q2(e2) {
    var r3 = e2.match(u);
    return r3 ? r3.reduce(function(e3, r4, c2) {
      var a3 = r4.indexOf("=");
      if (a3 !== -1) {
        var _u = function(t2) {
          return t2.indexOf("-") !== -1 && t2.match(A$3) === null && (t2 = t2.replace(j, function(t3, e4) {
            return e4.toUpperCase();
          })), t2;
        }(r4.slice(0, a3)).trim(), _i2 = function(t2) {
          return t2 ? (n.test(t2.charAt(0)) && (t2 = t2.substr(1)), n.test(t2.charAt(t2.length - 1)) && (t2 = t2.substr(0, t2.length - 1)), t2) : "";
        }(r4.slice(a3 + 1).trim()), _l = o[_u] || _u, _s2 = e3[_l] = function(t2, e4) {
          return t2 === "style" ? e4.split(/;\s?/).reduce(function(t3, e5) {
            var n2 = e5.slice(0, e5.indexOf(":"));
            return t3[n2.replace(/(-[a-z])/g, function(t4) {
              return t4[1].toUpperCase();
            })] = e5.slice(n2.length + 1).trim(), t3;
          }, {}) : t2 === "href" ? bt(e4) : (e4.match(I) && (e4 = e4.slice(1, e4.length - 1)), e4 === "true" || e4 !== "false" && e4);
        }(_u, _i2);
        typeof _s2 == "string" && (w.test(_s2) || R.test(_s2)) && (e3[_l] = React__default__default.cloneElement(W2(_s2.trim()), { key: c2 }));
      } else
        r4 !== "style" && (e3[o[r4] || r4] = true);
      return e3;
    }, {}) : void 0;
  }
  var rt2 = [], ut2 = {}, st2 = { blockQuote: { i: kt(s), l: Ot.HIGH, _: function _(t2, e2, n2) {
    return { content: e2(t2[0].replace(_2, ""), n2) };
  }, p: function p3(t2, e2, n2) {
    return V2("blockquote", { key: n2.g }, e2(t2.content, n2));
  } }, breakLine: { i: xt(f), l: Ot.HIGH, _: At, p: function p3(t2, e2, n2) {
    return V2("br", { key: n2.g });
  } }, breakThematic: { i: kt(d), l: Ot.HIGH, _: At, p: function p3(t2, e2, n2) {
    return V2("hr", { key: n2.g });
  } }, codeBlock: { i: kt(g), l: Ot.MAX, _: function _(t2) {
    return { content: t2[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""), lang: void 0 };
  }, p: function p3(t2, e2, n2) {
    return V2("pre", { key: n2.g }, V2("code", { className: t2.lang ? "lang-".concat(t2.lang) : "" }, t2.content));
  } }, codeFenced: { i: kt(p), l: Ot.MAX, _: function _(t2) {
    return { content: t2[3], lang: t2[2] || void 0, type: "codeBlock" };
  } }, codeInline: { i: ht(m), l: Ot.LOW, _: function _(t2) {
    return { content: t2[2] };
  }, p: function p3(t2, e2, n2) {
    return V2("code", { key: n2.g }, t2.content);
  } }, footnote: { i: kt(k), l: Ot.MAX, _: function _(t2) {
    return rt2.push({ footnote: t2[2], identifier: t2[1] }), {};
  }, p: Rt }, footnoteReference: { i: yt(x), l: Ot.HIGH, _: function _(t2) {
    return { content: t2[1], target: "#".concat(q2.slugify(t2[1])) };
  }, p: function p3(t2, e2, n2) {
    return V2("a", { key: n2.g, href: bt(t2.target) }, V2("sup", { key: n2.g }, t2.content));
  } }, gfmTask: { i: yt(b), l: Ot.HIGH, _: function _(t2) {
    return { completed: t2[1].toLowerCase() === "x" };
  }, p: function p3(t2, e2, n2) {
    return V2("input", { checked: t2.completed, key: n2.g, readOnly: true, type: "checkbox" });
  } }, heading: { i: kt(S), l: Ot.HIGH, _: function _(t2, e2, n2) {
    return { content: $t(e2, t2[2], n2), id: q2.slugify(t2[2]), level: t2[1].length };
  }, p: function p3(t2, e2, n2) {
    return t2.tag = "h".concat(t2.level), V2(t2.tag, { id: t2.id, key: n2.g }, e2(t2.content, n2));
  } }, headingSetext: { i: kt($), l: Ot.MAX, _: function _(t2, e2, n2) {
    return { content: $t(e2, t2[1], n2), level: t2[2] === "=" ? 1 : 2, type: "heading" };
  } }, htmlComment: { i: xt(E), l: Ot.HIGH, _: function _() {
    return {};
  }, p: Rt }, image: { i: ht(lt), l: Ot.HIGH, _: function _(t2) {
    return { alt: t2[1], target: St(t2[2]), title: t2[3] };
  }, p: function p3(t2, e2, n2) {
    return V2("img", { key: n2.g, alt: t2.alt || void 0, title: t2.title || void 0, src: bt(t2.target) });
  } }, link: { i: yt(it), l: Ot.LOW, _: function _(t2, e2, n2) {
    return { content: wt(e2, t2[1], n2), target: St(t2[2]), title: t2[3] };
  }, p: function p3(t2, e2, n2) {
    return V2("a", { key: n2.g, href: bt(t2.target), title: t2.title }, e2(t2.content, n2));
  } }, linkAngleBraceStyleDetector: { i: yt(B), l: Ot.MAX, _: function _(t2) {
    return { content: [{ content: t2[1], type: "text" }], target: t2[1], type: "link" };
  } }, linkBareUrlDetector: { i: function i2(t2, e2) {
    return e2.m ? null : yt(M)(t2, e2);
  }, l: Ot.MAX, _: function _(t2) {
    return { content: [{ content: t2[1], type: "text" }], target: t2[1], title: void 0, type: "link" };
  } }, linkMailtoDetector: { i: yt(O), l: Ot.MAX, _: function _(t2) {
    var e2 = t2[1], n2 = t2[1];
    return i.test(n2) || (n2 = "mailto:" + n2), { content: [{ content: e2.replace("mailto:", ""), type: "text" }], target: n2, type: "link" };
  } }, list: { i: function i2(t2, e2, n2) {
    var r3 = T.exec(n2);
    return !r3 || !e2.h && e2.o ? null : at.exec(t2 = r3[1] + t2);
  }, l: Ot.HIGH, _: function _(t2, e2, n2) {
    var r3 = t2[2], o2 = r3.length > 1, c2 = o2 ? +r3 : void 0, a3 = t2[0].replace(l, "\n").match(ct);
    var u2 = false;
    return { items: a3.map(function(t3, r4) {
      var o3 = ot.exec(t3)[0].length, c3 = new RegExp("^ {1," + o3 + "}", "gm"), i2 = t3.replace(c3, "").replace(ot, ""), l2 = r4 === a3.length - 1, s2 = i2.indexOf("\n\n") !== -1 || l2 && u2;
      u2 = s2;
      var _3 = n2.o, f2 = n2.h;
      var d2;
      n2.h = true, s2 ? (n2.o = false, d2 = i2.replace(L, "\n\n")) : (n2.o = true, d2 = i2.replace(L, ""));
      var p3 = e2(d2, n2);
      return n2.o = _3, n2.h = f2, p3;
    }), ordered: o2, start: c2 };
  }, p: function p3(t2, e2, n2) {
    return V2(t2.ordered ? "ol" : "ul", { key: n2.g, start: t2.start }, t2.items.map(function(t3, r3) {
      return V2("li", { key: r3 }, e2(t3, n2));
    }));
  } }, newlineCoalescer: { i: kt(y), l: Ot.LOW, _: At, p: function p3() {
    return "\n";
  } }, paragraph: { i: vt, l: Ot.LOW, _: Et, p: function p3(t2, e2, n2) {
    return V2("p", { key: n2.g }, e2(t2.content, n2));
  } }, ref: { i: yt(D), l: Ot.MAX, _: function _(t2) {
    return ut2[t2[1]] = { target: t2[2], title: t2[4] }, {};
  }, p: Rt }, refImage: { i: ht(N), l: Ot.MAX, _: function _(t2) {
    return { alt: t2[1] || void 0, ref: t2[2] };
  }, p: function p3(t2, e2, n2) {
    return V2("img", { key: n2.g, alt: t2.alt, src: bt(ut2[t2.ref].target), title: ut2[t2.ref].title });
  } }, refLink: { i: yt(Z), l: Ot.MAX, _: function _(t2, e2, n2) {
    return { content: e2(t2[1], n2), fallbackContent: e2(t2[0].replace(F, "\\$1"), n2), ref: t2[2] };
  }, p: function p3(t2, e2, n2) {
    return ut2[t2.ref] ? V2("a", { key: n2.g, href: bt(ut2[t2.ref].target), title: ut2[t2.ref].title }, e2(t2.content, n2)) : V2("span", { key: n2.g }, e2(t2.fallbackContent, n2));
  } }, table: { i: kt(C), l: Ot.HIGH, _: gt, p: function p3(t2, e2, n2) {
    return V2("table", { key: n2.g }, V2("thead", null, V2("tr", null, t2.header.map(function(r3, o2) {
      return V2("th", { key: o2, style: mt(t2, o2) }, e2(r3, n2));
    }))), V2("tbody", null, t2.cells.map(function(r3, o2) {
      return V2("tr", { key: o2 }, r3.map(function(r4, o3) {
        return V2("td", { key: o3, style: mt(t2, o3) }, e2(r4, n2));
      }));
    })));
  } }, tableSeparator: { i: function i2(t2, e2) {
    return e2.t ? H.exec(t2) : null;
  }, l: Ot.HIGH, _: function _() {
    return { type: "tableSeparator" };
  }, p: function p3() {
    return " | ";
  } }, text: { i: xt(tt), l: Ot.MIN, _: function _(t2) {
    return { content: t2[0].replace(z, function(t3, e2) {
      return q2.namedCodesToUnicode[e2] ? q2.namedCodesToUnicode[e2] : t3;
    }) };
  }, p: function p3(t2) {
    return t2.content;
  } }, textBolded: { i: ht(X), l: Ot.MED, _: function _(t2, e2, n2) {
    return { content: e2(t2[2], n2) };
  }, p: function p3(t2, e2, n2) {
    return V2("strong", { key: n2.g }, e2(t2.content, n2));
  } }, textEmphasized: { i: ht(J), l: Ot.LOW, _: function _(t2, e2, n2) {
    return { content: e2(t2[2], n2) };
  }, p: function p3(t2, e2, n2) {
    return V2("em", { key: n2.g }, e2(t2.content, n2));
  } }, textEscaped: { i: ht(Y), l: Ot.HIGH, _: function _(t2) {
    return { content: t2[1], type: "text" };
  } }, textStrikethroughed: { i: ht(K), l: Ot.LOW, _: Et, p: function p3(t2, e2, n2) {
    return V2("del", { key: n2.g }, e2(t2.content, n2));
  } } };
  q2.disableParsingRawHTML !== true && (st2.htmlBlock = { i: xt(w), l: Ot.HIGH, _: function _(t2, e2, n2) {
    var _t$3$match = t2[3].match(nt), _t$3$match2 = _slicedToArray$4(_t$3$match, 2), r3 = _t$3$match2[1], o2 = new RegExp("^".concat(r3), "gm"), c2 = t2[3].replace(o2, ""), u2 = (i2 = c2, _t.some(function(t3) {
      return t3.test(i2);
    }) ? zt : $t);
    var i2;
    var l2 = t2[1].toLowerCase(), s2 = a.indexOf(l2) !== -1;
    n2.m = n2.m || l2 === "a";
    var _3 = s2 ? t2[3] : u2(e2, c2, n2);
    return n2.m = false, { attrs: Q2(t2[2]), content: _3, noInnerParse: s2, tag: s2 ? l2 : t2[1] };
  }, p: function p3(t2, n2, r3) {
    return V2(t2.tag, e({ key: r3.g }, t2.attrs), t2.noInnerParse ? t2.content : n2(t2.content, r3));
  } }, st2.htmlSelfClosing = { i: xt(R), l: Ot.HIGH, _: function _(t2) {
    return { attrs: Q2(t2[2] || ""), tag: t2[1] };
  }, p: function p3(t2, n2, r3) {
    return V2(t2.tag, e({}, t2.attrs, { key: r3.g }));
  } });
  var dt2 = function(t2) {
    var e2 = Object.keys(t2);
    function n2(r3, o2) {
      var c2 = [], a3 = "";
      for (; r3; ) {
        var _u2 = 0;
        for (; _u2 < e2.length; ) {
          var _i3 = e2[_u2], _l2 = t2[_i3], _s3 = _l2.i(r3, o2, a3);
          if (_s3) {
            var _t2 = _s3[0];
            r3 = r3.substring(_t2.length);
            var _e2 = _l2._(_s3, n2, o2);
            _e2.type == null && (_e2.type = _i3), c2.push(_e2), a3 = _t2;
            break;
          }
          _u2++;
        }
      }
      return c2;
    }
    return e2.sort(function(e3, n3) {
      var r3 = t2[e3].l, o2 = t2[n3].l;
      return r3 !== o2 ? r3 - o2 : e3 < n3 ? -1 : 1;
    }), function(t3, e3) {
      return n2(function(t4) {
        return t4.replace(h, "\n").replace(v, "").replace(G, "    ");
      }(t3), e3);
    };
  }(st2), pt2 = (Bt2 = function(t2) {
    return function(e2, n2, r3) {
      return t2[e2.type].p(e2, n2, r3);
    };
  }(st2), function t2(e2) {
    var n2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Array.isArray(e2)) {
      var _r = n2.g, _o = [];
      var _c = false;
      for (var _r2 = 0; _r2 < e2.length; _r2++) {
        n2.g = _r2;
        var _a2 = t2(e2[_r2], n2), _u3 = typeof _a2 == "string";
        _u3 && _c ? _o[_o.length - 1] += _a2 : _a2 !== null && _o.push(_a2), _c = _u3;
      }
      return n2.g = _r, _o;
    }
    return Bt2(e2, t2, n2);
  });
  var Bt2;
  var Lt = W2(r2);
  return rt2.length ? V2("div", null, Lt, V2("footer", { key: "footer" }, rt2.map(function(t2) {
    return V2("div", { id: q2.slugify(t2.identifier), key: t2.identifier }, t2.identifier, pt2(dt2(t2.footnote, { o: true })));
  }))) : Lt;
}
!function(t2) {
  t2[t2.MAX = 0] = "MAX", t2[t2.HIGH = 1] = "HIGH", t2[t2.MED = 2] = "MED", t2[t2.LOW = 3] = "LOW", t2[t2.MIN = 4] = "MIN";
}(Ot || (Ot = {}));
var Markdown = function Markdown2(e2) {
  var n2 = e2.children, o2 = e2.options, c2 = function(t2, e3) {
    if (t2 == null)
      return {};
    var n3, r2, o3 = {}, c3 = Object.keys(t2);
    for (r2 = 0; r2 < c3.length; r2++) {
      e3.indexOf(n3 = c3[r2]) >= 0 || (o3[n3] = t2[n3]);
    }
    return o3;
  }(e2, r);
  return React__default__default.cloneElement(Bt(n2, o2), c2);
};
var Description$1 = function Description$12(_ref110) {
  var markdown = _ref110.markdown;
  return React__default__default.createElement(ResetWrapper, null, React__default__default.createElement(Markdown, { options: { forceBlock: true, overrides: components$1 } }, markdown));
};
var breakpoint = 600;
var Title$2 = styled.h1(withReset, function(_ref111) {
  var theme2 = _ref111.theme;
  return _defineProperty2({ color: theme2.color.defaultText, fontSize: theme2.typography.size.m3, fontWeight: theme2.typography.weight.black, lineHeight: "32px" }, "@media (min-width: ".concat(breakpoint, "px)"), { fontSize: theme2.typography.size.l1, lineHeight: "36px", marginBottom: ".5rem" });
});
var Subtitle$1 = styled.h2(withReset, function(_ref113) {
  var _ref114;
  var theme2 = _ref113.theme;
  return _ref114 = { fontWeight: theme2.typography.weight.regular, fontSize: theme2.typography.size.s3, lineHeight: "20px", borderBottom: "none", marginBottom: 15 }, _defineProperty2(_ref114, "@media (min-width: ".concat(breakpoint, "px)"), { fontSize: theme2.typography.size.m1, lineHeight: "28px", marginBottom: 24 }), _defineProperty2(_ref114, "color", curriedTransparentize$1(0.25, theme2.color.defaultText)), _ref114;
});
var DocsContent = styled.div({ maxWidth: 1e3, width: "100%" });
var DocsWrapper = styled.div(function(_ref115) {
  var theme2 = _ref115.theme;
  return _defineProperty2({ background: theme2.background.content, display: "flex", justifyContent: "center", padding: "4rem 20px", minHeight: "100vh", boxSizing: "border-box" }, "@media (min-width: ".concat(breakpoint, "px)"), {});
});
var getBlockBackgroundStyle = function getBlockBackgroundStyle2(theme2) {
  return { borderRadius: theme2.appBorderRadius, background: theme2.background.content, boxShadow: theme2.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", border: "1px solid ".concat(theme2.appBorderColor) };
};
var getStoryHref = function getStoryHref2(baseUrl, storyId) {
  var additionalParams = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var _baseUrl$split = baseUrl.split("?"), _baseUrl$split2 = _slicedToArray$4(_baseUrl$split, 2), url = _baseUrl$split2[0], paramsStr = _baseUrl$split2[1];
  var params = paramsStr ? Object.assign(Object.assign(Object.assign({}, lib.parse(paramsStr)), additionalParams), { id: storyId }) : Object.assign(Object.assign({}, additionalParams), { id: storyId });
  return "".concat(url).concat(lib.stringify(params, { addQueryPrefix: true, encode: false }));
};
var Zoom = function Zoom2(_ref118) {
  var zoom = _ref118.zoom, resetZoom = _ref118.resetZoom;
  return React__default__default.createElement(React__default__default.Fragment, null, React__default__default.createElement(IconButton, { key: "zoomin", onClick: function onClick(e2) {
    e2.preventDefault();
    zoom(0.8);
  }, title: "Zoom in" }, React__default__default.createElement(Icons, { icon: "zoom" })), React__default__default.createElement(IconButton, { key: "zoomout", onClick: function onClick(e2) {
    e2.preventDefault();
    zoom(1.25);
  }, title: "Zoom out" }, React__default__default.createElement(Icons, { icon: "zoomout" })), React__default__default.createElement(IconButton, { key: "zoomreset", onClick: function onClick(e2) {
    e2.preventDefault();
    resetZoom();
  }, title: "Reset zoom" }, React__default__default.createElement(Icons, { icon: "zoomreset" })));
};
var Eject = function Eject2(_ref119) {
  var baseUrl = _ref119.baseUrl, storyId = _ref119.storyId;
  return React__default__default.createElement(IconButton, { key: "opener", href: getStoryHref(baseUrl, storyId), target: "_blank", title: "Open canvas in new tab" }, React__default__default.createElement(Icons, { icon: "share" }));
};
var Bar = styled(FlexBar)({ position: "absolute", left: 0, right: 0, top: 0, transition: "transform .2s linear" });
var Toolbar = function Toolbar2(_a) {
  var isLoading = _a.isLoading, storyId = _a.storyId, baseUrl = _a.baseUrl, zoom = _a.zoom, resetZoom = _a.resetZoom, rest = __rest(_a, ["isLoading", "storyId", "baseUrl", "zoom", "resetZoom"]);
  return React__default__default.createElement(Bar, Object.assign({}, rest), React__default__default.createElement(Fragment, { key: "left" }, isLoading ? [1, 2, 3].map(function(key) {
    return React__default__default.createElement(IconButtonSkeleton, { key });
  }) : React__default__default.createElement(Zoom, Object.assign({}, { zoom, resetZoom }))), React__default__default.createElement(Fragment, { key: "right" }, storyId && (isLoading ? React__default__default.createElement(IconButtonSkeleton, null) : React__default__default.createElement(Eject, Object.assign({}, { storyId, baseUrl })))));
};
var ZoomContext = createContext({ scale: 1 });
var globalWindow$1 = window_1.window;
var IFrame = /* @__PURE__ */ function(_Component3) {
  _inherits(IFrame2, _Component3);
  var _super3 = _createSuper(IFrame2);
  function IFrame2() {
    var _this4;
    _classCallCheck(this, IFrame2);
    _this4 = _super3.apply(this, arguments);
    _this4.iframe = null;
    return _this4;
  }
  _createClass(IFrame2, [{ key: "componentDidMount", value: function componentDidMount() {
    var id = this.props.id;
    this.iframe = globalWindow$1.document.getElementById(id);
  } }, { key: "shouldComponentUpdate", value: function shouldComponentUpdate(nextProps) {
    var scale = nextProps.scale;
    if (scale !== this.props.scale) {
      this.setIframeBodyStyle({ width: "".concat(scale * 100, "%"), height: "".concat(scale * 100, "%"), transform: "scale(".concat(1 / scale, ")"), transformOrigin: "top left" });
    }
    return false;
  } }, { key: "setIframeBodyStyle", value: function setIframeBodyStyle(style) {
    return Object.assign(this.iframe.contentDocument.body.style, style);
  } }, { key: "render", value: function render() {
    var _a = this.props, id = _a.id, title = _a.title, src = _a.src, allowFullScreen = _a.allowFullScreen;
    _a.scale;
    var rest = __rest(_a, ["id", "title", "src", "allowFullScreen", "scale"]);
    return React__default__default.createElement("iframe", Object.assign({
      id,
      title,
      src,
      allowFullScreen,
      loading: "lazy"
    }, rest));
  } }]);
  return IFrame2;
}(Component);
var rotate360 = keyframes(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral$4(["\n	from {\n		transform: rotate(0deg);\n	}\n	to {\n		transform: rotate(360deg);\n	}\n"])));
var EventSource = window_1.EventSource, CONFIG_TYPE = window_1.CONFIG_TYPE;
var LoaderWrapper = styled.div(function(_ref120) {
  var _ref120$size = _ref120.size, size = _ref120$size === void 0 ? 32 : _ref120$size;
  return { borderRadius: "50%", cursor: "progress", display: "inline-block", overflow: "hidden", position: "absolute", transition: "all 200ms ease-out", verticalAlign: "top", top: "50%", left: "50%", marginTop: -(size / 2), marginLeft: -(size / 2), height: size, width: size, zIndex: 4, borderWidth: 2, borderStyle: "solid", borderColor: "rgba(97, 97, 97, 0.29)", borderTopColor: "rgb(100,100,100)", animation: "".concat(rotate360, " 0.7s linear infinite"), mixBlendMode: "difference" };
});
var ProgressWrapper = styled.div({ position: "absolute", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" });
var ProgressTrack = styled.div(function(_ref121) {
  var theme2 = _ref121.theme;
  return { position: "relative", width: "80%", marginBottom: "0.75rem", maxWidth: 300, height: 5, borderRadius: 5, background: curriedTransparentize$1(0.8, theme2.color.secondary), overflow: "hidden", cursor: "progress" };
});
var ProgressBar = styled.div(function(_ref122) {
  var theme2 = _ref122.theme;
  return { position: "absolute", top: 0, left: 0, height: "100%", background: theme2.color.secondary };
});
var ProgressMessage = styled.div(function(_ref123) {
  var theme2 = _ref123.theme;
  return { minHeight: "2em", fontSize: "".concat(theme2.typography.size.s1, "px"), color: theme2.barTextColor };
});
var ErrorIcon = styled(Icons)(function(_ref124) {
  var theme2 = _ref124.theme;
  return { width: 20, height: 20, marginBottom: "0.5rem", color: theme2.color.mediumdark };
});
var ellipsis = keyframes(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral$4(['\n  from { content: "..." }\n  33% { content: "." }\n  66% { content: ".." }\n  to { content: "..." }\n'])));
var Ellipsis = styled.span({ "&::after": { content: "'...'", animation: "".concat(ellipsis, " 1s linear infinite"), animationDelay: "1s", display: "inline-block", width: "1em", height: "auto" } });
var PureLoader = function PureLoader2(_a) {
  var progress = _a.progress, error2 = _a.error, size = _a.size, props = __rest(_a, ["progress", "error", "size"]);
  if (error2) {
    return React__default__default.createElement(ProgressWrapper, Object.assign({ "aria-label": error2.toString(), "aria-live": "polite", role: "status" }, props), React__default__default.createElement(ErrorIcon, { icon: "lightningoff" }), React__default__default.createElement(ProgressMessage, null, error2.message));
  }
  if (progress) {
    var _value = progress.value, modules = progress.modules;
    var message = progress.message;
    if (modules)
      message += " ".concat(modules.complete, " / ").concat(modules.total, " modules");
    return React__default__default.createElement(ProgressWrapper, Object.assign({ "aria-label": "Content is loading...", "aria-live": "polite", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": _value * 100, "aria-valuetext": message, role: "progressbar" }, props), React__default__default.createElement(ProgressTrack, null, React__default__default.createElement(ProgressBar, { style: { width: "".concat(_value * 100, "%") } })), React__default__default.createElement(ProgressMessage, null, message, _value < 1 && React__default__default.createElement(Ellipsis, { key: message })));
  }
  return React__default__default.createElement(LoaderWrapper, Object.assign({ "aria-label": "Content is loading...", "aria-live": "polite", role: "status", size }, props));
};
var Loader = function Loader2(props) {
  var _useState3 = useState(void 0), _useState4 = _slicedToArray$4(_useState3, 2), progress = _useState4[0], setProgress = _useState4[1];
  var _useState5 = useState(void 0), _useState6 = _slicedToArray$4(_useState5, 2), error2 = _useState6[0], setError = _useState6[1];
  useEffect(function() {
    if (CONFIG_TYPE !== "DEVELOPMENT" || !EventSource)
      return void 0;
    var eventSource = new EventSource("/progress");
    var lastProgress;
    eventSource.onmessage = function(event) {
      try {
        lastProgress = JSON.parse(event.data);
        setProgress(lastProgress);
      } catch (e2) {
        setError(e2);
        eventSource.close();
      }
    };
    eventSource.onerror = function() {
      if (lastProgress && lastProgress.value !== 1)
        setError(new Error("Connection closed"));
      eventSource.close();
    };
    return function() {
      return eventSource.close();
    };
  }, []);
  return React__default__default.createElement(PureLoader, Object.assign({ progress, error: error2 }, props));
};
var PREVIEW_URL = window_1.PREVIEW_URL;
var BASE_URL = PREVIEW_URL || "iframe.html";
var StoryError;
(function(StoryError2) {
  StoryError2["NO_STORY"] = "No component or story to display";
})(StoryError || (StoryError = {}));
var MISSING_STORY = function MISSING_STORY2(id) {
  return id ? 'Story "'.concat(id, `" doesn't exist.`) : StoryError.NO_STORY;
};
var InlineStory = function InlineStory2(_ref125) {
  var storyFn = _ref125.storyFn, height = _ref125.height, id = _ref125.id;
  return React__default__default.createElement(Fragment, null, height ? React__default__default.createElement("style", null, "#story--".concat(id, " { min-height: ").concat(height, "; transform: translateZ(0); overflow: auto }")) : null, React__default__default.createElement(Fragment, null, storyFn ? createElement(storyFn) : React__default__default.createElement(EmptyBlock, null, MISSING_STORY(id))));
};
var IFrameStory = function IFrameStory2(_ref126) {
  var id = _ref126.id, title = _ref126.title, _ref126$height = _ref126.height, height = _ref126$height === void 0 ? "500px" : _ref126$height;
  return React__default__default.createElement("div", { style: { width: "100%", height } }, React__default__default.createElement(ZoomContext.Consumer, null, function(_ref127) {
    var scale = _ref127.scale;
    return React__default__default.createElement(IFrame, { key: "iframe", id: "iframe--".concat(id), title, src: getStoryHref(BASE_URL, id, { viewMode: "story" }), allowFullScreen: true, scale, style: { width: "100%", height: "100%", border: "0 none" } });
  }));
};
var Story$1 = function Story2(_a) {
  _a.children;
  var error2 = _a.error, inline = _a.inline, props = __rest(_a, ["children", "error", "inline"]);
  var id = props.id, title = props.title, height = props.height;
  if (error2) {
    return React__default__default.createElement(EmptyBlock, null, error2);
  }
  return inline ? React__default__default.createElement(InlineStory, Object.assign({}, props)) : React__default__default.createElement(IFrameStory, { id, title, height });
};
var StorySkeleton = function StorySkeleton2() {
  return React__default__default.createElement(Loader, null);
};
var ChildrenContainer = styled.div(function(_ref128) {
  var isColumn = _ref128.isColumn, columns = _ref128.columns, layout = _ref128.layout;
  return { display: isColumn || !columns ? "block" : "flex", position: "relative", flexWrap: "wrap", overflow: "auto", flexDirection: isColumn ? "column" : "row", "& .innerZoomElementWrapper > *": isColumn ? { width: layout !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "block" } : { maxWidth: layout !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "inline-block" } };
}, function(_ref129) {
  var _ref129$layout = _ref129.layout, layout = _ref129$layout === void 0 ? "padded" : _ref129$layout;
  return layout === "centered" || layout === "padded" ? { padding: "30px 20px", margin: -10, "& .innerZoomElementWrapper > *": { width: "auto", border: "10px solid transparent!important" } } : {};
}, function(_ref130) {
  var _ref130$layout = _ref130.layout, layout = _ref130$layout === void 0 ? "padded" : _ref130$layout;
  return layout === "centered" ? { display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "center", alignItems: "center" } : {};
}, function(_ref131) {
  var columns = _ref131.columns;
  return columns && columns > 1 ? { ".innerZoomElementWrapper > *": { minWidth: "calc(100% / ".concat(columns, " - 20px)") } } : {};
});
var StyledSource = styled(Source$1)(function(_ref132) {
  var theme2 = _ref132.theme;
  return { margin: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: theme2.appBorderRadius, borderBottomRightRadius: theme2.appBorderRadius, border: "none", background: theme2.base === "light" ? "rgba(0, 0, 0, 0.85)" : curriedDarken$1(0.05, theme2.background.content), color: theme2.color.lightest, button: { background: theme2.base === "light" ? "rgba(0, 0, 0, 0.85)" : curriedDarken$1(0.05, theme2.background.content) } };
});
var PreviewContainer = styled.div(function(_ref133) {
  var theme2 = _ref133.theme, withSource = _ref133.withSource, isExpanded = _ref133.isExpanded;
  return Object.assign(Object.assign({ position: "relative", overflow: "hidden", margin: "25px 0 40px" }, getBlockBackgroundStyle(theme2)), { borderBottomLeftRadius: withSource && isExpanded && 0, borderBottomRightRadius: withSource && isExpanded && 0, borderBottomWidth: isExpanded && 0 });
}, function(_ref134) {
  var withToolbar = _ref134.withToolbar;
  return withToolbar && { paddingTop: 40 };
});
var getSource = function getSource2(withSource, expanded, setExpanded) {
  switch (true) {
    case !!(withSource && withSource.error): {
      return { source: null, actionItem: { title: "No code available", className: "docblock-code-toggle docblock-code-toggle--disabled", disabled: true, onClick: function onClick() {
        return setExpanded(false);
      } } };
    }
    case expanded: {
      return { source: React__default__default.createElement(StyledSource, Object.assign({}, withSource, { dark: true })), actionItem: { title: "Hide code", className: "docblock-code-toggle docblock-code-toggle--expanded", onClick: function onClick() {
        return setExpanded(false);
      } } };
    }
    default: {
      return { source: React__default__default.createElement(StyledSource, Object.assign({}, withSource, { dark: true })), actionItem: { title: "Show code", className: "docblock-code-toggle", onClick: function onClick() {
        return setExpanded(true);
      } } };
    }
  }
};
function getStoryId$1(children) {
  if (Children.count(children) === 1) {
    var elt = children;
    if (elt.props) {
      return elt.props.id;
    }
  }
  return null;
}
var PositionedToolbar = styled(Toolbar)({ position: "absolute", top: 0, left: 0, right: 0, height: 40 });
var Relative = styled.div({ overflow: "hidden", position: "relative" });
var getLayout = function getLayout2(children) {
  return children.reduce(function(result2, c2) {
    if (result2) {
      return result2;
    }
    if (typeof c2 === "string" || typeof c2 === "number") {
      return "padded";
    }
    return c2.props && c2.props.parameters && c2.props.parameters.layout || "padded";
  }, void 0);
};
var Preview$1 = function Preview2(_a) {
  var isLoading = _a.isLoading, isColumn = _a.isColumn, columns = _a.columns, children = _a.children, withSource = _a.withSource, _a$withToolbar = _a.withToolbar, withToolbar = _a$withToolbar === void 0 ? false : _a$withToolbar, _a$isExpanded = _a.isExpanded, isExpanded = _a$isExpanded === void 0 ? false : _a$isExpanded, additionalActions = _a.additionalActions, className = _a.className, props = __rest(_a, ["isLoading", "isColumn", "columns", "children", "withSource", "withToolbar", "isExpanded", "additionalActions", "className"]);
  var _useState7 = useState(isExpanded), _useState8 = _slicedToArray$4(_useState7, 2), expanded = _useState8[0], setExpanded = _useState8[1];
  var _getSource = getSource(withSource, expanded, setExpanded), source = _getSource.source, actionItem = _getSource.actionItem;
  var _useState9 = useState(1), _useState10 = _slicedToArray$4(_useState9, 2), scale = _useState10[0], setScale = _useState10[1];
  var previewClasses = [className].concat(["sbdocs", "sbdocs-preview"]);
  var defaultActionItems = withSource ? [actionItem] : [];
  var _useState11 = useState(additionalActions ? _toConsumableArray$1(additionalActions) : []), _useState12 = _slicedToArray$4(_useState11, 2), additionalActionItems = _useState12[0], setAdditionalActionItems = _useState12[1];
  var actionItems = [].concat(defaultActionItems, _toConsumableArray$1(additionalActionItems));
  var layout = getLayout(Children.count(children) === 1 ? [children] : children);
  var globalWindow2 = window_1.window;
  var copyToClipboard = useCallback(function(text) {
    return __awaiter(void 0, void 0, void 0, /* @__PURE__ */ regeneratorRuntime.mark(function _callee2() {
      var _yield$import, createCopyToClipboardFunction;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return import("./syntaxhighlighter-82dea71a.js");
            case 2:
              _yield$import = _context2.sent;
              createCopyToClipboardFunction = _yield$import.createCopyToClipboardFunction;
              createCopyToClipboardFunction();
            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
  }, []);
  var onCopyCapture = function onCopyCapture2(e2) {
    e2.preventDefault();
    if (additionalActionItems.filter(function(item) {
      return item.title === "Copied";
    }).length === 0) {
      copyToClipboard(source.props.code).then(function() {
        setAdditionalActionItems([].concat(_toConsumableArray$1(additionalActionItems), [{ title: "Copied", onClick: function onClick() {
        } }]));
        globalWindow2.setTimeout(function() {
          return setAdditionalActionItems(additionalActionItems.filter(function(item) {
            return item.title !== "Copied";
          }));
        }, 1500);
      });
    }
  };
  return React__default__default.createElement(PreviewContainer, Object.assign({}, { withSource, withToolbar }, props, { className: previewClasses.join(" ") }), withToolbar && React__default__default.createElement(PositionedToolbar, { isLoading, border: true, zoom: function zoom(z2) {
    return setScale(scale * z2);
  }, resetZoom: function resetZoom() {
    return setScale(1);
  }, storyId: getStoryId$1(children), baseUrl: "./iframe.html" }), React__default__default.createElement(ZoomContext.Provider, { value: { scale } }, React__default__default.createElement(Relative, { className: "docs-story", onCopyCapture: withSource && onCopyCapture }, React__default__default.createElement(ChildrenContainer, { isColumn: isColumn || !Array.isArray(children), columns, layout }, React__default__default.createElement(Zoom$1.Element, { scale }, Array.isArray(children) ? children.map(function(child, i2) {
    return React__default__default.createElement("div", { key: i2 }, child);
  }) : React__default__default.createElement("div", null, children))), React__default__default.createElement(ActionBar, { actionItems }))), withSource && expanded && source);
};
var StyledPreview = styled(Preview$1)(function() {
  return { ".docs-story": { paddingTop: 32, paddingBottom: 40 } };
});
var PreviewSkeleton = function PreviewSkeleton2() {
  return React__default__default.createElement(StyledPreview, { isLoading: true, withToolbar: true }, React__default__default.createElement(StorySkeleton, null));
};
function arrayMap$2(array2, iteratee) {
  var index2 = -1, length2 = array2 == null ? 0 : array2.length, result2 = Array(length2);
  while (++index2 < length2) {
    result2[index2] = iteratee(array2[index2], index2, array2);
  }
  return result2;
}
var _arrayMap = arrayMap$2;
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
function assocIndexOf$4(array2, key) {
  var length2 = array2.length;
  while (length2--) {
    if (eq$2(array2[length2][0], key)) {
      return length2;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete$1(key) {
  var data = this.__data__, index2 = assocIndexOf$3(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index2, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key) {
  var data = this.__data__, index2 = assocIndexOf$2(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key, value2) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    ++this.size;
    data.push([key, value2]);
  } else {
    data[index2][1] = value2;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$4(entries) {
  var index2 = -1, length2 = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length2) {
    var entry = entries[index2];
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
function stackDelete$1(key) {
  var data = this.__data__, result2 = data["delete"](key);
  this.size = data.size;
  return result2;
}
var _stackDelete = stackDelete$1;
function stackGet$1(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet$1;
function stackHas$1(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas$1;
var freeGlobal$1 = _typeof(commonjsGlobal) == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self && self.Object === Object && self;
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
  } catch (e2) {
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
function objectToString$1(value2) {
  return nativeObjectToString.call(value2);
}
var _objectToString = objectToString$1;
var Symbol$4 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$4 ? Symbol$4.toStringTag : void 0;
function baseGetTag$5(value2) {
  if (value2 == null) {
    return value2 === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value2) ? getRawTag(value2) : objectToString(value2);
}
var _baseGetTag = baseGetTag$5;
function isObject$7(value2) {
  var type = _typeof(value2);
  return value2 != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$7;
var baseGetTag$4 = _baseGetTag, isObject$6 = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$2(value2) {
  if (!isObject$6(value2)) {
    return false;
  }
  var tag = baseGetTag$4(value2);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$2;
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
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e2) {
    }
    try {
      return func + "";
    } catch (e2) {
    }
  }
  return "";
}
var _toSource = toSource$2;
var isFunction$1 = isFunction_1, isMasked = _isMasked, isObject$5 = isObject_1, toSource$1 = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$c = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$a = objectProto$c.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$a).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$1(value2) {
  if (!isObject$5(value2) || isMasked(value2)) {
    return false;
  }
  var pattern = isFunction$1(value2) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value2));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object2, key) {
  return object2 == null ? void 0 : object2[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$7(object2, key) {
  var value2 = getValue(object2, key);
  return baseIsNative(value2) ? value2 : void 0;
}
var _getNative = getNative$7;
var getNative$6 = _getNative, root$5 = _root;
var Map$4 = getNative$6(root$5, "Map");
var _Map = Map$4;
var getNative$5 = _getNative;
var nativeCreate$4 = getNative$5(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key) {
  var result2 = this.has(key) && delete this.__data__[key];
  this.size -= result2 ? 1 : 0;
  return result2;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$b = Object.prototype;
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result2 = data[key];
    return result2 === HASH_UNDEFINED$2 ? void 0 : result2;
  }
  return hasOwnProperty$9.call(data, key) ? data[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto$a = Object.prototype;
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$8.call(data, key);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet$1(key, value2) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value2 === void 0 ? HASH_UNDEFINED$1 : value2;
  return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
function Hash$1(entries) {
  var index2 = -1, length2 = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length2) {
    var entry = entries[index2];
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
  this.__data__ = { "hash": new Hash(), "map": new (Map$3 || ListCache$2)(), "string": new Hash() };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value2) {
  var type = _typeof(value2);
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value2 !== "__proto__" : value2 === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key) {
  var result2 = getMapData$3(this, key)["delete"](key);
  this.size -= result2 ? 1 : 0;
  return result2;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key, value2) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value2);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$3(entries) {
  var index2 = -1, length2 = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length2) {
    var entry = entries[index2];
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
var LARGE_ARRAY_SIZE$1 = 200;
function stackSet$1(key, value2) {
  var data = this.__data__;
  if (data instanceof ListCache$1) {
    var pairs = data.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE$1 - 1) {
      pairs.push([key, value2]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$2(pairs);
  }
  data.set(key, value2);
  this.size = data.size;
  return this;
}
var _stackSet = stackSet$1;
var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
function Stack$3(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack$3.prototype.clear = stackClear;
Stack$3.prototype["delete"] = stackDelete;
Stack$3.prototype.get = stackGet;
Stack$3.prototype.has = stackHas;
Stack$3.prototype.set = stackSet;
var _Stack = Stack$3;
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
function SetCache$2(values) {
  var index2 = -1, length2 = values == null ? 0 : values.length;
  this.__data__ = new MapCache$1();
  while (++index2 < length2) {
    this.add(values[index2]);
  }
}
SetCache$2.prototype.add = SetCache$2.prototype.push = setCacheAdd;
SetCache$2.prototype.has = setCacheHas;
var _SetCache = SetCache$2;
function arraySome$1(array2, predicate) {
  var index2 = -1, length2 = array2 == null ? 0 : array2.length;
  while (++index2 < length2) {
    if (predicate(array2[index2], index2, array2)) {
      return true;
    }
  }
  return false;
}
var _arraySome = arraySome$1;
function cacheHas$2(cache, key) {
  return cache.has(key);
}
var _cacheHas = cacheHas$2;
var SetCache$1 = _SetCache, arraySome = _arraySome, cacheHas$1 = _cacheHas;
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays$2(array2, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array2.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array2);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array2;
  }
  var index2 = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache$1() : void 0;
  stack.set(array2, other);
  stack.set(other, array2);
  while (++index2 < arrLength) {
    var arrValue = array2[index2], othValue = other[index2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index2, other, array2, stack) : customizer(arrValue, othValue, index2, array2, other, stack);
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
        if (!cacheHas$1(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
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
  stack["delete"](array2);
  stack["delete"](other);
  return result2;
}
var _equalArrays = equalArrays$2;
var root$4 = _root;
var Uint8Array$2 = root$4.Uint8Array;
var _Uint8Array = Uint8Array$2;
function mapToArray$1(map) {
  var index2 = -1, result2 = Array(map.size);
  map.forEach(function(value2, key) {
    result2[++index2] = [key, value2];
  });
  return result2;
}
var _mapToArray = mapToArray$1;
function setToArray$3(set) {
  var index2 = -1, result2 = Array(set.size);
  set.forEach(function(value2) {
    result2[++index2] = value2;
  });
  return result2;
}
var _setToArray = setToArray$3;
var Symbol$3 = _Symbol, Uint8Array$1 = _Uint8Array, eq$1 = eq_1, equalArrays$1 = _equalArrays, mapToArray = _mapToArray, setToArray$2 = _setToArray;
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]", errorTag$2 = "[object Error]", mapTag$5 = "[object Map]", numberTag$3 = "[object Number]", regexpTag$3 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$3 = "[object String]", symbolTag$3 = "[object Symbol]";
var arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]";
var symbolProto$2 = Symbol$3 ? Symbol$3.prototype : void 0, symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : void 0;
function equalByTag$1(object2, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$4:
      if (object2.byteLength != other.byteLength || object2.byteOffset != other.byteOffset) {
        return false;
      }
      object2 = object2.buffer;
      other = other.buffer;
    case arrayBufferTag$3:
      if (object2.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object2), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag$3:
    case dateTag$3:
    case numberTag$3:
      return eq$1(+object2, +other);
    case errorTag$2:
      return object2.name == other.name && object2.message == other.message;
    case regexpTag$3:
    case stringTag$3:
      return object2 == other + "";
    case mapTag$5:
      var convert3 = mapToArray;
    case setTag$5:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert3 || (convert3 = setToArray$2);
      if (object2.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object2);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object2, other);
      var result2 = equalArrays$1(convert3(object2), convert3(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object2);
      return result2;
    case symbolTag$3:
      if (symbolValueOf$1) {
        return symbolValueOf$1.call(object2) == symbolValueOf$1.call(other);
      }
  }
  return false;
}
var _equalByTag = equalByTag$1;
function arrayPush$2(array2, values) {
  var index2 = -1, length2 = values.length, offset = array2.length;
  while (++index2 < length2) {
    array2[offset + index2] = values[index2];
  }
  return array2;
}
var _arrayPush = arrayPush$2;
var isArray$9 = Array.isArray;
var isArray_1 = isArray$9;
var arrayPush$1 = _arrayPush, isArray$8 = isArray_1;
function baseGetAllKeys$2(object2, keysFunc, symbolsFunc) {
  var result2 = keysFunc(object2);
  return isArray$8(object2) ? result2 : arrayPush$1(result2, symbolsFunc(object2));
}
var _baseGetAllKeys = baseGetAllKeys$2;
function arrayFilter$1(array2, predicate) {
  var index2 = -1, length2 = array2 == null ? 0 : array2.length, resIndex = 0, result2 = [];
  while (++index2 < length2) {
    var value2 = array2[index2];
    if (predicate(value2, index2, array2)) {
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
var objectProto$9 = Object.prototype;
var propertyIsEnumerable$1 = objectProto$9.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols$3 = !nativeGetSymbols$1 ? stubArray$1 : function(object2) {
  if (object2 == null) {
    return [];
  }
  object2 = Object(object2);
  return arrayFilter(nativeGetSymbols$1(object2), function(symbol) {
    return propertyIsEnumerable$1.call(object2, symbol);
  });
};
var _getSymbols = getSymbols$3;
function baseTimes$1(n2, iteratee) {
  var index2 = -1, result2 = Array(n2);
  while (++index2 < n2) {
    result2[index2] = iteratee(index2);
  }
  return result2;
}
var _baseTimes = baseTimes$1;
function isObjectLike$7(value2) {
  return value2 != null && _typeof(value2) == "object";
}
var isObjectLike_1 = isObjectLike$7;
var baseGetTag$3 = _baseGetTag, isObjectLike$6 = isObjectLike_1;
var argsTag$3 = "[object Arguments]";
function baseIsArguments$1(value2) {
  return isObjectLike$6(value2) && baseGetTag$3(value2) == argsTag$3;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$5 = isObjectLike_1;
var objectProto$8 = Object.prototype;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
var propertyIsEnumerable = objectProto$8.propertyIsEnumerable;
var isArguments$2 = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value2) {
  return isObjectLike$5(value2) && hasOwnProperty$7.call(value2, "callee") && !propertyIsEnumerable.call(value2, "callee");
};
var isArguments_1 = isArguments$2;
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
  var isBuffer2 = nativeIsBuffer || stubFalse2;
  module.exports = isBuffer2;
})(isBuffer$3, isBuffer$3.exports);
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$3(value2, length2) {
  var type = _typeof(value2);
  length2 = length2 == null ? MAX_SAFE_INTEGER$1 : length2;
  return !!length2 && (type == "number" || type != "symbol" && reIsUint.test(value2)) && value2 > -1 && value2 % 1 == 0 && value2 < length2;
}
var _isIndex = isIndex$3;
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength$3(value2) {
  return typeof value2 == "number" && value2 > -1 && value2 % 1 == 0 && value2 <= MAX_SAFE_INTEGER;
}
var isLength_1 = isLength$3;
var baseGetTag$2 = _baseGetTag, isLength$2 = isLength_1, isObjectLike$4 = isObjectLike_1;
var argsTag$2 = "[object Arguments]", arrayTag$2 = "[object Array]", boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$1 = "[object Error]", funcTag$1 = "[object Function]", mapTag$4 = "[object Map]", numberTag$2 = "[object Number]", objectTag$3 = "[object Object]", regexpTag$2 = "[object RegExp]", setTag$4 = "[object Set]", stringTag$2 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] = typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$2] = typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$2] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$4] = typedArrayTags[numberTag$2] = typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$2] = typedArrayTags[setTag$4] = typedArrayTags[stringTag$2] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray$1(value2) {
  return isObjectLike$4(value2) && isLength$2(value2.length) && !!typedArrayTags[baseGetTag$2(value2)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
function baseUnary$3(func) {
  return function(value2) {
    return func(value2);
  };
}
var _baseUnary = baseUnary$3;
var _nodeUtil = { exports: {} };
(function(module, exports) {
  var freeGlobal2 = _freeGlobal;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e2) {
    }
  }();
  module.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var baseIsTypedArray = _baseIsTypedArray, baseUnary$2 = _baseUnary, nodeUtil$2 = _nodeUtil.exports;
var nodeIsTypedArray = nodeUtil$2 && nodeUtil$2.isTypedArray;
var isTypedArray$2 = nodeIsTypedArray ? baseUnary$2(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$2;
var baseTimes = _baseTimes, isArguments$1 = isArguments_1, isArray$7 = isArray_1, isBuffer$2 = isBuffer$3.exports, isIndex$2 = _isIndex, isTypedArray$1 = isTypedArray_1;
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
function arrayLikeKeys$2(value2, inherited) {
  var isArr = isArray$7(value2), isArg = !isArr && isArguments$1(value2), isBuff = !isArr && !isArg && isBuffer$2(value2), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value2), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value2.length, String) : [], length2 = result2.length;
  for (var key in value2) {
    if ((inherited || hasOwnProperty$6.call(value2, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex$2(key, length2)))) {
      result2.push(key);
    }
  }
  return result2;
}
var _arrayLikeKeys = arrayLikeKeys$2;
var objectProto$6 = Object.prototype;
function isPrototype$3(value2) {
  var Ctor = value2 && value2.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$6;
  return value2 === proto;
}
var _isPrototype = isPrototype$3;
function overArg$2(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$2;
var overArg$1 = _overArg;
var nativeKeys$1 = overArg$1(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype$2 = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$5 = Object.prototype;
var hasOwnProperty$5 = objectProto$5.hasOwnProperty;
function baseKeys$1(object2) {
  if (!isPrototype$2(object2)) {
    return nativeKeys(object2);
  }
  var result2 = [];
  for (var key in Object(object2)) {
    if (hasOwnProperty$5.call(object2, key) && key != "constructor") {
      result2.push(key);
    }
  }
  return result2;
}
var _baseKeys = baseKeys$1;
var isFunction$3 = isFunction_1, isLength$1 = isLength_1;
function isArrayLike$2(value2) {
  return value2 != null && isLength$1(value2.length) && !isFunction$3(value2);
}
var isArrayLike_1 = isArrayLike$2;
var arrayLikeKeys$1 = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike$1 = isArrayLike_1;
function keys$4(object2) {
  return isArrayLike$1(object2) ? arrayLikeKeys$1(object2) : baseKeys(object2);
}
var keys_1 = keys$4;
var baseGetAllKeys$1 = _baseGetAllKeys, getSymbols$2 = _getSymbols, keys$3 = keys_1;
function getAllKeys$2(object2) {
  return baseGetAllKeys$1(object2, keys$3, getSymbols$2);
}
var _getAllKeys = getAllKeys$2;
var getAllKeys$1 = _getAllKeys;
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$4 = Object.prototype;
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
function equalObjects$1(object2, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys$1(object2), objLength = objProps.length, othProps = getAllKeys$1(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index2 = objLength;
  while (index2--) {
    var key = objProps[index2];
    if (!(isPartial ? key in other : hasOwnProperty$4.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object2);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object2;
  }
  var result2 = true;
  stack.set(object2, other);
  stack.set(other, object2);
  var skipCtor = isPartial;
  while (++index2 < objLength) {
    key = objProps[index2];
    var objValue = object2[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object2, stack) : customizer(objValue, othValue, key, object2, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result2 = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result2 && !skipCtor) {
    var objCtor = object2.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && "constructor" in object2 && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result2 = false;
    }
  }
  stack["delete"](object2);
  stack["delete"](other);
  return result2;
}
var _equalObjects = equalObjects$1;
var getNative$4 = _getNative, root$3 = _root;
var DataView$1 = getNative$4(root$3, "DataView");
var _DataView = DataView$1;
var getNative$3 = _getNative, root$2 = _root;
var Promise$2 = getNative$3(root$2, "Promise");
var _Promise = Promise$2;
var getNative$2 = _getNative, root$1 = _root;
var Set$2 = getNative$2(root$1, "Set");
var _Set = Set$2;
var getNative$1 = _getNative, root = _root;
var WeakMap$1 = getNative$1(root, "WeakMap");
var _WeakMap = WeakMap$1;
var DataView = _DataView, Map$1 = _Map, Promise$1 = _Promise, Set$1 = _Set, WeakMap$2 = _WeakMap, baseGetTag$1 = _baseGetTag, toSource = _toSource;
var mapTag$3 = "[object Map]", objectTag$2 = "[object Object]", promiseTag = "[object Promise]", setTag$3 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$2 = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$2);
var getTag$4 = baseGetTag$1;
if (DataView && getTag$4(new DataView(new ArrayBuffer(1))) != dataViewTag$2 || Map$1 && getTag$4(new Map$1()) != mapTag$3 || Promise$1 && getTag$4(Promise$1.resolve()) != promiseTag || Set$1 && getTag$4(new Set$1()) != setTag$3 || WeakMap$2 && getTag$4(new WeakMap$2()) != weakMapTag$1) {
  getTag$4 = function getTag$42(value2) {
    var result2 = baseGetTag$1(value2), Ctor = result2 == objectTag$2 ? value2.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$2;
        case mapCtorString:
          return mapTag$3;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$3;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result2;
  };
}
var _getTag = getTag$4;
var Stack$2 = _Stack, equalArrays = _equalArrays, equalByTag = _equalByTag, equalObjects = _equalObjects, getTag$3 = _getTag, isArray$6 = isArray_1, isBuffer$1 = isBuffer$3.exports, isTypedArray = isTypedArray_1;
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", objectTag$1 = "[object Object]";
var objectProto$3 = Object.prototype;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
function baseIsEqualDeep$1(object2, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$6(object2), othIsArr = isArray$6(other), objTag = objIsArr ? arrayTag$1 : getTag$3(object2), othTag = othIsArr ? arrayTag$1 : getTag$3(other);
  objTag = objTag == argsTag$1 ? objectTag$1 : objTag;
  othTag = othTag == argsTag$1 ? objectTag$1 : othTag;
  var objIsObj = objTag == objectTag$1, othIsObj = othTag == objectTag$1, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$1(object2)) {
    if (!isBuffer$1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$2());
    return objIsArr || isTypedArray(object2) ? equalArrays(object2, other, bitmask, customizer, equalFunc, stack) : equalByTag(object2, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty$3.call(object2, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$3.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object2.value() : object2, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack$2());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$2());
  return equalObjects(object2, other, bitmask, customizer, equalFunc, stack);
}
var _baseIsEqualDeep = baseIsEqualDeep$1;
var baseIsEqualDeep = _baseIsEqualDeep, isObjectLike$3 = isObjectLike_1;
function baseIsEqual$2(value2, other, bitmask, customizer, stack) {
  if (value2 === other) {
    return true;
  }
  if (value2 == null || other == null || !isObjectLike$3(value2) && !isObjectLike$3(other)) {
    return value2 !== value2 && other !== other;
  }
  return baseIsEqualDeep(value2, other, bitmask, customizer, baseIsEqual$2, stack);
}
var _baseIsEqual = baseIsEqual$2;
var Stack$1 = _Stack, baseIsEqual$1 = _baseIsEqual;
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch$1(object2, source, matchData, customizer) {
  var index2 = matchData.length, length2 = index2, noCustomizer = !customizer;
  if (object2 == null) {
    return !length2;
  }
  object2 = Object(object2);
  while (index2--) {
    var data = matchData[index2];
    if (noCustomizer && data[2] ? data[1] !== object2[data[0]] : !(data[0] in object2)) {
      return false;
    }
  }
  while (++index2 < length2) {
    data = matchData[index2];
    var key = data[0], objValue = object2[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object2)) {
        return false;
      }
    } else {
      var stack = new Stack$1();
      if (customizer) {
        var result2 = customizer(objValue, srcValue, key, object2, source, stack);
      }
      if (!(result2 === void 0 ? baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result2)) {
        return false;
      }
    }
  }
  return true;
}
var _baseIsMatch = baseIsMatch$1;
var isObject$4 = isObject_1;
function isStrictComparable$2(value2) {
  return value2 === value2 && !isObject$4(value2);
}
var _isStrictComparable = isStrictComparable$2;
var isStrictComparable$1 = _isStrictComparable, keys$2 = keys_1;
function getMatchData$1(object2) {
  var result2 = keys$2(object2), length2 = result2.length;
  while (length2--) {
    var key = result2[length2], value2 = object2[key];
    result2[length2] = [key, value2, isStrictComparable$1(value2)];
  }
  return result2;
}
var _getMatchData = getMatchData$1;
function matchesStrictComparable$2(key, srcValue) {
  return function(object2) {
    if (object2 == null) {
      return false;
    }
    return object2[key] === srcValue && (srcValue !== void 0 || key in Object(object2));
  };
}
var _matchesStrictComparable = matchesStrictComparable$2;
var baseIsMatch = _baseIsMatch, getMatchData = _getMatchData, matchesStrictComparable$1 = _matchesStrictComparable;
function baseMatches$1(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
  }
  return function(object2) {
    return object2 === source || baseIsMatch(object2, source, matchData);
  };
}
var _baseMatches = baseMatches$1;
var baseGetTag = _baseGetTag, isObjectLike$2 = isObjectLike_1;
var symbolTag$2 = "[object Symbol]";
function isSymbol$3(value2) {
  return _typeof(value2) == "symbol" || isObjectLike$2(value2) && baseGetTag(value2) == symbolTag$2;
}
var isSymbol_1 = isSymbol$3;
var isArray$5 = isArray_1, isSymbol$2 = isSymbol_1;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey$3(value2, object2) {
  if (isArray$5(value2)) {
    return false;
  }
  var type = _typeof(value2);
  if (type == "number" || type == "symbol" || type == "boolean" || value2 == null || isSymbol$2(value2)) {
    return true;
  }
  return reIsPlainProp.test(value2) || !reIsDeepProp.test(value2) || object2 != null && value2 in Object(object2);
}
var _isKey = isKey$3;
var MapCache = _MapCache;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize$1(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function memoized2() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized2.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result2 = func.apply(this, args);
    memoized2.cache = cache.set(key, result2) || cache;
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
  var result2 = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result2.cache;
  return result2;
}
var _memoizeCapped = memoizeCapped$1;
var memoizeCapped = _memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath$1 = memoizeCapped(function(string2) {
  var result2 = [];
  if (string2.charCodeAt(0) === 46) {
    result2.push("");
  }
  string2.replace(rePropName, function(match2, number, quote, subString) {
    result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match2);
  });
  return result2;
});
var _stringToPath = stringToPath$1;
var Symbol$2 = _Symbol, arrayMap$1 = _arrayMap, isArray$4 = isArray_1, isSymbol$1 = isSymbol_1;
var INFINITY$2 = 1 / 0;
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto$1 ? symbolProto$1.toString : void 0;
function baseToString$1(value2) {
  if (typeof value2 == "string") {
    return value2;
  }
  if (isArray$4(value2)) {
    return arrayMap$1(value2, baseToString$1) + "";
  }
  if (isSymbol$1(value2)) {
    return symbolToString ? symbolToString.call(value2) : "";
  }
  var result2 = value2 + "";
  return result2 == "0" && 1 / value2 == -INFINITY$2 ? "-0" : result2;
}
var _baseToString = baseToString$1;
var baseToString = _baseToString;
function toString$1(value2) {
  return value2 == null ? "" : baseToString(value2);
}
var toString_1 = toString$1;
var isArray$3 = isArray_1, isKey$2 = _isKey, stringToPath = _stringToPath, toString = toString_1;
function castPath$4(value2, object2) {
  if (isArray$3(value2)) {
    return value2;
  }
  return isKey$2(value2, object2) ? [value2] : stringToPath(toString(value2));
}
var _castPath = castPath$4;
var isSymbol = isSymbol_1;
var INFINITY$1 = 1 / 0;
function toKey$5(value2) {
  if (typeof value2 == "string" || isSymbol(value2)) {
    return value2;
  }
  var result2 = value2 + "";
  return result2 == "0" && 1 / value2 == -INFINITY$1 ? "-0" : result2;
}
var _toKey = toKey$5;
var castPath$3 = _castPath, toKey$4 = _toKey;
function baseGet$3(object2, path) {
  path = castPath$3(path, object2);
  var index2 = 0, length2 = path.length;
  while (object2 != null && index2 < length2) {
    object2 = object2[toKey$4(path[index2++])];
  }
  return index2 && index2 == length2 ? object2 : void 0;
}
var _baseGet = baseGet$3;
var baseGet$2 = _baseGet;
function get$1(object2, path, defaultValue) {
  var result2 = object2 == null ? void 0 : baseGet$2(object2, path);
  return result2 === void 0 ? defaultValue : result2;
}
var get_1 = get$1;
function baseHasIn$1(object2, key) {
  return object2 != null && key in Object(object2);
}
var _baseHasIn = baseHasIn$1;
var castPath$2 = _castPath, isArguments = isArguments_1, isArray$2 = isArray_1, isIndex$1 = _isIndex, isLength = isLength_1, toKey$3 = _toKey;
function hasPath$1(object2, path, hasFunc) {
  path = castPath$2(path, object2);
  var index2 = -1, length2 = path.length, result2 = false;
  while (++index2 < length2) {
    var key = toKey$3(path[index2]);
    if (!(result2 = object2 != null && hasFunc(object2, key))) {
      break;
    }
    object2 = object2[key];
  }
  if (result2 || ++index2 != length2) {
    return result2;
  }
  length2 = object2 == null ? 0 : object2.length;
  return !!length2 && isLength(length2) && isIndex$1(key, length2) && (isArray$2(object2) || isArguments(object2));
}
var _hasPath = hasPath$1;
var baseHasIn = _baseHasIn, hasPath = _hasPath;
function hasIn$1(object2, path) {
  return object2 != null && hasPath(object2, path, baseHasIn);
}
var hasIn_1 = hasIn$1;
var baseIsEqual = _baseIsEqual, get = get_1, hasIn = hasIn_1, isKey$1 = _isKey, isStrictComparable = _isStrictComparable, matchesStrictComparable = _matchesStrictComparable, toKey$2 = _toKey;
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty$1(path, srcValue) {
  if (isKey$1(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey$2(path), srcValue);
  }
  return function(object2) {
    var objValue = get(object2, path);
    return objValue === void 0 && objValue === srcValue ? hasIn(object2, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
var _baseMatchesProperty = baseMatchesProperty$1;
function identity$1(value2) {
  return value2;
}
var identity_1 = identity$1;
function baseProperty$1(key) {
  return function(object2) {
    return object2 == null ? void 0 : object2[key];
  };
}
var _baseProperty = baseProperty$1;
var baseGet$1 = _baseGet;
function basePropertyDeep$1(path) {
  return function(object2) {
    return baseGet$1(object2, path);
  };
}
var _basePropertyDeep = basePropertyDeep$1;
var baseProperty = _baseProperty, basePropertyDeep = _basePropertyDeep, isKey = _isKey, toKey$1 = _toKey;
function property$1(path) {
  return isKey(path) ? baseProperty(toKey$1(path)) : basePropertyDeep(path);
}
var property_1 = property$1;
var baseMatches = _baseMatches, baseMatchesProperty = _baseMatchesProperty, identity = identity_1, isArray$1 = isArray_1, property = property_1;
function baseIteratee$1(value2) {
  if (typeof value2 == "function") {
    return value2;
  }
  if (value2 == null) {
    return identity;
  }
  if (_typeof(value2) == "object") {
    return isArray$1(value2) ? baseMatchesProperty(value2[0], value2[1]) : baseMatches(value2);
  }
  return property(value2);
}
var _baseIteratee = baseIteratee$1;
var getNative = _getNative;
var defineProperty$1 = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e2) {
  }
}();
var _defineProperty$5 = defineProperty$1;
var defineProperty = _defineProperty$5;
function baseAssignValue$2(object2, key, value2) {
  if (key == "__proto__" && defineProperty) {
    defineProperty(object2, key, { "configurable": true, "enumerable": true, "value": value2, "writable": true });
  } else {
    object2[key] = value2;
  }
}
var _baseAssignValue = baseAssignValue$2;
var baseAssignValue$1 = _baseAssignValue, eq = eq_1;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function assignValue$3(object2, key, value2) {
  var objValue = object2[key];
  if (!(hasOwnProperty$2.call(object2, key) && eq(objValue, value2)) || value2 === void 0 && !(key in object2)) {
    baseAssignValue$1(object2, key, value2);
  }
}
var _assignValue = assignValue$3;
var assignValue$2 = _assignValue, castPath$1 = _castPath, isIndex = _isIndex, isObject$3 = isObject_1, toKey = _toKey;
function baseSet$1(object2, path, value2, customizer) {
  if (!isObject$3(object2)) {
    return object2;
  }
  path = castPath$1(path, object2);
  var index2 = -1, length2 = path.length, lastIndex = length2 - 1, nested = object2;
  while (nested != null && ++index2 < length2) {
    var key = toKey(path[index2]), newValue = value2;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object2;
    }
    if (index2 != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject$3(objValue) ? objValue : isIndex(path[index2 + 1]) ? [] : {};
      }
    }
    assignValue$2(nested, key, newValue);
    nested = nested[key];
  }
  return object2;
}
var _baseSet = baseSet$1;
var baseGet = _baseGet, baseSet = _baseSet, castPath = _castPath;
function basePickBy$1(object2, paths, predicate) {
  var index2 = -1, length2 = paths.length, result2 = {};
  while (++index2 < length2) {
    var path = paths[index2], value2 = baseGet(object2, path);
    if (predicate(value2, path)) {
      baseSet(result2, castPath(path, object2), value2);
    }
  }
  return result2;
}
var _basePickBy = basePickBy$1;
var overArg = _overArg;
var getPrototype$2 = overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$2;
var arrayPush = _arrayPush, getPrototype$1 = _getPrototype, getSymbols$1 = _getSymbols, stubArray = stubArray_1;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function(object2) {
  var result2 = [];
  while (object2) {
    arrayPush(result2, getSymbols$1(object2));
    object2 = getPrototype$1(object2);
  }
  return result2;
};
var _getSymbolsIn = getSymbolsIn$2;
function nativeKeysIn$1(object2) {
  var result2 = [];
  if (object2 != null) {
    for (var key in Object(object2)) {
      result2.push(key);
    }
  }
  return result2;
}
var _nativeKeysIn = nativeKeysIn$1;
var isObject$2 = isObject_1, isPrototype$1 = _isPrototype, nativeKeysIn = _nativeKeysIn;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function baseKeysIn$1(object2) {
  if (!isObject$2(object2)) {
    return nativeKeysIn(object2);
  }
  var isProto = isPrototype$1(object2), result2 = [];
  for (var key in object2) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$1.call(object2, key)))) {
      result2.push(key);
    }
  }
  return result2;
}
var _baseKeysIn = baseKeysIn$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike = isArrayLike_1;
function keysIn$3(object2) {
  return isArrayLike(object2) ? arrayLikeKeys(object2, true) : baseKeysIn(object2);
}
var keysIn_1 = keysIn$3;
var baseGetAllKeys = _baseGetAllKeys, getSymbolsIn$1 = _getSymbolsIn, keysIn$2 = keysIn_1;
function getAllKeysIn$2(object2) {
  return baseGetAllKeys(object2, keysIn$2, getSymbolsIn$1);
}
var _getAllKeysIn = getAllKeysIn$2;
var arrayMap = _arrayMap, baseIteratee = _baseIteratee, basePickBy = _basePickBy, getAllKeysIn$1 = _getAllKeysIn;
function pickBy(object2, predicate) {
  if (object2 == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn$1(object2), function(prop) {
    return [prop];
  });
  predicate = baseIteratee(predicate);
  return basePickBy(object2, props, function(value2, path) {
    return predicate(value2, path[0]);
  });
}
var pickBy_1 = pickBy;
var Table = styled.table(function(_ref135) {
  var theme2 = _ref135.theme;
  return { "&&": {
    borderCollapse: "collapse",
    borderSpacing: 0,
    border: "none",
    tr: { border: "none !important", background: "none" },
    "td, th": { padding: 0, border: "none", width: "auto!important" },
    marginTop: 0,
    marginBottom: 0,
    "th:first-of-type, td:first-of-type": { paddingLeft: 0 },
    "th:last-of-type, td:last-of-type": { paddingRight: 0 },
    td: { paddingTop: 0, paddingBottom: 4, "&:not(:first-of-type)": { paddingLeft: 10, paddingRight: 0 } },
    tbody: { boxShadow: "none", border: "none" },
    code: codeCommon({ theme: theme2 }),
    "& code": { margin: 0, display: "inline-block", fontSize: theme2.typography.size.s1 }
  } };
});
var ArgJsDoc = function ArgJsDoc2(_ref136) {
  var tags2 = _ref136.tags;
  var params = (tags2.params || []).filter(function(x2) {
    return x2.description;
  });
  var hasDisplayableParams = params.length !== 0;
  var hasDisplayableReturns = tags2.returns != null && tags2.returns.description != null;
  if (!hasDisplayableParams && !hasDisplayableReturns) {
    return null;
  }
  return React__default__default.createElement(Table, null, React__default__default.createElement("tbody", null, hasDisplayableParams && params.map(function(x2) {
    return React__default__default.createElement("tr", { key: x2.name }, React__default__default.createElement("td", null, React__default__default.createElement("code", null, x2.name)), React__default__default.createElement("td", null, x2.description));
  }), hasDisplayableReturns && React__default__default.createElement("tr", { key: "returns" }, React__default__default.createElement("td", null, React__default__default.createElement("code", null, "Returns")), React__default__default.createElement("td", null, tags2.returns.description))));
};
function baseFindIndex$1(array2, predicate, fromIndex, fromRight) {
  var length2 = array2.length, index2 = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index2-- : ++index2 < length2) {
    if (predicate(array2[index2], index2, array2)) {
      return index2;
    }
  }
  return -1;
}
var _baseFindIndex = baseFindIndex$1;
function baseIsNaN$1(value2) {
  return value2 !== value2;
}
var _baseIsNaN = baseIsNaN$1;
function strictIndexOf$1(array2, value2, fromIndex) {
  var index2 = fromIndex - 1, length2 = array2.length;
  while (++index2 < length2) {
    if (array2[index2] === value2) {
      return index2;
    }
  }
  return -1;
}
var _strictIndexOf = strictIndexOf$1;
var baseFindIndex = _baseFindIndex, baseIsNaN = _baseIsNaN, strictIndexOf = _strictIndexOf;
function baseIndexOf$1(array2, value2, fromIndex) {
  return value2 === value2 ? strictIndexOf(array2, value2, fromIndex) : baseFindIndex(array2, baseIsNaN, fromIndex);
}
var _baseIndexOf = baseIndexOf$1;
var baseIndexOf = _baseIndexOf;
function arrayIncludes$1(array2, value2) {
  var length2 = array2 == null ? 0 : array2.length;
  return !!length2 && baseIndexOf(array2, value2, 0) > -1;
}
var _arrayIncludes = arrayIncludes$1;
function arrayIncludesWith$1(array2, value2, comparator) {
  var index2 = -1, length2 = array2 == null ? 0 : array2.length;
  while (++index2 < length2) {
    if (comparator(value2, array2[index2])) {
      return true;
    }
  }
  return false;
}
var _arrayIncludesWith = arrayIncludesWith$1;
function noop$1() {
}
var noop_1 = noop$1;
var Set$3 = _Set, noop = noop_1, setToArray$1 = _setToArray;
var INFINITY = 1 / 0;
var createSet$1 = !(Set$3 && 1 / setToArray$1(new Set$3([, -0]))[1] == INFINITY) ? noop : function(values) {
  return new Set$3(values);
};
var _createSet = createSet$1;
var SetCache = _SetCache, arrayIncludes = _arrayIncludes, arrayIncludesWith = _arrayIncludesWith, cacheHas = _cacheHas, createSet = _createSet, setToArray = _setToArray;
var LARGE_ARRAY_SIZE = 200;
function baseUniq$1(array2, iteratee, comparator) {
  var index2 = -1, includes = arrayIncludes, length2 = array2.length, isCommon = true, result2 = [], seen = result2;
  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  } else if (length2 >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array2);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache();
  } else {
    seen = iteratee ? [] : result2;
  }
  outer:
    while (++index2 < length2) {
      var value2 = array2[index2], computed = iteratee ? iteratee(value2) : value2;
      value2 = comparator || value2 !== 0 ? value2 : 0;
      if (isCommon && computed === computed) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed);
        }
        result2.push(value2);
      } else if (!includes(seen, computed, comparator)) {
        if (seen !== result2) {
          seen.push(computed);
        }
        result2.push(value2);
      }
    }
  return result2;
}
var _baseUniq = baseUniq$1;
var baseUniq = _baseUniq;
function uniq(array2) {
  return array2 && array2.length ? baseUniq(array2) : [];
}
var uniq_1 = uniq;
var ITEMS_BEFORE_EXPANSION = 8;
var Summary = styled.div(function(_ref137) {
  var isExpanded = _ref137.isExpanded;
  return { display: "flex", flexDirection: isExpanded ? "column" : "row", flexWrap: "wrap", alignItems: "flex-start", marginBottom: "-4px", minWidth: 100 };
});
var Text$2 = styled.span(codeCommon, function(_ref138) {
  var theme2 = _ref138.theme, _ref138$simple = _ref138.simple, simple = _ref138$simple === void 0 ? false : _ref138$simple;
  return Object.assign({ flex: "0 0 auto", fontFamily: theme2.typography.fonts.mono, fontSize: theme2.typography.size.s1, wordBreak: "break-word", whiteSpace: "normal", maxWidth: "100%", margin: 0, marginRight: "4px", marginBottom: "4px", paddingTop: "2px", paddingBottom: "2px", lineHeight: "13px" }, simple && { background: "transparent", border: "0 none", paddingLeft: 0 });
});
var ExpandButton = styled.button(function(_ref139) {
  var theme2 = _ref139.theme;
  return { fontFamily: theme2.typography.fonts.mono, color: theme2.color.secondary, marginBottom: "4px", background: "none", border: "none" };
});
var Expandable = styled.div(codeCommon, function(_ref140) {
  var theme2 = _ref140.theme;
  return { fontFamily: theme2.typography.fonts.mono, color: theme2.color.secondary, fontSize: theme2.typography.size.s1, margin: 0, whiteSpace: "nowrap", display: "flex", alignItems: "center" };
});
var Detail = styled.div(function(_ref141) {
  var theme2 = _ref141.theme, width = _ref141.width;
  return {
    width,
    minWidth: 200,
    maxWidth: 800,
    padding: 15,
    fontFamily: theme2.typography.fonts.mono,
    fontSize: theme2.typography.size.s1,
    boxSizing: "content-box",
    "& code": { padding: "0 !important" }
  };
});
var ArrowIcon = styled(Icons)({ height: 10, width: 10, minWidth: 10, marginLeft: 4 });
var EmptyArg = function EmptyArg2() {
  return React__default__default.createElement("span", null, "-");
};
var ArgText = function ArgText2(_ref142) {
  var text = _ref142.text, simple = _ref142.simple;
  return React__default__default.createElement(Text$2, { simple }, text);
};
var calculateDetailWidth = memoize$3(1e3)(function(detail) {
  var lines = detail.split(/\r?\n/);
  return "".concat(Math.max.apply(Math, _toConsumableArray$1(lines.map(function(x2) {
    return x2.length;
  }))), "ch");
});
var getSummaryItems = function getSummaryItems2(summary) {
  if (!summary)
    return [summary];
  var splittedItems = summary.split("|");
  var summaryItems = splittedItems.map(function(value2) {
    return value2.trim();
  });
  return uniq_1(summaryItems);
};
var renderSummaryItems = function renderSummaryItems2(summaryItems) {
  var isExpanded = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  var items = summaryItems;
  if (!isExpanded) {
    items = summaryItems.slice(0, ITEMS_BEFORE_EXPANSION);
  }
  return items.map(function(item) {
    return React__default__default.createElement(ArgText, { key: item, text: item === "" ? '""' : item });
  });
};
var ArgSummary = function ArgSummary2(_ref143) {
  var value2 = _ref143.value, initialExpandedArgs = _ref143.initialExpandedArgs;
  var summary = value2.summary, detail = value2.detail;
  var _useState13 = useState(false), _useState14 = _slicedToArray$4(_useState13, 2), isOpen = _useState14[0], setIsOpen = _useState14[1];
  var _useState15 = useState(initialExpandedArgs || false), _useState16 = _slicedToArray$4(_useState15, 2), isExpanded = _useState16[0], setIsExpanded = _useState16[1];
  if (summary === void 0 || summary === null)
    return null;
  var summaryAsString = typeof summary.toString === "function" ? summary.toString() : summary;
  if (detail == null) {
    var cannotBeSafelySplitted = /[(){}[\]<>]/.test(summaryAsString);
    if (cannotBeSafelySplitted) {
      return React__default__default.createElement(ArgText, { text: summaryAsString });
    }
    var summaryItems = getSummaryItems(summaryAsString);
    var itemsCount = summaryItems.length;
    var hasManyItems = itemsCount > ITEMS_BEFORE_EXPANSION;
    return hasManyItems ? React__default__default.createElement(Summary, { isExpanded }, renderSummaryItems(summaryItems, isExpanded), React__default__default.createElement(ExpandButton, { onClick: function onClick() {
      return setIsExpanded(!isExpanded);
    } }, isExpanded ? "Show less..." : "Show ".concat(itemsCount - ITEMS_BEFORE_EXPANSION, " more..."))) : React__default__default.createElement(Summary, null, renderSummaryItems(summaryItems));
  }
  return React__default__default.createElement(WithTooltipPure, { closeOnClick: true, trigger: "click", placement: "bottom", tooltipShown: isOpen, onVisibilityChange: function onVisibilityChange(isVisible) {
    setIsOpen(isVisible);
  }, tooltip: React__default__default.createElement(Detail, { width: calculateDetailWidth(detail) }, React__default__default.createElement(SyntaxHighlighter, { language: "jsx", format: false }, detail)) }, React__default__default.createElement(Expandable, { className: "sbdocs-expandable" }, React__default__default.createElement("span", null, summaryAsString), React__default__default.createElement(ArrowIcon, { icon: isOpen ? "arrowup" : "arrowdown" })));
};
var ArgValue = function ArgValue2(_ref144) {
  var value2 = _ref144.value, initialExpandedArgs = _ref144.initialExpandedArgs;
  return value2 == null ? React__default__default.createElement(EmptyArg, null) : React__default__default.createElement(ArgSummary, { value: value2, initialExpandedArgs });
};
var getControlId = function getControlId2(value2) {
  return "control-".concat(value2.replace(/\s+/g, "-"));
};
var getControlSetterButtonId = function getControlSetterButtonId2(value2) {
  return "set-".concat(value2.replace(/\s+/g, "-"));
};
var Label$3 = styled.label(function(_ref145) {
  var theme2 = _ref145.theme;
  return { lineHeight: "18px", alignItems: "center", marginBottom: 8, display: "inline-block", position: "relative", whiteSpace: "nowrap", background: "".concat(curriedOpacify$1(0.05, theme2.appBorderColor)), borderRadius: "3em", padding: 1, input: { appearance: "none", width: "100%", height: "100%", position: "absolute", left: 0, top: 0, margin: 0, padding: 0, border: "none", background: "transparent", cursor: "pointer", borderRadius: "3em", "&:focus": { outline: "none", boxShadow: "".concat(theme2.color.secondary, " 0 0 0 1px inset !important") } }, span: { textAlign: "center", fontSize: theme2.typography.size.s1, fontWeight: theme2.typography.weight.bold, lineHeight: "1", cursor: "pointer", display: "inline-block", padding: "7px 15px", transition: "all 100ms ease-out", userSelect: "none", borderRadius: "3em", color: curriedTransparentize$1(0.4, theme2.color.defaultText), background: "transparent", "&:hover": { boxShadow: "".concat(curriedOpacify$1(0.3, theme2.appBorderColor), " 0 0 0 1px inset") }, "&:active": { boxShadow: "".concat(curriedOpacify$1(0.05, theme2.appBorderColor), " 0 0 0 2px inset"), color: curriedOpacify$1(1, theme2.appBorderColor) }, "&:first-of-type": { paddingRight: 8 }, "&:last-of-type": { paddingLeft: 8 } }, "input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type": { background: theme2.background.app, boxShadow: "".concat(curriedOpacify$1(0.1, theme2.appBorderColor), " 0 0 2px"), color: theme2.color.defaultText, padding: "7px 15px" } };
});
var parse$2 = function parse$22(value2) {
  return value2 === "true";
};
var BooleanControl = function BooleanControl2(_ref146) {
  var name = _ref146.name, value2 = _ref146.value, _onChange = _ref146.onChange, onBlur = _ref146.onBlur, onFocus = _ref146.onFocus;
  var onSetFalse = useCallback(function() {
    return _onChange(false);
  }, [_onChange]);
  if (value2 === void 0) {
    return React__default__default.createElement(Form.Button, { id: getControlSetterButtonId(name), onClick: onSetFalse }, "Set boolean");
  }
  var parsedValue = typeof value2 === "string" ? parse$2(value2) : value2;
  return React__default__default.createElement(Label$3, { htmlFor: name, title: parsedValue ? "Change to false" : "Change to true" }, React__default__default.createElement("input", Object.assign({ id: getControlId(name), type: "checkbox", onChange: function onChange(e2) {
    return _onChange(e2.target.checked);
  }, checked: parsedValue }, { name, onBlur, onFocus })), React__default__default.createElement("span", null, "False"), React__default__default.createElement("span", null, "True"));
};
var parseDate = function parseDate2(value2) {
  var _value$split = value2.split("-"), _value$split2 = _slicedToArray$4(_value$split, 3), year = _value$split2[0], month = _value$split2[1], day = _value$split2[2];
  var result2 = new Date();
  result2.setFullYear(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10));
  return result2;
};
var parseTime = function parseTime2(value2) {
  var _value$split3 = value2.split(":"), _value$split4 = _slicedToArray$4(_value$split3, 2), hours = _value$split4[0], minutes = _value$split4[1];
  var result2 = new Date();
  result2.setHours(parseInt(hours, 10));
  result2.setMinutes(parseInt(minutes, 10));
  return result2;
};
var formatDate = function formatDate2(value2) {
  var date = new Date(value2);
  var year = "000".concat(date.getFullYear()).slice(-4);
  var month = "0".concat(date.getMonth() + 1).slice(-2);
  var day = "0".concat(date.getDate()).slice(-2);
  return "".concat(year, "-").concat(month, "-").concat(day);
};
var formatTime = function formatTime2(value2) {
  var date = new Date(value2);
  var hours = "0".concat(date.getHours()).slice(-2);
  var minutes = "0".concat(date.getMinutes()).slice(-2);
  return "".concat(hours, ":").concat(minutes);
};
var FlexSpaced = styled.div(function(_ref147) {
  var theme2 = _ref147.theme;
  return { flex: 1, display: "flex", input: { marginLeft: 10, flex: 1, height: 32, "&::-webkit-calendar-picker-indicator": { opacity: 0.5, height: 12, filter: theme2.base === "light" ? void 0 : "invert(1)" } }, "input:first-of-type": { marginLeft: 0, flexGrow: 4 }, "input:last-of-type": { flexGrow: 3 } };
});
var DateControl = function DateControl2(_ref148) {
  var name = _ref148.name, value2 = _ref148.value, onChange = _ref148.onChange, onFocus = _ref148.onFocus, onBlur = _ref148.onBlur;
  var _useState17 = useState(true), _useState18 = _slicedToArray$4(_useState17, 2), valid = _useState18[0], setValid = _useState18[1];
  var dateRef = useRef();
  var timeRef = useRef();
  useEffect(function() {
    if (valid !== false) {
      if (dateRef && dateRef.current) {
        dateRef.current.value = formatDate(value2);
      }
      if (timeRef && timeRef.current) {
        timeRef.current.value = formatTime(value2);
      }
    }
  }, [value2]);
  var onDateChange = function onDateChange2(e2) {
    var parsed = parseDate(e2.target.value);
    var result2 = new Date(value2);
    result2.setFullYear(parsed.getFullYear(), parsed.getMonth(), parsed.getDate());
    var time = result2.getTime();
    if (time)
      onChange(time);
    setValid(!!time);
  };
  var onTimeChange = function onTimeChange2(e2) {
    var parsed = parseTime(e2.target.value);
    var result2 = new Date(value2);
    result2.setHours(parsed.getHours());
    result2.setMinutes(parsed.getMinutes());
    var time = result2.getTime();
    if (time)
      onChange(time);
    setValid(!!time);
  };
  var controlId = getControlId(name);
  return React__default__default.createElement(FlexSpaced, null, React__default__default.createElement(Form.Input, Object.assign({
    type: "date",
    max: "9999-12-31",
    ref: dateRef,
    id: "".concat(controlId, "-date"),
    name: "".concat(controlId, "-date"),
    onChange: onDateChange
  }, { onFocus, onBlur })), React__default__default.createElement(Form.Input, Object.assign({ type: "time", id: "".concat(controlId, "-time"), name: "".concat(controlId, "-time"), ref: timeRef, onChange: onTimeChange }, { onFocus, onBlur })), !valid ? React__default__default.createElement("div", null, "invalid") : null);
};
var Wrapper$5 = styled.label({ display: "flex" });
var parse$1 = function parse$12(value2) {
  var result2 = parseFloat(value2);
  return Number.isNaN(result2) ? void 0 : result2;
};
var NumberControl = function NumberControl2(_ref149) {
  var name = _ref149.name, value2 = _ref149.value, onChange = _ref149.onChange, min = _ref149.min, max = _ref149.max, step = _ref149.step, onBlur = _ref149.onBlur, onFocus = _ref149.onFocus;
  var _useState19 = useState(typeof value2 === "number" ? value2 : ""), _useState20 = _slicedToArray$4(_useState19, 2), inputValue = _useState20[0], setInputValue = _useState20[1];
  var _useState21 = useState(false), _useState22 = _slicedToArray$4(_useState21, 2), forceVisible = _useState22[0], setForceVisible = _useState22[1];
  var _useState23 = useState(null), _useState24 = _slicedToArray$4(_useState23, 2), parseError = _useState24[0], setParseError = _useState24[1];
  var handleChange = useCallback(function(event) {
    setInputValue(event.target.value);
    var result2 = parseFloat(event.target.value);
    if (Number.isNaN(result2)) {
      setParseError(new Error("'".concat(event.target.value, "' is not a number")));
    } else {
      onChange(result2);
      setParseError(null);
    }
  }, [onChange, setParseError]);
  var onForceVisible = useCallback(function() {
    setInputValue("0");
    onChange(0);
    setForceVisible(true);
  }, [setForceVisible]);
  var htmlElRef = useRef(null);
  useEffect(function() {
    if (forceVisible && htmlElRef.current)
      htmlElRef.current.select();
  }, [forceVisible]);
  useEffect(function() {
    var newInputValue = typeof value2 === "number" ? value2 : "";
    if (inputValue !== newInputValue) {
      setInputValue(value2);
    }
  }, [value2]);
  if (!forceVisible && value2 === void 0) {
    return React__default__default.createElement(Form.Button, { id: getControlSetterButtonId(name), onClick: onForceVisible }, "Set number");
  }
  return React__default__default.createElement(Wrapper$5, null, React__default__default.createElement(Form.Input, Object.assign({ ref: htmlElRef, id: getControlId(name), type: "number", onChange: handleChange, size: "flex", placeholder: "Edit number...", value: inputValue, valid: parseError ? "error" : null, autoFocus: forceVisible }, { name, min, max, step, onFocus, onBlur })));
};
function dedent(templ) {
  var values = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    values[_i - 1] = arguments[_i];
  }
  var strings = Array.from(typeof templ === "string" ? [templ] : templ);
  strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var indentLengths = strings.reduce(function(arr, str2) {
    var matches = str2.match(/\n([\t ]+|(?!\s).)/g);
    if (matches) {
      return arr.concat(matches.map(function(match2) {
        var _a, _b;
        return (_b = (_a = match2.match(/[\t ]/g)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
      }));
    }
    return arr;
  }, []);
  if (indentLengths.length) {
    var pattern_1 = new RegExp("\n[	 ]{" + Math.min.apply(Math, indentLengths) + "}", "g");
    strings = strings.map(function(str2) {
      return str2.replace(pattern_1, "\n");
    });
  }
  strings[0] = strings[0].replace(/^\r?\n/, "");
  var string2 = strings[0];
  values.forEach(function(value2, i2) {
    var endentations = string2.match(/(?:^|\n)( *)$/);
    var endentation = endentations ? endentations[1] : "";
    var indentedValue = value2;
    if (typeof value2 === "string" && value2.includes("\n")) {
      indentedValue = String(value2).split("\n").map(function(str2, i3) {
        return i3 === 0 ? str2 : "" + endentation + str2;
      }).join("\n");
    }
    string2 += indentedValue + strings[i2 + 1];
  });
  return string2;
}
var selectedKey = function selectedKey2(value2, options) {
  var entry = options && Object.entries(options).find(function(_ref150) {
    var _ref151 = _slicedToArray$4(_ref150, 2);
    _ref151[0];
    var val = _ref151[1];
    return val === value2;
  });
  return entry ? entry[0] : void 0;
};
var selectedKeys = function selectedKeys2(value2, options) {
  return value2 && options ? Object.entries(options).filter(function(entry) {
    return value2.includes(entry[1]);
  }).map(function(entry) {
    return entry[0];
  }) : [];
};
var selectedValues = function selectedValues2(keys2, options) {
  return keys2 && options && keys2.map(function(key) {
    return options[key];
  });
};
var Wrapper$4 = styled.div(function(_ref152) {
  var isInline = _ref152.isInline;
  return isInline ? { display: "flex", flexWrap: "wrap", alignItems: "flex-start", label: { display: "inline-flex", marginRight: 15 } } : { label: { display: "flex" } };
});
var Text$1 = styled.span({});
var Label$2 = styled.label({ lineHeight: "20px", alignItems: "center", marginBottom: 8, "&:last-child": { marginBottom: 0 }, input: { margin: 0, marginRight: 6 } });
var CheckboxControl = function CheckboxControl2(_ref153) {
  var name = _ref153.name, options = _ref153.options, value2 = _ref153.value, onChange = _ref153.onChange, isInline = _ref153.isInline;
  if (!options) {
    logger.warn("Checkbox with no options: ".concat(name));
    return React__default__default.createElement(React__default__default.Fragment, null, "-");
  }
  var initial = selectedKeys(value2, options);
  var _useState25 = useState(initial), _useState26 = _slicedToArray$4(_useState25, 2), selected = _useState26[0], setSelected = _useState26[1];
  var handleChange = function handleChange2(e2) {
    var option = e2.target.value;
    var updated = _toConsumableArray$1(selected);
    if (updated === null || updated === void 0 ? void 0 : updated.includes(option)) {
      updated.splice(updated.indexOf(option), 1);
    } else {
      updated.push(option);
    }
    onChange(selectedValues(updated, options));
    setSelected(updated);
  };
  var controlId = getControlId(name);
  return React__default__default.createElement(Wrapper$4, { isInline }, Object.keys(options).map(function(key, index2) {
    var id = "".concat(controlId, "-").concat(index2);
    return React__default__default.createElement(Label$2, { key: id, htmlFor: id }, React__default__default.createElement("input", { type: "checkbox", id, name: id, value: key, onChange: handleChange, checked: selected === null || selected === void 0 ? void 0 : selected.includes(key) }), React__default__default.createElement(Text$1, null, key));
  }));
};
var Wrapper$3 = styled.div(function(_ref154) {
  var isInline = _ref154.isInline;
  return isInline ? { display: "flex", flexWrap: "wrap", alignItems: "flex-start", label: { display: "inline-flex", marginRight: 15 } } : { label: { display: "flex" } };
});
styled.fieldset({ border: 0, padding: 0, margin: 0 });
var Text = styled.span({});
var Label$1 = styled.label({ lineHeight: "20px", alignItems: "center", marginBottom: 8, "&:last-child": { marginBottom: 0 }, input: { margin: 0, marginRight: 6 } });
var RadioControl = function RadioControl2(_ref155) {
  var name = _ref155.name, options = _ref155.options, value2 = _ref155.value, _onChange2 = _ref155.onChange, isInline = _ref155.isInline;
  if (!options) {
    logger.warn("Radio with no options: ".concat(name));
    return React__default__default.createElement(React__default__default.Fragment, null, "-");
  }
  var selection = selectedKey(value2, options);
  var controlId = getControlId(name);
  return React__default__default.createElement(Wrapper$3, { isInline }, Object.keys(options).map(function(key, index2) {
    var id = "".concat(controlId, "-").concat(index2);
    return React__default__default.createElement(Label$1, { key: id, htmlFor: id }, React__default__default.createElement("input", { type: "radio", id, name: id, value: key, onChange: function onChange(e2) {
      return _onChange2(options[e2.currentTarget.value]);
    }, checked: key === selection }), React__default__default.createElement(Text, null, key));
  }));
};
var styleResets = {
  appearance: "none",
  border: "0 none",
  boxSizing: "inherit",
  display: " block",
  margin: " 0",
  background: "transparent",
  padding: 0,
  fontSize: "inherit",
  position: "relative"
};
var OptionsSelect = styled.select(function(_ref156) {
  var theme2 = _ref156.theme;
  return Object.assign(Object.assign({}, styleResets), { boxSizing: "border-box", position: "relative", padding: "6px 10px", width: "100%", color: theme2.input.color || "inherit", background: theme2.input.background, borderRadius: theme2.input.borderRadius, boxShadow: "".concat(theme2.input.border, " 0 0 0 1px inset"), fontSize: theme2.typography.size.s2 - 1, lineHeight: "20px", "&:focus": { boxShadow: "".concat(theme2.color.secondary, " 0 0 0 1px inset"), outline: "none" }, "&[disabled]": { cursor: "not-allowed", opacity: 0.5 }, "::placeholder": { color: theme2.color.mediumdark }, "&[multiple]": { overflow: "auto", padding: 0, option: { display: "block", padding: "6px 10px", marginLeft: 1, marginRight: 1 } } });
});
var SelectWrapper = styled.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral$4(["\n  display: inline-block;\n  line-height: normal;\n  overflow: hidden;\n  position: relative;\n  vertical-align: top;\n  width: 100%;\n\n  svg {\n    position: absolute;\n    z-index: 1;\n    pointer-events: none;\n    height: 12px;\n    margin-top: -6px;\n    right: 12px;\n    top: 50%;\n\n    path {\n      fill: currentColor;\n    }\n  }\n"])));
var NO_SELECTION = "Choose option...";
var SingleSelect = function SingleSelect2(_ref157) {
  var name = _ref157.name, value2 = _ref157.value, options = _ref157.options, onChange = _ref157.onChange;
  var handleChange = function handleChange2(e2) {
    onChange(options[e2.currentTarget.value]);
  };
  var selection = selectedKey(value2, options) || NO_SELECTION;
  var controlId = getControlId(name);
  return React__default__default.createElement(SelectWrapper, null, React__default__default.createElement(Icons, { icon: "arrowdown" }), React__default__default.createElement(OptionsSelect, { id: controlId, value: selection, onChange: handleChange }, React__default__default.createElement("option", { key: "no-selection", disabled: true }, NO_SELECTION), Object.keys(options).map(function(key) {
    return React__default__default.createElement("option", { key }, key);
  })));
};
var MultiSelect = function MultiSelect2(_ref158) {
  var name = _ref158.name, value2 = _ref158.value, options = _ref158.options, onChange = _ref158.onChange;
  var handleChange = function handleChange2(e2) {
    var selection2 = Array.from(e2.currentTarget.options).filter(function(option) {
      return option.selected;
    }).map(function(option) {
      return option.value;
    });
    onChange(selectedValues(selection2, options));
  };
  var selection = selectedKeys(value2, options);
  var controlId = getControlId(name);
  return React__default__default.createElement(SelectWrapper, null, React__default__default.createElement(OptionsSelect, { id: controlId, multiple: true, value: selection, onChange: handleChange }, Object.keys(options).map(function(key) {
    return React__default__default.createElement("option", { key }, key);
  })));
};
var SelectControl = function SelectControl2(props) {
  var name = props.name, options = props.options;
  if (!options) {
    logger.warn("Select with no options: ".concat(name));
    return React__default__default.createElement(React__default__default.Fragment, null, "-");
  }
  return props.isMulti ? React__default__default.createElement(MultiSelect, Object.assign({}, props)) : React__default__default.createElement(SingleSelect, Object.assign({}, props));
};
var normalizeOptions = function normalizeOptions2(options, labels) {
  if (Array.isArray(options)) {
    return options.reduce(function(acc, item) {
      acc[(labels === null || labels === void 0 ? void 0 : labels[item]) || String(item)] = item;
      return acc;
    }, {});
  }
  return options;
};
var Controls$1 = { check: CheckboxControl, "inline-check": CheckboxControl, radio: RadioControl, "inline-radio": RadioControl, select: SelectControl, "multi-select": SelectControl };
var OptionsControl = function OptionsControl2(props) {
  var _props$type = props.type, type = _props$type === void 0 ? "select" : _props$type, options = props.options, labels = props.labels, argType = props.argType;
  var normalized = Object.assign(Object.assign({}, props), { options: normalizeOptions(options || argType.options, labels), isInline: type.includes("inline"), isMulti: type.includes("multi") });
  if (options) {
    once.warn(dedent(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral$4(["\n      'control.options' is deprecated and will be removed in Storybook 7.0. Define 'options' directly on the argType instead, and use 'control.labels' for custom labels.\n\n      More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-controloptions\n    "]))));
  }
  var Control = Controls$1[type];
  if (Control) {
    return React__default__default.createElement(Control, Object.assign({}, normalized));
  }
  throw new Error("Unknown options type: ".concat(type));
};
function arrayEach$1(array2, iteratee) {
  var index2 = -1, length2 = array2 == null ? 0 : array2.length;
  while (++index2 < length2) {
    if (iteratee(array2[index2], index2, array2) === false) {
      break;
    }
  }
  return array2;
}
var _arrayEach = arrayEach$1;
var assignValue$1 = _assignValue, baseAssignValue = _baseAssignValue;
function copyObject$4(source, props, object2, customizer) {
  var isNew = !object2;
  object2 || (object2 = {});
  var index2 = -1, length2 = props.length;
  while (++index2 < length2) {
    var key = props[index2];
    var newValue = customizer ? customizer(object2[key], source[key], key, object2, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object2, key, newValue);
    } else {
      assignValue$1(object2, key, newValue);
    }
  }
  return object2;
}
var _copyObject = copyObject$4;
var copyObject$3 = _copyObject, keys$1 = keys_1;
function baseAssign$1(object2, source) {
  return object2 && copyObject$3(source, keys$1(source), object2);
}
var _baseAssign = baseAssign$1;
var copyObject$2 = _copyObject, keysIn$1 = keysIn_1;
function baseAssignIn$1(object2, source) {
  return object2 && copyObject$2(source, keysIn$1(source), object2);
}
var _baseAssignIn = baseAssignIn$1;
var _cloneBuffer = { exports: {} };
(function(module, exports) {
  var root2 = _root;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer = moduleExports ? root2.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
  function cloneBuffer2(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length2 = buffer.length, result2 = allocUnsafe ? allocUnsafe(length2) : new buffer.constructor(length2);
    buffer.copy(result2);
    return result2;
  }
  module.exports = cloneBuffer2;
})(_cloneBuffer, _cloneBuffer.exports);
function copyArray$1(source, array2) {
  var index2 = -1, length2 = source.length;
  array2 || (array2 = Array(length2));
  while (++index2 < length2) {
    array2[index2] = source[index2];
  }
  return array2;
}
var _copyArray = copyArray$1;
var copyObject$1 = _copyObject, getSymbols = _getSymbols;
function copySymbols$1(source, object2) {
  return copyObject$1(source, getSymbols(source), object2);
}
var _copySymbols = copySymbols$1;
var copyObject = _copyObject, getSymbolsIn = _getSymbolsIn;
function copySymbolsIn$1(source, object2) {
  return copyObject(source, getSymbolsIn(source), object2);
}
var _copySymbolsIn = copySymbolsIn$1;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function initCloneArray$1(array2) {
  var length2 = array2.length, result2 = new array2.constructor(length2);
  if (length2 && typeof array2[0] == "string" && hasOwnProperty.call(array2, "index")) {
    result2.index = array2.index;
    result2.input = array2.input;
  }
  return result2;
}
var _initCloneArray = initCloneArray$1;
var Uint8Array = _Uint8Array;
function cloneArrayBuffer$3(arrayBuffer) {
  var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result2).set(new Uint8Array(arrayBuffer));
  return result2;
}
var _cloneArrayBuffer = cloneArrayBuffer$3;
var cloneArrayBuffer$2 = _cloneArrayBuffer;
function cloneDataView$1(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$2(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var _cloneDataView = cloneDataView$1;
var reFlags = /\w*$/;
function cloneRegExp$1(regexp) {
  var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result2.lastIndex = regexp.lastIndex;
  return result2;
}
var _cloneRegExp = cloneRegExp$1;
var Symbol$1 = _Symbol;
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function cloneSymbol$1(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
var _cloneSymbol = cloneSymbol$1;
var cloneArrayBuffer$1 = _cloneArrayBuffer;
function cloneTypedArray$1(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$1(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray = cloneTypedArray$1;
var cloneArrayBuffer = _cloneArrayBuffer, cloneDataView = _cloneDataView, cloneRegExp = _cloneRegExp, cloneSymbol = _cloneSymbol, cloneTypedArray = _cloneTypedArray;
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag$1(object2, tag, isDeep) {
  var Ctor = object2.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object2);
    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object2);
    case dataViewTag$1:
      return cloneDataView(object2, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object2, isDeep);
    case mapTag$2:
      return new Ctor();
    case numberTag$1:
    case stringTag$1:
      return new Ctor(object2);
    case regexpTag$1:
      return cloneRegExp(object2);
    case setTag$2:
      return new Ctor();
    case symbolTag$1:
      return cloneSymbol(object2);
  }
}
var _initCloneByTag = initCloneByTag$1;
var isObject$1 = isObject_1;
var objectCreate = Object.create;
var baseCreate$1 = function() {
  function object2() {
  }
  return function(proto) {
    if (!isObject$1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object2.prototype = proto;
    var result2 = new object2();
    object2.prototype = void 0;
    return result2;
  };
}();
var _baseCreate = baseCreate$1;
var baseCreate = _baseCreate, getPrototype = _getPrototype, isPrototype = _isPrototype;
function initCloneObject$1(object2) {
  return typeof object2.constructor == "function" && !isPrototype(object2) ? baseCreate(getPrototype(object2)) : {};
}
var _initCloneObject = initCloneObject$1;
var getTag$2 = _getTag, isObjectLike$1 = isObjectLike_1;
var mapTag$1 = "[object Map]";
function baseIsMap$1(value2) {
  return isObjectLike$1(value2) && getTag$2(value2) == mapTag$1;
}
var _baseIsMap = baseIsMap$1;
var baseIsMap = _baseIsMap, baseUnary$1 = _baseUnary, nodeUtil$1 = _nodeUtil.exports;
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap;
var isMap_1 = isMap$1;
var getTag$1 = _getTag, isObjectLike = isObjectLike_1;
var setTag$1 = "[object Set]";
function baseIsSet$1(value2) {
  return isObjectLike(value2) && getTag$1(value2) == setTag$1;
}
var _baseIsSet = baseIsSet$1;
var baseIsSet = _baseIsSet, baseUnary = _baseUnary, nodeUtil = _nodeUtil.exports;
var nodeIsSet = nodeUtil && nodeUtil.isSet;
var isSet$1 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet_1 = isSet$1;
var Stack = _Stack, arrayEach = _arrayEach, assignValue = _assignValue, baseAssign = _baseAssign, baseAssignIn = _baseAssignIn, cloneBuffer = _cloneBuffer.exports, copyArray = _copyArray, copySymbols = _copySymbols, copySymbolsIn = _copySymbolsIn, getAllKeys = _getAllKeys, getAllKeysIn = _getAllKeysIn, getTag = _getTag, initCloneArray = _initCloneArray, initCloneByTag = _initCloneByTag, initCloneObject = _initCloneObject, isArray = isArray_1, isBuffer = isBuffer$3.exports, isMap = isMap_1, isObject = isObject_1, isSet = isSet_1, keys = keys_1, keysIn = keysIn_1;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone$1(value2, bitmask, customizer, key, object2, stack) {
  var result2, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result2 = object2 ? customizer(value2, key, object2, stack) : customizer(value2);
  }
  if (result2 !== void 0) {
    return result2;
  }
  if (!isObject(value2)) {
    return value2;
  }
  var isArr = isArray(value2);
  if (isArr) {
    result2 = initCloneArray(value2);
    if (!isDeep) {
      return copyArray(value2, result2);
    }
  } else {
    var tag = getTag(value2), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer(value2)) {
      return cloneBuffer(value2, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object2) {
      result2 = isFlat || isFunc ? {} : initCloneObject(value2);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value2, baseAssignIn(result2, value2)) : copySymbols(value2, baseAssign(result2, value2));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object2 ? value2 : {};
      }
      result2 = initCloneByTag(value2, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value2);
  if (stacked) {
    return stacked;
  }
  stack.set(value2, result2);
  if (isSet(value2)) {
    value2.forEach(function(subValue) {
      result2.add(baseClone$1(subValue, bitmask, customizer, subValue, value2, stack));
    });
  } else if (isMap(value2)) {
    value2.forEach(function(subValue, key2) {
      result2.set(key2, baseClone$1(subValue, bitmask, customizer, key2, value2, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? void 0 : keysFunc(value2);
  arrayEach(props || value2, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value2[key2];
    }
    assignValue(result2, key2, baseClone$1(subValue, bitmask, customizer, key2, value2, stack));
  });
  return result2;
}
var _baseClone = baseClone$1;
var baseClone = _baseClone;
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value2) {
  return baseClone(value2, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
var cloneDeep_1 = cloneDeep;
var VALUE = "value";
var KEY = "key";
var ERROR = "Error";
var OBJECT = "Object";
var ARRAY = "Array";
var STRING = "String";
var NUMBER = "Number";
var BOOLEAN = "Boolean";
var DATE = "Date";
var NULL = "Null";
var UNDEFINED = "Undefined";
var FUNCTION = "Function";
var SYMBOL = "Symbol";
var ADD_DELTA_TYPE = "ADD_DELTA_TYPE";
var REMOVE_DELTA_TYPE = "REMOVE_DELTA_TYPE";
var UPDATE_DELTA_TYPE = "UPDATE_DELTA_TYPE";
function getObjectType(obj) {
  if (obj !== null && _typeof(obj) === "object" && !Array.isArray(obj) && typeof obj[Symbol.iterator] === "function") {
    return "Iterable";
  }
  return Object.prototype.toString.call(obj).slice(8, -1);
}
function isComponentWillChange(oldValue, newValue) {
  var oldType = getObjectType(oldValue);
  var newType = getObjectType(newValue);
  return (oldType === "Function" || newType === "Function") && newType !== oldType;
}
var JsonAddValue = /* @__PURE__ */ function(_Component4) {
  _inherits(JsonAddValue2, _Component4);
  var _super4 = _createSuper(JsonAddValue2);
  function JsonAddValue2(props) {
    var _this5;
    _classCallCheck(this, JsonAddValue2);
    _this5 = _super4.call(this, props);
    _this5.state = { inputRefKey: null, inputRefValue: null };
    _this5.refInputValue = _this5.refInputValue.bind(_assertThisInitialized2(_this5));
    _this5.refInputKey = _this5.refInputKey.bind(_assertThisInitialized2(_this5));
    _this5.onKeydown = _this5.onKeydown.bind(_assertThisInitialized2(_this5));
    _this5.onSubmit = _this5.onSubmit.bind(_assertThisInitialized2(_this5));
    return _this5;
  }
  _createClass(JsonAddValue2, [{ key: "componentDidMount", value: function componentDidMount() {
    var _this$state = this.state, inputRefKey = _this$state.inputRefKey, inputRefValue = _this$state.inputRefValue;
    var onlyValue = this.props.onlyValue;
    if (inputRefKey && typeof inputRefKey.focus === "function") {
      inputRefKey.focus();
    }
    if (onlyValue && inputRefValue && typeof inputRefValue.focus === "function") {
      inputRefValue.focus();
    }
    document.addEventListener("keydown", this.onKeydown);
  } }, { key: "componentWillUnmount", value: function componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  } }, { key: "onKeydown", value: function onKeydown(event) {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.repeat)
      return;
    if (event.code === "Enter" || event.key === "Enter") {
      event.preventDefault();
      this.onSubmit();
    }
    if (event.code === "Escape" || event.key === "Escape") {
      event.preventDefault();
      this.props.handleCancel();
    }
  } }, { key: "onSubmit", value: function onSubmit() {
    var _this$props3 = this.props, handleAdd = _this$props3.handleAdd, onlyValue = _this$props3.onlyValue, onSubmitValueParser2 = _this$props3.onSubmitValueParser, keyPath = _this$props3.keyPath, deep = _this$props3.deep;
    var _this$state2 = this.state, inputRefKey = _this$state2.inputRefKey, inputRefValue = _this$state2.inputRefValue;
    var result2 = {};
    if (!onlyValue) {
      if (!inputRefKey.value) {
        return;
      }
      result2.key = inputRefKey.value;
    }
    result2.newValue = onSubmitValueParser2(false, keyPath, deep, result2.key, inputRefValue.value);
    handleAdd(result2);
  } }, { key: "refInputKey", value: function refInputKey(node2) {
    this.state.inputRefKey = node2;
  } }, { key: "refInputValue", value: function refInputValue(node2) {
    this.state.inputRefValue = node2;
  } }, { key: "render", value: function render() {
    var _this$props4 = this.props, handleCancel = _this$props4.handleCancel, onlyValue = _this$props4.onlyValue, addButtonElement = _this$props4.addButtonElement, cancelButtonElement = _this$props4.cancelButtonElement, inputElementGenerator = _this$props4.inputElementGenerator, keyPath = _this$props4.keyPath, deep = _this$props4.deep;
    var addButtonElementLayout = cloneElement(addButtonElement, { onClick: this.onSubmit });
    var cancelButtonElementLayout = cloneElement(cancelButtonElement, { onClick: handleCancel });
    var inputElementValue = inputElementGenerator(VALUE, keyPath, deep);
    var inputElementValueLayout = cloneElement(inputElementValue, { placeholder: "Value", ref: this.refInputValue });
    var inputElementKeyLayout = null;
    if (!onlyValue) {
      var inputElementKey = inputElementGenerator(KEY, keyPath, deep);
      inputElementKeyLayout = cloneElement(inputElementKey, { placeholder: "Key", ref: this.refInputKey });
    }
    return React__default__default.createElement("span", { className: "rejt-add-value-node" }, inputElementKeyLayout, inputElementValueLayout, cancelButtonElementLayout, addButtonElementLayout);
  } }]);
  return JsonAddValue2;
}(Component);
JsonAddValue.defaultProps = { onlyValue: false, addButtonElement: React__default__default.createElement("button", null, "+"), cancelButtonElement: React__default__default.createElement("button", null, "c") };
var JsonArray = /* @__PURE__ */ function(_Component5) {
  _inherits(JsonArray2, _Component5);
  var _super5 = _createSuper(JsonArray2);
  function JsonArray2(props) {
    var _this6;
    _classCallCheck(this, JsonArray2);
    _this6 = _super5.call(this, props);
    var keyPath = [].concat(_toConsumableArray$1(props.keyPath), [props.name]);
    _this6.state = { data: props.data, name: props.name, keyPath, deep: props.deep, nextDeep: props.deep + 1, collapsed: props.isCollapsed(keyPath, props.deep, props.data), addFormVisible: false };
    _this6.handleCollapseMode = _this6.handleCollapseMode.bind(_assertThisInitialized2(_this6));
    _this6.handleRemoveItem = _this6.handleRemoveItem.bind(_assertThisInitialized2(_this6));
    _this6.handleAddMode = _this6.handleAddMode.bind(_assertThisInitialized2(_this6));
    _this6.handleAddValueAdd = _this6.handleAddValueAdd.bind(_assertThisInitialized2(_this6));
    _this6.handleAddValueCancel = _this6.handleAddValueCancel.bind(_assertThisInitialized2(_this6));
    _this6.handleEditValue = _this6.handleEditValue.bind(_assertThisInitialized2(_this6));
    _this6.onChildUpdate = _this6.onChildUpdate.bind(_assertThisInitialized2(_this6));
    _this6.renderCollapsed = _this6.renderCollapsed.bind(_assertThisInitialized2(_this6));
    _this6.renderNotCollapsed = _this6.renderNotCollapsed.bind(_assertThisInitialized2(_this6));
    return _this6;
  }
  _createClass(JsonArray2, [{ key: "onChildUpdate", value: function onChildUpdate(childKey, childData) {
    var _this$state3 = this.state, data = _this$state3.data, keyPath = _this$state3.keyPath;
    data[childKey] = childData;
    this.setState({ data });
    var onUpdate = this.props.onUpdate;
    var size = keyPath.length;
    onUpdate(keyPath[size - 1], data);
  } }, { key: "handleAddMode", value: function handleAddMode() {
    this.setState({ addFormVisible: true });
  } }, { key: "handleCollapseMode", value: function handleCollapseMode() {
    this.setState(function(state) {
      return { collapsed: !state.collapsed };
    });
  } }, { key: "handleRemoveItem", value: function handleRemoveItem(index2) {
    var _this7 = this;
    return function() {
      var _this7$props = _this7.props, beforeRemoveAction2 = _this7$props.beforeRemoveAction, logger2 = _this7$props.logger;
      var _this7$state = _this7.state, data = _this7$state.data, keyPath = _this7$state.keyPath, deep = _this7$state.nextDeep;
      var oldValue = data[index2];
      beforeRemoveAction2(index2, keyPath, deep, oldValue).then(function() {
        var deltaUpdateResult = { keyPath, deep, key: index2, oldValue, type: REMOVE_DELTA_TYPE };
        data.splice(index2, 1);
        _this7.setState({ data });
        var _this7$props2 = _this7.props, onUpdate = _this7$props2.onUpdate, onDeltaUpdate2 = _this7$props2.onDeltaUpdate;
        onUpdate(keyPath[keyPath.length - 1], data);
        onDeltaUpdate2(deltaUpdateResult);
      }).catch(logger2.error);
    };
  } }, { key: "handleAddValueAdd", value: function handleAddValueAdd(_ref159) {
    var _this8 = this;
    var newValue = _ref159.newValue;
    var _this$state4 = this.state, data = _this$state4.data, keyPath = _this$state4.keyPath, deep = _this$state4.nextDeep;
    var _this$props5 = this.props, beforeAddAction2 = _this$props5.beforeAddAction, logger2 = _this$props5.logger;
    beforeAddAction2(data.length, keyPath, deep, newValue).then(function() {
      var newData = [].concat(_toConsumableArray$1(data), [newValue]);
      _this8.setState({ data: newData });
      _this8.handleAddValueCancel();
      var _this8$props = _this8.props, onUpdate = _this8$props.onUpdate, onDeltaUpdate2 = _this8$props.onDeltaUpdate;
      onUpdate(keyPath[keyPath.length - 1], newData);
      onDeltaUpdate2({ type: ADD_DELTA_TYPE, keyPath, deep, key: newData.length - 1, newValue });
    }).catch(logger2.error);
  } }, { key: "handleAddValueCancel", value: function handleAddValueCancel() {
    this.setState({ addFormVisible: false });
  } }, { key: "handleEditValue", value: function handleEditValue(_ref160) {
    var _this9 = this;
    var key = _ref160.key, value2 = _ref160.value;
    return new Promise(function(resolve, reject) {
      var beforeUpdateAction2 = _this9.props.beforeUpdateAction;
      var _this9$state = _this9.state, data = _this9$state.data, keyPath = _this9$state.keyPath, deep = _this9$state.nextDeep;
      var oldValue = data[key];
      beforeUpdateAction2(key, keyPath, deep, oldValue, value2).then(function() {
        data[key] = value2;
        _this9.setState({ data });
        var _this9$props = _this9.props, onUpdate = _this9$props.onUpdate, onDeltaUpdate2 = _this9$props.onDeltaUpdate;
        onUpdate(keyPath[keyPath.length - 1], data);
        onDeltaUpdate2({ type: UPDATE_DELTA_TYPE, keyPath, deep, key, newValue: value2, oldValue });
        resolve(void 0);
      }).catch(reject);
    });
  } }, { key: "renderCollapsed", value: function renderCollapsed() {
    var _this$state5 = this.state, name = _this$state5.name, data = _this$state5.data, keyPath = _this$state5.keyPath, deep = _this$state5.deep;
    var _this$props6 = this.props, handleRemove = _this$props6.handleRemove, readOnly2 = _this$props6.readOnly, getStyle2 = _this$props6.getStyle, dataType = _this$props6.dataType, minusMenuElement = _this$props6.minusMenuElement;
    var _getStyle = getStyle2(name, data, keyPath, deep, dataType), minus = _getStyle.minus, collapsed = _getStyle.collapsed;
    var isReadOnly = readOnly2(name, data, keyPath, deep, dataType);
    var removeItemButton = cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: minus });
    return React__default__default.createElement("span", { className: "rejt-collapsed" }, React__default__default.createElement("span", { className: "rejt-collapsed-text", style: collapsed, onClick: this.handleCollapseMode }, "[...] ", data.length, " ", data.length === 1 ? "item" : "items"), !isReadOnly && removeItemButton);
  } }, { key: "renderNotCollapsed", value: function renderNotCollapsed() {
    var _this10 = this;
    var _this$state6 = this.state, name = _this$state6.name, data = _this$state6.data, keyPath = _this$state6.keyPath, deep = _this$state6.deep, addFormVisible = _this$state6.addFormVisible, nextDeep = _this$state6.nextDeep;
    var _this$props7 = this.props, isCollapsed2 = _this$props7.isCollapsed, handleRemove = _this$props7.handleRemove, onDeltaUpdate2 = _this$props7.onDeltaUpdate, readOnly2 = _this$props7.readOnly, getStyle2 = _this$props7.getStyle, dataType = _this$props7.dataType, addButtonElement = _this$props7.addButtonElement, cancelButtonElement = _this$props7.cancelButtonElement, editButtonElement = _this$props7.editButtonElement, inputElementGenerator = _this$props7.inputElementGenerator, textareaElementGenerator = _this$props7.textareaElementGenerator, minusMenuElement = _this$props7.minusMenuElement, plusMenuElement = _this$props7.plusMenuElement, beforeRemoveAction2 = _this$props7.beforeRemoveAction, beforeAddAction2 = _this$props7.beforeAddAction, beforeUpdateAction2 = _this$props7.beforeUpdateAction, logger2 = _this$props7.logger, onSubmitValueParser2 = _this$props7.onSubmitValueParser;
    var _getStyle2 = getStyle2(name, data, keyPath, deep, dataType), minus = _getStyle2.minus, plus = _getStyle2.plus, delimiter2 = _getStyle2.delimiter, ul2 = _getStyle2.ul, addForm = _getStyle2.addForm;
    var isReadOnly = readOnly2(name, data, keyPath, deep, dataType);
    var addItemButton = cloneElement(plusMenuElement, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: plus });
    var removeItemButton = cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: minus });
    var onlyValue = true;
    var startObject = "[";
    var endObject = "]";
    return React__default__default.createElement("span", { className: "rejt-not-collapsed" }, React__default__default.createElement("span", { className: "rejt-not-collapsed-delimiter", style: delimiter2 }, startObject), !addFormVisible && addItemButton, React__default__default.createElement("ul", { className: "rejt-not-collapsed-list", style: ul2 }, data.map(function(item, index2) {
      return React__default__default.createElement(JsonNode, { key: index2, name: "".concat(index2), data: item, keyPath, deep: nextDeep, isCollapsed: isCollapsed2, handleRemove: _this10.handleRemoveItem(index2), handleUpdateValue: _this10.handleEditValue, onUpdate: _this10.onChildUpdate, onDeltaUpdate: onDeltaUpdate2, readOnly: readOnly2, getStyle: getStyle2, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction: beforeRemoveAction2, beforeAddAction: beforeAddAction2, beforeUpdateAction: beforeUpdateAction2, logger: logger2, onSubmitValueParser: onSubmitValueParser2 });
    })), !isReadOnly && addFormVisible && React__default__default.createElement("div", { className: "rejt-add-form", style: addForm }, React__default__default.createElement(JsonAddValue, { handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, onlyValue, addButtonElement, cancelButtonElement, inputElementGenerator, keyPath, deep, onSubmitValueParser: onSubmitValueParser2 })), React__default__default.createElement("span", { className: "rejt-not-collapsed-delimiter", style: delimiter2 }, endObject), !isReadOnly && removeItemButton);
  } }, { key: "render", value: function render() {
    var _this$state7 = this.state, name = _this$state7.name, collapsed = _this$state7.collapsed, data = _this$state7.data, keyPath = _this$state7.keyPath, deep = _this$state7.deep;
    var _this$props8 = this.props, dataType = _this$props8.dataType, getStyle2 = _this$props8.getStyle;
    var value2 = collapsed ? this.renderCollapsed() : this.renderNotCollapsed();
    var style = getStyle2(name, data, keyPath, deep, dataType);
    return React__default__default.createElement("div", { className: "rejt-array-node" }, React__default__default.createElement("span", { onClick: this.handleCollapseMode }, React__default__default.createElement("span", { className: "rejt-name", style: style.name }, name, " :", " ")), value2);
  } }], [{ key: "getDerivedStateFromProps", value: function getDerivedStateFromProps(props, state) {
    return props.data !== state.data ? { data: props.data } : null;
  } }]);
  return JsonArray2;
}(Component);
JsonArray.defaultProps = { keyPath: [], deep: 0, minusMenuElement: React__default__default.createElement("span", null, " - "), plusMenuElement: React__default__default.createElement("span", null, " + ") };
var JsonFunctionValue = /* @__PURE__ */ function(_Component6) {
  _inherits(JsonFunctionValue2, _Component6);
  var _super6 = _createSuper(JsonFunctionValue2);
  function JsonFunctionValue2(props) {
    var _this11;
    _classCallCheck(this, JsonFunctionValue2);
    _this11 = _super6.call(this, props);
    var keyPath = [].concat(_toConsumableArray$1(props.keyPath), [props.name]);
    _this11.state = { value: props.value, name: props.name, keyPath, deep: props.deep, editEnabled: false, inputRef: null };
    _this11.handleEditMode = _this11.handleEditMode.bind(_assertThisInitialized2(_this11));
    _this11.refInput = _this11.refInput.bind(_assertThisInitialized2(_this11));
    _this11.handleCancelEdit = _this11.handleCancelEdit.bind(_assertThisInitialized2(_this11));
    _this11.handleEdit = _this11.handleEdit.bind(_assertThisInitialized2(_this11));
    _this11.onKeydown = _this11.onKeydown.bind(_assertThisInitialized2(_this11));
    return _this11;
  }
  _createClass(JsonFunctionValue2, [{ key: "componentDidUpdate", value: function componentDidUpdate() {
    var _this$state8 = this.state, editEnabled = _this$state8.editEnabled, inputRef = _this$state8.inputRef, name = _this$state8.name, value2 = _this$state8.value, keyPath = _this$state8.keyPath, deep = _this$state8.deep;
    var _this$props9 = this.props, readOnly2 = _this$props9.readOnly, dataType = _this$props9.dataType;
    var readOnlyResult = readOnly2(name, value2, keyPath, deep, dataType);
    if (editEnabled && !readOnlyResult && typeof inputRef.focus === "function") {
      inputRef.focus();
    }
  } }, { key: "componentDidMount", value: function componentDidMount() {
    document.addEventListener("keydown", this.onKeydown);
  } }, { key: "componentWillUnmount", value: function componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  } }, { key: "onKeydown", value: function onKeydown(event) {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.repeat)
      return;
    if (event.code === "Enter" || event.key === "Enter") {
      event.preventDefault();
      this.handleEdit();
    }
    if (event.code === "Escape" || event.key === "Escape") {
      event.preventDefault();
      this.handleCancelEdit();
    }
  } }, { key: "handleEdit", value: function handleEdit() {
    var _this12 = this;
    var _this$props10 = this.props, handleUpdateValue3 = _this$props10.handleUpdateValue, originalValue = _this$props10.originalValue, logger2 = _this$props10.logger, onSubmitValueParser2 = _this$props10.onSubmitValueParser, keyPath = _this$props10.keyPath;
    var _this$state9 = this.state, inputRef = _this$state9.inputRef, name = _this$state9.name, deep = _this$state9.deep;
    if (!inputRef)
      return;
    var newValue = onSubmitValueParser2(true, keyPath, deep, name, inputRef.value);
    var result2 = { value: newValue, key: name };
    handleUpdateValue3(result2).then(function() {
      if (!isComponentWillChange(originalValue, newValue)) {
        _this12.handleCancelEdit();
      }
    }).catch(logger2.error);
  } }, { key: "handleEditMode", value: function handleEditMode() {
    this.setState({ editEnabled: true });
  } }, { key: "refInput", value: function refInput(node2) {
    this.state.inputRef = node2;
  } }, { key: "handleCancelEdit", value: function handleCancelEdit() {
    this.setState({ editEnabled: false });
  } }, { key: "render", value: function render() {
    var _this$state10 = this.state, name = _this$state10.name, value2 = _this$state10.value, editEnabled = _this$state10.editEnabled, keyPath = _this$state10.keyPath, deep = _this$state10.deep;
    var _this$props11 = this.props, handleRemove = _this$props11.handleRemove, originalValue = _this$props11.originalValue, readOnly2 = _this$props11.readOnly, dataType = _this$props11.dataType, getStyle2 = _this$props11.getStyle, editButtonElement = _this$props11.editButtonElement, cancelButtonElement = _this$props11.cancelButtonElement, textareaElementGenerator = _this$props11.textareaElementGenerator, minusMenuElement = _this$props11.minusMenuElement, comeFromKeyPath = _this$props11.keyPath;
    var style = getStyle2(name, originalValue, keyPath, deep, dataType);
    var result2 = null;
    var minusElement = null;
    var resultOnlyResult = readOnly2(name, originalValue, keyPath, deep, dataType);
    if (editEnabled && !resultOnlyResult) {
      var textareaElement2 = textareaElementGenerator(VALUE, comeFromKeyPath, deep, name, originalValue, dataType);
      var editButtonElementLayout = cloneElement(editButtonElement, { onClick: this.handleEdit });
      var cancelButtonElementLayout = cloneElement(cancelButtonElement, { onClick: this.handleCancelEdit });
      var textareaElementLayout = cloneElement(textareaElement2, { ref: this.refInput, defaultValue: originalValue });
      result2 = React__default__default.createElement("span", { className: "rejt-edit-form", style: style.editForm }, textareaElementLayout, " ", cancelButtonElementLayout, editButtonElementLayout);
      minusElement = null;
    } else {
      result2 = React__default__default.createElement("span", { className: "rejt-value", style: style.value, onClick: resultOnlyResult ? null : this.handleEditMode }, value2);
      var minusMenuLayout = cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: style.minus });
      minusElement = resultOnlyResult ? null : minusMenuLayout;
    }
    return React__default__default.createElement("li", { className: "rejt-function-value-node", style: style.li }, React__default__default.createElement("span", { className: "rejt-name", style: style.name }, name, " :", " "), result2, minusElement);
  } }], [{ key: "getDerivedStateFromProps", value: function getDerivedStateFromProps(props, state) {
    return props.value !== state.value ? { value: props.value } : null;
  } }]);
  return JsonFunctionValue2;
}(Component);
JsonFunctionValue.defaultProps = { keyPath: [], deep: 0, handleUpdateValue: function handleUpdateValue() {
}, editButtonElement: React__default__default.createElement("button", null, "e"), cancelButtonElement: React__default__default.createElement("button", null, "c"), minusMenuElement: React__default__default.createElement("span", null, " - ") };
var JsonNode = /* @__PURE__ */ function(_Component7) {
  _inherits(JsonNode2, _Component7);
  var _super7 = _createSuper(JsonNode2);
  function JsonNode2(props) {
    var _this13;
    _classCallCheck(this, JsonNode2);
    _this13 = _super7.call(this, props);
    _this13.state = { data: props.data, name: props.name, keyPath: props.keyPath, deep: props.deep };
    return _this13;
  }
  _createClass(JsonNode2, [{ key: "render", value: function render() {
    var _this$state11 = this.state, data = _this$state11.data, name = _this$state11.name, keyPath = _this$state11.keyPath, deep = _this$state11.deep;
    var _this$props12 = this.props, isCollapsed2 = _this$props12.isCollapsed, handleRemove = _this$props12.handleRemove, handleUpdateValue3 = _this$props12.handleUpdateValue, onUpdate = _this$props12.onUpdate, onDeltaUpdate2 = _this$props12.onDeltaUpdate, readOnly2 = _this$props12.readOnly, getStyle2 = _this$props12.getStyle, addButtonElement = _this$props12.addButtonElement, cancelButtonElement = _this$props12.cancelButtonElement, editButtonElement = _this$props12.editButtonElement, inputElementGenerator = _this$props12.inputElementGenerator, textareaElementGenerator = _this$props12.textareaElementGenerator, minusMenuElement = _this$props12.minusMenuElement, plusMenuElement = _this$props12.plusMenuElement, beforeRemoveAction2 = _this$props12.beforeRemoveAction, beforeAddAction2 = _this$props12.beforeAddAction, beforeUpdateAction2 = _this$props12.beforeUpdateAction, logger2 = _this$props12.logger, onSubmitValueParser2 = _this$props12.onSubmitValueParser;
    var readOnlyTrue = function readOnlyTrue2() {
      return true;
    };
    var dataType = getObjectType(data);
    switch (dataType) {
      case ERROR:
        return React__default__default.createElement(JsonObject, { data, name, isCollapsed: isCollapsed2, keyPath, deep, handleRemove, onUpdate, onDeltaUpdate: onDeltaUpdate2, readOnly: readOnlyTrue, dataType, getStyle: getStyle2, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction: beforeRemoveAction2, beforeAddAction: beforeAddAction2, beforeUpdateAction: beforeUpdateAction2, logger: logger2, onSubmitValueParser: onSubmitValueParser2 });
      case OBJECT:
        return React__default__default.createElement(JsonObject, { data, name, isCollapsed: isCollapsed2, keyPath, deep, handleRemove, onUpdate, onDeltaUpdate: onDeltaUpdate2, readOnly: readOnly2, dataType, getStyle: getStyle2, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction: beforeRemoveAction2, beforeAddAction: beforeAddAction2, beforeUpdateAction: beforeUpdateAction2, logger: logger2, onSubmitValueParser: onSubmitValueParser2 });
      case ARRAY:
        return React__default__default.createElement(JsonArray, { data, name, isCollapsed: isCollapsed2, keyPath, deep, handleRemove, onUpdate, onDeltaUpdate: onDeltaUpdate2, readOnly: readOnly2, dataType, getStyle: getStyle2, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction: beforeRemoveAction2, beforeAddAction: beforeAddAction2, beforeUpdateAction: beforeUpdateAction2, logger: logger2, onSubmitValueParser: onSubmitValueParser2 });
      case STRING:
        return React__default__default.createElement(JsonValue, { name, value: '"'.concat(data, '"'), originalValue: data, keyPath, deep, handleRemove, handleUpdateValue: handleUpdateValue3, readOnly: readOnly2, dataType, getStyle: getStyle2, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger2, onSubmitValueParser: onSubmitValueParser2 });
      case NUMBER:
        return React__default__default.createElement(JsonValue, { name, value: data, originalValue: data, keyPath, deep, handleRemove, handleUpdateValue: handleUpdateValue3, readOnly: readOnly2, dataType, getStyle: getStyle2, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger2, onSubmitValueParser: onSubmitValueParser2 });
      case BOOLEAN:
        return React__default__default.createElement(JsonValue, { name, value: data ? "true" : "false", originalValue: data, keyPath, deep, handleRemove, handleUpdateValue: handleUpdateValue3, readOnly: readOnly2, dataType, getStyle: getStyle2, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger2, onSubmitValueParser: onSubmitValueParser2 });
      case DATE:
        return React__default__default.createElement(JsonValue, { name, value: data.toISOString(), originalValue: data, keyPath, deep, handleRemove, handleUpdateValue: handleUpdateValue3, readOnly: readOnlyTrue, dataType, getStyle: getStyle2, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger2, onSubmitValueParser: onSubmitValueParser2 });
      case NULL:
        return React__default__default.createElement(JsonValue, { name, value: "null", originalValue: "null", keyPath, deep, handleRemove, handleUpdateValue: handleUpdateValue3, readOnly: readOnly2, dataType, getStyle: getStyle2, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger2, onSubmitValueParser: onSubmitValueParser2 });
      case UNDEFINED:
        return React__default__default.createElement(JsonValue, { name, value: "undefined", originalValue: "undefined", keyPath, deep, handleRemove, handleUpdateValue: handleUpdateValue3, readOnly: readOnly2, dataType, getStyle: getStyle2, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger2, onSubmitValueParser: onSubmitValueParser2 });
      case FUNCTION:
        return React__default__default.createElement(JsonFunctionValue, { name, value: data.toString(), originalValue: data, keyPath, deep, handleRemove, handleUpdateValue: handleUpdateValue3, readOnly: readOnly2, dataType, getStyle: getStyle2, cancelButtonElement, editButtonElement, textareaElementGenerator, minusMenuElement, logger: logger2, onSubmitValueParser: onSubmitValueParser2 });
      case SYMBOL:
        return React__default__default.createElement(JsonValue, { name, value: data.toString(), originalValue: data, keyPath, deep, handleRemove, handleUpdateValue: handleUpdateValue3, readOnly: readOnlyTrue, dataType, getStyle: getStyle2, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger: logger2, onSubmitValueParser: onSubmitValueParser2 });
      default:
        return null;
    }
  } }], [{ key: "getDerivedStateFromProps", value: function getDerivedStateFromProps(props, state) {
    return props.data !== state.data ? { data: props.data } : null;
  } }]);
  return JsonNode2;
}(Component);
JsonNode.defaultProps = { keyPath: [], deep: 0 };
var JsonObject = /* @__PURE__ */ function(_Component8) {
  _inherits(JsonObject2, _Component8);
  var _super8 = _createSuper(JsonObject2);
  function JsonObject2(props) {
    var _this14;
    _classCallCheck(this, JsonObject2);
    _this14 = _super8.call(this, props);
    var keyPath = props.deep === -1 ? [] : [].concat(_toConsumableArray$1(props.keyPath), [props.name]);
    _this14.state = { name: props.name, data: props.data, keyPath, deep: props.deep, nextDeep: props.deep + 1, collapsed: props.isCollapsed(keyPath, props.deep, props.data), addFormVisible: false };
    _this14.handleCollapseMode = _this14.handleCollapseMode.bind(_assertThisInitialized2(_this14));
    _this14.handleRemoveValue = _this14.handleRemoveValue.bind(_assertThisInitialized2(_this14));
    _this14.handleAddMode = _this14.handleAddMode.bind(_assertThisInitialized2(_this14));
    _this14.handleAddValueAdd = _this14.handleAddValueAdd.bind(_assertThisInitialized2(_this14));
    _this14.handleAddValueCancel = _this14.handleAddValueCancel.bind(_assertThisInitialized2(_this14));
    _this14.handleEditValue = _this14.handleEditValue.bind(_assertThisInitialized2(_this14));
    _this14.onChildUpdate = _this14.onChildUpdate.bind(_assertThisInitialized2(_this14));
    _this14.renderCollapsed = _this14.renderCollapsed.bind(_assertThisInitialized2(_this14));
    _this14.renderNotCollapsed = _this14.renderNotCollapsed.bind(_assertThisInitialized2(_this14));
    return _this14;
  }
  _createClass(JsonObject2, [{ key: "onChildUpdate", value: function onChildUpdate(childKey, childData) {
    var _this$state12 = this.state, data = _this$state12.data, keyPath = _this$state12.keyPath;
    data[childKey] = childData;
    this.setState({ data });
    var onUpdate = this.props.onUpdate;
    var size = keyPath.length;
    onUpdate(keyPath[size - 1], data);
  } }, { key: "handleAddMode", value: function handleAddMode() {
    this.setState({ addFormVisible: true });
  } }, { key: "handleAddValueCancel", value: function handleAddValueCancel() {
    this.setState({ addFormVisible: false });
  } }, { key: "handleAddValueAdd", value: function handleAddValueAdd(_ref161) {
    var _this15 = this;
    var key = _ref161.key, newValue = _ref161.newValue;
    var _this$state13 = this.state, data = _this$state13.data, keyPath = _this$state13.keyPath, deep = _this$state13.nextDeep;
    var _this$props13 = this.props, beforeAddAction2 = _this$props13.beforeAddAction, logger2 = _this$props13.logger;
    beforeAddAction2(key, keyPath, deep, newValue).then(function() {
      data[key] = newValue;
      _this15.setState({ data });
      _this15.handleAddValueCancel();
      var _this15$props = _this15.props, onUpdate = _this15$props.onUpdate, onDeltaUpdate2 = _this15$props.onDeltaUpdate;
      onUpdate(keyPath[keyPath.length - 1], data);
      onDeltaUpdate2({ type: ADD_DELTA_TYPE, keyPath, deep, key, newValue });
    }).catch(logger2.error);
  } }, { key: "handleRemoveValue", value: function handleRemoveValue(key) {
    var _this16 = this;
    return function() {
      var _this16$props = _this16.props, beforeRemoveAction2 = _this16$props.beforeRemoveAction, logger2 = _this16$props.logger;
      var _this16$state = _this16.state, data = _this16$state.data, keyPath = _this16$state.keyPath, deep = _this16$state.nextDeep;
      var oldValue = data[key];
      beforeRemoveAction2(key, keyPath, deep, oldValue).then(function() {
        var deltaUpdateResult = { keyPath, deep, key, oldValue, type: REMOVE_DELTA_TYPE };
        delete data[key];
        _this16.setState({ data });
        var _this16$props2 = _this16.props, onUpdate = _this16$props2.onUpdate, onDeltaUpdate2 = _this16$props2.onDeltaUpdate;
        onUpdate(keyPath[keyPath.length - 1], data);
        onDeltaUpdate2(deltaUpdateResult);
      }).catch(logger2.error);
    };
  } }, { key: "handleCollapseMode", value: function handleCollapseMode() {
    this.setState(function(state) {
      return { collapsed: !state.collapsed };
    });
  } }, { key: "handleEditValue", value: function handleEditValue(_ref162) {
    var _this17 = this;
    var key = _ref162.key, value2 = _ref162.value;
    return new Promise(function(resolve, reject) {
      var beforeUpdateAction2 = _this17.props.beforeUpdateAction;
      var _this17$state = _this17.state, data = _this17$state.data, keyPath = _this17$state.keyPath, deep = _this17$state.nextDeep;
      var oldValue = data[key];
      beforeUpdateAction2(key, keyPath, deep, oldValue, value2).then(function() {
        data[key] = value2;
        _this17.setState({ data });
        var _this17$props = _this17.props, onUpdate = _this17$props.onUpdate, onDeltaUpdate2 = _this17$props.onDeltaUpdate;
        onUpdate(keyPath[keyPath.length - 1], data);
        onDeltaUpdate2({ type: UPDATE_DELTA_TYPE, keyPath, deep, key, newValue: value2, oldValue });
        resolve();
      }).catch(reject);
    });
  } }, { key: "renderCollapsed", value: function renderCollapsed() {
    var _this$state14 = this.state, name = _this$state14.name, keyPath = _this$state14.keyPath, deep = _this$state14.deep, data = _this$state14.data;
    var _this$props14 = this.props, handleRemove = _this$props14.handleRemove, readOnly2 = _this$props14.readOnly, dataType = _this$props14.dataType, getStyle2 = _this$props14.getStyle, minusMenuElement = _this$props14.minusMenuElement;
    var _getStyle3 = getStyle2(name, data, keyPath, deep, dataType), minus = _getStyle3.minus, collapsed = _getStyle3.collapsed;
    var keyList = Object.getOwnPropertyNames(data);
    var isReadOnly = readOnly2(name, data, keyPath, deep, dataType);
    var removeItemButton = cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: minus });
    return React__default__default.createElement("span", { className: "rejt-collapsed" }, React__default__default.createElement("span", { className: "rejt-collapsed-text", style: collapsed, onClick: this.handleCollapseMode }, "{...}", " ", keyList.length, " ", keyList.length === 1 ? "key" : "keys"), !isReadOnly && removeItemButton);
  } }, { key: "renderNotCollapsed", value: function renderNotCollapsed() {
    var _this18 = this;
    var _this$state15 = this.state, name = _this$state15.name, data = _this$state15.data, keyPath = _this$state15.keyPath, deep = _this$state15.deep, nextDeep = _this$state15.nextDeep, addFormVisible = _this$state15.addFormVisible;
    var _this$props15 = this.props, isCollapsed2 = _this$props15.isCollapsed, handleRemove = _this$props15.handleRemove, onDeltaUpdate2 = _this$props15.onDeltaUpdate, readOnly2 = _this$props15.readOnly, getStyle2 = _this$props15.getStyle, dataType = _this$props15.dataType, addButtonElement = _this$props15.addButtonElement, cancelButtonElement = _this$props15.cancelButtonElement, editButtonElement = _this$props15.editButtonElement, inputElementGenerator = _this$props15.inputElementGenerator, textareaElementGenerator = _this$props15.textareaElementGenerator, minusMenuElement = _this$props15.minusMenuElement, plusMenuElement = _this$props15.plusMenuElement, beforeRemoveAction2 = _this$props15.beforeRemoveAction, beforeAddAction2 = _this$props15.beforeAddAction, beforeUpdateAction2 = _this$props15.beforeUpdateAction, logger2 = _this$props15.logger, onSubmitValueParser2 = _this$props15.onSubmitValueParser;
    var _getStyle4 = getStyle2(name, data, keyPath, deep, dataType), minus = _getStyle4.minus, plus = _getStyle4.plus, addForm = _getStyle4.addForm, ul2 = _getStyle4.ul, delimiter2 = _getStyle4.delimiter;
    var keyList = Object.getOwnPropertyNames(data);
    var isReadOnly = readOnly2(name, data, keyPath, deep, dataType);
    var addItemButton = cloneElement(plusMenuElement, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: plus });
    var removeItemButton = cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: minus });
    var list = keyList.map(function(key) {
      return React__default__default.createElement(JsonNode, { key, name: key, data: data[key], keyPath, deep: nextDeep, isCollapsed: isCollapsed2, handleRemove: _this18.handleRemoveValue(key), handleUpdateValue: _this18.handleEditValue, onUpdate: _this18.onChildUpdate, onDeltaUpdate: onDeltaUpdate2, readOnly: readOnly2, getStyle: getStyle2, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction: beforeRemoveAction2, beforeAddAction: beforeAddAction2, beforeUpdateAction: beforeUpdateAction2, logger: logger2, onSubmitValueParser: onSubmitValueParser2 });
    });
    var startObject = "{";
    var endObject = "}";
    return React__default__default.createElement("span", { className: "rejt-not-collapsed" }, React__default__default.createElement("span", { className: "rejt-not-collapsed-delimiter", style: delimiter2 }, startObject), !isReadOnly && addItemButton, React__default__default.createElement("ul", { className: "rejt-not-collapsed-list", style: ul2 }, list), !isReadOnly && addFormVisible && React__default__default.createElement("div", { className: "rejt-add-form", style: addForm }, React__default__default.createElement(JsonAddValue, { handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, addButtonElement, cancelButtonElement, inputElementGenerator, keyPath, deep, onSubmitValueParser: onSubmitValueParser2 })), React__default__default.createElement("span", { className: "rejt-not-collapsed-delimiter", style: delimiter2 }, endObject), !isReadOnly && removeItemButton);
  } }, { key: "render", value: function render() {
    var _this$state16 = this.state, name = _this$state16.name, collapsed = _this$state16.collapsed, data = _this$state16.data, keyPath = _this$state16.keyPath, deep = _this$state16.deep;
    var _this$props16 = this.props, getStyle2 = _this$props16.getStyle, dataType = _this$props16.dataType;
    var value2 = collapsed ? this.renderCollapsed() : this.renderNotCollapsed();
    var style = getStyle2(name, data, keyPath, deep, dataType);
    return React__default__default.createElement("div", { className: "rejt-object-node" }, React__default__default.createElement("span", { onClick: this.handleCollapseMode }, React__default__default.createElement("span", { className: "rejt-name", style: style.name }, name, " :", " ")), value2);
  } }], [{ key: "getDerivedStateFromProps", value: function getDerivedStateFromProps(props, state) {
    return props.data !== state.data ? { data: props.data } : null;
  } }]);
  return JsonObject2;
}(Component);
JsonObject.defaultProps = { keyPath: [], deep: 0, minusMenuElement: React__default__default.createElement("span", null, " - "), plusMenuElement: React__default__default.createElement("span", null, " + ") };
var JsonValue = /* @__PURE__ */ function(_Component9) {
  _inherits(JsonValue2, _Component9);
  var _super9 = _createSuper(JsonValue2);
  function JsonValue2(props) {
    var _this19;
    _classCallCheck(this, JsonValue2);
    _this19 = _super9.call(this, props);
    var keyPath = [].concat(_toConsumableArray$1(props.keyPath), [props.name]);
    _this19.state = { value: props.value, name: props.name, keyPath, deep: props.deep, editEnabled: false, inputRef: null };
    _this19.handleEditMode = _this19.handleEditMode.bind(_assertThisInitialized2(_this19));
    _this19.refInput = _this19.refInput.bind(_assertThisInitialized2(_this19));
    _this19.handleCancelEdit = _this19.handleCancelEdit.bind(_assertThisInitialized2(_this19));
    _this19.handleEdit = _this19.handleEdit.bind(_assertThisInitialized2(_this19));
    _this19.onKeydown = _this19.onKeydown.bind(_assertThisInitialized2(_this19));
    return _this19;
  }
  _createClass(JsonValue2, [{ key: "componentDidUpdate", value: function componentDidUpdate() {
    var _this$state17 = this.state, editEnabled = _this$state17.editEnabled, inputRef = _this$state17.inputRef, name = _this$state17.name, value2 = _this$state17.value, keyPath = _this$state17.keyPath, deep = _this$state17.deep;
    var _this$props17 = this.props, readOnly2 = _this$props17.readOnly, dataType = _this$props17.dataType;
    var isReadOnly = readOnly2(name, value2, keyPath, deep, dataType);
    if (editEnabled && !isReadOnly && typeof inputRef.focus === "function") {
      inputRef.focus();
    }
  } }, { key: "componentDidMount", value: function componentDidMount() {
    document.addEventListener("keydown", this.onKeydown);
  } }, { key: "componentWillUnmount", value: function componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  } }, { key: "onKeydown", value: function onKeydown(event) {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.repeat)
      return;
    if (event.code === "Enter" || event.key === "Enter") {
      event.preventDefault();
      this.handleEdit();
    }
    if (event.code === "Escape" || event.key === "Escape") {
      event.preventDefault();
      this.handleCancelEdit();
    }
  } }, { key: "handleEdit", value: function handleEdit() {
    var _this20 = this;
    var _this$props18 = this.props, handleUpdateValue3 = _this$props18.handleUpdateValue, originalValue = _this$props18.originalValue, logger2 = _this$props18.logger, onSubmitValueParser2 = _this$props18.onSubmitValueParser, keyPath = _this$props18.keyPath;
    var _this$state18 = this.state, inputRef = _this$state18.inputRef, name = _this$state18.name, deep = _this$state18.deep;
    if (!inputRef)
      return;
    var newValue = onSubmitValueParser2(true, keyPath, deep, name, inputRef.value);
    var result2 = { value: newValue, key: name };
    handleUpdateValue3(result2).then(function() {
      if (!isComponentWillChange(originalValue, newValue)) {
        _this20.handleCancelEdit();
      }
    }).catch(logger2.error);
  } }, { key: "handleEditMode", value: function handleEditMode() {
    this.setState({ editEnabled: true });
  } }, { key: "refInput", value: function refInput(node2) {
    this.state.inputRef = node2;
  } }, { key: "handleCancelEdit", value: function handleCancelEdit() {
    this.setState({ editEnabled: false });
  } }, { key: "render", value: function render() {
    var _this$state19 = this.state, name = _this$state19.name, value2 = _this$state19.value, editEnabled = _this$state19.editEnabled, keyPath = _this$state19.keyPath, deep = _this$state19.deep;
    var _this$props19 = this.props, handleRemove = _this$props19.handleRemove, originalValue = _this$props19.originalValue, readOnly2 = _this$props19.readOnly, dataType = _this$props19.dataType, getStyle2 = _this$props19.getStyle, editButtonElement = _this$props19.editButtonElement, cancelButtonElement = _this$props19.cancelButtonElement, inputElementGenerator = _this$props19.inputElementGenerator, minusMenuElement = _this$props19.minusMenuElement, comeFromKeyPath = _this$props19.keyPath;
    var style = getStyle2(name, originalValue, keyPath, deep, dataType);
    var isReadOnly = readOnly2(name, originalValue, keyPath, deep, dataType);
    var isEditing = editEnabled && !isReadOnly;
    var inputElement2 = inputElementGenerator(VALUE, comeFromKeyPath, deep, name, originalValue, dataType);
    var editButtonElementLayout = cloneElement(editButtonElement, { onClick: this.handleEdit });
    var cancelButtonElementLayout = cloneElement(cancelButtonElement, { onClick: this.handleCancelEdit });
    var inputElementLayout = cloneElement(inputElement2, { ref: this.refInput, defaultValue: JSON.stringify(originalValue) });
    var minusMenuLayout = cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: style.minus });
    return React__default__default.createElement("li", { className: "rejt-value-node", style: style.li }, React__default__default.createElement("span", { className: "rejt-name", style: style.name }, name, " : "), isEditing ? React__default__default.createElement("span", { className: "rejt-edit-form", style: style.editForm }, inputElementLayout, " ", cancelButtonElementLayout, editButtonElementLayout) : React__default__default.createElement("span", { className: "rejt-value", style: style.value, onClick: isReadOnly ? null : this.handleEditMode }, String(value2)), !isReadOnly && !isEditing && minusMenuLayout);
  } }], [{ key: "getDerivedStateFromProps", value: function getDerivedStateFromProps(props, state) {
    return props.value !== state.value ? { value: props.value } : null;
  } }]);
  return JsonValue2;
}(Component);
JsonValue.defaultProps = { keyPath: [], deep: 0, handleUpdateValue: function handleUpdateValue2() {
  return Promise.resolve();
}, editButtonElement: React__default__default.createElement("button", null, "e"), cancelButtonElement: React__default__default.createElement("button", null, "c"), minusMenuElement: React__default__default.createElement("span", null, " - ") };
var object = { minus: { color: "red" }, plus: { color: "green" }, collapsed: { color: "grey" }, delimiter: {}, ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" }, name: { color: "#2287CD" }, addForm: {} };
var array = { minus: { color: "red" }, plus: { color: "green" }, collapsed: { color: "grey" }, delimiter: {}, ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" }, name: { color: "#2287CD" }, addForm: {} };
var value = { minus: { color: "red" }, editForm: {}, value: { color: "#7bba3d" }, li: { minHeight: "22px", lineHeight: "22px", outline: "0px" }, name: { color: "#2287CD" } };
function parse(string) {
  var result = string;
  if (result.indexOf("function") === 0) {
    return eval("(".concat(result, ")"));
  }
  try {
    result = JSON.parse(string);
  } catch (e2) {
  }
  return result;
}
var JsonTree = /* @__PURE__ */ function(_Component10) {
  _inherits(JsonTree2, _Component10);
  var _super10 = _createSuper(JsonTree2);
  function JsonTree2(props) {
    var _this21;
    _classCallCheck(this, JsonTree2);
    _this21 = _super10.call(this, props);
    _this21.state = { data: props.data, rootName: props.rootName };
    _this21.onUpdate = _this21.onUpdate.bind(_assertThisInitialized2(_this21));
    _this21.removeRoot = _this21.removeRoot.bind(_assertThisInitialized2(_this21));
    return _this21;
  }
  _createClass(JsonTree2, [{ key: "onUpdate", value: function onUpdate(key, data) {
    this.setState({ data });
    this.props.onFullyUpdate(data);
  } }, { key: "removeRoot", value: function removeRoot() {
    this.onUpdate(null, null);
  } }, { key: "render", value: function render() {
    var _this$state20 = this.state, data = _this$state20.data, rootName = _this$state20.rootName;
    var _this$props20 = this.props, isCollapsed2 = _this$props20.isCollapsed, onDeltaUpdate2 = _this$props20.onDeltaUpdate, readOnly2 = _this$props20.readOnly, getStyle2 = _this$props20.getStyle, addButtonElement = _this$props20.addButtonElement, cancelButtonElement = _this$props20.cancelButtonElement, editButtonElement = _this$props20.editButtonElement, inputElement2 = _this$props20.inputElement, textareaElement2 = _this$props20.textareaElement, minusMenuElement = _this$props20.minusMenuElement, plusMenuElement = _this$props20.plusMenuElement, beforeRemoveAction2 = _this$props20.beforeRemoveAction, beforeAddAction2 = _this$props20.beforeAddAction, beforeUpdateAction2 = _this$props20.beforeUpdateAction, logger2 = _this$props20.logger, onSubmitValueParser2 = _this$props20.onSubmitValueParser, _this$props20$fallbac = _this$props20.fallback, fallback = _this$props20$fallbac === void 0 ? null : _this$props20$fallbac;
    var dataType = getObjectType(data);
    var readOnlyFunction = readOnly2;
    if (getObjectType(readOnly2) === "Boolean") {
      readOnlyFunction = function readOnlyFunction2() {
        return readOnly2;
      };
    }
    var inputElementFunction = inputElement2;
    if (inputElement2 && getObjectType(inputElement2) !== "Function") {
      inputElementFunction = function inputElementFunction2() {
        return inputElement2;
      };
    }
    var textareaElementFunction = textareaElement2;
    if (textareaElement2 && getObjectType(textareaElement2) !== "Function") {
      textareaElementFunction = function textareaElementFunction2() {
        return textareaElement2;
      };
    }
    if (dataType === "Object" || dataType === "Array") {
      return React__default__default.createElement("div", { className: "rejt-tree" }, React__default__default.createElement(JsonNode, { data, name: rootName, deep: -1, isCollapsed: isCollapsed2, onUpdate: this.onUpdate, onDeltaUpdate: onDeltaUpdate2, readOnly: readOnlyFunction, getStyle: getStyle2, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator: inputElementFunction, textareaElementGenerator: textareaElementFunction, minusMenuElement, plusMenuElement, handleRemove: this.removeRoot, beforeRemoveAction: beforeRemoveAction2, beforeAddAction: beforeAddAction2, beforeUpdateAction: beforeUpdateAction2, logger: logger2, onSubmitValueParser: onSubmitValueParser2 }));
    }
    return fallback;
  } }], [{ key: "getDerivedStateFromProps", value: function getDerivedStateFromProps(props, state) {
    if (props.data !== state.data || props.rootName !== state.rootName) {
      return { data: props.data, rootName: props.rootName };
    }
    return null;
  } }]);
  return JsonTree2;
}(Component);
JsonTree.defaultProps = { rootName: "root", isCollapsed: function isCollapsed(keyPath, deep) {
  return deep !== -1;
}, getStyle: function getStyle(keyName, data, keyPath, deep, dataType) {
  switch (dataType) {
    case "Object":
    case "Error":
      return object;
    case "Array":
      return array;
    default:
      return value;
  }
}, readOnly: function readOnly() {
  return false;
}, onFullyUpdate: function onFullyUpdate() {
}, onDeltaUpdate: function onDeltaUpdate() {
}, beforeRemoveAction: function beforeRemoveAction() {
  return Promise.resolve();
}, beforeAddAction: function beforeAddAction() {
  return Promise.resolve();
}, beforeUpdateAction: function beforeUpdateAction() {
  return Promise.resolve();
}, logger: { error: function error() {
} }, onSubmitValueParser: function onSubmitValueParser(isEditMode, keyPath, deep, name, rawValue) {
  return parse(rawValue);
}, inputElement: function inputElement() {
  return React__default__default.createElement("input", null);
}, textareaElement: function textareaElement() {
  return React__default__default.createElement("textarea", null);
}, fallback: null };
var globalWindow$3 = window_1.window;
var Wrapper$2 = styled.div(function(_ref163) {
  var theme2 = _ref163.theme;
  return { position: "relative", display: "flex", ".rejt-tree": { marginLeft: "1rem", fontSize: "13px" }, ".rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed": { "& > svg": { opacity: 0, transition: "opacity 0.2s" } }, ".rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed": { "& > svg": { opacity: 1 } }, ".rejt-edit-form button": { display: "none" }, ".rejt-add-form": { marginLeft: 10 }, ".rejt-add-value-node": { display: "inline-flex", alignItems: "center" }, ".rejt-name": { lineHeight: "22px" }, ".rejt-not-collapsed-delimiter": { lineHeight: "22px" }, ".rejt-plus-menu": { marginLeft: 5 }, ".rejt-object-node > span > *": { position: "relative", zIndex: 2 }, ".rejt-object-node, .rejt-array-node": { position: "relative" }, ".rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before": { content: '""', position: "absolute", top: 0, display: "block", width: "100%", marginLeft: "-1rem", padding: "0 4px 0 1rem", height: 22 }, ".rejt-collapsed::before, .rejt-not-collapsed::before": { zIndex: 1, background: "transparent", borderRadius: 4, transition: "background 0.2s", pointerEvents: "none", opacity: 0.1 }, ".rejt-object-node:hover, .rejt-array-node:hover": { "& > .rejt-collapsed::before, & > .rejt-not-collapsed::before": { background: theme2.color.secondary } }, ".rejt-collapsed::after, .rejt-not-collapsed::after": { content: '""', position: "absolute", display: "inline-block", pointerEvents: "none", width: 0, height: 0 }, ".rejt-collapsed::after": { left: -8, top: 8, borderTop: "3px solid transparent", borderBottom: "3px solid transparent", borderLeft: "3px solid rgba(153,153,153,0.6)" }, ".rejt-not-collapsed::after": { left: -10, top: 10, borderTop: "3px solid rgba(153,153,153,0.6)", borderLeft: "3px solid transparent", borderRight: "3px solid transparent" }, ".rejt-value": { display: "inline-block", border: "1px solid transparent", borderRadius: 4, margin: "1px 0", padding: "0 4px", cursor: "text", color: theme2.color.defaultText }, ".rejt-value-node:hover > .rejt-value": { background: theme2.background.app, borderColor: theme2.color.border } };
});
var Button = styled.button(function(_ref164) {
  var theme2 = _ref164.theme, primary = _ref164.primary;
  return { border: 0, height: 20, margin: 1, borderRadius: 4, background: primary ? theme2.color.secondary : "transparent", color: primary ? theme2.color.lightest : theme2.color.dark, fontWeight: primary ? "bold" : "normal", cursor: "pointer", order: primary ? "initial" : 9 };
});
var ActionIcon = styled(Icons)(function(_ref165) {
  var theme2 = _ref165.theme, icon = _ref165.icon, disabled = _ref165.disabled;
  return { display: "inline-block", verticalAlign: "middle", width: 15, height: 15, padding: 3, marginLeft: 5, cursor: disabled ? "not-allowed" : "pointer", color: theme2.color.mediumdark, "&:hover": disabled ? {} : { color: icon === "subtract" ? theme2.color.negative : theme2.color.ancillary }, "svg + &": { marginLeft: 0 } };
});
var Input = styled.input(function(_ref166) {
  var theme2 = _ref166.theme, placeholder = _ref166.placeholder;
  return { outline: 0, margin: placeholder ? 1 : "1px 0", padding: "3px 4px", color: theme2.color.defaultText, background: theme2.background.app, border: "1px solid ".concat(theme2.color.border), borderRadius: 4, lineHeight: "14px", width: placeholder === "Key" ? 80 : 120, "&:focus": { border: "1px solid ".concat(theme2.color.secondary) } };
});
var RawButton = styled(IconButton)(function(_ref167) {
  var theme2 = _ref167.theme;
  return { position: "absolute", zIndex: 2, top: 2, right: 2, height: 21, padding: "0 3px", background: theme2.background.bar, border: "1px solid ".concat(theme2.color.border), borderRadius: 3, color: theme2.color.mediumdark, fontSize: "9px", fontWeight: "bold", span: { marginLeft: 3, marginTop: 1 } };
});
var RawInput = styled(Form.Textarea)(function(_ref168) {
  var theme2 = _ref168.theme;
  return { flex: 1, padding: "7px 6px", fontFamily: theme2.typography.fonts.mono, fontSize: "12px", lineHeight: "18px", "&::placeholder": { fontFamily: theme2.typography.fonts.base, fontSize: "13px" }, "&:placeholder-shown": { padding: "7px 10px" } };
});
var ENTER_EVENT = { bubbles: true, cancelable: true, key: "Enter", code: "Enter", keyCode: 13 };
var dispatchEnterKey = function dispatchEnterKey2(event) {
  event.currentTarget.dispatchEvent(new globalWindow$3.KeyboardEvent("keydown", ENTER_EVENT));
};
var selectValue = function selectValue2(event) {
  event.currentTarget.select();
};
var getCustomStyleFunction = function getCustomStyleFunction2(theme2) {
  return function() {
    return { name: { color: theme2.color.secondary }, collapsed: { color: theme2.color.dark }, ul: { listStyle: "none", margin: "0 0 0 1rem", padding: 0 }, li: { outline: 0 } };
  };
};
var ObjectControl = function ObjectControl2(_ref169) {
  var name = _ref169.name, value2 = _ref169.value, onChange = _ref169.onChange;
  var theme2 = useTheme();
  var data = useMemo(function() {
    return value2 && cloneDeep_1(value2);
  }, [value2]);
  var hasData = data !== null && data !== void 0;
  var _useState27 = useState(!hasData), _useState28 = _slicedToArray$4(_useState27, 2), showRaw = _useState28[0], setShowRaw = _useState28[1];
  var _useState29 = useState(null), _useState30 = _slicedToArray$4(_useState29, 2), parseError = _useState30[0], setParseError = _useState30[1];
  var updateRaw = useCallback(function(raw) {
    try {
      if (raw)
        onChange(JSON.parse(raw));
      setParseError(void 0);
    } catch (e2) {
      setParseError(e2);
    }
  }, [onChange]);
  var _useState31 = useState(false), _useState32 = _slicedToArray$4(_useState31, 2), forceVisible = _useState32[0], setForceVisible = _useState32[1];
  var onForceVisible = useCallback(function() {
    onChange({});
    setForceVisible(true);
  }, [setForceVisible]);
  var htmlElRef = useRef(null);
  useEffect(function() {
    if (forceVisible && htmlElRef.current)
      htmlElRef.current.select();
  }, [forceVisible]);
  if (!hasData) {
    return React__default__default.createElement(Form.Button, { id: getControlSetterButtonId(name), onClick: onForceVisible }, "Set object");
  }
  var rawJSONForm = React__default__default.createElement(RawInput, { ref: htmlElRef, id: getControlId(name), name, defaultValue: value2 === null ? "" : JSON.stringify(value2, null, 2), onBlur: function onBlur(event) {
    return updateRaw(event.target.value);
  }, placeholder: "Edit JSON string...", autoFocus: forceVisible, valid: parseError ? "error" : null });
  return React__default__default.createElement(Wrapper$2, null, ["Object", "Array"].includes(getObjectType(data)) && React__default__default.createElement(RawButton, { onClick: function onClick() {
    return setShowRaw(function(v2) {
      return !v2;
    });
  } }, React__default__default.createElement(Icons, { icon: showRaw ? "eyeclose" : "eye" }), React__default__default.createElement("span", null, "RAW")), !showRaw ? React__default__default.createElement(JsonTree, { data, rootName: name, onFullyUpdate: onChange, getStyle: getCustomStyleFunction(theme2), cancelButtonElement: React__default__default.createElement(Button, { type: "button" }, "Cancel"), editButtonElement: React__default__default.createElement(Button, { type: "submit" }, "Save"), addButtonElement: React__default__default.createElement(Button, { type: "submit", primary: true }, "Save"), plusMenuElement: React__default__default.createElement(ActionIcon, { icon: "add" }), minusMenuElement: React__default__default.createElement(ActionIcon, { icon: "subtract" }), inputElement: function inputElement2(_, __, ___, key) {
    return key ? React__default__default.createElement(Input, { onFocus: selectValue, onBlur: dispatchEnterKey }) : React__default__default.createElement(Input, null);
  }, fallback: rawJSONForm }) : rawJSONForm);
};
var RangeInput = styled.input(function(_ref170) {
  var theme2 = _ref170.theme, min = _ref170.min, max = _ref170.max, value2 = _ref170.value;
  return {
    "&": { width: "100%", backgroundColor: "transparent", appearance: "none" },
    "&::-webkit-slider-runnable-track": { background: theme2.base === "light" ? "linear-gradient(to right, \n            ".concat(theme2.color.green, " 0%, ").concat(theme2.color.green, " ").concat((value2 - min) / (max - min) * 100, "%, \n            ").concat(curriedDarken$1(0.02, theme2.input.background), " ").concat((value2 - min) / (max - min) * 100, "%, \n            ").concat(curriedDarken$1(0.02, theme2.input.background), " 100%)") : "linear-gradient(to right, \n            ".concat(theme2.color.green, " 0%, ").concat(theme2.color.green, " ").concat((value2 - min) / (max - min) * 100, "%, \n            ").concat(curriedLighten$1(0.02, theme2.input.background), " ").concat((value2 - min) / (max - min) * 100, "%, \n            ").concat(curriedLighten$1(0.02, theme2.input.background), " 100%)"), boxShadow: "".concat(theme2.appBorderColor, " 0 0 0 1px inset"), borderRadius: 6, width: "100%", height: 6, cursor: "pointer" },
    "&::-webkit-slider-thumb": { marginTop: "-6px", width: 16, height: 16, border: "1px solid ".concat(rgba(theme2.appBorderColor, 0.2)), borderRadius: "50px", boxShadow: "0 1px 3px 0px ".concat(rgba(theme2.appBorderColor, 0.2)), cursor: "grab", appearance: "none", background: "".concat(theme2.input.background), transition: "all 150ms ease-out", "&:hover": { background: "".concat(curriedDarken$1(0.05, theme2.input.background)), transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)", transition: "all 50ms ease-out" }, "&:active": { background: "".concat(theme2.input.background), transform: "scale3d(1, 1, 1) translateY(0px)", cursor: "grabbing" } },
    "&:focus": { outline: "none", "&::-webkit-slider-runnable-track": { borderColor: rgba(theme2.color.secondary, 0.4) }, "&::-webkit-slider-thumb": { borderColor: theme2.color.secondary, boxShadow: "0 0px 5px 0px ".concat(theme2.color.secondary) } },
    "&::-moz-range-track": { background: theme2.base === "light" ? "linear-gradient(to right, \n            ".concat(theme2.color.green, " 0%, ").concat(theme2.color.green, " ").concat((value2 - min) / (max - min) * 100, "%, \n            ").concat(curriedDarken$1(0.02, theme2.input.background), " ").concat((value2 - min) / (max - min) * 100, "%, \n            ").concat(curriedDarken$1(0.02, theme2.input.background), " 100%)") : "linear-gradient(to right, \n            ".concat(theme2.color.green, " 0%, ").concat(theme2.color.green, " ").concat((value2 - min) / (max - min) * 100, "%, \n            ").concat(curriedLighten$1(0.02, theme2.input.background), " ").concat((value2 - min) / (max - min) * 100, "%, \n            ").concat(curriedLighten$1(0.02, theme2.input.background), " 100%)"), boxShadow: "".concat(theme2.appBorderColor, " 0 0 0 1px inset"), borderRadius: 6, width: "100%", height: 6, cursor: "pointer", outline: "none" },
    "&::-moz-range-thumb": { width: 16, height: 16, border: "1px solid ".concat(rgba(theme2.color.border, 0.2)), borderRadius: "50px", boxShadow: "0 1px 3px 0px ".concat(rgba(theme2.color.border, 0.2)), cursor: "grab", background: "".concat(theme2.input.background), transition: "all 150ms ease-out", "&:hover": { background: "".concat(curriedDarken$1(0.05, theme2.input.background)), transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)", transition: "all 50ms ease-out" }, "&:active": { background: "".concat(theme2.input.background), transform: "scale3d(1, 1, 1) translateY(0px)", cursor: "grabbing" } },
    "&::-ms-track": { background: theme2.base === "light" ? "linear-gradient(to right, \n            ".concat(theme2.color.green, " 0%, ").concat(theme2.color.green, " ").concat((value2 - min) / (max - min) * 100, "%, \n            ").concat(curriedDarken$1(0.02, theme2.input.background), " ").concat((value2 - min) / (max - min) * 100, "%, \n            ").concat(curriedDarken$1(0.02, theme2.input.background), " 100%)") : "linear-gradient(to right, \n            ".concat(theme2.color.green, " 0%, ").concat(theme2.color.green, " ").concat((value2 - min) / (max - min) * 100, "%, \n            ").concat(curriedLighten$1(0.02, theme2.input.background), " ").concat((value2 - min) / (max - min) * 100, "%, \n            ").concat(curriedLighten$1(0.02, theme2.input.background), " 100%)"), boxShadow: "".concat(theme2.appBorderColor, " 0 0 0 1px inset"), color: "transparent", width: "100%", height: "6px", cursor: "pointer" },
    "&::-ms-fill-lower": { borderRadius: 6 },
    "&::-ms-fill-upper": { borderRadius: 6 },
    "&::-ms-thumb": { width: 16, height: 16, background: "".concat(theme2.input.background), border: "1px solid ".concat(rgba(theme2.appBorderColor, 0.2)), borderRadius: 50, cursor: "grab", marginTop: 0 },
    "@supports (-ms-ime-align:auto)": { "input[type=range]": { margin: "0" } }
  };
});
var RangeLabel = styled.span({ paddingLeft: 5, paddingRight: 5, fontSize: 12, whiteSpace: "nowrap", fontFeatureSettings: "tnum", fontVariantNumeric: "tabular-nums" });
var RangeWrapper = styled.div({ display: "flex", alignItems: "center", width: "100%" });
function getNumberOfDecimalPlaces(number) {
  var match2 = number.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return !match2 ? 0 : Math.max(0, (match2[1] ? match2[1].length : 0) - (match2[2] ? +match2[2] : 0));
}
var RangeControl = function RangeControl2(_ref171) {
  var name = _ref171.name, value2 = _ref171.value, onChange = _ref171.onChange, _ref171$min = _ref171.min, min = _ref171$min === void 0 ? 0 : _ref171$min, _ref171$max = _ref171.max, max = _ref171$max === void 0 ? 100 : _ref171$max, _ref171$step = _ref171.step, step = _ref171$step === void 0 ? 1 : _ref171$step, onBlur = _ref171.onBlur, onFocus = _ref171.onFocus;
  var handleChange = function handleChange2(event) {
    onChange(parse$1(event.target.value));
  };
  var hasValue = value2 !== void 0;
  var numberOFDecimalsPlaces = useMemo(function() {
    return getNumberOfDecimalPlaces(step);
  }, [step]);
  return React__default__default.createElement(RangeWrapper, null, React__default__default.createElement(RangeLabel, null, min), React__default__default.createElement(RangeInput, Object.assign({ id: getControlId(name), type: "range", onChange: handleChange }, { name, value: value2, min, max, step, onFocus, onBlur })), React__default__default.createElement(RangeLabel, null, "".concat(hasValue ? value2.toFixed(numberOFDecimalsPlaces) : "--"), " / ", max));
};
var Wrapper$1 = styled.label({ display: "flex" });
var TextControl = function TextControl2(_ref172) {
  var name = _ref172.name, value2 = _ref172.value, onChange = _ref172.onChange, onFocus = _ref172.onFocus, onBlur = _ref172.onBlur;
  var handleChange = function handleChange2(event) {
    onChange(event.target.value);
  };
  var _useState33 = useState(false), _useState34 = _slicedToArray$4(_useState33, 2), forceVisible = _useState34[0], setForceVisible = _useState34[1];
  var onForceVisible = useCallback(function() {
    onChange("");
    setForceVisible(true);
  }, [setForceVisible]);
  if (value2 === void 0) {
    return React__default__default.createElement(Form.Button, { id: getControlSetterButtonId(name), onClick: onForceVisible }, "Set string");
  }
  var isValid = typeof value2 === "string";
  return React__default__default.createElement(Wrapper$1, null, React__default__default.createElement(Form.Textarea, Object.assign({ id: getControlId(name), onChange: handleChange, size: "flex", placeholder: "Edit string...", autoFocus: forceVisible, valid: isValid ? null : "error" }, { name, value: isValid ? value2 : "", onFocus, onBlur })));
};
var FileInput = styled(Form.Input)({ padding: 10 });
function revokeOldUrls(urls) {
  urls.forEach(function(url) {
    if (url.startsWith("blob:")) {
      URL.revokeObjectURL(url);
    }
  });
}
var FilesControl = function FilesControl2(_ref173) {
  var onChange = _ref173.onChange, name = _ref173.name, _ref173$accept = _ref173.accept, accept = _ref173$accept === void 0 ? "image/*" : _ref173$accept, value2 = _ref173.value;
  function handleFileChange(e2) {
    if (!e2.target.files) {
      return;
    }
    var fileUrls = Array.from(e2.target.files).map(function(file) {
      return URL.createObjectURL(file);
    });
    onChange(fileUrls);
    revokeOldUrls(value2);
  }
  return React__default__default.createElement(FileInput, { id: getControlId(name), type: "file", name, multiple: true, onChange: handleFileChange, accept, size: "flex" });
};
var LazyColorControl = lazy(function() {
  return import("./Color-3c22bb81.js");
});
var ColorControl = function ColorControl2(props) {
  return React__default__default.createElement(Suspense, { fallback: React__default__default.createElement("div", null) }, React__default__default.createElement(LazyColorControl, Object.assign({}, props)));
};
var Controls = { array: ObjectControl, object: ObjectControl, boolean: BooleanControl, color: ColorControl, date: DateControl, number: NumberControl, check: OptionsControl, "inline-check": OptionsControl, radio: OptionsControl, "inline-radio": OptionsControl, select: OptionsControl, "multi-select": OptionsControl, range: RangeControl, text: TextControl, file: FilesControl };
var NoControl = function NoControl2() {
  return React__default__default.createElement(React__default__default.Fragment, null, "-");
};
var ArgControl = function ArgControl2(_ref174) {
  var row = _ref174.row, arg = _ref174.arg, updateArgs = _ref174.updateArgs;
  var key = row.key, control = row.control;
  var _useState35 = useState(false), _useState36 = _slicedToArray$4(_useState35, 2), isFocused = _useState36[0], setFocused = _useState36[1];
  var _useState37 = useState({ value: arg }), _useState38 = _slicedToArray$4(_useState37, 2), boxedValue = _useState38[0], setBoxedValue = _useState38[1];
  useEffect(function() {
    if (!isFocused)
      setBoxedValue({ value: arg });
  }, [isFocused, arg]);
  var onChange = useCallback(function(argVal) {
    setBoxedValue({ value: argVal });
    updateArgs(_defineProperty2({}, key, argVal));
    return argVal;
  }, [updateArgs, key]);
  var onBlur = useCallback(function() {
    return setFocused(false);
  }, []);
  var onFocus = useCallback(function() {
    return setFocused(true);
  }, []);
  if (!control || control.disable)
    return React__default__default.createElement(NoControl, null);
  var props = { name: key, argType: row, value: boxedValue.value, onChange, onBlur, onFocus };
  var Control = Controls[control.type] || NoControl;
  return React__default__default.createElement(Control, Object.assign({}, props, control, { controlType: control.type }));
};
var Name = styled.span({ fontWeight: "bold" });
var Required = styled.span(function(_ref175) {
  var theme2 = _ref175.theme;
  return { color: theme2.color.negative, fontFamily: theme2.typography.fonts.mono, cursor: "help" };
});
var Description = styled.div(function(_ref176) {
  var theme2 = _ref176.theme;
  return { "&&": { p: { margin: "0 0 10px 0" }, a: { color: theme2.color.secondary } }, code: Object.assign(Object.assign({}, codeCommon({ theme: theme2 })), { fontSize: 12, fontFamily: theme2.typography.fonts.mono }), "& code": { margin: 0, display: "inline-block" }, "& pre > code": { whiteSpace: "pre-wrap" } };
});
var Type = styled.div(function(_ref177) {
  var theme2 = _ref177.theme, hasDescription = _ref177.hasDescription;
  return { color: theme2.base === "light" ? curriedTransparentize$1(0.1, theme2.color.defaultText) : curriedTransparentize$1(0.2, theme2.color.defaultText), marginTop: hasDescription ? 4 : 0 };
});
var TypeWithJsDoc = styled.div(function(_ref178) {
  var theme2 = _ref178.theme, hasDescription = _ref178.hasDescription;
  return { color: theme2.base === "light" ? curriedTransparentize$1(0.1, theme2.color.defaultText) : curriedTransparentize$1(0.2, theme2.color.defaultText), marginTop: hasDescription ? 12 : 0, marginBottom: 12 };
});
var StyledTd$1 = styled.td(function(_ref179) {
  _ref179.theme;
  var expandable = _ref179.expandable;
  return { paddingLeft: expandable ? "40px !important" : "20px !important" };
});
var ArgRow = function ArgRow2(props) {
  var _a;
  var row = props.row, updateArgs = props.updateArgs, compact = props.compact, expandable = props.expandable, initialExpandedArgs = props.initialExpandedArgs;
  var name = row.name, description = row.description;
  var table2 = row.table || {};
  var type = table2.type || row.type;
  var defaultValue = table2.defaultValue || row.defaultValue;
  var required = (_a = row.type) === null || _a === void 0 ? void 0 : _a.required;
  var hasDescription = description != null && description !== "";
  return React__default__default.createElement("tr", null, React__default__default.createElement(StyledTd$1, { expandable }, React__default__default.createElement(Name, null, name), required ? React__default__default.createElement(Required, { title: "Required" }, "*") : null), compact ? null : React__default__default.createElement("td", null, hasDescription && React__default__default.createElement(Description, null, React__default__default.createElement(Markdown, null, description)), table2.jsDocTags != null ? React__default__default.createElement(React__default__default.Fragment, null, React__default__default.createElement(TypeWithJsDoc, { hasDescription }, React__default__default.createElement(ArgValue, { value: type, initialExpandedArgs })), React__default__default.createElement(ArgJsDoc, { tags: table2.jsDocTags })) : React__default__default.createElement(Type, { hasDescription }, React__default__default.createElement(ArgValue, { value: type, initialExpandedArgs }))), compact ? null : React__default__default.createElement("td", null, React__default__default.createElement(ArgValue, { value: defaultValue, initialExpandedArgs })), updateArgs ? React__default__default.createElement("td", null, React__default__default.createElement(ArgControl, Object.assign({}, props))) : null);
};
var ExpanderIcon = styled(Icons)(function(_ref180) {
  var theme2 = _ref180.theme;
  return { marginRight: 8, marginLeft: -10, marginTop: -2, height: 12, width: 12, color: theme2.base === "light" ? curriedTransparentize$1(0.25, theme2.color.defaultText) : curriedTransparentize$1(0.3, theme2.color.defaultText), border: "none", display: "inline-block" };
});
var FlexWrapper = styled.span(function(_ref181) {
  _ref181.theme;
  return { display: "flex", lineHeight: "20px", alignItems: "center" };
});
var Section = styled.td(function(_ref182) {
  var theme2 = _ref182.theme;
  return { position: "relative", letterSpacing: "0.35em", textTransform: "uppercase", fontWeight: theme2.typography.weight.black, fontSize: theme2.typography.size.s1 - 1, color: theme2.base === "light" ? curriedTransparentize$1(0.4, theme2.color.defaultText) : curriedTransparentize$1(0.6, theme2.color.defaultText), background: "".concat(theme2.background.app, " !important"), "& ~ td": { background: "".concat(theme2.background.app, " !important") } };
});
var Subsection = styled.td(function(_ref183) {
  var theme2 = _ref183.theme;
  return { position: "relative", fontWeight: theme2.typography.weight.bold, fontSize: theme2.typography.size.s2 - 1, background: theme2.background.content };
});
var StyledTd = styled.td(function(_ref184) {
  _ref184.theme;
  return { position: "relative" };
});
var StyledTr = styled.tr(function(_ref185) {
  var theme2 = _ref185.theme;
  return { "&:hover > td": { backgroundColor: "".concat(theme2.background.hoverable, " !important"), boxShadow: "".concat(theme2.color.mediumlight, " 0 - 1px 0 0 inset"), cursor: "row-resize" } };
});
var ClickIntercept = styled.button(function() {
  return {
    background: "none",
    border: "none",
    padding: "0",
    font: "inherit",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    width: "100%",
    color: "transparent",
    cursor: "row-resize !important"
  };
});
var SectionRow = function SectionRow2(_ref186) {
  var _ref186$level = _ref186.level, level = _ref186$level === void 0 ? "section" : _ref186$level, label = _ref186.label, children = _ref186.children, _ref186$initialExpand = _ref186.initialExpanded, initialExpanded = _ref186$initialExpand === void 0 ? true : _ref186$initialExpand, _ref186$colSpan = _ref186.colSpan, colSpan = _ref186$colSpan === void 0 ? 3 : _ref186$colSpan;
  var _useState39 = useState(initialExpanded), _useState40 = _slicedToArray$4(_useState39, 2), expanded = _useState40[0], setExpanded = _useState40[1];
  var Level = level === "subsection" ? Subsection : Section;
  var itemCount = (children === null || children === void 0 ? void 0 : children.length) || 0;
  var caption = level === "subsection" ? "".concat(itemCount, " item").concat(itemCount !== 1 ? "s" : "") : "";
  var icon = expanded ? "arrowdown" : "arrowright";
  var helperText = "".concat(expanded ? "Hide" : "Show", " ").concat(level === "subsection" ? itemCount : label, " item").concat(itemCount !== 1 ? "s" : "");
  return React__default__default.createElement(React__default__default.Fragment, null, React__default__default.createElement(StyledTr, { title: helperText }, React__default__default.createElement(Level, { colSpan: 1 }, React__default__default.createElement(ClickIntercept, { onClick: function onClick(e2) {
    return setExpanded(!expanded);
  }, tabIndex: 0 }, helperText), React__default__default.createElement(FlexWrapper, null, React__default__default.createElement(ExpanderIcon, { icon }), label)), React__default__default.createElement(StyledTd, { colSpan: colSpan - 1 }, React__default__default.createElement(ClickIntercept, { onClick: function onClick(e2) {
    return setExpanded(!expanded);
  }, tabIndex: -1, style: { outline: "none" } }, helperText), expanded ? null : caption)), expanded ? children : null);
};
var TableWrapper = styled.table(function(_ref187) {
  var _trFirstChild, _trLastChild, _3;
  var theme2 = _ref187.theme, compact = _ref187.compact, inAddonPanel = _ref187.inAddonPanel;
  return { "&&": (_3 = {
    borderCollapse: "collapse",
    borderSpacing: 0,
    color: theme2.color.defaultText,
    "td, th": { padding: 0, border: "none", verticalAlign: "top", textOverflow: "ellipsis" },
    fontSize: theme2.typography.size.s2 - 1,
    lineHeight: "20px",
    textAlign: "left",
    width: "100%",
    marginTop: inAddonPanel ? 0 : 25,
    marginBottom: inAddonPanel ? 0 : 40,
    "thead th:first-of-type, td:first-of-type": {
      width: "25%"
    },
    "th:first-of-type, td:first-of-type": { paddingLeft: 20 },
    "th:nth-of-type(2), td:nth-of-type(2)": Object.assign({}, compact ? null : {
      width: "35%"
    }),
    "td:nth-of-type(3)": Object.assign({}, compact ? null : {
      width: "15%"
    }),
    "th:last-of-type, td:last-of-type": Object.assign({ paddingRight: 20 }, compact ? null : {
      width: "25%"
    }),
    th: { color: theme2.base === "light" ? curriedTransparentize$1(0.25, theme2.color.defaultText) : curriedTransparentize$1(0.45, theme2.color.defaultText), paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15 },
    td: { paddingTop: "10px", paddingBottom: "10px", "&:not(:first-of-type)": { paddingLeft: 15, paddingRight: 15 }, "&:last-of-type": { paddingRight: 20 } },
    marginLeft: inAddonPanel ? 0 : 1,
    marginRight: inAddonPanel ? 0 : 1
  }, _defineProperty2(_3, "tr:first-child", (_trFirstChild = {}, _defineProperty2(_trFirstChild, "td:first-child, th:first-child", { borderTopLeftRadius: inAddonPanel ? 0 : theme2.appBorderRadius }), _defineProperty2(_trFirstChild, "td:last-child, th:last-child", { borderTopRightRadius: inAddonPanel ? 0 : theme2.appBorderRadius }), _trFirstChild)), _defineProperty2(_3, "tr:last-child", (_trLastChild = {}, _defineProperty2(_trLastChild, "td:first-child, th:first-child", { borderBottomLeftRadius: inAddonPanel ? 0 : theme2.appBorderRadius }), _defineProperty2(_trLastChild, "td:last-child, th:last-child", { borderBottomRightRadius: inAddonPanel ? 0 : theme2.appBorderRadius }), _trLastChild)), _defineProperty2(_3, "tbody", {
    boxShadow: !inAddonPanel && (theme2.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 1px,\n          ".concat(curriedTransparentize$1(0.035, theme2.appBorderColor), " 0 0 0 1px") : "rgba(0, 0, 0, 0.20) 0 2px 5px 1px,\n          ".concat(curriedOpacify$1(0.05, theme2.appBorderColor), " 0 0 0 1px")),
    borderRadius: theme2.appBorderRadius,
    "@media not all and (min-resolution:.001dpcm)": { "@supports (-webkit-appearance:none)": Object.assign(Object.assign({ borderWidth: 1, borderStyle: "solid" }, inAddonPanel && { borderColor: "transparent" }), !inAddonPanel && { borderColor: theme2.base === "light" ? curriedTransparentize$1(0.035, theme2.appBorderColor) : curriedOpacify$1(0.05, theme2.appBorderColor) }) },
    tr: Object.assign({ background: "transparent", overflow: "hidden" }, inAddonPanel ? { borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: theme2.base === "light" ? curriedDarken$1(0.1, theme2.background.content) : curriedLighten$1(0.05, theme2.background.content) } : _defineProperty2({}, "&:not(:first-child)", { borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: theme2.base === "light" ? curriedDarken$1(0.1, theme2.background.content) : curriedLighten$1(0.05, theme2.background.content) })),
    td: { background: theme2.background.content }
  }), _3) };
}, function(_ref189) {
  var isLoading = _ref189.isLoading, theme2 = _ref189.theme;
  return isLoading ? { "th span, td span, td button": { display: "inline", backgroundColor: theme2.appBorderColor, animation: "".concat(theme2.animation.glow, " 1.5s ease-in-out infinite"), color: "transparent", boxShadow: "none", borderRadius: 0 } } : {};
});
var ResetButton = styled.button(function(_ref190) {
  var theme2 = _ref190.theme;
  return { border: 0, borderRadius: "3em", cursor: "pointer", display: "inline-block", overflow: "hidden", padding: "3px 8px", transition: "all 150ms ease-out", verticalAlign: "top", userSelect: "none", margin: 0, backgroundColor: theme2.base === "light" ? "#EAF3FC" : theme2.color.border, boxShadow: theme2.base === "light" ? "".concat(theme2.color.border, " 0 0 0 1px inset") : "".concat(theme2.color.darker, "  0 0 0 1px inset"), color: theme2.color.secondary, "&:hover": { background: theme2.base === "light" ? curriedDarken$1(0.03, "#EAF3FC") : curriedOpacify$1(0.1, theme2.color.border) }, "&:focus": { boxShadow: "".concat(theme2.color.secondary, " 0 0 0 1px inset"), outline: "none" }, svg: { display: "block", height: 14, width: 14 } };
});
var ControlHeadingWrapper = styled.span({ display: "flex", justifyContent: "space-between" });
var ArgsTableError;
(function(ArgsTableError2) {
  ArgsTableError2["NO_COMPONENT"] = "No component found.";
  ArgsTableError2["ARGS_UNSUPPORTED"] = "Args unsupported. See Args documentation for your framework.";
})(ArgsTableError || (ArgsTableError = {}));
var sortFns = { alpha: function alpha(a3, b2) {
  return a3.name.localeCompare(b2.name);
}, requiredFirst: function requiredFirst(a3, b2) {
  var _a, _b;
  return Number(!!((_a = b2.type) === null || _a === void 0 ? void 0 : _a.required)) - Number(!!((_b = a3.type) === null || _b === void 0 ? void 0 : _b.required)) || a3.name.localeCompare(b2.name);
}, none: void 0 };
var rowLoadingData = function rowLoadingData2(key) {
  return { key, name: "propertyName", description: "This is a short description", control: { type: "text" }, table: { type: { summary: "summary" }, defaultValue: { summary: "defaultValue" } } };
};
var argsTableLoadingData = { rows: { row1: rowLoadingData("row1"), row2: rowLoadingData("row2"), row3: rowLoadingData("row3") } };
var groupRows = function groupRows2(rows, sort) {
  var sections = { ungrouped: [], ungroupedSubsections: {}, sections: {} };
  if (!rows)
    return sections;
  Object.entries(rows).forEach(function(_ref191) {
    var _ref192 = _slicedToArray$4(_ref191, 2), key = _ref192[0], row = _ref192[1];
    var _ref193 = (row === null || row === void 0 ? void 0 : row.table) || {}, category = _ref193.category, subcategory = _ref193.subcategory;
    if (category) {
      var section = sections.sections[category] || { ungrouped: [], subsections: {} };
      if (!subcategory) {
        section.ungrouped.push(Object.assign({ key }, row));
      } else {
        var subsection = section.subsections[subcategory] || [];
        subsection.push(Object.assign({ key }, row));
        section.subsections[subcategory] = subsection;
      }
      sections.sections[category] = section;
    } else if (subcategory) {
      var _subsection = sections.ungroupedSubsections[subcategory] || [];
      _subsection.push(Object.assign({ key }, row));
      sections.ungroupedSubsections[subcategory] = _subsection;
    } else {
      sections.ungrouped.push(Object.assign({ key }, row));
    }
  });
  var sortFn = sortFns[sort];
  var sortSubsection = function sortSubsection2(record) {
    if (!sortFn)
      return record;
    return Object.keys(record).reduce(function(acc, cur) {
      return Object.assign(Object.assign({}, acc), _defineProperty2({}, cur, record[cur].sort(sortFn)));
    }, {});
  };
  var sorted = { ungrouped: sections.ungrouped.sort(sortFn), ungroupedSubsections: sortSubsection(sections.ungroupedSubsections), sections: Object.keys(sections.sections).reduce(function(acc, cur) {
    return Object.assign(Object.assign({}, acc), _defineProperty2({}, cur, { ungrouped: sections.sections[cur].ungrouped.sort(sortFn), subsections: sortSubsection(sections.sections[cur].subsections) }));
  }, {}) };
  return sorted;
};
var safeIncludeConditionalArg = function safeIncludeConditionalArg2(row, args, globals) {
  try {
    return dist.includeConditionalArg(row, args, globals);
  } catch (err) {
    once.warn(err.message);
    return false;
  }
};
var ArgsTable$1 = function ArgsTable2(props) {
  if ("error" in props) {
    return React__default__default.createElement(EmptyBlock, null, props.error, "\xA0", React__default__default.createElement(Link, { href: "http://storybook.js.org/docs/", target: "_blank", withArrow: true }, "Read the docs"));
  }
  var updateArgs = props.updateArgs, resetArgs = props.resetArgs, compact = props.compact, inAddonPanel = props.inAddonPanel, initialExpandedArgs = props.initialExpandedArgs, _props$sort = props.sort, sort = _props$sort === void 0 ? "none" : _props$sort;
  var isLoading = "isLoading" in props;
  var _ref194 = "rows" in props ? props : argsTableLoadingData, rows = _ref194.rows, args = _ref194.args, globals = _ref194.globals;
  var groups = groupRows(pickBy_1(rows, function(row) {
    var _a;
    return !((_a = row === null || row === void 0 ? void 0 : row.table) === null || _a === void 0 ? void 0 : _a.disable) && safeIncludeConditionalArg(row, args || {}, globals || {});
  }), sort);
  if (groups.ungrouped.length === 0 && Object.entries(groups.sections).length === 0 && Object.entries(groups.ungroupedSubsections).length === 0) {
    return React__default__default.createElement(EmptyBlock, null, "No inputs found for this component.\xA0", React__default__default.createElement(Link, { href: "http://storybook.js.org/docs/", target: "_blank", withArrow: true }, "Read the docs"));
  }
  var colSpan = 1;
  if (updateArgs)
    colSpan += 1;
  if (!compact)
    colSpan += 2;
  var expandable = Object.keys(groups.sections).length > 0;
  var common = { updateArgs, compact, inAddonPanel, initialExpandedArgs };
  return React__default__default.createElement(ResetWrapper, null, React__default__default.createElement(TableWrapper, Object.assign({ "aria-hidden": isLoading }, { compact, inAddonPanel, isLoading }, { className: "docblock-argstable" }), React__default__default.createElement("thead", { className: "docblock-argstable-head" }, React__default__default.createElement("tr", null, React__default__default.createElement("th", null, React__default__default.createElement("span", null, "Name")), compact ? null : React__default__default.createElement("th", null, React__default__default.createElement("span", null, "Description")), compact ? null : React__default__default.createElement("th", null, React__default__default.createElement("span", null, "Default")), updateArgs ? React__default__default.createElement("th", null, React__default__default.createElement(ControlHeadingWrapper, null, "Control", " ", !isLoading && resetArgs && React__default__default.createElement(ResetButton, { onClick: function onClick() {
    return resetArgs();
  }, title: "Reset controls" }, React__default__default.createElement(Icons, { icon: "undo", "aria-hidden": true })))) : null)), React__default__default.createElement("tbody", { className: "docblock-argstable-body" }, groups.ungrouped.map(function(row) {
    return React__default__default.createElement(ArgRow, Object.assign({ key: row.key, row, arg: args && args[row.key] }, common));
  }), Object.entries(groups.ungroupedSubsections).map(function(_ref195) {
    var _ref196 = _slicedToArray$4(_ref195, 2), subcategory = _ref196[0], subsection = _ref196[1];
    return React__default__default.createElement(SectionRow, { key: subcategory, label: subcategory, level: "subsection", colSpan }, subsection.map(function(row) {
      return React__default__default.createElement(ArgRow, Object.assign({ key: row.key, row, arg: args && args[row.key], expandable }, common));
    }));
  }), Object.entries(groups.sections).map(function(_ref197) {
    var _ref198 = _slicedToArray$4(_ref197, 2), category = _ref198[0], section = _ref198[1];
    return React__default__default.createElement(SectionRow, { key: category, label: category, level: "section", colSpan }, section.ungrouped.map(function(row) {
      return React__default__default.createElement(ArgRow, Object.assign({ key: row.key, row, arg: args && args[row.key] }, common));
    }), Object.entries(section.subsections).map(function(_ref199) {
      var _ref200 = _slicedToArray$4(_ref199, 2), subcategory = _ref200[0], subsection = _ref200[1];
      return React__default__default.createElement(SectionRow, { key: subcategory, label: subcategory, level: "subsection", colSpan }, subsection.map(function(row) {
        return React__default__default.createElement(ArgRow, Object.assign({ key: row.key, row, arg: args && args[row.key], expandable }, common));
      }));
    }));
  }))));
};
var TabbedArgsTable = function TabbedArgsTable2(_a) {
  var tabs = _a.tabs, props = __rest(_a, ["tabs"]);
  var entries = Object.entries(tabs);
  if (entries.length === 1) {
    return React__default__default.createElement(ArgsTable$1, Object.assign({}, entries[0][1], props));
  }
  return React__default__default.createElement(TabsState, null, entries.map(function(entry) {
    var _entry = _slicedToArray$4(entry, 2), label = _entry[0], table2 = _entry[1];
    var id = "prop_table_div_".concat(label);
    return React__default__default.createElement("div", { key: id, id, title: label }, function(_ref201) {
      var active = _ref201.active;
      return active ? React__default__default.createElement(ArgsTable$1, Object.assign({ key: "prop_table_".concat(label) }, table2, props)) : null;
    });
  }));
};
styled.div(function(_ref202) {
  var theme2 = _ref202.theme;
  return { background: theme2.background.warning, color: theme2.color.darkest, padding: "10px 15px", lineHeight: "20px", boxShadow: "".concat(theme2.appBorderColor, " 0 -1px 0 0 inset") };
});
var Label = styled.div(function(_ref203) {
  var theme2 = _ref203.theme;
  return { marginRight: 30, fontSize: "".concat(theme2.typography.size.s1, "px"), color: theme2.base === "light" ? curriedTransparentize$1(0.4, theme2.color.defaultText) : curriedTransparentize$1(0.6, theme2.color.defaultText) };
});
var Sample = styled.div({ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" });
var TypeSpecimen = styled.div({ display: "flex", flexDirection: "row", alignItems: "baseline", "&:not(:last-child)": { marginBottom: "1rem" } });
var Wrapper$9 = styled.div(withReset, function(_ref204) {
  var theme2 = _ref204.theme;
  return Object.assign(Object.assign({}, getBlockBackgroundStyle(theme2)), { margin: "25px 0 40px", padding: "30px 20px" });
});
var Typeset = function Typeset2(_a) {
  var fontFamily = _a.fontFamily, fontSizes = _a.fontSizes, fontWeight = _a.fontWeight, sampleText = _a.sampleText, props = __rest(_a, ["fontFamily", "fontSizes", "fontWeight", "sampleText"]);
  return React__default__default.createElement(Wrapper$9, Object.assign({}, props, { className: "docblock-typeset" }), fontSizes.map(function(size) {
    return React__default__default.createElement(TypeSpecimen, { key: size }, React__default__default.createElement(Label, null, size), React__default__default.createElement(Sample, { style: { fontFamily, fontSize: size, fontWeight, lineHeight: 1.2 } }, sampleText || "Was he a beast if music could move him so?"));
  }));
};
var ItemTitle = styled.div(function(_ref205) {
  var theme2 = _ref205.theme;
  return { fontWeight: theme2.typography.weight.bold, color: theme2.color.defaultText };
});
var ItemSubtitle = styled.div(function(_ref206) {
  var theme2 = _ref206.theme;
  return { color: theme2.base === "light" ? curriedTransparentize$1(0.2, theme2.color.defaultText) : curriedTransparentize$1(0.6, theme2.color.defaultText) };
});
var ItemDescription = styled.div({ flex: "0 0 30%", lineHeight: "20px", marginTop: 5 });
var SwatchLabel = styled.div(function(_ref207) {
  var theme2 = _ref207.theme;
  return { flex: 1, textAlign: "center", fontFamily: theme2.typography.fonts.mono, fontSize: theme2.typography.size.s1, lineHeight: 1, overflow: "hidden", color: theme2.base === "light" ? curriedTransparentize$1(0.4, theme2.color.defaultText) : curriedTransparentize$1(0.6, theme2.color.defaultText), "> div": { display: "inline-block", overflow: "hidden", maxWidth: "100%", textOverflow: "ellipsis" }, span: { display: "block", marginTop: 2 } };
});
var SwatchLabels = styled.div({ display: "flex", flexDirection: "row" });
var Swatch = styled.div(function(_ref208) {
  var background2 = _ref208.background;
  return { position: "relative", flex: 1, "&::before": { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: background2, content: '""' } };
});
var SwatchColors = styled.div(function(_ref209) {
  var theme2 = _ref209.theme;
  return Object.assign(Object.assign({}, getBlockBackgroundStyle(theme2)), { display: "flex", flexDirection: "row", height: 50, marginBottom: 5, overflow: "hidden", backgroundColor: "white", backgroundImage: "repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)", backgroundClip: "padding-box" });
});
var SwatchSpecimen = styled.div({ display: "flex", flexDirection: "column", flex: 1, position: "relative", marginBottom: 30 });
var Swatches = styled.div({ flex: 1, display: "flex", flexDirection: "row" });
var Item$1 = styled.div({ display: "flex", alignItems: "flex-start" });
var ListName = styled.div({ flex: "0 0 30%" });
var ListSwatches = styled.div({ flex: 1 });
var ListHeading = styled.div(function(_ref210) {
  var theme2 = _ref210.theme;
  return { display: "flex", flexDirection: "row", alignItems: "center", paddingBottom: 20, fontWeight: theme2.typography.weight.bold, color: theme2.base === "light" ? curriedTransparentize$1(0.4, theme2.color.defaultText) : curriedTransparentize$1(0.6, theme2.color.defaultText) };
});
var List$1 = styled.div(function(_ref211) {
  var theme2 = _ref211.theme;
  return { fontSize: theme2.typography.size.s2, lineHeight: "20px", display: "flex", flexDirection: "column" };
});
function renderSwatch(color2, index2) {
  return React__default__default.createElement(Swatch, { key: "".concat(color2, "-").concat(index2), title: color2, background: color2 });
}
function renderSwatchLabel(color2, index2, colorDescription) {
  return React__default__default.createElement(SwatchLabel, { key: "".concat(color2, "-").concat(index2), title: color2 }, React__default__default.createElement("div", null, color2, colorDescription && React__default__default.createElement("span", null, colorDescription)));
}
function renderSwatchSpecimen(colors) {
  if (Array.isArray(colors)) {
    return React__default__default.createElement(SwatchSpecimen, null, React__default__default.createElement(SwatchColors, null, colors.map(function(color2, index2) {
      return renderSwatch(color2, index2);
    })), React__default__default.createElement(SwatchLabels, null, colors.map(function(color2, index2) {
      return renderSwatchLabel(color2, index2);
    })));
  }
  return React__default__default.createElement(SwatchSpecimen, null, React__default__default.createElement(SwatchColors, null, Object.values(colors).map(function(color2, index2) {
    return renderSwatch(color2, index2);
  })), React__default__default.createElement(SwatchLabels, null, Object.keys(colors).map(function(color2, index2) {
    return renderSwatchLabel(color2, index2, colors[color2]);
  })));
}
var ColorItem = function ColorItem2(_ref212) {
  var title = _ref212.title, subtitle = _ref212.subtitle, colors = _ref212.colors;
  return React__default__default.createElement(Item$1, null, React__default__default.createElement(ItemDescription, null, React__default__default.createElement(ItemTitle, null, title), React__default__default.createElement(ItemSubtitle, null, subtitle)), React__default__default.createElement(Swatches, null, renderSwatchSpecimen(colors)));
};
var ColorPalette = function ColorPalette2(_a) {
  var children = _a.children, props = __rest(_a, ["children"]);
  return React__default__default.createElement(ResetWrapper, null, React__default__default.createElement(List$1, Object.assign({}, props, { className: "docblock-colorpalette" }), React__default__default.createElement(ListHeading, null, React__default__default.createElement(ListName, null, "Name"), React__default__default.createElement(ListSwatches, null, "Swatches")), children));
};
var ItemLabel = styled.div(function(_ref213) {
  var theme2 = _ref213.theme;
  return { fontFamily: theme2.typography.fonts.base, fontSize: theme2.typography.size.s2, color: theme2.color.defaultText, marginLeft: 10, lineHeight: 1.2 };
});
var ItemSpecimen = styled.div(function(_ref214) {
  var theme2 = _ref214.theme;
  return Object.assign(Object.assign({}, getBlockBackgroundStyle(theme2)), { overflow: "hidden", height: 40, width: 40, display: "flex", alignItems: "center", justifyContent: "center", flex: "none", "> img, > svg": { width: 20, height: 20 } });
});
var Item = styled.div({ display: "inline-flex", flexDirection: "row", alignItems: "center", flex: "0 1 calc(20% - 10px)", minWidth: 120, margin: "0px 10px 30px 0" });
var List = styled.div({ display: "flex", flexFlow: "row wrap" });
var IconItem = function IconItem2(_ref215) {
  var name = _ref215.name, children = _ref215.children;
  return React__default__default.createElement(Item, null, React__default__default.createElement(ItemSpecimen, null, children), React__default__default.createElement(ItemLabel, null, name));
};
var IconGallery = function IconGallery2(_a) {
  var children = _a.children, props = __rest(_a, ["children"]);
  return React__default__default.createElement(ResetWrapper, null, React__default__default.createElement(List, Object.assign({}, props, { className: "docblock-icongallery" }), children));
};
var components = components$1;
var resetComponents = {};
Object.keys(components$1).forEach(function(key) {
  resetComponents[key] = forwardRef(function(props, ref) {
    return createElement(key, Object.assign(Object.assign({}, props), { ref }));
  });
});
var anchorBlockIdFromId = function anchorBlockIdFromId2(storyId) {
  return "anchor--".concat(storyId);
};
var Anchor = function Anchor2(_ref) {
  var storyId = _ref.storyId, children = _ref.children;
  return /* @__PURE__ */ React__default__default.createElement("div", {
    id: anchorBlockIdFromId(storyId)
  }, children);
};
if (window_1$2.window && window_1$2.window.__DOCS_CONTEXT__ === void 0) {
  window_1$2.window.__DOCS_CONTEXT__ = /* @__PURE__ */ createContext({});
  window_1$2.window.__DOCS_CONTEXT__.displayName = "DocsContext";
}
var DocsContext = window_1$2.window ? window_1$2.window.__DOCS_CONTEXT__ : /* @__PURE__ */ createContext({});
var CURRENT_SELECTION = ".";
var PRIMARY_STORY = "^";
var titleCase = function titleCase2(str2) {
  return str2.split("-").map(function(part) {
    return part.charAt(0).toUpperCase() + part.slice(1);
  }).join("");
};
var getComponentName = function getComponentName2(component) {
  if (!component) {
    return void 0;
  }
  if (typeof component === "string") {
    if (component.includes("-")) {
      return titleCase(component);
    }
    return component;
  }
  if (component.__docgenInfo && component.__docgenInfo.displayName) {
    return component.__docgenInfo.displayName;
  }
  return component.name;
};
function scrollToElement(element) {
  var block = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "start";
  element.scrollIntoView({
    behavior: "smooth",
    block,
    inline: "nearest"
  });
}
function _defineProperty$4(obj, key, value2) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value2,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value2;
  }
  return obj;
}
function ownKeys(object2, enumerableOnly) {
  var keys2 = Object.keys(object2);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object2);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
      });
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty$4(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties$2(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$2(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
var isFunction = function isFunction2(obj) {
  return typeof obj === "function";
};
var MDXContext = /* @__PURE__ */ React__default__default.createContext({});
var useMDXComponents = function useMDXComponents2(components2) {
  var contextComponents = React__default__default.useContext(MDXContext);
  var allComponents = contextComponents;
  if (components2) {
    allComponents = isFunction(components2) ? components2(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components2);
  }
  return allComponents;
};
var MDXProvider = function MDXProvider2(props) {
  var allComponents = useMDXComponents(props.components);
  return /* @__PURE__ */ React__default__default.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};
var DEFAULTS = {
  inlineCode: "code",
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /* @__PURE__ */ React__default__default.createElement(React__default__default.Fragment, {}, children);
  }
};
var MDXCreateElement = /* @__PURE__ */ React__default__default.forwardRef(function(props, ref) {
  var propComponents = props.components, mdxType = props.mdxType, originalType = props.originalType, parentName = props.parentName, etc = _objectWithoutProperties$2(props, ["components", "mdxType", "originalType", "parentName"]);
  var components2 = useMDXComponents(propComponents);
  var type = mdxType;
  var Component2 = components2["".concat(parentName, ".").concat(type)] || components2[type] || DEFAULTS[type] || originalType;
  if (propComponents) {
    return /* @__PURE__ */ React__default__default.createElement(Component2, _objectSpread2(_objectSpread2({
      ref
    }, etc), {}, {
      components: propComponents
    }));
  }
  return /* @__PURE__ */ React__default__default.createElement(Component2, _objectSpread2({
    ref
  }, etc));
});
MDXCreateElement.displayName = "MDXCreateElement";
function _defineProperty$3(obj, key, value2) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value2, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value2;
  }
  return obj;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value2 = info.value;
  } catch (error2) {
    reject(error2);
    return;
  }
  if (info.done) {
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
function _slicedToArray$3(arr, i2) {
  return _arrayWithHoles$3(arr) || _iterableToArrayLimit$3(arr, i2) || _unsupportedIterableToArray$4(arr, i2) || _nonIterableRest$3();
}
function _nonIterableRest$3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$4(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray$4(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$4(o2, minLen);
}
function _arrayLikeToArray$4(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function _iterableToArrayLimit$3(arr, i2) {
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
      if (i2 && _arr.length === i2)
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
function useStory(storyId, context) {
  var stories = useStories([storyId], context);
  return stories && stories[0];
}
function useStories(storyIds, context) {
  var initialStoriesById = context.componentStories().reduce(function(acc, story) {
    acc[story.id] = story;
    return acc;
  }, {});
  var _useState = useState(initialStoriesById), _useState2 = _slicedToArray$3(_useState, 2), storiesById = _useState2[0], setStories = _useState2[1];
  useEffect(function() {
    Promise.all(storyIds.map(/* @__PURE__ */ function() {
      var _ref = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(function _callee(storyId) {
        var story;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return context.loadStory(storyId);
              case 2:
                story = _context.sent;
                setStories(function(current) {
                  return current[storyId] === story ? current : Object.assign({}, current, _defineProperty$3({}, storyId, story));
                });
              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return function(_x) {
        return _ref.apply(this, arguments);
      };
    }()));
  });
  return storyIds.map(function(storyId) {
    return storiesById[storyId];
  });
}
function _slicedToArray$2(arr, i2) {
  return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i2) || _unsupportedIterableToArray$3(arr, i2) || _nonIterableRest$2();
}
function _nonIterableRest$2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$3(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray$3(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$3(o2, minLen);
}
function _arrayLikeToArray$3(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function _iterableToArrayLimit$2(arr, i2) {
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
      if (i2 && _arr.length === i2)
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
var storyBlockIdFromId = function storyBlockIdFromId2(storyId) {
  return "story--".concat(storyId);
};
var lookupStoryId = function lookupStoryId2(storyName, _ref) {
  var mdxStoryNameToKey = _ref.mdxStoryNameToKey, mdxComponentAnnotations = _ref.mdxComponentAnnotations;
  return dist.toId(mdxComponentAnnotations.id || mdxComponentAnnotations.title, dist.storyNameFromExport(mdxStoryNameToKey[storyName]));
};
var getStoryId = function getStoryId2(props, context) {
  var _ref2 = props, id = _ref2.id;
  var _ref3 = props, name = _ref3.name;
  var inputId = id === CURRENT_SELECTION ? context.id : id;
  return inputId || lookupStoryId(name, context);
};
var getStoryProps = function getStoryProps2(_ref4, story, context, onStoryFnCalled) {
  var height = _ref4.height, inline = _ref4.inline;
  var storyName = story.name, parameters = story.parameters;
  var _parameters$docs = parameters.docs, docs = _parameters$docs === void 0 ? {} : _parameters$docs;
  if (docs.disable) {
    return null;
  }
  var _docs$inlineStories = docs.inlineStories, inlineStories = _docs$inlineStories === void 0 ? false : _docs$inlineStories, _docs$iframeHeight = docs.iframeHeight, iframeHeight = _docs$iframeHeight === void 0 ? 100 : _docs$iframeHeight, prepareForInline = docs.prepareForInline;
  var storyIsInline = typeof inline === "boolean" ? inline : inlineStories;
  if (storyIsInline && !prepareForInline) {
    throw new Error("Story '".concat(storyName, "' is set to render inline, but no 'prepareForInline' function is implemented in your docs configuration!"));
  }
  var boundStoryFn = function boundStoryFn2() {
    var storyResult = story.unboundStoryFn(Object.assign({}, context.getStoryContext(story), {
      loaded: {},
      abortSignal: void 0,
      canvasElement: void 0
    }));
    onStoryFnCalled();
    return storyResult;
  };
  return Object.assign({
    inline: storyIsInline,
    id: story.id,
    height: height || (storyIsInline ? void 0 : iframeHeight),
    title: storyName
  }, storyIsInline && {
    parameters,
    storyFn: function storyFn() {
      return prepareForInline(boundStoryFn, context.getStoryContext(story));
    }
  });
};
function makeGate() {
  var open;
  var gate = new Promise(function(r2) {
    open = r2;
  });
  return [gate, open];
}
var Story = function Story3(props) {
  var context = useContext(DocsContext);
  var channel = addons.getChannel();
  var storyRef = useRef();
  var storyId = getStoryId(props, context);
  var story = useStory(storyId, context);
  var _useState = useState(true), _useState2 = _slicedToArray$2(_useState, 2), showLoader = _useState2[0], setShowLoader = _useState2[1];
  useEffect(function() {
    var cleanup;
    if (story && storyRef.current) {
      var element = storyRef.current;
      cleanup = context.renderStoryToElement(story, element);
      setShowLoader(false);
    }
    return function() {
      return cleanup && cleanup();
    };
  }, [story]);
  var _makeGate = makeGate(), _makeGate2 = _slicedToArray$2(_makeGate, 2), storyFnRan = _makeGate2[0], onStoryFnRan = _makeGate2[1];
  var _makeGate3 = makeGate(), _makeGate4 = _slicedToArray$2(_makeGate3, 2), rendered = _makeGate4[0], onRendered = _makeGate4[1];
  useEffect(onRendered);
  if (!story) {
    return /* @__PURE__ */ jsx(StorySkeleton, {});
  }
  var storyProps = getStoryProps(props, story, context, onStoryFnRan);
  if (!storyProps) {
    return null;
  }
  if (storyProps.inline) {
    var _global$FEATURES;
    if (!(window_1$2 !== null && window_1$2 !== void 0 && (_global$FEATURES = window_1$2.FEATURES) !== null && _global$FEATURES !== void 0 && _global$FEATURES.modernInlineRender)) {
      Promise.all([storyFnRan, rendered]).then(function() {
        channel.emit(Events.STORY_RENDERED, storyId);
      });
    } else {
      var htmlContents = "<span></span>";
      var height = storyProps.height;
      return /* @__PURE__ */ jsx("div", {
        id: storyBlockIdFromId(story.id),
        children: /* @__PURE__ */ jsxs(MDXProvider, {
          components: resetComponents,
          children: [height ? /* @__PURE__ */ jsx("style", {
            children: "#story--".concat(story.id, " { min-height: ").concat(height, "; transform: translateZ(0); overflow: auto }")
          }) : null, showLoader && /* @__PURE__ */ jsx(StorySkeleton, {}), /* @__PURE__ */ jsx("div", {
            ref: storyRef,
            "data-name": story.name,
            dangerouslySetInnerHTML: {
              __html: htmlContents
            }
          })]
        })
      });
    }
  }
  return /* @__PURE__ */ jsx("div", {
    id: storyBlockIdFromId(story.id),
    children: /* @__PURE__ */ jsx(MDXProvider, {
      components: resetComponents,
      children: /* @__PURE__ */ jsx(Story$1, {
        ...storyProps
      })
    })
  });
};
Story.defaultProps = {
  children: null,
  name: null
};
function _defineProperty$2(obj, key, value2) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value2,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value2;
  }
  return obj;
}
function _slicedToArray$1(arr, i2) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i2) || _unsupportedIterableToArray$2(arr, i2) || _nonIterableRest$1();
}
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$2(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray$2(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$2(o2, minLen);
}
function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function _iterableToArrayLimit$1(arr, i2) {
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
      if (i2 && _arr.length === i2)
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
var getContext = function getContext2(storyId, context) {
  var story = context.storyById(storyId);
  if (!story) {
    throw new Error("Unknown story: ".concat(storyId));
  }
  return context.getStoryContext(story);
};
var useArgs = function useArgs2(storyId, context) {
  var channel = addons.getChannel();
  var storyContext = getContext(storyId, context);
  var _useState = useState(storyContext.args), _useState2 = _slicedToArray$1(_useState, 2), args = _useState2[0], setArgs = _useState2[1];
  useEffect(function() {
    var cb = function cb2(changed) {
      if (changed.storyId === storyId) {
        setArgs(changed.args);
      }
    };
    channel.on(Events.STORY_ARGS_UPDATED, cb);
    return function() {
      return channel.off(Events.STORY_ARGS_UPDATED, cb);
    };
  }, [storyId]);
  var updateArgs = useCallback(function(updatedArgs) {
    return channel.emit(Events.UPDATE_STORY_ARGS, {
      storyId,
      updatedArgs
    });
  }, [storyId]);
  var resetArgs = useCallback(function(argNames) {
    return channel.emit(Events.RESET_STORY_ARGS, {
      storyId,
      argNames
    });
  }, [storyId]);
  return [args, updateArgs, resetArgs];
};
var useGlobals = function useGlobals2(storyId, context) {
  var channel = addons.getChannel();
  var storyContext = getContext(storyId, context);
  var _useState3 = useState(storyContext.globals), _useState4 = _slicedToArray$1(_useState3, 2), globals = _useState4[0], setGlobals = _useState4[1];
  useEffect(function() {
    var cb = function cb2(changed) {
      setGlobals(changed.globals);
    };
    channel.on(Events.GLOBALS_UPDATED, cb);
    return function() {
      return channel.off(Events.GLOBALS_UPDATED, cb);
    };
  }, []);
  return [globals];
};
var extractComponentArgTypes = function extractComponentArgTypes2(component, _ref, include, exclude) {
  var id = _ref.id, storyById = _ref.storyById;
  var _storyById = storyById(id), parameters = _storyById.parameters;
  var _ref2 = parameters.docs || {}, extractArgTypes = _ref2.extractArgTypes;
  if (!extractArgTypes) {
    throw new Error(ArgsTableError.ARGS_UNSUPPORTED);
  }
  var argTypes = extractArgTypes(component);
  argTypes = filterArgTypes(argTypes, include, exclude);
  return argTypes;
};
var isShortcut = function isShortcut2(value2) {
  return value2 && [CURRENT_SELECTION, PRIMARY_STORY].includes(value2);
};
var getComponent = function getComponent2() {
  var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _ref3 = arguments.length > 1 ? arguments[1] : void 0, id = _ref3.id, storyById = _ref3.storyById;
  var _ref4 = props, of = _ref4.of;
  var _ref5 = props, story = _ref5.story;
  var _storyById2 = storyById(id), component = _storyById2.component;
  if (isShortcut(of) || isShortcut(story)) {
    return component || null;
  }
  if (!of) {
    throw new Error(ArgsTableError.NO_COMPONENT);
  }
  return of;
};
var addComponentTabs = function addComponentTabs2(tabs, components2, context, include, exclude, sort) {
  return Object.assign({}, tabs, mapValues_1(components2, function(comp) {
    return {
      rows: extractComponentArgTypes(comp, context, include, exclude),
      sort
    };
  }));
};
var StoryTable = function StoryTable2(props) {
  var context = useContext(DocsContext);
  var currentId = context.id, componentStories = context.componentStories;
  var storyName = props.story, component = props.component, subcomponents = props.subcomponents, showComponent = props.showComponent, include = props.include, exclude = props.exclude, sort = props.sort;
  try {
    var storyId;
    switch (storyName) {
      case CURRENT_SELECTION: {
        storyId = currentId;
        break;
      }
      case PRIMARY_STORY: {
        var primaryStory = componentStories()[0];
        storyId = primaryStory.id;
        break;
      }
      default: {
        storyId = lookupStoryId(storyName, context);
      }
    }
    var story = useStory(storyId, context);
    var _useArgs = useArgs(storyId, context), _useArgs2 = _slicedToArray$1(_useArgs, 3), args = _useArgs2[0], updateArgs = _useArgs2[1], resetArgs = _useArgs2[2];
    var _useGlobals = useGlobals(storyId, context), _useGlobals2 = _slicedToArray$1(_useGlobals, 1), globals = _useGlobals2[0];
    if (!story)
      return /* @__PURE__ */ jsx(ArgsTable$1, {
        isLoading: true,
        updateArgs,
        resetArgs
      });
    var argTypes = filterArgTypes(story.argTypes, include, exclude);
    var mainLabel = getComponentName(component) || "Story";
    var tabs = _defineProperty$2({}, mainLabel, {
      rows: argTypes,
      args,
      globals,
      updateArgs,
      resetArgs
    });
    var storyHasArgsWithControls = argTypes && Object.values(argTypes).find(function(v2) {
      return !!(v2 !== null && v2 !== void 0 && v2.control);
    });
    if (!storyHasArgsWithControls) {
      updateArgs = null;
      resetArgs = null;
      tabs = {};
    }
    if (component && (!storyHasArgsWithControls || showComponent)) {
      tabs = addComponentTabs(tabs, _defineProperty$2({}, mainLabel, component), context, include, exclude);
    }
    if (subcomponents) {
      if (Array.isArray(subcomponents)) {
        throw new Error("Unexpected subcomponents array. Expected an object whose keys are tab labels and whose values are components.");
      }
      tabs = addComponentTabs(tabs, subcomponents, context, include, exclude);
    }
    return /* @__PURE__ */ jsx(TabbedArgsTable, {
      tabs,
      sort
    });
  } catch (err) {
    return /* @__PURE__ */ jsx(ArgsTable$1, {
      error: err.message
    });
  }
};
var ComponentsTable = function ComponentsTable2(props) {
  var context = useContext(DocsContext);
  var components2 = props.components, include = props.include, exclude = props.exclude, sort = props.sort;
  var tabs = addComponentTabs({}, components2, context, include, exclude);
  return /* @__PURE__ */ jsx(TabbedArgsTable, {
    tabs,
    sort
  });
};
var ArgsTable = function ArgsTable3(props) {
  var context = useContext(DocsContext);
  var id = context.id, storyById = context.storyById;
  var _storyById3 = storyById(id), controls = _storyById3.parameters.controls, subcomponents = _storyById3.subcomponents;
  var _ref6 = props, include = _ref6.include, exclude = _ref6.exclude, components2 = _ref6.components, sortProp = _ref6.sort;
  var _ref7 = props, storyName = _ref7.story;
  var sort = sortProp || (controls === null || controls === void 0 ? void 0 : controls.sort);
  var main2 = getComponent(props, context);
  if (storyName) {
    return /* @__PURE__ */ jsx(StoryTable, {
      ...props,
      component: main2,
      subcomponents,
      sort
    });
  }
  if (!components2 && !subcomponents) {
    var mainProps;
    try {
      mainProps = {
        rows: extractComponentArgTypes(main2, context, include, exclude)
      };
    } catch (err) {
      mainProps = {
        error: err.message
      };
    }
    return /* @__PURE__ */ jsx(ArgsTable$1, {
      ...mainProps,
      sort
    });
  }
  if (components2) {
    return /* @__PURE__ */ jsx(ComponentsTable, {
      ...props,
      components: components2,
      sort
    });
  }
  var mainLabel = getComponentName(main2);
  return /* @__PURE__ */ jsx(ComponentsTable, {
    ...props,
    components: Object.assign(_defineProperty$2({}, mainLabel, main2), subcomponents),
    sort
  });
};
ArgsTable.defaultProps = {
  of: CURRENT_SELECTION
};
var ADDON_ID = "storybook/docs";
var SNIPPET_RENDERED = "".concat(ADDON_ID, "/snippet-rendered");
var SourceType;
(function(SourceType2) {
  SourceType2["AUTO"] = "auto";
  SourceType2["CODE"] = "code";
  SourceType2["DYNAMIC"] = "dynamic";
})(SourceType || (SourceType = {}));
function _defineProperty$1(obj, key, value2) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value2,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value2;
  }
  return obj;
}
function _slicedToArray(arr, i2) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray$1(arr, i2) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray$1(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$1(o2, minLen);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i2) {
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
      if (i2 && _arr.length === i2)
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
var SourceContext = /* @__PURE__ */ createContext({
  sources: {}
});
var SourceContainer = function SourceContainer2(_ref) {
  var children = _ref.children;
  var _useState = useState({}), _useState2 = _slicedToArray(_useState, 2), sources = _useState2[0], setSources = _useState2[1];
  var channel = addons.getChannel();
  useEffect(function() {
    var handleSnippetRendered = function handleSnippetRendered2(id, newSource) {
      var format = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      if (sources[id] && sources[id].code === newSource) {
        return;
      }
      setSources(function(current) {
        var newSources = Object.assign({}, current, _defineProperty$1({}, id, {
          code: newSource,
          format
        }));
        if (!fastDeepEqual(current, newSources)) {
          return newSources;
        }
        return current;
      });
    };
    channel.on(SNIPPET_RENDERED, handleSnippetRendered);
    return function() {
      return channel.off(SNIPPET_RENDERED, handleSnippetRendered);
    };
  }, []);
  return /* @__PURE__ */ jsx(SourceContext.Provider, {
    value: {
      sources
    },
    children
  });
};
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o2, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function extractSource(location, lines) {
  var start2 = location.startBody, end2 = location.endBody;
  if (start2.line === end2.line && lines[start2.line - 1] !== void 0) {
    return lines[start2.line - 1].substring(start2.col, end2.col);
  }
  var startLine = lines[start2.line - 1];
  var endLine = lines[end2.line - 1];
  if (startLine === void 0 || endLine === void 0) {
    return null;
  }
  return [startLine.substring(start2.col)].concat(_toConsumableArray(lines.slice(start2.line, end2.line - 1)), [endLine.substring(0, end2.col)]).join("\n");
}
var storyIdToSanitizedStoryName = function storyIdToSanitizedStoryName2(id) {
  return id.replace(/^.*?--/, "");
};
var extract = function extract2(targetId, _ref) {
  var source = _ref.source, locationsMap = _ref.locationsMap;
  if (!locationsMap) {
    return source;
  }
  var sanitizedStoryName = storyIdToSanitizedStoryName(targetId);
  var location = locationsMap[sanitizedStoryName];
  if (!location) {
    return source;
  }
  var lines = source.split("\n");
  return extractSource(location, lines);
};
var enhanceSource = function enhanceSource2(story) {
  var _docs$source;
  var id = story.id, parameters = story.parameters;
  var storySource = parameters.storySource, _parameters$docs = parameters.docs, docs = _parameters$docs === void 0 ? {} : _parameters$docs;
  var transformSource = docs.transformSource;
  if (!(storySource !== null && storySource !== void 0 && storySource.source) || (_docs$source = docs.source) !== null && _docs$source !== void 0 && _docs$source.code) {
    return null;
  }
  var input = extract(id, storySource);
  var code2 = transformSource ? transformSource(input, story) : input;
  return {
    docs: combineParameters(docs, {
      source: {
        code: code2
      }
    })
  };
};
var SourceState;
(function(SourceState2) {
  SourceState2["OPEN"] = "open";
  SourceState2["CLOSED"] = "closed";
  SourceState2["NONE"] = "none";
})(SourceState || (SourceState = {}));
var getSourceState = function getSourceState2(stories) {
  var states = stories.map(function(story) {
    var _story$parameters$doc, _story$parameters$doc2;
    return (_story$parameters$doc = story.parameters.docs) === null || _story$parameters$doc === void 0 ? void 0 : (_story$parameters$doc2 = _story$parameters$doc.source) === null || _story$parameters$doc2 === void 0 ? void 0 : _story$parameters$doc2.state;
  }).filter(Boolean);
  if (states.length === 0)
    return SourceState.CLOSED;
  return states[0];
};
var getStorySource = function getStorySource2(storyId, sourceContext) {
  var sources = sourceContext.sources;
  return (sources === null || sources === void 0 ? void 0 : sources[storyId]) || {
    code: "",
    format: false
  };
};
var getSnippet = function getSnippet2(snippet, story) {
  var _parameters$docs, _parameters$docs$sour, _parameters$docs2, _parameters$docs2$sou, _enhanced$docs, _enhanced$docs$source;
  if (!story) {
    return snippet;
  }
  var parameters = story.parameters;
  var isArgsStory = parameters.__isArgsStory;
  var type = ((_parameters$docs = parameters.docs) === null || _parameters$docs === void 0 ? void 0 : (_parameters$docs$sour = _parameters$docs.source) === null || _parameters$docs$sour === void 0 ? void 0 : _parameters$docs$sour.type) || SourceType.AUTO;
  var userCode = (_parameters$docs2 = parameters.docs) === null || _parameters$docs2 === void 0 ? void 0 : (_parameters$docs2$sou = _parameters$docs2.source) === null || _parameters$docs2$sou === void 0 ? void 0 : _parameters$docs2$sou.code;
  if (userCode !== void 0) {
    return userCode;
  }
  if (type === SourceType.DYNAMIC) {
    var _parameters$docs3, _parameters$docs3$tra;
    return ((_parameters$docs3 = parameters.docs) === null || _parameters$docs3 === void 0 ? void 0 : (_parameters$docs3$tra = _parameters$docs3.transformSource) === null || _parameters$docs3$tra === void 0 ? void 0 : _parameters$docs3$tra.call(_parameters$docs3, snippet, story)) || snippet;
  }
  if (type === SourceType.AUTO && snippet && isArgsStory) {
    var _parameters$docs4, _parameters$docs4$tra;
    return ((_parameters$docs4 = parameters.docs) === null || _parameters$docs4 === void 0 ? void 0 : (_parameters$docs4$tra = _parameters$docs4.transformSource) === null || _parameters$docs4$tra === void 0 ? void 0 : _parameters$docs4$tra.call(_parameters$docs4, snippet, story)) || snippet;
  }
  var enhanced = enhanceSource(story) || parameters;
  return (enhanced === null || enhanced === void 0 ? void 0 : (_enhanced$docs = enhanced.docs) === null || _enhanced$docs === void 0 ? void 0 : (_enhanced$docs$source = _enhanced$docs.source) === null || _enhanced$docs$source === void 0 ? void 0 : _enhanced$docs$source.code) || "";
};
var getSourceProps = function getSourceProps2(props, docsContext, sourceContext) {
  var currentId = docsContext.id, storyById = docsContext.storyById;
  var _storyById = storyById(currentId), parameters = _storyById.parameters;
  var codeProps = props;
  var singleProps = props;
  var multiProps = props;
  var source = codeProps.code;
  var format = codeProps.format;
  var targetIds = multiProps.ids || [singleProps.id || currentId];
  var storyIds = targetIds.map(function(targetId) {
    return targetId === CURRENT_SELECTION ? currentId : targetId;
  });
  var stories = useStories(storyIds, docsContext);
  if (!stories.every(Boolean)) {
    return {
      error: SourceError.SOURCE_UNAVAILABLE,
      state: SourceState.NONE
    };
  }
  if (!source) {
    var _getStorySource = getStorySource(storyIds[0], sourceContext);
    format = _getStorySource.format;
    source = storyIds.map(function(storyId, idx) {
      var _getStorySource2 = getStorySource(storyId, sourceContext), storySource = _getStorySource2.code;
      var storyObj = stories[idx];
      return getSnippet(storySource, storyObj);
    }).join("\n\n");
  }
  var state = getSourceState(stories);
  var _parameters$docs5 = parameters.docs, docsParameters = _parameters$docs5 === void 0 ? {} : _parameters$docs5;
  var _docsParameters$sourc = docsParameters.source, sourceParameters = _docsParameters$sourc === void 0 ? {} : _docsParameters$sourc;
  var _sourceParameters$lan = sourceParameters.language, docsLanguage = _sourceParameters$lan === void 0 ? null : _sourceParameters$lan;
  return source ? {
    code: source,
    state,
    format,
    language: props.language || docsLanguage || "jsx",
    dark: props.dark || false
  } : {
    error: SourceError.SOURCE_UNAVAILABLE,
    state
  };
};
var Source = function Source3(props) {
  var sourceContext = useContext(SourceContext);
  var docsContext = useContext(DocsContext);
  var sourceProps = getSourceProps(props, docsContext, sourceContext);
  return /* @__PURE__ */ jsx(Source$1, {
    ...sourceProps
  });
};
var _excluded$1 = ["withSource", "mdxSource", "children"];
function _objectWithoutProperties$1(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var getPreviewProps = function getPreviewProps2(_ref, docsContext, sourceContext) {
  var withSource = _ref.withSource, mdxSource = _ref.mdxSource, children = _ref.children, props = _objectWithoutProperties$1(_ref, _excluded$1);
  var mdxComponentAnnotations = docsContext.mdxComponentAnnotations, mdxStoryNameToKey = docsContext.mdxStoryNameToKey;
  var sourceState = withSource;
  var isLoading = false;
  if (sourceState === SourceState.NONE) {
    return {
      isLoading,
      previewProps: props
    };
  }
  if (mdxSource) {
    return {
      isLoading,
      previewProps: Object.assign({}, props, {
        withSource: getSourceProps({
          code: decodeURI(mdxSource)
        }, docsContext, sourceContext)
      })
    };
  }
  var childArray = Array.isArray(children) ? children : [children];
  var storyChildren = childArray.filter(function(c2) {
    return c2.props && (c2.props.id || c2.props.name);
  });
  var targetIds = storyChildren.map(function(s2) {
    return s2.props.id || dist.toId(mdxComponentAnnotations.id || mdxComponentAnnotations.title, dist.storyNameFromExport(mdxStoryNameToKey[s2.props.name]));
  });
  var sourceProps = getSourceProps({
    ids: targetIds
  }, docsContext, sourceContext);
  if (!sourceState)
    sourceState = sourceProps.state;
  var storyIds = targetIds.map(function(targetId) {
    return targetId === CURRENT_SELECTION ? docsContext.id : targetId;
  });
  var stories = useStories(storyIds, docsContext);
  isLoading = stories.some(function(s2) {
    return !s2;
  });
  return {
    isLoading,
    previewProps: Object.assign({}, props, {
      withSource: sourceProps,
      isExpanded: sourceState === SourceState.OPEN
    })
  };
};
var Canvas = function Canvas2(props) {
  var docsContext = useContext(DocsContext);
  var sourceContext = useContext(SourceContext);
  var _getPreviewProps = getPreviewProps(props, docsContext, sourceContext), isLoading = _getPreviewProps.isLoading, previewProps = _getPreviewProps.previewProps;
  var children = props.children;
  if (isLoading)
    return /* @__PURE__ */ jsx(PreviewSkeleton, {});
  return /* @__PURE__ */ jsx(MDXProvider, {
    components: resetComponents,
    children: /* @__PURE__ */ jsx(Preview$1, {
      ...previewProps,
      children
    })
  });
};
var DescriptionType;
(function(DescriptionType2) {
  DescriptionType2["INFO"] = "info";
  DescriptionType2["NOTES"] = "notes";
  DescriptionType2["DOCGEN"] = "docgen";
  DescriptionType2["LEGACY_5_2"] = "legacy-5.2";
  DescriptionType2["AUTO"] = "auto";
})(DescriptionType || (DescriptionType = {}));
var getNotes = function getNotes2(notes) {
  return notes && (typeof notes === "string" ? notes : str(notes.markdown) || str(notes.text));
};
var getInfo = function getInfo2(info) {
  return info && (typeof info === "string" ? info : str(info.text));
};
var noDescription = function noDescription2(component) {
  return null;
};
var getDescriptionProps = function getDescriptionProps2(_ref, _ref2) {
  var of = _ref.of, type = _ref.type, markdown = _ref.markdown, children = _ref.children;
  var id = _ref2.id, storyById = _ref2.storyById;
  var _storyById = storyById(id), component = _storyById.component, parameters = _storyById.parameters;
  if (children || markdown) {
    return {
      markdown: children || markdown
    };
  }
  var notes = parameters.notes, info = parameters.info, docs = parameters.docs;
  var _ref3 = docs || {}, _ref3$extractComponen = _ref3.extractComponentDescription, extractComponentDescription = _ref3$extractComponen === void 0 ? noDescription : _ref3$extractComponen, description = _ref3.description;
  var target = of === CURRENT_SELECTION ? component : of;
  var componentDescriptionParameter = description === null || description === void 0 ? void 0 : description.component;
  if (componentDescriptionParameter) {
    return {
      markdown: componentDescriptionParameter
    };
  }
  switch (type) {
    case DescriptionType.INFO:
      return {
        markdown: getInfo(info)
      };
    case DescriptionType.NOTES:
      return {
        markdown: getNotes(notes)
      };
    case DescriptionType.LEGACY_5_2:
      return {
        markdown: "\n".concat(getNotes(notes) || getInfo(info) || "", "\n\n").concat(extractComponentDescription(target) || "", "\n").trim()
      };
    case DescriptionType.DOCGEN:
    case DescriptionType.AUTO:
    default:
      return {
        markdown: extractComponentDescription(target, Object.assign({
          component
        }, parameters))
      };
  }
};
var DescriptionContainer = function DescriptionContainer2(props) {
  var context = useContext(DocsContext);
  var _getDescriptionProps = getDescriptionProps(props, context), markdown = _getDescriptionProps.markdown;
  return markdown ? /* @__PURE__ */ jsx(Description$1, {
    markdown
  }) : null;
};
DescriptionContainer.defaultProps = {
  of: "."
};
var STORY_KIND_PATH_SEPARATOR = /\s*\/\s*/;
var extractTitle = function extractTitle2(_ref) {
  var title = _ref.title;
  var groups = title.trim().split(STORY_KIND_PATH_SEPARATOR);
  return groups && groups[groups.length - 1] || title;
};
var Title = function Title2(_ref2) {
  var children = _ref2.children;
  var context = useContext(DocsContext);
  var text = children;
  if (!text) {
    text = extractTitle(context);
  }
  return text ? /* @__PURE__ */ jsx(Title$2, {
    className: "sbdocs-title",
    children: text
  }) : null;
};
var Subtitle = function Subtitle2(_ref) {
  var children = _ref.children;
  var _useContext = useContext(DocsContext), id = _useContext.id, storyById = _useContext.storyById;
  var _storyById = storyById(id), parameters = _storyById.parameters;
  var text = children;
  if (!text) {
    text = parameters === null || parameters === void 0 ? void 0 : parameters.componentSubtitle;
  }
  return text ? /* @__PURE__ */ jsx(Subtitle$1, {
    className: "sbdocs-subtitle",
    children: text
  }) : null;
};
var _excluded = ["children"], _excluded2 = ["className", "children"], _excluded3 = ["href", "target", "children"], _excluded4 = ["as", "id", "children"], _excluded5 = ["as", "id", "children"];
function _defineProperty(obj, key, value2) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value2, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value2;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
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
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var document$3 = window_1$2.document;
var assertIsFn = function assertIsFn2(val) {
  if (typeof val !== "function") {
    throw new Error("Expected story function, got: ".concat(val));
  }
  return val;
};
var AddContext = function AddContext2(props) {
  var children = props.children, rest = _objectWithoutProperties(props, _excluded);
  var parentContext = React__default__default.useContext(DocsContext);
  return /* @__PURE__ */ React__default__default.createElement(DocsContext.Provider, {
    value: Object.assign({}, parentContext, rest)
  }, children);
};
var CodeOrSourceMdx = function CodeOrSourceMdx2(_ref) {
  var className = _ref.className, children = _ref.children, rest = _objectWithoutProperties(_ref, _excluded2);
  if (typeof className !== "string" && (typeof children !== "string" || !children.match(/[\n\r]/g))) {
    return /* @__PURE__ */ React__default__default.createElement(Code, null, children);
  }
  var language = className && className.split("-");
  return /* @__PURE__ */ React__default__default.createElement(Source$1, _extends({
    language: language && language[1] || "plaintext",
    format: false,
    code: children
  }, rest));
};
function navigate(url) {
  addons.getChannel().emit(NAVIGATE_URL, url);
}
var A = components.a;
var AnchorInPage = function AnchorInPage2(_ref2) {
  var hash2 = _ref2.hash, children = _ref2.children;
  return /* @__PURE__ */ React__default__default.createElement(A, {
    href: hash2,
    target: "_self",
    onClick: function onClick(event) {
      var id = hash2.substring(1);
      var element = document$3.getElementById(id);
      if (element) {
        navigate(hash2);
      }
    }
  }, children);
};
var AnchorMdx = function AnchorMdx2(props) {
  var href = props.href, target = props.target, children = props.children, rest = _objectWithoutProperties(props, _excluded3);
  if (href) {
    if (href.startsWith("#")) {
      return /* @__PURE__ */ React__default__default.createElement(AnchorInPage, {
        hash: href
      }, children);
    }
    if (target !== "_blank" && !href.startsWith("https://")) {
      return /* @__PURE__ */ React__default__default.createElement(A, _extends({
        href,
        onClick: function onClick(event) {
          event.preventDefault();
          navigate(event.currentTarget.getAttribute("href"));
        },
        target
      }, rest), children);
    }
  }
  return /* @__PURE__ */ React__default__default.createElement(A, props);
};
var SUPPORTED_MDX_HEADERS = ["h1", "h2", "h3", "h4", "h5", "h6"];
var OcticonHeaders = SUPPORTED_MDX_HEADERS.reduce(function(acc, headerType) {
  return Object.assign({}, acc, _defineProperty({}, headerType, styled(components[headerType])({
    "& svg": {
      visibility: "hidden"
    },
    "&:hover svg": {
      visibility: "visible"
    }
  })));
}, {});
var OcticonAnchor = styled.a(function() {
  return {
    float: "left",
    paddingRight: "4px",
    marginLeft: "-20px",
    color: "inherit"
  };
});
var HeaderWithOcticonAnchor = function HeaderWithOcticonAnchor2(_ref3) {
  var as = _ref3.as, id = _ref3.id, children = _ref3.children, rest = _objectWithoutProperties(_ref3, _excluded4);
  var OcticonHeader = OcticonHeaders[as];
  var hash2 = "#".concat(id);
  return /* @__PURE__ */ React__default__default.createElement(OcticonHeader, _extends({
    id
  }, rest), /* @__PURE__ */ React__default__default.createElement(OcticonAnchor, {
    "aria-hidden": "true",
    href: hash2,
    tabIndex: -1,
    target: "_self",
    onClick: function onClick(event) {
      var element = document$3.getElementById(id);
      if (element) {
        navigate(hash2);
      }
    }
  }, /* @__PURE__ */ React__default__default.createElement("svg", {
    viewBox: "0 0 16 16",
    version: "1.1",
    width: "16",
    height: "16",
    "aria-hidden": "true",
    fill: "currentColor"
  }, /* @__PURE__ */ React__default__default.createElement("path", {
    fillRule: "evenodd",
    d: "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
  }))), children);
};
var HeaderMdx = function HeaderMdx2(props) {
  var as = props.as, id = props.id, children = props.children, rest = _objectWithoutProperties(props, _excluded5);
  if (id) {
    return /* @__PURE__ */ React__default__default.createElement(HeaderWithOcticonAnchor, _extends({
      as,
      id
    }, rest), children);
  }
  var Header = components[as];
  return /* @__PURE__ */ React__default__default.createElement(Header, props);
};
var HeadersMdx = SUPPORTED_MDX_HEADERS.reduce(function(acc, headerType) {
  return Object.assign({}, acc, _defineProperty({}, headerType, function(props) {
    return /* @__PURE__ */ React__default__default.createElement(HeaderMdx, _extends({
      as: headerType
    }, props));
  }));
}, {});
var Subheading = function Subheading2(_ref) {
  var children = _ref.children, disableAnchor = _ref.disableAnchor;
  if (disableAnchor || typeof children !== "string") {
    return /* @__PURE__ */ React__default__default.createElement(H3, null, children);
  }
  var tagID = children.toLowerCase().replace(/[^a-z0-9]/gi, "-");
  return /* @__PURE__ */ React__default__default.createElement(HeaderMdx, {
    as: "h3",
    id: tagID
  }, children);
};
var _templateObject$3;
function _taggedTemplateLiteral$3(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var warnStoryDescription = browser(function() {
}, dedent$2(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral$3(["\n    Deprecated parameter: docs.storyDescription => docs.description.story\n      \n    https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#docs-description-parameter\n  "]))));
var DocsStory = function DocsStory2(_ref) {
  var id = _ref.id, name = _ref.name, _ref$expanded = _ref.expanded, expanded = _ref$expanded === void 0 ? true : _ref$expanded, _ref$withToolbar = _ref.withToolbar, withToolbar = _ref$withToolbar === void 0 ? false : _ref$withToolbar, _ref$parameters = _ref.parameters, parameters = _ref$parameters === void 0 ? {} : _ref$parameters;
  var description;
  var docs = parameters.docs;
  if (expanded && docs) {
    var _docs$description;
    description = (_docs$description = docs.description) === null || _docs$description === void 0 ? void 0 : _docs$description.story;
    if (!description) {
      description = docs.storyDescription;
      if (description)
        warnStoryDescription();
    }
  }
  var subheading = expanded && name;
  return /* @__PURE__ */ React__default__default.createElement(Anchor, {
    storyId: id
  }, subheading && /* @__PURE__ */ React__default__default.createElement(Subheading, null, subheading), description && /* @__PURE__ */ React__default__default.createElement(DescriptionContainer, {
    markdown: description
  }), /* @__PURE__ */ React__default__default.createElement(Canvas, {
    withToolbar
  }, /* @__PURE__ */ React__default__default.createElement(Story, {
    id,
    parameters
  })));
};
var Primary = function Primary2(_ref) {
  var name = _ref.name;
  var _useContext = useContext(DocsContext), getComponentStories = _useContext.componentStories;
  var componentStories = getComponentStories();
  var story;
  if (componentStories) {
    story = name ? componentStories.find(function(s2) {
      return s2.name === name;
    }) : componentStories[0];
  }
  return story ? /* @__PURE__ */ jsx(DocsStory, {
    ...story,
    expanded: false,
    withToolbar: true
  }) : null;
};
var Heading = function Heading2(_ref) {
  var children = _ref.children, disableAnchor = _ref.disableAnchor;
  if (disableAnchor || typeof children !== "string") {
    return /* @__PURE__ */ React__default__default.createElement(H2, null, children);
  }
  var tagID = children.toLowerCase().replace(/[^a-z0-9]/gi, "-");
  return /* @__PURE__ */ React__default__default.createElement(HeaderMdx, {
    as: "h2",
    id: tagID
  }, children);
};
var Stories = function Stories2(_ref) {
  var title = _ref.title, _ref$includePrimary = _ref.includePrimary, includePrimary = _ref$includePrimary === void 0 ? false : _ref$includePrimary;
  var _useContext = useContext(DocsContext), componentStories = _useContext.componentStories;
  var stories = componentStories();
  stories = stories.filter(function(story) {
    var _story$parameters, _story$parameters$doc;
    return !((_story$parameters = story.parameters) !== null && _story$parameters !== void 0 && (_story$parameters$doc = _story$parameters.docs) !== null && _story$parameters$doc !== void 0 && _story$parameters$doc.disable);
  });
  if (!includePrimary)
    stories = stories.slice(1);
  if (!stories || stories.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxs(Fragment$1, {
    children: [/* @__PURE__ */ jsx(Heading, {
      children: title
    }), stories.map(function(story) {
      return story && /* @__PURE__ */ jsx(DocsStory, {
        ...story,
        expanded: true
      }, story.id);
    })]
  });
};
Stories.defaultProps = {
  title: "Stories"
};
var DocsPage = function DocsPage2() {
  return /* @__PURE__ */ React__default__default.createElement(React__default__default.Fragment, null, /* @__PURE__ */ React__default__default.createElement(Title, null), /* @__PURE__ */ React__default__default.createElement(Subtitle, null), /* @__PURE__ */ React__default__default.createElement(DescriptionContainer, null), /* @__PURE__ */ React__default__default.createElement(Primary, null), /* @__PURE__ */ React__default__default.createElement(ArgsTable, {
    story: PRIMARY_STORY
  }), /* @__PURE__ */ React__default__default.createElement(Stories, null));
};
var _templateObject$2;
function _taggedTemplateLiteral$2(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
var document$2 = window_1$2.document, globalWindow = window_1$2.window;
var defaultComponents = Object.assign({}, components, {
  code: CodeOrSourceMdx,
  a: AnchorMdx
}, HeadersMdx);
var warnOptionsTheme = browser(function() {
}, dedent$2(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral$2(["\n    Deprecated parameter: options.theme => docs.theme\n\n    https://github.com/storybookjs/storybook/blob/next/addons/docs/docs/theming.md#storybook-theming\n"]))));
var DocsContainer = function DocsContainer2(_ref) {
  var context = _ref.context, children = _ref.children;
  var storyId = context.id, storyById = context.storyById;
  var _storyById = storyById(storyId), _storyById$parameters = _storyById.parameters, _storyById$parameters2 = _storyById$parameters.options, options = _storyById$parameters2 === void 0 ? {} : _storyById$parameters2, _storyById$parameters3 = _storyById$parameters.docs, docs = _storyById$parameters3 === void 0 ? {} : _storyById$parameters3;
  var themeVars = docs.theme;
  if (!themeVars && options.theme) {
    warnOptionsTheme();
    themeVars = options.theme;
  }
  var theme2 = ensure(themeVars);
  var allComponents = Object.assign({}, defaultComponents, docs.components);
  useEffect(function() {
    var url;
    try {
      url = new URL(globalWindow.parent.location);
    } catch (err) {
      return;
    }
    if (url.hash) {
      var element = document$2.getElementById(url.hash.substring(1));
      if (element) {
        setTimeout(function() {
          scrollToElement(element);
        }, 200);
      }
    } else {
      var _element = document$2.getElementById(anchorBlockIdFromId(storyId)) || document$2.getElementById(storyBlockIdFromId(storyId));
      if (_element) {
        var allStories = _element.parentElement.querySelectorAll('[id|="anchor-"]');
        var scrollTarget = _element;
        if (allStories && allStories[0] === _element) {
          scrollTarget = document$2.getElementById("docs-root");
        }
        setTimeout(function() {
          scrollToElement(scrollTarget, "start");
        }, 200);
      }
    }
  }, [storyId]);
  return /* @__PURE__ */ jsx(DocsContext.Provider, {
    value: context,
    children: /* @__PURE__ */ jsx(SourceContainer, {
      children: /* @__PURE__ */ jsx(ThemeProvider, {
        theme: theme2,
        children: /* @__PURE__ */ jsx(MDXProvider, {
          components: allComponents,
          children: /* @__PURE__ */ jsx(DocsWrapper, {
            className: "sbdocs sbdocs-wrapper",
            children: /* @__PURE__ */ jsx(DocsContent, {
              className: "sbdocs sbdocs-content",
              children
            })
          })
        })
      })
    })
  });
};
var document$1 = window_1$2.document;
function getFirstStoryId(docsContext) {
  var stories = docsContext.componentStories();
  return stories.length > 0 ? stories[0].id : null;
}
function renderAnchor() {
  var context = useContext(DocsContext);
  var anchorId = getFirstStoryId(context) || context.id;
  return /* @__PURE__ */ jsx(Anchor, {
    storyId: anchorId
  });
}
var Meta = function Meta2() {
  var params = new URL(document$1.location).searchParams;
  var isDocs = params.get("viewMode") === "docs";
  return isDocs ? renderAnchor() : null;
};
var _templateObject$1;
function _taggedTemplateLiteral$1(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var Preview = browser(function(props) {
  return /* @__PURE__ */ React__default__default.createElement(Canvas, props);
}, dedent$2(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral$1(["\n    Preview doc block has been renamed to Canvas.\n\n    https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#previewprops-renamed\n  "]))));
var _templateObject;
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var Props = browser(function(props) {
  return /* @__PURE__ */ React__default__default.createElement(ArgsTable, props);
}, dedent$2(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    Props doc block has been renamed to ArgsTable.\n\n    https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#previewprops-renamed\n  "]))));
Props.defaultProps = {
  of: CURRENT_SELECTION
};
var Wrapper = function Wrapper2(_ref) {
  var children = _ref.children;
  return /* @__PURE__ */ React__default__default.createElement("div", {
    style: {
      fontFamily: "sans-serif"
    }
  }, children);
};
var index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ColorPalette,
  ColorItem,
  IconGallery,
  IconItem,
  Typeset,
  anchorBlockIdFromId,
  Anchor,
  extractComponentArgTypes,
  getComponent,
  StoryTable,
  ComponentsTable,
  ArgsTable,
  get SourceState() {
    return SourceState;
  },
  Canvas,
  get DescriptionType() {
    return DescriptionType;
  },
  getDescriptionProps,
  Description: DescriptionContainer,
  DocsContext,
  DocsPage,
  DocsContainer,
  DocsStory,
  Heading,
  Meta,
  Preview,
  Primary,
  Props,
  getSourceProps,
  Source,
  SourceContext,
  SourceContainer,
  Stories,
  storyBlockIdFromId,
  lookupStoryId,
  getStoryId,
  getStoryProps,
  Story,
  Subheading,
  Subtitle,
  extractTitle,
  Title,
  Wrapper,
  CURRENT_SELECTION,
  PRIMARY_STORY,
  assertIsFn,
  AddContext,
  CodeOrSourceMdx,
  AnchorMdx,
  HeaderMdx,
  HeadersMdx
}, Symbol.toStringTag, { value: "Module" }));
export { ActionBar as A, getControlId as B, _root as C, isObject_1 as D, isSymbol_1 as E, Form as F, Global as G, index as H, Icons as I, ScrollArea as S, TooltipNote as T, WithTooltip as W, __awaiter as _, __rest as a, darkenColor as b, commonjsGlobal as c, dedent as d, _objectWithoutPropertiesLoose$3 as e, _extends$2 as f, getDefaultExportFromCjs as g, auto as h, start as i, bottom as j, keyframes as k, lightenColor as l, modifierPhases as m, left as n, basePlacements as o, placements as p, end as q, right as r, styled as s, top as t, popper as u, variationPlacements as v, window_1 as w, viewport as x, reference as y, clippingParents as z };
//# sourceMappingURL=index2.js.map