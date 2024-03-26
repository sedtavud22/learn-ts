// "typeof" guard
type ValueType = string | number | boolean;

let value6: ValueType;
const random6 = Math.random();
value6 = random6 < 0.33 ? "Hello" : random6 < 0.66 ? 123.456 : true;

function checkValue6(value: ValueType): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
    return;
  }
  if (typeof value === "number") {
    console.log(value.toFixed(2));
    return;
  }
  console.log(`boolean : ${value}`);
}

/* ************ */
type Dog = { type: "dog"; name: string; bark: () => void };
type Cat = { type: "cat"; name: string; meow: () => void };
type Animal6 = Dog | Cat;

// equality narrowing
function makeSound1(animal: Animal6) {
  if (animal.type === "dog") {
    animal.bark();
  } else {
    animal.meow();
  }
}

// check for property
function makeSound2(animal: Animal6) {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// truthy/falsy guard
function printLength(str: string | null | undefined) {
  if (str) {
    console.log(str.length);
  } else {
    console.log("no string provided");
  }
}

// "instanceof" guard
try {
  throw new Error("This is an error");
  // throw 'some error'
} catch (error) {
  if (error instanceof Error) {
    console.log(`Caught an error object : ${error.message}`);
  } else {
    console.log("unknown error...");
  }
}

function checkInput(input: Date | string): string {
  if (input instanceof Date) {
    return input.getFullYear().toString();
  }
  return input;
}

// type predicate : narrow down types
type Student6 = {
  name: string;
  study: () => void;
};

type User6 = {
  name: string;
  login: () => void;
};

type Person6 = Student6 | User6;

const randomPerson = (): Person6 => {
  return Math.random() > 0.5
    ? { name: "john", study: () => console.log("Studying") }
    : { name: "mary", login: () => console.log("Logging in") };
};

const person6 = randomPerson();

function isStudent(person: Person6): person is Student6 {
  // return "study" in person;
  return (person as Student6).study !== undefined;
}

if (isStudent(person6)) {
  person6.study();
} else {
  person6.login();
}

// discriminated unions & exhaustive check
type IncrementAction = {
  type: "increment";
  amount: number;
  timestamp: number;
  user: string;
};

type DecrementAction = {
  type: "decrement";
  amount: number;
  timestamp: number;
  user: string;
};

type Action = IncrementAction | DecrementAction;

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "increment":
      return state + action.amount;
    case "decrement":
      return state - action.amount;
    default:
      const unexpectedAction: never = action;
      throw new Error(`Unexpected action : ${unexpectedAction}`);
  }
}

const newState = reducer(15, {
  type: "increment",
  user: "john",
  amount: 5,
  timestamp: 123456,
});
