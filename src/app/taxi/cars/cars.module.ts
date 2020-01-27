import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { CarsRoutingModule } from './cars-routing.module';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [ CommonModule,
             TableModule,
             CarsRoutingModule ],
  declarations: [ CarsComponent ],
})
export class CarsModule { }
