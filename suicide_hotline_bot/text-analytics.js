const os = require("os");
const CognitiveServicesCredentials = require("@azure/ms-rest-js");
const TextAnalyticsAPIClient = require("@azure/cognitiveservices-textanalytics");
const Database = require('./database');
const TweetReply = require('./tweet-relply');

const subscription_key = 'b3d09fb511b74372ac32538c3985e01a';
const endpoint = 'https://hackatown2020.cognitiveservices.azure.com/';

const creds = new CognitiveServicesCredentials.ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': subscription_key } });
const textAnalyticsClient = new TextAnalyticsAPIClient.TextAnalyticsClient(creds, endpoint);

const analyzeTweets = (tweets) => {

    if (tweets.length !== 0) {
        const documents = tweets.map((tweet) => {
            return {
                language: tweet.lang,
                id: tweet.id_str,
                text: tweet.text
            };
        });
    
        const input = {documents};
    
        textAnalyticsClient.sentiment({multiLanguageBatchInput: input}).then((res) => {
            console.log(res.documents);
            for (document of res.documents) {
                if (document.score <= 0.1) {
                    const tweet = tweets.find(tweet => tweet.id_str === document.id);
                    Database.addTweet(tweet.user.screen_name, tweet.user.profile_image_url_https, tweet.id_str, tweet.text);
                    Database.getTweetCount(tweet.id_str).then((count) => {
                        if (count > 3) {
                            //TweetReply.sendReply(tweet.user.screen_name, tweet.id_str);
                            console.log("IT WORKSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS");
                        }
                    })
                }
            }
        }).catch((e) => {
            console.error(e.body.error);
        });
    }
};

module.exports.analyzeTweets = analyzeTweets;