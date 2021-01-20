import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cryptocoins',
  templateUrl: './cryptocoins.component.html',
  styleUrls: ['./cryptocoins.component.css']
})
export class CryptocoinsComponent implements OnInit {

  title: string = 'Cryptocoins';

  crypto = [];

  constructor(private _dataService: DataService, private titleService: Title) {}

  ngOnInit() {

    this.titleService.setTitle(this.title);

    this._dataService.getData().subscribe(obj=>{
      
      this.crypto = obj.data.attributes.cryptocoins;
      //console.log(this.crypto);
    });
  }

}
