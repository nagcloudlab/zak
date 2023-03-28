import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cart: Array<any> = [];
  isCartOpen: boolean = false;

  togglecartView() {
    this.isCartOpen = !this.isCartOpen;
  }

  addToCart(item: any) {
    // this.cart.push(item);
    this.cart = this.cart.concat(item);
  }

}
