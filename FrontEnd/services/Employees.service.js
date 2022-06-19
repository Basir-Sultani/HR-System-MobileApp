export function getEmployeesFromApiAsync() {
    return fetch('http://192.168.1.3:44350/helloworldWebService1.asmx/GetEmployees')
      .then((response) => {
            return response.json();
      })
      .catch((error) => {
        console.error(error);
      });
}

export function updateEmployeeFromApiAsync(b) {

  let data = `id=${b.id}&name=${b.name}&Department=${b.Department}&Phone=${b.Phone}`; 

  return fetch('http://192.168.1.3:44350/helloworldWebService1.asmx/UpdateEmployee', {
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

export function addEmployeeFromApiAsync(b) {
 
  let data = `name=${b.name}&Department=${b.Department}&Phone=${b.Phone}`; 

  return fetch('http://192.168.1.3:44350/helloworldWebService1.asmx/AddEmployee', {
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

  return fetch('http://localhost:44350/helloworldWebService1.asmx/DeleteEmployee', {
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
  return fetch('http://localhost:44350/helloworldWebService1.asmx/GetDepartments')
  
    .then((response) => {
          return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
}