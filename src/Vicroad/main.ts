import {Bar} from "../Vicroad/Bar"
import App =require("../App")
import {SmartMap} from"../Map/SmartMap"
import setting =require("../Vicroad/setting")
 var app=App.getInstance()
        app.setStyle({height:"100%",width:"100%"})
      
        var bar = new Bar ()
        var map= new SmartMap()
        map.setStyle({height:"100%",width:"100%"})
        map.setMapSetting(setting)
        app.add(bar)
        app.add(map)
        // var style = {position:"relative",top:"20px"}
        // bar.setStyle(style)
       
        app.render()