const e = require("express");
const express = require("express");
const router = express.Router();
const fs = require("node:fs");
const console = require("node:console");
import("node-fetch");
const app = express();

function regexMul(str) {
  const regex = /mul\(\d+,\d+\)/g;
  const matches = str.match(regex);
  let sum = 0;

  matches.forEach((match) => {
    const nums = match.match(/\d+/g);
    const num1 = parseInt(nums[0]);
    const num2 = parseInt(nums[1]);
    sum += num1 * num2;
  });

  return sum;
}

function regexDoOrDontMul(str) {
  const regex = /(?:don't\(\))|(?:do\(\))|(?:mul\(\d+,\d+\))/g;
  const matches = str.match(regex);
  let sum = 0;
  let enabled = true;

  matches.forEach((match) => {
    if (match === "don't()") {
      enabled = false;
    } else if (match === "do()") {
      enabled = true;
    } else if (enabled && match.startsWith("mul(")) {
      const nums = match.match(/\d+/g);
      const num1 = parseInt(nums[0]);
      const num2 = parseInt(nums[1]);
      sum += num1 * num2;
    }
  });

  return sum;
}

// Define a route
router.get("/", (req, res) => {
  fs.readFile(`${__dirname}/day-3-input.txt`, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      error = err;
      res.send(`<pre>${JSON.stringify(error)}</pre>`);
    } else {
      const partOneResult = regexMul(data);
      const partTwoResult = regexDoOrDontMul(data);
      console.log("Part one: ", partOneResult);
      console.log("Part two: ", partTwoResult);
    }
  });

  res.send(`<h1>Day three</h1>`);
});

router.get("/part-1", async (req, res) => {
  let array = [];
});

module.exports = router;
