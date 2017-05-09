import {Bar} from "../Vicroad/Bar"
import App =require("../Framework/App")
import {SmartMap} from"../Framework/Map/SmartMap"
import setting =require("../Vicroad/setting")
import {InteractiveLayer} from "../Framework/Map/InteractiveLayer"
import d3=require("d3")
 var app=App.getInstance()
        app.setStyle({height:"100%",width:"100%"})
      
        var bar = new Bar ()
        var map= new SmartMap()
        var  l= new InteractiveLayer()
       // l.initPolygon([{lat:31.2,lng:121},{lat:31.5,lng:121.5},{lat:31.8,lng:120.9}])
        let cs=d3.scaleOrdinal(d3.schemeCategory10)
        // setInterval(()=>{
                
        //         let ci=Math.floor(Math.random()*10).toString()
        //         let c=cs(ci)
        //         console.log(c)
        //         console.log(ci)
        //         l.setPolygonColor(c)
        // },1000)
        map.addLayer(l)
        map.setStyle({height:"100%",width:"100%"})
        map.setMapSetting(setting)
        app.add(bar,true)
        app.add(map,true)
        app.on("optionChange",(e)=>{
               l.addTo(map)
               l.addLines()
               
                
        })
        // var style = {position:"relative",top:"20px"}
        // bar.setStyle(style)
        app.render()
