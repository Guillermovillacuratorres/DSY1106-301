import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { Vehiculo, Vehiculo2 } from '../../models/Vehiculo';
import { PersonajesService } from '../../services/personajes-service';
import { Item, Personaje } from '../../models/personaje';
import { VehiculoService } from '../../services/vehiculo-service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio-component',
  imports: [FormsModule],
  templateUrl: './inicio-component.html',
  styleUrl: './inicio-component.scss',
})
export class InicioComponent implements OnInit {


  private personajeService = inject(PersonajesService);
  private vehiculoService = inject(VehiculoService);
  private cdr = inject(ChangeDetectorRef);
  private router = inject(Router);

  patente:string = "";
  marca:number = 0;
  modelo:string = "";
  color:string = "";

  //constructor(private vehiculoService:VehiculoService){}

  personajes:any[]=[];
  vehiculos2:any;

  personajesSignal = signal<Item[]>([]);

  ngOnInit() {
    console.table(this.vehiculos);
    console.info("Error");
    this.cargaPersonaje();
    this.cargarVehiculos();
    //this.crearAuto();
  }


  editar(auto:Vehiculo2){
    console.log("METODO EDITAR ->", auto);
    this.router.navigateByUrl("editar/" + auto.id_vehiculo);
  }

  eliminar(id_vehiculo:number){
    console.log("METODO ELIMINAR -> ", id_vehiculo);
    this.vehiculoService.eliminarVehiculo(id_vehiculo);
    this.cargarVehiculos();
  }





  async crearAuto(){
    const req = await this.vehiculoService.crearVehiculo({
      color:this.color,
      id_marca:this.marca,
      modelo:this.modelo,
      patente:this.patente
    });
    this.cargarVehiculos();
  }


  async cargaPersonaje(){
    const req = await this.personajeService.obtenerPersonajes();
    console.log(req.items[0].gender);
    this.personajes = req.items;
    this.personajesSignal.set(req.items);
    console.log("PERSONAJES : ", this.personajes);
    this.cdr.detectChanges();
  }

  async cargarVehiculos(){
    const req = await this.vehiculoService.obtenerVehiculos();
    this.vehiculos2 = req;
    console.log("VEHICULO PROPIEDAD ", this.vehiculos2);
    this.cdr.detectChanges();
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




