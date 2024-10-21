// routes/userRoutes.js
const express = require('express');
const { register, login } = require('../controllers/usercontroller');
const authMiddleware = require('../middleware/authmiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
// Puedes agregar rutas protegidas usando el middleware aquí
// router.get('/protected', authMiddleware, (req, res) => res.json({ message: 'Acceso concedido' }));

module.exports = router;
