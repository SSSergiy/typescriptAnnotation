// Створіть класи Circle, Rectangle, Square і Triangle.
// У кожного з них є загальнодоступний метод calculateArea.
// У кожної фігури є загальнодоступні властивості - колір і назва,
// які не можна змінювати після створення.
// У Square і Rectangle зі свого боку є ще додатковий метод print,
// який виводить рядок із формулою розрахунку площі
/////////////////////////////////
enum ShapeName {
  Circle = "Circle",
  Rectangle = "Rectangle",
  Square = "Square",
  Triangle = "Triangle",
}

class Shape {
  constructor(
    public readonly name: ShapeName,
    public readonly color: string
  ) {}

  protected calculateArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  constructor(
    public readonly color: string,
    public readonly radius: number
  ) {
    super(ShapeName.Circle, color);
  }

  public calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(
    public readonly color: string,
    public width: number,
    public height: number
  ) {
    super(ShapeName.Rectangle, color);
  }

  public calculateArea(): number {
    return this.width * this.height;
  }

  public print(): void {
    console.log(`Shape: ${this.name}, Color: ${this.color}`);
    console.log(`Area: ${this.calculateArea()}`);
  }
}

class Square extends Rectangle {
  constructor(
    public readonly color: string,
    public readonly sideLength: number
  ) {
    super(
      color,
      sideLength,
      sideLength
    );
  }

  public print(): void {
    console.log(`Shape: ${this.name}, Color: ${this.color}`);
    console.log(`Area: ${this.calculateArea()}`);
  }
}

class Triangle extends Shape {
  constructor(
    public readonly color: string,
    public base: number,
    public height: number
  ) {
    super(ShapeName.Triangle, color);
  }

  public calculateArea(): number {
    return 0.5 * this.base * this.height;
  }
}

const redCircle = new Circle("Red", 5);
console.log("Circle:");
console.log(`Shape: ${redCircle.name}, Color: ${redCircle.color}`);
console.log(`Area: ${redCircle.calculateArea()}`);

const blueRectangle = new Rectangle("Blue", 4, 6);
console.log("Rectangle:");
blueRectangle.print();

const greenSquare = new Square("Green", 3);
console.log("Square:");
greenSquare.print();

const yellowTriangle = new Triangle("Yellow", 4, 8);
console.log("Triangle:");
console.log(`Shape: ${yellowTriangle.name}, Color: ${yellowTriangle.color}`);
console.log(`Area: ${yellowTriangle.calculateArea()}`);