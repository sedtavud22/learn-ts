// let array1: string[] = ["Apple", "Banana", "Mango"];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

// methods will return the same type (string) as well
let array1: Array<string> = ["Apple", "Banana", "Mango"];

// instead of doing these
function createString(arg: string): string {
  return arg;
}
function createNumber(arg: number): number {
  return arg;
}

// use generics
function genericFunction<T>(arg: T): T {
  return arg;
}

const someStringValue = genericFunction<string>("Hello World");
const someNumberValue = genericFunction<number>(2);

interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: GenericInterface<string> = {
  value: "Hello World",
  getValue() {
    return this.value;
  },
};

// Promise
async function someFunc(): Promise<string> {
  return "hello world";
}

// Generate array
function generateStringArray(length: number, value: string): string[] {
  let result: string[] = [];
  result = Array(length).fill(value);
  return result;
}

function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  result = Array(length).fill(value);
  return result;
}

let arrayStrings = createArray<string>(10, "hello");
let arrayNumbers = createArray<number>(15, 100);

// multiple variable types
function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

let pairResult = pair<number, string>(123, "hello");

// constraint on generic
function processValue<T extends string | number>(value: T): T {
  console.log(value);
  return value;
}

processValue("hello");
processValue(12);

type Car7 = {
  brand: string;
  model: string;
};

const car7: Car7 = {
  brand: "ford",
  model: "mustang",
};

type Product7 = {
  name: string;
  price: number;
};

const product7: Product7 = {
  name: "shoes",
  price: 1.99,
};

type Student7 = {
  name: string;
  age: number;
};

const student7: Student7 = {
  name: "peter",
  age: 20,
};

function printName7<T extends { name: string }>(input: T): void {
  console.log(input.name);
}

printName7(student7);
printName7(product7);

// default type
interface StoreData<T = any> {
  data: T[];
}

const storeNumbers: StoreData<number> = {
  data: [1, 2, 3, 4],
};

const randomStuff: StoreData = {
  data: ["random", 1],
};
