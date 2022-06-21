using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace webServiceHumanResource
{
    public class Employee
    {
        private int      Id      { get; set; }
        private string   Name     { get; set; }
        private Department Department { get; set; }

        private string    Phone { get; set; }
        private string    Street { get; set; }
        private string    City { get; set; }
        private string    State { get; set; }
        private string    Zip { get; set; }
        private string    Country { get; set; }

    }
}