gsap.from("#page1 #circle", {
  scale: 0,
  duration: 2,
  delay: 1,
  rotate: 360,
});

gsap.from("#page2 #circle", {
  scale: 0,
  duration: 2,
  rotate: 360,
  //   scrollTrigger: "#page2 #circle",
  scrollTrigger: {
    trigger: "#page2 #cicle", //jispe animationa lagegega
    scroller: "body",
    markers: true,
    start: "60%",
    endpoint: "30%",
    scrub: 2, //value : true (no smoothness), 1 -5 (smoothness)
  },
});
