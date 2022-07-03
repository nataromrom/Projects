let logField = document.querySelector("input[name=login]");
let mailField = document.querySelector("input[name=email]");
let phoneField = document.querySelector("input[name=tel]");
let passField = document.querySelector("input[name=pass]");

let errorDiv = document.querySelector(".errorsInfo");
document.querySelector(".form__button").onclick = function(event){
    event.preventDefault();
    errors.length = 0;
    let inputs = document.querySelectorAll("input");
    errorDiv.innerHTML = "";
    for (let input of inputs) {
        checkValidity(input);
    }
    errorDiv.innerHTML = errors.join('. \n');

    if (errors.length == 0){

        let user = {
            login: logField.value,
            email: mailField.value,
            phone: phoneField.value,
            password: passField.value,
        }
        fetch ("https:/httpbin.org/post",
            {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
            })
            .then (response => response.json())
            .then (user => {
                console.log(user);
            })
            .catch(error => console.log(error));
    }
}

let errors = [];
function checkValidity(input) {
    let validity = input.validity;

    if (validity.patternMismatch) 
		{ errors.push(`Неверный формат заполнения поля ${ input.placeholder}`); }
    
    if (validity.valueMissing) 
		{errors.push(`Поле ${ input.placeholder} не заполнено`); }
    
	if (validity.tooShort) 
		{errors.push(`Слишком короткое поле ${ input.placeholder}`); }
    
    if (input.name == "email") {
        let regexp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i 
        if ( !regexp.test(input.value)) {
            errors.push(`поле email не соответствует стандартному формату`);
        }
    }
    
}

