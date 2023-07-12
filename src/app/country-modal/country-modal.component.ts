import { Component, OnInit } from '@angular/core';
import {Continent, Country} from "../utils/type";
import {CountryTableComponent} from "../country-table/country-table.component";
import {MatDialogRef } from "@angular/material/dialog";

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
  public title = "Ajouter un pays"
  public isModify = false

  constructor(public countryTable:CountryTableComponent,public dialogRef:MatDialogRef<CountryModalComponent>) {
    const data = this.dialogRef._containerInstance._config.data
    if(data){
      const country = data as Country
      this.title = "Modifier le pays: " + country.name
      this.loadCountry(country)
      this.isModify = true
    }
  }

  ngOnInit(): void {
  }
  public addCountry(){
    if(this.isModify){
      this.countryTable.modifyCountry({name:this.name,population:parseInt(this.population),continent:this.continent,size:parseInt(this.size),GDP:parseInt(this.GDP),image:this.image})
    }
    else{
      this.countryTable.addCountry({name:this.name,population:parseInt(this.population),continent:this.continent,size:parseInt(this.size),GDP:parseInt(this.GDP),image:this.image})
    }
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

  public loadCountry(country:Country){
    this.name=country.name
    this.population=country.population.toString()
    this.size=country.size.toString()
    this.continent=country.continent
    this.GDP=country.GDP.toString()
    this.image=country.image
  }

}
