import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-scrolldown',
  templateUrl: './scrolldown.component.html',
  styleUrls: ['./scrolldown.component.css'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        transform: 'translate(0px, -0)',
        width: '100px',
        height: '100px'
      })),
      state('final', style({
        transform: 'translate(0px, -100px)',
        width: '100px',
        height: '100px'
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ]),
  ]
})
export class ScrolldownComponent implements OnInit {

  currentState = 'initial';

  constructor() { }

  ngOnInit() {
  }

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
    this.changeState();
  }
}