interface Book1 {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;
  printSomething: (someValue: number) => number;
}

const deepWork: Book1 = {
  isbn: 123,
  title: "deep work",
  author: "cal newport",
  genre: "self-help",
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
  // first option
  printSomething: function (someValue) {
    return someValue;
  },
  // second option
  // printSomething: (someValue) => {
  //   console.log(deepWork.author);
  //   return someValue;
  // },
  // third option
  // printSomething(someValue) {
  //   return someValue;
  // },
};

// Challenge
interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  upgradeRam(increase: number): number;
  storage?: number;
}

const laptop: Computer = {
  id: 1,
  brand: "random brand",
  ram: 8,
  upgradeRam(amount) {
    this.ram += amount;
    return this.ram;
  },
};

laptop.storage = 256;

console.log(laptop.upgradeRam(4), laptop);

// interface merging by declaring interface with the same name
interface Person {
  name: string;
  getDetails(): string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: "john",
  age: 30,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

// extend interface
interface Employee1 extends Person {
  employeeId: number;
}

const employee: Employee1 = {
  name: "jane",
  age: 28,
  employeeId: 123,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Employee ID : ${this.employeeId}`;
  },
};

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

interface Manager1 extends Person, DogOwner {
  managePeople(): void;
}

const manager: Manager1 = {
  name: "bob",
  age: 35,
  dogName: "rex",
  getDetails() {
    return `Name ${this.name}, Age: ${this.age}`;
  },
  getDogDetails() {
    return `Name: ${this.dogName}`;
  },
  managePeople() {
    console.log("Managing people...");
  },
};

// Challenge 2
function getEmployee2(): Person2 | DogOwner2 | Manager2 {
  const random = Math.random();

  if (random < 0.33) {
    return {
      name: "john",
    };
  } else if (random < 0.66) {
    return {
      name: "sarah",
      dogName: "rex",
    };
  } else {
    return {
      name: "bob",
      managePeople() {
        console.log("Managing people...");
      },
      delegateTasks() {
        console.log("Delegating tasks...");
      },
    };
  }
}

interface Person2 {
  name: string;
}

interface DogOwner2 extends Person2 {
  dogName: string;
}

interface Manager2 extends Person2 {
  managePeople(): void;
  delegateTasks(): void;
}

const employee2: Person2 | DogOwner2 | Manager2 = getEmployee2();

console.log(employee2);

// type predicate
function isManager2(obj: Person2 | DogOwner2 | Manager2): obj is Manager2 {
  return "managePeople" in obj;
}

if (isManager2(employee2)) {
  employee2.delegateTasks();
}
