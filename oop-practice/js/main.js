/*class MakeCar{
    constructor(carMake, carModel,numOfDoors, carColor){
    this.make = carMake;
    this.model = carModel;
    this.doors = numOfDoors;
    this.color = carColor;
    }
    honk(){
        alert('Beep')
    }
    lock(){
        alert(`Lock this${this.model} now!`)
    }
}
 
  let kia = new MakeCar('kia', 'Morning', 4, 'black')
*/
/*class ExpressoMachine{ //encapsulation is the process of storing functions(methods) with their associated data(properties ) in one object
    constructor(color,model,make,price){ // makes it easier to add new stuff,easier to read the code, and makes changing the code easier. 
        this.color = color;
        this.model = model;
        this.make = make;
        this.price = price;
        }
        start(){
            console.log('Turning on')
        }

        steam(){
            console.log('Steaming!')
        }

        stop(){
            console.log('Turning off!')
        }

}
let joeCoffee = new ExpressoMachine('white', 't500', 'joe', 99.99)
*/
/*function CompanyContract(hourlyRate, hours,taxes){
    let rate = hourlyRate
    this.hours = hours;
    this.taxes = taxes;
    this.Profit = function(){

    
    return rate * this.hours * (1- this.taxes)
}

this.client = function() {
    return `your invoice total is ${rate * this.hours}`
}
}
let joe = new CompanyContract(100, 4, .55) //abstraction hides detail and shows essentials. Also smaller and more manageable pieces of code. Allows you to focus on one portion and not worry about the rest. 
console.log(joe.client()  ) 
console.log(joe.hourlyRate  )
console.log(joe.taxes()  )
*/
                //inheritance allows you to eliminate redundant code. Shares code from parent ie: chicken sharing from animalFarm parent

/*class animalFarm {
    constructor(name,age,farmName){
        this.name = name
        this.age = age
        this.farmName = farmName
    }
   speak(){
       console.log(`${this.name} makes a sound`);
   }
}
   class chicken extends animalFarm{
       constructor(name,age,farmName,taste){ //constructor spits out information about the chicken
           super(name,age,farmName,taste) //super code gives you all the information instead of typing the code repeatedly
           this.taste = taste
       }
   }

let john = new chicken('john', 25,'joesfarm','delicious')
*/

class Creature{   //polymorphism allows you to perform a single action on different form. Ex: speak(). Allows you avoid if/else and switch cases
    constructor(name){
        this._name = name
    }
    get name() {
        return this._name
    }
    speak(){
        console.log(`${this._name} makes a sound!`)
    }
}
class Cat extends Creature{
    constructor(name,breed){
        super(name) //super grabs from the parent which is Creature class
        this._breed = breed
        
    }
    get breed(){
        return this_breed
    }
    speak(){
        super.speak()
        console.log(`${this._name} meows`)
    }
}
    class Dog extends Creature{
        constructor(name,breed){
        super(name)
            this._breed = breed
        }
        get breed(){
            return this_breed
        }
        speak(){
            super.speak()
            console.log(`${this._name} barks`)
        }
        }
    
let joe = new Cat('joe', 'halloween')
let john = new Dog('john', 'great dane')

let farm = [joe,john]

for(a of farm){
    a.speak()// code does not need to be maintained. Don't need switch or conditionals
}