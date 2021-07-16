function factorial(num){
    let fact = 1;
    for(let i = num; i >= 1; i--){
        fact = fact * i;
        console.log(fact, i);
    }
    return(fact);
}
var factorialResult = factorial(10);
console.log(factorialResult);