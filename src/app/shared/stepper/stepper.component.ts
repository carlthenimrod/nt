import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';

import { StepperService } from './stepper.service';
import { StepComponent } from './step/step.component';

@Component({
  selector: 'ui-stepper',
  template: '<ng-content></ng-content>',
  providers: [StepperService]
})
export class StepperComponent implements OnInit, AfterContentInit {
  @ContentChildren(StepComponent) steps: QueryList<StepComponent>;

  selectedIndex: number;
  selected: StepComponent;

  constructor(private stepperService: StepperService) { }

  ngOnInit(): void {
    this.stepperService.back$
      .subscribe(_ => this.onBack());

    this.stepperService.next$
      .subscribe(_ => this.onNext());
  }

  ngAfterContentInit(): void {
    this.selected = this.steps.first;
    this.selectedIndex = 0;

    this.steps.first.selected = true;
  }

  onBack(): void {
    if (this.selectedIndex === 0) { return; }

    --this.selectedIndex;
    this._updateSelected();
  }

  onNext(): void {
    if (this.selectedIndex === (this.steps.length - 1)) { return; }

    ++this.selectedIndex;
    this._updateSelected();
  }

  private _updateSelected(): void {
    this.steps.forEach((step, index) =>
      step.selected = this.selectedIndex === index
        ? true
        : false
    );
  }
}
