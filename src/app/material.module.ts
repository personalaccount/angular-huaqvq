import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';


import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

import { BasicNavbarComponent } from './basic-navbar/basic-navbar.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BasicNavbarComponent],
  imports: [
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
    RouterModule
  ],
  exports: [
    // MatInputModule,
    // MatPaginatorModule,
    // MatProgressSpinnerModule,
    // MatSortModule,
    // MatTableModule,
    // MatIconModule,
    // MatButtonModule,
    // MatCardModule,
    // MatFormFieldModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    // MatButtonToggleModule,
    // MatSelectModule,
    // MatToolbarModule,
    // MatMenuModule,
    // MatListModule,
    // MatGridListModule,
    // BasicNavbarComponent
  ]
})
export class MaterialModule { }
