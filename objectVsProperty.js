var age = [25, 36, 18, 20];
var myInfo = {
    age: 26,
    weight: 85,
    hight: 69,
    color: 'Black'
}
var myAge = myInfo['age'];
console.log(myAge);

var lookingForAge = 'age';
var myAge = myInfo[lookingForAge];
console.log(myAge);

myInfo.weight = 70;
console.log(myInfo);

myInfo['age'] = 30;
console.log(myInfo);

myInfo[lookingForAge] = 30;
console.log(myInfo);