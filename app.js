const request = require("request");
const express = require("express");
//const _ = require('lodash');
const { ObjectID } = require('mongodb');
const bodyParser = require("body-parser");
const methodOverride = require('method-override');
const { mongoose } = require("./db/server.js")
var { User } = require('./models/user');
var app = express();
app.use(bodyParser.json());
var indexRoutes = require('./routes/index');
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));

app.use(indexRoutes);





app.listen(process.env.PORT || 8080, function () {
    console.log("Server connected !!!!!!");
})

module.exports = { app };