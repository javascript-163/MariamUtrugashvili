//1. შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს ყოველ 
// მესამე ელემენტს ეკრანზე.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 2; i < numbers.length; i += 3) {
//     console.log(numbers[i]);
// }

// let i = 2;
// while (i < numbers.length) {
//     console.log(numbers[i])
//     i += 3;
// }

// 2.შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს
//let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = numbers.length - 1; i >= 0; i--) {
//    console.log(numbers[i])  
// }

// let i = numbers.length - 1;
// while (i >= 0) {
//   console.log(numbers[i]);
//   i--;
// }

//3.ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე

//let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];
//function weHateBob(names) {
//For
// for (let i = names.length - 1; i >= 0; i--) {
//     if (names[i] === 'Bob') {
//         names.splice(i, 1);
//     }
// }

//While 
// let i = names.length - 1;
// while (i >= 0) {
//     if (names[i] === 'Bob') {
//         names.splice(i, 1);
//     }
//     i--;
// }

//return names;
//Or we can use built-in array method 
//return names.filter(name => name !== 'Bob');
//}

// let namesWithoutBob = weHateBob(names);
// console.log(namesWithoutBob);

//4.შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს

//function fun(number, pow) {
//for
// let result = 1;
// for (let i = 0; i < pow; i++) {
//     result *= number;
// }

//while
// let result = 1;
// let i = 0;

// while (i < pow) {
//     result *= number;
//     i++;
// }

// return result;
//}

// console.log(fun(5, 3));

//5.შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები იყოფა
// 3-ზე უნაშთოდ და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, Fizz.
//ასევე იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა უნაშთოდ და გამოიტანეთ Buzz
//ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz.

// function fizzBuzz() {
//     for (let index = 1; index <= 100; index++) {
//         if (index % 3 === 0 && index % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (index % 3 === 0) {
//             console.log("Fizz");
//         } else if (index % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(index);
//         }
//     }
// }

// fizzBuzz();

//6. შექმენით ფუნქცია, რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის პარამეტრის სახით მიწოდებული
// რიცხვის ფაქტორიალს

// function factorial(n) {
//     let result = 1;

//     // for (let i = 2; i <= n; i++) {
//     //     result *= i;
//     // }

//    ////while
//     let i = 2;
//     while (i <= n) {
//         result *= i;
//         i++;
//     }

//     return result;
// }

// console.log(factorial(7));

//7.შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს

// function capitalizeFirstLetter(str) {
//     let result = '';

//     for (let i = 0; i < str.length; i++) {
//         if (i === 0) {
//             result += str[i].toUpperCase();
//         } else {
//             result += str[i];
//         }
//     }

//     return result;
// }

// let originalString = "original string";
// let capitalizedString = capitalizeFirstLetter(originalString);

// console.log(capitalizedString);

//8. შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი

// const blankStringChecker = testString => {
//     for (let i = 0; i < testString.length; i++) {
//         if (testString[i] !== ' ') {
//             return false;
//         }
//     }
//     return true;
// };

// //with built-in fmethod
// // const blankStringChecker = testString => testString.trim() === '';

// console.log(blankStringChecker(" ")); 
// console.log(blankStringChecker("sfjasnm"));

//9.შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად. 
// function stringToArray(testString) {
//     return testString.split(' ');
// }

// let resultArray = stringToArray("Hello World!");
// console.log(resultArray);

///10.შექმენით ერთგვარი ემაილის დამცველი ფუნქცია.
function Email(email) {
    //გამოვყოთ ერთმანეთისგან იუზერნეიმი და დომეინი
    let atIndex = email.indexOf('@');
    let username = email.substring(0, atIndex);
    let domain = email.substring(atIndex);

    //გამოვყოთ ერთმანეთისგან სახელი და გვარი
    let parts = username.split('.');
    let lastName = parts[parts.length - 1];

    // გვარის მიხედვით გავიგოთ რამდენი წერტილი გვჭირდება
    let dots = Array(lastName.length + 1).join('.');
    //შევცვალოთ წერტილებით
    let changedUsername = parts.slice(0, parts.length - 1).join('.') + '.' + dots;

    return changedUsername + domain;
}

let emailToTest = Email("mariami.kkk@gmail.com");
console.log(emailToTest); 