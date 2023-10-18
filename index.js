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

const reverseNumber = (number, reversed = 0) => {
  if (number === 0) {
    return reversed;
  } else {
    reversed = reversed * 10 + (number % 10);
    return reverseNumber(Math.floor(number / 10), reversed);
  }
};

const isNumericPalindrome = (number) => {
  const originalNumber = number;
  const reversedNumber = reverseNumber(number);
  return originalNumber === reversedNumber;
};

const numericPalindrome = (number, steps = 0) => {
  if (isNumericPalindrome(number)) {
    return {
      result: number,
      steps: steps
    };
  } else {
    const reversed = reverseNumber(number);
    return numericPalindrome(number + reversed, steps + 1);
  }
};

console.log(numericPalindrome(96));

/////////////////////////////////////////////////////////////////////////////////
// Напишіть функцію, яка приймає масив унікальних елементів і генерує всі
// можливі перестановки цього масиву.Використовуйте рекурсію для знаходження
// всіх перестановок.Наприклад, якщо вхідний масив[1, 2, 3], функція має
// повернути масив, що містить
// [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [2, 3, 1], [3, 1, 2]і[3, 2, 1].
/////////////////////////////////////////////////////////////////////////////////

const permutations = (array) => {
  if (array.length === 0) {
    return [];
  }
  if (array.length === 1) {
    return [array];
  } else {
    const result = [];
    permuteHelper(array, 0, result);
    return result;
  }
};

const permuteHelper = (array, index, result) => {
  if (index === array.length) {
    return result;
  } else {
    const first = array[index];
    const rest = array.slice(0, index).concat(array.slice(index + 1));
    const subPerms = permutations(rest);
    result = concatHelper(first, subPerms, 0, result);
    return permuteHelper(array, index + 1, result);
  }
};

const concatHelper = (first, subPerms, index, result) => {
  if (index === subPerms.length) {
    return result;
  } else {
    result.push([first].concat(subPerms[index]));
    return concatHelper(first, subPerms, index + 1, result);
  }
};

console.log(permutations([1, 2, 3, 6]));
