import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-component',
  imports: [],
  templateUrl: './inicio-component.html',
  styleUrl: './inicio-component.scss',
})
export class InicioComponent {

  nombre:string = "Juanito";
  edad:number = 10

  imagen:string = "img/mc.webp";


objeto: any = {
  "nombre": "",
  "edad": 12
};


objeto2: any[] = [
  { "nombre": "", "edad": 12 }
];


items = [
  { name: 'Manzana' },
  { name: 'Pera' },
  { name: 'Plátano' }
];
}
