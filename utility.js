var date = new Date(); 
var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE",
  "JULY", "AUG", "SEP", "OCT", "NOV", "DEC"];
var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
var hours = date.getHours();
var minutes = date.getMinutes();
var ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
minutes = minutes < 10 ? '0'+minutes : minutes;
var strTime = hours + ':' + minutes + ' ' + ampm;
strDateInfo = dayNames[date.getDay()]+" | "+monthNames[date.getMonth()]+" "+date.getDate()+" | "+ strTime

var dateInfo = document.getElementById("date").innerHTML = strDateInfo 