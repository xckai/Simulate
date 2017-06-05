import _ =require("lodash")
import $= require("jquery")
import {Util} from "./Util"
export class BaseElement {
    constructor(tag?,ns?){
        let _ns,_tag
        if(ns=="svg"){
            _ns="http://www.w3.org/2000/svg"
        }else{
            _ns="http://www.w3.org/1999/xhtml"
        }
        _tag=tag==undefined?"div":tag
        this.el=document.createElementNS(_ns,_tag)
        this.$el=$( this.el)  
    }
    $el:JQuery
    el:Element
    data:any
    attr(obj){
        this.$el.attr(obj)
        return this
    }
    style(obj){
        this.$el.css(obj)
        return this
    }
    addClass(cls){
      _.each(cls,()=>{
            this.$el.addClass(cls)
      })
      return this
    }
    removeClass(cls){
      _.each(cls,()=>{
            this.$el.removeClass(cls)
      })
      return this
    }
    get$Node(){
        return this.$el
    }
    toHtml(){
          ///render
        
    }
  
}