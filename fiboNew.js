// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55;

function fibonacciIteritive(num){
    var fibo = [1, 1];
    for(var i = 2; i <= num; i++){
        var nextfibo = fibo[i - 1] + fibo[i - 2];
        fibo.push(nextfibo);
    }
    return fibo;
}
var outPut = fibonacciIteritive(10);
console.log(outPut);


// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55;

function fibonacciRecursive(num){
    //stopping point
    if (num == 0){
        return [1];
    }
    else if (num == 1){
        return [1, 1];
    }
    //recursive call
    else{
        var fibo = fibonacciRecursive(num - 1);
        var nextFibo = fibo [num-1] + fibo [num-2];
        fibo.push(nextFibo);
        return fibo;
    }
}
var result = fibonacciRecursive(10);
console.log(result);

/**
1. What is recursive?
Answer: When we call a function in the same function tha is call Recursive Function.
 */