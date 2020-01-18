const os = require("os");
const CognitiveServicesCredentials = require("@azure/ms-rest-js");
const TextAnalyticsAPIClient = require("@azure/cognitiveservices-textanalytics");

const subscription_key = 'b3d09fb511b74372ac32538c3985e01a';
const endpoint = 'https://hackatown2020.cognitiveservices.azure.com/';

const creds = new CognitiveServicesCredentials.ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': subscription_key } });
const textAnalyticsClient = new TextAnalyticsAPIClient.TextAnalyticsClient(creds, endpoint);

const analyzeTweets = (tweets) => {

    if (tweets) {
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
            console.log(os.EOL);
        }).catch((e) => {
            console.error(documents);
    
        });
    }
};

module.exports.analyzeTweets = analyzeTweets;