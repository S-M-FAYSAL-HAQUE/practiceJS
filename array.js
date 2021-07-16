/**
var names = ['Faysal', 'Fahad', 'Rohim', 'Humbarkha', 'Mohammad', 'Ibrahim'];
console.log(names);
var position = names[0];
console.log(position);
var length = names[0].length;
console.log(length);
//max name
var length = 0;
var maxName = "";
for(i = 0; i < names.length; i++){
    var element = names[i].length;
    console.log(element, names[i], names[i].length);
    if (element > length){
        length = element;
        maxName = names[i];
    }
}
console.log("Longest name is: ", maxName);
 */
//['Faysal', 'Fahad', 'Rohim', 'Humbarkha', 'Mohammad', 'Ibrahim']
function megaFriend(maxName){
    var longestName = "";
    var some = 0;
    for(var i = 0; i < maxName.length; i++){
        if(maxName[i].length > some){
            some = maxName[i].length;
            longestName = maxName[i];
        }
    }
    return longestName;
}
var maxName = ['Faysal', 'Fahad', 'Rohim', 'Humbarkha', 'Mohammad', 'Ibrahim'];
var largestName = megaFriend(maxName);
console.log('Largest name is: ', largestName);
