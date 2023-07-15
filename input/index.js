let textarea = document.querySelector("#textarea");
let text_len = document.querySelector(".len");
let rem = document.querySelector(".rem");
let maxlen = Number(textarea.getAttribute("maxlength"));
console.log(maxlen, typeof maxlen);

function pu(e){
    let inp = e.target.value;
    let cnt = inp.length;
    let remlen = maxlen - cnt;
    text_len.innerText = `Total Character: ${cnt}`;
    rem.innerText = `Remaining: ${remlen}`;
}
textarea.addEventListener("input", pu);