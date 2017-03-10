var exercise = {};

/* INSTRUCTIONS

Boston City Data - Start of our Data Science journey
In your code do not use any "for loops" - use Array Callback style
*/
//exercise.maxEarnings = function() {
    /* EX 1
    replace the for loop with one of the array callback functions
    first create an array of total earnings with overtime

    */
//     var currentMax = 0.0;
//     var people = exercise.data.data;
//     var dataLength = people.length;
//     var currentSal;

//     for (var i = 0; i < dataLength; i++) {
//         currentSal = Number(exercise.data.data[i][18]);
//         if (currentMax < currentSal) {
//             currentMax = currentSal;
//         }
//     }

//     return currentMax;
// };

//  EX 1

// this gives you an example for the above
// you still need to write the functions getEarnings and findMax
var getEarnings = function(people){
    return Number(people[18]);
};
var getBaseEarnings = function(people){
    return Number(people[11]);
};
var getZipCodes = function(zip){
    return Number(zip[19]);
};
exercise.maxEarnings = function() {
    var people = exercise.data.data;
    // function getEarnings(people){
    //     return Number(people[18]);
    // };
    var fmax = function(previous, current){
        if (current > previous )previous = current;
        // console.log(previous);
        return previous;
    }
    var earnings = people.map(getEarnings);
    var cmax = earnings.reduce(fmax,0);

    // var currentMax = Math.max(...earnings);

    return cmax;
 //   return earnings;
};
exercise.earningsAbove = function(target) {
    /* EX 2
    return the number of people with salaries above "target"
    use filter to create an array of salaries above "target"
    then return the length of the array
    */
    var people = exercise.data.data;
    var numSalary = people.map(getEarnings); // get handle on data
    var isAboveTargetSal = function(item){
        var sal = (item>target);
        return sal;
        }
    var myarray = numSalary.filter(isAboveTargetSal);
    return myarray.length;
};

exercise.totalBasePayroll = function() {
    var people = exercise.data.data;
    var numSalary = people.map(getBaseEarnings);
    var baseSal = numSalary.reduce((a,b) => a+b,0);
    return Math.floor(baseSal);
    /* EX 3
    return the total payroll for Boston City as an integer
    use Map and Reduce to do this
    */
};

exercise.totalEarningsWithOvertime = function() {
    var people = exercise.data.data;
    var numSalary = people.map(getEarnings);
    var baseSal = numSalary.reduce((a,b) => a+b,0);
    return Math.floor(baseSal);
    /* EX 4
    return the total Earnings with Overtime as an integer
    */
};

exercise.numberUniqueZipCodes = function() {
    var zip = exercise.data.data;
    var zCod = zip.map(getZipCodes);
    // var countZip = function(item){
    var zipCodes = [];
    for (var i = 0; i < zCod.length; i++) {
        if (!(zipCodes.includes(zCod[i]))) {
            zipCodes.push(zCod[i]);
            }
    }
    return zipCodes.length;
    //}
    /* EX 5
    return the unique number of zipcodes as an integer
    */
 };