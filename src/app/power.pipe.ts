import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {
  // Takes the input and return back the transformed value
  transform(inputvalue: any, args?: any): number {
    return Math.pow(inputvalue, args);
  }

}
