//           clone


// Write the output with reason
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
// };

// let person2 = person;

// person.firstName = 'Arya';

// console.log(person2.firstName); // arya
// console.log(person.firstName); // arya
// console.log(person.lastName); // Deo
// console.log(person == person2); // true
// console.log(person === person2); // true
// console.log(person.lastName === person2.lastName); // true
/// here person and person2 both are having same addresses.

// Write the output with reason:
// let person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   address: {
//     street: 'North 1st',
//     city: 'San Jose',
//     state: 'CA',
//     country: 'USA',
//   },
// };

// let personTwo = { ...person };

// person.firstName = 'Arya';
// person.city = 'Navada';

// console.log(personTwo.firstName); // john
// console.log(person.firstName); // 'arya
// console.log(personTwo.lastName); // Deo
// console.log(person.firstName === personTwo.firstName); // false
// console.log(person == personTwo); // false
// console.log(person === personTwo); // false
// console.log(person.address === personTwo.address); // true
// console.log(person.address == personTwo.address); // true
// console.log(personTwo.address.city); // san jose
// console.log(person.address.city); // san jose
// console.log(person.address.city == personTwo.address.city); // true

// Write the output with reason:
let person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'North 1st',
    city: 'San Jose',
    state: 'CA',
    country: 'USA',
  },
};

let personTwo = { ...person ,address:{...person.address}};
console.log(personTwo)
person.firstName = 'Arya';
person.city = 'Navada';

console.log(personTwo.firstName); //john 
console.log(person.firstName); // arya
console.log(personTwo.lastName); // doe
console.log(person.firstName === personTwo.firstName); //false
console.log(person == personTwo); //false
console.log(person === personTwo); // false
console.log(person.address === personTwo.address); // true
console.log(person.address == personTwo.address); // true
console.log(personTwo.address.city); // san jose
console.log(person.address.city); // 
console.log(person.address.city == personTwo.address.city); // true

// Clone the blogs variable into a new variable named clonedBlogs
let blogs = [
  {
    id: 1,
    title: 'Post #1',
    body: 'My first blog post',
  },
  {
    id: 2,
    title: 'Post #2',
    body: 'My second blog post',
  },
  {
    id: 3,
    title: 'Post #3',
    body: 'My third blog post',
  },
];

// Your code goes here
let clonedBlogs=[{...blogs[0]},{...blogs[1]},{...blogs[2]}]
console.log(clonedBlogs)
// Clone the question variable into a new variable named questionClone
var questions = [
  {
    prompt: 'Why is the sky blue?',
    responses: [
      'Because the color blue was on sale at Wallmart',
      'Because blue is the prettiest color',
      'Because the air molecules difract blue light more than any other color',
    ],
  },
  {
    prompt: 'Why are leaves usually green?',
    responses: [
      'So green caterpillars can hide better.',
      'Because leaves can more easily make energy with green light',
      "Because leaves absorb red and blue light so it's green that is reflected",
    ],
  },
];

// Your code goes here
let questionClone=[{...questions[0],responses:[...questions[0].responses]},{...questions[1],responses:[...questions[1].responses]}]

// Clone the allBlogs variable into a new variable named allBlogsClone
var allBlogs = {
  id: 1,
  title: 'Alamofire JSON Serialization',
  body: 'All about serialization in Alamofire...',
  author: {
    id: 1,
    fullName: 'Jeff Potter',
    username: 'jpotts18',
  },
  comments: [
    {
      id: 1,
      body: 'Thanks for the help Jeff, this saved me hours',
    },
    {
      id: 2,
      body: 'Your welcome. I am happy to help!',
    },
  ],
};

// Your code goes here
let allBlogsClone={...allBlogs,author:{...allBlogs.author},comments:[{...allBlogs.comments[0]},{...allBlogs.comments[1]}]};
console.log(allBlogsClone)
// Clone the person variable into a new variable named clonedPerson
// let person = [
//   {
//     input: { name: 'Ryan' },
//     output: { name: 'Ryan' },
//   },
//   {
//     input: { name: { first: 'Ryan', last: 'Haskell-Glatz' } },
//     output: { firstName: 'Ryan', lastName: 'Haskell-Glatz' },
//   },
//   {
//     input: { name: 'Ryan', age: 24 },
//     output: { name: 'Ryan', age: 24 },
//   },
//   {
//     input: {
//       name: { first: 'Ryan', last: 'Haskell-Glatz' },
//       birthday: { year: 1993, month: 'Nov' },
//     },
//     output: {
//       firstName: 'Ryan',
//       lastName: 'Haskell-Glatz',
//       birthdayYear: 1993,
//       birthdayMonth: 'Nov',
//     },
//   },
// ];

// Your code goes here
// let clonedPerson=[...person,{...person.input,name:{...person.input.name},birthday:{...person.input.birthday}},{...person.output}]

// let clonedPerson =JSON.parse(JSON.stringify(person));
// Write a function named cloneObject that accepts an object and returns the clone of the object
function cloneObject(obj) {
  // your code
  let newobj={...obj}
  return newobj;
}

// Run the test below to check your function

let user = {
  name: 'John',
  house: 'Stark',
  sisters: ['Arya', 'Sansa'],
};
let cloned = cloneObject(user);
console.log(cloned)

// let person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   address: {
//     street: 'North 1st',
//     city: 'San Jose',
//     state: 'CA',
//     country: 'USA',
//   },
// };

let clonedPerson = cloneObject(user);

console.log(
  `The user object is ${
    user == cloned ? `not clone` : `cloned successfully 😁👑`
  }`
);
// console.log(
//   `The person object is ${
// //     person == clonedPerson ? `not clone` : `cloned successfully 😁👑`
// //   }`
// // );