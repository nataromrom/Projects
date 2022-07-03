document.addEventListener('DOMContentLoaded', () => {

    const API_KEY = '9ZdUk45mZ8vX4glxGyDidA3ztBpoU64e';
    const PROTOCOL = 'https://'
    const ROUTE = 'api.giphy.com/';
    const VERSION = 'v1/';
    const GIFS = 'gifs/';
    const TRENDING = 'trending';
    const SEACRH = 'search';
    const LIMIT = 5;

    const searchBtn = document.querySelector('#search-btn');
    const searchInput = document.querySelector('#search-input');

    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            searchGifs();
        }
    })

    searchBtn.addEventListener('click', searchGifs);


    getTrendingGifs();

    function getTrendingGifs() {
        const trendingRoute = new URL(`${PROTOCOL}${ROUTE}${VERSION}${GIFS}${TRENDING}?api_key=${API_KEY}&limit=${LIMIT}`);
        loadData(trendingRoute);
    }

    function appendHTML(gifs) {
        let html = '';

        if (!gifs.length) {
            html = '<p>Ooops.. Nothing found</p>';
        } else {
            gifs.forEach((gif) => {
                html += `
            <div class="giffs-wrap__img">
            <img src="${gif.images.original.url}" alt="${gif.title}">
            </div>`;
            })
        }
        const gifsWrapper = document.querySelector('.giffs-wrap');
        gifsWrapper.innerHTML = html;
    }

    function searchGifs() {
        const searchValue = searchInput.value;
        if (!searchValue) {
            return;
        }
        const seacrhRoute = new URL(`${PROTOCOL}${ROUTE}${VERSION}${GIFS}${SEACRH}?api_key=${API_KEY}&q=${searchValue}&limit=${LIMIT}`);
        loadData(seacrhRoute);
    }


    function loadData(route) {
        fetch(route)
            .then(response => response.json())
            .then(response => {
                const gifs = response.data; 
                appendHTML(gifs);
            })
            .catch(err => console.error(err));
    }

})