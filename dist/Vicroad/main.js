define(["require", "exports", "./Vicroad"], function (require, exports, App) {
    "use strict";
    // import {InteractiveLayer} from "../Framework/Map/InteractiveLayer"
    // import {Util} from "../Framework/Util"
    // import d3=require("d3")
    // import {Line} from"./Map/Line"
    var app = App.getInstance();
    console.log(app);
    app.setStyle({ height: "100%", width: "100%" });
    return app;
});
