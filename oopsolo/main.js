class Person{
    constructor(student,teacher){
        this._student = student  //<-----encapsulation 
        this._teacher = teacher
    }
    get student(){  //<--- allows your code to prevent people to change the name instead of joe. Abstraction
        return this._student
    }
    get teacher(){
        return this._teacher
    }
    speak(){
        console.log(`Hello I'm  ${this._student} at Blah Elementary School.`)
    }
}
    class Janitor extends Person{
        constructor(student,teacher,cleaner){
            super(student,teacher)
           
            this._cleaner = cleaner
        }
        get cleaner(){
            return this._cleaner
        }
        speak(){
            console.log(`Hello, I'm a ${this._cleaner} at Blah Elementary School. I'm a janitor.`)
        }
    }
    class firstgrader extends Person{
        constructor(student,teacher,cleaner){
        super(student,teacher)
        this._cleaner = cleaner
    }
    get cleaner(){
        return this._cleaner
}
    
    speak(){
        console.log(`Hello, I'm ${this.student} at Blah Elmentary School. I'm in the first grade.`)
    }
}

    let joe = new Person('joe', 'Mr.Boo\'s class')
    let john = new Janitor('john', 'cleans the teachers class','cleaner')
    let baby = new firstgrader('baby','Mr.Bob\'s class')

    let elementaryschool = [joe,john,baby]

    for (Person of elementaryschool)
        Person.speak()