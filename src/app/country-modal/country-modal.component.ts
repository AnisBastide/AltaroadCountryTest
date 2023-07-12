import { Component, OnInit } from '@angular/core';
import {Continent} from "../utils/type";
import {CountryTableComponent} from "../country-table/country-table.component";
@Component({
  selector: 'app-country-modal',
  templateUrl: './country-modal.component.html',
  styleUrls: ['./country-modal.component.css']
})
export class CountryModalComponent implements OnInit {
  public name = ""
  public population = ""
  public size = ""
  public continent = Continent.Europe
  public GDP = ""
  public image = ""
  public continentType = Continent

  constructor(public countryTable:CountryTableComponent) { }

  ngOnInit(): void {
  }
  public addCountry(){
    this.countryTable.addCountry({name:this.name,population:parseInt(this.population),continent:this.continent,size:parseInt(this.size),GDP:parseInt(this.GDP),image:this.image})
  }

  public updateName(event:Event){
    this.name = (event.target as HTMLInputElement).value
  }
  public updatePopulation(event:Event){
    this.population = (event.target as HTMLInputElement).value
  }
  public updateSize(event:Event){
    this.size = (event.target as HTMLInputElement).value
  }
  public updateContinent(event:Event){
    this.continent = (event.target as HTMLInputElement).value as Continent
  }
  public updateGDP(event:Event){
    this.GDP = (event.target as HTMLInputElement).value
  }
  public updateImage(event:Event){
    this.image = (event.target as HTMLInputElement).value
  }

}
