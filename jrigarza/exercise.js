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

    function getEarnings(person) {
        return Number(person[18]);
    }

    function findMax(localMax, income) {
        if (income > localMax) {
            localMax = income;
        }
        return localMax;
    }

    var people = exercise.data.data;
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

    function getEarnings(person) {
        return Number(person[18]);
    }

    function aboveTarget(earnings) {
        return earnings > target;
    }

    var people = exercise.data.data; // get handle on data
    var earnings = people.map(getEarnings);
    var compliant = earnings.filter(aboveTarget);

    var num_salaraies = compliant.length;

    return num_salaraies;
};

exercise.totalBasePayroll = function() {

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */

    function getBasePayroll(person) {
        return Number(person[11]);
    }

    function getSum(sum, income) {
        return sum + income;
    }

    var people = exercise.data.data;
    var payroll = people.map(getBasePayroll);
    var totalPayroll = payroll.reduce(getSum, 0);

    return Math.floor(totalPayroll);

};

exercise.totalEarningsWithOvertime = function() {

    /* EX 4

    return the total Earnings with Overtime as an integer

    */

    function getEarnings(person) {
        return Number(person[18]);
    }

    function getSum(sum, income) {
        return sum + income;
    }

    var people = exercise.data.data;
    var earnings = people.map(getEarnings);
    var totalPayrollWithOverTime = earnings.reduce(getSum, 0);

    return Math.floor(totalPayrollWithOverTime);

};

exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number zipcodes as an integer

    */

    function getZipCodes(person){
        return person[19];
    }

    function getUnique(zipCode, index, self) {
        return index == self.indexOf(zipCode);
    }

    var people = exercise.data.data;
    var rawZipCodes = people.map(getZipCodes);

    var zipCodes = rawZipCodes.filter(getUnique);

    return zipCodes.length;
};