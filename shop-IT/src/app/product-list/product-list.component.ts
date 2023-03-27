import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products: Array<any> = [
    {
      id: 1,
      name: 'Laptop',
      price: 150000,
      description: 'Mac pro',
      isAvailable: true,
      imgPath: 'assets/Laptop.png'
    },
    {
      id: 2,
      name: 'Mobile',
      price: 47000,
      description: 'Iphone pro',
      isAvailable: false,
      imgPath: 'assets/Mobile.png'
    },
  ]


}
