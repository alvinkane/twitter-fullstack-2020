const userController = {
  signinPage: (req, res) => {
    res.render('signin')
  },
  signin: (req, res, next) => {
    req.flash('success_messages', '成功登入!')
    res.redirect('/')
  }
}

module.exports = userController
