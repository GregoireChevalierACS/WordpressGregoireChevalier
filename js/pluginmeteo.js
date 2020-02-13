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

function afficheMeteo(test){
    // console.log(test.name);
    var nomDeVille = test.name;
    var temperatureC = Math.round((test.main.temp)*10)/10 + "°C";
    var temperatureF = Math.round(((test.main.temp * 9/5) + 32)*10)/10 + "°F";
    var weather = test.weather[0].description;
    console.log("ville actuelle : " + nomDeVille);
    console.log(test);
    console.log(weather);
    console.log(temperatureF);
    document.getElementById("ville").innerHTML = nomDeVille;
    document.getElementById("temperature").innerHTML = temperatureC;
    document.getElementById("weather").innerHTML = weather;
}

function temperatureCelsius(){
    document.getElementById("temperature").innerHTML = temperatureC;
}

function temperatureFarenheit(){
    document.getElementById("temperature").innerHTML = temperatureF;
}



// localisation
// window.fetch('https://api.openweathermap.org/data/2.5/weather?q=Strasbourg&units=metric&appid=dfe433b560b846bdaf2a1ed0e1767d0e')
// .then(res => res.json())
// .then(response => console.log(response.name));


// window.fetch('https://api.openweathermap.org/data/2.5/weather?q=Strasbourg&units=metric&appid=dfe433b560b846bdaf2a1ed0e1767d0e')
// .then(res => res.json())
// .then(function(response){
//      return response.name;
// })  
// ;
// //temperature
// window.fetch('https://api.openweathermap.org/data/2.5/weather?q=Strasbourg&units=metric&appid=dfe433b560b846bdaf2a1ed0e1767d0e')
// .then(res => res.json())
// .then(response => console.log(response.main.temp));

// console.log(reponse);
window.fetch('https://api.openweathermap.org/data/2.5/weather?q=Strasbourg&units=metric&appid=dfe433b560b846bdaf2a1ed0e1767d0e')
//.then(res => res.json())
.then(function(res){
    return res.json();
})
.then(response => afficheMeteo(response))

// window.fetch('https://api.openweathermap.org/data/2.5/weather?q=Strasbourg&units=metric&appid=dfe433b560b846bdaf2a1ed0e1767d0e')
// .then(res => res.json())
// .then(function(resJson){
//   const fdp = JSON.parse(resJson);
// })  
// ;


function testCookieStorage(){
    let today = new Date();
    const date = new Date(today);
    date.setDate(date.getDate() + 5);
    console.log(date);
    let expiration = ";expires=" + date.toUTCString();
    console.log(expiration);
    let cookie = "CookieVille =" + escape(document.getElementById("ville").textContent) + (document.getElementById("temperature").textContent) + (document.getElementById("weather").textContent) + expiration + ";";
    document.cookie = cookie;
    console.log(cookie);
}





var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
    console.log("oui");
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
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