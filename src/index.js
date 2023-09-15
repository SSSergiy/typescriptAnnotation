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
//------------------------------------------------------------------------------------//
// Напишіть функцію isString, яка перевірятиме, чи є передане значення рядком.
//  Потім використовуйте її для звуження типу змінної.
//------------------------------------------------------------------------------------//
var isString = function (value) {
    return typeof value === "string";
};
//------------------------------------------------------------------------------------//
// У вас є масив з елементами різних типів. 
// Напишіть функцію, яка приймає цей масив і фільтрує його так,
//    щоб у підсумку в ньому залишилися тільки рядки.
// Використовуйте захисника типу для цього завдання.
//------------------------------------------------------------------------------------//
var filterStrings = function (arr) {
    return arr.filter(function (item) { return isString(item); });
};
//------------------------------------------------------------------------------------//
// У вас є об'єкт, який може містити довільні властивості.
// Напишіть функцію, яка приймає цей об'єкт і повертає значення однієї з властивостей,
//  якщо воно існує і має певний тип.
//------------------------------------------------------------------------------------//
var returnValue = function (data, key, expectedType) {
    if (data[key] && typeof data[key] === expectedType) {
        return data[key];
    }
    else {
        return undefined;
    }
};
//------------------------------------------------------------------------------------//
// Створіть кілька захисників типу, кожен з яких перевіряє певний аспект об'єкта
// (наприклад, наявність певної властивості або її тип).Потім напишіть функцію,
// яка використовує цих захисників у комбінації для звуження типу об'єкта до більш конкретного типу.
//------------------------------------------------------------------------------------//
// Захисник типу для перевірки наявності властивості "name"
var hasNameProperty = function (obj) {
    return "name" in obj;
};
// Захисник типу для перевірки типу властивості "age" як number
var hasValidAgeProperty = function (obj) {
    return typeof obj.age === "number";
};
// Функція, яка використовує захисники типу для звуження типу об'єкта
function processObject(obj) {
    var nameResult = undefined;
    var ageResult = undefined;
    if (hasNameProperty(obj)) {
        nameResult = obj.name;
    }
    if (hasValidAgeProperty(obj)) {
        ageResult = obj.age;
    }
    return { nameResult: nameResult, ageResult: ageResult };
}
//------------------------------------------------------------------------------------//
// У вас є змінна, яка може бути одного з декількох типів(наприклад, рядок або число).
// Напишіть функцію, яка приймає цю змінну і виконує довільні операції,
// специфічні для кожного з типів.
//------------------------------------------------------------------------------------//
var performOperation = function (input) {
    if (typeof input === 'string') {
        return input;
    }
    else if (typeof input === 'number') {
        return input;
    }
    else {
        return input;
    }
};
//------------------------------------------------------------------------------------//
// Створіть захисник типу, який перевірятиме, чи є передане значення функцією.
// Потім напишіть функцію, яка використовує цей гард для звуження типу змінної
// і викликає передану функцію, якщо вона існує.
//------------------------------------------------------------------------------------//
var isFunction = function (value) {
    return typeof value === 'function';
};
var callIfFunction = function (func) {
    if (isFunction(func)) {
        return func();
    }
    else {
        return undefined;
    }
};
//------------------------------------------------------------------------------------//
// Створіть класи з ієрархією успадкування і потім напишіть функцію,
// яка використовує захисник типу для звуження типу об'єктів,
// що базуються на цій ієрархії.
//------------------------------------------------------------------------------------//
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        return "bark";
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.meow = function () {
        return "meow";
    };
    return Cat;
}(Animal));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bird.prototype.fly = function () {
        return "fly";
    };
    return Bird;
}(Animal));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fish.prototype.swim = function () {
        return "swim";
    };
    return Fish;
}(Animal));
var performAction = function (animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else if (animal instanceof Cat) {
        animal.meow();
    }
    else if (animal instanceof Bird) {
        animal.fly();
    }
    else if (animal instanceof Fish) {
        animal.swim();
    }
    else {
        animal.name;
    }
};
