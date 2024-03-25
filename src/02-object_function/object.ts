// type annotations for object
let car: { brand: string; year: number } = {
  brand: "toyota",
  year: 2020,
};

car.brand = "ford";

let car1: { brand: string; year: number } = {
  brand: "audi",
  year: 2022,
};

let book = { title: "book", cost: 20 };
let pen = { title: "pen", cost: 10 };
let notebook = { title: "notebook" };

// type annotations for object in array
// readonly = can't change value of that property
// ? == optional
let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];
items[0].cost = 15;
items.push({ title: "pencil" });
