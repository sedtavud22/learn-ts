let person4: [string, number] = ["john", 25];

let date4: readonly [number, number, number] = [12, 17, 2001];

// date4.push(34); // no error if no readonly

function getPerson4(): [string, number] {
  return ["john", 25];
}

let randomPerson4 = getPerson4();

let susan4: [string, number?] = ["susan4"];
