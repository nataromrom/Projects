document.getElementById("result").readOnly = true

function addition() {
    let a = document.getElementById("figureOne").value;
    let b = document.getElementById("figureTwo").value;
    let c = Number(a) + Number(b);
    document.getElementById("result").value = `${a}+${b}=${c}`;
};

function subtraction() {
    let a = document.getElementById("figureOne").value;
    let b = document.getElementById("figureTwo").value;
    let c = Number(a) - Number(b);
    document.getElementById("result").value = `${a}-${b}=${c}`;
};

function multiplication() {
    let a = document.getElementById("figureOne").value;
    let b = document.getElementById("figureTwo").value;
    let c = Number(a) * Number(b);
    document.getElementById("result").value = `${a}*${b}=${c}`;
};

function division() {
    let a = document.getElementById("figureOne").value;
    let b = document.getElementById("figureTwo").value;
    let c;
    if (b == 0) {
        c = "На ноль делить нельзя!";
        document.getElementById("result").value = c;
    } else {
        c = Number(a) / Number(b);
        document.getElementById("result").value = `${a}/${b}=${c}`;
    }
};

