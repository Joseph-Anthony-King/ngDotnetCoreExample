import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'UTCStringToDateString'
})
export class UTCStringToDateStringPipe implements PipeTransform {

    transform(value: any, args?: any): string {

        const result = new Date(value).toDateString();
        return result;
    }
}
