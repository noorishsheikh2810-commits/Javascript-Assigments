// function greet (userName) {
//     alert (`Hello  ${userName} `)
// }

// greet("arhama")


// function fruit(name1 , name2) {
// console.log(name1 + " " + name2);
// }

// fruit("Mango", "apple");


// let num1 = +prompt("Enter your first number")
// let num2 = +prompt("Enter your second number")
// function sum(value1, value2) {
//     alert(value1 + value2)
// }

// function multiplication(value1, value2) {
//     alert(value1 * value2)
// }

// sum(num1, num2)

// multiplication(num1, num2)


let num1 = +prompt("Enter your first number")
let operator = prompt("Enter your opreator")
let num2 = +prompt("Enter your second number")

function calculation(value1, value2, opera) {
    if (opera == "+") {
        alert(`Sum is ${value1 + value2}`);
    } else if (opera == "-") {
        alert(`Minus is ${value1 - value2}`);
    } else if (opera == "*") {
        alert(`Multiplication is ${value1 * value2}`);
    } else if (opera == "/") {
        alert(`Division is ${value1 / value2}`);
    } else {
        alert("Invalid input");
    }
}
calculation(num1, num2, operator)




    // function decleration
let add = function (){
    
}


// function add(a, b) {
//   return a + b;
// }

// function greet(name) {
//   console.log("Hello " + name);
// }

// function square(num) {
//   return num * num;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function isEven(n) {
//   return n % 2 === 0;
// }

// function sayHi() {
//   console.log("Hi!");
// }