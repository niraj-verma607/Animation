window.addEventListener("wheel", (evt) => {
  // console.log(evt.deltaY)
  if (evt.deltaY > 0) {
    console.log("seedha scroll");

    gsap.to(".marque", {
      transform: "translateX(-100%)",
      duration: 4,
      repeat: -1,
      ease: "none", //hamesa same speed me chlega
    });

    gsap.to(".marque img", {
      rotate: 0,
    });
  } else {
    console.log("ulta scroll");

    gsap.to(".marque", {
      transform: "translateX(0%)",
      duration: 4,
      repeat: -1,
      ease: "none", //hamesa same speed me chlega
    });

    gsap.to(".marque img", {
      rotate: 180,
    });
  }
});
