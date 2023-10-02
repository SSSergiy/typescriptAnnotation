//////////////////////////////////////////////////////////////////////////////////////
// Фільтрація масиву
// Напишіть узагальнену функцію filterArray(array, condition),
//   яка фільтрує масив елементів на основі наданої умови.
//////////////////////////////////////////////////////////////////////////////////////

const filterArray = <T>(array: T[], condition: (element: T) => boolean): T[] =>
  array.filter(element => condition(element));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = filterArray(numbers, num => num % 2 === 0);

console.log(evenNumbers);

const greaterThanFive = filterArray(numbers, num => num > 5);

console.log(greaterThanFive);

//////////////////////////////////////////////////////////////////////////////////////
// Узагальнений стек
// Створіть узагальнений клас Stack, який являє собою стек елементів з методами push,
//   pop і peek.
//////////////////////////////////////////////////////////////////////////////////////

class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
}

const numberStack = new Stack<number>();

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
class Dictionary<K, V> {
  private items: { [key: string]: V } = {};

  set(key: K, value: V): void {
    const stringKey = String(key);
    this.items[stringKey] = value;
  }

  get(key: K): V | undefined {
    const stringKey = String(key);
    return this.items[stringKey];
  }

  has(key: K): boolean {
    const stringKey = String(key);
    return stringKey in this.items;
  }
}

const stringDictionary = new Dictionary<string, number>();

stringDictionary.set('one', 1);
stringDictionary.set('two', 2);

console.log(stringDictionary.has('one'));
console.log(stringDictionary.has('three'));
console.log(stringDictionary.get('two'));
console.log(stringDictionary.get('four'));
