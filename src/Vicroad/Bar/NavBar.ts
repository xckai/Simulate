import {Component} from "../../Framework/Core/Component"
import {Controller} from "../../Framework/Core/Controller"
import {View} from "../../Framework/Core/View"
import d3 = require("d3")
import $ = require("jquery")
import _ =require("lodash")
import template = require('text!./Bar.html')
class dropDown extends Controller{

}

export class Bar extends Component {
    constructor(id ? , c ? ) {
        super(id == undefined ? _.uniqueId("Bar") : id, c)
        
        // let watch=(newData)=>{
        //     console.log("change" ,newData)
        //     this.fire("optionChange", {
        //         id: newData
        //     })
        // }
    }
    // renderer() {
    //     //let c=document.createDocumentFragment()
    //     this.$el.append(template)
    //     this.initHook()
    //     return this.el
    // }
    config = {
        class: [],
        style: {
            position: "absolute",
            left: "0px",
            right: "0px",
            top: "0px",
            bottom: "0px",
            display: "inhert"

        }
    }

    // initHook() {
    //     $(this.el).find(".options").children("li").on("click", (e) => {
    //         this.optionClicked(e)
    //     })
    // }
    // optionClicked(e) {
    //     let id = $(e.target).attr("value")

    //     $(this.el).find(".options-text").text($(e.target).text())
    //     $(this.el).find("#" + id + "-modal").modal("show")
    // }
}