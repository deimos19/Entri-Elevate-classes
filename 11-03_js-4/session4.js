// let quantity = 1

// if (quantity == 0){
//     console.log("Out of Stock")
// }
// else if (quantity >= 1 && quantity <=5){
//     console.log("Limited Stock")
// }
// else {
//     console.log("Available")
// }
// if (quantity > 10){
//     console.log("Out")
// }
 let products = [
    {
    name: "laptop",
    price: 15000,
    quantity: 0,
    },
    {
    name: "mouse",
    price: 150,
    quantity: 1,
    },
    {
    name: "keyboard",
    price: 1500,
    quantity: 0,
    }
 ]

 //for loop
 let total = 0
 for(let i = 0; i < products.length ;i++){
      total += products[i].price
 }
 console.log(total)

 //while loop
 let j = 0
 let totalPrice = 0
 while(j < products.length){
    totalPrice += products[j].price
    j++
 }
 console.log(totalPrice)

let k = 0
let res = 0 
while(k < products.length && res<=1000){
    res += products[k].price
    k++
}