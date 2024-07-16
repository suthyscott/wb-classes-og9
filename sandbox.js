// const fruits = new Array('berry', 'apple', 'cherry');
// console.log(fruits.length); // 3
// fruits.sort();

// console.log(fruits)

class Cat {
    constructor (name, hunger = 100) {
        this.name = name
        this.hunger = hunger
        this.mood = 'happy'
        // this.species = 'Felus catus'
    }

    greet () {
        console.log(`Hi, I'm ${this.name}`)
    }

    graduate () {
        this.name = `Dr. ${this.name}`
        this.greet()
    }
}

const felix = new Cat('Felix', 75)
const ezra = new Cat('Ezra')
 
Cat.prototype.species = 'Felis catus'

felix.species = 'party animal'


console.log(felix)
console.log(ezra.species)
