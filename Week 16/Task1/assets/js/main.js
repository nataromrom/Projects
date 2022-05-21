
sumInput(); 
function sumInput() {
    let userArray = [];
    let i = 0;
    while (true) {
        let item = prompt ("Введите число");
            if (!item || item ==="" || isNaN(item)) {
                break;
            };
        userArray[i] = +item;
        i++;
    };

    if  (userArray.length > 0) {
        document.querySelector(".array").innerHTML = `Отcортированный массив: ${userArray.sort(function (a,b) {
            return a - b })}`;
        document.querySelector(".count").innerHTML = `Количество элементов в массиве: ${userArray.length}`;
    } else {
        document.querySelector(".array").innerHTML = `В массиве нет элементов`;
    }
/*     console.log(userArray.sort(function (a,b) {
        return a - b }), `Количество элементов в массиве: ${userArray.length}`);   */
}

