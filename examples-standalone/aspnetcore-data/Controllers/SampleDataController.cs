using Microsoft.AspNetCore.Mvc;
using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using System.Collections;

namespace dotnet_angular.Controllers
{

    [Route("api/Products")]
    public class SampleController : Controller
    {
        [HttpGet]
        public JsonResult GetProducts([DataSourceRequest]DataSourceRequest request)
        {
            var result = Json(this.products.ToDataSourceResult(request));
            return result;
        }

        private IEnumerable products = new[] {
            new { ProductName = "Chai", CategoryName = "Beverages", QuantityPerUnit = "10 boxes x 20 bags" },
            new { ProductName = "Chang", CategoryName = "Beverages", QuantityPerUnit = "20 boxes x 20 bags" },
            new { ProductName = "Aniseed Syrup", CategoryName = "Condiments", QuantityPerUnit = "12 - 550 ml bottles" },
            new { ProductName = "Chef Anton's Cajun Seasoning", CategoryName = "Condiments", QuantityPerUnit = "48 - 6 oz jars" },
            new { ProductName = "Chef Anton's Gumbo Mix", CategoryName = "Condiments", QuantityPerUnit = "36 boxes" },
            new { ProductName = "Grandma's Boysenberry Spread", CategoryName = "Condiments", QuantityPerUnit = "12 - 8 oz jars" },
            new { ProductName = "Uncle Bob's Organic Dried Pears", CategoryName = "Produce", QuantityPerUnit = "12 - 1 lb pkgs." },
            new { ProductName = "Northwoods Cranberry Sauce", CategoryName = "Condiments", QuantityPerUnit = "12 - 12 oz jars" },
            new { ProductName = "Mishi Kobe Niku", CategoryName = "Meat/Poultry", QuantityPerUnit = "18 - 500 g pkgs." },
            new { ProductName = "Ikura", CategoryName = "Seafood", QuantityPerUnit = "12 - 200 ml jars" }
        };
    }
}