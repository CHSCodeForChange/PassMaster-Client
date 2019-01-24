import {Component, Input, OnInit} from '@angular/core';
import {User} from '../classes/User';
import {Pass} from '../classes/Pass';
import {PassmasterService} from "../services/passmaster.service";

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

    onSubmit() {
        this.submitted = true;
    }

    constructor(private api: PassmasterService) {
        console.log(this.pass);
    }

    ngOnInit() {
    }

}
