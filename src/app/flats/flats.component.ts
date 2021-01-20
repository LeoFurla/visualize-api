import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-flats',
  templateUrl: './flats.component.html',
  styleUrls: ['./flats.component.css']
})
export class FlatsComponent implements OnInit {

  title: string = 'Fiats';
  flats = [];

  constructor(private _dataService: DataService, private titleService: Title) {}

  ngOnInit() {

    this.titleService.setTitle(this.title);

    this._dataService.getData().subscribe(obj=>{
        const fiats: [] = obj['data']['attributes']['fiats'];

        let fiat_name = fiats.map(obj=> obj.attributes.name);
        
        this.flats = fiats;
    
      console.log(obj);
      console.log(fiats);
      console.log(fiat_name);
    });
  }

}
