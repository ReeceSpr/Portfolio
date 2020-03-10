import { Component, OnInit } from '@angular/core';
import { btnNames } from '../buttonsName';

@Component({
  selector: 'app-landing-buttons',
  templateUrl: './landing-buttons.component.html',
  styleUrls: ['./landing-buttons.component.css']
})
export class LandingButtonsComponent implements OnInit {
  buttonNames = btnNames;
  constructor() { }

  ngOnInit() {
  }

}