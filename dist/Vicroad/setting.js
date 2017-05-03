define(["require", "exports"], function (require, exports) {
    "use strict";
    var s = {
        center: { lat: 31.2, lng: 121 },
        zoom: 9,
        baseLayer: {
            mapUrl: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            maxZoom: 18
        }
    };
    return s;
});
