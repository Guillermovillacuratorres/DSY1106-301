export interface Vehiculo{
    id_vehiculo:number;
    patente:string;
    imagen:string;
    color:string;
    tamanio_motor?:number;
}


export interface Vehiculo2{
    id_vehiculo:number;
    patente:string;
    id_marca:number;
    color:string;
    modelo:string;
}
