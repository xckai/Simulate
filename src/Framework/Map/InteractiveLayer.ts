import _ =require("underscore")
import L=require("leaflet")
import d3= require("d3")
import {SmartLayer} from"./SmartLayer"
import {Line,Polygon}from "./LeafletShapes"
import {DropBox} from "../Element/DropBox"
export class InteractiveLayer extends SmartLayer{
    constructor(conf?){
        super(conf)
        this.layer=L.layerGroup([])
    }
    layer:L.LayerGroup
    addLines(){
        let l=new Line([{lat:31.2,lng:121},{lat:31.5,lng:121.5}],{weight:3})
        
        let f=d3.select(document.createDocumentFragment())
        // let ul=f.append("xhtml:ul").classed("dropdown-menu",true)
        // ul.append("xhtml:li").text("haha")
        let dropbox=new DropBox()
        dropbox.setData([{value:"+10%"},{value:"+5%"},{value:"-5%"},{value:"+10%"}])
        
        l.bindPopup(dropbox.toElement())
        this.layer.addLayer(l)
        return this
    }
    initLine(l:Line){
        l.on("click",(m)=>{
            
        })
    }
    adjustLineValue(){
        
    }
    initPolygon(latlngs:L.LatLngExpression[],options?){
        if(!this.polygon){
            this.polygon=new Polygon(latlngs,options)
            this.layer.addLayer(this.polygon)
        }
        return this
    }
    setPolygonColor(c){
        if(this.polygon){
            this.polygon.setStyle({fillColor:c})
        }
    }
    polygon:Polygon
}