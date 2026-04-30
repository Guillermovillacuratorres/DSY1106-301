import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../models/Vehiculo';


@Component({
  selector: 'app-inicio-component',
  imports: [],
  templateUrl: './inicio-component.html',
  styleUrl: './inicio-component.scss',
})
export class InicioComponent implements OnInit {
  ngOnInit() {
    console.table(this.vehiculos);
    console.info("Error");
    
    
  }

  nombre:string = "Juanito";
  edad:number = 10

  imagen:string = "img/mc.webp";




vehiculos:Vehiculo[] = [
  {
    color:"Rojo",
    id_vehiculo:1,
    imagen:"img/mc.webp",
    patente:"asdf10"
  },
  {
    color:"",
    id_vehiculo:2,
    imagen:"",
    patente:""
  }
]
}




