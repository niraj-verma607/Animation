let tl = gsap.timeline(); //timeline taki animation ek ek karke chake naki ek sath

tl.to("#full", {
  right: 0,
  duration: 0.5,
});

tl.from("#full h4", {
  x: 150,
  duration: 0.5,
  stagger: 0.2,
  opacity: 0,
});

tl.from("#full i", {
  x: 50,
  opacity: 0,
});

tl.pause();

let menu = document.querySelector("#nav i");
let close = document.querySelector("#full i");

menu.addEventListener("click", () => {
  tl.play();
});

close.addEventListener("click", () => {
  tl.reverse(); //jese animation huya tha uska reverse
});
