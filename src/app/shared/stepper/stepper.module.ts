import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperComponent } from './stepper.component';
import { StepComponent } from './step/step.component';
import { StepListComponent } from './step-list/step-list.component';
import { StepSelectDirective } from './select/select.directive';
import { StepBackDirective } from './back/back.directive';
import { StepNextDirective } from './next/next.directive';

@NgModule({
  declarations: [
    StepperComponent,
    StepComponent,
    StepListComponent,
    StepSelectDirective,
    StepBackDirective,
    StepNextDirective
  ],
  imports: [CommonModule],
  exports: [
    StepperComponent,
    StepComponent,
    StepSelectDirective,
    StepBackDirective,
    StepNextDirective
  ]
})
export class StepperModule { }
