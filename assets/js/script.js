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
    var database = firebase.database();

// Submit button onclick function
    $('#submit-button').click(function(event) {
        event.preventDefault();

    // Takes users input and assigns it to a variable
        var trainName = $('#trainName').val().trim();
        var trainDestination = $('#destination').val().trim();
        var firstTrain = $('#firstTrain').val().trim();
        var trainFrequency = $('#frequency').val().trim();

    // Upload to database
        database.ref().push({
            name: trainName,
            destination: trainDestination,
            first: firstTrain,
            frequency: trainFrequency
        });

    // Clear the input fields
    $('#trainName', '#destination', '#firstTrain', '#frequency').val("");

    }); // End of submit button function

    database.ref().on('child_added', function(childSnapshot) {
        var firstTrainTime = moment(childSnapshot.val().first, 'hh:mm').subtract(1, 'years');
        console.log('First train time: ' + firstTrainTime);

        var timeDiff = moment().diff(moment(firstTrainTime), 'minutes');
        console.log('Time difference: ' + timeDiff);

        var remainder = timeDiff % childSnapshot.val().frequency;
        console.log('Remainder: ' + remainder);

        var minAway = childSnapshot.val().frequency - remainder;
        console.log('Minutes Away: ' + minAway);

        var nextTrainTime = moment().add(minAway, 'minutes');
        nextTrainTime = moment(nextTrainTime).format('hh:mm');
        console.log('Next Train Time: ' + nextTrainTime);

        // Add row with data to the table
        $('#train-row').append('<tr><td>' + childSnapshot.val().name +
        '</td><td>' + childSnapshot.val().destination +
        '</td><td>' + childSnapshot.val().frequency +
        '</td><td>' + nextTrainTime +
        '</td><td>' + minAway +
        '</td></tr>');
    });

}); // End of $(document).ready(function()
