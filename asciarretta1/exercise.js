var exercise = {};

/* INSTRUCTIONS

Boston City Data - Start of our Data Science journey
In your code do not use any "for loops" - use Array Callback style

*/

var getEarnings = function(row) {
    return Number(row[18]);
};
 

exercise.maxEarnings = function() {

    /* EX 1

    replace the for loop with one of the array callback functions
    holder create an array of total earnings with overtime

    */

    var people = exercise.data.data;

    var earnings = people.map(getEarnings); 

    var findMax = function(holder, next) {
        if (next > holder) holder = next;
        return holder;
    };

    var currentMax = earnings.reduce(findMax, 0);
    return currentMax;

};

/* EX 1

this gives you an example for the above
you still need to write the functions getEarnings and findMax

exercise.maxEarnings = function() {};

*/

exercise.earningsAbove = function(target) {

    /* EX 2

    return the number of people with salaries above "target"
    use filter to create an array of salaries above "target"
    then return the length of the array

    */
    
    var people = exercise.data.data; 
    
    var earnings = people.map(getEarnings);

    var earningsOver = earnings.filter(function(Sal) {
        return Sal > target;
    });

    var earningsAbove = earningsOver.length;

    return earningsAbove;
};

exercise.totalBasePayroll = function() {

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */
    var people = exercise.data.data;
    var getBaseSalary = function(row) {
        return Number(row[11]);
    };
    var Bases = people.map(getBaseSalary);

    var totalBasePayroll = Bases.reduce(function(holder, next) {
        return holder + next;
    });
    return totalBasePayroll;
};

exercise.totalEarningsWithOvertime = function() {

    /* EX 4

    return the total Earnings with Overtime as an integer

    */
    
    var people = exercise.data.data;

    var earnings = people.map(getEarnings); 

    var totalEarningsWithOvertime = earnings.reduce(function(holder, next) {
        return holder + next;
    });
    return totalEarningsWithOvertime;
};

exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number zipcodes as an integer

    */
    var people = exercise.data.data;

    var zipCodes = [];

    var getZipCodes = function(row) {
        return Number(row[19]);
    };

    var ZipCodeList = people.map(getZipCodes);

    var UniqueZipCodes = function(holder, next) {
        if (holder.includes(next)) return (holder);
        else holder.push(next);
        return holder;
    };

    zipCodes = ZipCodeList.map(UniqueZipCodes);

    var numberUniqueZipCodes = zipCodes.length;
    return numberUniqueZipCodes; 
};