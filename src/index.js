var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var myObj = {
    key1: 42,
    key2: 'значення',
    key3: 10,
};
var Obj = {
    func1: function (x, y) { return x + y; },
    func2: function (str) { return "Hello, ".concat(str); },
};
var result1 = Obj.func1(2, 3);
var result2 = Obj.func2('world');
var myArrayLikeObject = {
    0: 'First element. ',
    1: 'Second, element.',
    2: '3rd element.',
    length: 3,
};
console.log(myArrayLikeObject[0]);
console.log(myArrayLikeObject.length);
var myObject = {
    name: 'John',
    age: 30,
    address: '123 Main St',
};
console.log(myObject.name);
console.log(myObject.age);
console.log(myObject.address);
var obj1 = {
    name: 'John',
    age: 30,
};
var obj2 = __assign(__assign({}, obj1), { specificProperty: 'Hello', anotherProperty: 42 });
console.log(obj2.name);
console.log(obj2.specificProperty);
console.log(obj2.anotherProperty);
///////////////////////////////////////////////////////////////////////////////////////////
// Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє,
//  чи відповідають значення певних ключів певним критеріям(наприклад,
//  чи всі значення є числами).
///////////////////////////////////////////////////////////////////////////////////////////
var checkValues = function (obj) {
    var keysToCheck = Object.keys(obj);
    return keysToCheck.every(function (key) { return typeof obj[key] === 'number'; });
};
var myObject6 = {
    key1: 42,
    key2: 10,
    key3: 'не число',
};
var result = checkValues(myObject6);
console.log(result);
