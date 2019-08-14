
const mongoose = require('./connection.js')


const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  photoUrl: String,
  emailVerified: Boolean
})


const UserCollection = mongoose.model('User', UserSchema)


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
  getUser,
  addNewUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
  addUsers
}
