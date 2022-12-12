import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, rate:number): number {
    return value - (value*rate/100) ;
  }
// value : değiştirmeye calıstıgınız veri,
// dönüş tipi
// args: parametreler
// ilk paremetremiz oran :rate


}
