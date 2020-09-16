import { Component, HostBinding } from '@angular/core';

import { StepperService } from '../stepper.service';

@Component({
  selector: 'ui-step',
  styles: [`
    div {
      align-items: center;
      display: flex;
      justify-content: space-between;
    }

    button {
      background-color: #aaa;
      border: none;
      border-radius: 0.25rem;
      color: #333;
      cursor: pointer;
      font-size: 1.5rem;
      font-weight: 700;
      padding: 1rem 1.5rem;
      outline: none;
    }
  `],
  template: `
    <ng-content></ng-content>

    <div>
      <button (click)="stepperService.goBack()">
        Back
      </button>

      <button (click)="stepperService.goNext()">
        Next
      </button>
    </div>
  `
})
export class StepComponent {
  selected = false;

  @HostBinding('style.display')
  get display(): string {
    return this.selected ? 'flex' : 'none';
  }

  constructor(public stepperService: StepperService) { }
}
