
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
const currentDate = moment().format('MM/DD/YYYY'); // get current date
document.getElementById("currentDay").textContent = currentDate; // display inside the element

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist
// ```

//sources: 
// http://5.9.10.113/68338961/moment-js-confusion-for-displaying-the-date
// https://medium.com/@aleks.roslyakov/using-css-grid-jquery-making-a-daily-scheduler-pt-i-6ba0d2b37e6f