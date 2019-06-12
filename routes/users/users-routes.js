const router = require('express').Router();

const Users = require('./users-model.js');

// at /api/users
// will return users
router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json({ Users })
        })
        .catch(err => {
            res.status(500).json({error: err, message: 'There was a problem retrieving users' })
        })
});

module.exports = router;