import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input("value")
  product: any = {}

  // @Output()
  // buy: EventEmitter<any> = new EventEmitter<any>();

  constructor(private cartService: CartService, private productService: ProductService) { }

  currentTab: number = 1

  reviews: Array<any> = []

  handleTabChange(event: Event, tabIndex: number) {
    event.preventDefault();
    this.currentTab = tabIndex
    if (this.currentTab === 3) {
      this.productService.getReviews(this.product.id)
        .subscribe({
          next: (reviews: any) => {
            this.reviews = reviews
          }
        })
    }
  }

  handleNewReview(newReview: any) {
    this.productService.postNewReview(this.product.id, newReview)
      .subscribe({
        next: (review: any) => {
          this.reviews.push(review)
        }
      })
  }

  handleBuy() {
    // this.buy.emit(this.product)
    this.cartService.addToCart(this.product)
  }
  isTabSelected(tabIndex: number) {
    return this.currentTab === tabIndex
  }


}
