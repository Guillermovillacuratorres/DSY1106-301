import { Component, inject, OnInit } from '@angular/core';
import { Vehiculo, Vehiculo2 } from '../../models/Vehiculo';
import { PersonajesService } from '../../services/personajes-service';
import { Personaje } from '../../models/personaje';
import { VehiculoService } from '../../services/vehiculo-service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-inicio-component',
  imports: [FormsModule],
  templateUrl: './inicio-component.html',
  styleUrl: './inicio-component.scss',
})
export class InicioComponent implements OnInit {


  private personajeService = inject(PersonajesService);
  private vehiculoService = inject(VehiculoService)

  patente:string = "";
  marca:number = 0;
  modelo:string = "";
  color:string = "";

  //constructor(private vehiculoService:VehiculoService){}

  personajes:any[]=[];
  vehiculos2:any;

  ngOnInit() {
    console.table(this.vehiculos);
    console.info("Error");
    this.cargaPersonaje();
    this.cargarVehiculos();
    //this.crearAuto();
  }


  editar(auto:Vehiculo2){
    console.log("METODO EDITAR ->", auto);
  }

  eliminar(id_vehiculo:number){
    console.log("METODO ELIMINAR -> ", id_vehiculo);
  }





  async crearAuto(){
    const req = await this.vehiculoService.crearVehiculo({
      color:this.color,
      id_marca:this.marca,
      modelo:this.modelo,
      patente:this.patente
    })
  }


  async cargaPersonaje(){
    const req = await this.personajeService.obtenerPersonajes();
    console.log(req.items[0].gender);
    this.personajes = req.items;
    console.log("PERSONAJES : ", this.personajes);
  }

  async cargarVehiculos(){
    const req = await this.vehiculoService.obtenerVehiculos();
    this.vehiculos2 = req;
    console.log("VEHICULO PROPIEDAD ", this.vehiculos2);
    
  }

  nombre:string = "Juanito";
  edad:number = 10

  imagen:string = "img/mc.webp";




vehiculos:Vehiculo[] = [
  {
    color:"Rojo",
    id_vehiculo:1,
    imagen:"",
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




