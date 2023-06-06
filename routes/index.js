const express = require('express')
const router = express.Router()

const adminController = require('../controllers/admin-controller')
const followshipController = require('../controllers/followship-controller')
const profileController = require('../controllers/profile-controller')
const userController = require('../controllers/user-controller')
const tweetsController = require('../controllers/tweets-controller')

router.get('/signin', userController.signinPage)
router.post('/signin', userController.signin)

router.get('/tweets', (req, res) => res.render('index'))

router.get('/users/:id/tweets', profileController.getUserTweets)
router.get('/users/:id/followings', profileController.getUserFollows)
router.get('/users/:id/followers', profileController.getUserFollows)
router.get('/users/:id', profileController.editUser)

router.use('/', (req, res) => res.redirect('/tweets'))

module.exports = router
