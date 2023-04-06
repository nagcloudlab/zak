import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  productForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      id: [''],
      name: [''],
      price: ['']
    })

    this.route.data.subscribe((data: any) => {
      console.log(data);
      if (data.product) {
        this.productForm.patchValue(data.product);
      }
    })

  }
  handleSubmit(event: any) {
    let formData = this.productForm.value
    this.productService.addProduct(formData)
      .then(response => {
        this.router.navigate(['/product-list'])
      })
  }

}
