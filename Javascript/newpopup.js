import "../css/employee.css";

// ----------   open&&close POP-UP WINDOW  ----------

const addEmployeeBtn = document.querySelector(".add-button");
const saveEmployeeBtn = document.querySelector(".popup-add-employee");
const popUpoverlay = document.querySelector(".overlay");

const openPopUp = function () {
  popUpoverlay.classList.remove("hidden");
};

addEmployeeBtn.addEventListener("click", openPopUp);

const closePopUp = function () {
  popUpoverlay.classList.add("hidden");
};

saveEmployeeBtn.addEventListener("click", closePopUp);

// ----------   employee constructor  ----------

function Employee(name, department, workinghour, salary) {
  this.name = name;
  this.dateofbirth = dateofbirth;
  this.email = email;
  this.phone = phone;
  this.jobtitle = jobtitle;
  this.department = department;
  this.startdate = startdate;
  this.enddate = enddate;
  this.status = employeestatus;
  this.workinghour = workinghour;
  this.salary = salary;
}

// ----------   UI constructor  ----------
function UI(employee) {}

//add employee to list
UI.prototype.addEmployeetoList = function (employee) {
  const list = document.querySelector(".employee-list");
  //create div element
  const div = document.createElement("div");
  div.classList.add("Input");
  //insert data to ui via inner.HTML
  div.innerHTML = `
    <img src="../assets/profile-pic-juan.png" class="employee-img">
          <p class="Input-p">${employee.name} | ${employee.department} | ${employee.workinghour} | ${employee.salary} </p>
          <button class="add-circle"><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_20_937)">
                        <path
                          d="M14 8C14 5.79 12.21 4 10 4C7.79 4 6 5.79 6 8C6 10.21 7.79 12 10 12C12.21 12 14 10.21 14 8ZM12 8C12 9.1 11.1 10 10 10C8.9 10 8 9.1 8 8C8 6.9 8.9 6 10 6C11.1 6 12 6.9 12 8Z"
                          fill="black"
                        />
                        <path
                          d="M2 18V20H18V18C18 15.34 12.67 14 10 14C7.33 14 2 15.34 2 18ZM4 18C4.2 17.29 7.3 16 10 16C12.69 16 15.77 17.28 16 18H4Z"
                          fill="black"
                        />
                        <path d="M23 10H17V12H23V10Z" fill="black" />
                      </g>
                      <defs>
                        <clipPath id="clip0_20_937">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
            </button>
          `;
  list.appendChild(div);
};

//show alert
UI.prototype.showAlert = function (message, className) {
  // create div
  const errordiv = document.createElement("div");
  errordiv.className = `alert ${className}`;
  //add text
  errordiv.appendChild(document.createTextNode(message));
  //get parent
  const container = document.querySelector(".error-notice");
  //get form
  //const formContainer = document.querySelector("form");
  // insert alert
  container.appendChild(errordiv);
  //timeout after 3 sec.
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};

//delete Employee
UI.prototype.deleteEmployee = function (target) {
  if (target.className === "add-circle") {
    target.parentElement.remove();
  }
};

//clear fields
UI.prototype.clearFields = function () {
  document.getElementById("name").value = "";
  document.getElementById("dateofbirth").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("jobtitle").value = "";
  document.getElementById("department").value = "";
  document.getElementById("startdate").value = "";
  document.getElementById("enddate").value = "";
  document.getElementById("employeestatus").value = "";
  document.getElementById("salary").value = "";
  document.getElementById("workinghour").value = "";
};

// ----------   form SUBMISSION  ----------

//Event listener for add
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  //get form values
  const name = document.getElementById("name").value,
    department = document.getElementById("department").value,
    workinghour = document.getElementById("workinghour").value,
    salary = document.getElementById("salary").value;
  // new employee
  const employee = new Employee(name, department, workinghour, salary);
  console.log(employee);
  // set UI
  const ui = new UI();
  //validate
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

//Even Listener for delete
document
  .querySelector(".employee-list")
  .addEventListener("click", function (e) {
    // set UI
    const ui = new UI();
    //delete employee
    ui.deleteEmployee(e.target);
    //show alert
    ui.showAlert("Employee removed!", "success");
    e.preventDefault();
  });
