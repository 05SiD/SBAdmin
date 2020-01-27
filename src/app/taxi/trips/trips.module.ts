import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripsComponent } from './trips.component';
import { TripsRoutingModule } from './trips-routing.module';

@NgModule({
  declarations: [ TripsComponent ],
  imports: [ CommonModule,
             TripsRoutingModule ]
})
export class TripsModule { }
