import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminfooterComponent } from './partials/adminfooter/adminfooter.component';
import { AdminheaderComponent } from './partials/adminheader/adminheader.component';
import { ActivityComponent } from './activity/activity.component';
import { ChannelComponent } from './channel/channel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SocialComponent } from './social/social.component';
import { UserComponent } from './user/user.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children:[
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'activity',
        component: ActivityComponent,
      },
      {
        path: 'social',
        component: SocialComponent,
      },
      {
        path: 'channel',
        component: ChannelComponent,
      }
    ]
  }
]

@NgModule({
  declarations: [
    AdminComponent,
    AdminfooterComponent,
    AdminheaderComponent,
    ActivityComponent,
    ChannelComponent,
    DashboardComponent,
    SocialComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
