const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo text:',
      validate: (input) => {
        if (input.length <= 3) {
          return true;
        }
        return 'Please enter up to three characters.';
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the color for the logo text:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape for the logo:',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the color for the shape:',
    },
  ])


