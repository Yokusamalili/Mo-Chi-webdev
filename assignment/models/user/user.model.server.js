/**
 * Created by moira on 6/9/17.
 */
module.exports = function() {
    var mongoose = require("mongoose");
    var UserSchema = require("./user.schema.server")();
    var UserModel = mongoose.model("UserModel", UserSchema);

    var api = {
        createUser: createrUser,
        findUserById: findUserById,
        updateUser:updateUser,
        getAllUser: getAllUser,
        findUserByCredentials:findUserByCredentials,
        removeUser:removeUser,
        findUserByUsername:findUserByUsername,
        findUserByFacebookId:findUserByFacebookId
    }
    return api;


    function findUserByUsername(username) {
        // console.log("--------------------findUserByUsername-----------------------------")
        return UserModel.findOne({username: username});
    }

    function removeUser(userId) {
        // console.log("--------------------removeUser-----------------------------")
        return UserModel
            .remove({_id: userId});
    }

    function findUserByCredentials(username, password) {
        console.log("-------------findUserByCredentials------------------")
        return UserModel.findOne({
            username: username,
            password: password
        })
    }

    function updateUser(userId, user) {
        return UserModel
            .update(
                {
                    _id:userId
                },
                {
                    firstname:user.firstname,
                    lastname: user.lastname,
                    email: user.email
                }
            );
    }

    function findUserById(userId) {
        return UserModel.findOne({_id: userId});
    }

    function createrUser(user) {
        return UserModel.create(user);
    }

    function getAllUser() {
        return UserModel.find();
    }

    function findUserByFacebookId(facebookId) {
        return UserModel.findOne({'facebook.id': facebookId});

    }
};