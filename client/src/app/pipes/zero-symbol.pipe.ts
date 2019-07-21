import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'zeroSymbol'
})
export class ZeroSymbolPipe implements PipeTransform {

    transform(value: number, args = "---"): string {
        if(value === 0) {
            return args;
        }
        return value.toString();
    }

}
