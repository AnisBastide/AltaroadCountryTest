import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { CountryTableComponent } from './country-table/country-table.component';
import { DetailsHeaderComponent } from './details-header/details-header.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './details/details.component';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { CountryModalComponent } from './country-modal/country-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountryTableComponent,
    DetailsHeaderComponent,
    CountryDetailsComponent,
    DetailsComponent,
    HomeComponent,
    CountryModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    RouterModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [CountryTableComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
