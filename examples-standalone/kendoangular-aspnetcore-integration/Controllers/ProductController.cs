
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
// To add Telerik NuGet packages, check the Telerik UI for ASP.NET Core documentation: https://docs.telerik.com/reporting/getting-started/installation/adding-private-nuget-feed


namespace Kendo_ASP.NET_Core_Angular.Controllers
{
    [ApiController]
    [Route("products")]
    public class ProductController : ControllerBase
    {
        private readonly ILogger<ProductController> _logger;

        public ProductController(ILogger<ProductController> logger)
        {
            _logger = logger;
        }

        private static List<Product> Products = new List<Product>
        {
            new Product
            {
                ProductID = 1,
                ProductName = "Chai",
                UnitPrice = 18,

            },
            new Product
            {
                ProductID = 2,
                ProductName = "Chang",
                UnitPrice = 19,

            },
            new Product
            {
                ProductID = 3,
                ProductName = "Aniseed Syrup",
                UnitPrice = 10,

            },
            new Product
            {
                ProductID = 4,
                ProductName = "Chef Anton's Cajun Seasoning",
                UnitPrice = 22,

            },
            new Product
            {
                ProductID = 5,
                ProductName = "Chef Anton's Gumbo Mix",
                UnitPrice = 21.35M,

            },
            new Product
            {
                ProductID = 6,
                ProductName = "Grandma's Boysenberry Spread",
                UnitPrice = 25,

            },
            new Product
            {
                ProductID = 7,
                ProductName = "Uncle Bob's Organic Dried Pears",
                UnitPrice = 30,

            },
            new Product
            {
                ProductID = 8,
                ProductName = "Northwoods Cranberry Sauce",
                UnitPrice = 40,

            },
            new Product
            {
                ProductID = 9,
                ProductName = "Mishi Kobe Niku",
                UnitPrice = 97,

            },
            new Product
            {
                ProductID = 10,
                ProductName = "Ikura",
                UnitPrice = 31,

            }
        };

        [HttpPost]
        [Route("get-products")]
        public ActionResult GetProducts([DataSourceRequest] DataSourceRequest request)
        {

            var requestJson = JsonConvert.SerializeObject(request);
            _logger.LogInformation("Data requested: {RequestJson}", requestJson);

            var result = Products.AsQueryable().ToDataSourceResult(request);

            var resultJson = JsonConvert.SerializeObject(result);
            _logger.LogInformation("Data result: {ResultJson}", resultJson);

            return Ok(result);
        }

        [HttpPost]
        [Route("create-product")]
        public IActionResult CreateProduct([FromBody] Product product)
        {
            Products.Add(product);

            _logger.LogInformation("Product created: {Product}", JsonConvert.SerializeObject(product));
            return Ok(product);
        }


        [HttpPut]
        [Route("update-product/{originalProductId}")]
        public IActionResult UpdateProduct(int originalProductId, [FromBody] Product product)
        {
            var existingProduct = Products.FirstOrDefault(p => p.ProductID == originalProductId);
            if (existingProduct == null)
            {
                return NotFound();
            }

            existingProduct.ProductName = product.ProductName;
            existingProduct.UnitPrice = product.UnitPrice;
            existingProduct.ProductID = product.ProductID;

            _logger.LogInformation("Product updated: {Product}", JsonConvert.SerializeObject(existingProduct));
            return Ok(existingProduct);
        }

        [HttpDelete]
        [Route("delete-product/{id:int}")]
        public IActionResult DeleteProduct(int id)
        {
            Console.WriteLine("Product deleted: {0}", id);
            var product = Products.FirstOrDefault(p => p.ProductID == id);
            if (product == null)
            {
                return NotFound();
            }

            Products.Remove(product);
            _logger.LogInformation("Product deleted: {0}", id);

            return Ok();
        }

    }

}


