///////////////////////////////////////////////////////////////////////////////
// Вам потрібно створити тип DeepReadonly який буде робити доступними
//  тільки для читання навіть властивості вкладених обʼєктів.
///////////////////////////////////////////////////////////////////////////////
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

interface Person {
  name: string;
  address: {
    city: string;
    street: string;
    buildings: {
      company: {
        name: string;
        price: string;
        privateCompany: {
          name: string;
        };
        publicCompany: {
          name: string;
          count: number;
        };
      };
    };
  };
}

const person: DeepReadonly<Person> = {
  name: 'John',
  address: {
    city: 'New York',
    street: '123 Main St',
    buildings: {
      company: {
        name: 'Amanda',
        price: 'string',
        privateCompany: {
          name: 'string',
        },
        publicCompany: {
          name: 'string',
          count: 8,
        },
      },
    },
  },
};
///////////////////////////////////////////////////////////////////////////////
// Вам потрібно створити тип DeepRequireReadonly який буде робити
// доступними тільки для читання навіть властивості вкладених
//  обʼєктів та ще й робити їх обовʼязковими.
///////////////////////////////////////////////////////////////////////////////
type DeepRequireReadonly<T> = {
  readonly [K in keyof T]-?: T[K] extends object ? DeepRequireReadonly<T[K]> : T[K];
};

interface User {
  name: string;
  address: {
    city: string;
    street: string;
    buildings: {
      company: {
        name: string;
        price: string;
        privateCompany: {
          name: string;
        };
        publicCompany: {
          name: string;
          count: number;
        };
      };
    };
  };
}

const user: DeepReadonly<User> = {
  name: 'John',
  address: {
    city: 'New York',
    street: '123 Main St',
    buildings: {
      company: {
        name: 'Amanda',
        price: 'string',
        privateCompany: {
          name: 'string',
        },
        publicCompany: {
          name: 'string',
          count: 8,
        },
      },
    },
  },
};
///////////////////////////////////////////////////////////////////////////////
// Вам потрібно сворити тип UpperCaseKeys,
//   який буде приводити всі ключи до верхнього регістру.
///////////////////////////////////////////////////////////////////////////////
type UpperCaseKeys<T> = {
  [K in Extract<keyof T, string> as Uppercase<K>]: T[K];
};

interface Streamer {
  name: string;
  age: number;
  address: string;
}

const streamer: UpperCaseKeys<Streamer> = {
  NAME: 'Angelina',
  AGE: 33,
  ADDRESS: '14/78 Main Street',
};
console.log(streamer.NAME);
// type UpperCaseKeys<T> = {
//   [K in keyof T as Uppercase<string & Extract<K, string>>]: T[K] extends object ? UpperCaseKeys<T[K]> : T[K];
// };

// interface Streamer {
//   name: string;
//   age: number;
//   address: {
//     city: string;
//     street: string;
//   };
// }

// const streamer: UpperCaseKeys<Streamer> = {
//   NAME: 'John',
//   AGE: 30,
//   ADDRESS: {
//     CITY: 'New York',
//     STREET: '123 Main St',
//   },
// };
///////////////////////////////////////////////////////////////////////////////
// І саме цікаве. Створіть тип ObjectToPropertyDescriptor,
// який перетворює звичайний обʼєкт на обʼєкт де кожне value є дескриптором.
///////////////////////////////////////////////////////////////////////////////
type ObjectToPropertyDescriptor<T> = {
  [K in keyof T]: PropertyDescriptor;
};

const obj = {
  name: 'John',
  age: 30,
};

const descriptors: ObjectToPropertyDescriptor<typeof obj> = {
  name: {
    value: obj.name,
    writable: true,
    enumerable: true,
    configurable: true,
  },
  age: {
    value: obj.age,
    writable: true,
    enumerable: true,
    configurable: true,
  },
};
