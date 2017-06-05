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
define(["require", "exports", "../Component", "lodash", "leaflet", "./SmartLayer", "./MapElement"], function (require, exports, Component_1, _, L, SmartLayer_1, MapElement_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SmartMap = (function (_super) {
        __extends(SmartMap, _super);
        function SmartMap(id, c) {
            var _this = _super.call(this, id == undefined ? _.uniqueId("Map") : id, c) || this;
            //this.setStyle({position:"absolute"})
            _this.layers = [];
            // let mapContainer= $("<div></div>").css({
            //     width:"100%",
            //     height:"100%"
            // }).get(0)
            _this.rootElement = new MapElement_1.MapElement();
            _this.rootElement.attr({ id: _this.id }).style(_this.config.style).addClass(_this.config.class);
            return _this;
            // let $div=$("<div></div>").css({
            //     right:"0px",top:"0px",bottom:"0px",left:"0px",
            //     position:"absolute"
            // })
            // this.$el.append($div)
        }
        SmartMap.prototype.setMapSetting = function (s) {
            this.mapSetting = s;
            var base = new SmartLayer_1.SmartLayer({ id: "base" });
            base.layer = L.tileLayer(this.mapSetting.baseLayer.mapUrl, {
                maxZoom: this.mapSetting.baseLayer.maxZoom
            });
            this.addLayer(base);
        };
        SmartMap.prototype.afterRender = function () {
            var _this = this;
            this.leaflet = L.map(this.rootElement.getMapNode$().get(0), { scrollWheelZoom: true });
            this.leaflet.setView(this.mapSetting.center, this.mapSetting.zoom);
            _.each(this.layers, function (l) { return l.addTo(_this.leaflet); });
        };
        SmartMap.prototype.addLayer = function (l) {
            this.removeLayer(l.id);
            this.listenTo(l);
            this.layers.push(l);
        };
        SmartMap.prototype.getLayer = function (id) {
            var ls = _.find(this.layers, { id: id });
            if (ls != undefined) {
                return ls;
            }
            else {
                return null;
            }
        };
        SmartMap.prototype.removeLayer = function (id) {
            var ls = _.find(this.layers, { id: id });
            _.each(ls, function (o) { return o.layer.remove(); });
            this.layers = _.filter(this.layers, function (o) { return o.id != id; });
            return this;
        };
        return SmartMap;
    }(Component_1.Component));
    exports.SmartMap = SmartMap;
});
