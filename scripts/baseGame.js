var minDamage = 0; //min/max damage become the inclusive range for dice rolls
var maxDamage = 0;
var damageMod = 0; //only called for weapon modifiers/potions
var crit = 0; //the critical damage, includes base damage eg: damage = 10 :: crit mod = 5 :: crit = 15
var critChance = 0; // dice roll multiplied by this ammount to determine critical hit
var speed = 0; //max ammount of times player can hit per turn, range 1 - #speed
var selected;
var temp = 0;
var totalDamage = 0;
var eHit = 0;
var critRN = Math.floor(critChance * 100);
var health = 100;
var enemHealthMax = 0;
var enemHealth = 0;
var enemMinDamage = 0;
var enemMaxDamage = 0;
var enemDamageDone = 0;
var name = "";

var outputDamage = document.getElementById("diceRoll");
var outputCrit = document.getElementById("critRoll");
var outputTotal = document.getElementById("totalDamage");
var outputExtra = document.getElementById("extraHit");
var x = document.getElementsByClassName("swords");
var buttonView = document.getElementById("choose");
var confirmView = document.getElementById("confirm");
var stats = document.getElementById("stats");
var enemy = document.getElementsByClassName("enemy");
var enemChoose = document.getElementById("cEnem");
var healthBar = document.getElementById("health");
var enemHealthBar = document.getElementById("enemyHealth");

document.getElementById("swords").style.display = "none";
document.getElementById("choose").style.display = "none";
document.getElementById("enemyWhole").style.display = "none";
document.getElementById("chooseEnemey").style.display = "none";

enemChoose.style.display = "none";
confirmView.style.display = "none";

function showSwords(){
  document.getElementById("swords").style.display = "block";
  document.getElementById("choose").style.display = "block";
  document.getElementById("start").style.display = "none";
  name = prompt("What is your name warrior?");
  document.getElementById("name").innerHTML = name;
}

function dagger(){
  /*checks array for specific weapons/tooltips, hides everything else*/
  for(var i=0; i<x.length; i++){
    if(i == 1 || i == 0){
      x[i].style.display = "block";
    }else{
      x[i].style.display = "none";
    }
  }
  confirmView.style.display = "none";
  enemChoose.style.display = "block";

  /*setting global variables to be called on later*/
  minDamage = 2;
  maxDamage = 6;
  crit = 6;
  critChance = 0.05;
  speed = 3;

  /*outputs variables and text to the paragraph tag under each weapon when selected*/
  stats.innerHTML =
  ("Damage: " + minDamage + " - " + maxDamage + "<br>" +
  "Critical Damage: " + crit + "<br>" +
  "Critical Damage Chance: " + (critChance * 100) + "<br>" +
  "Swift +" + speed);

  /*sets this weapon as the selected weapon*/
  selected = "dagger";
}

function short(){
  for(var i=0; i<x.length; i++){
    if(i == 2 || i == 0 ){
      x[i].style.display = "block";
    }else{
      x[i].style.display = "none";
    }
  }
  confirmView.style.display = "none";
  enemChoose.style.display = "block";
  minDamage = 5;
  maxDamage = 7;
  crit = 7;
  critChance = 0.03;
  speed = 2;
  stats.innerHTML =
  ("Damage: " + minDamage + " - " + maxDamage + "<br>" +
  "Critical Damage: " + crit + "<br>" +
  "Critical Damage Chance: " + critChance + "<br>" +
  "Triple Strike +" + speed);
  selected = "short";
}

function long(){
  for(var i=0; i<x.length; i++){
    if(i == 3 || i == 0){
      x[i].style.display = "block";
    }else{
      x[i].style.display = "none";
    }
  }
  confirmView.style.display = "none";
  enemChoose.style.display = "block";
  minDamage = 7;
  maxDamage = 11;
  crit = 10;
  critChance = 0.03;
  speed = 2;
  stats.innerHTML =
  ("Damage: " + minDamage + " - " + maxDamage + "<br>" +
  "Critical Damage: " + crit + "<br>" +
  "Critical Damage Chance: " + critChance + "<br>" +
  "Lucky Strike +" + speed);
  selected = "long";
}

function broad(){
  for(var i=0; i<x.length; i++){
    if(i == 4 || i == 0){
      x[i].style.display = "block";
    }else{
      x[i].style.display = "none";
    }
  }
  confirmView.style.display = "none";
  enemChoose.style.display = "block";
  minDamage = 13;
  maxDamage = 16;
  crit = 12;
  critChance = 0.01;
  speed = 1;
  stats.innerHTML =
  ("Damage: " + minDamage + " - " + maxDamage + "<br>" +
  "Critical Damage: " + crit + "<br>" +
  "Critical Damage Chance: " + critChance + "<br>" +
  "Back Swing +" + speed);
  selected = "broad";
}

function confirm(){
  confirmView.style.display = "none";
  document.getElementById("choose").style.display = "none";
  document.getElementById("stats").style.display = "none";
  document.getElementById("chooseEnemey").style.display = "none";

  /*hides all the buttons/reformats page for later*/
  for(var i=0; i<x.length; i++){
    if (x[i].style.display === "block" || i == 0){
      x[i].style.display = "block";
    }else{
      x[i].style.display == "none";
    }
  }
  fight();
}

function chooseEnem(){
  document.getElementById("enemyWhole").style.display = "block";
  document.getElementById("chooseEnemey").style.display = "block";
  document.getElementById("choose").style.display = "none";
  document.getElementById("confirm").style.display = "none";
  enemChoose.style.display = "none";
  stats.style.display = "none";

}

function enem1(){
  for(var i=0; i<enemy.length; i++){
    if(i == 1 || i == 0){
      enemy[i].style.display = "block";
      enemHealthMax = 200;
      enemHealth = enemHealthMax;
      enemMinDamage = 10;
      enemMaxDamage = 15;
    }else{
      enemy[i].style.display = "none";
    }
  }
  confirmView.style.display = "block";
  enemChoose.style.display = "none";
}

function enem2(){
  for(var i=0; i<enemy.length; i++){
    if(i == 2 || i == 0){
      enemy[i].style.display = "block";
      enemHealthMax = 250;
      enemHealth = enemHealthMax;
      enemMinDamage = 12;
      enemMaxDamage = 17;
    }else{
      enemy[i].style.display = "none";
    }
  }
  confirmView.style.display = "block";
  enemChoose.style.display = "none";
}

function enem3(){
  for(var i=0; i<enemy.length; i++){
    if(i == 3 || i == 0){
      enemy[i].style.display = "block";
      enemHealthMax = 150;
      enemHealth = enemHealthMax;
      enemMinDamage = 10;
      enemMaxDamage = 13;
    }else{
      enemy[i].style.display = "none";
    }
  }
  confirmView.style.display = "block";
  enemChoose.style.display = "none";
}

function fight(){
  var isCrit = 0;
  var damageDone = 0;
  var damageDoneExtra = 0;
  outputDamage.style.display = "block";
  outputCrit.style.display = "block";
  outputTotal.style.display = "none";

  setTimeout(function() {
    /*inclusive dice roll for weapon*/
    damageDone = Math.floor(Math.random()*maxDamage)+minDamage;

    /*inclusive d20 roll for crit chance*/
    isCrit = Math.floor(Math.random()*20)+1;

    /*inclusive dice roll for extra hit*/
    extraHit = Math.floor(Math.random()*20);

    enemDamageDone = Math.floor(Math.random()*enemMaxDamage)+enemMinDamage;

    health = health - enemDamageDone;
    healthBar.innerHTML = ("Health: " + health + "/100");
    enemHealthBar.innerHTML = ("Enemy Health: " + enemHealth + "/" + enemHealthMax);

    if(extraHit <= speed){
      for(var i = 0; i < extraHit; i++){
        damageDoneExtra = Math.floor(Math.random()*maxDamage)+minDamage;
        damageDone = damageDone + damageDoneExtra;
        eHit++;
        console.log(eHit);
      }
    }
    if(isCrit <= critRN){
      outputDamage.innerHTML = ("Critical Hit! " + crit);
      outputCrit.innerHTML = ("Crit Roll: " + isCrit);
      outputExtra.innerHTML = ("Extra Hit: " + extraHit);
    }else{
      outputDamage.innerHTML = ("Damage: " + damageDone);
      outputCrit.innerHTML = ("Crit Roll: " + isCrit);
      outputExtra.innerHTML = ("Extra Hit: " + extraHit);
    }
    enemHealth = enemHealth - damageDone;
    totalDamage = totalDamage + damageDone;
    if(health <= 0){
      health = 0;
    }
    if(health > 0 && enemHealth > 0){
      fight();
    }else{
      outputDamage.style.display = "none";
      outputCrit.style.display = "none";
      outputTotal.style.display = "block";
      outputTotal.innerHTML = ("Total Damage: " + totalDamage);
      temp = 0;
      totalDamage = 0;
    }
  }, 1500)
}
