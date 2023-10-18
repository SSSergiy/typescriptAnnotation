/////////////////////////////////////////////////////////////////////////////////
// Попрацюємо з числовим паліндромом.Числовий паліндром — це натуральне число,
// яке читається зліва направо і справа наліво однаково.Інакше кажучи,
// відрізняється симетрією запису(розташування цифр), причому число
// знаків може бути як парним, так і непарним.Але.Паліндром можна отримати як
// результат операцій над іншими числами.Візьмемо будь - яке натуральне число і
// складемо його зі зворотним числом, тобто записаним тими самими цифрами, але
// у зворотному порядку.Проробимо ту саму дію з сумою, що вийшла, і будемо
// повторювати її доти, доки не утвориться паліндром.Іноді достатньо зробити
// всього один крок(наприклад, 312 + 213 = 525), але, як правило, потрібно
// неменше двох.Скажімо, число 96 породжує паліндром 4884 тільки на четвертому
//  кроці.... Вам потрібно написати функцію, яка повертатиме об'єкт, де буде
//   властивістьresultі це буде паліндром, і властивістьsteps— це число викликів
// 	 до знаходження паліндрома.Для того, щоб перевірити себе використовуйте
// 	 число 196. Це так зване Lychrel number — число яке немає поліндрому
/////////////////////////////////////////////////////////////////////////////////
var isNumericPalindrome = (number) => {
  var originalNumber = number;
  var reversedNumber = 0;

  while (number > 0) {
    reversedNumber = reversedNumber * 10 + (number % 10);
    number = Math.floor(number / 10);
  }

  return originalNumber === reversedNumber;
};

var reverseNumber = (num) => {
  var reversed = 0;
  while (num > 0) {
    var lastDigit = num % 10;
    reversed = reversed * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  return reversed;
};

var numericPalindrome = (number) => {
  var steps = 0;

  while (!isNumericPalindrome(number)) {
    var reversingNumber = reverseNumber(number);
    number += reversingNumber;
    steps++;
  }

  return {
    result: number,
    steps: steps
  };
};
console.log(numericPalindrome(96));
/////////////////////////////////////////////////////////////////////////////////
// Напишіть функцію, яка приймає масив унікальних елементів і генерує всі
// можливі перестановки цього масиву.Використовуйте рекурсію для знаходження
// всіх перестановок.Наприклад, якщо вхідний масив[1, 2, 3], функція має
// повернути масив, що містить
// [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [2, 3, 1], [3, 1, 2]і[3, 2, 1].
/////////////////////////////////////////////////////////////////////////////////

function getPermutations(arr) {
  if (arr.length === 0) return [[]];
  if (arr.length === 1) return [arr];

  const permutations = [];

  arr.forEach((element, index) => {
    const rest = [...arr.slice(0, index), ...arr.slice(index + 1)];
    const partialPermutations = getPermutations(rest);

    partialPermutations.forEach((perm) => {
      permutations.push([element, ...perm]);
    });
  });

  return permutations;
}

const inputArray = [1, 2, 3, 6];
const result = getPermutations(inputArray);

console.log(result);
