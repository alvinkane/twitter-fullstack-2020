const express = require('express')
const router = express.Router()

const userController = require('../controllers/user-controller')

router.get('/users/:id/tweets', userController.getUserTweets)
router.get('/users/:id/followings', userController.getUserFollows)
router.get('/users/:id/followers', userController.getUserFollows)
router.get('/users/:id', userController.editUser)

router.get('/', (req, res) => res.render('index'))

module.exports = router
