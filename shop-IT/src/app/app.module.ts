import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './review/review.component';
import { CartBadgeComponent } from './cart-badge/cart-badge.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { ZakCardComponent } from './zak-card/zak-card.component';
import { HighlightDirective } from './highlight.directive';
import { DiscountPipe } from './discount.pipe';
import { HomeComponent } from './home/home.component';
import { CartHomeComponent } from './cart-home/cart-home.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartHomeComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductComponent,
    ReviewComponent,
    CartBadgeComponent,
    CartViewComponent,
    ZakCardComponent,
    HighlightDirective,
    DiscountPipe,
    HomeComponent,
    CartHomeComponent,
    NotFoundComponent,
    ReviewFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
