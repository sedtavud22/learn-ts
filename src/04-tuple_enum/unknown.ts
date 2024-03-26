// unknown type
let unknownValue4: unknown;

unknownValue4 = "hello world";
unknownValue4 = [1, 2, 3];
unknownValue4 = 42.33455;

if (typeof unknownValue4 === "number") {
  unknownValue4.toFixed(2);
}

function runSomeCode() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error("there was error...");
  } else {
    throw "some error";
  }
}

try {
  runSomeCode();
} catch (error) {
  // error type == unknown then error.message = ts error
  // console.log(error.message);

  if (error instanceof Error) {
    console.log(error.message); // "there was error..."
  } else {
    console.log(error); // "some error"
  }
}
