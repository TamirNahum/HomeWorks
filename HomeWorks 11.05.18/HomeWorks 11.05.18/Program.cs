using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeWorks_11._05._18
{
    class Program
    {
        static void Main(string[] args)
        {
            int num1 = 0, num2 = 0;

            Console.WriteLine("please first number");
            num1 = int.Parse(Console.ReadLine());
            Console.WriteLine("please second number");
            num2 = int.Parse(Console.ReadLine());

            Console.Write("{0}-{1}=",num1,num2);
            Console.WriteLine(num1-num2);


        }
    }
}
