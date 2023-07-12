import { Component, OnInit } from '@angular/core';
import {CountryTableComponent} from "../country-table/country-table.component";
import {CountryModalComponent} from "../country-modal/country-modal.component";
import {MatDialog} from "@angular/material/dialog";
import * as FileSaver from "file-saver";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public searchBarVisibility = false
  public searchQuery=''

  constructor(public countryTable:CountryTableComponent,public dialog: MatDialog,public app:AppComponent) { }

  ngOnInit(): void {
  }
  public toggleVisibility(){
    this.searchBarVisibility = !this.searchBarVisibility
  }
  public search(event:Event){
    this.countryTable.search(event)
  }

  public openDialog(): void {
    this.dialog.open(CountryModalComponent, {
      width: '25vw',
      height:'25vw'
    });
  }


  public csvDownload () {
    const countries = this.app.filteredCountries
    const headers = ['name','population','size','continent','Gdp','image']
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
            return rowData[headKey.replace(' ', '_')] ===
            null ||
            rowData[headKey.replace(' ', '_')] ===
            undefined ? '' : rowData[headKey.replace(' ', '_')];
          }).join(separator);
        }).join('\n');
    this.exportFile(csvContent, 'text/csv');
  }

  public exportFile(data:string,fileType:string){
    const blob = new Blob([data],{type:fileType})
    FileSaver.saveAs(blob,'Download Countries')
  }
}
