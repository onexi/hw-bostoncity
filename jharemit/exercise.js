var exercise = {};

/* INSTRUCTIONS

Boston City Data - Start of our Data Science journey
In your code do not use any "for loops" - use Array Callback style

*/
// location 8 = name
// 9 = title
// 10 = dept?
// 11 = base salary
// 13 = OT maybe
// 18 = total earnings = (base salary + total earnings)
// 19 = zip code!

exercise.maxEarnings = function(data) {

    /* EX 1
    replace the for loop with one of the array callback functions
    first create an array of total earnings with overtime
    */
    
    //grabs my data
    var people = exercise.data.data;

    //grabs row 18 (salaries) from input data
    var getSalaries = function(row){
        return row[18];
    }

    //maps the data out for just grabbing the salaries
    var currentSal = people.map(getSalaries);
    
    //converts all 'salaries' to numeric salaries
    numericSalary=[];
    var convertNumber = function(item){
    numericSalary.push(Number(item));
    }
    
    //sends each row of salary into convertNumber function
    currentSal.forEach(convertNumber);
    
    //determines the maximum of the numeric salaries!
    var currentMax = Math.max(...numericSalary);
    return currentMax;
}
    // for (var i = 0; i < dataLength; i++) {
    //     currentSal = Number(exercise.data.data[i][18]);
    //     if (currentMax < currentSal) {
    //         currentMax = currentSal;
    //     }
    // }

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

    var num_salaries = 0;
    var people = exercise.data.data; // get handle on data
    

    var getSalaries = function(row){
        return row[18];
    }

    //maps the data out for just grabbing the salaries
    var currentSal = people.map(getSalaries);

    //checks each salary to be over the target value (150K in this case), returns T/F
    checkSalary = function(element){
        var comparison = element >= target;
        return comparison;
    }
    
    //takes all the salaries, runs them through a function that either takes it as T or F, adds it if it's true, drops if false 
    num_salaries = currentSal.filter(checkSalary)
    
    return num_salaries.length;
};

exercise.totalBasePayroll = function() {

    //grabs my data
    var people = exercise.data.data;

    //grabs row 11 (base pay) from input data
    var getSalaries = function(row){
        return row[11];
    }

    //maps the data out for just grabbing the salaries
    var currentBase = people.map(getSalaries);
    
    //adds up all base salaries to numeric salaries
    var sumSalaries=0;
    var add = function(item){
    sumSalaries += Number(item);
    }
    
    //sends each row of salary into convertNumber function
    currentBase.forEach(add);
    return Math.floor(sumSalaries);

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */

};

exercise.totalEarningsWithOvertime = function() {

    /* EX 4

    return the total Earnings with Overtime as an integer

    */

    //grabs my data
    var people = exercise.data.data;

    //grabs row 18 (total pay) from input data
    var getSalaries = function(row){
        return row[18];
    }

    //maps the data out for just grabbing the salaries
    var currentTotal = people.map(getSalaries);
    
    //adds up all base salaries to numeric salaries
    var sumSalaries=0;
    var add = function(item){
    sumSalaries += Number(item);
    }
    
    //sends each row of salary into convertNumber function
    currentTotal.forEach(add);
    return Math.floor(sumSalaries);

};

exercise.numberUniqueZipCodes = function() {

    /* EX 5

    return the unique number zipcodes as an integer

    */

    var zipsCodes = [];

    //grabs my data
    var people = exercise.data.data;

    //grabs row 19 (zip code) from input data
    var getZip = function(row){
        return row[19];
    }

    var zipCodes = people.map(getZip);

    //returns only unique zip codes to an array
    uniqueZips = function(element,i){
        return zipCodes.indexOf(element)===i}

    //Applys the "uniqeZips" filter to the array zipCodes to define Unique Zip Codes
    UniqueZipCodes = zipCodes.filter(uniqueZips)

    return UniqueZipCodes.length -2;
};