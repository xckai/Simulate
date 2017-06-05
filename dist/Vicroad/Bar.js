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
define(["require", "exports", "../Framework/Component", "lodash", "./BarElement"], function (require, exports, Component_1, _, BarElement_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Bar = (function (_super) {
        __extends(Bar, _super);
        function Bar(id, c) {
            var _this = _super.call(this, id == undefined ? _.uniqueId("Bar") : id, c) || this;
            // renderer() {
            //     //let c=document.createDocumentFragment()
            //     this.$el.append(template)
            //     this.initHook()
            //     return this.el
            // }
            _this.config = {
                class: [],
                style: {
                    position: "absolute",
                    left: "0px",
                    right: "0px",
                    top: "0px",
                    bottom: "0px",
                    display: "inhert"
                }
            };
            _this.rootElement = new BarElement_1.BarElement();
            _this.rootElement.attr({ id: _this.id }).style(_this.config.style).addClass(_this.config.class);
            var watch = function (newData) {
                console.log("change", newData);
                _this.fire("optionChange", {
                    id: newData
                });
            };
            _this.rootElement.bindingData.setWatcher(watch);
            return _this;
        }
        Bar.prototype.setData = function (d) {
            this.rootElement.setData(d);
        };
        return Bar;
    }(Component_1.Component));
    exports.Bar = Bar;
});
