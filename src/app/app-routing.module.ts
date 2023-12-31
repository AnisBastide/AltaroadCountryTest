import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppModule} from "./app.module";
import {DetailsComponent} from "./details/details.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path:'details-page/:id',component:DetailsComponent},
  {path:'',component:HomeComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
