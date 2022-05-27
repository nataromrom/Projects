let field = document.querySelector(".comments"); 
let btn = document.querySelector(".btn"); 
let str = document.querySelector("#typeComment"); 
let comments = [];

function checkSpam(strVal) {
    strCheck = strVal.replace(/viagra/ig,"***");
    strCheck = strCheck.replace(/XXX/ig,"***"); 
    return strCheck; 
}

function addComment() {
    let strVal = str.value; 
    let strCheck = checkSpam(strVal);
    if (strCheck && strCheck !==" ") {
        comments.push(strCheck);
    } 
    field.innerHTML = ''; 
    if (!comments.length) {
        return;
    } 
    let html = '';
    comments.forEach((comment, index) => {
        html += `
            <div class="comment-add">
                <label class="form-check-label" for="action-${index}">
                    ${comment}
                </label>
            </div>
        `;
    });
    field.innerHTML += html;
}

btn.onclick = addComment;
str.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        addComment(); 
    }
});
