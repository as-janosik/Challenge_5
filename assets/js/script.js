//loop through and add time rows and check agaist moment() to color code 9-5pm calendar day.
//dont forget to add event listeners to 3rd column for button clicks. 
//set colors Past=Red, Curernt = grey, Future = Green
var hours = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17"];
var containerEl = $(".container");

for (var i = 0; i < hours.length; i++) {
    var currentCheck = moment().format("HH");
    if (hours[i] < currentCheck) {

        //past set colors grey
        var divEl = $("<div>");
        divEl.addClass("row");
        divEl.addClass("past");
        divEl.appendTo(containerEl);
        setCol(divEl, i);

    } else if (hours[i] == currentCheck) {

        //currrrent set colors red
        var divEl = $("<div>");
        divEl.addClass("row");
        divEl.addClass("present");
        divEl.appendTo(containerEl);
        setCol(divEl, i);

    } else {

        //future set colors green
        //Set Row
        var divEl = $("<div>");
        divEl.addClass("row");
        divEl.addClass("future");
        divEl.appendTo(containerEl);

        //Set Columns
        setCol(divEl, i);
    }
}

function setCol(el, i) {
    for (var y = 0; y < 3; y++) {
        if (y == 0) {

            //set time in col 1
            var col1 = $("<div>");
            col1.addClass("hour");
            col1.addClass("col").text(hours[i]);
            col1.appendTo(el);

        } else if (y == 1) {

            var inputEl = $('<textarea class="col-9" name="textInput" rows="1" cols="50"></textarea>');
            inputEl.prop('id', hours[i]);

            inputEl.appendTo(el);

        } else {

            //set save button click event
            var col3 = $("<div>");
            col3.addClass("saveBtn");

            col3.addClass("col").text("SAVE");
            col3.appendTo(el);

        }
    }
}
//click save function to local store
function clickSave() {

    var textValue = $(this).prev().val();//get value from sibling text area
    var textID = $(this).prev().attr('id');
    var dateClick = moment().format('M.D.YYYY');

    var saveObject = { date: dateClick, textval: textValue };

    localStorage.setItem((dateClick + textID), JSON.stringify(saveObject));
}
//OnClick Save Btn
$(".saveBtn").on("click", clickSave);

//header time display with momentjs
function displayTime() {
    var today = moment();
    $("#currentDay").text(today.format("MMM Do, YYYY h:mm:ss a"));
}
//interval refresh
setInterval(displayTime, 1000);

//ON Ready will load old data from storage. 
$(document).ready(function () {
    //usng hours array to add 24 hours time frame to end of dateCheck since this is how data is stored in local
    var hours = ['08', '09', '10', '11', '12', '13', '14', '15', '16', '17'];
    //counter for hours array to ensure not out of bounds. 
    var y = 0;
    //get todays date
    dateCheck = moment().format("M.D.YYYY");
    //start loop to get data from local storage add place it in correct time slot if found.
    for (var i = 8; i < 18; i++) {

        var storageName = dateCheck + hours[y];

        if (localStorage.getItem(storageName) === null) {
            console.log("storage Null");
        } else {
            console.log("StorageName: "+storageName);
            var storedItems = JSON.parse(localStorage.getItem(storageName));
            var newText = storedItems.textval;
            var hourID = ("#" + hours[y]);
            $(hourID).text(newText);
        }

        y++;//interate hours array
    }

});