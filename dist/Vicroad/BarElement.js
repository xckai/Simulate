var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "jquery", "../Framework/BaseElement", "text!./Bar.html", "../Framework/BindingObj"], function (require, exports, $, BaseElement_1, template, BindingObj_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BarElement = (function (_super) {
        __extends(BarElement, _super);
        function BarElement() {
            var _this = _super.call(this, "section") || this;
            _this.bindingData = new BindingObj_1.BindingObj();
            return _this;
        }
        BarElement.prototype.initElement = function () {
            var _this = this;
            this.bindingData.bindElement(this.$el.find(".options-text"), "optionTitle");
            this.$el.find(".options").children("li").on("click", function (e) {
                _this.bindingData.setData({
                    optionTitle: $(e.target).text()
                });
            });
        };
        BarElement.prototype.toHtml = function () {
            this.$el.append(template);
            this.initElement();
        };
        BarElement.prototype.setData = function (d) {
            this.bindingData.setData(d);
        };
        return BarElement;
    }(BaseElement_1.BaseElement));
    exports.BarElement = BarElement;
});
