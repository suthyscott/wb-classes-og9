class Animal {
    constructor(name, species, hunger = 100) {
        this.name = name
        this.species = species
        this.hunger = hunger
    }

    greet(greeting = "Hi") {
        console.log(`${greeting}, I'm ${this.name} the ${this.species}`)
    }
}

class Cat extends Animal {
    constructor(name, hunger, breed = "tabby") {
        super(name, "cat", hunger)
        this.breed = breed
    }

    purr() {
        console.log("Prrrrrr")
    }

    greet() {
        super.greet("Meow")
    }
}

// const barney = new Animal('Barney', 'dino')
// const rover = new Animal('Rover', 'dog');
const ezra = new Cat("Ezra")

console.log(ezra)

ezra.greet()
