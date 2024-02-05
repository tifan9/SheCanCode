
function factorial(num) { 
    let fact = 1 
    if (num == 0 || num == 1){        
        console.log("cant be neg");         
    } 
        for(let i =1; i<=num; i++){
            fact = fact * i
        }      
        return fact
    }                    
console.log(factorial(5))

