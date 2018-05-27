using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace targil_2_25._05._18
{
    class Program
    {
        static void Main(string[] args)
        {
            int num1, num2;
            double num3 = Calc.GetSub(3.22, 6.66);

            num1 = Calc.GetSub(10, 20);
            num2 = Calc.GetSub(10, 20,30);

            Console.WriteLine($"num1:{num1},num2:{num2},num3:{num3}" );
            Console.Read();

        }
    }
}
