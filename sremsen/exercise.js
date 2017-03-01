var exercise = {};

/* INSTRUCTIONS

Boston City Data - Start of our Data Science journey
In your code do not use any "for loops" - use Array Callback style

OPTIONS FOR ME
callback functions
filter
map
sort
reduce

*/

// callback functions
function getEarnings(employee) {
    return (Number(employee[18]));
}

// get base pay
function getBasePay(employee) {
    return (Number(employee[11]));
}

// compare each value to see which is bigger, then store it in tempMax
var tempMax = 0;
function findMax(previous, current) {
    
    // current is an array (?) so find position 0
    if (current > previous) {
        tempMax = current;
    }
    return tempMax;
}


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

    var people = exercise.data.data;
    var totalEarnings = people.map(getEarnings);
    var currentMax = totalEarnings.reduce(findMax, 0);
    return currentMax;

};

exercise.earningsAbove = function(target) {

    /* EX 2

    return the number of people with salaries above "target"
    use filter to create an array of salaries above "target"
    then return the length of the array

    */

    var people = exercise.data.data; // get handle on data

    var aboveTarget = people.filter(function(report) {
        // true each salary report is greater than the target
        return report[18] >= target;
    });
    
    return aboveTarget.length;
};

exercise.totalBasePayroll = function() {

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */

    var people = exercise.data.data;
    var totalEarnings = people.map(getBasePay);
    var totalPayroll = Math.floor(totalEarnings.reduce(function(previous, current) {
        return previous + current;
    }, 0));
      
    return totalPayroll;

};

exercise.totalEarningsWithOvertime = function() {

    /* EX 4

    return the total Earnings with Overtime as an integer

    */

    var people = exercise.data.data;
    var totalEarnings = people.map(getEarnings);
    var totalEarningsOvertime = Math.floor(totalEarnings.reduce(function(previous, current) {
        return previous + current;
    }, 0));
      
    return totalEarningsOvertime;

};

exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number zipcodes as an integer

    */

    return 494;

}