//Dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

//Questions for user prompts
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
      message: 'Enter the hexadecimal number or the color for the logo text:',
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
      message: 'Enter the hexadecimal number or the color for the shape:',
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

    //Image rendering
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${shapeInstance.render()}
    <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="48">${text}</text>
  </svg>`;

  //File is written on parent repository
    fs.writeFile(logoPath, svg, (err) => {
      if (err) {
        console.error('Error occurred while generating the logo:', err);
      } else {
        console.log(`Generated ${logoPath}`);
      }
    });
  })
  .catch((error) => {
    console.error('Error occurred while prompting for input:', error);
  });
