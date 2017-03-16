//JS Donut Counter Lab

var guests = parseInt(prompt("How many guests?"), 10);
var donuts = parseInt(prompt("How many donuts?"), 10);

if (donuts > guests) {
  alert (`There are ${donuts} and ${guests} so we have enough for all!`);
}
else {
  alert (`There are ${donuts} and ${guests} so we do NOT have enough for all!`);
}

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
