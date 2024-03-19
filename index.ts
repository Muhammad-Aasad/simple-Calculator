#!nv   /usr/bin/env node

//shibang

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstnumber" },
  { message: "Enter Secound number", type: "number", name: "secoundnumber" },
  {
    message: "select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

console.log(answer);

// conditional Statement

if (answer.operator === "Addition") {
  console.log(answer.firstnumber + answer.secoundnumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstnumber - answer.secoundnumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstnumber * answer.secoundnumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstnumber / answer.secoundnumber);
} else {
  console.log("Please select valid operator");
}
