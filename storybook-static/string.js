var str = function str2(obj) {
  if (!obj) {
    return "";
  }
  if (typeof obj === "string") {
    return obj;
  }
  throw new Error("Description: expected string, got: ".concat(JSON.stringify(obj)));
};
export { str as s };
//# sourceMappingURL=string.js.map
