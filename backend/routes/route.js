const express = require('express')
const router = express.Router()
const {postSignup , postLogin, logout} =  require('../controllers/authController')
const {signupValidation, loginValidation } =  require('../middlewares/authValidation')
const {authMiddleware } =  require('../middlewares/jwtMiddleware')

router.post('/signup', signupValidation, postSignup)
router.post('/login', loginValidation, postLogin)
router.get('/home',  authMiddleware ,(req, res)=> {
    res.status(200).json({message: 'success', user: req.user})
} )
router.get('/logout', authMiddleware, logout)


module.exports = router