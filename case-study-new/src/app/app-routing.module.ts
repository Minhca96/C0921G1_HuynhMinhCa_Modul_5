import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './view/home/home.component';
import {CustomerComponent} from './model/customer/customer.component';
   const routes: Routes = [
     {path: '',
     component: HomeComponent}
    /* {
       path:"customer",
       component: CustomerComponent
     }*/
   ]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
