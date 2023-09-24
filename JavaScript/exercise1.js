// Write a JavaScript program to display the current day and time in the following format with use strict js.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38❤
"use strict";
// current date is:
let today = new Date();  
//take the day of the current date
let getDate = today.getDay();

//array of the days week
let arrayDate=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'saturday'];

//day week
let dayWeek= arrayDate[getDate];

let Hours= today.getHours();

//Am and PM Hours
if(Hours>12){
    Hours = Hours - 12;
    Hours = Hours + "PM"
} else{
    Hours = Hours + " AM"
}
//Minutes and Seconds Day
let minutes = today.getMinutes();
let seconds = today.getSeconds();


console.log("today is:" + dayWeek);
console.log("Current time is: "+ Hours + " : " + minutes + " : " + seconds);