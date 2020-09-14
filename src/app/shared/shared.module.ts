import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperModule } from './stepper/stepper.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StepperModule
  ],
  exports: [
    StepperModule
  ]
})
export class SharedModule { }
