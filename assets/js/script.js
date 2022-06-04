var currentDayElement = $('#currentDay');
var blocksElement = $('#blocks');
var today = moment().format("dddd, MMMM Do");
var now = moment();

currentDayElement.text(today);

for (var i = 9; i < 18; ++i) {
    var rowDiv = $('<div>');
    rowDiv.addClass('row');
    /* HOUR DIV */
    var hourDiv = $('<div>');
    hourDiv.addClass('hour');
    timeIndex = moment(`${i}:00`, 'H:mm');
    var rowData = moment(timeIndex, "H:mm").format("hA");
    hourDiv.text(rowData);
    
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
    var savedText = localStorage.getItem(rowData);
    if (savedText != null) {
        textArea.val(savedText);
    }

    /* SAVE DIV */
    var saveDiv = $('<div>');
    saveDiv.addClass('saveBtn');
    saveDiv.data("hour", rowData);
    saveDiv.html('&#128190;');

    rowDiv.append(hourDiv);
    rowDiv.append(timeBlockDiv);
    rowDiv.append(saveDiv);

    blocksElement.append(rowDiv);
}

/* Save appointment */
blocksElement.on('click', '.saveBtn', function() {
    localStorage.setItem($(this).data("hour"), $(this).parent('div').find('.time-block').children().first().children().first().val());
    var savedDiv = $('<div>');
    savedDiv.html("Appointment Saved &#10004;")
    savedDiv.addClass('saved');
    blocksElement.prepend(savedDiv);
    var timer = 0;
    var timeInterval = setInterval(function () {
        ++timer;
        if (timer >= 5) {
            blocksElement.children().first().remove();
            clearInterval(timeInterval)
        }
    }, 1000);
});