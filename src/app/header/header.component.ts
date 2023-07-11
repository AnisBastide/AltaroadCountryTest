import { Component, OnInit } from '@angular/core';
import {CountryTableComponent} from "../country-table/country-table.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public searchBarVisibility = false
  public searchQuery=''

  constructor(public countryTable:CountryTableComponent) { }

  ngOnInit(): void {
  }
  public toggleVisibility(){
    this.searchBarVisibility = !this.searchBarVisibility
    console.log(this.searchBarVisibility)
  }
  public search(){
    console.log('qqqq')
    this.countryTable.filterByName(this.searchQuery)
  }


}
