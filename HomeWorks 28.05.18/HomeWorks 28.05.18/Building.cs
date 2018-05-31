using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeWorks_28._05._18
{
    abstract class Building
    {

        //-----------------constructor------------------------------

        public Building(int floorsNumber, bool isElevator)
        {
            FloorsNumber = floorsNumber;
            IsElevator = isElevator;
        }
        //--------------------------functions-------------------------

        public abstract  string  GetDetails();

        //--------------------------properties-------------------------


        public int FloorsNumber { get; set; }
        public bool IsElevator { get; set; }
    }
}
