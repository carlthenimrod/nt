import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { NTRoutingModule } from './nt-routing.module';
import { NTComponent } from './nt.component';

@NgModule({
  declarations: [
    NTComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NTRoutingModule
  ]
})
export class NTModule { }
