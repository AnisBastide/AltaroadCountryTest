import {Component, OnInit} from '@angular/core';
import {Continent, Country} from "../utils/type";

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  public country:Country =  {GDP: 0, continent: Continent.Europe, image: "", name: "", population: 0, size: 0}
  constructor() { }

  ngOnInit(): void {
  }

}
