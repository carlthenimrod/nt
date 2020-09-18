import { Directive, HostListener } from '@angular/core';

import { StepperService } from '../stepper.service';

@Directive({
  selector: '[uiStepNext]'
})
export class StepNextDirective {
  constructor(private stepperService: StepperService) { }

  @HostListener('click', ['$event']) onClick(e: Event): void {
    e.preventDefault();

    this.stepperService.goNext();
  }
}
