/**
 * Created by D'oh on 6/15/16.
 */
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    password: String
});
