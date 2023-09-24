//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

//😎A year is a leap year if it is divisible by 100 and 400.
let year;

leapYear = (year) => {
  if ((year % 100 === 0 && year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)) {
    return "Is Year a LEAP";
  } else {
    return "Not is Year a LEAP";
  }
};


console.log(leapYear(2025));