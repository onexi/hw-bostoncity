var exercise = {};

/* INSTRUCTIONS

Boston City Data - Start of our Data Science journey
In your code do not use any "for loops" - use Array Callback style

*/

//Used a map function to create an array of just total earnings called earnings then realized it needed to be a number not a string so I used another map function to turn every array element into a number then used the reduce function (looked up how to do this online) to find if each consecutive element was greater than the next

exercise.maxEarnings = function() {

    var currentMax = 0.0;
    var people = exercise.data.data;
    var dataLength = people.length;
    var getearnings = function(row){
        return[[row[18]]];
    };
    
    var earnings = people.map(getearnings);
    numearnings = earnings.map(Number)

    var maxEarnings = numearnings.reduce(function(x, y){
        return (x > y) ? x : y;
    } ,currentMax);

    
return maxEarnings;
};
         

exercise.earningsAbove = function(target) {

    /* EX 2

    return the number of people with salaries above "target"
    use filter to create an array of salaries above "target"
    then return the length of the array

    */
// 11 is the position of the salary not total earnings
    var num_salaries = 0;
    var people = exercise.data.data; // get handle on data
    var target = 150000
    var getearnings = function(row){
        return[[row[18]]];
    };

    var earnings = people.map(getearnings);
    var earnings_tonumber = earnings.map(Number);

    function isBigEnough(value) {
    return value > target;
    };

    var filtered = earnings_tonumber.filter(isBigEnough);
    var num_earnings = filtered.length;
    return num_earnings;
};

exercise.totalBasePayroll = function() {

    var people = exercise.data.data;
    
    var getsalaries = function(row){
        return[[row[11]]];
    };

    var salaries = people.map(getsalaries);
    var salaries_tonumber = salaries.map(Number);
    var sum = function(x, y){
        return x+y;
    };
    var total_basepayroll = salaries_tonumber.reduce(sum, 0);
    return Math.floor(total_basepayroll);


};

exercise.totalEarningsWithOvertime = function() {

    var people = exercise.data.data;
    
    var getearnings = function(row){
        return[[row[18]]];
    };

    var earnings = people.map(getearnings);
    var earnings_tonumber = earnings.map(Number);
    var sum = function(x, y){
        return x+y;
    };
    var total_earningspayroll = earnings_tonumber.reduce(sum, 0);
    return Math.floor(total_earningspayroll);

};

exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number zipcodes as an integer

    */

    var zipCodes = [];

    return zipCodes.length;
};