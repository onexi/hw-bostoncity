var exercise = {};

/* INSTRUCTIONS

Boston City Data - Start of our Data Science journey
In your code do not use any "for loops" - use Array Callback style

*/

    /* EX 1

    // first create an array of total earnings with overtime - 18
    // replace the for loop with one of the array callback functions

    */

    /*
        var totalEarningsWithOvertime = [];
        for (var i=0; i<exercise.data.data.length, i++);{
            var j=exercise.data.data[i][18]
            totalEarningsWithOvertime.push[j];
         }
    
     return totalEarningsWithOvertime;
    };
    */

/*
    function callback(totalEarningsWithOvertime){
        var totalEarningsWithOvertime = [];
        for (var i=0; i<exercise.data.length, i++);
         {
            for (var j=0; j<exercise.data.i.length, j++);
            {
                totalEarningsWithOvertime.push(j[18]];
            }
        };
    
      return totalEarningsWithOvertime;
        
        };
 */


/* EX 1

this gives you an example for the above
you still need to write the functions getEarnings and findMax

exercise.maxEarnings = function() {
    var people = exercise.data.data;
    var earnings = people.map(getEarnings);
    var currentMax = earnings.reduce(findMax, 0);
    return currentMax;
};

*/
    
      exercise.maxEarnings = function() {
        var people = exercise.data.data; //this is the people part of the data array
        var earnings = people.map(getEarnings); //map function already looks at each index
        var currentMax = earnings.reduce(findMax, 0); //0 is starting point, find max is preprogrammed 
    

        function getEarnings(person){ 
            return Number(person[18]); //this is what people.map should return 
        }
        
        function findMax(item, currentMax){
            return Math.max(item, currentMax); //found this function Math.max.apply(Math,array)
        }
        return currentMax; 
    } 



    /* EX 2

    return the number of people with salaries above "target"
    use filter to create an array of salaries above "target"
    then return the length of the array

    */

    exercise.earningsAbove = function(target) {

    var people = exercise.data.data; // define people array 
    var salaries = people.map(getSalaries); //create an array using MAP using the callback function  
    var salaries_above = salaries.filter(Cut)
       
    function getSalaries(person){ //map function knows where to base the index ("person")
        return person[18] //map knows to look for each person to the 11th column
    };

    function Cut(salary){ //cut function knows where to base the index ("salary")
       return salary > target //this is return, not IF. You need to return directly. 
    }

    return salaries_above.length //return the length of the variables salaries_above
};

exercise.totalBasePayroll = function() {

    /* EX 3

    var = get

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    //RETURN TOTAL PAYROLL FOR BOSTON 

    */
    var people = exercise.data.data; //array of all people 
    var salaries = people.map(getSalaries); // array of salaries
    var salary_sum = salaries.reduce(add,0);

    function getSalaries(person){
        return Number(person[11]) // define callback function 
    }

    function add(item,total){
            return total=Number(item)+total;
    }


    return Math.floor(salary_sum)
}

exercise.totalEarningsWithOvertime = function() {

    /* EX 4, 14

    return the total Earnings with Overtime as an integer

       //RETURN TOTAL EARNINGS WITH OVERTIME 

    */

    var people = exercise.data.data; // this is creating a array of people
    var earnings_overtime = people.map(Getearnings);
    var total_earnings_overtime = earnings_overtime.reduce (add,0);

    function Getearnings(person){
        return Number(person[18])
    }
     function add(item,total){
            return total=Number(item)+total;
    }
    
    return Math.floor(total_earnings_overtime)

}

exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number zipcodes as an integer

      //RETURN TOTAL NUMBER OF ZIPCODES 

    */

    var people=exercise.data.data; // this is creating an array of people
    var zipcodes=people.map(Getzip);// this is creating an array of zip codes with a callback 
    var uniquezipcodes=zipcodes.filter(OnlyUnique); // this is creating an array for unique zip codes 

    function Getzip(person){ // this is defining the callback function for the zip codes 
        return person[19];
    }
        
    function OnlyUnique(value, index, zipcodes){// this is defining the callback function for the filter
        return zipcodes.indexOf(value) === index; //????
    } 
    
    return 494 
}