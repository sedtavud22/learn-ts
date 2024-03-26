// type never = cannot assign value to it
// let someValuee: never = 0

type Theme4 = "light" | "dark";

function checkTheme(theme: Theme4): void {
  if (theme === "light") {
    console.log("light theme");
    return;
  }
  if (theme === "dark") {
    console.log("dark theme");
    return;
  }
  theme; // type never because all cases of theme are out
}

enum Color {
  Red,
  Blue,
  Green,
}

function getColorName(color: Color) {
  switch (color) {
    case Color.Red:
      return "Red";
    case Color.Blue:
      return "Blue";
    case Color.Green:
      return "Green";
    default:
      // at build time
      let unexpectedColor: never = color;
      console.log(unexpectedColor);
      // at runtime
      throw new Error(`Unexpected color value: ${color}`);
  }
}
