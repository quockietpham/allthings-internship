function fibonacciGenerator() {
    console.log("aaaaaaaaa")
    let n = 10
    var output = [0];
    if (n <= 1) {
        return output;
    }
    else if (n === 2) {
        output.push(1);
        return output;
    }
    else {
        output.push(1)
        for (var i = 1; i < (n - 1); i++) {
            var a = output[i - 1];
            var b = output[i];
            output.push(a + b);
        }
        return output;
    }

}
// console.log(fibonacciGenerator(10))

function changeTabContent(tab_type){
    if( tab_type === "design"){
        document.getElementById("tab_content").innerHTML= "<p>Hello</p>"
    }
}
document.getElementsByClassName("option")[0].style.color="red";