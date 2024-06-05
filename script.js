const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function circleAnimation() {
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    this.clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.7, 1.2, dets.clientX - xprev);
    Yscale = gsap.utils.clamp(0.7, 1.2, dets.clienty - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = this.setTimeout(function () {
      document.querySelector("#minicircle").style.transform = `translate(1,1)`;
    }, 100);
  });
}

circleAnimation();
var timeout;

function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
  });
}

function firstPageAni() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: -10,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 1,
  })

    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 1,
      stagger: 0.2,
    })

    .from("#landfoot", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
    });
}

circleMouseFollower();
firstPageAni();

document.querySelectorAll("#elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});
