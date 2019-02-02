import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {User} from '../classes/User';
import {Pass} from '../classes/Pass';
import {PassmasterService} from "../services/passmaster.service";
import {MaterializeAction} from "angular2-materialize";

@Component({
    selector: 'app-pass-form',
    templateUrl: './pass-form.component.html',
    styleUrls: ['./pass-form.component.css']
})
export class PassFormComponent implements OnInit {
    pass = new Pass();
    teachers: User[];
    locations: string[]; //not sure what this is going to be yet

    submitted = false;

    dateActions = new EventEmitter<string|MaterializeAction>();
    timeActions = new EventEmitter<string|MaterializeAction>();

    onSubmit() {
        this.submitted = true;
    }

    constructor(private api: PassmasterService) {
        console.log(this.pass);
    }

    ngOnInit() {
    }


    openDatePicker() {
        //actions are open or close
        this.dateActions.emit({action: "pickadate", params: ["open"]});
    }

    openTimePicker() {
        //actions are show or hide
        this.timeActions.emit({action: "pickatime", params: ["show"]});
    }
}
