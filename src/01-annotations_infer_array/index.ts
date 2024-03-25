// infer type
let awesomeName = "John Doe";
awesomeName = "someone";
awesomeName = awesomeName.toUpperCase();

let age = 20;
age = 12 - 1;

let isAdult = age >= 18;
isAdult = !isAdult;

// union types
let tax: number | string = 10;
tax = 100;
tax = "$10";

let requestStatus: "pending" | "success" | "error" = "pending";
requestStatus = "success";
requestStatus = "error";

// any type
let notSure: any = 4;
notSure = "maybe string";
notSure = false;

// type == any
let random;

const books = ["1984", "Fahrenheit 451", "Harry"];

let foundBook: string | undefined;

for (let book of books) {
  if (book === "1984") {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}

// auto optional chaining because var could be undefined
foundBook?.length;

// type annotations in array
let prices: number[] = [100, 75, 42];

let fruit: string[] = ["apple", "grape"];

let randomValues: [] = [];

// infer types from array
let names = ["peter", "susan", 12];

// union types in array
let array: (string | boolean)[] = ["apple", true, "orange", false];
