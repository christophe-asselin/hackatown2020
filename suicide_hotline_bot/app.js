const Twitter = require('twitter');
const TextAnalytics = require('./text-analytics');
 
const client = new Twitter({
  consumer_key: 'mtYELil25BefjifvozfvhrRuH',
  consumer_secret: 'khdQHcnAEq4WCNtxYHOiXLbe273b4UHparM0J0bZIxWDk8VK15',
  access_token_key: '2276885120-GAM47V8s1IyJ4mtsjRAN2H6WX74ZuLhAoLnp8Sy',
  access_token_secret: '5FYn61Oi7WlleGCkwS0zY4F45YezIkEMLi5fI1jQ7Pyww'
});

let tweet_array = [];

const BOUNDING_BOXES = {
  montreal: '-73.9058,45.4146,-73.4769,45.7029',
  laval: '-73.884682,45.517218,-73.531288,45.701455',
  outremont: '-73.617602,45.507785,-73.590831,45.524992'
}
const params = {locations: BOUNDING_BOXES.montreal}
const stream = client.stream('statuses/filter', params);

stream.on('data', (event) => {
    tweet_array.push(event);
});

setInterval(() => TextAnalytics.analyzeTweets(tweet_array), 30000);