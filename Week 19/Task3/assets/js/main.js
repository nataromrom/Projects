document.getElementById("result").readOnly = true;
let result = document.getElementById("result");
let btn = document.querySelectorAll(".btnCalculation");

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function(e) {
        let action = btn[i].value;
        let a = document.getElementById("figureOne").value;
        let b = document.getElementById("figureTwo").value; 
        Calcul[action] (a,b);
    }
};

class Calcul {
    constructor() {
    }
    static addition(a, b) {
        let c = +a + +b;
        result.value = `${a}+${b}=${c}`;
    }
    static subtraction(a, b) {
        let c = a - b;
        result.value = `${a}-${b}=${c}`;
    }
    static multiplication(a, b) {
        let c = a * b;
        result.value = `${a}*${b}=${c}`;
    }
    static division(a, b) {
        let c;
        if (b == 0) {
            c = "На ноль делить нельзя!";
            result.value = c;
        } else {
            c = a / b;
            result.value = `${a}/${b}=${c}`;
        }
    }
}

