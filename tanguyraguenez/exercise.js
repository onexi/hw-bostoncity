var exercise = {};

/* INSTRUCTIONS

Boston City Data - Start of our Data Science journey
In your code do not use any "for loops" - use Array Callback style

*/

    /* EX 1

    replace the for loop with one of the array callback functions
    first create an array of total earnings with overtime

    */

    var getEarnings = function(row) {
        return Number(row[18]);
    };

    var findMax = function(previous, current){
        if (current > previous){
            return current;
        } else {
            return previous;
        };
    };

    exercise.maxEarnings = function() {
    var people = exercise.data.data;
    var earnings = people.map(getEarnings);
    var currentMax = earnings.reduce(findMax, 0);
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

    var abovetarget = function(item){
        return Number(item) > target;
    };

    var getEarnings = function(row) {
        return Number(row[18]);
    };

    var list = people.map(getEarnings).filter(abovetarget);
    num_salaraies = list.length;
    return num_salaraies;
};

exercise.totalBasePayroll = function() {

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */
    var getEarnings = function(row) {
        return Number(row[11]);
    };

    var total = function(previous, current){
        return previous + current;
    };

    var people = exercise.data.data;
    var earnings = people.map(getEarnings);
    var totalBasePayroll = earnings.reduce(total, 0);
    return Math.floor(totalBasePayroll);

};

exercise.totalEarningsWithOvertime = function() {

    /* EX 4

    return the total Earnings with Overtime as an integer

    */
    var getEarnings = function(row) {
        return Number(row[18]);
    };

    var total = function(previous, current){
        return previous + current;
    };

    var people = exercise.data.data;
    var earnings = people.map(getEarnings);
    var totalEarningsWithOvertime = earnings.reduce(total, 0);
    return Math.floor(totalEarningsWithOvertime);

};

exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number zipcodes as an integer

    */

    var zipCodes = [];

    var getZipCodes = function(row) {
        return Number(row[19]);
    };


    var people = exercise.data.data;
    var list = people.map(getZipCodes);

    for (i=0; i<list.length; i++){
        if (zipCodes.includes(list[i])){
            zipCodes = zipCodes;
        } else {
            zipCodes.push(list[i]);
        };
    };

    return zipCodes.length;
};