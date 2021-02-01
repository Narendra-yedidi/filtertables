import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  data = {
    table1: [
      { year: '2012', month: 'Jan', price: '$400' },
      { year: '2013', month: 'Feb', price: '$900' },
      { year: '2014', month: 'March', price: '$800' },
      { year: '2014', month: 'May', price: '$920' },
    ],

    table2: [
      { year: '2012', month: 'Dec', price: '$390' },
      { year: '2012', month: 'Jan', price: '$400' },
      { year: '2013', month: 'Feb', price: '$600' },
      { year: '2015', month: 'Apr', price: '$700' },
    ],
  };

  triggerFilter() {}
  getMonths(year: any): any {
    let months = [];
    let table1 = this.data.table1;
    let table2 = this.data.table2;

    table1.forEach((val) => {
      if (val.year === year && !months.includes(val.month)) {
        months.push(val.month);
      }
    });

    table2.forEach((val) => {
      if (val.year === year && !months.includes(val.month)) {
        months.push(val.month);
      }
    });
    return months;
  }
  getYears(month?): any {
    let years = [];
    let table1 = this.data.table1;
    let table2 = this.data.table2;

    table1.forEach((val) => {
      if (
        (month && month === val.month && !years.includes(val.year)) ||
        (!month && !years.includes(val.year))
      ) {
        years.push(val.year);
      }
    });

    table2.forEach((val) => {
      if (
        (month && month === val.month && !years.includes(val.year)) ||
        (!month && !years.includes(val.year))
      ) {
        years.push(val.year);
      }
    });

    return years;
  }

  getData(year?, month?, table?) {
    let data = [];
    let _table = this.data[table];
    if (year && month) {
      _table.forEach((val) => {
        if (val.year === year && val.month === month) {
          data.push(val);
        }
      });
    } else if (year) {
      _table.forEach((val) => {
        if (val.year === year) {
          data.push(val);
        }
      });
    } else if (month) {
      _table.forEach((val) => {
        if (val.month === month) {
          data.push(val);
        }
      });
    } else {
      data = _table;
    }

    return data;
  }

  constructor() {}
}
