import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';

import { StepperService } from './stepper.service';
import { StepComponent } from './step/step.component';

@Component({
  selector: 'ui-stepper',
  template: `
    <ui-step-list
      [steps]="steps"
      [selected]="selected"
    ></ui-step-list>

    <ng-content></ng-content>
  `,
  providers: [StepperService]
})
export class StepperComponent implements OnInit, AfterContentInit {
  @ContentChildren(StepComponent) steps: QueryList<StepComponent>;

  selectedIndex: number;
  selected: StepComponent;

  constructor(public stepperService: StepperService) { }

  ngOnInit(): void {
    this.stepperService.step$
      .subscribe(index => this._onSelect(index));

    this.stepperService.back$
      .subscribe(_ => this._onBack());

    this.stepperService.next$
      .subscribe(_ => this._onNext());
  }

  ngAfterContentInit(): void {
    this.selected = this.steps.first;
    this.selectedIndex = 0;

    this.steps.first.selected = true;
  }

  private _onSelect(selectedIndex: number): void {
    if (this.selectedIndex === selectedIndex) { return; }

    if (!this._stepsValid(selectedIndex)) { return; }

    this.selectedIndex = selectedIndex;
    this._updateSelected();
  }

  private _onBack(): void {
    if (this.selectedIndex === 0) { return; }

    --this.selectedIndex;
    this._updateSelected();
  }

  private _onNext(): void {
    if (this.selectedIndex === (this.steps.length - 1)) { return; }
    if (this.selected.control && !this.selected.control.valid) { return; }

    ++this.selectedIndex;
    this._updateSelected();
  }

  private _updateSelected(): void {
    this.steps.forEach((step, index) => {
      if (this.selectedIndex === index) {
        this.selected = step;
        step.selected = true;
      } else {
        step.selected = false;
      }
    });
  }

  private _stepsValid(selectedIndex: number): boolean {
    let valid = true;

    this.steps.forEach((step, index) => {
      if (index >= selectedIndex) { return; }

      if (step.control && !step.control.valid) {
        valid = false;
      }
    });

    return valid;
  }
}
