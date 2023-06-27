//Setting clasess for each shape
//Parameters will count for testing

class Shape {
    constructor(color) {
      this.color = color || "";
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150,18 244,182 56,182" width="300" height="200" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" width="300" height="200" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="60" y="60" width="300" height="200" fill="${this.color}" />`;
    }
  }
  
  module.exports = {Shape, Triangle, Circle, Square};
  