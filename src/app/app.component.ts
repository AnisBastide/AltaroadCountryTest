import { Component } from '@angular/core';
import {Continent, Country} from "./utils/type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public countries:Country[] = [{name:'France',continent:Continent.Europe,Gdp:10000,image:'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png',size:100000,population:50000000},
    {name:'Belgique',continent:Continent.Europe,Gdp:50000,image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/196px-Flag_of_Belgium.svg.png',size:5000,population:5000000}]
  public filteredCountries:Country[]  = []
  title = 'AltaroadCountryTest';
}
