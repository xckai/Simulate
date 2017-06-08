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
define(["require", "exports", "lodash", "./View", "./Controller"], function (require, exports, _, View_1, Controller_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // import {BallLoader} from "./Animation"
    // import {BaseElement} from "./BaseElement"
    var Component = (function (_super) {
        __extends(Component, _super);
        function Component(id, conf) {
            var _this = _super.call(this) || this;
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
            _this.isRendered = false;
            _this.children = [];
            if (id != undefined) {
                _this.id = id;
            }
            else {
                _this.id = _.uniqueId("component");
            }
            _this.setConfig(conf);
            _this.view = new View_1.View("section");
            _this.view.render();
            _this.view.attr({ id: _this.id }).style(_this.config.style).addClass(_this.config.class);
            return _this;
        }
        Component.prototype.setConfig = function (c) {
            this.config = _.assign(this.config, c);
            return this;
        };
        Component.prototype.addTo = function (c, listen) {
            this.parent = c;
            this.parent.add(this, listen);
            return this;
        };
        Component.prototype.add = function (nc, listen) {
            var i = _.findIndex(this.children, function (c) { return c.id == nc.id; });
            nc.parent = this;
            if (i == -1) {
                this.children.push(nc);
            }
            else {
                this.children[i] = nc;
            }
            nc.view.getNode$().appendTo(this.view.getNode$());
            return this;
        };
        return Component;
    }(Controller_1.Controller));
    exports.Component = Component;
});
