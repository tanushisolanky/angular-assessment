import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(description: any,):any {
  if (description.length > 15){
    return description.substring(0,15) + '...'
  }else{
    return description;
  }
}

}
