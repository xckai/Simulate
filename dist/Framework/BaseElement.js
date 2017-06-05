define(["require", "exports", "lodash", "jquery"], function (require, exports, _, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BaseElement = (function () {
        function BaseElement(tag, ns) {
            var _ns, _tag;
            if (ns == "svg") {
                _ns = "http://www.w3.org/2000/svg";
            }
            else {
                _ns = "http://www.w3.org/1999/xhtml";
            }
            _tag = tag == undefined ? "div" : tag;
            this.el = document.createElementNS(_ns, _tag);
            this.$el = $(this.el);
        }
        BaseElement.prototype.attr = function (obj) {
            this.$el.attr(obj);
            return this;
        };
        BaseElement.prototype.style = function (obj) {
            this.$el.css(obj);
            return this;
        };
        BaseElement.prototype.addClass = function (cls) {
            var _this = this;
            _.each(cls, function () {
                _this.$el.addClass(cls);
            });
            return this;
        };
        BaseElement.prototype.removeClass = function (cls) {
            var _this = this;
            _.each(cls, function () {
                _this.$el.removeClass(cls);
            });
            return this;
        };
        BaseElement.prototype.get$Node = function () {
            return this.$el;
        };
        BaseElement.prototype.toHtml = function () {
            ///render
        };
        return BaseElement;
    }());
    exports.BaseElement = BaseElement;
});
