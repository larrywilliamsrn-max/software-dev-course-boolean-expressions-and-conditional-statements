/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasSword = true;
const hasCompass = true;

console.log("You wake up in a dark forest. Two paths lie ahead.");
console.log("You can use your torch, map, sword, and compass to guide your journey.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains") {
  if (hasTorch && hasCompass) {
    console.log("The torch and compass guide you safely through the mountain pass.");
  } else if (hasTorch || hasCompass) {
    console.log("You move forward, but the path is risky and you nearly lose your way.");
  } else {
    console.log("It is too dark to continue. You turn back.");
  }
} else if (choice === "village") {
  if (hasMap || hasCompass) {
    console.log("Your supplies help you find the village without getting lost.");
  } else if (!hasMap && !hasCompass) {
    console.log("You wander aimlessly and never reach the village.");
  } else {
    console.log("You reach a small roadside camp, but the path remains uncertain.");
  }
} else {
  console.log("You hesitate too long and the forest swallows the moment.");
}

/*

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/