//Task1 
// მოცემულ კოდში დაშვებულია ლოგიკური შეცდომა

let action = "move";

switch (action) {
    case "move":
        console.log("You're moving!");
        break;
    case "jump":
        console.log("You're jumping!");
        break;
    case "run":
        console.log("You're running!");
        break;
    default:
        console.log("Invalid action.");
}

//Task2
let vegetables = "Broccoli";

switch (vegetables) {
    case "Broccoli":
        console.log("Hello");
        break;
    case "Carrot":
        console.log("Welcome");
        break;
    default:
        console.log("Neither");
}

//Task 3
//შექმენით ხმის მიცემის უფლების შემმოწმებელი ფუნქცია. თუ მომხმარებლის ასაკი ნაკლებია 18-ზე უნდა გამოჩნდეს, 
//რომ მას არ შეუძლია ხმის მიცემა, თუ მისი ასაკი მეტია 18-ზე უნდა გამოჩნდეს, რომ მომხმარებელს შეუძლია ხმის მიცემა.
let age = 18;

switch (age >= 18) {
    case true:
        console.log("You can vote!");
        break;
    default:
        console.log("You cannot vote yet.");
}

let adult = age  >= 18 ? "You can vote": "You can not vote";
console.log(adult);

//Task4
let checkPassword = (password) => {
    switch (true) {
        case Number(password) >= 0 && Number.isInteger(Number(password)):
            return "უარგისი";
        case password.length < 3:
            return "უარგისი";
        case password.length <= 6:
            return "სუსტი";
        case password.length <= 8:
            return "მისაღები";
        case password.length <= 16:
            return "ძლიერი";
        default:
            return "გრძელი";
    }
}

let password1 = "12345";
let password2 = "strongPassword123";

console.log(checkPassword(password1)); 
console.log(checkPassword(password2)); 

//Task 5 
let quiz = function () {
    let score = 0;

    for (let i = 1; i <= 5; i++) {
        let answer = prompt(`${i} + ${i}`);
        
        switch (Number(answer)) {
            case 2 * i:
                score++;
                break;
            default:
                break;
        }
    }

    return score;
}

console.log(`Your score is: ${quiz()}`);



