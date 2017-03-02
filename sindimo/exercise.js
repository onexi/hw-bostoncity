var exercise = {};

/* INSTRUCTIONS

Boston City Data - Start of our Data Science journey
In your code do not use any "for loops" - use Array Callback style

*/


/*
exercise.maxEarnings = function() {

    // EX 1
    // replace the for loop with one of the array callback functions
    // first create an array of total earnings with overtime
   
    var currentMax = 0.0;
    var people = exercise.data.data;
    var dataLength = people.length;
    var currentSal;

    for (var i = 0; i < dataLength; i++) {
        currentSal = Number(exercise.data.data[i][18]);
        if (currentMax < currentSal) {
            currentMax = currentSal;
        }
    }

    return currentMax;
};

*/



//-----------Exercise 1---------------------------------------


/* EX 1

this gives you an example for the above
you still need to write the functions getEarnings and findMax
*/

exercise.maxEarnings = function() {

    var people = exercise.data.data;
    var earnings = people.map(getEarnings);
    var currentMax = earnings.reduce(findMax, 0);

    return currentMax;
};

function getEarnings(person){

    var earning = Number(person[18]);
    return earning;
};


function findMax(previous,current){

    if (current > previous){
        return current;
    }

    else{
        return previous;
    }

};



//-----------Exercise 2---------------------------------------

exercise.earningsAbove = function(target) {

    /* EX 2

    return the number of people with salaries above "target"
    use filter to create an array of salaries above "target"
    then return the length of the array

    */

    var num_salaraies = 0;
    var people = exercise.data.data; // get handle on data

    var highSalaries = people.filter(largeSalary);

    num_salaraies = highSalaries.length;

    return num_salaraies;


    function largeSalary(person){

        var salary = Number(person[18]);

        var comparison = salary > target;

        return comparison;
    };


};





//-----------Exercise 3---------------------------------------


exercise.totalBasePayroll = function() {

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */

    var people = exercise.data.data;
    var baseEarnings = people.map(getBaseEarnings);
    var totalBaseEarnings = baseEarnings.reduce(baseSum,0);

    //Truncate result because test expects an integer result
    return Math.trunc(totalBaseEarnings);



    function getBaseEarnings(person){

        var earning = Number(person[11]);
        return earning;
    };

    function baseSum(previous,current){

        return previous + current;
    };

};




//-----------Exercise 4---------------------------------------

exercise.totalEarningsWithOvertime = function() {

    /* EX 4

    return the total Earnings with Overtime as an integer

    */

    var people = exercise.data.data;
    var withOvertimeEarnings = people.map(getEarningsWithOvertime);
    var totalEarnings = withOvertimeEarnings.reduce(totalSum,0);

    //Truncate result because test expects an integer result
    return Math.trunc(totalEarnings);



    function getEarningsWithOvertime(person){

        var earning = Number(person[18]);
        return earning;
    };

    function totalSum(previous,current){

        return previous + current;
    };


};




//-----------Exercise 5---------------------------------------

exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number zipcodes as an integer

    */

    var zipCodes = [];
    var people = exercise.data.data;

    //Get zip codes from all people
    var allzipCodes = people.map(getZipCodes);

    //Get unique zip codes 
    allzipCodes.forEach(getUniqueZips);

    return zipCodes.length;



    function getZipCodes(person){

        var zipcode = Number(person[19]);
        return zipcode;
    };

    function getUniqueZips(currentZip){

       //If currentZip isn't already in the array of zip codes, then add it 
       if ( !(zipCodes.includes(currentZip)) ){

            zipCodes.push(currentZip);
       }

    }


};