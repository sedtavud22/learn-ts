enum ServerResponseStatus {
  Success = 200,
  Error = 500,
  Test = "Test",
}

Object.values(ServerResponseStatus).forEach((value) => {
  if (typeof value === "number") {
    console.log(value);
  }
});

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,

    // work because of reverse mapping
    // result: 200,

    // doesn't work
    // result: "Test",

    data: ["first item", "second item"],
  };
}

const response: ServerResponse = getServerResponse();
console.log(response);

// Challenge
enum UserRole4 {
  Admin,
  Manager,
  Employee,
}

type User4 = {
  id: number;
  name: string;
  role: UserRole4;
  contact: [string, string];
};

function createUser(user: User4): User4 {
  return user;
}

const user: User4 = createUser({
  id: 1,
  name: "john doe",
  role: UserRole4.Admin,
  contact: ["john@gmail.com", "012-345-6789"],
});

// type assertion
let someValue4: any = "this is a string";

let strLength: number = (someValue4 as string).length;

type Bird = {
  name: string;
};

let birdString = '{"name":"Eagle"}';
let dogString = '{"breed":"Poodle"}';

let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

let bird = birdObject as Bird;
let dog = dogObject as Bird; // undefined

enum Status {
  Pending = "pending",
  Declined = "declined",
}

type Userr = {
  name: string;
  status: Status;
};

// save Status.Pending in the DB as a string
// retrieve string from the DB

const statusValue = "pending";

// if not assert == typescript doesn't know it is string
const userr: Userr = { name: "john", status: statusValue as Status };
