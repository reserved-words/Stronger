import { Component, Input } from "@angular/core";
import { ICurrentSet } from "src/app/shared/interfaces/current-set";


@Component({
    selector: 'gym-current-set',
    templateUrl: 'set.component.html'
})
export class CurrentSetComponent {
    @Input() set: ICurrentSet;
    @Input() stepSize: number;

    onWeightValueChanged(newValue: number): void {
        this.set.weight = newValue;
    }
    
    onRepsValueChanged(newValue: number): void {
        this.set.reps = newValue;
    }

    markDone(): void {
        this.set.done = true;
    }

    markNotDone(): void {
        this.set.done = false;
    }
}