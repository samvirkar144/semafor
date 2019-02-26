const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const databaseUri = 'mongodb://localhost:27017/semafor';

mongoose.connect(databaseUri, { useNewUrlParser: true })
    .then(() => console.log(`Database connected !!!!!!!!!!!`))
    .catch(err => console.log(`Database connection error:` + err));

module.exports = { mongoose };