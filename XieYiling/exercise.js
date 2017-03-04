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
    // var dataLength = people.length;
    // var currentSal;

    // for (var i = 0; i < dataLength; i++) {
    //     currentSal = Number(exercise.data.data[i][18]);
    //     if (currentMax < currentSal) {
    //         currentMax = currentSal;
    //     }
    // }
    people.forEach(function(item){
        if (currentMax < Number(item[18])) {
            currentMax = Number(item[18]);
        }
    });

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

var getEarnings = function(row) {
    return Number(row[18]);
};

var getRegular = function(row) {
    return Number(row[11]);
};

exercise.earningsAbove = function(target) {

    /* EX 2

    return the number of people with salaries above "target"
    use filter to create an array of salaries above "target"
    then return the length of the array

    */

    var num_salaraies = 0;
    var people = exercise.data.data; // get handle on data
    var salaries_above = people.map(getEarnings).filter(function(item){
        return item > target;
    });
    num_salaraies = salaries_above.length;
    return num_salaraies;
};

exercise.totalBasePayroll = function() {

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */
    var people = exercise.data.data;
    var totalPayroll = people.map(getRegular).reduce(function(prev, curr){
        return prev + curr;
    },0);
    return Math.floor(totalPayroll);

};

exercise.totalEarningsWithOvertime = function() {

    /* EX 4

    return the total Earnings with Overtime as an integer

    */
    var people = exercise.data.data;
    var total = people.map(getEarnings).reduce(function(prev, curr){
        return prev + curr;
    },0);
    return Math.floor(total);
};

exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number zipcodes as an integer

    */

    var zipCodes = [];
    var people = exercise.data.data;
    people.forEach(function(item){
        var zip = Number(item[19]);
        if (!(zipCodes.includes(zip))){
            zipCodes.push(zip);
        }
    });

    return zipCodes.length;
};