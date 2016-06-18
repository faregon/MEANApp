/**
 * Created by D'oh on 6/15/16.
 */
var User = require('./models/user'),
    passport = require('passport');

module.exports.createUser = function createUser(userModel, callback) {
    var user  = {
        firstName: userModel.firstName,
        lastName: userModel.lastName,
        userName: userModel.username,
        password: userModel.password
    };

    var newUser = new User(user);

    newUser.save(function (err,user) {
        if(err){
            callback({success:false, message:"Error"});
        } else{
            callback({success:true, message:"Success", data: user});
        }
    })
};