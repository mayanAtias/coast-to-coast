let slideShow = 1;
showSlides(slideShow);

function nextPic(n) {
  showSlides(slideShow += n);
}

function slideNum(n) {
  showSlides(slideShow = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myPictures");
  let picOpacity = document.getElementsByClassName("demo");
  let picDescription = document.getElementById("picLocation");
  if (n > slides.length) {slideShow = 1}
  if (n < 1) {slideShow = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < picOpacity.length; i++) {
    picOpacity[i].className = picOpacity[i].className.replace(" active", "");
  }
  slides[slideShow-1].style.display = "block";
  picOpacity[slideShow-1].className += " active";
  picDescription.innerHTML = picOpacity[slideShow-1].alt;
}