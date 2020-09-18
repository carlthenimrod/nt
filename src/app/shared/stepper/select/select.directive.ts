import { Directive, HostListener, Input } from '@angular/core';

import { StepperService } from '../stepper.service';

@Directive({
  selector: '[uiStepSelect]'
})
export class StepSelectDirective {
  @Input() uiStepSelect;

  constructor(private stepperService: StepperService) { }

  @HostListener('click', ['$event']) onClick(e: Event): void {
    e.preventDefault();

    this.stepperService.goTo(this.uiStepSelect);
  }
}
