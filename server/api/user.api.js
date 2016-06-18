/**
 * Created by D'oh on 6/15/16.
 */
var express = require('express'),
    router = express.Router(),
    User = require('./models/user'),
    userService = require('./services/user.services');