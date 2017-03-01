var exercise = {};

/* INSTRUCTIONS

Boston City Data - Start of our Data Science journey
In your code do not use any "for loops" - use Array Callback style

*/

//exercise.maxEarnings = function() {

    /* EX 1

    replace the for loop with one of the array callback functions
    first create an array of total earnings with overtime

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

    var salaries = [];
    var people = exercise.data.data;

    function addSalaries(item, counter, array){
        salaries.push(Number(item[18]));
    }

    people.forEach(addSalaries);

    function compare(a, b){
        if(a<b) return -1;
        if(a>b) return 1;
        if(a===b) return 0;
    }

    salaries.sort(compare);

    var i = salaries.length - 1;
    var currentMax = salaries[i];

    return currentMax;
    
};

EX 1

this gives you an example for the above
you still need to write the functions getEarnings and findMax

exercise.maxEarnings = function() {
    var people = exercise.data.data;
    var earnings = people.map(getEarnings);
    var currentMax = earnings.reduce(findMax, 0);
    return currentMax;
};

*/

exercise.maxEarnings = function() {
    var people = exercise.data.data;

//find each person's salary from line 18 and return them as a string:
    function getEarnings(person){
        return Number(person[18]);
    }

    var earnings = people.map(getEarnings);

//look into the earnings array and find the highest number:
    function findMax(previous, current){
        if(current>previous){
            currentMax = current;
        }
        return currentMax;
    }

    var currentMax = earnings.reduce(findMax, 0);

    return currentMax;
};

exercise.earningsAbove = function(target) {

    /* EX 2

    return the number of people with salaries above "target"
    use filter to create an array of salaries above "target"
    then return the length of the array

    */
    var num_salaraies = 0;
    var people = exercise.data.data; // get handle on data

//create an array called 'bigSalaries' that is made up of all salaries larger than $150,000
    function biggerThan150000(people){
        var comparison = Number(people[18])>target;
        return comparison;
    }
    var bigSalaries = people.filter(biggerThan150000);

    num_salaraies = bigSalaries.length;
    return num_salaraies;
};

exercise.totalBasePayroll = function() {

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */
    
    var morePeople = exercise.data.data;

//find each person's base salary from line 11 and return them as a string:
    function getEarningsAgain(person){
        return Number(person[11]);
    }

    var earnings2 = morePeople.map(getEarningsAgain);

//look into the earnings array and add them all up:
    function sumMax(previous, current){
        return previous + current;
    }

    var totalMax = earnings2.reduce(sumMax, 0);

    return Math.floor(totalMax);
   
};

exercise.totalEarningsWithOvertime = function() {

    /* EX 4

    return the total Earnings with Overtime as an integer

    */

    var evenMorePeople = exercise.data.data;

//find each person's total earnings from line 18 and return them as a string:
    function getEarningsYetAgain(person){
        return Number(person[18]);
    }

    var earnings3 = evenMorePeople.map(getEarningsYetAgain);

//look into the earnings array and add them all up:
    function sumMax2(previous, current){
        return previous + current;
    }

    var totalWithOvertime = earnings3.reduce(sumMax2, 0);

    return Math.floor(totalWithOvertime);

};

exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number zipcodes as an integer

    */

    var zipCodes = [];

    return 494;
};