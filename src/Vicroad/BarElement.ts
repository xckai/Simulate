import $ = require("jquery")
import _ =require("lodash")
import {BaseElement}from "../Framework/BaseElement"
import template = require('text!./Bar.html')
import {BindingObj} from "../Framework/BindingObj"
export class BarElement extends BaseElement{
    constructor(){
        super("section")
    }
    bindingData=new BindingObj()
    initElement(){
        this.bindingData.bindElement(this.$el.find(".options-text"),"optionTitle")
         this.$el.find(".options").children("li").on("click", (e) => {
            this.bindingData.setData({
                optionTitle:$(e.target).text()
            })
        })
    }
    toHtml(){
          this.$el.append(template)
          this.initElement()
    }
    setData(d){
        this.bindingData.setData(d)
    }
  
}