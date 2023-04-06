import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ActivateGuard } from './activate.guard';
import { ActivatechildGuard } from './activatechild.guard';
import { DeactivateGuard } from './deactivate.guard';
import { HomeComponent } from './home/home.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductResolver } from './product.resolver';
import { ProductsResolver } from './products.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product-list',
    component: ProductListComponent,
    resolve: {
      products: ProductsResolver,
    },
    canActivateChild: [ActivatechildGuard],
    children: [
      {
        path: 'product-view/:id',
        component: ProductViewComponent,
        resolve: {
          product: ProductResolver,
        },
        data: {
          title: 'Product View'
        }
        // outlet: 'view'
      },
      {
        path: 'product-edit/:id',
        component: ProductFormComponent,
        resolve: {
          product: ProductResolver,
        },
        // outlet: 'edit'
      },
    ]
  },
  {
    path: 'product-new',
    component: ProductFormComponent,
    canActivate: [ActivateGuard],
    canDeactivate: [DeactivateGuard]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    ProductListComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      // useHash: true,
      enableTracing: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
