const express = require('express')

const Users = require('./users-model')

const router = express.Router()

const bcrypt = require('bcryptjs')


router.get('/', (req, res) => {
    res.send('You are connected')
})

router.post('/register', (req, res) => {
    let user = req.body

    const hash = bcrypt.hashSync(user.password)
    user.password = hash

    Users.addUser(user)
        .then(addedUser => {
            res.status(201).json(addedUser)
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to add user'})
        })
})

router.post('/login', (req, res) => {
    let { username, password } = req.body

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                res.status(200).json({ message: `Welcome ${user.username}!`})
            } else {
                res.status(401).json({ message: 'Invalid credentials'})
            }
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to login'})
        })
})

router.get('/users', (req, res) => {
    Users.find()
        .then(users => {
            res.json(users)
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to fetch users'})
        })
})

module.exports = router