//Singelton
//Objects.create={}


//Literals
const mysym=Symbol("Key1")
const Jsuser={
    name:"vasu",
    age:20,
    class:3,
    email:"Raju@gmail.com",
    [mysym]:"mykey1",
    "fullname":"vasu mishra"
}
// console.log(Jsuser.age);
// console.log(Jsuser["age"]);
// console.log(Jsuser["fullname"]);
// //console.log(typeof Jsuser.mysym);
// // To use mysym as symbol we need to use square bracket while declaring as weel as fecting
// console.log( Jsuser[mysym])
// console.log(typeof Jsuser[mysym])

Jsuser.email = "manoj@google.com"
//console.log(Jsuser);
// if we want to frreze th object no changes can be made further
//Object.freeze(Jsuser)
Jsuser.email = "Doj@google.com"
//console.log(Jsuser);
Jsuser.greeting=function()
{
    console.log(`Hi How are you ${this.name} `);
}
//console.log(Jsuser.greeting);
console.log(Jsuser.greeting());