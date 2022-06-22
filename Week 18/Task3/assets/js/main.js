let commentsPast = localStorage.getItem("comments"); 
let field = document.querySelector(".comments"); 
let str = document.querySelector("#typeComment"); 
let btn = document.querySelector(".btn"); 
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
    let commentsPast = localStorage.getItem("comments"); 
    if (!str.value) {
        return;
    }
    let strCheck = checkSpam(str.value);
    let img = document.getElementById("img").value;
    author = document.getElementById("author").value;

    localStorage.setItem("name", author);
    localStorage.setItem("image", img);

    let commentHTML = `
    <div class="comment-add">
        <img src="${img}" alt="" width="50" height="50"> 
        <label class="form-check-label" for="action">
        ${author}: ${strCheck}
        </label>
    </div>  
    `

    field.innerHTML = commentsPast;
    field.innerHTML += commentHTML;
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
