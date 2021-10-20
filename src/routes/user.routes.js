const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controllers');

// Retrieve all users
router.get('/', userController.findAll);
const app = express()
//get token
app.post('/token', (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(401)
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        const accessToken = userController.generateAccessToken({ name: user.name })
        res.json({ accessToken: accessToken })
    })
})

// Autheticate and generate token
router.post('/logint', userController.authnewtoken);

// Create a new user
router.post('/', userController.create);

// Authenticate a user with token
// router.get('/auth', userController.authenticateToken, userController.authtoken);
router.get('/auth', userController.authenticateToken, userController.authtoken);

//Admin access
router.get('/admin', userController.authenticateToken, userController.admin);

// Delete a user with id
router.delete('/:username', userController.delete);

module.exports = router

