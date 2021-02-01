import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
})
export class Child1Component implements OnInit {
  @Input() year;
  @Input() month;
  @Input() table;
  data: any[] = [];
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.year && changes.year.currentValue) {
      this.year = changes.year.currentValue;
    } else if (changes.month && changes && changes.month.currentValue) {
      this.month = changes.month.currentValue;
    }
    this.data =
      this.table &&
      this.sharedService.getData(this.year, this.month, this.table);
  }
}
