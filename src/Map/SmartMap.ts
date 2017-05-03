import Component=require("../Component")
import _ =require("underscore")
import L= require("leaflet")
import {MapSetting} from "../Map/MapSetting"
export class SmartMap extends Component{
    constructor(conf?){
        super(conf)
        this.setStyle({height:"100%",width:"100%"})
        this.layers=[]
       
    }
    setMapSetting(s){
          this.mapSetting=s
         let base= L.tileLayer(this.mapSetting.baseLayer.mapUrl, {
                        maxZoom: this.mapSetting.baseLayer.maxZoom
                    })
         this.addLayer("base",base)
    }
    mapSetting:MapSetting
    map:L.Map
    renderer(){
        // let mapContainer=$("<div></div>").css(this.style)
        // $(this.el).append(mapContainer)
        // this.map=L.map(mapContainer[0])
        //             this.map.setView([51.505, -0.09], 13);
                   
        return this.el
    }
    afterRender(){
         this.map=L.map(this.el)
                    this.map.setView(this.mapSetting.center, this.mapSetting.zoom);
          _.each(this.layers,(l)=>l.layer.addTo(this.map))
    }
    layers:any[]
    addLayer(id:string,l:L.Layer){
        this.removeLayer(id)
        let o={id:id,layer:l}
        this.layers.push(o)
    }
    getLayer(id:string){
        let ls=_.where(this.layers,{id:id})
        if(ls.length>0){
            return ls[0].layer
        }else{
            return null
        }
    }
    removeLayer(id:string){
        let ls=_.where(this.layers,{id:id})
        _.each(ls,o=>o.layer.remove())
        this.layers=_.filter(this.layers,o=>o.id!=id)
        return this
    }
}