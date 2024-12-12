const e = require("express");
const express = require("express");
const router = express.Router();
const fs = require("node:fs");
const console = require("node:console");
import("node-fetch");
const app = express();

function findHorizontalXmas(str) {
  const count = str.match(/XMAS/g)?.length;

  if (count > 0) {
    return count;
  }

  return 0;
}

function findHorizontalXmasInReverse(str) {
  const count = str.match(/SAMX/g)?.length;

  if (count > 0) {
    return count;
  }

  return 0;
}

function findVerticalXmas(arr) {
  let result = 0;

  arr.forEach((line, lineIndex) => {
    const singleLetters = line.split("");

    singleLetters.forEach((letter, letterIndex) => {
      if (letter === "X") {
        const nextLetter = singleLetters.at(letterIndex + 1);

        if (nextLetter === "M") {
          const nextNextLetter = singleLetters.at(letterIndex + 2);

          if (nextNextLetter === "A") {
            const nextNextNextLetter = singleLetters.at(letterIndex + 3);

            if (nextNextNextLetter === "S") {
              console.log("XMAS");
              result++;
            }
          }
        }
      }
    });
  });
  return result;
}

function findVerticalXmasInReverse(arr) {
  let result = 0;

  arr.forEach((line, lineIndex) => {
    const singleLetters = line.split("");

    singleLetters.forEach((letter, letterIndex) => {
      if (letter === "X") {
        const nextLetter = singleLetters.at(letterIndex - 1);

        if (nextLetter === "M") {
          const nextNextLetter = singleLetters.at(letterIndex - 2);

          if (nextNextLetter === "A") {
            const nextNextNextLetter = singleLetters.at(letterIndex - 3);

            if (nextNextNextLetter === "S") {
              result++;
            }
          }
        }
      }
    });
  });

  return result;
}

function findDiagonalAscXmas(arr) {
  let result = 0;

  arr.forEach((line, lineIndex) => {
    const singleLetters = line.split("");

    singleLetters.forEach((letter, letterIndex) => {
      if (letter === "X") {
        const nextLetter = singleLetters.at(letterIndex + 1);

        if (nextLetter === "M") {
          const nextNextLetter = singleLetters.at(letterIndex + 2);

          if (nextNextLetter === "A") {
            const nextNextNextLetter = singleLetters.at(letterIndex + 3);

            if (nextNextNextLetter === "S") {
              result++;
            }
          }
        }
      }
    });
  });

  return result;
}

function findDiagonalAscXmasInReverse(arr) {
  let result = 0;

  arr.forEach((line, lineIndex) => {
    const singleLetters = line.split("");

    singleLetters.forEach((letter, letterIndex) => {
      if (letter === "X") {
        const nextLetter = singleLetters.at(letterIndex - 1);

        if (nextLetter === "M") {
          const nextNextLetter = singleLetters.at(letterIndex - 2);

          if (nextNextLetter === "A") {
            const nextNextNextLetter = singleLetters.at(letterIndex - 3);

            if (nextNextNextLetter === "S") {
              result++;
            }
          }
        }
      }
    });
  });

  return result;
}

function findDiagonalDescXmas(arr) {
  let result = 0;

  arr.forEach((line, lineIndex) => {
    const singleLetters = line.split("");

    singleLetters.forEach((letter, letterIndex) => {
      if (letter === "X") {
        const nextLetter = singleLetters.at(letterIndex - 1);

        if (nextLetter === "M") {
          const nextNextLetter = singleLetters.at(letterIndex - 2);

          if (nextNextLetter === "A") {
            const nextNextNextLetter = singleLetters.at(letterIndex - 3);

            if (nextNextNextLetter === "S") {
              result++;
            }
          }
        }
      }
    });
  });

  return result;
}

function findDiagonalDescXmasInReverse(arr) {
  let result = 0;

  arr.forEach((line, lineIndex) => {
    const singleLetters = line.split("");

    singleLetters.forEach((letter, letterIndex) => {
      if (letter === "X") {
        const nextLetter = singleLetters.at(letterIndex + 1);

        if (nextLetter === "M") {
          const nextNextLetter = singleLetters.at(letterIndex + 2);

          if (nextNextLetter === "A") {
            const nextNextNextLetter = singleLetters.at(letterIndex + 3);

            if (nextNextNextLetter === "S") {
              result++;
            }
          }
        }
      }
    });
  });

  return result;
}

// function findVerticalXmas()

// Define a route
router.get("/", (req, res) => {
  fs.readFile(`${__dirname}/day-4-input.txt`, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      error = err;
      res.send(`<pre>${JSON.stringify(error)}</pre>`);
    } else {
      const lines = data.split("\n");
      let sum = 0;

      lines.forEach((line) => {
        sum += findHorizontalXmas(line);
        sum += findHorizontalXmasInReverse(line);
      });

      sum += findVerticalXmas(lines);
      sum += findDiagonalAscXmas(lines);
      sum += findDiagonalDescXmas(lines);
      sum += findVerticalXmasInReverse(lines);
      sum += findDiagonalAscXmasInReverse(lines);
      sum += findDiagonalDescXmasInReverse(lines);

      console.log("XMAS count: part 1", sum);
    }
  });

  res.send(`<h1>Day four</h1>`);
});

module.exports = router;
