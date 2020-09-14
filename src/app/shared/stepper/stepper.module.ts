import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperComponent } from './stepper.component';
import { StepComponent } from './step/step.component';

@NgModule({
  declarations: [
    StepperComponent,
    StepComponent
  ],
  imports: [CommonModule],
  exports: [
    StepperComponent,
    StepComponent
  ]
})
export class StepperModule { }
