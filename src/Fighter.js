/* Fighter class definition */
const MAX_LIFE = 100;
// Fighters have 100 max life points

class Fighter {
    constructor (name, strenght, dexterity) {
        this.name = name;
        this.strenght = strenght;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
    }
    fight(enemy) {
        const randomDamagePoint = Math.floor(Math.random() * (this.strenght - 1)) + 1;
        const realDamagePoint = Math.max(0, randomDamagePoint - enemy.dexterity);
        enemy.life = realDamagePoint >= enemy.life ? 0 : enemy.life - realDamagePoint;
    }
    isAlive() {
        return this.life > 0
    }
}

export default Fighter;

// const lifeAfterAttack = enemy.life - damageDefender;
// enemy.life = lifeAfterAttack< 0 ? 0 : lifeAfterAttack;