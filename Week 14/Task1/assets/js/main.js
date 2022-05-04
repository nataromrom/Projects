document.getElementById("result").readOnly = true

function addition() {
    let a = document.getElementById("figureOne").value;
    let b = document.getElementById("figureTwo").value;
    let c = Number(a) + Number(b);
    document.getElementById("result").value = a + " + " + b + " = " + c;
};

function subtraction() {
    let a = document.getElementById("figureOne").value;
    let b = document.getElementById("figureTwo").value;
    let c = Number(a) - Number(b);
    document.getElementById("result").value = a + " - " + b + " = " + c;
};

function multiplication() {
    let a = document.getElementById("figureOne").value;
    let b = document.getElementById("figureTwo").value;
    let c = Number(a) * Number(b);
    document.getElementById("result").value = a + " * " + b + " = " + c;
};

function division() {
    let a = document.getElementById("figureOne").value;
    let b = document.getElementById("figureTwo").value;
    let c = Number(a) / Number(b);
    document.getElementById("result").value = a + " / " + b + " = " + c;
};

function changeColor(className, color) {
    document.getElementsByClassName(className)[0].style.background = color;
 }

function gallarySwitch(num) {
    document.getElementsByClassName('image')[0].src = `assets/img/img${num}.jpg`;
}