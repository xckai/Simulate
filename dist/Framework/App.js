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
define(["require", "exports", "./Component", "jquery", "lodash"], function (require, exports, Component_1, $, _) {
    "use strict";
    var App = (function (_super) {
        __extends(App, _super);
        function App(id, conf) {
            var _this = _super.call(this, id == undefined ? _.uniqueId("App") : id, conf) || this;
            _this.config = {
                class: [],
                style: {
                    position: "absolute",
                    left: "0px",
                    right: "0px",
                    top: "0px",
                    bottom: "0px",
                    display: "inhert",
                },
                appendElement: "body"
            };
            _this.setConfig(conf);
            $(_this.config.appendElement).append(_this.rootElement.get$Node());
            _this.render();
            return _this;
            //let fragment=document.createDocumentFragment()
        }
        App.prototype.getInstance = function () {
            if (!window._app) {
                window._app = new App();
            }
            return window._app;
        };
        return App;
    }(Component_1.Component));
    return {
        getInstance: function (config) {
            if (!window._app) {
                window._app = new App(config);
            }
            return window._app;
        }
    };
});
