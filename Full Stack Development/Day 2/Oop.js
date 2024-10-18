// Define a class named "Person"
class Person {
    // Constructor method to initialize object properties
    constructor(name, age) {
      this.name = name; // 'this' refers to the current object instance
      this.age = age;
    }
  
    // Method to display person information
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  
    // Static method (called on the class itself, not instances)
    static species() {
      return "Homo sapiens";
    }
  }
  
  // Create an instance of the class
  let person1 = new Person("John", 25);
  
  // Access properties and methods
  person1.greet(); // Output: "Hello, my name is John and I am 25 years old."
  
  // Access static method
  console.log(Person.species()); // Output: "Homo sapiens"
  