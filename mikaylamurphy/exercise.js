var exercise = {};

/* INSTRUCTIONS

Boston City Data - Start of our Data Science journey
In your code do not use any "for loops" - use Array Callback style

*/

exercise.getEarnings = function(person){
    return person[18];
};

exercise.getZip = function(person){
    return person[19];
    //13
    //overtime = 8; so actually 14
    //salary = 5; so actually 11
};

exercise.getOvertime = function(person){
    return person[14];
};

exercise.basePay = function(person){
    return person[11];
};

exercise.findMax = function(new1, current){
    if (parseFloat(new1) > current){
        current = parseFloat(new1);
        return parseFloat(new1);
    } else {
        return current};
};

exercise.getTotal = function(new1, current){
    var new1 = parseFloat(new1);
    current = parseFloat(new1) + parseFloat(current);
    return parseFloat(current);
};

exercise.maxEarnings = function() {

    /* EX 1

    replace the for loop with one of the array callback functions
    first create an array of total earnings with overtime

    */

    var currentMax = 0.0;
    var people = exercise.data.data;
    var dataLength = people.length;
    var currentSal;

    var earnings = people.map(exercise.getEarnings);
    var currentMax = earnings.reduce(exercise.findMax, 0);
    return currentMax;

    /* for (var i = 0; i < dataLength; i++) {
        currentSal = Number(exercise.data.data[i][18]);
        if (currentMax < currentSal) {
            currentMax = currentSal;
        }
    }

    return currentMax; */
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

/*exercise.largerSalary = function largerSalary(item, globaltarget){
    //console.log(parseFloat(item[11]));
    console.log(globaltarget);
    return parseFloat(item[11]) > 150000;
};
*/
exercise.earningsAbove = function(target) {


    /* EX 2

    return the number of people with salaries above "target"
    use filter to create an array of salaries above "target"
    then return the length of the array

    */
    //console.log(target);
    var num_salaraies = 0;
    var people = exercise.data.data; // get handle on data
    var earnings = people.filter(function(item){return parseFloat(item[18])>target});
    var num_salaraies = earnings.length;
    return num_salaraies;
};

exercise.totalBasePayroll = function() {

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */
    var people = exercise.data.data;
    var earnings = people.map(exercise.basePay);
    var currentMax = earnings.reduce(exercise.getTotal, 0.0);
    return parseInt(currentMax);

};

exercise.totalEarningsWithOvertime = function() {

    /* EX 4

    return the total Earnings with Overtime as an integer

    */
    var people = exercise.data.data;
    var earnings = people.map(exercise.getEarnings);
    var currentMax = earnings.reduce(exercise.getTotal, 0.0);
    return parseInt(currentMax);

};

exercise.unique = function(i, j, original){
    return original.indexOf(i) === j;
}

exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number zipcodes as an integer

    */
    var zipCodes = [];
    var people = exercise.data.data;
    var zipCodes = people.map(exercise.getZip);
    var uniquezipCodes = zipCodes.filter(exercise.unique);
    uniquezipCodes = uniquezipCodes.filter(function(n){ return n != null });
    uniquezipCodes = uniquezipCodes.filter(function(n){ return n != "UNKNO" });
    //uniquezipCodes = uniquezipCodes.filter(function(str){return !/^[a-zA-Z]+$/i.test(str)});
    return uniquezipCodes.length;
};