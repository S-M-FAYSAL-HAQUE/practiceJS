//usign three perameters without loop;

function add (firstNum, secNum, thirdNum){
    var sum = firstNum + secNum + thirdNum;
    return sum;
}
var totalSum = add (5, 10, 10000);
console.log(totalSum);

//using one perameter and three array without loop;


function add2(numbers){
    var sum1 = numbers[0] + numbers[1] + numbers[2];
    return sum1;
}
var totalSum1 = add2 ([20, 5, 10]);
console.log(totalSum1);


//using unlimited array with loop;

function add3(numbers){
    var sum2 = 0;
    for(var i = 0; i < numbers.length; i++){
        sum2 = sum2 + numbers[i];
    }
    return sum2;
}
var numbers = [10, 10, 10, -10];
var totalSum2 = add3(numbers);
console.log(totalSum2);