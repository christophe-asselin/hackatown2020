const os = require("os");
const CognitiveServicesCredentials = require("@azure/ms-rest-js");
const TextAnalyticsAPIClient = require("@azure/cognitiveservices-textanalytics");

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
    
        textAnalyticsClient.keyPhrases({multiLanguageBatchInput: input}).then((res) => {
            res.documents.forEach(result => {
                const tweet = tweets.find(tweet => tweet.id_str === result.id);
                console.log(tweet.id, result.keyPhrases, tweet.user.screen_name, tweet.text);
            });
            // console.log(res.documents);
            // console.log(os.EOL);
        }).catch((e) => {
            console.error(e);
    
        });
    }
};

module.exports.analyzeTweets = analyzeTweets;