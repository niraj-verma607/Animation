//gsap.to (for initial to final animation)

// gsap.to("#box", {
//   x: 500, //x axis
//   rotate: 360, //rotation of box
//   backgroundColor: "blue",
//   duration: 2, //animation duration
//   delay: 1, //time after animation start
// });

// //gsap.from(final to initail)

// gsap.from("#box1", {
//   x: 500, //x axis
//   rotate: 360, //rotation of box
//   backgroundColor: "blue",
//   borderRadius: "50%",
//   duration: 2, //animation duration
//   delay: 1, //time after animation start
// });

let time = gsap.timeline(); //gsap.timeline taki animation ek ke baad ek chale na ki sab ek sath me hi

time.to("#box", {
  // time is a variable that store timeline
  x: 500,
  rotate: 360,
  scale: 0.5,
  duration: 1,
  delay: 1,
});

time.to("#box1", {
  x: 500,
  rotate: 360,
  scale: 0.5,
  duration: 1,
});

time.to("#box2", {
  x: 500,
  rotate: 360,
  scale: 0.5,
  duration: 1,
});
