import Component=require("./Component")
import d3= require("d3")
export=class Bar extends Component{
    constructor(c?){
        super(c)
    }
    renderer(){
        let c=document.createDocumentFragment()
        d3.select(c).append("xhtml:nav").classed("navbar navbar-default",true).append("xhtml:div").classed("container-fluid",true)
        return c
    }
}