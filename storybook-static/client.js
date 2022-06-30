import ReactDOM from "react-dom";
function _mergeNamespaces(n, m2) {
  m2.forEach(function(e) {
    e && typeof e !== "string" && !Array.isArray(e) && Object.keys(e).forEach(function(k) {
      if (k !== "default" && !(k in n)) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  });
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var client$1 = {};
var hydrateRoot;
var createRoot;
var m = ReactDOM;
{
  createRoot = client$1.createRoot = m.createRoot;
  hydrateRoot = client$1.hydrateRoot = m.hydrateRoot;
}
var client = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": client$1,
  get createRoot() {
    return createRoot;
  },
  get hydrateRoot() {
    return hydrateRoot;
  }
}, [client$1]);
export { client as c };
//# sourceMappingURL=client.js.map
