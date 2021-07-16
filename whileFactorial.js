var i = 1;
var factorial = 1;
while(i <= 5){
    console.log(i, factorial);
    factorial = factorial * i;
    console.log(i, factorial);
    i++;
    console.log(i, factorial);
    console.log("==");
}

console.log(i+10, factorial);