using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;


namespace HomeWorks_22._06._18
{
    class Customers
    {

        public dynamic CustomerID { get; set; }
        public dynamic CompanyName { get; set; }
        public dynamic Address { get; set; }
        public dynamic City { get; set; }
        public dynamic Region { get; set; }
        public dynamic Country { get; set; }
        public dynamic ContactName { get; set; }


        public Customers(
            dynamic customerID,
            dynamic companyName,
            dynamic address,
            dynamic city,
            dynamic region,
            dynamic country,
            dynamic contactName
            )
        {
            CustomerID = customerID;
            CompanyName = companyName;
            Address = address;
            City = city;
            Region = region;
            Country = country;
            ContactName = contactName;
        }

        public override string ToString()
        {
            return $"CustomerID: {CustomerID},  CompanyName: {CompanyName},  Address: {Address},  City: {City},  Region: {Region},  Country: {Country}";
        }

    }



    class Program
    {
        static void Main(string[] args)
        {
            string connectionString = @"Data Source=DESKTOP-3OP79LR\SQLEXPRESS;Initial Catalog=Northwind;Integrated Security=True";

            SqlConnection sql = null;

            List<dynamic> customersList = new List<dynamic>(91);

            try
            {
                using (sql = new SqlConnection(connectionString))
                {

                    sql.Open();

                    SqlCommand query = new SqlCommand("SELECT [CustomerID], [CompanyName], [Address], [City], [Region], [Country], [ContactName] FROM [dbo].[Customers]", sql);

                    SqlDataReader dataReader = query.ExecuteReader();

                    while (dataReader.Read())
                    {
                        customersList.Add(new
                        {

                            CustomerID = dataReader[0],
                            CompanyName = dataReader[1],
                            Address = dataReader[2],
                            City = dataReader[3],
                            Region = dataReader[4],
                            Country = dataReader[5],
                            ContactName = dataReader[6]

                        });
                    }
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

            var list = new Customers[91];

            for (int i = 0; i < customersList.Count; i++)
            {
                list[i] = new Customers(customersList[i].CustomerID, customersList[i].CompanyName, customersList[i].Address, customersList[i].City, customersList[i].Region, customersList[i].Country, customersList[i].ContactName);
            }


            IEnumerable<Customers> res = list
                .Where((Customers c) => { return c.ContactName.IndexOf("A") > -1 || c.ContactName.IndexOf("a") > -1; })
                .Select((Customers c) => { return c; });

            foreach (var item in res)
            {
                Console.WriteLine(item);
                Console.WriteLine();
                Console.WriteLine();
            }


        }
    }
}