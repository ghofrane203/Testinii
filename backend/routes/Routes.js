//routes/routes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


// Route d'inscription
router.post('/register', authController.register);

// Route pour la connexion des utilisateurs
router.post('/login', authController.login);


module.exports = router;
