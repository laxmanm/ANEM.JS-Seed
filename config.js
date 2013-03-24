'use strict';

module.exports = {
    webserver: {
        port: 3000,
        folders: {
            views: '/views',
            angularTemplates: 'templates/', //within the path of views
            publicContent: 'public',
            restful: 'api',
            baseView: 'base.html' //within the path of views
        },
        url: {
            baseView: '/',
            angularTemplates: '/templates/:name',
            baseRestful: '/api/'
        }

    },
    dbserver: {
        host: 'localhost',
        port: 27017,
        database: 'angular_node_mongo',
        serverOptions: {
            auto_reconnect: true
        },
        databaseOptions: {
            safe: false
        }
    }
}