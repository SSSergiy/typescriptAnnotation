//---------------------------------------------------------------------------//
// Створіть інтерфейс, який описує структуру об'єкта, що представляє калькулятор.
// Калькулятор повинен мати методи для виконання арифметичних операцій:
// додавання, віднімання, множення та ділення.Потім створіть функцію calculate, 
//яка приймає об'єкт цього типу та виконує операцію і повертає результат.
//---------------------------------------------------------------------------//
interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
  multiply(a: number, b: number): number;
  divide(a: number, b: number): number;
  [key: string]: (a: number, b: number) => number; 
}

const calculator: Calculator = {
  add: (a, b): number => a + b,
  subtract: (a, b): number => a - b,
  multiply: (a, b): number => a * b,
  divide: (a, b): number => {
    if (b === 0) {
      throw new Error("Division by zero is impossible");
    }
    return a / b;
  },
};

const calculate = (calculator: Calculator, operation: string, num1: number, num2: number): number => {
  if (!calculator[operation]) {
    throw new Error("Unknown operation");
  }
  return calculator[operation](num1, num2);
}

//---------------------------------------------------------------------------//
// Уявіть, що ви створюєте інтерфейси для веб - сервісу,
// який надає інформацію про книги.Створіть інтерфейси Book,
// Author, і BookService, які описують структуру даних книжок,
// авторів і методи веб - сервісу для отримання інформації про книжки та авторів.
// Потім створіть об'єкт bookService, який імітує роботу веб-сервісу,
// і використовуйте інтерфейси для отримання інформації про книги та авторів.
//---------------------------------------------------------------------------//

interface Book {
  id: number;
  title: string;
  authorId: number;
  publicationYear: number;
}

interface Author {
  id: number;
  name: string;
  birthYear: number;
}

interface BookService {
  getBookById(id: number): Book | undefined;
  getBooksByTitle(title: string): Book[];
  getBooksByPublicationYear(year: number): Book[];
  getBooksByAuthor(authorId: number): Book[];
  getBooksPublishedAfterYear(year: number): Book[];
  getBooksPublishedBeforeYear(year: number): Book[];
  getBooksByAuthorAndTitle(authorId: number, title: string): Book[];
  getAllAuthors(): Author[];
}

const books: Book[] = [
  { id: 1, title: 'Book 1', authorId: 1, publicationYear: 2020 },
  { id: 2, title: 'Book 2', authorId: 2, publicationYear: 2018 },
  { id: 3, title: 'Book 3', authorId: 1, publicationYear: 2022 },
];

const authors: Author[] = [
  { id: 1, name: 'book author 1', birthYear: 1980 },
  { id: 2, name: 'book author 2', birthYear: 1990 },
];

const bookService: BookService = {
  getBookById(id: number): Book | undefined {
    return books.find(book => book.id === id);
  },
  getBooksByTitle(title: string): Book[] {
    return books.filter(book => book.title === title);
  },
  getBooksByPublicationYear(year: number): Book[] {
    return books.filter(book => book.publicationYear === year);
  },
  getBooksByAuthor(authorId: number): Book[] {
    return books.filter(book => book.authorId === authorId);
  },
  getBooksPublishedAfterYear(year: number): Book[] {
    return books.filter(book => book.publicationYear > year);
  },
  getBooksPublishedBeforeYear(year: number): Book[] {
    return books.filter(book => book.publicationYear < year);
  },
  getBooksByAuthorAndTitle(authorId: number, title: string): Book[] {
    return books.filter(book => book.authorId === authorId && book.title === title);
  },
  getAllAuthors(): Author[] {
    return authors;
  },
};

const bookId = 1;
const book = bookService.getBookById(bookId);
const author = bookService.getAllAuthors().find(author => author.id === (book?.authorId ?? -1));

console.log(`Book title: ${book?.title ?? 'Not found'}`);
console.log(`Author: ${author?.name ?? 'Not found'}`);

const authorId = 1;
const booksByAuthor = bookService.getBooksByAuthor(authorId);
console.log(`Book by author with this ID ${authorId}:`);
booksByAuthor.forEach(book => {
  console.log(`- ${book.title}`);
});

const bookTitle = 'Book 1';
const booksByTitle = bookService.getBooksByTitle(bookTitle);
console.log(`Books with this title "${bookTitle}":`);
booksByTitle.forEach(book => {
  console.log(`- ${book.title}`);
});

const publicationYear = 2020;
const booksByPublicationYear = bookService.getBooksByPublicationYear(publicationYear);
console.log(`Books published in ${publicationYear} :`);
booksByPublicationYear.forEach(book => {
  console.log(`- ${book.title}`);
});

