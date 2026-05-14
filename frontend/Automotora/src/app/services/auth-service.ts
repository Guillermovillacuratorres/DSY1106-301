import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {


  key:string = "llave_storage";

  public agregarStorage(new_obj:obj){
    localStorage.setItem(this.key,JSON.stringify(new_obj));
  }

  obtenerStorage(){
    var storage = localStorage.getItem(this.key);
    if (storage != null) {
      return JSON.parse(storage);
    }
  }
  

}



interface obj {
  nombre:string;
  apellido:string;
}