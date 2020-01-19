const Twitter = require('twitter');
const TextAnalytics = require('./text-analytics');

const client = new Twitter({
    consumer_key: 'mtYELil25BefjifvozfvhrRuH',
    consumer_secret: 'khdQHcnAEq4WCNtxYHOiXLbe273b4UHparM0J0bZIxWDk8VK15',
    access_token_key: '2276885120-C2wwYnZxHfJR6yhZKyyTipCc1xnSWoJ9yji3tU0',
    access_token_secret: '4XMp0Hd4XFm4FBmgAKcURalJqrQ86j86FCIXkF7R6OGbz'
});

let tweet_array = [];

const BOUNDING_BOXES = {
  montreal: '-73.9058,45.4146,-73.4769,45.7029',
  laval: '-73.884682,45.517218,-73.531288,45.701455',
  outremont: '-73.617602,45.507785,-73.590831,45.524992',
  sydney: '150.2608,-34.1732,151.3427,-33.3641'
}
const params = {locations: BOUNDING_BOXES.montreal};
// const params = { follow: '1218586680455848000' };
const stream = client.stream('statuses/filter', params);

stream.on('data', (event) => {
    tweet_array.push(event);
});

stream.on('error', (event) => {
    console.error('error');
});

setInterval(() => {
    TextAnalytics.analyzeTweets([...tweet_array]);
    tweet_array = [];
}, 10000);