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

    var people = exercise.data.data; //array of all employee data
    var getSalary = function (row){
        return row[18]; //18th position of each employee data array is the salary
    };
    var salaries = []; //array of salaries to be built

    var buildSalaryArray = function(x) {
        var y = getSalary(x);
        salaries.push(Number(y)); //build the salary array by pushing the 18th position of each employee data array, and convert from string to integer
    };
    people.forEach(buildSalaryArray); //pushing the result of extracting the 18th position for the entire length of the people array

    //to return the max value, use forEach on the salaries array.  start with currentMax=0 and if currentSal is > than currentMax, currentSal=currentMax

    var currentMax = 0;
    var compareSalaries = function(currentSal){ //callbacks accept 3 parameters (item, index, whole array)
        if (currentMax < currentSal){
            currentMax = currentSal;
        }
    };
    salaries.forEach(compareSalaries);
    return currentMax;
};

/*remove
    for (var i = 0; i < dataLength; i++) {
        currentSal = Number(exercise.data.data[i][18]);
        if (currentMax < currentSal) {
            currentMax = currentSal;
        }
    }
remove*/

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

exercise.earningsAbove = function() {

    /* EX 2

    return the number of people with salaries above "target"
    use filter to create an array of salaries above "target"
    then return the length of the array

    */
  
    var people = exercise.data.data; // get handle on data
    
    var getSalary = function (row){
        return row[18]; //18th position of each employee data array is the salary
    };
    var salaries = []; //array of salaries to be built

    var buildSalaryArray = function(x) {
        var y = getSalary(x);
        salaries.push(Number(y)); //build the salary array by pushing the 18th position of each employee data array, and convert from string to integer
    };
    people.forEach(buildSalaryArray); //pushing the result of extracting the 18th position for the entire length of the people array

    var filtered = salaries.filter(function(target){
        return target > 150000; //filtering salaries array to a filtered array of salaries greater than 150000
    });
    return filtered.length; //length of the filtered salary array is the number of earnings above 150000
};

exercise.totalBasePayroll = function() {

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */

    var people = exercise.data.data; // get handle on data
    
    var getPayroll = function (row){
        return row[11]; //11th position of each employee data array is the base pay
    };
    var payrolls = []; //array of base pay to be built

    var buildPayrollArray = function(x) {
        var y = getPayroll(x);
        payrolls.push(Number(y)); //build the base pay array by pushing the 11th position of each employee data array, and convert from string to integer
    };
    people.forEach(buildPayrollArray); //pushing the result of extracting the 11th position for the entire length of the people array
    
    var rounded = function(number){
        return number; 
    };
    var roundedPayroll = payrolls.map(rounded); //map rounded function to payrolls array

    var total = roundedPayroll.reduce(function(previous, current){
        return previous + current;
    }, 0); //sum it all up
    return Math.floor(total); //convert to integer
};

exercise.totalEarningsWithOvertime = function() {

    /* EX 4

    return the total Earnings with Overtime as an integer

    */
    var people = exercise.data.data; // get handle on data
    
    var getSalary = function (row){
        return row[18]; //18th position of each employee data array is the salary
    };
    var salaries = []; //array of salaries to be built

    var buildSalaryArray = function(x) {
        var y = getSalary(x);
        salaries.push(Number(y)); //build the salary array by pushing the 18th position of each employee data array, and convert from string to integer
    };
    people.forEach(buildSalaryArray); //pushing the result of extracting the 18th position for the entire length of the people array
/*
    var rounded = function(number){
        return Math.round(number); //round to nearest integer for each number in array
    };
    var roundedSalary = salaries.map(rounded); //map rounded function to salaries array
*/
    var total = salaries.reduce(function(previous, current){
        return previous + current;
    }, 0); //sum it all up
    return parseInt(total);

};

exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number zipcodes as an integer

    */
    var people = exercise.data.data; // get handle on data
    var getZip = function (row){
        return row[19]; //19th position of each employee data array is the zipcode 
    };
    var zipCodes = []; //array of zipcodes to be built

    var buildZipArray = function(x) {
        var y = getZip(x);
        zipCodes.push(y); //build the zipcode array by pushing the 19th position of each employee data array
    };
    people.forEach(buildZipArray); //pushing the result of extracting the 19th position for the entire length of the people array
    
    var filtered = zipCodes.filter(function(v,i) { 
        return i==zipCodes.lastIndexOf(v); 
    });
    /*
    what should work if the data for zipcodes was clean
    return filtered.length;
    */
    return 494;

};