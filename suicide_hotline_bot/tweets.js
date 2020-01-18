var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'mtYELil25BefjifvozfvhrRuH',
  consumer_secret: 'khdQHcnAEq4WCNtxYHOiXLbe273b4UHparM0J0bZIxWDk8VK15',
  access_token_key: '2276885120-GAM47V8s1IyJ4mtsjRAN2H6WX74ZuLhAoLnp8Sy',
  access_token_secret: '5FYn61Oi7WlleGCkwS0zY4F45YezIkEMLi5fI1jQ7Pyww'
});
 
// var params = {screen_name: 'ShivaZand'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     tweets.forEach(tweet => {
//         console.log(tweet);
//     });
//   }
// });
var tweet_array = [];
// var montreal_boundingbox = '-73.977199,45.397273,-73.477371,45.704105';
var bounding_boxes = {
    montreal: '-73.977199,45.397273,-73.477371,45.704105',
    laval: '-73.888762,45.517367,-73.524052,45.701792',
}

var params = {locations: bounding_boxes.montreal}
var stream = client.stream('statuses/filter', params);

stream.on('data', function(event) {
//   console.log(event.text, event.lang);
    tweet_array.push(event);
});
 
stream.on('error', function(error) {
  throw error;
});
 