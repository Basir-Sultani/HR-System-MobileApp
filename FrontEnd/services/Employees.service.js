export function getEmployeesFromApiAsync() {
    return fetch('http://localhost:44350/RoiHumanResourceWebService.asmx/GetEmployees')
      .then((response) => {
            return response.json();
      })
      .catch((error) => {
        console.error(error);
      });
}

export function updateEmployeeFromApiAsync(e) {

  let data = `id=${e.id}&name=${e.name}&Department=${e.Department}&Phone=${e.Phone}&Street=${e.street}&City=${e.city}&State=${e.state}&Zip=${e.zip}&Country=${e.country}`; 

  return fetch('http://localhost:44350/RoiHumanResourceWebService.asmx/Updateemployee', {
      method: 'POST',
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: data
  })
    .then((response) => {
        console.log({updatePersonResponseCode: response});
          return response;
    })
    .catch((error) => {
      console.error(error);
    });
}

export function addEmployeeFromApiAsync(e) {
 
  let data = `name=${e.name}&department=${e.department}&phone=${e.phone}&street=${e.street}&city=${e.city}&state=${e.state}&zip=${e.zip}&country=${e.country}`; 
  
  return fetch('http://localhost:44350/RoiHumanResourceWebService.asmx/AddEmployee', {
      method: 'POST',
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: data
  })
    .then((response) => {
        console.log({addPersonResponseCode: response});
          return response;
    })
    .catch((error) => {
      console.error(error);
    });
}
  
export function deleteContactFromApiAsync(id) {

  let data = `id=${id}`; 
  console.log('about to delete ' + data);

  return fetch('http://localhost:44350/RoiHumanResourceWebService.asmx/Deleteemployee', {
      method: 'POST',
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: data
  })
    .then((response) => {
        console.log({deletePersonResponseCode: response});
          return response;
    })
    .catch((error) => {
      console.error(error);
    });
}

export function getDepartmentsFromApiAsync() {
  return fetch('http://localhost:44350/RoiHumanResourceWebService.asmx/GetDepartments')
  
    .then((response) => {
          return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
}