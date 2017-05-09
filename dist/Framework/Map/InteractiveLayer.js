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
define(["require", "exports", "leaflet", "d3", "./SmartLayer", "./LeafletShapes", "../Element/DropBox"], function (require, exports, L, d3, SmartLayer_1, LeafletShapes_1, DropBox_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var InteractiveLayer = (function (_super) {
        __extends(InteractiveLayer, _super);
        function InteractiveLayer(conf) {
            var _this = _super.call(this, conf) || this;
            _this.layer = L.layerGroup([]);
            return _this;
        }
        InteractiveLayer.prototype.addLines = function () {
            var l = new LeafletShapes_1.Line([{ lat: 31.2, lng: 121 }, { lat: 31.5, lng: 121.5 }], { weight: 3 });
            var f = d3.select(document.createDocumentFragment());
            var ul = f.append("xhtml:ul").classed("dropdown-menu", true);
            ul.append("xhtml:li").text("haha");
            var dropbox = new DropBox_1.DropBox();
            dropbox.setData([{ value: "+10%" }, { value: "+5%" }, { value: "-5%" }, { value: "+10%" }]);
            l.bindPopup(dropbox.toElement());
            this.layer.addLayer(l);
            return this;
        };
        InteractiveLayer.prototype.initLine = function (l) {
            l.on("click", function (m) {
            });
        };
        InteractiveLayer.prototype.adjustLineValue = function () {
        };
        InteractiveLayer.prototype.initPolygon = function (latlngs, options) {
            if (!this.polygon) {
                this.polygon = new LeafletShapes_1.Polygon(latlngs, options);
                this.layer.addLayer(this.polygon);
            }
            return this;
        };
        InteractiveLayer.prototype.setPolygonColor = function (c) {
            if (this.polygon) {
                this.polygon.setStyle({ fillColor: c });
            }
        };
        return InteractiveLayer;
    }(SmartLayer_1.SmartLayer));
    exports.InteractiveLayer = InteractiveLayer;
});
