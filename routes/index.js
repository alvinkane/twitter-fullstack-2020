const express = require('express')
const router = express.Router()
const passport = require('../config/passport')

const adminController = require('../controllers/admin-controller')
const followshipController = require('../controllers/followship-controller')
const profileController = require('../controllers/profile-controller')
const userController = require('../controllers/user-controller')
const tweetsController = require('../controllers/tweets-controller')

const { authenticated, adminAuthenticated } = require('../middleware/auth')

router.get('/signin', userController.signinPage)
router.post(
  '/signin',
  passport.authenticate('local', {
    failureRedirect: '/signin',
    failureFlash: true
  }),
  userController.signin
)

router.get('/tweets', authenticated, (req, res) => res.render('index'))

router.get('/users/:id/tweets', authenticated, profileController.getUserTweets)
router.get('/users/:id/followings', authenticated, profileController.getUserFollows)
router.get('/users/:id/followers', authenticated, profileController.getUserFollows)
router.get('/users/:id', authenticated, profileController.editUser)

router.use('/', (req, res) => res.redirect('/tweets'))

module.exports = router
