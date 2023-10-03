import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charactersLimit',
})
export class CharactersLimitPipe implements PipeTransform {
  transform(value: string): string {
    return value.slice(0, 35);
  }
}
