import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CryptocoinsComponent } from './cryptocoins/cryptocoins.component';
import { CommoditiesComponent } from './commodities/commodities.component';
import { FlatsComponent } from './flats/flats.component';
import { IndexesComponent } from './indexes/indexes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from './data.service';
import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CryptocoinsComponent,
    CommoditiesComponent,
    FlatsComponent,
    IndexesComponent,
    HeaderComponent,
    //ChartsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [DataService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
