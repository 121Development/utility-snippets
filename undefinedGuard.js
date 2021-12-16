// checks if defined, otherwise returns undefined
class Person {
    constructor( name, street, hobbies){
        this.name = name
        this.street = street
        this.hobbies = hobbies
    }
}
const mark = new Person("Mark", { street: "Gatan"}, ["Baseball"])

console.log(mark.hobbies?.[0].toLowerCase())