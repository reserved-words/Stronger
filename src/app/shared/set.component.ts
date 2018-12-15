import { Component, Input } from "@angular/core";
import { ISet } from "./interfaces/set";


@Component({
    selector: 'gym-set',
    templateUrl: 'set.component.html',
    styleUrls: ['set.component.css']
})
export class SetComponent {
    @Input() set: ISet;
    @Input() exerciseFinished: boolean;
}