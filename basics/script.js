//same name as in css
// gsap.from("#box2", {
//   x: 100,
//   y: 500,
//   duration: 5,
//   delay: 1,
//   rotate: 100,
//   scale: 2,
// });
// gsap.to("#box3", {
//   y: 100,
//   duration: 5,
//   delay: 1,
//   rotate: 480,
// });
var tl = gsap.timeline();
tl.to("#box", {
  x: 100,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "blue",
  borderRadius: "50%",
  yoyo: true,
  repeat: 1,
});

tl.to("h1", {
  opacity: 1,
  x: 30,
  backgroundColor: "crimson",
  color: "white",
  duration: 3,
  delay: 1,
  stagger: 2, //can also be negative
  yoyo: true,
  repeat: 1,
});
