let logField = document.querySelector("input[name=login]");

let errorDiv = document.querySelector(".errorsInfo");
document.querySelector(".form__button").onclick = function(){
    errors.length = 0;
    let inputs = document.querySelectorAll("input");
    errorDiv.innerHTML = "";
    for (let input of inputs) {
        checkValidity(input);
    }
    errorDiv.innerHTML = errors.join('. \n');}

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

