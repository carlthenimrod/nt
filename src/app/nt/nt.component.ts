import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StepperComponent } from '../shared/stepper/stepper.component';

@Component({
  styleUrls: ['./nt.component.scss'],
  template: `
    <h1>Hello from NT Component</h1>

    <ui-stepper>
      <ui-step>
        <form [formGroup]="testForm" (ngSubmit)="testForm.valid && onSubmit()">
          <p>Step 1</p>

          <input
            type="text"
            formControlName="step1"
            placeholder="Enter Text"
          >

          <div>
            <button uiStepBack>
              Back
            </button>

            <button>
              Next
            </button>
          </div>
        </form>
      </ui-step>

      <ui-step>
        <p>Step 2</p>

        <div>
          <button uiStepBack>
            Back
          </button>

          <button uiStepNext>
            Next
          </button>
        </div>
      </ui-step>

      <ui-step>
        <p>Step 3</p>

        <div>
          <button uiStepBack>
            Back
          </button>

          <button>
            Submit
          </button>
        </div>
      </ui-step>
    </ui-stepper>
  `
})
export class NTComponent {
  @ViewChild(StepperComponent) stepper: StepperComponent;

  testForm = this.fb.group({
    step1: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit(): void {
    // Project is null ?
    // POST

    // else PUT
    this.stepper.stepperService.goNext();
  }
}
