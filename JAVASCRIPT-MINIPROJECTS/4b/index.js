// Base class Person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// Derived class Employee extending Person
class Employee extends Person {
    constructor(name, age, role) {
        super(name, age); // Call the constructor of the base class
        this.role = role;
    }
}

// Creating instances of Person and Employee classes
const person1 = new Person("John", 30);
const employee1 = new Employee("Alice", 25, "Developer");

// Displaying information
console.log("Person:");
console.log("Name:", person1.name);
console.log("Age:", person1.age);

console.log("\nEmployee:");
console.log("Name:", employee1.name);
console.log("Age:", employee1.age);
console.log("Role:", employee1.role);
