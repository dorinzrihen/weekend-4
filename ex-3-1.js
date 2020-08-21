
// In a small town the population is p0 = 1000 
// at the beginning of a year. The population regularly increases by 2 
// percent per year and moreover 50 new 
// inhabitants per year come to live in the town. How many years does 
// the town need to see its population greater or equal to p = 1200 inhabitants?


function nb_year(ppNow, increasesPercent , newPp, goalPP){
    let years = 0
    while(ppNow < goalPP){
        ppNow = ppNow + (ppNow*(increasesPercent/100)) + newPp;
        years++ ;
    }
    return years
}





console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));
