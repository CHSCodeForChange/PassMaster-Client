import {Component, Input, OnInit} from '@angular/core';
import {Pass} from "../classes/Pass";
import * as moment from 'moment';

@Component({
    selector: 'pass-card',
    templateUrl: './pass-card.component.html',
    styleUrls: ['./pass-card.component.css']
})
export class PassCardComponent implements OnInit {
    p: Pass;

    timeLeftOrigin: Date;
    timeArrivedDestination: Date;
    date: Date;

    constructor() {
    }

    @Input()
    set pass(p: Pass) {
        this.p = p;
        console.log('this little p is ',this.p);
        console.log(p.originTeacher);
        if(p.timeLeftOrigin != null) {
            this.timeLeftOrigin = moment(this.p.timeLeftOrigin, 'HH:mm:ss').toDate();
        }

        if(p.timeArrivedDestination != null) {
            this.timeArrivedDestination = moment(this.p.timeArrivedDestination, 'HH:mm:ss').toDate();
        }

        if(p.date != null) {
            this.date = moment(this.p.date, 'YYYY-MM-DD').toDate();
        }
    }

    ngOnInit() {
    }

}
