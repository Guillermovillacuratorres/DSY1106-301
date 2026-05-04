import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { Personaje } from '../models/personaje';

@Injectable({
  providedIn: 'root',
})
export class PersonajesService {
  private http = inject(HttpClient);


  private url = "https://dragonball-api.com/api/characters";

  async obtenerPersonajes(){
    return await lastValueFrom(this.http.get<Personaje>(this.url));
  }


}
