import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestComponent } from './guest.component';
import { AboutComponent } from './about/about.component';
import { BusinessComponent } from './business/business.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';



@NgModule({
  declarations: [
    GuestComponent,
    AboutComponent,
    BusinessComponent,
    ContactComponent,
    HelpComponent,
    HomeComponent,
    SuggestionComponent,
    PricingComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GuestModule { }
