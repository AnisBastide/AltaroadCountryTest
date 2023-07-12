import {Component, OnInit} from '@angular/core';
import {Continent, Country} from "../utils/type";
import {filter} from "../utils/sort";
import {MatDialog} from "@angular/material/dialog";
import {CountryModalComponent} from "../country-modal/country-modal.component";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent implements OnInit {

  constructor(public dialog: MatDialog,public app :AppComponent) {

  }

  ngOnInit(): void {
    this.app.countries.forEach((country) => {this.app.filteredCountries.push(country)})
  }

  public callFilter(data:Country[],filterType:string) {
    const newCountriesList = filter(data,filterType);
    this.app.filteredCountries = []
    newCountriesList.forEach((country) => {
      this.app.filteredCountries.push(country)
    })
  }

  public addCountry(country:Country){
    this.app.countries.push(country)
    this.app.filteredCountries.push(country)
  }

  public search(event:Event) {
    const filter = (event.target as HTMLInputElement).value
    this.app.filteredCountries = []
    const reg = new RegExp(filter);
    this.app.countries.filter((element)=> {
      if(element.name.match(reg)){
        this.app.filteredCountries.push(element)
      }
    });
  }


  public modifyCountry(countryNewValue:Country){
    this.app.filteredCountries = []
    this.app.countries.forEach((country) => {
      if(country.name === countryNewValue.name){
        country.size = countryNewValue.size
        country.population = countryNewValue.population
        country.Gdp = countryNewValue.Gdp
        country.continent = countryNewValue.continent
        country.image = countryNewValue.image
      }
      this.app.filteredCountries.push(country)
    })
  }

  public openDialog(country:Country): void {
    this.dialog.open(CountryModalComponent, {
      width: '25vw',
      height:'25vw',
      data:country
    });
  }
}
