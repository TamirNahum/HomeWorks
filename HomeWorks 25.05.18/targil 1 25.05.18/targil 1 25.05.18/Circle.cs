using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace targil_1_25._05._18
{
    class Circle
    {
        #region X prop
        public int X { get; set; }
        #endregion

        #region Y prop
        public int Y { get; set; }
        #endregion

        #region Radius propfull
        private int radius;

        public int Radius
        {
            get { return radius; }
            set
            {

                while (value <= 0)
                {
                    Console.WriteLine("please enter a positive radius");
                    value = int.Parse(Console.ReadLine());

                }
                radius = value;
            }
        }
            #endregion


            #region color prop
        public string Color { get; set; }
        #endregion

        public Circle()
        {
            Console.WriteLine("A circle has been created");
        }

        public void ToString()
        {
            Console.WriteLine($"Circle\nX:{X}\nY:{Y}\nRadius:{Radius}\ncolor:{Color}");
        }

        public double GetSurface()
        {

            return (Radius*Radius)*Math.PI;
        }

        public double GetPerimeter()
        {
            return Radius * 2 * Math.PI;
        }

    }
}

