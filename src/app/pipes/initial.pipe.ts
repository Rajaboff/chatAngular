import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initial'
})
export class InitialPipe implements PipeTransform {

  transform(name: string): string {
    const splittedName = name.split(" ");
    return `${splittedName[0][0]}${splittedName[1][0]}`;
  }

}
