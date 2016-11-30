var damage; //base damage of weapon
var damageMod; //only called for weapon modifiers/potions
var crit; //the critical damage, includes base damage eg: damage - 10/ crit mod - 5/ crit = 15
var critChance; // dice roll multiplied by this ammount to determine critical hit
var speed; //max ammount of times player can hit per turn, range 1 - #speed
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
  for(i=0; i<x.length; i++){
    if(i == 1 || i == 2 || i == 0){
      x[i].style.display = "block";
    }else{
      x[i].style.display = "none";
    }
  }
  confirmView.style.display = "block";
  damage = 3;
  crit = 6;
  critChance = 0.5;
  speed = 3;
  document.getElementById("statsDagger").innerHTML =
  ("Damage: " + damage + "<br>" +
  "Critical Damage: " + crit + "<br>" +
  "Critical Damage Chance: " + critChance + "<br>" +
  "Speed: " + speed);
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
  damage = 5;
  crit = 6;
  critChance = 0.3;
  speed = 2;
  document.getElementById("statsShort").innerHTML =
  ("Damage: " + damage + "<br>" +
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
  damage = 8;
  crit = 10;
  critChance = 0.3;
  speed = 2;
  document.getElementById("statsLong").innerHTML =
  ("Damage: " + damage + "<br>" +
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
  damage = 11;
  crit = 12;
  critChance = 0.1;
  speed = 1;
  document.getElementById("statsBroad").innerHTML =
  ("Damage: " + damage + "<br>" +
  "Critical Damage: " + crit + "<br>" +
  "Critical Damage Chance: " + critChance + "<br>" +
  "Speed: " + speed);
  selected = "broad";
}

function fight(){
  var weapon = selected;
  console.log(weapon);
  console.log(damage);
  confirmView.style.display = "none";
}
