"use strict";

const LocalStorageName = "AllEmployees";
var AllEmployees = [];

function saveData() {
  localStorage.setItem(LocalStorageName, JSON.stringify(AllEmployees));
}

function getData() {
  var allEmployees = localStorage.getItem(LocalStorageName);
  if (!allEmployees) return;
  AllEmployees = mapData(JSON.parse(allEmployees));
  renderTable(AllEmployees);
}

function createTheNewEmployee() {
  var userName = document.getElementById("tknv");
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var onBoardDate = document.getElementById("datepicker");
  var basicSalary = document.getElementById("luongCB");
  var role = document.getElementById("chucvu");
  var workingHours = document.getElementById("gioLam");

  // validation form
  var isValid = validateInputData(
    userName,
    name,
    email,
    password,
    onBoardDate,
    basicSalary,
    role,
    workingHours
  );

  // The userName and email is unique

  if (getEmployeeIndex(userName.value, AllEmployees) !== -1) {
    document.getElementById("tbTKNV").innerHTML = "Tài khoản đã tồn tại !";
    document.getElementById("tbTKNV").style.display = "block";
    return;
  } else {
    document.getElementById("tbTKNV").style.display = "none";
  }

  var isExistedEmail = existedEmail(email.value, AllEmployees)

  if (isExistedEmail){
    document.getElementById("tbEmail").innerHTML = "Email đã tồn tại !";
    document.getElementById("tbEmail").style.display = "block";
    return;
  }else {
    document.getElementById("tbEmail").style.display = "none";
  }


  // if (!isValid) return alert("Biểu mẫu điền không hợp lệ");

  var newEmployee = new Employee(
    userName.value,
    name.value,
    email.value,
    password.value,
    onBoardDate.value,
    +basicSalary.value,
    role.value,
    +workingHours.value
  );
  AllEmployees.push(newEmployee);
  console.log(AllEmployees);
  renderTable(AllEmployees);
  saveData();
  return alert("Thêm nhân viên thành công !")
  // document.getElementById("btnDong").click();
}

function renderTable(employees) {
  var renderingContent = "";
  for (var i = 0; i < employees.length; i++) {
    var employee = employees[i];
    renderingContent += `
        <tr>
            <td class="nowrap"> 
                <p> ${employee.userName}</p>
            </td>
            <td><p> ${employee.name}</p></td>
            <td><p> ${employee.email}</p></td>
            <td><p> ${dayjs(employee.onBoardDate).format("DD/MM/YYYY")}</p></td>
            <td><p> ${employee.role}</p></td>
            <td><p> ${employee.calSalary()}</p></td>									
            <td><p> ${employee.considerAward()}</p></td>
            <td>
                <i class="fa-solid fa-trash-can" onclick="deleteUser('${
                  employee.userName
                }')"></i>
                <i class="fa-solid fa-pen-to-square" onclick="loadUserInformation('${
                  employee.userName
                }')"></i>
            </td>
            
        </tr>
        `;
  }
  document.getElementById("tableDanhSach").innerHTML = renderingContent;
}

function deleteUser(userName) {
  if (!confirm("Bạn có chắc muốn xoá nhân viên này ?")) return; 
    
  var employeeIndex = getEmployeeIndex(userName, AllEmployees);
  if (employeeIndex === -1) return alert("Không tồn tại nhân viên này");
  AllEmployees.splice(employeeIndex, 1);
  renderTable(AllEmployees);
  saveData();
}

function loadUserInformation(userName) {
  var employeeIndex = getEmployeeIndex(userName, AllEmployees);
  var updatingUser = AllEmployees[employeeIndex];
  document.getElementById("btnThem").click();
  document.getElementById("header-title").innerHTML = "Cập nhật nhân viên";
  var tknv = document.getElementById("tknv");
  tknv.value = updatingUser.userName;
  document.getElementById("tknv").disabled = true;
  document.getElementById("name").value = updatingUser.name;
  document.getElementById("email").value = updatingUser.email;
  document.getElementById("password").value = updatingUser.password;
  document.getElementById("datepicker").value = updatingUser.onBoardDate;
  document.getElementById("luongCB").value = updatingUser.basicSalary;
  document.getElementById("chucvu").value = updatingUser.role;
  document.getElementById("gioLam").value = updatingUser.workingHours;
  document.getElementById("btnThemNV").classList.add("hidden-btn");
  document.getElementById("btnCapNhat").classList.remove("hidden-btn");
}

function updateUser() {
  var userName = document.getElementById("tknv").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var onBoardDate = document.getElementById("datepicker").value;
  var basicSalary = +document.getElementById("luongCB").value;
  var role = document.getElementById("chucvu").value;
  var workingHours = +document.getElementById("gioLam").value;
  var employeeIndex = getEmployeeIndex(userName, AllEmployees);
  var updatingUser = AllEmployees[employeeIndex];
  updatingUser.name = name
  updatingUser.email = email;
  updatingUser.password = password;
  updatingUser.onBoardDate = onBoardDate;
  updatingUser.basicSalary = basicSalary;
  updatingUser.role = role;
  updatingUser.workingHours = workingHours;

  saveData()
  console.log(AllEmployees)
  renderTable(AllEmployees);

  document.getElementById("btnThemNV").classList.remove("hidden-btn");
  document.getElementById("btnCapNhat").classList.add("hidden-btn");
  document.getElementById("header-title").innerHTML = "Login";
  document.getElementById("tknv").disabled = true;
  document.getElementById("btnDong").click();
}

function searchsearchEmployeesAfterTime() {
  setTimeout(searchEmployees(),2000)
}

function searchEmployees(){
  
  var searchingKey = document.getElementById("searchName").value.toLowerCase().trim();;
  var results = [];
  for (var i = 0; i < AllEmployees.length; i++) {
    var currentEmployee = AllEmployees[i];
    var award = currentEmployee.considerAward().toLowerCase();
    if (award === searchingKey || award.includes(searchingKey)) {
      results.push(currentEmployee);
    }
  }
  renderTable(results);
}

getData();

console.log(AllEmployees);


