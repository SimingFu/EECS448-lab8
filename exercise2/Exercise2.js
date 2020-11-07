document.getElementById('previous').onclick = function (){
  console.log("previous");
  move(-1);
}
document.getElementById('next').onclick = function (){
  console.log("next");
  move(1);
}

var slidenum = 1;
showSlides(slidenum);

function move(n) {
  slidenum += n;
  showSlides(slidenum);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("imgs");
  if (n > slides.length){
    slidenum = 1;
  }
  if (n < 1){
    slidenum = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slidenum-1].style.display = "block";
}
