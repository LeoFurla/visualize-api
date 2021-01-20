
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly apiUrl = 'https://api.bitpanda.com/v1/masterdata';
  appUrl = 'https://jsonplaceholder.typicode.com/users';


  constructor(private http: HttpClient, private titleService: Title) { }
  
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  getData() {
    return this.http.get(this.apiUrl);
  }
  //data.attributes.commodities
}
