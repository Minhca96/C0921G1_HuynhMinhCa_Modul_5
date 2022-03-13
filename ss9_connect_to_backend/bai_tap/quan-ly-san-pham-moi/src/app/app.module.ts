import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProduuctEditComponent } from './product/produuct-edit/produuct-edit.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryDeleteComponent } from './category/category-delete/category-delete.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProduuctEditComponent,
    ProductDeleteComponent,
    CategoryListComponent,
    CategoryEditComponent,
    CategoryDeleteComponent,
    CategoryCreateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
