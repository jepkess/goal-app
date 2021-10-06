import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today: Date = new Date();  //get current date and time
    let todaywithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - todaywithNoTime) // returns value in milliseconds
    const secondsInDay = 86400;//60 * 60minutes in an hour * 24hours in a day
    var dateDifferenceSeconds = dateDifference * 0.001; //convert millisecond to seconds
    var dateCouter = dateDifferenceSeconds / secondsInDay;

    if (dateCouter >= 1 && value > todaywithNoTime) {
      return dateCouter;
    } else {
      return 0;
    }

  }

}


