let btn = document.querySelector(".btn");

btn.addEventListener("mouseover", (e)=>{
  let x = e.pageX - e.target.offsetLeft;
  let y = e.pageY - e.target.offsetTop;

  e.target.style.setProperty("--xVal", x + "px");
  e.target.style.setProperty("--yVal", y + "px");
});