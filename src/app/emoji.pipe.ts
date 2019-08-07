import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emoji'
})
export class EmojiPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value === "Si") {
      return value + " 😊";
    }else if(value === "No") {
      return value + " 🙁";
    }  
  }

}