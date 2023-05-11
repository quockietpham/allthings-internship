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

document.getElementById("btnThem").onclick = function() {
  let buttonThem = document.getElementById("btnThemNV");
  buttonThem.classList.remove('hidden-btn');

  let buttonCapNhat = document.getElementById("btnCapNhat");
  buttonCapNhat.classList .add('hidden-btn');
  document.getElementById("header-title").innerHTML = "Log In";


}
document.getElementById("btnThemNV").onclick = function(nene) {
    
  let accValue = document.getElementById("tknv").value
  let nameValue = document.getElementById("name").value
  let emailValue = document.getElementById("email").value
  let dateworkValue = document.getElementById("datepicker").value
  let pwdValue = document.getElementById("password").value
  let luongCB = document.getElementById("luongCB").value
  let chucvuValue = document.getElementById("chucvu").value
  let gioLamValue = document.getElementById("gioLam").value
  var newEmployee = new Employee(accValue, nameValue, emailValue, dateworkValue, pwdValue, luongCB, chucvuValue, gioLamValue)
  allNameEmployees.push(newEmployee)
  
  //  ** create new employee 
  // First, let's get the table body element by its ID
  let tableBody = document.getElementById("tableDanhSach");
  let newRow = document.createElement("tr");
  let cell1 = document.createElement("td");
  cell1.textContent = newEmployee.getAccValue()
  newRow.appendChild(cell1);
  
  if  (allNameEmployees.indexOf(accValue)===-1) {
    
    
    let cell2 = document.createElement("td");
    cell2.textContent = newEmployee.getNameValue();
    newRow.appendChild(cell2);

    let cell3 = document.createElement("td");
    cell3.textContent = newEmployee.getEmailValue();
    newRow.appendChild(cell3);

    let cell4 = document.createElement("td");
    cell4.textContent = newEmployee.getGiolamValue(); 
    newRow.appendChild(cell4);

    let cell5 = document.createElement("td");
    cell5.textContent = newEmployee.getChucvuValue();
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

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Del";
    deleteButton.classList.add("btn", "btn-danger", "btn-sm", "ml-2");
    cell8.appendChild(deleteButton);

    newRow.appendChild(cell8);
    
    tableBody.appendChild(newRow);
    
    deleteButton.addEventListener("click", function() {
    
    if (confirm("Are you sure you want to delete this User?")) {
      let index = allNameEmployees.indexOf(cell1);
      if (index > -1) {
          allNameEmployees.splice(index, 1);
      }
      newRow.remove();
      console.log("-----ALLDEL", allNameEmployees)
      }
      });
  // event for edit button
    editButton.accValue = accValue
    editButton.addEventListener("click", function(e) {
      editButton.setAttribute("data-toggle", "modal");
      editButton.setAttribute("data-target", "#myModal");
      let row = this.parentNode.parentNode
      
      let employeeId =  e.srcElement.accValue

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
      
      let updateButton = document.getElementById("btnCapNhat")
      updateButton.addEventListener("click", function(ne) {    
       
        row.cells[1].innerHTML = document.getElementById("name").value
        row.cells[2].innerHTML = document.getElementById("email").value
        row.cells[3].innerHTML = document.getElementById("datepicker").value
        row.cells[4].innerHTML = document.getElementById("chucvu").value
        row.cells[5].innerHTML = document.getElementById("luongCB").value * document.getElementById("gioLam").value          
      })
     });  
     
  }
  else {
    alert('The name already exist')
    
  }
}

document.getElementById("btnLuu").onclick = function() {
  let table = document.getElementById("tableDanhSach");
  let tableData = [];

  for (let i = 0; i < table.rows.length; i++) {
    let rowData = {};
    for (let j = 0; j < table.rows[i].cells.length; j++) {
      rowData["Col" + j] = table.rows[i].cells[j].innerHTML;
    }
    
    tableData.push(rowData);
  }
  let jsonString = JSON.stringify(tableData)
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
  console.log("++++++Jsonto",JsonToJS)
  
  for (let i = 0; i < JsonToJS.length; i++) {
    let tableBody = document.getElementById("tableDanhSach");
    let newRow = document.createElement("tr");
    

    for (let j = 0; j < 8; j++) {
      if (j === 7) {
        let cell8 = document.createElement("td");
        let editButton = document.createElement("button");
        editButton.textContent = "edit";
        editButton.classList.add("btn", "btn-warning", "btn-sm");
        cell8.appendChild(editButton);
    
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Del";
        deleteButton.classList.add("btn", "btn-danger", "btn-sm", "ml-2");
        cell8.appendChild(deleteButton);
    
        newRow.appendChild(cell8);
        deleteButton.addEventListener("click", function() {
          console.log("--------editNE")
    
          if (confirm("Are you sure you want to delete this User?")) {
            newRow.remove();
            console.log("-----ALLDEL", allNameEmployees)
            }
          });
       
        editButton.addEventListener("click", function(e) {
          editButton.setAttribute("data-toggle", "modal");
          editButton.setAttribute("data-target", "#myModal");
          let row = this.parentNode.parentNode
          console.log("+++++row ne", row)
          
          let employeeId = row.cells[1].textContent
          console.log("+++++employeeid ne", employeeId)

    
          let updatedEmployees = allNameEmployees.filter(em => em.accValue === employeeId)
        
          let updatedEmployee = updatedEmployees[0]
    
          document.getElementById("tknv").value = updatedEmployee.accValue
          console.log("+++++EDUTBTN",updatedEmployee.accValue)
          document.getElementById("name").value =  updatedEmployee.nameValue
          document.getElementById("email").value =  updatedEmployee.emailValue
          document.getElementById("datepicker").value =  updatedEmployee.dateworkValue
          document.getElementById("password").value =  updatedEmployee.pwdValue
          document.getElementById("luongCB").value =  updatedEmployee.luongCB
          document.getElementById("chucvu").value =  updatedEmployee.chucvuValue
          document.getElementById("gioLam").value =  updatedEmployee.gioLamValue
          
          update()
          
          let updateButton = document.getElementById("btnCapNhat")
          updateButton.addEventListener("click", function(ne) {    
            
            row.cells[1].innerHTML = document.getElementById("name").value
            row.cells[2].innerHTML = document.getElementById("email").value
            row.cells[3].innerHTML = document.getElementById("datepicker").value
            row.cells[4].innerHTML = document.getElementById("chucvu").value
            row.cells[5].innerHTML = document.getElementById("luongCB").value * document.getElementById("gioLam").value          
          })
          });  
    //*end Editbutton
  }
      else {
        let k = JsonToJS[i][`col${j}`]
        
        let cell = document.createElement("td");
        cell.textContent = k
        newRow.appendChild(cell)
      }     
    }
    tableBody.appendChild(newRow);
  } 
}
document.getElementById("btnTimNV").onclick = function  searchEmployees() {
  let k = document.getElementById("searchName").value
  filterTable(0,k)
  filterTable(1,k)

  function filterTable(columnIndex, searchTerm) {
    var tableRows = document.getElementsByTagName("tr");
    for (var i = 1; i < tableRows.length; i++) {
      var tableCells = tableRows[i].getElementsByTagName("td");
      var cellText = tableCells[columnIndex].textContent.toLowerCase();
      if (cellText.indexOf(searchTerm.toLowerCase()) === -1) {
        tableRows[i].style.display = "none";
      } else {
        tableRows[i].style.display = "";
      }
    }
  }
 
}
let k = document.getElementById("searchName")
k.addEventListener('keyup', function(event) {

  if (k===" ") {
    let tableBody = document.getElementById("tableDanhSach");
    console.log("++++emty")
}
})
