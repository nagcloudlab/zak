import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.scss']
})
export class CartBadgeComponent {

  //@Input() 
  value: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCartStream().subscribe(cart => {
      this.value = cart.length;
    });
  }

}
