import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../storage.service';
const DEFAULT_PEOPLE = 42;
const DEFAULT_DONATION = 57;
@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.sass']
})
export class DonationFormComponent implements OnInit {

  moneyRecievedTotal: number;
  donationAmount: number = 0;
  peopleDonated: number;
  showReasons: boolean = false;

  reasonsMessage: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facilis quibusdam soluta suscipit quia praesentium adipisci necessitatibus enim qui aperiam, ratione ullam? Eius impedit tempora nemo quas quidem blanditiis aliquam!'

  constructor(
    public storageService: StorageService,
  ) { }

  donateMoney() {
    this.peopleDonated ++;
    this.moneyRecievedTotal = this.moneyRecievedTotal + this.donationAmount;
    this.donationAmount = 0;
    this.saveToSessionStorage();
  }

  saveToSessionStorage() {
    this.storageService.sessionStorageSet('totalDonation', this.moneyRecievedTotal.toString());
    this.storageService.sessionStorageSet('totalPeople', this.peopleDonated.toString());
  }

  ngOnInit() {
    this.moneyRecievedTotal = 
    this.storageService.localStorageGet('totalDonation') ?
        parseInt(this.storageService.localStorageGet('totalDonation')) :
        this.storageService.sessionStorageGet('totalDonation') ?
          parseInt(this.storageService.sessionStorageGet('totalDonation')) :
          DEFAULT_DONATION;
    this.peopleDonated = 
      this.storageService.localStorageGet('totalPeople') ?
        parseInt(this.storageService.localStorageGet('totalPeople')) :
        this.storageService.sessionStorageGet('totalPeople') ?
          parseInt(this.storageService.sessionStorageGet('totalPeople')) :
          DEFAULT_PEOPLE;
  }
}
