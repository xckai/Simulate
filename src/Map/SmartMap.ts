import Component=require("../Component")
import d3= require("d3")
import $=require("jquery")
import L= require("leaflet")
export =class SmartMap extends Component{
    constructor(conf?){
        super(conf)
        this.setStyle({height:"100%",width:"100%"})
    }
    map:L.Map
    renderer(){
        // let mapContainer=$("<div></div>").css(this.style)
        // $(this.el).append(mapContainer)
        // this.map=L.map(mapContainer[0])
        //             this.map.setView([51.505, -0.09], 13);
                   
        return this.el
    }
    afterRender(){
         this.map=L.map(this.el)
                    this.map.setView([31.2, 121], 9);
         L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        maxZoom: 18
                    }).addTo(this.map);
    }
}