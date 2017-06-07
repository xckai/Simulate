define(["require", "exports", "leaflet", "../Element/LineAdjuster"], function (require, exports, L, LineAdjuster_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Line = (function () {
        function Line() {
        }
        Line.prototype.addTo = function (sm) {
            this.setMap(sm);
            if (this.leafletLine) {
                this.leafletLine.addTo(this.smartMap.leaflet);
            }
        };
        Line.prototype.setMap = function (sm) {
            this.smartMap = sm;
            return this;
        };
        Line.prototype.updateLine = function (latlngs, options) {
            if (this.leafletLine) {
                this.leafletLine.setLatLngs(latlngs);
                if (options) {
                    this.leafletLine.setStyle(options);
                }
            }
            else {
                this.leafletLine = L.polyline(latlngs, options);
                this.leafletLine.on("click", this.onClick.bind(this));
            }
            return this;
        };
        Line.prototype.onClick = function (e) {
            console.log(e, this.smartMap.leaflet.latLngToContainerPoint(e.latlng));
            if (!this.adjuster) {
                this.adjuster = new LineAdjuster_1.LineAdjuster();
                this.adjuster.$el.appendTo(this.smartMap.getRootElement().get$Node());
            }
            var point = this.smartMap.leaflet.latLngToContainerPoint(e.latlng);
            this.adjuster.style({
                position: "absolute",
                left: point.x + "px",
                top: point.y + "px",
                "z-index": 1000
            });
            this.adjuster.toHtml();
        };
        return Line;
    }());
    exports.Line = Line;
});
