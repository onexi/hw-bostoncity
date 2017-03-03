var exercise = {};

/* INSTRUCTIONS

Boston City Data - Start of our Data Science journey
In your code do not use any "for loops" - use Array Callback style

*/
// note: in exercise.data, the data positions are stated as "1", "2", etc., but when working
// in js they are all +6. So position "12" is accessed via [18].
/*
06: id
07: position
08: NAME
09: TITLE
10: DEPARTMENT NAME
11: REGULAR ($$) 
12: RETRO ($$)
13: OTHER ($$)
14: OVERTIME ($$)
15: INJURED ($$)
16: DETAIL ($$)
17: QUINN ($$)
18: TOTAL EARNINGS ($$)
19: ZIP
*/

exercise.maxEarnings = function() {

    /* EX 1

    replace the for loop with one of the array callback functions
    first create an array of total earnings with overtime

    */

    //var totalEarningsWithOvertimeArray = [];

    /* JM: commented out example for loop we were told to replace.
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
    */

    // JM - I added it
    var people = exercise.data.data;
    var earnings = people.map(getEarnings);
    //var currentMax = findMax(earnings);
    var currentMax = earnings.reduce(findMax, 0);
    //var currentMax = earnings.reduce(findMax(earnings), 0);
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

var getEarnings = function(person) {
    return Number(person[18]);
};

var findMax = function (previous, current){
    if (current > previous) previous = current;
    return previous;
}
//JM: for posterity:
// var findMax = function(earningArray) {
//     return Math.max.apply(Math, earningArray); //alt: Math.max(...earningArray);

//     // var currentMax = 0.0;
//     // //var people = exercise.data.data;
//     // var dataLength = earningArray.length;
//     // var currentSal;

//     // for (var i = 0; i < dataLength; i++) {
//     //     currentSal = Number(earningArray[i]);
//     //     if (currentMax < currentSal) {
//     //         currentMax = currentSal;
//     //     };
//     // };
//     //return currentMax;
// };


exercise.earningsAbove = function(target) {

    /* EX 2

    return the number of people with salaries above "target"
    use filter to create an array of salaries above "target"
    then return the length of the array

    */


    var people = exercise.data.data; // get handle on data

    //JM: I added below
    var earnings = people.map(getEarnings);

    var isAboveTarget = function (test) {
        return (test > target);
    };


    //var salariesAboveTarget = earnings.filter(isAboveTarget());
    var salariesAboveTarget = earnings.filter(isAboveTarget);

    return salariesAboveTarget.length;
};

exercise.totalBasePayroll = function() {

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */
    // JM added:
    var people = exercise.data.data;
    var earnings = people.map(getBaseEarnings);
    var earningsTotal = earnings.reduce(function(total, num){
        return total + num
    });
    return Math.floor(earningsTotal);
};

var getBaseEarnings = function(person) {
    return Number(person[11]);
};

var getZips5digit = function(person) {
    if (person[19]){
        return person[19].slice(0,6);    
    } else {return false};
    
};

exercise.totalEarningsWithOvertime = function() {

    /* EX 4

    return the total Earnings with Overtime as an integer

    */
    // JM added:
    var people = exercise.data.data;
    var earnings = people.map(getEarnings);
    var earningsTotal = earnings.reduce(function(total, num){
        return total + num
    });
    return Math.floor(earningsTotal);
};


exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number of zipcodes as an integer

    */

    var uniqueZips = [];
    var people = exercise.data.data;
    var zipListWithDups = people.map(getZips5digit);

    var isUnique = function (element){
        if (!(element == "UNKNO" || element == "NSBIS")){
            if (!( uniqueZips.includes(element))) {
                uniqueZips.push(element);
            };
        };
       return !(uniqueZips.includes(element));
    };

    zipListWithDups.forEach(isUnique);
    return uniqueZips.length;
};