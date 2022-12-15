import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectedRoutingModule } from './selected-routing.module';
import { SelectedComponent } from './components/selected.component';


@NgModule({
  declarations: [SelectedComponent],
  imports: [
    CommonModule,
    SelectedRoutingModule
  ]
})
export class SelectedModule { }
