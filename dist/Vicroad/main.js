define(["require", "exports", "../Vicroad/Bar", "../Framework/App", "../Framework/Map/SmartMap", "../Vicroad/setting", "../Framework/Map/InteractiveLayer", "d3"], function (require, exports, Bar_1, App, SmartMap_1, setting, InteractiveLayer_1, d3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var app = App.getInstance();
    app.setStyle({ height: "100%", width: "100%" });
    var bar = new Bar_1.Bar();
    var map = new SmartMap_1.SmartMap();
    var l = new InteractiveLayer_1.InteractiveLayer();
    // l.initPolygon([{lat:31.2,lng:121},{lat:31.5,lng:121.5},{lat:31.8,lng:120.9}])
    var cs = d3.scaleOrdinal(d3.schemeCategory10);
    // setInterval(()=>{
    //         let ci=Math.floor(Math.random()*10).toString()
    //         let c=cs(ci)
    //         console.log(c)
    //         console.log(ci)
    //         l.setPolygonColor(c)
    // },1000)
    map.addLayer(l);
    map.setStyle({ height: "100%", width: "100%" });
    map.setMapSetting(setting);
    app.add(bar, true);
    app.add(map, true);
    app.on("optionChange", function (e) {
        l.addTo(map);
        l.addLines();
    });
    // var style = {position:"relative",top:"20px"}
    // bar.setStyle(style)
    app.render();
});
