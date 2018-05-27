using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace targil_1_25._05._18
{
    class Square
    {
        #region X prop
        public int X { get; set; }
        #endregion

        #region Y prop
        public int Y { get; set; }
        #endregion

        #region Length propfull
        private int length;
        public int Length
        {
            get { return length; }
            set
            {
                while (value <= 0)
                {
                    Console.WriteLine("please enter a positive Length");
                    value = int.Parse(Console.ReadLine());

                }
                length = value;
            }
        }
        #endregion

        #region color prop
        public string Color { get; set; }
        #endregion

        public Square()
        {
            Console.WriteLine("A Square has been created");
        }

        public  void  ToString()
        {
            Console.WriteLine($"Square-\nX:{X}\nY:{Y}\nLength:{Length}\ncolor:{Color}");
        }

        public double GetSurface()
        {

            return (Length * Length) ;
        }

        public double GetPerimeter()
        {
            return Length * 4;
        }

    }
}

