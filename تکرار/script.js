let currentIndex = 1;
  
function displaySlide(n){
  currentIndex = n;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  let slideNumber = document.getElementById("slide-number");

  if(currentIndex > slides.length){
    currentIndex = 1;
  }
  if(currentIndex < 1){
    currentIndex = slides.length;
  }
  for(let i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[currentIndex - 1].style.display = "block";
  dots[currentIndex - 1].className = "dot active";
  slideNumber.innerHTML = currentIndex + "/" + slides.length;
}

displaySlide(currentIndex);

function changeSlide(n){
  currentIndex += n;
  displaySlide(currentIndex);
}

function currentSlide(){
  displaySlide(n);
}