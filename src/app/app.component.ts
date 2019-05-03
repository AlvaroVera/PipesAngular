import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pipes';
  nombre = 'Alvaro';
  nombre2 = 'alvAro veRa bEnDezu';
  contrasena = "Alvaro29"
  verContrasena = true;
  video = 'qDCOdOTWwNQ';
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a: number = 0.234;
  pago: number = 1.3495;
  jsonPrueba: Object = {
    foo: 'bar', 
    baz: 'qux', 
    nested: {
      xyz: 3, 
      numbers: [1, 2, 3, 4, 5]
    }
  };

  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Llego la data'), 3500);
  });

  fecha = new Date();

}
