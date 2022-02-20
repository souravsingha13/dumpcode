// Header date time script
window.onload = displayClock();
function displayClock(){
	var display = new Date().toLocaleTimeString();
	document.getElementById('time').innerHTML = display;
	setTimeout(displayClock, 1000); 
}
var today = new Date();
var year = today.getFullYear();
var month = today.getMonth()+1;
var day = today.getDate();
document.getElementById('date').innerHTML = day+"."+month+"."+year;