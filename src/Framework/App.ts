import {
    Component,
    IComponentConfig 
} from "./Component"
import $ = require("jquery")
import _ = require("lodash")
declare var window: any
export = {
    getInstance(config ? ) {
        if (!window._app) {
            window._app = new App(config)
        }
        return window._app
    }
}
interface IAppConfig extends IComponentConfig {
    appendElement: any
}
class App extends Component {
    constructor(id ? , conf ? ) {
        super(id == undefined ? _.uniqueId("App") : id, conf)
        this.setConfig(conf)
        $(this.config.appendElement).append(this.rootElement.get$Node())
        this.render()
        //let fragment=document.createDocumentFragment()
    }
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
    getInstance() {
        if (!window._app) {
            window._app = new App()
        }
        return window._app
    }
    

}