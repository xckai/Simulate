import _ =require("underscore")
import $= require("jquery")
import d3=require("d3")
import template = require ('text!./DropBox.html')
export class ChartComponent {
        constructor(){
        }
        el:any
        private ds=[{name:"Null"}]
        private defalut="Please Select"
        setData(d){
            if(d){
                this.ds=d
            }
            return this
        }
        getData(){
           
                return this.ds
        }
        onChange(fn){
            this.changeFn=fn
        }
        onClick(e){
            let target=e.target
            $(this.el).find("button").find(".value").text($(target).text())
        }
        private changeFn
        toElement(){
            if(this.el){
                return this.el
            }else{
               // let f= document.createDocumentFragment()
                let s=_.template(template)
                this.el=$(s({items:this.ds,defalut:this.defalut}))[0]
                this.initHook()
                return this.el
            }
        }
        initHook(){
            $(this.el).find("li").click((e)=>{
                this.onClick(e)
            })
        }
        
    }