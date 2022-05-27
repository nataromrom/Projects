getName();
function getName () {
    let askName = prompt('Введите ФИО');
    let arrName = askName.split(" ");
    let name = document.querySelector("#name");
    let surname = document.querySelector("#surname");
    let patronymic = document.querySelector("#patronymic");
    let arrNameNew = [];

    for (i = 0; i < arrName.length; i++) {
        if (arrName[i].trim() !== "") {
            let item = arrName[i][0].toUpperCase() + arrName[i].slice(1).toLowerCase();
            arrNameNew.push(item);
        };
    };


    name.value = arrNameNew[0];
    surname.value= arrNameNew[1];
    patronymic.value= arrNameNew[2];
    
}


