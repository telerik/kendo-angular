package telerik.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import telerik.demo.datasource.DataSourceRequest;
import telerik.demo.datasource.DataSourceResult;
import telerik.demo.datasource.QueryableExtensions;
import telerik.demo.models.Product;
import telerik.demo.models.ProductDataResult;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/products")
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
        products.add(new Product(11, "Queso Cabrales", 21));
        products.add(new Product(12, "Queso Manchego La Pastora", 38));
    }

    @GetMapping("/get-products")
    public ProductDataResult getProducts() {
        logger.info("Products requested");
        return new ProductDataResult(products, products.size());
    }

    /**
     * Example using the new DataSourceRequest helper - similar to ASP.NET MVC
     * This endpoint accepts POST with DataSourceRequest in the body
     */
    @PostMapping("/get-products")
    public DataSourceResult getProductsWithDataSource(@RequestBody DataSourceRequest request) {
        logger.info("Products requested with DataSourceRequest: {}", request);
        
        // Use the helper method similar to ASP.NET: products.ToDataSourceResult(request)
        DataSourceResult result = QueryableExtensions.toDataSourceResult(products, request);
        
        logger.info("Returning {} items out of {} total", 
            result.getData() instanceof List ? ((List<?>) result.getData()).size() : "grouped",
            result.getTotal());
        
        return result;
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