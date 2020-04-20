'use strict';

const orderService = require('./../services/event-service');

/**
 * Sets response for order search.
 *
 * @param request
 * @param response
 */
exports.list = (request, response) => {
    const totalQuery = request.query.total;
    const params = {};
    if(totalQuery) {
        params.total = totalQuery
    };
    const promise = orderService.search(params);
    const result = (events) => {
        response.status(200);
        response.json(events);
    };
    promise
        .then(result)
        .catch(renderErrorResponse(response));
};
/**
 * Creates a new order and sets the response.
 *
 * @param request
 * @param response
 */
exports.save = (request, response) => {
    const order = Object.assign({}, request.body);
    const result = (savedOrder) => {
        response.status(201);
        response.json(savedOrder);
    };
    const promise = orderService.save(order);
    promise
        .then(result)
        .catch(renderErrorResponse(response));
};

/**
 * Throws error if error object is present.
 *
 * @param {Response} response The response object
 * @return {Function} The error handler function.
 */
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    };
    return errorCallback;
};
