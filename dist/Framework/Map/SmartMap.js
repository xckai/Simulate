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
define(["require", "exports", "../Core/Component", "../Core/Controller", "lodash", "leaflet", "./SmartLayer"], function (require, exports, Component_1, Controller_1, _, L, SmartLayer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SmartMapController = (function (_super) {
        __extends(SmartMapController, _super);
        function SmartMapController(conf) {
            var _this = _super.call(this, conf) || this;
            _this.layers = [];
            return _this;
        }
        SmartMapController.prototype.setMapSetting = function (s) {
            this.mapSetting = s;
            this.leaflet.setView(this.mapSetting.center, this.mapSetting.zoom);
            //_.each(this.layers,(l)=>l.addTo(this.leaflet))
            var base = new SmartLayer_1.SmartLayer({ id: "base" });
            base.layer = L.tileLayer(this.mapSetting.baseLayer.mapUrl, {
                maxZoom: this.mapSetting.baseLayer.maxZoom
            });
            this.addLayer(base);
        };
        SmartMapController.prototype.onAfterRender = function () {
            this.leaflet = L.map(this.view.getNode(), { scrollWheelZoom: true });
        };
        SmartMapController.prototype.addLayer = function (l) {
            this.removeLayer(l.id);
            // this.listenTo(l)
            this.layers.push(l);
            l.addTo(this.leaflet);
        };
        SmartMapController.prototype.getLayer = function (id) {
            var ls = _.find(this.layers, { id: id });
            if (ls != undefined) {
                return ls;
            }
            else {
                return null;
            }
        };
        SmartMapController.prototype.removeLayer = function (id) {
            var ls = _.find(this.layers, { id: id });
            _.each(ls, function (o) { return o.layer.remove(); });
            this.layers = _.filter(this.layers, function (o) { return o.id != id; });
            return this;
        };
        return SmartMapController;
    }(Controller_1.Controller));
    exports.SmartMapController = SmartMapController;
    var SmartMap = (function (_super) {
        __extends(SmartMap, _super);
        function SmartMap(id, conf) {
            var _this = _super.call(this, id == undefined ? _.uniqueId("map") : id, conf) || this;
            _this.map = new SmartMapController();
            _this.map.renderAt(_this.view.getNode$());
            return _this;
        }
        SmartMap.prototype.setMapSetting = function (s) {
            this.map.setMapSetting(s);
        };
        SmartMap.prototype.remove = function () {
            this.view.remove();
        };
        return SmartMap;
    }(Component_1.Component));
    exports.SmartMap = SmartMap;
});
