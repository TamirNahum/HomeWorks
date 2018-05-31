using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeWorks_28._05._18
{
    class Hotel:Building
    {

        //-----------------constructor------------------------------

        public Hotel(int floorsNumber,bool isElevator) : base(floorsNumber, isElevator)
        {
            NumOfRooms = FloorsNumber * 5;
            NumOfTakenRooms = NumOfRooms / 6;
            Country = Country.China;
            Services[0] = Service.Gym;
            Services[1] = Service.Pool;
            Services[2] = Service.View;

        }
        //--------------------------functions-------------------------


        public override string GetDetails() {

            return $"number of floors:{FloorsNumber}\nis there elvator?:{IsElevator}\nNumber of rooms:{NumOfRooms}\nnumber of taken rooms:{NumOfTakenRooms}\nCountry:{Country}\nServices:{Services[0]},{Services[1]},{Services[2]}";
        }

        //--------------------------properties-------------------------

        public int NumOfRooms { get; set; }
        public int NumOfTakenRooms { get; set; }
        public Country Country { get; set; }
        public Service[] Services { get; set; } = new Service[3];
    }
}
