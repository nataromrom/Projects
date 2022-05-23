
sumInput(); 
function sumInput() {
    let userArray = [];
    let i = 0;
    let sum = 0;
    while (true) {
        let item = prompt ("Введите число");
            if (!item || item ==="" || isNaN(item)) {
                break;
            };
        userArray[i] = +item;
        sum +=  +userArray[i];
        i++;

    };
    console.log(sum);
    if  (userArray.length > 0) {
        document.querySelector(".array").innerHTML = `Отcортированный массив: ${userArray.sort(function (a,b) {
            return a - b })}`;
        document.querySelector(".count").innerHTML = `Количество элементов в массиве: ${userArray.length}`;
        document.querySelector(".sum").innerHTML = `Сумма элементов массива: ${sum}`;
    } else {
        document.querySelector(".array").innerHTML = `В массиве нет элементов`;
    }

}

