import {Component, Input, OnInit} from '@angular/core';
import {Pass} from "../classes/Pass";
import moment = require("moment");

@Component({
    selector: 'pass-card',
    templateUrl: './pass-card.component.html',
    styleUrls: ['./pass-card.component.css']
})
export class PassCardComponent implements OnInit {
    @Input() pass: Pass;
    timeLeftOrigin: Date;
    timeArrivedDestination: Date;
    dateString: Date;

    constructor() {
        //moment(this.pass.timeLeftOrigin, 'YYYY-MM-DD HH:mm:ss');
    }

    ngOnInit() {
    }

}
