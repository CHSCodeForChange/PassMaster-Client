import {Component, OnInit} from '@angular/core';
import {Pass} from "../classes/Pass";
import {PassmasterService} from "../services/passmaster.service";
import {PassFormComponent} from "../pass-form/pass-form.component";
import {PassCardComponent} from "../pass-card/pass-card.component";

@Component({
    selector: 'app-student-dash',
    templateUrl: './student-dash.component.html',
    styleUrls: ['./student-dash.component.css'],
})
export class StudentDashComponent implements OnInit {
    activePasses: Pass[];
    pendingPasses: Pass[];
    oldPasses: Pass[];

    constructor(private api: PassmasterService) {
    }

    ngOnInit() {
        this.getActivePasses();
        this.getPendingPasses();
        this.getOldPasses();
    }

    getActivePasses(): void {
        this.api.getActivePasses()
            .subscribe(Pass => this.activePasses = Pass);

        console.log('Passes are ', this.activePasses);
    }

    getPendingPasses(): void {
        this.api.getPendingPasses()
            .subscribe(Pass => this.pendingPasses = Pass);

        console.log('Passes are ', this.pendingPasses);
    }

    getOldPasses(): void {
        this.api.getOldPasses()
            .subscribe(Pass => this.oldPasses = Pass);

        console.log('Passes are ', this.oldPasses);
    }
}
