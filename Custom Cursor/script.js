let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", (evt) => {
  // console.log(evt.x, evt.y);
  gsap.to(cursor, {
    x: evt.x,
    y: evt.y,
    duration: 0.5,
    // ease: "back.out", //easing(graph of final and initial position)
  });
});

imageDiv.addEventListener("mousemove", () => {
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    scale: 4,
    backgroundColor: "#ffffff8c",
  });
});

imageDiv.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#fff",
  });
});
