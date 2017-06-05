import $ = require("jquery")
import _ =require("lodash")
import {BaseElement}from "../BaseElement"
export class MapElement extends BaseElement{
    constructor(){
        super("section")
    }
    toHtml(){
        this.mapNode=$("<div></div>").css({
            right:"0px",top:"0px",bottom:"0px",left:"0px",
            position:"absolute"
            }).appendTo(this.$el)
    }
    mapNode:JQuery
    getMapNode$(){
        return this.mapNode
    }
}