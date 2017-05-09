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
define(["require", "exports", "../Evented", "underscore", "jquery", "text!./DropBox.html"], function (require, exports, Evented_1, _, $, template) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DropBox = (function (_super) {
        __extends(DropBox, _super);
        function DropBox() {
            var _this = _super.call(this) || this;
            _this.ds = [{ name: "Null" }];
            _this.defalut = "Please Select";
            return _this;
        }
        DropBox.prototype.setData = function (d) {
            if (d) {
                this.ds = d;
            }
            return this;
        };
        DropBox.prototype.getData = function () {
            return this.ds;
        };
        DropBox.prototype.onChange = function (fn) {
            this.changeFn = fn;
        };
        DropBox.prototype.onClick = function (e) {
            var target = e.target;
            $(this.el).find("button").find(".value").text($(target).text());
        };
        DropBox.prototype.toElement = function () {
            if (this.el) {
                return this.el;
            }
            else {
                // let f= document.createDocumentFragment()
                var s = _.template(template);
                this.el = $(s({ items: this.ds, defalut: this.defalut }))[0];
                this.initHook();
                return this.el;
            }
        };
        DropBox.prototype.initHook = function () {
            var _this = this;
            $(this.el).find("li").click(function (e) {
                _this.onClick(e);
            });
        };
        return DropBox;
    }(Evented_1.Evented));
    exports.DropBox = DropBox;
});
