import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {


  // id!: any;
  product!: any

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    //let id = this.route.snapshot.params["id"]
    // this.route.params.subscribe(params => {
    //   this.id = params["id"];
    //   this.productService.getProduct(this.id)
    //     .then((product: any) => {
    //       this.product = product;
    //     })
    // })
    this.route.data.subscribe(data => {

      this.product = data["product"];
    })

  }

}
