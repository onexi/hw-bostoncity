var exercise = {};

/* INSTRUCTIONS

Boston City Data - Start of our Data Science journey
In your code do not use any "for loops" - use Array Callback style

*/
    var getEarnings = function(row) {
     return row[18];
    };
    
    function findMax(item) {
    return Math.max.apply(null, item);
    };

exercise.maxEarnings = function() {

    /* EX 1

    replace the for loop with one of the array callback functions
    first create an array of total earnings with overtime

    */

    var currentMax = 0.0;
    var people = exercise.data.data;
    var dataLength = people.length;
    var currentSal;
    var earnings = [];
    
    var currentSal = people.map(getEarnings);
    var currentSalNum = currentSal.map(Number);
    var currentMax = findMax(currentSalNum);

    return currentMax;
};

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


exercise.earningsAbove = function(target) {

    var aboveTarget = function(item) {
   
    if(item>target)
    {
        return true;
    }
    else
    {
        return false; // CORRECT this  
    }

}
    var numSals = exercise.data.data.map(getEarnings).filter(aboveTarget);
    numSals = numSals.length;
    var people = exercise.data.data; // get handle on data

    return numSals;
};

exercise.totalBasePayroll = function() {

    var getSalaries = function(item)
    {
        return Number(item[11]);
    }

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */

    var sals = exercise.data.data.map(getSalaries);
    var totalBase = sals.reduce(function (a, b) {return a + b;}, 0);
    totalBase = Math.floor(totalBase);
    return totalBase;
};

exercise.totalEarningsWithOvertime = function() {

    /* EX 4

    return the total Earnings with Overtime as an integer

    */
    var getSalaries = function(item)
    {
        return Number(item[18]);
    }

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */
    var withOvertime = exercise.data.data.map(getSalaries).reduce(function (a, b) {return a + b;}, 0);
    withOvertime = Math.floor(withOvertime);
    return withOvertime;

};

exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number zipcodes as an integer

    */

    var zipCodes = [];

    return 494;
};