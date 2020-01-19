const express = require('express');
const app = express();
const port = 85;

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

const getUsers = async () => {
    return User.find();
};

app.get('/', (req, res) => {
    getUsers().then((users) => {
        res.json(users);
    }).catch((e) => {
        res.json({
            error: e.message
        });
    })
    
});

app.listen(port, () => console.log(`App listening on port ${port}!`));