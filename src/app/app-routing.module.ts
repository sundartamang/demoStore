import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import("./modules/home/home.module").then(m=>m.HomeModule)
  },
  {
    path:'selected',
    loadChildren:()=>import("./modules/selected/selected.module").then(m=>m.SelectedModule)
  },
  {
    path:'checkout',
    loadChildren:()=>import("./modules/checkout/checkout.module").then(m=>m.CheckoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
