import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Hello from NT Component</h1>

    <ui-stepper>
      <ui-step>
        <p>Step 1</p>
      </ui-step>

      <ui-step>
        <p>Step 2</p>
      </ui-step>

      <ui-step>
        <p>Step 3</p>
      </ui-step>
    </ui-stepper>
  `
})
export class NTComponent { }
