import newStudent, { sayHello, person, type Student } from "./actions";

// doesn't know js file but can config ""allowJs": true"
// import { someValue } from "./example.js";

sayHello("TypeScript");
console.log(newStudent);
console.log(person);

const anotherStudent: Student = {
  name: "bob",
  age: 23,
};
console.log(anotherStudent);
