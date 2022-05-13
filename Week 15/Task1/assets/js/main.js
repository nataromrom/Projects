document.getElementById("result").readOnly = true;
let a;
let b;
let result = document.getElementById("result");


function getValue() {
    a = document.getElementById("figureOne").value;
    b = document.getElementById("figureTwo").value; 
};

function addition() {
    getValue ();
    let c = +a + +b;
    result.value = `${a}+${b}=${c}`;
};

function subtraction() {
    getValue ();
    let c = a - b;
    result.value = `${a}-${b}=${c}`;
};

function multiplication() {
    getValue ();
    let c = a * b;
    result.value = `${a}*${b}=${c}`;
};

function division() {
    getValue ();
    let c;
    if (b == 0) {
        c = "На ноль делить нельзя!";
        result.value = c;
    } else {
        c = a / b;
        result.value = `${a}/${b}=${c}`;
    }
};

