let logField = document.querySelector("input[name=login]");
let logErr = document.querySelector(".info__field");

document.querySelector(".form__button").onclick = function(){
    let err = 0;

    if  (document.querySelector("input[name=pass]").value.length < 5) {
        logErr.innerHTML = "Пароль слишком короткий, введите не менее 5 знаков!"; 
        err +=1
    }; 
    if  (document.querySelector("input[name=pass]").value=="") {
        logErr.innerHTML = "Заполните поле Пароль"; 
        err +=1
    }; 
    if  (document.querySelector("input[name=passRepeat]").value===document.querySelector("input[name=pass]").value) {
    } else {
        logErr.innerHTML = "Пароли не совпадают!"; 
        err +=1
    };
    if  (document.querySelector("input[name=tel]").value.match(/\D/)) {
        logErr.innerHTML = "Телефон может содержать только цифры!"; 
        err +=1
    };
    if  (document.querySelector("input[name=tel]").value.length < 7) {
        logErr.innerHTML = "Слишком короткий телефон, введите не менее 7 цифр"; 
        err +=1
    };
    if  (document.querySelector("input[name=tel]").value=="") {
        logErr.innerHTML = "Заполните поле Телефон"; 
        err +=1
    }; 
    if  (document.querySelector("input[name=email]").value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)); else {
        logErr.innerHTML = "Некорректный формат email"; 
        err +=1
    }; 
    if  (document.querySelector("input[name=email]").value=="") {
        logErr.innerHTML = "Заполните поле Email"; 
        err +=1
    }; 
    if  (logField.value.length < 4) {
        logErr.innerHTML = "Логин слишком короткий, введите не менее 4 знаков!"; 
        err +=1
    }; 
    if  (logField.value=="") {
        logErr.innerHTML = "Заполните поле Логин"; 
        err +=1
    }; 
    if (err == 0) {
        document.querySelector(".info__field").innerHTML = `Добро пожаловать ${logField.value}!`;
        document.querySelector(".info__field").classList.remove ("errorStyle");
        document.querySelector(".info__field").classList.add ("welcomeStyle");
    } 
    if (err > 0) {
        document.querySelector(".info__field").classList.remove ("welcomeStyle");
        document.querySelector(".info__field").classList.add ("errorStyle");
    } 
};
