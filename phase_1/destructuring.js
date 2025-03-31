const numbers = [10, 20, 30, 40, 50];

// Your code here
const [, key1, , key2] = numbers;

console.log(key1, key2);

const student = {
  name: "Alice",
  age: 19,
  grade: "A",
};

// Your code here
const { name, age, } = student;
console.log(name, age);

const user = {
  id: 1,
  profile: {
    name: "CJ",
    details: {
      age: 22,
      city: "Davao",
    },
  },
};

// Your code here

const {
  profile: {
    details: { age, city },
  },
} = user;

console.log(age, city);


const book = {
  title: "JavaScript Basics",
};

const shit = ({ title, year = 2025 }) => {
  console.log(`${title} ${year}`);
};

shit(book);

const dev = { name: 'Cjay', language: 'JavaScript' };

function display( {name, language}) {
  console.log(`${name} codes in ${language}`);
}

display(dev);

const person = {
    firstName: 'CJ',
    lastName: 'Jay',
    age: 22,
    country: 'PH',
    job: 'Dev'
  };
  
  // Your code here
  
const {firstName, lastName, ...rest} = person

console.log(`Full name: ${firstName} ${lastName}`);
console.log(rest);
