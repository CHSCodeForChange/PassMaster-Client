import { Component, OnInit } from '@angular/core';
import {User} from "../classes/User";
import {PassmasterService} from "../services/passmaster.service";
import {print} from "util";

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
  students: User[];

  constructor(private api: PassmasterService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.api.getStudents()
      .subscribe(Users => this.students = Users);

    console.log('Users are ', this.students);
  }

}
