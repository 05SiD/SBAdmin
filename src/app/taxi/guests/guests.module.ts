import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestsComponent } from './guests.component';
import { GuestsRoutingModule } from './guests-routing.module';
import { TableModule } from 'primeng/table';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ CommonModule,
             FormsModule,
             TableModule,
             SliderModule,
             DropdownModule,
             MultiSelectModule,
             GuestsRoutingModule ],
  declarations: [ GuestsComponent ]
})
export class GuestsModule { }
