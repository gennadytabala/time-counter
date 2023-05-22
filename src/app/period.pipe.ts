import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'period'
})
export class PeriodPipe implements PipeTransform {

  transform(value: number | undefined): string {
    if (!value) return "00:00:00";
    const hh = Math.floor(value / 60 / 60);
    const mm = Math.floor((value - (hh * 60 * 60)) / 60);
    const ss = value - mm * 60;

    return `${this.toTwoDigit(hh)}:${this.toTwoDigit(mm)}:${this.toTwoDigit(ss)}`;
  }

  toTwoDigit(num: number) {
    const str = num.toString();
    if (str.length === 1) return `0${str}`
    return str
  }

}
