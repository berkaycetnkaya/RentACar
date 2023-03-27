import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetail';

@Pipe({
  name: 'colorfilter'
})
export class ColorfilterPipe implements PipeTransform {

  transform(value: CarDetail[],filterText:string ): CarDetail[] {
    filterText = filterText? filterText.toLocaleLowerCase():""

    
    
    
    return filterText?value.filter((p:CarDetail)=>p.colorName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
