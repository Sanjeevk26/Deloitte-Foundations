let person = {
    name: "John",
    age: 30,
    isStudent: false,
    address: {
        city: "New York",
        zipCode: "10001"
    }
};

console.log(person.name);
console.log(person.address.city);

// changing value
person.age = 31;
console.log(person.age);
let company = {
    name: "TechCorp",
    employees: [
        { name: "Alice", position: "Engineer" },
        { name: "Bob", position: "Designer" },
        { name: "Charlie", position: "Manager" }
    ]
};

console.log(company.employees[0].name);

//Array Destructuring/Unpacking
const myNumbers = [1,2,3];
const [first, second, third] = myNumbers;

console.log("first: "+ first);
console.log("second: "+ second);
console.log("third: "+ third);


let colors = ["red", "green", "blue", "yellow"];
let [firstColor, , thirdColor] = colors;

console.log(firstColor);  // Output: "red"
console.log(thirdColor);  // Output: "blue"

const myNumbers1 = [1,2,3];
const myNumbers2 = [4,5,6];
 
let newNumbers = [...myNumbers1 ,...myNumbers2]; // Concating arrays
console.log(`New Numbers are ${newNumbers}`)