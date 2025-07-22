

function isLeapYear(year){
    if(year % 4 == 0){
        if(year % 100 == 0){
            if(year % 400 == 0){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return true;
        }
    }
    else{
        return false;
    }
}


var leap = year => (year % 4==0 && year % 100 != 0) || (year % 400  == 0)

console.log(leap(2023))