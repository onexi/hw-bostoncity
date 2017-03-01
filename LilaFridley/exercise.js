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

    // var currentMax = 0.0; <-- unnecessary?
    var people = exercise.data.data;
    //var dataLength = people.length; <-- unnecessary? 

    var getEarnings = function(row){return Number(row[18]);};
    var earnings = people.map(getEarnings);

    var findMax = function(earnings) {
        return Math.max.apply(null, earnings);
    };
    var currentMax = findMax(earnings);

    //var currentMax = earnings.reduce(findMax,0); <-- unnecessary? 
                //my findMax function returns a single number 
   
    return currentMax;

    // for (var i = 0; i < dataLength; i++) {
    //     currentSal = Number(exercise.data.data[i][18]);
    //     if (currentMax < currentSal) {
    //         currentMax = currentSal;
    //     }
    // }
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

exercise.earningsAbove = function(target) {

    /* EX 2

    return the number of people with salaries above "target"
    use filter to create an array of salaries above "target"
    then return the length of the array

    */

    //var num_salaries = 0;
    var people = exercise.data.data; // get handle on data

    var getEarnings = function(row){return Number(row[18]);};
    var Earnings = people.map(getEarnings);

    var isGreaterThan = function(Earnings){return Earnings > target;};
    var greater = Earnings.filter(isGreaterThan);
    var num_Earnings = greater.length;

    return num_Earnings;
};

exercise.totalBasePayroll = function() {

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */
    var people = exercise.data.data; // get handle on data

    var getSalaries = function(row)
        {return Number(row[11]);};
    var salaries = people.map(getSalaries);

    var addSalaries = function(previous,current){ return (previous+current);};

    var totalpayroll = salaries.reduce(addSalaries,0);
    return Math.floor(totalpayroll);
};

exercise.totalEarningsWithOvertime = function() {

    /* EX 4

    return the total Earnings with Overtime as an integer

    */
    var people = exercise.data.data; // get handle on data

    var getPayWithOT = function(row)
        {return Number(row[18]);};
    var paywithOT = people.map(getPayWithOT);

    var addPayWithOT = function(previous,current){ return (previous+current);};

    var TotalPayWithOT = paywithOT.reduce(addPayWithOT,0);
    return Math.floor(TotalPayWithOT);

};

exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number zipcodes as an integer

    */
    var people = exercise.data.data;  //get handle on data

    //var zipCodes = [];
    var getZip = function(row)
        {return Number(row[19]);};
    var AllZipCodes = people.map(getZip);

    function onlyUnique(value, index, self) 
        {return self.indexOf(value) === index;
        }
    
    var UniqueZipCodes = AllZipCodes.filter(onlyUnique);

    return UniqueZipCodes.length + 1;

  
};