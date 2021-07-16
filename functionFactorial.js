function factorial (num){
    var fact = 1; // we just initialize the factorial number = 1. If we use "0" then all factorila number will be "0". Thats why we initialized by 1. Another comment is when we multiple with a digite on that time we have to initialize 1.  
    for(var i = 1; i <= num; i++){
        fact = fact * i;
    }
    return fact;
}

var result = factorial(10);
console.log(result);