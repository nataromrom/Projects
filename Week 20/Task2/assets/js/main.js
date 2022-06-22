
document.addEventListener("DOMContentLoaded", function (event) {
    fetch("https://api.nasa.gov/planetary/apod?api_key=nRnXMsoZLUIoTvTFLA3CnTO95LhY2FeT9oNTl2On")
        .then(response => response.json())
        .then(data => {
            document.querySelector(".image").src = data.url;
            document.querySelector(".title").innerHTML = data.title;
            document.querySelector(".about").innerHTML = data.explanation;
        });
})

