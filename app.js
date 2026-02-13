let sun = document.getElementById("sun");
let moon = document.getElementById("moon");
let sky = document.getElementById("sky");
let dog = document.getElementById("dog");
 let monkey = document.getElementById("monkey")
 let fire = document.getElementById("fire");
let owl = document.getElementById("owl");
let monkeyt = document.getElementById("monkeyt");
let monkeytrans = document.getElementById("monkeytrans");
let man = document.getElementById("man");
let kids = document.getElementById("kids");
let kidss = document.getElementById("kidss");
let swing = document.getElementById("swing");
let band = document.getElementById("band");
let dance = document.getElementById("dance");

let person = document.getElementById("person");
let eyes = document.getElementById("eyes");
let eyess = document.getElementById("eyess");


let firefly = document.getElementById("firefly");
let startScreen = document.getElementById("startScreen");
let startBtn = document.getElementById("startBtn");

startBtn.onclick = function(){
    startScreen.style.opacity = "0";
    startScreen.style.pointerEvents = "none";
}


sun.onclick = function () {
    sky.style.filter = "brightness(10%)";
    document.querySelector(".main").style.filter = "brightness(40%)";

    dog.style.transform = "translateX(80vw)";


    sun.style.opacity = "0";
    fire.style.opacity = "1";
    owl.style.opacity = "1";
    moon.style.opacity = "1";
moon.style.transform = "translateY(0)";
    fire.style.filter = "brightness(100%)";
    monkey.style.opacity="0"
    monkeyt.style.opacity="0"
    monkeytrans.style.opacity="0"
   kids.style.opacity="0"
   kidss.style.opacity="0"
   swing.style.opacity="0"
   band.style.opacity="0"
   dance.style.opacity="0"

    person.style.opacity = "1";
person.style.filter = "brightness(100%) drop-shadow(0 0 20px orange)";
 eyes.style.opacity = "1";
eyes.style.filter = "brightness(100%) ";
eyess.style.opacity = "1";
eyess.style.filter = "brightness(100%) ";
firefly.style.opacity = "1";
firefly.style.filter = "brightness(100%) ";
};

moon.onclick = function() {
    sky.style.filter = "brightness(100%)";
    document.querySelector(".main").style.filter = "brightness(90%)";

    dog.style.transform = "translateX(0px)";

    sun.style.opacity = "1";
    sun.style.transform= "translateY(0)";
    moon.style.opacity = "0";
      moon.style.transform = "translateY(-80px)";
     fire.style.opacity = "0";
     owl.style.opacity = "0";
      monkey.style.opacity="1"
      monkeyt.style.opacity="1";
      monkeytrans.style.opacity="1";
      person.style.opacity = "0";   
         eyes.style.opacity = "0";
         eyess.style.opacity = "0";
        firefly.style.opacity = "0";
 kids.style.opacity = "1";
 kidss.style.opacity = "1";
  swing.style.opacity = "1";    
  band.style.opacity = "1";    
  dance.style.opacity = "1";    
};

