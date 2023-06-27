//using require method to call the Shapes.js file
const { Triangle, Circle, Square } = require('./shapes');

//Using built-in describe method for each test suite(Triangle, Square, and Circle)
describe('Triangle', () => {
    test('render method should return the correct SVG string for a triangle', () => {
      const triangle = new Triangle();
      triangle.setColor('blue');
      expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" width="300" height="200" fill="blue" />');
    });
  });
  
  describe('Square', () => {
    test('render method should return the correct SVG string for a square', () => {
      const square = new Square();
      square.setColor('green');
      expect(square.render()).toEqual('<rect x="60" y="60" width="300" height="200" fill="green" />');
    });
  });
  

describe('Circle', () => {
  test('render method should return the correct SVG string for a circle', () => {
    const circle = new Circle();
    circle.setColor('red');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" width="300" height="200" fill="red" />');
  });
});


