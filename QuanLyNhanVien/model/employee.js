var Employee = function (
  userName,
  name,
  email,
  password,
  onBoardDate,
  basicSalary,
  role,
  workingHours
) {
  this.userName = userName;
  this.name = name;
  this.email = email;
  this.password = password;
  this.onBoardDate = onBoardDate;
  this.basicSalary = basicSalary;
  this.role = role;
  this.workingHours = workingHours;
  this.calSalary = function () {
    if (this.role === "CEO") {
      return this.basicSalary * 3 
    } else if (this.role === "Leader") {
      return this.basicSalary * 2 
    } else {
      return this.basicSalary;
    }
  };
  this.considerAward = function () {
    if (this.workingHours >= 192) {
      return "Excellent";
    } else if (this.workingHours >= 167 && this.workingHours < 192) {
      return "Very Good";
    } else if (this.workingHours >= 160 && this.workingHours < 167) {
      return "Good";
    } else if (this.workingHours < 160) {
      return "Average";
    }
  };
};