// First Labour : Heracles vs Nemean Lion
import Fighter from "./src/Fighter.js";
import utils from "./src/utils.js";

// use your Figher class here
const human = new Fighter("🧙‍♀️ Heracles", 20, 6);
const lion = new Fighter("🦁 Nemean Lion", 11, 13);

let i = 1;
while (lion.life > 0 && human.life > 0) {
    console.log(`🕛 Round ${i++}`);
    human.fight(lion);
    utils.logFight(human, lion);
    lion.fight(human);
    utils.logFight(lion, human);
}

console.log(`Winner : ${human.isAlive() ? human.name : lion.name}`)
console.log(`Loser : ${human.isAlive() ? lion.name : human.name}`)
