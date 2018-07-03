using BLL;
using BOL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeWorks_29._06._18
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Product> productList = BLL.BLL.GetWantedProductList();
            Console.WriteLine("Products that the length of their name equals to the length of one of the categories name");
            foreach (Product p in productList)
            {
                Console.WriteLine($"Category name: {p.CategoryName}, Product name:{p.ProductName}, price:{p.UnitPrice}");
            }
        }
    }
}
