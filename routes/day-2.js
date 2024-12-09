const e = require("express");
const express = require("express");
const router = express.Router();
const fs = require("node:fs");
const console = require("node:console");
import("node-fetch");
const app = express();

// Define a route
router.get("/", (req, res) => {
  res.send(
    `<a href="/day-2/part-1">Go to part 1</a><br /><a href="/day-2/part-2">Go to part 2</a>`
  );
});

function shouldBeSafe(lines) {
  const ascending = lines.every((int, i) => i === 0 || int > lines[i - 1]);

  const descending = lines.every((int, i) => i === 0 || int < lines[i - 1]);

  const maxDiffIsThree = lines.every(
    (num, i) => i === 0 || Math.abs(num - lines[i - 1]) <= 3
  );

  if (ascending === descending) return false;
  if (!maxDiffIsThree) return false;

  return true;
}

function shouldBeSafeDampener(lines) {
  let safeSum = 0;

  if (!Array.isArray(lines)) throw new Error("Invalid array");

  lines.forEach((arr) => {
    if (shouldBeSafe(arr)) {
      safeSum++;
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (shouldBeSafe(arr.slice(0, i).concat(arr.slice(i + 1)))) {
        safeSum++;
        return;
      }
    }
  });

  return safeSum;
}

router.get("/part-1", async (req, res) => {
  let array = [];
  await fs.readFile(`${__dirname}/day-2-input.txt`, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      error = err;
      res.send(`<pre>${JSON.stringify(error)}</pre>`);
    } else {
      const lines = data.split("\n").map((line) => line.split(" ").map(Number));

      console.log(shouldBeSafeDampener(lines));

      res.send(
        `<pre>${JSON.stringify(lines)}</pre>${lines.length} ${
          lines.filter(shouldBeSafe).length
        } <br />`
      );
    }
  });
});

module.exports = router;
