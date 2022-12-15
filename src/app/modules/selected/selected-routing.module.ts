import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectedComponent } from './components/selected.component';


const routes: Routes = [
  {
    path:'',
    component: SelectedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectedRoutingModule { }
