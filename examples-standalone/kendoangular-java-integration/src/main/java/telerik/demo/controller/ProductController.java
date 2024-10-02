package telerik.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import telerik.demo.models.Product;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

    private static final Logger logger = LoggerFactory.getLogger(ProductController.class);

    private static List<Product> products = new ArrayList<>();

    static {
        products.add(new Product(1, "Chai", 18));
        products.add(new Product(2, "Chang", 19));
        products.add(new Product(3, "Aniseed Syrup", 10));
        products.add(new Product(4, "Chef Anton's Cajun Seasoning", 22));
        products.add(new Product(5, "Chef Anton's Gumbo Mix", 21.35));
        products.add(new Product(6, "Grandma's Boysenberry Spread", 25));
        products.add(new Product(7, "Uncle Bob's Organic Dried Pears", 30));
        products.add(new Product(8, "Northwoods Cranberry Sauce", 40));
        products.add(new Product(9, "Mishi Kobe Niku", 97));
        products.add(new Product(10, "Ikura", 31));
    }

    @GetMapping("/get-products")
    public List<Product> getProducts() {
        logger.info("Products requested");
        return products;
    }

    @PostMapping("/create-product")
    public Product createProduct(@RequestBody Product product) {
        products.add(product);
        logger.info("Product created: {}", product);
        return product;
    }

    @PutMapping("/update-product/{originalProductId}")
    public Product updateProduct(@PathVariable int originalProductId, @RequestBody Product product) {
        Optional<Product> existingProduct = products.stream()
                .filter(p -> p.getProductID() == originalProductId)
                .findFirst();

        if (!existingProduct.isPresent()) {
            logger.warn("Product with ID {} not found", originalProductId);
            return null; // Ideally, throw an exception or return a proper response.
        }

        Product prod = existingProduct.get();
        prod.setProductName(product.getProductName());
        prod.setUnitPrice(product.getUnitPrice());
        prod.setProductID(product.getProductID());

        logger.info("Product updated: {}", prod);
        return prod;
    }

    @DeleteMapping("/delete-product/{id}")
    public void deleteProduct(@PathVariable int id) {
        products = products.stream()
                .filter(p -> p.getProductID() != id)
                .collect(Collectors.toList());

        logger.info("Product deleted: {}", id);
    }
}