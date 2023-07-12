import { Component, OnInit } from '@angular/core';
import {CountryTableComponent} from "../country-table/country-table.component";
import {CountryModalComponent} from "../country-modal/country-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {Country} from "../utils/type";
import * as FileSaver from "file-saver";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public searchBarVisibility = false
  public searchQuery=''

  constructor(public countryTable:CountryTableComponent,public dialog: MatDialog) { }

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

  public openDialog(): void {
    this.dialog.open(CountryModalComponent, {
      width: '25vw',
      height:'25vw'
    });
  }


  public csvDownload () {
    const countries = this.countryTable.filteredCountries
    const headers = ['Name','Population','Size','Continent','GDP','Image']
    if (!countries || !countries.length) {
      return;
    }
    const separator = ',';
    const csvContent: string =
      headers.join(separator) +
      '\n' +
      countries
        .map((rowData: any) => {
          return headers.map((headKey:string) => {
            return rowData [headKey.toLowerCase().replace(' ', '_')] ===
            null ||
            rowData[headKey.toLowerCase().replace(' ', '_')] ===
            undefined ? '' : rowData[headKey.toLowerCase().replace(' ', '_')];
          }).join(separator);
        }).join('\n');
    this.exportFile(csvContent, 'text/csv');
  }

  public exportFile(data:string,fileType:string){
    const blob = new Blob([data],{type:fileType})
    FileSaver.saveAs(blob,'Download Countries')
  }
}
