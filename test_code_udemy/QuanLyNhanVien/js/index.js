"use strict";
import Employee from "../model/employee.js"
let allNameEmployees = []


function update() {
  document.getElementById("header-title").innerHTML = "Update user";

  let buttonThem = document.getElementById("btnThemNV");
  buttonThem.classList.add('hidden-btn');

  let buttonCapNhat = document.getElementById("btnCapNhat");
  buttonCapNhat.classList.remove('hidden-btn');
  
}

document.getElementById("btnThem").addEventListener("click",themNguoiDung) 
function themNguoiDung()  {
  let buttonThem = document.getElementById("btnThemNV");
  buttonThem.classList.remove('hidden-btn');
  
  let buttonCapNhat = document.getElementById("btnCapNhat");
  buttonCapNhat.classList .add('hidden-btn');
  document.getElementById("header-title").innerHTML = "Log In";
}

function drawRow(newEmployee) {
  let tableBody = document.getElementById("tableDanhSach");
  let newRow = document.createElement("tr");
  let cell1 = document.createElement("td");
  cell1.textContent = newEmployee.accValue
  newRow.appendChild(cell1);

  let cell2 = document.createElement("td");
  cell2.textContent = newEmployee.nameValue;
  newRow.appendChild(cell2);

  let cell3 = document.createElement("td");
  cell3.textContent = newEmployee.emailValue;
  newRow.appendChild(cell3);

  let cell4 = document.createElement("td");
  cell4.textContent = newEmployee.giolamValue; 
  newRow.appendChild(cell4);

  let cell5 = document.createElement("td");
  cell5.textContent = newEmployee.chucvuValue;
  newRow.appendChild(cell5);

  let cell6 = document.createElement("td");
  cell6.textContent = newEmployee.getTotalSalary();
  newRow.appendChild(cell6);

  let cell7 = document.createElement("td");
  cell7.textContent = "xep loai";
  newRow.appendChild(cell7);

  let cell8 = document.createElement("td");
  var editButton = document.createElement("button");
  editButton.textContent = "edit";
  editButton.classList.add("btn", "btn-warning", "btn-sm");
  cell8.appendChild(editButton);
  editButton.addEventListener("click",function() {
    editRow(editButton)
  })

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Del";
  deleteButton.classList.add("btn", "btn-danger", "btn-sm", "ml-2");
  cell8.appendChild(deleteButton);
  deleteButton.addEventListener("click", function() {
    removeRow(deleteButton); 
  })
  newRow.appendChild(cell8);
  
  tableBody.appendChild(newRow);

}

function removeRow(button) {
  if (confirm("Are you sure you want to delete this User?")) {
    let row = button.parentNode.parentNode; 
    row.parentNode.removeChild(row); 
    let employeeId = row.cells[0].textContent
    let index = allNameEmployees.findIndex(obj => obj.accValue == employeeId);
    if (index !== -1) {
      allNameEmployees.splice(index, 1);
    }
  }
}

function editRow(button) {
  let row = button.parentNode.parentNode
  let editButton = row.querySelector(".btn-warning");
  editButton.setAttribute("data-toggle", "modal");
  editButton.setAttribute("data-target", "#myModal");
  let employeeId =  row.cells[0].textContent
  let updatedEmployees = allNameEmployees.filter(em => em.accValue === employeeId)
 
  let updatedEmployee = updatedEmployees[0]
  
  document.getElementById("tknv").value = updatedEmployee.accValue
  document.getElementById("name").value =  updatedEmployee.nameValue
  document.getElementById("email").value =  updatedEmployee.emailValue
  document.getElementById("datepicker").value =  updatedEmployee.dateworkValue
  document.getElementById("password").value =  updatedEmployee.pwdValue
  document.getElementById("luongCB").value =  updatedEmployee.luongCB
  document.getElementById("chucvu").value =  updatedEmployee.chucvuValue
  document.getElementById("gioLam").value =  updatedEmployee.gioLamValue
  update()
  
  
  };  
document.getElementById("btnCapNhat").addEventListener("click", updateButton)
function updateButton() {
  let tableBody = document.getElementById("tableDanhSach");
  let accValue = document.getElementById("tknv").value
  function checkUpdate(x) {
    for (let i=0; i<x.length; i++) {
      if (tableBody.rows[i].cells[0].textContent==accValue) {
        return i
      }
    }
  }
  let k = checkUpdate(allNameEmployees)
  allNameEmployees[k]['nameValue']= document.getElementById("name").value
  allNameEmployees[k]['emailValue'] = document.getElementById("email").value
  allNameEmployees[k]['dateworkValue'] = document.getElementById("datepicker").value
  allNameEmployees[k]['chucvuValue'] = document.getElementById("chucvu").value
  allNameEmployees[k]['luongCB'] = document.getElementById("luongCB").value
  allNameEmployees[k]['gioLamValue'] = document.getElementById("gioLam").value
  tableBody.rows[k].cells[1].textContent = document.getElementById("name").value
  tableBody.rows[k].cells[2].textContent = document.getElementById("email").value
  tableBody.rows[k].cells[3].textContent = document.getElementById("datepicker").value
  tableBody.rows[k].cells[4].textContent = document.getElementById("chucvu").value
  tableBody.rows[k].cells[5].textContent = document.getElementById("luongCB").value * document.getElementById("gioLam").value

}    


document.getElementById("btnThemNV").addEventListener("click", themNVClick);
function themNVClick(nene) {
  console.log(",,,,,,,")
  let accValue = document.getElementById("tknv").value
  let nameValue = document.getElementById("name").value
  let emailValue = document.getElementById("email").value
  let dateworkValue = document.getElementById("datepicker").value
  let pwdValue = document.getElementById("password").value
  let luongCB = document.getElementById("luongCB").value
  let chucvuValue = document.getElementById("chucvu").value
  let gioLamValue = document.getElementById("gioLam").value
  let newEmployee = new Employee(accValue, nameValue, emailValue, dateworkValue, pwdValue, luongCB, chucvuValue, gioLamValue)
  if (allNameEmployees.length == 0) {
    allNameEmployees.push(newEmployee)
    console.log("neneFirs",allNameEmployees)
    console.log("neneFirs",newEmployee)
    drawRow(newEmployee)
   
  }
  else {
    function checkArray(x,y){
      for (let i=0; i<x.length; i++) {
        if  (x[i].accValue === y) {
          return true;
        }  
      }
      
    }
    let check = checkArray(allNameEmployees,accValue)
    if (check==true) {
      alert('The account already exist')
    }
    else {
      allNameEmployees.push(newEmployee)
      drawRow(newEmployee)
    } 
     
    }
  }

document.getElementById("btnLuu").onclick = function() {
  let jsonString = JSON.stringify(allNameEmployees)
  let blob = new Blob([jsonString], { type: "application/json" });

  let link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "tableData.json";

  link.click();
}

document.getElementById("TaiLen").onclick = function(ne) {
  let fileInput = document.getElementById("TaiLen");
  fileInput.addEventListener("change", function() {
    let selectedFile = fileInput.files[0];
    let reader = new FileReader();
    reader.readAsText(selectedFile)
    reader.onload = xuLyFile
})
}

function xuLyFile(e) {
  let noiDung = e.target.result;
  let JsonToJS = JSON.parse(noiDung)
  let employeesUpload = JsonToJS
  
  for (let i = 0; i < employeesUpload.length; i++) {
    let accValue = employeesUpload[i]['accValue']
    
    let nameValue = employeesUpload[i]['nameValue']
    let emailValue = employeesUpload[i]['emailValue']
    console.log("maiamia", emailValue)
    let dateworkValue = employeesUpload[i]['dateworkValue']
    let pwdValue = employeesUpload[i]['pwdValue']
    let luongCB = employeesUpload[i]['luongCB']
    let chucvuValue = employeesUpload[i]['chucvuValue']
    let gioLamValue = employeesUpload[i]['gioLamValue']
    let uploadEmployee = new Employee(accValue, nameValue, emailValue, dateworkValue, pwdValue, luongCB, chucvuValue, gioLamValue)
    allNameEmployees.push(uploadEmployee)
    drawRow(uploadEmployee)
  } 
}

document.getElementById("btnTimNV").onclick = function searchEmployees() {
  let k = document.getElementById("searchName").value
  
  filterTable(k)
  function filterTable(searchTerm) {
    let table = document.querySelector('#tableDanhSach'); 
   
    
    const rowCount = table.rows.length;
    for (let l = rowCount - 1; l >= 0; l--) {
      table.deleteRow(l);
    }
    console.log("lalal", table)
    for (let i=0; i<allNameEmployees.length; i++) {
      let x = allNameEmployees[i]['accValue']
 
      for (let j = 0; j < x.length+1; j++) {
        if (x.substring(0, j) == searchTerm) {
       
          let m = allNameEmployees[i]
          drawRow(m)
          
        }
        
      }
    }
   
  }
 
}

