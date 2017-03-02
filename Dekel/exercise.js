var exercise = {};

exercise.maxEarnings = function () {
    var people = exercise.data.data;
    var dataLength = people.length;
    var earnings = people.map(getEarnings);
    var currentMax = Math.max(...earnings);
    return currentMax;
};

var getEarnings = function (item) {
    return Number(item[18]);
};


exercise.earningsAbove = function (target) {
    var earnings = exercise.data.data.map(getEarnings); // get handle on data
    var above = earnings.filter(checkabove);
    return above.length;
};


var checkabove = function (earnings) {
    return earnings >= 150000;
};


exercise.totalBasePayroll = function () {
    var base = exercise.data.data.map(getBase); // get handle on data
    var totalpay = base.reduce(sumPayroll);
    return Math.floor(totalpay);
};

var getBase = function (item) {
    return Number(item[11]);
};

var sumPayroll = function (total, earnings) {
    return total + earnings;
};



exercise.totalEarningsWithOvertime = function () {
    var earnings = exercise.data.data.map(getEarnings); // get handle on data
    var totalpay = earnings.reduce(sumPayroll);
    return Math.floor(totalpay);

};




exercise.numberUniqueZipCodes = function () {

    /* EX 5

    return the unique number zipcodes as an integer

    */
    var zipCodes = [];
    var allZipCode = exercise.data.data.map(getZipCodes).sort();
    zipCodes = allZipCode.filter(removeDuplicates);
    return zipCodes.length;
};

var removeDuplicates = function (element, index, allZipCode) {
    return element != allZipCode[index - 1] || 0;
};


var getZipCodes = function (item) {
    var convert = Number(item[19]);
    if (isNaN(convert))
    {}
    else
    { return convert; };
};