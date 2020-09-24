import { Component, Input, QueryList } from '@angular/core';

import { StepComponent } from '../step/step.component';

@Component({
  selector: 'ui-step-list',
  styles: [`
    :host {
      align-items: center;
      display: flex;
      justify-content: center;
    }

    .step {
      display: flex;
      flex-direction: column;
    }

    .label {
      padding: 0.5rem 0;
      text-align: center;
    }

    button {
      background-color: #ddd;
      border: none;
      border-radius: 100%;
      color: #333;
      cursor: pointer;
      font-size: 1.2rem;
      font-weight: 700;
      height: 4rem;
      margin: 0 2rem;
      outline: none;
      padding: 1rem;
      transition: all 50ms linear;
      width: 4rem;
    }

    button.selected {
      background-color: #333;
      color: #eee;
    }
  `],
  template: `
    <div *ngFor="let step of steps; let i=index" class="step">
      <div class="label" *ngIf="step.label">
        {{ step.label }}
      </div>

      <button
        [uiStepSelect]="i"
        [class.selected]="step === selected"
      >
        {{ i + 1 }}
      </button>
    </div>
  `
})
export class StepListComponent {
  @Input() steps: QueryList<StepListComponent>;

  @Input() selected: StepComponent;
}
