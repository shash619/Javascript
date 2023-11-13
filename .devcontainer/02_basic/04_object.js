const tinder = new Object()
tinder.name="Vashu"
tinder.email="Vasu@gamil.com"
tinder.age="25"

const regularuser={
        age:35,
        name:{
                username:{
                        firstname:"Vasu",
                        lastname:"Mishra"
                }
        },
        useremail:"vasu123@gmail.com"
}
//console.log(regularuser.name.username.firstname);//Vasu

const Obj1 = {1:"anuj",2:"rahul"}
const obj2 = {3:"vasu" ,4:67}
//Merging 2 object
const obj3={...Obj1,...obj2}
//console.log(obj3); //o/p= { '1': 'anuj', '2': 'rahul', '3': 'vasu', '4': 67 }
//console.log(Object.keys(tinder));//OP=[ 'name', 'email', 'age' ] in array form
//console.log(Object.values(tinder));//OP=[ 'Vashu', 'Vasu@gamil.com', '25' ]in array form

//destructuring of the object //

const {useremail}=regularuser
console.log(useremail);
//const {useremail:email}=regularuser
//console.log(email);