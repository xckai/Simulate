import {Evented} from "./Evented"
import _ =require("lodash")
import $= require("jquery")
import d3=require("d3")
import {Util} from "./Util"
import {BallLoader} from "./Animation"
import {BaseElement} from "./BaseElement"
export class Component extends Evented{
    constructor(id?,conf?){  
        super()
        if(id!=undefined){
            this.id=id
        }else{
            this.id=_.uniqueId("component")
        }
        this.setConfig(conf)
        this.rootElement=new BaseElement("section")
        this.rootElement.attr({id:this.id}).style(this.config.style).addClass(this.config.class)
        //let fragment=document.createDocumentFragment()
        // this.$el=$("<section></section>")
        // this.el=this.$el.get(0)
        /////init element
        // _.each(this.config.class,c=>this.$el.addClass(c))
        // this.$el.css(this.config.style)
        // this.$el.attr("id",this.id)
    }
    protected setConfig(c){
      
         this.config=_.assign(this.config,c)
    
       return this
    }
    rootElement:BaseElement
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
    // protected el:any
    // protected $el:JQuery
    protected isRendered:boolean=false
    protected children:Component []=[]
    protected parent:Component
    setStyle(s){
        this.config.style=_.assign(this.config.style,s)
        this.updateStyle()
    }
    updateStyle(){
        this.rootElement.style(this.config.style)
        return this
    }
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
       if(listen){
           this.listenTo(nc)
       }
       return this
    }
    getRootElement(){
        return this.rootElement
    }
    render(){
        this._beforeRender()
        _.each(this.children,(c)=>{
                c.render()
            })
        this.rootElement.toHtml()
       
        if(this.parent){
            this.parent.getRootElement().get$Node().append(this.rootElement.get$Node())
        }
         this._afterRender()
    }
    _beforeRender(){
        this.beforeRender()
        _.invoke(this.children,"beforeRender")
    }
    beforeRender(){

    }
    _afterRender(){
        this.afterRender()
        _.invoke(this.children,"_afterRender")
    }
    afterRender(){

    }
    // renderer(){
    //     this.updateStyle()
    //     return this.el
    // }
    setBusy(){
      let a=  new BallLoader()
      a.setConfig({$root:this.rootElement.get$Node()})
      a.show()
       // this.$el.append(Util.BounceBusyDiv(200,200,3))
      this.rootElement.addClass("busy")
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