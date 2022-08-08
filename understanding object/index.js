//                    BLOCK 1

//  Follow instructions below and write code accordingly.

//  - Create a variable named `character` using `let` assign a value of empty object.
let character={}
//  - Go to this [Arya Stark](https://awoiaf.westeros.org/index.php/Arya_Stark)

//  Re-assign the value of `character` variable to and object with the key `characterName` and value of "Arya"
character.charactername="arya"
// - A variable named `age` is predefined with value 20. Add a new key named `character-age` with the value of `age` variable i.e 20 (don't use the value 20)
character["character-age"]=20;


// - Add a new key `sur name` with the value of the surname of the character i.e "Stark". (Don't remove the space between `sur` and `name`)
character["sur name"]="stark"
// - Add a new key `title` with the value title of the character i.e "Lady of Winterfell"
character.title="lady of winterfell"
// - Add another property named `greet` and value should be a function when called should alert `I am [NAME HERE] and my title is [TITLE HERE]`.
character.greet=function(){alert(`i am ${character.charactername} and my title is ${character.title}`)}
// - Add a new property to the character object named `isFemale` and value will be `true`
character.isFemale="true"
// - Execute the function stored in the greet key of the character object
character.greet()  ///undefined
//  - Change the method `greet` to now alert `She is [NAME HERE] and her title is [TITLE HERE]`.
character.greet=function(){alert(`she is ${character.charactername} and her title is ${character.title}`)}
// - Check by calling `greet` and see if the message changed or not.
character.greet()
//  - Add a new property in the character object `isAdult`. The value will be true if age is greater than 18 or it will be false.
character.isAdult=character["character-age"]>18?true:false;
// - Add a new method (function inside objects are called methods) named `changeIsAdult`. When called should be able to flip the value of `isAdult` from true to false and false to true.
character.changeisAdult=function(){character.isAdult=!character.isAdult?true:false;}
// - Add a new key with the name stored in variable `keyName` defined below i.e `playedBy` (use [] for computed property) and the value of "Maisie Williams"

let keyName = 'playedBy';
character['keyName']="Maisie Williams"
// - Using `alert` alert the value stored in key you added above `keyName` use the variable name to access
alert(character["keyName"])
// - Using the function `console.log` log the value of the key `42`. You don't have to add the key
console.log(character[24])
// - Add a new key named `totalSeasons` with the value of `1 + 2 + 3 + 2`. Use this expression
character.totalseasons=1+2+3+2
// - Access the value of the key `totalSeason` (it should be 8)
console.log(character.totalseasons)



//                       BLOCK 2

// Can you define the key named let, var, true, or const or any other JavaScript keywords in an object. Explain why?
// yes object key takes string in javascript which key name let var ,true and const can takes like string

// Accessing values from object
let keyValue = 'username';
let charactor = {
  username: 'arya',
};
// 1.
console.log(charactor['keyValue']);//undefined
// 2.
console.log(charactor[keyValue]);//arya

// After going through the code above answer the following

// What will be the output of 1 and 2  //undefined//arya

// Why are they different 
// they are difference because we are tring to access of key value which does not exist to first case in second case 
// it is printing because it is accessing through variable which assign to key name

// Can I use . dot notation to access the value (using variable name). Explain reason?
// no we can not access because we are tring to varuable object key
// 
// What is the difference between . dot notation and [] bracket notation. Explain
// . notation can give normal object key but []notation is use when give multiple eord or number

// What are situation where we use dot notation and bracket notation.
// . notation is use when key is normal and [] notation is use when we use multiple  or number


//                      BLOCK 3


// 1. Define a variable named `students` and assign a blank object to it.
let students={}

// 2. Add a key of the value of variable `studentName` in the object created above with the value of your name.
students.studentname="ajay"
// 3. Using `console.log` log the value of `studentName` key from the `students` object
console.log(students.studentname)
// 4. Add a another key of the value of variable `batch` in the object with the value of 16.
students.batch=16;
// 5. Using `console.log` log the value of `batch` key from the `students` object
console.log(students.batch)
// 6. Add another key in the object with the value of the variable `isAdult`. The value of the key should be `true/false`
students.isAdult="true/false"
// 7. Using `console.log` print the value of `isAdult` key from the `students` object
console.log(students.isAdult)
// 8. Add a another key of `42` to the object with a value of `The answer to the meaning of life`.
students["42"]="the answer to the meaning of life"
// 9. Using `console.log` print the value of key `42` from the `students` object
console.log(students["42"])
// 10. Check the length of object named `students`.
console.log(students.length)

// 11. Can you define a key of `let or var` in any object? Reason.
// yes we can define a key of let 0r var because it is considered as string so it can give anything javascript key word


// 12. Delete the `isAdult` property from the object `students`. Also, print the object before or after deleting the property
console.log(students)
delete students.isAdult;
console.log(students)
// 13. Update the value of the key batch in the object `students` and print it using `console.log`
students.batch=18;
console.log(students)