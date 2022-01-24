const express = require('express');

const { NotFoundError } = require("./expressError");

const routes = require('./routes');

const app = express();

app.use(routes);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

/** 404 handler */

app.use((req, res, next) => {
    return next(new NotFoundError());
});

/** General error handler */

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message;

    return res.status(status).json({
        error: { message, status },
    });
});

module.exports = app;