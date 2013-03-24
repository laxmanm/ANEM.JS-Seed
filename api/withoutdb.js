'use strict';

module.exports = [
    {
        type: 'get',
        route: 'withoutdb/:name?',
        action: function (req, res) {
            var name = req.params.name || 'Roc';
            res.json({
                result: 'Hello Mr./Mrs. ' + name
            });
        }
    }
];