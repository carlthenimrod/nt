import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NTComponent } from './nt.component';

const routes: Routes = [
  { path: '', component: NTComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NTRoutingModule { }
