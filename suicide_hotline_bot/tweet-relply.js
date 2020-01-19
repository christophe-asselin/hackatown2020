const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: 'mtYELil25BefjifvozfvhrRuH',
    consumer_secret: 'khdQHcnAEq4WCNtxYHOiXLbe273b4UHparM0J0bZIxWDk8VK15',
    access_token_key: '2276885120-C2wwYnZxHfJR6yhZKyyTipCc1xnSWoJ9yji3tU0',
    access_token_secret: '4XMp0Hd4XFm4FBmgAKcURalJqrQ86j86FCIXkF7R6OGbz'
});

const sendReply = (user_screen_name, tweet_id) => {
    const message = "Hello @" + user_screen_name + ", you seem to be having some problem with your sanity. Could we help with that?";
    var params = {status: message, in_reply_to_status_id: tweet_id};
    client.post('statuses/update', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets);
    } else {
        console.log(error);
    }
    });
}

// sendReply("BotHelpline", "1218776561379397633");