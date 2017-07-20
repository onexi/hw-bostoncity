var exercise = {};

/* INSTRUCTIONS

Boston City Data - Start of our Data Science journey
In your code do not use any "for loops" - use Array Callback style

*/

exercise.maxEarnings = function() {

    /* EX 1

    replace the for loop with one of the array callback functions
    first create an array of total earnings with overtime

    */

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

    var num_salaraies = 0;
    var people = exercise.data.data; // get handle on data

    return num_salaraies;
};

exercise.totalBasePayroll = function() {

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */

};

exercise.totalEarningsWithOvertime = function() {

    /* EX 4

    return the total Earnings with Overtime as an integer

    */

};

exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number zipcodes as an integer

    */

    var zipCodes = [];

    return zipCodes.length;
};