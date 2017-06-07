import _ =require("underscore")
import $= require("jquery")
import {BaseElement}from "../../Framework/BaseElement"
import template = require ('text!./LineAdjuster.html')
export class LineAdjuster extends BaseElement{
    constructor(){
        super("section")
        this.addClass("lineAdjuster")
    }
    toHtml(){
        this.$el.html(template)
        return this.$el
    }
    
}