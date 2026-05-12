import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { VehiculoService } from '../../services/vehiculo-service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
  par_id_vehiculo = 0;

  ngOnInit() {

    this.par_id_vehiculo = parseInt(this.route.snapshot.paramMap.get('idVehiculo') || '0');
    console.log(this.par_id_vehiculo);    
    this.cargaVehiculo();
  }

  private route = inject(ActivatedRoute);
  private vehiculoService = inject(VehiculoService);
  private cdr = inject(ChangeDetectorRef);
  private router = inject(Router);



  async cargaVehiculo(){
    const req = await this.vehiculoService.obtenerVehiculoPorId(this.par_id_vehiculo);
    console.log(req.patente);

    this.patente = req.patente;
    this.color = req.color;
    this.modelo = req.modelo;
    this.marca = req.id_marca;
    this.cdr.detectChanges();

  }


  editarAuto(){
    this.vehiculoService.editarVehiculo({
      color: this.color,
      id_marca: this.marca,
      id_vehiculo:this.par_id_vehiculo,
      modelo:this.modelo,
      patente:this.patente
    });
    alert("Auto editado")
    this.router.navigateByUrl("");
  }


}
