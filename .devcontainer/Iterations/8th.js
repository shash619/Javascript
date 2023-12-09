const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

//const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999,
        discount:400
    },
    {
        itemName: "py course",
        price: 999,
        discount:800
    },
    {
        itemName: "mobile dev course",
        price: 5999,
        discount:3000
    },
    {
        itemName: "data science course",
        price: 12999,
        discount:200
    },
]
// const totalDiscount= shoppingCart.reduce((acc,item)=>(acc+item.discount),0)
// const ActualPay= shoppingCart.reduce((acc,item)=>{
//    console.log( `${acc}+${item.discount} is:`)
//    return acc+item.discount

// // },0)
// console.log(ActualPay);






const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

//console.log(priceToPay);