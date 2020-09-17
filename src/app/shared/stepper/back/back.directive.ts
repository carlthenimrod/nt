import { Directive, HostListener } from '@angular/core';

import { StepperService } from '../stepper.service';

@Directive({
  selector: '[uiStepBack]'
})
export class StepBackDirective {
  constructor(private stepperService: StepperService) { }

  @HostListener('click') onClick(): void {
    this.stepperService.goBack();
  }
}
