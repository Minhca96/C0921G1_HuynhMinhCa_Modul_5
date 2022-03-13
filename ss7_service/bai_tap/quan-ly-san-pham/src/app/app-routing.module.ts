import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './product/list/list.component';
import {DeleteComponent} from './product/delete/delete.component';
import {EditComponent} from './product/edit/edit.component';
import {CreateComponent} from './product/create/create.component';

const routes: Routes = [
  { path: 'product',
    component: ListComponent
  },{
    path: "product/delete/:id",
    component: DeleteComponent
  },{
  path: 'product/edit/:id',
    component: EditComponent
  },{
  path: 'product/create',
    component: CreateComponent
  }
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
