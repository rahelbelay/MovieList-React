class Hero {
    constructor(health = 18, power = 5) {
        this.health = health;
        this.power = power;
    }
    hug(otherHero) {
        //otherHero.health += this.power;
        otherHero.receiveHealth(this.power);

        //console.log(`otherHero has ${otherHero.health}`);
    }
    receiveHealth(healthpoints) {
        this.health += healthpoints;
        console.log(`yay! i love hugs${this.health}`)
    }

}

const aHero = new Hero();
const otherHero = new Hero();
aHero.hug(otherHero)
aHero.hug(otherHero)



class Cat {
    constructor(age = 3, power = 3) {
        this.age = age;
        this.power = power;
    }
    older(otherCat) {
        otherCat.age += this.power
        console.log(`otherHero has ${otherHero.health}`);
    }

}

const aCat = new Cat();
const otherCat = new Cat();