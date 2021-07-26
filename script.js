
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
$(function() {
    let d = new Date()

    let year = d.getFullYear()
    let month = d.getMonth()+1;
    let day = d.getDate()

    let totalDays = new Date(year, month, 0).getDate()

    let output =
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day + '/' + year

    $('#date').text(`${output}`)

    $( "#days" ).click(function(e) {

        let row = 0, length = 1, column = 0
        let timeObj = {
            "5 AM" : 1,
            "6 AM" : 2,
            "7 AM" : 3,
            "8 AM" : 4,
            "9 AM" : 5,
            "10 AM" : 6,
            "11 AM" : 7,
            "12 PM" : 8,
            "1 PM" : 9,
            "2 PM" : 10,
            "3 PM" : 11,
            "4 PM" : 12,
            "5 PM" : 13,
            "6 PM" : 14,
            "7 PM" : 15,
            "8 PM" : 16,
            "9 PM" : 17,
            "10 PM" : 18,
            "11 PM" : 19,
            "12 AM" : 20,
            "1 AM" : 21,
            "2 AM" : 22,
            "3 AM" : 23,
            "4 AM" : 24
        }

        column = e.target.className.match(/\d+/)[0]

        $('#modal-container').toggle()

        $('#modal-container--close').click(function(){
            $('#modal-container').css('display', 'none')
        })
        $('#modal-container--form').submit(function(e){
            e.preventDefault()
            row = timeObj[$( "#start-select" ).val()]
            length = (timeObj[$( "#end-select" ).val()]) - (timeObj[$( "#start-select" ).val()])
            $('#content').append(`<div id='event' style='grid-row:${row}/span ${length};grid-column:${column};background-color: yellow;'>Event</div>`)
            $('#modal-container--form')[0].reset()
            $('#modal-container--form').off()
            $('#modal-container').toggle()
        })
      });
  });
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist
// ```

//sources: 
// http://5.9.10.113/68338961/moment-js-confusion-for-displaying-the-date
// https://medium.com/@aleks.roslyakov/using-css-grid-jquery-making-a-daily-scheduler-pt-i-6ba0d2b37e6f
// https://medium.com/@aleks.roslyakov/using-css-grid-jquery-making-a-daily-scheduler-pt-ii-7af7d239a55d
//