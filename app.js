"use strict";
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

var config = require('./config').webserver;


app.configure(function () {
  app.set('port', process.env.PORT || config.port);
  app.set('views', __dirname + config.folders.views);
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, config.folders.publicContent)));
});

app.configure('development', function () {
  app.use(express.errorHandler());
});

//routes
app.get(config.url.baseView, function(req, res) {
    res.sendfile(config.folders.baseView, {root: app.get('views')});
});

app.get(config.url.angularTemplates, function (req, res) {
    var name = req.params.name;
    res.sendfile(config.folders.angularTemplates + name + ".html",{root: app.get('views')});
});

require("fs").readdirSync(path.join(__dirname, config.folders.restful)).forEach(function(file) {
    require(path.join(__dirname, config.folders.restful, file)).forEach(function (element, index, array) {
        var middleware = (typeof element.middleware === 'undefined') ? [] : element.middleware;
        if (['get','post','put','delete','options'].indexOf(element.type.toLowerCase()) == -1) {
            throw new Error("In file '" + file + "' there is a type of route of '" + element.type + "' that do not exist.");
        }
        app[element.type](config.url.baseRestful + element.route, middleware, element.action );
    });
});

http.createServer(app).listen(app.get('port'), function () {
  console.log("Express server listening on port " + app.get('port'));
});
