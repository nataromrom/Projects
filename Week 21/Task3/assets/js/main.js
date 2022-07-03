
let savebtn = document.querySelector(".savebtn");
savebtn.onclick = function (e) {
    e.preventDefault();
    let form = document.querySelector(".form");

    fetch("https://httpbin.org/post",
        {
            method: 'POST',
            body: new FormData(form),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
        })
        .catch(err => console.log(err)); 
}  