using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            using (NorthwindEntities ef = new NorthwindEntities())
            {

                foreach (Category c in ef.Categories)
                {
                    Console.WriteLine($"products with the same count of name letters as in{c.CategoryName}  :");
                    foreach (Product p in c.Products.Where(p => p.ProductName.Length ==c.CategoryName.Length))
                    {
                        Console.Write($"{p.ProductName}, ");
                        Console.Write($"{p.UnitPrice}, ");
                        p.UnitPrice=p.UnitPrice-p.UnitPrice/10;
                        Console.Write($"{p.UnitPrice}, ");

                    }
                    Console.WriteLine("\n_____________________________________________________________");
                }


                ef.SaveChanges();
                Console.Read();
            }
        }
    }
}