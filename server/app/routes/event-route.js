
'use strict';

const eventController = require('./../controllers/event-controller');

module.exports = (app) => {
    app.route('/events')
        .get(eventController.list)
        .post(eventController.save);

    app.route('/events/:id')
        .get(eventController.get);
};
