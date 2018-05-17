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
            int[] arr = new int[8];
            int prev = 0;

            for (int i = 0; i < arr.Length; i++)
            {
                Console.WriteLine("enter a number");
                arr[i] = int.Parse(Console.ReadLine());

            }

            for (int i = 0; i < arr.Length; i++)
            {
                if (i < arr.Length - 1)
                {
                   
                
                   
                if ((arr[i]+arr[i+1])%2==1)
                {
                    Console.WriteLine($"{arr[i]},{arr[i+1]}");
                }
                }
            }
            Console.ReadLine();
        }
    }
}
