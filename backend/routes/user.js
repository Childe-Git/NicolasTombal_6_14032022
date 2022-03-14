const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

const rateLimit = require('express-rate-limit');

const limiter = rateLimit ({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limite chaque IP à 100 requêtes (pendant 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

router.post('/signup', userCtrl.signup);
router.post('/login', limiter, userCtrl.login);

// Exportation du router des utilisateurs 
module.exports = router