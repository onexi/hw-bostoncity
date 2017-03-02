var exercise = {};

exercise.getEarnings = function(row){
    return Number(row[18]);
};

exercise.maxEarnings = function() {
    var people = exercise.data.data;
    var earnings = people.map(exercise.getEarnings);
    var findMax = function(previous,current){
        if(previous < current) return current;
        if(previous > current) return previous;
        else return current;
    };
    var currentMax = earnings.reduce(findMax,0);
    return currentMax;
};

exercise.earningsAbove = function() {
    var people = exercise.data.data; 
    var earnings = people.map(exercise.getEarnings);
    var isGreaterThan = function(item){
        var comparison = item > 150000;
        return comparison;
    };
    var num_salaraies = earnings.filter(isGreaterThan);
    return num_salaraies.length;
};

exercise.totalBasePayroll = function() {
    var people = exercise.data.data;
    var getBasePayroll = function(row){
        return Number(row[11]);
    };
    var payroll = people.map(getBasePayroll);
    var totalpayroll = payroll.reduce(function(previous,current){
        return previous + current;
    },0);
    return Math.floor(totalpayroll);
};

exercise.totalEarningsWithOvertime = function() {
    var people = exercise.data.data;
    var earnings = people.map(exercise.getEarnings);
    var totalearnings = earnings.reduce(function(previous,current){
        return previous + current;
    },0);
    return Math.floor(totalearnings);
};

exercise.numberUniqueZipCodes = function() {
    var people = exercise.data.data;
    var getZipCodes = function(row){
        return Number(row[19]);
    };
    var codes = people.map(getZipCodes);
    var zipCodes = [];
    codes.forEach(function(element) {
        if (!zipCodes.includes(element)) {
            zipCodes.push(element);
        }
    });
    return zipCodes.length;
};