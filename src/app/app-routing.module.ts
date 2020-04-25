import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule  } from '@angular/platform-browser';

import { LandingComponent } from './landing/landing.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: '',               component: LandingComponent},
  { path: 'user-profile',     redirectTo: '/landing' },
  { path: 'register',         redirectTo: '/landing' },
  { path: 'login',            component: LoginComponent }
];

@NgModule({
  imports: [ BrowserModule, RouterModule.forRoot(routes)],
  exports: [ RouterModule],
})

export class AppRoutingModule { }
