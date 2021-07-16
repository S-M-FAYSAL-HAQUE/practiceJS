function leapYear(year){
    const remainder = year % 4;
    if (remainder==0){
        return true;
    }
    else {
        return false;
    }
}

const check = leapYear(1990);
console.log(check);