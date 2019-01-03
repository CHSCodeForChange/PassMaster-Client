import { Component, OnInit } from '@angular/core';
import {Pass} from "../classes/Pass";

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.css']
})
export class PassCardComponent implements OnInit {
  pass: Pass;

  constructor() { }

  ngOnInit() {
  }

}
