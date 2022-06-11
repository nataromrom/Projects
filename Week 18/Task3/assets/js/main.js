let commentsPast = localStorage.getItem("comments"); 
let field = document.querySelector(".comments"); 
let str = document.querySelector("#typeComment"); 
let btn = document.querySelector(".btn"); 
let comments = [];
let author = document.getElementById("author");


document.addEventListener("DOMContentLoaded", function (event){
    let name = localStorage.getItem("name");
    let image = localStorage.getItem("image");
    let imageField = document.getElementById("img");
    

    if (name != null) {
        author.value = name;
    }
    if (image != null) {
        imageField.value = image;
    } else {
        imageField.value = 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg';  
    }

    str.value = localStorage.getItem('typeComment');
    field.innerHTML = commentsPast; 
}); 

function checkSpam(str) {
    strCheck = str.replace(/viagra/ig,"***");
    strCheck = strCheck.replace(/XXX/ig,"***"); 
    return strCheck; 
}


function addComment() {

    let strCheck = checkSpam(str.value);
    let img = document.getElementById("img").value;
    author = document.getElementById("author").value;
    let html = "";

    localStorage.setItem("name", author);
    localStorage.setItem("image", img);

    if (strCheck && strCheck !==" ") {
        comments.push(strCheck);
    } 

    field.innerHTML = ''; 
    if (!comments.length) {
        return;
    } 

    comments.forEach((comment, index) => {
        html += `
            <div class="comment-add">
                <img src="${img}" alt="" width="50" height="50"> 
                <label class="form-check-label" for="action-${index}">
                ${author}: ${comment}
                </label>
            </div>
        `;
    });


    if (commentsPast != undefined || commentsPast != null ) {
        field.innerHTML = commentsPast; 
        field.innerHTML += html;
    }
    else {
        field.innerHTML += html;
    }

    localStorage.removeItem("comments");
    localStorage.setItem("comments", field.innerHTML);
    str.value = "";
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
