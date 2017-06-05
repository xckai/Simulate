import {
    Component
} from "../Framework/Component"
import d3 = require("d3")
import $ = require("jquery")
import _ =require("lodash")
import template = require('text!./Bar.html')
import {BarElement} from "./BarElement"

export class Bar extends Component {
    constructor(id ? , c ? ) {
        super(id == undefined ? _.uniqueId("Bar") : id, c)
        this.rootElement=new BarElement()
        this.rootElement.attr({id:this.id}).style(this.config.style).addClass(this.config.class)
        let watch=(newData)=>{
            console.log("change" ,newData)
            this.fire("optionChange", {
                id: newData
            })
        }
        this.rootElement.bindingData.setWatcher(watch)
    }
    rootElement:BarElement
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
    setData(d){
        this.rootElement.setData(d)
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