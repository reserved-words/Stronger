import { Component } from "@angular/core";
import * as moment from 'moment';

@Component({
    selector: 'gym-sessions',
    templateUrl: 'sessions.component.html'
})
export class SessionsComponent {
    pageTitle: string = "Sessions";
    sessionIcon: string = "calendar-alt";
    list: any[] = [
        {
            date: new Date('2018-12-09 10:00:00')
        },
        {
            date: new Date('2018-12-06 19:00:00')
        },
        {
            date: new Date('2018-12-03 19:00:00')
        },
    ];
    add(): void {
        alert("Add exercise!");
    }
    edit(): void {
        alert("Edit exercise!");
    }
}