const express = require('express');

const userApi = require('../models/user');

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
	userApi
		.getAllUsers()
		.then(users => {
			res.json(users);
		})
		.catch(err => {
			console.log(err);
		});
});

userRouter.put('/:userId', (req, res) => {
	userApi
		.updateUser(req.params.userId, req.body)
		.then(updatedUser => {
			res.json(updatedUser);
		})
		.catch(err => {
			console.log(err);
		});
});

userRouter.get('/:userId', (req, res) => {
	userApi
		.getUser(req.params.userId)
		.then(user => {
			res.json(user);
		})
		.catch(err => {
			console.log(err);
		});
});

userRouter.post('/', (req, res) => {
  userApi.addNewUser(req.body)
  .then(user => {
    res.json(user);
  })
    .catch(err => {
			console.log(err);
	});
});

userRouter.delete('/:userId', (req, res) => {
	userApi
		.deleteUser(req.params.userId)
		.then(user => {
			res.json(user);
		})
		.catch(err => {
			console.log(err);
		});
});

// userRouter.get('/checkUser', (req, res) => {
//   console.log(`check user - ${req.body.email} ========================================`)
//   userApi.checkUser(req.body.email)
//   .then(response => {
//     res.json(response)
//   })
//   .catch(err => {
//     console.log(err);
//   });
// })

module.exports = {
	userRouter
};
