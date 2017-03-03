var exercise = {};

/* INSTRUCTIONS

Boston City Data - Start of our Data Science journey
In your code do not use any "for loops" - use Array Callback style

*/

// exercise.maxEarnings2 = function () {

//     /* EX 1

//     replace the for loop with one of the array callback functions
//     first create an array of total earnings with overtime

//     */
//     var people = exercise.data.data;
//     return people.reduce(function (vPre, vCur ) {
//         return vPre > vCur[18] ? vPre :vCur[18];
//     }, 0 );    
// };

/* EX 1

this gives you an example for the above
you still need to write the functions getEarnings and findMax

*/

exercise.maxEarnings = function() {
    var people = exercise.data.data;
    var earnings = people.map(getEarnings);
    var currentMax = earnings.reduce(findMax, 0);
    return currentMax;
};

function getEarnings(item){
    return Number(item[18]);
}

function findMax(pre, cur){
    return Number(pre) > Number(cur) ? Number(pre) : Number(cur);
}

exercise.earningsAbove = function (target) {

    /* EX 2

    return the number of people with salaries above "target"
    use filter to create an array of salaries above "target"
    then return the length of the array

    */


    var people = exercise.data.data; // get handle on data
    var earnings = people.map(getEarnings);

    var res = earnings.filter(function(item){
        return item > target;
    });

    return res.length;
};

exercise.totalBasePayroll = function () {

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */
    var res = exercise.data.data.reduce( function(pre, cur){
        return pre + Number(cur[11]);
    }, 0);
    
    return Math.floor(res);

};

exercise.totalEarningsWithOvertime = function () {

    /* EX 4

    return the total Earnings with Overtime as an integer

    */
    var earnings = exercise.data.data.map(getEarnings);
    var res = earnings.reduce(function(pre, cur){
        return pre + cur;
    }, 0);
    
    return Math.floor(res);
    
};

exercise.numberUniqueZipCodes = function () {

    /* EX 5

    return the unique number zipcodes as an integer

    */

    var zipCodes = [];

    exercise.data.data.forEach( function(item){
        if (!zipCodes.includes(Number(item[19]))) zipCodes.push(Number(item[19]));
    });
    return zipCodes.length;

};