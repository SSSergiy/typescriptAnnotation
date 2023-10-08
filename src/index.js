var person = {
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
var user = {
    name: 'Angelina',
    address: {
        city: 'Odessa',
        street: '57/47 Shevchenka',
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
var streamer = {
    NAME: 'Angelina',
    AGE: 33,
    ADDRESS: '14/78 Main Street',
};
console.log(streamer.NAME);
var obj = {
    name: 'Andriu',
    age: 33,
};
var descriptors = {
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
