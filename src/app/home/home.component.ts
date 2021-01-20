import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = 'Home';
  

  constructor(private _dataService: DataService, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

}
