var damage; //base damage of weapon
var damageMod; //only called for weapon modifiers/potions
var crit; //the critical damage, includes base damage eg: damage - 10/ crit mod - 5/ crit = 15
var critChance; // dice roll multiplied by this ammount to determine critical hit
var speed; //max ammount of times player can hit per turn, range 1 - #speed
var selected;

/*Have to use get ById because there are too many variables to get ByClassName*/
var statsDView = document.getElementById("statsDagger");
var statsSView = document.getElementById("statsShort");
var statsLView = document.getElementById("statsLong");
var statsBView = document.getElementById("statsBroad");

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
    /*probably don't need this, will update later*/
    statsDView.style.display = "none";
    statsSView.style.display = "none";
    statsLView.style.display = "none";
    statsBView.style.display = "none";
  }
}

function dagger(){
  statsDView.style.display = "block";
  statsSView.style.display = "none";
  statsLView.style.display = "none";
  statsBView.style.display = "none";
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
  statsDView.style.display = "none";
  statsSView.style.display = "block";
  statsLView.style.display = "none";
  statsBView.style.display = "none";
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
  statsDView.style.display = "none";
  statsSView.style.display = "none";
  statsLView.style.display = "block";
  statsBView.style.display = "none";
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
  statsDView.style.display = "none";
  statsSView.style.display = "none";
  statsLView.style.display = "none";
  statsBView.style.display = "block";
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
