const { Router } = require('express');
const { registerUser, loginUser } = require('../controllers/usersController');
const router = Router();

// ('path', function);
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;