const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const UsersRouter = require('./users/users-router')

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())
server.use('/api', UsersRouter)


module.exports = server