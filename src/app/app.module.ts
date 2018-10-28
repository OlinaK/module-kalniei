import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DonationmoduleComponent } from './donation-module/donation-module.component';
import { ProgressBarComponent } from './donation-module/progress-bar/progress-bar.component';
import { DonationFormComponent } from './donation-module/donation-form/donation-form.component';
import { DonationActionsComponent } from './donation-module/donation-actions/donation-actions.component';
import { MessageModelComponent } from './message-model/message-model.component';

@NgModule({
  declarations: [
    AppComponent,
    DonationmoduleComponent,
    ProgressBarComponent,
    DonationFormComponent,
    DonationActionsComponent,
    MessageModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
