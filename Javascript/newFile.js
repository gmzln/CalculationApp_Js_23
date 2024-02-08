import { Employee, UI } from "./newpopup";

// ----------   form SUBMISSION  ----------
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  //get form values
  console.log("hello");
  const name = document.getElementById("name").value,
    department = document.getElementById("department").value,
    workinghour = document.getElementById("workinghour").value,
    salary = document.getElementById("salary").value;
  // new employee
  const employee = new Employee(name, department, workinghour, salary);
  console.log(employee);
  // set UI
  const ui = new UI();
  validate;
  if (name === "" || department === "" || workinghour === "" || salary === "") {
    //error message
    ui.showAlert("required: name, department, working/h, salary", "error");
  } else {
    // add employee to list
    ui.addEmployeetoList(employee);
    ui.showAlert("Employee added!", "success");

    //clear form after submit
    ui.clearFields();
  }
});
