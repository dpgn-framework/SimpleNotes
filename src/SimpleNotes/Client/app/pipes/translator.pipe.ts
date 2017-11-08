import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'translator' })
export class TranslatorPipe implements PipeTransform {
    transform(value: string, param1: string, param2: boolean) {
        console.log("param1: " + param1);
        console.log("param2: " + param2);

        if (value) {
            return "?" + value + "?";
        }
    }
}