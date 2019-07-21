const Person = require("./customer");

class Manger extends Person {
    constructor(firstName, lastName, age, salary) {
        super(fName, lName, age);
        this._salary = 0;
        this.salary = salary;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        if(value >= 0) {
            this._salary = value;
        }
    }

    display() {
        super.display();
        console.log("Salary: " + this.salary);
    }
}

module.exports = Employee;