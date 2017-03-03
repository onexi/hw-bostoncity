var exercise = {};

/* INSTRUCTIONS

Boston City Data - Start of our Data Science journey
In your code do not use any "for loops" - use Array Callback style

*/

exercise.maxEarnings = function() {
    var people = exercise.data.data;

    var getSalaries = function(item){
        return item[18];
    };

    var findMax = function(maxIncome, item){
        if (Number(item) > maxIncome){
            return Number(item);
        }
        else{
            return maxIncome;
        }
    };

    return people.map(getSalaries).reduce(findMax, 0);;
};

exercise.earningsAbove = function(target) {
    var num_salaraies = 0;
    var people = exercise.data.data; // get handle on data
    
    var getSalaries = function(item){
        return item[18];
    };

    var filterSalaries = function(item){
        return Number(item) > target;
    };

    var highSalaries = people.map(getSalaries).filter(filterSalaries);
    num_salaraies = highSalaries.length;

    return num_salaraies;
};

exercise.totalBasePayroll = function() {

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */
    var people = exercise.data.data; // get handle on data
    
    var getBaseSalaries = function(item){
        return item[11];
    };

    var getTotal = function(total, item){
        return total += Number(item);
    };

    return parseInt(people.map(getBaseSalaries).reduce(getTotal, 0));

};

exercise.totalEarningsWithOvertime = function() {

    /* EX 4

    return the total Earnings with Overtime as an integer

    */
    var people = exercise.data.data; // get handle on data
    
    var getFullSalaries = function(item){
        return item[18];
    };

    var getTotal = function(total, item){
        return total += Number(item);
    };

    return parseInt(people.map(getFullSalaries).reduce(getTotal, 0));
};

exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number zipcodes as an integer

    */

    var zipCodes = [];
    var people = exercise.data.data; // get handle on data
    
    var getZip = function(item){
        return item[19];
    };

    var getUniqueZips = function(item){
        if (zipCodes.includes(Number(item)) === false){
            zipCodes.push(Number(item));
        }
    };

    people.map(getZip).forEach(getUniqueZips);

    return zipCodes.length;
};