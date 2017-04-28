import Evented= require("./Evented")
import _ =require("underscore")
import $= require("jquery")
 //import d3=require("d3")
export =class Component extends Evented{
    constructor(conf?){  
        super()
        this.setConfig(conf)
        if(!this.config.id){
            this.config.id=_.uniqueId("component")
        }
    }
    setConfig(c?){
        if(c){
            _.each(c,(v,k)=>{
                this.config[k]=v
            })
        }
       return this
    }
    config={
        id:null
    }
    _el:any
    _isRendered:boolean=false
    _children:Component []=[]
    _parent:Component
    addTo(c:Component){
        this._parent=c
        this._parent.add(this)
        return this
    }
    add(nc:Component){
       let i=_.findIndex(this._children,c=>c.config.id==nc.config.id)
       nc._parent=this
       if(i==-1){
           this._children.push(nc)
       }else{
           this._children[i]=nc
       }
       return this
    }
    getContainer(){
        return this._el 
    }
    render(){
        if(this._parent){
            this._el=this.renderer()
            $(this._parent.getContainer()).append(this._el)
            _.each(this._children,c=>{
                c.render()
            })
        }
        return this
    }
    renderer(){
        let fragment=document.createDocumentFragment()
        this._el=fragment
        return fragment
    }
    
}