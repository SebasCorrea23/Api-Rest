// models/userModel.js
const pool = require('../config/database');

const User = {
  findById: async (id) => {
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  },
  create: async (userData) => {
    const [result] = await pool.query('INSERT INTO users SET ?', userData);
    return result.insertId;
  },
  findByEmail: async (email) => {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
  }
};

module.exports = User;
