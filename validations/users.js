'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    firstName: Joi.string()
      .label('firstName')
      .required(),
    lastName: Joi.string()
      .label('lastName')
      .required(),
    username: Joi.string()
      .label('username')
      .min(6)
  }
};
