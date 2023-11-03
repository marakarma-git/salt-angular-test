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
import { RouterModule, Routes } from '@angular/router';
import { MaincontentComponent } from './home/maincontent/maincontent.component';
import { RightcontentComponent } from './home/rightcontent/rightcontent.component';

const routes: Routes = [
  {
    path: '',
    component: GuestComponent,
    children:[
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'business',
        component: BusinessComponent
      },
      {
        path: 'suggestion',
        component: SuggestionComponent
      },
      {
        path: 'help',
        component: HelpComponent
      },
      {
        path: 'pricing',
        component: PricingComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  }
];

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
    FooterComponent,
    MaincontentComponent,
    RightcontentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GuestModule { }
