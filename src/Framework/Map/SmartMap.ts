import {Component} from "../Core/Component"
import {View} from "../Core/View"
import {Controller} from "../Core/Controller"
import _ =require("lodash")
import L=require("leaflet")
import $=require("jquery")
import {SmartLayer} from"./SmartLayer"
import {IMapSetting} from "../Map/IMapSetting"
export class SmartMapController extends Controller{
    constructor(conf?){
        super(conf)
        this.layers=[]
    }
    setMapSetting(s){
        this.mapSetting=s
        this.leaflet.setView(this.mapSetting.center, this.mapSetting.zoom);
          //_.each(this.layers,(l)=>l.addTo(this.leaflet))
         let base= new SmartLayer({id:"base"})
         base.layer=L.tileLayer(this.mapSetting.baseLayer.mapUrl, {
                        maxZoom: this.mapSetting.baseLayer.maxZoom
                    })
         
         this.addLayer(base)
    }
    mapSetting:IMapSetting
    leaflet:L.Map
    onAfterRender(){
          this.leaflet=L.map(this.view.getNode(),{scrollWheelZoom:true})
    }
    layers:SmartLayer []
    addLayer(l:SmartLayer){
        this.removeLayer(l.id)
       // this.listenTo(l)
        this.layers.push(l)
        l.addTo(this.leaflet)
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
}
export class SmartMap extends Component{
    constructor(id?,conf?){
        super(id==undefined? _.uniqueId("map"):id,conf)
        this.map=new SmartMapController()
        this.map.renderAt(this.view.getNode$())
    }
    setMapSetting(s){
        this.map.setMapSetting(s)
    }
    map: SmartMapController
    remove(){
        this.view.remove()
    }
}