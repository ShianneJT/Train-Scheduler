// Train Name:
// Destination:
// First Train Time (HH:mm - military time):
// Frequency (min)
// User Input:
// Takes train name, destination, first train time, and frequency
// Calculate when the next train will arrive, relative to the current time
// Users should see same train times
// Sends data to firebasae
// Appends data to the table

$(document).ready(function() {
// Firebase Setup
    var firebaseConfig = {
        apiKey: "AIzaSyDkKUaV-VjudXJCiQwRet7NOqqZNt2z83M",
        authDomain: "train-scheduler-fc51c.firebaseapp.com",
        databaseURL: "https://train-scheduler-fc51c.firebaseio.com",
        projectId: "train-scheduler-fc51c",
        storageBucket: "train-scheduler-fc51c.appspot.com",
        messagingSenderId: "843890443792",
        appId: "1:843890443792:web:ce7f423533ce4b29ed2c95"
      };

// Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // var database = firebase.database();

    // Submit button onclick function
    $('#submit-button').click(function(event) {
        event.preventDefault();
    
        // Takes users input and assigns it to a variable
        var trainName = $('#train-name-input').val().trim();
        var trainDestination = $('#destination-input').val().trim();
        var trainFirstTime = $('#first-train-time-input').val().trim();
        var trainFrequency = $('#frequency-input').val().trim();

        console.log(trainName);
        console.log(trainDestination);
        console.log(trainFirstTime);
        console.log(trainFrequency);

        // Creates an object to hold all the train information
        var trainObj = {
            name: trainName,
            destination: trainDestination,
            first: trainFirstTime,
            frequency: trainFrequency
        };

        console.log(trainObj.name);
        console.log(trainObj.destination);
        console.log(trainObj.first);
        console.log(trainObj.frequency);

        // Upload to database

        // Add row to table
// Need to add minutes way -----------------------------------------------------
        $('#train-row').append('<tr><td>' + trainObj.name + '</td>' +
            '<td>' + trainObj.destination + '</td>' + '<td>' + trainObj.first + '</td>' +
            '<td>' + trainObj.frequency + '</td></tr>');


        // Clear the input fields
        $('#train-name-input').val('');
        $('#destination-input').val('');
        $('#first-train-time-input').val('');
        $('#frequency-input').val('');
    });



}) // End of $(document).ready(function()

// TODO
// -Form validation
// add data to the table
// -moment.js
// - 
