var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'mtYELil25BefjifvozfvhrRuH',
  consumer_secret: 'khdQHcnAEq4WCNtxYHOiXLbe273b4UHparM0J0bZIxWDk8VK15',
  access_token_key: '2276885120-C2wwYnZxHfJR6yhZKyyTipCc1xnSWoJ9yji3tU0',
  access_token_secret: '4XMp0Hd4XFm4FBmgAKcURalJqrQ86j86FCIXkF7R6OGbz'
});
 
var params = {screen_name: 'ShivaZand'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    tweets.forEach(tweet => {
        console.log(tweet);
    });
  } else {
    console.log(error);
  }
});
// var tweet_array = [];
// var montreal_boundingbox = '-73.9058,45.4146,-73.4769,45.7029';
// // var newyork_obundingbox = '-74,40,-73,41';
// var params = {locations: montreal_boundingbox}
// var stream = client.stream('statuses/filter', params);



// stream.on('data', function(event) {
// //   console.log(event.text, event.lang);
//     tweet_array.push(event);
// });
 
// stream.on('error', function(error) {
//   throw error;
// });
 