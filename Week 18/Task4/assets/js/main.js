let commentsPast = localStorage.getItem("tasks"); 
let indexPast = localStorage.getItem("indexPast"); 
let field = document.querySelector(".tasks"); 
let str = document.querySelector("#typeComment"); 
let btn = document.querySelector(".btn"); 
let tasks = [];



document.addEventListener("DOMContentLoaded", function (event){

    str.value = localStorage.getItem('typeComment');
    field.innerHTML = commentsPast; 
    let all = document.querySelectorAll(".form-check-label");
    checkMarks();
}); 

function checkSpam(str) {
    strCheck = str.replace(/viagra/ig,"***");
    strCheck = strCheck.replace(/XXX/ig,"***"); 
    return strCheck; 
}


function addComment() {

    if (str.validity.valueMissing){
        return;
    } 

    let strCheck = checkSpam(str.value);
    let html = "";

    if (strCheck && strCheck !==" ") {
        tasks.push(strCheck);
    } 

    field.innerHTML = ''; 
    if (!tasks.length) {
        return;
    } 


    tasks.forEach((comment, index) => {
    if (indexPast != null)  {
        index += +indexPast +1;
    } 

        html += `
            <div class="comment-add">
                <input type="checkbox" id="check-${index}" name="check" onchange = "updateItem(${index})">
                <label id="form-${index}" class="form-check-label" for="action-${index}">
                ${comment}
                </label>
            </div>
        `;
        localStorage.setItem("indexPast", index);
    });


    if (commentsPast != undefined || commentsPast != null ) {
        field.innerHTML = commentsPast; 
        field.innerHTML += html;
    }
    else {
        field.innerHTML += html;
    }

    localStorage.removeItem("tasks");
    localStorage.setItem("tasks", field.innerHTML);
    str.value = "";
    checkMarks();
}

str.oninput = () => {
    localStorage.setItem('typeComment', str.value)
}; 

btn.onclick = addComment;
str.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        addComment(); 
    }
});



function updateItem(index){
    if (document.getElementById(`check-${index}`).checked)
{
    document.getElementById(`form-${index}`).style.textDecoration="line-through";
    localStorage.removeItem("tasks");
    localStorage.setItem("tasks", field.innerHTML);
} else {
    document.getElementById(`form-${index}`).style.textDecoration="none";
    localStorage.removeItem("tasks");
    localStorage.setItem("tasks", field.innerHTML);
}
}

function checkMarks () {
    let all = document.querySelectorAll(".form-check-label");
    all.forEach((element, index) => { 
        if (element.style.textDecoration == "line-through") {
            document.getElementById(`check-${index}`).checked = true;
        }
    })
}

