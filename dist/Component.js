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
define(["require", "exports", "./Evented", "underscore", "jquery"], function (require, exports, Evented, _, $) {
    "use strict";
    return (function (_super) {
        __extends(Component, _super);
        function Component(conf) {
            var _this = _super.call(this) || this;
            _this.config = {
                id: null
            };
            _this._isRendered = false;
            _this._children = [];
            _this.setConfig(conf);
            if (!_this.config.id) {
                _this.config.id = _.uniqueId("component");
            }
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
        Component.prototype.addTo = function (c) {
            this._parent = c;
            this._parent.add(this);
            return this;
        };
        Component.prototype.add = function (nc) {
            var i = _.findIndex(this._children, function (c) { return c.config.id == nc.config.id; });
            nc._parent = this;
            if (i == -1) {
                this._children.push(nc);
            }
            else {
                this._children[i] = nc;
            }
            return this;
        };
        Component.prototype.getContainer = function () {
            return this._el;
        };
        Component.prototype.render = function () {
            if (this._parent) {
                this._el = this.renderer();
                $(this._parent.getContainer()).append(this._el);
                _.each(this._children, function (c) {
                    c.render();
                });
            }
            return this;
        };
        Component.prototype.renderer = function () {
            var fragment = document.createDocumentFragment();
            this._el = fragment;
            return fragment;
        };
        return Component;
    }(Evented));
});
