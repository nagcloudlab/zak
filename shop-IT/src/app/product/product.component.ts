import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input("value")
  product: any = {}

  @Output()
  buy: EventEmitter<any> = new EventEmitter<any>();

  currentTab: number = 1

  reviews: Array<any> = [
    { stars: 1, body: 'sample-review-1', author: 'who-1' },
    { stars: 3, body: 'sample-review-2', author: 'who-2' },
  ]

  handleTabChange(event: Event, tabIndex: number) {
    this.currentTab = tabIndex
  }
  handleBuy() {
    this.buy.emit(this.product)
  }
  isTabSelected(tabIndex: number) {
    return this.currentTab === tabIndex
  }


}
