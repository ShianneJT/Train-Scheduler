$(document).ready(function() {

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
    
    $('#submit-button').click(function(event) {
        event.preventDefault();
    
        var trainName = $('#train-name-input').val().trim();
        var destination = $('#destination-input').val().trim();
        var firstTrainTime = $('#first-train-time-input').val().trim();
        var frequency = $('#frequency-input').val().trim();
    
        console.log(trainName);
        console.log(destination);
        console.log(firstTrainTime);
        console.log(frequency);
    });

})
