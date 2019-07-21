class Customer {

    constructor(firstName, lastName, age) {
        this.fName = firstName;
        this.lName = lastName;
        this._age = 0;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if(value > 0) {
            this._age = value;
        }
    }

    display() {
        console.log("First name: " + this.firstName);
        console.log("Last name: " + this.lastName);
        console.log("Age: " + this.age);
    }
}

module.exports = Person; // Export the entire class to the exports object