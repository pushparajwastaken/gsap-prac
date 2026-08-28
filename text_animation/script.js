function breakText() {
  const h1 = document.querySelector("h1");
  const h1Text = h1.textContent;
  const splitText = h1Text.split("");
  let clutter = "";
  const half = Math.floor(splitText.length / 2);

  splitText.forEach((e, idx) => {
    if (idx < half) {
      clutter += `<span class="a">${e}</span>`;
    } else {
      clutter += `<span class="b">${e}</span>`;
    }
  });
  h1.innerHTML = clutter;
}
breakText();
gsap.from("h1 .a", {
  y: 50,
  duration: 1,
  delay: 0.3,
  opacity: 0,
  stagger: 0.3,
});
gsap.from("h1 .b", {
  y: 50,
  duration: 1,
  delay: 0.3,
  opacity: 0,
  stagger: -0.3,
});
