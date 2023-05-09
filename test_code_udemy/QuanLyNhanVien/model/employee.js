class Employee {
    constructor(accValue="", nameValue="", emailValue="", pwdValue =  "", dateworkValue =  "", luongCB = "", chucvuValue = "", gioLamValue =  "") {
        this.accValue = accValue ;
        this.nameValue =  nameValue;
        this.emailValue =  emailValue;
        this.pwdValue =  pwdValue;
        this.dateworkValue = dateworkValue;
        this.luongCB = luongCB;
        this.chucvuValue = chucvuValue;
        this.gioLamValue =  gioLamValue;
    }
    getAccValue(){
        return this.accValue
    }
    setAccValue(accValue) {
        this.accValue = accValue
    }
    getNameValue(){
        return this.nameValue
    }
    setNameValue(nameValue) {
        this.nameValue = nameValue
    }
    getEmailValue(){
        return this.emailValue
    }
    setEmailValue(emailValue) {
        this.emailValue = emailValue
    }
    getPwdValue(){
        return this.pwdValue
    }
    setPwdValue(pwdValue) {
        this.pwdValue = pwdValue
    }
    getDateworkValue(){
        return this.dateworkValue
    }
    setDateworkValue(dateworkValue) {
        this.dateworkValue = dateworkValue
    }
    getLuongCB(){
        return this.luongCB
    }
    setLuongCB(luongCB) {
        this.luongCB = luongCB
    }
    getChucvuValue(){
        return this.chucvuValue
    }
    setChucvuValue(chucvuValue) {
        this.accValue = accValue
    }
    getGiolamValue(){
        return this.gioLamValue
    }
    setGiolamValue(gioLamValue) {
        this.gioLamValue = gioLamValue
    }
    getTotalSalary() {
        return this.getGiolamValue() * this.getLuongCB()
        
    }
}
export default Employee