import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cart: Array<any> = [];

  addToCart(item: any) {
    // this.cart.push(item);
    this.cart = this.cart.concat(item);
    console.log(this.cart);
  }
  getCart() {
    return this.cart;
  }

}
