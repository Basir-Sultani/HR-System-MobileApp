using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Script.Services;
using System.Web.Services;
using System.Xml.Linq;

namespace webServiceHelloWorld
{
    /// <summary>
    /// Summary description for helloworldWebService1
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class helloworldWebService1 : System.Web.Services.WebService
    {

        [WebMethod(Description = "Get Employees"), ScriptMethod(UseHttpGet = true)]
        public void GetEmployees()
        {
            var file = Path.Combine(HttpRuntime.AppDomainAppPath, "Employees.xml");
            var doc = XDocument.Load(file);
            var elements = doc.Root.Elements();
            var Employees = new List<Employee>();//The Employees is empty at the start

            foreach (var e in elements)
            {
                var employee = new Employee()
                {
                    Id = int.Parse(e.Attribute("Id").Value),
                    Name = e.Element("Name").Value,
                    Department = Department.FirstOrDefault(
                        c => c.Id == Int32.Parse(e.Element("Department").Value)),
                    Phone = e.Element("Phone").Value
                };
                Employees.Add(employee);

            }

            Context.Response.Write(
              new JavaScriptSerializer().Serialize(Employees));

        }

        [WebMethod(Description = "Add Employees"), ScriptMethod(UseHttpGet = true)]
        public void AddEmployee( string Name, string Department, string Phone)
        {
            var file = Path.Combine(HttpRuntime.AppDomainAppPath, "Employees.xml");
            var doc = XDocument.Load(file);
            var root = doc.Root;

            int id = 0;
            if (root.Elements("Employee").Any())
            {
                id = doc.Descendants("Employee").Max(p => (int)p.Attribute("Id")) + 1;
            }

            var employee = new XElement("Employee");
            employee.Add(new XAttribute("Id", id)); // add an attribute
            employee.Add(new XElement("Name", Name));
            employee.Add(new XElement("Department", Department));
            employee.Add(new XElement("Phone", Phone));



            root.Add(employee);
            doc.Save(file);
            Context.Response.StatusCode = 201;

        }

        [WebMethod(Description = "Delete a employee"), ScriptMethod(UseHttpGet = true)]
        public void Deleteemployee(int id)
        {
            var file = Path.Combine(HttpRuntime.AppDomainAppPath, "Employees.xml");
            var doc = XDocument.Load(file);
            var employee =
                doc.Root.Elements().FirstOrDefault(b => int.Parse(b.Attribute("Id").Value) == id);

            if (employee != null)
            {
                employee.Remove();
                doc.Save(file);
                Context.Response.StatusCode = 202;
            }
        }


        [WebMethod(Description = "Update Employees"), ScriptMethod(UseHttpGet = true)]
        public void Updateemployee(int id, string name, string Department, string Phone)
        {
            var file = Path.Combine(HttpRuntime.AppDomainAppPath, "Employees.xml");
            var doc = XDocument.Load(file);
            var employee =
                doc.Root.Elements().FirstOrDefault(b => int.Parse(b.Attribute("Id").Value) == id);
            if (employee != null)
            {
                employee.Element("Name").SetValue(name);
                employee.Element("Phone").SetValue(Phone);
                employee.Element("Department").SetValue(Department);
                doc.Save(file);
                Context.Response.StatusCode = 202;
            }
        }


        [WebMethod(Description = "Get Department"), ScriptMethod(UseHttpGet = true)]
        public void GetDepartment()
        {
            Context.Response.Write(
                new JavaScriptSerializer().Serialize(Department)
                );
               
        }

       
        public List<Department> Department
        {
            get
            {
                var elements =
                    XDocument.Load(Path.Combine(HttpRuntime.AppDomainAppPath,
                    "Departments.xml")).Root.Elements();

                var Department = new List<Department>();
                foreach (XElement element in elements)
                {
                    Department DepartmentObj = 
                        new Department 
                        {
                            Id=int.Parse(element.Attribute("Id").Value), 
                            Name=element.Element("Name").Value
                        };
                    Department.Add(DepartmentObj);
                }

                return Department;

            }
        }

     

    }
}
