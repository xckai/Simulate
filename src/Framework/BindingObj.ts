import _ =require("lodash")
export class BindingObj{
    data={}
    setWatcher(fn){
        ///newdata ,oldData,property
        this._wathcher=fn
    }
    _wathcher:any
    bindElement($el,dataKey){
        new MutationObserver(()=>{
             this.data[dataKey]=$el.html()
        }).observe($el.get(0),{
            'childList': true,
             'subtree': true
        })
        Object.defineProperty(this.data,dataKey,{
            enumerable:true,
            set:(d)=>{
                if(d!==this.data["_"+dataKey]){
                     if(this._wathcher){
                         this._wathcher(d,this.data["_"+dataKey],dataKey)
                     }
                     this.data["_"+dataKey]=d
                     $el.html(d)
                    
                }
            },
            get:()=>{
                return this.data["_"+dataKey]
            }
        })
    }
    setData(d){
        _.each(d,(v,k)=>{
            if(_.has(this.data,k)){
                this.data[k]=v
            }
        })
    }
}