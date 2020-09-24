import { Component, HostBinding, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'ui-step',
  template: '<ng-content></ng-content>'
})
export class StepComponent {
  @Input() control: AbstractControl;

  @Input() label: string;

  selected = false;

  @HostBinding('style.display')
  get display(): string {
    return this.selected ? 'flex' : 'none';
  }
}
