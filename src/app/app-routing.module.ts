import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';

const routes: Routes =[
  { path: 'home',             redirectTo: 'landing'},
  { path: 'user-profile',     redirectTo: 'landing' },
  { path: 'register',         redirectTo: 'landing' },
  { path: 'landing',          redirectTo: 'landing' },
  { path: 'login',          redirectTo: 'landing' },
  { path: '', redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})

export class AppRoutingModule { }
