import Component= require("./Component")
import $=require("jquery")
import _ =require("underscore")
declare var window :any
export={
    getInstance(config?){
         if(!window._app){
             window._app=new App(config)
        }
        return window._app
    }
}
class App extends Component{
    constructor(conf?){
        super(conf)
    }
    _config={
        className:"AppContainer",
        element:"body"
    }
    getInstance(){
        if(!window._app){
             window._app=new App()
        }
        return window._app
    }
    render(){
        if(!this._el){
            let fragment=document.createDocumentFragment()
            this._el=fragment;
            _.each(this._children,c=>c.render())
            $("body").append(this._el)
            this._el=$("body")[0]
        }
        return this
    }

}