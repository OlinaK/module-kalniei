import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.sass']
})
export class DonationFormComponent implements OnInit {

  moneyDonated: number = 43;

  constructor() { }

  ngOnInit() {
  }

}
