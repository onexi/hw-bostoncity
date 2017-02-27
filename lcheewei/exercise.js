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

    var currentMax = 0.0;
    var people = exercise.data.data;
    var dataLength = people.length;
    var currentSal;

    /* for (var i = 0; i < dataLength; i++) {
        currentSal = Number(exercise.data.data[i][18]);
        if (currentMax < currentSal) {
            currentMax = currentSal;
        }
    } */

    function getEarnings (salary){
        return salary[18];
    }

    function findMax (num1, num2){
        if (Number(num2)>Number(num1) ) return num2;
        else return num1;        
    }

    var earnings = people.map(getEarnings);
    currentMax = earnings.reduce(findMax, 0);

    return Number(currentMax);
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

    var num_salaraies = 0;
    var people = exercise.data.data; // get handle on data

    function earningsAbove (element){
        var compare = element[18] >target;
        return compare;
    }

    var filtered = people.filter (earningsAbove);
    num_salaraies = filtered.length;

    return num_salaraies;
};

exercise.totalBasePayroll = function() {

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */
    var people = exercise.data.data;

    function getEarnings (salary){
        return parseFloat(salary[11]);
    }

    function findTotal (num1, num2){
      //  console.log('num1: '+ num1) ;
       // console.log('num2: '+ num2) ;
        return num1+num2;    
    }

    var earnings = people.map(getEarnings);
    var TotalPayroll = earnings.reduce(findTotal, 0);

    return parseInt(TotalPayroll);

};

exercise.totalEarningsWithOvertime = function() {

    /* EX 4

    return the total Earnings with Overtime as an integer

    */
    var people = exercise.data.data;

    function getEarnings (salary){
        return parseFloat(salary[18]);
    }

    function findTotal (num1, num2){
        return num1+num2;    
    }

    var earnings = people.map(getEarnings);
    var TotalPayroll = earnings.reduce(findTotal, 0);

    return parseInt(TotalPayroll);

};

exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number zipcodes as an integer

    */

    var zipCodes = [];

    var people = exercise.data.data;



    function getZipcode (zip){
        return Number(zip[19]);
    }

    function ReduceZip (previous, current){
       // var tempList
    /*    if (isNaN(current)) {
            //console.log('NaN: '+ current) ;
            return previous;
        }  */
        if (previous.includes(current)){return previous;}   
        else {
            previous.push(current);
            //console.log('zipcodes: '+ current) ;
        }
        return previous;
    }

    var zipList = people.map(getZipcode);

    zipCodes = zipList.reduce(ReduceZip,[]);
    
    //console.log('zipcodes: '+ zipCodes) ;

    return zipCodes.length;
};