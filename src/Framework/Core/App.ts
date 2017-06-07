import { HashRouter } from './Router';
import {
    Component,
    IComponentConfig 
} from "./Component"
import $ = require("jquery")
import _ = require("lodash") 
declare var window :any

interface IAppConfig extends IComponentConfig {
    appendElement: any
}
export class App extends Component {
    constructor(id?) {
        super(id==undefined? _.uniqueId("App"):id)
        $(this.config.appendElement).append(this.view.getNode$())
        this.router=new HashRouter()
    }
    getInstance() {
        if (!window._app) {
            window._app = new App()
        }
        return new App(window._app)
    }
    router:HashRouter
    config: IAppConfig = {
        class: [],
        style: {
            position: "absolute",
            left: "0px",
            right: "0px",
            top: "0px",
            bottom: "0px",
            display: "inhert",
          
        },
        appendElement: "body"
    }
    
}