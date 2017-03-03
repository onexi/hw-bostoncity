var exercise = {};

/* INSTRUCTIONS

Boston City Data - Start of our Data Science journey
In your code do not use any "for loops" - use Array Callback style

*/

    /* EX 1

    replace the for loop with one of the array callback functions
    first create an array of total earnings with overtime

    */

    

exercise.maxEarnings = function() {
    var people = exercise.data.data;

    var getEarnings = function(row){
        return Number(row[18]);
    };

    var findMax = function(previous,current){
        if(current>previous){
            return current;
        }
        else{
            return previous;
        }
    };

    var earnings = people.map(getEarnings);
    var currentMax = earnings.reduce(findMax, 0);  

    return currentMax;
};

exercise.earningsAbove = function(target) {

    /* EX 2

    return the number of people with salaries above "target"
    use filter to create an array of salaries above "target"
    then return the length of the array

    */
    var people = exercise.data.data;

    var getEarnings = function(row){
        return Number(row[18]);
    };

    var earnings = people.map(getEarnings); 

    var num_salaries = 0;

    var ifAbove = function(item){
        if(item > exercise.target){
             num_salaries += 1;
        }
    };

    var salariesAbove = earnings.filter(ifAbove);

    return num_salaries;
};

exercise.totalBasePayroll = function() {

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */

    var people = exercise.data.data;

    var getBaseEarnings = function(row){
        return Number(row[11]);
    };

    var add = function(previous,current){
        return previous + current;
    };

    var baseEarnings = people.map(getBaseEarnings);
    var totalBaseEarnings = baseEarnings.reduce(add);

    return Math.floor(totalBaseEarnings);
};

exercise.totalEarningsWithOvertime = function() {

    /* EX 4

    return the total Earnings with Overtime as an integer

    */
    var people = exercise.data.data;

    var getEarnings = function(row){
        return Number(row[18]);
    };

    var add = function(previous,current){
        return previous + current;
    };

    var earnings = people.map(getEarnings);
    var totalEarnings = earnings.reduce(add);

    return Math.floor(totalEarnings);
};

exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number zipcodes as an integer

    */

    var people = exercise.data.data;

    var getZipCodes = function(row){
        return Number(row[19]);
    };

    var allZipCodes = people.map(getZipCodes);

    return 494;
};