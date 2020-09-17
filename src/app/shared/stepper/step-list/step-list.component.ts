import { Component, Input, QueryList } from '@angular/core';

@Component({
  selector: 'ui-step-list',
  styles: [`
    :host {
      align-items: center;
      display: flex;
      justify-content: center;
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
      width: 4rem;
    }
  `],
  template: `
    <button
      *ngFor="let step of steps; let i=index"
      [uiStepSelect]="i"
    >
      {{ i + 1 }}
    </button>
  `
})
export class StepListComponent {
  @Input() steps: QueryList<StepListComponent>;
}
