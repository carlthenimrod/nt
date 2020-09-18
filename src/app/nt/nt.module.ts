import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { NTRoutingModule } from './nt-routing.module';
import { NTComponent } from './nt.component';

@NgModule({
  declarations: [
    NTComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    NTRoutingModule
  ]
})
export class NTModule { }
