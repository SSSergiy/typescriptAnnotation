// Створіть класи Circle, Rectangle, Square і Triangle.
// У кожного з них є загальнодоступний метод calculateArea.
// У кожної фігури є загальнодоступні властивості - колір і назва,
// які не можна змінювати після створення.
// У Square і Rectangle зі свого боку є ще додатковий метод print,
// який виводить рядок із формулою розрахунку площі
/////////////////////////////////
class Shape {
  protected readonly name: string;
  protected readonly color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }

  calculateArea(): number {
    return 0; 
  }

  print(): void {
    console.log(`Area of ${this.name} (Color: ${this.color}): ${this.calculateArea()}`);
  }
}

class Circle extends Shape {
  private readonly radius: number;

  constructor(name: string, color: string, radius: number) {
    super(name, color);
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  private readonly width: number;
  private readonly height: number;

  constructor(name: string, color: string, width: number, height: number) {
    super(name, color);
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(name: string, color: string, sideLength: number) {
    super(name, color, sideLength, sideLength);
  }
}

class Triangle extends Shape {
  private readonly base: number;
  private readonly height: number;

  constructor(name: string, color: string, base: number, height: number) {
    super(name, color);
    this.base = base;
    this.height = height;
  }

  calculateArea(): number {
    return (0.5 * this.base * this.height);
  }
}

///////////////////////////////////////////////////////////////////////////////////////////

const circle = new Circle("Circle", "Red", 5);
console.log(circle.calculateArea());

const rectangle = new Rectangle("Rectangle", "Blue", 4, 6);
console.log(rectangle.calculateArea());
rectangle.print();

const square = new Square("Square", "Green", 3);
console.log(square.calculateArea());
square.print();

const triangle = new Triangle("Triangle", "Yellow", 4, 8);
console.log(triangle.calculateArea());