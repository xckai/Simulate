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
define(["require", "exports", "underscore", "leaflet", "../Evented"], function (require, exports, _, L, Evented_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SmartLayer = (function (_super) {
        __extends(SmartLayer, _super);
        function SmartLayer(conf) {
            var _this = _super.call(this) || this;
            _this.id = (conf && conf.id != undefined) ? conf.id : _.uniqueId("layer");
            _this.layer = L.layerGroup([]);
            return _this;
        }
        SmartLayer.prototype.addTo = function (map) {
            this.layer.addTo(map);
            return this;
        };
        return SmartLayer;
    }(Evented_1.Evented));
    exports.SmartLayer = SmartLayer;
});
