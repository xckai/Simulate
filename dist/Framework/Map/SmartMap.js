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
define(["require", "exports", "../Component", "underscore", "leaflet", "./SmartLayer"], function (require, exports, Component, _, L, SmartLayer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SmartMap = (function (_super) {
        __extends(SmartMap, _super);
        function SmartMap(conf) {
            var _this = _super.call(this, conf) || this;
            _this.setStyle({ height: "100%", width: "100%" });
            _this.layers = [];
            _this.leaflet = L.map(_this.el);
            return _this;
        }
        SmartMap.prototype.setMapSetting = function (s) {
            this.mapSetting = s;
            var base = new SmartLayer_1.SmartLayer({ id: "base" });
            base.layer = L.tileLayer(this.mapSetting.baseLayer.mapUrl, {
                maxZoom: this.mapSetting.baseLayer.maxZoom
            });
            this.addLayer(base);
        };
        SmartMap.prototype.renderer = function () {
            // let mapContainer=$("<div></div>").css(this.style)
            // $(this.el).append(mapContainer)
            // this.leaflet=L.leaflet(mapContainer[0])
            //             this.leaflet.setView([51.505, -0.09], 13);
            return this.el;
        };
        SmartMap.prototype.afterRender = function () {
            var _this = this;
            this.leaflet.setView(this.mapSetting.center, this.mapSetting.zoom);
            _.each(this.layers, function (l) { return l.addTo(_this.leaflet); });
        };
        SmartMap.prototype.addLayer = function (l) {
            this.removeLayer(l.id);
            this.listenTo(l);
            this.layers.push(l);
        };
        SmartMap.prototype.getLayer = function (id) {
            var ls = _.where(this.layers, { id: id });
            if (ls.length > 0) {
                return ls;
            }
            else {
                return null;
            }
        };
        SmartMap.prototype.removeLayer = function (id) {
            var ls = _.where(this.layers, { id: id });
            _.each(ls, function (o) { return o.layer.remove(); });
            this.layers = _.filter(this.layers, function (o) { return o.id != id; });
            return this;
        };
        return SmartMap;
    }(Component));
    exports.SmartMap = SmartMap;
});
