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
define(["require", "exports", "../../Framework/Core/Component", "../../Framework/Core/View", "jquery", "lodash"], function (require, exports, Component_1, View_1, $, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BarView = (function (_super) {
        __extends(BarView, _super);
        function BarView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BarView.prototype.renderer = function () {
            var ns = this.namespace, tag = this.tag, _ns, _tag;
            if (ns == "svg") {
                _ns = "http://www.w3.org/2000/svg";
            }
            else {
                _ns = "http://www.w3.org/1999/xhtml";
            }
            _tag = tag == undefined ? "div" : tag;
            var el = document.createElementNS(_ns, _tag);
            $(el).append("<p class='band' >SmartTraffic</p>");
            return $(el);
        };
        return BarView;
    }(View_1.View));
    var Bar = (function (_super) {
        __extends(Bar, _super);
        function Bar(id, c) {
            var _this = _super.call(this, id == undefined ? _.uniqueId("Bar") : id, c) || this;
            _this.config = {
                class: ["navbar"],
                style: {
                    position: "absolute",
                    left: "0px",
                    right: "0px",
                    top: "0px",
                    bottom: "NaN",
                    width: "100%",
                    height: "3rem",
                    display: "inhert"
                }
            };
            _this.view = new BarView();
            _this.view.render();
            _this.view.attr({ id: _this.id }).style(_this.config.style).addClass(_this.config.class);
            return _this;
        }
        return Bar;
    }(Component_1.Component));
    exports.Bar = Bar;
});
