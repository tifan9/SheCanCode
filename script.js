/* 
    This is an assignment to work on arrays objects
*/
const items = [
    {name: 'Bike', price:100},
    {name: 'TV', price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5},
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000},
];
//Filter and show the product that will be bought when you don't have much money (Cheap one)
console.log("Filter and show the product that will be bought when you don't have much money (Cheap one)")
const cheap = items.filter(item => item.price  <= 10)
console.log(cheap)
// Filter and show the product that will be expensive in the array
console.log("Filter and show the product that will be expensive in the array")
const expensiveProduct = items.filter(item => item.price >500)
console.log(`The Product which is expensive is: `)
console.log(expensiveProduct)
// 3. Calculate the full price of all products combined
console.log("Calculate the full price of all products combined")
const total = items.map(item => item.price).reduce((a,b) => a + b)

console.log(`Total price is: ${total}`)

// 4. Calculate the full price of all products combined and remove products that are under $10
const fullPrice = items.map(item => item.price).reduce((a,b) => a + b)
let filteredPrice = items.filter(item => item.price>=10)
console.log("The total price is: " + " " + fullPrice)
console.log( filteredPrice)

// 5. Filter and show the product that will be start with letter b at first postion
const productLetter = items.filter(item => item.name.charAt(0).toUpperCase() === 'B')
console.log(productLetter)

