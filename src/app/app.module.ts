import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DonationmoduleComponent } from './donation-module/donation-module.component';
import { ProgressBarComponent } from './donation-module/progress-bar/progress-bar.component';
import { DonationFormComponent } from './donation-module/donation-form/donation-form.component';
import { DonationActionsComponent } from './donation-module/donation-actions/donation-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    DonationmoduleComponent,
    ProgressBarComponent,
    DonationFormComponent,
    DonationActionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
