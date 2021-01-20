import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-indexes',
  templateUrl: './indexes.component.html',
  styleUrls: ['./indexes.component.css']
})
export class IndexesComponent implements OnInit {

  title: string = 'Indexes';

  indexes = [];

  constructor(private _dataService: DataService, private titleService: Title) {}

  ngOnInit() {

        this.titleService.setTitle(this.title);

    this._dataService.getData().subscribe(obj=>{
      
      this.indexes = obj.data.attributes.indexes;
      //console.log(this.indexes);
    });
  }
}
