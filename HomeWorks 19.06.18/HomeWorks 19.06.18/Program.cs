using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeWorks_19._06._18
{


    class Program
    {
        static void Main(string[] args)
        {
            List<dynamic> customerList=new List<dynamic>(91);
            string connectionString = @"Data Source=DESKTOP-3OP79LR\SQLEXPRESS;Initial Catalog=Northwind;Integrated Security=True";
            SqlConnection sql = null;

            using (sql = new SqlConnection(connectionString))
            {

                sql.Open();

                SqlCommand query = new SqlCommand("SELECT [CustomerID],[CompanyName],[Address],[City],[Region],[Country] FROM Customers", sql);
                SqlDataReader dataReader = query.ExecuteReader();



 
                while (dataReader.Read())
                {
                    customerList.Add (new {
                        ID=dataReader[0],
                        CompanyName= dataReader[1],
                        Address = dataReader[2],
                        City = dataReader[3],
                        Region = dataReader[4],
                        Country = dataReader[5]
                    });


                }

                foreach (var item in customerList)
                {
                    Console.WriteLine($"ID-{item.ID}\nCompany name:{item.CompanyName}\nAddress:{item.Address}\nCity:{item.City}\nRegion:{item.Region}\nCountry:{item.Country}");
                    Console.WriteLine();
                    Console.WriteLine();
                }

                Console.Read();





            }
        }
    }
}
