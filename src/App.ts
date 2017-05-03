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
        this.updateConfig()
    }
    config={
        id:null,
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
         _.each(this.children,c=>c.render())
        $("body").append(this.el)
        _.invoke(this.children,"afterRender")
        return this
    }

}