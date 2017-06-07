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
define(["require", "exports", "../Framework/Core/App", "../Framework/Map/SmartMap", "../Vicroad/setting"], function (require, exports, App_1, SmartMap_1, setting) {
    "use strict";
    var VicroadApp = (function (_super) {
        __extends(VicroadApp, _super);
        function VicroadApp() {
            var _this = _super.call(this, "vicroad") || this;
            _this.router.addRule("road", _this.showRoad.bind(_this));
            _this.router.addRule("area", _this.showArea.bind(_this));
            _this.router.enable();
            return _this;
        }
        VicroadApp.prototype.showRoad = function () {
            if (this.roadMap) {
                return;
            }
            else {
                if (this.areaMap) {
                    this.areaMap.remove();
                    this.areaMap = null;
                }
                this.roadMap = new SmartMap_1.SmartMap();
                this.roadMap.setStyle({ top: "52px" });
                this.add(this.roadMap, true);
                this.roadMap.setMapSetting(setting);
            }
        };
        VicroadApp.prototype.removeRoad = function () {
        };
        VicroadApp.prototype.showArea = function () {
            if (this.areaMap) {
                return;
            }
            else {
                if (this.roadMap) {
                    this.roadMap.remove();
                    this.roadMap = null;
                }
                this.areaMap = new SmartMap_1.SmartMap();
                this.add(this.areaMap, true);
                this.areaMap.setMapSetting(setting);
            }
        };
        return VicroadApp;
    }(App_1.App));
    return {
        getInstance: function () {
            if (!window._app) {
                window._app = new VicroadApp();
            }
            return window._app;
        }
    };
});
