// // Q1

// const displayCurrentDay = () => console.log(`Today is: ${new Date().toLocaleDateString('en-US', {weekday: 'long'})}`);
// displayCurrentDay();

// const currentDay=() =>{
//     console.log(`Today is: ${new Date().toLocaleDateString('en-US', { weekday: 'long' })}`)
// }
//

// Q1
switch(new Date().getDay()){
    case 0:
    day = "Sunday";
    break;
    case 1:
    day = "Monday";
    break;
    case 2:
    day = "Tuesday";
    break;
    case 3:
    day = "Wednesday";
    break;
    case 4:
    day = "Thursday";
    break;
    case 5:
    day = "Friday";
    break;
    case 6:
    day = "Saturday";
    break;
}
console.log("Today is: "+day);











//Q2
const findLargest = (num1, num2, num3) => {
    let largest = num1;

    if (num2 > largest) {
        largest = num2;
    }

    if (num3 > largest) {
        largest = num3;
    }

    return largest;
};

const num1 = 10;
const num2 = 5;
const num3 = 8;

const result = findLargest(num1, num2, num3);
console.log(`The largest number is: ${result}`);
