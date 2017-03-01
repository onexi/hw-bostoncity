var exercise = {};

/* INSTRUCTIONS

Boston City Data - Start of our Data Science journey
In your code do not use any "for loops" - use Array Callback style

*/
exercise.getEarnings = function(row){
    return Number(row[18]); 
}

exercise.findMax = function(x1, x2){
    if(x1>=x2){
        return x1; 
    }

    else{
        return x2;
    }
      
}
exercise.maxEarnings = function() {

    /* EX 1

    replace the for loop with one of the array callback functions
    first create an array of total earnings with overtime

    */

    var people = exercise.data.data;
    var earnings = people.map(exercise.getEarnings);
    var currentMax = earnings.reduce(exercise.findMax);
    return currentMax; 
}
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
exercise.above_target = function(item){
 
    return item > 150000;

}
exercise.earningsAbove = function(target) {

    /* EX 2

    return the number of people with salaries above "target"
    use filter to create an array of salaries above "target"s
    then return the length of the array

    */
    var earnings = exercise.data.data.map(exercise.getEarnings)
    var salaries = earnings.filter(exercise.above_target);
    var num_salaraies = salaries.length;
    return num_salaraies;
};


exercise.getPayroll = function(row){
    return Number(row[11]); 
}
exercise.total_pay = function(x1, x2){
    return x1+x2; 
}
exercise.totalBasePayroll = function() {

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */
    var payroll = exercise.data.data.map(exercise.getPayroll);
    var totalpay = payroll.reduce(exercise.total_pay);
    return Math.floor(totalpay); 
};

exercise.totalEarningsWithOvertime = function() {

    /* EX 4

    return the total Earnings with Overtime as an integer

    */
    var people = exercise.data.data;
    var earnings = people.map(exercise.getEarnings);
    var total_earning = earnings.reduce(exercise.total_pay);
    return Math.floor(total_earning);

};


exercise.get_zip = function(row){
    return Number(row[19]);
}
// exercise.unique = function([]){
//     if(x1 === x2){
//         return X1;
//     }

// }
exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number zipcodes as an integer

    */
    var people = exercise.data.data;
    var zip = people.map(exercise.get_zip);
    // console.log(zip);
    //var zipCodes = zip.reduce(exercise.unique);
    var zipCodes = Array.from(new Set(zip));





    return zipCodes.length;
};