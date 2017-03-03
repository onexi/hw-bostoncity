var exercise = {};


/* INSTRUCTIONS

Boston City Data - Start of our Data Science journey
In your code do not use any "for loops" - use Array Callback style

*/
var getEarnings = function(row){
    return [row[18]];
};
var findMax = function(x,y){
    return x > y ? x:y;
};
exercise.maxEarnings = function() {

    /* EX 1

    replace the for loop with one of the array callback functions
    first create an array of total earnings with overtime

    */
    var people = exercise.data.data;
    var earnings = people.map(getEarnings);
    var earnings2 = earnings.map(Number);
    var currentMax = earnings2.reduce(findMax, 0);
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
    var target = function(item) {
    return item > 150000;
    };
    var people = exercise.data.data; 
    var earnings = people.map(getEarnings);
    var num_salaries = earnings.map(Number).filter(target);
    
    return num_salaries.length;  
};

exercise.totalBasePayroll = function() {
    var getBasePayrolls = function(row){
        return [row[11]];
    }
    var people = exercise.data.data;
    var getallBasePayrolls = people.map(getBasePayrolls);
    var getallBasePayrolls2 = getallBasePayrolls.map(Number);
    var sum = function(x, y){
        return x+y;
    }
    var totalpayroll = getallBasePayrolls2.reduce(sum, 0);
    return Math.floor(totalpayroll);
    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */

};

exercise.totalEarningsWithOvertime = function() {
    var getearning = function(row){
        return [row[18]];
    }
    var people = exercise.data.data;
    var getallearning = people.map(getearning);
    var getallearning2 = getallearning.map(Number);
    var sum = function(x, y){
        return x+y;
    }
    var totalearningOvertime = getallearning2.reduce(sum, 0);
    return Math.floor(totalearningOvertime);
    /* EX 4

    return the total Earnings with Overtime as an integer

    */

};

exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number zipcodes as an integer

    */
    var unique_zips = 0;
    var people = exercise.data.data;
    var getzipcode = function(row){
        return [row[19]];
    }
    var getallzipcodes = people.map(getzipcode);
    var getallzipcodesnumbers = getallzipcodes.map(Number);
    var uniquedict = getallzipcodesnumbers.reduce(function(previous,current){
        if(current in previous){
            previous[current] += 1;
        }
        else{
            previous[current] = 1;
        }
        return previous;
    },{});
    return Object.values(uniquedict).length;

    
};
