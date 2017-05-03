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
define(["require", "exports", "../Component", "leaflet"], function (require, exports, Component, L) {
    "use strict";
    return (function (_super) {
        __extends(SmartMap, _super);
        function SmartMap(conf) {
            var _this = _super.call(this, conf) || this;
            _this.setStyle({ height: "100%", width: "100%" });
            return _this;
        }
        SmartMap.prototype.renderer = function () {
            // let mapContainer=$("<div></div>").css(this.style)
            // $(this.el).append(mapContainer)
            // this.map=L.map(mapContainer[0])
            //             this.map.setView([51.505, -0.09], 13);
            return this.el;
        };
        SmartMap.prototype.afterRender = function () {
            this.map = L.map(this.el);
            this.map.setView([31.2, 121], 9);
            L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 18
            }).addTo(this.map);
        };
        return SmartMap;
    }(Component));
});
