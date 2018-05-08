const GRID = [
  ["", "", "", "^", "", "", "", "", "", ""],
  ["", "", "", "", "~", "", "", "", "", ""],
  ["", "", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "^", "~", "~", "", "", "", "^", "", ""],
  ["", "^", "", "~", "~", "", "", "", "", ""],
  ["", "^", "", "", "~", "~", "", "", "", ""],
];

//         A   B   C   D   E   F   G   H   I   J
// +---+---+---+---+---+---+---+---+---+---+
// 1  |   |   |   | ^ |   |   |   |   |   |   |
//    +---+---+---+---+---+---+---+---+---+---+
// 2  |   |   |   |   | ~ |   |   |   |   |   |
//    +---+---+---+---+---+---+---+---+---+---+
// 3  |   |   |   |   | ^ | ^ |   |   |   |   |
//    +---+---+---+---+---+---+---+---+---+---+
// 4  |   |   |   |   | ^ | ^ |   |   |   |   |
//    +---+---+---+---+---+---+---+---+---+---+
// 5  |   |   |   |   |   |   |   |   |   |   |
//    +---+---+---+---+---+---+---+---+---+---+
// 6  |   |   |   |   |   |   |   |   |   |   |
//    +---+---+---+---+---+---+---+---+---+---+
// 7  |   |   |   |   |   |   |   |   |   |   |
//    +---+---+---+---+---+---+---+---+---+---+
// 8  |   | ^ | ~ | ~ |   |   |   | ^ |   |   |
//    +---+---+---+---+---+---+---+---+---+---+
// 9  |   | ^ |   | ~ | ~ |   |   |   |   |   |
//    +---+---+---+---+---+---+---+---+---+---+
// 10 |   | ^ |   |   | ~ | ~ |   |   |   |   |
//    +---+---+---+---+---+---+---+---+---+---+

// place your code here

const gridSize = () => { return; };
const lightCell = () => { return; };
const isSafe = () => { return; };
const isDangerous = () => { return; };
const distressBeacon = () => { return; };
const percentageReport = () => { return; };

// end place your code here

module.exports = {
  // export the functions you want tested
  gridSize,
  lightCell,
  isSafe,
  isDangerous,
  distressBeacon,
  percentageReport
}