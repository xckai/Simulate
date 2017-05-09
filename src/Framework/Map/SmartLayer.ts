import _ =require("underscore")
import L=require("leaflet")
import {Evented} from "../Evented"
export class SmartLayer extends Evented{
    constructor(conf?){
        super()
        this.id=(conf &&conf.id!=undefined)?conf.id:_.uniqueId("layer")
        this.layer=L.layerGroup([])
    }
    layer:L.Layer
    id:string
    addTo(map){
        this.layer.addTo(map)
        return this
    }
}