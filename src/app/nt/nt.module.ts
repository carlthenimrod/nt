import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NTRoutingModule } from './nt-routing.module';
import { NTComponent } from './nt.component';

@NgModule({
  declarations: [
    NTComponent
  ],
  imports: [
    CommonModule,
    NTRoutingModule
  ]
})
export class NTModule { }
