
document.addEventListener("DOMContentLoaded", async function (event) { 
    try {
    let response = await fetch("https://api.nasa.gov/planetary/apod?api_key=nRnXMsoZLUIoTvTFLA3CnTO95LhY2FeT9oNTl2On")
    let data = await response.json();
        document.querySelector(".image").src = data.url;
        document.querySelector(".title").innerHTML = data.title;
        document.querySelector(".about").innerHTML = data.explanation;
    
    } 
    catch(error) {
        console.log("Сервер не доступен");
    }   
})
