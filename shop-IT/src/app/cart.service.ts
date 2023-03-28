import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cart: Array<any> = [];
  private cartStream: Subject<Array<any>> = new Subject<Array<any>>();

  addToCart(item: any) {
    // this.cart.push(item);
    this.cart = this.cart.concat(item);
    this.cartStream.next(this.cart);
  }
  getCart() {
    return this.cart;
  }
  getCartStream() {
    return this.cartStream;
  }

}
