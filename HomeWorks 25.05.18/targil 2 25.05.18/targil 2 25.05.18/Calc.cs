using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace targil_2_25._05._18
{
    static class Calc
    {
        

        public static int GetSub(int num1,int num2)
        {
            return num1 + num2;
        }

        public static int GetSub(int num1, int num2,int num3)
        {
            return num1 + num2+num3;
        }

        public static double GetSub(double num1, double num2)
        {
            return num1 + num2 ;
        }

        static Calc()
        {
            Console.WriteLine($"first use of Calc on {DateTime.Now}") ;
        }
    }
}
