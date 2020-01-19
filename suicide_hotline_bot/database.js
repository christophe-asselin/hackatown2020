const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const URI = 'mongodb+srv://admin:hackatown2020@cluster0-pjzsr.azure.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', () => console.log('\x1b[31m', 'Error connecting to database'));
db.once('open', async () => console.log('\x1b[32m', 'Database connected'));

const userSchema = new Schema({
    id: String,
    count: Number,
    tweets: [String]
});

const User = model('User', userSchema);

const addTweet = (user_id, tweet_id) => {
    User.findOneAndUpdate({ id: user_id }, { $push: { tweets: tweet_id } }, { upsert: true, useFindAndModify: false }, (error, success) => {
        if (error) {
            console.error(error);
        }
    });
};

const getTweetCount = async (user_id) => {
    return User.findOne({ id: user_id });
};

module.exports.addTweet = addTweet;
module.exports.getTweetCount = getTweetCount;


