import {Component} from "../Component"
import _ =require("lodash")
import L=require("leaflet")
import $=require("jquery")
import {SmartLayer} from"./SmartLayer"
import {IMapSetting} from "../Map/IMapSetting"
import {Util}from "../Util"
import {MapElement} from "./MapElement"
export class SmartMap extends Component{
    constructor(id?,c?){
        super(id == undefined ? _.uniqueId("Map") : id, c)
        //this.setStyle({position:"absolute"})
        this.layers=[]
        // let mapContainer= $("<div></div>").css({
        //     width:"100%",
        //     height:"100%"
        // }).get(0)
        this.rootElement=new MapElement()
        this.rootElement.attr({id:this.id}).style(this.config.style).addClass(this.config.class)
        // let $div=$("<div></div>").css({
        //     right:"0px",top:"0px",bottom:"0px",left:"0px",
        //     position:"absolute"
        // })
        // this.$el.append($div)
       
        
       
    }
    setMapSetting(s){
          this.mapSetting=s
         let base= new SmartLayer({id:"base"})
         base.layer=L.tileLayer(this.mapSetting.baseLayer.mapUrl, {
                        maxZoom: this.mapSetting.baseLayer.maxZoom
                    })
         
         this.addLayer(base)
    }
    rootElement:MapElement
    mapSetting:IMapSetting
    leaflet:L.Map

    afterRender(){
          this.leaflet=L.map(this.rootElement.getMapNode$().get(0),{scrollWheelZoom:true})
          this.leaflet.setView(this.mapSetting.center, this.mapSetting.zoom);
          _.each(this.layers,(l)=>l.addTo(this.leaflet))
    }
    layers:SmartLayer []
    addLayer(l:SmartLayer){
        this.removeLayer(l.id)
        this.listenTo(l)
        this.layers.push(l)
    }
    getLayer(id:string){
        let ls=_.find(this.layers,{id:id})
        if(ls!=undefined){
            return ls
        }else{
            return null
        }
    }
    removeLayer(id:string){
        let ls=_.find(this.layers,{id:id})
        _.each(ls,o=>o.layer.remove())
            this.layers=_.filter(this.layers,o=>o.id!=id)
        return this
    }
    // setBusy(){
    //     this.$el.append(Util.genBusyDiv(200,200,3))
    //     //this.$el.append(Util.BounceBusyDiv(200,200,4,undefined,"Loading"))
    //     this.$el.addClass("busy")
    // }
}