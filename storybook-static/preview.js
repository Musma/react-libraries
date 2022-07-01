import { w as window_1, h as addons, S as STORY_CHANGED, k as SELECT_STORY } from "./iframe.js";
import { m as makeDecorator } from "./make-decorator.js";
var PARAM_KEY = "links";
var document = window_1.document, HTMLElement = window_1.HTMLElement;
var navigate = function navigate2(params) {
  return addons.getChannel().emit(SELECT_STORY, params);
};
var linksListener = function linksListener2(e) {
  var target = e.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }
  var element = target;
  var _element$dataset = element.dataset, kind = _element$dataset.sbKind, story = _element$dataset.sbStory;
  if (kind || story) {
    e.preventDefault();
    navigate({
      kind,
      story
    });
  }
};
var hasListener = false;
var on = function on2() {
  if (!hasListener) {
    hasListener = true;
    document.addEventListener("click", linksListener);
  }
};
var off = function off2() {
  if (hasListener) {
    hasListener = false;
    document.removeEventListener("click", linksListener);
  }
};
var withLinks = makeDecorator({
  name: "withLinks",
  parameterName: PARAM_KEY,
  wrapper: function wrapper(getStory, context) {
    on();
    addons.getChannel().once(STORY_CHANGED, off);
    return getStory(context);
  }
});
if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}
var decorators = [withLinks];
export { decorators };
//# sourceMappingURL=preview.js.map
