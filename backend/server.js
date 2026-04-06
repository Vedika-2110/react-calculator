const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Temporary history (memory)
let history = [];

// Calculate API
app.post("/calculate", (req, res) => {
  const { num1, num2, operator } = req.body;
  let result;

  switch (operator) {
    case "+": result = num1 + num2; break;
    case "-": result = num1 - num2; break;
    case "*": result = num1 * num2; break;
    case "/": result = num2 !== 0 ? num1 / num2 : "Error"; break;
    default: result = "Invalid";
  }

  // Save in memory
  history.push({ num1, num2, operator, result });

  res.json({ result });
});

// Get history
app.get("/history", (req, res) => {
  res.json(history);
});

app.listen(5000, () => console.log("Server running on port 5000"));