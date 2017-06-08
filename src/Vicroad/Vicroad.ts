import {App}from "../Framework/Core/App"
import {SmartMap} from"../Framework/Map/SmartMap"
import setting =require("../Vicroad/setting")
import {Bar}from "./Bar/NavBar"
declare var window :any
 class VicroadApp extends App{
    constructor(){
        super("vicroad")
        this.bar.addTo(this)
        this.router.addRule("road",this.showRoad.bind(this))
        this.router.addRule("area",this.showArea.bind(this))
        this.router.enable("road")
    }
    bar=new Bar()
    roadMap:SmartMap
    areaMap:SmartMap
    showRoad(){
        if(this.roadMap){
            return
        }else{
            if(this.areaMap){
                this.areaMap.remove()
                this.areaMap=null
            }
            this.roadMap=new SmartMap()
            this.roadMap.setStyle({top:"52px"})
            this.add(this.roadMap,true)
            this.roadMap.setMapSetting(setting)
        }
    }
    removeRoad(){

    }
    showArea(){
        if(this.areaMap){
            return
        }else{
            if(this.roadMap){
                this.roadMap.remove()
                this.roadMap=null
            }
            this.areaMap=new SmartMap()
            this.add(this.areaMap,true)
            this.areaMap.setMapSetting(setting)
        }
    }

}

export={
    getInstance(){
        if(!window._app){
            window._app=new VicroadApp()
        }
        return window._app
    }
}