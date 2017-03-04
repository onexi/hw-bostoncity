var exercise = {};

/* INSTRUCTIONS

Boston City Data - Start of our Data Science journey
In your code do not use any "for loops" - use Array Callback style

*/



    /* EX 1

    replace the for loop with one of the array callback functions
    first create an array of total earnings with overtime

    */

function getEarnings(person){
    return Number(person[18]);
}


function findMax(num1,num2){
    return Math.max(num1,num2);

}
exercise.maxEarnings = function() {
    var people = exercise.data.data;
    var earnings = people.map(getEarnings);
    var currentMax = earnings.reduce(findMax, 0);
    return currentMax;
}




exercise.earningsAbove = function(target) {

    /* EX 2

    return the number of people with salaries above "target"
    use filter to create an array of salaries above "target"
    then return the length of the array

    */
    function isBigEnough(element){
        var earning=getEarnings(element);
        return ccomparison=earning>target;
    }


    var people = exercise.data.data; // get handle on data
    var filtered=people.filter(isBigEnough);

    return filtered.length;
};

function add(num1,num2){
        var output =num1+num2;
        return output;
    }

exercise.totalBasePayroll = function() {

    /* EX 

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */
    
    var people=exercise.data.data;
    var payrolls = people.map(function getPayRolls(person){
        return Number(person[11]);
    }
        );
    var totalPayroll = payrolls.reduce(add,0);
    return Math.floor(totalPayroll);


};

exercise.totalEarningsWithOvertime = function() {

    /* EX 4

    return the total Earnings with Overtime as an integer

    */
    var people=exercise.data.data;
    var earnings=people.map(getEarnings);
    var totalEarning=earnings.reduce(add,0);
    return Math.floor(totalEarning);

};

exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number zipcodes as an integer

    */

    var uniqueZipCodes = [];
    var people=exercise.data.data;
    var zipcodes=people.map(function getZipcodes(person){
        return Number(person[19]);
    });

    // //Using a forEach Loop
    // function getUniqueZipcodes(zipcode){
    //     if (!(uniqueZipCodes.includes(zipcode))){
    //         uniqueZipCodes.push(zipcode);
    //     }
    // }
    
    // zipcodes.forEach(getUniqueZipcodes);

    // return uniqueZipCodes.length;



    //Using reduce function**************
    function Uniquefy(element1,element2){
        if (!(element1.includes(element2))){
            element1.push(element2);
        }
        return element1;
    }

    uniqueZipCodes=zipcodes.reduce(Uniquefy,[]);
    return uniqueZipCodes.length;


};