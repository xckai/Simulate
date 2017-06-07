import L=require("leaflet")
import {SmartMap} from "../../Framework/Map/SmartMap" 
import {LineAdjuster} from "../../Framework/Element/LineAdjuster"
export class Line{
    leafletLine:L.Polyline
    smartMap:SmartMap
    adjuster:LineAdjuster
    addTo(sm){
         this.setMap(sm)
        if(this.leafletLine){
             this.leafletLine.addTo(this.smartMap.leaflet)
        }
    }
    setMap(sm){
        this.smartMap=sm
        return this
    }
    updateLine(latlngs,options?){
        if(this.leafletLine){
            this.leafletLine.setLatLngs(latlngs)
            if(options){
                  this.leafletLine.setStyle(options)
            }
           
        }else{
            this.leafletLine=L.polyline(latlngs,options)
            this.leafletLine.on("click",this.onClick.bind(this))
        }
        return this
    }
    onClick(e){
        console.log(e,this.smartMap.leaflet.latLngToContainerPoint(e.latlng))
        if(!this.adjuster){
           
            this.adjuster= new LineAdjuster()
            this.adjuster.$el.appendTo(this.smartMap.getRootElement().get$Node())
        }
        let point=this.smartMap.leaflet.latLngToContainerPoint(e.latlng)
        this.adjuster.style({
                position:"absolute",
                left:point.x+"px",
                top:point.y+"px",
                "z-index":1000
            })
         
        this.adjuster.toHtml()
    }

    
    
}