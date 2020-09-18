import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  styleUrls: ['./nt.component.scss'],
  template: `
    <h1>Hello from NT Component</h1>

    <form [formGroup]="testForm" (ngSubmit)="testForm.valid && onSubmit()">
      <ui-stepper>
        <ui-step [control]="testForm.get('step1')">
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

            <button uiStepNext>
              Next
            </button>
          </div>
        </ui-step>

        <ui-step [control]="testForm.get('step2')">
          <p>Step 2</p>

          <input
            type="text"
            formControlName="step2"
            placeholder="Enter Text"
          >

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

          <input
            type="text"
            formControlName="step3"
            placeholder="Enter Text"
          >

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
    </form>
  `
})
export class NTComponent {
  testForm = this.fb.group({
    step1: ['', Validators.required],
    step2: ['', Validators.required],
    step3: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit(): void {
    console.log(this.testForm.value);
  }
}
