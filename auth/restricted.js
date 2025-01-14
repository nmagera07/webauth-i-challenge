const bcrypt = require('bcryptjs')

const Users = require('../users/users-model.js')

module.exports = {
    restricted,
    restrictedTwo,
}

function restricted(req, res, next) {
    let { username, password } = req.headers

    if (username && password) {
        Users.findBy({ username })
            .first()
            .then(user => {
                if (user && bcrypt.compareSync(password, user.password)) {
                    next()
                } else {
                    res.status(401).json({ message: 'You shall not pass!!'})
                }
            })
            .catch(error => {
                res.status(500).json({ message: 'Failed to fetch users'})
            }) 
    }
}

function restrictedTwo(req, res, next) {
  if (req.session && req.session.loggedIn) {
    next();
  } else {
    res.status(401).json({ message: 'you shall not pass!' });
  }
};