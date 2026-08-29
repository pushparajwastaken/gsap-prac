window.addEventListener("wheel", (dets) => {
  if (dets.deltaY > 0) {
    gsap.to("#marque", {
      transform: "translateX(-200%)",
      ease: "none",
      duration: 4,
      repeat: -1,
    });
  } else {
    gsap.to("#marque", {
      transform: "translateX(0%)",
      ease: "none",
      duration: 4,
      repeat: -1,
    });
  }
});
