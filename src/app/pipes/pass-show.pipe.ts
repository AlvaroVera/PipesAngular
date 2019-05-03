import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/core/src/render3/util';
import { forEach } from '@angular/router/src/utils/collection';

@Pipe({
  name: 'passShow'
})
export class PassShowPipe implements PipeTransform {
  valorOriginal: string;
  transform(value: string, ocultar: boolean = true): string {
    this.valorOriginal = value;

    let asteriscos: string = "";

    if (ocultar) {
      for (let i = 0; i < value.length; i++) {
        asteriscos += "*";        
      }
      return asteriscos;
    }else{
      return value;
    }

  }

}
