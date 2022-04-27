function hello() {
    let name = prompt("Как тебя зовут?", "Аноним");
    return "Привет, " + name + " !";
};

function addition() {
    let a = prompt("Введите первый элемент сложения", 0);
    let b = prompt("Введите второй элемент сложения", 0);
    let c = Number(a) + Number(b);
    return a + " + " + b + " = " + c;
};

function subtraction() {
    let a = prompt("Введите первый элемент вычитания", 0);
    let b = prompt("Введите второй элемент вычитания", 0);
    let c = Number(a) - Number(b);
    return a + " - " + b + " = " + c;
};

function multiplication() {
    let a = prompt("Введите первый элемент умножения", 0);
    let b = prompt("Введите второй элемент умножения", 0);
    let c = Number(a) * Number(b);
    return a + " * " + b + " = " + c
};

function division() {
    let a = prompt("Введите первый элемент деления", 0);
    let b = prompt("Введите второй элемент деления", 0);
    let c = Number(a) / Number(b);
    return a + " / " + b + " = " + c
};