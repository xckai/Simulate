define(["require", "exports", "../Vicroad/Bar", "../App", "../Map/SmartMap", "../Vicroad/setting"], function (require, exports, Bar_1, App, SmartMap_1, setting) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var app = App.getInstance();
    app.setStyle({ height: "100%", width: "100%" });
    var bar = new Bar_1.Bar();
    var map = new SmartMap_1.SmartMap();
    map.setStyle({ height: "100%", width: "100%" });
    map.setMapSetting(setting);
    app.add(bar);
    app.add(map);
    // var style = {position:"relative",top:"20px"}
    // bar.setStyle(style)
    app.render();
});
