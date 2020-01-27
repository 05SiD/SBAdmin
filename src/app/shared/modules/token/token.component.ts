import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {

  @Input() bgClass: string;
  @Input() icon: string;
  @Input() count: number;
  @Input() label: string;
  @Input() data: number;
  @Output() event: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
