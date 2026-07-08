let time = gsap.timeline();

time.from("#nav h3", {
  y: -50,
  opacity: 0,
  delay: 0.2,
  duration: 1,
  stagger: 0.2, // sare h3 1 1 s me aynge stagger ke karan
});

time.from("#main h1", {
  x: -500,
  opacity: 0,
  duration: 0.9,
  stagger: 0.3,
});

time.from("img", {
  x: 100,
  rotate: 45,
  opacity: 0,
  duration: 0.5,
  stagger: 0.5,
});
