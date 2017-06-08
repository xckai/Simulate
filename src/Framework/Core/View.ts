import { calendarFormat } from '../../../lib/moment/moment';
import _ =require("lodash")
import $= require("jquery")
import {Util} from "./Util"
export class View {
    constructor(tag?,ns?){
        this.tag=tag
        this.namespace=ns
    }
    tag:string
    attrData:{}
    styleDate:{}
    namespace:string
    $el:JQuery
    el:any
    data={}
    attr(obj){
        this.attrData=obj
        if(this.$el){
            this.$el.attr(obj)
        }
        return this
    }
    style(obj){
        this.styleDate=obj
        if(this.$el){
            this.$el.css(obj)
        }
        return this
    }
    addClass(cls){
      _.each(cls,(c)=>{
            this.$el.addClass(c)
      })
      return this
    }
    setClass(cls){
        this.$el.removeClass()
        this.$el.attr("class",cls)
    }
    removeClass(cls){
      _.each(cls,()=>{
            this.$el.removeClass(cls)
      })
      return this
    }
    getNode$(){
        return this.$el
    }
    getNode(){
        return this.el
    }
    render(){
      this.$el=this.renderer()
      this.$el.css(this.styleDate||{})
      this.$el.attr(this.attrData||{})
      this.el=this.$el.get(0)
      return this.el
    }
    remove(){
        if(this.$el){
            this.$el.remove()
        }
    }
    renderer(){
            let ns=this.namespace,tag=this.tag, _ns,_tag
            if(ns=="svg"){
                        _ns="http://www.w3.org/2000/svg"
                }else{
                        _ns="http://www.w3.org/1999/xhtml"
                }
                _tag=tag==undefined?"div":tag
                let el=document.createElementNS(_ns,_tag)
                return $(el)     
    }
    appendTo(s){
        this.$el.appendTo(s)
    }
    setWatcher(fn){
        ///newdata ,oldData,property
        this._wathcher=fn
    }
    _wathcher:any
    bindElement($el,dataKey){
        new MutationObserver(()=>{
             this.data[dataKey]=$el.html()
        }).observe($el.get(0),{
            'childList': true,
             'subtree': true
        })
        Object.defineProperty(this.data,dataKey,{
            enumerable:true,
            set:(d)=>{
                if(d!==this.data["_"+dataKey]){
                     if(this._wathcher){
                         this._wathcher(d,this.data["_"+dataKey],dataKey)
                     }
                     this.data["_"+dataKey]=d
                     $el.html(d)
                    
                }
            },
            get:()=>{
                return this.data["_"+dataKey]
            }
        })
    }
  
}