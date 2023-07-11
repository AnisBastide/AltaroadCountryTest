import {Component, OnInit} from '@angular/core';
import {Continent, Country} from "../utils/type";
import {ActivatedRoute} from "@angular/router";
import {CountryTableComponent} from "../country-table/country-table.component";

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  public country:Country =  {GDP: 0, continent: Continent.Europe, image: "", name: "", population: 0, size: 0}
  constructor(private route:ActivatedRoute,private countryTableComponent:CountryTableComponent) {
    this.route.params.subscribe( params => this.country = countryTableComponent.countries[params['id']] );
  }

  ngOnInit(): void {
  }

}
