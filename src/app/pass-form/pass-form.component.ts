import { Component, OnInit } from '@angular/core';
import {User} from '../classes/User';
import {Pass} from '../classes/Pass';

@Component({
  selector: 'app-pass-form',
  templateUrl: './pass-form.component.html',
  styleUrls: ['./pass-form.component.css']
})
export class PassFormComponent implements OnInit {
  pass: Pass;
  teachers: User[];
  locations: string[]; //not sure what this is going to be yet

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit() {
  }

}
