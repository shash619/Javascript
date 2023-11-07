// const superhero=["Ram","GONE","RAONE"]
// const villan=["DILO","HATIM","RUSH"]

//********************Methods to join  the value of the array***************////
//superhero.push(villan)
//console.log(superhero);It will add array inside arraay not value
//[ 'Ram', 'GONE', 'RAONE', [ 'DILO', 'HATIM', 'RUSH' ] ]

// const newARR= superhero.concat(villan)
// console.log(newARR);
//O/P:[ 'Ram', 'GONE', 'RAONE', 'DILO', 'HATIM', 'RUSH' ]

//*********** SPREAD OPERATER is also use to add array value in other array****// 

// const newARR= [...villan,...superhero]
// console.log(newARR)
//O/P:[ 'Ram', 'GONE', 'RAONE', 'DILO', 'HATIM', 'RUSH' ]

//******METHOD OF ARRAYS****// 

// const array1=Array.from("hitesh")
// console.log(array1);
//O/P: [ 'h', 'i', 't', 'e', 's', 'h' ]

// const array1=Array.from({name:"vashu"})//IMPORTANT ARRAy is not formed in object if key value not mention
// console.log(array1);
//O/P:[]
//  const array1=Array.from("hitesh")
// console.log(Array.isArray(array1));
//O/P:true

//************MEthod to flat the array ***************/

// const superhero=["Ram","GONE","RAONE",["DILO",["HATIM","RUSH"]],"GDO"]
// console.log(superhero.flat(Infinity));
// 
//O/P:[
//     'Ram',   'GONE',
//     'RAONE', 'DILO',
//     'HATIM', 'RUSH',
//     'GDO'
//   ]

// let scor=30
// let scor2=80
// let scor3=90
// let array12= Array.of(scor,scor2,scor3)
// console.log(array12);
//O/P:[ 30, 80, 90 ]