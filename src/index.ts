//------------------------------------------------------------------------------------//
// Напишіть функцію isString, яка перевірятиме, чи є передане значення рядком.
//  Потім використовуйте її для звуження типу змінної.
//------------------------------------------------------------------------------------//
const isString = (value: any): value is string => {
   return  typeof value === "string"
}
//------------------------------------------------------------------------------------//
// У вас є масив з елементами різних типів. 
// Напишіть функцію, яка приймає цей масив і фільтрує його так,
//    щоб у підсумку в ньому залишилися тільки рядки.
// Використовуйте захисника типу для цього завдання.
//------------------------------------------------------------------------------------//
const filterStrings = (arr: any[]): string[] => {
   return arr.filter(
      (item): item is string => isString(item)
      )
}
//------------------------------------------------------------------------------------//
// У вас є об'єкт, який може містити довільні властивості.
// Напишіть функцію, яка приймає цей об'єкт і повертає значення однієї з властивостей,
//  якщо воно існує і має певний тип.
//------------------------------------------------------------------------------------//
const returnValue = (data: any, key: string, expectedType: string): any | undefined  => {
   if (data[key] && typeof data[key] === expectedType) {
      return data[key]
   } else {
      return undefined
   }
}
//------------------------------------------------------------------------------------//
// Створіть кілька захисників типу, кожен з яких перевіряє певний аспект об'єкта
// (наприклад, наявність певної властивості або її тип).Потім напишіть функцію,
// яка використовує цих захисників у комбінації для звуження типу об'єкта до більш конкретного типу.
//------------------------------------------------------------------------------------//
// Захисник типу для перевірки наявності властивості "name"
const  hasNameProperty = (obj: any): obj is { name: string }=> {
   return "name" in obj;
 }
 
 // Захисник типу для перевірки типу властивості "age" як number
 const hasValidAgeProperty = (obj: any): obj is { age: number } =>{
   return typeof obj.age === "number";
 }
 interface AgeResult {
   nameResult: string | undefined;
   ageResult: number | undefined;
 }
 // Функція, яка використовує захисники типу для звуження типу об'єкта
 function processObject(obj: any):AgeResult {
   let nameResult: string | undefined = undefined;
   let ageResult: number | undefined = undefined;
   if (hasNameProperty(obj)) {
     nameResult = obj.name;
   }
   if (hasValidAgeProperty(obj)) {
     ageResult = obj.age;
   }
   return { nameResult, ageResult };
 }
//------------------------------------------------------------------------------------//
// У вас є змінна, яка може бути одного з декількох типів(наприклад, рядок або число).
// Напишіть функцію, яка приймає цю змінну і виконує довільні операції,
// специфічні для кожного з типів.
//------------------------------------------------------------------------------------//
const performOperation = (input: string | number): string | number | never => {
   if (typeof input === 'string') {
     return input
   } else if (typeof input === 'number') {
      return input
   } else {
      return input
   }
}
//------------------------------------------------------------------------------------//
// Створіть захисник типу, який перевірятиме, чи є передане значення функцією.
// Потім напишіть функцію, яка використовує цей гард для звуження типу змінної
// і викликає передану функцію, якщо вона існує.
//------------------------------------------------------------------------------------//
const isFunction = (value: any): value is Function =>{
   return typeof value === 'function';
 }
 
 const callIfFunction=(func: any): Function | undefined=> {
   if (isFunction(func)) {
      return  func(); 
   } else {
     
      return undefined
   }
 }
//------------------------------------------------------------------------------------//
// Створіть класи з ієрархією успадкування і потім напишіть функцію,
// яка використовує захисник типу для звуження типу об'єктів,
// що базуються на цій ієрархії.
//------------------------------------------------------------------------------------//
class Animal {
   name: string;
 
   constructor(name: string) {
     this.name = name;
   }
 }
 
 class Dog extends Animal {
   bark(): string  {
      return `bark`
   }
 }
 
 class Cat extends Animal {
   meow(): string  {
      return `meow`
   }
 }
 
 class Bird extends Animal {
   fly(): string  {
      return `fly`
   }
 }
 
 class Fish extends Animal {
   swim(): string {
     return `swim`;
   }
 }
 
 const performAction = (animal: Animal): void => {
   if (animal instanceof Dog) {
     animal.bark(); 
   } else if (animal instanceof Cat) {
     animal.meow(); 
   } else if (animal instanceof Bird) {
     animal.fly(); 
   } else if (animal instanceof Fish) {
     animal.swim(); 
   } else {
      animal.name
   }
 }