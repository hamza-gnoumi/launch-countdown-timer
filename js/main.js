let finEvent = new Date("31 jan 2023").getTime();
let count = setInterval(() => {
    let datenow = new Date().getTime();
    let diff = finEvent - datenow;

    let days = Math.floor(diff / 1000 / 60 / 60 / 24);
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.querySelector(".launching .unite .days ").innerHTML = days < 10 ? `0${days}` : `${days}`;
    document.querySelector(".launching .unite .hours ").innerHTML = hours < 10 ? `0${hours}` : `${hours}`;
    document.querySelector(".launching .unite .minutes ").innerHTML = minutes < 10 ? `0${minutes}` : `${minutes}`;
    document.querySelector(".launching .unite .seconds ").innerHTML = seconds < 10 ? `0${seconds}` : `${seconds}`;
    if (diff <= 0) {
        clearInterval(count);

    }

}, 1000);