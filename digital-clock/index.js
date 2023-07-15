function pu(){
    let hrEl = document.querySelector("#hour");
    let minEl = document.querySelector("#min");
    let secEl = document.querySelector("#sec");
    let ampmEl = document.querySelector("#ampm");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    if(h>12){
        h=h-12;
        ampmEl.innerText = "PM";
    }

    hrEl.innerText = h;
    minEl.innerText = m;
    secEl.innerText = s;
}

setInterval(pu, 1000);