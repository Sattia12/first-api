const fruits = require("../fruits.json")

//build a class
// it will have a constructor to build instances of the fruit to return to the controller
//method showAll will access fruits json and return instances of all fruit to controller 
///method show which acces one fruit, build an instances and return to controll `show`

class Fruit {
    constructor(fruit){
        this.genus = fruit.genus,
        this.name = fruit.name,
        this.id = fruit.id,
        this.family = fruit.family,
        this.order = fruit.order,
        this.nutritions = fruit.nutritions
    }

    static showAll = () => {
        return fruits.map(fruit => new Fruit(fruit))
    }

    static show = (name) => {
        const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == name)
        if (fruit){
            return new Fruit(fruit);
        } else {
            throw "the fruit does not exist in this api"
        }
    }

    static create = (data) =>{
        const newFruit = data
        const fruit =fruits.find(fruit => fruit.name.toLowerCase() === newFruit.name.toLowerCase())
        if (fruit){
            throw "fruit already exists"
        } else {
            newFruit["id"] = fruits.length + 1
            fruits.push(newFruit)
            return new Fruit(newFruit)
        }
    }

    update(data){
        console.log("this", this)
        const updatedFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())
        if(updatedFruit){
            updatedFruit.name = data.name
            updatedFruit.family = data.family
            return new Fruit(updatedFruit)
        } else {
            throw Error("fruit not found")
        }
    }

    destroy() {
        const deletedFruit = fruits.find (fruit => fruit.name.toLowerCase() === this.name.toLowerCase())
        if(deletedFruit){
            const index = fruits.indexOf(deletedFruit)
            fruits.splice(index, 1)
        } else {
            throw Error("fruits not found")
        }

    }
}


module.exports = Fruit