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

    var people = exercise.data.data;
    var earnings = people.map(getEarnings);
    var currentMax = earnings.reduce(findMax, 0);
    return currentMax;
};

function getEarnings(item) {
    return Number(item[18]);
}

function findMax(previous, current) {
    return Math.max(previous, current);
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

exercise.earningsAbove = function(target) {

    /* EX 2

    return the number of people with salaries above "target"
    use filter to create an array of salaries above "target"
    then return the length of the array

    */

    var people = exercise.data.data; // get handle on data
    var num_salaries = people.filter(largerSalary);
    return num_salaries.length;

    function largerSalary(item) {
        return item[18] > target;
    }
};

exercise.totalBasePayroll = function() {

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */

    var people = exercise.data.data;
    var payroll = people.map(getPayroll);
    var basePayroll = payroll.reduce(sumPayroll, 0);
    return Math.floor(basePayroll);
};

function getPayroll(item) {
    return Number(item[11]);
}

function sumPayroll(previous, current) {
    return previous + current;
}

exercise.totalEarningsWithOvertime = function() {

    /* EX 4

    return the total Earnings with Overtime as an integer

    */

    var people = exercise.data.data;
    var earnings = people.map(getEarnings);
    var totalEarnings = earnings.reduce(sumPayroll, 0);
    return Math.floor(totalEarnings);
};

exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number zipcodes as an integer

    */

    var people = exercise.data.data;
    var zipCodes = people.map(getZip);
    var uniqueZipCodes = [];
    zipCodes.forEach(getUniqueZip);
    return uniqueZipCodes.length;

    function getUniqueZip(item, counter, array) {
        if(uniqueZipCodes.includes(item));
        else {
            uniqueZipCodes.push(item);
        }
    }
};

function getZip(item) {
    return Number(item[19]);
}

/*

Alternative method to get unique zip codes

    var uniqueZipCodes = zipCodes.reduce(uniqueZip, []);
    return uniqueZipCodes.length;

    function uniqueZip(previous, current) {
        if(previous.includes(current));
        else {
            previous.push(current);
        }
        return previous;
    }

*/