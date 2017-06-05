define(["require", "exports", "underscore", "jquery", "text!./DropBox.html"], function (require, exports, _, $, template) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ChartComponent = (function () {
        function ChartComponent() {
            this.ds = [{ name: "Null" }];
            this.defalut = "Please Select";
        }
        ChartComponent.prototype.setData = function (d) {
            if (d) {
                this.ds = d;
            }
            return this;
        };
        ChartComponent.prototype.getData = function () {
            return this.ds;
        };
        ChartComponent.prototype.onChange = function (fn) {
            this.changeFn = fn;
        };
        ChartComponent.prototype.onClick = function (e) {
            var target = e.target;
            $(this.el).find("button").find(".value").text($(target).text());
        };
        ChartComponent.prototype.toElement = function () {
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
        ChartComponent.prototype.initHook = function () {
            var _this = this;
            $(this.el).find("li").click(function (e) {
                _this.onClick(e);
            });
        };
        return ChartComponent;
    }());
    exports.ChartComponent = ChartComponent;
});
