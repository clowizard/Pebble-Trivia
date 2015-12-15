var UI = require('ui');
var ajax = require('ajax');

// Create a Card with title and subtitle
var card = new UI.Card({
  title:'Trivia Question',
  scrollable: true
});

// Display the Card
card.show();

// Construct URL
var URL = 'http://jservice.io/api/random';

// Make the request
ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
    
    // Success!
    console.log("Successfully fetched data!");

    // Extract data
    var question = data[0].question;
    var answer = data[0].answer;

    // Show to user
    card.body(question + '.' + '\n-' + answer );
    
  },
  function(error) {
    // Failure!
    console.log('Failed fetching data: ' + error);
  }
);