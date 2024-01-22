const fruits = ["Orange", "Banana", "Apple", "Mango"];
//let fruits = 1;

//Task 1
const result = Array.isArray(fruits) ? "This is an array" : "This isn't an array";
console.log(result);

//Task 2 First Element
let firstElement = fruits[0];
//OR
for (let i = 0; i < fruits.length; i++) {
    firstElement = fruits[i];
    break;
}

console.log(firstElement);

//Task 3 last Element
let lastElement = fruits[fruits.length - 1];
//Or
for (let i = fruits.length - 1; i >= 0; i--) {
    lastElement = fruits[i];
    break;
}
console.log(lastElement);

//Task 4
const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
const o = ["th", "st", "nd", "rd"]

for (let i = 0; i < color.length; i++) {

    let count = i + 1;

    // ამოწმებს მასივში თუ არის შესაბამისი სუფიქსი, თუ არ არის 
    // იყენებს default th- s 
    let suffix = o[count] || o[0];

    let outputString = `${count}${suffix} choice is ${color[i]}.`;

    console.log(outputString);
}

//Task 5
const student = {
    firstName: "Giorgi",
    lastName: "Beridze",
    age: 19,
    university: "Ilia",
    faculty: "Law",
    email: "giorgi@example.com"
};

student.firstName = "Nini";
delete student.email;
student.gender = "Male";

console.log(student.firstName);
console.log(student.gender);
console.log(student); 

