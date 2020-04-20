'use strict';
const mongoose = require('mongoose'),
    Event = mongoose.model('event');

/**
 * Returns a promise for search results.
 *
 * @param search param.
 */
exports.search = (params) => {
    const promise = Event.find(params).exec();
    return promise;
};

/**
 * Saves the new Event object.
 *
 * @param Event
 */
exports.save = (event) => {
    const newEvent = new Event(event);
    return newEvent.save();
};
