import { Component, OnInit } from '@angular/core';
import {Continent, Country} from "../utils/type";

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent implements OnInit {
  public countries:Country[] = [{name:'France',continent:Continent.Europe,GDP:50000,image:'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png',size:5000,population:5000000},
    {name:'Belgique',continent:Continent.Europe,GDP:50000,image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/196px-Flag_of_Belgium.svg.png',size:5000,population:5000000}]
  constructor() { }

  ngOnInit(): void {
  }

}
