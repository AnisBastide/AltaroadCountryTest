import { Component, OnInit } from '@angular/core';
import {Continent, Country} from "../utils/type";
import {filter} from "../utils/sort";
import {HeaderComponent} from "../header/header.component";
import {count} from "rxjs";

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent implements OnInit {
  public countries:Country[] = [{name:'France',continent:Continent.Europe,GDP:10000,image:'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png',size:100000,population:50000000},
    {name:'Belgique',continent:Continent.Europe,GDP:50000,image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/196px-Flag_of_Belgium.svg.png',size:5000,population:5000000}]
  public filteredCountries:Country[] = []
  constructor() {
   this.countries.forEach((country) => {this.filteredCountries.push(country)})

  }

  ngOnInit(): void {
  }

  public callFilter(data:Country[],filterType:string) {
    filter(data,filterType);
    console.log(this.countries)
  }

  public filterByName(filter:string) {
    console.log('blblblblblb')
    this.filteredCountries = []
    const reg = new RegExp(filter.toLowerCase());
    this.countries.filter((element)=> {
      if(element.name.match(reg)){
        this.filteredCountries.push(element)
      }
    });
  }
  public addCountry(country:Country){
    this.countries.push(country)
    this.filteredCountries.push(country)
  }
}
