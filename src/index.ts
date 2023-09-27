////////////////////////////////////////////////////////////////////////////////////////////
// Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання.
// Наприклад, тип значення для кожного ключа може бути число | рядок.
///////////////////////////////////////////////////////////////////////////////////////////
interface MyObject {
  [key: string]: number | string;
}

const myObj: MyObject = {
  key1: 42,
  key2: 'значення',
  key3: 10,
};
///////////////////////////////////////////////////////////////////////////////////////////
// Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями.
// Ключами можуть бути рядки, а значеннями — функції, які приймають будь - які аргументи.
///////////////////////////////////////////////////////////////////////////////////////////

interface MyInterface {
  [key: string]: (...args: any[]) => any;
}

const Obj: MyInterface = {
  func1: (x: number, y: number): number => x + y,
  func2: (str: string): string => `Hello, ${str}`,
};

const result1 = Obj.func1(2, 3);
const result2 = Obj.func2('world');

///////////////////////////////////////////////////////////////////////////////////////////
// Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта,
//  подібного до масиву.Ключі повинні бути числами, а значення - певного типу.
///////////////////////////////////////////////////////////////////////////////////////////

interface ArrayLikeObject {
  [index: number]: any;
  length: number;
}

const myArrayLikeObject: ArrayLikeObject = {
  0: 'First element. ',
  1: 'Second, element.',
  2: '3rd element.',
  length: 3,
};

console.log(myArrayLikeObject[0]);
console.log(myArrayLikeObject.length);
///////////////////////////////////////////////////////////////////////////////////////////
// Створіть інтерфейс з певними властивостями та індексною сигнатурою.
// Наприклад, ви можете мати властивості типу name: string та індексну
// сигнатуру для додаткових динамічних властивостей.
///////////////////////////////////////////////////////////////////////////////////////////

interface MyInterface4 {
  name: string;
  [key: string]: any;
}

const myObject: MyInterface4 = {
  name: 'John',
  age: 30,
  address: '123 Main St',
};

console.log(myObject.name);
console.log(myObject.age);
console.log(myObject.address);

///////////////////////////////////////////////////////////////////////////////////////////
// Створіть два інтерфейси, один з індексною сигнатурою,
//   а інший розширює перший, додаючи специфічні властивості.
///////////////////////////////////////////////////////////////////////////////////////////

interface BaseInterface {
  [key: string]: any;
}

interface ExtendedInterface extends BaseInterface {
  specificProperty: string;
  anotherProperty: number;
}

const obj1: BaseInterface = {
  name: 'John',
  age: 30,
};

const obj2: ExtendedInterface = {
  ...obj1,
  specificProperty: 'Hello',
  anotherProperty: 42,
};

console.log(obj2.name);
console.log(obj2.specificProperty);
console.log(obj2.anotherProperty);

///////////////////////////////////////////////////////////////////////////////////////////
// Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє,
//  чи відповідають значення певних ключів певним критеріям(наприклад,
//  чи всі значення є числами).
///////////////////////////////////////////////////////////////////////////////////////////

const checkValues = (obj: { [key: string]: any }): boolean => {
  const keysToCheck = Object.keys(obj);
  return keysToCheck.every(key => typeof obj[key] === 'number');
};

const myObject6 = {
  key1: 42,
  key2: 10,
  key3: 'не число',
};

const result = checkValues(myObject6);

console.log(result);
