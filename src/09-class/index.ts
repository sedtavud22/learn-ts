// private = cannot access from outside class
// public = can access from outside class

class Book {
  public readonly title: string;
  public author: string;
  private checkedOut: boolean = false;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
  public checkOut() {
    this.checkedOut = this.toggleCheckedOutStatus();
  }
  public isCheckedOut() {
    return this.checkedOut;
  }
  private toggleCheckedOutStatus() {
    return !this.checkedOut;
  }
}

const deepWork = new Book("deep work ", "cal newport");
deepWork.checkOut();
console.log(deepWork.isCheckedOut());

// shorthand
class Book1 {
  private checkedOut: boolean = false;

  constructor(readonly title: string, public author: string) {}
}

// get & set
class Book2 {
  private checkedOut: boolean = false;

  constructor(readonly title: string, public author: string) {}

  get info() {
    return `${this.title} by ${this.author}`;
  }
  private set checkOut(checkedOut: boolean) {
    this.checkedOut = checkedOut;
  }
  get checkOut() {
    return this.checkedOut;
  }
  public get someInfo() {
    this.checkOut = true;
    return `${this.title} by ${this.author}`;
  }
}

const deepWork2 = new Book2("deep work 2 ", "cal newport");
console.log(deepWork2.info);
console.log(deepWork2.someInfo);
console.log(deepWork2.checkOut);

// implement interface
interface IPerson {
  name: string;
  age: number;
  greet(): void;
}

class Person implements IPerson {
  constructor(public name: string, public age: number) {}
  greet(): void {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
  }
}

const hipster = new Person("Joe Don", 100);
hipster.greet();
