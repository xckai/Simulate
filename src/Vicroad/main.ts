import {Bar} from "../Vicroad/Bar"
import App =require("./Vicroad")
 import {SmartMap} from"../Framework/Map/SmartMap"
 import setting =require("../Vicroad/setting")
// import {InteractiveLayer} from "../Framework/Map/InteractiveLayer"
// import {Util} from "../Framework/Util"
// import d3=require("d3")
// import {Line} from"./Map/Line"
 var app=App.getInstance()
 console.log(app)
        app.setStyle({height:"100%",width:"100%"})
      
//         var bar = new Bar ()
        
  
               
//         var  l= new InteractiveLayer()
//         var line=new Line()
//          //l.initPolygon([{lat:31.2,lng:121},{lat:31.5,lng:121.5},{lat:31.8,lng:120.9}])
//         let cs=d3.scaleOrdinal(d3.schemeCategory10)
//         // setInterval(()=>{
                
//         //         let ci=Math.floor(Math.random()*10).toString()
//         //         let c=cs(ci)
//         //         console.log(c)
//         //         console.log(ci)
//         //         l.setPolygonColor(c)
//         // },1000)
//        // map.addLayer(l)
        
//         app.add(bar,true)
        
       
//         // app.on("optionChange",(e)=>{
//         //         if(e.id!="hah"){
                
//         //         }
                
                
//         // })
//         // var style = {position:"relative",top:"20px"}
//         // bar.setStyle(style)
//         app.render()
//         bar.setData({optionTitle:"hah"})
//          line.updateLine([{lat:31.2,lng:121},{lat:31.5,lng:121.5}],{weight:3})
//         line.addTo(map)
//         // setTimeout(()=>{
        //         app.setBusy()
        // },1000)
       
export =app