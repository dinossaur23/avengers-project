import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AvengersComponent } from './avengers/avengers.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { CreateAccountComponent } from './create-account/create-account.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'avengers', component: AvengersComponent },
  { path: 'login', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'create-account', component: CreateAccountComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
