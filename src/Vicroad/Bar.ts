import Component=require("../Component")
import d3= require("d3")
import $=require("jquery")
import template = require ('text!./Bar.html')
export=class Bar extends Component{
    constructor(c?){
        super(c)
    }
    renderer(){
        //let c=document.createDocumentFragment()
        $(this.el).append(template)
        this.initHook()
        return this.el
    }
    initHook(){
        $(this.el).find(".options").children("li").on("click",(e)=>{
            this.optionClicked(e)
        })
    }
    optionClicked(e){
        let id= $(e.target).attr("value")
        $(this.el).find(".options-text").text($(e.target).text())
        $(this.el).find("#"+id+"-modal").modal("show")
    }
}