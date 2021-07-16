const year = 3996; //here we can use "let" also, insted of "const".
const remainder = year % 4; //here we can use "let" also, insted of "const".
if(remainder==0){
    console.log('This year is a Leap Year.');
}
else{
    console.log('This year is not a Leap Year.');
}