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
define(["require", "exports", "jquery", "../BaseElement"], function (require, exports, $, BaseElement_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MapElement = (function (_super) {
        __extends(MapElement, _super);
        function MapElement() {
            return _super.call(this, "section") || this;
        }
        MapElement.prototype.toHtml = function () {
            this.mapNode = $("<div></div>").css({
                right: "0px", top: "0px", bottom: "0px", left: "0px",
                position: "absolute"
            }).appendTo(this.$el);
        };
        MapElement.prototype.getMapNode$ = function () {
            return this.mapNode;
        };
        return MapElement;
    }(BaseElement_1.BaseElement));
    exports.MapElement = MapElement;
});
