
const mongoose = require('./connection.js')


const CommentSchema = new mongoose.Schema({
 comment: String,
 author: String,
 createdAt: {
    type: Date,
    default: Date.now
  },
 barChartId: mongoose.Types.ObjectId
})


const CommentCollection = mongoose.model('Comment', CommentSchema)

function getAllComments() {
  CommentCollection.find()
}

function getCommentsByBarChartId(barChartId) {
  return CommentCollection.find({barChartId: barChartId})
}

function getComment(commentId) {
  return CommentCollection.findById(commentId)
}

function addNewComment(commentObject) {
  return CommentCollection.create(commentObject)
}

function updateComment(commentId, commentObject) {
  return CommentCollection.findByIdAndUpdate(commentId, commentObject, {new: true})
}

function deleteComment(commentId) {
  return CommentCollection.findByIdAndDelete(commentId)
}

function deleteAllComments() {
  return CommentCollection.deleteMany()
}

function addComments(comments) {
  return CommentCollection.create(comments)
}


module.exports = {
  getAllComments,
  getCommentsByBarChartId,
  getComment,
  addNewComment,
  updateComment,
  deleteComment,
  deleteAllComments,
  addComments
}
