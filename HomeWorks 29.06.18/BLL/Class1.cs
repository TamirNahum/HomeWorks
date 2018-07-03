using BOL;
using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public static class BLL
    {
        public static List<Product> GetWantedProductList()
        {
            List<Product> FullProductList = DbManager.GetProductList();
            if (FullProductList == null)
            {
                return null;
            }
            List<Product> WantedProducts = new List<Product>();
            foreach (Product p in FullProductList)
            {
                if (p.ProductName.Length == p.CategoryName.Length)
                {
                    WantedProducts.Add(p);
                }
            }
            return WantedProducts;
        }
    }
}
