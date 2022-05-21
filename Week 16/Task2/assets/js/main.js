let carLable = document.querySelector("select[name=carLable]");
let carModel = document.querySelector("select[name=carModel]");
let carAge = document.querySelector("select[name=carAge]");
let carType = document.querySelector("select[name=carType]");
let result = document.querySelector(".btnform");
let resultFill = document.querySelector(".result");
let resultArr= [];

carModel.disabled = true;
carAge.disabled = true;
carType.disabled = true;
carLable.onchange = function(){
    let checks = document.querySelectorAll("option:checked");  
    console.log(carLable);  
    carModel.disabled = false;
    carAge.disabled = false;
    let arrModel  = [];
    let html = '';
    switch (carLable.options[carLable.selectedIndex].text) {
        case "BMW":
            arrModel  = ["BMW X5","BMW i3","BMW i8"];
            arrCost = [4000000, 5000000, 102000];
            createArr(arrModel, arrCost);
            break;
        case "Rolls-Royce":
            arrModel = ["Rolls-Royce Ghost","Rolls-Royce Phantom VII","Rolls-Royce Cullinan"];
            arrCost = [10000000, 10100000, 10200000];
            createArr(arrModel, arrCost);
            break;
        case "Mercedes":
            arrModel  = ["Mercedes-Benz S-Класс VII (W223)"," Mercedes A-class (W177)","Mercedes E-class"];
            arrCost = [5000000, 5001000, 5102000];
            createArr(arrModel, arrCost);
            break;
        case "Москвич":
            arrModel  = ["Москвич NEW"];
            arrCost = [900000];
            createArr(arrModel, arrCost);
            break;
    }
    function createArr(brands, cost) {
        for (let i = 0; i < brands.length; i++) {
        html += `<option value="${cost[i]}">${brands[i]}</option>`;
        carModel.innerHTML = html;
        }
    }
    }
carAge.onchange = function(){
    carType.disabled = false;
};
result.onclick = function(){
    let checks = document.querySelectorAll("option:checked");
    let radio = document.querySelectorAll("input[type=radio]:checked");
    let checkboxs = document.querySelectorAll("input[type=checkbox]:checked");
    let sum = 0;
    for (let i=0; i< checks.length; i++) {
            sum += +checks[i].value;
    }
    for (let i=0; i< radio.length; i++) {
        sum += +radio[i].value;
    }
    for (let i=0; i< checkboxs.length; i++) {
        sum += +checkboxs[i].value;
    } 
    resultFill.innerHTML = `Cтоимость автомобиля ${sum} рублей`;
};

