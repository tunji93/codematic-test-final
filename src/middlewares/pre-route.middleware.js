const express = require('express');
const helmet = require("helmet");
const morgan = require('morgan');
const cors = require("cors")

module.exports = (app) => {
     app.use(cors())
     app.use(helmet());
     app.use(morgan('dev'));
     app.use(express.json());
     app.use(express.static("/public"));
     app.use(express.urlencoded({ extended: false }));
     return app
}