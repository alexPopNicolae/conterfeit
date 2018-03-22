function getTimeFromDate(date)  {
    var dateArray = date.split(' ');
    var day = dateArray[0];
    var month = dateArray[1];
    var year = dateArray[2];
    var yearMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Dec'];
    var numberMonth = 0;
    for(var i=0;i < yearMonths.length; i++) {
        if(month === yearMonths[i]) numberMonth = i;
    }
    var miltime = new Date(parseInt(year), parseInt(numberMonth), parseInt(day)); 
    
    return miltime.getTime()
    
}
getTimeFromDate('03 Sep 2018');