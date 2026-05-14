import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { Personaje } from '../models/personaje';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PersonajesService {
  private http = inject(HttpClient);


 

  async obtenerPersonajes(){
    return await lastValueFrom(this.http.get<Personaje>(environment.urlPersonajes));
  }





}
