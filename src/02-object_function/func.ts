/* parameters 
  - any
  - config
  - type
*/

// annotate parameter type
function sayHi(name: string) {
  console.log(`Hello ${name.toUpperCase()}`);
}
sayHi("john");

// annotate return type
function calculateDiscount(price: number): number {
  const hasDiscount = true;
  if (hasDiscount) {
    return price * 0.9;
  }
  return price;
}

// infer type from fn
const finalPrice = calculateDiscount(200);

function addThree(number: any) {
  let anotherNumber: number = 3;
  return number + anotherNumber;
}

const result = addThree(3);
const someValue = result;

// not red in vscode (because any type) but runtime error
// someValue.method()

const names1: string[] = ["john", "jane", "jim"];

function isNameInList(name: string): boolean {
  return names1.includes(name);
}

let nameToCheck = "jane";

if (isNameInList(nameToCheck)) {
  console.log(`${nameToCheck} is in the list`);
} else {
  console.log(`${nameToCheck} is not in the list`);
}

// optional parameters
function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);

// default parameter value
function calculateScore(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(200);

// rest parameter
function sum(message: string, ...numbers: number[]): string {
  // typescript knows the param type in callback fn
  // const doubled = numbers.map((num) => num * 2);

  let total = numbers.reduce((prev, curr) => prev + curr, 0);
  return `${message}${total}`;
}

let result1 = sum("The total is : ", 1, 2, 3, 4, 5);

// void == does not return value
function logMessage(message: string): void {
  console.log(message);
}

// union type as parameter
function processInput(input: string | number) {
  // type guard
  if (typeof input === "number") {
    console.log(input * 2);
  } else {
    console.log(input.toUpperCase());
  }
}

// object parameter and return
function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome ${student.name.toUpperCase()}`);
}

const newStudent = {
  id: 5,
  name: "anna",
  email: "anna@gmail.com",
};

// not error, typescript only cares about id & name
createStudent(newStudent);

// inline = error
// createStudent({id:1,name:'john',email:'john@gmail.com'})
