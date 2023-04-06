import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products: Array<any> = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 }
  ]

  getProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products)
      }, 0)
    })
  }
  getProduct(id: any) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          this.products.find(product => product.id === Number.parseInt(id, 10))
        )
      }, 2000)
    })
  }

  addProduct(product: any) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.products.push(product)
        resolve(product)
      }, 2000)
    })

  }
}
