import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products: Array<any> = []

  // @Output()
  // buy: EventEmitter<any> = new EventEmitter<any>();

  // handleBuy(product: any) {
  //   this.buy.emit(product);
  // }

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe({
        next: (products: any) => {
          this.products = products;
        }
      });
  }


}
