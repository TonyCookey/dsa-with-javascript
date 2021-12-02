class Player {
    constructor(name, type) {
        console.log(this);
        this.name = name
        this.type = type
    }
    introduce() {
        return `My name is ${this.name}, and I'm a ${this.type}`
    }
}
class Striker extends Player {
    constructor(name, type, goals) {
        super(name, type)
        this.goals = goals
        console.log(this);

    }
    score() {
        return `I am ${this.type} and i have scored ${this.goals} this season`
    }
}

let striker1 = new Striker('Ronaldo', 'Striker', 50)
striker1
console.log(striker1.introduce())
console.log(striker1.score())
