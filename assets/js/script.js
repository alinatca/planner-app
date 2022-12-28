//Displaying the current day at the top of the calender when a user opens the planner.
setInterval(function() {
    var now = moment();
    $("#currentDay").text(now.format("MMMM Do, YYYY"));    
}, 1000)

$(document).ready(function () {
    // listen for save button clicks
    $(".saveBtn").on("click", function () {
    // get nearby values
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
    // save in localStorage
      localStorage.setItem(time, value);
    });
  
  
});