import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CryptocoinsComponent } from './cryptocoins/cryptocoins.component';
import { CommoditiesComponent } from './commodities/commodities.component';
import { FlatsComponent } from './flats/flats.component';
import { IndexesComponent } from './indexes/indexes.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component:HomeComponent},
  { path: 'cryptocoins', component:CryptocoinsComponent},
  { path: 'commodities', component:CommoditiesComponent},
  { path: 'flats', component:FlatsComponent},
  { path: 'indexes', component:IndexesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
