const express = require('express')

const commentApi = require('../models/comment')
const barChartApi = require('../models/barChart')

const commentRouter = express.Router({ mergeParams: true })

commentRouter.get('/', (req, res) => {
    const barChartId = req.params.barChartId
    commentApi.getCommentsByBarChartId(barChartId)
        .then((comments) => {
            res.json(comments)
        })
})


commentRouter.post('/', (req, res) => {
    req.body.barChartId = req.params.barChartId
    commentApi.addNewComment(req.body)
        .then((comment) => {
            res.json(comment)
        })
})

commentRouter.get('/:commentId', (req, res) => {
    commentApi.getComment(req.params.commentId)
        .then((comment) => {
            res.json(comment)
        })
})

commentRouter.put('/:commentId', (req, res) => {
    commentApi.updateComment(req.params.commentId, req.body)
        .then((updatedComment) => {
            res.json(updatedComment)
        })
})

commentRouter.delete('/:commentId', (req, res) => {
    commentApi.deleteComment(req.params.commentId)
        .then((comment) => {
            res.json(comment)
        })
})


module.exports = {
    commentRouter
}