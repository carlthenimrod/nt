import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';

import { StepComponent } from './step/step.component';

@Component({
  selector: 'ui-stepper',
  template: '<ng-content></ng-content>'
})
export class StepperComponent implements AfterContentInit {
  @ContentChildren(StepComponent) steps: QueryList<StepComponent>;

  ngAfterContentInit(): void {
    this.steps.first.show = true;
  }
}
