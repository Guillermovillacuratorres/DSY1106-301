import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Vehiculo2 } from '../models/Vehiculo';

@Injectable({
  providedIn: 'root',
})
export class VehiculoService {
  private http = inject(HttpClient);


  async obtenerVehiculos(){
    return await lastValueFrom(this.http.get<Vehiculo2>(environment.urlVehiculo));
  }

  async crearVehiculo(autoNuevo:bodyAgregarAuto){
    return await lastValueFrom(this.http.post<Vehiculo2>(environment.urlVehiculo, autoNuevo));
  }


}


interface bodyAgregarAuto{
  "patente": string;
  "id_marca": number;
  "color":string;
  "modelo": string;
}