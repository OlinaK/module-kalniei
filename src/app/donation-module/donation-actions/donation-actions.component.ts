import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../storage.service';

@Component({
  selector: 'app-donation-actions',
  templateUrl: './donation-actions.component.html',
  styleUrls: ['./donation-actions.component.sass']
})
export class DonationActionsComponent implements OnInit {

  constructor(
    public storageService: StorageService,
  ) { }

  saveForLater() {
    const moneyRecievedTotal = this.storageService.sessionStorageGet('totalDonation');
    const peopleDonated = this.storageService.sessionStorageGet('totalPeople');

    this.storageService.localStorageSet('totalDonation', moneyRecievedTotal);
    this.storageService.localStorageSet('totalPeople', peopleDonated);
  }

  ngOnInit() {
  }

}
