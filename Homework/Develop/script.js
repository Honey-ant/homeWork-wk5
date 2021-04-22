var timeDisplayEl = $('#time-display');
var dayWeek = $('#day');

function displayDay() {
var dayWeek = today.format("[Today is] dddd")
$("#2a").text(dayWeek); 
}
moment().format('LTS'); 

moment().format('MMMM Do YYYY, h:mm:SS a');

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }