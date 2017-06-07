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
define(["require", "exports", "../../Framework/BaseElement", "text!./LineAdjuster.html"], function (require, exports, BaseElement_1, template) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LineAdjuster = (function (_super) {
        __extends(LineAdjuster, _super);
        function LineAdjuster() {
            var _this = _super.call(this, "section") || this;
            _this.addClass("lineAdjuster");
            return _this;
        }
        LineAdjuster.prototype.toHtml = function () {
            this.$el.html(template);
            return this.$el;
        };
        return LineAdjuster;
    }(BaseElement_1.BaseElement));
    exports.LineAdjuster = LineAdjuster;
});
