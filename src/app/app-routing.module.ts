import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'guest',
    loadChildren: ()=> import('./guest/guest.module').then(module=>module.GuestModule)
  },
  {
    path: 'admin',
    loadChildren: ()=> import('./admin/admin.module').then(module=>module.AdminModule)
  },
  {
    path: 'shared',
    loadChildren: ()=> import('./shared/shared.module').then(module=>module.SharedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
