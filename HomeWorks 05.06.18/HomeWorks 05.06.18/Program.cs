using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeWorks_05._06._18
{
    class Program
    {
        static void Main(string[] args)
        {
            Person[] peopleArray=new Person[7];
            Signature[] signatureArray=new Signature[7];

            peopleArray[0] = new Person { FullName = "Bob Arnold", WantToSign = true };
            peopleArray[1] = new Person { FullName = "Alice Avery", WantToSign = true };
            peopleArray[2] = new Person { FullName = "Albert Bailey", WantToSign = true };
            peopleArray[3] = new Person { FullName = "Matt Baker", WantToSign = false };
            peopleArray[4] = new Person { FullName = "Carol Campbell", WantToSign = true };
            peopleArray[5] = new Person { FullName = "Kevin Brown", WantToSign = false };
            peopleArray[6] = new Person { FullName = "Lisa Bower", WantToSign = true };

            peopleArray[0].Event1 += (str) => peopleArray[0].FullName.ToLower();
            peopleArray[1].Event1 += (str) => "AliceAvery";
            peopleArray[2].Event1 += (str) => "A B";
            peopleArray[3].Event1 += (str) => "M Baker";
            peopleArray[4].Event1 += (str) => peopleArray[4].FullName.ToUpper();
            peopleArray[5].Event1 += (str) => "Kelvin.Brown";
            peopleArray[6].Event1 += (str) => "lisa";


            for (int i = 0; i < peopleArray.Length; i++)
            {
                signatureArray[i]=new Signature(peopleArray[i].FullName , peopleArray[i].SignAction());
            }

            foreach (Signature s in signatureArray)
            {
                Console.WriteLine($"{s.FullName}, {s.FullSignature}");
            }


            Console.ReadLine();


        }
    }
}
