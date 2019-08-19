
const mongoose = require('./connection.js')
var Types = require('mongoose-easy-types').Types;
var uniqueValidator = require('mongoose-unique-validator');


const UserSchema = new mongoose.Schema({
  displayName: String,
  email: {
    type: String,
    unique: true
  },
  externalUrls: Types.helpers.shuffle(),
  country: String,
  id: String,
  type: String
})

UserSchema.plugin(uniqueValidator);

const UserCollection = mongoose.model('User', UserSchema)

function checkUser(userEmail) {
  return UserCollection.findOne({ email: userEmail})
}

function getAllUsers() {
  return UserCollection.find()
}

function getUser(userId) {
  return UserCollection.findById(userId)
}

function addNewUser(userObject) {
  return UserCollection.create(userObject)
}

function updateUser(userId, updatedUser) {
  return UserCollection.findByIdAndUpdate(userId, updatedUser, {new: true})
}

function deleteUser(userId) {
  return UserCollection.findByIdAndDelete(userId)
}

function deleteAllUsers() {
  return UserCollection.deleteMany()
}

function addUsers(users) {
  return UserCollection.create(users)
}



module.exports = {
  getAllUsers,
  checkUser,
  getUser,
  addNewUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
  addUsers
}
