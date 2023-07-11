import {Component, OnInit} from '@angular/core';
import {Continent, Country} from "../utils/type";
import {ActivatedRoute} from "@angular/router";
import {CountryTableComponent} from "../country-table/country-table.component";

@Component({
  selector: 'app-details-header',
  templateUrl: './details-header.component.html',
  styleUrls: ['./details-header.component.css']
})
export class DetailsHeaderComponent implements OnInit {
  public country:Country = {GDP: 0, continent: Continent.Europe, image: "", population: 0, size: 0, name:'France'}

  constructor(private route:ActivatedRoute,private countryTableComponent:CountryTableComponent) {
    this.route.params.subscribe( params => this.country = countryTableComponent.countries[params['id']] );
  }

  ngOnInit(): void {}

}
