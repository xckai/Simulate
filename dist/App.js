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
define(["require", "exports", "./Component", "jquery", "underscore"], function (require, exports, Component, $, _) {
    "use strict";
    var App = (function (_super) {
        __extends(App, _super);
        function App(conf) {
            var _this = _super.call(this, conf) || this;
            _this.config = {
                id: null,
                className: "AppContainer",
                element: "body"
            };
            _this.updateConfig();
            return _this;
        }
        App.prototype.getInstance = function () {
            if (!window._app) {
                window._app = new App();
            }
            return window._app;
        };
        App.prototype.render = function () {
            _.each(this.children, function (c) { return c.render(); });
            $("body").append(this.el);
            _.invoke(this.children, "afterRender");
            return this;
        };
        return App;
    }(Component));
    return {
        getInstance: function (config) {
            if (!window._app) {
                window._app = new App(config);
            }
            return window._app;
        }
    };
});
