import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    // XHR | Fetch
    return this.httpClient.get("http://localhost:8080/api/products")
  }

  getReviews(productId: number) {
    return this.httpClient.get(`http://localhost:8080/api/products/${productId}/reviews`);
  }

  postNewReview(productId: number, newReview: any) {
    return this.httpClient.post(`http://localhost:8080/api/products/${productId}/reviews`, newReview);
  }

}
