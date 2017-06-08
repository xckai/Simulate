import $= require("jquery")
export class HashRouter{
    enable(str?){
        $(window).bind("hashchange",this.hashChange.bind(this))
       if(str){
           window.location.hash="#"+str
       }else{
            this.hashChange()
       }

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