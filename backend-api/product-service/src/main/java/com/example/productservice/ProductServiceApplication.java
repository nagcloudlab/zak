package com.example.productservice;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

enum CurrencyCode{
	INR
}


@Data
@AllArgsConstructor
@NoArgsConstructor
class Product{
	private int id;
	private String name;
	private double price;
	private CurrencyCode CurrencyCode;
	private String description;
	private String imgPath;
	private boolean available;
}

@Data
@AllArgsConstructor
@NoArgsConstructor
class Review{
	private int stars;
	private String body;
	private String author;
}


@SpringBootApplication
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProductServiceApplication {


	@GetMapping("/api/products")
	public Iterable<Product> getAllProducts(){
        return List.of(
				new Product(1, "Product 1", 100.0, CurrencyCode.INR, "Product 1 description", "assets/Laptop.png", true),
                new Product(2, "Product 2", 200.0, CurrencyCode.INR, "Product 2 description", "assets/Mobile.png", true)
		);
    }

	private static Map<Integer,List<Review>> map=new HashMap<>();
	static {

		List<Review> reviews1=new ArrayList<>();
		reviews1.add(new Review(1, "Review 1", "Author 1"));
		reviews1.add(new Review(2, "Review 2", "Author 2"));
		map.put(1, reviews1);
        map.put(2, List.of(
                new Review(3, "Review 3", "Author 3"),
                new Review(4, "Review 4", "Author 4")
        ));
	}


	@GetMapping("/api/products/{id}/reviews")
	public Iterable<Review> getReviews(@PathVariable int id){
		return map.get(id);
	}

	@PostMapping("/api/products/{id}/reviews")
	public ResponseEntity<?> getReviews(@PathVariable int id, @RequestBody Review review){
		map.get(id).add(review);
		return ResponseEntity.status(HttpStatus.CREATED).body(review);
	}

	public static void main(String[] args) {
		SpringApplication.run(ProductServiceApplication.class, args);
	}

}
