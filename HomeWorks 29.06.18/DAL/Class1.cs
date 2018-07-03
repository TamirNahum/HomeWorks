using BOL;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public static class DbManager
    {

        static string connectionString = "Data Source=DESKTOP-3OP79LR\\SQLEXPRESS;Initial Catalog=Northwind;Integrated Security=True";

        public static List<Product> GetProductList()
        {
            SqlConnection sql = null;
            try
            {
                using (sql = new SqlConnection(connectionString))
                {
                    List<Product> ProductList = new List<Product>();
                    sql.Open();
                    SqlCommand Query = new SqlCommand("select ProductName,Categories.CategoryName,UnitPrice from Products inner join Categories on Products.CategoryID=Categories.CategoryID", sql);
                    SqlDataReader DataReader = Query.ExecuteReader();
                    while (DataReader.Read())
                    {
                        Product NewProduct = new Product();
                        NewProduct.ProductName = DataReader[0].ToString();
                        NewProduct.CategoryName = DataReader[1].ToString();
                        NewProduct.UnitPrice = (decimal)(DataReader[2]);
                        ProductList.Add(NewProduct);
                    }
                    return ProductList;
                }
            }
            catch
            {
                return null;
            }
        }

    }
}
