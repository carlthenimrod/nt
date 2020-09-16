import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'ui-step',
  template: '<ng-content></ng-content>'
})
export class StepComponent {
  show = false;

  @HostBinding('style.display')
  get display(): string {
    return this.show ? 'flex' : 'none';
  }
}
