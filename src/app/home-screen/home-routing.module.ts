import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'cars', loadChildren: () => import('../taxi/cars/cars.module').then(m => m.CarsModule) },
  { path: 'trips', loadChildren: () => import('../taxi/trips/trips.module').then(m => m.TripsModule) },
  { path: 'drivers', loadChildren: () => import('../taxi/drivers/drivers.module').then(m => m.DriversModule) },
  { path: 'guests', loadChildren: () => import('../taxi/guests/guests.module').then(m => m.GuestsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
