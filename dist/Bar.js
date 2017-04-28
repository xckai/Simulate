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
define(["require", "exports", "./Component", "d3"], function (require, exports, Component, d3) {
    "use strict";
    return (function (_super) {
        __extends(Bar, _super);
        function Bar(c) {
            return _super.call(this, c) || this;
        }
        Bar.prototype.renderer = function () {
            var c = document.createDocumentFragment();
            d3.select(c).append("xhtml:nav").classed("navbar navbar-default", true).append("xhtml:div").classed("container-fluid", true);
            return c;
        };
        return Bar;
    }(Component));
});
