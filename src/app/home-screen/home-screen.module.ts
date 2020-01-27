import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { StatModule } from '../shared';
import { TokenModule } from '../shared/modules/token/token.module';

@NgModule({
  imports: [ CommonModule,
             HomeRoutingModule,
             StatModule,
             TokenModule ],
  declarations: [ HomeComponent ]
})
export class HomeScreenModule { }
