//Ex2.6 - Years and Centuries


function centuryFromYear(year){
    return year% 100 === 0 ? Math.floor(year/100) : Math.floor(year/100)+1;
    
}



console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1601));  
console.log(centuryFromYear(2000));  
