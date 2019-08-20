const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const UsersRouter = require('./users/users-router')
const session = require('express-session')

const server = express()

const sessionOptions = {
    name: 'testSession',
    secret: process.env.COOKIE_SECRET || 'secret key fun',
    cookie: {
        secure: process.env.COOKIE_SECURE || false,
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: true,
    
}

server.use(helmet())
server.use(express.json())
server.use(cors())
server.use(session(sessionOptions))


server.use('/', UsersRouter)

server.get('/', (req,res) => {
    res.status(200).json({ message: 'You are connected', session: req.session})
})


module.exports = server