
function anounceError(InformElement){
  setTimeout(function(InformElement){
    InformElement.style.display="none";
  }, 5000)
}

function existedEmail(emailuserName, Employees){
  for (var i = 0; i <Employees.length; i++){
      var user = Employees[i]
      if (user.email === emailuserName){
          return true
      }
  }
  return false
}

function getEmployeeIndex(userName, Employees){
  for (var i = 0; i <Employees.length; i++){
      var user = Employees[i]
      if (user.userName ===userName){
          return i
      }
  }
  return -1
}

function mapData(Employees){
  var mappedData = []
  for (var i = 0; i < Employees.length; i++) {
      var employee = Employees[i];
      var userName = employee.userName;
      var name = employee.name;
      var email = employee.email;
      var password = employee.password;
      var onBoardDate = employee.onBoardDate;
      var basicSalary = employee.basicSalary;
      var role = employee.role;
      var workingHours = employee.workingHours;
      var mappingEmployee = new Employee(
          userName,
          name,
          email,
          password,
          onBoardDate,
          basicSalary,
          role,
          workingHours
        );
      mappedData.push(mappingEmployee)
  } 
  return mappedData
}

function validateInputData(
    userName,
    name,
    email,
    password,
    onBoardDate,
    basicSalary,
    role,
    workingHours){
    var isValid = document.getElementById("employeeForm").checkValidity();
  
    if(!isValid){
      var userNameSpan = document.getElementById("tbTKNV")
      if (userName.validity.valueMissing){
        userNameSpan.innerHTML = "Tài khoản không được để trống";
        userNameSpan.style.display="block";
      }else if(userName.validity.patternMismatch){
        userNameSpan.innerHTML = "Tài khoản phải có tối đa 4-6 kí tự số";
        userNameSpan.style.display="block";
        
      }else{
        userNameSpan.innerHTML = ""
        userNameSpan.style.display="none";
      }

      var nameSpan = document.getElementById("tbTen");
      console.log(name.validity.valueMissing)
      if(name.validity.valueMissing){
        nameSpan.innerHTML = "Họ và Tên không được để trống";
        nameSpan.style.display="block";
      }else if(name.validity.patternMismatch) {
        nameSpan.innerHTML = "Tên nhân viên không đúng";
        nameSpan.style.display="block";
      }else{
        nameSpan.innerHTML=""
        nameSpan.style.display="none";
      }

      var emailSpan = document.getElementById("tbEmail");
      if(email.validity.valueMissing){
        emailSpan.innerHTML = "Email không được để trống";
        emailSpan.style.display="block";
      }else if(email.validity.patternMismatch) {
        emailSpan.innerHTML = "Email sai định dạng";
        emailSpan.style.display="block";
      }else{
        emailSpaninnerHTML =""
        emailSpan.style.display="none";
      }

      var passwordSpan = document.getElementById("tbMatKhau");
      if(password.validity.valueMissing){
        passwordSpan.innerHTML = "Mật khẩu không được để trống"
        passwordSpan.style.display="block"
      }else if(password.validity.patternMismatch) {
        passwordSpan.innerHTML = "Mật khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)"
        passwordSpan.style.display="block"
      }else{
        passwordSpan.innerHTML = ""
        passwordSpan.style.display="none"
      }

      var dateSpan = document.getElementById("tbNgay");
      if(onBoardDate.validity.valueMissing){
        dateSpan.innerHTML = "Ngày làm không để trống"
        dateSpan.style.display="block"
      }else if (dayjs(onBoardDate.value).isAfter(dayjs())) {
        dateSpan.innerHTML = "Ngày vào làm không hợp lệ";
        dateSpan.style.display="block"
      } else{
        dateSpan.innerHTML =""
        dateSpan.style.display="none"
      }
      var workingHoursSpan = document.getElementById("tbGiolam");
      console.log(workingHours)
      if(workingHours.validity.valueMissing){
        workingHoursSpan.innerHTML = "Giờ làm việc không để trống"
        workingHoursSpan.style.display="block"
      }else{
        workingHoursSpan.innerHTML = ""
        workingHoursSpan.style.display="none"
      }
      
      var basicSalarySpan = document.getElementById("tbLuongCB");
      if(basicSalary.validity.valueMissing){
        basicSalarySpan.innerHTML = "Giờ làm việc không để trống"
        basicSalarySpan.style.display="block"
      }else{
        basicSalarySpan.innerHTML = ""
        basicSalarySpan.style.display="none"
      }

      var roleSpan = document.getElementById("tbChucVu");
      console.log(role.validity)
      if(role.validity.valueMissing){
        roleSpan.innerHTML = "Chức vụ không để trống"
        roleSpan.style.display="block"
      }else{
        roleSpan.innerHTML = ""
        roleSpan.style.display="none"
      }
    }else{
      document.getElementById("tbTKNV").style.display="none";
      document.getElementById("tbTen").style.display="none";
      document.getElementById("tbMatKhau").style.display="none"
      document.getElementById("tbEmail").style.display="none";
      document.getElementById("tbNgay").style.display="none"
      document.getElementById("tbGiolam").style.display="none"
      document.getElementById("tbLuongCB").style.display="none"
      document.getElementById("tbChucVu").style.display="none"
    }
    return isValid;
  }