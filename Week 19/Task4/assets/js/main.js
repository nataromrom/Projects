
// Вариант 1 -  стандартный
class Validator {
    constructor() {
    }
    isEmail(str) {
        let email = str.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return email === null ? false : true;
    }
    isDomain(str) {
        let domain = str.match(/(\w+\.)+\w+/g);
        return domain === null ? false : true;
    }
    isDate(str) {
        let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
        return date === null ? false : true;
    }
    isPhone(str) {
        let phone = str.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
        return phone === null ? false : true;
    }

}
let validator = new Validator();
console.log(validator.isEmail("alisa@mail.ru")); 
console.log(validator.isDomain("itgirlschool.ru")); 
console.log(validator.isDate("12.05.2021")); 
console.log(validator.isPhone("+7(910)123-45-67"));

// Вариант 2 -  статический
class ValidatorStatic {
    constructor() {
    }
    static isEmail(str) {
        let email = str.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return email === null ? false : true;
    }
    static isDomain(str) {
        let domain = str.match(/(\w+\.)+\w+/g);
        return domain === null ? false : true;
    }
    static isDate(str) {
        let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
        return date === null ? false : true;
    }
    static isPhone(str) {
        let phone = str.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
        return phone === null ? false : true;
    }

}
console.log(ValidatorStatic.isEmail('alisa@mail.ru')); 
console.log(ValidatorStatic.isDomain('itgirlschool.ru')); 
console.log(ValidatorStatic.isDate('12.05.2021')); 
console.log(ValidatorStatic.isPhone('+7(910)123-45-67'));



