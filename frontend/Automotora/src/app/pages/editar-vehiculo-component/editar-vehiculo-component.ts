import { Component, inject, OnInit } from '@angular/core';
import { VehiculoService } from '../../services/vehiculo-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-vehiculo-component',
  imports: [FormsModule],
  templateUrl: './editar-vehiculo-component.html',
  styleUrl: './editar-vehiculo-component.scss',
})
export class EditarVehiculoComponent implements OnInit {


  patente:string = "";
  marca= 0;
  modelo:string = "";
  color:string = "";
  id_vehiculo = 0;


  ngOnInit() {
    this.cargaVehiculo();
  }

  private vehiculoService = inject(VehiculoService);



  async cargaVehiculo(){
    const req = await this.vehiculoService.obtenerVehiculoPorId(2);
    console.log(req.patente);

    this.patente = req.patente;
    this.color = req.color;
    this.modelo = req.modelo;
    this.marca = req.id_marca;
    this.id_vehiculo = req.id_vehiculo;
  }


  editarAuto(){

  }


}
