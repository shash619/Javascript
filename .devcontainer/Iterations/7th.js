const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//when we use curly braces we need to use return
// const newNums = myNumers.map( (num) => { return num + 10})

const totalnums = myNumers
                            .map((nums)=>nums*10)
                            .map((nums)=>(nums*10+1))
                            .filter((nums)=>{
                                return nums >300;
                            })


console.log(totalnums);






const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

//console.log(newNums);