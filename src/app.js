const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const userRoutes = require('./routes/userroutes');
const errorMiddleware = require('./middleware/errormiddleware');
require('dotenv').config();

const app = express();

// Middleware de seguridad
app.use(helmet());

// Habilitar CORS para todas las rutas
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);

// Middleware de manejo de errores
app.use(errorMiddleware);

module.exports = app;  // Exporta la instancia de app