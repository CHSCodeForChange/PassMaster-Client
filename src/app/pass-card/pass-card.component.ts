import {Component, Input, OnInit} from '@angular/core';
import {Pass} from "../classes/Pass";

@Component({
    selector: 'pass-card',
    templateUrl: './pass-card.component.html',
    styleUrls: ['./pass-card.component.css']
})
export class PassCardComponent implements OnInit {
    @Input() pass: Pass;

    constructor() {
    }

    ngOnInit() {
    }

}
