import {Component} from "../../Framework/Core/Component"
import {Controller} from "../../Framework/Core/Controller"
import {View} from "../../Framework/Core/View"
import d3 = require("d3")
import $ = require("jquery")
import _ =require("lodash")
import template = require('text!./Bar.html')
class BarView extends View{
    renderer(){
        let ns=this.namespace,tag=this.tag, _ns,_tag
            if(ns=="svg"){
                        _ns="http://www.w3.org/2000/svg"
                }else{
                        _ns="http://www.w3.org/1999/xhtml"
                }
                _tag=tag==undefined?"div":tag
                let el=document.createElementNS(_ns,_tag)
        $(el).append("<p class='band' >SmartTraffic</p>")

        
        return $(el)  
    }
}

export class Bar extends Component {
    constructor(id ? , c ? ) {
        super(id == undefined ? _.uniqueId("Bar") : id, c)
        this.view=new BarView()
        this.view.render()
        this.view.attr({id:this.id}).style(this.config.style).addClass(this.config.class)
    }

    config = {
        class: ["navbar"],
        style: {
            position: "absolute",
            left: "0px",
            right: "0px",
            top: "0px",
            bottom: "NaN",
            width:"100%",
            height:"3rem",
            display: "inhert"
            

        }
    }
}