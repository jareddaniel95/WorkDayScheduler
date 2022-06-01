// For loop that runs from 9AM to 5PM (9 total blocks) compare time and set class to past if before current time

var currentDayElement = $('#currentDay');
var blocksElement = $('#blocks');
var today = moment().format("dddd, MMMM Do");
// var now = moment().format("H:mm:ss");

// for testing
// var today = moment("Wednesday, June 1st 15:12:07", "dddd, MMMM Do H:mm:ss");
var now = moment("15:12:07", "H:mm:ss");

currentDayElement.text(today);

for (var i = 9; i < 18; ++i) {
    var timeBlock = $('<div>');
    timeBlock.addClass('time-block');
    /* HOUR DIV */
    var hourDiv = $('<div>');
    hourDiv.addClass('hour');
    timeIndex = moment(`${i}:00`, 'H:mm');
    hourDiv.text(moment(timeIndex, "H:mm").format("hA"));
    
    /* TEXT DIV */
    var textDiv = $('<div>');
    textDiv.addClass('textarea');

    if (timeIndex.hour() === now.hour()) {
        textDiv.addClass('present');
    } else if (timeIndex.isBefore(now)) {
        textDiv.addClass('past');
    } else if (timeIndex.isAfter(now)) {
        textDiv.addClass('future');
    }

    var textArea = $('<textarea style="width:100%, height:100%"/>');
    textDiv.append(textArea);
    
    timeBlock.append(hourDiv);
    timeBlock.append(textDiv);

    blocksElement.append(timeBlock);
}

