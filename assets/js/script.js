//loop through and add time rows and check agaist moment() to color code 9-5pm calendar day.
//dont forget to add event listeners to 3rd column for button clicks. 
//set colors Past=Red, Curernt = grey, Future = Green
var hours = ["08","09", "10", "11", "12", "13", "14", "15", "16", "17"];
var containerEl = $(".container");

for (var i = 0; i < hours.length; i++) {
    var currentCheck = moment().format("HH");
    if (hours[i] < currentCheck) {
        //past set colors grey
        //console.log("grey " + hours[i] + " -is less than- " + currentCheck);

        var divEl = $("<div>");
        divEl.addClass("row");
        divEl.addClass("past");
        divEl.appendTo(containerEl);
        setCol(divEl,i);

    } else if (hours[i] == currentCheck) {
        //currrrent set colors red
        //console.log("red " + hours[i] + " -is equal to- " + currentCheck);
        var divEl = $("<div>");
        divEl.addClass("row");
        divEl.addClass("present");
        divEl.appendTo(containerEl);
        setCol(divEl,i);

    } else {
        //future set colors green
        //console.log("green " + hours[i] + " -is greater than- " + currentCheck);
        //Set Row
        var divEl = $("<div>");
        divEl.addClass("row");
        divEl.addClass("future");
        divEl.appendTo(containerEl);

        //Set Columns
        setCol(divEl,i);
    }
}

function setCol(el,i){
    for (var y=0; y < 3; y++){
        if (y==0){
            //set time in col 1
            var col1 = $("<div>");
            col1.addClass("hour");
            col1.addClass("col").text(hours[i]);
            col1.appendTo(el);

        }else if (y==1){
            //set text from saved file or provide input option
            //var col2 = $("<div>");
            //var inputEl = $("<input type='text' name='todo' id='todo'>");
            var inputEl = $('<textarea class="col-9" name="textInput" rows="1" cols="50"></textarea>');
            

            //col2.addClass("col-9").text("col-2 placeholder");
            //inputEl.appendTo(col2);//needed to be after adding class to div for this to work. 
            inputEl.appendTo(el);

        }else{
            //set save button click event
            var col3 = $("<div>");
            col3.addClass("saveBtn");
            col3.addClass("col").text("SAVE");
            col3.appendTo(el);
            //$(".saveBtn").on("click", clickSave);

        }
    }
}

function clickSave(){
    console.log("Save has been initiated.");
}

//header time display
function displayTime() {
    var today = moment();
    $("#currentDay").text(today.format("MMM Do, YYYY h:mm:ss a"));
}

setInterval(displayTime, 1000);