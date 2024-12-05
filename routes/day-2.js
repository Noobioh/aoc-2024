const e = require("express");
const express = require("express");
const router = express.Router();
const fs = require("node:fs");
import("node-fetch");
const app = express();

// Define a route
router.get("/", (req, res) => {
  res.send(
    `<a href="/day-2/part-1">Go to part 1</a><br /><a href="/day-2/part-2">Go to part 2</a>`
  );
});

const safeOrUnsafe = (items) => {
  const safeInput = [];

  items.split(" ").forEach((item, index) => {
    const nextItem = parseInt(items[index + 1]);
    const itemInt = parseInt(item);
    if (index === items.length - 1) {
      return;
    }

    if (nextItem > itemInt) {
      if (nextItem - itemInt <= 2) {
        safeInput.push("safe");
      } else if (nextItem - itemInt > 2) {
        safeInput.push("unsafe");
      }
    } else if (nextItem < itemInt) {
      if (itemInt - nextItem <= 3) {
        safeInput.push("safe");
      } else if (itemInt - nextItem > 3) {
        safeInput.push("unsafe");
      }
    } else {
      safeInput.push("unsafe");
    }
  });

  const onlySaveItems = safeInput.filter((item) => item === "safe");

  if (onlySaveItems.length === items.length) {
    return true;
  }

  return false;
};

router.get("/part-1", async (req, res) => {
  let array = [];

  await fs.readFile(`${__dirname}/day-2-input.txt`, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      error = err;
      res.send(`<pre>${JSON.stringify(error)}</pre>`);
    } else {
      const lines = data.split("\n");
      let safeCount = 0;

      lines.forEach((item) => {
        const items = item.split(" ");

        if (safeOrUnsafe(item)) {
          safeCount++;
        }
      });

      res.send(
        `<pre>${JSON.stringify(lines)}</pre>${lines.length} ${safeCount}`
      );
    }
  });
});

router.get("/part-2", (req, res) => {
  res.send("Howdy from day two part 2 :)");
});

module.exports = router;
