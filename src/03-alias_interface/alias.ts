// type alias
type User = { id: number; name: string; isActive: boolean };

const john: User = {
  id: 1,
  name: "john",
  isActive: true,
};

const susan: User = {
  id: 1,
  name: "susan",
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

// union type alias
type StringOrNumber = string | number;

let value: StringOrNumber;
value = "hello";
value = 123;

type Theme = "light" | "dark";

let theme: Theme;

function setTheme(t: Theme) {
  theme = t;
}

// Challenge
type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {
  if ("employees" in staff) {
    console.log(
      `${staff.name} is a manager in the ${staff.employees.length} employees`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department`
    );
  }
}

const alice: Employee = { id: 1, name: "alice", department: "Sales" };
const steve: Employee = { id: 2, name: "steve", department: "HR" };

const bob: Manager = { id: 3, name: "bob", employees: [alice, steve] };

printStaffDetails(bob);
printStaffDetails(alice);

// intersection type
type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };

const book1: Book = {
  id: 1,
  name: "how to cook a dragon",
  price: 15,
};
const book2: Book = {
  id: 2,
  name: "secret life of chicken",
  price: 18,
};
const discountedBook: DiscountedBook = {
  id: 3,
  name: "grand tourney",
  price: 25,
  discount: 0.15,
};

// computed property in type
const propName = "age";
type Animal = {
  [propName]: number;
};

let tiger: Animal = { [propName]: 5 };
