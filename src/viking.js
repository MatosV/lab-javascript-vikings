// Soldier

class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    //aqui podes sempre meter this.health -= damage
  }
}


// Viking

class Viking extends Soldier {
  constructor (name, health, strength){
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {

    this.health = this.health - damage;
    
    if (this.health >= 1) {
      return (`${this.name} has received ${damage} points of damage`);
    } else
      return ( `${this.name} has died in act of combat`);
  }
  
  battleCry(){
    return ("Odin Owns You All!") 
  }
}

class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;

    if (this.health >= 1){
      return (`A Saxon has received ${damage} points of damage`);
    } else {
      return (`A Saxon has died in combat`);
    }
  }

}

// War
class War { 
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking){    
   this.vikingArmy.push(viking);
  }
  
  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }

  vikingAttack(){

    //chosse random Saxon                                                                            
    const choosenSaxon = this.saxonArmy[Math.floor((this.saxonArmy.length) * Math.random())]  //Math.floor(Math.random() * this.saxonArmy.length);
    
    //choose random Viking + is strg
    const damageViking = this.vikingArmy[Math.floor((this.saxonArmy.length) * Math.random())].strength

    //choosen Saxon takes the Viking dmg [KABOOM]
    const attack = choosenSaxon.receiveDamage(damageViking)


    if (choosenSaxon.health <= 0) this.saxonArmy.splice([choosenSaxon, 1])
      return attack
  }

  saxonAttack(){

    //chosse random Viking                                                                            
    const choosenViking = this.vikingArmy[Math.floor((this.vikingArmy.length) * Math.random())]  
    
    //choose random Saxon + is strg
    const damageSaxon = this.saxonArmy[Math.floor((this.vikingArmy.length) * Math.random())].strength

    //choosen Viking takes the Saxon dmg [...]
    const attack = choosenViking.receiveDamage(damageSaxon)

    if (choosenViking.health <= 0) this.vikingArmy.splice([choosenViking, 1])
      return attack
  }

  showStatus(){

    //and so it begins 

    if (this.saxonArmy.length === 0){
      return (`Vikings have won the war of the century!`);
    } else if (this.vikingArmy.length === 0) {
      return (`Saxons have fought for their lives and survived another day...`);
    } 
    return (`Vikings and Saxons are still in the thick of battle.`);
  } 
}




