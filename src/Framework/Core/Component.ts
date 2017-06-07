import {Evented} from "../Evented"
import _ =require("lodash")
import $= require("jquery")
import d3=require("d3")
import {Util} from "./Util"
import {View} from "./View"
import {Controller}from"./Controller"
// import {BallLoader} from "./Animation"
// import {BaseElement} from "./BaseElement"
export class Component extends Controller{
    constructor(id?,conf?){  
        super()
        if(id!=undefined){
            this.id=id
        }else{
            this.id=_.uniqueId("component")
        }
        this.setConfig(conf)
        this.view=new View("section")
        this.view.attr({id:this.id}).style(this.config.style).addClass(this.config.class)
        this.view.render()
    }
    view:View
    protected setConfig(c){
      
         this.config=_.assign(this.config,c)
    
       return this
    }
    id:string
    config:IComponentConfig={
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

    protected isRendered:boolean=false
    protected children:Component []=[]
    protected parent:Component
    addTo(c:Component,listen?){
        this.parent=c
        this.parent.add(this,listen)
        return this
    }
    add(nc:Component,listen?){
       let i=_.findIndex(this.children,c=>c.id==nc.id)
       nc.parent=this
       if(i==-1){
           this.children.push(nc)
          
       }else{
           this.children[i]=nc
       }
       nc.view.getNode$().appendTo(this.view.getNode$())
       return this
    }

}
export interface IComponentConfig{
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