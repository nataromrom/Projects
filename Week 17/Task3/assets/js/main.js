let btn = document.querySelector(".btn");

btn.onclick = function() {alert( formatDate(new Date(new Date - 5 * 60 * 1000)) )}

function formatDate(date) {

    let day= date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    let diff = new Date() - date;
    let diffMin = diff / 60000;
    let diffHour = diffMin / 60;

    if (diff < 1000) {
        return 'прямо сейчас';
    } else if (diffMin < 1) {
        return `${diff/1000} сек. назад`
    } else if (diffHour < 1) {
        return `${diffMin} мин. назад`
    } else {
        return `${day}.${month}.${year}, ${hour}:${minutes}`
    }
}