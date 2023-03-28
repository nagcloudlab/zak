import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent {

  @Input("value")
  cart: Array<any> = [];

  constructor() {
    console.log("CartViewComponent :: constructor");
    // to-do any one-time intialization code goes here
  }

  // hook(s)

  ngOnChanges(changes: SimpleChanges) {
    console.log("CartViewComponent :: ngOnChanges");
    console.log(changes);
    // to-do any side-effect when component has new input props
  }

  ngOnInit() {
    console.log("CartViewComponent :: ngOnInit");
    // to-do any one time initialization code goes here
  }

  ngOnDestroy() {
    console.log("CartViewComponent :: ngOnDestroy");
    // to-do any one time destruction code goes here
  }




}
