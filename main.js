let stageEle = document.querySelector(".stage");
let houseEle = document.querySelector(".house");
let maxScrollValue; // 실제 스크롤이 움직이는 높이 값
let mousePos = { x: 0, y: 0 };

maxScrollValue = document.body.offsetHeight - window.innerHeight;
// 문서 전체 스크롤 높이 값에 - 현재 화면 값을 빼라. 이게 전체 높이값?
// 전체 스크롤에서 내가 얼만큼 움직였는지를 알아야한다.

window.addEventListener("scroll", () => {
  let scrllPer = pageYOffset / maxScrollValue;
  //pageYOffset 실제 내린값?
  let zMove = scrllPer * 960 - 480;
  console.log(zMove);

  houseEle.style.transform = `translateZ(${zMove}vw)`;
});

function resizeHandler() {
  maxScrollValue = document.body.offsetHeight - window.innerHeight;
}

window.addEventListener("mousemove", function (w) {
  // console.log(w.clientX)
  //w.clientX : 현재 화면의 마우스 X값 추출
  //w.clientY : 현재 화면의 마우스 Y값 추출
  //window.innerWidth : 현재 화면의 넓이값
  //window.innerHeight : 현재 화면의 높이값

  mousePos.x = (w.clientX / window.innerWidth) * 10 - 5;
  mousePos.y = -(w.clientY / window.innerHeight) * 10 - 5;
  console.log(mousePos.x);
  stageEle.style.transform = `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`;
});

window.addEventListener("resize", resizeHandler);
resizeHandler();





// ------------scrolla----------

$('.animate').scrolla({
  // default
  mobile: true, // disable animation on mobiles
  once: false, // only once animation play on scroll
  animateCssVersion: 4 // used animate.css version (3 or 4)
});
