const inquirer = require("inquirer");

const users = [
  {
    id: 1,
    name: "Jack",
  },
  {
    id: 2,
    name: "Mandisa",
  },

  {
    id: 3,
    name: "Jessica",
  },

  {
    id: 4,
    name: "Matt",
  },
];

inquirer
  .prompt({
    type: "list",
    message: "Choose a user:",
    name: "user",
    choices: users.map(u => {
      return {
        name: u.name,
        value: u.id
      }
    }),
  })
  .then((answers) => {
    console.log(`You chose ${answers.user}`);
  });
