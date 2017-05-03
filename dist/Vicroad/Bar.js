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
define(["require", "exports", "../Component", "jquery", "text!./Bar.html"], function (require, exports, Component, $, template) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Bar = (function (_super) {
        __extends(Bar, _super);
        function Bar(c) {
            return _super.call(this, c) || this;
        }
        Bar.prototype.renderer = function () {
            //let c=document.createDocumentFragment()
            $(this.el).append(template);
            this.initHook();
            return this.el;
        };
        Bar.prototype.initHook = function () {
            var _this = this;
            $(this.el).find(".options").children("li").on("click", function (e) {
                _this.optionClicked(e);
            });
        };
        Bar.prototype.optionClicked = function (e) {
            var id = $(e.target).attr("value");
            $(this.el).find(".options-text").text($(e.target).text());
            $(this.el).find("#" + id + "-modal").modal("show");
        };
        return Bar;
    }(Component));
    exports.Bar = Bar;
});
