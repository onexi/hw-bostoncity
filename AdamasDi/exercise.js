var exercise = {};

/* INSTRUCTIONS

Boston City Data - Start of our Data Science journey
In your code do not use any "for loops" - use Array Callback style

*/

// exercise.maxEarnings = function() {

    /* EX 1

    replace the for loop with one of the array callback functions
    first create an array of total earnings with overtime

    */
/*
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
var getEarnings = function(row){
    return Number(row[18]);
};

var findMax = function(previous, current){
    return Math.max(previous,current);
};


exercise.earningsAbove = function(target) {

    /* EX 2

    return the number of people with salaries above "target"
    use filter to create an array of salaries above "target"
    then return the length of the array

    */

    var num_salaraies = 0;
    var people = exercise.data.data; // get handle on data
    var earnings = people.map(getEarnings);
    var filtered = earnings.filter(function (earnings){
        var comparison = earnings > target;
        return comparison;
    });
    num_salaraies = filtered.length;

    return num_salaraies;
};

/*
function aboveTarget(item){
    var comparison = Number(item) > 150000;
    return comparison;
}
*/

exercise.totalBasePayroll = function() {

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */
    var people = exercise.data.data; // get handle on data
    var Payroll = people.map(getPayroll);
    var totalPayroll = Payroll.reduce(addPayroll, 0);
    var totalPayrollInteger = Math.floor(totalPayroll);
    return totalPayrollInteger;
};
var getPayroll = function(row){
    return Number(row[11]);
};

var addPayroll = function(previous, current){
    return previous + current;
};



exercise.totalEarningsWithOvertime = function() {

    /* EX 4

    return the total Earnings with Overtime as an integer

    */
    var people = exercise.data.data; // get handle on data
    var earnings = people.map(getEarnings);
    var totalEarnings = earnings.reduce(addEarnings, 0);
    var totalEarningsInteger = Math.floor(totalEarnings);
    return totalEarningsInteger;
};

var addEarnings = function(previous, current){
    return previous + current;
};



exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number zipcodes as an integer

    */

    //var zipCodes = [];
    var people = exercise.data.data; // get handle on data
    var totalzipCodes = people.map(getzipCodes);

    var zipCodes = totalzipCodes.reduce(function(previous, current){
        if (current !== null){
            if (current in previous){
                previous[current] += 1; 
            }
            else{
                previous[current] = 1;
            }
        }
        return previous;
    }, {});

    return Object.keys(zipCodes).length;
    //return zipCodes.length;
   /*
    var totalzipCodes1 = zipCodes1.map(getzipCodesNew);
    var zipCodes = totalzipCodes1.filter(isBigEnough); 
    return zipCodes.length;
    */

};

var getzipCodes = function(row){
    return row[19];
};
/*
var getzipCodesNew = function(row){
    return Number(column[0]);
};
function isBigEnough(element){
    var comparison = element == 1;
    return comparison; 
}
*/