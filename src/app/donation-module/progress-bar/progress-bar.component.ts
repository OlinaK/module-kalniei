import { Component, OnInit, Input, OnChanges } from '@angular/core';
const GOAL_MONEY = 500;
@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.sass']
})
export class ProgressBarComponent implements OnInit, OnChanges {

  @Input() moneyDonated: number;
  progressValue: number = 0;
  moneyRecievedTotal: number = 0;
  goalAchieved: boolean = false;
  moneyLeft: number = 0;

  constructor() { }

  moneyCalculate(): void {
    this.moneyRecievedTotal = 57 + this.moneyDonated;
    if (GOAL_MONEY > this.moneyRecievedTotal) {
      this.progressValue = (100 * this.moneyRecievedTotal) / GOAL_MONEY;
      this.moneyLeft = GOAL_MONEY - this.moneyRecievedTotal;
    } else {
      this.progressValue = 100;
      this.goalAchieved = true;
    }
  }
  
  ngOnInit() {
    this.moneyCalculate();
  }

  ngOnChanges() {
    this.moneyCalculate();
  }

}
