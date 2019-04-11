using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;

namespace aspnetcore_data.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private IEnumerable<Product> products = new Product[] {
            new Product { ProductName = "Chai", CategoryName = "Beverages", QuantityPerUnit = "10 boxes x 20 bags" },
            new Product { ProductName = "Chang", CategoryName = "Beverages", QuantityPerUnit = "20 boxes x 20 bags" },
            new Product { ProductName = "Aniseed Syrup", CategoryName = "Condiments", QuantityPerUnit = "12 - 550 ml bottles" },
            new Product { ProductName = "Chef Anton's Cajun Seasoning", CategoryName = "Condiments", QuantityPerUnit = "48 - 6 oz jars" },
            new Product { ProductName = "Chef Anton's Gumbo Mix", CategoryName = "Condiments", QuantityPerUnit = "36 boxes" },
            new Product { ProductName = "Grandma's Boysenberry Spread", CategoryName = "Condiments", QuantityPerUnit = "12 - 8 oz jars" },
            new Product { ProductName = "Uncle Bob's Organic Dried Pears", CategoryName = "Produce", QuantityPerUnit = "12 - 1 lb pkgs." },
            new Product { ProductName = "Northwoods Cranberry Sauce", CategoryName = "Condiments", QuantityPerUnit = "12 - 12 oz jars" },
            new Product { ProductName = "Mishi Kobe Niku", CategoryName = "Meat/Poultry", QuantityPerUnit = "18 - 500 g pkgs." },
            new Product { ProductName = "Ikura", CategoryName = "Seafood", QuantityPerUnit = "12 - 200 ml jars" }
        };

        [HttpGet]
        public JsonResult GetProducts([DataSourceRequest] DataSourceRequest request)
        {
            return Json(this.products.ToDataSourceResult(request));
        }

        public class Product
        {
            public string ProductName { get; set; }
            public string CategoryName { get; set; }
            public string QuantityPerUnit { get; set; }
        }
    }
}
