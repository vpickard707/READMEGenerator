const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "installation",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  },
  {
    type: "input",
    name: "credits",
    message:
      "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.",
  },

  {
    type: "input",
    name: "usage",
    message:
      "Provide instructions and examples for use. Include screenshots as needed.",
  },
  {
    type: "list",
    name: "license",
    message:
      "The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. The following OSI-approved licenses are popular, widely used, or have strong communities. Apache License 2.0, BSD 3-Clause 'New' or 'Revised' license, BSD 2-Clause 'Simplified' or 'FreeBSD' license",
    choices: [
      "Apache License 2.0",
      "BSD 3-Clause 'New' or 'Revised' license",
      "BSD 2-Clause 'Simplified' or 'FreeBSD' license",
    ],
  },
];

const generateREADME = (answers) =>
  `This is my README file ${answers.installation}`;
//1. Table of Contents (Optional)

// If your README is very long, add a table of contents to make it easy for users to find what they need.

// - [Installation](#installation)
// - [Usage](#usage)
// - [Credits](#credits)
// - [License](#license)
/*## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

// The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)*/

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((input) => {
    console.log(generateREADME(input));
    // console.log(input); (run later)
  });
}

// function call to initialize program
init();
