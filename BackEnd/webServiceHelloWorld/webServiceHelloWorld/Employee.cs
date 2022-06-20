using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace webServiceHumanResource
{
    public class Employee
    {
        public int      Id      { get; set; }
        public string   Name     { get; set; }
        public Department Department { get; set; }

        public string    Phone { get; set; }
        public string    Street { get; set; }
        public string    City { get; set; }
        public string    State { get; set; }
        public string    Zip { get; set; }
        public string    Country { get; set; }

    }
}