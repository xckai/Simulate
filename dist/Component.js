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
define(["require", "exports", "./Evented", "underscore", "jquery", "d3"], function (require, exports, Evented_1, _, $, d3) {
    "use strict";
    return (function (_super) {
        __extends(Component, _super);
        function Component(conf) {
            var _this = _super.call(this) || this;
            _this.config = {
                id: null,
                className: null
            };
            _this.isRendered = false;
            _this.children = [];
            _this.setConfig(conf);
            if (!_this.config.id) {
                _this.config.id = _.uniqueId("component");
            }
            var fragment = document.createDocumentFragment();
            _this.el = d3.select(fragment).append("xhtml:div").node();
            _this.updateConfig();
            return _this;
        }
        Component.prototype.setConfig = function (c) {
            var _this = this;
            if (c) {
                _.each(c, function (v, k) {
                    _this.config[k] = v;
                });
            }
            return this;
        };
        Component.prototype.updateConfig = function () {
            if (this.config.className) {
                d3.select(this.el).classed(this.config.className, true);
            }
            d3.select(this.el).attr("id", this.config.id);
        };
        Component.prototype.setStyle = function (s) {
            var _this = this;
            if (!this.style) {
                this.style = {};
            }
            _.each(s, function (v, k) {
                _this.style[k] = v;
            });
            this.updateStyle();
        };
        Component.prototype.updateStyle = function () {
            if (this.el) {
                $(this.el).css(this.style);
            }
            return this;
        };
        Component.prototype.addTo = function (c) {
            this.parent = c;
            this.parent.add(this);
            return this;
        };
        Component.prototype.add = function (nc) {
            var i = _.findIndex(this.children, function (c) { return c.config.id == nc.config.id; });
            nc.parent = this;
            if (i == -1) {
                this.children.push(nc);
            }
            else {
                this.children[i] = nc;
            }
            return this;
        };
        Component.prototype.getContainer = function () {
            return this.el;
        };
        Component.prototype.render = function () {
            if (this.parent) {
                this.el = this.renderer();
                $(this.parent.getContainer()).append(this.el);
                _.each(this.children, function (c) {
                    c.render();
                });
            }
            return this;
        };
        Component.prototype.afterRender = function () {
        };
        Component.prototype.renderer = function () {
            this.updateStyle();
            return this.el;
        };
        return Component;
    }(Evented_1.Evented));
});
