import $ = require("jquery")
import _ = require("lodash")
import d3=require("d3")
import {Util}from "./Util"
let styles=Util.d3Invoke("style")
let attrs=Util.d3Invoke("attr")
export class BallLoader{
    config:{
        $root:JQuery
    }
    $container:JQuery
    $svg:JQuery
    svg:any
    d3Circle:d3.Selection<d3.BaseType,{},HTMLElement,undefined>
    $balls:JQuery
    setConfig(c){
       this.config=_.assign({
           $root:undefined
       },c)
    }
    initAnimation(i){
        // this.$container=$("<div class='busyContainer'></div>").css({
        //     position:"absolute",
        //     top:"0px",
        //     bottom:"0px",
        //     left:"0px",
        //     right:"0px",
        //     display:"flex",
        //     "align-items":"center",
        //     "justify-content":"center",
        //     "z-index":1000
        // })
        // this.svg=d3.select(document.createDocumentFragment()).append("svg")
        //                                                         .attr("viewBox","0,0,20,20")
        //                                                         .style("width","100%")
        //                                                         .style("height","100%").node()

        // this.$container.append(this.svg)
        // // this.$svg=$("<svg></svg>").css({
        // //     background:"blue",
        // //     width:"100%",
        // //     height:"100%"
        // // }).appendTo(this.$container)
        // // d3.select(this.$svg.get(0)).call(attrs({
        // //   viewBox:"0,0,20,20"
        // // }))

        // this.d3Circle=d3.select(this.svg).append("defs")
        //                                     .append("clipPath").attr("id","clip")
        //                                     .append("svg:circle").call(attrs({
        //                                                             cx:10,
        //                                                             cy:10,
        //                                                             r:10,
        //                                                             fill:"red"
        //                                                         }))
        let $div
              this.$container= $div=$("<div class='busyContainer'></div>").css({
            position:"absolute",
            top:"0px",
            bottom:"0px",
            left:"0px",
            right:"0px",
            display:"flex",
            "align-items":"center",
            "justify-content":"center",
            "z-index":1000,
            background:"rgba(0,0,0,.5)"
        })
        let c=$("<div></div>").css({
            display:"inline-flex"
        })
        let w=10
        for(let ii=0;ii<i;++ii){
            let t=$("<div></div>")
            t.css({
                width:w+"px",
                height:w+"px",
                background:"blue",
                margin:0.6*w+"px",
                "border-radius":"100%",
                animation:"shake 1s ease-in-out+"+2*ii/i+"s infinite  alternate"
            })
            
            c.append(t)
        }
        let beginkey=100/i +"%",endkey=300/i +"%",frame={
                name:"shake",
                from:{"-webkit-transform":"scale(1); "},
                "to":{ "-webkit-transform":"scale(2); "}
            }
       // frame[beginkey]={ "-webkit-transform":"scale(2); "}
       // frame[endkey]={ "-webkit-transform":"scale(1); "}
       Util.addKeyFrames(frame)
        $div.append(c)
     
        // d3.select(this.svg).append("rect").call(attrs({
        //     x:0,y:0,width:20,height:20,"clip-path":"url(#clip)"
        // })).style("background","blue")
    }
    show(){
        this.initAnimation(3)
        this.$container.css({opacity:0, "transition": "all 1s"})
         requestAnimationFrame(()=>{
              this.$container.css({opacity:.8})
         })               
        // .css({
           
        // })
        this.config.$root.append(this.$container)
        
    }
}