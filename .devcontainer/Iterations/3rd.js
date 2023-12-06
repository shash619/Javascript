//for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}
// for (const word of greetings) {
//     console.log(`for ech wrd is ${word}`);
// }

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

const newMap = new Map()
newMap.set('ram','mandir')
newMap.set('allah','majid')

// for(const[key,value] of newMap)
// {
//     console.log(`the value of ${key} is ${value}`);

// }

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }// for object of iteration does not work as it is irretable we use for in loop