//console.log("bonsoir"); 
let booleanAffichage = false;

function success(pos){
    let crd = pos.coords;
    let latitude = crd.latitude; 
    let longitude = crd.longitude;
    getWeather(latitude, longitude);
}

function error(err){
    
}

function getWeather(lat, lon){
    window.fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=dfe433b560b846bdaf2a1ed0e1767d0e`).then(function(res){ 
        return res.json();
    })
    .then(response => afficheMeteo(response, 0));
}

navigator.geolocation.getCurrentPosition(success, error);

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

var temperatureC = 0;
var temperatureF = 0;

function afficheMeteo(test, index){
    //console.log(test.name);
    var nomDeVille = test.name;
    temperatureC = Math.round((test.main.temp)*10)/10 + "°C";
    temperatureF = Math.round(((test.main.temp * 9/5) + 32)*10)/10 + "°F";
    var weather = test.weather[0].description;
    //console.log("ville actuelle : " + nomDeVille);
    //console.log(test);
    //console.log(weather);
    //console.log(temperatureF);
    let arrayVilles = document.getElementsByClassName("villeSlide");
    let arrayTemperatures =  document.getElementsByClassName("temperaturePrevue");
    let arrayTempsPrevus =  document.getElementsByClassName("tempsPrevu");
    arrayVilles[index].innerHTML = nomDeVille;
    arrayTemperatures[index].innerHTML = temperatureC;
    arrayTempsPrevus[index].innerHTML = weather;
}

function temperatureCelsius(){
 //   document.getElementById("temperature").innerHTML = temperatureC;
}

function temperatureFarenheit(){
  //  document.getElementById("temperature").innerHTML = temperatureF;
}



function createSlides(){
    console.log("rtyuiozertyui");
    let slide = document.createElement("DIV");
    document.getElementById("container2").appendChild(slide);
    slide.setAttribute("class", "slide");


        let fullLargeur = document.createElement("DIV");
        slide.appendChild(fullLargeur);
        fullLargeur.setAttribute("class", "fullLargeur");
            let villeSlide = document.createElement("P");
            fullLargeur.appendChild(villeSlide);
            villeSlide.setAttribute("class", "villeSlide");

        let display1 = document.createElement("BUTTON");
        slide.appendChild(display1);
        display1.setAttribute("class", "display");
            let tempsPrevu = document.createElement("P");
            display1.appendChild(tempsPrevu);
            tempsPrevu.setAttribute("class", "tempsPrevu");

        let display2 = document.createElement("BUTTON");
        slide.appendChild(display2);
        display2.setAttribute("class", "display");
            let temperaturePrevue = document.createElement("P");
            display2.appendChild(temperaturePrevue);
            temperaturePrevue.setAttribute("class", "temperaturePrevue");

        let display3 = document.createElement("BUTTON");
        slide.appendChild(display3);
        display3.setAttribute("class", "display");
            let dateActuelle = document.createElement("P");
            display3.appendChild(dateActuelle);
            dateActuelle.setAttribute("class", "dateActuelle");
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = today.getFullYear();
            today = dd + '/' + mm + '/' + yyyy;
            dateActuelle.innerHTML = today;

}


function deleteSlides(index){

    let slides = document.getElementsByClassName("slide");

    slides[index].remove();
    console.log("delSlide");

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

function getHuitHeures(city, index){
window.fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=dfe433b560b846bdaf2a1ed0e1767d0e`)
//.then(res => res.json())
.then(function(res){ 
    return res.json();
})
.then(response => afficheMeteo(response, index));
}

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
    //console.log(date);
    let expiration = ";expires=" + date.toUTCString();
    //console.log(expiration);
    let cookie = "CookieVille =" + escape(document.getElementById("ville").textContent) + (document.getElementById("temperature").textContent) + (document.getElementById("weather").textContent) + expiration + ";";
    document.cookie = cookie;
    //console.log(cookie);
}

// Fonction qui va enregistrer en local storage, les noms des villes entrées dans le formulaire
function setStorageCity(valueStorage){
    // valueStorage est un jambon-fromage
    let cities = sessionStorage.getItem('City'); 
    // On vérifie si une instance de City (dans le local storage) a été déjà été créé
    if(cities != null){
        // On traite les données recupérées du local storage pour les modifer en JSON (grâce à la fonction JSON.parse) afin de pouvoir les manipuler
        let citiesPref = JSON.parse(cities); 
        // On push dans l'array précedemment recupéré la value de la nouvelle ville envoyée via le formulaire      
        citiesPref.push(valueStorage); 
        // On update le local storage avec le nouveau tableau qui contient la nouvelle valeur de la ville
        sessionStorage.setItem('City', JSON.stringify(citiesPref));
    } else {
        // Si le localStorage est vide alors on va créé un nouveau tableau city
        let city = []; 
        // Dans lequel on va set la première valeur avev la ville envoyée via le formulaire
        city[0] = valueStorage; 
        // Pour que le localStorage soit content, et ne nous embête pas, on va lui envoyer le tableau sous forme de string grâce à la fonction JSON.stringify
        sessionStorage.setItem('City', JSON.stringify(city)); 
    }
}


function suppressionVille(){
cities = JSON.parse(sessionStorage.getItem('City'));
let entreeASupprimer = cities[slideIndex - 1];


    for (let i = 0; i < cities.length; i++){
        if(cities[i] == entreeASupprimer){
            cities.splice(i, 1);
            sessionStorage.setItem('City', JSON.stringify(cities));
            deleteSlides(i);
            slides = document.getElementsByClassName("slide");
            
        }
    }

}


function plusSlides(n) {
    showSlides(slideIndex += n);
    console.log("Plus" + slideIndex)
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
    console.log("Moins" + slideIndex)
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    // var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex-1].style.display = "block";  
    // dots[slideIndex-1].className += " active";
  }

  


  function affichageFormulaire(){
    //console.log("hit");
    document.getElementById("formulaireVille").style.display = "flex";
  }


// Ecoute de l'event submit du formulaire d'ajout de ville
  document.getElementById("formulaireVille").addEventListener("submit", function (event) {
    event.preventDefault();
    // On recupère la ville entrée par l'utilisateur
    var nomRentre = document.getElementById("nomDeVilleRentre").value;
    // Appel de la fonction qui va enregitrer en local storage toutes les villes de l'utilisateur
    setStorageCity(nomRentre); 
    let cities = JSON.parse(sessionStorage.getItem('City'));
    createSlides();
    if(cities.length - 1 == 0){
        getHuitHeures(nomRentre, 1);
    }else{
        getHuitHeures(nomRentre, cities.length - 1);
    }
    //console.log(cities.length);
    document.getElementById("formulaireVille").style.display = "none";
});



let cities = JSON.parse(sessionStorage.getItem('City'));
//console.log(`jaja ${cities}`);

// for(each of cities){
//     createSlides();
//     getHuitHeures(each);
//     // console.log(each);
// }


for (let i = 0; i < cities.length; i++) {
    
    createSlides();
    getHuitHeures(cities[i], i);

  } 


var slideIndex = 1;
showSlides(slideIndex);
