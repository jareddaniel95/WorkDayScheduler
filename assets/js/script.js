// For loop that runs from 9AM to 5PM (9 total blocks) compare time and set class to past if before current time

var currentDayElement = $('#currentDay');
var blocksElement = $('#blocks');
var today = moment().format("dddd, MMMM Do");
// var now = moment().format("H:mm:ss");

// for testing
var now = moment("13:12:07", "H:mm:ss");

currentDayElement.text(today);

for (var i = 9; i < 18; ++i) {
    var rowDiv = $('<div>');
    rowDiv.addClass('row');
    /* HOUR DIV */
    var hourDiv = $('<div>');
    hourDiv.addClass('hour');
    timeIndex = moment(`${i}:00`, 'H:mm');
    hourDiv.text(moment(timeIndex, "H:mm").format("hA"));
    
    /* TEXT DIV */
    var timeBlockDiv = $('<div>');
    timeBlockDiv.addClass('time-block');
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
    timeBlockDiv.append(textDiv);
    
    /* SAVE DIV */
    var saveDiv = $('<div>');
    saveDiv.addClass('saveBtn');
    saveDiv.html('&#128190;');

    rowDiv.append(hourDiv);
    rowDiv.append(timeBlockDiv);
    rowDiv.append(saveDiv);

    blocksElement.append(rowDiv);
}