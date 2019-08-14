
const express = require('express')


const userApi = require('../models/user')


const userRouter = express.Router()


userRouter.get('/', (req, res) => {
  userApi.getAllUsers()
    .then((users) => {
      res.json(users)
    })
})


userRouter.put('/:userId', (req, res) => {
  userApi.updateUser(req.params.userId, req.body)
    .then((updatedUser) => {
      res.json(updatedUser)
    })
})

userRouter.get('/:userId', (req, res) => {
  userApi.getUser(req.params.userId)
    .then((user) => {
      res.json(user)
    })
})

userRouter.post('/', (req, res) => {
  userApi.addNewUser(req.body)
    .then((user) => {
      res.json(user)
    })
})

userRouter.delete('/:userId', (req, res) => {
  userApi.deleteUser(req.params.userId)
    .then((user) => {
      res.json(user)
    })
})


module.exports = {
  userRouter
}
