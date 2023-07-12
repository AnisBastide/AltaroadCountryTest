import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-details-header',
  templateUrl: './details-header.component.html',
  styleUrls: ['./details-header.component.css']
})
export class DetailsHeaderComponent implements OnInit {
  public countryName:string =""

  constructor(private route:ActivatedRoute,public app:AppComponent) {
    console.log(this.countryName)
    this.route.params.subscribe( params => this.countryName = this.app.filteredCountries[params['id']].name )
    console.log(this.app.filteredCountries);
    console.log(this.countryName)
  }

  ngOnInit(): void {

  }

}
