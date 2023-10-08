///////////////////////////////////////////////////////////////////////////////
// Вам потрібно створити умовний тип, що служить для встановлення типу,
//   що повертається з функції.
//   Як параметр типу повинен обов'язково виступати функціональний тип.
///////////////////////////////////////////////////////////////////////////////
type FunctionReturnType<T> = T extends (...args: infer Args) => infer R ? R : never;

const add: (a: number, b: number) => number = (a, b) => {
  return a + b;
};

const result: FunctionReturnType<typeof add> = add(1, 2);

console.log(result);

///////////////////////////////////////////////////////////////////////////////
// Вам потрібно створити умовний тип, який приймає функціональний тип з одним
// параметром(або задовільним) та повертає кортеж, де перше значення - це тип,
//   що функція повертає, а другий - тип її параметру
///////////////////////////////////////////////////////////////////////////////
type FunctionInfo<T> = T extends (...args: infer ArgType) => infer ReturnType ? [ReturnType, ArgType] : never;

const parameters = (a: number, b: number): number => {
  return a + b;
};

const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

type AddInfo = FunctionInfo<typeof parameters>;
type GreetInfo = FunctionInfo<typeof greet>;
