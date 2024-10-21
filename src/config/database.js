// Paso 3: Configuración de la base de datos (src/config/database.js)
const mysql = require('mysql2/promise');
require('dotenv').config();

// Crear un pool de conexiones a la base de datos MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;