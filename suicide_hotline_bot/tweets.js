var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'mtYELil25BefjifvozfvhrRuH',
  consumer_secret: 'khdQHcnAEq4WCNtxYHOiXLbe273b4UHparM0J0bZIxWDk8VK15',
  access_token_key: '2276885120-GAM47V8s1IyJ4mtsjRAN2H6WX74ZuLhAoLnp8Sy',
  access_token_secret: '5FYn61Oi7WlleGCkwS0zY4F45YezIkEMLi5fI1jQ7Pyww'
});

var tweet_array = [];
var bounding_boxes
var montreal_boundingbox = '-73.9058,45.4146,-73.4769,45.7029';
// var newyork_obundingbox = '-74,40,-73,41';
var params = {locations: montreal_boundingbox}

var stream = client.stream('statuses/filter', params);
stream.on('data', function(event) {
    event.place ? 
      console.log(event.place.full_name, event.place.bounding_box.coordinates) :
      console.log("hello");
    // tweet_array.push(event);
});
 
stream.on('error', function(error) {
  throw error;
});
 
// stream.on('data', function(event) {
//   console.log(event.place.full_name, event.bounding_boxe.type);
//   // tweet_array.push(event);
// });


// var params = {screen_name: 'BotHelpline'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     tweets.forEach(tweet => {
//         // console.log(tweet.place.full_name, tweet.bounding_boxe.type);
//         console.log(tweet);
//     });
//   }
// });