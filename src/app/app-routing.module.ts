import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/site/login/login.component';
import { HomeComponent } from './components/site/home/home.component';
import { RegisterComponent } from './components/site/register/register.component';
import { ChartsComponent } from './components/site/charts/charts.component';
// import { Charts2Component } from './components/site/charts2/charts2.component';
import { FormsComponent } from './components/site/forms/forms.component';
import { TablesComponent } from './components/site/tables/tables.component';
import { CodebankComponent } from './components/site/codebank/codebank.component';
import { FlightListComponent } from './components/site/flight/flight-list/flight-list.component';
import { HotelListComponent } from './components/site/hotel/hotel-list/hotel-list.component';
import {ExtraOptions, PreloadAllModules} from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'home', component: HomeComponent},

  { path: 'register', component : RegisterComponent},

  { path: 'charts', component : ChartsComponent},
  // { path: 'charts2', component : Charts2Component},
  { path: 'forms', component : FormsComponent},

  { path: 'tables', component : TablesComponent},
  { path: 'flights', component : FlightListComponent},
  { path: 'hotels', component : HotelListComponent},
  { path: 'codebank', component: CodebankComponent},
  { path: 'pokemon', loadChildren: './components/site/pokemon/pokemon.module#PokemonModule' },

  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

const APP_EXTRA_OPTIONS: ExtraOptions = {
  preloadingStrategy: PreloadAllModules
};

@NgModule({
  imports: [RouterModule.forRoot(routes, APP_EXTRA_OPTIONS)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


