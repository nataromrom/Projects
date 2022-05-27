let btn = document.querySelector(".btn");
let arrNum = document.querySelector(".arrNum");
let minNum = document.querySelector(".minNum");
let maxNum = document.querySelector(".maxNum");
let avNum = document.querySelector(".avNum");
let sumNum = document.querySelector(".sumNum");
let mulNum = document.querySelector(".mulNum");



btn.onclick = function () {
    let arr = [];
    for (i = 0; i < 10; i++) {
        let num = getRandom(-10, 10);
        arr.push(num);
    };  

    let sumAll = arr.reduce((a, b) => a + b);
    let multAll = arr.reduce((a, b) => a * b);

    arrNum.innerHTML = `Сгенерировали: ${arr}`;
    minNum.innerHTML = `Минимальное: ${Math.min(...arr)}`;
    maxNum.innerHTML = `Максимальное:  ${Math.max(...arr)}`;
    avNum.innerHTML = `Среднее арифметическое:  ${sumAll/arr.length}`;
    sumNum.innerHTML = `Сумма чисел:  ${sumAll}`;
    mulNum.innerHTML = `Произведение чисел:  ${multAll}`;

    function getRandom(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    } 
}
