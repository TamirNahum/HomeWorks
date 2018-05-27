using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace targil_1_25._05._18
{
    class Program
    {
        static void Main(string[] args)
        {
            Circle circle = new Circle();
            Square square = new Square();


            Console.WriteLine("pick circle color");
            circle.Color = Console.ReadLine() ;
            Console.WriteLine("pick circle X");
            circle.X = int.Parse(Console.ReadLine());
            Console.WriteLine("pick circle Y");
            circle.Y = int.Parse(Console.ReadLine());
            Console.WriteLine("pick circle Radius");
            circle.Radius = int.Parse(Console.ReadLine());

            Console.WriteLine("pick Square color");
            square.Color = Console.ReadLine();
            Console.WriteLine("pick Square X");
            square.X = int.Parse(Console.ReadLine());
            Console.WriteLine("pick Square Y");
            square.Y = int.Parse(Console.ReadLine());
            Console.WriteLine("pick Square Length");
            square.Length = int.Parse(Console.ReadLine());

            circle.ToString();
            square.ToString();

            Console.Read();
        }
    }
}
