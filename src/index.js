var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Створіть класи Circle, Rectangle, Square і Triangle.
// У кожного з них є загальнодоступний метод calculateArea.
// У кожної фігури є загальнодоступні властивості - колір і назва,
// які не можна змінювати після створення.
// У Square і Rectangle зі свого боку є ще додатковий метод print,
// який виводить рядок із формулою розрахунку площі
/////////////////////////////////
var Shape = /** @class */ (function () {
    function Shape(name, color) {
        this.name = name;
        this.color = color;
    }
    Shape.prototype.calculateArea = function () {
        return 0;
    };
    Shape.prototype.print = function () {
        console.log("Area of ".concat(this.name, " (Color: ").concat(this.color, "): ").concat(this.calculateArea()));
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(name, color, radius) {
        var _this = _super.call(this, name, color) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(name, color, width, height) {
        var _this = _super.call(this, name, color) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(name, color, sideLength) {
        return _super.call(this, name, color, sideLength, sideLength) || this;
    }
    return Square;
}(Rectangle));
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(name, color, base, height) {
        var _this = _super.call(this, name, color) || this;
        _this.base = base;
        _this.height = height;
        return _this;
    }
    Triangle.prototype.calculateArea = function () {
        return (0.5 * this.base * this.height);
    };
    return Triangle;
}(Shape));
///////////////////////////////////////////////////////////////////////////////////////////
var circle = new Circle("Circle", "Red", 5);
console.log(circle.calculateArea());
var rectangle = new Rectangle("Rectangle", "Blue", 4, 6);
console.log(rectangle.calculateArea());
rectangle.print();
var square = new Square("Square", "Green", 3);
console.log(square.calculateArea());
square.print();
var triangle = new Triangle("Triangle", "Yellow", 4, 8);
console.log(triangle.calculateArea());
