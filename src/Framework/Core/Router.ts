import $= require("jquery")
export class HashRouter{
    enable(){
        $(window).bind("hashchange",this.hashChange.bind(this))
        this.hashChange()
    }
    hashChange(){
        let hash=window.location.hash
        if(hash){
             hash=hash.toString().slice(1)
             if(typeof this.data[hash]=="function"){
                 this.data[hash].call(null)
             }
        }  
    }
    defaultStr:string
    addRule(str,fn){
        this.data[str]=fn
    }
    routerTo(str){
        window.location.hash="#"+str
    }
    data={}

}