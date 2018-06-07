using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeWorks_05._06._18
{
    public delegate string ActionHandler(string str);


    public class Person
    {
        public event ActionHandler Event1;


        public string FullName { get; set; }
        public bool WantToSign { get; set; }

        public string SignAction()
        {
            if (WantToSign == true)
            {
                if (Event1 != null)
                {
                    return Event1(FullName);
                }
            }
            return null;
        }
        }
    }
