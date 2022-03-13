import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from '../product/product-list/product-list.component';
import {ProduuctEditComponent} from '../product/produuct-edit/produuct-edit.component';
import {ProductCreateComponent} from '../product/product-create/product-create.component';
import {CategoryListComponent} from '../category/category-list/category-list.component';
import {CategoryCreateComponent} from '../category/category-create/category-create.component';

 const routes: Routes = [
   {
     path: "",
     component: ProductListComponent
   },
   {
     path: "edit/:id",
     component: ProduuctEditComponent
   },
   {
     path: "create",
     component: ProductCreateComponent
   },
   {
     path: "category",
     component: CategoryListComponent
   },{
   path: "createCategory",
     component: CategoryCreateComponent
   }
 ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
