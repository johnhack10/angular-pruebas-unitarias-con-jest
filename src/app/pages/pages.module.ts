
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { NavModule } from '../nav/nav.module';
import { ReduceTextPipe } from '../pipes/reduce-text/reduce-text.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogModule } from '../dialogs/confirmation-dialog/confirmation-dialog.module';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    NavModule,
    PagesRoutingModule,
    MatDialogModule,
    ConfirmationDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PagesComponent,
    HomeComponent,
    FormComponent,
    CartComponent,
    ReduceTextPipe,
  ],
  exports: [
    PagesComponent,
  ]
})
export class PagesModule { }

