export interface IMapSetting{
    center:{lat:number,lng:number},
    zoom:number,
    baseLayer:{
        mapUrl:string,
        maxZoom:number
    }
}