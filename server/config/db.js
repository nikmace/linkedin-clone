require('dotenv').config();
const mongoose = require('mongoose');

module.exports = (app) => {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'Connection Error'));
    db.once('open', () => {
        console.log('MongoDB Connected..')
    });
}