console.log("bonsoir"); 

let booleanAffichage = false;

function gestionBooleanAffichage(){
    if (booleanAffichage){
        booleanAffichage = false;
        affichagePlugin();
    }else {
        booleanAffichage = true;
        affichagePlugin();
    }
}

function affichagePlugin(){
    if (booleanAffichage){
        document.getElementById("Plugin").style.display = "flex";
    }else {
        document.getElementById("Plugin").style.display = "none";
    }
    
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 