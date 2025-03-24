//complete this code
class Animal {
	constructor(species){
		this.species=species
	}
	makeSound(){
		console.log(`The ${species} makes a sound`)
	}
}

class Dog extends Animal {

	constructor(species){
		this.species=species
	}

purr(){
	console.log("purr")
}
	
}

class Cat extends Animal {

		constructor(species){
		this.species=species
	}

	bark(){
		console.log("woof")
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
