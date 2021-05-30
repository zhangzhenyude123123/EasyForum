const mongoose = require('mongoose');
const config = require('config');
const settings = require('./setting');

const connectDateBase = async () => {
    try {
        await mongoose.connect(settings.url, {
            // useNewUrlParser: true,
            // useCreateIndex: true,
            // useFindAndModify: false,
            // useUnifiedTopology: true
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDateBase;