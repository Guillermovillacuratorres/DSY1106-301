import { Component, inject, OnInit } from '@angular/core';
import { Vehiculo } from '../../models/Vehiculo';
import { PersonajesService } from '../../services/personajes-service';
import { Personaje } from '../../models/personaje';


@Component({
  selector: 'app-inicio-component',
  imports: [],
  templateUrl: './inicio-component.html',
  styleUrl: './inicio-component.scss',
})
export class InicioComponent implements OnInit {


  private personajeService = inject(PersonajesService);

  personajes:any[]=[];

  ngOnInit() {
    console.table(this.vehiculos);
    console.info("Error");
    this.cargaPersonaje();
    
  }


  async cargaPersonaje(){
    const req = await this.personajeService.obtenerPersonajes();
    console.log(req.items[0].gender);
    this.personajes = req.items;
    console.log("PERSONAJES : ", this.personajes);
    
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




