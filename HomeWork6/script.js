//Task 1

function longestWord(sentence) {
    let longestWord = "";

    sentence.split(" ").forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    return longestWord;
}

console.log(longestWord("hhhh , ii, iii"));

//Task2

let calculator = {
    num1: 20,
    num2: 5,
    add() {
      return this.num1 + this.num2;
    },
    subtract() {
      return this.num1 - this.num2;
    },
    multiply() {
      return this.num1 * this.num2;
    },
    divide() {
      return this.num1 / this.num2;
    },
  };
  
  console.log(calculator.multiply());

//Task 3

greet(); 
function greet() {
  console.log("Hello, world!");
}

// ჰოისტინგით  შეგვიძლია ფუნქციის გამოძახება მის შექმნამდე.
//მოქმედებს მხოლოდ მაშინ, როცა ფუნქციას ვსაზღვრავთ, თუ რამე ცვლადს მივანიჭებთ ფუნქციას მაშინ ჰოსტინგი არ იმუშავებს
//ReferenceError- ამ ერორს დაგვიბრუნებს const ისა და let ის შემთხვევაში და თუ var ს მივანიჭებთ მაშინ უბრალოდ იმას გვეტყვის
//რომ არ არის ფუნქცია.