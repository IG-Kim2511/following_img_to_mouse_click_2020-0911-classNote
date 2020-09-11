// 마우스따라서 움직임
//P: `translate(${e.clientX}px,${e.clientY}px)`

var il = document.querySelector(".il");

window.addEventListener("click", (e) => {
  il.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
});
