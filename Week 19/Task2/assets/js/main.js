let okBtn = document.querySelector('.okBtn');
okBtn.onclick = function() {

let petname = document.querySelector('input[name="petName"]').value;
let ownername = document.querySelector('input[name="ownername"]').value;
let email = document.querySelector('input[name="email"]').value;
let food = document.querySelector('input[type="checkbox"]:checked').value;
let sex = document.querySelector('input[type="radio"]:checked').value;

class Cat {
    constructor(petname, ownername, email, food, sex) {
        this.petname = petname; 
        this.ownername = ownername; 
        this.email = email; 
        this.food = food; 
        this.sex  = sex; 
    }
}

let cat = new Cat (petname, ownername, email, food, sex);
console.log(cat);  
}
