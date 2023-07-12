import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-details-header',
  templateUrl: './details-header.component.html',
  styleUrls: ['./details-header.component.css']
})
export class DetailsHeaderComponent implements OnInit {
  public countryName:string =""
  public id = 0;

  constructor(private route:ActivatedRoute,public app:AppComponent) {
    this.route.params.subscribe( params => this.countryName = this.app.filteredCountries[params['id']].name )
  }

  ngOnInit(): void {
    this.app.filteredCountries = [];
    this.app.countries.forEach((country) => {this.app.filteredCountries.push(country)})
    this.route.params.subscribe( params => this.id = params["id"] );
    this.countryName = this.app.filteredCountries[this.id].name;
  }

}
