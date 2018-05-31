using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeWorks_28._05._18
{
    class Program
    {
        static void Main(string[] args)
        {
            Hotel[] hotels = new Hotel[5] 
            {
                new Hotel(100, true),
                new Hotel(3, false),
                new Hotel(20, true),
                new Hotel(15, true),
                new Hotel(5, false)
            };

            foreach (Hotel hotel in hotels)
            {
                Console.WriteLine(hotel.GetDetails());
                Console.WriteLine();
            }
        }
    }
}
