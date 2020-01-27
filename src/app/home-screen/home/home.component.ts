import { Component, OnInit } from '@angular/core';
import { pulseAnimation } from 'angular-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations : [pulseAnimation({ anchor: 'pulse' })]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
