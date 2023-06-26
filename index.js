const fs = require('fs');
const inquirer = require('inquirer');


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
  .then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;
    const logoPath = 'logo.svg';

    let shapeInstance;

    switch (shape) {
      case 'Triangle':
        shapeInstance = new Triangle();
        break;
      case 'Circle':
        shapeInstance = new Circle();
        break;
      case 'Square':
        shapeInstance = new Square();
        break;
      default:
        shapeInstance = new Square();
    }

    shapeInstance.setColor(shapeColor);
  });

