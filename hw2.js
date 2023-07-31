
let name = prompt('Як вас звати?');
alert('Hello, ' + name + '! How are you?');


let a = prompt('num1');
let b = prompt('num2')
a = parseInt(a);
b = parseInt(b);

console.log(a + b); 
console.log(a - b);
console.log(a * b);
console.log(a / b);



let number1 = prompt('num1');
let number2 = prompt('num2');
console.log(number1 === number2); 



let firstNumber = prompt('num1');
let secondNumber = prompt('num2');
let thirdNumber = prompt('num3');
console.log((Number(firstNumber)+Number(secondNumber)+Number(thirdNumber))/3); 



let myNumber = prompt('number');  

firstNumber = myNumber % 10;      
console.log(firstNumber); 

myNumber = (myNumber - firstNumber)/10;
secondNumber = myNumber % 10; 
console.log(secondNumber); 

myNumber = (myNumber - secondNumber)/10;
thirdNumber = myNumber % 10; 
console.log(thirdNumber);

myNumber = (myNumber - thirdNumber)/10;
fourthNumber = myNumber % 10;
console.log(fourthNumber);

myNumber = (myNumber - fourthNumber)/10;
fifthNumber = myNumber % 10;
console.log(fifthNumber);

console.log(fifthNumber, fourthNumber, thirdNumber, secondNumber, firstNumber);





