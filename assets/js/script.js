//Displaying the current day at the top of the calender when a user opens the planner.
setInterval(function() {
    var now = moment();
    $("#currentDay").text(now.format("MMMM Do, YYYY"));    
}, 1000)
