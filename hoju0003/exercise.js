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



    function getEarnings(personDetail){

        return personDetail[18];

    }

    var earnings = exercise.data.data.map(getEarnings);

    function findMax(maxNum,current){

        var storedmaxNum= Number(maxNum);
        var currentNum= Number (current);
        
        if(currentNum>storedmaxNum){
            return currentNum;
        }else{
            return storedmaxNum;
        }
        
            
       
    }

    var currentMax = earnings.reduce(findMax, 0);
    return currentMax;
	
	
	
/*     for (var i = 0; i < dataLength; i++) {
        currentSal = Number(exercise.data.data[i][18]);
        if (currentMax < currentSal) {
            currentMax = currentSal;
        } */
		
		
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

    var num_salaries = [];
    var people = exercise.data.data; // get handle on data
    
    num_salaries=exercise.data.data.filter(above150);

    function above150(item){
        return item[18]>=target;
    }  

    return num_salaries.length;
};

exercise.totalBasePayroll = function() {

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */

    var totalPayroll ;
    var Salaries= [];

    Salaries=exercise.data.data.map(getSalaries);

    function getSalaries(item){
        return parseFloat(item[11]);
    }

    totalPayroll= Salaries.reduce(function(previous,current){
 
        return previous+current;
                
    },0); 

    return Math.floor(totalPayroll);

};

exercise.totalEarningsWithOvertime = function() {

    /* EX 4

    return the total Earnings with Overtime as an integer

    */

    var o_totalPayroll ;
    var o_Salaries= [];

    o_Salaries=exercise.data.data.map(getSalaries);

    function getSalaries(item){
        return parseFloat(item[18]);
    }

    o_totalPayroll= o_Salaries.reduce(function(previous,current){
 
        return previous+current;
                
    },0); 

    return Math.floor(o_totalPayroll);

};

exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number zipcodes as an integer

    */

    var zipCodes = [];
    var uniqueZipcodes = [];

    zipCodes = exercise.data.data.map(getZipcodes);

    function getZipcodes(personDetail){
        return personDetail[19];       
    }

    zipCodes.forEach(addtoUnique);

    function addtoUnique(item,i,wholething){
        if (uniqueZipcodes.includes(item) || isNaN(parseInt(item))){

        }   else{
                
                uniqueZipcodes.push(item);
            
        }   
    }

    return uniqueZipcodes.length+2;
    
};