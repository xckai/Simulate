import Component=require("../Component")
import _ =require("underscore")
import L=require("leaflet")
import {SmartLayer} from"./SmartLayer"
import {IMapSetting} from "../Map/IMapSetting"
export class SmartMap extends Component{
    constructor(conf?){
        super(conf)
        this.setStyle({height:"100%",width:"100%"})
        this.layers=[]
         this.leaflet=L.map(this.el)
       
    }
    setMapSetting(s){
          this.mapSetting=s
         let base= new SmartLayer({id:"base"})
         base.layer=L.tileLayer(this.mapSetting.baseLayer.mapUrl, {
                        maxZoom: this.mapSetting.baseLayer.maxZoom
                    })
         
         this.addLayer(base)
    }
    mapSetting:IMapSetting
    leaflet:L.Map
    renderer(){
        // let mapContainer=$("<div></div>").css(this.style)
        // $(this.el).append(mapContainer)
        // this.leaflet=L.leaflet(mapContainer[0])
        //             this.leaflet.setView([51.505, -0.09], 13);
                   
        return this.el
    }
    afterRender(){
        
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
        let ls=_.where(this.layers,{id:id})
        if(ls.length>0){
            return ls
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