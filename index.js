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

// place your code here, replacing the functions you want to test

const gridSize = () => {return;};
const totalCells = grid => {return;};
const lightCell = cell => {return;};
const isRock = cell => {return;};
const isCurrent = cell => {return;};
const lightRow = row => {return;};
const lightColumn = column => {return;};
const isSafe = cell => {return;};
const allRocks = () => {return;};
const allCurrents = () => {return;};
const firstRock = () => {return;};
const firstCurrent = () => {return;};
const isDangerous = cell => {return;};
const distressBeacon = cell => {return;};
const percentageReport = () => {return;};
const safetyReport = () => {return;}
const calcDistance = (start, end) => {return;}

// end place your code here

module.exports = {
  // export the functions you want tested
  gridSize,
  totalCells,
  lightCell,
  isRock,
  isCurrent,
  lightRow,
  lightColumn,
  isSafe,
  allRocks,
  allCurrents,
  firstRock,
  firstCurrent,
  isDangerous,
  distressBeacon,
  percentageReport,
  safetyReport,
  calcDistance
}