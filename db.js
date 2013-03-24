'use strict';

var mongo = require('mongodb');

var config = require('./config').dbserver;

var Server = mongo.Server;
var Db = mongo.Db;
var BSON = mongo.BSONPure;

var server = new Server(config.host, config.port, config.serverOptions);

var db = new Db(config.database, server, config.databaseOptions);



db.open(function (err) {
    if (err) {
        console.log("Error connecting to MongoDB database: " + config.database + "@" + config.host + ":" + config.port);
    } else {
        console.log("MongoDB Database connected to " + config.database + "@" + config.host + ":" + config.port);
    }
});

module.exports = db;



