//////////////////////////////////////////////////////////////////////////////////////
// Фільтрація масиву
// Напишіть узагальнену функцію filterArray(array, condition),
//   яка фільтрує масив елементів на основі наданої умови.
//////////////////////////////////////////////////////////////////////////////////////
var filterArray = function (array, condition) {
    return array.filter(function (element) { return condition(element); });
};
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = filterArray(numbers, function (num) { return num % 2 === 0; });
console.log(evenNumbers);
var greaterThanFive = filterArray(numbers, function (num) { return num > 5; });
console.log(greaterThanFive);
//////////////////////////////////////////////////////////////////////////////////////
// Узагальнений стек
// Створіть узагальнений клас Stack, який являє собою стек елементів з методами push,
//   pop і peek.
//////////////////////////////////////////////////////////////////////////////////////
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    return Stack;
}());
var numberStack = new Stack();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log(numberStack.peek());
console.log(numberStack.pop());
//////////////////////////////////////////////////////////////////////////////////////
// Узагальнений словник
// Створіть узагальнений клас Dictionary, який являє собою словник(асоціативний масив)
//  з методами set, get і has.Обмежте ключі тільки валідними типами для об'єкта
//////////////////////////////////////////////////////////////////////////////////////
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.items = {};
    }
    Dictionary.prototype.set = function (key, value) {
        this.items[key] = value;
    };
    Dictionary.prototype.get = function (key) {
        return this.items[key];
    };
    Dictionary.prototype.has = function (key) {
        return key in this.items;
    };
    return Dictionary;
}());
var stringDictionary = new Dictionary();
stringDictionary.set('one', 1);
stringDictionary.set('two', 2);
console.log(stringDictionary.has('one'));
console.log(stringDictionary.has('three'));
console.log(stringDictionary.get('two'));
console.log(stringDictionary.get('four'));
