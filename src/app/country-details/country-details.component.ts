import {Component, OnInit} from '@angular/core';
import {Continent, Country} from "../utils/type";
import {ActivatedRoute} from "@angular/router";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  public country:Country =  {Gdp: 0, continent: Continent.Europe, image: "", name: "", population: 0, size: 0};
  public id = 0;

  constructor(private route:ActivatedRoute,public app :AppComponent) {
  }

   ngOnInit(): void {
      this.app.filteredCountries = [];
     this.app.countries.forEach((country) => {this.app.filteredCountries.push(country)});
     this.route.params.subscribe( params => this.id = params["id"] );
     this.country = this.app.filteredCountries[this.id];
  }
}\
}
