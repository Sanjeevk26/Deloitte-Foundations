console.log("This text is from a separate JS file");

var user = "vishwas";
console.log(user);
var user = 10;
console.log(user);
let age = 10;
console.log(age);
age = 20;
console.log(age);
const minAge = 18;
console.log(minAge);
console.log("minimum age is:"+minAge);
//minAge = 25;
console.log("minimum age is:"+minAge);


/*
Avoid keywords for variable names.
Use descriptive and meaningful names.
Only letters, numbers, and underscores (_) are allowed.
No spaces or hyphens (-) in names.
Declare each variable on a separate line.
Variable names cannot start with a number.
JavaScript is case-sensitive.

*/

// String Data types
let user3 = "Vishwas"
let user1 = 'Vishwas'
let user2 = `vishwas`
console.log("Type of user3 is: ");
console.log(typeof user3);
console.log("Type of user1 is: ");
console.log(typeof user1);
console.log("Type of user2 is: ");
console.log(typeof user2);
 
 let user1Things = "Vishwas's"
 console.log(user1Things);
 console.log("This is "+"Java Script Language");

 let sharePrice = 10_00_000
 console.log(sharePrice);
 console.log(typeof sharePrice);
  
 console.log(Number.MAX_VALUE);
 console.log(Number.MIN_VALUE);
 console.log(Number.MAX_SAFE_INTEGER);


 let quantity = "123"
console.log(typeof quantity);
quantity = Number(quantity);
console.log(typeof quantity);

let price = "123 vishwas";
price = Number(price);
console.log(price);

let price1 = "123.45";
console.log(price1);

let istrue = Boolean(0);
console.log(istrue)

let price2 = 2356;
price2 = String(price2);
console.log(price2);
console.log(typeof price2);


let x = "10.45";
let y = 20;
let z = +x + y;
console.log(z);


let x1 = 45
let x2 = x1--;
console.log(x1);
console.log(x2);

x = 10
console.log("x "+x);
console.log("y "+y);
x += 1;
y -= 1;

console.log("x "+x);
console.log("y "+y);

let k = "vishwas 12345 "
let k1 = parseInt(k)
let k2 = Number(k)
console.log("k1 "+k1);
console.log("type of k1 "+typeof k1);

console.log("k2 "+k2);
console.log("type of k2 "+typeof k2);

let n = 30;
if(n>25){
    console.log("n is greater than 25");
    }

console.log(20/5);
let n1 = 100;
let n2 = 5;
 
 if(n1 >n2){
    if(n1 % n2 == 0){
        console.log(n2+" can divide " + n1 + " completely");
        }
        }
    

        let output = "";
        const fruits = ["Apple", "Banana", "Cherry"];

        // Display original array
        output += "Original Array: " + fruits + "\n";
        
        // Access elements
        output += "First Element: " + fruits[0] + "\n";
        
        // Find the length of the array
        output += "Array Length: " + fruits.length + "\n";
        
        // Add elements to the end using push
        fruits.push("Dragonfruit");
        output += "After Push (Add to end): " + fruits + "\n";
        
        // Remove the last element using pop
        fruits.pop();
        output += "After Pop (Remove from end): " + fruits + "\n";
        
        // Add elements to the beginning using unshift
        fruits.unshift("Elderberry");
        output += "After Unshift (Add to beginning): " + fruits + "\n";

        // Remove the first element using shift
        fruits.shift();
        output += "After Shift (Remove from beginning): " + fruits + "\n";

        // Find the index of an element
        const index = fruits.indexOf("Banana");
        output += "Index of Banana: " + index + "\n";

        // Remove elements using splice
        fruits.splice(index, 1); // Removes 1 element at the found index
        output += "After Splice (Remove Banana): " + fruits + "\n";

        // Slice part of the array
        const slicedFruits = fruits.slice(0, 1); // Slices the first two elements
        output += "Sliced Array (First 1 element): " + slicedFruits + "\n";


        console.log(output);