// Question 1
console.log()
const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
// join() with commas
 const c = colors.join(',')
console.log(c)
console.log()
// Question 2
colors.splice(1,2, 'purple', 'pink')
console.log(colors)
console.log()
// Question 3
colors.copyWithin(0, 1, 4)
console.log(colors)
console.log()

// Question 4
let i = colors.map(item => item.toUpperCase())
console.log(i)
console.log()

// Question 5
console.log(colors.find(col => col.startsWith('b')))
console.log()

// Question 6
const selectedColors = colors.slice(1, 4)
console.log(selectedColors)
console.log()

