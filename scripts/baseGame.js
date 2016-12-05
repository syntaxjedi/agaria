var minDamage = 0; //min/max damage become the inclusive range for dice rolls
var maxDamage = 0;
var damageMod = 0; //only called for weapon modifiers/potions
var crit = 0; //the critical damage, includes base damage eg: damage = 10 :: crit mod = 5 :: crit = 15
var critChance = 0; // dice roll multiplied by this ammount to determine critical hit
var speed = 0; //max ammount of times player can hit per turn, range 1 - #speed
var selected;

var x = document.getElementsByClassName("swords");
var i;

var buttonView = document.getElementById("choose");
var confirmView = document.getElementById("confirm");

document.getElementById("swords").style.display = "none";
document.getElementById("choose").style.display = "none";
confirmView.style.display = "none";

function showSwords(show){
  if(show == true){
    document.getElementById("swords").style.display = "block";
    document.getElementById("choose").style.display = "block";
    document.getElementById("start").style.display = "none";
  }
}

function dagger(){
  /*checks array for specific weapons/tooltips, hides everything else*/
  for(i=0; i<x.length; i++){
    if(i == 1 || i == 2 || i == 0){
      x[i].style.display = "block";
    }else{
      x[i].style.display = "none";
    }
  }
  confirmView.style.display = "block";

  /*setting global variables to be called on later*/
  minDamage = 1;
  maxDamage = 3;
  crit = 6;
  critChance = 0.05;
  speed = 3;

  /*outputs variables and text to the paragraph tag under each weapon when selected*/
  document.getElementById("statsDagger").innerHTML =
  ("Damage: " + minDamage + " - " + maxDamage + "<br>" +
  "Critical Damage: " + crit + "<br>" +
  "Critical Damage Chance: " + (critChance * 100) + "<br>" +
  "Speed: " + speed);

  /*sets this weapon as the selected weapon*/
  selected = "dagger";
}

function short(){
  for(i=0; i<x.length; i++){
    if(i == 3 || i == 4 || i == 0 ){
      x[i].style.display = "block";
    }else{
      x[i].style.display = "none";
    }
  }

  confirmView.style.display = "block";
  minDamage = 2;
  maxDamage = 5;
  crit = 6;
  critChance = 0.03;
  speed = 2;
  document.getElementById("statsShort").innerHTML =
  ("Damage: " + minDamage + " - " + maxDamage + "<br>" +
  "Critical Damage: " + crit + "<br>" +
  "Critical Damage Chance: " + critChance + "<br>" +
  "Speed: " + speed);
  selected = "short";
}

function long(){
  for(i=0; i<x.length; i++){
    if(i == 5 || i == 6 || i == 0){
      x[i].style.display = "block";
    }else{
      x[i].style.display = "none";
    }
  }

  confirmView.style.display = "block";
  minDamage = 4;
  maxDamage = 8;
  crit = 10;
  critChance = 0.03;
  speed = 2;
  document.getElementById("statsLong").innerHTML =
  ("Damage: " + minDamage + " - " + maxDamage + "<br>" +
  "Critical Damage: " + crit + "<br>" +
  "Critical Damage Chance: " + critChance + "<br>" +
  "Speed: " + speed);
  selected = "long";
}

function broad(){
  for(i=0; i<x.length; i++){
    if(i == 7 || i == 8 || i == 0){
      x[i].style.display = "block";
    }else{
      x[i].style.display = "none";
    }
  }

  confirmView.style.display = "block";
  minDamage = 8;
  maxDamage = 11;
  crit = 12;
  critChance = 0.01;
  speed = 1;
  document.getElementById("statsBroad").innerHTML =
  ("Damage: " + minDamage + " - " + maxDamage + "<br>" +
  "Critical Damage: " + crit + "<br>" +
  "Critical Damage Chance: " + critChance + "<br>" +
  "Speed: " + speed);
  selected = "broad";
}

function confirm(){
  var weapon = selected;

  confirmView.style.display = "none";
  document.getElementById("choose").style.display = "none";

  /*passing the paragraph tags through an array and only
  setting the "stats*"" to hidden display, this keeps
  all the other p tags intact for later use*/
  var y = document.querySelectorAll("[id*='stats']");
  for (var z = 0; z < y.length; z++){
    y[z].innerHTML = "";
  }
  /*hides all the buttons/reformats page for later*/
  for(i=0; i<x.length; i++){
    if (x[i].style.display === "block" || i == 0){
      x[i].style.display = "block";
    }else{
      x[i].style.display == "none";
    }
  }
  fight();
}
var temp = 0;
var outputDamage = document.getElementById("diceRoll");
var outputCrit = document.getElementById("critRoll");
var outputTotal = document.getElementById("totalDamage");
var totalDamage = 0;
var critRN = Math.floor(critChance * 100);

function fight(){
  var isCrit = 0;
  var damageDone = 0;
  outputDamage.style.display = "block";
  outputCrit.style.display = "block";
  outputTotal.style.display = "none";
  setTimeout(function() {
    /*inclusive dice roll for weapon*/
    damageDone = Math.floor(Math.random()*maxDamage)+minDamage;
    /*d20 roll for crit chance*/
    isCrit = Math.floor(Math.random()*20)+1;
    if(isCrit <= critRN){
      outputDamage.innerHTML = ("Critical Hit! " + crit);
      outputCrit.innerHTML = ("Crit Roll: " + isCrit);
    }else{
      outputDamage.innerHTML = ("Damage: " + damageDone);
      outputCrit.innerHTML = ("Crit Roll: " + isCrit);
    }
    totalDamage = totalDamage + damageDone;
    temp++;
    if(temp <= 5){
      fight();
    }else{
      outputDamage.style.display = "none";
      outputCrit.style.display = "none";
      outputTotal.style.display = "block";
      outputTotal.innerHTML = ("Total Damage: " + totalDamage);
      confirmView.style.display = "block";
      temp = 0;
      totalDamage = 0;
    }
  }, 1500)
}
