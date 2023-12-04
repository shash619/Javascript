//var c = 900
let a = 300
//const b = 20
// if (true) {
//     let a = 10
//     const b = 20
//     var c = 900
//   console.log("INNER: ", a);
//   console.log("INNER: ", c); 
//   console.log("INNER: ", b); 
// }

// console.log(a);
// //console.log(b);
// console.log(c);

// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//         console.log(website);
//     }
//      //console.log(website);// error as it is called out of scope

//      two()

// }
//two()//out of scope error
//one() it will be called

// if (true) {
//     const username = "hitesh"
//     if (username === "hitesh") {
//         const website = " youtube"
//          console.log(username + website);
//     }
//     // console.log(website);
// }

//console.log(username);// cannot be call out of scope


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



//addTwo(5) need to intialize first error will come here
// const addTwo = function(num){
//     return num + 2
// }
// console.log(addTwo(5))//right way to call