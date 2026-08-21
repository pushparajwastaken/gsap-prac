const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor");
const imagediv = document.querySelector("#imagediv");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "back.out",
  });
});
imagediv.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    scale: 2,
  });
});
imagediv.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    scale: 1,
  });
});
