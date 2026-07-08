// tl.from("nav h1", {
//   y: -30,
//   opacity: 0,
//   delay: 1,
//   duration: 1,
// });

function page1Animation() {
  var tl = gsap.timeline();
  tl.from("nav h1, nav h4, nav button", {
    y: -30,
    delay: 0.5,
    duration: 0.6,
    opacity: 0,
    stagger: 0.15,
  });

  tl.from(
    ".center-part1 h1",
    {
      x: -200,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.3"
  );

  tl.from(".center-part1 p", {
    x: -200,
    opacity: 0,
    duration: 0.4,
  });

  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.4,
  });

  tl.from(
    ".center-part2 img",
    {
      duration: 0.5,
      x: 200,
      opacity: 0,
    },
    "-=0.3"
  );

  tl.from(".section1bottom img", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.6,
  });
}

// page1Animation();

// gsap.from(".section2 .services h3", {
//   x: -100,
//   duration: 0.5,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: ".services h3",
//     scroller: "body",
//     markers: true,
//     start: "top 50%",
//   },
// });
function page2Animation() {
  var tl2 = gsap.timeline({
    //scroll trigger ko timeline me hi define kar diya taki scrolltigger ka code bar bar na likhna page
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      markers: true,
      start: "top 50%",
      scrub: 2,
      end: "top -75%",
    },
  });

  tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.5,
  });

  tl2.from(
    ".elem.line1.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anim"
    //e jisme jisme likha rhega vo sath sath me animate hoga
  );

  tl2.from(
    ".elem.line1.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anim"
  );

  tl2.from(
    ".elem.line2.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "niraj"
  );

  tl2.from(
    ".elem.line2.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "niraj"
  );

  tl2.from(".section3", {
    x: -300,
    opacity: 0,
    duration: 1,
  });

  tl2.from(".section4", {
    x: -30,
    opacity: 0,
    duration: 0.5,
  });
}

page1Animation();
page2Animation();
