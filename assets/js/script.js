//loop through and add time rows and check agaist moment() to color code 9-5pm calendar day.
//dont forget to add event listeners to 3rd column for button clicks. 
//set colors Past=Red, Curernt = grey, Future = Green
var hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
var containerEl = $(".container");

for (var i = 0; i < hours.length; i++) {
    var currentCheck = moment().format("HH");
    if (hours[i] < currentCheck) {
        //past set colors grey
        console.log("grey " + hours[i] + " -is less than- " + currentCheck);

        // <div class="container">
        //   <div class="row">
        //     <div class="col-sm">
        //       One of three columns 
        //     </div>
        //     <div class="col-sm">
        //       One of three columns
        //     </div>
        //     <div class="col-sm">
        //       One of three columns
        //     </div>
        //   </div>
        // </div>

        var divEl = $("<div>");
        divEl.addClass("row");
        divEl.addClass("past");
        divEl.appendTo(containerEl);




    } else if (hours[i] == currentCheck) {
        //currrrent set colors red
        console.log("red " + hours[i] + " -is equal to- " + currentCheck);
        var divEl = $("<div>");
        divEl.addClass("row");
        divEl.addClass("present");
        divEl.appendTo(containerEl);

    } else {
        //future set colors green
        console.log("green " + hours[i] + " -is greater than- " + currentCheck);

        var divEl = $("<div>");
        divEl.addClass("row");
        divEl.addClass("future");
        divEl.appendTo(containerEl);




    }
}

//header time display
function displayTime() {
    var today = moment();
    $("#currentDay").text(today.format("MMM Do, YYYY h:mm:ss a"));
}

setInterval(displayTime, 1000);