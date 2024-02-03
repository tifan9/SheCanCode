
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


function checkRange(num1, num2, num3) {
    return (num1 >= 50 && num1 <= 99) ||
           (num2 >= 50 && num2 <= 99) ||
           (num3 >= 50 && num3 <= 99);
}

console.log(checkRange(45, 55, 65)); 
console.log(checkRange(30, 40, 90));  
console.log(checkRange(20, 30, 40));  
