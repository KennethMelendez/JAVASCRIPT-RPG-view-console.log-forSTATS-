// CONSOLE.LOG RPG BATTLE


//ANSWER CALLS OUT THE FIGHT
function announcer(){
  var announcerYELLS = 'GET READY TO FIGHT!!!!';
  console.log('Announcer: ' + announcerYELLS);
}
//CALL OUT THE FUNCTION
announcer();


//FIGHTER CLASS
class fighter {
  constructor(name,power,powerLevel){
    this.name = name;
    this.power = power;
    this.powerLevel = powerLevel;
    this.triggerEvent = name + ' attacks!!';

    function triggerEvent(){
      console.log(name + ' attacks!!');
    }

    triggerEvent();
  }
}


//SET A RANDOM POWER LEVEL FOR EACH FIGHTER
var setPowerLevel = Math.floor(Math.random() * 100);

//SET FIGHTER FOR FIGHTER1
var kenneth = new fighter('Kenneth','strength',setPowerLevel);
console.log(kenneth);

//SET FIGHTER FOR FIGHTER1
var evilGuy = new fighter('EvilGuy','speed',setPowerLevel);
console.log(evilGuy);




//ROCKYARENA BATTLE [ALL STRENGTH TYPES GET + 5 POWER IN THIS ARENA]
function rockyBattleArena(fighter1,fighter2){

if(fighter1.power === 'strength'){
  fighter1.powerLevel += 5;
} else if (fighter2.power === 'strength'){
  fighter2.powerLevel += 5;
}

//BATTLE REGULATIONS
  if(fighter1.powerLevel > fighter2.powerLevel){
    console.log(fighter1.name + ' WON!');
        document.querySelector('#fighter1move').textContent = fighter1.name + ' attacked!!!';

        document.querySelector('#fighter2move').textContent = fighter2.name + ' attacked!!!';

        document.querySelector('#battleResults').textContent = fighter1.name + ' WON!';
  } else if(fighter1.powerLevel < fighter2.powerLevel){
        console.log(fighter2.powerLevel + 'Won');
        document.querySelector('#fighter1move').textContent = fighter1.name + ' attacked!!!';

        document.querySelector('#fighter2move').textContent = fighter2.name + ' attacked!!!';


        document.querySelector('#fighter2move').textContent = fighter2.name + ' WON!';
  } else {
    console.log('ITS A TIE');
  }
}


//CALLING OUT THE BATTLE ARENA
rockyBattleArena(kenneth,evilGuy);
