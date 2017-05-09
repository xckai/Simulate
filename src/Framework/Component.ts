import {Evented} from "./Evented"
import _ =require("underscore")
import $= require("jquery")
import d3=require("d3")
export =class Component extends Evented{
    constructor(conf?){  
        super()
        this.setConfig(conf)
        if(!this.config.id){
            this.config.id=_.uniqueId("component")
        }
        let fragment=document.createDocumentFragment()
        this.el=d3.select(fragment).append("xhtml:div").node()
        this.updateConfig()
        
    }
    setConfig(c?){
        if(c){
            _.each(c,(v,k)=>{
                this.config[k]=v
            })
        }
       return this
    }
    updateConfig(){
        if(this.config.className){
            d3.select(this.el).classed(this.config.className,true)
        }
        d3.select(this.el).attr("id",this.config.id)
    }
    config={
        id:null,
        className:null
    }
    protected style:{}
    protected el:any
    protected isRendered:boolean=false
    protected children:Component []=[]
    protected parent:Component
    setStyle(s){
        if(!this.style){
            this.style={}
        }
        _.each(s,(v,k)=>{
            this.style[k]=v
        })
        this.updateStyle()
    }
    updateStyle(){
        if(this.el){
            $(this.el).css(this.style)
        }
        return this
    }
    addTo(c:Component,listen?){
        this.parent=c
        this.parent.add(this,listen)
        return this
    }
    add(nc:Component,listen?){
       let i=_.findIndex(this.children,c=>c.config.id==nc.config.id)
       nc.parent=this
       if(i==-1){
           this.children.push(nc)
       }else{
           this.children[i]=nc
       }
       if(listen){
           this.listenTo(nc)
       }
       return this
    }
    getContainer(){
        return this.el 
    }
    render(){
        if(this.parent){
            this.el=this.renderer()
            $(this.parent.getContainer()).append(this.el)
            _.each(this.children,c=>{
                c.render()
            })
        }
        return this
    }
    afterRender(){

    }
    renderer(){
        this.updateStyle()
        return this.el
    }
}