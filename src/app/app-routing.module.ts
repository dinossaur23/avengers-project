import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AvengersComponent } from './avengers/avengers.component';


const routes: Routes = [
  { path: 'avengers', component: AvengersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  });

export class AppRoutingModule { };
