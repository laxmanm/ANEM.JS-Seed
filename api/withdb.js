'use strict';


var db = require('../db');

module.exports = [
    {
        type: 'get',
        route: 'withdb/name/:id',
        action: function (req, res) {
            var id = req.params.name || 1;
            if (db.serverConfig.isConnected()) {
                db.collection('persones').findOne({id: id}, function(err, item) {
                    console.log('Retrieving persones: ' + id);
                    res.send(item);
                });
            } else {
                res.send(404, 'Sorry, we cannot find that!');
            }
        }
    }
];