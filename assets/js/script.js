// For loop that runs from 9AM to 5PM (9 total blocks) compare time and set class to past if before current time

var blocksElement = $('#blocks');
// var now = moment().format("h:mm:ss a");
// var now24 = moment().format("H:mm:ss");
//test
var now = moment("3:12:07 PM", "h:mm:ss a");
var now24 = moment("15:12:07", "H:mm:ss");

for (var i = 9; i < 18; ++i) {
    var timeBlock = $('<div>');
    timeBlock.addClass('row');
    timeIndex = moment(`${i}:00`, 'H:mm');
    if (timeIndex.hour() === now24.hour()) {
        timeBlock.addClass('present');
    } else if (timeIndex.isBefore(now24)) {
        timeBlock.addClass('past');
    } else if (timeIndex.isAfter(now24)) {
        timeBlock.addClass('future');
    }

    timeBlock.text(moment(timeIndex, "H:mm").format("hA"));
    
    blocksElement.append(timeBlock);
}

// 9, 10, 11, 12, 1, 2, 3 <> 3:12 <> 4, 5