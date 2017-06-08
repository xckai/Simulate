import _ =require("lodash")
import $= require("jquery")
import {View} from "./View"
export class Controller{
    constructor(conf?){
        this.view= new View("div")
        this.invokeBeforeRender()
        this.setConfig(conf)
    }
    config:IControllerConfig={
                                class:[],
                                style:{
                                    position:"absolute",
                                    left:"0px",
                                    right:"0px",
                                    top:"0px",
                                    bottom:"0px",
                                    display:"inhert"
                                    }
                                }
    view:View
    setStyle(s){
        this.config.style=_.assign(this.config.style,s)
        this.updateStyle()
        return this
    }
    renderAt(dom){
       this.invokeBeforeRender()
       this.view.render()
       this.view.getNode$().appendTo(dom)
       this.invokeAterRender()
       return this
    }
    
    onAfterRender(){}
    onBeforeRender(){}
    invokeAterRender(){
        if(this.onAfterRender){
            this.onAfterRender()
        }
        return this
    }
    invokeBeforeRender(){
        if(this.onBeforeRender){
            this.onBeforeRender()
        }
    }
    private callbackFn:any []
    protected setConfig(c){
      this.config=_.assign(this.config,c)
      this.updateStyle()
       return this
    }
    protected updateStyle(){
           this.view.style(this.config.style)
           this.view.setClass(this.config.class.join(" "))
           return this
    }

}
export interface IControllerConfig{
            class:string [],
            style:{
                    position:string,
                    left:string,
                    right:string,
                    top:string,
                    bottom:string,
                    display:string
            }
}