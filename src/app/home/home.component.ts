import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  years: any = [];
  year: any;
  months: any;
  month: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.years = this.sharedService.getYears();
    this.year = this.years[0];
    this.months = this.sharedService.getMonths(this.year);
    this.month = this.months[0];
  }

  changeYear(e) {
    //console.log('e===', e);
    this.month = null;
    this.year = e.target.value;
    this.months = this.sharedService.getMonths(this.year);
    this.sharedService.triggerFilter();
  }

  changeMonth(e) {
    //console.log('e===+++', e);
    this.month = e.target.value;
    this.years = this.sharedService.getYears(this.month);
    this.sharedService.triggerFilter();
  }
}
