function breakText() {
  let h1 = document.querySelector("h1");
  // console.log(h1)
  h1Text = h1.textContent;

  // console.log(h1Text)

  let splittedText = h1Text.split("");
  // console.log(splittedText);

  let clutter = "";

  let halfValue = splittedText.length / 2;

  splittedText.forEach((elem, idx) => {
    if (idx < halfValue) {
      clutter += `<span class="text1">${elem}</span>`;
    } else {
      clutter += `<span class="text2">${elem}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

breakText();
// From left to right text animation

// gsap.from("h1 span", {
//   y: 50,
//   duration: 0.8,
//   delay: 0.5,
//   opacity: 0,
//   stagger: 0.2, // (- for right to left and + for left to right)
// });

gsap.from("h1 .text1", {
  y: 80,
  duration: 0.8,
  delay: 0.5,
  opacity: 0,
  stagger: 0.2,
});

gsap.from("h1 .text2", {
  y: 80,
  duration: 0.8,
  delay: 0.5,
  opacity: 0,
  stagger: -0.2,
});
