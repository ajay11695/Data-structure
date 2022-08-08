//                 BLOCK 1

let user = {
    name: 'Arya',
    sibling: ['Robb', 'Ryan', 'John'],
  };
  let allBrothers = ['Robb', 'Ryan', 'John'];
  let brothersCopy = user.sibling;
  let usename = user.name;
  let newUser = user;
//   Memory representation
//   Create the memory representation of the above snippet on notebook.
//   Take a photo/screenshot and add it to the folder code
//   memory_representation
  
//   Answer the following with reason:
  console.log(user == newUser); // true//both are same address
  console.log(user === newUser); // true//both are same address
  console.log(user.name === newUser.name); // true//
  console.log(user.name == newUser.name); // true
  console.log(user.sibling == newUser.sibling); // true
  console.log(user.sibling === newUser.sibling);// true
  console.log(user.sibling == allBrothers);// false//both are not same adddress
  console.log(user.sibling === allBrothers);//false
  console.log(brothersCopy === allBrothers);// false//both are not same address
  console.log( brothersCopy == allBrothers); // false
  console.log(brothersCopy == user.sibling); // true//both are same address
  console.log( brothersCopy === user.sibling);// true
  console.log(brothersCopy[0] === user.sibling[0]);// true
  console.log( brothersCopy[1] === user.sibling[1]); // true
  console.log(user.sibling[1] === newUser.sibling[1]);//true

//               BLOCK 3

let numbers = [6, 8, 10, 12, 43, 56, 98];

let userIds = [1230, 234, 1278, 984, 763, 900];

// 1. Add all the values of numbers and userIds array into the new newly created array named `collection`
let collection=[]
for(let number of numbers){
    collection.push(number)
}
for(let user of userIds){
    collection.push(user)
}
console.log(collection)

// 2. Add all the even numbers from both arrays numbers and userIds into a newly created array named `evenCollection`
let evenCollection=[]
for(let number of numbers){
    if(number%2==0){
        evenCollection.push(number)
    }
}
console.log(evenCollection)

for(let user of userIds){
    if(user%2==0){
        evenCollection.push(user)
    }
}
console.log(evenCollection)

// 3. Add all the odd numbers from both arrays numbers and userIds into a newly created array named `oddCollection`
let oddCollection=[]
for(let number of numbers){
    if(number%2!==0){
        oddCollection.push(number)
    }
}
console.log(oddCollection)

for(let user of userIds){
    if(user%2!==0){
        oddCollection.push(user)
    }
}
console.log(oddCollection)

/*
  @param means parameter
 4. Write a function named times which accets two parameter and return an array. 
  @param times (number)
  @param character (string)
  @return array
  Example: 
    times(5, 'c'); // ['c', 'c', 'c', 'c', 'c']
    times(2, 'a'); // ['a', 'a']
    times(0); // []
    times(5); // ['test', 'test', 'test', 'test', 'test']
*/
function times(x,y){
    let array=[]
    for(let i=0;i<x;i++){
        array.push(y)
    }
    return array
}


console.log(times(5,"c"))
console.log(times(2,"a"))
console.log(times())
console.log(times(5,"test"))

// Uncomment the code below and test the output
/*
 5. Write a function named revert which reverts the element of the input array. 
  @param arr (array)
  @return array
  Example: 
    revert([1, 2, 3, 4]); // [4, 3, 2, 1]
    revert(['a', 'd', 'c', 'b']); // ['b', 'c', 'd', 'a']
    revert(['Ryan', 'John', 'Bran']); //['Bran', 'John', 'Ryan']
*/
function revert(reverts){
    let array=[]
    for(let i=reverts.length-1;i>=0;i--){
        array.push(reverts[i])
    }
    return array
}
console.log(revert([1,2,3,4]))
console.log(revert(['a','b','c','d']))
console.log(revert(['ryan','john','bran']))

// Uncomment the code below and test the output


/*
 6. Write a function named clear which remove all of these values (false, undefined, empty string, 0, null) and returns a new array  
  @param arr (array)
  @return array
  Example: 
    clear([1, 2, 3, 4, '', 0, null, undefined]); // [4, 3, 2, 1]
    clear(['a', undefined, 'd', 0,  'c', 'b']); // ['b', 'c', 'd', 'a']
    clear(['Ryan', null, 0,  'John', 'Bran']); //['Bran', 'John', 'Ryan']
*/
function unwanted(value){
    return(value==0 || 
    value==""||
    value==undefined||
    value==null||
    value==false);
}
// function clear(array){
//     let newarray=[]
//     for(let value of array){
//         if(!unwanted(value)){
//             newarray.push(value)
//         }
//     }
//     return newarray
// }

function clear(array){
let newarray=[]
for(let value of array){
if(Boolean(value)==true){
    newarray.push(value)
}
}
return newarray
}
console.log(clear([1,2,3,4,'',0,null,undefined]))
console.log(clear(['a',undefined,'d',0,'c','b']))
console.log(clear(['ryan',null,0,'john','bran']))

// Uncomment the code below and test the output
//console.log(clear([1, 2, 3, 4, '', 0, null, undefined])); // 
//console.log(clear(['a', undefined, 'd', 0, 'c', 'b'])); // 
//console.log(clear(['Ryan', null, 0, 'John', 'Bran'])); //

/*
 6. Write a function named arrayToObj which accepts an array and return an object
 where the key will be the index of array and value will be the element of the array.
  @param arr (array)
  @return object
  Example: 
    arrayToObj([1, 2, 3, 4]); // {0: 1, 1: 2, 2: 3, 3: 4}
    arrayToObj(['a', undefined, 'd']); // {0: 'a', 1: undefined, 2: 'd'}
    arrayToObj(['Ryan', 'John']); // {0: 'Ryan', 1: 'John'}
*/
function arrayToObj(array){
    let obj={}
    for(let i=0;i<array.length;i++){
        obj[i]=array[i]
    }
    return obj
}


// Uncomment the code below and test the output
console.log(arrayToObj([1, 2, 3, 4])); // 
console.log(arrayToObj(['a', undefined, 'd'])); // 
console.log(arrayToObj(['Ryan', 'John'])); //


function personDetails(person) {
    person.age = 25;
    person = { name: 'John', age: 50 };
    return person;
  }
  var person1 = { name: 'Alex', age: 30 };
  var person2 = personDetails(person1);
  console.log(person1); // { name: 'Alex', age: 25 }
  console.log(person2); // { name: 'John', age: 50 }