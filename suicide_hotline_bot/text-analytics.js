const os = require("os");
const CognitiveServicesCredentials = require("@azure/ms-rest-js");
const TextAnalyticsAPIClient = require("@azure/cognitiveservices-textanalytics");

const subscription_key = 'b3d09fb511b74372ac32538c3985e01a';
const endpoint = 'https://hackatown2020.cognitiveservices.azure.com/';

const creds = new CognitiveServicesCredentials.ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': subscription_key } });
const textAnalyticsClient = new TextAnalyticsAPIClient.TextAnalyticsClient(creds, endpoint);

const analyzeTweets = async (tweet_array) => {
    const tweets = [...tweet_array];
    tweet_array = [];
    textAnalyticsClient.sentiment()
    console.log(tweets.length);
};

module.exports.analyzeTweets = analyzeTweets;