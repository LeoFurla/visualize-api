import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../data.service';


 

@Component({
  selector: 'app-commodities',
  templateUrl: './commodities.component.html',
  styleUrls: ['./commodities.component.css']
})
export class CommoditiesComponent implements OnInit {
  
  
  title: string = 'Commodities';

  commodities: [];

  constructor(private _dataService: DataService, private titleService: Title) {}

  ngOnInit() {
  
    this.titleService.setTitle(this.title);

    this._dataService.getData().subscribe(obj=>{
      console.log(obj.data.attributes.commodities);
      const commodities: [] = obj['data']['attributes']['commodities'];

      
      let comm_name = commodities.map(obj=> obj.attributes.name);
      let comm_price = commodities.map(obj=> obj.attributes.avg_price);
      let comm_symbol = commodities.map(obj=> obj.attributes.symbol);
      
      
      this.commodities = commodities;

      console.log(comm_name);

      // TODO: chart visualize


    });
  }

}
