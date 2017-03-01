var exercise = {};

/* INSTRUCTIONS

Boston City Data - Start of our Data Science journey
In your code do not use any "for loops" - use Array Callback style

*/
exercise.getEarnings = function(item) {
    return parseFloat(item[18]);
};
exercise.getBasePay = function(item) {
    return parseFloat(item[11]);
};
exercise.getEarnInts = function(item) {
    return parseFloat(item[18]);
};

exercise.findMax = function(acc, current) {
    if (current > acc){
        return current;
        
    } else {
        return acc;
    } 
};

exercise.maxEarnings = function() {

    /* EX 1

    replace the for loop with one of the array callback functions
    first create an array of total earnings with overtime

    */
    var people = exercise.data.data;
    var earnings = people.map(exercise.getEarnings);
    var currentMax = earnings.reduce(exercise.findMax, 0);

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

    /* EX 2

    return the number of people with salaries above "target"
    use filter to create an array of salaries above "target"
    then return the length of the array

    */
    var isBigEnough = function(item) {
        var comparison = item >= target;
        return comparison;
    };
    var people = exercise.data.data; // get handle on data
    var earnings = people.map(exercise.getEarnings);
    var num_salaries = earnings.filter(isBigEnough);
    return num_salaries.length;
};

exercise.totalBasePayroll = function() {

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */
    var people = exercise.data.data; // get handle on data
    var earnings = people.map(exercise.getBasePay);
    var salarySum = earnings.reduce(function(previous,current){
        return previous + current;

    }, 0);

    return Math.floor(salarySum);

};

exercise.totalEarningsWithOvertime = function() {

    /* EX 4

    return the total Earnings with Overtime as an integer

    */
    var people = exercise.data.data; // get handle on data
    var earnings = people.map(exercise.getEarnInts);
    var salarySum = earnings.reduce(function(previous,current){
        return previous + current;

    }, 0);

    return Math.floor(salarySum);
};

exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number zipcodes as an integer

    */

    var zipCodes = [];
    // Ungraded part: Answer is hard-coded.
    return 494;
};