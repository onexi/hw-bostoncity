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

    /*var currentMax = 0.0;
    var people = exercise.data.data;
    var dataLength = people.length;
    var currentSal;

    for (var i = 0; i < dataLength; i++) {
        currentSal = Number(exercise.data.data[i][18]);
        if (currentMax < currentSal) {
            currentMax = currentSal;
        }
    }

    return currentMax;*/
};

/* EX 1

this gives you an example for the above
you still need to write the functions getEarnings and findMax

*/

exercise.maxEarnings = function() {
    var people = exercise.data.data;
    var earningsIsString = people.map(exercise.getEarnings);
    var earningsInt = earningsIsString.map(Number);//I don't fully understand how this even works
    var currentMax = earningsInt.reduce(exercise.findMax, 0);
    return currentMax;
};

exercise.getEarnings = function(person) {
    var personEarnings = person[11];
    return personEarnings;
    
};

exercise.findMax = function(a,b) {
    if (a < b){
        return b;
    }
    else {
        return a;
    }
    //Math.max(a,b);
};

exercise.earningsAbove = function(target) {

    /* EX 2

    return the number of people with salaries above "target"
    use filter to create an array of salaries above "target"
    then return the length of the array

    */
    var people = exercise.data.data; // get handle on data
    var baseEarningsIsString = people.map(exercise.getEarnings);
    var baseEarningsInt = baseEarningsIsString.map(Number);//I don't fully understand how this even works

    function isBigEnough(element) {
        return target <= element;  
    }
    
    var num_salaraies = 0;
    var aboveEarnings = baseEarningsInt.filter(isBigEnough);
    num_salaraies = aboveEarnings.length;
    return num_salaraies;//map to array, then filter it
    

/*
function isBigEnough(element) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered);
*/
};

exercise.totalBasePayroll = function() {

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */
    var people = exercise.data.data; // get handle on data
    var baseEarningsIsString = people.map(exercise.getEarnings);
    var baseEarningsInt = baseEarningsIsString.map(Number);//I don't fully understand how this even works
    var totalPayroll = baseEarningsInt.reduce(function(a,b) {
        return a + b;
    });
    return totalPayroll;


};//map to array then reduce

exercise.totalEarningsWithOvertime = function() {

    /* EX 4

    return the total Earnings with Overtime as an integer

    */
    var people = exercise.data.data; // get handle on data
    console.log(people);
    var baseEarningsIsString = people.map(function(x){
        var personEarnings = x[18];
        return personEarnings;
    });
    console.log(baseEarningsIsString);
    var baseEarningsInt = baseEarningsIsString.map(Number);//I don't fully understand how this even works
    /*
    
favorite
I have created an array:

var endFlowArray = new Array;
for (var endIndex in flowEnd) { // <- this is just some numbers 
    for (var i in dateflow) { // <- same thing 
        var check = $.inArray(flowEnd[endIndex], dateflow[i]);
        if (check >= 0) {
            endFlowArray.push(i);
            flowEnd[endIndex] = null;
        }
    }
}

var arrayOfNumbers = arrayOfStrings.map(Number);
    
    */
    console.log(baseEarningsInt);
    var totalPayroll = baseEarningsInt.reduce(function(a,b) {
        return a + b;
    });
    console.log(totalPayroll);
    return totalPayroll;

};//map to array then reduce

//exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number zipcodes as an integer

    */

    //var zipCodes = [];

    //return zipCodes.length;
//};